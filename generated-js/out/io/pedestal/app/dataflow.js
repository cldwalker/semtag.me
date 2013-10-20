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
var vec__14788 = (((cljs.core.count(path_a) < cljs.core.count(path_b)))?cljs.core.PersistentVector.fromArray([path_a,path_b], true):cljs.core.PersistentVector.fromArray([path_b,path_a], true));
var small = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14788,0,null);
var large = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14788,1,null);
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
var get_path__3 = (function (data,context,p__14790){
var vec__14792 = p__14790;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14792,0,null);
var xs = cljs.core.nthnext(vec__14792,1);
if(cljs.core.truth_((function (){var and__3941__auto__ = x;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(data,"\uFDD0:io.pedestal.app.dataflow/nokey");
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"\uFDD0:*"))
{return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__14789_SHARP_){
return get_path.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__14789_SHARP_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(context,p1__14789_SHARP_),xs);
}),cljs.core.keys(data));
} else
{return get_path.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,x,"\uFDD0:io.pedestal.app.dataflow/nokey"),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(context,x),xs);
}
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([context,data], true)], true);
}
});
get_path = function(data,context,p__14790){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__14790);
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__14795){
var vec__14796 = p__14795;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,1,null);
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
var input_map__2 = (function (p__14797,arg_names){
var map__14815 = p__14797;
var map__14815__$1 = ((cljs.core.seq_QMARK_(map__14815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14815):map__14815);
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14815__$1,"\uFDD0:input-paths");
var new_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14815__$1,"\uFDD0:new-model");
var v_type = (value_types.cljs$core$IFn$_invoke$arity$1 ? value_types.cljs$core$IFn$_invoke$arity$1(arg_names) : value_types.call(null,arg_names));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__14816){
var vec__14817 = p__14816;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,1,null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v_type.cljs$core$IFn$_invoke$arity$1 ? v_type.cljs$core$IFn$_invoke$arity$1(k) : v_type.call(null,k)),"\uFDD0:seq"))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.PersistentVector.fromArray([k], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9895__auto__ = (function iter__14818(s__14819){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14819__$1 = s__14819;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__14819__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first(xs__4579__auto__);
var iterys__9891__auto__ = ((function (s__14819__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__14820(s__14821){
return (new cljs.core.LazySeq(null,false,((function (s__14819__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__14821__$1 = s__14821;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__14821__$1);
if(temp__4092__auto____$1)
{var s__14821__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14821__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__14821__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__14823 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__14822 = 0;
while(true){
if((i__14822 < size__9894__auto__))
{var vec__14830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__14822);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830,1,null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{cljs.core.chunk_append(b__14823,cljs.core.PersistentVector.fromArray([(rekey.cljs$core$IFn$_invoke$arity$3 ? rekey.cljs$core$IFn$_invoke$arity$3(k,path,arg_names) : rekey.call(null,k,path,arg_names)),v], true));
{
var G__14832 = (i__14822 + 1);
i__14822 = G__14832;
continue;
}
} else
{{
var G__14833 = (i__14822 + 1);
i__14822 = G__14833;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14823),iter__14820(cljs.core.chunk_rest(s__14821__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14823),null);
}
} else
{var vec__14831 = cljs.core.first(s__14821__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831,1,null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([(rekey.cljs$core$IFn$_invoke$arity$3 ? rekey.cljs$core$IFn$_invoke$arity$3(k,path,arg_names) : rekey.call(null,k,path,arg_names)),v], true),iter__14820(cljs.core.rest(s__14821__$2)));
} else
{{
var G__14834 = cljs.core.rest(s__14821__$2);
s__14821__$1 = G__14834;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__14819__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__14819__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9892__auto__ = cljs.core.seq(iterys__9891__auto__(io.pedestal.app.dataflow.get_path.cljs$core$IFn$_invoke$arity$2(new_model,path)));
if(fs__9892__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9892__auto__,iter__14818(cljs.core.rest(s__14819__$1)));
} else
{{
var G__14835 = cljs.core.rest(s__14819__$1);
s__14819__$1 = G__14835;
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
return iter__9895__auto__(input_paths);
})());
});
input_map = function(p__14797,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__14797);
case 2:
return input_map__2.call(this,p__14797,arg_names);
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
var vec__14851 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(model_key,change_key).call(null,inputs);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14851,0,null);
var change_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14851,1,null);
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9895__auto__ = (function iter__14852(s__14853){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14853__$1 = s__14853;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__14853__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first(xs__4579__auto__);
var iterys__9891__auto__ = ((function (s__14853__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__14854(s__14855){
return (new cljs.core.LazySeq(null,false,((function (s__14853__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__14855__$1 = s__14855;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__14855__$1);
if(temp__4092__auto____$1)
{var s__14855__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14855__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__14855__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__14857 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__14856 = 0;
while(true){
if((i__14856 < size__9894__auto__))
{var vec__14864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__14856);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14864,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14864,1,null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{cljs.core.chunk_append(b__14857,cljs.core.PersistentVector.fromArray([k,v], true));
{
var G__14866 = (i__14856 + 1);
i__14856 = G__14866;
continue;
}
} else
{{
var G__14867 = (i__14856 + 1);
i__14856 = G__14867;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14857),iter__14854(cljs.core.chunk_rest(s__14855__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14857),null);
}
} else
{var vec__14865 = cljs.core.first(s__14855__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14865,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14865,1,null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([k,v], true),iter__14854(cljs.core.rest(s__14855__$2)));
} else
{{
var G__14868 = cljs.core.rest(s__14855__$2);
s__14855__$1 = G__14868;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__14853__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__14853__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9892__auto__ = cljs.core.seq(iterys__9891__auto__(io.pedestal.app.dataflow.get_path.cljs$core$IFn$_invoke$arity$2(model,path)));
if(fs__9892__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9892__auto__,iter__14852(cljs.core.rest(s__14853__$1)));
} else
{{
var G__14869 = cljs.core.rest(s__14853__$1);
s__14853__$1 = G__14869;
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
return iter__9895__auto__(change_paths);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__14873){
var vec__14874 = p__14873;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,1,null);
if(cljs.core.truth_(cljs.core.some((function (p1__14870_SHARP_){
return io.pedestal.app.dataflow.descendent_QMARK_(k,p1__14870_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__14876){
var map__14892 = p__14876;
var map__14892__$1 = ((cljs.core.seq_QMARK_(map__14892))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14892):map__14892);
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14892__$1,"\uFDD0:input-paths");
var old_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14892__$1,"\uFDD0:old-model");
var iter__9895__auto__ = (function iter__14893(s__14894){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14894__$1 = s__14894;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__14894__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first(xs__4579__auto__);
var iterys__9891__auto__ = ((function (s__14894__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__14895(s__14896){
return (new cljs.core.LazySeq(null,false,((function (s__14894__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__14896__$1 = s__14896;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__14896__$1);
if(temp__4092__auto____$1)
{var s__14896__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14896__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__14896__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__14898 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__14897 = 0;
while(true){
if((i__14897 < size__9894__auto__))
{var vec__14905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__14897);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,1,null);
cljs.core.chunk_append(b__14898,k);
{
var G__14907 = (i__14897 + 1);
i__14897 = G__14907;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14898),iter__14895(cljs.core.chunk_rest(s__14896__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14898),null);
}
} else
{var vec__14906 = cljs.core.first(s__14896__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906,1,null);
return cljs.core.cons(k,iter__14895(cljs.core.rest(s__14896__$2)));
}
} else
{return null;
}
break;
}
});})(s__14894__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__14894__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9892__auto__ = cljs.core.seq(iterys__9891__auto__(io.pedestal.app.dataflow.get_path.cljs$core$IFn$_invoke$arity$2(old_model,path)));
if(fs__9892__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9892__auto__,iter__14893(cljs.core.rest(s__14894__$1)));
} else
{{
var G__14908 = cljs.core.rest(s__14894__$1);
s__14894__$1 = G__14908;
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
return iter__9895__auto__(input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,cp){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(a,path,cp) : f.call(null,a,path,cp));
}),acc,cljs.core.filter((function (p1__14875_SHARP_){
return io.pedestal.app.dataflow.descendent_QMARK_(path,p1__14875_SHARP_);
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
var derive_fns__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14909_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14909_SHARP_,"\uFDD0:id",cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}),derive_fns);
var index = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (derive_fns__$1){
return (function (a,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,(new cljs.core.Keyword("\uFDD0:id")).call(null,x),x);
});})(derive_fns__$1))
,cljs.core.PersistentArrayMap.EMPTY,derive_fns__$1);
var deps = (function (){var iter__9895__auto__ = ((function (derive_fns__$1,index){
return (function iter__14922(s__14923){
return (new cljs.core.LazySeq(null,false,((function (derive_fns__$1,index){
return (function (){
var s__14923__$1 = s__14923;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__14923__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var map__14929 = cljs.core.first(xs__4579__auto__);
var map__14929__$1 = ((cljs.core.seq_QMARK_(map__14929))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14929):map__14929);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14929__$1,"\uFDD0:id");
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14929__$1,"\uFDD0:out");
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14929__$1,"\uFDD0:in");
var iterys__9891__auto__ = ((function (s__14923__$1,map__14929,map__14929__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function iter__14924(s__14925){
return (new cljs.core.LazySeq(null,false,((function (s__14923__$1,map__14929,map__14929__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function (){
var s__14925__$1 = s__14925;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__14925__$1);
if(temp__4092__auto____$1)
{var s__14925__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14925__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__14925__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__14927 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__14926 = 0;
while(true){
if((i__14926 < size__9894__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__14926);
cljs.core.chunk_append(b__14927,cljs.core.PersistentVector.fromArray([id,i,out], true));
{
var G__14934 = (i__14926 + 1);
i__14926 = G__14934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14927),iter__14924(cljs.core.chunk_rest(s__14925__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14927),null);
}
} else
{var i = cljs.core.first(s__14925__$2);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([id,i,out], true),iter__14924(cljs.core.rest(s__14925__$2)));
}
} else
{return null;
}
break;
}
});})(s__14923__$1,map__14929,map__14929__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
,null));
});})(s__14923__$1,map__14929,map__14929__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
;
var fs__9892__auto__ = cljs.core.seq(iterys__9891__auto__(in$));
if(fs__9892__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9892__auto__,iter__14922(cljs.core.rest(s__14923__$1)));
} else
{{
var G__14935 = cljs.core.rest(s__14923__$1);
s__14923__$1 = G__14935;
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
return iter__9895__auto__(derive_fns__$1);
})();
var graph = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (derive_fns__$1,index,deps){
return (function (a,p__14930){
var vec__14931 = p__14930;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14931,0,null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14931,1,null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14931,2,null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,f,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:deps",cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter(((function (vec__14931,f,_,out,derive_fns__$1,index,deps){
return (function (p__14932){
var vec__14933 = p__14932;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14933,0,null);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14933,1,null);
return io.pedestal.app.dataflow.descendent_QMARK_(in$,out);
});})(vec__14931,f,_,out,derive_fns__$1,index,deps))
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
return (new cljs.core.Keyword("\uFDD0:fn")).call(null,cljs.core.first(cljs.core.filter((function (p__14939){
var map__14940 = p__14939;
var map__14940__$1 = ((cljs.core.seq_QMARK_(map__14940))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14940):map__14940);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14940__$1,"\uFDD0:key");
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14940__$1,"\uFDD0:out");
var vec__14941 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(path),"\uFDD0:**"))?(function (){var c = cljs.core.count(path);
return cljs.core.PersistentVector.fromArray([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.take((c - 1),path)),"\uFDD0:*"),cljs.core.vec(cljs.core.take(c,out_path))], true);
})():cljs.core.PersistentVector.fromArray([path,out_path], true));
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941,0,null);
var out_path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941,1,null);
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
track_update_in.cljs$lang$applyTo = (function (arglist__14942){
var data_model = cljs.core.first(arglist__14942);
arglist__14942 = cljs.core.next(arglist__14942);
var out_path = cljs.core.first(arglist__14942);
arglist__14942 = cljs.core.next(arglist__14942);
var f = cljs.core.first(arglist__14942);
var args = cljs.core.rest(arglist__14942);
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
apply_in.cljs$lang$applyTo = (function (arglist__14943){
var state = cljs.core.first(arglist__14943);
arglist__14943 = cljs.core.next(arglist__14943);
var out_path = cljs.core.first(arglist__14943);
arglist__14943 = cljs.core.next(arglist__14943);
var f = cljs.core.first(arglist__14943);
var args = cljs.core.rest(arglist__14943);
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
io.pedestal.app.dataflow.transform_phase = (function transform_phase(p__14944){
var map__14947 = p__14944;
var map__14947__$1 = ((cljs.core.seq_QMARK_(map__14947))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14947):map__14947);
var state = map__14947__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14947__$1,"\uFDD0:context");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14947__$1,"\uFDD0:dataflow");
var new$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14947__$1,"\uFDD0:new");
var map__14948 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,dataflow).call(null,(new cljs.core.Keyword("\uFDD0:message")).call(null,context));
var map__14948__$1 = ((cljs.core.seq_QMARK_(map__14948))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14948):map__14948);
var out_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14948__$1,"\uFDD0:out");
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14948__$1,"\uFDD0:key");
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
io.pedestal.app.dataflow.propagate_QMARK_ = (function propagate_QMARK_(p__14949,input_paths){
var map__14951 = p__14949;
var map__14951__$1 = ((cljs.core.seq_QMARK_(map__14951))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14951):map__14951);
var state = map__14951__$1;
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14951__$1,"\uFDD0:change");
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
var G__14953 = args_key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:default",G__14953))
{return cljs.core.PersistentVector.fromArray([inputs], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:single-val",G__14953))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.single_val(inputs)], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:map-seq",G__14953))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(io.pedestal.app.dataflow.input_map.cljs$core$IFn$_invoke$arity$2(inputs,arg_names)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:map",G__14953))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.input_map.cljs$core$IFn$_invoke$arity$2(inputs,arg_names)], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:vals",G__14953))
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
io.pedestal.app.dataflow.derive_phase = (function derive_phase(p__14954){
var map__14960 = p__14954;
var map__14960__$1 = ((cljs.core.seq_QMARK_(map__14960))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14960):map__14960);
var state = map__14960__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14960__$1,"\uFDD0:context");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14960__$1,"\uFDD0:dataflow");
var derives = (new cljs.core.Keyword("\uFDD0:derive")).call(null,dataflow);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14961,p__14962){
var map__14963 = p__14961;
var map__14963__$1 = ((cljs.core.seq_QMARK_(map__14963))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14963):map__14963);
var acc = map__14963__$1;
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,"\uFDD0:change");
var map__14964 = p__14962;
var map__14964__$1 = ((cljs.core.seq_QMARK_(map__14964))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14964):map__14964);
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,"\uFDD0:in");
var derive_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,"\uFDD0:fn");
var out_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,"\uFDD0:out");
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,"\uFDD0:args");
var arg_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,"\uFDD0:arg-names");
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
io.pedestal.app.dataflow.output_phase = (function output_phase(p__14965,k){
var map__14971 = p__14965;
var map__14971__$1 = ((cljs.core.seq_QMARK_(map__14971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14971):map__14971);
var state = map__14971__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14971__$1,"\uFDD0:context");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14971__$1,"\uFDD0:dataflow");
var fns = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(dataflow) : k.call(null,dataflow));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14972,p__14973){
var map__14974 = p__14972;
var map__14974__$1 = ((cljs.core.seq_QMARK_(map__14974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14974):map__14974);
var acc = map__14974__$1;
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14974__$1,"\uFDD0:change");
var map__14975 = p__14973;
var map__14975__$1 = ((cljs.core.seq_QMARK_(map__14975))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14975):map__14975);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,"\uFDD0:fn");
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,"\uFDD0:in");
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,"\uFDD0:args");
var arg_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,"\uFDD0:arg-names");
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
return cljs.core.set(cljs.core.remove((function (p1__14976_SHARP_){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.dataflow.matching_path_QMARK_,p1__14976_SHARP_),input_paths);
}),change_set));
});
io.pedestal.app.dataflow.remove_matching_changes = (function remove_matching_changes(change,input_paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,k){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.PersistentVector.fromArray([k], true),remover,input_paths);
}),change,cljs.core.PersistentVector.fromArray(["\uFDD0:inspect","\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true));
});
io.pedestal.app.dataflow.emit_phase = (function emit_phase(p__14977){
var map__14983 = p__14977;
var map__14983__$1 = ((cljs.core.seq_QMARK_(map__14983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14983):map__14983);
var state = map__14983__$1;
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,"\uFDD0:change");
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,"\uFDD0:context");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,"\uFDD0:dataflow");
var emits = (new cljs.core.Keyword("\uFDD0:emit")).call(null,dataflow);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14984,p__14985){
var map__14986 = p__14984;
var map__14986__$1 = ((cljs.core.seq_QMARK_(map__14986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14986):map__14986);
var acc = map__14986__$1;
var processed_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14986__$1,"\uFDD0:processed-inputs");
var remaining_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14986__$1,"\uFDD0:remaining-change");
var change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14986__$1,"\uFDD0:change");
var map__14987 = p__14985;
var map__14987__$1 = ((cljs.core.seq_QMARK_(map__14987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14987):map__14987);
var input_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14987__$1,"\uFDD0:in");
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14987__$1,"\uFDD0:fn");
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14987__$1,"\uFDD0:mode");
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
var map__14992 = io.pedestal.app.dataflow.flow_phases_step(state,dataflow,message);
var map__14992__$1 = ((cljs.core.seq_QMARK_(map__14992))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14992):map__14992);
var result = map__14992__$1;
var map__14993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14992__$1,"\uFDD0:new");
var map__14993__$1 = ((cljs.core.seq_QMARK_(map__14993))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14993):map__14993);
var continue$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14993__$1,"\uFDD0:continue");
var input = cljs.core.filter(((function (map__14992,map__14992__$1,result,map__14993,map__14993__$1,continue$){
return (function (p1__14988_SHARP_){
return (new cljs.core.Keyword("\uFDD0:input")).call(null,cljs.core.meta(p1__14988_SHARP_));
});})(map__14992,map__14992__$1,result,map__14993,map__14993__$1,continue$))
,continue$);
var continue$__$1 = cljs.core.remove(((function (map__14992,map__14992__$1,result,map__14993,map__14993__$1,continue$,input){
return (function (p1__14989_SHARP_){
return (new cljs.core.Keyword("\uFDD0:input")).call(null,cljs.core.meta(p1__14989_SHARP_));
});})(map__14992,map__14992__$1,result,map__14993,map__14993__$1,continue$,input))
,continue$);
var new_state = ((cljs.core.empty_QMARK_(continue$__$1))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,cljs.core.PersistentVector.fromArray(["\uFDD0:new"], true),cljs.core.dissoc,"\uFDD0:continue"):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__14992,map__14992__$1,result,map__14993,map__14993__$1,continue$,input,continue$__$1){
return (function (a,c_message){
return run_flow_phases(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,"\uFDD0:old",(new cljs.core.Keyword("\uFDD0:new")).call(null,a)),dataflow,c_message);
});})(map__14992,map__14992__$1,result,map__14993,map__14993__$1,continue$,input,continue$__$1))
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
{var vec__14995 = x;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,0,null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,1,null);
var fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,2,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",key,"\uFDD0:out",out,"\uFDD0:fn",fn], true);
} else
{return x;
}
}),transforms);
});
io.pedestal.app.dataflow.add_arg_names = (function add_arg_names(p__14996){
var map__14998 = p__14996;
var map__14998__$1 = ((cljs.core.seq_QMARK_(map__14998))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14998):map__14998);
var m = map__14998__$1;
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14998__$1,"\uFDD0:in");
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
return io.pedestal.app.dataflow.dataflow_maps(derives,(function (p__15001){
var vec__15002 = p__15001;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,0,null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,1,null);
var fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,2,null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15002,3,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",in$,"\uFDD0:out",out,"\uFDD0:fn",fn,"\uFDD0:args",args], true);
}));
});
io.pedestal.app.dataflow.output_maps = (function output_maps(outputs){
return io.pedestal.app.dataflow.dataflow_maps(outputs,(function (p__15005){
var vec__15006 = p__15005;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15006,0,null);
var fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15006,1,null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15006,2,null);
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
