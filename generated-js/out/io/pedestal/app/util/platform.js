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
}catch (e12484){if((e12484 instanceof Error))
{var _ = e12484;
return null;
} else
{if("\uFDD0:else")
{throw e12484;
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
var seq__12489_12493 = cljs.core.seq(coll);
var chunk__12490_12494 = null;
var count__12491_12495 = 0;
var i__12492_12496 = 0;
while(true){
if((i__12492_12496 < count__12491_12495))
{var d_12497 = chunk__12490_12494.cljs$core$IIndexed$_nth$arity$2(chunk__12490_12494,i__12492_12496);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_12497], 0)));
{
var G__12498 = seq__12489_12493;
var G__12499 = chunk__12490_12494;
var G__12500 = count__12491_12495;
var G__12501 = (i__12492_12496 + 1);
seq__12489_12493 = G__12498;
chunk__12490_12494 = G__12499;
count__12491_12495 = G__12500;
i__12492_12496 = G__12501;
continue;
}
} else
{var temp__4092__auto___12502 = cljs.core.seq(seq__12489_12493);
if(temp__4092__auto___12502)
{var seq__12489_12503__$1 = temp__4092__auto___12502;
if(cljs.core.chunked_seq_QMARK_(seq__12489_12503__$1))
{var c__9646__auto___12504 = cljs.core.chunk_first(seq__12489_12503__$1);
{
var G__12505 = cljs.core.chunk_rest(seq__12489_12503__$1);
var G__12506 = c__9646__auto___12504;
var G__12507 = cljs.core.count(c__9646__auto___12504);
var G__12508 = 0;
seq__12489_12493 = G__12505;
chunk__12490_12494 = G__12506;
count__12491_12495 = G__12507;
i__12492_12496 = G__12508;
continue;
}
} else
{var d_12509 = cljs.core.first(seq__12489_12503__$1);
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([d_12509], 0)));
{
var G__12510 = cljs.core.next(seq__12489_12503__$1);
var G__12511 = null;
var G__12512 = 0;
var G__12513 = 0;
seq__12489_12493 = G__12510;
chunk__12490_12494 = G__12511;
count__12491_12495 = G__12512;
i__12492_12496 = G__12513;
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
}catch (e12515){if((e12515 instanceof Error))
{var e = e12515;
console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([args], 0)));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if("\uFDD0:else")
{throw e12515;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__12516){
var f = cljs.core.first(arglist__12516);
var args = cljs.core.rest(arglist__12516);
return log_exceptions__delegate(f, args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
