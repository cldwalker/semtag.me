(ns semtag-web.rendering
  (:require [domina :as dom]
            [semtag-web.rendering-util :as util]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.render.push.handlers.automatic :as d])
  (:require-macros [semtag-web.html-templates :as html-templates]))

(def templates (html-templates/semtag-web-templates))

(defn render-page [renderer [_ path] transmitter]
  (let [parent (render/get-parent-id renderer path)
        id (render/new-id! renderer path)
        html (templates/add-template renderer path (:semtag-web-page templates))]
    (dom/append! (dom/by-id parent) (html {:id id :message ""}))))

(defn render-message [renderer [_ path _ new-value] transmitter]
  (templates/update-t renderer [:app-model] {:message new-value}))

(defn url-search [{:keys [transform messages]}]
  (msg/fill transform messages {:value (.-value (dom/by-id "url_search_text"))}))

(defn render-config []
  (reduce
    into
    [[[:node-create [:app-model] render-page]
      [:node-destroy [:app-model] d/default-exit]
      [:value [:app-model :greeting] render-message]]
     (util/click [:app-model :set-greeting] "url_search_button" :fn url-search)]))
