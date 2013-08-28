(ns semtag-web.simulated.services
  (:require [semtag-web.services :as services]))

(defn call-search [message input-queue]
  (services/put-search-title input-queue (:query message))
  (services/put-search-results
    input-queue
    {:tags '(["funny"])
     :things [{:url "http://funnyordie.com" :desc (str "tiz " (:query message))
               :type "site" :tags ["funny"]}]}))

(defn services-fn [message input-queue]
  (with-redefs [services/call-search call-search]
    (services/services-fn message input-queue)))
