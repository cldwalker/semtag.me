(ns semtag-web.rendering-util
  (:require [io.pedestal.app.render.events :as events]
            [io.pedestal.app.render.push.handlers :as h]))

(defn- click-with-inputs
  [click-dom-id input-map]
  (fn [_ [_ path transform-name messages] input-queue]
    (events/collect-and-send :click click-dom-id input-queue transform-name messages
                             input-map)))

(defn- click-with-fn
  [dom-id f]
  (fn [_ [_ path transform-name messages] input-queue]
    (events/send-on :click dom-id input-queue
                    (fn []
                      (f {:transform transform-name :messages messages})))))

(defn click [path dom-id & {:keys [inputs fn]}]
  [[:transform-enable
    path
    (if fn
      (click-with-fn dom-id fn)
      (if inputs (click-with-inputs dom-id inputs)
        (h/add-send-on-click dom-id)))]
   [:transform-disable path (h/remove-send-on-click dom-id)]])
