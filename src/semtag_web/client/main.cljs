(ns semtag-web.client.main
  (:require [crate.core :as crate]
            [clojure.string :as string]
            [jayq.core :refer [$ bind inner] :as jq])
  (:use-macros [crate.def-macros :only [defpartial]]))

(def enter-key 13)

(defn- key-pressed 
  "If keypressed = keycode then call func"
  [key-code func event]
    (when  (=  (.-keyCode event) key-code)
      (func)))

(defn return-key-pressed [f]
  (partial key-pressed enter-key f))

(defn- shorten-to [s max-length]
  (let [s-length (count s)]
    (if (> s-length max-length)
      (str (.substring s 0 (- max-length 3)) "...")
      s)))

(defn- field-to-header [field]
  (-> field name (string/replace "-" " ") string/capitalize))

(defpartial generate-table [table-id data & {:keys [fields] :as options}]
  (let [headers (or
                  (:headers options)
                  (map field-to-header fields))]
  [:table{:id table-id :class "table table-bordered table-striped"}
    [:caption (:caption options)]
    [:thead
     [:tr
      (map #(vec [:th %]) headers)
      ]]
     (generate-rows data options)]))

(defn td-url [url]
  [:td [:a {:href url} (shorten-to url 40)]])

(defn td-tags [tags]
  [:td
  (interpose
    ", "
    (map
      (fn [tag] (vec [:a {:href (str "/tag/" tag)} tag]))
      (string/split tags #";")))])

(defpartial tag-search-row [row & fields]
  [:tr
   [:td [:a {:href (str "/" (:namespace row))} (:namespace row)]]
   (td-url (:url row))
   [:td (:desc row)]
   (td-tags (:tags row))])

(defpartial model-row [row & fields]
  [:tr
   [:td (:name row)]
   (td-url (:url row))
   [:td (:desc row)]
   (td-tags (:tags row))])

(defpartial default-row [row fields]
  [:tr
    (map #(vec [:td (% row)]) fields)
   ])

(defpartial generate-rows [data {:keys [fields row-partial] :or {row-partial default-row}}]
  [:tbody
    (map
      #(row-partial % fields)
      data)])

(defpartial generate-datalist [tags]
  [:datalist#tags (map #(vec [:option {:value %} ]) tags)])

(defn- create-search-table [parent data]
  (jq/remove ($ :#search_table))
  (jq/after (jq/find parent :h2)
            (generate-table "search_table" data
                            :fields [:namespace :url :desc :tags]
                            :row-partial tag-search-row
                            :caption (str "Total: " (count data)))))

(defn backend-request [path f]
  (jq/ajax
    (str "http://localhost:3000/api" path)
    {:dataType "edn"
     :error (fn [_ _ err] (js/alert (str "Request failed with: " (pr-str err))))
     :success f
     }))

(defn mls-search [search-box text-field]
  (let [query (jq/val text-field)]
    (-> (jq/find search-box :h2)
      (inner (str "Search results for '" query "'"))) 
    (backend-request (str "/mls?query=" query) (partial create-search-table search-box))))

(defn- match-from-current-uri [regex]
  (re-find regex (.toString window.location ())))

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
    #(jq/after $text-field (generate-datalist %)))
  (bind $text-field :keypress (return-key-pressed mls-search-box))))

(defn ^:export model-show []
  (let [model (match-from-current-uri #"[^\/]+$")]
    (backend-request (str "/model?model=" model)
      #(inner ($ :#model_show_box)
              (generate-table "model_show_table" %
                              :row-partial model-row
                              :caption (str "Total: " (count %))
                              :fields [:name :url :desc :tags])))))

(defn ^:export model-list []
  (backend-request "/models"
    #(inner ($ :#model_box)
            (generate-table "model_table" %
                            :fields [:name :count :name-percent :url-percent]))))
