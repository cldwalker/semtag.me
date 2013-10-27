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

; ensure relative js paths - hack until I can find out what set of compiler options works
(defn- ensure-relative-paths [html]
  (string/replace html #"/generated-js" "generated-js"))

(defn- modify-file
  [file transform-fn]
  (-> file
      slurp
      transform-fn
      (as-> new-body
        (spit file new-body))))

(defn- modify-config [config aspect]
  (if-not (System/getenv "TEST")
    config
    (assoc-in config [:aspects aspect :main] 'semtag_web.simulated.start)))

(defn build-app
  "Builds an aspect, :test if no argument is given. It also prepares it to be standalone html,
  adds debugging for the test aspect and updates services/base-uri if $API_URI is set.
  If $TEST is set, the current aspect prepares a builds as if it were a test aspect and forces
  using simulated services."
  [& args]
  (let [aspect (keyword (or (first args) "test"))
        {html-file :uri js-file :out-file} (-> dev/config vals first :aspects aspect)
        transform-js-fn (if (or (System/getenv "TEST") (= aspect :test))
                          (comp ensure-relative-paths add-log-capturing) ensure-relative-paths)]
    (when-not html-file (throw (ex-info "This aspect does not exist!" {:aspect aspect})))

    (println (format "Building %s app..." aspect))
    (time (build/build! (-> dev/config vals first (modify-config aspect)) aspect))

    (println "Writing" (str "out/public" html-file))
    (modify-file (str "out/public" html-file) transform-js-fn)

    (when-let [uri (System/getenv "API_URI")]
      (println "Writing" (str "out/public/generated-js/" js-file))
      (modify-file (str "out/public/generated-js/" js-file) #(string/replace-first % "http://localhost:3000/api" uri))))
  (System/exit 0))