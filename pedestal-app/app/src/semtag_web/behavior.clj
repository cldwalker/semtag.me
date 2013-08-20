(ns ^:shared semtag-web.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.messages :as msg]))

(defn set-value-transform [old-value message]
  (:value message))

(defn init-app-model []
  [[:transform-enable [:app-model :set-greeting] :set-greeting [{msg/topic [:greeting] (msg/param :value) {}}]]
   [:transform-enable [:app-model :search] :search [{msg/topic [:search] (msg/param :value) {}}]]])

;; purposefully not putting a type or path - what's the point if it's getting consumed
(defn publish-search [search-val]
  [{:value search-val}])

(def example-app
  {:version 2
   :transform [[:set-greeting [:greeting] set-value-transform]
               [:search [:search] set-value-transform]]
   :effect #{[#{[:search]} publish-search :single-val]}
   :emit [{:init init-app-model}
          [#{[:*]} (app/default-emitter [:app-model])]]})

