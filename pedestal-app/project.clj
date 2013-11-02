(defproject semtag-web "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1978"]
                 [net.drib/strokes "0.5.0"]
                 [domina "1.0.1"]
                 [crate "0.2.1"]
                 ;; exclusions necessary until app gets its logback act together
                 [io.pedestal/pedestal.app "0.2.0" :exclusions [org.slf4j/slf4j-api]]
                 [io.pedestal/pedestal.app-tools "0.2.0"]]
  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[clj-webdriver/clj-webdriver "0.6.0"]
                                  [ilshad/pedestal-introspector "0.1.0"]
                                  [com.github.detro.ghostdriver/phantomjsdriver "1.0.4"]]
                   :plugins [[com.cemerick/austin "0.1.0"]]}}
  :min-lein-version "2.0.0"
  :source-paths ["app/src" "app/templates"]
  :resource-paths ["config"]
  :target-path "out/"
  :repl-options  {:init-ns user
                  :init (try
                          (use 'io.pedestal.app-tools.dev)
                          (catch Throwable t
                            (println "ERROR: There was a problem loading io.pedestal.app-tools.dev")
                            (clojure.stacktrace/print-stack-trace t)
                            (println)))
                  :welcome (println "Welcome to pedestal-app! Run (tools-help) to see a list of useful functions.")}
  :test-selectors {:focus :focus}
  :aliases {"build-app" ["run" "-m" "semtag-web.tasks/build-app"]}
  :main ^{:skip-aot true} io.pedestal.app-tools.dev)
