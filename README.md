## Description

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
data running through the app is to see the pedestal-app in UI mode.

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
