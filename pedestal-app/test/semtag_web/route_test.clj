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
  (testing "dynamic route with keyword segment"
    (swap! dynamic-screens assoc :thing-id_felix {:id "felix"})
    (is (= "#/thing/felix"
           (url-for :thing-id_felix))))
  (testing "dynamic route without dynamic-screens entry"
    (is (= ""
           (url-for :thing-id_jekyll)))))

(deftest find-dynamic-route-tests
  (testing "without keyword segment"
    (is (= :search (find-dynamic-route "#/search?query=funny"))))
  (testing "with keyword segment"
    (is (= :thing (find-dynamic-route "#/thing/feynman")))))

(deftest params-from-url-tests
  (testing "with regular url"
    (is (= {:id "dude"}
         (params-from-url :thing "/thing/dude")))))

(deftest parse-params-tests
  (testing "with keyword segment"
    (is (= {:id "dude"}
         (parse-params "#/thing/dude"))))
  (testing "without keyword segment"
    (is (= {:query "funny" :type "regex"}
           (parse-params "#/search?query=funny&type=regex"))))
  (testing "nil cases"
    (is (nil? (parse-params "#/search")))
    (is (nil? (parse-params "#/nonexistent")))))

(deftest url->screen-tests
  (testing "static route"
    (is (= :types (url->screen "#/types"))))
  ;; fails without params
  (testing "dynamic route with params"
    (is (= :search-query_funny_type_regex
           (url->screen "#/search" {:query "funny" :type "regex"}))))
  (testing "dynamic route with keyword segment"
    (is (= :thing-id_feynman
           (url->screen "#/thing/feynman")))))
