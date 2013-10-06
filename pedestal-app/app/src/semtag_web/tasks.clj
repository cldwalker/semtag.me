(ns semtag-web.tasks
  "Tasks to run from the commandline"
  (:require [io.pedestal.app-tools.build :as build]
            [clojure.string :as string]
            [io.pedestal.app-tools.dev :as dev]))

;; Useful for debugging in ghostdriver
(def capture-logs-js
  "<script>
      var logs = [];
      var original_log = console.log;
      console.log = function() {
        logs.push(arguments);
        original_log.apply(this, arguments)
      };
    </script>")

(defn- add-log-capturing [html]
  ;; load before any other js
  (string/replace-first html #"(<script id=)" (str capture-logs-js "$1")))

(defn- modify-js
  [app-file transform-fn]
  (-> app-file
      slurp
      transform-fn
      ; ensure relative js paths - hack until I can find out what set of compiler options works
      (string/replace #"/generated-js" "generated-js")
      (as-> new-body
        (spit app-file new-body))))

(defn build-app
  "Builds an aspect, :test by default."
  [& args]
  (let [aspect (keyword (or (first args) "test"))
        out-file (-> dev/config vals first :aspects aspect :uri)
        transform-js-fn (if (= aspect :test) add-log-capturing identity)]
    (when-not out-file (throw (ex-info "This aspect does not exist!" {:aspect aspect})))

    (println (format "Building %s app..." aspect))
    (time (build/build! (-> dev/config vals first) aspect))
    (modify-js (str "out/public" out-file) transform-js-fn)))
