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
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if((void 0 === domina.events.t12959))
{goog.provide('domina.events.t12959');

/**
* @constructor
*/
domina.events.t12959 = (function (evt,f,create_listener_function,meta12960){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12960 = meta12960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12959.cljs$lang$type = true;
domina.events.t12959.cljs$lang$ctorStr = "domina.events/t12959";
domina.events.t12959.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.events/t12959");
});
domina.events.t12959.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t12959.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12959.prototype.domina$events$Event$ = true;
domina.events.t12959.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12959.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12959.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12959.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12959.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12959.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12961){
var self__ = this;
return self__.meta12960;
});
domina.events.t12959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12961,meta12960__$1){
var self__ = this;
return (new domina.events.t12959(self__.evt,self__.f,self__.create_listener_function,meta12960__$1));
});
domina.events.__GT_t12959 = (function __GT_t12959(evt__$1,f__$1,create_listener_function__$1,meta12960){
return (new domina.events.t12959(evt__$1,f__$1,create_listener_function__$1,meta12960));
});
} else
{}
return (new domina.events.t12959(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if((void 0 === domina.events.t12959))
{
/**
* @constructor
*/
domina.events.t12959 = (function (evt,f,create_listener_function,meta12960){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12960 = meta12960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12959.cljs$lang$type = true;
domina.events.t12959.cljs$lang$ctorStr = "domina.events/t12959";
domina.events.t12959.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.events/t12959");
});
domina.events.t12959.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t12959.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12959.prototype.domina$events$Event$ = true;
domina.events.t12959.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12959.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12959.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12959.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12959.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12959.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12961){
var self__ = this;
return self__.meta12960;
});
domina.events.t12959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12961,meta12960__$1){
var self__ = this;
return (new domina.events.t12959(self__.evt,self__.f,self__.create_listener_function,meta12960__$1));
});
domina.events.__GT_t12959 = (function __GT_t12959(evt__$1,f__$1,create_listener_function__$1,meta12960){
return (new domina.events.t12959(evt__$1,f__$1,create_listener_function__$1,meta12960));
});
} else
{}
return (new domina.events.t12959(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = domina.events.find_builtin_type(type);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9615__auto__ = (function iter__12966(s__12967){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12967__$1 = s__12967;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__12967__$1);
if(temp__4092__auto__)
{var s__12967__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12967__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__12967__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__12969 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__12968 = 0;
while(true){
if((i__12968 < size__9614__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__12968);
cljs.core.chunk_append(b__12969,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__12970 = (i__12968 + 1);
i__12968 = G__12970;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__12969),iter__12966(cljs.core.chunk_rest(s__12967__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__12969),null);
}
} else
{var node = cljs.core.first(s__12967__$2);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__12966(cljs.core.rest(s__12967__$2)));
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
var seq__12979 = cljs.core.seq(domina.nodes(content));
var chunk__12980 = null;
var count__12981 = 0;
var i__12982 = 0;
while(true){
if((i__12982 < count__12981))
{var node = chunk__12980.cljs$core$IIndexed$_nth$arity$2(chunk__12980,i__12982);
goog.events.removeAll(node);
{
var G__12987 = seq__12979;
var G__12988 = chunk__12980;
var G__12989 = count__12981;
var G__12990 = (i__12982 + 1);
seq__12979 = G__12987;
chunk__12980 = G__12988;
count__12981 = G__12989;
i__12982 = G__12990;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12979);
if(temp__4092__auto__)
{var seq__12979__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12979__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12979__$1);
{
var G__12991 = cljs.core.chunk_rest(seq__12979__$1);
var G__12992 = c__9646__auto__;
var G__12993 = cljs.core.count(c__9646__auto__);
var G__12994 = 0;
seq__12979 = G__12991;
chunk__12980 = G__12992;
count__12981 = G__12993;
i__12982 = G__12994;
continue;
}
} else
{var node = cljs.core.first(seq__12979__$1);
goog.events.removeAll(node);
{
var G__12995 = cljs.core.next(seq__12979__$1);
var G__12996 = null;
var G__12997 = 0;
var G__12998 = 0;
seq__12979 = G__12995;
chunk__12980 = G__12996;
count__12981 = G__12997;
i__12982 = G__12998;
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
var seq__12983 = cljs.core.seq(domina.nodes(content));
var chunk__12984 = null;
var count__12985 = 0;
var i__12986 = 0;
while(true){
if((i__12986 < count__12985))
{var node = chunk__12984.cljs$core$IIndexed$_nth$arity$2(chunk__12984,i__12986);
goog.events.removeAll(node,type__$1);
{
var G__12999 = seq__12983;
var G__13000 = chunk__12984;
var G__13001 = count__12985;
var G__13002 = (i__12986 + 1);
seq__12983 = G__12999;
chunk__12984 = G__13000;
count__12985 = G__13001;
i__12986 = G__13002;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12983);
if(temp__4092__auto__)
{var seq__12983__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12983__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12983__$1);
{
var G__13003 = cljs.core.chunk_rest(seq__12983__$1);
var G__13004 = c__9646__auto__;
var G__13005 = cljs.core.count(c__9646__auto__);
var G__13006 = 0;
seq__12983 = G__13003;
chunk__12984 = G__13004;
count__12985 = G__13005;
i__12986 = G__13006;
continue;
}
} else
{var node = cljs.core.first(seq__12983__$1);
goog.events.removeAll(node,type__$1);
{
var G__13007 = cljs.core.next(seq__12983__$1);
var G__13008 = null;
var G__13009 = 0;
var G__13010 = 0;
seq__12983 = G__13007;
chunk__12984 = G__13008;
count__12985 = G__13009;
i__12986 = G__13010;
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
var G__13011 = parent;
var G__13012 = cljs.core.cons(parent,so_far);
n = G__13011;
so_far = G__13012;
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
var seq__13021_13029 = cljs.core.seq(ancestors);
var chunk__13022_13030 = null;
var count__13023_13031 = 0;
var i__13024_13032 = 0;
while(true){
if((i__13024_13032 < count__13023_13031))
{var n_13033 = chunk__13022_13030.cljs$core$IIndexed$_nth$arity$2(chunk__13022_13030,i__13024_13032);
if(cljs.core.truth_(n_13033.propagationStopped))
{} else
{evt.currentTarget = n_13033;
goog.events.fireListeners(n_13033,evt.type,true,evt);
}
{
var G__13034 = seq__13021_13029;
var G__13035 = chunk__13022_13030;
var G__13036 = count__13023_13031;
var G__13037 = (i__13024_13032 + 1);
seq__13021_13029 = G__13034;
chunk__13022_13030 = G__13035;
count__13023_13031 = G__13036;
i__13024_13032 = G__13037;
continue;
}
} else
{var temp__4092__auto___13038 = cljs.core.seq(seq__13021_13029);
if(temp__4092__auto___13038)
{var seq__13021_13039__$1 = temp__4092__auto___13038;
if(cljs.core.chunked_seq_QMARK_(seq__13021_13039__$1))
{var c__9646__auto___13040 = cljs.core.chunk_first(seq__13021_13039__$1);
{
var G__13041 = cljs.core.chunk_rest(seq__13021_13039__$1);
var G__13042 = c__9646__auto___13040;
var G__13043 = cljs.core.count(c__9646__auto___13040);
var G__13044 = 0;
seq__13021_13029 = G__13041;
chunk__13022_13030 = G__13042;
count__13023_13031 = G__13043;
i__13024_13032 = G__13044;
continue;
}
} else
{var n_13045 = cljs.core.first(seq__13021_13039__$1);
if(cljs.core.truth_(n_13045.propagationStopped))
{} else
{evt.currentTarget = n_13045;
goog.events.fireListeners(n_13045,evt.type,true,evt);
}
{
var G__13046 = cljs.core.next(seq__13021_13039__$1);
var G__13047 = null;
var G__13048 = 0;
var G__13049 = 0;
seq__13021_13029 = G__13046;
chunk__13022_13030 = G__13047;
count__13023_13031 = G__13048;
i__13024_13032 = G__13049;
continue;
}
}
} else
{}
}
break;
}
var seq__13025_13050 = cljs.core.seq(cljs.core.reverse(ancestors));
var chunk__13026_13051 = null;
var count__13027_13052 = 0;
var i__13028_13053 = 0;
while(true){
if((i__13028_13053 < count__13027_13052))
{var n_13054 = chunk__13026_13051.cljs$core$IIndexed$_nth$arity$2(chunk__13026_13051,i__13028_13053);
if(cljs.core.truth_(n_13054.propagationStopped))
{} else
{evt.currentTarget = n_13054;
goog.events.fireListeners(n_13054,evt.type,false,evt);
}
{
var G__13055 = seq__13025_13050;
var G__13056 = chunk__13026_13051;
var G__13057 = count__13027_13052;
var G__13058 = (i__13028_13053 + 1);
seq__13025_13050 = G__13055;
chunk__13026_13051 = G__13056;
count__13027_13052 = G__13057;
i__13028_13053 = G__13058;
continue;
}
} else
{var temp__4092__auto___13059 = cljs.core.seq(seq__13025_13050);
if(temp__4092__auto___13059)
{var seq__13025_13060__$1 = temp__4092__auto___13059;
if(cljs.core.chunked_seq_QMARK_(seq__13025_13060__$1))
{var c__9646__auto___13061 = cljs.core.chunk_first(seq__13025_13060__$1);
{
var G__13062 = cljs.core.chunk_rest(seq__13025_13060__$1);
var G__13063 = c__9646__auto___13061;
var G__13064 = cljs.core.count(c__9646__auto___13061);
var G__13065 = 0;
seq__13025_13050 = G__13062;
chunk__13026_13051 = G__13063;
count__13027_13052 = G__13064;
i__13028_13053 = G__13065;
continue;
}
} else
{var n_13066 = cljs.core.first(seq__13025_13060__$1);
if(cljs.core.truth_(n_13066.propagationStopped))
{} else
{evt.currentTarget = n_13066;
goog.events.fireListeners(n_13066,evt.type,false,evt);
}
{
var G__13067 = cljs.core.next(seq__13025_13060__$1);
var G__13068 = null;
var G__13069 = 0;
var G__13070 = 0;
seq__13025_13050 = G__13067;
chunk__13026_13051 = G__13068;
count__13027_13052 = G__13069;
i__13028_13053 = G__13070;
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
var seq__13077_13083 = cljs.core.seq(evt_map);
var chunk__13078_13084 = null;
var count__13079_13085 = 0;
var i__13080_13086 = 0;
while(true){
if((i__13080_13086 < count__13079_13085))
{var vec__13081_13087 = chunk__13078_13084.cljs$core$IIndexed$_nth$arity$2(chunk__13078_13084,i__13080_13086);
var k_13088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081_13087,0,null);
var v_13089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081_13087,1,null);
(evt[k_13088] = v_13089);
{
var G__13090 = seq__13077_13083;
var G__13091 = chunk__13078_13084;
var G__13092 = count__13079_13085;
var G__13093 = (i__13080_13086 + 1);
seq__13077_13083 = G__13090;
chunk__13078_13084 = G__13091;
count__13079_13085 = G__13092;
i__13080_13086 = G__13093;
continue;
}
} else
{var temp__4092__auto___13094 = cljs.core.seq(seq__13077_13083);
if(temp__4092__auto___13094)
{var seq__13077_13095__$1 = temp__4092__auto___13094;
if(cljs.core.chunked_seq_QMARK_(seq__13077_13095__$1))
{var c__9646__auto___13096 = cljs.core.chunk_first(seq__13077_13095__$1);
{
var G__13097 = cljs.core.chunk_rest(seq__13077_13095__$1);
var G__13098 = c__9646__auto___13096;
var G__13099 = cljs.core.count(c__9646__auto___13096);
var G__13100 = 0;
seq__13077_13083 = G__13097;
chunk__13078_13084 = G__13098;
count__13079_13085 = G__13099;
i__13080_13086 = G__13100;
continue;
}
} else
{var vec__13082_13101 = cljs.core.first(seq__13077_13095__$1);
var k_13102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082_13101,0,null);
var v_13103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082_13101,1,null);
(evt[k_13102] = v_13103);
{
var G__13104 = cljs.core.next(seq__13077_13095__$1);
var G__13105 = null;
var G__13106 = 0;
var G__13107 = 0;
seq__13077_13083 = G__13104;
chunk__13078_13084 = G__13105;
count__13079_13085 = G__13106;
i__13080_13086 = G__13107;
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13108_SHARP_){
return goog.events.getListeners(p1__13108_SHARP_,type__$1,false);
}),domina.nodes(content));
});
