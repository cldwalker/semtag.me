goog.provide('io.pedestal.app.util.observers');
goog.require('cljs.core');
io.pedestal.app.util.observers.listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
io.pedestal.app.util.observers.publish = (function publish(topic,message){
var seq__15271 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(io.pedestal.app.util.observers.listeners),topic));
var chunk__15272 = null;
var count__15273 = 0;
var i__15274 = 0;
while(true){
if((i__15274 < count__15273))
{var f = chunk__15272.cljs$core$IIndexed$_nth$arity$2(chunk__15272,i__15274);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(message) : f.call(null,message));
{
var G__15275 = seq__15271;
var G__15276 = chunk__15272;
var G__15277 = count__15273;
var G__15278 = (i__15274 + 1);
seq__15271 = G__15275;
chunk__15272 = G__15276;
count__15273 = G__15277;
i__15274 = G__15278;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__15271);
if(temp__4092__auto__)
{var seq__15271__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15271__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__15271__$1);
{
var G__15279 = cljs.core.chunk_rest(seq__15271__$1);
var G__15280 = c__9926__auto__;
var G__15281 = cljs.core.count(c__9926__auto__);
var G__15282 = 0;
seq__15271 = G__15279;
chunk__15272 = G__15280;
count__15273 = G__15281;
i__15274 = G__15282;
continue;
}
} else
{var f = cljs.core.first(seq__15271__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(message) : f.call(null,message));
{
var G__15283 = cljs.core.next(seq__15271__$1);
var G__15284 = null;
var G__15285 = 0;
var G__15286 = 0;
seq__15271 = G__15283;
chunk__15272 = G__15284;
count__15273 = G__15285;
i__15274 = G__15286;
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
