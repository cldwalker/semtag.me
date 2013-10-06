goog.provide('semtag_web.services');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('semtag_web.route');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.net.xhr');
goog.require('io.pedestal.app.protocols');
semtag_web.services.search_id = (function search_id(message){
return semtag_web.route.create_screen_id.call(null,"\uFDD0:search",cljs.core.select_keys.call(null,message,cljs.core.PersistentVector.fromArray(["\uFDD0:query","\uFDD0:search-type"], true)));
});
semtag_web.services.thing_id = (function thing_id(message){
return semtag_web.route.create_screen_id.call(null,"\uFDD0:thing",(new cljs.core.Keyword("\uFDD0:params")).call(null,message));
});
semtag_web.services.put_search_title = (function put_search_title(input_queue,p__11556){
var map__11558 = p__11556;
var map__11558__$1 = ((cljs.core.seq_QMARK_.call(null,map__11558))?cljs.core.apply.call(null,cljs.core.hash_map,map__11558):map__11558);
var message = map__11558__$1;
var query = cljs.core.get.call(null,map__11558__$1,"\uFDD0:query");
return io.pedestal.app.protocols.put_message.call(null,input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray([semtag_web.services.search_id.call(null,message),"\uFDD0:search-title"], true),"\uFDD0:value",cljs.core.format.call(null,"Search results for '%s'",query)], true));
});
semtag_web.services.put_value = (function put_value(path,input_queue,value){
return io.pedestal.app.protocols.put_message.call(null,input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-value",io.pedestal.app.messages.topic,path,"\uFDD0:value",value], true));
});
semtag_web.services.base_uri = "http://localhost:3000/api";
semtag_web.services.GET = (function GET(rel_uri,success_fn,input_queue){
var uri = [cljs.core.str(semtag_web.services.base_uri),cljs.core.str(rel_uri)].join('');
console.log([cljs.core.str("Calling API endpoint: "),cljs.core.str(uri)].join(''));
return io.pedestal.app.net.xhr.request.call(null,cljs.core.gensym.call(null),uri,"\uFDD0:request-method","GET","\uFDD0:on-success",(function (data){
return success_fn.call(null,cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0:body")).call(null,data)));
}),"\uFDD0:on-error",(function (p__11561){
var map__11562 = p__11561;
var map__11562__$1 = ((cljs.core.seq_QMARK_.call(null,map__11562))?cljs.core.apply.call(null,cljs.core.hash_map,map__11562):map__11562);
var msg = map__11562__$1;
var xhr = cljs.core.get.call(null,map__11562__$1,"\uFDD0:xhr");
return semtag_web.services.put_value.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:alert-error"], true),input_queue,cljs.core.format.call(null,"Request '%s' failed with: %s",uri,xhr.getResponse()));
}));
});
/**
* Sends message to cause an effect
*/
semtag_web.services.send_message = (function (){var method_table__9697__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9701__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("send-message",(function (message,input_queue){
return cljs.core.keyword.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,message));
}),"\uFDD0:default",hierarchy__9701__auto__,method_table__9697__auto__,prefer_table__9698__auto__,method_cache__9699__auto__,cached_hierarchy__9700__auto__));
})();
cljs.core._add_method.call(null,semtag_web.services.send_message,"\uFDD0:default",(function (p__11563,input_queue){
var map__11564 = p__11563;
var map__11564__$1 = ((cljs.core.seq_QMARK_.call(null,map__11564))?cljs.core.apply.call(null,cljs.core.hash_map,map__11564):map__11564);
var value = cljs.core.get.call(null,map__11564__$1,"\uFDD0:value");
return semtag_web.services.GET.call(null,[cljs.core.str("/"),cljs.core.str(value)].join(''),cljs.core.partial.call(null,semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,[cljs.core.str(value),cljs.core.str("-results")].join(''))], true),input_queue),input_queue);
}));
cljs.core._add_method.call(null,semtag_web.services.send_message,"\uFDD0:search-form",(function (message,input_queue){
return semtag_web.services.GET.call(null,"/tags",cljs.core.partial.call(null,semtag_web.services.put_value,cljs.core.PersistentVector.fromArray(["\uFDD0:tags-results"], true),input_queue),input_queue);
}));
cljs.core._add_method.call(null,semtag_web.services.send_message,"\uFDD0:home",(function (message,input_queue){
return semtag_web.services.send_message.call(null,cljs.core.assoc.call(null,message,"\uFDD0:value","\uFDD0:search-form"),input_queue);
}));
cljs.core._add_method.call(null,semtag_web.services.send_message,"\uFDD0:search",(function (message,input_queue){
semtag_web.services.put_search_title.call(null,input_queue,message);
return semtag_web.services.GET.call(null,[cljs.core.str("/search?query="),cljs.core.str((new cljs.core.Keyword("\uFDD0:query")).call(null,message)),cljs.core.str("&search_type="),cljs.core.str((new cljs.core.Keyword("\uFDD0:search-type")).call(null,message))].join(''),cljs.core.partial.call(null,semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([semtag_web.services.search_id.call(null,message),"\uFDD0:search-results"], true),input_queue),input_queue);
}));
cljs.core._add_method.call(null,semtag_web.services.send_message,"\uFDD0:thing",(function (message,input_queue){
return semtag_web.services.GET.call(null,[cljs.core.str("/thing?id="),cljs.core.str(cljs.core.get_in.call(null,message,cljs.core.PersistentVector.fromArray(["\uFDD0:params","\uFDD0:id"], true)))].join(''),cljs.core.partial.call(null,semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([semtag_web.services.thing_id.call(null,message),"\uFDD0:thing-results"], true),input_queue),input_queue);
}));
semtag_web.services.services_fn = (function() {
var services_fn = null;
var services_fn__2 = (function (message,input_queue){
return services_fn.call(null,message,input_queue,semtag_web.services.send_message);
});
var services_fn__3 = (function (message,input_queue,send_fn){
console.log([cljs.core.str("Effect called with: "),cljs.core.str(message)].join(''));
var G__11566 = io.pedestal.app.messages.topic.call(null,message);
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:page"], true),G__11566))
{if(cljs.core.truth_(cljs.core.re_find.call(null,/^thing/,(new cljs.core.Keyword("\uFDD0:value")).call(null,message))))
{return send_fn.call(null,cljs.core.assoc.call(null,message,"\uFDD0:value","thing"),input_queue);
} else
{return send_fn.call(null,message,input_queue);
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:search"], true),G__11566))
{return send_fn.call(null,cljs.core.assoc.call(null,message,"\uFDD0:value","search"),input_queue);
} else
{if("\uFDD0:else")
{return null;
} else
{return null;
}
}
}
});
services_fn = function(message,input_queue,send_fn){
switch(arguments.length){
case 2:
return services_fn__2.call(this,message,input_queue);
case 3:
return services_fn__3.call(this,message,input_queue,send_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
services_fn.cljs$core$IFn$_invoke$arity$2 = services_fn__2;
services_fn.cljs$core$IFn$_invoke$arity$3 = services_fn__3;
return services_fn;
})()
;
