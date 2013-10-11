goog.provide('semtag_web.services');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('semtag_web.route');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.net.xhr');
goog.require('io.pedestal.app.protocols');
semtag_web.services.search_id = (function search_id(message){
return semtag_web.route.create_screen_id("\uFDD0:search",cljs.core.select_keys(message,cljs.core.PersistentVector.fromArray(["\uFDD0:query","\uFDD0:search-type"], true)));
});
semtag_web.services.thing_id = (function thing_id(message){
return semtag_web.route.create_screen_id("\uFDD0:thing",(new cljs.core.Keyword("\uFDD0:params")).call(null,message));
});
semtag_web.services.put_search_title = (function put_search_title(input_queue,p__11572){
var map__11574 = p__11572;
var map__11574__$1 = ((cljs.core.seq_QMARK_(map__11574))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11574):map__11574);
var message = map__11574__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11574__$1,"\uFDD0:query");
return io.pedestal.app.protocols.put_message(input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray([semtag_web.services.search_id(message),"\uFDD0:search-title"], true),"\uFDD0:value",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("Search results for '%s'",cljs.core.array_seq([query], 0))], true));
});
semtag_web.services.put_value = (function put_value(path,input_queue,value){
return io.pedestal.app.protocols.put_message(input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-value",io.pedestal.app.messages.topic,path,"\uFDD0:value",value], true));
});
semtag_web.services.base_uri = "http://localhost:3000/api";
semtag_web.services.GET = (function GET(rel_uri,success_fn,input_queue){
var uri = [cljs.core.str(semtag_web.services.base_uri),cljs.core.str(rel_uri)].join('');
console.log([cljs.core.str("Calling API endpoint: "),cljs.core.str(uri)].join(''));
return io.pedestal.app.net.xhr.request.cljs$core$IFn$_invoke$arity$variadic(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),uri,cljs.core.array_seq(["\uFDD0:request-method","GET","\uFDD0:on-success",(function (data){
return (success_fn.cljs$core$IFn$_invoke$arity$1 ? success_fn.cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string((new cljs.core.Keyword("\uFDD0:body")).call(null,data))) : success_fn.call(null,cljs.reader.read_string((new cljs.core.Keyword("\uFDD0:body")).call(null,data))));
}),"\uFDD0:on-error",(function (p__11577){
var map__11578 = p__11577;
var map__11578__$1 = ((cljs.core.seq_QMARK_(map__11578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11578):map__11578);
var msg = map__11578__$1;
var xhr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11578__$1,"\uFDD0:xhr");
return semtag_web.services.put_value(cljs.core.PersistentVector.fromArray(["\uFDD0:alert-error"], true),input_queue,cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("Request '%s' failed with: %s",cljs.core.array_seq([uri,xhr.getResponse()], 0)));
})], 0));
});
/**
* Sends message to cause an effect
*/
semtag_web.services.send_message = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("send-message",(function (message,input_queue){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword("\uFDD0:value")).call(null,message));
}),"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
})();
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:default",(function (p__11579,input_queue){
var map__11580 = p__11579;
var map__11580__$1 = ((cljs.core.seq_QMARK_(map__11580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11580):map__11580);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11580__$1,"\uFDD0:value");
return semtag_web.services.GET([cljs.core.str("/"),cljs.core.str(value)].join(''),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(value),cljs.core.str("-results")].join(''))], true),input_queue),input_queue);
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:search-form",(function (message,input_queue){
return semtag_web.services.GET("/tags",cljs.core.partial.cljs$core$IFn$_invoke$arity$3(semtag_web.services.put_value,cljs.core.PersistentVector.fromArray(["\uFDD0:tags-results"], true),input_queue),input_queue);
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:home",(function (message,input_queue){
return (semtag_web.services.send_message.cljs$core$IFn$_invoke$arity$2 ? semtag_web.services.send_message.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value","\uFDD0:search-form"),input_queue) : semtag_web.services.send_message.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value","\uFDD0:search-form"),input_queue));
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:search",(function (message,input_queue){
semtag_web.services.put_search_title(input_queue,message);
return semtag_web.services.GET([cljs.core.str("/search?query="),cljs.core.str((new cljs.core.Keyword("\uFDD0:query")).call(null,message)),cljs.core.str("&search_type="),cljs.core.str((new cljs.core.Keyword("\uFDD0:search-type")).call(null,message))].join(''),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([semtag_web.services.search_id(message),"\uFDD0:search-results"], true),input_queue),input_queue);
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:thing",(function (message,input_queue){
return semtag_web.services.GET([cljs.core.str("/thing?id="),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,cljs.core.PersistentVector.fromArray(["\uFDD0:params","\uFDD0:id"], true)))].join(''),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([semtag_web.services.thing_id(message),"\uFDD0:thing-results"], true),input_queue),input_queue);
}));
semtag_web.services.services_fn = (function() {
var services_fn = null;
var services_fn__2 = (function (message,input_queue){
return services_fn.cljs$core$IFn$_invoke$arity$3(message,input_queue,semtag_web.services.send_message);
});
var services_fn__3 = (function (message,input_queue,send_fn){
console.log([cljs.core.str("Effect called with: "),cljs.core.str(message)].join(''));
var G__11582 = (io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.topic.call(null,message));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray(["\uFDD0:page"], true),G__11582))
{if(cljs.core.truth_(cljs.core.re_find(/^thing/,(new cljs.core.Keyword("\uFDD0:value")).call(null,message))))
{return (send_fn.cljs$core$IFn$_invoke$arity$2 ? send_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value","thing"),input_queue) : send_fn.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value","thing"),input_queue));
} else
{return (send_fn.cljs$core$IFn$_invoke$arity$2 ? send_fn.cljs$core$IFn$_invoke$arity$2(message,input_queue) : send_fn.call(null,message,input_queue));
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray(["\uFDD0:search"], true),G__11582))
{return (send_fn.cljs$core$IFn$_invoke$arity$2 ? send_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value","search"),input_queue) : send_fn.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value","search"),input_queue));
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
