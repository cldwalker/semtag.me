(ns semtag-web.rendering
  (:require [domina :as dom]
            [domina.css :as css]
            [semtag-web.history :as history]
            [semtag-web.route :as route]
            [semtag-web.rendering.util :as util]
            [semtag-web.util :refer [format]]
            [semtag-web.rendering.partials :as p]
            [semtag-web.rendering.spinner :as spinner]
            [clojure.string :as string]
            [io.pedestal.app.protocols :as prot]
            [io.pedestal.app.render.events :as events]
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

(defn render-alert
  "Adds an alert box at the top of the page"
  [msg alert-type]
  (dom/prepend! (dom/by-id "content")
                (p/alert msg (str "alert-" (name alert-type)))))

(defn- html
  "Like str but for concating strings and dom nodes"
  [& args]
  (apply str (map #(if (string? %) % (.-outerHTML %)) args)))

(defn path->params
  "Assumes 2nd to last element in path is a dynamic screen e.g. :thing-id_ID"
  [path]
  (->> (nth path (- (count path) 2)) (get @route/dynamic-screens)))

(defn set-page-title [text]
  (dom/set-html! (dom/by-id "page_title") text))

;; Rendering fns e.g. (fn [_ _ _])
;;
(defn clear-id [id]
  (fn [_ _ _] (dom/set-html! (dom/by-id id) "")))

(defn navigate-fn [screen]
  (fn [_ _ input-queue]
    (history/navigated input-queue screen)))

(defn navigate-path
  "Navigate paths whose last element is the navigated id"
  [_ [_ path] input-queue]
  (history/navigated input-queue (last path)))

;; Event helper fns

(defn dynamic-focus-messages [& {:keys [params screen paths]}]
  [{msg/type :add-named-paths msg/topic msg/app-model :name screen :paths paths}
   {msg/type :set-focus msg/topic msg/app-model :name screen}
   {msg/type :map-value msg/topic [:page] :value (name screen) :params params}])

(defn dynamic-paths [route screen]
  (case route
    :thing [[:app-model :thing screen] [:app-model :shared]]
    :search [[:app-model :search screen] [:app-model :search-form] [:app-model :shared]]
    :type [[:app-model :type screen] [:app-model :shared]]
    []))

(defn dynamic-href-sets-focus
  "Given an event creates messages to focus a new dynamic screen"
  [{:keys [event]}]
  (let [rel-uri (->> event .-currentTarget .-href (re-find #"#.*?$"))]
    (if-let [route (route/find-dynamic-route rel-uri)]
      (let [params (route/parse-params rel-uri)
            screen (route/url->screen rel-uri params)]
        (swap! route/dynamic-screens assoc screen params)
        (dynamic-focus-messages :screen screen
                                :params params
                                :paths (dynamic-paths route screen)))
      (.log js/console "No screen found for element" (.-currentTarget event)))))

;; Yes, we should be sending messages to do this separately but
;; that seems like overkill right now
(defn enable-clickable-links-on
  [parent-selector input-queue]
  (events/send-on :click
                  (css/sel (str parent-selector " a"))
                  input-queue
                  #(dynamic-href-sets-focus {:event (.-evt %)})))

(defn href-sets-focus [{:keys [transform messages event]}]
  (if-let [screen (route/url->screen (->> event .-currentTarget .-href (re-find #"#.*?$")))]
    (msg/fill transform messages {:value (name screen) :name screen})
    (.log js/console "No screen found for element" (.-currentTarget event))))

;; Rendering fns

(def templates (html-templates/semtag-web-templates))

(defn render-home-page [_ _ input-queue]
    (set-page-title "Welcome to semtag!")
    (history/navigated input-queue :home))

;;; Search-form
;;;
(defn render-search-form [renderer [_ path] input-queue]
  (let [html (templates/add-template renderer path (:semtag-web-page templates))]
    ;; didn't use get-parent-id cause it doesn't work for new multi-level paths
    (dom/set-html! (dom/by-id "content") (html {}))))

(defn render-tags-results [_ [_ _ _ new-value] _]
  (dom/insert-after!
    (dom/by-id "url_search_text")
    (p/generate-datalist new-value)))

(defn url-search [{:keys [transform messages]}]
  (let [search-map {:query (.-value (dom/by-id "url_search_text"))
                    :search-type (dom/value (css/sel "input[name=search_type]:checked"))}
        search-id (route/create-screen-id :search search-map)]
    ;; needed for history navigation
    (swap! route/dynamic-screens assoc search-id search-map)
    (msg/fill transform messages {:name search-id
                                  :params search-map
                                  :paths (dynamic-paths :search search-id)})))

(defn create-url [{:keys [transform messages]}]
  (msg/fill transform messages {:value (dom/value (dom/by-id "add_url_text"))}))

;; Search page
(defn set-search-title [renderer [_ path _ new-value] _]
  (set-page-title new-value))

(defn render-search-results [_ [_ _ _ new-value] input-queue]
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
                        :caption (format "Total: %s" (count (map :url things)))))
    (enable-clickable-links-on "#search_table td:not([data-field=url])" input-queue)))

;; we'd like to destroy/hide these but that requires changing render-search-results
(defn clear-search [_ _ _]
  (dom/set-html! (dom/by-id "table_stats") "")
  (dom/set-html! (dom/by-id "search_table") ""))

;;; Other pages
;;;
(defn render-types-results [_ [_ _ _ new-value] input-queue]
  (set-page-title "<h1>Type Statistics <small>Lists all thing types with statistics for each type</small></h1>")
  (dom/set-html!
   (dom/by-id "content")
   (p/generate-table "type_stats_table" (:results new-value)
                     :caption (format "%s things, %s tags"
                                      (get-in new-value [:counts :thing])
                                      (get-in new-value [:counts :tags]))
                     :row-partial p/type-stats-row
                     :fields [:name :count :name-percent :url-percent]
                     :header-attributes [{}
                                         {:title "Number of things for a type"}
                                         {:title "Percent of things for a type that have a name"}
                                         {:title "Percent of things for a type that have a url"}]))

  (enable-clickable-links-on "#type_stats_table" input-queue))

(defn render-tag-stats-results [_ [_ _ _ new-value] input-queue]
  (set-page-title "<h1>Tag Statistics <small>Lists all tags with statistics for each tag</small></h1>")
  (dom/set-html!
   (dom/by-id "content")
   (p/generate-table "tag_stats_table" new-value
                     :row-partial p/tag-stats-row
                     :caption (str "Total: " (count new-value))
                     :fields [:tag :count :desc]
                     :header-attributes [{}
                                         {:title "Number of things with a tag"}
                                         {:title "List of tag counts by type for a tag"}]))

  (enable-clickable-links-on "#tag_stats_table" input-queue))

(defn render-all-results [_ [_ _ _ new-value] input-queue]
  (set-page-title "<h1>Latest Things</h1>")
  (dom/set-html!
   (dom/by-id "content")
   (p/generate-table "all_table" new-value
                     :row-partial p/all-row
                     :caption (str "Total: " (count new-value))
                     :fields [:type :name :url :tags :created-at]))
  (enable-clickable-links-on "#all_table td:not([data-field=url])" input-queue))

(defn render-thing-results [_ [_ path _ new-value] input-queue]
  (let [thing-id (-> path path->params :id)]
    (set-page-title (str "<h1>" thing-id "</h1>"))
    (dom/set-html!
      (dom/by-id "content")
      (p/generate-table "thing_show_table"
                        (conj new-value {:attribute :actions :id (:id (first new-value))})
                        :caption (if (re-find #"\d+$" thing-id) "" (p/link-tagged thing-id))
                        :row-partial p/thing-row
                        :fields [:attribute :value])))
  (enable-clickable-links-on "#thing_show_table td:not([data-field=url])" input-queue)
  (enable-clickable-links-on "#thing_show_table caption" input-queue))

(defn render-type-results [_ [_ path _ new-value] input-queue]
  (let [{:keys [things tags]} new-value
        type (-> path path->params :name)]
    (set-page-title  (str "<h1>Type " type "</h1>"))
    (dom/set-html!
     (dom/by-id "content")
     (html (p/table-stats (frequency-stat "Tag Type Counts" (map first tags))
                          (frequency-stat "Tag Counts" (flatten (map :tags things))))
           (p/generate-table "type_show_table" things
                             :row-partial p/type-row
                             :caption (str "Total: " (count things))
                             :fields [:name :url :desc :tags :created-at]))))
  (enable-clickable-links-on "#type_show_table td:not([data-field=url])" input-queue))

(defn render-alert-error [_ [_ _ _ msg] _]
  (render-alert msg :danger)
  ;; Not interested in massaging messages for this
  (doto (.querySelector js/document "button.close")
    (.addEventListener "click"
                       (fn [e]
                         (-> e .-target .-parentNode .-style .-display (set! "none"))))))

;; Yes - this toggles the spinner on/off depending on the value. This
;; seeemed saner than massaging emit deltas or coming up with
;; separate paths just to toggle a value.
(defn render-modal-spinner [_ [_ _ _ new-value] _]
  (spinner/render new-value))

(defn render-title [_ [_ _ _ new-value] _]
  (-> (.querySelector js/document "title") .-innerHTML (set! (str "Semtag - " new-value))))

;; TODO - undo for all :value's that render
(defn render-config []
  (reduce
    into
    [[[:node-create [:app-model :home] render-home-page]
      ;; nothing to destroy yet

      ;; search-form section
      [:node-create [:app-model :search-form] render-search-form]
      [:node-destroy [:app-model :search-form] (clear-id "content")]
      [:value [:app-model :search-form :tags-results] render-tags-results]

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
     [:node-create [:app-model :search :*] navigate-path]
     [:node-destroy [:app-model :search :*] clear-search]
     [:value [:app-model :search :* :search-title] set-search-title]
     [:value [:app-model :search :* :search-results] render-search-results]

    ;; thing page
     [:node-create [:app-model :thing :*] navigate-path]
     [:node-destroy [:app-model :thing :*] (clear-id "content")]
     [:value [:app-model :thing :* :thing-results] render-thing-results]

    ;; thing page
     [:node-create [:app-model :type :*] navigate-path]
     [:node-destroy [:app-model :type :*] (clear-id "content")]
     [:value [:app-model :type :* :type-results] render-type-results]

    ;; shared
    [:value [:app-model :shared :alert-error] render-alert-error]
    [:value [:app-model :shared :modal-spinner] render-modal-spinner]
    ;; TODO: have title change with history navigation
    [:value [:app-model :shared :title] render-title]
     ]

     ;; shared
     (util/click [:app-model :shared :links] (css/sel ".navbar a") :fn href-sets-focus)

     ;; search-form
     (util/click [:app-model :search-form :search] "url_search_button" :fn url-search)
     (util/click [:app-model :search-form :create-url] "add_url_button" :fn create-url)]))
