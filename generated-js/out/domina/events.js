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
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if((void 0 === domina.events.t12964))
{goog.provide('domina.events.t12964');

/**
* @constructor
*/
domina.events.t12964 = (function (evt,f,create_listener_function,meta12965){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12965 = meta12965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12964.cljs$lang$type = true;
domina.events.t12964.cljs$lang$ctorStr = "domina.events/t12964";
domina.events.t12964.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.events/t12964");
});
domina.events.t12964.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t12964.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12964.prototype.domina$events$Event$ = true;
domina.events.t12964.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12964.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12964.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12964.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12964.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12964.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12966){
var self__ = this;
return self__.meta12965;
});
domina.events.t12964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12966,meta12965__$1){
var self__ = this;
return (new domina.events.t12964(self__.evt,self__.f,self__.create_listener_function,meta12965__$1));
});
domina.events.__GT_t12964 = (function __GT_t12964(evt__$1,f__$1,create_listener_function__$1,meta12965){
return (new domina.events.t12964(evt__$1,f__$1,create_listener_function__$1,meta12965));
});
} else
{}
return (new domina.events.t12964(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if((void 0 === domina.events.t12964))
{
/**
* @constructor
*/
domina.events.t12964 = (function (evt,f,create_listener_function,meta12965){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12965 = meta12965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12964.cljs$lang$type = true;
domina.events.t12964.cljs$lang$ctorStr = "domina.events/t12964";
domina.events.t12964.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.events/t12964");
});
domina.events.t12964.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t12964.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12964.prototype.domina$events$Event$ = true;
domina.events.t12964.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12964.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12964.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12964.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12964.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12964.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12966){
var self__ = this;
return self__.meta12965;
});
domina.events.t12964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12966,meta12965__$1){
var self__ = this;
return (new domina.events.t12964(self__.evt,self__.f,self__.create_listener_function,meta12965__$1));
});
domina.events.__GT_t12964 = (function __GT_t12964(evt__$1,f__$1,create_listener_function__$1,meta12965){
return (new domina.events.t12964(evt__$1,f__$1,create_listener_function__$1,meta12965));
});
} else
{}
return (new domina.events.t12964(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = domina.events.find_builtin_type(type);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9615__auto__ = (function iter__12971(s__12972){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12972__$1 = s__12972;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__12972__$1);
if(temp__4092__auto__)
{var s__12972__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12972__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__12972__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__12974 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__12973 = 0;
while(true){
if((i__12973 < size__9614__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__12973);
cljs.core.chunk_append(b__12974,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__12975 = (i__12973 + 1);
i__12973 = G__12975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__12974),iter__12971(cljs.core.chunk_rest(s__12972__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__12974),null);
}
} else
{var node = cljs.core.first(s__12972__$2);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__12971(cljs.core.rest(s__12972__$2)));
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
var seq__12984 = cljs.core.seq(domina.nodes(content));
var chunk__12985 = null;
var count__12986 = 0;
var i__12987 = 0;
while(true){
if((i__12987 < count__12986))
{var node = chunk__12985.cljs$core$IIndexed$_nth$arity$2(chunk__12985,i__12987);
goog.events.removeAll(node);
{
var G__12992 = seq__12984;
var G__12993 = chunk__12985;
var G__12994 = count__12986;
var G__12995 = (i__12987 + 1);
seq__12984 = G__12992;
chunk__12985 = G__12993;
count__12986 = G__12994;
i__12987 = G__12995;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12984);
if(temp__4092__auto__)
{var seq__12984__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12984__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12984__$1);
{
var G__12996 = cljs.core.chunk_rest(seq__12984__$1);
var G__12997 = c__9646__auto__;
var G__12998 = cljs.core.count(c__9646__auto__);
var G__12999 = 0;
seq__12984 = G__12996;
chunk__12985 = G__12997;
count__12986 = G__12998;
i__12987 = G__12999;
continue;
}
} else
{var node = cljs.core.first(seq__12984__$1);
goog.events.removeAll(node);
{
var G__13000 = cljs.core.next(seq__12984__$1);
var G__13001 = null;
var G__13002 = 0;
var G__13003 = 0;
seq__12984 = G__13000;
chunk__12985 = G__13001;
count__12986 = G__13002;
i__12987 = G__13003;
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
var seq__12988 = cljs.core.seq(domina.nodes(content));
var chunk__12989 = null;
var count__12990 = 0;
var i__12991 = 0;
while(true){
if((i__12991 < count__12990))
{var node = chunk__12989.cljs$core$IIndexed$_nth$arity$2(chunk__12989,i__12991);
goog.events.removeAll(node,type__$1);
{
var G__13004 = seq__12988;
var G__13005 = chunk__12989;
var G__13006 = count__12990;
var G__13007 = (i__12991 + 1);
seq__12988 = G__13004;
chunk__12989 = G__13005;
count__12990 = G__13006;
i__12991 = G__13007;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12988);
if(temp__4092__auto__)
{var seq__12988__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12988__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12988__$1);
{
var G__13008 = cljs.core.chunk_rest(seq__12988__$1);
var G__13009 = c__9646__auto__;
var G__13010 = cljs.core.count(c__9646__auto__);
var G__13011 = 0;
seq__12988 = G__13008;
chunk__12989 = G__13009;
count__12990 = G__13010;
i__12991 = G__13011;
continue;
}
} else
{var node = cljs.core.first(seq__12988__$1);
goog.events.removeAll(node,type__$1);
{
var G__13012 = cljs.core.next(seq__12988__$1);
var G__13013 = null;
var G__13014 = 0;
var G__13015 = 0;
seq__12988 = G__13012;
chunk__12989 = G__13013;
count__12990 = G__13014;
i__12991 = G__13015;
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
var G__13016 = parent;
var G__13017 = cljs.core.cons(parent,so_far);
n = G__13016;
so_far = G__13017;
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
var seq__13026_13034 = cljs.core.seq(ancestors);
var chunk__13027_13035 = null;
var count__13028_13036 = 0;
var i__13029_13037 = 0;
while(true){
if((i__13029_13037 < count__13028_13036))
{var n_13038 = chunk__13027_13035.cljs$core$IIndexed$_nth$arity$2(chunk__13027_13035,i__13029_13037);
if(cljs.core.truth_(n_13038.propagationStopped))
{} else
{evt.currentTarget = n_13038;
goog.events.fireListeners(n_13038,evt.type,true,evt);
}
{
var G__13039 = seq__13026_13034;
var G__13040 = chunk__13027_13035;
var G__13041 = count__13028_13036;
var G__13042 = (i__13029_13037 + 1);
seq__13026_13034 = G__13039;
chunk__13027_13035 = G__13040;
count__13028_13036 = G__13041;
i__13029_13037 = G__13042;
continue;
}
} else
{var temp__4092__auto___13043 = cljs.core.seq(seq__13026_13034);
if(temp__4092__auto___13043)
{var seq__13026_13044__$1 = temp__4092__auto___13043;
if(cljs.core.chunked_seq_QMARK_(seq__13026_13044__$1))
{var c__9646__auto___13045 = cljs.core.chunk_first(seq__13026_13044__$1);
{
var G__13046 = cljs.core.chunk_rest(seq__13026_13044__$1);
var G__13047 = c__9646__auto___13045;
var G__13048 = cljs.core.count(c__9646__auto___13045);
var G__13049 = 0;
seq__13026_13034 = G__13046;
chunk__13027_13035 = G__13047;
count__13028_13036 = G__13048;
i__13029_13037 = G__13049;
continue;
}
} else
{var n_13050 = cljs.core.first(seq__13026_13044__$1);
if(cljs.core.truth_(n_13050.propagationStopped))
{} else
{evt.currentTarget = n_13050;
goog.events.fireListeners(n_13050,evt.type,true,evt);
}
{
var G__13051 = cljs.core.next(seq__13026_13044__$1);
var G__13052 = null;
var G__13053 = 0;
var G__13054 = 0;
seq__13026_13034 = G__13051;
chunk__13027_13035 = G__13052;
count__13028_13036 = G__13053;
i__13029_13037 = G__13054;
continue;
}
}
} else
{}
}
break;
}
var seq__13030_13055 = cljs.core.seq(cljs.core.reverse(ancestors));
var chunk__13031_13056 = null;
var count__13032_13057 = 0;
var i__13033_13058 = 0;
while(true){
if((i__13033_13058 < count__13032_13057))
{var n_13059 = chunk__13031_13056.cljs$core$IIndexed$_nth$arity$2(chunk__13031_13056,i__13033_13058);
if(cljs.core.truth_(n_13059.propagationStopped))
{} else
{evt.currentTarget = n_13059;
goog.events.fireListeners(n_13059,evt.type,false,evt);
}
{
var G__13060 = seq__13030_13055;
var G__13061 = chunk__13031_13056;
var G__13062 = count__13032_13057;
var G__13063 = (i__13033_13058 + 1);
seq__13030_13055 = G__13060;
chunk__13031_13056 = G__13061;
count__13032_13057 = G__13062;
i__13033_13058 = G__13063;
continue;
}
} else
{var temp__4092__auto___13064 = cljs.core.seq(seq__13030_13055);
if(temp__4092__auto___13064)
{var seq__13030_13065__$1 = temp__4092__auto___13064;
if(cljs.core.chunked_seq_QMARK_(seq__13030_13065__$1))
{var c__9646__auto___13066 = cljs.core.chunk_first(seq__13030_13065__$1);
{
var G__13067 = cljs.core.chunk_rest(seq__13030_13065__$1);
var G__13068 = c__9646__auto___13066;
var G__13069 = cljs.core.count(c__9646__auto___13066);
var G__13070 = 0;
seq__13030_13055 = G__13067;
chunk__13031_13056 = G__13068;
count__13032_13057 = G__13069;
i__13033_13058 = G__13070;
continue;
}
} else
{var n_13071 = cljs.core.first(seq__13030_13065__$1);
if(cljs.core.truth_(n_13071.propagationStopped))
{} else
{evt.currentTarget = n_13071;
goog.events.fireListeners(n_13071,evt.type,false,evt);
}
{
var G__13072 = cljs.core.next(seq__13030_13065__$1);
var G__13073 = null;
var G__13074 = 0;
var G__13075 = 0;
seq__13030_13055 = G__13072;
chunk__13031_13056 = G__13073;
count__13032_13057 = G__13074;
i__13033_13058 = G__13075;
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
var seq__13082_13088 = cljs.core.seq(evt_map);
var chunk__13083_13089 = null;
var count__13084_13090 = 0;
var i__13085_13091 = 0;
while(true){
if((i__13085_13091 < count__13084_13090))
{var vec__13086_13092 = chunk__13083_13089.cljs$core$IIndexed$_nth$arity$2(chunk__13083_13089,i__13085_13091);
var k_13093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086_13092,0,null);
var v_13094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086_13092,1,null);
(evt[k_13093] = v_13094);
{
var G__13095 = seq__13082_13088;
var G__13096 = chunk__13083_13089;
var G__13097 = count__13084_13090;
var G__13098 = (i__13085_13091 + 1);
seq__13082_13088 = G__13095;
chunk__13083_13089 = G__13096;
count__13084_13090 = G__13097;
i__13085_13091 = G__13098;
continue;
}
} else
{var temp__4092__auto___13099 = cljs.core.seq(seq__13082_13088);
if(temp__4092__auto___13099)
{var seq__13082_13100__$1 = temp__4092__auto___13099;
if(cljs.core.chunked_seq_QMARK_(seq__13082_13100__$1))
{var c__9646__auto___13101 = cljs.core.chunk_first(seq__13082_13100__$1);
{
var G__13102 = cljs.core.chunk_rest(seq__13082_13100__$1);
var G__13103 = c__9646__auto___13101;
var G__13104 = cljs.core.count(c__9646__auto___13101);
var G__13105 = 0;
seq__13082_13088 = G__13102;
chunk__13083_13089 = G__13103;
count__13084_13090 = G__13104;
i__13085_13091 = G__13105;
continue;
}
} else
{var vec__13087_13106 = cljs.core.first(seq__13082_13100__$1);
var k_13107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087_13106,0,null);
var v_13108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087_13106,1,null);
(evt[k_13107] = v_13108);
{
var G__13109 = cljs.core.next(seq__13082_13100__$1);
var G__13110 = null;
var G__13111 = 0;
var G__13112 = 0;
seq__13082_13088 = G__13109;
chunk__13083_13089 = G__13110;
count__13084_13090 = G__13111;
i__13085_13091 = G__13112;
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13113_SHARP_){
return goog.events.getListeners(p1__13113_SHARP_,type__$1,false);
}),domina.nodes(content));
});
