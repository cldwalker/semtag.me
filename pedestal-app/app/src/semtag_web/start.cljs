(ns semtag-web.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [semtag-web.services :as services]
            [semtag-web.route :as route]
            [semtag-web.behavior :as behavior]
            [semtag-web.rendering :as rendering]
            [semtag-web.history :as history]
            ;[semtag-web.debug :as debug]
            ;[ilshad.pedestal-introspector :as introspector]
            [clojure.string :as string]
            [goog.Uri]))

(defn- put-message-on-page-load [app screen params]
  (if (re-find #"^search" (name screen))
    (do
      ;; Ideally, :search-form effects could be triggered from rendering but this
      ;; causes history caching inconsistencies.
      (p/put-message (:input app) {msg/type :map-value msg/topic [:page] :value :search-form})
      (p/put-message (:input app) (merge {msg/type :map-value msg/topic [:search]} params)))
    ;; consider reuse with navbar-deltas
    (p/put-message (:input app)
                   ;; put params in :params so no dissocing everywhere
                   {msg/type :map-value msg/topic [:page] :value (name screen) :params params})))

(defn- update-behavior
  "Updates behavior with possible dynamic focus"
  [behavior screen]
  (cond-> behavior
    true (assoc-in [:focus :default] screen)
    ;; dynamic-focus-todo
    ;; needs to match what's generated in rendering/url-search
    (re-find #"^search" (name screen))
    (assoc-in [:focus screen]
              [[:app-model :search screen] [:app-model :search-form] [:app-model :navbar]])
    (re-find #"^thing" (name screen))
    (assoc-in [:focus screen]
              [[:app-model :thing screen] [:app-model :navbar]])))

(defn create-app [render-config]
  (let [params (route/parse-params window.location.hash)
        ;; For now we detect on hash. If I put a server to route all urls to this js app,
        ;; this could change to full urls.
        screen (or (route/url->screen (.-hash window.location) params)
                   (get-in behavior/app [:focus :default]))
        app (app/build (update-behavior behavior/app screen))
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
    ;; invoke with ilshad.pedestal_introspector.open()
    #_introspector/create
    (setup-effects services/services-fn)))
