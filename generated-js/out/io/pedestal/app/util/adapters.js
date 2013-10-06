goog.provide('io.pedestal.app.util.adapters');
goog.require('cljs.core');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.dataflow');
goog.require('clojure.set');
io.pedestal.app.util.adapters.rekey_description = (function rekey_description(description){
return clojure.set.rename_keys.call(null,description,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:models","\uFDD0:transform","\uFDD0:views","\uFDD0:derive","\uFDD0:combine","\uFDD0:derive","\uFDD0:emitters","\uFDD0:emit","\uFDD0:output","\uFDD0:effect","\uFDD0:feedback","\uFDD0:continue","\uFDD0:navigation","\uFDD0:focus"], true));
});
io.pedestal.app.util.adapters.convert_transform = (function convert_transform(transforms){
return cljs.core.reduce.call(null,(function (a,p__10520){
var vec__10521 = p__10520;
var k = cljs.core.nth.call(null,vec__10521,0,null);
var map__10522 = cljs.core.nth.call(null,vec__10521,1,null);
var map__10522__$1 = ((cljs.core.seq_QMARK_.call(null,map__10522))?cljs.core.apply.call(null,cljs.core.hash_map,map__10522):map__10522);
var init = cljs.core.get.call(null,map__10522__$1,"\uFDD0:init");
var transform_fn = cljs.core.get.call(null,map__10522__$1,"\uFDD0:fn");
return cljs.core.conj.call(null,a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",k,"\uFDD0:out",cljs.core.PersistentVector.fromArray([k], true),"\uFDD0:init",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,k,io.pedestal.app.messages.type,io.pedestal.app.messages.init,"\uFDD0:value",init], true)], true),"\uFDD0:fn",transform_fn], true));
}),cljs.core.PersistentVector.EMPTY,transforms);
});
io.pedestal.app.util.adapters.old_style_inputs = (function old_style_inputs(inputs){
return cljs.core.reduce.call(null,(function (a,p__10525){
var vec__10526 = p__10525;
var path = cljs.core.nth.call(null,vec__10526,0,null);
return cljs.core.assoc.call(null,a,path,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:old",cljs.core.get_in.call(null,inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",path], true)),"\uFDD0:new",cljs.core.get_in.call(null,inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",path], true))], true));
}),cljs.core.PersistentArrayMap.EMPTY,(new cljs.core.Keyword("\uFDD0:input-paths")).call(null,inputs));
});
io.pedestal.app.util.adapters.convert_derive = (function convert_derive(derives){
return cljs.core.reduce.call(null,(function (a,p__10530){
var vec__10531 = p__10530;
var k = cljs.core.nth.call(null,vec__10531,0,null);
var map__10532 = cljs.core.nth.call(null,vec__10531,1,null);
var map__10532__$1 = ((cljs.core.seq_QMARK_.call(null,map__10532))?cljs.core.apply.call(null,cljs.core.hash_map,map__10532):map__10532);
var derive_fn = cljs.core.get.call(null,map__10532__$1,"\uFDD0:fn");
var in$ = cljs.core.get.call(null,map__10532__$1,"\uFDD0:input");
return cljs.core.conj.call(null,a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vector,in$)),"\uFDD0:out",cljs.core.PersistentVector.fromArray([k], true),"\uFDD0:fn",(function (old_value,inputs){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,in$),1))
{return derive_fn.call(null,old_value,k,cljs.core.get_in.call(null,inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",cljs.core.first.call(null,in$)], true)),cljs.core.get_in.call(null,inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",cljs.core.first.call(null,in$)], true)));
} else
{return derive_fn.call(null,old_value,io.pedestal.app.util.adapters.old_style_inputs.call(null,inputs));
}
})], true));
}),cljs.core.PersistentHashSet.EMPTY,derives);
});
io.pedestal.app.util.adapters.convert_continue = (function convert_continue(continues){
return cljs.core.reduce.call(null,(function (a,p__10535){
var vec__10536 = p__10535;
var k = cljs.core.nth.call(null,vec__10536,0,null);
var continue_fn = cljs.core.nth.call(null,vec__10536,1,null);
return cljs.core.conj.call(null,a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([k], true),null], true),"\uFDD0:fn",(function (inputs){
return continue_fn.call(null,k,cljs.core.get_in.call(null,inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",k], true)),cljs.core.get_in.call(null,inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",k], true)));
})], true));
}),cljs.core.PersistentHashSet.EMPTY,continues);
});
io.pedestal.app.util.adapters.convert_effect = (function convert_effect(effects){
return cljs.core.reduce.call(null,(function (a,p__10539){
var vec__10540 = p__10539;
var k = cljs.core.nth.call(null,vec__10540,0,null);
var effect_fn = cljs.core.nth.call(null,vec__10540,1,null);
return cljs.core.conj.call(null,a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([k], true),null], true),"\uFDD0:fn",(function (inputs){
return effect_fn.call(null,(new cljs.core.Keyword("\uFDD0:message")).call(null,inputs),cljs.core.get_in.call(null,inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model",k], true)),cljs.core.get_in.call(null,inputs,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model",k], true)));
})], true));
}),cljs.core.PersistentHashSet.EMPTY,effects);
});
io.pedestal.app.util.adapters.convert_emit = (function convert_emit(emits){
return cljs.core.reduce.call(null,(function (a,p__10544){
var vec__10545 = p__10544;
var k = cljs.core.nth.call(null,vec__10545,0,null);
var map__10546 = cljs.core.nth.call(null,vec__10545,1,null);
var map__10546__$1 = ((cljs.core.seq_QMARK_.call(null,map__10546))?cljs.core.apply.call(null,cljs.core.hash_map,map__10546):map__10546);
var emit_fn = cljs.core.get.call(null,map__10546__$1,"\uFDD0:fn");
var in$ = cljs.core.get.call(null,map__10546__$1,"\uFDD0:input");
var input_vecs = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vector,in$));
return cljs.core.conj.call(null,a,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",input_vecs,"\uFDD0:init",(function (inputs){
return emit_fn.call(null,io.pedestal.app.util.adapters.old_style_inputs.call(null,inputs));
}),"\uFDD0:mode","\uFDD0:always","\uFDD0:fn",(function (inputs){
var added = io.pedestal.app.dataflow.added_map.call(null,inputs);
var updated = io.pedestal.app.dataflow.updated_map.call(null,inputs);
var removed = io.pedestal.app.dataflow.removed_map.call(null,inputs);
return emit_fn.call(null,io.pedestal.app.util.adapters.old_style_inputs.call(null,inputs),cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.concat.call(null,cljs.core.keys.call(null,updated),cljs.core.keys.call(null,added),cljs.core.keys.call(null,removed)))));
})], true));
}),cljs.core.PersistentVector.EMPTY,emits);
});
io.pedestal.app.util.adapters.remove_empty_vals = (function remove_empty_vals(description){
return cljs.core.reduce.call(null,(function (a,p__10549){
var vec__10550 = p__10549;
var k = cljs.core.nth.call(null,vec__10550,0,null);
var v = cljs.core.nth.call(null,vec__10550,1,null);
if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:effect",null,"\uFDD0:transform",null,"\uFDD0:emit",null,"\uFDD0:derive",null,"\uFDD0:continue",null], true),k);
if(and__3941__auto__)
{return cljs.core.empty_QMARK_.call(null,v);
} else
{return and__3941__auto__;
}
})())
{return a;
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,description);
});
io.pedestal.app.util.adapters.remove_topic_map = (function remove_topic_map(message){
var t = io.pedestal.app.messages.topic.call(null,message);
if(cljs.core.map_QMARK_.call(null,t))
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
return io.pedestal.app.util.adapters.remove_empty_vals.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,io.pedestal.app.util.adapters.rekey_description.call(null,description),"\uFDD0:input-adapter",(function (m){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:out",cljs.core.PersistentVector.fromArray([io.pedestal.app.util.adapters.remove_topic_map.call(null,m)], true),"\uFDD0:key",io.pedestal.app.util.adapters.remove_topic_map.call(null,m)], true);
})),cljs.core.PersistentVector.fromArray(["\uFDD0:transform"], true),io.pedestal.app.util.adapters.convert_transform),cljs.core.PersistentVector.fromArray(["\uFDD0:derive"], true),io.pedestal.app.util.adapters.convert_derive),cljs.core.PersistentVector.fromArray(["\uFDD0:continue"], true),io.pedestal.app.util.adapters.convert_continue),cljs.core.PersistentVector.fromArray(["\uFDD0:effect"], true),io.pedestal.app.util.adapters.convert_effect),cljs.core.PersistentVector.fromArray(["\uFDD0:emit"], true),io.pedestal.app.util.adapters.convert_emit));
});
