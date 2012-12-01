(defproject semtag-web "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :ring  {:handler semtag-web.server/app}
  :plugins  [[lein-ring "0.7.5"] [lein-cljsbuild "0.2.9"]]
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/clojurescript "0.0-1535"]
                 [hiccup-bootstrap "0.1.1"]
                 [jayq "0.3.0"]
                 [crate "0.2.1"]
                 [compojure "1.1.3"]
                 [ring/ring-devel "1.1.6"]]
  :cljsbuild {
    :builds [
      {:source-path "src"
       :compiler {:output-dir "resources/public/cljs/"
                  :output-to "resources/public/cljs/main.js"
                  :optimizations :simple
                  :pretty-print true}}]}
  :main ^{:skip-aot true} semtag-web.server)
