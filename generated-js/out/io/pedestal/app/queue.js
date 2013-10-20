goog.provide('io.pedestal.app.queue');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.protocols');
io.pedestal.app.queue.pop_message_internal = (function pop_message_internal(queue_state){
var queues = (new cljs.core.Keyword("\uFDD0:queues")).call(null,queue_state);
var priority = ((cljs.core.seq((new cljs.core.Keyword("\uFDD0:high")).call(null,queues)))?"\uFDD0:high":"\uFDD0:low");
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(queue_state,"\uFDD0:item",cljs.core.first((priority.cljs$core$IFn$_invoke$arity$1 ? priority.cljs$core$IFn$_invoke$arity$1(queues) : priority.call(null,queues)))),cljs.core.PersistentVector.fromArray(["\uFDD0:queues",priority], true),(function (p1__15080_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__15080_SHARP_));
}));
});
io.pedestal.app.queue.not_empty_QMARK_ = (function not_empty_QMARK_(queue){
var or__3943__auto__ = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(queue,cljs.core.PersistentVector.fromArray(["\uFDD0:queues","\uFDD0:high"], true)));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(queue,cljs.core.PersistentVector.fromArray(["\uFDD0:queues","\uFDD0:low"], true)));
}
});
io.pedestal.app.queue.process_next_item = (function process_next_item(queue,f){
if(cljs.core.truth_(io.pedestal.app.queue.not_empty_QMARK_(cljs.core.deref(queue))))
{var temp__4092__auto__ = (new cljs.core.Keyword("\uFDD0:item")).call(null,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(queue,io.pedestal.app.queue.pop_message_internal));
if(cljs.core.truth_(temp__4092__auto__))
{var item = temp__4092__auto__;
return io.pedestal.app.util.platform.log_exceptions.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.array_seq([item], 0));
} else
{return null;
}
} else
{return io.pedestal.app.util.platform.create_timeout(0,(function (){
return process_next_item(queue,f);
}));
}
});
io.pedestal.app.queue.count_queues = (function count_queues(queues){
return (cljs.core.count((new cljs.core.Keyword("\uFDD0:high")).call(null,queues)) + cljs.core.count((new cljs.core.Keyword("\uFDD0:low")).call(null,queues)));
});
goog.provide('io.pedestal.app.queue.AppMessageQueue');

