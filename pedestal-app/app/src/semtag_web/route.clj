(ns ^:shared semtag-web.route
  (:require [clojure.string :as string]))

(def routes "Maps screens to relative paths"
  {:types "#/types"
   :tag-stats "#/tag-stats"
   :all "#/all"
   :home "#/"})

(def dynamic-routes
  {:search "#/search"
   :thing "#/thing/:id"})

(def dynamic-screens "Maps screen ids to their url params"
  (atom {}))

(def inv-routes (zipmap (vals routes) (keys routes)))

(defn url-for [screen]
  (if-let [params (get @dynamic-screens screen)]
    (let [route (get dynamic-routes (keyword (re-find #"[a-z]+" (name screen))))]
      (if (re-find #":" route)
        (string/replace route
                        #":\w+"
                        (fn [x] (get params (keyword (subs x 1)))))
        (str route
             "?"
             (string/join "&"
                          (map #(str (name (key %)) "=" (val %)) params)))))
    (get routes screen "")))

;; may eventually be in it's own namespace
(defn create-screen-id [seed params]
  (keyword (str (name seed) "-"
                (string/join "_"
                             (map #(str (-> % key name) "_"  (val %))
                                  (->> params (reduce into) (apply sorted-map)))))))

(defn params-from-url [dynamic-screen url]
  (reduce
    (fn [accum [route-piece url-piece]]
      (if-let [keyword-piece (->> route-piece (re-find #":(.*)") second)]
        (assoc accum (keyword keyword-piece) url-piece)
        accum))
    {}
    (zipmap (string/split (get dynamic-routes dynamic-screen) #"/")
            (string/split url #"/"))))

(defn find-dynamic-route
  [url]
  (some (fn [[screen route]]
          (when (some-> (re-find #"[^:]+" route)
                        re-pattern
                        (re-find url))
            screen))
        dynamic-routes))

;; screen is the full unique name
;; route is an entry in one of the route maps
(defn url->screen
  ([url] (url->screen url nil))
  ([url params]
   (or (get inv-routes url)
       (when-let [seed (find-dynamic-route url)]
         (create-screen-id seed (or params
                                    (params-from-url seed url)))))))
