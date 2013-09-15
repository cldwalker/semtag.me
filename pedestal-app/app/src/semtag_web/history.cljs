;; from https://gist.github.com/brentonashworth/5728698
(ns semtag-web.history
  (:require [io.pedestal.app.protocols :as p]
            [clojure.string :as string]
            [io.pedestal.app.util.log :as log]
            [io.pedestal.app.messages :as msg]))

;; routing fns
;; -----------
(def routes "Maps screens to relative paths"
  {:types "#/types"
   :tag-stats "#/tag-stats"
   :all "#/all"
   :home "#/"})

(def dynamic-routes
  {:search "#/search"})

(def default-route :home)

(def inv-routes (zipmap (vals routes) (keys routes)))

(defn url-for [screen params]
  (if (empty? params)
    (get routes screen "")
    (str (get dynamic-routes (keyword (re-find #"[a-z]+" (name screen))))
         "?"
         (string/join "&"
                      (map #(str (name (key %)) "=" (val %)) params)))))

;; history fns
;; -----------
(def last-page (atom nil))

(def input-queues (atom {}))

(defn navigate [token]
  (when-let [d (get @input-queues token)]
    (.log js/console "NAVIGATE" (pr-str token))
    (p/put-message d {msg/topic msg/app-model
                      msg/type :set-focus
                      :name token})))

(def supported? (and js/history (.-pushState js/history)))

(defn navigated
  ([d token] (navigated d token {}))
  ([d token screen-params]
  (when supported?
    (.log js/console "NAVIGATED" (pr-str token screen-params))
    (let [current-token (.-state js/history)]
      (when (not= current-token token)
        (if (nil? @last-page)
          (.replaceState js/history token nil nil)
          (.pushState js/history token nil (url-for token screen-params)))))
    (reset! last-page token)
    (swap! input-queues assoc token d))))

(if supported?
  (set! (.-onpopstate js/window) (fn [e]
                                   (.log js/console "POP" (pr-str (.-state e)))
                                   (navigate (.-state e))))
  (log/warn :in :semtag-web.history
            :message "HTML 5 History is not supported in this browser!"))
