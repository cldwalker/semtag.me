(ns semtag-web.rendering
  (:require [domina :as dom]
            [domina.css :as css]
            [semtag-web.rendering-util :as util]
            [semtag-web.partials :as p]
            [semtag-web.history :as history]
            [semtag-web.route :as route]
            [clojure.string :as string]
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
       (string/join ", ")))

(defn- frequency-stat [title data]
  (format "%s: %s - %s" title (count data) (frequencies-string data)))

(defn clear-id [id]
  (fn [_ _ _] (dom/set-html! (dom/by-id id) "")))

(defn- target-screen [event]
  (let [current-uri (str (.-origin window.location) (.-pathname window.location))
        target-uri (-> event .-currentTarget .-href)
        rel-target-uri (string/replace target-uri current-uri "")]
    (get route/inv-routes rel-target-uri)))

(defn navigate-fn [screen]
  (fn [_ _ input-queue]
    (history/navigated input-queue screen)))

(defn render-alert
  "Adds an alert box at the top of the page"
  [msg alert-type]
  (dom/prepend! (dom/by-id "main")
                (p/alert msg (str "alert-" (name alert-type)))))

;; Rendering fns

(def templates (html-templates/semtag-web-templates))

;;; Home
;;;
(defn render-home-page [renderer [_ path] input-queue]
  (history/navigated input-queue :home)
  (let [html (templates/add-template renderer path (:semtag-web-page templates))]
    ;; didn't use get-parent-id cause it doesn't work for new multi-level paths
    (dom/set-html! (dom/by-id "content") (html {}))))

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

(defn render-tags-results [_ [_ _ _ new-value] _]
  (dom/insert-after!
    (dom/by-id "url_search_text")
    (p/generate-datalist new-value)))

(defn url-search [{:keys [transform messages]}]
  (let [search-map {:query (.-value (dom/by-id "url_search_text"))
                    :search-type (dom/value (css/sel "input[name=search_type]:checked"))}
        search-id (keyword (str "search-" (hash (sorted-map search-map))))]
    ;; needed for history navigation
    (swap! route/dynamic-screens assoc search-id search-map)
    (msg/fill transform messages (assoc search-map
                                        :name search-id
                                        :paths [[:app-model :search search-id] [:app-model :home] [:app-model :navbar]]))))

(defn create-url [{:keys [transform messages]}]
  (msg/fill transform messages {:value (dom/value (dom/by-id "add_url_text"))}))

;;; Other pages
;;;
(defn render-types-results [_ [_ _ _ new-value] _]
  (dom/set-html!
    (dom/by-id "content")
    (p/generate-table "type_stats_table" (:results new-value)
                      :caption (format "%s things, %s tags"
                                       (get-in new-value [:counts :thing])
                                       (get-in new-value [:counts :tags]))
                      :row-partial p/type-stats-row
                      :fields [:name :count :name-percent :url-percent])))



(defn render-tag-stats-results [_ [_ _ _ new-value] _]
  (dom/set-html!
    (dom/by-id "content")
    (p/generate-table "tag_stats_table" new-value
                      :row-partial p/tag-stats-row
                      :caption (str "Total: " (count new-value))
                      :fields [:tag :count :desc])))

(defn render-all-results [_ [_ _ _ new-value] _]
  (dom/set-html!
    (dom/by-id "content")
    (p/generate-table "all_table" new-value
                      :row-partial p/all-row
                      :caption (str "Total: " (count new-value))
                      :fields [:type :name :url :tags :created-at])))

(defn href-sets-focus [{:keys [transform messages event]}]
  (if-let [screen (target-screen event)]
    (msg/fill transform messages {:value (name screen) :name screen})
    (.log js/console "No screen found for element" (.-currentTarget event))))

(defn render-alert-error [_ [_ _ _ msg] _]
  (render-alert msg :error))

(defn navigate-search  [_ [_ path] input-queue]
  (history/navigated input-queue (last path)))

;; TODO - undo for all :value's that render
(defn render-config []
  (reduce
    into
    [[;; home page
      [:node-create [:app-model :home] render-home-page]
      [:node-destroy [:app-model :home] (clear-id "content")]
      [:value [:app-model :home :tags-results] render-tags-results]

      ;; types page
      [:node-create [:app-model :types] (navigate-fn :types)]
      [:node-destroy [:app-model :types] (clear-id "content")]
      [:value [:app-model :types :types-results] render-types-results]

      ;; tag-stats page
      [:node-create [:app-model :tag-stats] (navigate-fn :tag-stats)]
      [:node-destroy [:app-model :tag-stats] (clear-id "content")]
      [:value [:app-model :tag-stats :tag-stats-results] render-tag-stats-results]

     ;; all page
     [:node-create [:app-model :all] (navigate-fn :all)]
     [:node-destroy [:app-model :all] (clear-id "content")]
     [:value [:app-model :all :all-results] render-all-results]

     ;; search page
     [:node-create [:app-model :search :*] navigate-search]
    ;; TODO - still need to clear up more of table
     [:node-destroy [:app-model :search :*] (clear-id "table_stats")]
     [:value [:app-model :search :* :search-title] set-search-title]
     [:value [:app-model :search :* :search-results] render-search-results]

    ;; navbar/shared
    [:value [:app-model :navbar :alert-error] render-alert-error]
     ]

     ;; navbar
     (util/click [:app-model :navbar :links] (css/sel ".navbar a") :fn href-sets-focus)

     ;; home page
     (util/click [:app-model :home :search] "url_search_button" :fn url-search)
     (util/click [:app-model :home :create-url] "add_url_button" :fn create-url)]))
