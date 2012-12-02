(ns semtag-web.views.main
  (:require [hiccup.page :refer [html5 include-js include-css]]
            [hiccup.bootstrap.page :refer [include-bootstrap]]))

(defn main-layout [body]
  (html5
    [:head
      [:title "Semtag"]
      (include-css "/css/application.css")
     ]
    [:body
     [:div#main body] 
      (include-js "/js/jquery-1.8.3.min.js")
      (include-bootstrap)
      (include-js "/cljs/main.js")]))

(defn tag-show [tag]
  (main-layout
      [ :div#tag_box.top_box.hero-unit
       (str "Tag:" tag) 
       ]
    ))

(defn mls []
  (main-layout
     [:div#search_box.top_box.hero-unit
      [:form.form-search {:onsubmit "return false;"}
        [:input {:type "text" :class "search-query" :autofocus "autofocus" :id "url_search_text"}] 
        [:button {:class "btn-primary" :id "url_search_button"} "Search"]] 
      [:h2 ""]
      [:table#search_table {:class "table table-bordered table-striped"}
       [:caption ""]
       [:thead
        [:tr
         [:th "Namespace"]
         [:th "Url"]
         [:th "Description"] 
         [:th "Tags"]]]
       [:tbody]]]))
