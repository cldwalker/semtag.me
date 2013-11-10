(ns semtag-web.tasks
  "Tasks to run from the commandline"
  (:require [io.pedestal.app-tools.build :as build]
            [clojure.string :as string]
            [clojure.java.shell :as sh]
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

(def disable-write-js
  "(defn enable-editable-table [dom-id input-queue])")

;; I tried different ways to modify the production js file but found none that worked:
;; - using window.onload was too late to get recognized
;; - redefining semtag_web.start.main to add a callback was too late for advanced compilation
;; - removing event listeners wouldn't have worked (since they could get added in another screen)
(defn- around-build [build-fn]
  (when (System/getenv "READ_ONLY")
    (-> "app/src/semtag_web/rendering.cljs" slurp (str "\n" disable-write-js)
        (as-> new-body
          (spit "app/src/semtag_web/rendering.cljs" new-body))))
  (build-fn)
  (when (System/getenv "READ_ONLY")
    (sh/sh "git" "checkout" "app/src/semtag_web/rendering.cljs")))

(defn build-app
  "Builds an aspect, :test if no argument is given. It also prepares it to be standalone html and
  adds debugging for the test aspect. Additional behavior can be toggled on with these env
  variables:

  * $API_URI: sets a new services/base-uri.
  * $TEST: acts as if the current aspect were a test aspect by forcing simulated services.
  * $READ_ONLY: disables any write-related UI/functionality e.g. the create_thing form."
  [& args]
  (let [aspect (keyword (or (first args) "test"))
        {html-file :uri js-file :out-file} (-> dev/config vals first :aspects aspect)]
    (when-not html-file (throw (ex-info "This aspect does not exist!" {:aspect aspect})))

    (println (format "Building %s app..." aspect))
    (around-build (fn []
                    (time (build/build! (-> dev/config vals first (modify-config aspect)) aspect))))

    (println "Writing" (str "out/public" html-file))
    (modify-file (str "out/public" html-file) (build-transform-fn aspect))

    (when-let [uri (System/getenv "API_URI")]
      (println "Writing" (str "out/public/generated-js/" js-file))
      (modify-file (str "out/public/generated-js/" js-file) #(string/replace-first % "http://localhost:3000/api" uri))))
  (System/exit 0))