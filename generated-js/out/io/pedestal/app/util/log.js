goog.provide('io.pedestal.app.util.log');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.observers');
/**
* Logs a message at level (a keyword). The message will be a map
* constructed from the key-value pairs supplied.
* @param {...*} var_args
*/
io.pedestal.app.util.log.log = (function() { 
var log__delegate = function (level,keyvals){
return io.pedestal.app.util.observers.publish.call(null,"\uFDD0:log",cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.hash_map,keyvals),"\uFDD0:level",level));
};
var log = function (level,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, level, keyvals);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__12545){
var level = cljs.core.first(arglist__12545);
var keyvals = cljs.core.rest(arglist__12545);
return log__delegate(level, keyvals);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Logs a trace message. Argument is a quoted list representing the
* function being called, with arguments.
*/
io.pedestal.app.util.log.trace = (function trace(call_expr){
return io.pedestal.app.util.log.log.call(null,"\uFDD0:trace","\uFDD0:call",call_expr);
});
/**
* Logs an error message.
* @param {...*} var_args
*/
io.pedestal.app.util.log.error = (function() { 
var error__delegate = function (keyvals){
return cljs.core.apply.call(null,io.pedestal.app.util.log.log,"\uFDD0:error",keyvals);
};
var error = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return error__delegate.call(this, keyvals);
};
error.cljs$lang$maxFixedArity = 0;
error.cljs$lang$applyTo = (function (arglist__12546){
var keyvals = cljs.core.seq(arglist__12546);
return error__delegate(keyvals);
});
error.cljs$core$IFn$_invoke$arity$variadic = error__delegate;
return error;
})()
;
/**
* Logs a :debug level message. Use this level for debugging output
* which is less verbose than :trace.
* @param {...*} var_args
*/
io.pedestal.app.util.log.debug = (function() { 
var debug__delegate = function (keyvals){
return cljs.core.apply.call(null,io.pedestal.app.util.log.log,"\uFDD0:debug",keyvals);
};
var debug = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return debug__delegate.call(this, keyvals);
};
debug.cljs$lang$maxFixedArity = 0;
debug.cljs$lang$applyTo = (function (arglist__12547){
var keyvals = cljs.core.seq(arglist__12547);
return debug__delegate(keyvals);
});
debug.cljs$core$IFn$_invoke$arity$variadic = debug__delegate;
return debug;
})()
;
/**
* Logs an :info level message. Use this level for information we may
* want to record in tests of the production system.
* @param {...*} var_args
*/
io.pedestal.app.util.log.info = (function() { 
var info__delegate = function (keyvals){
return cljs.core.apply.call(null,io.pedestal.app.util.log.log,"\uFDD0:info",keyvals);
};
var info = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return info__delegate.call(this, keyvals);
};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__12548){
var keyvals = cljs.core.seq(arglist__12548);
return info__delegate(keyvals);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
/**
* Logs a :warn level message.
* @param {...*} var_args
*/
io.pedestal.app.util.log.warn = (function() { 
var warn__delegate = function (keyvals){
return cljs.core.apply.call(null,io.pedestal.app.util.log.log,"\uFDD0:warn",keyvals);
};
var warn = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return warn__delegate.call(this, keyvals);
};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__12549){
var keyvals = cljs.core.seq(arglist__12549);
return warn__delegate(keyvals);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
