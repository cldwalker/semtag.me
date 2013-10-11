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
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if((void 0 === domina.events.t12946))
{goog.provide('domina.events.t12946');

/**
* @constructor
*/
domina.events.t12946 = (function (evt,f,create_listener_function,meta12947){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12947 = meta12947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12946.cljs$lang$type = true;
domina.events.t12946.cljs$lang$ctorStr = "domina.events/t12946";
domina.events.t12946.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.events/t12946");
});
domina.events.t12946.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t12946.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12946.prototype.domina$events$Event$ = true;
domina.events.t12946.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12946.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12946.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12946.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12946.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12946.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12948){
var self__ = this;
return self__.meta12947;
});
domina.events.t12946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12948,meta12947__$1){
var self__ = this;
return (new domina.events.t12946(self__.evt,self__.f,self__.create_listener_function,meta12947__$1));
});
domina.events.__GT_t12946 = (function __GT_t12946(evt__$1,f__$1,create_listener_function__$1,meta12947){
return (new domina.events.t12946(evt__$1,f__$1,create_listener_function__$1,meta12947));
});
} else
{}
return (new domina.events.t12946(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if((void 0 === domina.events.t12946))
{
/**
* @constructor
*/
domina.events.t12946 = (function (evt,f,create_listener_function,meta12947){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12947 = meta12947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12946.cljs$lang$type = true;
domina.events.t12946.cljs$lang$ctorStr = "domina.events/t12946";
domina.events.t12946.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.events/t12946");
});
domina.events.t12946.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t12946.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12946.prototype.domina$events$Event$ = true;
domina.events.t12946.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12946.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12946.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12946.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12946.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12946.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12948){
var self__ = this;
return self__.meta12947;
});
domina.events.t12946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12948,meta12947__$1){
var self__ = this;
return (new domina.events.t12946(self__.evt,self__.f,self__.create_listener_function,meta12947__$1));
});
domina.events.__GT_t12946 = (function __GT_t12946(evt__$1,f__$1,create_listener_function__$1,meta12947){
return (new domina.events.t12946(evt__$1,f__$1,create_listener_function__$1,meta12947));
});
} else
{}
return (new domina.events.t12946(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = domina.events.find_builtin_type(type);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9615__auto__ = (function iter__12953(s__12954){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12954__$1 = s__12954;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__12954__$1);
if(temp__4092__auto__)
{var s__12954__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12954__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__12954__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__12956 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__12955 = 0;
while(true){
if((i__12955 < size__9614__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__12955);
cljs.core.chunk_append(b__12956,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__12957 = (i__12955 + 1);
i__12955 = G__12957;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__12956),iter__12953(cljs.core.chunk_rest(s__12954__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__12956),null);
}
} else
{var node = cljs.core.first(s__12954__$2);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__12953(cljs.core.rest(s__12954__$2)));
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
var seq__12966 = cljs.core.seq(domina.nodes(content));
var chunk__12967 = null;
var count__12968 = 0;
var i__12969 = 0;
while(true){
if((i__12969 < count__12968))
{var node = chunk__12967.cljs$core$IIndexed$_nth$arity$2(chunk__12967,i__12969);
goog.events.removeAll(node);
{
var G__12974 = seq__12966;
var G__12975 = chunk__12967;
var G__12976 = count__12968;
var G__12977 = (i__12969 + 1);
seq__12966 = G__12974;
chunk__12967 = G__12975;
count__12968 = G__12976;
i__12969 = G__12977;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12966);
if(temp__4092__auto__)
{var seq__12966__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12966__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12966__$1);
{
var G__12978 = cljs.core.chunk_rest(seq__12966__$1);
var G__12979 = c__9646__auto__;
var G__12980 = cljs.core.count(c__9646__auto__);
var G__12981 = 0;
seq__12966 = G__12978;
chunk__12967 = G__12979;
count__12968 = G__12980;
i__12969 = G__12981;
continue;
}
} else
{var node = cljs.core.first(seq__12966__$1);
goog.events.removeAll(node);
{
var G__12982 = cljs.core.next(seq__12966__$1);
var G__12983 = null;
var G__12984 = 0;
var G__12985 = 0;
seq__12966 = G__12982;
chunk__12967 = G__12983;
count__12968 = G__12984;
i__12969 = G__12985;
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
var seq__12970 = cljs.core.seq(domina.nodes(content));
var chunk__12971 = null;
var count__12972 = 0;
var i__12973 = 0;
while(true){
if((i__12973 < count__12972))
{var node = chunk__12971.cljs$core$IIndexed$_nth$arity$2(chunk__12971,i__12973);
goog.events.removeAll(node,type__$1);
{
var G__12986 = seq__12970;
var G__12987 = chunk__12971;
var G__12988 = count__12972;
var G__12989 = (i__12973 + 1);
seq__12970 = G__12986;
chunk__12971 = G__12987;
count__12972 = G__12988;
i__12973 = G__12989;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12970);
if(temp__4092__auto__)
{var seq__12970__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12970__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12970__$1);
{
var G__12990 = cljs.core.chunk_rest(seq__12970__$1);
var G__12991 = c__9646__auto__;
var G__12992 = cljs.core.count(c__9646__auto__);
var G__12993 = 0;
seq__12970 = G__12990;
chunk__12971 = G__12991;
count__12972 = G__12992;
i__12973 = G__12993;
continue;
}
} else
{var node = cljs.core.first(seq__12970__$1);
goog.events.removeAll(node,type__$1);
{
var G__12994 = cljs.core.next(seq__12970__$1);
var G__12995 = null;
var G__12996 = 0;
var G__12997 = 0;
seq__12970 = G__12994;
chunk__12971 = G__12995;
count__12972 = G__12996;
i__12973 = G__12997;
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
var G__12998 = parent;
var G__12999 = cljs.core.cons(parent,so_far);
n = G__12998;
so_far = G__12999;
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
var seq__13008_13016 = cljs.core.seq(ancestors);
var chunk__13009_13017 = null;
var count__13010_13018 = 0;
var i__13011_13019 = 0;
while(true){
if((i__13011_13019 < count__13010_13018))
{var n_13020 = chunk__13009_13017.cljs$core$IIndexed$_nth$arity$2(chunk__13009_13017,i__13011_13019);
if(cljs.core.truth_(n_13020.propagationStopped))
{} else
{evt.currentTarget = n_13020;
goog.events.fireListeners(n_13020,evt.type,true,evt);
}
{
var G__13021 = seq__13008_13016;
var G__13022 = chunk__13009_13017;
var G__13023 = count__13010_13018;
var G__13024 = (i__13011_13019 + 1);
seq__13008_13016 = G__13021;
chunk__13009_13017 = G__13022;
count__13010_13018 = G__13023;
i__13011_13019 = G__13024;
continue;
}
} else
{var temp__4092__auto___13025 = cljs.core.seq(seq__13008_13016);
if(temp__4092__auto___13025)
{var seq__13008_13026__$1 = temp__4092__auto___13025;
if(cljs.core.chunked_seq_QMARK_(seq__13008_13026__$1))
{var c__9646__auto___13027 = cljs.core.chunk_first(seq__13008_13026__$1);
{
var G__13028 = cljs.core.chunk_rest(seq__13008_13026__$1);
var G__13029 = c__9646__auto___13027;
var G__13030 = cljs.core.count(c__9646__auto___13027);
var G__13031 = 0;
seq__13008_13016 = G__13028;
chunk__13009_13017 = G__13029;
count__13010_13018 = G__13030;
i__13011_13019 = G__13031;
continue;
}
} else
{var n_13032 = cljs.core.first(seq__13008_13026__$1);
if(cljs.core.truth_(n_13032.propagationStopped))
{} else
{evt.currentTarget = n_13032;
goog.events.fireListeners(n_13032,evt.type,true,evt);
}
{
var G__13033 = cljs.core.next(seq__13008_13026__$1);
var G__13034 = null;
var G__13035 = 0;
var G__13036 = 0;
seq__13008_13016 = G__13033;
chunk__13009_13017 = G__13034;
count__13010_13018 = G__13035;
i__13011_13019 = G__13036;
continue;
}
}
} else
{}
}
break;
}
var seq__13012_13037 = cljs.core.seq(cljs.core.reverse(ancestors));
var chunk__13013_13038 = null;
var count__13014_13039 = 0;
var i__13015_13040 = 0;
while(true){
if((i__13015_13040 < count__13014_13039))
{var n_13041 = chunk__13013_13038.cljs$core$IIndexed$_nth$arity$2(chunk__13013_13038,i__13015_13040);
if(cljs.core.truth_(n_13041.propagationStopped))
{} else
{evt.currentTarget = n_13041;
goog.events.fireListeners(n_13041,evt.type,false,evt);
}
{
var G__13042 = seq__13012_13037;
var G__13043 = chunk__13013_13038;
var G__13044 = count__13014_13039;
var G__13045 = (i__13015_13040 + 1);
seq__13012_13037 = G__13042;
chunk__13013_13038 = G__13043;
count__13014_13039 = G__13044;
i__13015_13040 = G__13045;
continue;
}
} else
{var temp__4092__auto___13046 = cljs.core.seq(seq__13012_13037);
if(temp__4092__auto___13046)
{var seq__13012_13047__$1 = temp__4092__auto___13046;
if(cljs.core.chunked_seq_QMARK_(seq__13012_13047__$1))
{var c__9646__auto___13048 = cljs.core.chunk_first(seq__13012_13047__$1);
{
var G__13049 = cljs.core.chunk_rest(seq__13012_13047__$1);
var G__13050 = c__9646__auto___13048;
var G__13051 = cljs.core.count(c__9646__auto___13048);
var G__13052 = 0;
seq__13012_13037 = G__13049;
chunk__13013_13038 = G__13050;
count__13014_13039 = G__13051;
i__13015_13040 = G__13052;
continue;
}
} else
{var n_13053 = cljs.core.first(seq__13012_13047__$1);
if(cljs.core.truth_(n_13053.propagationStopped))
{} else
{evt.currentTarget = n_13053;
goog.events.fireListeners(n_13053,evt.type,false,evt);
}
{
var G__13054 = cljs.core.next(seq__13012_13047__$1);
var G__13055 = null;
var G__13056 = 0;
var G__13057 = 0;
seq__13012_13037 = G__13054;
chunk__13013_13038 = G__13055;
count__13014_13039 = G__13056;
i__13015_13040 = G__13057;
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
var seq__13064_13070 = cljs.core.seq(evt_map);
var chunk__13065_13071 = null;
var count__13066_13072 = 0;
var i__13067_13073 = 0;
while(true){
if((i__13067_13073 < count__13066_13072))
{var vec__13068_13074 = chunk__13065_13071.cljs$core$IIndexed$_nth$arity$2(chunk__13065_13071,i__13067_13073);
var k_13075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13068_13074,0,null);
var v_13076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13068_13074,1,null);
(evt[k_13075] = v_13076);
{
var G__13077 = seq__13064_13070;
var G__13078 = chunk__13065_13071;
var G__13079 = count__13066_13072;
var G__13080 = (i__13067_13073 + 1);
seq__13064_13070 = G__13077;
chunk__13065_13071 = G__13078;
count__13066_13072 = G__13079;
i__13067_13073 = G__13080;
continue;
}
} else
{var temp__4092__auto___13081 = cljs.core.seq(seq__13064_13070);
if(temp__4092__auto___13081)
{var seq__13064_13082__$1 = temp__4092__auto___13081;
if(cljs.core.chunked_seq_QMARK_(seq__13064_13082__$1))
{var c__9646__auto___13083 = cljs.core.chunk_first(seq__13064_13082__$1);
{
var G__13084 = cljs.core.chunk_rest(seq__13064_13082__$1);
var G__13085 = c__9646__auto___13083;
var G__13086 = cljs.core.count(c__9646__auto___13083);
var G__13087 = 0;
seq__13064_13070 = G__13084;
chunk__13065_13071 = G__13085;
count__13066_13072 = G__13086;
i__13067_13073 = G__13087;
continue;
}
} else
{var vec__13069_13088 = cljs.core.first(seq__13064_13082__$1);
var k_13089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13069_13088,0,null);
var v_13090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13069_13088,1,null);
(evt[k_13089] = v_13090);
{
var G__13091 = cljs.core.next(seq__13064_13082__$1);
var G__13092 = null;
var G__13093 = 0;
var G__13094 = 0;
seq__13064_13070 = G__13091;
chunk__13065_13071 = G__13092;
count__13066_13072 = G__13093;
i__13067_13073 = G__13094;
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13095_SHARP_){
return goog.events.getListeners(p1__13095_SHARP_,type__$1,false);
}),domina.nodes(content));
});
