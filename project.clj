(defproject semtag-web "0.1.0-SNAPSHOT"
  :description "cljs app that communicates via clojure data using CORS requests"
  :url "http://github.com/cldwalker/semtag-web"
  :ring  {:handler semtag-web.server/app}
  :plugins  [[lein-ring "0.8.2"] [lein-cljsbuild "0.2.9"]]
  :dependencies [[org.clojure/clojure "1.5.0"]
                 [org.clojure/clojurescript "0.0-1535"]
                 [hiccup "1.0.0"]
                 [jayq "0.3.0"]
                 [crate "0.2.1"]
                 [io.pedestal/pedestal.service "0.1.1"]
                 [io.pedestal/pedestal.jetty "0.1.1"]

                 ;; Logging
                 [ch.qos.logback/logback-classic "1.0.7"]
                 [org.slf4j/jul-to-slf4j "1.7.2"]
                 [org.slf4j/jcl-over-slf4j "1.7.2"]
                 [org.slf4j/log4j-over-slf4j "1.7.2"]]
  :cljsbuild {
    :builds [
      {:source-path "src"
       :compiler {:output-dir "resources/public/cljs/"
                  :output-to "resources/public/cljs/main.js"
                  :optimizations :simple
                  :pretty-print true}}]}
  :resource-paths ["config" "resources"]
  :main ^{:skip-aot true} semtag-web.server)
