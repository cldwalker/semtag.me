goog.provide('semtag_web.debug');
goog.require('cljs.core');
goog.require('io.pedestal.app');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.util.platform');
semtag_web.debug.log_input_STAR_ = (function log_input_STAR_(msg){
console.log("INPUT",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0)));
return cljs.core.PersistentVector.fromArray([msg], true);
});
/**
* Logs every input message
*/
semtag_web.debug.log_input = (function log_input(description){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(description,"\uFDD0:pre",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:*",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),semtag_web.debug.log_input_STAR_], true)], true)),"\uFDD0:input-adapter",(function (m){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",(io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1(m) : io.pedestal.app.messages.type.call(null,m)),"\uFDD0:out",(function (){var topic = (io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1(m) : io.pedestal.app.messages.topic.call(null,m));
if(cljs.core.vector_QMARK_(topic))
{return topic;
} else
{return cljs.core.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([topic], 0));
}
})()], true);
}));
});
