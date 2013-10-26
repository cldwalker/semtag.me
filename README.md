## Description

This is a clojurescript app that manages my bookmarks. Unlike most
bookmarking sites, this one encourages building up a personal
taxonomy. Each bookmark is an entity of a certain type that can have
associations (tags) with other bookmarks. For example,
[here are](http://semtag.me/#/search?query=article.cljs&search-type=tagged)
the articles I've tagged with clojurescript. Notice that
[clojurescript itself](http://semtag.me/#/thing/cljs) is an entity
with a [programming language](http://semtag.me/#/type/plang) type. By
treating tags as entities a.k.a. semantic tagging, one's interconnected
knowledge of bookmarks can be more accurately captured.

## Tech Stack

This is a clojurescript app that displays data from a backend
server using [CORS](http://www.w3.org/TR/cors/) requests and
[edn](https://github.com/edn-format/edn).

The original version of this lives in pedestal-service/ and uses
pedestal-service, jquery and a bunch of jumbled clojurescript. The rewrite of
this lives in pedestal-app/ and uses pedestal-app, domina and has some
decent integration tets. Once the rewrite is complete, the original
version will be removed.

If you're interested in pedestal-app, see
[the rewrite's README](pedestal-app/README.md).

Currently, the backend server is not included so the only way to see
data running through the app is to see the pedestal-app in test mode.

## Contributing
[See here](http://tagaholic.me/contributing.html)

## Limitations
This app uses html5 apis for autocomplete, pushState and misc new tags and tag attributes. This is
intentional and not meant to be backwards-compatible with older browsers. To see what html5 apis
your browser has implemented, [look here](https://html5test.com/).
Since this app is primarily developed with Chrome, it's recommended.

## TODO
* Finish the rewrite in pedestal-app: create, delete and edit things.
* Include an example CORS-enabled server
