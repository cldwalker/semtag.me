(ns semtag-web.rendering.bar-chart
  "D3 bar chart based on http://mbostock.github.io/d3/tutorial/bar-1.html
  and https://github.com/dribnet/strokes/tree/master/examples/simple-bar"
  (:require [domina :as dom]))

(def d3 (this-as ct (aget ct "d3")))

; rect: data ↦ width, index ↦ y
; adapted from mike bostocks slide presentation

(def m [0 0 0 0])
(def w (- 440 (m 1) (m 3)))
(def h (- 140  (m 0) (m 2)))

;; mouse* fns for tooltips - based on http://bl.ocks.org/biovisualize/1016860
(defn mouseover [e]
  (when-let [title (-> d3.event .-target .-parentNode .-attributes (.getNamedItem "title"))]
    (dom/set-html! (dom/by-id "tooltip") (.-value title)))
  (-> (dom/by-id "tooltip") .-style .-visibility (set! "visible")))

(defn mousemove []
  (-> (dom/by-id "tooltip") .-style .-top (set! (str (- d3.event.pageY 10) "px")))
  (-> (dom/by-id "tooltip") .-style .-left (set! (str (+ d3.event.pageX 10) "px"))))

(defn mouseout []
  (-> (dom/by-id "tooltip") .-style .-visibility (set! "hidden")))

; x is a fn: data ↦ width
(defn render [data labels]
  (def x1 (-> d3 .-scale (.linear)
  (.domain (array 0 (apply max data)))
  (.range (array 0 w))))

; y is a fn: index ↦ y
(def y1 (-> d3 .-scale (.ordinal)
  (.domain (apply array (range (count data))))
  (.rangeRoundBands (array 0 h) 0.2)))

(def svg1 (-> d3 (.select "#static") (.append "svg")
    (.attr (clj->js {:width  (+ w (m 1) (m 3))
            :height (+ h (m 0) (m 2))}))
  (.append "g")
    (.attr (clj->js {:transform (str "translate(" (m 3) "," (m 0) ")")}))))

; Data ↦ Element
(def bar1 (-> svg1 (.selectAll "g.bar")
    (.data (clj->js data))
  (.enter) (.append "g")
    (.attr (clj->js {:class "bar"
                     :title #(get labels %2)
            :transform #(str "translate(0," (y1 %2) ")")}))))

; Data Attributes ↦ Element Attributes
(-> bar1 (.append "rect")
    (.attr (clj->js {:width   #(x1 %)
            :height  (.rangeBand y1)}))
    (.style (clj->js {:fill   "indianred"
             :stroke-opacity 0})))

; Data Attributes ↦ Element Attributes
(-> bar1 (.append "text")
    (.attr (clj->js {:x  x1
            :y  (/ (.rangeBand y1) 2)
            :dx -6
            :dy ".35em"
            :text-anchor "end"}))
    (.style "fill" "white")
    (.text identity))

  (-> bar1
      (.on "mouseover" mouseover)
      (.on "mousemove" mousemove)
      (.on "mouseout" mouseout)))
