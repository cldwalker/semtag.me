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
            [goog.Uri]))

(defn create-app [render-config]
  (let [;; For now we detect on hash. If I put a server to route all urls to this js app,
        ;; this could change to full urls.
        screen (route/url->screen (.-hash window.location))
        behavior-with-new-default-focus (assoc-in behavior/example-app
                                                  [:focus :default] screen)
        app (app/build behavior-with-new-default-focus)
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    (app/begin app)
    ;; consider reuse with navbar-deltas
    (p/put-message (:input app) {msg/type :set-value msg/topic [:page] :value (name screen)})
    {:app app :app-model app-model}))

(defn setup-effects [app services-fn]
  (app/consume-effects (:app app) services-fn))

(defn param [name]
  (let [uri (goog.Uri. (.toString (.-location js/document)))]
    (.getParameterValue uri name)))

(defn ^:export main []
  (doto (create-app (rendering/render-config))
      (setup-effects services/services-fn)))
