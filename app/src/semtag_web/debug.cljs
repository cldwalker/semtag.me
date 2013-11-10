(ns semtag-web.debug
  (:require [io.pedestal.app.util.platform :as platform]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app :as app]))

(defn log-input* [msg]
  (.log js/console "INPUT" (pr-str msg))
  [msg])

(defn log-input
  "Logs every input message"
  [description]
  (-> description
      (assoc :pre [[:* [:**] log-input*]])
      ;; until pedestal #204 is resolved
      (assoc :input-adapter (fn [m] {:key (msg/type m)
                                     :out (let [topic (msg/topic m)]
                                            (if (vector? topic) topic (vector topic)))}))))

;; Enable to see what :navigate does
#_(defmethod app/process-app-model-message :navigate [state flow message]
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
