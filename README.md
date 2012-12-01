## Description

This is a clojurescript frontend client to a separate Datomic app. Data is transmitted and received
between client and server as [edn/clojure](https://github.com/edn-format/edn) thanks to
[CORS](http://www.w3.org/TR/cors/) requests.

## Usage

To see this app in demo mode:

```sh
$ lein cljsbuild auto

# In another tab
$ lein ring server
```

Note that when running in demo mode, you're just calling back to the app so no CORS requests are
being made. To make CORS requests you need to have a separate CORS-enabled app running:

```sh
# Your other app that sends back mock data as seen in semtag-web.server/demo-api-routes
$ lein ring server

# Start this app on another port
$ PORT=8000 lein ring server
```

## Contributing
[See here](http://tagaholic.me/contributing.html)

## TODO
* More functionality!
* Automate compilation of html
  * need relative paths for js/css includes
  * Need to consider bootstrap
* Try deploying compiled html+css
* Include an example CORS-enabled server
