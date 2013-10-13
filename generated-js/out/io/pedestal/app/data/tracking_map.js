goog.provide('io.pedestal.app.data.tracking_map');
goog.require('cljs.core');
goog.require('io.pedestal.app.data.change');
goog.provide('io.pedestal.app.data.tracking_map.TrackingMap');

/**
* @constructor
*/
io.pedestal.app.data.tracking_map.TrackingMap = (function (basis,map,change_map){
this.basis = basis;
this.map = map;
this.change_map = change_map;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16156431;
})
io.pedestal.app.data.tracking_map.TrackingMap.cljs$lang$type = true;
io.pedestal.app.data.tracking_map.TrackingMap.cljs$lang$ctorStr = "io.pedestal.app.data.tracking-map/TrackingMap";
io.pedestal.app.data.tracking_map.TrackingMap.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"io.pedestal.app.data.tracking-map/TrackingMap");
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (_){
var self__ = this;
return cljs.core._as_transient(self__.map);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
return cljs.core._hash(self__.map);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var temp__4090__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(self__.map,k);
if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;
if((v instanceof io.pedestal.app.data.tracking_map.TrackingMap))
{return (new io.pedestal.app.data.tracking_map.TrackingMap(self__.basis,v.map,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.change_map,cljs.core.PersistentVector.fromArray(["\uFDD0:context"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),k)));
} else
{if(cljs.core.map_QMARK_(v))
{return (new io.pedestal.app.data.tracking_map.TrackingMap(self__.basis,v,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.change_map,cljs.core.PersistentVector.fromArray(["\uFDD0:context"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),k)));
} else
{if("\uFDD0:else")
{return v;
} else
{return null;
}
}
}
} else
{return not_found;
}
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
return (new io.pedestal.app.data.tracking_map.TrackingMap(self__.basis,cljs.core._assoc(self__.map,k,(io.pedestal.app.data.tracking_map.plain_map.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.data.tracking_map.plain_map.cljs$core$IFn$_invoke$arity$1(v) : io.pedestal.app.data.tracking_map.plain_map.call(null,v))),(io.pedestal.app.data.tracking_map.record_change.cljs$core$IFn$_invoke$arity$5 ? io.pedestal.app.data.tracking_map.record_change.cljs$core$IFn$_invoke$arity$5("\uFDD0:assoc",self__.map,k,v,self__.change_map) : io.pedestal.app.data.tracking_map.record_change.call(null,"\uFDD0:assoc",self__.map,k,v,self__.change_map))));
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
return cljs.core._contains_key_QMARK_(self__.map,k);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.call = (function() {
var G__12541 = null;
var G__12541__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(self__.map,k);
});
var G__12541__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.map,k,not_found);
});
G__12541 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__12541__2.call(this,self__,k);
case 3:
return G__12541__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__12541;
})()
;
io.pedestal.app.data.tracking_map.TrackingMap.prototype.apply = (function (self__,args12540){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args12540.slice()));
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
return self__.map;
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
return cljs.core._kv_reduce(self__.map,f,init);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll,entry);
}
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.map], 0));
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
return cljs.core._seq(self__.map);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return cljs.core._count(self__.map);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
return cljs.core._equiv(self__.map,other);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
return (new io.pedestal.app.data.tracking_map.TrackingMap(self__.basis,cljs.core._with_meta(self__.map,meta),self__.change_map));
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
return cljs.core._meta(self__.map);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
return cljs.core._empty(self__.map);
});
io.pedestal.app.data.tracking_map.TrackingMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
return (new io.pedestal.app.data.tracking_map.TrackingMap(self__.basis,cljs.core._dissoc(self__.map,k),(io.pedestal.app.data.tracking_map.record_change.cljs$core$IFn$_invoke$arity$5 ? io.pedestal.app.data.tracking_map.record_change.cljs$core$IFn$_invoke$arity$5("\uFDD0:dissoc",self__.map,k,null,self__.change_map) : io.pedestal.app.data.tracking_map.record_change.call(null,"\uFDD0:dissoc",self__.map,k,null,self__.change_map))));
});
io.pedestal.app.data.tracking_map.__GT_TrackingMap = (function __GT_TrackingMap(basis,map,change_map){
return (new io.pedestal.app.data.tracking_map.TrackingMap(basis,map,change_map));
});
io.pedestal.app.data.tracking_map.plain_map = (function plain_map(m){
if((m instanceof io.pedestal.app.data.tracking_map.TrackingMap))
{return m.map;
} else
{return m;
}
});
io.pedestal.app.data.tracking_map.merge_when_tracking_map = (function merge_when_tracking_map(change_map,tracking_map){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.concat),cljs.core.array_seq([change_map,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((((tracking_map instanceof io.pedestal.app.data.tracking_map.TrackingMap))?tracking_map.change_map:null),"\uFDD0:context")], 0));
});
io.pedestal.app.data.tracking_map.record_change = (function record_change(action,map,key,val,change_map){
var map__12543 = change_map;
var map__12543__$1 = ((cljs.core.seq_QMARK_(map__12543))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12543):map__12543);
var cs = map__12543__$1;
var updated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12543__$1,"\uFDD0:updated");
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12543__$1,"\uFDD0:context");
var change = ((cljs.core.seq(context))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(context,key):cljs.core.PersistentVector.fromArray([key], true));
var cs__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,"\uFDD0:dissoc"))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cs,cljs.core.PersistentVector.fromArray(["\uFDD0:removed"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,key);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,key),io.pedestal.app.data.tracking_map.plain_map(val));
} else
{return and__3941__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cs,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,key)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cs,cljs.core.PersistentVector.fromArray(["\uFDD0:added"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):(("\uFDD0:else")?cs:null))));
var cs__$2 = (((function (){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,"\uFDD0:assoc");
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.map_QMARK_(val);
if(and__3941__auto____$1)
{return !((val instanceof io.pedestal.app.data.tracking_map.TrackingMap));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cs__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:inspect"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):(((function (){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,"\uFDD0:assoc");
if(and__3941__auto__)
{return (val == null);
} else
{return and__3941__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cs__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:inspect"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):(("\uFDD0:else")?cs__$1:null)));
return io.pedestal.app.data.tracking_map.merge_when_tracking_map(cs__$2,val);
});
io.pedestal.app.data.tracking_map.changes = (function changes(v){
if((v instanceof io.pedestal.app.data.tracking_map.TrackingMap))
{return io.pedestal.app.data.change.compact(v.basis,v.map,v.change_map);
} else
{return null;
}
});
io.pedestal.app.data.tracking_map.tracking_map = (function tracking_map(map){
return (new io.pedestal.app.data.tracking_map.TrackingMap(map,map,cljs.core.PersistentArrayMap.EMPTY));
});
