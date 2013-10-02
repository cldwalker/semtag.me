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

(defn- modify-js
  [app-file]
  (-> app-file
      slurp
      ;; load before any other js
      (string/replace-first #"(<script id=)" (str capture-logs-js "$1"))
      ; ensure relative js paths - hack until I can find out what set of compiler options works
      (string/replace #"/generated-js" "generated-js")
      (as-> new-body
        (spit app-file new-body))))

(defn build-test-app
  "Builds :test aspect"
  [& args]
  (println "Building test app...")
  (time (build/build! (-> dev/config vals first) :test))
  (modify-js "out/public/semtag-web-test.html"))
