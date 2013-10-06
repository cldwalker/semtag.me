goog.provide('io.pedestal.app.util.observers');
goog.require('cljs.core');
io.pedestal.app.util.observers.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
io.pedestal.app.util.observers.publish = (function publish(topic,message){
var seq__10555 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,io.pedestal.app.util.observers.listeners),topic));
var chunk__10556 = null;
var count__10557 = 0;
var i__10558 = 0;
while(true){
if((i__10558 < count__10557))
{var f = cljs.core._nth.call(null,chunk__10556,i__10558);
f.call(null,message);
{
var G__10559 = seq__10555;
var G__10560 = chunk__10556;
var G__10561 = count__10557;
var G__10562 = (i__10558 + 1);
seq__10555 = G__10559;
chunk__10556 = G__10560;
count__10557 = G__10561;
i__10558 = G__10562;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10555);
if(temp__4092__auto__)
{var seq__10555__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10555__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__10555__$1);
{
var G__10563 = cljs.core.chunk_rest.call(null,seq__10555__$1);
var G__10564 = c__9640__auto__;
var G__10565 = cljs.core.count.call(null,c__9640__auto__);
var G__10566 = 0;
seq__10555 = G__10563;
chunk__10556 = G__10564;
count__10557 = G__10565;
i__10558 = G__10566;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__10555__$1);
f.call(null,message);
{
var G__10567 = cljs.core.next.call(null,seq__10555__$1);
var G__10568 = null;
var G__10569 = 0;
var G__10570 = 0;
seq__10555 = G__10567;
chunk__10556 = G__10568;
count__10557 = G__10569;
i__10558 = G__10570;
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
return cljs.core.swap_BANG_.call(null,io.pedestal.app.util.observers.listeners,cljs.core.update_in,cljs.core.PersistentVector.fromArray([topic], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
io.pedestal.app.util.observers.clear = (function clear(){
return cljs.core.reset_BANG_.call(null,io.pedestal.app.util.observers.listeners,cljs.core.PersistentArrayMap.EMPTY);
});
