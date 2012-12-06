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

(defn- match-from-current-uri [regex]
  (re-find regex (.toString window.location ())))

(defn backend-request [path f]
  (jq/ajax
    (str "http://localhost:3000/api" path)
    {:dataType "edn"
     :error (fn [_ _ err] (js/alert (str "Request failed with: " (pr-str err))))
     :success f
     }))

;;; js update fns
(defn- create-search-table [parent data]
  (jq/remove ($ :#search_table))
  (jq/after (jq/find parent :h2)
            (generate-table "search_table" data
                            :fields [:namespace :url :desc :tags]
                            :row-partial view/tag-search-row
                            :caption (str "Total: " (count data)))))

(defn mls-search [search-box text-field]
  (let [query (jq/val text-field)]
    (-> (jq/find search-box :h2)
      (inner (str "Search results for '" query "'"))) 
    (backend-request (str "/mls?query=" query) (partial create-search-table search-box))))

;;; on-load js fns for specific pages
(defn ^:export tag-show []
  (let [$tag-box ($ :#tag_box)
        tag (match-from-current-uri #"[^\/]+$")]
    (backend-request (str "/tag?tag=" tag)
      (fn [data] (inner $tag-box (pr-str data))))))

(defn ^:export home []
  (let [$button ($ :#url_search_button)
        $text-field ($ :#url_search_text)
        mls-search-box (partial mls-search ($ :#search_box) $text-field)]
  (bind $button "click" mls-search-box)
  (backend-request "/tags"
    #(jq/after $text-field (view/generate-datalist %)))
  (bind $text-field :keypress (return-key-pressed mls-search-box))))

(defn ^:export model-show []
  (let [model (match-from-current-uri #"[^\/]+$")]
    (backend-request (str "/model?model=" model)
      #(inner ($ :#model_show_box)
              (generate-table "model_show_table" %
                              :row-partial view/model-row
                              :caption (str "Total: " (count %))
                              :fields [:name :url :desc :tags])))))

(defn ^:export model-list []
  (backend-request "/models"
    #(inner ($ :#model_box)
            (generate-table "model_table" %
                            :row-partial view/models-row
                            :fields [:name :count :name-percent :url-percent]))))
