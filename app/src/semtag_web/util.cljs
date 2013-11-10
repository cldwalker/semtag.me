(ns semtag-web.util
  (:require [goog.string :as gstring]
            [goog.string.format]))

;; bring it back since it was taken out of core
;; https://github.com/clojure/clojurescript/commit/48c8d0fafc18375876e10caf960a7c7da27ac308
(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (apply gstring/format fmt args))