(ns semtag-web.simulated.services
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app.messages :as msg]))

(defn services-fn [message input-queue]
  (.log js/console (str "Sending query to server: " message))
  (p/put-message input-queue {msg/type :set-greeting
                              msg/topic [:greeting]
                              :value (:value message)}))
