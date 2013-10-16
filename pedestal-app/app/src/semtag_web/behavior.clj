(ns ^:shared semtag-web.behavior
    (:require [io.pedestal.app :as app]
              [semtag-web.route :as route]
              [io.pedestal.app.messages :as msg]))

;; Transform fns
;;
(defn set-value [old-value message]
  (:value message))

(defn map-value [_ message]
  (dissoc message msg/topic msg/type))

;; Effect fns
;;
;; pass full message so we can differentiate between effects in services.cljs
(defn publish-message [{:keys [message]}]
  ;; needs to return a collection
  [message])

;; Emit fns
;;
(defn search-form-deltas []
  [[:transform-enable [:app-model :search-form :create-url] :create-url [{msg/type :set-value msg/topic [:create-url] (msg/param :value) {}}]]
   ;; Using add-named-paths creates dynamic focii. With this approach each search result is
   ;; navigable via html5 history. Although adding a named path only needs to happen once per unique
   ;; search, the cost of sending an :add-named-paths message is pretty low - just an assoc.
   [:transform-enable [:app-model :search-form :search] :search [{msg/type :add-named-paths msg/topic msg/app-model (msg/param :name) {} (msg/param :paths) {}}
                                                                 {msg/type :set-focus msg/topic msg/app-model (msg/param :name) {}}
                                                                 {msg/type :map-value msg/topic [:page] :value "search" (msg/param :params) {}}]]])


(defn navbar-deltas []
  [[:transform-enable [:app-model :navbar :links] :links [{msg/type :map-value msg/topic [:page] (msg/param :value) {}}
                                                          {msg/type :set-focus msg/topic msg/app-model (msg/param :name) {}}]]])

(defn init-home [_]
  [[:node-create [:app-model :home]]])

(defn init-types [_]
  [[:node-create [:app-model :types]]])

(defn init-tag-stats [_]
  [[:node-create [:app-model :tag-stats]]])

(defn init-all [_]
  [[:node-create [:app-model :all]]])

(defn page-deltas [{:keys [new-model]}]
  (when-let [route (route/dynamic-screen->route (str (get-in new-model [:page :value])))]
    [[:node-create [:app-model route (route/create-screen-id route (get-in new-model [:page :params]))]]]))

(def app
  {:version 2
   ;; [:page] msg path used to trigger on screen load effects since :set-focus can't do it
   :transform [;; general
               [:map-value [:page] map-value]
               [:set-value [:alert-error] set-value]
               [:set-value [:modal-spinner] set-value]

               ;; specific effects
               [:set-value [:create-url] set-value]
               [:set-value [:types-results] set-value]
               [:set-value [:tags-results] set-value]
               [:set-value [:tag-stats-results] set-value]
               [:set-value [:all-results] set-value]
               [:set-value [:* :thing-results] set-value]
               [:set-value [:* :type-results] set-value]

               ;; search
               [:set-value [:* :search-title] set-value]
               [:set-value [:* :search-results] set-value]]
   :effect #{[#{[:page] [:create-url]} publish-message]}
   :emit [{:init init-home}

          {:init search-form-deltas}
          [#{[:tags-results]} (app/default-emitter [:app-model :search-form])]

          {:init init-types}
          [#{[:types-results]} (app/default-emitter [:app-model :types])]

          {:init init-tag-stats}
          [#{[:tag-stats-results]} (app/default-emitter [:app-model :tag-stats])]

          {:init init-all}
          [#{[:all-results]} (app/default-emitter [:app-model :all])]

          [#{[:page]} page-deltas]
          [#{[:* :thing-results]} (app/default-emitter [:app-model :thing])]
          [#{[:* :type-results]} (app/default-emitter [:app-model :type])]
          [#{[:* :search-title] [:* :search-results]} (app/default-emitter [:app-model :search])]

          {:init navbar-deltas}
          [#{[:alert-error] [:modal-spinner]} (app/default-emitter [:app-model :navbar])]
          #_[#{[:*]} (app/default-emitter [:app-model])]]
   :focus {:home [[:app-model :home] [:app-model :search-form] [:app-model :navbar]]
           :types [[:app-model :types] [:app-model :navbar]]
           :tag-stats [[:app-model :tag-stats] [:app-model :navbar]]
           :all [[:app-model :all] [:app-model :navbar]]
           ;; dynamic focii we define with :search transform
           ;:search-* [[:app-model :search-*] [:app-model :search-form] [:app-model :navbar]]
           :default :home}})

