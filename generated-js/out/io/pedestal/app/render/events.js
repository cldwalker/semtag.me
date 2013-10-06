goog.provide('io.pedestal.app.render.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina.events');
goog.require('domina');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.protocols');
io.pedestal.app.render.events.DomContentCoercible = {};
io.pedestal.app.render.events._coerce_to_dom_content = (function _coerce_to_dom_content(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$events$DomContentCoercible$_coerce_to_dom_content$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$events$DomContentCoercible$_coerce_to_dom_content$arity$1(this$);
} else
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.events._coerce_to_dom_content[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.events._coerce_to_dom_content["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContentCoercible.-coerce-to-dom-content",this$);
}
}
})().call(null,this$);
}
});
(io.pedestal.app.render.events.DomContentCoercible["_"] = true);
(io.pedestal.app.render.events._coerce_to_dom_content["_"] = (function (this$){
if((function (){var G__12900 = this$;
if(G__12900)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__12900.domina$DomContent$;
}
})()))
{return true;
} else
{if((!G__12900.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,domina.DomContent,G__12900);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,domina.DomContent,G__12900);
}
})())
{return this$;
} else
{return null;
}
}));
(io.pedestal.app.render.events.DomContentCoercible["string"] = true);
(io.pedestal.app.render.events._coerce_to_dom_content["string"] = (function (this$){
return domina.by_id.call(null,this$);
}));
io.pedestal.app.render.events.value = (function value(dc){
return io.pedestal.app.render.events._coerce_to_dom_content.call(null,dc).value;
});
io.pedestal.app.render.events.set_value_BANG_ = (function set_value_BANG_(dc,x){
return io.pedestal.app.render.events._coerce_to_dom_content.call(null,dc).value = x;
});
io.pedestal.app.render.events.produce_messages = (function produce_messages(messages,e){
if(cljs.core.fn_QMARK_.call(null,messages))
{return messages.call(null,e);
} else
{return messages;
}
});
io.pedestal.app.render.events.send_transforms = (function() {
var send_transforms = null;
var send_transforms__2 = (function (input_queue,messages){
var seq__12905 = cljs.core.seq.call(null,messages);
var chunk__12906 = null;
var count__12907 = 0;
var i__12908 = 0;
while(true){
if((i__12908 < count__12907))
{var message = cljs.core._nth.call(null,chunk__12906,i__12908);
io.pedestal.app.protocols.put_message.call(null,input_queue,message);
{
var G__12909 = seq__12905;
var G__12910 = chunk__12906;
var G__12911 = count__12907;
var G__12912 = (i__12908 + 1);
seq__12905 = G__12909;
chunk__12906 = G__12910;
count__12907 = G__12911;
i__12908 = G__12912;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12905);
if(temp__4092__auto__)
{var seq__12905__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12905__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__12905__$1);
{
var G__12913 = cljs.core.chunk_rest.call(null,seq__12905__$1);
var G__12914 = c__9640__auto__;
var G__12915 = cljs.core.count.call(null,c__9640__auto__);
var G__12916 = 0;
seq__12905 = G__12913;
chunk__12906 = G__12914;
count__12907 = G__12915;
i__12908 = G__12916;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__12905__$1);
io.pedestal.app.protocols.put_message.call(null,input_queue,message);
{
var G__12917 = cljs.core.next.call(null,seq__12905__$1);
var G__12918 = null;
var G__12919 = 0;
var G__12920 = 0;
seq__12905 = G__12917;
chunk__12906 = G__12918;
count__12907 = G__12919;
i__12908 = G__12920;
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
var send_transforms__3 = (function (input_queue,transform_name,messages){
return send_transforms.call(null,input_queue,cljs.core.map.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.add_message_type,transform_name),messages));
});
var send_transforms__4 = (function (input_queue,transform_name,messages,input_map){
return send_transforms.call(null,input_queue,io.pedestal.app.messages.fill.call(null,transform_name,messages,input_map));
});
send_transforms = function(input_queue,transform_name,messages,input_map){
switch(arguments.length){
case 2:
return send_transforms__2.call(this,input_queue,transform_name);
case 3:
return send_transforms__3.call(this,input_queue,transform_name,messages);
case 4:
return send_transforms__4.call(this,input_queue,transform_name,messages,input_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
send_transforms.cljs$core$IFn$_invoke$arity$2 = send_transforms__2;
send_transforms.cljs$core$IFn$_invoke$arity$3 = send_transforms__3;
send_transforms.cljs$core$IFn$_invoke$arity$4 = send_transforms__4;
return send_transforms;
})()
;
io.pedestal.app.render.events.send_on = (function() {
var send_on = null;
var send_on__4 = (function (event_type,dc,input_queue,messages){
return domina.events.listen_BANG_.call(null,io.pedestal.app.render.events._coerce_to_dom_content.call(null,dc),event_type,(function (e){
domina.events.prevent_default.call(null,e);
return io.pedestal.app.render.events.send_transforms.call(null,input_queue,io.pedestal.app.render.events.produce_messages.call(null,messages,e));
}));
});
var send_on__5 = (function (event_type,dc,input_queue,transform_name,messages){
return send_on.call(null,event_type,dc,input_queue,(function (e){
return cljs.core.map.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.add_message_type,transform_name),io.pedestal.app.render.events.produce_messages.call(null,messages,e));
}));
});
send_on = function(event_type,dc,input_queue,transform_name,messages){
switch(arguments.length){
case 4:
return send_on__4.call(this,event_type,dc,input_queue,transform_name);
case 5:
return send_on__5.call(this,event_type,dc,input_queue,transform_name,messages);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
send_on.cljs$core$IFn$_invoke$arity$4 = send_on__4;
send_on.cljs$core$IFn$_invoke$arity$5 = send_on__5;
return send_on;
})()
;
/**
* @param {...*} var_args
*/
io.pedestal.app.render.events.send_on_click = (function() { 
var send_on_click__delegate = function (args){
return cljs.core.apply.call(null,io.pedestal.app.render.events.send_on,"\uFDD0:click",args);
};
var send_on_click = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return send_on_click__delegate.call(this, args);
};
send_on_click.cljs$lang$maxFixedArity = 0;
send_on_click.cljs$lang$applyTo = (function (arglist__12921){
var args = cljs.core.seq(arglist__12921);
return send_on_click__delegate(args);
});
send_on_click.cljs$core$IFn$_invoke$arity$variadic = send_on_click__delegate;
return send_on_click;
})()
;
/**
* @param {...*} var_args
*/
io.pedestal.app.render.events.send_on_keyup = (function() { 
var send_on_keyup__delegate = function (args){
return cljs.core.apply.call(null,io.pedestal.app.render.events.send_on,"\uFDD0:keyup",args);
};
var send_on_keyup = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return send_on_keyup__delegate.call(this, args);
};
send_on_keyup.cljs$lang$maxFixedArity = 0;
send_on_keyup.cljs$lang$applyTo = (function (arglist__12922){
var args = cljs.core.seq(arglist__12922);
return send_on_keyup__delegate(args);
});
send_on_keyup.cljs$core$IFn$_invoke$arity$variadic = send_on_keyup__delegate;
return send_on_keyup;
})()
;
io.pedestal.app.render.events.collect_inputs = (function collect_inputs(input_map){
return cljs.core.reduce.call(null,(function (a,p__12925){
var vec__12926 = p__12925;
var dc = cljs.core.nth.call(null,vec__12926,0,null);
var k = cljs.core.nth.call(null,vec__12926,1,null);
return cljs.core.assoc.call(null,a,k,io.pedestal.app.render.events.value.call(null,dc));
}),cljs.core.PersistentArrayMap.EMPTY,input_map);
});
io.pedestal.app.render.events.collect_and_send = (function collect_and_send(event_type,dc,input_queue,transform_name,messages,input_map){
return io.pedestal.app.render.events.send_on.call(null,event_type,dc,input_queue,(function (_){
return io.pedestal.app.messages.fill.call(null,transform_name,messages,io.pedestal.app.render.events.collect_inputs.call(null,input_map));
}));
});
io.pedestal.app.render.events.remove_event = (function remove_event(event_type,dc){
return domina.events.unlisten_BANG_.call(null,io.pedestal.app.render.events._coerce_to_dom_content.call(null,dc),event_type);
});
io.pedestal.app.render.events.remove_click_event = (function remove_click_event(dc){
return io.pedestal.app.render.events.remove_event.call(null,"\uFDD0:click",dc);
});
