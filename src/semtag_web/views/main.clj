(ns semtag-web.views.main
  (:require [hiccup.page :refer [html5 include-js include-css]]
            [hiccup.bootstrap.page :refer [include-bootstrap]]))

(defn mls []
  (html5
    [:head
      [:title "Semtag Web"]
      (include-css "/css/application.css")
     ]
    [:body
      [:div#main
       [:div.top_box
        [:input {:type "text" :autofocus "autofocus" :id "url_search_text"}]
        [:button {:class "btn-primary" :id "url_search_button"} "Search"]
        [:h2 "No search results yet"]
        [:table#search_table {:class "table table-bordered table-striped"}
         [:caption ""]
         [:thead
          [:tr
           [:th "Namespace"]
           [:th "Url"]
           [:th "Description"] 
           [:th "Tags"]]]
         [:tbody]]]]
      (include-js "/js/jquery-1.8.3.min.js")
      (include-bootstrap)
      (include-js "/cljs/bootstrap.js")]))
