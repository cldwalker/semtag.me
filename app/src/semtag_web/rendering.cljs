(ns semtag-web.rendering
  (:require [domina :as dom]
            [domina.css :as css]
            [semtag-web.history :as history]
            [semtag-web.config :as config]
            [semtag-web.route :as route]
            [semtag-web.rendering.util :as util]
            [semtag-web.util :refer [format]]
            [semtag-web.rendering.partials :as p]
            [semtag-web.rendering.spinner :as spinner]
            [semtag-web.rendering.bar-chart :as bar-chart]
            [clojure.string :as string]
            [io.pedestal.app.protocols :as prot]
            [io.pedestal.app.render.events :as events]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.render.push.handlers.automatic :as d])
  (:require-macros [semtag-web.html-templates :as html-templates]))

;; Helper fns

(defn- count-and-group
  "Given a list of words, returns a vector of sorted count and grouped word pairs."
  [words]
  (->> words
       frequencies
       (group-by second)
       (mapv (fn [[k v]] [k (->> v
                                 (map first)
                                 sort
                                 (string/join ", "))]))
       (sort-by first)
       reverse))

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

(defn set-focus-messages [& {:keys [params screen paths]}]
  (cond-> []
    paths (conj {msg/type :add-named-paths msg/topic msg/app-model :name screen :paths paths})
    true (into [{msg/type :set-focus msg/topic msg/app-model :name screen}
                {msg/type :map-value msg/topic [:page] :value (name screen) :params params}])))

(defn dynamic-paths [route screen]
  (case route
    :thing [[:app-model :thing screen] [:app-model :shared]]
    :search [[:app-model :search screen] [:app-model :search-form] [:app-model :shared]]
    :type [[:app-model :type screen] [:app-model :shared]]
    :create [[:app-model :home] [:app-model :search-form] [:app-model :shared]]
    []))