/**
* @constructor
* @param {*} state
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
io.pedestal.app.queue.AppMessageQueue = (function (state,__meta,__extmap){
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9749__auto__){
var self__ = this;
var h__9621__auto__ = self__.__hash;
if(!((h__9621__auto__ == null)))
{return h__9621__auto__;
} else
{var h__9621__auto____$1 = cljs.core.hash_imap(this__9749__auto__);
self__.__hash = h__9621__auto____$1;
return h__9621__auto____$1;
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$ = true;
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$pop_message$arity$1 = (function (this$){
var self__ = this;
return (new cljs.core.Keyword("\uFDD0:item")).call(null,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,io.pedestal.app.queue.pop_message_internal));
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$take_message$arity$2 = (function (this$,f){
var self__ = this;
return io.pedestal.app.queue.process_next_item(self__.state,f);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9754__auto__,k__9755__auto__){
var self__ = this;
return this__9754__auto__.cljs$core$ILookup$_lookup$arity$3(this__9754__auto__,k__9755__auto__,null);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9756__auto__,k15082,else__9757__auto__){
var self__ = this;
if((k15082 === "\uFDD0:state"))
{return self__.state;
} else
{if("\uFDD0:else")
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15082,else__9757__auto__);
} else
{return null;
}
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9761__auto__,k__9762__auto__,G__15081){
var self__ = this;
var pred__15084 = cljs.core.identical_QMARK_;
var expr__15085 = k__9762__auto__;
if((pred__15084.cljs$core$IFn$_invoke$arity$2 ? pred__15084.cljs$core$IFn$_invoke$arity$2("\uFDD0:state",expr__15085) : pred__15084.call(null,"\uFDD0:state",expr__15085)))
{return (new io.pedestal.app.queue.AppMessageQueue(G__15081,self__.__meta,self__.__extmap,null));
} else
{return (new io.pedestal.app.queue.AppMessageQueue(self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9762__auto__,G__15081),null));
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9768__auto__,writer__9769__auto__,opts__9770__auto__){
var self__ = this;
var pr_pair__9771__auto__ = (function (keyval__9772__auto__){
return cljs.core.pr_sequential_writer(writer__9769__auto__,cljs.core.pr_writer,""," ","",opts__9770__auto__,keyval__9772__auto__);
});
return cljs.core.pr_sequential_writer(writer__9769__auto__,pr_pair__9771__auto__,"#io.pedestal.app.queue.AppMessageQueue{",", ","}",opts__9770__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray([cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:state",self__.state], 0))], true),self__.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9759__auto__,entry__9760__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_(entry__9760__auto__))
{return this__9759__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9759__auto__,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9760__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9760__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9759__auto__,entry__9760__auto__);
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9766__auto__){
var self__ = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray([cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:state",self__.state], 0))], true),self__.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9758__auto__){
var self__ = this;
return (1 + cljs.core.count(self__.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$PutMessage$ = true;
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$PutMessage$put_message$arity$2 = (function (this$,message){
var self__ = this;
var priority = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((io.pedestal.app.messages.priority.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.priority.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.priority.call(null,message)),"\uFDD0:high"))?"\uFDD0:high":"\uFDD0:low");
var queues = (new cljs.core.Keyword("\uFDD0:queues")).call(null,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$5(self__.state,cljs.core.update_in,cljs.core.PersistentVector.fromArray(["\uFDD0:queues",priority], true),cljs.core.conj,message));
return io.pedestal.app.queue.count_queues(queues);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9750__auto__,other__9751__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__9751__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__9750__auto__.constructor === other__9751__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map(this__9750__auto__,other__9751__auto__);
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
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9753__auto__,G__15081){
var self__ = this;
return (new io.pedestal.app.queue.AppMessageQueue(self__.state,G__15081,self__.__extmap,self__.__hash));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9752__auto__){
var self__ = this;
return self__.__meta;
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9763__auto__,k__9764__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.fromArray(["\uFDD0:state",null], true),k__9764__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__9763__auto__),self__.__meta),k__9764__auto__);
} else
{return (new io.pedestal.app.queue.AppMessageQueue(self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9764__auto__)),null));
}
});
io.pedestal.app.queue.AppMessageQueue.cljs$lang$type = true;
io.pedestal.app.queue.AppMessageQueue.cljs$lang$ctorPrSeq = (function (this__9788__auto__){
return cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["io.pedestal.app.queue/AppMessageQueue"], 0));
});
io.pedestal.app.queue.AppMessageQueue.cljs$lang$ctorPrWriter = (function (this__9788__auto__,writer__9789__auto__){
return cljs.core._write(writer__9789__auto__,"io.pedestal.app.queue/AppMessageQueue");
});
io.pedestal.app.queue.__GT_AppMessageQueue = (function __GT_AppMessageQueue(state){
return (new io.pedestal.app.queue.AppMessageQueue(state));
});
io.pedestal.app.queue.map__GT_AppMessageQueue = (function map__GT_AppMessageQueue(G__15083){
return (new io.pedestal.app.queue.AppMessageQueue((new cljs.core.Keyword("\uFDD0:state")).call(null,G__15083),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15083,"\uFDD0:state")));
});
io.pedestal.app.queue.queue_length = (function queue_length(app_message_queue){
var queues = (new cljs.core.Keyword("\uFDD0:queues")).call(null,cljs.core.deref((new cljs.core.Keyword("\uFDD0:state")).call(null,app_message_queue)));
return io.pedestal.app.queue.count_queues(queues);
});
io.pedestal.app.queue.queue = (function queue(name){
return io.pedestal.app.queue.__GT_AppMessageQueue(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:queues",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:high",cljs.core.PersistentVector.EMPTY,"\uFDD0:low",cljs.core.PersistentVector.EMPTY], true),"\uFDD0:item",null,"\uFDD0:name",name], true)));
});
/**
* Recursively process each item on the given queue with the
* provided function.
*/
io.pedestal.app.queue.consume_queue = (function consume_queue(queue,f){
return io.pedestal.app.protocols.take_message(queue,(function (message){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(message) : f.call(null,message));
return consume_queue(queue,f);
}));
});
