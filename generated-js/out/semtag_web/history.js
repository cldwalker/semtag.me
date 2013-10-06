goog.provide('semtag_web.history');
goog.require('cljs.core');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.util.log');
goog.require('semtag_web.route');
goog.require('io.pedestal.app.protocols');
semtag_web.history.last_page = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
semtag_web.history.input_queues = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
semtag_web.history.navigate = (function navigate(token){
var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(semtag_web.history.input_queues),token);
if(cljs.core.truth_(temp__4092__auto__))
{var d = temp__4092__auto__;
console.log("NAVIGATE",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([token], 0)));
return (io.pedestal.app.protocols.put_message.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.protocols.put_message.cljs$core$IFn$_invoke$arity$2(d,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:set-focus","\uFDD0:name",token], true)) : io.pedestal.app.protocols.put_message.call(null,d,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:set-focus","\uFDD0:name",token], true)));
} else
{return null;
}
});
semtag_web.history.supported_QMARK_ = (function (){var and__3941__auto__ = history;
if(cljs.core.truth_(and__3941__auto__))
{return history.pushState;
} else
{return and__3941__auto__;
}
})();
semtag_web.history.navigated = (function navigated(d,token){
if(cljs.core.truth_(semtag_web.history.supported_QMARK_))
{console.log("NAVIGATED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([token], 0)));
var current_token_10079 = history.state;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_token_10079,token))
{if((cljs.core.deref(semtag_web.history.last_page) == null))
{history.replaceState(token,null,null);
} else
{history.pushState(token,null,semtag_web.route.url_for(token));
}
} else
{}
cljs.core.reset_BANG_(semtag_web.history.last_page,token);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(semtag_web.history.input_queues,cljs.core.assoc,token,d);
} else
{return null;
}
});
if(cljs.core.truth_(semtag_web.history.supported_QMARK_))
{window.onpopstate = (function (e){
console.log("POP",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e.state], 0)));
return semtag_web.history.navigate(e.state);
});
} else
{io.pedestal.app.util.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:in","\uFDD0:semtag-web.history","\uFDD0:message","HTML 5 History is not supported in this browser!"], 0));
}
