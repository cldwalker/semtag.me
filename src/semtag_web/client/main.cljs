(ns semtag-web.client.main
  (:require ;[noir.cljs.client.watcher :as watcher]
            ;[clojure.browser.repl :as repl]
            [crate.core :as crate])
  (:use [jayq.core :only [$ append bind] :as jq])
  (:use-macros [crate.def-macros :only [defpartial]]))

;;************************************************
;; Dev stuff
;;************************************************

#_(watcher/init)
;;(repl/connect "http://localhost:9000/repl")

;;************************************************
;; Code
;;************************************************

(def $button ($ :#url_search_button))

(defpartial up-and-running []
  [:p.alert "CLJS is compiled and active... Time to build something!"])

(defn button-handler []
  (let [query (jayq.core/val ($ :#url_search_text))
        parent (jayq.core/parent $button)]
    (-> (jayq.core/find parent :h2)
      (jayq.core/inner (str "Search results for '" query "'")))))

(bind $button "click" button-handler)
