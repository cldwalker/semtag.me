goog.provide('io.pedestal.app.data.change');
goog.require('cljs.core');
io.pedestal.app.data.change.find_changes = (function find_changes(changes,old_map,new_map,path){
var parent_path = cljs.core.butlast.call(null,path);
var k = cljs.core.last.call(null,path);
var old_m = ((cljs.core.seq.call(null,parent_path))?cljs.core.get_in.call(null,old_map,parent_path):old_map);
var new_m = ((cljs.core.seq.call(null,parent_path))?cljs.core.get_in.call(null,new_map,parent_path):new_map);
var o = cljs.core.get.call(null,old_m,k);
var n = cljs.core.get.call(null,new_m,k);
if(!(cljs.core.contains_QMARK_.call(null,old_m,k)))
{return cljs.core.update_in.call(null,changes,cljs.core.PersistentVector.fromArray(["\uFDD0:added"], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if(!(cljs.core.contains_QMARK_.call(null,new_m,k)))
{return cljs.core.update_in.call(null,changes,cljs.core.PersistentVector.fromArray(["\uFDD0:removed"], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,o,n);
if(and__3941__auto__)
{var or__3943__auto__ = !(cljs.core.map_QMARK_.call(null,o));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(cljs.core.map_QMARK_.call(null,n));
}
} else
{return and__3941__auto__;
}
})())
{return cljs.core.update_in.call(null,changes,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,o,n);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.map_QMARK_.call(null,o);
if(and__3941__auto____$1)
{return cljs.core.map_QMARK_.call(null,n);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return cljs.core.reduce.call(null,(function (a,k__$1){
return find_changes.call(null,a,old_map,new_map,cljs.core.conj.call(null,path,k__$1));
}),changes,cljs.core.into.call(null,cljs.core.keys.call(null,n),cljs.core.keys.call(null,o)));
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
return cljs.core.merge_with.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.concat),c1,c2);
});
io.pedestal.app.data.change.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){
var vec__10031 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?cljs.core.PersistentVector.fromArray([path_a,path_b], true):cljs.core.PersistentVector.fromArray([path_b,path_a], true));
var small = cljs.core.nth.call(null,vec__10031,0,null);
var large = cljs.core.nth.call(null,vec__10031,1,null);
return cljs.core._EQ_.call(null,small,cljs.core.take.call(null,cljs.core.count.call(null,small),large));
});
io.pedestal.app.data.change.remove_redundent_updates = (function remove_redundent_updates(updates){
return cljs.core.reduce.call(null,(function (a,update){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10032_SHARP_){
return io.pedestal.app.data.change.descendent_QMARK_.call(null,p1__10032_SHARP_,update);
}),a)))
{return a;
} else
{return cljs.core.conj.call(null,a,update);
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.count,updates)));
});
io.pedestal.app.data.change.remove_redundent_adds = (function remove_redundent_adds(adds){
return cljs.core.reduce.call(null,(function (a,add){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10033_SHARP_){
return io.pedestal.app.data.change.descendent_QMARK_.call(null,p1__10033_SHARP_,add);
}),a)))
{return a;
} else
{return cljs.core.conj.call(null,a,add);
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.sort_by.call(null,cljs.core.count,adds));
});
io.pedestal.app.data.change.remove_updates_covered_by_adds = (function remove_updates_covered_by_adds(updates,adds){
return cljs.core.set.call(null,cljs.core.remove.call(null,(function (u){
return cljs.core.some.call(null,(function (a){
return io.pedestal.app.data.change.descendent_QMARK_.call(null,a,u);
}),adds);
}),updates));
});
io.pedestal.app.data.change.remove_updates_covered_by_removes = (function remove_updates_covered_by_removes(updates,removes){
return cljs.core.set.call(null,cljs.core.remove.call(null,(function (u){
return cljs.core.some.call(null,(function (r){
return io.pedestal.app.data.change.descendent_QMARK_.call(null,r,u);
}),removes);
}),updates));
});
io.pedestal.app.data.change.compact = (function compact(old_m,new_m,p__10034){
var map__10038 = p__10034;
var map__10038__$1 = ((cljs.core.seq_QMARK_.call(null,map__10038))?cljs.core.apply.call(null,cljs.core.hash_map,map__10038):map__10038);
var change = map__10038__$1;
var inspect = cljs.core.get.call(null,map__10038__$1,"\uFDD0:inspect");
var removed = cljs.core.get.call(null,map__10038__$1,"\uFDD0:removed");
var updated = cljs.core.get.call(null,map__10038__$1,"\uFDD0:updated");
var added = cljs.core.get.call(null,map__10038__$1,"\uFDD0:added");
var change__$1 = cljs.core.reduce.call(null,(function (a,change_path){
return io.pedestal.app.data.change.find_changes.call(null,a,old_m,new_m,change_path);
}),change,inspect);
var change__$2 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:updated")).call(null,change__$1))?cljs.core.update_in.call(null,change__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),io.pedestal.app.data.change.remove_redundent_updates):change__$1);
var change__$3 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:added")).call(null,change__$2))?cljs.core.update_in.call(null,change__$2,cljs.core.PersistentVector.fromArray(["\uFDD0:added"], true),io.pedestal.app.data.change.remove_redundent_adds):change__$2);
var change__$4 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:updated")).call(null,change__$3))?cljs.core.update_in.call(null,change__$3,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),io.pedestal.app.data.change.remove_updates_covered_by_adds,(new cljs.core.Keyword("\uFDD0:added")).call(null,change__$3)):change__$3);
var change__$5 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:updated")).call(null,change__$4))?cljs.core.update_in.call(null,change__$4,cljs.core.PersistentVector.fromArray(["\uFDD0:updated"], true),io.pedestal.app.data.change.remove_updates_covered_by_removes,(new cljs.core.Keyword("\uFDD0:removed")).call(null,change__$4)):change__$4);
return cljs.core.reduce.call(null,(function (a,p__10039){
var vec__10040 = p__10039;
var k = cljs.core.nth.call(null,vec__10040,0,null);
var v = cljs.core.nth.call(null,vec__10040,1,null);
if(cljs.core.empty_QMARK_.call(null,v))
{return a;
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,change__$5,"\uFDD0:inspect"));
});
