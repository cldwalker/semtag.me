(ns semtag-web.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [semtag-web.services :as services]
            [semtag-web.behavior :as behavior]
            [semtag-web.rendering :as rendering]
            [goog.Uri]))

(defn page-from-url []
  ;; For now we use hash. If I put a server to route all urls to this js app,
  ;; this could change to full urls.
  (case (.-hash window.location)
    "#/types" "types"
    "home"))

(defn create-app [render-config]
  (let [app (app/build behavior/example-app)
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    (app/begin app)
    (p/put-message (:input app) {msg/type :set-value
                                 msg/topic [:page]
                                 :value (page-from-url)})
    {:app app :app-model app-model}))

(defn setup-effects [app services-fn]
  (app/consume-effects (:app app) services-fn))

(defn param [name]
  (let [uri (goog.Uri. (.toString (.-location js/document)))]
    (.getParameterValue uri name)))

(defn ^:export main []
  (doto (create-app (rendering/render-config))
      (setup-effects services/services-fn)))
