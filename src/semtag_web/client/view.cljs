(ns semtag-web.client.view
  (:require [crate.core :as crate]
            [clojure.string :as string])
  (:use-macros [crate.def-macros :only [defpartial]]))

;;; util fns
(defn- field-to-header [field]
  (-> field name (string/replace "-" " ") string/capitalize))

(defn- shorten-to [s max-length]
  (let [s-length (count s)]
    (if (> s-length max-length)
      (str (.substring s 0 (- max-length 3)) "...")
      s)))

(defn path-to
  "Concats string currently. Should construct paths based on routes and properly encode queries."
  [& args]
  (apply str args))

;;; link fns
(defn- link-tag [tag]
  [:a {:href (path-to "/tag/" tag)} tag])

(defn- link-tagged [tag]
  [:a {:href (path-to "/?query=" tag)} (str "Tagged with " tag)])

;;; td formatters
(defn- td-url [url]
  [:td.editable {:data-field "url" :title url} [:a {:href url} (shorten-to url 40)]])

(defn- td-name [s]
  [:td.editable {:data-field "name" :title s} (if (seq s) (link-tag s) s)])

(defn- td-desc
  ([desc] (td-desc desc 70))
  ([desc max-length]
  [:td.ellipsis.editable {:title desc :data-field "desc"} (shorten-to desc max-length)]))

(defn- td-tags [tags]
  [:td (interpose ", " (map link-tag tags))])

(defn- td-model [model]
   [:td [:a {:href (path-to "/" model)} model]]) 

;;; partials
(defpartial default-row [row fields]
  [:tr
    (map #(vec [:td (% row)]) fields)
   ])

(defpartial generate-rows [data {:keys [fields row-partial] :or {row-partial default-row}}]
  [:tbody
    (map
      #(row-partial % fields)
      data)])

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

(defpartial tag-search-row [row & fields]
  [:tr {:data-id (:id row)}
   (td-model (:namespace row))
   (td-url (:url row))
   (td-desc (:desc row))
   (td-tags (:tags row))])

(defpartial tag-stats-row [row & fields]
  [:tr
   [:td (let [[nsp tag] (string/split (:tag row) #"=")] (link-tag tag))]
   [:td (:count row)]
   [:td (:desc row)]])

(defpartial model-stats-row [row & fields]
  [:tr
   (td-model (name (:name row)))
   [:td (:count row)]
   [:td (:name-percent row)]
   [:td (:url-percent row)]
   ])

(defpartial model-row [row & fields]
  [:tr {:data-id (:id row)}
   (td-name (:name row))
   (td-url (:url row))
   (td-desc (:desc row))
   (td-tags (:tags row))])

(defpartial tag-row [row & fields]
  (let [attr (:attribute row)]
    [:tr {:data-id (:id row)}
     [:td attr]
     (case attr
       :namespace (td-model (:value row))
       :url (td-url (:value row))
       :name (td-name (:value row))
       :tags (td-tags (:value row))
       :tagged [:td (link-tagged (:value row))]
       :desc (td-desc (:value row) 1000)
       [:td (str (:value row))])
     ]))

(defpartial generate-datalist [tags]
  [:datalist#tags (map #(vec [:option {:value %} ]) tags)])

(defpartial alert [msg]
  [:div.alert.alert-error
   [:button.close {:type "button" :data-dismiss "alert"} "x"]
   msg])
