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
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var seq__156477 = cljs.core.seq(self__.watches);
var chunk__156478 = null;
var count__156479 = 0;
var i__156480 = 0;
while(true){
if((i__156480 < count__156479))
{var vec__156481 = chunk__156478.cljs$core$IIndexed$_nth$arity$2(chunk__156478,i__156480);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156481,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156481,1,null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__156483 = seq__156477;
var G__156484 = chunk__156478;
var G__156485 = count__156479;
var G__156486 = (i__156480 + 1);
seq__156477 = G__156483;
chunk__156478 = G__156484;
count__156479 = G__156485;
i__156480 = G__156486;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__156477);
if(temp__4092__auto__)
{var seq__156477__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__156477__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__156477__$1);
{
var G__156487 = cljs.core.chunk_rest(seq__156477__$1);
var G__156488 = c__9926__auto__;
var G__156489 = cljs.core.count(c__9926__auto__);
var G__156490 = 0;
seq__156477 = G__156487;
chunk__156478 = G__156488;
count__156479 = G__156489;
i__156480 = G__156490;
continue;
}
} else
{var vec__156482 = cljs.core.first(seq__156477__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156482,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156482,1,null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__156491 = cljs.core.next(seq__156477__$1);
var G__156492 = null;
var G__156493 = 0;
var G__156494 = 0;
seq__156477 = G__156491;
chunk__156478 = G__156492;
count__156479 = G__156493;
i__156480 = G__156494;
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
var vec__156496 = (((atm instanceof crate.binding.SubAtom))?cljs.core.PersistentVector.fromArray([atm.atm,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(atm.path,path__$1)], true):cljs.core.PersistentVector.fromArray([atm,path__$1], true));
var atm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156496,0,null);
var path__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156496,1,null);
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
var G__156497__delegate = function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_(sa,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.deref(sa),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__156497 = function (sa,f,x,y,z,var_args){
var more = null;
if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__156497__delegate.call(this, sa, f, x, y, z, more);
};
G__156497.cljs$lang$maxFixedArity = 5;
G__156497.cljs$lang$applyTo = (function (arglist__156498){
var sa = cljs.core.first(arglist__156498);
arglist__156498 = cljs.core.next(arglist__156498);
var f = cljs.core.first(arglist__156498);
arglist__156498 = cljs.core.next(arglist__156498);
var x = cljs.core.first(arglist__156498);
arglist__156498 = cljs.core.next(arglist__156498);
var y = cljs.core.first(arglist__156498);
arglist__156498 = cljs.core.next(arglist__156498);
var z = cljs.core.first(arglist__156498);
var more = cljs.core.rest(arglist__156498);
return G__156497__delegate(sa, f, x, y, z, more);
});
G__156497.cljs$core$IFn$_invoke$arity$variadic = G__156497__delegate;
return G__156497;
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
{var x__9795__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (crate.binding._value[goog.typeOf(x__9795__auto__)]);
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
{var x__9795__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (crate.binding._on_change[goog.typeOf(x__9795__auto__)]);
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
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"crate.binding/atom-binding");
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
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var seq__156499 = cljs.core.seq(self__.watches);
var chunk__156500 = null;
var count__156501 = 0;
var i__156502 = 0;
while(true){
if((i__156502 < count__156501))
{var vec__156503 = chunk__156500.cljs$core$IIndexed$_nth$arity$2(chunk__156500,i__156502);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156503,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156503,1,null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__156505 = seq__156499;
var G__156506 = chunk__156500;
var G__156507 = count__156501;
var G__156508 = (i__156502 + 1);
seq__156499 = G__156505;
chunk__156500 = G__156506;
count__156501 = G__156507;
i__156502 = G__156508;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__156499);
if(temp__4092__auto__)
{var seq__156499__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__156499__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__156499__$1);
{
var G__156509 = cljs.core.chunk_rest(seq__156499__$1);
var G__156510 = c__9926__auto__;
var G__156511 = cljs.core.count(c__9926__auto__);
var G__156512 = 0;
seq__156499 = G__156509;
chunk__156500 = G__156510;
count__156501 = G__156511;
i__156502 = G__156512;
continue;
}
} else
{var vec__156504 = cljs.core.first(seq__156499__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156504,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156504,1,null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__156513 = cljs.core.next(seq__156499__$1);
var G__156514 = null;
var G__156515 = 0;
var G__156516 = 0;
seq__156499 = G__156513;
chunk__156500 = G__156514;
count__156501 = G__156515;
i__156502 = G__156516;
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
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:elem",cljs.core.vals(this$.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
return cljs.core.add_watch(self__.notif,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,p__156517){
var vec__156518 = p__156517;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156518,0,null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156518,1,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156518,2,null);
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
__GT_path.cljs$lang$applyTo = (function (arglist__156519){
var bc = cljs.core.first(arglist__156519);
var segs = cljs.core.rest(arglist__156519);
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
var seq__156528_156536 = cljs.core.seq(added);
var chunk__156529_156537 = null;
var count__156530_156538 = 0;
var i__156531_156539 = 0;
while(true){
if((i__156531_156539 < count__156530_156538))
{var a_156540 = chunk__156529_156537.cljs$core$IIndexed$_nth$arity$2(chunk__156529_156537,i__156531_156539);
crate.binding.bc_add(bc,a_156540,a_156540);
{
var G__156541 = seq__156528_156536;
var G__156542 = chunk__156529_156537;
var G__156543 = count__156530_156538;
var G__156544 = (i__156531_156539 + 1);
seq__156528_156536 = G__156541;
chunk__156529_156537 = G__156542;
count__156530_156538 = G__156543;
i__156531_156539 = G__156544;
continue;
}
} else
{var temp__4092__auto___156545 = cljs.core.seq(seq__156528_156536);
if(temp__4092__auto___156545)
{var seq__156528_156546__$1 = temp__4092__auto___156545;
if(cljs.core.chunked_seq_QMARK_(seq__156528_156546__$1))
{var c__9926__auto___156547 = cljs.core.chunk_first(seq__156528_156546__$1);
{
var G__156548 = cljs.core.chunk_rest(seq__156528_156546__$1);
var G__156549 = c__9926__auto___156547;
var G__156550 = cljs.core.count(c__9926__auto___156547);
var G__156551 = 0;
seq__156528_156536 = G__156548;
chunk__156529_156537 = G__156549;
count__156530_156538 = G__156550;
i__156531_156539 = G__156551;
continue;
}
} else
{var a_156552 = cljs.core.first(seq__156528_156546__$1);
crate.binding.bc_add(bc,a_156552,a_156552);
{
var G__156553 = cljs.core.next(seq__156528_156546__$1);
var G__156554 = null;
var G__156555 = 0;
var G__156556 = 0;
seq__156528_156536 = G__156553;
chunk__156529_156537 = G__156554;
count__156530_156538 = G__156555;
i__156531_156539 = G__156556;
continue;
}
}
} else
{}
}
break;
}
var seq__156532 = cljs.core.seq(removed);
var chunk__156533 = null;
var count__156534 = 0;
var i__156535 = 0;
while(true){
if((i__156535 < count__156534))
{var r = chunk__156533.cljs$core$IIndexed$_nth$arity$2(chunk__156533,i__156535);
crate.binding.bc_remove(bc,r);
{
var G__156557 = seq__156532;
var G__156558 = chunk__156533;
var G__156559 = count__156534;
var G__156560 = (i__156535 + 1);
seq__156532 = G__156557;
chunk__156533 = G__156558;
count__156534 = G__156559;
i__156535 = G__156560;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__156532);
if(temp__4092__auto__)
{var seq__156532__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__156532__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__156532__$1);
{
var G__156561 = cljs.core.chunk_rest(seq__156532__$1);
var G__156562 = c__9926__auto__;
var G__156563 = cljs.core.count(c__9926__auto__);
var G__156564 = 0;
seq__156532 = G__156561;
chunk__156533 = G__156562;
count__156534 = G__156563;
i__156535 = G__156564;
continue;
}
} else
{var r = cljs.core.first(seq__156532__$1);
crate.binding.bc_remove(bc,r);
{
var G__156565 = cljs.core.next(seq__156532__$1);
var G__156566 = null;
var G__156567 = 0;
var G__156568 = 0;
seq__156532 = G__156565;
chunk__156533 = G__156566;
count__156534 = G__156567;
i__156535 = G__156568;
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
var bound_coll__delegate = function (atm,p__156569){
var vec__156572 = p__156569;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156572,0,null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156572,1,null);
var vec__156573 = (cljs.core.truth_(opts)?cljs.core.PersistentVector.fromArray([path,opts], true):cljs.core.PersistentVector.fromArray([null,path], true));
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156573,0,null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156573,1,null);
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
var p__156569 = null;
if (arguments.length > 1) {
  p__156569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound_coll__delegate.call(this, atm, p__156569);
};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__156574){
var atm = cljs.core.first(arglist__156574);
var p__156569 = cljs.core.rest(arglist__156574);
return bound_coll__delegate(atm, p__156569);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__156575){
var vec__156577 = p__156575;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156577,0,null);
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
var p__156575 = null;
if (arguments.length > 2) {
  p__156575 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return map_bound__delegate.call(this, as, atm, p__156575);
};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__156578){
var as = cljs.core.first(arglist__156578);
arglist__156578 = cljs.core.next(arglist__156578);
var atm = cljs.core.first(arglist__156578);
var p__156575 = cljs.core.rest(arglist__156578);
return map_bound__delegate(as, atm, p__156575);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__156580 = b;
if(G__156580)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__156580.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__156580.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(crate.binding.bindable,G__156580);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(crate.binding.bindable,G__156580);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__156582 = b;
if(G__156582)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__156582.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__156582.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(crate.binding.bindable_coll,G__156582);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(crate.binding.bindable_coll,G__156582);
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
var bound__delegate = function (atm,p__156583){
var vec__156585 = p__156583;
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156585,0,null);
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
var p__156583 = null;
if (arguments.length > 1) {
  p__156583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound__delegate.call(this, atm, p__156583);
};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__156586){
var atm = cljs.core.first(arglist__156586);
var p__156583 = cljs.core.rest(arglist__156586);
return bound__delegate(atm, p__156583);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
