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

;; pass full message so we can differentiate between effects in services.cljs
(defn publish-message [{:keys [message]}]
  ;; needs to return a collection
  [message])

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
   :effect #{[#{[:page] [:search]} publish-message]}
   :emit [[#{[:page]} page-deltas]
          [#{[:*]} (app/default-emitter [:app-model])]]})

