(ns semtag-web.simulated.services
  (:require [semtag-web.services :as services]))

(defmulti send-message
  "Given a message, simulate an effect"
  (fn [message input-queue] (keyword (:value message))))

(defmethod send-message :home
  [message input-queue]
  (services/put-value
    [:tags-results]
    input-queue
    '("funny" "awesome" "boa" "bom")))

(defmethod send-message :search
  [message input-queue]
  (services/put-search-title input-queue (:query message))
  (services/put-value
    [:search-results]
    input-queue
    {:tags '(["funny"])
     :things [{:url "http://funnyordie.com" :desc (str "tiz " (:query message))
               :type "site" :tags ["funny"]}]}))

(defmethod send-message :types
  [message input-queue]
  (services/put-value
    [:types-results]
    input-queue
    {:results '({:url-percent "1.00", :name-percent "0.00", :count "3", :name "api"})
     :counts {:thing 3, :name 2, :url 2, :tags 4}}))

(defmethod send-message :tag-stats
  [message input-queue]
  (services/put-value
    [:tag-stats-results]
    input-queue
    (list
      {:desc "1 idea, 1 cjar", :count "2", :tag "cjar=lein-newnew"}
      {:desc "1 cjar, 1 obook, 5 plugin", :count "7", :tag "lib=jquery"})))

(defmethod send-message :all
  [message input-queue]
  (services/put-value
    [:all-results]
    input-queue
    (list {:id 17592186048331, :desc "handy, programmatic and linkable access to HTTP specs, including an emacs plugin", :type "repo", :url "https://github.com/andreineculau/know-your-http-well", :created-at #inst "2013-09-07T15:31:38.781-00:00", :tags '("emacs" "http")}
          {:id 17592186048328, :desc "nice, visual listing of designers by city and/or price range", :type "site", :url "http://sortfolio.com/", :created-at #inst "2013-09-07T15:27:45.772-00:00", :tags '("designer")})))

(defn services-fn [message input-queue]
  (services/services-fn message input-queue send-message))
