(ns semtag-web.simulated.start
  (:require [io.pedestal.app.render.push.handlers.automatic :as d]
            [semtag-web.start :as start]
            [semtag-web.simulated.services :as services]
            [semtag-web.rendering :as rendering]
            ;; This needs to be included somewhere in order for the
            ;; tools to work.
            [io.pedestal.app-tools.tooling :as tooling]))

(defn ^:export main []
  (let [render-config (if (= "auto" (start/param "renderer"))
                        d/data-renderer-config
                        (rendering/render-config))]
    (doto (start/create-app render-config)
      (start/setup-effects services/services-fn))))
