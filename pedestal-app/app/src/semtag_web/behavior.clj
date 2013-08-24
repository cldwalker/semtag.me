(ns ^:shared semtag-web.behavior
    (:require [io.pedestal.app :as app]
              [io.pedestal.app.messages :as msg]))

(defn set-value [old-value message]
  (:value message))

(defn map-value [_ message]
  (dissoc message msg/topic msg/type))

(defn init-app-model []
  [[:transform-enable [:app-model :search-title] :set-search-title [{msg/type :set-value msg/topic [:search-title] (msg/param :value) {}}]]
   [:transform-enable [:app-model :search] :search [{msg/type :map-value msg/topic [:search] (msg/param :query) {} (msg/param :search-type) {}}]]])

;; purposefully not putting a type or path - what's the point if it's getting consumed
(defn publish-search [search-map]
  [(dissoc search-map msg/topic msg/type)])

(def example-app
  {:version 2
   :transform [[:set-value [:search-title] set-value]
               [:map-value [:search] map-value]
               [:set-value [:search-results] set-value]]
   :effect #{[#{[:search]} publish-search :single-val]}
   :emit [{:init init-app-model}
          [#{[:*]} (app/default-emitter [:app-model])]]})

