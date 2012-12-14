(ns semtag-web.views.main
  (:require [hiccup.page :refer [html5 include-js include-css]]
            [hiccup.bootstrap.page :refer [include-bootstrap]]))

(defn main-layout [body & {:as options}]
  (html5
    [:head
      [:title "Semtag"]
      (include-css "/css/application.css")
     ]
    [:body
     [:div#main body]
      (include-js "/js/jquery-1.8.3.min.js")
      (include-js "/js/jquery.tablesorter.min.js")
      (include-bootstrap)
      (include-js "/cljs/main.js")
     (when-let [js-fn (:js-fn options)] 
      [:script {:type "text/javascript"} (str "semtag_web.client.main." js-fn "();")]) 
     ]
    ))

(defn tag-show [tag]
  (main-layout
    [:div#tag_box.top_box.hero-unit]
    :js-fn "tag_show"))

(defn tag-stats []
  (main-layout
    [:div#tag_stats_box.top_box.hero-unit]
    :js-fn "tag_stats"))

(defn model-stats []
  (main-layout
    [:div#model_stats_box.top_box.hero-unit]
    :js-fn "model_stats"))

(defn model-show [model]
  (main-layout
    [:div#model_show_box.top_box.hero-unit]
    :js-fn "model_show"))

(defn mls []
  (main-layout
     [:div#search_box.top_box.hero-unit
      [:form.form-search {:onsubmit "return false;"}
        [:input#url_search_text.search-query {:type "text" :autofocus "autofocus"
                                              :list "tags" :autocomplete "on"}]
        [:button {:class "btn-primary" :id "url_search_button"} "Search"]
       ]
      [:button#add_url_button.btn-large.btn-success "Add Url"]
      [:textarea#add_url_text]
      [:h2 ""]
      ]
    :js-fn "home"))
