(ns semtag-web.simulated.services
  (:require [semtag-web.services :as services]))

(defn services-fn [message input-queue]
  (.log js/console (str "Sending query to server: " message))
  (services/put-search-title input-queue (:value message))
  (services/put-search-results
    input-queue
    {:tags '(["funny"])
     :things [{:url "http://funnyordie.com" :desc (str "tiz " query)
               :type "site" :tags ["funny"]}]}))
