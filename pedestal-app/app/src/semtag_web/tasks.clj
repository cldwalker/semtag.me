(ns semtag-web.tasks
  "Tasks to run from the commandline"
  (:require [io.pedestal.app-tools.build :as build]
            [clojure.string :as string]
            [io.pedestal.app-tools.dev :as dev]))

(defn- ensure-relative-js-paths
  "Hack until I can find out what set of compiler options works"
  [app-file]
  (-> app-file
      slurp
      (string/replace #"/generated-js" "generated-js")
      (as-> new-body
        (spit app-file new-body))))

(defn build-test-app
  "Builds :test aspect"
  [& args]
  (println "Building test app...")
  (time (build/build! (-> dev/config vals first) :test))
  (ensure-relative-js-paths "out/public/semtag-web-test.html"))
