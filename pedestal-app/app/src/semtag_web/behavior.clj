(ns ^:shared semtag-web.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.messages :as msg]))

(defn set-value-transform [old-value message]
  (:value message))

(defn init-app-model []
  [[:transform-enable [:app-model :set-greeting] :set-greeting [{msg/topic [:greeting] (msg/param :value) {}}]]])

(def example-app
  {:version 2
   :transform [[:set-greeting [:greeting] set-value-transform]]
   :emit [{:init init-app-model}
          [#{[:*]} (app/default-emitter [:app-model])]]})

