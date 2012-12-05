(ns semtag-web.client.view
  (:require [crate.core :as crate]
            [clojure.string :as string])
  (:use-macros [crate.def-macros :only [defpartial]]))

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

(defn- shorten-to [s max-length]
  (let [s-length (count s)]
    (if (> s-length max-length)
      (str (.substring s 0 (- max-length 3)) "...")
      s)))

(defn- td-url [url]
  [:td [:a {:href url} (shorten-to url 40)]])

(defn- td-tags [tags]
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

