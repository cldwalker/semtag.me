goog.provide('io.pedestal.app.util.console_log');
goog.require('cljs.core');
io.pedestal.app.util.console_log.log_map = (function log_map(m){
var d = cljs.core.assoc.call(null,m,"\uFDD0:timestamp",(new Date()).getTime());
return console.log(cljs.core.pr_str.call(null,d));
});
/**
* @param {...*} var_args
*/
io.pedestal.app.util.console_log.log = (function() { 
var log__delegate = function (args){
return io.pedestal.app.util.console_log.log_map.call(null,cljs.core.apply.call(null,cljs.core.hash_map,args));
};
var log = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, args);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13919){
var args = cljs.core.seq(arglist__13919);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
