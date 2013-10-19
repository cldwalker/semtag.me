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
}catch (e12512){if((e12512 instanceof Error))
{var _ = e12512;
return null;
} else
{if("\uFDD0:else")
{throw e12512;
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
var seq__12517_12521 = cljs.core.seq(coll);
var chunk__12518_12522 = null;
var count__12519_12523 = 0;
var i__12520_12524 = 0;
while(true){
if((i__12520_12524 < count__12519_12523))
{var d_12525 = chunk__12518_12522.cljs$core$IIndexed$_nth$arity$2(chunk__12518_12522,i__12520_12524);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_12525], 0)));
{
var G__12526 = seq__12517_12521;
var G__12527 = chunk__12518_12522;
var G__12528 = count__12519_12523;
var G__12529 = (i__12520_12524 + 1);
seq__12517_12521 = G__12526;
chunk__12518_12522 = G__12527;
count__12519_12523 = G__12528;
i__12520_12524 = G__12529;
continue;
}
} else
{var temp__4092__auto___12530 = cljs.core.seq(seq__12517_12521);
if(temp__4092__auto___12530)
{var seq__12517_12531__$1 = temp__4092__auto___12530;
if(cljs.core.chunked_seq_QMARK_(seq__12517_12531__$1))
{var c__9646__auto___12532 = cljs.core.chunk_first(seq__12517_12531__$1);
{
var G__12533 = cljs.core.chunk_rest(seq__12517_12531__$1);
var G__12534 = c__9646__auto___12532;
var G__12535 = cljs.core.count(c__9646__auto___12532);
var G__12536 = 0;
seq__12517_12521 = G__12533;
chunk__12518_12522 = G__12534;
count__12519_12523 = G__12535;
i__12520_12524 = G__12536;
continue;
}
} else
{var d_12537 = cljs.core.first(seq__12517_12531__$1);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_12537], 0)));
{
var G__12538 = cljs.core.next(seq__12517_12531__$1);
var G__12539 = null;
var G__12540 = 0;
var G__12541 = 0;
seq__12517_12521 = G__12538;
chunk__12518_12522 = G__12539;
count__12519_12523 = G__12540;
i__12520_12524 = G__12541;
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
}catch (e12543){if((e12543 instanceof Error))
{var e = e12543;
console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([args], 0)));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if("\uFDD0:else")
{throw e12543;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__12544){
var f = cljs.core.first(arglist__12544);
var args = cljs.core.rest(arglist__12544);
return log_exceptions__delegate(f, args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
