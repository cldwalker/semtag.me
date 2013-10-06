goog.provide('semtag_web.history');
goog.require('cljs.core');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.util.log');
goog.require('semtag_web.route');
goog.require('io.pedestal.app.protocols');
semtag_web.history.last_page = cljs.core.atom.call(null,null);
semtag_web.history.input_queues = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
semtag_web.history.navigate = (function navigate(token){
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,semtag_web.history.input_queues),token);
if(cljs.core.truth_(temp__4092__auto__))
{var d = temp__4092__auto__;
console.log("NAVIGATE",cljs.core.pr_str.call(null,token));
return io.pedestal.app.protocols.put_message.call(null,d,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,io.pedestal.app.messages.type,"\uFDD0:set-focus","\uFDD0:name",token], true));
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
{console.log("NAVIGATED",cljs.core.pr_str.call(null,token));
var current_token_10815 = history.state;
if(cljs.core.not_EQ_.call(null,current_token_10815,token))
{if((cljs.core.deref.call(null,semtag_web.history.last_page) == null))
{history.replaceState(token,null,null);
} else
{history.pushState(token,null,semtag_web.route.url_for.call(null,token));
}
} else
{}
cljs.core.reset_BANG_.call(null,semtag_web.history.last_page,token);
return cljs.core.swap_BANG_.call(null,semtag_web.history.input_queues,cljs.core.assoc,token,d);
} else
{return null;
}
});
if(cljs.core.truth_(semtag_web.history.supported_QMARK_))
{window.onpopstate = (function (e){
console.log("POP",cljs.core.pr_str.call(null,e.state));
return semtag_web.history.navigate.call(null,e.state);
});
} else
{io.pedestal.app.util.log.warn.call(null,"\uFDD0:in","\uFDD0:semtag-web.history","\uFDD0:message","HTML 5 History is not supported in this browser!");
}
