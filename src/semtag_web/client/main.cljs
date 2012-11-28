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

(defpartial generate-rows [data]
  [:tbody
    (map
      #(vec
         [:tr
           [:td (:namespace %)]
           [:td [:a {:href (:url %)} (:url %)]]
           [:td (:desc %)]
           [:td (:tags %)]])
      data) ])

(defn button-handler []
  (let [query (jayq.core/val ($ :#url_search_text))
        parent (jayq.core/parent $button)]
    (-> (jayq.core/find parent :h2)
      (jayq.core/inner (str "Search results for '" query "'"))) 
   (jayq.core/ajax
      (str "http://localhost:3000/mls?query=" query)
      {:dataType "edn"
       :error (fn [_ _ err] (js/alert (str "Request failed with: " (pr-str err))))
       :success  (fn [data]
                   (.replaceWith (jayq.core/find parent "table tbody")
                     (generate-rows data)))
       })))

(bind $button "click" button-handler)
