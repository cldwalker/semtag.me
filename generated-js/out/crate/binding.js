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
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var seq__12797 = cljs.core.seq(self__.watches);
var chunk__12798 = null;
var count__12799 = 0;
var i__12800 = 0;
while(true){
if((i__12800 < count__12799))
{var vec__12801 = chunk__12798.cljs$core$IIndexed$_nth$arity$2(chunk__12798,i__12800);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12801,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12801,1,null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__12803 = seq__12797;
var G__12804 = chunk__12798;
var G__12805 = count__12799;
var G__12806 = (i__12800 + 1);
seq__12797 = G__12803;
chunk__12798 = G__12804;
count__12799 = G__12805;
i__12800 = G__12806;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12797);
if(temp__4092__auto__)
{var seq__12797__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12797__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12797__$1);
{
var G__12807 = cljs.core.chunk_rest(seq__12797__$1);
var G__12808 = c__9646__auto__;
var G__12809 = cljs.core.count(c__9646__auto__);
var G__12810 = 0;
seq__12797 = G__12807;
chunk__12798 = G__12808;
count__12799 = G__12809;
i__12800 = G__12810;
continue;
}
} else
{var vec__12802 = cljs.core.first(seq__12797__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,1,null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__12811 = cljs.core.next(seq__12797__$1);
var G__12812 = null;
var G__12813 = 0;
var G__12814 = 0;
seq__12797 = G__12811;
chunk__12798 = G__12812;
count__12799 = G__12813;
i__12800 = G__12814;
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
{return this$.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
crate.binding.SubAtom.prototype.crate$binding$IPrintable$ = true;
crate.binding.SubAtom.prototype.crate$binding$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["#<SubAtom: "], true),(crate.binding._pr_seq.cljs$core$IFn$_invoke$arity$2 ? crate.binding._pr_seq.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path),opts) : crate.binding._pr_seq.call(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path),opts)),cljs.core.array_seq([">"], 0));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches){
return (new crate.binding.SubAtom(atm,path,prevhash,watches));
});
crate.binding.subatom = (function subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_(path))?path:cljs.core.PersistentVector.fromArray([path], true));
var vec__12816 = (((atm instanceof crate.binding.SubAtom))?cljs.core.PersistentVector.fromArray([atm.atm,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(atm.path,path__$1)], true):cljs.core.PersistentVector.fromArray([atm,path__$1], true));
var atm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12816,0,null);
var path__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12816,1,null);
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(atm__$1),path__$2)),null));
cljs.core.add_watch(atm__$1,k,(function (_,___$1,ov,nv){
var latest = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nv,path__$2);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2);
var latest_hash = cljs.core.hash.cljs$core$IFn$_invoke$arity$1(latest);
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sa.prevhash,latest_hash);
if(and__3941__auto__)
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,latest);
} else
{return and__3941__auto__;
}
})())
{sa.prevhash = latest_hash;
return cljs.core._notify_watches(sa,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2),latest);
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sa.atm,cljs.core.assoc_in,sa.path,new_value);
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
return crate.binding.sub_reset_BANG_(sa,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sa)) : f.call(null,cljs.core.deref(sa))));
});
var sub_swap_BANG___3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_(sa,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sa),x) : f.call(null,cljs.core.deref(sa),x)));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_(sa,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sa),x,y) : f.call(null,cljs.core.deref(sa),x,y)));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_(sa,(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(sa),x,y,z) : f.call(null,cljs.core.deref(sa),x,y,z)));
});
var sub_swap_BANG___6 = (function() { 
var G__12817__delegate = function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_(sa,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.deref(sa),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__12817 = function (sa,f,x,y,z,var_args){
var more = null;
if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12817__delegate.call(this, sa, f, x, y, z, more);
};
G__12817.cljs$lang$maxFixedArity = 5;
G__12817.cljs$lang$applyTo = (function (arglist__12818){
var sa = cljs.core.first(arglist__12818);
arglist__12818 = cljs.core.next(arglist__12818);
var f = cljs.core.first(arglist__12818);
arglist__12818 = cljs.core.next(arglist__12818);
var x = cljs.core.first(arglist__12818);
arglist__12818 = cljs.core.next(arglist__12818);
var y = cljs.core.first(arglist__12818);
arglist__12818 = cljs.core.next(arglist__12818);
var z = cljs.core.first(arglist__12818);
var more = cljs.core.rest(arglist__12818);
return G__12817__delegate(sa, f, x, y, z, more);
});
G__12817.cljs$core$IFn$_invoke$arity$variadic = G__12817__delegate;
return G__12817;
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
return cljs.core._notify_watches(w,o,v);
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
{var x__9515__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (crate.binding._value[goog.typeOf(x__9515__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (crate.binding._value["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("bindable.-value",this$);
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
{var x__9515__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (crate.binding._on_change[goog.typeOf(x__9515__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (crate.binding._on_change["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("bindable.-on-change",this$);
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
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
return (self__.value_func.cljs$core$IFn$_invoke$arity$1 ? self__.value_func.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.atm)) : self__.value_func.call(null,cljs.core.deref(self__.atm)));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
return cljs.core.add_watch(self__.atm,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("atom-binding"),(function (){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(this$.crate$binding$bindable$_value$arity$1(this$)) : func.call(null,this$.crate$binding$bindable$_value$arity$1(this$)));
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
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var seq__12819 = cljs.core.seq(self__.watches);
var chunk__12820 = null;
var count__12821 = 0;
var i__12822 = 0;
while(true){
if((i__12822 < count__12821))
{var vec__12823 = chunk__12820.cljs$core$IIndexed$_nth$arity$2(chunk__12820,i__12822);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12823,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12823,1,null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__12825 = seq__12819;
var G__12826 = chunk__12820;
var G__12827 = count__12821;
var G__12828 = (i__12822 + 1);
seq__12819 = G__12825;
chunk__12820 = G__12826;
count__12821 = G__12827;
i__12822 = G__12828;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12819);
if(temp__4092__auto__)
{var seq__12819__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12819__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12819__$1);
{
var G__12829 = cljs.core.chunk_rest(seq__12819__$1);
var G__12830 = c__9646__auto__;
var G__12831 = cljs.core.count(c__9646__auto__);
var G__12832 = 0;
seq__12819 = G__12829;
chunk__12820 = G__12830;
count__12821 = G__12831;
i__12822 = G__12832;
continue;
}
} else
{var vec__12824 = cljs.core.first(seq__12819__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12824,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12824,1,null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__12833 = cljs.core.next(seq__12819__$1);
var G__12834 = null;
var G__12835 = 0;
var G__12836 = 0;
seq__12819 = G__12833;
chunk__12820 = G__12834;
count__12821 = G__12835;
i__12822 = G__12836;
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
return this$.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
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
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:elem",cljs.core.vals(this$.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
return cljs.core.add_watch(self__.notif,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,p__12837){
var vec__12838 = p__12837;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12838,0,null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12838,1,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12838,2,null);
return (func.cljs$core$IFn$_invoke$arity$3 ? func.cljs$core$IFn$_invoke$arity$3(event,el,v) : func.call(null,event,el,v));
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
var sa = crate.binding.subatom(bc.atm,path);
var elem = crate.binding.opt(bc,"\uFDD0:as").call(null,sa);
bc.stuff = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bc.stuff,key,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:elem",elem,"\uFDD0:subatom",sa], true));
return crate.binding.notify(bc.notif,null,cljs.core.PersistentVector.fromArray(["\uFDD0:add",elem,cljs.core.deref(sa)], true));
});
crate.binding.bc_remove = (function bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bc.stuff,key);
return crate.binding.notify(bc.notif,null,cljs.core.PersistentVector.fromArray(["\uFDD0:remove",(new cljs.core.Keyword("\uFDD0:elem")).call(null,prev),null], true));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){
if(cljs.core.map_QMARK_(coll))
{return cljs.core.seq(coll);
} else
{if(cljs.core.set_QMARK_(coll))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),coll);
} else
{if("\uFDD0:else")
{return cljs.core.map_indexed(cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){
return cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(keyfn,crate.binding.__GT_indexed(coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__3943__auto__ = crate.binding.opt(bc,"\uFDD0:path");
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
__GT_path.cljs$lang$applyTo = (function (arglist__12839){
var bc = cljs.core.first(arglist__12839);
var segs = cljs.core.rest(arglist__12839);
return __GT_path__delegate(bc, segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(prev));
var nset = crate.binding.__GT_keyed(neue,crate.binding.opt(bc,"\uFDD0:keyfn"));
var added = cljs.core.into(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(nset,pset));
var removed = cljs.core.into(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pset,nset));
var seq__12848_12856 = cljs.core.seq(added);
var chunk__12849_12857 = null;
var count__12850_12858 = 0;
var i__12851_12859 = 0;
while(true){
if((i__12851_12859 < count__12850_12858))
{var a_12860 = chunk__12849_12857.cljs$core$IIndexed$_nth$arity$2(chunk__12849_12857,i__12851_12859);
crate.binding.bc_add(bc,a_12860,a_12860);
{
var G__12861 = seq__12848_12856;
var G__12862 = chunk__12849_12857;
var G__12863 = count__12850_12858;
var G__12864 = (i__12851_12859 + 1);
seq__12848_12856 = G__12861;
chunk__12849_12857 = G__12862;
count__12850_12858 = G__12863;
i__12851_12859 = G__12864;
continue;
}
} else
{var temp__4092__auto___12865 = cljs.core.seq(seq__12848_12856);
if(temp__4092__auto___12865)
{var seq__12848_12866__$1 = temp__4092__auto___12865;
if(cljs.core.chunked_seq_QMARK_(seq__12848_12866__$1))
{var c__9646__auto___12867 = cljs.core.chunk_first(seq__12848_12866__$1);
{
var G__12868 = cljs.core.chunk_rest(seq__12848_12866__$1);
var G__12869 = c__9646__auto___12867;
var G__12870 = cljs.core.count(c__9646__auto___12867);
var G__12871 = 0;
seq__12848_12856 = G__12868;
chunk__12849_12857 = G__12869;
count__12850_12858 = G__12870;
i__12851_12859 = G__12871;
continue;
}
} else
{var a_12872 = cljs.core.first(seq__12848_12866__$1);
crate.binding.bc_add(bc,a_12872,a_12872);
{
var G__12873 = cljs.core.next(seq__12848_12866__$1);
var G__12874 = null;
var G__12875 = 0;
var G__12876 = 0;
seq__12848_12856 = G__12873;
chunk__12849_12857 = G__12874;
count__12850_12858 = G__12875;
i__12851_12859 = G__12876;
continue;
}
}
} else
{}
}
break;
}
var seq__12852 = cljs.core.seq(removed);
var chunk__12853 = null;
var count__12854 = 0;
var i__12855 = 0;
while(true){
if((i__12855 < count__12854))
{var r = chunk__12853.cljs$core$IIndexed$_nth$arity$2(chunk__12853,i__12855);
crate.binding.bc_remove(bc,r);
{
var G__12877 = seq__12852;
var G__12878 = chunk__12853;
var G__12879 = count__12854;
var G__12880 = (i__12855 + 1);
seq__12852 = G__12877;
chunk__12853 = G__12878;
count__12854 = G__12879;
i__12855 = G__12880;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12852);
if(temp__4092__auto__)
{var seq__12852__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12852__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12852__$1);
{
var G__12881 = cljs.core.chunk_rest(seq__12852__$1);
var G__12882 = c__9646__auto__;
var G__12883 = cljs.core.count(c__9646__auto__);
var G__12884 = 0;
seq__12852 = G__12881;
chunk__12853 = G__12882;
count__12854 = G__12883;
i__12855 = G__12884;
continue;
}
} else
{var r = cljs.core.first(seq__12852__$1);
crate.binding.bc_remove(bc,r);
{
var G__12885 = cljs.core.next(seq__12852__$1);
var G__12886 = null;
var G__12887 = 0;
var G__12888 = 0;
seq__12852 = G__12885;
chunk__12853 = G__12886;
count__12854 = G__12887;
i__12855 = G__12888;
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
var bound_coll__delegate = function (atm,p__12889){
var vec__12892 = p__12889;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892,0,null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892,1,null);
var vec__12893 = (cljs.core.truth_(opts)?cljs.core.PersistentVector.fromArray([path,opts], true):cljs.core.PersistentVector.fromArray([null,path], true));
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12893,0,null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12893,1,null);
var atm__$1 = ((cljs.core.not(path__$1))?atm:crate.binding.subatom(atm,path__$1));
var opts__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,"\uFDD0:path",path__$1);
var opts__$3 = ((cljs.core.not((new cljs.core.Keyword("\uFDD0:keyfn")).call(null,opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,"\uFDD0:keyfn",cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,"\uFDD0:keyfn",cljs.core.comp.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:keyfn")).call(null,opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
}));
crate.binding.bc_compare(bc,cljs.core.deref(atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__12889 = null;
if (arguments.length > 1) {
  p__12889 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound_coll__delegate.call(this, atm, p__12889);
};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__12894){
var atm = cljs.core.first(arglist__12894);
var p__12889 = cljs.core.rest(arglist__12894);
return bound_coll__delegate(atm, p__12889);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__12895){
var vec__12897 = p__12895;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12897,0,null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,"\uFDD0:as",as);
var atm__$1 = ((cljs.core.not((new cljs.core.Keyword("\uFDD0:path")).call(null,opts__$1)))?atm:crate.binding.subatom(atm,(new cljs.core.Keyword("\uFDD0:path")).call(null,opts__$1)));
var opts__$2 = ((cljs.core.not((new cljs.core.Keyword("\uFDD0:keyfn")).call(null,opts__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,"\uFDD0:keyfn",cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,"\uFDD0:keyfn",cljs.core.comp.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:keyfn")).call(null,opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
}));
crate.binding.bc_compare(bc,cljs.core.deref(atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__12895 = null;
if (arguments.length > 2) {
  p__12895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return map_bound__delegate.call(this, as, atm, p__12895);
};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__12898){
var as = cljs.core.first(arglist__12898);
arglist__12898 = cljs.core.next(arglist__12898);
var atm = cljs.core.first(arglist__12898);
var p__12895 = cljs.core.rest(arglist__12898);
return map_bound__delegate(as, atm, p__12895);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__12900 = b;
if(G__12900)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__12900.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__12900.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(crate.binding.bindable,G__12900);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(crate.binding.bindable,G__12900);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__12902 = b;
if(G__12902)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__12902.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__12902.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(crate.binding.bindable_coll,G__12902);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(crate.binding.bindable_coll,G__12902);
}
});
crate.binding.value = (function value(b){
return crate.binding._value(b);
});
crate.binding.index = (function index(sub_atom){
return cljs.core.last(sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){
return crate.binding._on_change(b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__12903){
var vec__12905 = p__12903;
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12905,0,null);
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
var p__12903 = null;
if (arguments.length > 1) {
  p__12903 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound__delegate.call(this, atm, p__12903);
};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__12906){
var atm = cljs.core.first(arglist__12906);
var p__12903 = cljs.core.rest(arglist__12906);
return bound__delegate(atm, p__12903);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
