## Description

This is a clojurescript frontend to a separate semantic-tagging Datomic app.
Data is transmitted and received as
[edn/clojure](https://github.com/edn-format/edn) thanks to
[CORS](http://www.w3.org/TR/cors/) requests.

## Usage

To see this app in demo mode:

```sh
$ lein cljsbuild auto

# In another tab
$ lein ring server
```

## Contributing
[See here](http://tagaholic.me/contributing.html)

## TODO
* More functionality!
* Automate compilation of html
  * need relative paths for js/css includes
  * Need to consider bootstrap
* Try deploying compiled html+css