(defn any-href-sets-focus
  "Given an event creates messages to focus a new screen - dynamic or static"
  [{:keys [event]}]
  (let [rel-uri (->> event .-currentTarget .-href (re-find #"#.*?$"))]
    (if-let [route (route/find-dynamic-route rel-uri)]
      (let [params (route/parse-params rel-uri)
            screen (route/url->screen rel-uri params)]
        (swap! route/dynamic-screens assoc screen params)
        (set-focus-messages :screen screen
                            :params params
                            :paths (dynamic-paths route screen)))
      ;; just for static pages
      (if-let [screen (route/url->screen rel-uri)]
        (set-focus-messages :screen screen)
        (.log js/console "No screen found for element" (.-currentTarget event))))))

;; Yes, we should be sending messages to do this separately but
;; that seems like overkill right now
(defn enable-clickable-links-on
  [parent-selector input-queue]
  (events/send-on :click
                  (css/sel (str parent-selector " a"))
                  input-queue
                  #(any-href-sets-focus {:event (.-evt %)})))

(defn href-sets-focus [{:keys [transform messages event]}]
  (if-let [screen (route/url->screen (->> event .-currentTarget .-href (re-find #"#.*?$")))]
    (msg/fill transform messages {:value (name screen) :name screen})
    (.log js/console "No screen found for element" (.-currentTarget event))))

(defn- toggle-dom-id [id event]
  (if (not= "block" (-> (dom/by-id id) .-style .-display))
    (-> (dom/by-id id) .-style .-display (set! "block"))
    (-> (dom/by-id id) .-style .-display (set! "none"))))

(defn- enable-toggle-stats-button [input-queue]
  (events/send-on :click
                  (dom/by-id "toggle_stats")
                  input-queue
                  (partial toggle-dom-id "stats_box")))

;; Edit table cell fns
;;
(def enter-key 13)

(defn- key-pressed
  "If keypressed = keycode then call func"
  [key-code func event]
    (when (= (.-keyCode event) key-code)
      (func event)))

(defn return-key-pressed
  "Creates a fn to be bound to a keypress event given a fn to execute"
  [f]
  (partial key-pressed enter-key f))

(defn- set-edit-state [klass elem]
  (doseq [c (->> (dom/attr elem "class") (re-seq #"\S+") (filter #(re-find #"^edit-" %)))]
    (dom/remove-class! elem c))
  (dom/add-class! elem klass))

(defn saves-edit [input-queue event]
  (.preventDefault event)
  (let [elem (.-target event)
        id (-> elem .-parentNode (dom/attr "data-id"))
        field (-> elem (dom/attr "data-field"))
        value (dom/text elem)
        ;; handle name default
        value (if (= "nil" value) "" value)]
    (.blur elem)
    (prot/put-message input-queue {msg/type :map-value msg/topic [:action] :value :update-thing :params {:id id field value :element (.-target event)}})))

(defn- expand-editable-text [event]
  (let [elem (.-target event)]
    (dom/remove-class! elem "ellipsis")
    ;; quick and dirty way - cleaner way would be to track editing state
    ;; this check ensures we don't clobber that the user has come back to finish edit
    (when (re-find #"\.\.\.$" (dom/text elem))
      (dom/set-text! elem (dom/attr elem "title")))))

(if (:read-only config/config)
  (defn enable-editable-table [dom-id input-queue])

  (defn enable-editable-table [dom-id input-queue]
    (dom/set-attr! (css/sel (str domid " td.editable")) "contentEditable" true)
    ;; this makes links clickable without pushing the cursor out of the cell
    ;; note - these links aren't clickable for vimium
    (dom/set-attr! (css/sel (str domid " td.editable a")) "onmouseover" "this.contentEditable = false")
    (dom/set-attr! (css/sel (str domid " td.editable a")) "onmouseout"  "this.contentEditable = true")

    (doseq [elem (.querySelectorAll js/document (str domid " td.editable"))]
      ;; didn't use events/send-on because it was overriding default keypress behavior
      (.addEventListener elem
                         "keypress"
                         (return-key-pressed (partial saves-edit input-queue)))
      (.addEventListener elem
                         "click"
                         (fn [event]
                           (expand-editable-text event)
                           (set-edit-state "edit-in-progress" (.-target event)))))))

(if (:read-only config/config)
  (defn enable-select-private [dom-id input-queue])

  (defn enable-select-private [dom-id input-queue]
    (events/send-on :change
                    (css/sel (str domid " td.private"))
                    input-queue
                    (fn [e]
                      (let [event (.-evt e)
                            elem (.-target event)
                            td-elem (.-parentNode elem)
                            ;; event happens on select so it takes 2 parents to get to tr
                            id (-> td-elem .-parentNode (dom/attr "data-id"))]
                        [{msg/type :map-value
                          msg/topic [:action]
                          :value :update-thing
                          :params {:id id :private (.-value elem) :element td-elem}}])))))

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
    (dom/set-html! (dom/by-id "content") (html {})))

  (enable-clickable-links-on "#introduction" input-queue)
  (enable-clickable-links-on ".examples" input-queue)
  (events/send-on :click
                  (css/sel "#introduction_toggle")
                  input-queue
                  (partial toggle-dom-id "introduction")))

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

(defn create-thing [{:keys [transform messages]}]
  (msg/fill transform messages {:params {:input (dom/value (dom/by-id "create_thing_text"))}}))

;; Search page
(defn set-search-title [renderer [_ path _ new-value] _]
  (set-page-title new-value))

(defn- add-search-stats [tags things]
  (let [tag-type-counts (count-and-group (map first tags))
        tag-counts (count-and-group (flatten (map :tags things)))
        type-counts (count-and-group (map :type things))]
    (bar-chart/render "#type_counts_chart" type-counts)
    (bar-chart/render "#tag_counts_chart" tag-counts)
    (bar-chart/render "#tag_type_counts_chart" tag-type-counts)))

(defn- search-results-html [things tags]
  (html
    "<button id='toggle_stats' type='button' class='btn btn-info'>Toggle Stats</button>"
    "<div id='stats_box'>"
    "<div id='type_counts_chart'><h4>Type Counts</h4></div>"
    "<div id='tag_counts_chart'><h4>Tag Counts</h4></div>"
    "<div id='tag_type_counts_chart'><h4>Tag Type Counts</h4></div>"
    "<div id='d3_tooltip'></div>"
    "</div>"
    (if (empty? things)
      "<p>No results found.</p>"
      (p/generate-table "search_table" things
                        :fields [:type :name :url :desc :tags :created-at]
                        :row-partial p/tag-search-row
                        :caption (format "Total: %s" (count (map :url things)))))))

(defn render-search-results [_ [_ _ _ new-value] input-queue]
  ;; when switching screens this is nil and we don't want to render
  (when new-value
    (let [{:keys [things tags]} new-value]
      (dom/set-html!
        (dom/by-id "search_results")
        (search-results-html things tags))
      (add-search-stats tags things)
      (enable-toggle-stats-button input-queue)
      (enable-editable-table "#search_table" input-queue)
      (enable-clickable-links-on "#search_table td:not([data-field=url])" input-queue))))

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
                      :caption (string/join ", "
                                            (map #(str (get-in new-value [:counts %]) " " (name %))
                                                 [:types :things :tags :names :urls]))
                      :row-partial p/type-stats-row
                      :fields [:name :desc :count :name-percent :url-percent]
                      :header-attributes [{}
                                          {:title "Description"}
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

  (enable-editable-table "#all_table" input-queue)
  (enable-clickable-links-on "#all_table td:not([data-field=url])" input-queue))

(if (:read-only config/config)
  (defn- enable-delete-thing [input-queue id])

  (defn- enable-delete-thing
    [input-queue id]
    (events/send-on :click
                    (css/sel "td.delete button")
                    input-queue
                    (fn [event]
                      [{msg/type :map-value msg/topic [:action] :value :delete-thing :params {:id id}}]))))

(defn render-thing-results [_ [_ path _ new-value] input-queue]
  (let [thing-id (-> path path->params :id)
        num-id (:id (first new-value))]
    (set-page-title (str "<h1>" thing-id "</h1>"))
    (dom/set-html!
      (dom/by-id "content")
      (p/generate-table "thing_show_table"
                        (conj new-value {:attribute :actions :id num-id})
                        :caption (cond
                                   (re-find #"^\d+$" thing-id) ""
                                   (some #(and (= (:attribute %) :type)
                                               (= (:value %) "type")) new-value) (p/link-type thing-id)
                                   :else (p/link-tagged thing-id))
                        :row-partial p/thing-row
                        :fields [:attribute :value]))
    (enable-editable-table "#thing_show_table" input-queue)
    (enable-select-private "#thing_show_table" input-queue)
    (enable-clickable-links-on "#thing_show_table td:not([data-field=url])" input-queue)
    (enable-clickable-links-on "#thing_show_table caption" input-queue)
    (enable-delete-thing input-queue num-id)))

(defn- add-type-stats [tags things]
  (let [tag-type-counts (count-and-group (map first tags))
        tag-counts (count-and-group (flatten (map :tags things)))]
    (bar-chart/render "#tag_counts_chart" tag-counts)
    (bar-chart/render "#tag_type_counts_chart" tag-type-counts)))

(defn render-type-results [_ [_ path _ new-value] input-queue]
  (let [{:keys [things tags type]} new-value]
    (set-page-title (format "<h1>Type %s %s</h1>"
                            (:name type)
                            (format "<small>&mdash; %s %s</small>"
                                    (if (:desc type) (str (:desc type) "&mdash;") "")
                                    (format "<a href=\"#/thing/%s\">%s</a>"
                                            (:name type)
                                            (if (:read-only config/config) "Show type" "Edit")))))
    (enable-clickable-links-on "#page_title" input-queue)

    (dom/set-html!
     (dom/by-id "content")
      (html
        "<button id='toggle_stats' type='button' class='btn btn-info'>Toggle Stats</button>"
        "<div id='stats_box'>"
        "<div id='tag_counts_chart'><h4>Tag Counts</h4></div>"
        "<div id='tag_type_counts_chart'><h4>Tag Type Counts</h4></div>"
        "<div id='d3_tooltip'></div>"
        "</div>"
        (p/generate-table "type_show_table" things
                          :row-partial p/type-row
                          :caption (str "Total: " (count things))
                          :fields [:name :url :desc :tags :created-at])))
    (add-type-stats tags things))
  (enable-toggle-stats-button input-queue)
  (enable-editable-table "#type_show_table" input-queue)
  (enable-clickable-links-on "#type_show_table td:not([data-field=url])" input-queue))

(defn render-alert-fn
  [alert-type]
  (fn [_ [_ _ _ msg] input-queue]
    (render-alert msg alert-type)
    (enable-clickable-links-on ".alert" input-queue)
    ;; Not interested in massaging messages for this
    (.addEventListener
      (.querySelector js/document "button.close")
      "click"
      (fn [e]
        (-> e .-target .-parentNode .-style .-display (set! "none"))))))

(def render-alert-error (render-alert-fn :danger))
(def render-alert-success (render-alert-fn :success))

;; Yes - this toggles the spinner on/off depending on the value. This
;; seeemed saner than massaging emit deltas or coming up with
;; separate paths just to toggle a value.
(defn render-modal-spinner [_ [_ _ _ new-value] _]
  (spinner/render new-value))

(defn render-edit-completed [_ [_ _ _ new-value] _]
  (set-edit-state "edit-completed" new-value))

(defn render-edit-failed [_ [_ _ _ new-value] _]
  (set-edit-state "edit-failed" new-value))

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

    ;; type page
     [:node-create [:app-model :type :*] navigate-path]
     [:node-destroy [:app-model :type :*] (clear-id "content")]
     [:value [:app-model :type :* :type-results] render-type-results]

    ;; shared
    [:value [:app-model :shared :alert-success] render-alert-success]
    [:value [:app-model :shared :alert-error] render-alert-error]
    [:value [:app-model :shared :modal-spinner] render-modal-spinner]
    [:value [:app-model :shared :edit-completed] render-edit-completed]
    [:value [:app-model :shared :edit-failed] render-edit-failed]
    ;; TODO: have title change with history navigation
    [:value [:app-model :shared :title] render-title]
     ]

     ;; shared
     (util/click [:app-model :shared :links] (css/sel ".navbar a") :fn href-sets-focus)
     (util/click [:app-model :shared :create-thing] "create_thing_button" :fn create-thing)

     ;; search-form
     (util/click [:app-model :search-form :search] "url_search_button" :fn url-search)]))
