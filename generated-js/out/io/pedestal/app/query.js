goog.provide('io.pedestal.app.query');
goog.require('cljs.core');
goog.require('clojure.set');
io.pedestal.app.query.TupleSource = {};
io.pedestal.app.query.tuple_seq = (function tuple_seq(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$query$TupleSource$tuple_seq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$query$TupleSource$tuple_seq$arity$1(this$);
} else
{var x__9795__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.query.tuple_seq[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.query.tuple_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("TupleSource.tuple-seq",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.query.logic_variable_QMARK_ = (function logic_variable_QMARK_(x){
var and__3941__auto__ = (x instanceof cljs.core.Symbol);
if(and__3941__auto__)
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(x)),"?");
} else
{return and__3941__auto__;
}
});
io.pedestal.app.query.datasource_QMARK_ = (function datasource_QMARK_(x){
var and__3941__auto__ = (x instanceof cljs.core.Symbol);
if(and__3941__auto__)
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(x)),"$");
} else
{return and__3941__auto__;
}
});
io.pedestal.app.query.unifier = (function unifier(bindings,clause,fact){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__15055){
var vec__15056 = p__15055;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15056,0,null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15056,1,null);
var c__$1 = (cljs.core.truth_((function (){var and__3941__auto__ = io.pedestal.app.query.logic_variable_QMARK_(c);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.contains_QMARK_(bindings,c);
} else
{return and__3941__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(bindings,c):c);
if(cljs.core.truth_(a))
{if(cljs.core.truth_(io.pedestal.app.query.logic_variable_QMARK_(c__$1)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,c__$1,t);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c__$1,t))
{return a;
} else
{if("\uFDD0:else")
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(clause,fact)));
});
io.pedestal.app.query.unifiers_for_clause = (function unifiers_for_clause(bindings,clause,facts){
return cljs.core.keep(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.query.unifier,bindings,clause),facts);
});
io.pedestal.app.query.unifiers = (function unifiers(bindings,clauses,facts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,io.pedestal.app.query.unifiers_for_clause(bindings,x,facts));
}),cljs.core.PersistentVector.EMPTY,clauses);
});
io.pedestal.app.query.combine_unifiers = (function combine_unifiers(head,tail){
var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(head))),cljs.core.set(cljs.core.keys(cljs.core.first(tail))));
if(cljs.core.empty_QMARK_(ks))
{return tail;
} else
{var iter__9895__auto__ = (function iter__15063(s__15064){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15064__$1 = s__15064;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__15064__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var x = cljs.core.first(xs__4579__auto__);
var iterys__9891__auto__ = ((function (s__15064__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__15065(s__15066){
return (new cljs.core.LazySeq(null,false,((function (s__15064__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__15066__$1 = s__15066;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__15066__$1);
if(temp__4092__auto____$1)
{var s__15066__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15066__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__15066__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__15068 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__15067 = 0;
while(true){
if((i__15067 < size__9894__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__15067);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(x,ks),cljs.core.select_keys(y,ks)))
{cljs.core.chunk_append(b__15068,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x,y], 0)));
{
var G__15069 = (i__15067 + 1);
i__15067 = G__15069;
continue;
}
} else
{{
var G__15070 = (i__15067 + 1);
i__15067 = G__15070;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__15068),iter__15065(cljs.core.chunk_rest(s__15066__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__15068),null);
}
} else
{var y = cljs.core.first(s__15066__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(x,ks),cljs.core.select_keys(y,ks)))
{return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x,y], 0)),iter__15065(cljs.core.rest(s__15066__$2)));
} else
{{
var G__15071 = cljs.core.rest(s__15066__$2);
s__15066__$1 = G__15071;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__15064__$1,x,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__15064__$1,x,xs__4579__auto__,temp__4092__auto__))
;
var fs__9892__auto__ = cljs.core.seq(iterys__9891__auto__(tail));
if(fs__9892__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9892__auto__,iter__15063(cljs.core.rest(s__15064__$1)));
} else
{{
var G__15072 = cljs.core.rest(s__15064__$1);
s__15064__$1 = G__15072;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9895__auto__(head);
}
});
io.pedestal.app.query.fold = (function fold(unifiers){
while(true){
if(cljs.core.truth_(cljs.core.some(cljs.core.empty_QMARK_,unifiers)))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true);
} else
{if((cljs.core.count(unifiers) < 1))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(unifiers),1))
{return unifiers;
} else
{if("\uFDD0:else")
{var head = cljs.core.first(unifiers);
var tail = cljs.core.rest(unifiers);
{
var G__15073 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (unifiers){
return (function (a,b){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,io.pedestal.app.query.combine_unifiers(head,b));
});})(unifiers))
,cljs.core.PersistentVector.EMPTY,tail);
unifiers = G__15073;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
io.pedestal.app.query.__GT_tuples = (function __GT_tuples(data){
if(cljs.core.vector_QMARK_(data))
{return data;
} else
{if((function (){var G__15075 = data;
if(G__15075)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__15075.io$pedestal$app$query$TupleSource$;
}
})()))
{return true;
} else
{if((!G__15075.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(io.pedestal.app.query.TupleSource,G__15075);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(io.pedestal.app.query.TupleSource,G__15075);
}
})())
{return io.pedestal.app.query.tuple_seq(data);
} else
{if("\uFDD0:else")
{return cljs.core.PersistentVector.EMPTY;
} else
{return null;
}
}
}
});
io.pedestal.app.query.produce = (function produce(bindings,clauses,facts){
var unifiers = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,k){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,io.pedestal.app.query.unifiers(bindings,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clauses,k),io.pedestal.app.query.__GT_tuples(cljs.core.get.cljs$core$IFn$_invoke$arity$2(facts,k))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.keys(clauses));
return cljs.core.first(io.pedestal.app.query.fold(unifiers));
});
io.pedestal.app.query.parse_query = (function parse_query(query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,x){
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.fromArray(["\uFDD0:in",null,"\uFDD0:where",null,"\uFDD0:find",null], true),x))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,"\uFDD0:on",x);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:on")).call(null,a),"\uFDD0:find"))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.PersistentVector.fromArray(["\uFDD0:find"], true),cljs.core.conj,x);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:on")).call(null,a),"\uFDD0:in"))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Symbol(null,"$","$",-1640531491,null)))
{return a;
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.PersistentVector.fromArray(["\uFDD0:in"], true),cljs.core.conj,x);
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:on")).call(null,a),"\uFDD0:where"))
{if(cljs.core.truth_(io.pedestal.app.query.datasource_QMARK_(cljs.core.first(x))))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.PersistentVector.fromArray(["\uFDD0:clauses",cljs.core.first(x)], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec(cljs.core.rest(x)));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.PersistentVector.fromArray(["\uFDD0:clauses",new cljs.core.Symbol(null,"$","$",-1640531491,null)], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),x);
}
} else
{if("\uFDD0:else")
{return a;
} else
{return null;
}
}
}
}
}
}),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:find",cljs.core.PersistentVector.EMPTY,"\uFDD0:in",cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"$","$",-1640531491,null)], true),"\uFDD0:clauses",cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"$","$",-1640531491,null),cljs.core.PersistentVector.EMPTY], true)], true),query);
});
/**
* @param {...*} var_args
*/
io.pedestal.app.query.q = (function() { 
var q__delegate = function (query,sources){
var map__15078 = io.pedestal.app.query.parse_query(query);
var map__15078__$1 = ((cljs.core.seq_QMARK_(map__15078))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15078):map__15078);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15078__$1,"\uFDD0:in");
var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15078__$1,"\uFDD0:find");
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15078__$1,"\uFDD0:clauses");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sources),cljs.core.count(in$)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Datasource count does not match named input count."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"sources","sources",632558961,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"in","in",-1640528162,null)))], 0)))].join('')));
}
var source_map = cljs.core.zipmap(in$,sources);
var parameters = cljs.core.remove(io.pedestal.app.query.datasource_QMARK_,cljs.core.keys(source_map));
var data_sources = cljs.core.filter(io.pedestal.app.query.datasource_QMARK_,cljs.core.keys(source_map));
var results = io.pedestal.app.query.produce(cljs.core.select_keys(source_map,parameters),clauses,source_map);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15076_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,p1__15076_SHARP_);
}),find)));
}),cljs.core.PersistentVector.EMPTY,results);
};
var q = function (query,var_args){
var sources = null;
if (arguments.length > 1) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return q__delegate.call(this, query, sources);
};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__15079){
var query = cljs.core.first(arglist__15079);
var sources = cljs.core.rest(arglist__15079);
return q__delegate(query, sources);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
