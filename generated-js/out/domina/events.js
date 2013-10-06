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
{var x__9509__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.prevent_default[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
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
{var x__9509__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.stop_propagation[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
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
{var x__9509__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.target[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
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
{var x__9509__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.current_target[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.current_target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
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
{var x__9509__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.event_type[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.event_type["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
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
{var x__9509__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.raw_event[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.raw_event["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_.call(null,domina.events.builtin_events,evt_type))
{return cljs.core.name.call(null,evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if((void 0 === domina.events.t12930))
{goog.provide('domina.events.t12930');

/**
* @constructor
*/
domina.events.t12930 = (function (evt,f,create_listener_function,meta12931){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12931 = meta12931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12930.cljs$lang$type = true;
domina.events.t12930.cljs$lang$ctorStr = "domina.events/t12930";
domina.events.t12930.cljs$lang$ctorPrWriter = (function (this__9450__auto__,writer__9451__auto__,opt__9452__auto__){
return cljs.core._write.call(null,writer__9451__auto__,"domina.events/t12930");
});
domina.events.t12930.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t12930.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12930.prototype.domina$events$Event$ = true;
domina.events.t12930.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12930.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12930.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12930.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12930.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12930.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12932){
var self__ = this;
return self__.meta12931;
});
domina.events.t12930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12932,meta12931__$1){
var self__ = this;
return (new domina.events.t12930(self__.evt,self__.f,self__.create_listener_function,meta12931__$1));
});
domina.events.__GT_t12930 = (function __GT_t12930(evt__$1,f__$1,create_listener_function__$1,meta12931){
return (new domina.events.t12930(evt__$1,f__$1,create_listener_function__$1,meta12931));
});
} else
{}
return (new domina.events.t12930(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__9609__auto__ = (function iter__12937(s__12938){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12938__$1 = s__12938;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12938__$1);
if(temp__4092__auto__)
{var s__12938__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12938__$2))
{var c__9607__auto__ = cljs.core.chunk_first.call(null,s__12938__$2);
var size__9608__auto__ = cljs.core.count.call(null,c__9607__auto__);
var b__12940 = cljs.core.chunk_buffer.call(null,size__9608__auto__);
if((function (){var i__12939 = 0;
while(true){
if((i__12939 < size__9608__auto__))
{var node = cljs.core._nth.call(null,c__9607__auto__,i__12939);
cljs.core.chunk_append.call(null,b__12940,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__12941 = (i__12939 + 1);
i__12939 = G__12941;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12940),iter__12937.call(null,cljs.core.chunk_rest.call(null,s__12938__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12940),null);
}
} else
{var node = cljs.core.first.call(null,s__12938__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__12937.call(null,cljs.core.rest.call(null,s__12938__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9609__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
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
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
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
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
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
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
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
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__12950 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12951 = null;
var count__12952 = 0;
var i__12953 = 0;
while(true){
if((i__12953 < count__12952))
{var node = cljs.core._nth.call(null,chunk__12951,i__12953);
goog.events.removeAll(node);
{
var G__12958 = seq__12950;
var G__12959 = chunk__12951;
var G__12960 = count__12952;
var G__12961 = (i__12953 + 1);
seq__12950 = G__12958;
chunk__12951 = G__12959;
count__12952 = G__12960;
i__12953 = G__12961;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12950);
if(temp__4092__auto__)
{var seq__12950__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12950__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__12950__$1);
{
var G__12962 = cljs.core.chunk_rest.call(null,seq__12950__$1);
var G__12963 = c__9640__auto__;
var G__12964 = cljs.core.count.call(null,c__9640__auto__);
var G__12965 = 0;
seq__12950 = G__12962;
chunk__12951 = G__12963;
count__12952 = G__12964;
i__12953 = G__12965;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__12950__$1);
goog.events.removeAll(node);
{
var G__12966 = cljs.core.next.call(null,seq__12950__$1);
var G__12967 = null;
var G__12968 = 0;
var G__12969 = 0;
seq__12950 = G__12966;
chunk__12951 = G__12967;
count__12952 = G__12968;
i__12953 = G__12969;
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
var type__$1 = domina.events.find_builtin_type.call(null,type);
var seq__12954 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12955 = null;
var count__12956 = 0;
var i__12957 = 0;
while(true){
if((i__12957 < count__12956))
{var node = cljs.core._nth.call(null,chunk__12955,i__12957);
goog.events.removeAll(node,type__$1);
{
var G__12970 = seq__12954;
var G__12971 = chunk__12955;
var G__12972 = count__12956;
var G__12973 = (i__12957 + 1);
seq__12954 = G__12970;
chunk__12955 = G__12971;
count__12956 = G__12972;
i__12957 = G__12973;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12954);
if(temp__4092__auto__)
{var seq__12954__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12954__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__12954__$1);
{
var G__12974 = cljs.core.chunk_rest.call(null,seq__12954__$1);
var G__12975 = c__9640__auto__;
var G__12976 = cljs.core.count.call(null,c__9640__auto__);
var G__12977 = 0;
seq__12954 = G__12974;
chunk__12955 = G__12975;
count__12956 = G__12976;
i__12957 = G__12977;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__12954__$1);
goog.events.removeAll(node,type__$1);
{
var G__12978 = cljs.core.next.call(null,seq__12954__$1);
var G__12979 = null;
var G__12980 = 0;
var G__12981 = 0;
seq__12954 = G__12978;
chunk__12955 = G__12979;
count__12956 = G__12980;
i__12957 = G__12981;
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
return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4090__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;
{
var G__12982 = parent;
var G__12983 = cljs.core.cons.call(null,parent,so_far);
n = G__12982;
so_far = G__12983;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__12992_13000 = cljs.core.seq.call(null,ancestors);
var chunk__12993_13001 = null;
var count__12994_13002 = 0;
var i__12995_13003 = 0;
while(true){
if((i__12995_13003 < count__12994_13002))
{var n_13004 = cljs.core._nth.call(null,chunk__12993_13001,i__12995_13003);
if(cljs.core.truth_(n_13004.propagationStopped))
{} else
{evt.currentTarget = n_13004;
goog.events.fireListeners(n_13004,evt.type,true,evt);
}
{
var G__13005 = seq__12992_13000;
var G__13006 = chunk__12993_13001;
var G__13007 = count__12994_13002;
var G__13008 = (i__12995_13003 + 1);
seq__12992_13000 = G__13005;
chunk__12993_13001 = G__13006;
count__12994_13002 = G__13007;
i__12995_13003 = G__13008;
continue;
}
} else
{var temp__4092__auto___13009 = cljs.core.seq.call(null,seq__12992_13000);
if(temp__4092__auto___13009)
{var seq__12992_13010__$1 = temp__4092__auto___13009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12992_13010__$1))
{var c__9640__auto___13011 = cljs.core.chunk_first.call(null,seq__12992_13010__$1);
{
var G__13012 = cljs.core.chunk_rest.call(null,seq__12992_13010__$1);
var G__13013 = c__9640__auto___13011;
var G__13014 = cljs.core.count.call(null,c__9640__auto___13011);
var G__13015 = 0;
seq__12992_13000 = G__13012;
chunk__12993_13001 = G__13013;
count__12994_13002 = G__13014;
i__12995_13003 = G__13015;
continue;
}
} else
{var n_13016 = cljs.core.first.call(null,seq__12992_13010__$1);
if(cljs.core.truth_(n_13016.propagationStopped))
{} else
{evt.currentTarget = n_13016;
goog.events.fireListeners(n_13016,evt.type,true,evt);
}
{
var G__13017 = cljs.core.next.call(null,seq__12992_13010__$1);
var G__13018 = null;
var G__13019 = 0;
var G__13020 = 0;
seq__12992_13000 = G__13017;
chunk__12993_13001 = G__13018;
count__12994_13002 = G__13019;
i__12995_13003 = G__13020;
continue;
}
}
} else
{}
}
break;
}
var seq__12996_13021 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__12997_13022 = null;
var count__12998_13023 = 0;
var i__12999_13024 = 0;
while(true){
if((i__12999_13024 < count__12998_13023))
{var n_13025 = cljs.core._nth.call(null,chunk__12997_13022,i__12999_13024);
if(cljs.core.truth_(n_13025.propagationStopped))
{} else
{evt.currentTarget = n_13025;
goog.events.fireListeners(n_13025,evt.type,false,evt);
}
{
var G__13026 = seq__12996_13021;
var G__13027 = chunk__12997_13022;
var G__13028 = count__12998_13023;
var G__13029 = (i__12999_13024 + 1);
seq__12996_13021 = G__13026;
chunk__12997_13022 = G__13027;
count__12998_13023 = G__13028;
i__12999_13024 = G__13029;
continue;
}
} else
{var temp__4092__auto___13030 = cljs.core.seq.call(null,seq__12996_13021);
if(temp__4092__auto___13030)
{var seq__12996_13031__$1 = temp__4092__auto___13030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12996_13031__$1))
{var c__9640__auto___13032 = cljs.core.chunk_first.call(null,seq__12996_13031__$1);
{
var G__13033 = cljs.core.chunk_rest.call(null,seq__12996_13031__$1);
var G__13034 = c__9640__auto___13032;
var G__13035 = cljs.core.count.call(null,c__9640__auto___13032);
var G__13036 = 0;
seq__12996_13021 = G__13033;
chunk__12997_13022 = G__13034;
count__12998_13023 = G__13035;
i__12999_13024 = G__13036;
continue;
}
} else
{var n_13037 = cljs.core.first.call(null,seq__12996_13031__$1);
if(cljs.core.truth_(n_13037.propagationStopped))
{} else
{evt.currentTarget = n_13037;
goog.events.fireListeners(n_13037,evt.type,false,evt);
}
{
var G__13038 = cljs.core.next.call(null,seq__12996_13031__$1);
var G__13039 = null;
var G__13040 = 0;
var G__13041 = 0;
seq__12996_13021 = G__13038;
chunk__12997_13022 = G__13039;
count__12998_13023 = G__13040;
i__12999_13024 = G__13041;
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
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var seq__13048_13054 = cljs.core.seq.call(null,evt_map);
var chunk__13049_13055 = null;
var count__13050_13056 = 0;
var i__13051_13057 = 0;
while(true){
if((i__13051_13057 < count__13050_13056))
{var vec__13052_13058 = cljs.core._nth.call(null,chunk__13049_13055,i__13051_13057);
var k_13059 = cljs.core.nth.call(null,vec__13052_13058,0,null);
var v_13060 = cljs.core.nth.call(null,vec__13052_13058,1,null);
(evt[k_13059] = v_13060);
{
var G__13061 = seq__13048_13054;
var G__13062 = chunk__13049_13055;
var G__13063 = count__13050_13056;
var G__13064 = (i__13051_13057 + 1);
seq__13048_13054 = G__13061;
chunk__13049_13055 = G__13062;
count__13050_13056 = G__13063;
i__13051_13057 = G__13064;
continue;
}
} else
{var temp__4092__auto___13065 = cljs.core.seq.call(null,seq__13048_13054);
if(temp__4092__auto___13065)
{var seq__13048_13066__$1 = temp__4092__auto___13065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13048_13066__$1))
{var c__9640__auto___13067 = cljs.core.chunk_first.call(null,seq__13048_13066__$1);
{
var G__13068 = cljs.core.chunk_rest.call(null,seq__13048_13066__$1);
var G__13069 = c__9640__auto___13067;
var G__13070 = cljs.core.count.call(null,c__9640__auto___13067);
var G__13071 = 0;
seq__13048_13054 = G__13068;
chunk__13049_13055 = G__13069;
count__13050_13056 = G__13070;
i__13051_13057 = G__13071;
continue;
}
} else
{var vec__13053_13072 = cljs.core.first.call(null,seq__13048_13066__$1);
var k_13073 = cljs.core.nth.call(null,vec__13053_13072,0,null);
var v_13074 = cljs.core.nth.call(null,vec__13053_13072,1,null);
(evt[k_13073] = v_13074);
{
var G__13075 = cljs.core.next.call(null,seq__13048_13066__$1);
var G__13076 = null;
var G__13077 = 0;
var G__13078 = 0;
seq__13048_13054 = G__13075;
chunk__13049_13055 = G__13076;
count__13050_13056 = G__13077;
i__13051_13057 = G__13078;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
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
var type__$1 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__13079_SHARP_){
return goog.events.getListeners(p1__13079_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
