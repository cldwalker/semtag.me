goog.provide('io.pedestal.app.util.observers');
goog.require('cljs.core');
io.pedestal.app.util.observers.listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
io.pedestal.app.util.observers.publish = (function publish(topic,message){
var seq__154295 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(io.pedestal.app.util.observers.listeners),topic));
var chunk__154296 = null;
var count__154297 = 0;
var i__154298 = 0;
while(true){
if((i__154298 < count__154297))
{var f = chunk__154296.cljs$core$IIndexed$_nth$arity$2(chunk__154296,i__154298);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(message) : f.call(null,message));
{
var G__154299 = seq__154295;
var G__154300 = chunk__154296;
var G__154301 = count__154297;
var G__154302 = (i__154298 + 1);
seq__154295 = G__154299;
chunk__154296 = G__154300;
count__154297 = G__154301;
i__154298 = G__154302;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__154295);
if(temp__4092__auto__)
{var seq__154295__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__154295__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__154295__$1);
{
var G__154303 = cljs.core.chunk_rest(seq__154295__$1);
var G__154304 = c__9926__auto__;
var G__154305 = cljs.core.count(c__9926__auto__);
var G__154306 = 0;
seq__154295 = G__154303;
chunk__154296 = G__154304;
count__154297 = G__154305;
i__154298 = G__154306;
continue;
}
} else
{var f = cljs.core.first(seq__154295__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(message) : f.call(null,message));
{
var G__154307 = cljs.core.next(seq__154295__$1);
var G__154308 = null;
var G__154309 = 0;
var G__154310 = 0;
seq__154295 = G__154307;
chunk__154296 = G__154308;
count__154297 = G__154309;
i__154298 = G__154310;
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
