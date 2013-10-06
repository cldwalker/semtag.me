goog.provide('io.pedestal.app.dataflow');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.data.tracking_map');
/**
* Return true if the two elements match.
*/
io.pedestal.app.dataflow.matching_path_element_QMARK_ = (function matching_path_element_QMARK_(a,b){
var or__3943__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,"\uFDD0:*");
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,"\uFDD0:*");
}
}
});
/**
* Return true if the two paths match.
*/
io.pedestal.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path_a,path_b){
var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path_a),cljs.core.count(path_b));
if(and__3941__auto__)
{return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return io.pedestal.app.dataflow.matching_path_element_QMARK_(a,b);
}),path_a,path_b));
} else
{return and__3941__auto__;
}
});
/**
* Return true if one path could be the parent of the other.
*/
io.pedestal.app.dataflow.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){
var vec__10078 = (((cljs.core.count(path_a) < cljs.core.count(path_b)))?cljs.core.PersistentVector.fromArray([path_a,path_b], true):cljs.core.PersistentVector.fromArray([path_b,path_a], true));
var small = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,0,null);
var large = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,1,null);
return io.pedestal.app.dataflow.matching_path_QMARK_(small,cljs.core.take(cljs.core.count(small),large));
});
/**
* Returns a sequence of [path value] tuples
*/
io.pedestal.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){
return get_path.cljs$core$IFn$_invoke$arity$3(data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__10080){
var vec__10082 = p__10080;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10082,0,null);
var xs = cljs.core.nthnext(vec__10082,1);
if(cljs.core.truth_((function (){var and__3941__auto__ = x;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(data,"\uFDD0:io.pedestal.app.dataflow/nokey");
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"\uFDD0:*"))
{return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__10079_SHARP_){
return get_path.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__10079_SHARP_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(context,p1__10079_SHARP_),xs);
}),cljs.core.keys(data));
} else
{return get_path.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,x,"\uFDD0:io.pedestal.app.dataflow/nokey"),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(context,x),xs);
}
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([context,data], true)], true);
}
});
get_path = function(data,context,p__10080){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__10080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_path.cljs$core$IFn$_invoke$arity$2 = get_path__2;
get_path.cljs$core$IFn$_invoke$arity$3 = get_path__3;
return get_path;
})()
;
var rekey = (function rekey(k,path,arg_names){
if(cljs.core.truth_(arg_names))
{var new_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arg_names,path);
if(cljs.core.keyword_QMARK_(new_key))
{return new_key;
} else
{return (new_key.cljs$core$IFn$_invoke$arity$1 ? new_key.cljs$core$IFn$_invoke$arity$1(k) : new_key.call(null,k));
}
} else
{return k;
}
});
var value_types = (function value_types(arg_names){
if(cljs.core.truth_(arg_names))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10085){
var vec__10086 = p__10085;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10086,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10086,1,null);
if(cljs.core.contains_QMARK_(cljs.core.set(k),"\uFDD0:*"))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,v,"\uFDD0:seq");
} else
{if(cljs.core.contains_QMARK_(a,v))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,v,"\uFDD0:seq");
} else
{if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,v) == null))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,v,"\uFDD0:single");
} else
{if("\uFDD0:else")
{return a;
} else
{return null;
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,arg_names);
} else
{return cljs.core.constantly("\uFDD0:single");
}
});
io.pedestal.app.dataflow.input_map = (function() {
var input_map = null;
var input_map__1 = (function (inputs){
return input_map.cljs$core$IFn$_invoke$arity$2(inputs,null);
});
var input_map__2 = (function (p__10087,arg_names){
var map__10105 = p__10087;
var map__10105__$1 = ((cljs.core.seq_QMARK_(map__10105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10105):map__10105);
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10105__$1,"\uFDD0:input-paths");
var new_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10105__$1,"\uFDD0:new-model");
var v_type = (value_types.cljs$core$IFn$_invoke$arity$1 ? value_types.cljs$core$IFn$_invoke$arity$1(arg_names) : value_types.call(null,arg_names));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10106){
var vec__10107 = p__10106;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10107,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10107,1,null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v_type.cljs$core$IFn$_invoke$arity$1 ? v_type.cljs$core$IFn$_invoke$arity$1(k) : v_type.call(null,k)),"\uFDD0:seq"))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.PersistentVector.fromArray([k], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9615__auto__ = (function iter__10108(s__10109){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10109__$1 = s__10109;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__10109__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first(xs__4579__auto__);
var iterys__9611__auto__ = ((function (s__10109__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10110(s__10111){
return (new cljs.core.LazySeq(null,false,((function (s__10109__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10111__$1 = s__10111;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__10111__$1);
if(temp__4092__auto____$1)
{var s__10111__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10111__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__10111__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__10113 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__10112 = 0;
while(true){
if((i__10112 < size__9614__auto__))
{var vec__10120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__10112);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10120,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10120,1,null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{cljs.core.chunk_append(b__10113,cljs.core.PersistentVector.fromArray([(rekey.cljs$core$IFn$_invoke$arity$3 ? rekey.cljs$core$IFn$_invoke$arity$3(k,path,arg_names) : rekey.call(null,k,path,arg_names)),v], true));
{
var G__10122 = (i__10112 + 1);
i__10112 = G__10122;
continue;
}
} else
{{
var G__10123 = (i__10112 + 1);
i__10112 = G__10123;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10113),iter__10110(cljs.core.chunk_rest(s__10111__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10113),null);
}
} else
{var vec__10121 = cljs.core.first(s__10111__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10121,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10121,1,null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([(rekey.cljs$core$IFn$_invoke$arity$3 ? rekey.cljs$core$IFn$_invoke$arity$3(k,path,arg_names) : rekey.call(null,k,path,arg_names)),v], true),iter__10110(cljs.core.rest(s__10111__$2)));
} else
{{
var G__10124 = cljs.core.rest(s__10111__$2);
s__10111__$1 = G__10124;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__10109__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10109__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9612__auto__ = cljs.core.seq(iterys__9611__auto__(io.pedestal.app.dataflow.get_path.cljs$core$IFn$_invoke$arity$2(new_model,path)));
if(fs__9612__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9612__auto__,iter__10108(cljs.core.rest(s__10109__$1)));
} else
{{
var G__10125 = cljs.core.rest(s__10109__$1);
s__10109__$1 = G__10125;
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
return iter__9615__auto__(input_paths);
})());
});
input_map = function(p__10087,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__10087);
case 2:
return input_map__2.call(this,p__10087,arg_names);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input_map.cljs$core$IFn$_invoke$arity$1 = input_map__1;
input_map.cljs$core$IFn$_invoke$arity$2 = input_map__2;
return input_map;
})()
;
io.pedestal.app.dataflow.input_vals = (function input_vals(inputs){
return cljs.core.vals(io.pedestal.app.dataflow.input_map.cljs$core$IFn$_invoke$arity$1(inputs));
});
io.pedestal.app.dataflow.single_val = (function single_val(inputs){
var m = io.pedestal.app.dataflow.input_map.cljs$core$IFn$_invoke$arity$1(inputs);
if((1 >= cljs.core.count(m)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("input is expected to have 0 or 1 values"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,">=",">=",-1640529544,null),1,cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))], 0)))].join('')));
}
return cljs.core.first(cljs.core.vals(m));
});
io.pedestal.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){
var vec__10141 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(model_key,change_key).call(null,inputs);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10141,0,null);
var change_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10141,1,null);
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9615__auto__ = (function iter__10142(s__10143){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10143__$1 = s__10143;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__10143__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first(xs__4579__auto__);
var iterys__9611__auto__ = ((function (s__10143__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10144(s__10145){
return (new cljs.core.LazySeq(null,false,((function (s__10143__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10145__$1 = s__10145;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__10145__$1);
if(temp__4092__auto____$1)
{var s__10145__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10145__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__10145__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__10147 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__10146 = 0;
while(true){
if((i__10146 < size__9614__auto__))
{var vec__10154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__10146);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154,1,null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{cljs.core.chunk_append(b__10147,cljs.core.PersistentVector.fromArray([k,v], true));
{
var G__10156 = (i__10146 + 1);
i__10146 = G__10156;
continue;
}
} else
{{
var G__10157 = (i__10146 + 1);
i__10146 = G__10157;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10147),iter__10144(cljs.core.chunk_rest(s__10145__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10147),null);
}
} else
{var vec__10155 = cljs.core.first(s__10145__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10155,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10155,1,null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([k,v], true),iter__10144(cljs.core.rest(s__10145__$2)));
} else
{{
var G__10158 = cljs.core.rest(s__10145__$2);
s__10145__$1 = G__10158;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__10143__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10143__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9612__auto__ = cljs.core.seq(iterys__9611__auto__(io.pedestal.app.dataflow.get_path.cljs$core$IFn$_invoke$arity$2(model,path)));
if(fs__9612__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9612__auto__,iter__10142(cljs.core.rest(s__10143__$1)));
} else
{{
var G__10159 = cljs.core.rest(s__10143__$1);
s__10143__$1 = G__10159;
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
return iter__9615__auto__(change_paths);
})());
});
io.pedestal.app.dataflow.updated_map = (function updated_map(inputs){
return io.pedestal.app.dataflow.change_map(inputs,"\uFDD0:new-model","\uFDD0:updated");
});
io.pedestal.app.dataflow.added_map = (function added_map(inputs){
return io.pedestal.app.dataflow.change_map(inputs,"\uFDD0:new-model","\uFDD0:added");
});
io.pedestal.app.dataflow.removed_map = (function removed_map(inputs){
return io.pedestal.app.dataflow.change_map(inputs,"\uFDD0:old-model","\uFDD0:removed");
});
io.pedestal.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){
var input_m = io.pedestal.app.dataflow.input_map.cljs$core$IFn$_invoke$arity$1(inputs);
var changed = cljs.core.keys((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inputs) : f.call(null,inputs)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10163){
var vec__10164 = p__10163;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10164,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10164,1,null);
if(cljs.core.truth_(cljs.core.some((function (p1__10160_SHARP_){
return io.pedestal.app.dataflow.descendent_QMARK_(k,p1__10160_SHARP_);
}),changed)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
} else
{return a;
}
}),cljs.core.PersistentArrayMap.EMPTY,input_m);
});
io.pedestal.app.dataflow.added_inputs = (function added_inputs(inputs){
return io.pedestal.app.dataflow.changed_inputs(inputs,io.pedestal.app.dataflow.added_map);
});
io.pedestal.app.dataflow.updated_inputs = (function updated_inputs(inputs){
return io.pedestal.app.dataflow.changed_inputs(inputs,io.pedestal.app.dataflow.updated_map);
});
io.pedestal.app.dataflow.old_and_new = (function old_and_new(inputs,path){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:old",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.into(cljs.core.PersistentVector.fromArray(["\uFDD0:old-model"], true),path)),"\uFDD0:new",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.into(cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path))], true);
});
var actual_input_paths = (function actual_input_paths(p__10166){
var map__10182 = p__10166;
var map__10182__$1 = ((cljs.core.seq_QMARK_(map__10182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10182):map__10182);
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10182__$1,"\uFDD0:input-paths");
var old_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10182__$1,"\uFDD0:old-model");
var iter__9615__auto__ = (function iter__10183(s__10184){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10184__$1 = s__10184;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__10184__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first(xs__4579__auto__);
var iterys__9611__auto__ = ((function (s__10184__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10185(s__10186){
return (new cljs.core.LazySeq(null,false,((function (s__10184__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10186__$1 = s__10186;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__10186__$1);
if(temp__4092__auto____$1)
{var s__10186__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10186__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__10186__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__10188 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__10187 = 0;
while(true){
if((i__10187 < size__9614__auto__))
{var vec__10195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__10187);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10195,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10195,1,null);
cljs.core.chunk_append(b__10188,k);
{
var G__10197 = (i__10187 + 1);
i__10187 = G__10197;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10188),iter__10185(cljs.core.chunk_rest(s__10186__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10188),null);
}
} else
{var vec__10196 = cljs.core.first(s__10186__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10196,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10196,1,null);
return cljs.core.cons(k,iter__10185(cljs.core.rest(s__10186__$2)));
}
} else
{return null;
}
break;
}
});})(s__10184__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10184__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9612__auto__ = cljs.core.seq(iterys__9611__auto__(io.pedestal.app.dataflow.get_path.cljs$core$IFn$_invoke$arity$2(old_model,path)));
if(fs__9612__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9612__auto__,iter__10183(cljs.core.rest(s__10184__$1)));
} else
{{
var G__10198 = cljs.core.rest(s__10184__$1);
s__10184__$1 = G__10198;
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
return iter__9615__auto__(input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,cp){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(a,path,cp) : f.call(null,a,path,cp));
}),acc,cljs.core.filter((function (p1__10165_SHARP_){
return io.pedestal.app.dataflow.descendent_QMARK_(path,p1__10165_SHARP_);
}),changed_paths));
}),cljs.core.PersistentArrayMap.EMPTY,input_paths);
});
io.pedestal.app.dataflow.removed_inputs = (function removed_inputs(inputs){
var paths = (actual_input_paths.cljs$core$IFn$_invoke$arity$1 ? actual_input_paths.cljs$core$IFn$_invoke$arity$1(inputs) : actual_input_paths.call(null,inputs));
return cljs.core.into((removed.cljs$core$IFn$_invoke$arity$3 ? removed.cljs$core$IFn$_invoke$arity$3(paths,cljs.core.keys(io.pedestal.app.dataflow.removed_map(inputs)),(function (m,path,changed_path){
if((cljs.core.count(changed_path) <= cljs.core.count(path)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,path,"\uFDD0:io.pedestal.app.dataflow/removed");
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path)));
}
})) : removed.call(null,paths,cljs.core.keys(io.pedestal.app.dataflow.removed_map(inputs)),(function (m,path,changed_path){
if((cljs.core.count(changed_path) <= cljs.core.count(path)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,path,"\uFDD0:io.pedestal.app.dataflow/removed");
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path)));
}
}))),(removed.cljs$core$IFn$_invoke$arity$3 ? removed.cljs$core$IFn$_invoke$arity$3(paths,cljs.core.keys(io.pedestal.app.dataflow.updated_map(inputs)),(function (m,path,changed_path){
if((cljs.core.count(changed_path) < cljs.core.count(path)))
{var new_m = (new cljs.core.Keyword("\uFDD0:new-model")).call(null,inputs);
var parent = cljs.core.butlast(path);
var k = cljs.core.last(path);
var parent_m = ((cljs.core.seq(parent))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_m,parent):new_m);
if(cljs.core.contains_QMARK_(parent_m,k))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,path,"\uFDD0:io.pedestal.app.dataflow/removed");
}
} else
{return m;
}
})) : removed.call(null,paths,cljs.core.keys(io.pedestal.app.dataflow.updated_map(inputs)),(function (m,path,changed_path){
if((cljs.core.count(changed_path) < cljs.core.count(path)))
{var new_m = (new cljs.core.Keyword("\uFDD0:new-model")).call(null,inputs);
var parent = cljs.core.butlast(path);
var k = cljs.core.last(path);
var parent_m = ((cljs.core.seq(parent))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_m,parent):new_m);
if(cljs.core.contains_QMARK_(parent_m,k))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,path,"\uFDD0:io.pedestal.app.dataflow/removed");
}
} else
{return m;
}
}))));
});
/**
* Perform a topological sort of the provided graph.
*/
io.pedestal.app.dataflow.topo_visit = (function topo_visit(graph,node){
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,node);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:visited")).call(null,n)))
{return graph;
} else
{var graph__$1 = cljs.core.assoc_in(graph,cljs.core.PersistentVector.fromArray([node,"\uFDD0:visited"], true),true);
var graph__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(topo_visit,graph__$1,(new cljs.core.Keyword("\uFDD0:deps")).call(null,n));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(graph__$2,"\uFDD0:io.pedestal.app.dataflow/order",cljs.core.conj.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:io.pedestal.app.dataflow/order")).call(null,graph__$2),node));
}
});
/**
* Return a sorted sequence of derive function configurations.
*/
io.pedestal.app.dataflow.sort_derive_fns = (function sort_derive_fns(derive_fns){
var derive_fns__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10199_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10199_SHARP_,"\uFDD0:id",cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}),derive_fns);
var index = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (derive_fns__$1){
return (function (a,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,(new cljs.core.Keyword("\uFDD0:id")).call(null,x),x);
});})(derive_fns__$1))
,cljs.core.PersistentArrayMap.EMPTY,derive_fns__$1);
var deps = (function (){var iter__9615__auto__ = ((function (derive_fns__$1,index){
return (function iter__10212(s__10213){
return (new cljs.core.LazySeq(null,false,((function (derive_fns__$1,index){
return (function (){
var s__10213__$1 = s__10213;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__10213__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var map__10219 = cljs.core.first(xs__4579__auto__);
var map__10219__$1 = ((cljs.core.seq_QMARK_(map__10219))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10219):map__10219);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10219__$1,"\uFDD0:id");
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10219__$1,"\uFDD0:out");
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10219__$1,"\uFDD0:in");
var iterys__9611__auto__ = ((function (s__10213__$1,map__10219,map__10219__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function iter__10214(s__10215){
return (new cljs.core.LazySeq(null,false,((function (s__10213__$1,map__10219,map__10219__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function (){
var s__10215__$1 = s__10215;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__10215__$1);
if(temp__4092__auto____$1)
{var s__10215__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10215__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__10215__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__10217 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__10216 = 0;
while(true){
if((i__10216 < size__9614__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__10216);
cljs.core.chunk_append(b__10217,cljs.core.PersistentVector.fromArray([id,i,out], true));
{
var G__10224 = (i__10216 + 1);
i__10216 = G__10224;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10217),iter__10214(cljs.core.chunk_rest(s__10215__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10217),null);
}
} else
{var i = cljs.core.first(s__10215__$2);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([id,i,out], true),iter__10214(cljs.core.rest(s__10215__$2)));
}
} else
{return null;
}
break;
}
});})(s__10213__$1,map__10219,map__10219__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
,null));
});})(s__10213__$1,map__10219,map__10219__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
;
var fs__9612__auto__ = cljs.core.seq(iterys__9611__auto__(in$));
if(fs__9612__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9612__auto__,iter__10212(cljs.core.rest(s__10213__$1)));
} else
{{
var G__10225 = cljs.core.rest(s__10213__$1);
s__10213__$1 = G__10225;
continue;
}
}
} else
{return null;
}
break;
}
});})(derive_fns__$1,index))
,null));
});})(derive_fns__$1,index))
;
return iter__9615__auto__(derive_fns__$1);
})();
var graph = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (derive_fns__$1,index,deps){
return (function (a,p__10220){
var vec__10221 = p__10220;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10221,0,null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10221,1,null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10221,2,null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,f,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:deps",cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter(((function (vec__10221,f,_,out,derive_fns__$1,index,deps){
return (function (p__10222){
var vec__10223 = p__10222;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10223,0,null);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10223,1,null);
return io.pedestal.app.dataflow.descendent_QMARK_(in$,out);
});})(vec__10221,f,_,out,derive_fns__$1,index,deps))
,deps)))], true));
});})(derive_fns__$1,index,deps))
,cljs.core.PersistentArrayMap.EMPTY,deps);
return cljs.core.reverse(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,b),"\uFDD0:id"));
}),cljs.core.PersistentVector.EMPTY,(new cljs.core.Keyword("\uFDD0:io.pedestal.app.dataflow/order")).call(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.dataflow.topo_visit,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(graph,"\uFDD0:io.pedestal.app.dataflow/order",cljs.core.PersistentVector.EMPTY),cljs.core.keys(graph)))));
});
/**
* Given a transform configuration vector, find the first transform
* function which matches the given message.
*/
io.pedestal.app.dataflow.find_message_transformer = (function find_message_transformer(transforms,out_path,key){
return (new cljs.core.Keyword("\uFDD0:fn")).call(null,cljs.core.first(cljs.core.filter((function (p__10229){
var map__10230 = p__10229;
var map__10230__$1 = ((cljs.core.seq_QMARK_(map__10230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10230):map__10230);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10230__$1,"\uFDD0:key");
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10230__$1,"\uFDD0:out");
var vec__10231 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(path),"\uFDD0:**"))?(function (){var c = cljs.core.count(path);
return cljs.core.PersistentVector.fromArray([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.take((c - 1),path)),"\uFDD0:*"),cljs.core.vec(cljs.core.take(c,out_path))], true);
})():cljs.core.PersistentVector.fromArray([path,out_path], true));
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10231,0,null);
var out_path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10231,1,null);
var and__3941__auto__ = io.pedestal.app.dataflow.matching_path_element_QMARK_(op,key);
if(cljs.core.truth_(and__3941__auto__))
{return io.pedestal.app.dataflow.matching_path_QMARK_(path__$1,out_path__$1);
} else
{return and__3941__auto__;
}
}),transforms)));
});
io.pedestal.app.dataflow.merge_changes = (function merge_changes(old_changes,new_changes){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([old_changes,new_changes], 0));
});
io.pedestal.app.dataflow.update_flow_state = (function update_flow_state(state,tracking_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true),cljs.core.deref(tracking_map)),cljs.core.PersistentVector.fromArray(["\uFDD0:change"], true),io.pedestal.app.dataflow.merge_changes,io.pedestal.app.data.tracking_map.changes(tracking_map));
});
/**
* @param {...*} var_args
*/
io.pedestal.app.dataflow.track_update_in = (function() { 
var track_update_in__delegate = function (data_model,out_path,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,io.pedestal.app.data.tracking_map.tracking_map(data_model),out_path,f,args);
};
var track_update_in = function (data_model,out_path,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return track_update_in__delegate.call(this, data_model, out_path, f, args);
};
track_update_in.cljs$lang$maxFixedArity = 3;
track_update_in.cljs$lang$applyTo = (function (arglist__10232){
var data_model = cljs.core.first(arglist__10232);
arglist__10232 = cljs.core.next(arglist__10232);
var out_path = cljs.core.first(arglist__10232);
arglist__10232 = cljs.core.next(arglist__10232);
var f = cljs.core.first(arglist__10232);
var args = cljs.core.rest(arglist__10232);
return track_update_in__delegate(data_model, out_path, f, args);
});
track_update_in.cljs$core$IFn$_invoke$arity$variadic = track_update_in__delegate;
return track_update_in;
})()
;
/**
* @param {...*} var_args
*/
io.pedestal.app.dataflow.apply_in = (function() { 
var apply_in__delegate = function (state,out_path,f,args){
var data_model = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true));
var new_data_model = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(io.pedestal.app.dataflow.track_update_in,data_model,out_path,f,args);
return io.pedestal.app.dataflow.update_flow_state(state,new_data_model);
};
var apply_in = function (state,out_path,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return apply_in__delegate.call(this, state, out_path, f, args);
};
apply_in.cljs$lang$maxFixedArity = 3;
apply_in.cljs$lang$applyTo = (function (arglist__10233){
var state = cljs.core.first(arglist__10233);
arglist__10233 = cljs.core.next(arglist__10233);
var out_path = cljs.core.first(arglist__10233);
arglist__10233 = cljs.core.next(arglist__10233);
var f = cljs.core.first(arglist__10233);
var args = cljs.core.rest(arglist__10233);
return apply_in__delegate(state, out_path, f, args);
});
apply_in.cljs$core$IFn$_invoke$arity$variadic = apply_in__delegate;
return apply_in;
})()
;
/**
* Find the first transform function that matches the message and
* execute it, returning the updated flow state.
*/
io.pedestal.app.dataflow.transform_phase = (function transform_phase(p__10234){
var map__10237 = p__10234;
var map__10237__$1 = ((cljs.core.seq_QMARK_(map__10237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10237):map__10237);
var state = map__10237__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10237__$1,"\uFDD0:context");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10237__$1,"\uFDD0:dataflow");
var new$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10237__$1,"\uFDD0:new");
var map__10238 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,dataflow).call(null,(new cljs.core.Keyword("\uFDD0:message")).call(null,context));
var map__10238__$1 = ((cljs.core.seq_QMARK_(map__10238))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10238):map__10238);
var out_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10238__$1,"\uFDD0:out");
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10238__$1,"\uFDD0:key");
var transform_fn = io.pedestal.app.dataflow.find_message_transformer((new cljs.core.Keyword("\uFDD0:transform")).call(null,dataflow),out_path,key);
if(cljs.core.truth_(transform_fn))
{return io.pedestal.app.dataflow.apply_in.cljs$core$IFn$_invoke$arity$variadic(state,out_path,transform_fn,cljs.core.array_seq([(new cljs.core.Keyword("\uFDD0:message")).call(null,context)], 0));
} else
{return state;
}
});
/**
* The default propagator predicate. Return true if any of the changed
* paths are on the same path as the input path.
*/
io.pedestal.app.dataflow.input_change_propagator = (function input_change_propagator(state,changed_inputs,input_path){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.dataflow.descendent_QMARK_,input_path),changed_inputs);
});
/**
* Return true if a dependent function should be run based on the
* state of its input paths.
* 
* Custom propagator predicates can be provided by attaching
* :propagator metadata to any input path.
*/
io.pedestal.app.dataflow.propagate_QMARK_ = (function propagate_QMARK_(p__10239,input_paths){
var map__10241 = p__10239;
var map__10241__$1 = ((cljs.core.seq_QMARK_(map__10241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10241):map__10241);
var state = map__10241__$1;
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10241__$1,"\uFDD0:change");
var changed_inputs = ((cljs.core.seq(change))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.vals(change)):cljs.core.PersistentVector.EMPTY);
return cljs.core.some((function (input_path){
var propagator_pred = (new cljs.core.Keyword("\uFDD0:propagator")).call(null,cljs.core.meta(input_path));
return (propagator_pred.cljs$core$IFn$_invoke$arity$3 ? propagator_pred.cljs$core$IFn$_invoke$arity$3(state,changed_inputs,input_path) : propagator_pred.call(null,state,changed_inputs,input_path));
}),input_paths);
});
io.pedestal.app.dataflow.input_set = (function input_set(changes,f,input_paths){
return cljs.core.set((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.dataflow.descendent_QMARK_,x),input_paths);
}),changes) : f.call(null,(function (x){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.dataflow.descendent_QMARK_,x),input_paths);
}),changes)));
});
io.pedestal.app.dataflow.update_input_sets = (function update_input_sets(m,ks,f,input_paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,k){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(a,cljs.core.PersistentVector.fromArray([k], true),io.pedestal.app.dataflow.input_set,f,input_paths);
}),m,ks);
});
io.pedestal.app.dataflow.flow_input = (function flow_input(context,state,input_paths,change){
return io.pedestal.app.dataflow.update_input_sets(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,"\uFDD0:new-model",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true))),"\uFDD0:old-model",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.fromArray(["\uFDD0:old","\uFDD0:data-model"], true))),"\uFDD0:input-paths",input_paths),cljs.core.select_keys(change,cljs.core.PersistentVector.fromArray(["\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true))], 0)),cljs.core.PersistentVector.fromArray(["\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true),cljs.core.filter,input_paths);
});
io.pedestal.app.dataflow.dataflow_fn_args = (function dataflow_fn_args(inputs,args_key,arg_names){
var G__10243 = args_key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:default",G__10243))
{return cljs.core.PersistentVector.fromArray([inputs], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:single-val",G__10243))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.single_val(inputs)], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:map-seq",G__10243))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(io.pedestal.app.dataflow.input_map.cljs$core$IFn$_invoke$arity$2(inputs,arg_names)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:map",G__10243))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.input_map.cljs$core$IFn$_invoke$arity$2(inputs,arg_names)], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:vals",G__10243))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.input_vals(inputs)], true);
} else
{if("\uFDD0:else")
{return cljs.core.PersistentVector.fromArray([inputs], true);
} else
{return null;
}
}
}
}
}
}
});
/**
* Execute each derive function in dependency order only if some input to the
* function has changed. Return an updated flow state.
*/
io.pedestal.app.dataflow.derive_phase = (function derive_phase(p__10244){
var map__10250 = p__10244;
var map__10250__$1 = ((cljs.core.seq_QMARK_(map__10250))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10250):map__10250);
var state = map__10250__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10250__$1,"\uFDD0:context");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10250__$1,"\uFDD0:dataflow");
var derives = (new cljs.core.Keyword("\uFDD0:derive")).call(null,dataflow);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10251,p__10252){
var map__10253 = p__10251;
var map__10253__$1 = ((cljs.core.seq_QMARK_(map__10253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10253):map__10253);
var acc = map__10253__$1;
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10253__$1,"\uFDD0:change");
var map__10254 = p__10252;
var map__10254__$1 = ((cljs.core.seq_QMARK_(map__10254))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10254):map__10254);
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,"\uFDD0:in");
var derive_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,"\uFDD0:fn");
var out_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,"\uFDD0:out");
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,"\uFDD0:args");
var arg_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,"\uFDD0:arg-names");
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_(acc,input_paths)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(io.pedestal.app.dataflow.apply_in,acc,out_path,derive_fn,io.pedestal.app.dataflow.dataflow_fn_args(io.pedestal.app.dataflow.flow_input(context,acc,input_paths,change),args,arg_names));
} else
{return acc;
}
}),state,derives);
});
/**
* Execute each function. Return an updated flow state.
*/
io.pedestal.app.dataflow.output_phase = (function output_phase(p__10255,k){
var map__10261 = p__10255;
var map__10261__$1 = ((cljs.core.seq_QMARK_(map__10261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10261):map__10261);
var state = map__10261__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10261__$1,"\uFDD0:context");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10261__$1,"\uFDD0:dataflow");
var fns = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(dataflow) : k.call(null,dataflow));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10262,p__10263){
var map__10264 = p__10262;
var map__10264__$1 = ((cljs.core.seq_QMARK_(map__10264))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10264):map__10264);
var acc = map__10264__$1;
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10264__$1,"\uFDD0:change");
var map__10265 = p__10263;
var map__10265__$1 = ((cljs.core.seq_QMARK_(map__10265))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10265):map__10265);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10265__$1,"\uFDD0:fn");
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10265__$1,"\uFDD0:in");
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10265__$1,"\uFDD0:args");
var arg_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10265__$1,"\uFDD0:arg-names");
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_(acc,input_paths)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,cljs.core.PersistentVector.fromArray(["\uFDD0:new",k], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,io.pedestal.app.dataflow.dataflow_fn_args(io.pedestal.app.dataflow.flow_input(context,acc,input_paths,change),args,arg_names)));
} else
{return acc;
}
}),state,fns);
});
/**
* Execute each continue function. Return an updated flow state.
*/
io.pedestal.app.dataflow.continue_phase = (function continue_phase(state){
return io.pedestal.app.dataflow.output_phase(state,"\uFDD0:continue");
});
/**
* Execute each effect function. Return an updated flow state.
*/
io.pedestal.app.dataflow.effect_phase = (function effect_phase(state){
return io.pedestal.app.dataflow.output_phase(state,"\uFDD0:effect");
});
var remover = (function remover(change_set,input_paths){
return cljs.core.set(cljs.core.remove((function (p1__10266_SHARP_){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.dataflow.matching_path_QMARK_,p1__10266_SHARP_),input_paths);
}),change_set));
});
io.pedestal.app.dataflow.remove_matching_changes = (function remove_matching_changes(change,input_paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,k){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.PersistentVector.fromArray([k], true),remover,input_paths);
}),change,cljs.core.PersistentVector.fromArray(["\uFDD0:inspect","\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true));
});
io.pedestal.app.dataflow.emit_phase = (function emit_phase(p__10267){
var map__10273 = p__10267;
var map__10273__$1 = ((cljs.core.seq_QMARK_(map__10273))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10273):map__10273);
var state = map__10273__$1;
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10273__$1,"\uFDD0:change");
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10273__$1,"\uFDD0:context");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10273__$1,"\uFDD0:dataflow");
var emits = (new cljs.core.Keyword("\uFDD0:emit")).call(null,dataflow);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10274,p__10275){
var map__10276 = p__10274;
var map__10276__$1 = ((cljs.core.seq_QMARK_(map__10276))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10276):map__10276);
var acc = map__10276__$1;
var processed_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10276__$1,"\uFDD0:processed-inputs");
var remaining_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10276__$1,"\uFDD0:remaining-change");
var change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10276__$1,"\uFDD0:change");
var map__10277 = p__10275;
var map__10277__$1 = ((cljs.core.seq_QMARK_(map__10277))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10277):map__10277);
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10277__$1,"\uFDD0:in");
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10277__$1,"\uFDD0:fn");
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10277__$1,"\uFDD0:mode");
var report_change = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"\uFDD0:always"))?change__$1:remaining_change);
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,"\uFDD0:change",report_change),input_paths)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,cljs.core.PersistentVector.fromArray(["\uFDD0:remaining-change"], true),io.pedestal.app.dataflow.remove_matching_changes,input_paths),cljs.core.PersistentVector.fromArray(["\uFDD0:processed-inputs"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:emit"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),(emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(io.pedestal.app.dataflow.flow_input(context,acc,input_paths,report_change),"\uFDD0:mode",mode,cljs.core.array_seq(["\uFDD0:processed-inputs",processed_inputs], 0))) : emit_fn.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(io.pedestal.app.dataflow.flow_input(context,acc,input_paths,report_change),"\uFDD0:mode",mode,cljs.core.array_seq(["\uFDD0:processed-inputs",processed_inputs], 0)))));
} else
{return acc;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,"\uFDD0:remaining-change",change),emits),"\uFDD0:remaining-change");
});
/**
* Given a dataflow, a state and a message, run the message through
* the dataflow and return the updated state. The dataflow will be
* run only once.
*/
io.pedestal.app.dataflow.flow_phases_step = (function flow_phases_step(state,dataflow,message){
var state__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.PersistentVector.fromArray(["\uFDD0:new"], true),cljs.core.dissoc,"\uFDD0:continue");
return io.pedestal.app.dataflow.continue_phase(io.pedestal.app.dataflow.derive_phase(io.pedestal.app.dataflow.transform_phase(cljs.core.assoc_in(state__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:context","\uFDD0:message"], true),message))));
});
io.pedestal.app.dataflow.run_flow_phases = (function run_flow_phases(state,dataflow,message){
var map__10282 = io.pedestal.app.dataflow.flow_phases_step(state,dataflow,message);
var map__10282__$1 = ((cljs.core.seq_QMARK_(map__10282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10282):map__10282);
var result = map__10282__$1;
var map__10283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10282__$1,"\uFDD0:new");
var map__10283__$1 = ((cljs.core.seq_QMARK_(map__10283))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10283):map__10283);
var continue$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10283__$1,"\uFDD0:continue");
var input = cljs.core.filter(((function (map__10282,map__10282__$1,result,map__10283,map__10283__$1,continue$){
return (function (p1__10278_SHARP_){
return (new cljs.core.Keyword("\uFDD0:input")).call(null,cljs.core.meta(p1__10278_SHARP_));
});})(map__10282,map__10282__$1,result,map__10283,map__10283__$1,continue$))
,continue$);
var continue$__$1 = cljs.core.remove(((function (map__10282,map__10282__$1,result,map__10283,map__10283__$1,continue$,input){
return (function (p1__10279_SHARP_){
return (new cljs.core.Keyword("\uFDD0:input")).call(null,cljs.core.meta(p1__10279_SHARP_));
});})(map__10282,map__10282__$1,result,map__10283,map__10283__$1,continue$,input))
,continue$);
var new_state = ((cljs.core.empty_QMARK_(continue$__$1))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,cljs.core.PersistentVector.fromArray(["\uFDD0:new"], true),cljs.core.dissoc,"\uFDD0:continue"):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__10282,map__10282__$1,result,map__10283,map__10283__$1,continue$,input,continue$__$1){
return (function (a,c_message){
return run_flow_phases(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,"\uFDD0:old",(new cljs.core.Keyword("\uFDD0:new")).call(null,a)),dataflow,c_message);
});})(map__10282,map__10282__$1,result,map__10283,map__10283__$1,continue$,input,continue$__$1))
,result,continue$__$1));
if(cljs.core.empty_QMARK_(input))
{return new_state;
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(new_state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:continue-inputs"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),input);
}
});
io.pedestal.app.dataflow.run_all_phases = (function run_all_phases(model,dataflow,message){
var state = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:old",model,"\uFDD0:new",model,"\uFDD0:change",cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:dataflow",dataflow,"\uFDD0:context",cljs.core.PersistentArrayMap.EMPTY], true);
var new_state = io.pedestal.app.dataflow.run_flow_phases(state,dataflow,message);
return (new cljs.core.Keyword("\uFDD0:new")).call(null,io.pedestal.app.dataflow.emit_phase(io.pedestal.app.dataflow.effect_phase(cljs.core.assoc_in(new_state,cljs.core.PersistentVector.fromArray(["\uFDD0:context","\uFDD0:message"], true),message))));
});
io.pedestal.app.dataflow.add_default = (function add_default(v,d){
var or__3943__auto__ = v;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return d;
}
});
/**
* Add a propagator predicate to each input path returning a set of
* input paths.
* 
* The single argument version will add the default propagator
* predicate.
*/
io.pedestal.app.dataflow.with_propagator = (function() {
var with_propagator = null;
var with_propagator__1 = (function (ins){
return with_propagator.cljs$core$IFn$_invoke$arity$2(ins,io.pedestal.app.dataflow.input_change_propagator);
});
var with_propagator__2 = (function (ins,propagator){
return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:propagator")).call(null,cljs.core.meta(i))))
{return i;
} else
{return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic(i,cljs.core.assoc,cljs.core.array_seq(["\uFDD0:propagator",propagator], 0));
}
}),ins));
});
with_propagator = function(ins,propagator){
switch(arguments.length){
case 1:
return with_propagator__1.call(this,ins);
case 2:
return with_propagator__2.call(this,ins,propagator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
with_propagator.cljs$core$IFn$_invoke$arity$1 = with_propagator__1;
with_propagator.cljs$core$IFn$_invoke$arity$2 = with_propagator__2;
return with_propagator;
})()
;
io.pedestal.app.dataflow.transform_maps = (function transform_maps(transforms){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.vector_QMARK_(x))
{var vec__10285 = x;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10285,0,null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10285,1,null);
var fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10285,2,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",key,"\uFDD0:out",out,"\uFDD0:fn",fn], true);
} else
{return x;
}
}),transforms);
});
io.pedestal.app.dataflow.add_arg_names = (function add_arg_names(p__10286){
var map__10288 = p__10286;
var map__10288__$1 = ((cljs.core.seq_QMARK_(map__10288))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10288):map__10288);
var m = map__10288__$1;
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10288__$1,"\uFDD0:in");
var arg_names = ((cljs.core.map_QMARK_(in$))?in$:null);
var in$__$1 = ((cljs.core.map_QMARK_(in$))?cljs.core.set(cljs.core.keys(in$)):in$);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,"\uFDD0:in",in$__$1,cljs.core.array_seq(["\uFDD0:arg-names",arg_names], 0));
});
io.pedestal.app.dataflow.dataflow_maps = (function dataflow_maps(coll,f){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.dataflow.add_arg_names(((cljs.core.vector_QMARK_(x))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)):x)),cljs.core.PersistentVector.fromArray(["\uFDD0:in"], true),io.pedestal.app.dataflow.with_propagator);
}),coll);
});
io.pedestal.app.dataflow.derive_maps = (function derive_maps(derives){
return io.pedestal.app.dataflow.dataflow_maps(derives,(function (p__10291){
var vec__10292 = p__10291;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10292,0,null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10292,1,null);
var fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10292,2,null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10292,3,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",in$,"\uFDD0:out",out,"\uFDD0:fn",fn,"\uFDD0:args",args], true);
}));
});
io.pedestal.app.dataflow.output_maps = (function output_maps(outputs){
return io.pedestal.app.dataflow.dataflow_maps(outputs,(function (p__10295){
var vec__10296 = p__10295;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10296,0,null);
var fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10296,1,null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10296,2,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",in$,"\uFDD0:fn",fn,"\uFDD0:args",args], true);
}));
});
/**
* Given a dataflow description map, return a dataflow engine. An example dataflow
* configuration is shown below:
* 
* {:transform [[:op [:output :path] transform-fn]]
* :effect    #{{:fn effect-fn :in #{[:input :path]}}}
* :derive    #{{:fn derive-fn :in #{[:input :path]} :out [:output :path]}}
* :continue  #{{:fn some-continue-fn :in #{[:input :path]}}}
* :emit      [[#{[:input :path]} emit-fn]]}
* 
*/
io.pedestal.app.dataflow.build = (function build(description){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(description,cljs.core.PersistentVector.fromArray(["\uFDD0:transform"], true),io.pedestal.app.dataflow.transform_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:derive"], true),io.pedestal.app.dataflow.derive_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:continue"], true),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,io.pedestal.app.dataflow.output_maps)),cljs.core.PersistentVector.fromArray(["\uFDD0:effect"], true),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,io.pedestal.app.dataflow.output_maps)),cljs.core.PersistentVector.fromArray(["\uFDD0:emit"], true),io.pedestal.app.dataflow.output_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:derive"], true),io.pedestal.app.dataflow.sort_derive_fns),cljs.core.PersistentVector.fromArray(["\uFDD0:input-adapter"], true),io.pedestal.app.dataflow.add_default,cljs.core.identity);
});
io.pedestal.app.dataflow.run = (function run(model,dataflow,message){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:debug")).call(null,dataflow)))
{var start = io.pedestal.app.util.platform.date().getTime();
var new_model = io.pedestal.app.dataflow.run_all_phases(model,dataflow,message);
var end = io.pedestal.app.util.platform.date().getTime();
return io.pedestal.app.dataflow.run_all_phases(new_model,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dataflow,"\uFDD0:input-adapter",cljs.core.identity),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key","\uFDD0:debug","\uFDD0:out",cljs.core.PersistentVector.fromArray(["\uFDD0:pedestal","\uFDD0:debug","\uFDD0:dataflow-time"], true),"\uFDD0:value",(end - start)], true));
} else
{return io.pedestal.app.dataflow.run_all_phases(model,dataflow,message);
}
});
