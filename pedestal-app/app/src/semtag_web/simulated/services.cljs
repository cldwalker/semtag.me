(ns semtag-web.simulated.services
  (:require [semtag-web.services :as services]))

(defn call-search [message input-queue]
  (services/put-search-title input-queue (:query message))
  (services/put-search-results
    input-queue
    {:tags '(["funny"])
     :things [{:url "http://funnyordie.com" :desc (str "tiz " (:query message))
               :type "site" :tags ["funny"]}]}))

(defn call-types [message input-queue]
  (services/put-types-results
    input-queue
    {:results '({:url-percent "1.00", :name-percent "0.00", :count "3", :name "api"})
     :counts {:thing 3, :name 2, :url 2, :tags 4}}))

(defn call-tags [message input-queue]
  (services/put-tags
    input-queue
    '("funny" "awesome" "boa" "bom")))

(defn call-tag-stats [message input-queue]
  (services/put-tag-stats
    input-queue
    (list
      {:desc "1 idea, 1 cjar", :count "2", :tag "cjar=lein-newnew"}
      {:desc "1 cjar, 1 obook, 5 plugin", :count "7", :tag "lib=jquery"})))

(defn call-all [message input-queue]
  (services/put-all
    input-queue
    (list {:id 17592186048331, :desc "handy, programmatic and linkable access to HTTP specs, including an emacs plugin", :type "repo", :url "https://github.com/andreineculau/know-your-http-well", :created-at #inst "2013-09-07T15:31:38.781-00:00", :tags '("emacs" "http")}
          {:id 17592186048328, :desc "nice, visual listing of designers by city and/or price range", :type "site", :url "http://sortfolio.com/", :created-at #inst "2013-09-07T15:27:45.772-00:00", :tags '("designer")})))

(defn services-fn [message input-queue]
  (with-redefs [services/call-search call-search
                services/call-types call-types
                services/call-tags call-tags
                services/call-tag-stats call-tag-stats
                services/call-all call-all]
    (services/services-fn message input-queue)))
