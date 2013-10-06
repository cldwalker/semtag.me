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
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p__10573){
var vec__10574 = p__10573;
var k = cljs.core.nth.call(null,vec__10574,0,null);
var v = cljs.core.nth.call(null,vec__10574,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray([k], true),"\uFDD0:map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray([k], true),null,(new cljs.core.Keyword("\uFDD0:new")).call(null,v)], true)], true);
}),inputs));
});
var default_emitter_fn__2 = (function (inputs,changed_inputs){
return cljs.core.mapv.call(null,(function (changed_input){
return cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray([changed_input], true),(new cljs.core.Keyword("\uFDD0:new")).call(null,cljs.core.get.call(null,inputs,changed_input))], true);
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
io.pedestal.app.filter_changes = (function filter_changes(p__10575,changes){
var map__10579 = p__10575;
var map__10579__$1 = ((cljs.core.seq_QMARK_.call(null,map__10579))?cljs.core.apply.call(null,cljs.core.hash_map,map__10579):map__10579);
var processed_inputs = cljs.core.get.call(null,map__10579__$1,"\uFDD0:processed-inputs");
var mode = cljs.core.get.call(null,map__10579__$1,"\uFDD0:mode");
if(cljs.core._EQ_.call(null,mode,"\uFDD0:always"))
{return changes;
} else
{return cljs.core.remove.call(null,(function (p__10580){
var vec__10581 = p__10580;
var k = cljs.core.nth.call(null,vec__10581,0,null);
var v = cljs.core.nth.call(null,vec__10581,1,null);
return cljs.core.some.call(null,cljs.core.partial.call(null,io.pedestal.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
}
});
var prefixed = (function prefixed(k,p){
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.keyword_QMARK_.call(null,p))?cljs.core.PersistentVector.fromArray([p], true):p),k));
});
/**
* Return an emitter function which will emit deltas under the
* provided path prefix.
*/
io.pedestal.app.default_emitter = (function default_emitter(prefix){
return (function (inputs){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = io.pedestal.app.filter_changes.call(null,inputs,io.pedestal.app.dataflow.added_inputs.call(null,inputs));
return cljs.core.mapcat.call(null,(function (p__10588){
var vec__10589 = p__10588;
var k = cljs.core.nth.call(null,vec__10589,0,null);
var v = cljs.core.nth.call(null,vec__10589,1,null);
var k__$1 = prefixed.call(null,k,prefix);
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",k__$1,"\uFDD0:map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,v], true)], true);
}),added);
})(),(function (){var updates = io.pedestal.app.filter_changes.call(null,inputs,io.pedestal.app.dataflow.updated_inputs.call(null,inputs));
return cljs.core.mapv.call(null,(function (p__10590){
var vec__10591 = p__10590;
var k = cljs.core.nth.call(null,vec__10591,0,null);
var v = cljs.core.nth.call(null,vec__10591,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:value",prefixed.call(null,k,prefix),v], true);
}),updates);
})(),(function (){var removed = io.pedestal.app.filter_changes.call(null,inputs,io.pedestal.app.dataflow.removed_inputs.call(null,inputs));
return cljs.core.mapcat.call(null,(function (p__10592){
var vec__10593 = p__10592;
var k = cljs.core.nth.call(null,vec__10593,0,null);
var v = cljs.core.nth.call(null,vec__10593,1,null);
var k__$1 = prefixed.call(null,k,prefix);
if(cljs.core._EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/removed"))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,null], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",k__$1], true)], true);
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",k__$1,v], true)], true);
}
}),removed);
})()));
});
});
io.pedestal.app.process_app_model_message = (function (){var method_table__9697__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9701__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("process-app-model-message",(function (state,flow,message){
return io.pedestal.app.messages.type.call(null,message);
}),"\uFDD0:default",hierarchy__9701__auto__,method_table__9697__auto__,prefer_table__9698__auto__,method_cache__9699__auto__,cached_hierarchy__9700__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:default",(function (state,flow,message){
return state;
}));
io.pedestal.app.refresh_emitters = (function refresh_emitters(state,flow){
return cljs.core.reduce.call(null,(function (deltas,p__10596){
var map__10597 = p__10596;
var map__10597__$1 = ((cljs.core.seq_QMARK_.call(null,map__10597))?cljs.core.apply.call(null,cljs.core.hash_map,map__10597):map__10597);
var in$ = cljs.core.get.call(null,map__10597__$1,"\uFDD0:in");
var init_emitter = cljs.core.get.call(null,map__10597__$1,"\uFDD0:init");
var emitter = cljs.core.get.call(null,map__10597__$1,"\uFDD0:fn");
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
{return cljs.core.into.call(null,deltas,init_emitter__$1.call(null,inputs));
} else
{return deltas;
}
}),cljs.core.PersistentVector.EMPTY,(new cljs.core.Keyword("\uFDD0:emit")).call(null,flow));
});
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:navigate",(function (state,flow,message){
var deltas = io.pedestal.app.refresh_emitters.call(null,state,flow);
var paths = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths",(new cljs.core.Keyword("\uFDD0:name")).call(null,message)], true));
var old_paths = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/subscriptions")).call(null,state);
var destroy_paths = cljs.core.remove.call(null,cljs.core.set.call(null,paths),old_paths);
return cljs.core.assoc.call(null,state,"\uFDD0:io.pedestal.app/subscriptions",paths,"\uFDD0:emit",cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p1__10598_SHARP_){
return cljs.core.vector.call(null,"\uFDD0:navigate-node-destroy",p1__10598_SHARP_);
}),destroy_paths),deltas));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:set-focus",(function (state,flow,message){
return io.pedestal.app.process_app_model_message.call(null,state,flow,cljs.core.assoc.call(null,message,io.pedestal.app.messages.type,"\uFDD0:navigate"));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:subscribe",(function (state,flow,message){
var deltas = io.pedestal.app.refresh_emitters.call(null,state,flow);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/subscriptions"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),(new cljs.core.Keyword("\uFDD0:paths")).call(null,message)),"\uFDD0:emit",deltas);
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:unsubscribe",(function (state,flow,message){
var paths = cljs.core.set.call(null,(new cljs.core.Keyword("\uFDD0:paths")).call(null,message));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/subscriptions"], true),(function (s){
return cljs.core.remove.call(null,(function (p1__10599_SHARP_){
return cljs.core.contains_QMARK_.call(null,paths,p1__10599_SHARP_);
}),s);
})),"\uFDD0:emit",cljs.core.mapv.call(null,(function (p1__10600_SHARP_){
return cljs.core.vector.call(null,"\uFDD0:navigate-node-destroy",p1__10600_SHARP_);
}),paths));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:add-named-paths",(function (state,flow,message){
var map__10601 = message;
var map__10601__$1 = ((cljs.core.seq_QMARK_.call(null,map__10601))?cljs.core.apply.call(null,cljs.core.hash_map,map__10601):map__10601);
var name = cljs.core.get.call(null,map__10601__$1,"\uFDD0:name");
var paths = cljs.core.get.call(null,map__10601__$1,"\uFDD0:paths");
return cljs.core.assoc_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths",name], true),paths);
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0:remove-named-paths",(function (state,flow,message){
var map__10602 = message;
var map__10602__$1 = ((cljs.core.seq_QMARK_.call(null,map__10602))?cljs.core.apply.call(null,cljs.core.hash_map,map__10602):map__10602);
var name = cljs.core.get.call(null,map__10602__$1,"\uFDD0:name");
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app/named-paths"], true),cljs.core.dissoc,name);
}));
io.pedestal.app.path_starts_with_QMARK_ = (function path_starts_with_QMARK_(path,prefix){
return cljs.core._EQ_.call(null,cljs.core.take.call(null,cljs.core.count.call(null,prefix),path),prefix);
});
io.pedestal.app.special_ops = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:navigate-node-destroy","\uFDD0:node-destroy"], true);
io.pedestal.app.filter_deltas = (function filter_deltas(state,deltas){
var subscriptions = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/subscriptions")).call(null,state);
return cljs.core.mapv.call(null,(function (p__10607){
var vec__10608 = p__10607;
var op = cljs.core.nth.call(null,vec__10608,0,null);
var xs = cljs.core.nthnext.call(null,vec__10608,1);
var delta = vec__10608;
if(cljs.core.truth_(io.pedestal.app.special_ops.call(null,op)))
{return cljs.core.apply.call(null,cljs.core.vector,io.pedestal.app.special_ops.call(null,op),xs);
} else
{return delta;
}
}),cljs.core.filter.call(null,(function (p__10609){
var vec__10610 = p__10609;
var op = cljs.core.nth.call(null,vec__10610,0,null);
var path = cljs.core.nth.call(null,vec__10610,1,null);
var or__3943__auto__ = io.pedestal.app.special_ops.call(null,op);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some.call(null,(function (s){
return io.pedestal.app.path_starts_with_QMARK_.call(null,path,s);
}),subscriptions);
}
}),cljs.core.mapcat.call(null,io.pedestal.app.tree.expand_map,deltas)));
});
io.pedestal.app.run_dataflow = (function run_dataflow(state,flow,message){
return io.pedestal.app.dataflow.run.call(null,state,flow,message);
});
/**
* Using the given flow, process the given message producing a new
* state.
*/
io.pedestal.app.process_message = (function process_message(state,flow,message){
var old_state = state;
var new_state = ((cljs.core._EQ_.call(null,io.pedestal.app.messages.topic.call(null,message),io.pedestal.app.messages.app_model))?io.pedestal.app.process_app_model_message.call(null,state,flow,message):((cljs.core._EQ_.call(null,io.pedestal.app.messages.topic.call(null,message),io.pedestal.app.messages.output))?cljs.core.assoc.call(null,state,"\uFDD0:effect",cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0:payload")).call(null,message)], true)):(("\uFDD0:else")?io.pedestal.app.run_dataflow.call(null,state,flow,message):null)));
var new_deltas = io.pedestal.app.filter_deltas.call(null,new_state,(new cljs.core.Keyword("\uFDD0:emit")).call(null,new_state));
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,new_state,"\uFDD0:io.pedestal.app/emitter-deltas",new_deltas),"\uFDD0:emit");
});
io.pedestal.app.transact_one = (function transact_one(state,flow,message){
return io.pedestal.app.process_message.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,"\uFDD0:io.pedestal.app/input",message),"\uFDD0:effect","\uFDD0:continue-inputs"),flow,message);
});
io.pedestal.app.pre_process = (function pre_process(flow,message){
var map__10612 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,flow).call(null,message);
var map__10612__$1 = ((cljs.core.seq_QMARK_.call(null,map__10612))?cljs.core.apply.call(null,cljs.core.hash_map,map__10612):map__10612);
var out_path = cljs.core.get.call(null,map__10612__$1,"\uFDD0:out");
var key = cljs.core.get.call(null,map__10612__$1,"\uFDD0:key");
var pre_fn = io.pedestal.app.dataflow.find_message_transformer.call(null,(new cljs.core.Keyword("\uFDD0:pre")).call(null,flow),out_path,key);
if(cljs.core.truth_(pre_fn))
{return pre_fn.call(null,message);
} else
{return cljs.core.PersistentVector.fromArray([message], true);
}
});
io.pedestal.app.receive_input_message = (function receive_input_message(state,flow,input_queue){
return io.pedestal.app.protocols.take_message.call(null,input_queue,(function (message){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:pre")).call(null,flow)))
{var seq__10617_10621 = cljs.core.seq.call(null,io.pedestal.app.pre_process.call(null,flow,message));
var chunk__10618_10622 = null;
var count__10619_10623 = 0;
var i__10620_10624 = 0;
while(true){
if((i__10620_10624 < count__10619_10623))
{var message_10625__$1 = cljs.core._nth.call(null,chunk__10618_10622,i__10620_10624);
cljs.core.swap_BANG_.call(null,state,io.pedestal.app.transact_one,flow,message_10625__$1);
{
var G__10626 = seq__10617_10621;
var G__10627 = chunk__10618_10622;
var G__10628 = count__10619_10623;
var G__10629 = (i__10620_10624 + 1);
seq__10617_10621 = G__10626;
chunk__10618_10622 = G__10627;
count__10619_10623 = G__10628;
i__10620_10624 = G__10629;
continue;
}
} else
{var temp__4092__auto___10630 = cljs.core.seq.call(null,seq__10617_10621);
if(temp__4092__auto___10630)
{var seq__10617_10631__$1 = temp__4092__auto___10630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10617_10631__$1))
{var c__9640__auto___10632 = cljs.core.chunk_first.call(null,seq__10617_10631__$1);
{
var G__10633 = cljs.core.chunk_rest.call(null,seq__10617_10631__$1);
var G__10634 = c__9640__auto___10632;
var G__10635 = cljs.core.count.call(null,c__9640__auto___10632);
var G__10636 = 0;
seq__10617_10621 = G__10633;
chunk__10618_10622 = G__10634;
count__10619_10623 = G__10635;
i__10620_10624 = G__10636;
continue;
}
} else
{var message_10637__$1 = cljs.core.first.call(null,seq__10617_10631__$1);
cljs.core.swap_BANG_.call(null,state,io.pedestal.app.transact_one,flow,message_10637__$1);
{
var G__10638 = cljs.core.next.call(null,seq__10617_10631__$1);
var G__10639 = null;
var G__10640 = 0;
var G__10641 = 0;
seq__10617_10621 = G__10638;
chunk__10618_10622 = G__10639;
count__10619_10623 = G__10640;
i__10620_10624 = G__10641;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.swap_BANG_.call(null,state,io.pedestal.app.transact_one,flow,message);
}
return io.pedestal.app.util.platform.create_timeout.call(null,0,(function (){
return receive_input_message.call(null,state,flow,input_queue);
}));
}));
});
io.pedestal.app.post_process_effects = (function post_process_effects(flow,message){
var post_fn = cljs.core.some.call(null,(function (p__10644){
var vec__10645 = p__10644;
var pred = cljs.core.nth.call(null,vec__10645,0,null);
var f = cljs.core.nth.call(null,vec__10645,1,null);
if(cljs.core.truth_(pred.call(null,message)))
{return f;
} else
{return null;
}
}),(new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow)));
if(cljs.core.truth_(post_fn))
{return post_fn.call(null,message);
} else
{return cljs.core.PersistentVector.fromArray([message], true);
}
});
io.pedestal.app.continue_inputs = (function continue_inputs(app,flow,input_queue){
return cljs.core.add_watch.call(null,app,"\uFDD0:continue-inputs-watcher",(function (_,___$1,___$2,new_state){
var seq__10650 = cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0:continue-inputs")).call(null,new_state));
var chunk__10651 = null;
var count__10652 = 0;
var i__10653 = 0;
while(true){
if((i__10653 < count__10652))
{var message = cljs.core._nth.call(null,chunk__10651,i__10653);
io.pedestal.app.protocols.put_message.call(null,input_queue,message);
{
var G__10654 = seq__10650;
var G__10655 = chunk__10651;
var G__10656 = count__10652;
var G__10657 = (i__10653 + 1);
seq__10650 = G__10654;
chunk__10651 = G__10655;
count__10652 = G__10656;
i__10653 = G__10657;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10650);
if(temp__4092__auto__)
{var seq__10650__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10650__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__10650__$1);
{
var G__10658 = cljs.core.chunk_rest.call(null,seq__10650__$1);
var G__10659 = c__9640__auto__;
var G__10660 = cljs.core.count.call(null,c__9640__auto__);
var G__10661 = 0;
seq__10650 = G__10658;
chunk__10651 = G__10659;
count__10652 = G__10660;
i__10653 = G__10661;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__10650__$1);
io.pedestal.app.protocols.put_message.call(null,input_queue,message);
{
var G__10662 = cljs.core.next.call(null,seq__10650__$1);
var G__10663 = null;
var G__10664 = 0;
var G__10665 = 0;
seq__10650 = G__10662;
chunk__10651 = G__10663;
count__10652 = G__10664;
i__10653 = G__10665;
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
return cljs.core.add_watch.call(null,app,"\uFDD0:effects-watcher",(function (_,___$1,___$2,new_state){
var seq__10678 = cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0:effect")).call(null,new_state));
var chunk__10679 = null;
var count__10680 = 0;
var i__10681 = 0;
while(true){
if((i__10681 < count__10680))
{var message = cljs.core._nth.call(null,chunk__10679,i__10681);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__10682_10690 = cljs.core.seq.call(null,io.pedestal.app.post_process_effects.call(null,flow,message));
var chunk__10683_10691 = null;
var count__10684_10692 = 0;
var i__10685_10693 = 0;
while(true){
if((i__10685_10693 < count__10684_10692))
{var message_10694__$1 = cljs.core._nth.call(null,chunk__10683_10691,i__10685_10693);
io.pedestal.app.protocols.put_message.call(null,output_queue,message_10694__$1);
{
var G__10695 = seq__10682_10690;
var G__10696 = chunk__10683_10691;
var G__10697 = count__10684_10692;
var G__10698 = (i__10685_10693 + 1);
seq__10682_10690 = G__10695;
chunk__10683_10691 = G__10696;
count__10684_10692 = G__10697;
i__10685_10693 = G__10698;
continue;
}
} else
{var temp__4092__auto___10699 = cljs.core.seq.call(null,seq__10682_10690);
if(temp__4092__auto___10699)
{var seq__10682_10700__$1 = temp__4092__auto___10699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10682_10700__$1))
{var c__9640__auto___10701 = cljs.core.chunk_first.call(null,seq__10682_10700__$1);
{
var G__10702 = cljs.core.chunk_rest.call(null,seq__10682_10700__$1);
var G__10703 = c__9640__auto___10701;
var G__10704 = cljs.core.count.call(null,c__9640__auto___10701);
var G__10705 = 0;
seq__10682_10690 = G__10702;
chunk__10683_10691 = G__10703;
count__10684_10692 = G__10704;
i__10685_10693 = G__10705;
continue;
}
} else
{var message_10706__$1 = cljs.core.first.call(null,seq__10682_10700__$1);
io.pedestal.app.protocols.put_message.call(null,output_queue,message_10706__$1);
{
var G__10707 = cljs.core.next.call(null,seq__10682_10700__$1);
var G__10708 = null;
var G__10709 = 0;
var G__10710 = 0;
seq__10682_10690 = G__10707;
chunk__10683_10691 = G__10708;
count__10684_10692 = G__10709;
i__10685_10693 = G__10710;
continue;
}
}
} else
{}
}
break;
}
} else
{io.pedestal.app.protocols.put_message.call(null,output_queue,message);
}
{
var G__10711 = seq__10678;
var G__10712 = chunk__10679;
var G__10713 = count__10680;
var G__10714 = (i__10681 + 1);
seq__10678 = G__10711;
chunk__10679 = G__10712;
count__10680 = G__10713;
i__10681 = G__10714;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10678);
if(temp__4092__auto__)
{var seq__10678__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10678__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__10678__$1);
{
var G__10715 = cljs.core.chunk_rest.call(null,seq__10678__$1);
var G__10716 = c__9640__auto__;
var G__10717 = cljs.core.count.call(null,c__9640__auto__);
var G__10718 = 0;
seq__10678 = G__10715;
chunk__10679 = G__10716;
count__10680 = G__10717;
i__10681 = G__10718;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__10678__$1);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:effect")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow))))
{var seq__10686_10719 = cljs.core.seq.call(null,io.pedestal.app.post_process_effects.call(null,flow,message));
var chunk__10687_10720 = null;
var count__10688_10721 = 0;
var i__10689_10722 = 0;
while(true){
if((i__10689_10722 < count__10688_10721))
{var message_10723__$1 = cljs.core._nth.call(null,chunk__10687_10720,i__10689_10722);
io.pedestal.app.protocols.put_message.call(null,output_queue,message_10723__$1);
{
var G__10724 = seq__10686_10719;
var G__10725 = chunk__10687_10720;
var G__10726 = count__10688_10721;
var G__10727 = (i__10689_10722 + 1);
seq__10686_10719 = G__10724;
chunk__10687_10720 = G__10725;
count__10688_10721 = G__10726;
i__10689_10722 = G__10727;
continue;
}
} else
{var temp__4092__auto___10728__$1 = cljs.core.seq.call(null,seq__10686_10719);
if(temp__4092__auto___10728__$1)
{var seq__10686_10729__$1 = temp__4092__auto___10728__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10686_10729__$1))
{var c__9640__auto___10730 = cljs.core.chunk_first.call(null,seq__10686_10729__$1);
{
var G__10731 = cljs.core.chunk_rest.call(null,seq__10686_10729__$1);
var G__10732 = c__9640__auto___10730;
var G__10733 = cljs.core.count.call(null,c__9640__auto___10730);
var G__10734 = 0;
seq__10686_10719 = G__10731;
chunk__10687_10720 = G__10732;
count__10688_10721 = G__10733;
i__10689_10722 = G__10734;
continue;
}
} else
{var message_10735__$1 = cljs.core.first.call(null,seq__10686_10729__$1);
io.pedestal.app.protocols.put_message.call(null,output_queue,message_10735__$1);
{
var G__10736 = cljs.core.next.call(null,seq__10686_10729__$1);
var G__10737 = null;
var G__10738 = 0;
var G__10739 = 0;
seq__10686_10719 = G__10736;
chunk__10687_10720 = G__10737;
count__10688_10721 = G__10738;
i__10689_10722 = G__10739;
continue;
}
}
} else
{}
}
break;
}
} else
{io.pedestal.app.protocols.put_message.call(null,output_queue,message);
}
{
var G__10740 = cljs.core.next.call(null,seq__10678__$1);
var G__10741 = null;
var G__10742 = 0;
var G__10743 = 0;
seq__10678 = G__10740;
chunk__10679 = G__10741;
count__10680 = G__10742;
i__10681 = G__10743;
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
return cljs.core.reduce.call(null,(function (acc,p__10746){
var vec__10747 = p__10746;
var op = cljs.core.nth.call(null,vec__10747,0,null);
var path = cljs.core.nth.call(null,vec__10747,1,null);
var delta = vec__10747;
var temp__4090__auto__ = io.pedestal.app.dataflow.find_message_transformer.call(null,post_processors,path,op);
if(cljs.core.truth_(temp__4090__auto__))
{var post_fn = temp__4090__auto__;
return cljs.core.into.call(null,acc,post_fn.call(null,delta));
} else
{return cljs.core.conj.call(null,acc,delta);
}
}),cljs.core.PersistentVector.EMPTY,deltas);
});
io.pedestal.app.send_app_model_deltas = (function send_app_model_deltas(app,flow,app_model_queue){
return cljs.core.add_watch.call(null,app,"\uFDD0:app-model-delta-watcher",(function (_,___$1,old_state,new_state){
var deltas = (new cljs.core.Keyword("\uFDD0:io.pedestal.app/emitter-deltas")).call(null,new_state);
if(!((function (){var or__3943__auto__ = cljs.core.empty_QMARK_.call(null,deltas);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0:io.pedestal.app/emitter-deltas")).call(null,old_state),deltas);
}
})()))
{var deltas__$1 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:app-model")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,flow)))?io.pedestal.app.post_process_deltas.call(null,flow,deltas):deltas);
return io.pedestal.app.protocols.put_message.call(null,app_model_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:deltas","\uFDD0:deltas",deltas__$1], true));
} else
{return null;
}
}));
});
io.pedestal.app.ensure_default_emitter = (function ensure_default_emitter(emit){
if(cljs.core.empty_QMARK_.call(null,emit))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:*"], true),null], true),io.pedestal.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY)], true)], true);
} else
{return emit;
}
});
io.pedestal.app.ensure_input_adapter = (function ensure_input_adapter(input_adapter){
if(cljs.core.not.call(null,input_adapter))
{return (function (m){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",io.pedestal.app.messages.type.call(null,m),"\uFDD0:out",io.pedestal.app.messages.topic.call(null,m)], true);
});
} else
{return input_adapter;
}
});
io.pedestal.app.rekey_transforms = (function rekey_transforms(transforms){
return cljs.core.mapv.call(null,(function (p1__10748_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__10748_SHARP_))
{return clojure.set.rename_keys.call(null,p1__10748_SHARP_,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:key",io.pedestal.app.messages.topic,"\uFDD0:out"], true));
} else
{return p1__10748_SHARP_;
}
}),transforms);
});
io.pedestal.app.standardize_pre_if_exists = (function standardize_pre_if_exists(description){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:pre")).call(null,description)))
{return cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray(["\uFDD0:pre"], true),io.pedestal.app.dataflow.transform_maps);
} else
{return description;
}
});
io.pedestal.app.standardize_post_app_model_if_exists = (function standardize_post_app_model_if_exists(description){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:app-model")).call(null,(new cljs.core.Keyword("\uFDD0:post")).call(null,description))))
{return cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray(["\uFDD0:post","\uFDD0:app-model"], true),io.pedestal.app.dataflow.transform_maps);
} else
{return description;
}
});
io.pedestal.app.create_start_messages = (function create_start_messages(focus){
return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__10753){
var vec__10754 = p__10753;
var name = cljs.core.nth.call(null,vec__10754,0,null);
var paths = cljs.core.nth.call(null,vec__10754,1,null);
return cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:add-named-paths","\uFDD0:paths",paths,"\uFDD0:name",name], true);
}),cljs.core.remove.call(null,(function (p__10755){
var vec__10756 = p__10755;
var k = cljs.core.nth.call(null,vec__10756,0,null);
var v = cljs.core.nth.call(null,vec__10756,1,null);
return cljs.core._EQ_.call(null,k,"\uFDD0:default");
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
return begin.call(null,app,null);
});
var begin__2 = (function (app,start_messages){
var map__10762 = app;
var map__10762__$1 = ((cljs.core.seq_QMARK_.call(null,map__10762))?cljs.core.apply.call(null,cljs.core.hash_map,map__10762):map__10762);
var default_emitter = cljs.core.get.call(null,map__10762__$1,"\uFDD0:default-emitter");
var dataflow = cljs.core.get.call(null,map__10762__$1,"\uFDD0:dataflow");
var description = cljs.core.get.call(null,map__10762__$1,"\uFDD0:description");
var start_messages__$1 = (cljs.core.truth_(start_messages)?start_messages:(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:focus")).call(null,description))?io.pedestal.app.create_start_messages.call(null,(new cljs.core.Keyword("\uFDD0:focus")).call(null,description)):(("\uFDD0:else")?cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:subscribe","\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true)], true)], true):null)));
var init_messages = cljs.core.vec.call(null,cljs.core.mapcat.call(null,"\uFDD0:init",(new cljs.core.Keyword("\uFDD0:transform")).call(null,description)));
var seq__10763 = cljs.core.seq.call(null,cljs.core.concat.call(null,start_messages__$1,init_messages));
var chunk__10764 = null;
var count__10765 = 0;
var i__10766 = 0;
while(true){
if((i__10766 < count__10765))
{var message = cljs.core._nth.call(null,chunk__10764,i__10766);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10767 = seq__10763;
var G__10768 = chunk__10764;
var G__10769 = count__10765;
var G__10770 = (i__10766 + 1);
seq__10763 = G__10767;
chunk__10764 = G__10768;
count__10765 = G__10769;
i__10766 = G__10770;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10763);
if(temp__4092__auto__)
{var seq__10763__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10763__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__10763__$1);
{
var G__10771 = cljs.core.chunk_rest.call(null,seq__10763__$1);
var G__10772 = c__9640__auto__;
var G__10773 = cljs.core.count.call(null,c__9640__auto__);
var G__10774 = 0;
seq__10763 = G__10771;
chunk__10764 = G__10772;
count__10765 = G__10773;
i__10766 = G__10774;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__10763__$1);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10775 = cljs.core.next.call(null,seq__10763__$1);
var G__10776 = null;
var G__10777 = 0;
var G__10778 = 0;
seq__10763 = G__10775;
chunk__10764 = G__10776;
count__10765 = G__10777;
i__10766 = G__10778;
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
return io.pedestal.app.protocols.take_message.call(null,out_queue,(function (message){
services_fn.call(null,message,in_queue);
return consume_output_queue.call(null,out_queue,in_queue,services_fn);
}));
});
io.pedestal.app.consume_output = (function consume_output(app,services_fn){
return io.pedestal.app.consume_output_queue.call(null,(new cljs.core.Keyword("\uFDD0:output")).call(null,app),(new cljs.core.Keyword("\uFDD0:input")).call(null,app),services_fn);
});
io.pedestal.app.consume_effects = (function consume_effects(app,services_fn){
return io.pedestal.app.consume_output.call(null,app,services_fn);
});
io.pedestal.app.run_BANG_ = (function run_BANG_(app,script){
if((function (){var or__3943__auto__ = cljs.core.vector_QMARK_.call(null,script);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.list_QMARK_.call(null,script);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The passed script must be a vector or list"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-1302740715,null),new cljs.core.Symbol(null,"script","script",1746750084,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1537549030,null),new cljs.core.Symbol(null,"script","script",1746750084,null)))))].join('')));
}
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,script))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Each element of the passed script must be a map"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"script","script",1746750084,null))))].join('')));
}
var seq__10783 = cljs.core.seq.call(null,script);
var chunk__10784 = null;
var count__10785 = 0;
var i__10786 = 0;
while(true){
if((i__10786 < count__10785))
{var message = cljs.core._nth.call(null,chunk__10784,i__10786);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10787 = seq__10783;
var G__10788 = chunk__10784;
var G__10789 = count__10785;
var G__10790 = (i__10786 + 1);
seq__10783 = G__10787;
chunk__10784 = G__10788;
count__10785 = G__10789;
i__10786 = G__10790;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10783);
if(temp__4092__auto__)
{var seq__10783__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10783__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__10783__$1);
{
var G__10791 = cljs.core.chunk_rest.call(null,seq__10783__$1);
var G__10792 = c__9640__auto__;
var G__10793 = cljs.core.count.call(null,c__9640__auto__);
var G__10794 = 0;
seq__10783 = G__10791;
chunk__10784 = G__10792;
count__10785 = G__10793;
i__10786 = G__10794;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__10783__$1);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),message);
{
var G__10795 = cljs.core.next.call(null,seq__10783__$1);
var G__10796 = null;
var G__10797 = 0;
var G__10798 = 0;
seq__10783 = G__10795;
chunk__10784 = G__10796;
count__10785 = G__10797;
i__10786 = G__10798;
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
io.pedestal.app.adapt_description = (function (){var method_table__9697__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9701__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("adapt-description",(function (description){
return (new cljs.core.Keyword("\uFDD0:version")).call(null,description);
}),"\uFDD0:default",hierarchy__9701__auto__,method_table__9697__auto__,prefer_table__9698__auto__,method_cache__9699__auto__,cached_hierarchy__9700__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.adapt_description,2,(function (description){
return description;
}));
cljs.core._add_method.call(null,io.pedestal.app.adapt_description,1,(function (description){
return io.pedestal.app.util.adapters.adapt_v1_to_v2.call(null,description);
}));
cljs.core._add_method.call(null,io.pedestal.app.adapt_description,"\uFDD0:default",(function (description){
io.pedestal.app.util.log.warn.call(null,"\uFDD0:adapt-description",[cljs.core.str("WARNING!! Converting dataflow description from version 1 to 2.")].join(''));
return io.pedestal.app.util.adapters.adapt_v1_to_v2.call(null,description);
}));
io.pedestal.app.build = (function build(description){
var app_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-model",cljs.core.PersistentArrayMap.EMPTY], true));
var description__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,io.pedestal.app.standardize_post_app_model_if_exists.call(null,io.pedestal.app.standardize_pre_if_exists.call(null,io.pedestal.app.adapt_description.call(null,description))),cljs.core.PersistentVector.fromArray(["\uFDD0:emit"], true),io.pedestal.app.ensure_default_emitter),cljs.core.PersistentVector.fromArray(["\uFDD0:input-adapter"], true),io.pedestal.app.ensure_input_adapter),cljs.core.PersistentVector.fromArray(["\uFDD0:transform"], true),io.pedestal.app.rekey_transforms);
var dataflow = io.pedestal.app.dataflow.build.call(null,description__$1);
var input_queue = io.pedestal.app.queue.queue.call(null,"\uFDD0:input");
var output_queue = io.pedestal.app.queue.queue.call(null,"\uFDD0:output");
var app_model_queue = io.pedestal.app.queue.queue.call(null,"\uFDD0:app-model");
io.pedestal.app.receive_input_message.call(null,app_atom,dataflow,input_queue);
io.pedestal.app.send_effects.call(null,app_atom,dataflow,output_queue);
io.pedestal.app.continue_inputs.call(null,app_atom,dataflow,input_queue);
io.pedestal.app.send_app_model_deltas.call(null,app_atom,dataflow,app_model_queue);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:state",app_atom,"\uFDD0:description",description__$1,"\uFDD0:dataflow",dataflow,"\uFDD0:input",input_queue,"\uFDD0:output",output_queue,"\uFDD0:app-model",app_model_queue], true);
});
