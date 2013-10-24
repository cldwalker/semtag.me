(ns semtag-web.rendering.partials
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

(defn- abbreviate-url [url]
  (-> url
    (string/replace-first #"^https?://(www\.)?" "")
    (string/replace-first #"/$" "")))

(defn path-to
  "Concats string currently. Should construct paths based on routes and properly encode queries."
  [& args]
  (apply str args))

;;; link fns
(defn- link-thing
  ([unique-id] (link-thing unique-id unique-id))
  ([unique-id text] (link-thing unique-id text {}))
  ([unique-id text attr]
    [:a (merge {:href (path-to "#/thing/" unique-id)} attr) text]))

(defn- link-tagged [tag]
  [:a {:href (path-to "#/search?query=" tag)} (str "Tagged with " tag)])

;;; td formatters
(defn- td-url [url]
  [:td.editable {:data-field "url" :title url}
    [:a {:href url} (shorten-to (if url (abbreviate-url url) url) 40)]])

(defn- td-name
  ([s] (td-name s nil))
  ([s id]
    [:td.editable {:data-field "name" :title s}
     (if (seq s) (link-thing s)
       (if id (link-thing id "nil" {:class "noname" :title "This thing has no name. Feel free to give it one."}) s))]))

(defn- td-desc
  ([desc] (td-desc desc 70))
  ([desc max-length]
  [:td.ellipsis.editable {:title desc :data-field "desc"} (shorten-to desc max-length)]))

(defn- td-tags [tags]
  [:td.editable {:title (string/join ", " tags) :data-field "tags"}
    (interpose ", " (map link-thing tags))])

(defn- td-type [type]
   [:td.editable {:title type :data-field "type"}
     [:a {:href (path-to "#/type/" type)} type]])

(defn- td-timestamp [datetime]
  [:td.timestamp {:title (if datetime (.toISOString datetime) "")}
   (when datetime (str (.toLocaleDateString datetime)))])

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
                  (map field-to-header fields))
        header-attributes (or (:header-attributes options) (repeat (count headers) {}))]
  [:table{:id table-id :class "table table-bordered table-striped"}
    [:caption (:caption options)]
    [:thead
     [:tr
      (map #(vector :th %1 %2)
           header-attributes
           headers)
      ]]
   (generate-rows data options)]))

(defpartial table-stats [& stats]
  [:h4#table_stats
   (map 
    (fn [stat] [:div.ellipsis {:title stat} stat])
    stats)])

(defpartial tag-search-row [row & fields]
  [:tr {:data-id (:id row)}
   (td-type (:type row))
   (td-name (:name row) (:id row))
   (td-url (:url row))
   (td-desc (:desc row))
   (td-tags (:tags row))])

(defpartial tag-stats-row [row & fields]
  [:tr
   [:td (let [[nsp tag] (string/split (:tag row) #"=")] (link-thing tag))]
   [:td (:count row)]
   [:td (:desc row)]])

(defpartial type-stats-row [row & fields]
  [:tr
   (td-type (name (:name row)))
   [:td (:count row)]
   [:td (:name-percent row)]
   [:td (:url-percent row)]
   ])

(defpartial type-row [row & fields]
  [:tr {:data-id (:id row)}
   (td-name (:name row) (:id row))
   (td-url (:url row))
   (td-desc (:desc row))
   (td-tags (:tags row))
   (td-timestamp (:created-at row))])

(defpartial all-row [row & fields]
  [:tr {:data-id (:id row)}
   (td-type (:type row))
   (td-name (:name row) (:id row))
   (td-url (:url row))
   (td-tags (:tags row))
   (td-timestamp (:created-at row))])

(defpartial thing-row [row & fields]
  (let [attr (:attribute row)]
    [:tr {:data-id (:id row)}
     [:td attr]
     (case attr
       :type (td-type (:value row))
       :url (td-url (:value row))
       :name (td-name (:value row))
       :tags (td-tags (:value row))
       :tagged [:td (link-tagged (:value row))]
       :desc (td-desc (:value row) 1000)
       :created-at (td-timestamp (:value row))
       :updated-at (td-timestamp (:value row))
       :actions [:td.delete [:a {:href "#"} "Delete"]]
       [:td (str (:value row))])
     ]))

(defpartial generate-datalist [tags]
  [:datalist#tags (map #(vec [:option {:value %} ]) tags)])

(defpartial alert [msg alert-class]
  [:div {:class (str "alert " alert-class)}
   [:button.close {:type "button" :data-dismiss "alert"} "x"]
   msg])
