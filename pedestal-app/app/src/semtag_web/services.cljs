(ns semtag-web.services
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app.net.xhr :as xhr]
            [io.pedestal.app.messages :as msg]
            [semtag-web.route :as route]
            [cljs.reader :refer [read-string]]))

;; Helper fns

(defn search-id [message]
  (route/create-screen-id :search (select-keys message [:query :search-type])))

(defn put-search-title [input-queue {:keys [query] :as message}]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic [(search-id message) :search-title]
                              :value (format "Search results for '%s'" query)}))

(defn put-value [path input-queue value]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic path
                              :value value}))

(def base-uri "http://localhost:3000/api")

(defn GET [rel-uri success-fn input-queue]
  (let [uri (str base-uri rel-uri)]
    (.log js/console (str "Calling API endpoint: " uri))
    (xhr/request (gensym)
                 uri
                 :request-method "GET"
                 :on-success (fn [data]
                               (success-fn (-> data :body read-string)))
                 :on-error (fn [{:keys [xhr] :as msg}]
                             (put-value [:alert-error]
                                        input-queue
                                        (format "Request '%s' failed with: %s"
                                                uri
                                                (.getResponse xhr)))))))

;; Effect fns

(defmulti send-message
  "Sends message to cause an effect"
  (fn [message input-queue] (keyword (:value message))))

;; for types, tag-stats and all
(defmethod send-message :default
  [{:keys [value]} input-queue]
  (GET (str "/" value)
       (partial put-value [(keyword (str value "-results"))] input-queue)
       input-queue))

(defmethod send-message :search-form
  [message input-queue]
  (GET "/tags"
       (partial put-value [:tags-results] input-queue)
       input-queue))

(defmethod send-message :home
  [message input-queue]
  (send-message (assoc message :value :search-form) input-queue))

(defmethod send-message :search
  [message input-queue]
  (put-search-title input-queue message)
  (GET
    (str "/search?query=" (:query message) "&search_type=" (:search-type message))
    (partial put-value [(search-id message) :search-results] input-queue)
    input-queue))

(defn services-fn
  ([message input-queue] (services-fn message input-queue send-message))
  ([message input-queue send-fn]
   (.log js/console (str "Effect called with: " message))
   (case (msg/topic message)
     ;; add :value so we can dispatch to it
     [:search] (send-fn (assoc message :value "search") input-queue)
     [:page] (send-fn message input-queue)
     nil)))
