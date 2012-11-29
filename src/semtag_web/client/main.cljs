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
(def $text-field ($ :#url_search_text))

(def enter-key 13)

(defn- key-pressed 
  "If keypressed = keycode then call func"
  [key-code func event]
    (when  (=  (.-keyCode event) key-code)
      (func)))

(defn return-key-pressed [f]
  (partial key-pressed enter-key f))

(defn- shorten-to [s max-length]
  (let [s-length (count s)]
    (if (> s-length max-length)
      (str (.substring s 0 (- max-length 3)) "...")
      s)))

(defpartial generate-rows [data]
  [:tbody
    (map
      #(vec
         [:tr
           [:td (:namespace %)]
           [:td [:a {:href (:url %)} (shorten-to (:url %) 40)]]
           [:td (:desc %)]
           [:td (:tags %)]])
      data) ])

(defn- update-table [parent data]
  (-> ( jayq.core/find parent "table caption")
    (jayq.core/inner (str "Total: " (count data))))
  (.replaceWith (jayq.core/find parent "table tbody")
    (generate-rows data)))

(defn mls-search []
  (let [query (jayq.core/val $text-field)
        parent (jayq.core/parent $button)]
    (-> (jayq.core/find parent :h2)
      (jayq.core/inner (str "Search results for '" query "'"))) 
   (jayq.core/ajax
      (str "http://localhost:3000/mls?query=" query)
      {:dataType "edn"
       :error (fn [_ _ err] (js/alert (str "Request failed with: " (pr-str err))))
       :success (partial update-table parent)
       })))

(bind $button "click" mls-search)
(bind $text-field :keypress (return-key-pressed mls-search))
