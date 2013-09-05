(ns semtag-web.rendering
  (:require [domina :as dom]
            [domina.css :as css]
            [semtag-web.rendering-util :as util]
            [semtag-web.partials :as p]
            [semtag-web.history :as history]
            [clojure.string]
            [io.pedestal.app.protocols :as prot]
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

(defn render-home-page [renderer [_ path] input-queue]
  (history/navigated input-queue :home)
  (let [html (templates/add-template renderer path (:semtag-web-page templates))]
    ;; didn't use get-parent-id cause it doesn't work for new multi-level paths
    (dom/set-html! (dom/by-id "content") (html {})))
  (prot/put-message input-queue {msg/type :set-value msg/topic [:page] :value "home"}))

(defn clear-id [id]
  (fn [_ _ _] (dom/set-html! (dom/by-id id) "")))

(defn set-search-title [renderer [_ path _ new-value] _]
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

(defn render-types-results [_ [_ _ _ new-value] _]
  (dom/set-html!
    (dom/by-id "content")
    (p/generate-table "type_stats_table" (:results new-value)
                      :caption (format "%s things, %s tags"
                                       (get-in new-value [:counts :thing])
                                       (get-in new-value [:counts :tags]))
                      :row-partial p/type-stats-row
                      :fields [:name :count :name-percent :url-percent])))

(defn render-tags-results [_ [_ _ _ new-value] _]
  (dom/insert-after!
    (dom/by-id "url_search_text")
    (p/generate-datalist new-value)))

(defn render-tag-stats-results [_ [_ _ _ new-value] _]
  (dom/set-html!
    (dom/by-id "content")
    (p/generate-table "tag_stats_table" new-value
                      :row-partial p/tag-stats-row
                      :caption (str "Total: " (count new-value))
                      :fields [:tag :count :desc])))

(defn focus-types [{:keys [transform messages]}]
  (msg/fill transform messages {:value "types"}))

(defn focus-tag-stats [{:keys [transform messages]}]
  (msg/fill transform messages {:value "tag-stats"}))

(defn url-search [{:keys [transform messages]}]
  (msg/fill transform messages {:query (.-value (dom/by-id "url_search_text"))
                                :search-type (dom/value (css/sel "input[name=search_type]:checked"))}))

(defn create-url [{:keys [transform messages]}]
  (msg/fill transform messages {:value (dom/value (dom/by-id "add_url_text"))}))

(defn render-types-page [_ _ input-queue]
  (history/navigated input-queue :types))

(defn render-tag-stats-page [_ _ input-queue]
  (history/navigated input-queue :tag-stats))

(defn render-config []
  (reduce
    into
    [[;; home page
      [:node-create [:app-model :home] render-home-page]
      [:node-destroy [:app-model :home] (clear-id "content")]
      [:value [:app-model :home :search-title] set-search-title]
      [:value [:app-model :home :tags-results] render-tags-results]
      [:value [:app-model :home :search-results] render-search-results]

      ;; types page
      [:node-create [:app-model :types] render-types-page]
      [:node-destroy [:app-model :types] (clear-id "content")]
      [:value [:app-model :types :types-results] render-types-results]

      ;; tag-stats page
      [:node-create [:app-model :tag-stats] render-tag-stats-page]
      [:node-destroy [:app-model :tag-stats] (clear-id "content")]
      [:value [:app-model :tag-stats :tag-stats-results] render-tag-stats-results]]

     ;; navbar
     (util/click [:app-model :navbar :types] "types_link" :fn focus-types)
     (util/click [:app-model :navbar :tag-stats] "tag_stats_link" :fn focus-tag-stats)

     ;; home page
     (util/click [:app-model :home :search] "url_search_button" :fn url-search)
     (util/click [:app-model :home :create-url] "add_url_button" :fn create-url)]))
