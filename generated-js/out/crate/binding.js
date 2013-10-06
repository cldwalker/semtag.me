goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.provide('crate.binding.SubAtom');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6324224;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__9450__auto__,writer__9451__auto__,opt__9452__auto__){
return cljs.core._write.call(null,writer__9451__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var seq__12768 = cljs.core.seq.call(null,self__.watches);
var chunk__12769 = null;
var count__12770 = 0;
var i__12771 = 0;
while(true){
if((i__12771 < count__12770))
{var vec__12772 = cljs.core._nth.call(null,chunk__12769,i__12771);
var key = cljs.core.nth.call(null,vec__12772,0,null);
var f = cljs.core.nth.call(null,vec__12772,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__12774 = seq__12768;
var G__12775 = chunk__12769;
var G__12776 = count__12770;
var G__12777 = (i__12771 + 1);
seq__12768 = G__12774;
chunk__12769 = G__12775;
count__12770 = G__12776;
i__12771 = G__12777;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12768);
if(temp__4092__auto__)
{var seq__12768__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12768__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__12768__$1);
{
var G__12778 = cljs.core.chunk_rest.call(null,seq__12768__$1);
var G__12779 = c__9640__auto__;
var G__12780 = cljs.core.count.call(null,c__9640__auto__);
var G__12781 = 0;
seq__12768 = G__12778;
chunk__12769 = G__12779;
count__12770 = G__12780;
i__12771 = G__12781;
continue;
}
} else
{var vec__12773 = cljs.core.first.call(null,seq__12768__$1);
var key = cljs.core.nth.call(null,vec__12773,0,null);
var f = cljs.core.nth.call(null,vec__12773,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__12782 = cljs.core.next.call(null,seq__12768__$1);
var G__12783 = null;
var G__12784 = 0;
var G__12785 = 0;
seq__12768 = G__12782;
chunk__12769 = G__12783;
count__12770 = G__12784;
i__12771 = G__12785;
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
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
if(cljs.core.truth_(f))
{return this$.watches = cljs.core.assoc.call(null,self__.watches,key,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.SubAtom.prototype.crate$binding$IPrintable$ = true;
crate.binding.SubAtom.prototype.crate$binding$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<SubAtom: "], true),crate.binding._pr_seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path),opts),">");
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches){
return (new crate.binding.SubAtom(atm,path,prevhash,watches));
});
crate.binding.subatom = (function subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:cljs.core.PersistentVector.fromArray([path], true));
var vec__12787 = (((atm instanceof crate.binding.SubAtom))?cljs.core.PersistentVector.fromArray([atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], true):cljs.core.PersistentVector.fromArray([atm,path__$1], true));
var atm__$1 = cljs.core.nth.call(null,vec__12787,0,null);
var path__$2 = cljs.core.nth.call(null,vec__12787,1,null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null));
cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){
var latest = cljs.core.get_in.call(null,nv,path__$2);
var prev = cljs.core.get_in.call(null,ov,path__$2);
var latest_hash = cljs.core.hash.call(null,latest);
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash);
if(and__3941__auto__)
{return cljs.core.not_EQ_.call(null,prev,latest);
} else
{return and__3941__auto__;
}
})())
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__12788__delegate = function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__12788 = function (sa,f,x,y,z,var_args){
var more = null;
if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12788__delegate.call(this, sa, f, x, y, z, more);
};
G__12788.cljs$lang$maxFixedArity = 5;
G__12788.cljs$lang$applyTo = (function (arglist__12789){
var sa = cljs.core.first(arglist__12789);
arglist__12789 = cljs.core.next(arglist__12789);
var f = cljs.core.first(arglist__12789);
arglist__12789 = cljs.core.next(arglist__12789);
var x = cljs.core.first(arglist__12789);
arglist__12789 = cljs.core.next(arglist__12789);
var y = cljs.core.first(arglist__12789);
arglist__12789 = cljs.core.next(arglist__12789);
var z = cljs.core.first(arglist__12789);
var more = cljs.core.rest(arglist__12789);
return G__12788__delegate(sa, f, x, y, z, more);
});
G__12788.cljs$core$IFn$_invoke$arity$variadic = G__12788__delegate;
return G__12788;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.notify = (function notify(w,o,v){
return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = {};
crate.binding.bindable = {};
crate.binding._value = (function _value(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (crate.binding._value[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (crate.binding._value["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (crate.binding._on_change[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (crate.binding._on_change["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});
goog.provide('crate.binding.atom_binding');

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__9450__auto__,writer__9451__auto__,opt__9452__auto__){
return cljs.core._write.call(null,writer__9451__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){
return func.call(null,crate.binding._value.call(null,this$));
}));
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){
return (new crate.binding.atom_binding(atm,value_func));
});
goog.provide('crate.binding.notifier');

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__9450__auto__,writer__9451__auto__,opt__9452__auto__){
return cljs.core._write.call(null,writer__9451__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var seq__12790 = cljs.core.seq.call(null,self__.watches);
var chunk__12791 = null;
var count__12792 = 0;
var i__12793 = 0;
while(true){
if((i__12793 < count__12792))
{var vec__12794 = cljs.core._nth.call(null,chunk__12791,i__12793);
var key = cljs.core.nth.call(null,vec__12794,0,null);
var f = cljs.core.nth.call(null,vec__12794,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__12796 = seq__12790;
var G__12797 = chunk__12791;
var G__12798 = count__12792;
var G__12799 = (i__12793 + 1);
seq__12790 = G__12796;
chunk__12791 = G__12797;
count__12792 = G__12798;
i__12793 = G__12799;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12790);
if(temp__4092__auto__)
{var seq__12790__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12790__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__12790__$1);
{
var G__12800 = cljs.core.chunk_rest.call(null,seq__12790__$1);
var G__12801 = c__9640__auto__;
var G__12802 = cljs.core.count.call(null,c__9640__auto__);
var G__12803 = 0;
seq__12790 = G__12800;
chunk__12791 = G__12801;
count__12792 = G__12802;
i__12793 = G__12803;
continue;
}
} else
{var vec__12795 = cljs.core.first.call(null,seq__12790__$1);
var key = cljs.core.nth.call(null,vec__12795,0,null);
var f = cljs.core.nth.call(null,vec__12795,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__12804 = cljs.core.next.call(null,seq__12790__$1);
var G__12805 = null;
var G__12806 = 0;
var G__12807 = 0;
seq__12790 = G__12804;
chunk__12791 = G__12805;
count__12792 = G__12806;
i__12793 = G__12807;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){
return (new crate.binding.notifier(watches));
});
goog.provide('crate.binding.bound_collection');

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__9450__auto__,writer__9451__auto__,opt__9452__auto__){
return cljs.core._write.call(null,writer__9451__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
return cljs.core.map.call(null,"\uFDD0:elem",cljs.core.vals.call(null,this$.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__12808){
var vec__12809 = p__12808;
var event = cljs.core.nth.call(null,vec__12809,0,null);
var el = cljs.core.nth.call(null,vec__12809,1,null);
var v = cljs.core.nth.call(null,vec__12809,2,null);
return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){
var sa = crate.binding.subatom.call(null,bc.atm,path);
var elem = crate.binding.opt.call(null,bc,"\uFDD0:as").call(null,sa);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:elem",elem,"\uFDD0:subatom",sa], true));
return crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray(["\uFDD0:add",elem,cljs.core.deref.call(null,sa)], true));
});
crate.binding.bc_remove = (function bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
return crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray(["\uFDD0:remove",(new cljs.core.Keyword("\uFDD0:elem")).call(null,prev),null], true));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){
if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if("\uFDD0:else")
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__3943__auto__ = crate.binding.opt.call(null,bc,"\uFDD0:path");
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;
if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return __GT_path__delegate.call(this, bc, segs);
};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__12810){
var bc = cljs.core.first(arglist__12810);
var segs = cljs.core.rest(arglist__12810);
return __GT_path__delegate(bc, segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,"\uFDD0:keyfn"));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__12819_12827 = cljs.core.seq.call(null,added);
var chunk__12820_12828 = null;
var count__12821_12829 = 0;
var i__12822_12830 = 0;
while(true){
if((i__12822_12830 < count__12821_12829))
{var a_12831 = cljs.core._nth.call(null,chunk__12820_12828,i__12822_12830);
crate.binding.bc_add.call(null,bc,a_12831,a_12831);
{
var G__12832 = seq__12819_12827;
var G__12833 = chunk__12820_12828;
var G__12834 = count__12821_12829;
var G__12835 = (i__12822_12830 + 1);
seq__12819_12827 = G__12832;
chunk__12820_12828 = G__12833;
count__12821_12829 = G__12834;
i__12822_12830 = G__12835;
continue;
}
} else
{var temp__4092__auto___12836 = cljs.core.seq.call(null,seq__12819_12827);
if(temp__4092__auto___12836)
{var seq__12819_12837__$1 = temp__4092__auto___12836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12819_12837__$1))
{var c__9640__auto___12838 = cljs.core.chunk_first.call(null,seq__12819_12837__$1);
{
var G__12839 = cljs.core.chunk_rest.call(null,seq__12819_12837__$1);
var G__12840 = c__9640__auto___12838;
var G__12841 = cljs.core.count.call(null,c__9640__auto___12838);
var G__12842 = 0;
seq__12819_12827 = G__12839;
chunk__12820_12828 = G__12840;
count__12821_12829 = G__12841;
i__12822_12830 = G__12842;
continue;
}
} else
{var a_12843 = cljs.core.first.call(null,seq__12819_12837__$1);
crate.binding.bc_add.call(null,bc,a_12843,a_12843);
{
var G__12844 = cljs.core.next.call(null,seq__12819_12837__$1);
var G__12845 = null;
var G__12846 = 0;
var G__12847 = 0;
seq__12819_12827 = G__12844;
chunk__12820_12828 = G__12845;
count__12821_12829 = G__12846;
i__12822_12830 = G__12847;
continue;
}
}
} else
{}
}
break;
}
var seq__12823 = cljs.core.seq.call(null,removed);
var chunk__12824 = null;
var count__12825 = 0;
var i__12826 = 0;
while(true){
if((i__12826 < count__12825))
{var r = cljs.core._nth.call(null,chunk__12824,i__12826);
crate.binding.bc_remove.call(null,bc,r);
{
var G__12848 = seq__12823;
var G__12849 = chunk__12824;
var G__12850 = count__12825;
var G__12851 = (i__12826 + 1);
seq__12823 = G__12848;
chunk__12824 = G__12849;
count__12825 = G__12850;
i__12826 = G__12851;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12823);
if(temp__4092__auto__)
{var seq__12823__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12823__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__12823__$1);
{
var G__12852 = cljs.core.chunk_rest.call(null,seq__12823__$1);
var G__12853 = c__9640__auto__;
var G__12854 = cljs.core.count.call(null,c__9640__auto__);
var G__12855 = 0;
seq__12823 = G__12852;
chunk__12824 = G__12853;
count__12825 = G__12854;
i__12826 = G__12855;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__12823__$1);
crate.binding.bc_remove.call(null,bc,r);
{
var G__12856 = cljs.core.next.call(null,seq__12823__$1);
var G__12857 = null;
var G__12858 = 0;
var G__12859 = 0;
seq__12823 = G__12856;
chunk__12824 = G__12857;
count__12825 = G__12858;
i__12826 = G__12859;
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
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__12860){
var vec__12863 = p__12860;
var path = cljs.core.nth.call(null,vec__12863,0,null);
var opts = cljs.core.nth.call(null,vec__12863,1,null);
var vec__12864 = (cljs.core.truth_(opts)?cljs.core.PersistentVector.fromArray([path,opts], true):cljs.core.PersistentVector.fromArray([null,path], true));
var path__$1 = cljs.core.nth.call(null,vec__12864,0,null);
var opts__$1 = cljs.core.nth.call(null,vec__12864,1,null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,"\uFDD0:path",path__$1);
var opts__$3 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0:keyfn")).call(null,opts__$2)))?cljs.core.assoc.call(null,opts__$2,"\uFDD0:keyfn",cljs.core.first):cljs.core.assoc.call(null,opts__$2,"\uFDD0:keyfn",cljs.core.comp.call(null,(new cljs.core.Keyword("\uFDD0:keyfn")).call(null,opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__12860 = null;
if (arguments.length > 1) {
  p__12860 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound_coll__delegate.call(this, atm, p__12860);
};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__12865){
var atm = cljs.core.first(arglist__12865);
var p__12860 = cljs.core.rest(arglist__12865);
return bound_coll__delegate(atm, p__12860);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__12866){
var vec__12868 = p__12866;
var opts = cljs.core.nth.call(null,vec__12868,0,null);
var opts__$1 = cljs.core.assoc.call(null,opts,"\uFDD0:as",as);
var atm__$1 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0:path")).call(null,opts__$1)))?atm:crate.binding.subatom.call(null,atm,(new cljs.core.Keyword("\uFDD0:path")).call(null,opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0:keyfn")).call(null,opts__$1)))?cljs.core.assoc.call(null,opts__$1,"\uFDD0:keyfn",cljs.core.first):cljs.core.assoc.call(null,opts__$1,"\uFDD0:keyfn",cljs.core.comp.call(null,(new cljs.core.Keyword("\uFDD0:keyfn")).call(null,opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__12866 = null;
if (arguments.length > 2) {
  p__12866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return map_bound__delegate.call(this, as, atm, p__12866);
};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__12869){
var as = cljs.core.first(arglist__12869);
arglist__12869 = cljs.core.next(arglist__12869);
var atm = cljs.core.first(arglist__12869);
var p__12866 = cljs.core.rest(arglist__12869);
return map_bound__delegate(as, atm, p__12866);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__12871 = b;
if(G__12871)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__12871.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__12871.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__12871);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__12871);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__12873 = b;
if(G__12873)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__12873.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__12873.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__12873);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__12873);
}
});
crate.binding.value = (function value(b){
return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){
return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){
return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__12874){
var vec__12876 = p__12874;
var func = cljs.core.nth.call(null,vec__12876,0,null);
var func__$1 = (function (){var or__3943__auto__ = func;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__12874 = null;
if (arguments.length > 1) {
  p__12874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound__delegate.call(this, atm, p__12874);
};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__12877){
var atm = cljs.core.first(arglist__12877);
var p__12874 = cljs.core.rest(arglist__12877);
return bound__delegate(atm, p__12874);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
