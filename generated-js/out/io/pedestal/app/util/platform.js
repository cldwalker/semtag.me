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
}catch (e17152){if((e17152 instanceof Error))
{var _ = e17152;
return null;
} else
{if("\uFDD0:else")
{throw e17152;
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
var seq__17157_17161 = cljs.core.seq(coll);
var chunk__17158_17162 = null;
var count__17159_17163 = 0;
var i__17160_17164 = 0;
while(true){
if((i__17160_17164 < count__17159_17163))
{var d_17165 = chunk__17158_17162.cljs$core$IIndexed$_nth$arity$2(chunk__17158_17162,i__17160_17164);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_17165], 0)));
{
var G__17166 = seq__17157_17161;
var G__17167 = chunk__17158_17162;
var G__17168 = count__17159_17163;
var G__17169 = (i__17160_17164 + 1);
seq__17157_17161 = G__17166;
chunk__17158_17162 = G__17167;
count__17159_17163 = G__17168;
i__17160_17164 = G__17169;
continue;
}
} else
{var temp__4092__auto___17170 = cljs.core.seq(seq__17157_17161);
if(temp__4092__auto___17170)
{var seq__17157_17171__$1 = temp__4092__auto___17170;
if(cljs.core.chunked_seq_QMARK_(seq__17157_17171__$1))
{var c__9926__auto___17172 = cljs.core.chunk_first(seq__17157_17171__$1);
{
var G__17173 = cljs.core.chunk_rest(seq__17157_17171__$1);
var G__17174 = c__9926__auto___17172;
var G__17175 = cljs.core.count(c__9926__auto___17172);
var G__17176 = 0;
seq__17157_17161 = G__17173;
chunk__17158_17162 = G__17174;
count__17159_17163 = G__17175;
i__17160_17164 = G__17176;
continue;
}
} else
{var d_17177 = cljs.core.first(seq__17157_17171__$1);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_17177], 0)));
{
var G__17178 = cljs.core.next(seq__17157_17171__$1);
var G__17179 = null;
var G__17180 = 0;
var G__17181 = 0;
seq__17157_17161 = G__17178;
chunk__17158_17162 = G__17179;
count__17159_17163 = G__17180;
i__17160_17164 = G__17181;
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
}catch (e17183){if((e17183 instanceof Error))
{var e = e17183;
console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([args], 0)));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if("\uFDD0:else")
{throw e17183;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__17184){
var f = cljs.core.first(arglist__17184);
var args = cljs.core.rest(arglist__17184);
return log_exceptions__delegate(f, args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
