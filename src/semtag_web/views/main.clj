(ns semtag-web.views.main
  (:require [semtag-web.views.common :as common]
            [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpage]]
        [hiccup.core]
        [hiccup.page]
        [hiccup.bootstrap.page]))

(defpage "/" []
         (common/layout
           [:div#content]))

(defpage "/urls" []
  (html5
    [:head
      [:title "Semtag Web"]
      (include-bootstrap)
      (include-css "/css/application.css")]
    [:body
      [:div#main
       [:div.top_box
        [:input {:type "text" :id "url_search_text"}]
        [:button {:class "btn-primary" :id "url_search_button"} "Search"]
        [:h2 "No search results yet"]
        [:table#search_table {:class "table table-bordered table-striped"}
         [:thead
          [:tr
           [:th "Url"]
           [:th "Description"] 
           [:th "Tags"]]]
         [:tbody
          [:tr
           [:td "http://www.theonion.com/"]
           [:td "for realz"]
           [:td "funny"]]]]]]
       (cljs/include-scripts :with-jquery)
     ]))

(defpage "/url_search" []
    (prn-str [{:name "http://news.ycombinator.com" :desc "time sink" :tags "dumb"}
              {:name "google.com" :desc "useful" :tags "search"}]))
