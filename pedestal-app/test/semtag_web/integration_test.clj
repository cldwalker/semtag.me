(ns semtag-web.integration-test
  (:require [clojure.test :refer :all]
            [clj-webdriver.driver :refer [init-driver]]
            [clj-webdriver.taxi :as taxi])
  (:import [org.openqa.selenium.phantomjs PhantomJSDriver]
           [org.openqa.selenium.remote DesiredCapabilities]))

(deftest submit-test
  (taxi/set-driver! (init-driver {:webdriver (PhantomJSDriver. (DesiredCapabilities. ))}))
  (taxi/implicit-wait 3000)
  (taxi/to "out/public/semtag-web-ui.html")
  (taxi/wait-until #(taxi/exists? "#url_search_text"))
  (taxi/input-text "#url_search_text" "feynman")
  (is (= "feynman" (taxi/attribute "#url_search_text" :value)))
  (taxi/submit "#url_search_text")
  (taxi/wait-until #(taxi/exists? "#table_stats") 3000)
  (prn (taxi/current-url))
  #_(is (= "Search results" (taxi/text "#search_title")))
  #_(println (taxi/page-source))
  (taxi/take-screenshot :file "out.png")
  (taxi/quit))
