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
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if((void 0 === domina.events.t17319))
{goog.provide('domina.events.t17319');

/**
* @constructor
*/
domina.events.t17319 = (function (evt,f,create_listener_function,meta17320){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17320 = meta17320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17319.cljs$lang$type = true;
domina.events.t17319.cljs$lang$ctorStr = "domina.events/t17319";
domina.events.t17319.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"domina.events/t17319");
});
domina.events.t17319.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t17319.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t17319.prototype.domina$events$Event$ = true;
domina.events.t17319.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t17319.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t17319.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t17319.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t17319.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t17319.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t17319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17321){
var self__ = this;
return self__.meta17320;
});
domina.events.t17319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17321,meta17320__$1){
var self__ = this;
return (new domina.events.t17319(self__.evt,self__.f,self__.create_listener_function,meta17320__$1));
});
domina.events.__GT_t17319 = (function __GT_t17319(evt__$1,f__$1,create_listener_function__$1,meta17320){
return (new domina.events.t17319(evt__$1,f__$1,create_listener_function__$1,meta17320));
});
} else
{}
return (new domina.events.t17319(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if((void 0 === domina.events.t17319))
{
/**
* @constructor
*/
domina.events.t17319 = (function (evt,f,create_listener_function,meta17320){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17320 = meta17320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17319.cljs$lang$type = true;
domina.events.t17319.cljs$lang$ctorStr = "domina.events/t17319";
domina.events.t17319.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"domina.events/t17319");
});
domina.events.t17319.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t17319.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t17319.prototype.domina$events$Event$ = true;
domina.events.t17319.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t17319.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t17319.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t17319.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t17319.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t17319.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t17319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17321){
var self__ = this;
return self__.meta17320;
});
domina.events.t17319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17321,meta17320__$1){
var self__ = this;
return (new domina.events.t17319(self__.evt,self__.f,self__.create_listener_function,meta17320__$1));
});
domina.events.__GT_t17319 = (function __GT_t17319(evt__$1,f__$1,create_listener_function__$1,meta17320){
return (new domina.events.t17319(evt__$1,f__$1,create_listener_function__$1,meta17320));
});
} else
{}
return (new domina.events.t17319(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = domina.events.find_builtin_type(type);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9895__auto__ = (function iter__17326(s__17327){
return (new cljs.core.LazySeq(null,false,(function (){
var s__17327__$1 = s__17327;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__17327__$1);
if(temp__4092__auto__)
{var s__17327__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17327__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__17327__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__17329 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__17328 = 0;
while(true){
if((i__17328 < size__9894__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__17328);
cljs.core.chunk_append(b__17329,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17330 = (i__17328 + 1);
i__17328 = G__17330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17329),iter__17326(cljs.core.chunk_rest(s__17327__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17329),null);
}
} else
{var node = cljs.core.first(s__17327__$2);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17326(cljs.core.rest(s__17327__$2)));
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
var seq__17339 = cljs.core.seq(domina.nodes(content));
var chunk__17340 = null;
var count__17341 = 0;
var i__17342 = 0;
while(true){
if((i__17342 < count__17341))
{var node = chunk__17340.cljs$core$IIndexed$_nth$arity$2(chunk__17340,i__17342);
goog.events.removeAll(node);
{
var G__17347 = seq__17339;
var G__17348 = chunk__17340;
var G__17349 = count__17341;
var G__17350 = (i__17342 + 1);
seq__17339 = G__17347;
chunk__17340 = G__17348;
count__17341 = G__17349;
i__17342 = G__17350;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__17339);
if(temp__4092__auto__)
{var seq__17339__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17339__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__17339__$1);
{
var G__17351 = cljs.core.chunk_rest(seq__17339__$1);
var G__17352 = c__9926__auto__;
var G__17353 = cljs.core.count(c__9926__auto__);
var G__17354 = 0;
seq__17339 = G__17351;
chunk__17340 = G__17352;
count__17341 = G__17353;
i__17342 = G__17354;
continue;
}
} else
{var node = cljs.core.first(seq__17339__$1);
goog.events.removeAll(node);
{
var G__17355 = cljs.core.next(seq__17339__$1);
var G__17356 = null;
var G__17357 = 0;
var G__17358 = 0;
seq__17339 = G__17355;
chunk__17340 = G__17356;
count__17341 = G__17357;
i__17342 = G__17358;
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
var seq__17343 = cljs.core.seq(domina.nodes(content));
var chunk__17344 = null;
var count__17345 = 0;
var i__17346 = 0;
while(true){
if((i__17346 < count__17345))
{var node = chunk__17344.cljs$core$IIndexed$_nth$arity$2(chunk__17344,i__17346);
goog.events.removeAll(node,type__$1);
{
var G__17359 = seq__17343;
var G__17360 = chunk__17344;
var G__17361 = count__17345;
var G__17362 = (i__17346 + 1);
seq__17343 = G__17359;
chunk__17344 = G__17360;
count__17345 = G__17361;
i__17346 = G__17362;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__17343);
if(temp__4092__auto__)
{var seq__17343__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17343__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__17343__$1);
{
var G__17363 = cljs.core.chunk_rest(seq__17343__$1);
var G__17364 = c__9926__auto__;
var G__17365 = cljs.core.count(c__9926__auto__);
var G__17366 = 0;
seq__17343 = G__17363;
chunk__17344 = G__17364;
count__17345 = G__17365;
i__17346 = G__17366;
continue;
}
} else
{var node = cljs.core.first(seq__17343__$1);
goog.events.removeAll(node,type__$1);
{
var G__17367 = cljs.core.next(seq__17343__$1);
var G__17368 = null;
var G__17369 = 0;
var G__17370 = 0;
seq__17343 = G__17367;
chunk__17344 = G__17368;
count__17345 = G__17369;
i__17346 = G__17370;
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
var G__17371 = parent;
var G__17372 = cljs.core.cons(parent,so_far);
n = G__17371;
so_far = G__17372;
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
var seq__17381_17389 = cljs.core.seq(ancestors);
var chunk__17382_17390 = null;
var count__17383_17391 = 0;
var i__17384_17392 = 0;
while(true){
if((i__17384_17392 < count__17383_17391))
{var n_17393 = chunk__17382_17390.cljs$core$IIndexed$_nth$arity$2(chunk__17382_17390,i__17384_17392);
if(cljs.core.truth_(n_17393.propagationStopped))
{} else
{evt.currentTarget = n_17393;
goog.events.fireListeners(n_17393,evt.type,true,evt);
}
{
var G__17394 = seq__17381_17389;
var G__17395 = chunk__17382_17390;
var G__17396 = count__17383_17391;
var G__17397 = (i__17384_17392 + 1);
seq__17381_17389 = G__17394;
chunk__17382_17390 = G__17395;
count__17383_17391 = G__17396;
i__17384_17392 = G__17397;
continue;
}
} else
{var temp__4092__auto___17398 = cljs.core.seq(seq__17381_17389);
if(temp__4092__auto___17398)
{var seq__17381_17399__$1 = temp__4092__auto___17398;
if(cljs.core.chunked_seq_QMARK_(seq__17381_17399__$1))
{var c__9926__auto___17400 = cljs.core.chunk_first(seq__17381_17399__$1);
{
var G__17401 = cljs.core.chunk_rest(seq__17381_17399__$1);
var G__17402 = c__9926__auto___17400;
var G__17403 = cljs.core.count(c__9926__auto___17400);
var G__17404 = 0;
seq__17381_17389 = G__17401;
chunk__17382_17390 = G__17402;
count__17383_17391 = G__17403;
i__17384_17392 = G__17404;
continue;
}
} else
{var n_17405 = cljs.core.first(seq__17381_17399__$1);
if(cljs.core.truth_(n_17405.propagationStopped))
{} else
{evt.currentTarget = n_17405;
goog.events.fireListeners(n_17405,evt.type,true,evt);
}
{
var G__17406 = cljs.core.next(seq__17381_17399__$1);
var G__17407 = null;
var G__17408 = 0;
var G__17409 = 0;
seq__17381_17389 = G__17406;
chunk__17382_17390 = G__17407;
count__17383_17391 = G__17408;
i__17384_17392 = G__17409;
continue;
}
}
} else
{}
}
break;
}
var seq__17385_17410 = cljs.core.seq(cljs.core.reverse(ancestors));
var chunk__17386_17411 = null;
var count__17387_17412 = 0;
var i__17388_17413 = 0;
while(true){
if((i__17388_17413 < count__17387_17412))
{var n_17414 = chunk__17386_17411.cljs$core$IIndexed$_nth$arity$2(chunk__17386_17411,i__17388_17413);
if(cljs.core.truth_(n_17414.propagationStopped))
{} else
{evt.currentTarget = n_17414;
goog.events.fireListeners(n_17414,evt.type,false,evt);
}
{
var G__17415 = seq__17385_17410;
var G__17416 = chunk__17386_17411;
var G__17417 = count__17387_17412;
var G__17418 = (i__17388_17413 + 1);
seq__17385_17410 = G__17415;
chunk__17386_17411 = G__17416;
count__17387_17412 = G__17417;
i__17388_17413 = G__17418;
continue;
}
} else
{var temp__4092__auto___17419 = cljs.core.seq(seq__17385_17410);
if(temp__4092__auto___17419)
{var seq__17385_17420__$1 = temp__4092__auto___17419;
if(cljs.core.chunked_seq_QMARK_(seq__17385_17420__$1))
{var c__9926__auto___17421 = cljs.core.chunk_first(seq__17385_17420__$1);
{
var G__17422 = cljs.core.chunk_rest(seq__17385_17420__$1);
var G__17423 = c__9926__auto___17421;
var G__17424 = cljs.core.count(c__9926__auto___17421);
var G__17425 = 0;
seq__17385_17410 = G__17422;
chunk__17386_17411 = G__17423;
count__17387_17412 = G__17424;
i__17388_17413 = G__17425;
continue;
}
} else
{var n_17426 = cljs.core.first(seq__17385_17420__$1);
if(cljs.core.truth_(n_17426.propagationStopped))
{} else
{evt.currentTarget = n_17426;
goog.events.fireListeners(n_17426,evt.type,false,evt);
}
{
var G__17427 = cljs.core.next(seq__17385_17420__$1);
var G__17428 = null;
var G__17429 = 0;
var G__17430 = 0;
seq__17385_17410 = G__17427;
chunk__17386_17411 = G__17428;
count__17387_17412 = G__17429;
i__17388_17413 = G__17430;
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
var seq__17437_17443 = cljs.core.seq(evt_map);
var chunk__17438_17444 = null;
var count__17439_17445 = 0;
var i__17440_17446 = 0;
while(true){
if((i__17440_17446 < count__17439_17445))
{var vec__17441_17447 = chunk__17438_17444.cljs$core$IIndexed$_nth$arity$2(chunk__17438_17444,i__17440_17446);
var k_17448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17441_17447,0,null);
var v_17449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17441_17447,1,null);
(evt[k_17448] = v_17449);
{
var G__17450 = seq__17437_17443;
var G__17451 = chunk__17438_17444;
var G__17452 = count__17439_17445;
var G__17453 = (i__17440_17446 + 1);
seq__17437_17443 = G__17450;
chunk__17438_17444 = G__17451;
count__17439_17445 = G__17452;
i__17440_17446 = G__17453;
continue;
}
} else
{var temp__4092__auto___17454 = cljs.core.seq(seq__17437_17443);
if(temp__4092__auto___17454)
{var seq__17437_17455__$1 = temp__4092__auto___17454;
if(cljs.core.chunked_seq_QMARK_(seq__17437_17455__$1))
{var c__9926__auto___17456 = cljs.core.chunk_first(seq__17437_17455__$1);
{
var G__17457 = cljs.core.chunk_rest(seq__17437_17455__$1);
var G__17458 = c__9926__auto___17456;
var G__17459 = cljs.core.count(c__9926__auto___17456);
var G__17460 = 0;
seq__17437_17443 = G__17457;
chunk__17438_17444 = G__17458;
count__17439_17445 = G__17459;
i__17440_17446 = G__17460;
continue;
}
} else
{var vec__17442_17461 = cljs.core.first(seq__17437_17455__$1);
var k_17462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17442_17461,0,null);
var v_17463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17442_17461,1,null);
(evt[k_17462] = v_17463);
{
var G__17464 = cljs.core.next(seq__17437_17455__$1);
var G__17465 = null;
var G__17466 = 0;
var G__17467 = 0;
seq__17437_17443 = G__17464;
chunk__17438_17444 = G__17465;
count__17439_17445 = G__17466;
i__17440_17446 = G__17467;
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__17468_SHARP_){
return goog.events.getListeners(p1__17468_SHARP_,type__$1,false);
}),domina.nodes(content));
});
