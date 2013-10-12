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

(defn params-from-query [url]
  (when-let [params-string (->> url (re-find #"\?(.*)") second)]
    (-> params-string
        (string/split #"\&")
        (as-> pairs
          (map #(let [[k v] (string/split % #"=")] [(keyword k) v]) pairs))
        flatten
        vec
        (as-> vals (apply hash-map vals)))))

(defn find-dynamic-route
  "Finds a dynamic route e.g. :thing for a given url"
  [url]
  (some (fn [[screen route]]
          (when (some-> (re-find #"[^:]+" route)
                        re-pattern
                        (re-find url))
            screen))
        dynamic-routes))

(defn parse-params
  "Parses param from url if it matches a route with a keyword segment.
  Otherwise parses param from query string"
  [url]
  (when-let [route (find-dynamic-route url)]
    (if (re-find #":" (route dynamic-routes))
      (params-from-url route url)
      (params-from-query url))))

;; screen is the full unique name
;; route is an entry in one of the route maps
(defn url->screen
  ([url] (url->screen url nil))
  ([url params]
   (or (get inv-routes url)
       (when-let [seed (find-dynamic-route url)]
         (create-screen-id seed (or params
                                    (params-from-url seed url)))))))
