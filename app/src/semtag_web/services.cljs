(ns semtag-web.services
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app.net.xhr :as xhr]
            [goog.Uri.QueryData :as query-data]
            [goog.structs :as structs]
            [io.pedestal.app.messages :as msg]
            [semtag-web.config :as config]
            [semtag-web.route :as route]
            [semtag-web.util :refer [format]]
            [clojure.string :as string]
            [cljs.reader :refer [read-string]]))

;; Helper fns

(defn search-id [message]
  (route/create-screen-id :search (select-keys message [:query :search-type])))

(defn thing-id [message]
  (route/create-screen-id :thing (:params message)))

(defn type-id [message]
  (route/create-screen-id :type (:params message)))

;; TODO: consistently do this for all pages or just inline this one as well
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

(def base-uri (:api-uri config/config))

(defn default-on-error [{:keys [xhr input-queue uri]}]
  (spinner-off input-queue)
  (.error js/console "Failed request:" xhr)
  (put-value [:alert-error]
             input-queue
             (format "Request '%s' failed with: %s"
                     uri
                     (.getResponse xhr))))

(defn GET [rel-uri success-fn input-queue]
  (let [uri (str base-uri rel-uri)]
    (.log js/console (str "Calling API endpoint: " uri))
    (xhr/request (gensym)
                 uri
                 :request-method "GET"
                 :on-success (fn [data]
                               (success-fn (-> data :body read-string)))
                 :on-error #(default-on-error {:xhr (:xhr %) :input-queue input-queue :uri uri}))))

;; from https://github.com/yogthos/cljs-ajax/blob/master/src/ajax/core.cljs
(defn- params-to-str [params]
  (if params
    (-> params
        clj->js
        structs/Map.
        query-data/createFromMap
        .toString)))

;; For now we don't use edn when POSTing because of how goog.net.XhrManager
;; behaves for CORS requests - it automatically converts it to an OPTIONS request.
;; Rather than do a preflight request, we'll use one of the content-types that don't
;; require a preflight - http://www.html5rocks.com/en/tutorials/cors/#toc-types-of-cors-requests
(defn POST [rel-uri success-fn input-queue & {:as options}]
  (let [uri (str base-uri rel-uri)
        on-error (or (:on-error options) default-on-error)]
    (.log js/console (str "Calling API endpoint: " uri) (pr-str options))
    (xhr/request (gensym)
                 uri
                 :request-method "POST"
                 :body (params-to-str (:data options))
                 :headers {"Content-Type" "application/x-www-form-urlencoded"}
                 :on-success (fn [data]
                               (success-fn (-> data :body read-string)))
                 :on-error #(on-error {:xhr (:xhr %) :input-queue input-queue :uri uri}))))
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

(defn search* [params input-queue]
  (spinner-on input-queue)
  (put-search-title input-queue params)

  (GET
    (str "/search?" (params-to-str params))
    (partial put-value-and-spinner-off [(search-id params) :search-results] input-queue)
    input-queue))

(defmethod send-message :search
  [{:keys [params]} input-queue]
  (if (some-> (:query params) string/trim seq)
    (search* params input-queue)
    (put-value [:alert-error]
               input-queue
               "A search query cannot be empty. Try again.")))

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

(defmethod send-message :create
  [message input-queue]
  (send-message (assoc message :value :create-thing) input-queue))

;; actions

(defmethod send-message :create-thing
  [{:keys [params]} input-queue]
  (spinner-on input-queue)
  (POST "/add"
        (fn [data]
          (put-value-and-spinner-off
            [:alert-success]
            input-queue
            (format "Successfully added <a href=\"#/thing/%s\">%s</a>!" (:id data) (:input params))))
        input-queue
        :data params))

(defmethod send-message :delete-thing
  [{:keys [params]} input-queue]
  (spinner-on input-queue)
  (POST "/delete"
        (fn [data]
          (put-value-and-spinner-off
            [:alert-success]
            input-queue
            (format "Successfully deleted '%s'." (:id params))))
        input-queue
        :data params))

(defmethod send-message :update-thing
  [{:keys [params]} input-queue]
  (spinner-on input-queue)
  (POST "/edit"
        (fn [data]
          (spinner-off input-queue)
          (put-value [:edit-completed] input-queue (:element params)))
        input-queue
        :on-error (fn [error]
                    (default-on-error error)
                    (put-value [:edit-failed] input-queue (:element params)))
        :data (dissoc params :element)))

(defn allowed? [message]
  (or (not (:read-only config/config))
      (not (contains? #{:create :create-thing :update-thing :delete-thing}
                      (keyword (:value message))))))

(defn services-fn
  ([message input-queue] (services-fn message input-queue send-message))
  ([message input-queue send-fn]
   (.log js/console (str "Effect called with: " message))
   (cond
     (contains? #{[:page] [:action]} (msg/topic message))
     (let [message (if-let [route (route/dynamic-screen->route (:value message))]
                     (assoc message :value (name route))
                     message)]
       (when (allowed? message)
         (send-fn message input-queue))))))
