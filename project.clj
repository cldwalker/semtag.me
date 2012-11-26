(defproject semtag-web "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [noir-cljs "0.3.4"]
                 [hiccup-bootstrap "0.1.1"]
                 [jayq "0.3.0"]
                 [fetch "0.1.0-alpha2"]
                 [crate "0.2.1"]
                 [noir "1.3.0-beta8"]]
  :cljsbuild {:builds [{}]}
  :main ^{:skip-aot true} semtag-web.server)
