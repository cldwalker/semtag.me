goog.provide('io.pedestal.app.net.repl_client');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('goog.uri.utils');
/**
* Return a string which is the scheme and domain portion of the URL
* for the server from which this code was served.
*/
io.pedestal.app.net.repl_client.server = (function server(){
var location = window.location.toString(cljs.core.List.EMPTY);
return [cljs.core.str(goog.uri.utils.getScheme(location)),cljs.core.str("://"),cljs.core.str(goog.uri.utils.getDomain(location))].join('');
});
/**
* Connects to a ClojureScript REPL on the server which served this
* page and the specified port. The port defaults to 9000.
* 
* This allows a browser-connected REPL to send JavaScript to the
* browser for evaluation. This function should be called from a script
* in the host HTML page.
*/
io.pedestal.app.net.repl_client.repl = (function() {
var repl = null;
var repl__0 = (function (){
return repl.cljs$core$IFn$_invoke$arity$1(9000);
});
var repl__1 = (function (port){
return clojure.browser.repl.connect([cljs.core.str(io.pedestal.app.net.repl_client.server()),cljs.core.str(":"),cljs.core.str(port),cljs.core.str("/repl")].join(''));
});
repl = function(port){
switch(arguments.length){
case 0:
return repl__0.call(this);
case 1:
return repl__1.call(this,port);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl.cljs$core$IFn$_invoke$arity$0 = repl__0;
repl.cljs$core$IFn$_invoke$arity$1 = repl__1;
return repl;
})()
;
goog.exportSymbol('io.pedestal.app.net.repl_client.repl', io.pedestal.app.net.repl_client.repl);
/**
* This function is provided to allow for more compact config for
* the :fresh aspect in config/config.edn
*/
io.pedestal.app.net.repl_client.main = (function main(){
return io.pedestal.app.net.repl_client.repl.cljs$core$IFn$_invoke$arity$0();
});
goog.exportSymbol('io.pedestal.app.net.repl_client.main', io.pedestal.app.net.repl_client.main);
