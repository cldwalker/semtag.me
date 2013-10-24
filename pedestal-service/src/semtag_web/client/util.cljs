(ns semtag-web.client.util
  "General cljs utilities")

(def enter-key 13)

(defn- key-pressed 
  "If keypressed = keycode then call func"
  [key-code func event]
    (when (= (.-keyCode event) key-code)
      (func event)))

(defn return-key-pressed
  "Creates a fn to be bound to a keypress event given a fn to execute"
  [f]
  (partial key-pressed enter-key f))

(defn current-uri
  "The current uri using window.location"
  []
  (.toString window.location ()))

(defn match-from-current-uri [regex]
  (re-find regex (current-uri)))

(defn log
  "Log to the console"
  [msg]
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

(defn log-clj
  "Log a clj data structure as a js one"
  [msg]
  (log (clj->js msg)))

(defn param-value
  "Scrapes param value from window.location.search"
  [param]
  (when-let [match (re-find
                     (re-pattern (format "[?&]?%s=([^&]+)" param))
                     (.-search window.location))] (second match)))
