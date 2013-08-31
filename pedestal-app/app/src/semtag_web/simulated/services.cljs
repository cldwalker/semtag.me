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

(defn services-fn [message input-queue]
  (with-redefs [services/call-search call-search
                services/call-types call-types
                services/call-tags call-tags
                services/call-tag-stats call-tag-stats]
    (services/services-fn message input-queue)))
