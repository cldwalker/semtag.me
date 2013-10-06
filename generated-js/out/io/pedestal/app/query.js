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
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.query.tuple_seq[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.query.tuple_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TupleSource.tuple-seq",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.query.logic_variable_QMARK_ = (function logic_variable_QMARK_(x){
var and__3941__auto__ = (x instanceof cljs.core.Symbol);
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,x)),"?");
} else
{return and__3941__auto__;
}
});
io.pedestal.app.query.datasource_QMARK_ = (function datasource_QMARK_(x){
var and__3941__auto__ = (x instanceof cljs.core.Symbol);
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,x)),"$");
} else
{return and__3941__auto__;
}
});
io.pedestal.app.query.unifier = (function unifier(bindings,clause,fact){
return cljs.core.reduce.call(null,(function (a,p__10339){
var vec__10340 = p__10339;
var c = cljs.core.nth.call(null,vec__10340,0,null);
var t = cljs.core.nth.call(null,vec__10340,1,null);
var c__$1 = (cljs.core.truth_((function (){var and__3941__auto__ = io.pedestal.app.query.logic_variable_QMARK_.call(null,c);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.contains_QMARK_.call(null,bindings,c);
} else
{return and__3941__auto__;
}
})())?cljs.core.get.call(null,bindings,c):c);
if(cljs.core.truth_(a))
{if(cljs.core.truth_(io.pedestal.app.query.logic_variable_QMARK_.call(null,c__$1)))
{return cljs.core.assoc.call(null,a,c__$1,t);
} else
{if(cljs.core._EQ_.call(null,c__$1,t))
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
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,clause,fact)));
});
io.pedestal.app.query.unifiers_for_clause = (function unifiers_for_clause(bindings,clause,facts){
return cljs.core.keep.call(null,cljs.core.partial.call(null,io.pedestal.app.query.unifier,bindings,clause),facts);
});
io.pedestal.app.query.unifiers = (function unifiers(bindings,clauses,facts){
return cljs.core.reduce.call(null,(function (a,x){
return cljs.core.conj.call(null,a,io.pedestal.app.query.unifiers_for_clause.call(null,bindings,x,facts));
}),cljs.core.PersistentVector.EMPTY,clauses);
});
io.pedestal.app.query.combine_unifiers = (function combine_unifiers(head,tail){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,head))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,tail))));
if(cljs.core.empty_QMARK_.call(null,ks))
{return tail;
} else
{var iter__9609__auto__ = (function iter__10347(s__10348){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10348__$1 = s__10348;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10348__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var x = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9605__auto__ = ((function (s__10348__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__10349(s__10350){
return (new cljs.core.LazySeq(null,false,((function (s__10348__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10350__$1 = s__10350;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10350__$1);
if(temp__4092__auto____$1)
{var s__10350__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10350__$2))
{var c__9607__auto__ = cljs.core.chunk_first.call(null,s__10350__$2);
var size__9608__auto__ = cljs.core.count.call(null,c__9607__auto__);
var b__10352 = cljs.core.chunk_buffer.call(null,size__9608__auto__);
if((function (){var i__10351 = 0;
while(true){
if((i__10351 < size__9608__auto__))
{var y = cljs.core._nth.call(null,c__9607__auto__,i__10351);
if(cljs.core._EQ_.call(null,cljs.core.select_keys.call(null,x,ks),cljs.core.select_keys.call(null,y,ks)))
{cljs.core.chunk_append.call(null,b__10352,cljs.core.merge.call(null,x,y));
{
var G__10353 = (i__10351 + 1);
i__10351 = G__10353;
continue;
}
} else
{{
var G__10354 = (i__10351 + 1);
i__10351 = G__10354;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10352),iter__10349.call(null,cljs.core.chunk_rest.call(null,s__10350__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10352),null);
}
} else
{var y = cljs.core.first.call(null,s__10350__$2);
if(cljs.core._EQ_.call(null,cljs.core.select_keys.call(null,x,ks),cljs.core.select_keys.call(null,y,ks)))
{return cljs.core.cons.call(null,cljs.core.merge.call(null,x,y),iter__10349.call(null,cljs.core.rest.call(null,s__10350__$2)));
} else
{{
var G__10355 = cljs.core.rest.call(null,s__10350__$2);
s__10350__$1 = G__10355;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__10348__$1,x,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10348__$1,x,xs__4579__auto__,temp__4092__auto__))
;
var fs__9606__auto__ = cljs.core.seq.call(null,iterys__9605__auto__.call(null,tail));
if(fs__9606__auto__)
{return cljs.core.concat.call(null,fs__9606__auto__,iter__10347.call(null,cljs.core.rest.call(null,s__10348__$1)));
} else
{{
var G__10356 = cljs.core.rest.call(null,s__10348__$1);
s__10348__$1 = G__10356;
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
return iter__9609__auto__.call(null,head);
}
});
io.pedestal.app.query.fold = (function fold(unifiers){
while(true){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.empty_QMARK_,unifiers)))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true);
} else
{if((cljs.core.count.call(null,unifiers) < 1))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true);
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,unifiers),1))
{return unifiers;
} else
{if("\uFDD0:else")
{var head = cljs.core.first.call(null,unifiers);
var tail = cljs.core.rest.call(null,unifiers);
{
var G__10357 = cljs.core.reduce.call(null,((function (unifiers){
return (function (a,b){
return cljs.core.conj.call(null,a,io.pedestal.app.query.combine_unifiers.call(null,head,b));
});})(unifiers))
,cljs.core.PersistentVector.EMPTY,tail);
unifiers = G__10357;
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
if(cljs.core.vector_QMARK_.call(null,data))
{return data;
} else
{if((function (){var G__10359 = data;
if(G__10359)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__10359.io$pedestal$app$query$TupleSource$;
}
})()))
{return true;
} else
{if((!G__10359.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,io.pedestal.app.query.TupleSource,G__10359);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,io.pedestal.app.query.TupleSource,G__10359);
}
})())
{return io.pedestal.app.query.tuple_seq.call(null,data);
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
var unifiers = cljs.core.reduce.call(null,(function (a,k){
return cljs.core.concat.call(null,a,io.pedestal.app.query.unifiers.call(null,bindings,cljs.core.get.call(null,clauses,k),io.pedestal.app.query.__GT_tuples.call(null,cljs.core.get.call(null,facts,k))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,clauses));
return cljs.core.first.call(null,io.pedestal.app.query.fold.call(null,unifiers));
});
io.pedestal.app.query.parse_query = (function parse_query(query){
return cljs.core.reduce.call(null,(function (a,x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:in",null,"\uFDD0:where",null,"\uFDD0:find",null], true),x))
{return cljs.core.assoc.call(null,a,"\uFDD0:on",x);
} else
{if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:on")).call(null,a),"\uFDD0:find"))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0:find"], true),cljs.core.conj,x);
} else
{if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:on")).call(null,a),"\uFDD0:in"))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Symbol(null,"$","$",-1640531491,null)))
{return a;
} else
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0:in"], true),cljs.core.conj,x);
}
} else
{if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:on")).call(null,a),"\uFDD0:where"))
{if(cljs.core.truth_(io.pedestal.app.query.datasource_QMARK_.call(null,cljs.core.first.call(null,x))))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0:clauses",cljs.core.first.call(null,x)], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec.call(null,cljs.core.rest.call(null,x)));
} else
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0:clauses",new cljs.core.Symbol(null,"$","$",-1640531491,null)], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),x);
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
var map__10362 = io.pedestal.app.query.parse_query.call(null,query);
var map__10362__$1 = ((cljs.core.seq_QMARK_.call(null,map__10362))?cljs.core.apply.call(null,cljs.core.hash_map,map__10362):map__10362);
var in$ = cljs.core.get.call(null,map__10362__$1,"\uFDD0:in");
var find = cljs.core.get.call(null,map__10362__$1,"\uFDD0:find");
var clauses = cljs.core.get.call(null,map__10362__$1,"\uFDD0:clauses");
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sources),cljs.core.count.call(null,in$)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Datasource count does not match named input count."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"sources","sources",632558961,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"in","in",-1640528162,null)))))].join('')));
}
var source_map = cljs.core.zipmap.call(null,in$,sources);
var parameters = cljs.core.remove.call(null,io.pedestal.app.query.datasource_QMARK_,cljs.core.keys.call(null,source_map));
var data_sources = cljs.core.filter.call(null,io.pedestal.app.query.datasource_QMARK_,cljs.core.keys.call(null,source_map));
var results = io.pedestal.app.query.produce.call(null,cljs.core.select_keys.call(null,source_map,parameters),clauses,source_map);
return cljs.core.reduce.call(null,(function (a,b){
return cljs.core.conj.call(null,a,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__10360_SHARP_){
return cljs.core.get.call(null,b,p1__10360_SHARP_);
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
q.cljs$lang$applyTo = (function (arglist__10363){
var query = cljs.core.first(arglist__10363);
var sources = cljs.core.rest(arglist__10363);
return q__delegate(query, sources);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
