(ns semtag-web.integration-test
  (:require [clojure.test :refer [testing deftest is are use-fixtures] :as ctest]
            [clj-webdriver.driver :refer [init-driver]]
            [clj-webdriver.core :as core]
            [clj-webdriver.taxi :as taxi]
            [semtag-web.route :as route]
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

;; clojure.test/is predicate just to generate a message
(defmethod ctest/assert-expr 'ends-with? [msg form]
  `(let [string# ~(nth form 1)
         ending# ~(nth form 2)
         msg# (format "Expected %s to end with %s" string# ending#)]
     (let [result# (.endsWith string# ending#)]
       (if result#
         (ctest/do-report {:type :pass, :message msg#,
                           :expected '~form, :actual nil})
         (ctest/do-report {:type :fail, :message msg#,
                           :expected '~form, :actual nil}))
       result#)))

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

(defn full-app-url [& args]
  (str "out/public" (apply app-url args)))

(defn click [text]
  (core/click (taxi/find-element {:tag :a :text text}))
  (Thread/sleep 500))

(defn url-ends-with [& args]
  (is (ends-with? (taxi/current-url) (apply app-url args))))

(deftest navbar-links-work
  (url-ends-with "")
  (click "Tag Stats")
  (url-ends-with "#/tag-stats")

  (click "Type Stats")
  (url-ends-with "#/types")

  (click "All The Things")
  (url-ends-with "#/all")

  (click "Home")
  (url-ends-with "#/"))

(deftest regular-search-works
  (is (seq (taxi/elements "#tags option")) "renders a datalist to autocomplete input")
  (taxi/input-text "#url_search_text" "feynman")
  (taxi/click "#url_search_button")
  (Thread/sleep 1000)

  (url-ends-with "#/search?query=feynman&search-type=tagged")
  (is (= "Search results for 'feynman'" (taxi/text "#search_title")))
  (is (taxi/element "#table_stats"))
  (is (seq (taxi/elements "#search_table tbody tr"))))

(deftest second-search-with-another-search-type-works
  (taxi/input-text "#url_search_text" "feynman")
  (taxi/click "#url_search_button")
  (Thread/sleep 1000)
  (url-ends-with "#/search?query=feynman&search-type=tagged")

  (taxi/clear "#url_search_text")
  (taxi/input-text "#url_search_text" "maxwell")
  (taxi/select
    (taxi/element "input[name='search_type'][value='tagged-with-type']"))
  (taxi/click "#url_search_button")
  (Thread/sleep 1000)
  (url-ends-with "#/search?query=maxwell&search-type=tagged-with-type"))

(def expected-tables
  {"#/types" "#type_stats_table"
   "#/tag-stats" "#tag_stats_table"
   "#/all" "#all_table"
   "#/" "#search_table"})

(deftest direct-urls-work
  (doseq [rel-url (vals route/routes)]
    (taxi/to (full-app-url rel-url))
    ;; necessary for a hash url to be recognized
    (taxi/refresh)
    (Thread/sleep 500)
    (is (taxi/element (get expected-tables rel-url)) "renders correct table")
    (url-ends-with rel-url)))

(deftest direct-search-url-works
  (taxi/to (full-app-url "#/search?query=maxwell&search-type=tagged-with-type"))
  (taxi/refresh)
  (Thread/sleep 500)

  (url-ends-with "#/search?query=maxwell&search-type=tagged-with-type")
  (is (seq (taxi/elements "#search_table tbody tr"))))

;; TODO - revisit not being able to go forward - log count stays the same going forward
#_(deftest history-works
  (click "Tag Stats")
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html#/tag-stats"))
  (back)
  (is (.endsWith (taxi/current-url) "/semtag-web-test.html#/"))
  (forward))

(comment
  (taxi/take-screenshot :file "out.png")
  (println "LOGS: ")
  (doseq [log (taxi/execute-script "return logs;")] (println (vec log))))
