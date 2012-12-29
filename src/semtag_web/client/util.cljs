(ns semtag-web.client.util)

(def enter-key 13)

(defn- key-pressed 
  "If keypressed = keycode then call func"
  [key-code func event]
    (when (= (.-keyCode event) key-code)
      (func event)))

(defn return-key-pressed [f]
  (partial key-pressed enter-key f))

(defn- current-uri []
  (.toString window.location ()))

(defn match-from-current-uri [regex]
  (re-find regex (current-uri)))

(defn error-msg [path err]
  (format "Request '%s' failed with: %s" path (pr-str err)))

(defn console-error [path _ _ err]
  (.log js/console (error-msg path err)))

(defn log [msg]
  (.log js/console msg))

;; from good ol ibdknox/fetch
(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings."
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.-strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

(defn log-clj [msg]
  (log (clj->js msg)))
