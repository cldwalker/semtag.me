(ns semtag-web.service
    (:require [io.pedestal.service.http :as bootstrap]
              [io.pedestal.service.http.route :as route]
              [io.pedestal.service.http.body-params :as body-params]
              [io.pedestal.service.http.route.definition :refer [defroutes]]
              [io.pedestal.service.interceptor :as interceptor]
              [semtag-web.views.main :as views]
              [ring.util.response :as ring-resp]))

(defn home-page [request] (ring-resp/response (views/home)))
(defn add-page [request] (ring-resp/response (views/home "entity_add")))
(defn all-page [request] (ring-resp/response (views/all)))

(interceptor/defon-response html-content-type
  [response]
  (ring-resp/content-type response "text/html"))
5
(defroutes routes
  [[["/" {:get home-page}
     ^:interceptors [html-content-type]
     ["/add" {:get add-page}]
     ["/all" {:get all-page}]
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
