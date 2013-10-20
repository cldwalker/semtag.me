goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max,cljs.core.remove((function (p1__156224_SHARP_){
return (max === p1__156224_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__156225__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__156225 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156225__delegate.call(this, s1, s2, sets);
};
G__156225.cljs$lang$maxFixedArity = 2;
G__156225.cljs$lang$applyTo = (function (arglist__156226){
var s1 = cljs.core.first(arglist__156226);
arglist__156226 = cljs.core.next(arglist__156226);
var s2 = cljs.core.first(arglist__156226);
var sets = cljs.core.rest(arglist__156226);
return G__156225__delegate(s1, s2, sets);
});
G__156225.cljs$core$IFn$_invoke$arity$variadic = G__156225__delegate;
return G__156225;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
return union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$core$IFn$_invoke$arity$0 = union__0;
union.cljs$core$IFn$_invoke$arity$1 = union__1;
union.cljs$core$IFn$_invoke$arity$2 = union__2;
union.cljs$core$IFn$_invoke$arity$variadic = union__3.cljs$core$IFn$_invoke$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1)))
{{
var G__156228 = s2;
var G__156229 = s1;
s1 = G__156228;
s2 = G__156229;
continue;
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item))
{return result;
} else
{return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__156230__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key((function (p1__156227_SHARP_){
return (- cljs.core.count(p1__156227_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__156230 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156230__delegate.call(this, s1, s2, sets);
};
G__156230.cljs$lang$maxFixedArity = 2;
G__156230.cljs$lang$applyTo = (function (arglist__156231){
var s1 = cljs.core.first(arglist__156231);
arglist__156231 = cljs.core.next(arglist__156231);
var s2 = cljs.core.first(arglist__156231);
var sets = cljs.core.rest(arglist__156231);
return G__156230__delegate(s1, s2, sets);
});
G__156230.cljs$core$IFn$_invoke$arity$variadic = G__156230__delegate;
return G__156230;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
return intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$core$IFn$_invoke$arity$1 = intersection__1;
intersection.cljs$core$IFn$_invoke$arity$2 = intersection__2;
intersection.cljs$core$IFn$_invoke$arity$variadic = intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item))
{return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__156232__delegate = function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
};
var G__156232 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156232__delegate.call(this, s1, s2, sets);
};
G__156232.cljs$lang$maxFixedArity = 2;
G__156232.cljs$lang$applyTo = (function (arglist__156233){
var s1 = cljs.core.first(arglist__156233);
arglist__156233 = cljs.core.next(arglist__156233);
var s2 = cljs.core.first(arglist__156233);
var sets = cljs.core.rest(arglist__156233);
return G__156232__delegate(s1, s2, sets);
});
G__156232.cljs$core$IFn$_invoke$arity$variadic = G__156232__delegate;
return G__156232;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
return difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$core$IFn$_invoke$arity$1 = difference__1;
difference.cljs$core$IFn$_invoke$arity$2 = difference__2;
difference.cljs$core$IFn$_invoke$arity$variadic = difference__3.cljs$core$IFn$_invoke$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k))))
{return s;
} else
{return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__156234_SHARP_){
return cljs.core.select_keys(p1__156234_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__156237){
var vec__156238 = p__156237;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156238,0,null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156238,1,null);
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$);
if(and__3941__auto__)
{return cljs.core.contains_QMARK_(m,old);
} else
{return and__3941__auto__;
}
})())
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,old)),old);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__156239_SHARP_){
return clojure.set.rename_keys(p1__156239_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
var ik = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__156242){
var vec__156243 = p__156242;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156243,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156243,1,null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if((function (){var and__3941__auto__ = cljs.core.seq(xrel);
if(and__3941__auto__)
{return cljs.core.seq(yrel);
} else
{return and__3941__auto__;
}
})())
{var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
var vec__156250 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel], true):cljs.core.PersistentVector.fromArray([yrel,xrel], true));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156250,0,null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156250,1,null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var found = (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys(x,ks)) : idx.call(null,cljs.core.select_keys(x,ks)));
if(cljs.core.truth_(found))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__156244_SHARP_,p2__156245_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__156244_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__156245_SHARP_,x], 0)));
}),ret,found);
} else
{return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,s);
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){
var vec__156251 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert(km)], true):cljs.core.PersistentVector.fromArray([yrel,xrel,km], true));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156251,0,null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156251,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156251,2,null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var found = (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k)) : idx.call(null,clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k)));
if(cljs.core.truth_(found))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__156246_SHARP_,p2__156247_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__156246_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__156247_SHARP_,x], 0)));
}),ret,found);
} else
{return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,s);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$2 = join__2;
join.cljs$core$IFn$_invoke$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__3941__auto__ = (cljs.core.count(set1) <= cljs.core.count(set2));
if(and__3941__auto__)
{return cljs.core.every_QMARK_((function (p1__156252_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__156252_SHARP_);
}),set1);
} else
{return and__3941__auto__;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3941__auto__ = (cljs.core.count(set1) >= cljs.core.count(set2));
if(and__3941__auto__)
{return cljs.core.every_QMARK_((function (p1__156253_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__156253_SHARP_);
}),set2);
} else
{return and__3941__auto__;
}
});
