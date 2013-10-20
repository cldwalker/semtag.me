goog.provide('io.pedestal.app.util.platform');
goog.require('cljs.core');
goog.require('cljs.reader');
io.pedestal.app.util.platform.safe_read_string = (function safe_read_string(s){
return cljs.reader.read_string(s);
});
io.pedestal.app.util.platform.parse_int = (function parse_int(s){
if((function (){var or__3943__auto__ = typeof s === 'number';
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.string_QMARK_(s);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("the value passed to parse-int must be a number or a string"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)))], 0)))].join('')));
}
return parseInt(s,10);
});
io.pedestal.app.util.platform.date = (function date(){
return (new Date());
});
io.pedestal.app.util.platform.create_timeout = (function create_timeout(msecs,f){
return setTimeout(f,msecs);
});
io.pedestal.app.util.platform.cancel_timeout = (function cancel_timeout(timeout){
return clearTimeout(timeout);
});
io.pedestal.app.util.platform.read_form_if_string = (function read_form_if_string(x){
if(cljs.core.string_QMARK_(x))
{try{return io.pedestal.app.util.platform.safe_read_string(x);
}catch (e156187){if((e156187 instanceof Error))
{var _ = e156187;
return null;
} else
{if("\uFDD0:else")
{throw e156187;
} else
{return null;
}
}
}} else
{return x;
}
});
io.pedestal.app.util.platform.log_group = (function log_group(group_name,coll){
console.group(group_name);
var seq__156192_156196 = cljs.core.seq(coll);
var chunk__156193_156197 = null;
var count__156194_156198 = 0;
var i__156195_156199 = 0;
while(true){
if((i__156195_156199 < count__156194_156198))
{var d_156200 = chunk__156193_156197.cljs$core$IIndexed$_nth$arity$2(chunk__156193_156197,i__156195_156199);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_156200], 0)));
{
var G__156201 = seq__156192_156196;
var G__156202 = chunk__156193_156197;
var G__156203 = count__156194_156198;
var G__156204 = (i__156195_156199 + 1);
seq__156192_156196 = G__156201;
chunk__156193_156197 = G__156202;
count__156194_156198 = G__156203;
i__156195_156199 = G__156204;
continue;
}
} else
{var temp__4092__auto___156205 = cljs.core.seq(seq__156192_156196);
if(temp__4092__auto___156205)
{var seq__156192_156206__$1 = temp__4092__auto___156205;
if(cljs.core.chunked_seq_QMARK_(seq__156192_156206__$1))
{var c__9926__auto___156207 = cljs.core.chunk_first(seq__156192_156206__$1);
{
var G__156208 = cljs.core.chunk_rest(seq__156192_156206__$1);
var G__156209 = c__9926__auto___156207;
var G__156210 = cljs.core.count(c__9926__auto___156207);
var G__156211 = 0;
seq__156192_156196 = G__156208;
chunk__156193_156197 = G__156209;
count__156194_156198 = G__156210;
i__156195_156199 = G__156211;
continue;
}
} else
{var d_156212 = cljs.core.first(seq__156192_156206__$1);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_156212], 0)));
{
var G__156213 = cljs.core.next(seq__156192_156206__$1);
var G__156214 = null;
var G__156215 = 0;
var G__156216 = 0;
seq__156192_156196 = G__156213;
chunk__156193_156197 = G__156214;
count__156194_156198 = G__156215;
i__156195_156199 = G__156216;
continue;
}
}
} else
{}
}
break;
}
return console.groupEnd();
});
/**
* @param {...*} var_args
*/
io.pedestal.app.util.platform.log_exceptions = (function() { 
var log_exceptions__delegate = function (f,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e156218){if((e156218 instanceof Error))
{var e = e156218;
console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([args], 0)));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if("\uFDD0:else")
{throw e156218;
} else
{return null;
}
}
}};
var log_exceptions = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log_exceptions__delegate.call(this, f, args);
};
log_exceptions.cljs$lang$maxFixedArity = 1;
log_exceptions.cljs$lang$applyTo = (function (arglist__156219){
var f = cljs.core.first(arglist__156219);
var args = cljs.core.rest(arglist__156219);
return log_exceptions__delegate(f, args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
