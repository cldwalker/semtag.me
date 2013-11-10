;; from https://gist.github.com/brentonashworth/5728698
(ns semtag-web.history
  (:require [io.pedestal.app.protocols :as p]
            [semtag-web.route :as route]
            [io.pedestal.app.util.log :as log]
            [io.pedestal.app.messages :as msg]))

;; history fns
;; -----------
(def last-page (atom nil))

(def input-queues (atom {}))

(defn navigate [token]
  (when-let [d (get @input-queues token)]
    (.log js/console "NAVIGATE" (name token))
    (p/put-message d {msg/topic msg/app-model
                      msg/type :set-focus
                      :name (keyword token)})))

(def supported? (and js/history (.-pushState js/history)))

(defn navigated [d token]
  (when supported?
    ;; must use strings as unique ids otherwise they come out funny
    ;; in popstate callback
    (let [token (name token)]
      (.log js/console "NAVIGATED" token)
      (let [current-token (.-state js/history)]
        (when (not= current-token token)
          (if (nil? @last-page)
            (.replaceState js/history token nil nil)
            (.pushState js/history token nil (route/url-for (keyword token))))))
      (reset! last-page token)
      (swap! input-queues assoc token d))))

(if supported?
  (set! (.-onpopstate js/window) (fn [e]
                                   (.log js/console "POP" (.-state e))
                                   (navigate (.-state e))))
  (log/warn :in :semtag-web.history
            :message "HTML 5 History is not supported in this browser!"))
