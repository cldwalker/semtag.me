(ns semtag-web.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [semtag-web.services :as services]
            [semtag-web.route :as route]
            ;[semtag-web.debug :as debug]
            [semtag-web.behavior :as behavior]
            [semtag-web.rendering :as rendering]
            [semtag-web.history :as history]
            [clojure.string :as string]
            [goog.Uri]))

(defn- put-message-on-page-load [app screen params]
  (if (re-find #"^search" (name screen))
    (p/put-message (:input app) (merge {msg/type :map-value msg/topic [:search]} params))
    ;; consider reuse with navbar-deltas
    (p/put-message (:input app) {msg/type :set-value msg/topic [:page] :value (name screen)})))

;; use goog.Uri if it has an API for extracting param names - .getParameterValues doesn't cut it
(defn- parse-params [url]
  (when-let [params-string (re-find #"(?!.*\?).*" url)]
    (-> params-string
        (string/split #"\&")
        (as-> pairs
          (map #(let [[k v] (string/split % #"=")] [(keyword k) v]) pairs))
        flatten
        vec
        (as-> vals (apply hash-map vals)))))

(defn create-app [render-config]
  (let [params (parse-params window.location.hash)
        ;; For now we detect on hash. If I put a server to route all urls to this js app,
        ;; this could change to full urls.
        screen (or (route/url->screen (.-hash window.location) params)
                   (get-in behavior/example-app [:focus :default]))
        behavior (cond-> behavior/example-app
                   true (assoc-in [:focus :default] screen)
                   ;; needs to match what's generated in rendering/url-search
                   (re-find #"^search" (name screen)) (assoc-in [:focus screen]
                                                                [[:app-model :search screen] [:app-model :search-form] [:app-model :navbar]]))
        app (app/build behavior)
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    (app/begin app)
    (put-message-on-page-load app screen params)
    {:app app :app-model app-model}))

(defn setup-effects [app services-fn]
  (app/consume-effects (:app app) services-fn))

(defn param [name]
  (let [uri (goog.Uri. (.toString (.-location js/document)))]
    (.getParameterValue uri name)))

(defn ^:export main []
  (doto (create-app (rendering/render-config))
      (setup-effects services/services-fn)))
