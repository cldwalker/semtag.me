goog.provide('io.pedestal.app.data.change');
goog.require('cljs.core');
io.pedestal.app.data.change.find_changes = (function find_changes(changes,old_map,new_map,path){
var parent_path = cljs.core.butlast(path);
var k = cljs.core.last(path);
var old_m = ((cljs.core.seq(parent_path))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_map,parent_path):old_map);
var new_m = ((cljs.core.seq(parent_path))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_map,parent_path):new_map);
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_m,k);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_m,k);
if(!(cljs.core.contains_QMARK_(old_m,k)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(changes,cljs.core.PersistentVector.fromArray(["\uFDD0:added"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if(!(cljs.core.contains_QMARK_(new_m,k)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(changes,cljs.core.PersistentVector.fromArray(["\uFDD0:removed"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if((function (){var and__3941__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o,n);
if(and__3941__auto__)
{var or__3943__auto__ = !(cljs.core.map_QMARK_(o));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(cljs.core.map_QMARK_(n));
}
} else
{return and__3941__auto__;
}
})())
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(changes,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if((function (){var and__3941__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o,n);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.map_QMARK_(o);
if(and__3941__auto____$1)
{return cljs.core.map_QMARK_(n);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,k__$1){
return find_changes(a,old_map,new_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k__$1));
}),changes,cljs.core.into(cljs.core.keys(n),cljs.core.keys(o)));
} else
{if("\uFDD0:else")
{return changes;
} else
{return null;
}
}
}
}
}
});
io.pedestal.app.data.change.merge_changes = (function merge_changes(c1,c2){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.concat),cljs.core.array_seq([c1,c2], 0));
});
io.pedestal.app.data.change.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){
var vec__14747 = (((cljs.core.count(path_a) < cljs.core.count(path_b)))?cljs.core.PersistentVector.fromArray([path_a,path_b], true):cljs.core.PersistentVector.fromArray([path_b,path_a], true));
var small = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747,0,null);
var large = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14747,1,null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(small,cljs.core.take(cljs.core.count(small),large));
});
io.pedestal.app.data.change.remove_redundent_updates = (function remove_redundent_updates(updates){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,update){
if(cljs.core.truth_(cljs.core.some((function (p1__14748_SHARP_){
return io.pedestal.app.data.change.descendent_QMARK_(p1__14748_SHARP_,update);
}),a)))
{return a;
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,update);
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,updates)));
});
io.pedestal.app.data.change.remove_redundent_adds = (function remove_redundent_adds(adds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,add){
if(cljs.core.truth_(cljs.core.some((function (p1__14749_SHARP_){
return io.pedestal.app.data.change.descendent_QMARK_(p1__14749_SHARP_,add);
}),a)))
{return a;
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,add);
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,adds));
});
io.pedestal.app.data.change.remove_updates_covered_by_adds = (function remove_updates_covered_by_adds(updates,adds){
return cljs.core.set(cljs.core.remove((function (u){
return cljs.core.some((function (a){
return io.pedestal.app.data.change.descendent_QMARK_(a,u);
}),adds);
}),updates));
});
io.pedestal.app.data.change.remove_updates_covered_by_removes = (function remove_updates_covered_by_removes(updates,removes){
return cljs.core.set(cljs.core.remove((function (u){
return cljs.core.some((function (r){
return io.pedestal.app.data.change.descendent_QMARK_(r,u);
}),removes);
}),updates));
});
io.pedestal.app.data.change.compact = (function compact(old_m,new_m,p__14750){
var map__14754 = p__14750;
var map__14754__$1 = ((cljs.core.seq_QMARK_(map__14754))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14754):map__14754);
var change = map__14754__$1;
var inspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,"\uFDD0:inspect");
var removed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,"\uFDD0:removed");
var updated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,"\uFDD0:updated");
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,"\uFDD0:added");
var change__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,change_path){
return io.pedestal.app.data.change.find_changes(a,old_m,new_m,change_path);
}),change,inspect);
var change__$2 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:updated")).call(null,change__$1))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(change__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),io.pedestal.app.data.change.remove_redundent_updates):change__$1);
var change__$3 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:added")).call(null,change__$2))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(change__$2,cljs.core.PersistentVector.fromArray(["\uFDD0:added"], true),io.pedestal.app.data.change.remove_redundent_adds):change__$2);
var change__$4 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:updated")).call(null,change__$3))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(change__$3,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),io.pedestal.app.data.change.remove_updates_covered_by_adds,(new cljs.core.Keyword("\uFDD0:added")).call(null,change__$3)):change__$3);
var change__$5 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:updated")).call(null,change__$4))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(change__$4,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),io.pedestal.app.data.change.remove_updates_covered_by_removes,(new cljs.core.Keyword("\uFDD0:removed")).call(null,change__$4)):change__$4);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__14755){
var vec__14756 = p__14755;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14756,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14756,1,null);
if(cljs.core.empty_QMARK_(v))
{return a;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(change__$5,"\uFDD0:inspect"));
});
