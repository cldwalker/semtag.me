(ns semtag-web.spinner
  (:require [domina :as dom]
            [goog.events.KeyCodes :as key-codes]
            [goog.ui.KeyboardShortcutHandler :as shortcut]))

;; Consider using a working defonce - https://gist.github.com/cemerick/6331727
(def spinner (atom nil))

;; Based on http://stackoverflow.com/questions/9585752/using-simplemodal-show-loading-spinner-while-content-inside-iframe-loads/12882847#12882847
(def modal-opts
  {:lines 11
   :length 23
   :width 8
   :radius 40
   :corners 1
   :rotate 9
   :color "#FFF"
   :speed 1
   :trail 50
   :shadow true
   :hwaccel false
   :className "spinner"
   :zIndex 2e9})

(defn- setup-keybindings []
  (let [shortcut-handler (goog.ui.KeyboardShortcutHandler. js/document)
        show-triggered (fn [event]
                         (.log js/console (str "Received: " (.-identifier event)))
                         (.stop @spinner)
                         (set! (-> "spin_modal_overlay" dom/by-id .-style .-display) "none"))]
    (.registerShortcut shortcut-handler "q" "q")
    (.listen goog.events
             shortcut-handler
             goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED
             show-triggered)))

(defn- create-spinner
  []
  (reset! spinner (new js/Spinner (clj->js modal-opts)))
  (.spin @spinner (dom/by-id "spin_modal_overlay"))
  (set! (-> @spinner .-el .-style .-top) "50%")
  (set! (-> @spinner .-el .-style .-left) "50%"))

(defn render [new-value]
  (.log js/console "spinner" new-value)
  (when-not @spinner
    (create-spinner)
    (setup-keybindings))
  (if new-value
    (set! (-> "spin_modal_overlay" dom/by-id .-style .-display) "block")
    ;; Add a little lag so it's not just a blink
    (js/setTimeout
     (fn [] (set! (-> "spin_modal_overlay" dom/by-id .-style .-display) "none"))
     2000)))