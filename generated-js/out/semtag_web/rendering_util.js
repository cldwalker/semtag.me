goog.provide('semtag_web.rendering_util');
goog.require('cljs.core');
goog.require('io.pedestal.app.render.push.handlers');
goog.require('io.pedestal.app.render.events');
semtag_web.rendering_util.click_with_inputs = (function click_with_inputs(click_dom_id,input_map){
return (function (_,p__11545,input_queue){
var vec__11546 = p__11545;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11546,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11546,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11546,2,null);
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11546,3,null);
return io.pedestal.app.render.events.collect_and_send("\uFDD0:click",click_dom_id,input_queue,transform_name,messages,input_map);
});
});
semtag_web.rendering_util.click_with_fn = (function click_with_fn(dom_id,f){
return (function (_,p__11549,input_queue){
var vec__11550 = p__11549;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11550,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11550,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11550,2,null);
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11550,3,null);
return io.pedestal.app.render.events.send_on.cljs$core$IFn$_invoke$arity$4("\uFDD0:click",dom_id,input_queue,(function (e){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:transform",transform_name,"\uFDD0:messages",messages,"\uFDD0:input-queue",input_queue,"\uFDD0:event",e.evt], true)) : f.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:transform",transform_name,"\uFDD0:messages",messages,"\uFDD0:input-queue",input_queue,"\uFDD0:event",e.evt], true)));
}));
});
});
/**
* @param {...*} var_args
*/
semtag_web.rendering_util.click = (function() { 
var click__delegate = function (path,dom_id,p__11551){
var map__11553 = p__11551;
var map__11553__$1 = ((cljs.core.seq_QMARK_(map__11553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11553):map__11553);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11553__$1,"\uFDD0:fn");
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11553__$1,"\uFDD0:inputs");
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",path,(cljs.core.truth_(fn)?semtag_web.rendering_util.click_with_fn(dom_id,fn):(cljs.core.truth_(inputs)?semtag_web.rendering_util.click_with_inputs(dom_id,inputs):io.pedestal.app.render.push.handlers.add_send_on_click(dom_id)))], true),cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",path,io.pedestal.app.render.push.handlers.remove_send_on_click(dom_id)], true)], true);
};
var click = function (path,dom_id,var_args){
var p__11551 = null;
if (arguments.length > 2) {
  p__11551 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return click__delegate.call(this, path, dom_id, p__11551);
};
click.cljs$lang$maxFixedArity = 2;
click.cljs$lang$applyTo = (function (arglist__11554){
var path = cljs.core.first(arglist__11554);
arglist__11554 = cljs.core.next(arglist__11554);
var dom_id = cljs.core.first(arglist__11554);
var p__11551 = cljs.core.rest(arglist__11554);
return click__delegate(path, dom_id, p__11551);
});
click.cljs$core$IFn$_invoke$arity$variadic = click__delegate;
return click;
})()
;
