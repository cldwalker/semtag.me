## Description

This is a clojurescript frontend client running on pedestal-service. Data is transmitted and received
between client and server as [edn/clojure](https://github.com/edn-format/edn) thanks to
[CORS](http://www.w3.org/TR/cors/) requests.

Most of this branch is happening in pedestal-app/. See [its README](pedestal-app/README.md) for more
info.

## Contributing
[See here](http://tagaholic.me/contributing.html)

## Limitations
This app uses html5 apis for autocomplete, pushState and misc new tags and tag attributes. This is
intentional and not meant to be backwards-compatible with older browsers. To see what html5 apis
your browser has implemented, [look here](https://html5test.com/).

## TODO
* More functionality!
* Automate compilation of html
* Try deploying compiled html+css
* Include an example CORS-enabled server
