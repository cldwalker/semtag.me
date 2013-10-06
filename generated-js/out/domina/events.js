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
{var x__9515__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.prevent_default[goog.typeOf(x__9515__auto__)]);
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
{var x__9515__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.stop_propagation[goog.typeOf(x__9515__auto__)]);
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
{var x__9515__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.target[goog.typeOf(x__9515__auto__)]);
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
{var x__9515__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.current_target[goog.typeOf(x__9515__auto__)]);
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
{var x__9515__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.event_type[goog.typeOf(x__9515__auto__)]);
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
{var x__9515__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.raw_event[goog.typeOf(x__9515__auto__)]);
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
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if((void 0 === domina.events.t12936))
{goog.provide('domina.events.t12936');

/**
* @constructor
*/
domina.events.t12936 = (function (evt,f,create_listener_function,meta12937){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12937 = meta12937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12936.cljs$lang$type = true;
domina.events.t12936.cljs$lang$ctorStr = "domina.events/t12936";
domina.events.t12936.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.events/t12936");
});
domina.events.t12936.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t12936.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12936.prototype.domina$events$Event$ = true;
domina.events.t12936.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12936.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12936.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12936.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12936.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12936.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12938){
var self__ = this;
return self__.meta12937;
});
domina.events.t12936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12938,meta12937__$1){
var self__ = this;
return (new domina.events.t12936(self__.evt,self__.f,self__.create_listener_function,meta12937__$1));
});
domina.events.__GT_t12936 = (function __GT_t12936(evt__$1,f__$1,create_listener_function__$1,meta12937){
return (new domina.events.t12936(evt__$1,f__$1,create_listener_function__$1,meta12937));
});
} else
{}
return (new domina.events.t12936(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if((void 0 === domina.events.t12936))
{
/**
* @constructor
*/
domina.events.t12936 = (function (evt,f,create_listener_function,meta12937){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12937 = meta12937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12936.cljs$lang$type = true;
domina.events.t12936.cljs$lang$ctorStr = "domina.events/t12936";
domina.events.t12936.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.events/t12936");
});
domina.events.t12936.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t12936.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12936.prototype.domina$events$Event$ = true;
domina.events.t12936.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12936.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12936.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12936.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12936.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12936.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12938){
var self__ = this;
return self__.meta12937;
});
domina.events.t12936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12938,meta12937__$1){
var self__ = this;
return (new domina.events.t12936(self__.evt,self__.f,self__.create_listener_function,meta12937__$1));
});
domina.events.__GT_t12936 = (function __GT_t12936(evt__$1,f__$1,create_listener_function__$1,meta12937){
return (new domina.events.t12936(evt__$1,f__$1,create_listener_function__$1,meta12937));
});
} else
{}
return (new domina.events.t12936(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = domina.events.find_builtin_type(type);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9615__auto__ = (function iter__12943(s__12944){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12944__$1 = s__12944;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__12944__$1);
if(temp__4092__auto__)
{var s__12944__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12944__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__12944__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__12946 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__12945 = 0;
while(true){
if((i__12945 < size__9614__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__12945);
cljs.core.chunk_append(b__12946,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__12947 = (i__12945 + 1);
i__12945 = G__12947;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__12946),iter__12943(cljs.core.chunk_rest(s__12944__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__12946),null);
}
} else
{var node = cljs.core.first(s__12944__$2);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__12943(cljs.core.rest(s__12944__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9615__auto__(domina.nodes(content));
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
var seq__12956 = cljs.core.seq(domina.nodes(content));
var chunk__12957 = null;
var count__12958 = 0;
var i__12959 = 0;
while(true){
if((i__12959 < count__12958))
{var node = chunk__12957.cljs$core$IIndexed$_nth$arity$2(chunk__12957,i__12959);
goog.events.removeAll(node);
{
var G__12964 = seq__12956;
var G__12965 = chunk__12957;
var G__12966 = count__12958;
var G__12967 = (i__12959 + 1);
seq__12956 = G__12964;
chunk__12957 = G__12965;
count__12958 = G__12966;
i__12959 = G__12967;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12956);
if(temp__4092__auto__)
{var seq__12956__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12956__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12956__$1);
{
var G__12968 = cljs.core.chunk_rest(seq__12956__$1);
var G__12969 = c__9646__auto__;
var G__12970 = cljs.core.count(c__9646__auto__);
var G__12971 = 0;
seq__12956 = G__12968;
chunk__12957 = G__12969;
count__12958 = G__12970;
i__12959 = G__12971;
continue;
}
} else
{var node = cljs.core.first(seq__12956__$1);
goog.events.removeAll(node);
{
var G__12972 = cljs.core.next(seq__12956__$1);
var G__12973 = null;
var G__12974 = 0;
var G__12975 = 0;
seq__12956 = G__12972;
chunk__12957 = G__12973;
count__12958 = G__12974;
i__12959 = G__12975;
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
var seq__12960 = cljs.core.seq(domina.nodes(content));
var chunk__12961 = null;
var count__12962 = 0;
var i__12963 = 0;
while(true){
if((i__12963 < count__12962))
{var node = chunk__12961.cljs$core$IIndexed$_nth$arity$2(chunk__12961,i__12963);
goog.events.removeAll(node,type__$1);
{
var G__12976 = seq__12960;
var G__12977 = chunk__12961;
var G__12978 = count__12962;
var G__12979 = (i__12963 + 1);
seq__12960 = G__12976;
chunk__12961 = G__12977;
count__12962 = G__12978;
i__12963 = G__12979;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12960);
if(temp__4092__auto__)
{var seq__12960__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12960__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12960__$1);
{
var G__12980 = cljs.core.chunk_rest(seq__12960__$1);
var G__12981 = c__9646__auto__;
var G__12982 = cljs.core.count(c__9646__auto__);
var G__12983 = 0;
seq__12960 = G__12980;
chunk__12961 = G__12981;
count__12962 = G__12982;
i__12963 = G__12983;
continue;
}
} else
{var node = cljs.core.first(seq__12960__$1);
goog.events.removeAll(node,type__$1);
{
var G__12984 = cljs.core.next(seq__12960__$1);
var G__12985 = null;
var G__12986 = 0;
var G__12987 = 0;
seq__12960 = G__12984;
chunk__12961 = G__12985;
count__12962 = G__12986;
i__12963 = G__12987;
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
var G__12988 = parent;
var G__12989 = cljs.core.cons(parent,so_far);
n = G__12988;
so_far = G__12989;
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
var seq__12998_13006 = cljs.core.seq(ancestors);
var chunk__12999_13007 = null;
var count__13000_13008 = 0;
var i__13001_13009 = 0;
while(true){
if((i__13001_13009 < count__13000_13008))
{var n_13010 = chunk__12999_13007.cljs$core$IIndexed$_nth$arity$2(chunk__12999_13007,i__13001_13009);
if(cljs.core.truth_(n_13010.propagationStopped))
{} else
{evt.currentTarget = n_13010;
goog.events.fireListeners(n_13010,evt.type,true,evt);
}
{
var G__13011 = seq__12998_13006;
var G__13012 = chunk__12999_13007;
var G__13013 = count__13000_13008;
var G__13014 = (i__13001_13009 + 1);
seq__12998_13006 = G__13011;
chunk__12999_13007 = G__13012;
count__13000_13008 = G__13013;
i__13001_13009 = G__13014;
continue;
}
} else
{var temp__4092__auto___13015 = cljs.core.seq(seq__12998_13006);
if(temp__4092__auto___13015)
{var seq__12998_13016__$1 = temp__4092__auto___13015;
if(cljs.core.chunked_seq_QMARK_(seq__12998_13016__$1))
{var c__9646__auto___13017 = cljs.core.chunk_first(seq__12998_13016__$1);
{
var G__13018 = cljs.core.chunk_rest(seq__12998_13016__$1);
var G__13019 = c__9646__auto___13017;
var G__13020 = cljs.core.count(c__9646__auto___13017);
var G__13021 = 0;
seq__12998_13006 = G__13018;
chunk__12999_13007 = G__13019;
count__13000_13008 = G__13020;
i__13001_13009 = G__13021;
continue;
}
} else
{var n_13022 = cljs.core.first(seq__12998_13016__$1);
if(cljs.core.truth_(n_13022.propagationStopped))
{} else
{evt.currentTarget = n_13022;
goog.events.fireListeners(n_13022,evt.type,true,evt);
}
{
var G__13023 = cljs.core.next(seq__12998_13016__$1);
var G__13024 = null;
var G__13025 = 0;
var G__13026 = 0;
seq__12998_13006 = G__13023;
chunk__12999_13007 = G__13024;
count__13000_13008 = G__13025;
i__13001_13009 = G__13026;
continue;
}
}
} else
{}
}
break;
}
var seq__13002_13027 = cljs.core.seq(cljs.core.reverse(ancestors));
var chunk__13003_13028 = null;
var count__13004_13029 = 0;
var i__13005_13030 = 0;
while(true){
if((i__13005_13030 < count__13004_13029))
{var n_13031 = chunk__13003_13028.cljs$core$IIndexed$_nth$arity$2(chunk__13003_13028,i__13005_13030);
if(cljs.core.truth_(n_13031.propagationStopped))
{} else
{evt.currentTarget = n_13031;
goog.events.fireListeners(n_13031,evt.type,false,evt);
}
{
var G__13032 = seq__13002_13027;
var G__13033 = chunk__13003_13028;
var G__13034 = count__13004_13029;
var G__13035 = (i__13005_13030 + 1);
seq__13002_13027 = G__13032;
chunk__13003_13028 = G__13033;
count__13004_13029 = G__13034;
i__13005_13030 = G__13035;
continue;
}
} else
{var temp__4092__auto___13036 = cljs.core.seq(seq__13002_13027);
if(temp__4092__auto___13036)
{var seq__13002_13037__$1 = temp__4092__auto___13036;
if(cljs.core.chunked_seq_QMARK_(seq__13002_13037__$1))
{var c__9646__auto___13038 = cljs.core.chunk_first(seq__13002_13037__$1);
{
var G__13039 = cljs.core.chunk_rest(seq__13002_13037__$1);
var G__13040 = c__9646__auto___13038;
var G__13041 = cljs.core.count(c__9646__auto___13038);
var G__13042 = 0;
seq__13002_13027 = G__13039;
chunk__13003_13028 = G__13040;
count__13004_13029 = G__13041;
i__13005_13030 = G__13042;
continue;
}
} else
{var n_13043 = cljs.core.first(seq__13002_13037__$1);
if(cljs.core.truth_(n_13043.propagationStopped))
{} else
{evt.currentTarget = n_13043;
goog.events.fireListeners(n_13043,evt.type,false,evt);
}
{
var G__13044 = cljs.core.next(seq__13002_13037__$1);
var G__13045 = null;
var G__13046 = 0;
var G__13047 = 0;
seq__13002_13027 = G__13044;
chunk__13003_13028 = G__13045;
count__13004_13029 = G__13046;
i__13005_13030 = G__13047;
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
var seq__13054_13060 = cljs.core.seq(evt_map);
var chunk__13055_13061 = null;
var count__13056_13062 = 0;
var i__13057_13063 = 0;
while(true){
if((i__13057_13063 < count__13056_13062))
{var vec__13058_13064 = chunk__13055_13061.cljs$core$IIndexed$_nth$arity$2(chunk__13055_13061,i__13057_13063);
var k_13065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058_13064,0,null);
var v_13066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058_13064,1,null);
(evt[k_13065] = v_13066);
{
var G__13067 = seq__13054_13060;
var G__13068 = chunk__13055_13061;
var G__13069 = count__13056_13062;
var G__13070 = (i__13057_13063 + 1);
seq__13054_13060 = G__13067;
chunk__13055_13061 = G__13068;
count__13056_13062 = G__13069;
i__13057_13063 = G__13070;
continue;
}
} else
{var temp__4092__auto___13071 = cljs.core.seq(seq__13054_13060);
if(temp__4092__auto___13071)
{var seq__13054_13072__$1 = temp__4092__auto___13071;
if(cljs.core.chunked_seq_QMARK_(seq__13054_13072__$1))
{var c__9646__auto___13073 = cljs.core.chunk_first(seq__13054_13072__$1);
{
var G__13074 = cljs.core.chunk_rest(seq__13054_13072__$1);
var G__13075 = c__9646__auto___13073;
var G__13076 = cljs.core.count(c__9646__auto___13073);
var G__13077 = 0;
seq__13054_13060 = G__13074;
chunk__13055_13061 = G__13075;
count__13056_13062 = G__13076;
i__13057_13063 = G__13077;
continue;
}
} else
{var vec__13059_13078 = cljs.core.first(seq__13054_13072__$1);
var k_13079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13059_13078,0,null);
var v_13080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13059_13078,1,null);
(evt[k_13079] = v_13080);
{
var G__13081 = cljs.core.next(seq__13054_13072__$1);
var G__13082 = null;
var G__13083 = 0;
var G__13084 = 0;
seq__13054_13060 = G__13081;
chunk__13055_13061 = G__13082;
count__13056_13062 = G__13083;
i__13057_13063 = G__13084;
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13085_SHARP_){
return goog.events.getListeners(p1__13085_SHARP_,type__$1,false);
}),domina.nodes(content));
});
