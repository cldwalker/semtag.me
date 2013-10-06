goog.provide('io.pedestal.app.protocols');
goog.require('cljs.core');
io.pedestal.app.protocols.Activity = {};
io.pedestal.app.protocols.start = (function start(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$protocols$Activity$start$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$protocols$Activity$start$arity$1(this$);
} else
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.protocols.start[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.protocols.start["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Activity.start",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.protocols.stop = (function stop(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$protocols$Activity$stop$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$protocols$Activity$stop$arity$1(this$);
} else
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.protocols.stop[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.protocols.stop["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Activity.stop",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.protocols.PutMessage = {};
io.pedestal.app.protocols.put_message = (function put_message(this$,message){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$protocols$PutMessage$put_message$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$protocols$PutMessage$put_message$arity$2(this$,message);
} else
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.protocols.put_message[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.protocols.put_message["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PutMessage.put-message",this$);
}
}
})().call(null,this$,message);
}
});
io.pedestal.app.protocols.TakeMessage = {};
io.pedestal.app.protocols.pop_message = (function pop_message(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$protocols$TakeMessage$pop_message$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$protocols$TakeMessage$pop_message$arity$1(this$);
} else
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.protocols.pop_message[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.protocols.pop_message["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TakeMessage.pop-message",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.protocols.take_message = (function take_message(this$,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$protocols$TakeMessage$take_message$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$protocols$TakeMessage$take_message$arity$2(this$,f);
} else
{var x__9509__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.protocols.take_message[goog.typeOf(x__9509__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.protocols.take_message["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TakeMessage.take-message",this$);
}
}
})().call(null,this$,f);
}
});
