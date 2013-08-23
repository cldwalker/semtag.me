(ns semtag-web.rendering
  (:require [domina :as dom]
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

(defn render-page [renderer [_ path] transmitter]
  (let [parent (render/get-parent-id renderer path)
        html (templates/add-template renderer path (:semtag-web-page templates))]
    (dom/append! (dom/by-id parent) (html {}))))

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
  (msg/fill transform messages {:value (.-value (dom/by-id "url_search_text"))}))

(defn render-config []
  (reduce
    into
    [[[:node-create [:app-model] render-page]
      [:node-destroy [:app-model] d/default-exit]
      [:value [:app-model :search-title] render-message]
      [:value [:app-model :search-results] render-search-results]]
     (util/click [:app-model :search] "url_search_button" :fn url-search)
     (util/click [:app-model :search-title] "add_url_button" :fn url-search)]))
