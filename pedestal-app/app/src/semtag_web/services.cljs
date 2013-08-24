(ns semtag-web.services
  (:require [io.pedestal.app.protocols :as p]
            [semtag-web.partials :as partials]
            [domina :as dom]
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
(defn- alert
  "Creates an alert partial with correct type"
  [msg alert-type]
  (dom/prepend! (dom/by-id "main")
                (partials/alert msg (str "alert-" (name alert-type)))))

(defn services-fn [message input-queue]
  (.log js/console (str "Sending query to server: " message))
  (put-search-title input-queue (:query message))
  (xhr/request (gensym)
               #_(str "http://localhost:3000/api/search?query=" (:query message) "&search_type=" (:search-type message))
               "http://localhost:3000/api/search"
               :request-method "GET"
               :on-success (fn [args]
                             (put-search-results
                               input-queue
                               (-> args :body read-string)))
               :on-error (fn [{:keys [xhr] :as msg}]
                           (.log js/console "Request failed with:" (.getResponse xhr))
                           (alert (str "Request failed with: "(.getResponse xhr)) :error))))
