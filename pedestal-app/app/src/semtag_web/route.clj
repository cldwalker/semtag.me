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

(defn url->screen [url]
  (get inv-routes url))
