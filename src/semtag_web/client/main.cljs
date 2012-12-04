(ns semtag-web.client.main
  (:require [crate.core :as crate]
            [clojure.string :as string]
            [jayq.core :refer [$ append bind inner] :as jq])
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
  (-> ( jayq.core/find parent "table caption")
    (inner (str "Total: " (count data))))
  (.replaceWith (jayq.core/find parent "table tbody")
    (generate-rows data))
  (jayq.core/show (jayq.core/find parent "table")))

(defn backend-request [path f]
  (jayq.core/ajax
    (str "http://localhost:3000/api" path)
    {:dataType "edn"
     :error (fn [_ _ err] (js/alert (str "Request failed with: " (pr-str err))))
     :success f
     }))

(defn mls-search [search-box text-field]
  (let [query (jayq.core/val text-field)]
    (-> (jayq.core/find search-box :h2)
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
    #(jayq.core/append $text-field (generate-datalist %)))
  (bind $text-field :keypress (return-key-pressed mls-search-box))))
