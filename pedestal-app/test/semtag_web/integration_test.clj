(ns semtag-web.integration-test
  (:require [clojure.test :refer :all]
            [clj-webdriver.driver :refer [init-driver]]
            [clj-webdriver.taxi :as taxi])
  (:import [org.openqa.selenium.phantomjs PhantomJSDriver]
           [org.openqa.selenium.remote DesiredCapabilities]))

(deftest submit-test
  (taxi/set-driver! (init-driver {:webdriver (PhantomJSDriver. (DesiredCapabilities. ))}))
  (taxi/to "out/public/semtag-web-ui.html")
  (taxi/input-text "#url_search_text" "feynman")
  (is (= "feynman" (taxi/attribute "#url_search_text" :value)))
  (taxi/click "#url_search_button")
  (Thread/sleep 1000)

  (is (= "Search results for 'feynman'" (taxi/text "#search_title")))
  (taxi/quit))

(comment
  (clj-webdriver.core/click  (find-element  {:tag :a :text "Tag Stats"}))
  (taxi/take-screenshot :file "out.png")
  (println "LOGS: ")
  (doseq [log (taxi/execute-script "return logs;")] (println log)))
