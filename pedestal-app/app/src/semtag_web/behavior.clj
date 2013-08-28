(ns ^:shared semtag-web.behavior
    (:require [io.pedestal.app :as app]
              [io.pedestal.app.messages :as msg]))

(defn set-value [old-value message]
  (:value message))

(defn map-value [_ message]
  (dissoc message msg/topic msg/type))

(defn home-deltas []
  [[:transform-enable [:app-model :search-title] :set-search-title [{msg/type :set-value msg/topic [:search-title] (msg/param :value) {}}]]
   [:transform-enable [:app-model :search] :search [{msg/type :map-value msg/topic [:search] (msg/param :query) {} (msg/param :search-type) {}}]]])

;; purposefully not putting a type or path - what's the point if it's getting consumed
(defn publish-search [search-map]
  [(dissoc search-map msg/topic msg/type)])

(defn page-deltas [{{page :page} :new-model}]
  (into [[:value [:app-model :page] page]]
        ;; transform deltas have to come after page is visible - otherwise
        ;; you're binding to nonexistant dom ids
        (if (= "home" page)
          (home-deltas) [])))

(def example-app
  {:version 2
   :transform [[:set-value [:page] set-value]
               [:set-value [:search-title] set-value]
               [:map-value [:search] map-value]
               [:set-value [:search-results] set-value]]
   :effect #{[#{[:search]} publish-search :single-val]}
   :emit [[#{[:page]} page-deltas]
          [#{[:*]} (app/default-emitter [:app-model])]]})

