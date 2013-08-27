(ns semtag-web.rendering
  (:require [domina :as dom]
            [domina.css :as css]
            [semtag-web.rendering-util :as util]
            [semtag-web.partials :as p]
            [clojure.string]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.render.push.handlers.automatic :as d])
  (:require-macros [semtag-web.html-templates :as html-templates]))

;; Helper fns

(defn- frequencies-string [items]
  (->> items
       frequencies
       (sort-by #(second %1) (fn [a b] (> a b)))
       (map #(format "%s %s" (second %1) (name (first %1))))
       (clojure.string/join ", ")))

(defn- frequency-stat [title data]
  (format "%s: %s - %s" title (count data) (frequencies-string data)))

;; Rendering fns

(def templates (html-templates/semtag-web-templates))

(defn render-home-page [renderer _ transmitter]
  (let [path [:app-model] ; consider not hard-coding this
        parent (render/get-parent-id renderer path)
        html (templates/add-template renderer path (:semtag-web-page templates))]
    (dom/append! (dom/by-id parent) (html {}))))

(defn render-page [renderer [_ _ _ value :as route] input-queue]
  (case value
    "replace" (dom/set-html! (dom/by-id "main") "OWNED!")
    "noop" (.log js/console "NOOP") ; test route
    (render-home-page renderer route input-queue)))

(defn render-message [renderer [_ path _ new-value] transmitter]
  (dom/set-html! (dom/by-id "search_title") new-value))

(defn render-search-results [_ [_ _ _ new-value] _]
  (let [{:keys [things tags]} new-value]
    (dom/swap-content!
      (dom/by-id "table_stats")
      (p/table-stats (frequency-stat "Tag Type Counts" (map first tags))
                     (frequency-stat "Tag Counts" (flatten (map :tags things)))
                     (frequency-stat "Type Counts" (map :type things))))
    (dom/swap-content!
      (dom/by-id "search_table")
      (p/generate-table "search_table" things
                        :fields [:type :name :url :desc :tags]
                        :row-partial p/tag-search-row
                        :caption (format "Total: %s" (count (map :url things)))))))

(defn url-search [{:keys [transform messages]}]
  (msg/fill transform messages {:query (.-value (dom/by-id "url_search_text"))
                                :search-type (dom/value (css/sel "input[name=search_type]:checked"))}))

(defn render-config []
  (reduce
    into
    ;; Click doesn't work unless this is enabled
    [[#_[:node-create [:app-model] render-home-page]
      [:value [:app-model :page] render-page]
      [:value [:app-model :search-title] render-message]
      [:value [:app-model :search-results] render-search-results]]
     (util/click [:app-model :search] "url_search_button" :fn url-search)]))
