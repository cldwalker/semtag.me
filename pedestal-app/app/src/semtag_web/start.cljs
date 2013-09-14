(ns semtag-web.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app.util.platform :as platform]
            [semtag-web.services :as services]
            [semtag-web.behavior :as behavior]
            [semtag-web.rendering :as rendering]
            [semtag-web.history :as history]
            [goog.Uri]))

(defn- url->screen []
  ;; For now we detect on hash. If I put a server to route all urls to this js app,
  ;; this could change to full urls.
  (get history/inv-routes
       (.-hash window.location)
       history/default-route))

(defmethod app/process-app-model-message :navigate [state flow message]
  (let [deltas (app/refresh-emitters state flow)
        paths (get-in state [:io.pedestal.app/named-paths (:name message)])
        old-paths (:io.pedestal.app/subscriptions state)
        destroy-paths (remove (set paths) old-paths)]
    (platform/log-group ":navigate" {:message message
                                     :named-paths (get-in state [:io.pedestal.app/named-paths])
                                     :paths paths
                                     :destroy-paths destroy-paths
                                     :old-paths old-paths
                                     :deltas deltas})
    (assoc state :io.pedestal.app/subscriptions paths
           :emit (into (mapv #(vector :navigate-node-destroy %) destroy-paths)
                       deltas))))

(defn create-app [render-config]
  (let [behavior-with-new-default-focus
        (assoc-in behavior/example-app
                  [:focus :default]
                  (url->screen))
        app (app/build behavior-with-new-default-focus)
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    (app/begin app)
    ;; consider reuse with navbar-deltas
    (p/put-message (:input app) {msg/type :set-value msg/topic [:page] :value (name (url->screen))})
    {:app app :app-model app-model}))

(defn setup-effects [app services-fn]
  (app/consume-effects (:app app) services-fn))

(defn param [name]
  (let [uri (goog.Uri. (.toString (.-location js/document)))]
    (.getParameterValue uri name)))

(defn ^:export main []
  (doto (create-app (rendering/render-config))
      (setup-effects services/services-fn)))
