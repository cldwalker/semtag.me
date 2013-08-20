(ns semtag-web.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [semtag-web.behavior :as behavior]
            [semtag-web.rendering :as rendering]))

(defn create-app [render-config]
  (let [app (app/build behavior/example-app)
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    (app/begin app)
    (p/put-message (:input app) {msg/type :set-greeting msg/topic [:greeting] :value "Hello World!"})
    {:app app :app-model app-model}))

(defn setup-effects [app services-fn]
  (app/consume-effects (:app app) services-fn))

(defn ^:export main []
  (create-app (rendering/render-config)))
