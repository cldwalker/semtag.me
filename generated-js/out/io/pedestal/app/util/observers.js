goog.provide('io.pedestal.app.util.observers');
goog.require('cljs.core');
io.pedestal.app.util.observers.listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
io.pedestal.app.util.observers.publish = (function publish(topic,message){
var seq__10561 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(io.pedestal.app.util.observers.listeners),topic));
var chunk__10562 = null;
var count__10563 = 0;
var i__10564 = 0;
while(true){
if((i__10564 < count__10563))
{var f = chunk__10562.cljs$core$IIndexed$_nth$arity$2(chunk__10562,i__10564);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(message) : f.call(null,message));
{
var G__10565 = seq__10561;
var G__10566 = chunk__10562;
var G__10567 = count__10563;
var G__10568 = (i__10564 + 1);
seq__10561 = G__10565;
chunk__10562 = G__10566;
count__10563 = G__10567;
i__10564 = G__10568;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10561);
if(temp__4092__auto__)
{var seq__10561__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10561__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__10561__$1);
{
var G__10569 = cljs.core.chunk_rest(seq__10561__$1);
var G__10570 = c__9646__auto__;
var G__10571 = cljs.core.count(c__9646__auto__);
var G__10572 = 0;
seq__10561 = G__10569;
chunk__10562 = G__10570;
count__10563 = G__10571;
i__10564 = G__10572;
continue;
}
} else
{var f = cljs.core.first(seq__10561__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(message) : f.call(null,message));
{
var G__10573 = cljs.core.next(seq__10561__$1);
var G__10574 = null;
var G__10575 = 0;
var G__10576 = 0;
seq__10561 = G__10573;
chunk__10562 = G__10574;
count__10563 = G__10575;
i__10564 = G__10576;
continue;
}
}
} else
{return null;
}
}
break;
}
});
io.pedestal.app.util.observers.subscribe = (function subscribe(topic,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$5(io.pedestal.app.util.observers.listeners,cljs.core.update_in,cljs.core.PersistentVector.fromArray([topic], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
io.pedestal.app.util.observers.clear = (function clear(){
return cljs.core.reset_BANG_(io.pedestal.app.util.observers.listeners,cljs.core.PersistentArrayMap.EMPTY);
});
