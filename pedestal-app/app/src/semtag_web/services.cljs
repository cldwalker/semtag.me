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

(defn put-types-results [input-queue results]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic [:types-results]
                              :value results}))

(defn alert
  "Adds an alert box at the top of the page"
  [msg alert-type]
  (dom/prepend! (dom/by-id "main")
                (partials/alert msg (str "alert-" (name alert-type)))))

(defn GET [uri success-fn]
  (.log js/console (str "Calling API endpoint: " uri))
  (xhr/request (gensym)
               uri
               :request-method "GET"
               :on-success success-fn
               :on-error (fn [{:keys [xhr] :as msg}]
                           (alert (format "Request '%s' failed with: %s"
                                          uri
                                          (.getResponse xhr))
                                  :error))))

(defn call-search [message input-queue]
  (put-search-title input-queue (:query message))
  (GET
    (str "http://localhost:3000/api/search?query=" (:query message) "&search_type=" (:search-type message))
    (fn [args]
      (put-search-results
        input-queue
        (-> args :body read-string)))))

(defn call-types [message input-queue])

(defn services-fn [message input-queue]
  (.log js/console (str "Effect called with: " message))
  (case (msg/topic message)
    [:search] (call-search message input-queue)
    [:page] (when (= "types" (:value message)) (call-types message input-queue))
    nil))
