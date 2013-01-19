(ns semtag-web.client.main
  (:require [semtag-web.client.view :refer [generate-table path-to] :as view]
            [semtag-web.client.util :refer [log log-clj return-key-pressed] :as util]
            clojure.string
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
  "Given a path and success fn makes a request using $.ajax. Additional arguments are
  interpreted as options to $.ajax. Also accepts a :alert-fn option to create a
  specialized error fn."
  [path f & {:keys [type alert-fn] :or {type "GET" alert-fn alert-error} :as options}]
  (jq/ajax
    (str "http://localhost:3000/api" path)
    (merge
      {:dataType "edn"
       :error #(apply alert-fn path %&)
       :type type
       :success f
       } options)))

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
      (path-to "/edit")
      (fn [data]
        (log "Received from server:")
        (log-clj data)
        (set-edit-state "edit-completed" event))
      :type "POST"
      :data {:id id field value}
      :alert-fn (fn [& args]
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
                            :fields [:type :name :url :desc :tags]
                            :row-partial view/tag-search-row
                            :caption (str "Total: " (count data))))

  (make-table-editable)
  (add-sort-to parent))

(defn home-search
  [search-box text-field & [callback event]]
  (let [query (jq/val text-field)
        search-type (jq/val ($ "input[name=search_type]:checked"))]
    (-> (jq/find search-box :h2)
      (inner (str "Search results for '" query "'"))) 
    (.blur text-field)
    (backend-request
      (path-to "/search")
      (partial create-search-table search-box)
      :data {:query query :search_type search-type})
    (when callback (callback query search-type))))

(defn create-url [$text $button]
  (backend-request (path-to "/add")
    (fn [data]
      (alert (format "Added '%s'" (jq/val $text)) :info)
      (jq/text $button "Add Url")
      (jq/val $text "")
      (jq/hide $text))
    :type "POST"
    :data {:input (jq/val $text)}))

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
    (backend-request (path-to "/thing")
      (fn [data]
        (if (string? data)
          (alert data)
          (do
            (create-sort-table $tag-box
                   (generate-table "tag_show_table"
                                   data
                                   :caption (if (re-find #"^[0-9]+$" tag) "" (view/link-tagged tag)) 
                                   :row-partial view/tag-row
                                   :fields [:attribute :value])) 
            (.timeago ($ :td.timestamp))
            (make-table-editable))
          ))
       :data {:id tag})))

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
        search-and-update-page (partial home-search ($ :#search_box) $text-field)
        search-and-update-page-and-url (partial search-and-update-page
                                                #(.pushState window.history "" ""
                                                             (path-to "/?query=" %1 "&search_type=" %2)))]

    (bind $button "click" search-and-update-page-and-url)
    (bind $add-button "click" create-url)
    (bind $add-text :keypress (return-key-pressed create-url))
    (bind $text-field :keypress (return-key-pressed search-and-update-page-and-url))

    (backend-request (path-to "/tags")
      #(jq/after $text-field (view/generate-datalist %))
      :alert-fn console-error)

    (when-let [query (util/param-value "query")]
      (jq/val $text-field query)
      (search-and-update-page))
    (when-let [search-type (util/param-value "search_type")]
      (jq/attr
        ($ (str "input[value=" search-type "]")) 
        :checked 
        true))))

(defn ^:export entity-add []
  (home)
  (.click ($ :#add_url_button))
  (if-let [input (util/param-value "input")]
    ; TODO: remove hacks when not using cmd service that overrides ':' and ';'
    (let [input (-> (clojure.string/replace input #"\.\." ":"))
          input (-> (clojure.string/replace input #",," ";"))]
      (.text ($ :#add_url_text) (.decodeURI js/window input))
      (.click ($ :#add_url_button)))
    (alert "No input given.")))

(defn ^:export model-show []
  (let [model (util/match-from-current-uri #"[^\/]+$")]
    (backend-request (path-to "/type")
      (fn [data]
        (create-sort-table ($ :#model_show_box)
              (generate-table "model_show_table" data
                              :row-partial view/model-row
                              :caption (str "Total: " (count data))
                              :fields [:name :url :desc :tags]))
        (make-table-editable))
      :data {:name model})))

(defn ^:export model-stats []
  (backend-request (path-to "/types")
    #(create-sort-table ($ :#model_stats_box)
            (generate-table "model_stats_table" (:results %) 
                            :caption (format "%s things, %s tags" (get-in % [:counts :thing]) (get-in % [:counts :tags]))
                            :row-partial view/model-stats-row
                            :fields [:name :count :name-percent :url-percent]))))
