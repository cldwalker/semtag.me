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
io.pedestal.app_tools.rendering_view.client.emitter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:ui",io.pedestal.app.tree.new_app_model,"\uFDD0:recording",null,"\uFDD0:index",0], true));
io.pedestal.app_tools.rendering_view.client.run_deltas = (function run_deltas(state,deltas){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.PersistentVector.fromArray(["\uFDD0:ui"], true),io.pedestal.app.tree.apply_deltas,deltas);
});
io.pedestal.app_tools.rendering_view.client.step_forward = (function step_forward(state){
var temp__4090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:recording")).call(null,state),(new cljs.core.Keyword("\uFDD0:index")).call(null,state));
if(cljs.core.truth_(temp__4090__auto__))
{var next_step = temp__4090__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(io.pedestal.app_tools.rendering_view.client.run_deltas(state,next_step),cljs.core.PersistentVector.fromArray(["\uFDD0:index"], true),cljs.core.inc);
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
var next_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:recording")).call(null,state),index);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(io.pedestal.app_tools.rendering_view.client.run_deltas(state,((cljs.core.map_QMARK_(cljs.core.first(next_step)))?cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.EMPTY], true)], true):io.pedestal.app.tree.invert(next_step))),"\uFDD0:index",index);
}
});
io.pedestal.app_tools.rendering_view.client.docKh = (new goog.events.KeyHandler(document));
io.pedestal.app_tools.rendering_view.client.step_forward_QMARK_ = (function step_forward_QMARK_(key_code){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT);
});
io.pedestal.app_tools.rendering_view.client.step_back_QMARK_ = (function step_back_QMARK_(key_code){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT);
});
io.pedestal.app_tools.rendering_view.client.key_handler = (function key_handler(e){
var key_code = e.keyCode;
if(cljs.core.truth_(io.pedestal.app_tools.rendering_view.client.step_forward_QMARK_(key_code)))
{e.preventDefault();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(io.pedestal.app_tools.rendering_view.client.emitter,io.pedestal.app_tools.rendering_view.client.step_forward);
} else
{if(cljs.core.truth_(io.pedestal.app_tools.rendering_view.client.step_back_QMARK_(key_code)))
{e.preventDefault();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(io.pedestal.app_tools.rendering_view.client.emitter,io.pedestal.app_tools.rendering_view.client.step_back);
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
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9469__auto__){
var self__ = this;
var h__9341__auto__ = self__.__hash;
if(!((h__9341__auto__ == null)))
{return h__9341__auto__;
} else
{var h__9341__auto____$1 = cljs.core.hash_imap(this__9469__auto__);
self__.__hash = h__9341__auto____$1;
return h__9341__auto____$1;
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9474__auto__,k__9475__auto__){
var self__ = this;
return this__9474__auto__.cljs$core$ILookup$_lookup$arity$3(this__9474__auto__,k__9475__auto__,null);
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9476__auto__,k13930,else__9477__auto__){
var self__ = this;
if("\uFDD0:else")
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13930,else__9477__auto__);
} else
{return null;
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9481__auto__,k__9482__auto__,G__13929){
var self__ = this;
var pred__13932 = cljs.core.identical_QMARK_;
var expr__13933 = k__9482__auto__;
return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9482__auto__,G__13929),null));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9488__auto__,writer__9489__auto__,opts__9490__auto__){
var self__ = this;
var pr_pair__9491__auto__ = (function (keyval__9492__auto__){
return cljs.core.pr_sequential_writer(writer__9489__auto__,cljs.core.pr_writer,""," ","",opts__9490__auto__,keyval__9492__auto__);
});
return cljs.core.pr_sequential_writer(writer__9489__auto__,pr_pair__9491__auto__,"#io.pedestal.app-tools.rendering-view.client.SinkInputQueue{",", ","}",opts__9490__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9479__auto__,entry__9480__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_(entry__9480__auto__))
{return this__9479__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9479__auto__,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9480__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9480__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9479__auto__,entry__9480__auto__);
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9486__auto__){
var self__ = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9478__auto__){
var self__ = this;
return (0 + cljs.core.count(self__.__extmap));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.io$pedestal$app$protocols$PutMessage$ = true;
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.io$pedestal$app$protocols$PutMessage$put_message$arity$2 = (function (this$,message){
var self__ = this;
return io.pedestal.app.util.log.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:in","\uFDD0:SinkInputQueue","\uFDD0:discard-message",message], 0));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9470__auto__,other__9471__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__9471__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__9470__auto__.constructor === other__9471__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map(this__9470__auto__,other__9471__auto__);
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
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9473__auto__,G__13929){
var self__ = this;
return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue(G__13929,self__.__extmap,self__.__hash));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9472__auto__){
var self__ = this;
return self__.__meta;
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9483__auto__,k__9484__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9484__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__9483__auto__),self__.__meta),k__9484__auto__);
} else
{return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9484__auto__)),null));
}
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.cljs$lang$type = true;
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.cljs$lang$ctorPrSeq = (function (this__9508__auto__){
return cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["io.pedestal.app-tools.rendering-view.client/SinkInputQueue"], 0));
});
io.pedestal.app_tools.rendering_view.client.SinkInputQueue.cljs$lang$ctorPrWriter = (function (this__9508__auto__,writer__9509__auto__){
return cljs.core._write(writer__9509__auto__,"io.pedestal.app-tools.rendering-view.client/SinkInputQueue");
});
io.pedestal.app_tools.rendering_view.client.__GT_SinkInputQueue = (function __GT_SinkInputQueue(){
return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue());
});
io.pedestal.app_tools.rendering_view.client.map__GT_SinkInputQueue = (function map__GT_SinkInputQueue(G__13931){
return (new io.pedestal.app_tools.rendering_view.client.SinkInputQueue(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__13931)));
});
io.pedestal.app_tools.rendering_view.client.on_error = (function on_error(response){
return io.pedestal.app.util.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:error",response], 0));
});
io.pedestal.app_tools.rendering_view.client.initialize_step_recording = (function initialize_step_recording(state,recording,index){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,"\uFDD0:recording",recording,cljs.core.array_seq(["\uFDD0:index",index], 0));
});
/**
* Step through a sequence of changes. The scriipt argument is a vector containing
* vectors of deltas. Each vector of deltas is run in a single transaction and can
* be run forward or backwords.
*/
io.pedestal.app_tools.rendering_view.client.step = (function step(recording){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(io.pedestal.app_tools.rendering_view.client.emitter,io.pedestal.app_tools.rendering_view.client.initialize_step_recording,recording,0);
return io.pedestal.app_tools.rendering_view.client.enable_step_keys();
});
/**
* Convert a sequence of deltas into a step recording where we run on
* delta at a time.
*/
io.pedestal.app_tools.rendering_view.client.step_each_delta = (function step_each_delta(recording){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.remove(cljs.core.keyword_QMARK_,recording)));
});
/**
* Convert a sequence of deltas with breakpoints into a step recording
* where each block will be run on each step.
*/
io.pedestal.app_tools.rendering_view.client.step_by_breakpoint = (function step_by_breakpoint(recording){
return cljs.core.vec(cljs.core.keep((function (p1__13935_SHARP_){
if(cljs.core.keyword_QMARK_(cljs.core.first(p1__13935_SHARP_)))
{return null;
} else
{return cljs.core.vec(p1__13935_SHARP_);
}
}),cljs.core.partition_by(cljs.core.keyword_QMARK_,recording)));
});
io.pedestal.app_tools.rendering_view.client.run_recording_STAR_ = (function run_recording_STAR_(recording,mode){
var G__13937 = mode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("step",G__13937))
{return io.pedestal.app_tools.rendering_view.client.step(io.pedestal.app_tools.rendering_view.client.step_each_delta(recording));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("break",G__13937))
{return io.pedestal.app_tools.rendering_view.client.step(io.pedestal.app_tools.rendering_view.client.step_by_breakpoint(recording));
} else
{if("\uFDD0:else")
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(io.pedestal.app_tools.rendering_view.client.emitter,io.pedestal.app_tools.rendering_view.client.run_deltas,cljs.core.remove(cljs.core.keyword_QMARK_,recording));
} else
{return null;
}
}
}
});
io.pedestal.app_tools.rendering_view.client.receive_and_run_recording = (function receive_and_run_recording(mode,response){
var recording = cljs.reader.read_string((new cljs.core.Keyword("\uFDD0:body")).call(null,response));
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:error")).call(null,recording)))
{domina.append_BANG_(domina.by_id("content"),[cljs.core.str("<div class='alert'>"),cljs.core.str("<strong>Oops!</strong> "),cljs.core.str((new cljs.core.Keyword("\uFDD0:error")).call(null,recording)),cljs.core.str("."),cljs.core.str("</div>")].join(''));
} else
{}
return io.pedestal.app_tools.rendering_view.client.run_recording_STAR_((new cljs.core.Keyword("\uFDD0:data")).call(null,recording),mode);
});
io.pedestal.app_tools.rendering_view.client.run_recording = (function run_recording(recording_name,mode){
var uri = io.pedestal.app.net.xhr.url([cljs.core.str("/_tools/render/recordings/"),cljs.core.str(recording_name)].join(''));
io.pedestal.app.util.log.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:in","\uFDD0:run-recording","\uFDD0:uri",uri], 0));
return io.pedestal.app.net.xhr.request.cljs$core$IFn$_invoke$arity$variadic(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),uri,cljs.core.array_seq(["\uFDD0:on-success",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app_tools.rendering_view.client.receive_and_run_recording,mode),"\uFDD0:on-error",io.pedestal.app_tools.rendering_view.client.on_error], 0));
});
io.pedestal.app_tools.rendering_view.client.load_and_render = (function load_and_render(){
var uri = (new goog.Uri(document.location.toString()));
var recording_name = uri.getParameterValue("recording");
var mode = uri.getParameterValue("mode");
if(cljs.core.truth_(recording_name))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("recording-name is required"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"recording-name","recording-name",-1850562912,null)], 0)))].join('')));
}
return io.pedestal.app_tools.rendering_view.client.run_recording(recording_name,mode);
});
io.pedestal.app_tools.rendering_view.client.main = (function main(config,log_QMARK_){
if(cljs.core.truth_(log_QMARK_))
{io.pedestal.app.util.observers.subscribe("\uFDD0:log",io.pedestal.app.util.console_log.log_map);
} else
{}
io.pedestal.app.util.log.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:in","\uFDD0:start","\uFDD0:msg","Starting the render driver"], 0));
var input_queue = io.pedestal.app_tools.rendering_view.client.__GT_SinkInputQueue();
var render_fn = io.pedestal.app.render.push.renderer.cljs$core$IFn$_invoke$arity$2("content",config);
cljs.core.add_watch(io.pedestal.app_tools.rendering_view.client.emitter,"\uFDD0:renderer",(function (k,r,o,n){
var o__$1 = (new cljs.core.Keyword("\uFDD0:ui")).call(null,o);
var n__$1 = (new cljs.core.Keyword("\uFDD0:ui")).call(null,n);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(o__$1,n__$1))
{var deltas = io.pedestal.app.tree.since_t(n__$1,io.pedestal.app.tree.t(o__$1));
io.pedestal.app.util.platform.log_group("Rendering Deltas",deltas);
return (render_fn.cljs$core$IFn$_invoke$arity$2 ? render_fn.cljs$core$IFn$_invoke$arity$2(deltas,input_queue) : render_fn.call(null,deltas,input_queue));
} else
{return null;
}
}));
return io.pedestal.app_tools.rendering_view.client.load_and_render();
});
io.pedestal.app_tools.rendering_view.client.repl = (function repl(){
return io.pedestal.app.net.repl_client.repl.cljs$core$IFn$_invoke$arity$0();
});
goog.exportSymbol('io.pedestal.app_tools.rendering_view.client.repl', io.pedestal.app_tools.rendering_view.client.repl);
