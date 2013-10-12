(ns semtag-web.route-test
  (:require [clojure.test :refer :all]
            [semtag-web.route :refer :all]))

(deftest url-for-tests
  (testing "static route"
    (is (= "#/types"
           (url-for :types))))
  (testing "dynamic route with params"
    (swap! dynamic-screens assoc :search-query_css {:query "css"})
    (is (= "#/search?query=css"
           (url-for :search-query_css))))
  (testing "dynamic route with keyword substitution"
    (swap! dynamic-screens assoc :thing-id_felix {:id "felix"})
    (is (= "#/thing/felix"
           (url-for :thing-id_felix))))
  (testing "dynamic route without dynamic-screens entry"
    (is (= ""
           (url-for :thing-id_jekyll)))))

(deftest find-dynamic-route-tests
  (testing "without keyword substitution"
    (is (= :search (find-dynamic-route "#/search?query=funny"))))
  (testing "with keyword substitution"
    (is (= :thing (find-dynamic-route "#/thing/feynman")))))

(deftest params-from-url-tests
  (testing "with hash url"
    (is (= {:id "dude"}
         (params-from-url :thing "#/thing/dude"))))
  (testing "with regular url"
    (is (= {:id "dude"}
         (params-from-url :thing "/thing/dude")))))

(deftest url->screen-tests
  (testing "static route"
    (is (= :types (url->screen "#/types"))))
  ;; fails without params
  (testing "dynamic route with params"
    (is (= :search-query_funny_type_regex
           (url->screen "#/search" {:query "funny" :type "regex"}))))
  (testing "dynamic route with keyword substitution"
    (is (= :thing-id_feynman
           (url->screen "#/thing/feynman")))))
