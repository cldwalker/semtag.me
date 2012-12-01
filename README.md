## Description

A clojurescript frontend to a separate semantic-tagging Datomic app. Data flows
between the two using [edn/clojure](https://github.com/edn-format/edn) thanks to
[CORS](http://www.w3.org/TR/cors/) requests

## Usage

```sh
$ lein cljsbuild auto
# In another tab
$ lein ring server
```

## TODO
* More functionality!
* Automate compilation of html
  * need relative paths for js/css includes
  * Need to consider bootstrap
* Try deploying compiled html+css
