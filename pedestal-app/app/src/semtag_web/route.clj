(ns ^:shared semtag-web.route
  (:require [clojure.string :as string]))

(def routes "Maps screens to relative paths"
  {:types "#/types"
   :tag-stats "#/tag-stats"
   :all "#/all"
   :home "#/"})

(def dynamic-routes
  {:search "#/search"})

(def dynamic-screens "Maps screen ids to their url params"
  (atom {}))

(def inv-routes (zipmap (vals routes) (keys routes)))

(defn url-for [screen]
  (if-let [params (get @dynamic-screens screen)]
    (str (get dynamic-routes (keyword (re-find #"[a-z]+" (name screen))))
         "?"
         (string/join "&"
                      (map #(str (name (key %)) "=" (val %)) params)))
    (get routes screen "")))

;; may eventually be in it's own namespace
(defn create-screen-id [seed params]
  (keyword (str (name seed) "-" (hash (sorted-map params)))))

(defn url->screen
  ([url] (url->screen url {}))
  ([url params]
   (or (get inv-routes url)
       (when-let [seed (some (fn [[screen v]]
                          (when (re-find (re-pattern v) url)
                            screen)) dynamic-routes)]
                (create-screen-id seed params)))))
