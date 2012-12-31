(ns semtag-web.client.main
  (:require [semtag-web.client.view :refer [generate-table path-to] :as view]
            [semtag-web.client.util :refer [log log-clj return-key-pressed] :as util]
            [jayq.core :refer [$ bind inner] :as jq]))

;; possible util fns
(defn- error-msg [path err]
  (format "Request '%s' failed with: %s" path (pr-str err)))

(defn- console-error [path _ _ err]
  (.log js/console (error-msg path err)))

(defn- alert
  ([msg] (alert msg :error))
  ([msg alert-type]
    (jq/prepend ($ :#main) (view/alert msg (str "alert-" (name alert-type))))))

(defn- alert-error [path a b err]
  (let [msg (or (.-responseText a) err)]
    (alert (error-msg path msg))))

(defn backend-request
  ([path f] (backend-request path f alert-error))
  ([path f alert-fn]
  (jq/ajax
    (str "http://localhost:3000/api" path)
    {:dataType "edn"
     :error #(apply alert-fn path %&)
     :success f
     })))

;;; js update fns
(defn- add-sort-to [parent-div]
  (.tablesorter (jq/find parent-div :table)))

(defn- create-sort-table [& args]
  (apply inner args)
  (add-sort-to (first args)))

(defn- set-edit-state [klass event]
  (let [$elem ($ (.-target event))]
    (doseq [c (->> (jq/attr $elem :class) (re-seq #"\S+") (filter #(re-find #"^edit-" %)))]
      (jq/remove-class $elem c))
    (jq/add-class $elem klass)))

(defn- saves-edit [event]
  (.preventDefault event)
  (let [$elem ($ (.-target event))
        id (.data (jq/parent $elem) "id")
        field (.data $elem "field")
        value (jq/text $elem)]
    (.blur $elem)
    (backend-request
      (path-to "/edit?id=" id "&" field "=" value)
      (fn [data]
        (log "Received from server:")
        (log-clj data)
        (set-edit-state "edit-completed" event))
      (fn [& args]
        (set-edit-state "edit-failed" event)
        (apply alert-error args)
        ))))

(defn- expand-editable-text [event]
  (let [$elem ($ (.-target event))]
    (jq/remove-class $elem "ellipsis")
    ;; quick and dirty way - cleaner way would be to track editing state
    ;; this check ensures we don't clobber that the user has come back to finish edit
    (when (re-find #"\.\.\.$" (jq/text $elem))
      (inner $elem (jq/attr $elem "title")))))

(defn- make-table-editable []
  (let [editable-cells ($ :td.editable)]
    (.attr editable-cells "contentEditable" true)
    (.attr (jq/find editable-cells "a") "contentEditable" false)
    (bind editable-cells "click" (juxt expand-editable-text (partial set-edit-state "edit-in-progress")))
    (bind editable-cells :keypress (return-key-pressed saves-edit))))

(defn- create-search-table [parent data]
  (jq/remove ($ :#search_table))
  (jq/after (jq/find parent :h2)
            (generate-table "search_table" data
                            :fields [:namespace :name :url :desc :tags]
                            :row-partial view/tag-search-row
                            :caption (str "Total: " (count data))))

  (make-table-editable)
  (add-sort-to parent))

(defn mls-search
  [search-box text-field & [callback event]]
  (let [query (jq/val text-field)]
    (-> (jq/find search-box :h2)
      (inner (str "Search results for '" query "'"))) 
    (.blur text-field)
    (backend-request (path-to "/mls?query=" query) (partial create-search-table search-box))
    (when callback (callback query))))

(defn create-url [$text $button]
  (backend-request (path-to "/add?input=" (jq/val $text))
    (fn [data]
      (alert (format "Added '%s'" (jq/val $text)) :info)
      (jq/text $button "Add Url")
      (jq/val $text "")
      (jq/hide $text))))

(defn add-url [$text $button event]
  (if (jq/is $text ":visible")
    (create-url $text $button)
    (do
      (jq/text $button "Create Url")
      (jq/show $text))))

;;; on-load js fns for specific pages
(defn ^:export tag-show []
  (let [$tag-box ($ :#tag_box)
        tag (util/match-from-current-uri #"[^\/]+$")]
    (backend-request (path-to "/tag?tag=" tag)
      (fn [data]
        (if (string? data)
          (alert data)
          (do
            (create-sort-table $tag-box
                   (generate-table "tag_show_table"
                                   data
                                   :caption (view/link-tagged tag)
                                   :row-partial view/tag-row
                                   :fields [:attribute :value])) 
            (make-table-editable))
          )))))

(defn ^:export tag-stats []
  (backend-request (path-to "/tag-stats")
    #(create-sort-table ($ :#tag_stats_box)
            (generate-table "tag_stats_table" %
                            :row-partial view/tag-stats-row
                            :caption (str "Total: " (count %))
                            :fields [:tag :count :desc]))))

(defn ^:export home []
  (let [$button ($ :#url_search_button)
        $text-field ($ :#url_search_text)
        $add-button ($ :#add_url_button)
        $add-text ($ :#add_url_text)
        create-url (partial add-url $add-text $add-button)
        search-and-update-page (partial mls-search ($ :#search_box) $text-field)
        search-and-update-page-and-url (partial search-and-update-page
                                                #(.pushState window.history "" "" (path-to "/?query=" %))) 
        query-param (re-find #"[\?&]?query=([^&]+)" (.-search window.location))]

    (bind $button "click" search-and-update-page-and-url)
    (bind $add-button "click" create-url)
    (bind $add-text :keypress (return-key-pressed create-url))
    (bind $text-field :keypress (return-key-pressed search-and-update-page-and-url))

    (backend-request (path-to "/tags")
      #(jq/after $text-field (view/generate-datalist %))
      console-error)

    (when-let [query (when (seq query-param) (second query-param))]
      (jq/val $text-field query)
      (search-and-update-page))))

(defn ^:export model-show []
  (let [model (util/match-from-current-uri #"[^\/]+$")]
    (backend-request (path-to "/model?model=" model)
      (fn [data]
        (create-sort-table ($ :#model_show_box)
              (generate-table "model_show_table" data
                              :row-partial view/model-row
                              :caption (str "Total: " (count data))
                              :fields [:name :url :desc :tags]))
        (make-table-editable)))))

(defn ^:export model-stats []
  (backend-request (path-to "/models")
    #(create-sort-table ($ :#model_stats_box)
            (generate-table "model_stats_table" %
                            :row-partial view/model-stats-row
                            :fields [:name :count :name-percent :url-percent]))))
