(ns semtag-web.services
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app.net.xhr :as xhr]
            [io.pedestal.app.messages :as msg]
            [cljs.reader :refer [read-string]]))

(defn put-search-title [input-queue query]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic [:search-title]
                              :value (format "Search results for '%s'" query)}))

(defn put-search-results [input-queue results]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic [:search-results]
                              :value results}))

(defn services-fn [message input-queue]
  (.log js/console (str "Sending query to server: " message))
  (put-search-title input-queue (:query message))
  (xhr/request (gensym)
               (str "http://localhost:3000/api/search?query=" (:query message))
               :request-method "GET"
               :on-success (fn [args]
                             (put-search-results
                               input-queue
                               (-> args :body read-string)))
               :on-error (fn [args] (.log js/console "Request failed with:" (pr-str args)))))
