goog.provide('io.pedestal.app.util.adapters');
goog.require('cljs.core');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.dataflow');
goog.require('clojure.set');
io.pedestal.app.util.adapters.rekey_description = (function rekey_description(description){
return clojure.set.rename_keys(description,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:models","\uFDD0:transform","\uFDD0:views","\uFDD0:derive","\uFDD0:combine","\uFDD0:derive","\uFDD0:emitters","\uFDD0:emit","\uFDD0:output","\uFDD0:effect","\uFDD0:feedback","\uFDD0:continue","\uFDD0:navigation","\uFDD0:focus"], true));
});
io.pedestal.app.util.adapters.convert_transform = (function convert_transform(transforms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10526){
var vec__10527 = p__10526;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10527,0,null);
var map__10528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10527,1,null);
var map__10528__$1 = ((cljs.core.seq_QMARK_(map__10528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10528):map__10528);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10528__$1,"\uFDD0:init");
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10528__$1,"\uFDD0:fn");
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",k,"\uFDD0:out",cljs.core.PersistentVector.fromArray([k], true),"\uFDD0:init",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,k,io.pedestal.app.messages.type,io.pedestal.app.messages.init,"\uFDD0:value",init], true)], true),"\uFDD0:fn",transform_fn], true));
}),cljs.core.PersistentVector.EMPTY,transforms);
});
io.pedestal.app.util.adapters.old_style_inputs = (function old_style_inputs(inputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10531){
var vec__10532 = p__10531;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10532,0,null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,path,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:old",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",path], true)),"\uFDD0:new",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",path], true))], true));
}),cljs.core.PersistentArrayMap.EMPTY,(new cljs.core.Keyword("\uFDD0:input-paths")).call(null,inputs));
});
io.pedestal.app.util.adapters.convert_derive = (function convert_derive(derives){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10536){
var vec__10537 = p__10536;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10537,0,null);
var map__10538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10537,1,null);
var map__10538__$1 = ((cljs.core.seq_QMARK_(map__10538))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10538):map__10538);
var derive_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10538__$1,"\uFDD0:fn");
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10538__$1,"\uFDD0:input");
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,in$)),"\uFDD0:out",cljs.core.PersistentVector.fromArray([k], true),"\uFDD0:fn",(function (old_value,inputs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(in$),1))
{return (derive_fn.cljs$core$IFn$_invoke$arity$4 ? derive_fn.cljs$core$IFn$_invoke$arity$4(old_value,k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",cljs.core.first(in$)], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",cljs.core.first(in$)], true))) : derive_fn.call(null,old_value,k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",cljs.core.first(in$)], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",cljs.core.first(in$)], true))));
} else
{return (derive_fn.cljs$core$IFn$_invoke$arity$2 ? derive_fn.cljs$core$IFn$_invoke$arity$2(old_value,io.pedestal.app.util.adapters.old_style_inputs(inputs)) : derive_fn.call(null,old_value,io.pedestal.app.util.adapters.old_style_inputs(inputs)));
}
})], true));
}),cljs.core.PersistentHashSet.EMPTY,derives);
});
io.pedestal.app.util.adapters.convert_continue = (function convert_continue(continues){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10541){
var vec__10542 = p__10541;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10542,0,null);
var continue_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10542,1,null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([k], true),null], true),"\uFDD0:fn",(function (inputs){
return (continue_fn.cljs$core$IFn$_invoke$arity$3 ? continue_fn.cljs$core$IFn$_invoke$arity$3(k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",k], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",k], true))) : continue_fn.call(null,k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",k], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",k], true))));
})], true));
}),cljs.core.PersistentHashSet.EMPTY,continues);
});
io.pedestal.app.util.adapters.convert_effect = (function convert_effect(effects){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10545){
var vec__10546 = p__10545;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10546,0,null);
var effect_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10546,1,null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([k], true),null], true),"\uFDD0:fn",(function (inputs){
return (effect_fn.cljs$core$IFn$_invoke$arity$3 ? effect_fn.cljs$core$IFn$_invoke$arity$3((new cljs.core.Keyword("\uFDD0:message")).call(null,inputs),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",k], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",k], true))) : effect_fn.call(null,(new cljs.core.Keyword("\uFDD0:message")).call(null,inputs),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",k], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",k], true))));
})], true));
}),cljs.core.PersistentHashSet.EMPTY,effects);
});
io.pedestal.app.util.adapters.convert_emit = (function convert_emit(emits){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10550){
var vec__10551 = p__10550;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10551,0,null);
var map__10552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10551,1,null);
var map__10552__$1 = ((cljs.core.seq_QMARK_(map__10552))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10552):map__10552);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10552__$1,"\uFDD0:fn");
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10552__$1,"\uFDD0:input");
var input_vecs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,in$));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",input_vecs,"\uFDD0:init",(function (inputs){
return (emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(io.pedestal.app.util.adapters.old_style_inputs(inputs)) : emit_fn.call(null,io.pedestal.app.util.adapters.old_style_inputs(inputs)));
}),"\uFDD0:mode","\uFDD0:always","\uFDD0:fn",(function (inputs){
var added = io.pedestal.app.dataflow.added_map(inputs);
var updated = io.pedestal.app.dataflow.updated_map(inputs);
var removed = io.pedestal.app.dataflow.removed_map(inputs);
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.util.adapters.old_style_inputs(inputs),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(updated),cljs.core.keys(added),cljs.core.array_seq([cljs.core.keys(removed)], 0))))) : emit_fn.call(null,io.pedestal.app.util.adapters.old_style_inputs(inputs),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(updated),cljs.core.keys(added),cljs.core.array_seq([cljs.core.keys(removed)], 0))))));
})], true));
}),cljs.core.PersistentVector.EMPTY,emits);
});
io.pedestal.app.util.adapters.remove_empty_vals = (function remove_empty_vals(description){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__10555){
var vec__10556 = p__10555;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10556,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10556,1,null);
if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.fromArray(["\uFDD0:effect",null,"\uFDD0:transform",null,"\uFDD0:emit",null,"\uFDD0:derive",null,"\uFDD0:continue",null], true),k);
if(and__3941__auto__)
{return cljs.core.empty_QMARK_(v);
} else
{return and__3941__auto__;
}
})())
{return a;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,description);
});
io.pedestal.app.util.adapters.remove_topic_map = (function remove_topic_map(message){
var t = (io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.topic.call(null,message));
if(cljs.core.map_QMARK_(t))
{return (new cljs.core.Keyword("\uFDD0:model")).call(null,t);
} else
{if("\uFDD0:else")
{return t;
} else
{return null;
}
}
});
io.pedestal.app.util.adapters.adapt_v1_to_v2 = (function adapt_v1_to_v2(description){
return io.pedestal.app.util.adapters.remove_empty_vals(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.util.adapters.rekey_description(description),"\uFDD0:input-adapter",(function (m){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:out",cljs.core.PersistentVector.fromArray([io.pedestal.app.util.adapters.remove_topic_map(m)], true),"\uFDD0:key",io.pedestal.app.util.adapters.remove_topic_map(m)], true);
})),cljs.core.PersistentVector.fromArray(["\uFDD0:transform"], true),io.pedestal.app.util.adapters.convert_transform),cljs.core.PersistentVector.fromArray(["\uFDD0:derive"], true),io.pedestal.app.util.adapters.convert_derive),cljs.core.PersistentVector.fromArray(["\uFDD0:continue"], true),io.pedestal.app.util.adapters.convert_continue),cljs.core.PersistentVector.fromArray(["\uFDD0:effect"], true),io.pedestal.app.util.adapters.convert_effect),cljs.core.PersistentVector.fromArray(["\uFDD0:emit"], true),io.pedestal.app.util.adapters.convert_emit));
});
