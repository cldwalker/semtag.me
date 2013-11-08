(ns semtag-web.integration-test
  (:require [clojure.test :refer [testing deftest is are use-fixtures] :as ctest]
            [clj-webdriver.driver :refer [init-driver]]
            [clj-webdriver.core :as core]
            [clj-webdriver.taxi :as taxi]
            [clj-webdriver.window :as window]
            [semtag-web.route :as route]
            [clojure.string :as string]
            [io.pedestal.app-tools.dev :as dev])
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
                (-> (init-driver {:webdriver (PhantomJSDriver. (DesiredCapabilities. ))})
                    (window/resize {:width 1024 :height 768})
                    (taxi/set-driver!))
                (binding [ctest/report report] (f))
                (taxi/quit)))

;; Test Helpers

(def root-url
  (let [aspect (keyword (or (System/getenv "ASPECT") "test"))]
    (-> dev/config vals first :aspects aspect :uri
        (or (throw (ex-info "This aspect does not exist!" {:aspect aspect}))))))

(defn app-url [& args]
  (apply str root-url args))

(defn full-app-url [& args]
  (str "out/public" (apply app-url args)))

(defn click [text]
  (core/click (taxi/find-element {:text text}))
  (Thread/sleep 500))

(defn visit [url]
  (taxi/to (full-app-url url))
  (Thread/sleep 500))

(defn url-ends-with [& args]
  (is (ends-with? (taxi/current-url) (apply app-url args))))

(deftest navbar-links-work
  (visit "")
  (url-ends-with "")
  (click "Tag Stats")
  (url-ends-with "#/tag-stats")

  (click "Type Stats")
  (url-ends-with "#/types")

  (click "Latest Things")
  (url-ends-with "#/all")

  (click "Home")
  (url-ends-with "#/"))

(deftest introduction-links-work
  (visit "")
  (click "Learn more about semtag.")
  (is (.contains (taxi/text "#introduction") "Semtag is a site"))

  ;; newly rendered static link works
  (click "the types page")
  (is (.contains (taxi/text "#page_title") "Type Statistics")))

(deftest regular-search-works
  (visit "")
  (is (seq (taxi/elements "#tags option")) "renders a datalist to autocomplete input")
  (taxi/input-text "#url_search_text" "feynman")
  (taxi/click "#url_search_button")
  (Thread/sleep 1000)

  (url-ends-with "#/search?query=feynman&search-type=tagged")
  (is (= "Search results for 'feynman'" (taxi/text "#page_title")))
  (is (seq (taxi/elements "#search_table tbody tr"))))

(deftest second-search-with-another-search-type-works
  (visit "")
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

(def expected-ids
  {"#/types" "#type_stats_table"
   "#/tag-stats" "#tag_stats_table"
   "#/all" "#all_table"
   "#/" "#search_box"})

(deftest direct-urls-work
  (doseq [rel-url (vals route/routes)]
    (taxi/to (full-app-url rel-url))
    ;; necessary for a hash url to be recognized
    (taxi/refresh)
    (Thread/sleep 500)
    (is (taxi/element (get expected-ids rel-url)) "renders correct table")
    (url-ends-with rel-url)))

(deftest direct-search-url-works
  (visit "#/search?query=maxwell&search-type=tagged-with-type")
  (url-ends-with "#/search?query=maxwell&search-type=tagged-with-type")
  (is (seq (taxi/elements "#search_table tbody tr")))
  (click "Toggle Stats")
  (is (.contains (taxi/text "#stats_box") "Tag Type Counts")))

(deftest direct-thing-page-works
  (visit "#/thing/feynman")
  (url-ends-with "#/thing/feynman")
  (is (seq (taxi/elements "#thing_show_table tbody tr")))
  (is (taxi/find-element {:tag :a :text "Tagged with feynman"}))

  ;; Verify linked search works
  (click "Tagged with feynman")
  (is (seq (taxi/elements "#search_table tbody tr"))))

(deftest direct-type-page-works
  (visit "#/type/api")
  (url-ends-with "#/type/api")
  (is (seq (taxi/elements "#type_show_table tbody tr")))
  (click "Toggle Stats")
  (is (.contains (taxi/text "#content") "Tag Type Counts")))

(deftest thing-link-works-on-tag-stats-table
  (visit "#/tag-stats")
  (click "lein-newnew")
  (url-ends-with "#/thing/lein-newnew"))

(deftest create-thing-works
  (visit "")
  (taxi/input-text "#create_thing_text" "http://newsite.com site funny")
  (click "Create Thing")
  (is (.contains (taxi/text "#content") "Successfully added 'http://newsite.com")))

(deftest delete-thing-works
  (visit "#/thing/17592186048349")
  (click "Delete")
  (is (.contains (taxi/text "#content") "Successfully deleted '17592186048349")))


;; TODO - revisit not being able to go forward - log count stays the same going forward
#_(deftest history-works
  (visit "")
  (click "Tag Stats")
  (url-ends-with "#/tag-stats")
  (back)
  (url-ends-with "#/")
  (forward))

(comment
  (taxi/take-screenshot :file "out.png")
  (println "LOGS: ")
  (doseq [log (taxi/execute-script "return logs;")] (println (vec log))))
