goog.provide('io.pedestal.app.util.console_log');
goog.require('cljs.core');
io.pedestal.app.util.console_log.log_map = (function log_map(m){
var d = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,"\uFDD0:timestamp",(new Date()).getTime());
return console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d], 0)));
});
/**
* @param {...*} var_args
*/
io.pedestal.app.util.console_log.log = (function() { 
var log__delegate = function (args){
return io.pedestal.app.util.console_log.log_map(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args));
};
var log = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, args);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13935){
var args = cljs.core.seq(arglist__13935);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
