(ns semtag-web.integration-test
  (:require [clojure.test :refer :all]
            [clj-webdriver.driver :refer [init-driver]]
            [clj-webdriver.core :as core]
            [clj-webdriver.taxi :as taxi])
  (:import [org.openqa.selenium.phantomjs PhantomJSDriver]
           [org.openqa.selenium.remote DesiredCapabilities]))

(use-fixtures :each
              (fn [f]
                (taxi/set-driver! (init-driver {:webdriver (PhantomJSDriver. (DesiredCapabilities. ))}))
                (taxi/to "out/public/semtag-web-test.html")
                (Thread/sleep 1000)

                (f)
                (taxi/quit)))

(defn click [text]
  (core/click (taxi/find-element {:tag :a :text text}))
  (Thread/sleep 500))

(deftest ursl-get-updated-correctly
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html"))
  (click "Tag Stats")
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html#/tag-stats"))

  (click "Type Stats")
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html#/types"))

  (click "All The Things")
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html#/all"))

  (click "Home")
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html#/")))

(deftest search-submit-works
  (taxi/input-text "#url_search_text" "feynman")
  (is (= "feynman" (taxi/attribute "#url_search_text" :value)))

  (taxi/click "#url_search_button")
  (Thread/sleep 1000)
  (is (= "Search results for 'feynman'" (taxi/text "#search_title"))))

(comment
  (taxi/take-screenshot :file "out.png")
  (println "LOGS: ")
  (doseq [log (taxi/execute-script "return logs;")] (println log)))
