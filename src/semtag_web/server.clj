(ns semtag-web.server
  (:require [compojure.handler :as handler]
            [compojure.core :refer [defroutes GET ANY]]
            [clojure.string :as string]
            [semtag-web.views.main :as views]
            [ring.middleware.stacktrace :refer [wrap-stacktrace]]
            [hiccup.bootstrap.middleware :refer [wrap-bootstrap-resources]]
            [compojure.route :as route]))

(defroutes app-routes
  (GET "/" [] (views/mls))
  (GET "/status" [query] "HEEEEYY")
  (route/resources "/")
  (route/not-found "Not Found"))

(defn wrap-request-logging [app]
  (fn [{:keys [request-method uri query-params] :as req}]
    (let [resp (app req)]
      (println
        (format
          "[%s] %s %s %s %s"
          (.format (java.text.SimpleDateFormat. "EEE, d MMM yyyy HH:mm:ss Z") (java.util.Date.))
          (string/upper-case (name request-method))
          uri
          (:status resp)
          query-params))
    resp)))

(def app
  (handler/site (-> app-routes
                  wrap-bootstrap-resources
                  wrap-stacktrace
                  wrap-request-logging)))
