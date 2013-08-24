(defn dev
  []
  (require 'dev)
  (in-ns 'dev))

(require 'cemerick.austin.repls)
(defn repl
  "Start Austin cljs-repl and saves repl environment to repl-env.
  Connect a browser by calling this JS:
    ;goog.require ('clojure.browser.repl');clojure.browser.repl.connect.call(null, ':repl-url');"
  []
  (defonce repl-env (cemerick.austin/repl-env))
  (println (str "Started austin with repl-url " (:repl-url repl-env)))
  (cemerick.austin.repls/cljs-repl repl-env))
