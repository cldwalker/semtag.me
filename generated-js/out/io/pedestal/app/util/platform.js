goog.provide('io.pedestal.app.util.platform');
goog.require('cljs.core');
goog.require('cljs.reader');
io.pedestal.app.util.platform.safe_read_string = (function safe_read_string(s){
return cljs.reader.read_string.call(null,s);
});
io.pedestal.app.util.platform.parse_int = (function parse_int(s){
if((function (){var or__3943__auto__ = typeof s === 'number';
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.string_QMARK_.call(null,s);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("the value passed to parse-int must be a number or a string"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)))))].join('')));
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
if(cljs.core.string_QMARK_.call(null,x))
{try{return io.pedestal.app.util.platform.safe_read_string.call(null,x);
}catch (e12478){if((e12478 instanceof Error))
{var _ = e12478;
return null;
} else
{if("\uFDD0:else")
{throw e12478;
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
var seq__12483_12487 = cljs.core.seq.call(null,coll);
var chunk__12484_12488 = null;
var count__12485_12489 = 0;
var i__12486_12490 = 0;
while(true){
if((i__12486_12490 < count__12485_12489))
{var d_12491 = cljs.core._nth.call(null,chunk__12484_12488,i__12486_12490);
console.log(cljs.core.pr_str.call(null,d_12491));
{
var G__12492 = seq__12483_12487;
var G__12493 = chunk__12484_12488;
var G__12494 = count__12485_12489;
var G__12495 = (i__12486_12490 + 1);
seq__12483_12487 = G__12492;
chunk__12484_12488 = G__12493;
count__12485_12489 = G__12494;
i__12486_12490 = G__12495;
continue;
}
} else
{var temp__4092__auto___12496 = cljs.core.seq.call(null,seq__12483_12487);
if(temp__4092__auto___12496)
{var seq__12483_12497__$1 = temp__4092__auto___12496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12483_12497__$1))
{var c__9640__auto___12498 = cljs.core.chunk_first.call(null,seq__12483_12497__$1);
{
var G__12499 = cljs.core.chunk_rest.call(null,seq__12483_12497__$1);
var G__12500 = c__9640__auto___12498;
var G__12501 = cljs.core.count.call(null,c__9640__auto___12498);
var G__12502 = 0;
seq__12483_12487 = G__12499;
chunk__12484_12488 = G__12500;
count__12485_12489 = G__12501;
i__12486_12490 = G__12502;
continue;
}
} else
{var d_12503 = cljs.core.first.call(null,seq__12483_12497__$1);
console.log(cljs.core.pr_str.call(null,d_12503));
{
var G__12504 = cljs.core.next.call(null,seq__12483_12497__$1);
var G__12505 = null;
var G__12506 = 0;
var G__12507 = 0;
seq__12483_12487 = G__12504;
chunk__12484_12488 = G__12505;
count__12485_12489 = G__12506;
i__12486_12490 = G__12507;
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
try{return cljs.core.apply.call(null,f,args);
}catch (e12509){if((e12509 instanceof Error))
{var e = e12509;
console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if("\uFDD0:else")
{throw e12509;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__12510){
var f = cljs.core.first(arglist__12510);
var args = cljs.core.rest(arglist__12510);
return log_exceptions__delegate(f, args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
