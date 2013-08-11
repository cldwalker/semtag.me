(ns semtag-web.html-templates
  (:use [io.pedestal.app.templates :only [tfn dtfn tnodes]]))

(defmacro semtag-web-templates
  []
  {:semtag-web-page (dtfn (tnodes "semtag-web.html" "hello") #{:id})})
