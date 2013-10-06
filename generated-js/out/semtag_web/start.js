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
if(cljs.core.truth_(cljs.core.re_find.call(null,/^search/,cljs.core.name.call(null,screen))))
{io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:map-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:page"], true),"\uFDD0:value","\uFDD0:search-form"], true));
return io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:map-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:search"], true)], true),params));
} else
{return io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:map-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:page"], true),"\uFDD0:value",cljs.core.name.call(null,screen),"\uFDD0:params",params], true));
}
});
semtag_web.start.parse_params = (function parse_params(url){
var temp__4092__auto__ = cljs.core.re_find.call(null,/(?!.*\?).*/,url);
if(cljs.core.truth_(temp__4092__auto__))
{var params_string = temp__4092__auto__;
var vals = cljs.core.vec.call(null,cljs.core.flatten.call(null,(function (){var pairs = clojure.string.split.call(null,params_string,/\&/);
var pairs__$1 = cljs.core.map.call(null,((function (pairs){
return (function (p1__11615_SHARP_){
var vec__11617 = clojure.string.split.call(null,p1__11615_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__11617,0,null);
var v = cljs.core.nth.call(null,vec__11617,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k),v], true);
});})(pairs))
,pairs);
return pairs__$1;
})()));
var vals__$1 = cljs.core.apply.call(null,cljs.core.hash_map,vals);
return vals__$1;
} else
{return null;
}
});
/**
* Updates behavior with possible dynamic focus
*/
semtag_web.start.update_behavior = (function update_behavior(behavior,screen){
var G__11619 = behavior;
var G__11619__$1 = ((true)?cljs.core.assoc_in.call(null,G__11619,cljs.core.PersistentVector.fromArray(["\uFDD0:focus","\uFDD0:default"], true),screen):G__11619);
var G__11619__$2 = (cljs.core.truth_(cljs.core.re_find.call(null,/^search/,cljs.core.name.call(null,screen)))?cljs.core.assoc_in.call(null,G__11619__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:focus",screen], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search",screen], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true)):G__11619__$1);
var G__11619__$3 = (cljs.core.truth_(cljs.core.re_find.call(null,/^thing/,cljs.core.name.call(null,screen)))?cljs.core.assoc_in.call(null,G__11619__$2,cljs.core.PersistentVector.fromArray(["\uFDD0:focus",screen], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing",screen], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true)):G__11619__$2);
return G__11619__$3;
});
semtag_web.start.create_app = (function create_app(render_config){
var params = semtag_web.start.parse_params.call(null,window.location.hash);
var screen = (function (){var or__3943__auto__ = semtag_web.route.url__GT_screen.call(null,window.location.hash,params);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.get_in.call(null,semtag_web.behavior.app,cljs.core.PersistentVector.fromArray(["\uFDD0:focus","\uFDD0:default"], true));
}
})();
var app = io.pedestal.app.build.call(null,semtag_web.start.update_behavior.call(null,semtag_web.behavior.app,screen));
var render_fn = io.pedestal.app.render.push.renderer.call(null,"content",render_config,io.pedestal.app.render.log_fn);
var app_model = io.pedestal.app.render.consume_app_model.call(null,app,render_fn);
io.pedestal.app.begin.call(null,app);
semtag_web.start.put_message_on_page_load.call(null,app,screen,params);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:app",app,"\uFDD0:app-model",app_model], true);
});
semtag_web.start.setup_effects = (function setup_effects(app,services_fn){
return io.pedestal.app.consume_effects.call(null,(new cljs.core.Keyword("\uFDD0:app")).call(null,app),services_fn);
});
semtag_web.start.param = (function param(name){
var uri = (new goog.Uri(document.location.toString()));
return uri.getParameterValue(name);
});
semtag_web.start.main = (function main(){
var G__11621 = semtag_web.start.create_app.call(null,semtag_web.rendering.render_config.call(null));
semtag_web.start.setup_effects.call(null,G__11621,semtag_web.services.services_fn);
return G__11621;
});
goog.exportSymbol('semtag_web.start.main', semtag_web.start.main);
