(ns semtag-web.services
  (:require [io.pedestal.app.protocols :as p]
            [semtag-web.partials :as partials]
            [domina :as dom]
            [io.pedestal.app.net.xhr :as xhr]
            [io.pedestal.app.messages :as msg]
            [cljs.reader :refer [read-string]]))

;; Helper fns

(defn put-search-title [input-queue query]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic [:search-title]
                              :value (format "Search results for '%s'" query)}))

(defn put-value [path input-queue value]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic path
                              :value value}))

(defn alert
  "Adds an alert box at the top of the page"
  [msg alert-type]
  (dom/prepend! (dom/by-id "main")
                (partials/alert msg (str "alert-" (name alert-type)))))

(def base-uri "http://localhost:3000/api")

(defn GET [rel-uri success-fn]
  (let [uri (str base-uri rel-uri)]
    (.log js/console (str "Calling API endpoint: " uri))
    (xhr/request (gensym)
                 uri
                 :request-method "GET"
                 :on-success (fn [data]
                               (success-fn (-> data :body read-string)))
                 :on-error (fn [{:keys [xhr] :as msg}]
                             (alert (format "Request '%s' failed with: %s"
                                            uri
                                            (.getResponse xhr))
                                    :error)))))

;; Effect fns

(defn call-search [message input-queue]
  (put-search-title input-queue (:query message))
  (GET
    (str "/search?query=" (:query message) "&search_type=" (:search-type message))
    (partial put-value [:search-results] input-queue)))

(defn call-types [message input-queue]
  (GET "/types"
       (partial put-value [:types-results] input-queue)))

(defn call-tags [message input-queue]
  (GET "/tags"
       (partial put-value [:tags-results] input-queue)))

(defn call-tag-stats [message input-queue]
  (GET "/tag-stats"
       (partial put-value [:tag-stats-results] input-queue)))

(defn call-all [message input-queue]
  (GET "/all"
       (partial put-value [:all-results] input-queue)))

(defn page-effects [message input-queue]
  (case (:value message)
    "types" (call-types message input-queue)
    "tag-stats" (call-tag-stats message input-queue)
    "all" (call-all message input-queue)
    "home" (call-tags message input-queue)
    nil))

(defn services-fn [message input-queue]
  (.log js/console (str "Effect called with: " message))
  (case (msg/topic message)
    [:search] (call-search message input-queue)
    [:page] (page-effects message input-queue)
    nil))
