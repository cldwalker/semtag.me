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
}catch (e12494){if((e12494 instanceof Error))
{var _ = e12494;
return null;
} else
{if("\uFDD0:else")
{throw e12494;
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
var seq__12499_12503 = cljs.core.seq(coll);
var chunk__12500_12504 = null;
var count__12501_12505 = 0;
var i__12502_12506 = 0;
while(true){
if((i__12502_12506 < count__12501_12505))
{var d_12507 = chunk__12500_12504.cljs$core$IIndexed$_nth$arity$2(chunk__12500_12504,i__12502_12506);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_12507], 0)));
{
var G__12508 = seq__12499_12503;
var G__12509 = chunk__12500_12504;
var G__12510 = count__12501_12505;
var G__12511 = (i__12502_12506 + 1);
seq__12499_12503 = G__12508;
chunk__12500_12504 = G__12509;
count__12501_12505 = G__12510;
i__12502_12506 = G__12511;
continue;
}
} else
{var temp__4092__auto___12512 = cljs.core.seq(seq__12499_12503);
if(temp__4092__auto___12512)
{var seq__12499_12513__$1 = temp__4092__auto___12512;
if(cljs.core.chunked_seq_QMARK_(seq__12499_12513__$1))
{var c__9646__auto___12514 = cljs.core.chunk_first(seq__12499_12513__$1);
{
var G__12515 = cljs.core.chunk_rest(seq__12499_12513__$1);
var G__12516 = c__9646__auto___12514;
var G__12517 = cljs.core.count(c__9646__auto___12514);
var G__12518 = 0;
seq__12499_12503 = G__12515;
chunk__12500_12504 = G__12516;
count__12501_12505 = G__12517;
i__12502_12506 = G__12518;
continue;
}
} else
{var d_12519 = cljs.core.first(seq__12499_12513__$1);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_12519], 0)));
{
var G__12520 = cljs.core.next(seq__12499_12513__$1);
var G__12521 = null;
var G__12522 = 0;
var G__12523 = 0;
seq__12499_12503 = G__12520;
chunk__12500_12504 = G__12521;
count__12501_12505 = G__12522;
i__12502_12506 = G__12523;
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
}catch (e12525){if((e12525 instanceof Error))
{var e = e12525;
console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([args], 0)));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if("\uFDD0:else")
{throw e12525;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__12526){
var f = cljs.core.first(arglist__12526);
var args = cljs.core.rest(arglist__12526);
return log_exceptions__delegate(f, args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
