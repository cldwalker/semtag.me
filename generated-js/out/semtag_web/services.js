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
semtag_web.services.type_id = (function type_id(message){
return semtag_web.route.create_screen_id("\uFDD0:type",(new cljs.core.Keyword("\uFDD0:params")).call(null,message));
});
semtag_web.services.put_search_title = (function put_search_title(input_queue,p__155267){
var map__155269 = p__155267;
var map__155269__$1 = ((cljs.core.seq_QMARK_(map__155269))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__155269):map__155269);
var message = map__155269__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155269__$1,"\uFDD0:query");
return io.pedestal.app.protocols.put_message(input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray([semtag_web.services.search_id(message),"\uFDD0:search-title"], true),"\uFDD0:value",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("Search results for '%s'",cljs.core.array_seq([query], 0))], true));
});
semtag_web.services.put_value = (function put_value(path,input_queue,value){
return io.pedestal.app.protocols.put_message(input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-value",io.pedestal.app.messages.topic,path,"\uFDD0:value",value], true));
});
semtag_web.services.spinner_on = (function spinner_on(input_queue){
return io.pedestal.app.protocols.put_message(input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:modal-spinner"], true),"\uFDD0:value",true], true));
});
semtag_web.services.spinner_off = (function spinner_off(input_queue){
return io.pedestal.app.protocols.put_message(input_queue,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:modal-spinner"], true),"\uFDD0:value",null], true));
});
semtag_web.services.base_uri = "http://localhost:3000/api";
semtag_web.services.GET = (function GET(rel_uri,success_fn,input_queue){
var uri = [cljs.core.str(semtag_web.services.base_uri),cljs.core.str(rel_uri)].join('');
console.log([cljs.core.str("Calling API endpoint: "),cljs.core.str(uri)].join(''));
return io.pedestal.app.net.xhr.request.cljs$core$IFn$_invoke$arity$variadic(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),uri,cljs.core.array_seq(["\uFDD0:request-method","GET","\uFDD0:on-success",(function (data){
return (success_fn.cljs$core$IFn$_invoke$arity$1 ? success_fn.cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string((new cljs.core.Keyword("\uFDD0:body")).call(null,data))) : success_fn.call(null,cljs.reader.read_string((new cljs.core.Keyword("\uFDD0:body")).call(null,data))));
}),"\uFDD0:on-error",(function (p__155272){
var map__155273 = p__155272;
var map__155273__$1 = ((cljs.core.seq_QMARK_(map__155273))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__155273):map__155273);
var msg = map__155273__$1;
var xhr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155273__$1,"\uFDD0:xhr");
semtag_web.services.spinner_off(input_queue);
return semtag_web.services.put_value(cljs.core.PersistentVector.fromArray(["\uFDD0:alert-error"], true),input_queue,cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("Request '%s' failed with: %s",cljs.core.array_seq([uri,xhr.getResponse()], 0)));
})], 0));
});
/**
* Sends message to cause an effect
*/
semtag_web.services.send_message = (function (){var method_table__9983__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9984__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9985__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9986__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("send-message",(function (message,input_queue){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword("\uFDD0:value")).call(null,message));
}),"\uFDD0:default",hierarchy__9987__auto__,method_table__9983__auto__,prefer_table__9984__auto__,method_cache__9985__auto__,cached_hierarchy__9986__auto__));
})();
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:default",(function (p__155274,input_queue){
var map__155275 = p__155274;
var map__155275__$1 = ((cljs.core.seq_QMARK_(map__155275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__155275):map__155275);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155275__$1,"\uFDD0:value");
semtag_web.services.spinner_on(input_queue);
return semtag_web.services.GET([cljs.core.str("/"),cljs.core.str(value)].join(''),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(value),cljs.core.str("-results")].join(''))], true),input_queue),semtag_web.services.spinner_off(input_queue),input_queue);
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:search_form",(function (message,input_queue){
return semtag_web.services.GET("/tags",cljs.core.partial.cljs$core$IFn$_invoke$arity$3(semtag_web.services.put_value,cljs.core.PersistentVector.fromArray(["\uFDD0:tags-results"], true),input_queue),input_queue);
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:home",(function (message,input_queue){
return (semtag_web.services.send_message.cljs$core$IFn$_invoke$arity$2 ? semtag_web.services.send_message.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value","\uFDD0:search_form"),input_queue) : semtag_web.services.send_message.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value","\uFDD0:search_form"),input_queue));
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:search",(function (p__155276,input_queue){
var map__155277 = p__155276;
var map__155277__$1 = ((cljs.core.seq_QMARK_(map__155277))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__155277):map__155277);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__155277__$1,"\uFDD0:params");
semtag_web.services.spinner_on(input_queue);
semtag_web.services.put_search_title(input_queue,params);
return semtag_web.services.GET([cljs.core.str("/search?query="),cljs.core.str((new cljs.core.Keyword("\uFDD0:query")).call(null,params)),cljs.core.str("&search_type="),cljs.core.str((new cljs.core.Keyword("\uFDD0:search-type")).call(null,params))].join(''),(function (data){
semtag_web.services.put_value(cljs.core.PersistentVector.fromArray([semtag_web.services.search_id(params),"\uFDD0:search-results"], true),input_queue,data);
return semtag_web.services.spinner_off(input_queue);
}),input_queue);
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:thing",(function (message,input_queue){
semtag_web.services.spinner_on(input_queue);
return semtag_web.services.GET([cljs.core.str("/thing?id="),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,cljs.core.PersistentVector.fromArray(["\uFDD0:params","\uFDD0:id"], true)))].join(''),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([semtag_web.services.thing_id(message),"\uFDD0:thing-results"], true),input_queue),semtag_web.services.spinner_off(input_queue),input_queue);
}));
semtag_web.services.send_message.cljs$core$IMultiFn$_add_method$arity$3(semtag_web.services.send_message,"\uFDD0:type",(function (message,input_queue){
semtag_web.services.spinner_on(input_queue);
return semtag_web.services.GET([cljs.core.str("/type?name="),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,cljs.core.PersistentVector.fromArray(["\uFDD0:params","\uFDD0:name"], true)))].join(''),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(semtag_web.services.put_value,cljs.core.PersistentVector.fromArray([semtag_web.services.type_id(message),"\uFDD0:type-results"], true),input_queue),semtag_web.services.spinner_off(input_queue),input_queue);
}));
semtag_web.services.services_fn = (function() {
var services_fn = null;
var services_fn__2 = (function (message,input_queue){
return services_fn.cljs$core$IFn$_invoke$arity$3(message,input_queue,semtag_web.services.send_message);
});
var services_fn__3 = (function (message,input_queue,send_fn){
console.log([cljs.core.str("Effect called with: "),cljs.core.str(message)].join(''));
var G__155279 = (io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.topic.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.topic.call(null,message));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray(["\uFDD0:page"], true),G__155279))
{var temp__4090__auto__ = semtag_web.route.dynamic_screen__GT_route((new cljs.core.Keyword("\uFDD0:value")).call(null,message));
if(cljs.core.truth_(temp__4090__auto__))
{var route = temp__4090__auto__;
return (send_fn.cljs$core$IFn$_invoke$arity$2 ? send_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value",cljs.core.name(route)),input_queue) : send_fn.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,"\uFDD0:value",cljs.core.name(route)),input_queue));
} else
{return (send_fn.cljs$core$IFn$_invoke$arity$2 ? send_fn.cljs$core$IFn$_invoke$arity$2(message,input_queue) : send_fn.call(null,message,input_queue));
}
} else
{if("\uFDD0:else")
{return null;
} else
{return null;
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
