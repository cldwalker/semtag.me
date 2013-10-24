## Usage

Start the pedestal-app on localhost:3000: `lein run`

Checkout the [test aspect](http://localhost:3001/semtag-web-test.html) or ui aspect.
Trying out dev/prod aspects will not work since they require a backend service.

To run tests: `lein build-app && lein test`

## Notes

Some unique things about this pedestal-app:

* It builds on [Brenton's html5 history
  wrapper](https://gist.github.com/brentonashworth/5728698):
  * Each screen (defined in :focus) yields a unique url which can be used as a permalink in a new tab.
  * When going forward in history to a previously rendered screen, no side effects take place! This
    means we are able to use the existing data in the data-model instead of re-fetching :effect data.
  * Each screen respects forwards and backwards history navigation.
  * Adding history support is as easy as placing a history/navigated call when a screen is first
    created.
* It comes with integration tests which require a test aspect that can run the app standalone i.e.
  without a server. This means all asset paths must be relative, including js ones which are
  currently done by [this task](app/src/semtag_web/tasks.clj). These tests also come with a custom
  clojure.test reporter which saves a screenshot if a test fails or errors.
* There are dynamic focii defined for search screens. This was done to allow the screen to have
  different data results that would be unique in html5 history. Dynamic focci are achieved by
  sending a msg/app-model message of type :add-named-paths at the right time. I originally tried to
  have the history kick off data changes in one screen but was unable to get this to work cleanly.
* There is a clientside router in [route.clj](app/src/semtag_web/route.clj). Currently this is
  entangled with dynamic routes.
* Most of the rendering uses crate instead of pedestal's renderer. One advantage this provides is
  just using clojure to compose html.
* Some rendering behavior e.g. adding click behavior is made easy with
  [rendering\_util.cljs](app/src/semtag_web/rendering_util.cljs)
* A few useful debugging fns are in [debug.cljs](app/src/semtag_web/debug.cljs)
