goog.provide('semtag_web.debug');
goog.require('cljs.core');
goog.require('io.pedestal.app');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.util.platform');
semtag_web.debug.log_input_STAR_ = (function log_input_STAR_(msg){
console.log("INPUT",cljs.core.pr_str.call(null,msg));
return cljs.core.PersistentVector.fromArray([msg], true);
});
/**
* Logs every input message
*/
semtag_web.debug.log_input = (function log_input(description){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,description,"\uFDD0:pre",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:*",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),semtag_web.debug.log_input_STAR_], true)], true)),"\uFDD0:input-adapter",(function (m){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",io.pedestal.app.messages.type.call(null,m),"\uFDD0:out",(function (){var topic = io.pedestal.app.messages.topic.call(null,m);
if(cljs.core.vector_QMARK_.call(null,topic))
{return topic;
} else
{return cljs.core.vector.call(null,topic);
}
})()], true);
}));
});
