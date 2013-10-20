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
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__154313){
var vec__154314 = p__154313;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154314,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154314,1,null);
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
io.pedestal.app.filter_changes = (function filter_changes(p__154315,changes){
var map__154319 = p__154315;
var map__154319__$1 = ((cljs.core.seq_QMARK_(map__154319))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154319):map__154319);
var processed_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154319__$1,"\uFDD0:processed-inputs");
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154319__$1,"\uFDD0:mode");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"\uFDD0:always"))
{return changes;
} else
{return cljs.core.remove((function (p__154320){
var vec__154321 = p__154320;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154321,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154321,1,null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__154328){
var vec__154329 = p__154328;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154329,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154329,1,null);
var k__$1 = (prefixed.cljs$core$IFn$_invoke$arity$2 ? prefixed.cljs$core$IFn$_invoke$arity$2(k,prefix) : prefixed.call(null,k,prefix));
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",k__$1,"\uFDD0:map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,v], true)], true);
}),added);
})(),(function (){var updates = io.pedestal.app.filter_changes(inputs,io.pedestal.app.dataflow.updated_inputs(inputs));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__154330){
var vec__154331 = p__154330;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154331,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154331,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:value",(prefixed.cljs$core$IFn$_invoke$arity$2 ? prefixed.cljs$core$IFn$_invoke$arity$2(k,prefix) : prefixed.call(null,k,prefix)),v], true);
}),updates);
})(),cljs.core.array_seq([(function (){var removed = io.pedestal.app.filter_changes(inputs,io.pedestal.app.dataflow.removed_inputs(inputs));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__154332){
var vec__154333 = p__154332;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154333,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154333,1,null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (deltas,p__154336){
var map__154337 = p__154336;
var map__154337__$1 = ((cljs.core.seq_QMARK_(map__154337))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154337):map__154337);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154337__$1,"\uFDD0:in");
var init_emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154337__$1,"\uFDD0:init");
var emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154337__$1,"\uFDD0:fn");
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,"\uFDD0:io.pedestal.app/subscriptions",paths,cljs.core.array_seq(["\uFDD0:emit",cljs.core.into(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__154338_SHARP_){
return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:navigate-node-destroy",p1__154338_SHARP_], 0));
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
return cljs.core.remove((function (p1__154339_SHARP_){
return cljs.core.contains_QMARK_(paths,p1__154339_SHARP_);
}),s);
})),"\uFDD0:emit",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__154340_SHARP_){
return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:navigate-node-destroy",p1__154340_SHARP_], 0));
}),paths));
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:add-named-paths",(function (state,flow,message){
var map__154341 = message;
var map__154341__$1 = ((cljs.core.seq_QMARK_(map__154341))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154341):map__154341);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154341__$1,"\uFDD0:name");
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154341__$1,"\uFDD0:paths");
return cljs.core.assoc_in(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths",name], true),paths);
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:remove-named-paths",(function (state,flow,message){
var map__154342 = message;
var map__154342__$1 = ((cljs.core.seq_QMARK_(map__154342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154342):map__154342);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154342__$1,"\uFDD0:name");
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths"], true),cljs.core.dissoc,name);
}));
io.pedestal.app.path_starts_with_QMARK_ = (function path_starts_with_QMARK_(path,prefix){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take(cljs.core.count(prefix),path),prefix);
});
io.pedestal.app.special_ops = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:navigate-node-destroy","\uFDD0:node-destroy"], true);
io.pedestal.app.filter_deltas = (function filter_deltas(state,deltas){
var subscriptions = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/subscriptions")).call(null,state);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__154347){
var vec__154348 = p__154347;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154348,0,null);
var xs = cljs.core.nthnext(vec__154348,1);
var delta = vec__154348;
if(cljs.core.truth_((io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1(op) : io.pedestal.app.special_ops.call(null,op))))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1(op) : io.pedestal.app.special_ops.call(null,op)),xs);
} else
{return delta;
}
}),cljs.core.filter((function (p__154349){
var vec__154350 = p__154349;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154350,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154350,1,null);
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
var map__154352 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,flow).call(null,message);
var map__154352__$1 = ((cljs.core.seq_QMARK_(map__154352))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154352):map__154352);
var out_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154352__$1,"\uFDD0:out");
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154352__$1,"\uFDD0:key");
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
{var seq__154357_154361 = cljs.core.seq(io.pedestal.app.pre_process(flow,message));
var chunk__154358_154362 = null;
var count__154359_154363 = 0;
var i__154360_154364 = 0;
while(true){
if((i__154360_154364 < count__154359_154363))
{var message_154365__$1 = chunk__154358_154362.cljs$core$IIndexed$_nth$arity$2(chunk__154358_154362,i__154360_154364);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,io.pedestal.app.transact_one,flow,message_154365__$1);
{
var G__154366 = seq__154357_154361;
var G__154367 = chunk__154358_154362;
var G__154368 = count__154359_154363;
var G__154369 = (i__154360_154364 + 1);
seq__154357_154361 = G__154366;
chunk__154358_154362 = G__154367;
count__154359_154363 = G__154368;
i__154360_154364 = G__154369;
continue;
}
} else
{var temp__4092__auto___154370 = cljs.core.seq(seq__154357_154361);
if(temp__4092__auto___154370)
{var seq__154357_154371__$1 = temp__4092__auto___154370;
if(cljs.core.chunked_seq_QMARK_(seq__154357_154371__$1))
{var c__9926__auto___154372 = cljs.core.chunk_first(seq__154357_154371__$1);
{
var G__154373 = cljs.core.chunk_rest(seq__154357_154371__$1);
var G__154374 = c__9926__auto___154372;
var G__154375 = cljs.core.count(c__9926__auto___154372);
var G__154376 = 0;
seq__154357_154361 = G__154373;
chunk__154358_154362 = G__154374;
count__154359_154363 = G__154375;
i__154360_154364 = G__154376;
continue;
}
} else
{var message_154377__$1 = cljs.core.first(seq__154357_154371__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,io.pedestal.app.transact_one,flow,message_154377__$1);
{
var G__154378 = cljs.core.next(seq__154357_154371__$1);
var G__154379 = null;
var G__154380 = 0;
var G__154381 = 0;
seq__154357_154361 = G__154378;
chunk__154358_154362 = G__154379;
count__154359_154363 = G__154380;
i__154360_154364 = G__154381;
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
var post_fn = cljs.core.some((function (p__154384){
var vec__154385 = p__154384;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154385,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154385,1,null);
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
var seq__154390 = cljs.core.seq((new cljs.core.Keyword("\uFDD0:continue-inputs")).call(null,new_state));
var chunk__154391 = null;
var count__154392 = 0;
var i__154393 = 0;
while(true){
if((i__154393 < count__154392))
{var message = chunk__154391.cljs$core$IIndexed$_nth$arity$2(chunk__154391,i__154393);
io.pedestal.app.protocols.put_message(input_queue,message);
{
var G__154394 = seq__154390;
var G__154395 = chunk__154391;
var G__154396 = count__154392;
var G__154397 = (i__154393 + 1);
seq__154390 = G__154394;
chunk__154391 = G__154395;
count__154392 = G__154396;
i__154393 = G__154397;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__154390);
if(temp__4092__auto__)
{var seq__154390__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__154390__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__154390__$1);
{
var G__154398 = cljs.core.chunk_rest(seq__154390__$1);
var G__154399 = c__9926__auto__;
var G__154400 = cljs.core.count(c__9926__auto__);
var G__154401 = 0;
seq__154390 = G__154398;
chunk__154391 = G__154399;
count__154392 = G__154400;
i__154393 = G__154401;
continue;
}
} else
{var message = cljs.core.first(seq__154390__$1);
io.pedestal.app.protocols.put_message(input_queue,message);
{
var G__154402 = cljs.core.next(seq__154390__$1);
var G__154403 = null;
var G__154404 = 0;
var G__154405 = 0;
seq__154390 = G__154402;
chunk__154391 = G__154403;
count__154392 = G__154404;
i__154393 = G__154405;
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
var seq__154418 = cljs.core.seq((new cljs.core.Keyword("\uFDD0:effect")).call(null,new_state));
var chunk__154419 = null;
var count__154420 = 0;
var i__154421 = 0;
while(true){
if((i__154421 < count__154420))
{var message = chunk__154419.cljs$core$IIndexed$_nth$arity$2(chunk__154419,i__154421);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__154422_154430 = cljs.core.seq(io.pedestal.app.post_process_effects(flow,message));
var chunk__154423_154431 = null;
var count__154424_154432 = 0;
var i__154425_154433 = 0;
while(true){
if((i__154425_154433 < count__154424_154432))
{var message_154434__$1 = chunk__154423_154431.cljs$core$IIndexed$_nth$arity$2(chunk__154423_154431,i__154425_154433);
io.pedestal.app.protocols.put_message(output_queue,message_154434__$1);
{
var G__154435 = seq__154422_154430;
var G__154436 = chunk__154423_154431;
var G__154437 = count__154424_154432;
var G__154438 = (i__154425_154433 + 1);
seq__154422_154430 = G__154435;
chunk__154423_154431 = G__154436;
count__154424_154432 = G__154437;
i__154425_154433 = G__154438;
continue;
}
} else
{var temp__4092__auto___154439 = cljs.core.seq(seq__154422_154430);
if(temp__4092__auto___154439)
{var seq__154422_154440__$1 = temp__4092__auto___154439;
if(cljs.core.chunked_seq_QMARK_(seq__154422_154440__$1))
{var c__9926__auto___154441 = cljs.core.chunk_first(seq__154422_154440__$1);
{
var G__154442 = cljs.core.chunk_rest(seq__154422_154440__$1);
var G__154443 = c__9926__auto___154441;
var G__154444 = cljs.core.count(c__9926__auto___154441);
var G__154445 = 0;
seq__154422_154430 = G__154442;
chunk__154423_154431 = G__154443;
count__154424_154432 = G__154444;
i__154425_154433 = G__154445;
continue;
}
} else
{var message_154446__$1 = cljs.core.first(seq__154422_154440__$1);
io.pedestal.app.protocols.put_message(output_queue,message_154446__$1);
{
var G__154447 = cljs.core.next(seq__154422_154440__$1);
var G__154448 = null;
var G__154449 = 0;
var G__154450 = 0;
seq__154422_154430 = G__154447;
chunk__154423_154431 = G__154448;
count__154424_154432 = G__154449;
i__154425_154433 = G__154450;
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
var G__154451 = seq__154418;
var G__154452 = chunk__154419;
var G__154453 = count__154420;
var G__154454 = (i__154421 + 1);
seq__154418 = G__154451;
chunk__154419 = G__154452;
count__154420 = G__154453;
i__154421 = G__154454;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__154418);
if(temp__4092__auto__)
{var seq__154418__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__154418__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__154418__$1);
{
var G__154455 = cljs.core.chunk_rest(seq__154418__$1);
var G__154456 = c__9926__auto__;
var G__154457 = cljs.core.count(c__9926__auto__);
var G__154458 = 0;
seq__154418 = G__154455;
chunk__154419 = G__154456;
count__154420 = G__154457;
i__154421 = G__154458;
continue;
}
} else
{var message = cljs.core.first(seq__154418__$1);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__154426_154459 = cljs.core.seq(io.pedestal.app.post_process_effects(flow,message));
var chunk__154427_154460 = null;
var count__154428_154461 = 0;
var i__154429_154462 = 0;
while(true){
if((i__154429_154462 < count__154428_154461))
{var message_154463__$1 = chunk__154427_154460.cljs$core$IIndexed$_nth$arity$2(chunk__154427_154460,i__154429_154462);
io.pedestal.app.protocols.put_message(output_queue,message_154463__$1);
{
var G__154464 = seq__154426_154459;
var G__154465 = chunk__154427_154460;
var G__154466 = count__154428_154461;
var G__154467 = (i__154429_154462 + 1);
seq__154426_154459 = G__154464;
chunk__154427_154460 = G__154465;
count__154428_154461 = G__154466;
i__154429_154462 = G__154467;
continue;
}
} else
{var temp__4092__auto___154468__$1 = cljs.core.seq(seq__154426_154459);
if(temp__4092__auto___154468__$1)
{var seq__154426_154469__$1 = temp__4092__auto___154468__$1;
if(cljs.core.chunked_seq_QMARK_(seq__154426_154469__$1))
{var c__9926__auto___154470 = cljs.core.chunk_first(seq__154426_154469__$1);
{
var G__154471 = cljs.core.chunk_rest(seq__154426_154469__$1);
var G__154472 = c__9926__auto___154470;
var G__154473 = cljs.core.count(c__9926__auto___154470);
var G__154474 = 0;
seq__154426_154459 = G__154471;
chunk__154427_154460 = G__154472;
count__154428_154461 = G__154473;
i__154429_154462 = G__154474;
continue;
}
} else
{var message_154475__$1 = cljs.core.first(seq__154426_154469__$1);
io.pedestal.app.protocols.put_message(output_queue,message_154475__$1);
{
var G__154476 = cljs.core.next(seq__154426_154469__$1);
var G__154477 = null;
var G__154478 = 0;
var G__154479 = 0;
seq__154426_154459 = G__154476;
chunk__154427_154460 = G__154477;
count__154428_154461 = G__154478;
i__154429_154462 = G__154479;
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
var G__154480 = cljs.core.next(seq__154418__$1);
var G__154481 = null;
var G__154482 = 0;
var G__154483 = 0;
seq__154418 = G__154480;
chunk__154419 = G__154481;
count__154420 = G__154482;
i__154421 = G__154483;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__154486){
var vec__154487 = p__154486;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154487,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154487,1,null);
var delta = vec__154487;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__154488_SHARP_){
if(cljs.core.map_QMARK_(p1__154488_SHARP_))
{return clojure.set.rename_keys(p1__154488_SHARP_,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:key",io.pedestal.app.messages.topic,"\uFDD0:out"], true));
} else
{return p1__154488_SHARP_;
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
return cljs.core.into(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__154493){
var vec__154494 = p__154493;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154494,0,null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154494,1,null);
return cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:add-named-paths","\uFDD0:paths",paths,"\uFDD0:name",name], true);
}),cljs.core.remove((function (p__154495){
var vec__154496 = p__154495;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154496,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154496,1,null);
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
var map__154502 = app;
var map__154502__$1 = ((cljs.core.seq_QMARK_(map__154502))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154502):map__154502);
var default_emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154502__$1,"\uFDD0:default-emitter");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154502__$1,"\uFDD0:dataflow");
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154502__$1,"\uFDD0:description");
var start_messages__$1 = (cljs.core.truth_(start_messages)?start_messages:(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:focus")).call(null,description))?io.pedestal.app.create_start_messages((new cljs.core.Keyword("\uFDD0:focus")).call(null,description)):(("\uFDD0:else")?cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:subscribe","\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true)], true)], true):null)));
var init_messages = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2("\uFDD0:init",(new cljs.core.Keyword("\uFDD0:transform")).call(null,description)));
var seq__154503 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(start_messages__$1,init_messages));
var chunk__154504 = null;
var count__154505 = 0;
var i__154506 = 0;
while(true){
if((i__154506 < count__154505))
{var message = chunk__154504.cljs$core$IIndexed$_nth$arity$2(chunk__154504,i__154506);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__154507 = seq__154503;
var G__154508 = chunk__154504;
var G__154509 = count__154505;
var G__154510 = (i__154506 + 1);
seq__154503 = G__154507;
chunk__154504 = G__154508;
count__154505 = G__154509;
i__154506 = G__154510;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__154503);
if(temp__4092__auto__)
{var seq__154503__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__154503__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__154503__$1);
{
var G__154511 = cljs.core.chunk_rest(seq__154503__$1);
var G__154512 = c__9926__auto__;
var G__154513 = cljs.core.count(c__9926__auto__);
var G__154514 = 0;
seq__154503 = G__154511;
chunk__154504 = G__154512;
count__154505 = G__154513;
i__154506 = G__154514;
continue;
}
} else
{var message = cljs.core.first(seq__154503__$1);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__154515 = cljs.core.next(seq__154503__$1);
var G__154516 = null;
var G__154517 = 0;
var G__154518 = 0;
seq__154503 = G__154515;
chunk__154504 = G__154516;
count__154505 = G__154517;
i__154506 = G__154518;
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
var seq__154523 = cljs.core.seq(script);
var chunk__154524 = null;
var count__154525 = 0;
var i__154526 = 0;
while(true){
if((i__154526 < count__154525))
{var message = chunk__154524.cljs$core$IIndexed$_nth$arity$2(chunk__154524,i__154526);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__154527 = seq__154523;
var G__154528 = chunk__154524;
var G__154529 = count__154525;
var G__154530 = (i__154526 + 1);
seq__154523 = G__154527;
chunk__154524 = G__154528;
count__154525 = G__154529;
i__154526 = G__154530;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__154523);
if(temp__4092__auto__)
{var seq__154523__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__154523__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__154523__$1);
{
var G__154531 = cljs.core.chunk_rest(seq__154523__$1);
var G__154532 = c__9926__auto__;
var G__154533 = cljs.core.count(c__9926__auto__);
var G__154534 = 0;
seq__154523 = G__154531;
chunk__154524 = G__154532;
count__154525 = G__154533;
i__154526 = G__154534;
continue;
}
} else
{var message = cljs.core.first(seq__154523__$1);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__154535 = cljs.core.next(seq__154523__$1);
var G__154536 = null;
var G__154537 = 0;
var G__154538 = 0;
seq__154523 = G__154535;
chunk__154524 = G__154536;
count__154525 = G__154537;
i__154526 = G__154538;
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
