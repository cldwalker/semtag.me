(ns semtag-web.rendering.bar-chart
  "D3 bar chart based on https://github.com/dribnet/strokes/tree/master/examples/simple-bar")

(def d3 (this-as ct (aget ct "d3")))

; rect: data ↦ width, index ↦ y
; adapted from mike bostocks slide presentation

(def data [63 39 31 53 25 32 175 69 51])

(def m [50 40 50 40])
(def w (- 960 (m 1) (m 3)))
(def h (- 500  (m 0) (m 2)))

; x is a fn: data ↦ width
(defn render []
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
    (.text identity)))
