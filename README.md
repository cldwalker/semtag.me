## Description

This is a clojurescript app built with
[pedestal-app](https://github.com/pedestal/pedestal/tree/master/app) that displays data from a
backend server using [CORS](http://www.w3.org/TR/cors/) requests and
[edn](https://github.com/edn-format/edn).

Unlike most bookmarking sites, this one encourages building up a personal taxonomy. Each bookmark is
an entity of a certain type that can have associations (tags) with other bookmarks. For example,
[here are](http://semtag.me/#/search?query=article.cljs&search-type=tagged) the articles I've tagged
with clojurescript. Notice that [clojurescript itself](http://semtag.me/#/thing/cljs) is an entity
with a [programming language](http://semtag.me/#/type/plang) type. By treating tags as entities
a.k.a. semantic tagging, we can build a web of interconnected bookmarks.

## Demo

See [semtag.me](http://semtag.me/) for a read-only version. Note that the backend server is on
heroku so the first request may take up to 10s to spin up.

## Usage

Start the app on localhost:3000 with `lein run` or from the repl:

```
$ lein repl
user=> (start)
:ok
```

Checkout the [test aspect](http://localhost:3000/semtag-web-test.html).
Trying out dev or production aspects will not work since they require a backend service.

To run tests: `lein build-app && lein test`

## Pedestal-app Notes

This app currently uses the version 2 dataflow.

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
* This uses [spin.js](http://fgnass.github.io/spin.js/) to transition
  between screens. d3.js is used for a basic barchart.
* There is a clientside router in [route.clj](app/src/semtag_web/route.clj). Currently this is
  entangled with dynamic routes.
* Most of the rendering uses crate instead of pedestal's renderer. One advantage this provides is
  just using clojure to compose html.
* Some rendering behavior e.g. adding click behavior is made easy with
  [rendering\_util.cljs](app/src/semtag_web/rendering_util.cljs)

## Contributing
[See here](http://tagaholic.me/contributing.html)

## Limitations
This app uses html5 apis for autocomplete, pushState and misc new tags and tag attributes. This is
intentional and not meant to be backwards-compatible with older browsers. To see what html5 apis
your browser has implemented, [look here](https://html5test.com/).
Since this app is primarily developed with Chrome, it's recommended.

## TODO
* Port to pedestal-app v3 flow!
* Add sorting to tables
* First-class mobile rendering
* Include an example CORS-enabled server
