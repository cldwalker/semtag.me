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

(defpartial generate-table [table-id data & {:as options}]
  [:table{:id table-id :class "table table-bordered table-striped"}
    [:caption (:caption options)]
    [:thead
     [:tr
      (map #(vec [:th %]) (:fields options))
      ]]
     (generate-rows data)])

(defpartial generate-rows [data]
  [:tbody
    (map
      #(vec
         [:tr
           [:td (:namespace %)]
           [:td [:a {:href (:url %)} (shorten-to (:url %) 40)]]
           [:td (:desc %)]
           [:td
            (interpose
              ", "
              (map
                (fn [tag] (vec [:a {:href (str "/tag/" tag)} tag]))
                (string/split (:tags %) #";")))]])
      data) ])

(defpartial generate-datalist [tags]
  [:datalist#tags (map #(vec [:option {:value %} ]) tags)])

(defn- update-table [parent data]
  (jq/remove ($ :#search_table))
  (jq/after (jq/find parent :h2)
            (generate-table "search_table" data
                            :fields ["Namespace" "Url" "Description" "Tags"]
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
    (backend-request (str "/mls?query=" query) (partial update-table search-box))))

(defn ^:export tag-show []
  (let [$tag-box ($ :#tag_box)
        uri (.toString window.location ())
        tag (re-find #"[^\/]+$" uri)]
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
