(ns semtag-web.service
    (:require [io.pedestal.service.http :as bootstrap]
              [io.pedestal.service.http.route :as route]
              [io.pedestal.service.http.body-params :as body-params]
              [io.pedestal.service.http.route.definition :refer [defroutes]]
              [io.pedestal.service.interceptor :as interceptor]
              [semtag-web.views.main :as views]
              [clojure.string :as string]
              [ring.util.response :as ring-resp]))

(defn home-page [request] (ring-resp/response (views/home)))
(defn add-page [request] (ring-resp/response (views/home "entity_add")))
(defn all-page [request] (ring-resp/response (views/all)))
(defn type-stats-page [request] (ring-resp/response (views/type-stats)))
(defn tag-stats-page [request] (ring-resp/response (views/tag-stats)))
(defn type-page [request]
  (ring-resp/response (views/type-show (-> request :params :type))))
(defn thing-page [request]
  (ring-resp/response (views/thing-show (-> request :params :tag))))

;; TODO: replace log-request cleanly
(interceptor/defafter log-response
  [{{:keys [request-method uri query-params] :as request} :request
    {:keys [status]} :response
    :as context}]
  (println
   (format
    "[%s] %s %s %s %s"
    (.format (java.text.SimpleDateFormat. "EEE, d MMM yyyy HH:mm:ss Z") (java.util.Date.))
    (string/upper-case (name request-method))
    uri
    status
    query-params))
  context)

(interceptor/defon-response html-content-type
  [response]
  (ring-resp/content-type response "text/html"))
5
(defroutes routes
  [[["/" {:get home-page}
     ^:interceptors [html-content-type]
     ["/add" {:get add-page}]
     ["/all" {:get all-page}]
     ["/type-stats" {:get type-stats-page}]
     ["/tag-stats" {:get tag-stats-page}]
     ["/:type" {:get type-page}]
     ["/thing/:tag" {:get thing-page}]

     ;; TODO: Add api routes for testing and examples
     ;;["/api/*"]
     ]]])

;; You can use this fn or a per-request fn via io.pedestal.service.http.route/url-for
(def url-for (route/url-for-routes routes))

;; Consumed by semtag-web.server/create-server
(def service {:env :prod
              ;; You can bring your own non-default interceptors. Make
              ;; sure you include routing and set it up right for
              ;; dev-mode. If you do, many other keys for configuring
              ;; default interceptors will be ignored.
              ;; :bootstrap/interceptors []
              ::bootstrap/routes routes
              ;; Root for resource interceptor that is available by default.
              ::bootstrap/resource-path "/public"
              ;; Either :jetty or :tomcat (see comments in project.clj
              ;; to enable Tomcat)
              ::bootstrap/type :jetty
              ::bootstrap/port 8000})
