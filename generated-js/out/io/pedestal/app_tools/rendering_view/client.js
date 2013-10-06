goog.provide('io.pedestal.app_tools.rendering_view.client');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.console_log');
goog.require('io.pedestal.app.protocols');
goog.require('io.pedestal.app.util.platform');
goog.require('domina.events');
goog.require('io.pedestal.app.render.push');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('domina');
goog.require('goog.events.KeyHandler');
goog.require('io.pedestal.app.util.observers');
goog.require('io.pedestal.app.util.log');
goog.require('io.pedestal.app.tree');
goog.require('goog.events.KeyCodes');
goog.require('goog.Uri');
goog.require('io.pedestal.app.net.repl_client');
goog.require('io.pedestal.app.net.xhr');
io.pedestal.app_tools.rendering_view.client.emitter = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:ui",io.pedestal.app.tree.new_app_model,"\uFDD0:recording",null,"\uFDD0:index",0], true));
io.pedestal.app_tools.rendering_view.client.run_deltas = (function run_deltas(state,deltas){
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:ui"], true),io.pedestal.app.tree.apply_deltas,deltas);
});
io.pedestal.app_tools.rendering_view.client.step_forward = (function step_forward(state){
var temp__4090__auto__ = cljs.core.get.call(null,(new cljs.core.Keyword("\uFDD0:recording")).call(null,state),(new cljs.core.Keyword("\uFDD0:index")).call(null,state));
if(cljs.core.truth_(temp__4090__auto__))
{var next_step = temp__4090__auto__;
return cljs.core.update_in.call(null,io.pedestal.app_tools.rendering_view.client.run_deltas.call(null,state,next_step),cljs.core.PersistentVector.fromArray(["\uFDD0:index"], true),cljs.core.inc);
} else
{console.log("At the end of the recording, can't move forward");
return state;
}
});
io.pedestal.app_tools.rendering_view.client.step_back = (function step_back(state){
if(((new cljs.core.Keyword("\uFDD0:index")).call(null,state) === 0))
{console.log("At index 0, can't move back");
return state;
} else
{var index = ((new cljs.core.Keyword("\uFDD0:index")).call(null,state) - 1);
var next_step = cljs.core.get.call(null,(new cljs.core.Keyword("\uFDD0:recording")).call(null,state),index);
return cljs.core.assoc.call(null,io.pedestal.app_tools.rendering_view.client.run_deltas.call(null,state,((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,next_step)))?cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.EMPTY], true)], true):io.pedestal.app.tree.invert.call(null,next_step))),"\uFDD0:index",index);
}
});
io.pedestal.app_tools.rendering_view.client.docKh = (new goog.events.KeyHandler(document));
io.pedestal.app_tools.rendering_view.client.step_forward_QMARK_ = (function step_forward_QMARK_(key_code){
return cljs.core._EQ_.call(null,key_code,goog.events.KeyCodes.RIGHT);
});
io.pedestal.app_tools.rendering_view.client.step_back_QMARK_ = (function step_back_QMARK_(key_code){
return cljs.core._EQ_.call(null,key_code,goog.events.KeyCodes.LEFT);
});
io.pedestal.app_tools.rendering_view.client.key_handler = (function key_handler(e){
var key_code = e.keyCode;
if(cljs.core.truth_(io.pedestal.app_tools.rendering_view.client.step_forward_QMARK_.call(null,key_code)))
{e.preventDefault();
return cljs.core.swap_BANG_.call(null,io.pedestal.app_tools.rendering_view.client.emitter,io.pedestal.app_tools.rendering_view.client.step_forward);
} else
{if(cljs.core.truth_(io.pedestal.app_tools.rendering_view.client.step_back_QMARK_.call(null,key_code)))
{e.preventDefault();
return cljs.core.swap_BANG_.call(null,io.pedestal.app_tools.rendering_view.client.emitter,io.pedestal.app_tools.rendering_view.client.step_back);
} else
{return null;
}
}
});
io.pedestal.app_tools.rendering_view.client.enable_step_keys = (function enable_step_keys(){
return goog.events.listen(io.pedestal.app_tools.rendering_view.client.docKh,"key",io.pedestal.app_tools.rendering_view.client.key_handler);
});
goog.provide('io.pedestal.app_tools.rendering_view.client.SinkInputQueue');

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
io.pedestal.app_tools.rendering_view.client.SinkInputQueue = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9463__auto__){
var self__ = this;
var h__9335__auto__ = self__.__hash;
if(!((h__9335__auto__ == null)))
{return h__9335__auto__;
} else
{var h__9335__auto____$1 = cljs.core.hash_imap.call(null,this__9463__auto__);
self__.__hash = h__9335__auto____$1;
return h__9335__auto____$1;
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9468__auto__,k__9469__auto__){
var self__ = this;
return this__9468__auto__.cljs$core$ILookup$_lookup$arity$3(this__9468__auto__,k__9469__auto__,null);
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9470__auto__,k13901,else__9471__auto__){
var self__ = this;
if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k13901,else__9471__auto__);
} else
{return null;
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9475__auto__,k__9476__auto__,G__13900){
var self__ = this;
var pred__13903 = cljs.core.identical_QMARK_;
var expr__13904 = k__9476__auto__;
return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9476__auto__,G__13900),null));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9482__auto__,writer__9483__auto__,opts__9484__auto__){
var self__ = this;
var pr_pair__9485__auto__ = (function (keyval__9486__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9483__auto__,cljs.core.pr_writer,""," ","",opts__9484__auto__,keyval__9486__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__9483__auto__,pr_pair__9485__auto__,"#io.pedestal.app-tools.rendering-view.client.SinkInputQueue{",", ","}",opts__9484__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9473__auto__,entry__9474__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__9474__auto__))
{return this__9473__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9473__auto__,cljs.core._nth.call(null,entry__9474__auto__,0),cljs.core._nth.call(null,entry__9474__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9473__auto__,entry__9474__auto__);
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9480__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9472__auto__){
var self__ = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.io$pedestal$app$protocols$PutMessage$ = true;
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.io$pedestal$app$protocols$PutMessage$put_message$arity$2 = (function (this$,message){
var self__ = this;
return io.pedestal.app.util.log.debug.call(null,"\uFDD0:in","\uFDD0:SinkInputQueue","\uFDD0:discard-message",message);
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9464__auto__,other__9465__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__9465__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__9464__auto__.constructor === other__9465__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__9464__auto__,other__9465__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9467__auto__,G__13900){
var self__ = this;
return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue(G__13900,self__.__extmap,self__.__hash));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9466__auto__){
var self__ = this;
return self__.__meta;
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9477__auto__,k__9478__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__9478__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9477__auto__),self__.__meta),k__9478__auto__);
} else
{return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9478__auto__)),null));
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.cljs$lang$type = true;
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.cljs$lang$ctorPrSeq = (function (this__9502__auto__){
return cljs.core.list.call(null,"io.pedestal.app-tools.rendering-view.client/SinkInputQueue");
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.cljs$lang$ctorPrWriter = (function (this__9502__auto__,writer__9503__auto__){
return cljs.core._write.call(null,writer__9503__auto__,"io.pedestal.app-tools.rendering-view.client/SinkInputQueue");
});
io.pedestal.app_tools.rendering_view.client.__GT_SinkInputQueue = (function __GT_SinkInputQueue(){
return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue());
});
io.pedestal.app_tools.rendering_view.client.map__GT_SinkInputQueue = (function map__GT_SinkInputQueue(G__13902){
return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue(null,cljs.core.dissoc.call(null,G__13902)));
});
io.pedestal.app_tools.rendering_view.client.on_error = (function on_error(response){
return io.pedestal.app.util.log.error.call(null,"\uFDD0:error",response);
});
io.pedestal.app_tools.rendering_view.client.initialize_step_recording = (function initialize_step_recording(state,recording,index){
return cljs.core.assoc.call(null,state,"\uFDD0:recording",recording,"\uFDD0:index",index);
});
/**
* Step through a sequence of changes. The scriipt argument is a vector containing
* vectors of deltas. Each vector of deltas is run in a single transaction and can
* be run forward or backwords.
*/
io.pedestal.app_tools.rendering_view.client.step = (function step(recording){
cljs.core.swap_BANG_.call(null,io.pedestal.app_tools.rendering_view.client.emitter,io.pedestal.app_tools.rendering_view.client.initialize_step_recording,recording,0);
return io.pedestal.app_tools.rendering_view.client.enable_step_keys.call(null);
});
/**
* Convert a sequence of deltas into a step recording where we run on
* delta at a time.
*/
io.pedestal.app_tools.rendering_view.client.step_each_delta = (function step_each_delta(recording){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.remove.call(null,cljs.core.keyword_QMARK_,recording)));
});
/**
* Convert a sequence of deltas with breakpoints into a step recording
* where each block will be run on each step.
*/
io.pedestal.app_tools.rendering_view.client.step_by_breakpoint = (function step_by_breakpoint(recording){
return cljs.core.vec.call(null,cljs.core.keep.call(null,(function (p1__13906_SHARP_){
if(cljs.core.keyword_QMARK_.call(null,cljs.core.first.call(null,p1__13906_SHARP_)))
{return null;
} else
{return cljs.core.vec.call(null,p1__13906_SHARP_);
}
}),cljs.core.partition_by.call(null,cljs.core.keyword_QMARK_,recording)));
});
io.pedestal.app_tools.rendering_view.client.run_recording_STAR_ = (function run_recording_STAR_(recording,mode){
var G__13908 = mode;
if(cljs.core._EQ_.call(null,"step",G__13908))
{return io.pedestal.app_tools.rendering_view.client.step.call(null,io.pedestal.app_tools.rendering_view.client.step_each_delta.call(null,recording));
} else
{if(cljs.core._EQ_.call(null,"break",G__13908))
{return io.pedestal.app_tools.rendering_view.client.step.call(null,io.pedestal.app_tools.rendering_view.client.step_by_breakpoint.call(null,recording));
} else
{if("\uFDD0:else")
{return cljs.core.swap_BANG_.call(null,io.pedestal.app_tools.rendering_view.client.emitter,io.pedestal.app_tools.rendering_view.client.run_deltas,cljs.core.remove.call(null,cljs.core.keyword_QMARK_,recording));
} else
{return null;
}
}
}
});
io.pedestal.app_tools.rendering_view.client.receive_and_run_recording = (function receive_and_run_recording(mode,response){
var recording = cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0:body")).call(null,response));
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:error")).call(null,recording)))
{domina.append_BANG_.call(null,domina.by_id.call(null,"content"),[cljs.core.str("<div class='alert'>"),cljs.core.str("<strong>Oops!</strong> "),cljs.core.str((new cljs.core.Keyword("\uFDD0:error")).call(null,recording)),cljs.core.str("."),cljs.core.str("</div>")].join(''));
} else
{}
return io.pedestal.app_tools.rendering_view.client.run_recording_STAR_.call(null,(new cljs.core.Keyword("\uFDD0:data")).call(null,recording),mode);
});
io.pedestal.app_tools.rendering_view.client.run_recording = (function run_recording(recording_name,mode){
var uri = io.pedestal.app.net.xhr.url.call(null,[cljs.core.str("/_tools/render/recordings/"),cljs.core.str(recording_name)].join(''));
io.pedestal.app.util.log.info.call(null,"\uFDD0:in","\uFDD0:run-recording","\uFDD0:uri",uri);
return io.pedestal.app.net.xhr.request.call(null,cljs.core.gensym.call(null),uri,"\uFDD0:on-success",cljs.core.partial.call(null,io.pedestal.app_tools.rendering_view.client.receive_and_run_recording,mode),"\uFDD0:on-error",io.pedestal.app_tools.rendering_view.client.on_error);
});
io.pedestal.app_tools.rendering_view.client.load_and_render = (function load_and_render(){
var uri = (new goog.Uri(document.location.toString()));
var recording_name = uri.getParameterValue("recording");
var mode = uri.getParameterValue("mode");
if(cljs.core.truth_(recording_name))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("recording-name is required"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"recording-name","recording-name",-1850562912,null)))].join('')));
}
return io.pedestal.app_tools.rendering_view.client.run_recording.call(null,recording_name,mode);
});
io.pedestal.app_tools.rendering_view.client.main = (function main(config,log_QMARK_){
if(cljs.core.truth_(log_QMARK_))
{io.pedestal.app.util.observers.subscribe.call(null,"\uFDD0:log",io.pedestal.app.util.console_log.log_map);
} else
{}
io.pedestal.app.util.log.debug.call(null,"\uFDD0:in","\uFDD0:start","\uFDD0:msg","Starting the render driver");
var input_queue = io.pedestal.app_tools.rendering_view.client.__GT_SinkInputQueue.call(null);
var render_fn = io.pedestal.app.render.push.renderer.call(null,"content",config);
cljs.core.add_watch.call(null,io.pedestal.app_tools.rendering_view.client.emitter,"\uFDD0:renderer",(function (k,r,o,n){
var o__$1 = (new cljs.core.Keyword("\uFDD0:ui")).call(null,o);
var n__$1 = (new cljs.core.Keyword("\uFDD0:ui")).call(null,n);
if(cljs.core.not_EQ_.call(null,o__$1,n__$1))
{var deltas = io.pedestal.app.tree.since_t.call(null,n__$1,io.pedestal.app.tree.t.call(null,o__$1));
io.pedestal.app.util.platform.log_group.call(null,"Rendering Deltas",deltas);
return render_fn.call(null,deltas,input_queue);
} else
{return null;
}
}));
return io.pedestal.app_tools.rendering_view.client.load_and_render.call(null);
});
io.pedestal.app_tools.rendering_view.client.repl = (function repl(){
return io.pedestal.app.net.repl_client.repl.call(null);
});
goog.exportSymbol('io.pedestal.app_tools.rendering_view.client.repl', io.pedestal.app_tools.rendering_view.client.repl);
