(ns semtag-web.integration-test
  (:require [clojure.test :refer [testing deftest is are use-fixtures] :as ctest]
            [clj-webdriver.driver :refer [init-driver]]
            [clj-webdriver.core :as core]
            [clj-webdriver.taxi :as taxi]
            [clojure.string :as string])
  (:import [org.openqa.selenium.phantomjs PhantomJSDriver]
           [org.openqa.selenium.remote DesiredCapabilities]))

;; Customize reporting
(def original-report ctest/report)
(defmulti report :type)

(defmethod report :default [m]
  (original-report m))

(defn screenshot-file [prefix]
  (str prefix
       (first (map #(:name (meta %)) ctest/*testing-vars*))
       ".png"))

;; Take screenshots on fail and error
(defmethod report :fail [m]
  (original-report m)
  (taxi/take-screenshot :file (screenshot-file ".clojure-test-fail-")))

(defmethod report :error [m]
  (original-report m)
  (taxi/take-screenshot :file (screenshot-file ".clojure-test-error-")))

(use-fixtures :each
              (fn [f]
                (taxi/set-driver! (init-driver {:webdriver (PhantomJSDriver. (DesiredCapabilities. ))}))
                (taxi/to "out/public/semtag-web-test.html")
                (Thread/sleep 1000)

                (binding [ctest/report report] (f))
                (taxi/quit)))

;; Test Helpers
(defn app-url [& args]
  (apply str "/semtag-web-test.html" args))

(defn click [text]
  (core/click (taxi/find-element {:tag :a :text text}))
  (Thread/sleep 500))

(defn url-ends-with [& args]
  (is (.endsWith (taxi/current-url) (apply app-url args))))

;; TODO - revisit not being able to go forward - log count stays the same going forward
#_(deftest history-works
  (click "Tag Stats")
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html#/tag-stats"))
  (back)
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html#/"))
  (forward))

(deftest urls-get-updated-correctly
  (is (.endsWith (taxi/current-url) (app-url)))
  (url-ends-with "")
  (click "Tag Stats")
  (url-ends-with "#/tag-stats")

  (click "Type Stats")
  (url-ends-with "#/types")

  (click "All The Things")
  (url-ends-with "#/all")

  (click "Home")
  (url-ends-with "#/"))

(deftest search-submit-works
  (taxi/input-text "#url_search_text" "feynman")
  (taxi/click "#url_search_button")
  (Thread/sleep 1000)

  (url-ends-with "#/search?query=feynman&search-type=tagged")
  (is (= "Search results for 'feynman'" (taxi/text "#search_title"))))

(comment
  (taxi/take-screenshot :file "out.png")
  ;; To debug headless browser - inject in template
  "<script>
      var logs = [];
      console.log = function(m1, m2) {
        logs.push([m1, m2]);
      };
    </script>"
  (println "LOGS: ")
  (doseq [log (taxi/execute-script "return logs;")] (println log)))
