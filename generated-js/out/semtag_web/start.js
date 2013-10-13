goog.provide('semtag_web.start');
goog.require('cljs.core');
goog.require('io.pedestal.app');
goog.require('semtag_web.route');
goog.require('io.pedestal.app.protocols');
goog.require('io.pedestal.app.render');
goog.require('io.pedestal.app.render.push');
goog.require('semtag_web.history');
goog.require('clojure.string');
goog.require('semtag_web.services');
goog.require('semtag_web.rendering');
goog.require('io.pedestal.app.messages');
goog.require('goog.Uri');
goog.require('semtag_web.behavior');
semtag_web.start.put_message_on_page_load = (function put_message_on_page_load(app,screen,params){
if(cljs.core.truth_(cljs.core.re_find(/^search/,cljs.core.name(screen))))
{io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:map-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:page"], true),"\uFDD0:value","\uFDD0:search_form"], true));
return io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:map-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:search"], true)], true),params], 0)));
} else
{return io.pedestal.app.protocols.put_message((new cljs.core.Keyword("\uFDD0:input")).call(null,app),cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:map-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:page"], true),"\uFDD0:value",cljs.core.name(screen),"\uFDD0:params",params], true));
}
});
/**
* Updates behavior with possible dynamic focus
*/
semtag_web.start.update_behavior = (function update_behavior(behavior,route,screen){
var G__11648 = behavior;
var G__11648__$1 = ((true)?cljs.core.assoc_in(G__11648,cljs.core.PersistentVector.fromArray(["\uFDD0:focus","\uFDD0:default"], true),screen):G__11648);
var G__11648__$2 = (cljs.core.truth_(route)?cljs.core.assoc_in(G__11648__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:focus",screen], true),semtag_web.rendering.dynamic_paths(route,screen)):G__11648__$1);
return G__11648__$2;
});
semtag_web.start.create_app = (function create_app(render_config){
var params = semtag_web.route.parse_params(window.location.hash);
var screen = (function (){var or__3943__auto__ = semtag_web.route.url__GT_screen.cljs$core$IFn$_invoke$arity$2(window.location.hash,params);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(semtag_web.behavior.app,cljs.core.PersistentVector.fromArray(["\uFDD0:focus","\uFDD0:default"], true));
}
})();
var dynamic_route = semtag_web.route.find_dynamic_route(window.location.hash);
var app = io.pedestal.app.build(semtag_web.start.update_behavior(semtag_web.behavior.app,dynamic_route,screen));
var render_fn = io.pedestal.app.render.push.renderer.cljs$core$IFn$_invoke$arity$3("content",render_config,io.pedestal.app.render.log_fn);
var app_model = io.pedestal.app.render.consume_app_model(app,render_fn);
io.pedestal.app.begin.cljs$core$IFn$_invoke$arity$1(app);
semtag_web.start.put_message_on_page_load(app,screen,params);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:app",app,"\uFDD0:app-model",app_model], true);
});
semtag_web.start.setup_effects = (function setup_effects(app,services_fn){
return io.pedestal.app.consume_effects((new cljs.core.Keyword("\uFDD0:app")).call(null,app),services_fn);
});
semtag_web.start.param = (function param(name){
var uri = (new goog.Uri(document.location.toString()));
return uri.getParameterValue(name);
});
semtag_web.start.main = (function main(){
var G__11650 = semtag_web.start.create_app(semtag_web.rendering.render_config());
semtag_web.start.setup_effects(G__11650,semtag_web.services.services_fn);
return G__11650;
});
goog.exportSymbol('semtag_web.start.main', semtag_web.start.main);
