(ns semtag-web.views.main
  (:require [hiccup.page :refer [html5 include-js include-css]]))

(defn- navbar []
  [:div.navbar.navbar-fixed-top
   [:div.navbar-inner
    [:div.container-fluid
      [:a.brand {:href "/"} "Home"] 
      [:div.nav-collapse
        [:ul.nav
         [:li [:a {:href "/type-stats"} "Type Stats"]]
         [:li [:a {:href "/tag-stats"} "Tag Stats"]]
         [:li [:a {:href "/all"} "All The Things"]]]]]]])

(defn main-layout [body & {:as options}]
  (html5
    [:head
      [:title "Semtag"]
     (include-js "/js/jquery-1.8.3.min.js")
     (include-js "/js/jquery.tablesorter.min.js")
     (include-js "/js/jquery.timeago.js")
     (include-css "/bootstrap/css/bootstrap.css")
     (include-css "/bootstrap/css/bootstrap-responsive.css")
     (include-js  "/bootstrap/js/bootstrap.js")
     (include-css "/css/application.css")
     ]
    [:body
     (navbar)
     [:div#main body]
      (include-js "/cljs/main.js")
     (when-let [js-fn (:js-fn options)] 
      [:script {:type "text/javascript"} (str "semtag_web.client.main." js-fn "();")]) 
     ]
    ))

(defn thing-show [tag]
  (main-layout
    [:div#thing_box.top_box.hero-unit]
    :js-fn "thing_show"))

(defn tag-stats []
  (main-layout
    [:div#tag_stats_box.top_box.hero-unit]
    :js-fn "tag_stats"))

(defn type-stats []
  (main-layout
    [:div#type_stats_box.top_box.hero-unit]
    :js-fn "type_stats"))

(defn type-show [type]
  (main-layout
    [:div#type_show_box.top_box.hero-unit]
    :js-fn "type_show"))

(defn all []
  (main-layout
   [:div#all_box.top_box.hero-unit]
   :js-fn "all"))

(defn home
  ([] (home "home"))
  ([js-fn]
  (main-layout
     [:div#search_box.top_box.hero-unit
      [:form.form-search {:onsubmit "return false;"}
        [:label.radio
         [:input {:type "radio" :name "search_type" :value "tagged" :checked true} "Tagged with"]]
        [:label.radio
         [:input {:type "radio" :name "search_type" :value "tagged-with-type"} "Tagged with type"]]
        [:label.radio
         [:input {:type "radio" :name "search_type" :value "regex"} "Containing regex"]] 
        [:input#url_search_text.search-query {:type "text" :autofocus "autofocus"
                                              :list "tags" :autocomplete "on"}]
        [:button {:class "btn-primary" :id "url_search_button"} "Search"]
       ]
      [:button#add_url_button.btn-large.btn-success "Add Url"]
      [:textarea#add_url_text]
      [:h2 ""]
      ]
    :js-fn js-fn)))
