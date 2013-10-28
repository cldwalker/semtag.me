(ns semtag-web.services
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app.net.xhr :as xhr]
            [io.pedestal.app.messages :as msg]
            [semtag-web.route :as route]
            [semtag-web.util :refer [format]]
            [cljs.reader :refer [read-string]]))

;; Helper fns

(defn search-id [message]
  (route/create-screen-id :search (select-keys message [:query :search-type])))

(defn thing-id [message]
  (route/create-screen-id :thing (:params message)))

(defn type-id [message]
  (route/create-screen-id :type (:params message)))

(defn put-search-title [input-queue {:keys [query] :as message}]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic [(search-id message) :search-title]
                              :value (format "Search results for '%s'" query)}))

(defn put-value [path input-queue value]
  (p/put-message input-queue {msg/type :set-value
                              msg/topic path
                              :value value}))

(defn spinner-on [input-queue]
  (p/put-message input-queue {msg/type :set-value msg/topic [:modal-spinner] :value true}))

(defn spinner-off [input-queue]
  (p/put-message input-queue {msg/type :set-value msg/topic [:modal-spinner] :value nil}))

(defn put-value-and-spinner-off [path input-queue value]
  (put-value path input-queue value)
  (spinner-off input-queue))

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
                             (spinner-off input-queue)
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
  (spinner-on input-queue)
  (GET (str "/" value)
       (partial put-value-and-spinner-off [(keyword (str value "-results"))] input-queue)
       input-queue))

;; search_form must be underscored since '-' is reserved for delimiting route names in screens
(defmethod send-message :search_form
  [message input-queue]
  (GET "/tags"
       (partial put-value [:tags-results] input-queue)
       input-queue))

(defmethod send-message :home
  [message input-queue]
  (send-message (assoc message :value :search_form) input-queue))

(defmethod send-message :search
  [{:keys [params]} input-queue]
  (spinner-on input-queue)
  (put-search-title input-queue params)

  (GET
    (str "/search?query=" (:query params) "&search_type=" (:search-type params))
    (partial put-value-and-spinner-off [(search-id params) :search-results] input-queue)
    input-queue))

(defmethod send-message :thing
  [message input-queue]
  (spinner-on input-queue)
  (GET (str "/thing?id=" (get-in message [:params :id]))
       (partial put-value-and-spinner-off [(thing-id message) :thing-results] input-queue)
       input-queue))

(defmethod send-message :type
  [message input-queue]
  (spinner-on input-queue)
  (GET (str "/type?name=" (get-in message [:params :name]))
       (partial put-value-and-spinner-off [(type-id message) :type-results] input-queue)
       input-queue))

(defn services-fn
  ([message input-queue] (services-fn message input-queue send-message))
  ([message input-queue send-fn]
   (.log js/console (str "Effect called with: " message))
   (case (msg/topic message)
     [:page] (if-let [route (route/dynamic-screen->route (:value message))]
               (send-fn (assoc message :value (name route)) input-queue)
               (send-fn message input-queue))
     nil)))
