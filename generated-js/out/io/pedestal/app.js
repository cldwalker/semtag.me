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
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__10579){
var vec__10580 = p__10579;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10580,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10580,1,null);
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
io.pedestal.app.filter_changes = (function filter_changes(p__10581,changes){
var map__10585 = p__10581;
var map__10585__$1 = ((cljs.core.seq_QMARK_(map__10585))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10585):map__10585);
var processed_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10585__$1,"\uFDD0:processed-inputs");
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10585__$1,"\uFDD0:mode");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"\uFDD0:always"))
{return changes;
} else
{return cljs.core.remove((function (p__10586){
var vec__10587 = p__10586;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10587,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10587,1,null);
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__10594){
var vec__10595 = p__10594;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10595,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10595,1,null);
var k__$1 = (prefixed.cljs$core$IFn$_invoke$arity$2 ? prefixed.cljs$core$IFn$_invoke$arity$2(k,prefix) : prefixed.call(null,k,prefix));
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",k__$1,"\uFDD0:map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,v], true)], true);
}),added);
})(),(function (){var updates = io.pedestal.app.filter_changes(inputs,io.pedestal.app.dataflow.updated_inputs(inputs));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__10596){
var vec__10597 = p__10596;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10597,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10597,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:value",(prefixed.cljs$core$IFn$_invoke$arity$2 ? prefixed.cljs$core$IFn$_invoke$arity$2(k,prefix) : prefixed.call(null,k,prefix)),v], true);
}),updates);
})(),cljs.core.array_seq([(function (){var removed = io.pedestal.app.filter_changes(inputs,io.pedestal.app.dataflow.removed_inputs(inputs));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p__10598){
var vec__10599 = p__10598;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10599,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10599,1,null);
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
io.pedestal.app.process_app_model_message = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("process-app-model-message",(function (state,flow,message){
return (io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.type.call(null,message));
}),"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
})();
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:default",(function (state,flow,message){
return state;
}));
io.pedestal.app.refresh_emitters = (function refresh_emitters(state,flow){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (deltas,p__10602){
var map__10603 = p__10602;
var map__10603__$1 = ((cljs.core.seq_QMARK_(map__10603))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10603):map__10603);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10603__$1,"\uFDD0:in");
var init_emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10603__$1,"\uFDD0:init");
var emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10603__$1,"\uFDD0:fn");
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,"\uFDD0:io.pedestal.app/subscriptions",paths,cljs.core.array_seq(["\uFDD0:emit",cljs.core.into(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10604_SHARP_){
return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:navigate-node-destroy",p1__10604_SHARP_], 0));
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
return cljs.core.remove((function (p1__10605_SHARP_){
return cljs.core.contains_QMARK_(paths,p1__10605_SHARP_);
}),s);
})),"\uFDD0:emit",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10606_SHARP_){
return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:navigate-node-destroy",p1__10606_SHARP_], 0));
}),paths));
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:add-named-paths",(function (state,flow,message){
var map__10607 = message;
var map__10607__$1 = ((cljs.core.seq_QMARK_(map__10607))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10607):map__10607);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10607__$1,"\uFDD0:name");
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10607__$1,"\uFDD0:paths");
return cljs.core.assoc_in(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths",name], true),paths);
}));
io.pedestal.app.process_app_model_message.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.process_app_model_message,"\uFDD0:remove-named-paths",(function (state,flow,message){
var map__10608 = message;
var map__10608__$1 = ((cljs.core.seq_QMARK_(map__10608))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10608):map__10608);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10608__$1,"\uFDD0:name");
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths"], true),cljs.core.dissoc,name);
}));
io.pedestal.app.path_starts_with_QMARK_ = (function path_starts_with_QMARK_(path,prefix){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take(cljs.core.count(prefix),path),prefix);
});
io.pedestal.app.special_ops = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:navigate-node-destroy","\uFDD0:node-destroy"], true);
io.pedestal.app.filter_deltas = (function filter_deltas(state,deltas){
var subscriptions = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/subscriptions")).call(null,state);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__10613){
var vec__10614 = p__10613;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10614,0,null);
var xs = cljs.core.nthnext(vec__10614,1);
var delta = vec__10614;
if(cljs.core.truth_((io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1(op) : io.pedestal.app.special_ops.call(null,op))))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.special_ops.cljs$core$IFn$_invoke$arity$1(op) : io.pedestal.app.special_ops.call(null,op)),xs);
} else
{return delta;
}
}),cljs.core.filter((function (p__10615){
var vec__10616 = p__10615;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10616,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10616,1,null);
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
var map__10618 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,flow).call(null,message);
var map__10618__$1 = ((cljs.core.seq_QMARK_(map__10618))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10618):map__10618);
var out_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10618__$1,"\uFDD0:out");
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10618__$1,"\uFDD0:key");
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
{var seq__10623_10627 = cljs.core.seq(io.pedestal.app.pre_process(flow,message));
var chunk__10624_10628 = null;
var count__10625_10629 = 0;
var i__10626_10630 = 0;
while(true){
if((i__10626_10630 < count__10625_10629))
{var message_10631__$1 = chunk__10624_10628.cljs$core$IIndexed$_nth$arity$2(chunk__10624_10628,i__10626_10630);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,io.pedestal.app.transact_one,flow,message_10631__$1);
{
var G__10632 = seq__10623_10627;
var G__10633 = chunk__10624_10628;
var G__10634 = count__10625_10629;
var G__10635 = (i__10626_10630 + 1);
seq__10623_10627 = G__10632;
chunk__10624_10628 = G__10633;
count__10625_10629 = G__10634;
i__10626_10630 = G__10635;
continue;
}
} else
{var temp__4092__auto___10636 = cljs.core.seq(seq__10623_10627);
if(temp__4092__auto___10636)
{var seq__10623_10637__$1 = temp__4092__auto___10636;
if(cljs.core.chunked_seq_QMARK_(seq__10623_10637__$1))
{var c__9646__auto___10638 = cljs.core.chunk_first(seq__10623_10637__$1);
{
var G__10639 = cljs.core.chunk_rest(seq__10623_10637__$1);
var G__10640 = c__9646__auto___10638;
var G__10641 = cljs.core.count(c__9646__auto___10638);
var G__10642 = 0;
seq__10623_10627 = G__10639;
chunk__10624_10628 = G__10640;
count__10625_10629 = G__10641;
i__10626_10630 = G__10642;
continue;
}
} else
{var message_10643__$1 = cljs.core.first(seq__10623_10637__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,io.pedestal.app.transact_one,flow,message_10643__$1);
{
var G__10644 = cljs.core.next(seq__10623_10637__$1);
var G__10645 = null;
var G__10646 = 0;
var G__10647 = 0;
seq__10623_10627 = G__10644;
chunk__10624_10628 = G__10645;
count__10625_10629 = G__10646;
i__10626_10630 = G__10647;
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
var post_fn = cljs.core.some((function (p__10650){
var vec__10651 = p__10650;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10651,0,null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10651,1,null);
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
var seq__10656 = cljs.core.seq((new cljs.core.Keyword("\uFDD0:continue-inputs")).call(null,new_state));
var chunk__10657 = null;
var count__10658 = 0;
var i__10659 = 0;
while(true){
if((i__10659 < count__10658))
{var message = chunk__10657.cljs$core$IIndexed$_nth$arity$2(chunk__10657,i__10659);
io.pedestal.app.protocols.put_message(input_queue,message);
{
var G__10660 = seq__10656;
var G__10661 = chunk__10657;
var G__10662 = count__10658;
var G__10663 = (i__10659 + 1);
seq__10656 = G__10660;
chunk__10657 = G__10661;
count__10658 = G__10662;
i__10659 = G__10663;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10656);
if(temp__4092__auto__)
{var seq__10656__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10656__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__10656__$1);
{
var G__10664 = cljs.core.chunk_rest(seq__10656__$1);
var G__10665 = c__9646__auto__;
var G__10666 = cljs.core.count(c__9646__auto__);
var G__10667 = 0;
seq__10656 = G__10664;
chunk__10657 = G__10665;
count__10658 = G__10666;
i__10659 = G__10667;
continue;
}
} else
{var message = cljs.core.first(seq__10656__$1);
io.pedestal.app.protocols.put_message(input_queue,message);
{
var G__10668 = cljs.core.next(seq__10656__$1);
var G__10669 = null;
var G__10670 = 0;
var G__10671 = 0;
seq__10656 = G__10668;
chunk__10657 = G__10669;
count__10658 = G__10670;
i__10659 = G__10671;
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
var seq__10684 = cljs.core.seq((new cljs.core.Keyword("\uFDD0:effect")).call(null,new_state));
var chunk__10685 = null;
var count__10686 = 0;
var i__10687 = 0;
while(true){
if((i__10687 < count__10686))
{var message = chunk__10685.cljs$core$IIndexed$_nth$arity$2(chunk__10685,i__10687);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__10688_10696 = cljs.core.seq(io.pedestal.app.post_process_effects(flow,message));
var chunk__10689_10697 = null;
var count__10690_10698 = 0;
var i__10691_10699 = 0;
while(true){
if((i__10691_10699 < count__10690_10698))
{var message_10700__$1 = chunk__10689_10697.cljs$core$IIndexed$_nth$arity$2(chunk__10689_10697,i__10691_10699);
io.pedestal.app.protocols.put_message(output_queue,message_10700__$1);
{
var G__10701 = seq__10688_10696;
var G__10702 = chunk__10689_10697;
var G__10703 = count__10690_10698;
var G__10704 = (i__10691_10699 + 1);
seq__10688_10696 = G__10701;
chunk__10689_10697 = G__10702;
count__10690_10698 = G__10703;
i__10691_10699 = G__10704;
continue;
}
} else
{var temp__4092__auto___10705 = cljs.core.seq(seq__10688_10696);
if(temp__4092__auto___10705)
{var seq__10688_10706__$1 = temp__4092__auto___10705;
if(cljs.core.chunked_seq_QMARK_(seq__10688_10706__$1))
{var c__9646__auto___10707 = cljs.core.chunk_first(seq__10688_10706__$1);
{
var G__10708 = cljs.core.chunk_rest(seq__10688_10706__$1);
var G__10709 = c__9646__auto___10707;
var G__10710 = cljs.core.count(c__9646__auto___10707);
var G__10711 = 0;
seq__10688_10696 = G__10708;
chunk__10689_10697 = G__10709;
count__10690_10698 = G__10710;
i__10691_10699 = G__10711;
continue;
}
} else
{var message_10712__$1 = cljs.core.first(seq__10688_10706__$1);
io.pedestal.app.protocols.put_message(output_queue,message_10712__$1);
{
var G__10713 = cljs.core.next(seq__10688_10706__$1);
var G__10714 = null;
var G__10715 = 0;
var G__10716 = 0;
seq__10688_10696 = G__10713;
chunk__10689_10697 = G__10714;
count__10690_10698 = G__10715;
i__10691_10699 = G__10716;
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
var G__10717 = seq__10684;
var G__10718 = chunk__10685;
var G__10719 = count__10686;
var G__10720 = (i__10687 + 1);
seq__10684 = G__10717;
chunk__10685 = G__10718;
count__10686 = G__10719;
i__10687 = G__10720;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10684);
if(temp__4092__auto__)
{var seq__10684__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10684__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__10684__$1);
{
var G__10721 = cljs.core.chunk_rest(seq__10684__$1);
var G__10722 = c__9646__auto__;
var G__10723 = cljs.core.count(c__9646__auto__);
var G__10724 = 0;
seq__10684 = G__10721;
chunk__10685 = G__10722;
count__10686 = G__10723;
i__10687 = G__10724;
continue;
}
} else
{var message = cljs.core.first(seq__10684__$1);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__10692_10725 = cljs.core.seq(io.pedestal.app.post_process_effects(flow,message));
var chunk__10693_10726 = null;
var count__10694_10727 = 0;
var i__10695_10728 = 0;
while(true){
if((i__10695_10728 < count__10694_10727))
{var message_10729__$1 = chunk__10693_10726.cljs$core$IIndexed$_nth$arity$2(chunk__10693_10726,i__10695_10728);
io.pedestal.app.protocols.put_message(output_queue,message_10729__$1);
{
var G__10730 = seq__10692_10725;
var G__10731 = chunk__10693_10726;
var G__10732 = count__10694_10727;
var G__10733 = (i__10695_10728 + 1);
seq__10692_10725 = G__10730;
chunk__10693_10726 = G__10731;
count__10694_10727 = G__10732;
i__10695_10728 = G__10733;
continue;
}
} else
{var temp__4092__auto___10734__$1 = cljs.core.seq(seq__10692_10725);
if(temp__4092__auto___10734__$1)
{var seq__10692_10735__$1 = temp__4092__auto___10734__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10692_10735__$1))
{var c__9646__auto___10736 = cljs.core.chunk_first(seq__10692_10735__$1);
{
var G__10737 = cljs.core.chunk_rest(seq__10692_10735__$1);
var G__10738 = c__9646__auto___10736;
var G__10739 = cljs.core.count(c__9646__auto___10736);
var G__10740 = 0;
seq__10692_10725 = G__10737;
chunk__10693_10726 = G__10738;
count__10694_10727 = G__10739;
i__10695_10728 = G__10740;
continue;
}
} else
{var message_10741__$1 = cljs.core.first(seq__10692_10735__$1);
io.pedestal.app.protocols.put_message(output_queue,message_10741__$1);
{
var G__10742 = cljs.core.next(seq__10692_10735__$1);
var G__10743 = null;
var G__10744 = 0;
var G__10745 = 0;
seq__10692_10725 = G__10742;
chunk__10693_10726 = G__10743;
count__10694_10727 = G__10744;
i__10695_10728 = G__10745;
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
var G__10746 = cljs.core.next(seq__10684__$1);
var G__10747 = null;
var G__10748 = 0;
var G__10749 = 0;
seq__10684 = G__10746;
chunk__10685 = G__10747;
count__10686 = G__10748;
i__10687 = G__10749;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__10752){
var vec__10753 = p__10752;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10753,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10753,1,null);
var delta = vec__10753;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10754_SHARP_){
if(cljs.core.map_QMARK_(p1__10754_SHARP_))
{return clojure.set.rename_keys(p1__10754_SHARP_,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:key",io.pedestal.app.messages.topic,"\uFDD0:out"], true));
} else
{return p1__10754_SHARP_;
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
return cljs.core.into(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__10759){
var vec__10760 = p__10759;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10760,0,null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10760,1,null);
return cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:add-named-paths","\uFDD0:paths",paths,"\uFDD0:name",name], true);
}),cljs.core.remove((function (p__10761){
var vec__10762 = p__10761;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10762,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10762,1,null);
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
var map__10768 = app;
var map__10768__$1 = ((cljs.core.seq_QMARK_(map__10768))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10768):map__10768);
var default_emitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10768__$1,"\uFDD0:default-emitter");
var dataflow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10768__$1,"\uFDD0:dataflow");
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10768__$1,"\uFDD0:description");
var start_messages__$1 = (cljs.core.truth_(start_messages)?start_messages:(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:focus")).call(null,description))?io.pedestal.app.create_start_messages((new cljs.core.Keyword("\uFDD0:focus")).call(null,description)):(("\uFDD0:else")?cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:subscribe","\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true)], true)], true):null)));
var init_messages = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2("\uFDD0:init",(new cljs.core.Keyword("\uFDD0:transform")).call(null,description)));
var seq__10769 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(start_messages__$1,init_messages));
var chunk__10770 = null;
var count__10771 = 0;
var i__10772 = 0;
while(true){
if((i__10772 < count__10771))
{var message = chunk__10770.cljs$core$IIndexed$_nth$arity$2(chunk__10770,i__10772);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10773 = seq__10769;
var G__10774 = chunk__10770;
var G__10775 = count__10771;
var G__10776 = (i__10772 + 1);
seq__10769 = G__10773;
chunk__10770 = G__10774;
count__10771 = G__10775;
i__10772 = G__10776;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10769);
if(temp__4092__auto__)
{var seq__10769__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10769__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__10769__$1);
{
var G__10777 = cljs.core.chunk_rest(seq__10769__$1);
var G__10778 = c__9646__auto__;
var G__10779 = cljs.core.count(c__9646__auto__);
var G__10780 = 0;
seq__10769 = G__10777;
chunk__10770 = G__10778;
count__10771 = G__10779;
i__10772 = G__10780;
continue;
}
} else
{var message = cljs.core.first(seq__10769__$1);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10781 = cljs.core.next(seq__10769__$1);
var G__10782 = null;
var G__10783 = 0;
var G__10784 = 0;
seq__10769 = G__10781;
chunk__10770 = G__10782;
count__10771 = G__10783;
i__10772 = G__10784;
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
var seq__10789 = cljs.core.seq(script);
var chunk__10790 = null;
var count__10791 = 0;
var i__10792 = 0;
while(true){
if((i__10792 < count__10791))
{var message = chunk__10790.cljs$core$IIndexed$_nth$arity$2(chunk__10790,i__10792);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10793 = seq__10789;
var G__10794 = chunk__10790;
var G__10795 = count__10791;
var G__10796 = (i__10792 + 1);
seq__10789 = G__10793;
chunk__10790 = G__10794;
count__10791 = G__10795;
i__10792 = G__10796;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10789);
if(temp__4092__auto__)
{var seq__10789__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10789__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__10789__$1);
{
var G__10797 = cljs.core.chunk_rest(seq__10789__$1);
var G__10798 = c__9646__auto__;
var G__10799 = cljs.core.count(c__9646__auto__);
var G__10800 = 0;
seq__10789 = G__10797;
chunk__10790 = G__10798;
count__10791 = G__10799;
i__10792 = G__10800;
continue;
}
} else
{var message = cljs.core.first(seq__10789__$1);
io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10801 = cljs.core.next(seq__10789__$1);
var G__10802 = null;
var G__10803 = 0;
var G__10804 = 0;
seq__10789 = G__10801;
chunk__10790 = G__10802;
count__10791 = G__10803;
i__10792 = G__10804;
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
io.pedestal.app.adapt_description = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("adapt-description",(function (description){
return (new cljs.core.Keyword("\uFDD0:version")).call(null,description);
}),"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
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
