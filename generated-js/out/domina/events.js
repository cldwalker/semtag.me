goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__9795__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.prevent_default[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__9795__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.stop_propagation[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__9795__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.target[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__9795__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.current_target[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.current_target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__9795__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.event_type[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.event_type["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__9795__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.raw_event[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.raw_event["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_(domina.events.builtin_events,evt_type))
{return cljs.core.name(evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if((void 0 === domina.events.t156639))
{goog.provide('domina.events.t156639');

/**
* @constructor
*/
domina.events.t156639 = (function (evt,f,create_listener_function,meta156640){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta156640 = meta156640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t156639.cljs$lang$type = true;
domina.events.t156639.cljs$lang$ctorStr = "domina.events/t156639";
domina.events.t156639.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"domina.events/t156639");
});
domina.events.t156639.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t156639.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t156639.prototype.domina$events$Event$ = true;
domina.events.t156639.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t156639.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t156639.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t156639.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t156639.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t156639.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t156639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156641){
var self__ = this;
return self__.meta156640;
});
domina.events.t156639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156641,meta156640__$1){
var self__ = this;
return (new domina.events.t156639(self__.evt,self__.f,self__.create_listener_function,meta156640__$1));
});
domina.events.__GT_t156639 = (function __GT_t156639(evt__$1,f__$1,create_listener_function__$1,meta156640){
return (new domina.events.t156639(evt__$1,f__$1,create_listener_function__$1,meta156640));
});
} else
{}
return (new domina.events.t156639(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if((void 0 === domina.events.t156639))
{
/**
* @constructor
*/
domina.events.t156639 = (function (evt,f,create_listener_function,meta156640){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta156640 = meta156640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t156639.cljs$lang$type = true;
domina.events.t156639.cljs$lang$ctorStr = "domina.events/t156639";
domina.events.t156639.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"domina.events/t156639");
});
domina.events.t156639.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t156639.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t156639.prototype.domina$events$Event$ = true;
domina.events.t156639.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t156639.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t156639.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t156639.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t156639.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t156639.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t156639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156641){
var self__ = this;
return self__.meta156640;
});
domina.events.t156639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156641,meta156640__$1){
var self__ = this;
return (new domina.events.t156639(self__.evt,self__.f,self__.create_listener_function,meta156640__$1));
});
domina.events.__GT_t156639 = (function __GT_t156639(evt__$1,f__$1,create_listener_function__$1,meta156640){
return (new domina.events.t156639(evt__$1,f__$1,create_listener_function__$1,meta156640));
});
} else
{}
return (new domina.events.t156639(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = domina.events.find_builtin_type(type);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9895__auto__ = (function iter__156646(s__156647){
return (new cljs.core.LazySeq(null,false,(function (){
var s__156647__$1 = s__156647;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__156647__$1);
if(temp__4092__auto__)
{var s__156647__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s__156647__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__156647__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__156649 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__156648 = 0;
while(true){
if((i__156648 < size__9894__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__156648);
cljs.core.chunk_append(b__156649,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__156650 = (i__156648 + 1);
i__156648 = G__156650;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__156649),iter__156646(cljs.core.chunk_rest(s__156647__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__156649),null);
}
} else
{var node = cljs.core.first(s__156647__$2);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__156646(cljs.core.rest(s__156647__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9895__auto__(domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.cljs$core$IFn$_invoke$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__156659 = cljs.core.seq(domina.nodes(content));
var chunk__156660 = null;
var count__156661 = 0;
var i__156662 = 0;
while(true){
if((i__156662 < count__156661))
{var node = chunk__156660.cljs$core$IIndexed$_nth$arity$2(chunk__156660,i__156662);
goog.events.removeAll(node);
{
var G__156667 = seq__156659;
var G__156668 = chunk__156660;
var G__156669 = count__156661;
var G__156670 = (i__156662 + 1);
seq__156659 = G__156667;
chunk__156660 = G__156668;
count__156661 = G__156669;
i__156662 = G__156670;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__156659);
if(temp__4092__auto__)
{var seq__156659__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__156659__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__156659__$1);
{
var G__156671 = cljs.core.chunk_rest(seq__156659__$1);
var G__156672 = c__9926__auto__;
var G__156673 = cljs.core.count(c__9926__auto__);
var G__156674 = 0;
seq__156659 = G__156671;
chunk__156660 = G__156672;
count__156661 = G__156673;
i__156662 = G__156674;
continue;
}
} else
{var node = cljs.core.first(seq__156659__$1);
goog.events.removeAll(node);
{
var G__156675 = cljs.core.next(seq__156659__$1);
var G__156676 = null;
var G__156677 = 0;
var G__156678 = 0;
seq__156659 = G__156675;
chunk__156660 = G__156676;
count__156661 = G__156677;
i__156662 = G__156678;
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
var unlisten_BANG___2 = (function (content,type){
var type__$1 = domina.events.find_builtin_type(type);
var seq__156663 = cljs.core.seq(domina.nodes(content));
var chunk__156664 = null;
var count__156665 = 0;
var i__156666 = 0;
while(true){
if((i__156666 < count__156665))
{var node = chunk__156664.cljs$core$IIndexed$_nth$arity$2(chunk__156664,i__156666);
goog.events.removeAll(node,type__$1);
{
var G__156679 = seq__156663;
var G__156680 = chunk__156664;
var G__156681 = count__156665;
var G__156682 = (i__156666 + 1);
seq__156663 = G__156679;
chunk__156664 = G__156680;
count__156665 = G__156681;
i__156666 = G__156682;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__156663);
if(temp__4092__auto__)
{var seq__156663__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__156663__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__156663__$1);
{
var G__156683 = cljs.core.chunk_rest(seq__156663__$1);
var G__156684 = c__9926__auto__;
var G__156685 = cljs.core.count(c__9926__auto__);
var G__156686 = 0;
seq__156663 = G__156683;
chunk__156664 = G__156684;
count__156665 = G__156685;
i__156666 = G__156686;
continue;
}
} else
{var node = cljs.core.first(seq__156663__$1);
goog.events.removeAll(node,type__$1);
{
var G__156687 = cljs.core.next(seq__156663__$1);
var G__156688 = null;
var G__156689 = 0;
var G__156690 = 0;
seq__156663 = G__156687;
chunk__156664 = G__156688;
count__156665 = G__156689;
i__156666 = G__156690;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.cljs$core$IFn$_invoke$arity$2(n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4090__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;
{
var G__156691 = parent;
var G__156692 = cljs.core.cons(parent,so_far);
n = G__156691;
so_far = G__156692;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));
var seq__156701_156709 = cljs.core.seq(ancestors);
var chunk__156702_156710 = null;
var count__156703_156711 = 0;
var i__156704_156712 = 0;
while(true){
if((i__156704_156712 < count__156703_156711))
{var n_156713 = chunk__156702_156710.cljs$core$IIndexed$_nth$arity$2(chunk__156702_156710,i__156704_156712);
if(cljs.core.truth_(n_156713.propagationStopped))
{} else
{evt.currentTarget = n_156713;
goog.events.fireListeners(n_156713,evt.type,true,evt);
}
{
var G__156714 = seq__156701_156709;
var G__156715 = chunk__156702_156710;
var G__156716 = count__156703_156711;
var G__156717 = (i__156704_156712 + 1);
seq__156701_156709 = G__156714;
chunk__156702_156710 = G__156715;
count__156703_156711 = G__156716;
i__156704_156712 = G__156717;
continue;
}
} else
{var temp__4092__auto___156718 = cljs.core.seq(seq__156701_156709);
if(temp__4092__auto___156718)
{var seq__156701_156719__$1 = temp__4092__auto___156718;
if(cljs.core.chunked_seq_QMARK_(seq__156701_156719__$1))
{var c__9926__auto___156720 = cljs.core.chunk_first(seq__156701_156719__$1);
{
var G__156721 = cljs.core.chunk_rest(seq__156701_156719__$1);
var G__156722 = c__9926__auto___156720;
var G__156723 = cljs.core.count(c__9926__auto___156720);
var G__156724 = 0;
seq__156701_156709 = G__156721;
chunk__156702_156710 = G__156722;
count__156703_156711 = G__156723;
i__156704_156712 = G__156724;
continue;
}
} else
{var n_156725 = cljs.core.first(seq__156701_156719__$1);
if(cljs.core.truth_(n_156725.propagationStopped))
{} else
{evt.currentTarget = n_156725;
goog.events.fireListeners(n_156725,evt.type,true,evt);
}
{
var G__156726 = cljs.core.next(seq__156701_156719__$1);
var G__156727 = null;
var G__156728 = 0;
var G__156729 = 0;
seq__156701_156709 = G__156726;
chunk__156702_156710 = G__156727;
count__156703_156711 = G__156728;
i__156704_156712 = G__156729;
continue;
}
}
} else
{}
}
break;
}
var seq__156705_156730 = cljs.core.seq(cljs.core.reverse(ancestors));
var chunk__156706_156731 = null;
var count__156707_156732 = 0;
var i__156708_156733 = 0;
while(true){
if((i__156708_156733 < count__156707_156732))
{var n_156734 = chunk__156706_156731.cljs$core$IIndexed$_nth$arity$2(chunk__156706_156731,i__156708_156733);
if(cljs.core.truth_(n_156734.propagationStopped))
{} else
{evt.currentTarget = n_156734;
goog.events.fireListeners(n_156734,evt.type,false,evt);
}
{
var G__156735 = seq__156705_156730;
var G__156736 = chunk__156706_156731;
var G__156737 = count__156707_156732;
var G__156738 = (i__156708_156733 + 1);
seq__156705_156730 = G__156735;
chunk__156706_156731 = G__156736;
count__156707_156732 = G__156737;
i__156708_156733 = G__156738;
continue;
}
} else
{var temp__4092__auto___156739 = cljs.core.seq(seq__156705_156730);
if(temp__4092__auto___156739)
{var seq__156705_156740__$1 = temp__4092__auto___156739;
if(cljs.core.chunked_seq_QMARK_(seq__156705_156740__$1))
{var c__9926__auto___156741 = cljs.core.chunk_first(seq__156705_156740__$1);
{
var G__156742 = cljs.core.chunk_rest(seq__156705_156740__$1);
var G__156743 = c__9926__auto___156741;
var G__156744 = cljs.core.count(c__9926__auto___156741);
var G__156745 = 0;
seq__156705_156730 = G__156742;
chunk__156706_156731 = G__156743;
count__156707_156732 = G__156744;
i__156708_156733 = G__156745;
continue;
}
} else
{var n_156746 = cljs.core.first(seq__156705_156740__$1);
if(cljs.core.truth_(n_156746.propagationStopped))
{} else
{evt.currentTarget = n_156746;
goog.events.fireListeners(n_156746,evt.type,false,evt);
}
{
var G__156747 = cljs.core.next(seq__156705_156740__$1);
var G__156748 = null;
var G__156749 = 0;
var G__156750 = 0;
seq__156705_156730 = G__156747;
chunk__156706_156731 = G__156748;
count__156707_156732 = G__156749;
i__156708_156733 = G__156750;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3941__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3941__auto__))
{return o.dispatchEvent;
} else
{return and__3941__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(domina.events.find_builtin_type(type)));
var seq__156757_156763 = cljs.core.seq(evt_map);
var chunk__156758_156764 = null;
var count__156759_156765 = 0;
var i__156760_156766 = 0;
while(true){
if((i__156760_156766 < count__156759_156765))
{var vec__156761_156767 = chunk__156758_156764.cljs$core$IIndexed$_nth$arity$2(chunk__156758_156764,i__156760_156766);
var k_156768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156761_156767,0,null);
var v_156769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156761_156767,1,null);
(evt[k_156768] = v_156769);
{
var G__156770 = seq__156757_156763;
var G__156771 = chunk__156758_156764;
var G__156772 = count__156759_156765;
var G__156773 = (i__156760_156766 + 1);
seq__156757_156763 = G__156770;
chunk__156758_156764 = G__156771;
count__156759_156765 = G__156772;
i__156760_156766 = G__156773;
continue;
}
} else
{var temp__4092__auto___156774 = cljs.core.seq(seq__156757_156763);
if(temp__4092__auto___156774)
{var seq__156757_156775__$1 = temp__4092__auto___156774;
if(cljs.core.chunked_seq_QMARK_(seq__156757_156775__$1))
{var c__9926__auto___156776 = cljs.core.chunk_first(seq__156757_156775__$1);
{
var G__156777 = cljs.core.chunk_rest(seq__156757_156775__$1);
var G__156778 = c__9926__auto___156776;
var G__156779 = cljs.core.count(c__9926__auto___156776);
var G__156780 = 0;
seq__156757_156763 = G__156777;
chunk__156758_156764 = G__156778;
count__156759_156765 = G__156779;
i__156760_156766 = G__156780;
continue;
}
} else
{var vec__156762_156781 = cljs.core.first(seq__156757_156775__$1);
var k_156782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156762_156781,0,null);
var v_156783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156762_156781,1,null);
(evt[k_156782] = v_156783);
{
var G__156784 = cljs.core.next(seq__156757_156775__$1);
var G__156785 = null;
var G__156786 = 0;
var G__156787 = 0;
seq__156757_156763 = G__156784;
chunk__156758_156764 = G__156785;
count__156759_156765 = G__156786;
i__156760_156766 = G__156787;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt);
} else
{return domina.events.dispatch_browser_BANG_(source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = domina.events.find_builtin_type(type);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__156788_SHARP_){
return goog.events.getListeners(p1__156788_SHARP_,type__$1,false);
}),domina.nodes(content));
});
