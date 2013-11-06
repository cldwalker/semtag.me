(ns semtag-web.simulated.services
  (:require [semtag-web.services :as services]
            [semtag-web.util :refer [format]]))


(def api-responses
  {:tags '("funny" "awesome" "boa" "bom")
   :search {:tags '(["funny"])
            :things [{:url "http://funnyordie.com" :desc "yop"
                      :type "site" :tags ["funny"]}]}
   :thing (list {:attribute :id, :id 17592186048349, :value 17592186048349}
                {:attribute :type, :id 17592186048349, :value "person"}
                {:attribute :name, :id 17592186048349, :value "feynman"}
                {:attribute :url, :id 17592186048349, :value nil}
                {:attribute :tags, :id 17592186048349, :value '()})
   :type {:things (list {:id 17592186047997, :type "api", :url "https://developers.google.com/freebase/v1/getting-started", :tags '("freebase")}
                        {:id 17592186047567, :desc "used by faviki to return dbpedia tags for given link/text", :type "api", :url "http://www.zemanta.com/api/", :tags '("faviki" "semantic_web")}
                        {:id 17592186047994, :type "api", :url "http://www.omdbapi.com/", :tags '("json" "movie")})
          :tags '(["site" "freebase"] ["wapp" "faviki"] ["cs" "semantic_web"] ["std" "json"] ["tag" "movie"])} 
   :types {:results '({:url-percent "1.00", :name-percent "0.00", :count "3", :name "api"})
           :counts {:thing 3, :name 2, :url 2, :tags 4}}
   :tag-stats (list
                {:desc "1 idea, 1 cjar", :count "2", :tag "cjar=lein-newnew"}
                {:desc "1 cjar, 1 obook, 5 plugin", :count "7", :tag "lib=jquery"})
   :all (list {:id 17592186048331, :desc "handy, programmatic and linkable access to HTTP specs, including an emacs plugin", :type "repo", :url "https://github.com/andreineculau/know-your-http-well", :created-at #inst "2013-09-07T15:31:38.781-00:00", :tags '("emacs" "http")}
              {:id 17592186048328, :desc "nice, visual listing of designers by city and/or price range", :type "site", :url "http://sortfolio.com/", :created-at #inst "2013-09-07T15:27:45.772-00:00", :tags '("designer")})})

(defmulti send-message
  "Given a message, simulate an effect"
  (fn [message input-queue] (keyword (:value message))))

(defmethod send-message :default
  [{:keys [value]} input-queue]
  (services/put-value
    [(keyword (str value "-results"))]
    input-queue
    ((keyword value) api-responses)))

(defmethod send-message :home
  [message input-queue]
  (services/put-value
    [:tags-results]
    input-queue
    (:tags api-responses)))

(defmethod send-message :search
  [{:keys [params]} input-queue]
  (services/put-search-title input-queue params)
  (services/put-value
    [(services/search-id params) :search-results]
    input-queue
    (:search api-responses)))

(defmethod send-message :thing
  [message input-queue]
  (services/put-value
    [(services/thing-id message) :thing-results]
    input-queue
    (:thing api-responses)))

(defmethod send-message :type
  [message input-queue]
  (services/put-value
    [(services/type-id message) :type-results]
    input-queue
    (:type api-responses)))

(defmethod send-message :create-thing
  [message input-queue]
  (services/put-value
    [:alert-success]
    input-queue
    (format "Successfully added '%s'!" (:input message))))

(defn services-fn [message input-queue]
  (services/services-fn message input-queue send-message))
