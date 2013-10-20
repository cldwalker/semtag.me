goog.provide('io.pedestal.app');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.util.log');
goog.require('io.pedestal.app.util.adapters');
goog.require('io.pedestal.app.dataflow');
goog.require('io.pedestal.app.tree');
goog.require('io.pedestal.app.queue');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.protocols');
goog.require('clojure.set');
/**
* The default emitter function used by the previous dataflow
* version. All new dataflows should use the default-emitter function.
*/
io.pedestal.app.default_emitter_fn = (function() {
var default_emitter_fn = null;
var default_emitter_fn__1 = (function (inputs){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__15289){
var vec__15290 = p__15289;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15290,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15290,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray([k], true),"\uFDD0:map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray([k], true),null,(new cljs.core.Keyword("\uFDD0:new")).call(null,v)], true)], true);
}),inputs));
});
var default_emitter_fn__2 = (function (inputs,changed_inputs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (changed_input){
return cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray([changed_input], true),(new cljs.core.Keyword("\uFDD0:new")).call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(inputs,changed_input))], true);
}),changed_inputs);
});
default_emitter_fn = function(inputs,changed_inputs){
switch(arguments.length){
case 1:
return default_emitter_fn__1.call(this,inputs);
case 2:
return default_emitter_fn__2.call(this,inputs,changed_inputs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
default_emitter_fn.cljs$core$IFn$_invoke$arity$1 = default_emitter_fn__1;
default_emitter_fn.cljs$core$IFn$_invoke$arity$2 = default_emitter_fn__2;
return default_emitter_fn;
})()
;
io.pedestal.app.filter_changes = (function filter_changes(p__15291,changes){
var map__15295 = p__15291;
var map__15295__$1 = ((cljs.core.seq_QMARK_(map__15295))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15295):map__15295);
var processed_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15295__$1,"\uFDD0:processed-inputs");
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15295__$1,"\uFDD0:mode");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"\uFDD0:always"))
{return changes;
} else
{return cljs.core.remove((function (p__15296){
var vec__15297 = p__15296;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15297,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15297,1,null);
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
}
});
var prefixed = (function prefixed(k,p){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.keyword_QMARK_(p))?cljs.core.PersistentVector.fromArray([p], true):p),k));
});
/**
* Return an emitter function which will emit deltas under the
* provided path prefix.
*/
io.pedestal.app.default_emitter = (function default_emitter(prefix){
return (function (inputs){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var added = io.pedestal.app.filter_changes(inputs,io.pedestal.app.dataflow.added_inputs(inputs));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__15304){
var vec__15305 = p__15304;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15305,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15305,1,null);
var k__$1 = (prefixed.cljs$core$IFn$_invoke$arity$2 ? prefixed.cljs$core$IFn$_invoke$arity$2(k,prefix) : prefixed.call(null,k,prefix));
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",k__$1,"\uFDD0:map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,v], true)], true);
}),added);
})(),(function (){var updates = io.pedestal.app.filter_changes(inputs,io.pedestal.app.dataflow.updated_inputs(inputs));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__15306){
var vec__15307 = p__15306;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15307,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15307,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:value",(prefixed.cljs$core$IFn$_invoke$arity$2 ? prefixed.cljs$core$IFn$_invoke$arity$2(k,prefix) : prefixed.call(null,k,prefix)),v], true);
}),updates);
})(),cljs.core.array_seq([(function (){var removed = io.pedestal.app.filter_changes(inputs,io.pedestal.app.dataflow.removed_inputs(inputs));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__15308){
var vec__15309 = p__15308;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15309,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15309,1,null);
var k__$1 = (prefixed.cljs$core$IFn$_invoke$arity$2 ? prefixed.cljs$core$IFn$_invoke$arity$2(k,prefix) : prefixed.call(null,k,prefix));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"\uFDD0:io.pedestal.app.dataflow/removed"))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,null], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",k__$1], true)], true);
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,v], true)], true);
}
}),removed);
})()], 0)));
});
});
io.pedestal.app.process_app_model_message = (function (){var method_table__9983__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9984__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9985__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9986__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("process-app-model-message",(function (state,flow,message){
return (io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.type.call(null,message));
}),"\uFDD0:default",hierarchy__9987__auto__,method_table__9983__auto__,prefer_table__9984__auto__,method_cache__9985__auto__,cached_hierarchy__9986__auto__));
})();
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:default",(function (state,flow,message){
return state;
}));
io.pedestal.app.refresh_emitters = (function refresh_emitters(state,flow){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (deltas,p__15312){
var map__15313 = p__15312;
var map__15313__$1 = ((cljs.core.seq_QMARK_(map__15313))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15313):map__15313);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15313__$1,"\uFDD0:in");
var init_emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15313__$1,"\uFDD0:init");
var emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15313__$1,"\uFDD0:fn");
var init_emitter__$1 = (function (){var or__3943__auto__ = init_emitter;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return emitter;
}
})();
var dm = (new cljs.core.Keyword("\uFDD0:data-model")).call(null,state);
var inputs = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:new-model",dm,"\uFDD0:old-model",dm,"\uFDD0:input-paths",in$,"\uFDD0:added",in$,"\uFDD0:updated",cljs.core.PersistentHashSet.EMPTY,"\uFDD0:removed",cljs.core.PersistentHashSet.EMPTY,"\uFDD0:message",(new cljs.core.Keyword("\uFDD0:io.pedestal.app/input")).call(null,state)], true);
if(cljs.core.truth_(init_emitter__$1))
{return cljs.core.into(deltas,(init_emitter__$1.cljs$core$IFn$_invoke$arity$1 ? init_emitter__$1.cljs$core$IFn$_invoke$arity$1(inputs) : init_emitter__$1.call(null,inputs)));
} else
{return deltas;
}
}),cljs.core.PersistentVector.EMPTY,(new cljs.core.Keyword("\uFDD0:emit")).call(null,flow));
});
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:navigate",(function (state,flow,message){
var deltas = io.pedestal.app.refresh_emitters(state,flow);
var paths = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths",(new cljs.core.Keyword("\uFDD0:name")).call(null,message)], true));
var old_paths = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/subscriptions")).call(null,state);
var destroy_paths = cljs.core.remove(cljs.core.set(paths),old_paths);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,"\uFDD0:io.pedestal.app/subscriptions",paths,cljs.core.array_seq(["\uFDD0:emit",cljs.core.into(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15314_SHARP_){
return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:navigate-node-destroy",p1__15314_SHARP_], 0));
}),destroy_paths),deltas)], 0));
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:set-focus",(function (state,flow,message){
return (io.pedestal.app.process_app_model_message.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.process_app_model_message.cljs$core$IFn$_invoke$arity$3(state,flow,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,io.pedestal.app.messages.type,"\uFDD0:navigate")) : io.pedestal.app.process_app_model_message.call(null,state,flow,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,io.pedestal.app.messages.type,"\uFDD0:navigate")));
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:subscribe",(function (state,flow,message){
var deltas = io.pedestal.app.refresh_emitters(state,flow);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/subscriptions"], true),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),(new cljs.core.Keyword("\uFDD0:paths")).call(null,message)),"\uFDD0:emit",deltas);
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:unsubscribe",(function (state,flow,message){
var paths = cljs.core.set((new cljs.core.Keyword("\uFDD0:paths")).call(null,message));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/subscriptions"], true),(function (s){
return cljs.core.remove((function (p1__15315_SHARP_){
return cljs.core.contains_QMARK_(paths,p1__15315_SHARP_);
}),s);
})),"\uFDD0:emit",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15316_SHARP_){
return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:navigate-node-destroy",p1__15316_SHARP_], 0));
}),paths));
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:add-named-paths",(function (state,flow,message){
var map__15317 = message;
var map__15317__$1 = ((cljs.core.seq_QMARK_(map__15317))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15317):map__15317);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15317__$1,"\uFDD0:name");
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15317__$1,"\uFDD0:paths");
return cljs.core.assoc_in(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths",name], true),paths);
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:remove-named-paths",(function (state,flow,message){
var map__15318 = message;
var map__15318__$1 = ((cljs.core.seq_QMARK_(map__15318))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15318):map__15318);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15318__$1,"\uFDD0:name");
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths"], true),cljs.core.dissoc,name);
}));
io.pedestal.app.path_starts_with_QMARK_ = (function path_starts_with_QMARK_(path,prefix){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take(cljs.core.count(prefix),path),prefix);
});
io.pedestal.app.special_ops = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:navigate-node-destroy","\uFDD0:node-destroy"], true);
io.pedestal.app.filter_deltas = (function filter_deltas(state,deltas){
var subscriptions = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/subscriptions")).call(null,state);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__15323){
var vec__15324 = p__15323;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,0,null);
var xs = cljs.core.nthnext(vec__15324,1);
var delta = vec__15324;
if(cljs.core.truth_((io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1(op) : io.pedestal.app.special_ops.call(null,op))))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1(op) : io.pedestal.app.special_ops.call(null,op)),xs);
} else
{return delta;
}
}),cljs.core.filter((function (p__15325){
var vec__15326 = p__15325;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15326,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15326,1,null);
var or__3943__auto__ = (io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1(op) : io.pedestal.app.special_ops.call(null,op));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some((function (s){
return io.pedestal.app.path_starts_with_QMARK_(path,s);
}),subscriptions);
}
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.tree.expand_map,deltas)));
});
io.pedestal.app.run_dataflow = (function run_dataflow(state,flow,message){
return io.pedestal.app.dataflow.run(state,flow,message);
});
/**
* Using the given flow, process the given message producing a new
* state.
*/
io.pedestal.app.process_message = (function process_message(state,flow,message){
var old_state = state;
var new_state = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.topic.call(null,message)),io.pedestal.app.messages.app_model))?(io.pedestal.app.process_app_model_message.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.process_app_model_message.cljs$core$IFn$_invoke$arity$3(state,flow,message) : io.pedestal.app.process_app_model_message.call(null,state,flow,message)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.topic.call(null,message)),io.pedestal.app.messages.output))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,"\uFDD0:effect",cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0:payload")).call(null,message)], true)):(("\uFDD0:else")?io.pedestal.app.run_dataflow(state,flow,message):null)));
var new_deltas = io.pedestal.app.filter_deltas(new_state,(new cljs.core.Keyword("\uFDD0:emit")).call(null,new_state));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,"\uFDD0:io.pedestal.app/emitter-deltas",new_deltas),"\uFDD0:emit");
});
io.pedestal.app.transact_one = (function transact_one(state,flow,message){
return io.pedestal.app.process_message(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,"\uFDD0:io.pedestal.app/input",message),"\uFDD0:effect",cljs.core.array_seq(["\uFDD0:continue-inputs"], 0)),flow,message);
});
io.pedestal.app.pre_process = (function pre_process(flow,message){
var map__15328 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,flow).call(null,message);
var map__15328__$1 = ((cljs.core.seq_QMARK_(map__15328))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15328):map__15328);
var out_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15328__$1,"\uFDD0:out");
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15328__$1,"\uFDD0:key");
var pre_fn = io.pedestal.app.dataflow.find_message_transformer((new cljs.core.Keyword("\uFDD0:pre")).call(null,flow),out_path,key);
if(cljs.core.truth_(pre_fn))
{return (pre_fn.cljs$core$IFn$_invoke$arity$1 ? pre_fn.cljs$core$IFn$_invoke$arity$1(message) : pre_fn.call(null,message));
} else
{return cljs.core.PersistentVector.fromArray([message], true);
}
});
io.pedestal.app.receive_input_message = (function receive_input_message(state,flow,input_queue){
return io.pedestal.app.protocols.take_message(input_queue,(function (message){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:pre")).call(null,flow)))
{var seq__15333_15337 = cljs.core.seq(io.pedestal.app.pre_process(flow,message));
var chunk__15334_15338 = null;
var count__15335_15339 = 0;
var i__15336_15340 = 0;
while(true){
if((i__15336_15340 < count__15335_15339))
{var message_15341__$1 = chunk__15334_15338.cljs$core$IIndexed$_nth$arity$2(chunk__15334_15338,i__15336_15340);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,io.pedestal.app.transact_one,flow,message_15341__$1);
{
var G__15342 = seq__15333_15337;
var G__15343 = chunk__15334_15338;
var G__15344 = count__15335_15339;
var G__15345 = (i__15336_15340 + 1);
seq__15333_15337 = G__15342;
chunk__15334_15338 = G__15343;
count__15335_15339 = G__15344;
i__15336_15340 = G__15345;
continue;
}
} else
{var temp__4092__auto___15346 = cljs.core.seq(seq__15333_15337);
if(temp__4092__auto___15346)
{var seq__15333_15347__$1 = temp__4092__auto___15346;
if(cljs.core.chunked_seq_QMARK_(seq__15333_15347__$1))
{var c__9926__auto___15348 = cljs.core.chunk_first(seq__15333_15347__$1);
{
var G__15349 = cljs.core.chunk_rest(seq__15333_15347__$1);
var G__15350 = c__9926__auto___15348;
var G__15351 = cljs.core.count(c__9926__auto___15348);
var G__15352 = 0;
seq__15333_15337 = G__15349;
chunk__15334_15338 = G__15350;
count__15335_15339 = G__15351;
i__15336_15340 = G__15352;
continue;
}
} else
{var message_15353__$1 = cljs.core.first(seq__15333_15347__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,io.pedestal.app.transact_one,flow,message_15353__$1);
{
var G__15354 = cljs.core.next(seq__15333_15347__$1);
var G__15355 = null;
var G__15356 = 0;
var G__15357 = 0;
seq__15333_15337 = G__15354;
chunk__15334_15338 = G__15355;
count__15335_15339 = G__15356;
i__15336_15340 = G__15357;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,io.pedestal.app.transact_one,flow,message);
}
return io.pedestal.app.util.platform.create_timeout(0,(function (){
return receive_input_message(state,flow,input_queue);
}));
}));
});
io.pedestal.app.post_process_effects = (function post_process_effects(flow,message){
var post_fn = cljs.core.some((function (p__15360){
var vec__15361 = p__15360;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15361,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15361,1,null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(message) : pred.call(null,message))))
{return f;
} else
{return null;
}
}),(new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow)));
if(cljs.core.truth_(post_fn))
{return (post_fn.cljs$core$IFn$_invoke$arity$1 ? post_fn.cljs$core$IFn$_invoke$arity$1(message) : post_fn.call(null,message));
} else
{return cljs.core.PersistentVector.fromArray([message], true);
}
});
io.pedestal.app.continue_inputs = (function continue_inputs(app,flow,input_queue){
return cljs.core.add_watch(app,"\uFDD0:continue-inputs-watcher",(function (_,___$1,___$2,new_state){
var seq__15366 = cljs.core.seq((new cljs.core.Keyword("\uFDD0:continue-inputs")).call(null,new_state));
var chunk__15367 = null;
var count__15368 = 0;
var i__15369 = 0;
while(true){
if((i__15369 < count__15368))
{var message = chunk__15367.cljs$core$IIndexed$_nth$arity$2(chunk__15367,i__15369);
io.pedestal.app.protocols.put_message(input_queue,message);
{
var G__15370 = seq__15366;
var G__15371 = chunk__15367;
var G__15372 = count__15368;
var G__15373 = (i__15369 + 1);
seq__15366 = G__15370;
chunk__15367 = G__15371;
count__15368 = G__15372;
i__15369 = G__15373;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__15366);
if(temp__4092__auto__)
{var seq__15366__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15366__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__15366__$1);
{
var G__15374 = cljs.core.chunk_rest(seq__15366__$1);
var G__15375 = c__9926__auto__;
var G__15376 = cljs.core.count(c__9926__auto__);
var G__15377 = 0;
seq__15366 = G__15374;
chunk__15367 = G__15375;
count__15368 = G__15376;
i__15369 = G__15377;
continue;
}
} else
{var message = cljs.core.first(seq__15366__$1);
io.pedestal.app.protocols.put_message(input_queue,message);
{
var G__15378 = cljs.core.next(seq__15366__$1);
var G__15379 = null;
var G__15380 = 0;
var G__15381 = 0;
seq__15366 = G__15378;
chunk__15367 = G__15379;
count__15368 = G__15380;
i__15369 = G__15381;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
io.pedestal.app.send_effects = (function send_effects(app,flow,output_queue){
return cljs.core.add_watch(app,"\uFDD0:effects-watcher",(function (_,___$1,___$2,new_state){
var seq__15394 = cljs.core.seq((new cljs.core.Keyword("\uFDD0:effect")).call(null,new_state));
var chunk__15395 = null;
var count__15396 = 0;
var i__15397 = 0;
while(true){
if((i__15397 < count__15396))
{var message = chunk__15395.cljs$core$IIndexed$_nth$arity$2(chunk__15395,i__15397);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__15398_15406 = cljs.core.seq(io.pedestal.app.post_process_effects(flow,message));
var chunk__15399_15407 = null;
var count__15400_15408 = 0;
var i__15401_15409 = 0;
while(true){
if((i__15401_15409 < count__15400_15408))
{var message_15410__$1 = chunk__15399_15407.cljs$core$IIndexed$_nth$arity$2(chunk__15399_15407,i__15401_15409);
io.pedestal.app.protocols.put_message(output_queue,message_15410__$1);
{
var G__15411 = seq__15398_15406;
var G__15412 = chunk__15399_15407;
var G__15413 = count__15400_15408;
var G__15414 = (i__15401_15409 + 1);
seq__15398_15406 = G__15411;
chunk__15399_15407 = G__15412;
count__15400_15408 = G__15413;
i__15401_15409 = G__15414;
continue;
}
} else
{var temp__4092__auto___15415 = cljs.core.seq(seq__15398_15406);
if(temp__4092__auto___15415)
{var seq__15398_15416__$1 = temp__4092__auto___15415;
if(cljs.core.chunked_seq_QMARK_(seq__15398_15416__$1))
{var c__9926__auto___15417 = cljs.core.chunk_first(seq__15398_15416__$1);
{
var G__15418 = cljs.core.chunk_rest(seq__15398_15416__$1);
var G__15419 = c__9926__auto___15417;
var G__15420 = cljs.core.count(c__9926__auto___15417);
var G__15421 = 0;
seq__15398_15406 = G__15418;
chunk__15399_15407 = G__15419;
count__15400_15408 = G__15420;
i__15401_15409 = G__15421;
continue;
}
} else
{var message_15422__$1 = cljs.core.first(seq__15398_15416__$1);
io.pedestal.app.protocols.put_message(output_queue,message_15422__$1);
{
var G__15423 = cljs.core.next(seq__15398_15416__$1);
var G__15424 = null;
var G__15425 = 0;
var G__15426 = 0;
seq__15398_15406 = G__15423;
chunk__15399_15407 = G__15424;
count__15400_15408 = G__15425;
i__15401_15409 = G__15426;
continue;
}
}
} else
{}
}
break;
}
} else
{io.pedestal.app.protocols.put_message(output_queue,message);
}
{
var G__15427 = seq__15394;
var G__15428 = chunk__15395;
var G__15429 = count__15396;
var G__15430 = (i__15397 + 1);
seq__15394 = G__15427;
chunk__15395 = G__15428;
count__15396 = G__15429;
i__15397 = G__15430;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__15394);
if(temp__4092__auto__)
{var seq__15394__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15394__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__15394__$1);
{
var G__15431 = cljs.core.chunk_rest(seq__15394__$1);
var G__15432 = c__9926__auto__;
var G__15433 = cljs.core.count(c__9926__auto__);
var G__15434 = 0;
seq__15394 = G__15431;
chunk__15395 = G__15432;
count__15396 = G__15433;
i__15397 = G__15434;
continue;
}
} else
{var message = cljs.core.first(seq__15394__$1);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__15402_15435 = cljs.core.seq(io.pedestal.app.post_process_effects(flow,message));
var chunk__15403_15436 = null;
var count__15404_15437 = 0;
var i__15405_15438 = 0;
while(true){
if((i__15405_15438 < count__15404_15437))
{var message_15439__$1 = chunk__15403_15436.cljs$core$IIndexed$_nth$arity$2(chunk__15403_15436,i__15405_15438);
io.pedestal.app.protocols.put_message(output_queue,message_15439__$1);
{
var G__15440 = seq__15402_15435;
var G__15441 = chunk__15403_15436;
var G__15442 = count__15404_15437;
var G__15443 = (i__15405_15438 + 1);
seq__15402_15435 = G__15440;
chunk__15403_15436 = G__15441;
count__15404_15437 = G__15442;
i__15405_15438 = G__15443;
continue;
}
} else
{var temp__4092__auto___15444__$1 = cljs.core.seq(seq__15402_15435);
if(temp__4092__auto___15444__$1)
{var seq__15402_15445__$1 = temp__4092__auto___15444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15402_15445__$1))
{var c__9926__auto___15446 = cljs.core.chunk_first(seq__15402_15445__$1);
{
var G__15447 = cljs.core.chunk_rest(seq__15402_15445__$1);
var G__15448 = c__9926__auto___15446;
var G__15449 = cljs.core.count(c__9926__auto___15446);
var G__15450 = 0;
seq__15402_15435 = G__15447;
chunk__15403_15436 = G__15448;
count__15404_15437 = G__15449;
i__15405_15438 = G__15450;
continue;
}
} else
{var message_15451__$1 = cljs.core.first(seq__15402_15445__$1);
io.pedestal.app.protocols.put_message(output_queue,message_15451__$1);
{
var G__15452 = cljs.core.next(seq__15402_15445__$1);
var G__15453 = null;
var G__15454 = 0;
var G__15455 = 0;
seq__15402_15435 = G__15452;
chunk__15403_15436 = G__15453;
count__15404_15437 = G__15454;
i__15405_15438 = G__15455;
continue;
}
}
} else
{}
}
break;
}
} else
{io.pedestal.app.protocols.put_message(output_queue,message);
}
{
var G__15456 = cljs.core.next(seq__15394__$1);
var G__15457 = null;
var G__15458 = 0;
var G__15459 = 0;
seq__15394 = G__15456;
chunk__15395 = G__15457;
count__15396 = G__15458;
i__15397 = G__15459;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
io.pedestal.app.post_process_deltas = (function post_process_deltas(flow,deltas){
var post_processors = (new cljs.core.Keyword("\uFDD0:app-model")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__15462){
var vec__15463 = p__15462;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15463,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15463,1,null);
var delta = vec__15463;
var temp__4090__auto__ = io.pedestal.app.dataflow.find_message_transformer(post_processors,path,op);
if(cljs.core.truth_(temp__4090__auto__))
{var post_fn = temp__4090__auto__;
return cljs.core.into(acc,(post_fn.cljs$core$IFn$_invoke$arity$1 ? post_fn.cljs$core$IFn$_invoke$arity$1(delta) : post_fn.call(null,delta)));
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,delta);
}
}),cljs.core.PersistentVector.EMPTY,deltas);
});
io.pedestal.app.send_app_model_deltas = (function send_app_model_deltas(app,flow,app_model_queue){
return cljs.core.add_watch(app,"\uFDD0:app-model-delta-watcher",(function (_,___$1,old_state,new_state){
var deltas = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/emitter-deltas")).call(null,new_state);
if(!((function (){var or__3943__auto__ = cljs.core.empty_QMARK_(deltas);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:io.pedestal.app/emitter-deltas")).call(null,old_state),deltas);
}
})()))
{var deltas__$1 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:app-model")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow)))?io.pedestal.app.post_process_deltas(flow,deltas):deltas);
return io.pedestal.app.protocols.put_message(app_model_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:deltas","\uFDD0:deltas",deltas__$1], true));
} else
{return null;
}
}));
});
io.pedestal.app.ensure_default_emitter = (function ensure_default_emitter(emit){
if(cljs.core.empty_QMARK_(emit))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:*"], true),null], true),io.pedestal.app.default_emitter(cljs.core.PersistentVector.EMPTY)], true)], true);
} else
{return emit;
}
});
io.pedestal.app.ensure_input_adapter = (function ensure_input_adapter(input_adapter){
if(cljs.core.not(input_adapter))
{return (function (m){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",(io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1(m) : io.pedestal.app.messages.type.call(null,m)),"\uFDD0:out",(io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1(m) : io.pedestal.app.messages.topic.call(null,m))], true);
});
} else
{return input_adapter;
}
});
io.pedestal.app.rekey_transforms = (function rekey_transforms(transforms){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15464_SHARP_){
if(cljs.core.map_QMARK_(p1__15464_SHARP_))
{return clojure.set.rename_keys(p1__15464_SHARP_,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:key",io.pedestal.app.messages.topic,"\uFDD0:out"], true));
} else
{return p1__15464_SHARP_;
}
}),transforms);
});
io.pedestal.app.standardize_pre_if_exists = (function standardize_pre_if_exists(description){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:pre")).call(null,description)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(description,cljs.core.PersistentVector.fromArray(["\uFDD0:pre"], true),io.pedestal.app.dataflow.transform_maps);
} else
{return description;
}
});
io.pedestal.app.standardize_post_app_model_if_exists = (function standardize_post_app_model_if_exists(description){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:app-model")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,description))))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(description,cljs.core.PersistentVector.fromArray(["\uFDD0:post","\uFDD0:app-model"], true),io.pedestal.app.dataflow.transform_maps);
} else
{return description;
}
});
io.pedestal.app.create_start_messages = (function create_start_messages(focus){
return cljs.core.into(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__15469){
var vec__15470 = p__15469;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15470,0,null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15470,1,null);
return cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:add-named-paths","\uFDD0:paths",paths,"\uFDD0:name",name], true);
}),cljs.core.remove((function (p__15471){
var vec__15472 = p__15471;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15472,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15472,1,null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"\uFDD0:default");
}),focus)),(function (){var temp__4092__auto__ = (new cljs.core.Keyword("\uFDD0:default")).call(null,focus);
if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:navigate","\uFDD0:name",n], true)], true);
} else
{return null;
}
})());
});
io.pedestal.app.begin = (function() {
var begin = null;
var begin__1 = (function (app){
return begin.cljs$core$IFn$_invoke$arity$2(app,null);
});
var begin__2 = (function (app,start_messages){
var map__15478 = app;
var map__15478__$1 = ((cljs.core.seq_QMARK_(map__15478))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15478):map__15478);
var default_emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,"\uFDD0:default-emitter");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,"\uFDD0:dataflow");
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,"\uFDD0:description");
var start_messages__$1 = (cljs.core.truth_(start_messages)?start_messages:(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:focus")).call(null,description))?io.pedestal.app.create_start_messages((new cljs.core.Keyword("\uFDD0:focus")).call(null,description)):(("\uFDD0:else")?cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:subscribe","\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true)], true)], true):null)));
var init_messages = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2("\uFDD0:init",(new cljs.core.Keyword("\uFDD0:transform")).call(null,description)));
var seq__15479 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(start_messages__$1,init_messages));
var chunk__15480 = null;
var count__15481 = 0;
var i__15482 = 0;
while(true){
if((i__15482 < count__15481))
{var message = chunk__15480.cljs$core$IIndexed$_nth$arity$2(chunk__15480,i__15482);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__15483 = seq__15479;
var G__15484 = chunk__15480;
var G__15485 = count__15481;
var G__15486 = (i__15482 + 1);
seq__15479 = G__15483;
chunk__15480 = G__15484;
count__15481 = G__15485;
i__15482 = G__15486;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__15479);
if(temp__4092__auto__)
{var seq__15479__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15479__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__15479__$1);
{
var G__15487 = cljs.core.chunk_rest(seq__15479__$1);
var G__15488 = c__9926__auto__;
var G__15489 = cljs.core.count(c__9926__auto__);
var G__15490 = 0;
seq__15479 = G__15487;
chunk__15480 = G__15488;
count__15481 = G__15489;
i__15482 = G__15490;
continue;
}
} else
{var message = cljs.core.first(seq__15479__$1);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__15491 = cljs.core.next(seq__15479__$1);
var G__15492 = null;
var G__15493 = 0;
var G__15494 = 0;
seq__15479 = G__15491;
chunk__15480 = G__15492;
count__15481 = G__15493;
i__15482 = G__15494;
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
begin = function(app,start_messages){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,start_messages);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
io.pedestal.app.consume_output_queue = (function consume_output_queue(out_queue,in_queue,services_fn){
return io.pedestal.app.protocols.take_message(out_queue,(function (message){
(services_fn.cljs$core$IFn$_invoke$arity$2 ? services_fn.cljs$core$IFn$_invoke$arity$2(message,in_queue) : services_fn.call(null,message,in_queue));
return consume_output_queue(out_queue,in_queue,services_fn);
}));
});
io.pedestal.app.consume_output = (function consume_output(app,services_fn){
return io.pedestal.app.consume_output_queue((new cljs.core.Keyword("\uFDD0:output")).call(null,app),(new cljs.core.Keyword("\uFDD0:input")).call(null,app),services_fn);
});
io.pedestal.app.consume_effects = (function consume_effects(app,services_fn){
return io.pedestal.app.consume_output(app,services_fn);
});
io.pedestal.app.run_BANG_ = (function run_BANG_(app,script){
if((function (){var or__3943__auto__ = cljs.core.vector_QMARK_(script);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.list_QMARK_(script);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The passed script must be a vector or list"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-1302740715,null),new cljs.core.Symbol(null,"script","script",1746750084,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1537549030,null),new cljs.core.Symbol(null,"script","script",1746750084,null)))], 0)))].join('')));
}
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,script))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Each element of the passed script must be a map"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"script","script",1746750084,null))], 0)))].join('')));
}
var seq__15499 = cljs.core.seq(script);
var chunk__15500 = null;
var count__15501 = 0;
var i__15502 = 0;
while(true){
if((i__15502 < count__15501))
{var message = chunk__15500.cljs$core$IIndexed$_nth$arity$2(chunk__15500,i__15502);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__15503 = seq__15499;
var G__15504 = chunk__15500;
var G__15505 = count__15501;
var G__15506 = (i__15502 + 1);
seq__15499 = G__15503;
chunk__15500 = G__15504;
count__15501 = G__15505;
i__15502 = G__15506;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__15499);
if(temp__4092__auto__)
{var seq__15499__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15499__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__15499__$1);
{
var G__15507 = cljs.core.chunk_rest(seq__15499__$1);
var G__15508 = c__9926__auto__;
var G__15509 = cljs.core.count(c__9926__auto__);
var G__15510 = 0;
seq__15499 = G__15507;
chunk__15500 = G__15508;
count__15501 = G__15509;
i__15502 = G__15510;
continue;
}
} else
{var message = cljs.core.first(seq__15499__$1);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__15511 = cljs.core.next(seq__15499__$1);
var G__15512 = null;
var G__15513 = 0;
var G__15514 = 0;
seq__15499 = G__15511;
chunk__15500 = G__15512;
count__15501 = G__15513;
i__15502 = G__15514;
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
io.pedestal.app.adapt_description = (function (){var method_table__9983__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9984__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9985__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9986__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("adapt-description",(function (description){
return (new cljs.core.Keyword("\uFDD0:version")).call(null,description);
}),"\uFDD0:default",hierarchy__9987__auto__,method_table__9983__auto__,prefer_table__9984__auto__,method_cache__9985__auto__,cached_hierarchy__9986__auto__));
})();
io.pedestal.app.adapt_description.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.adapt_description,2,(function (description){
return description;
}));
io.pedestal.app.adapt_description.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.adapt_description,1,(function (description){
return io.pedestal.app.util.adapters.adapt_v1_to_v2(description);
}));
io.pedestal.app.adapt_description.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.adapt_description,"\uFDD0:default",(function (description){
io.pedestal.app.util.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:adapt-description",[cljs.core.str("WARNING!! Converting dataflow description from version 1 to 2.")].join('')], 0));
return io.pedestal.app.util.adapters.adapt_v1_to_v2(description);
}));
io.pedestal.app.build = (function build(description){
var app_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-model",cljs.core.PersistentArrayMap.EMPTY], true));
var description__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.standardize_post_app_model_if_exists(io.pedestal.app.standardize_pre_if_exists((io.pedestal.app.adapt_description.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.adapt_description.cljs$core$IFn$_invoke$arity$1(description) : io.pedestal.app.adapt_description.call(null,description)))),cljs.core.PersistentVector.fromArray(["\uFDD0:emit"], true),io.pedestal.app.ensure_default_emitter),cljs.core.PersistentVector.fromArray(["\uFDD0:input-adapter"], true),io.pedestal.app.ensure_input_adapter),cljs.core.PersistentVector.fromArray(["\uFDD0:transform"], true),io.pedestal.app.rekey_transforms);
var dataflow = io.pedestal.app.dataflow.build(description__$1);
var input_queue = io.pedestal.app.queue.queue("\uFDD0:input");
var output_queue = io.pedestal.app.queue.queue("\uFDD0:output");
var app_model_queue = io.pedestal.app.queue.queue("\uFDD0:app-model");
io.pedestal.app.receive_input_message(app_atom,dataflow,input_queue);
io.pedestal.app.send_effects(app_atom,dataflow,output_queue);
io.pedestal.app.continue_inputs(app_atom,dataflow,input_queue);
io.pedestal.app.send_app_model_deltas(app_atom,dataflow,app_model_queue);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:state",app_atom,"\uFDD0:description",description__$1,"\uFDD0:dataflow",dataflow,"\uFDD0:input",input_queue,"\uFDD0:output",output_queue,"\uFDD0:app-model",app_model_queue], true);
});
