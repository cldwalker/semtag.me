(ns semtag-web.server
  (:require [compojure.handler :as handler]
            [compojure.core :refer [defroutes context GET ANY]]
            [clojure.string :as string]
            [semtag-web.views.main :as views]
            [ring.middleware.stacktrace :refer [wrap-stacktrace]]
            [hiccup.bootstrap.middleware :refer [wrap-bootstrap-resources]]
            [compojure.route :as route]))

; Mocks api routes that should exist for the separate backend so that the app
; can still be demoed without relying on it.
(defroutes demo-api-routes
  (GET "/mls" []
       (prn-str [{:type "search_engine" :url "http://yahoo.com" :desc "huh, what" :tags ["dunno"]}
                 {:type "search_engine" :url "http://google.com" :desc "kinda useful" :tags ["search"]}]))
  (GET "/tags" []
       (prn-str ["one" "two" "three"]))
  (GET "/models" []
       (prn-str [{:url-percent 0.375, :name-percent 0.75, :count 8, :name :company}
                 {:url-percent 1.0, :name-percent 0.0, :count 2, :name :shop}]))
           )

(defroutes app-routes
  (GET "/" [] (views/home))
  (GET "/model-stats" [] (views/model-stats))
  (GET "/tag-stats" [] (views/tag-stats))
  (GET "/status" [query] "HEY")
  (GET "/add" [] (views/home "entity_add"))
  (GET "/:model" [model] (views/model-show model))
  (GET "/thing/:tag" [tag] (views/tag-show tag))
  (context "/api" [] demo-api-routes)
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
