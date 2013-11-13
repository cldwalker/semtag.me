(ns semtag-web.tasks
  "Tasks to run from the commandline"
  (:require [io.pedestal.app-tools.build :as build]
            [clojure.string :as string]
            [clojure.java.shell :as sh]
            [semtag-web.config :as config]
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

(def read-only-css
  "<style>
    #create_thing {
      display: none;
    }
    #thing_show_table tr[data-field=actions] {
      display: none;
    }
  </style>")

(defn add-read-only-css [html]
  (string/replace-first html #"(<link.*?semtag-web.css.*?>)" (str "$1" read-only-css)))

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

(defn build-transform-fn [aspect]
  (let [transform-js-fn (if (or (System/getenv "TEST") (= aspect :test))
                          (comp ensure-relative-paths add-log-capturing) ensure-relative-paths)]
    (if (System/getenv "READ_ONLY")
      (comp add-read-only-css transform-js-fn) transform-js-fn)))

(defn around-build [build-fn]
  (let [new-config (cond-> {}
                     (System/getenv "API_URI") (assoc :api-uri (System/getenv "API_URI"))
                     (System/getenv "READ_ONLY") (assoc :read-only true))
        config-file "app/src/semtag_web/config.clj"
        original-config-body (slurp config-file)]
    (when (seq new-config)
      (println "Updating config with" new-config)
      (spit config-file
            (str original-config-body "\n(def config " (merge config/config new-config) ")")))
    (build-fn)
    (when (seq new-config)
      (spit config-file original-config-body))))

(defn build-app
  "Builds an aspect, :test if no argument is given. It also prepares it to be standalone html and
  adds debugging for the test aspect. Additional behavior can be toggled on with these env
  variables:

  * $API_URI: sets a new services/base-uri.
  * $TEST: acts as if the current aspect were a test aspect by forcing simulated services.
  * $READ_ONLY: disables any write-related UI/functionality e.g. the create_thing form."
  [& args]
  (let [aspect (keyword (or (first args) "test"))
        {html-file :uri} (-> dev/config vals first :aspects aspect)]
    (when-not html-file (throw (ex-info "This aspect does not exist!" {:aspect aspect})))

    (println (format "Building %s app..." aspect))
    (around-build (fn []
                    (time (build/build! (-> dev/config vals first (modify-config aspect)) aspect))))

    ;; I've chosen to modify the final html file rather than add assets because
    ;; hooking into pedestal-app's assets is an undocumented time-sink.
    (println "Writing" (str "out/public" html-file))
    (modify-file (str "out/public" html-file) (build-transform-fn aspect))

    (System/exit 0)))
