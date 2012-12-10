(ns semtag-web.client.main
  (:require [semtag-web.client.view :refer [generate-table] :as view]
            [jayq.core :refer [$ bind inner] :as jq]))

;;; util fns
(def enter-key 13)

(defn- key-pressed 
  "If keypressed = keycode then call func"
  [key-code func event]
    (when  (=  (.-keyCode event) key-code)
      (func)))

(defn- return-key-pressed [f]
  (partial key-pressed enter-key f))

(defn- current-uri []
  (.toString window.location ()))

(defn- match-from-current-uri [regex]
  (re-find regex (current-uri)))

(defn- error-msg [path err]
  (format "Request '%s' failed with: %s" path (pr-str err)))

(defn- console-error [path _ _ err]
  (.log js/console (error-msg path err)))

(defn- alert-error [path _ _ err]
  (jq/prepend ($ :#main) (view/alert (error-msg path err))))

(defn backend-request
  ([path f] (backend-request path f alert-error))
  ([path f alert-fn] 
  (jq/ajax
    (str "http://localhost:3000/api" path)
    {:dataType "edn"
     :error #(alert-fn path %&)
     :success f
     })))

;;; js update fns
(defn- add-sort-to [parent-div]
  (.tablesorter (jq/find parent-div :table)))

(defn- create-sort-table [& args]
  (apply inner args)
  (add-sort-to (first args)))

(defn- create-search-table [parent data]
  (jq/remove ($ :#search_table))
  (jq/after (jq/find parent :h2)
            (generate-table "search_table" data
                            :fields [:namespace :url :desc :tags]
                            :row-partial view/tag-search-row
                            :caption (str "Total: " (count data))))
  (add-sort-to parent))

(defn mls-search
  [search-box text-field & [callback]]
  (let [query (jq/val text-field)]
    (-> (jq/find search-box :h2)
      (inner (str "Search results for '" query "'"))) 
    (backend-request (str "/mls?query=" query) (partial create-search-table search-box))
    (when callback (callback query))))

;;; on-load js fns for specific pages
(defn ^:export tag-show []
  (let [$tag-box ($ :#tag_box)
        tag (match-from-current-uri #"[^\/]+$")]
    (backend-request (str "/tag?tag=" tag)
      (fn [data]
        (if (string? data)
          (jq/prepend ($ :#main) (view/alert data))
          (create-sort-table $tag-box
                 (generate-table "tag_show_table" data
                                 :row-partial view/tag-row
                                 :fields [:attribute :value]))
          )))))

(defn ^:export tag-stats []
  (backend-request (str "/tag-stats")
    #(create-sort-table ($ :#tag_stats_box)
            (generate-table "tag_stats_table" %
                            :row-partial view/tag-stats-row
                            :caption (str "Total: " (count %))
                            :fields [:tag :count :desc]))))

(defn ^:export home []
  (let [$button ($ :#url_search_button)
        $text-field ($ :#url_search_text)
        search-and-update-page (partial mls-search ($ :#search_box) $text-field)
        search-and-update-page-and-url (partial search-and-update-page
                                                #(.pushState window.history "" "" (str "/?query=" %))) 
        query-param (re-find #"[\?&]?query=([^&]+)" (.-search window.location))]

    (bind $button "click" search-and-update-page-and-url)
    (backend-request "/tags"
      #(jq/after $text-field (view/generate-datalist %))
      console-error)
    (bind $text-field :keypress (return-key-pressed search-and-update-page-and-url))

    (when-let [query (when (seq query-param) (second query-param))]
      (jq/val $text-field query)
      (search-and-update-page))))

(defn ^:export model-show []
  (let [model (match-from-current-uri #"[^\/]+$")]
    (backend-request (str "/model?model=" model)
      #(create-sort-table ($ :#model_show_box)
              (generate-table "model_show_table" %
                              :row-partial view/model-row
                              :caption (str "Total: " (count %))
                              :fields [:name :url :desc :tags])))))

(defn ^:export model-list []
  (backend-request "/models"
    #(create-sort-table ($ :#model_box)
            (generate-table "model_table" %
                            :row-partial view/models-row
                            :fields [:name :count :name-percent :url-percent]))))
