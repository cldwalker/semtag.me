goog.provide('semtag_web.rendering_util');
goog.require('cljs.core');
goog.require('io.pedestal.app.render.push.handlers');
goog.require('io.pedestal.app.render.events');
semtag_web.rendering_util.click_with_inputs = (function click_with_inputs(click_dom_id,input_map){
return (function (_,p__11529,input_queue){
var vec__11530 = p__11529;
var ___$1 = cljs.core.nth.call(null,vec__11530,0,null);
var path = cljs.core.nth.call(null,vec__11530,1,null);
var transform_name = cljs.core.nth.call(null,vec__11530,2,null);
var messages = cljs.core.nth.call(null,vec__11530,3,null);
return io.pedestal.app.render.events.collect_and_send.call(null,"\uFDD0:click",click_dom_id,input_queue,transform_name,messages,input_map);
});
});
semtag_web.rendering_util.click_with_fn = (function click_with_fn(dom_id,f){
return (function (_,p__11533,input_queue){
var vec__11534 = p__11533;
var ___$1 = cljs.core.nth.call(null,vec__11534,0,null);
var path = cljs.core.nth.call(null,vec__11534,1,null);
var transform_name = cljs.core.nth.call(null,vec__11534,2,null);
var messages = cljs.core.nth.call(null,vec__11534,3,null);
return io.pedestal.app.render.events.send_on.call(null,"\uFDD0:click",dom_id,input_queue,(function (e){
return f.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:transform",transform_name,"\uFDD0:messages",messages,"\uFDD0:input-queue",input_queue,"\uFDD0:event",e.evt], true));
}));
});
});
/**
* @param {...*} var_args
*/
semtag_web.rendering_util.click = (function() { 
var click__delegate = function (path,dom_id,p__11535){
var map__11537 = p__11535;
var map__11537__$1 = ((cljs.core.seq_QMARK_.call(null,map__11537))?cljs.core.apply.call(null,cljs.core.hash_map,map__11537):map__11537);
var fn = cljs.core.get.call(null,map__11537__$1,"\uFDD0:fn");
var inputs = cljs.core.get.call(null,map__11537__$1,"\uFDD0:inputs");
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",path,(cljs.core.truth_(fn)?semtag_web.rendering_util.click_with_fn.call(null,dom_id,fn):(cljs.core.truth_(inputs)?semtag_web.rendering_util.click_with_inputs.call(null,dom_id,inputs):io.pedestal.app.render.push.handlers.add_send_on_click.call(null,dom_id)))], true),cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",path,io.pedestal.app.render.push.handlers.remove_send_on_click.call(null,dom_id)], true)], true);
};
var click = function (path,dom_id,var_args){
var p__11535 = null;
if (arguments.length > 2) {
  p__11535 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return click__delegate.call(this, path, dom_id, p__11535);
};
click.cljs$lang$maxFixedArity = 2;
click.cljs$lang$applyTo = (function (arglist__11538){
var path = cljs.core.first(arglist__11538);
arglist__11538 = cljs.core.next(arglist__11538);
var dom_id = cljs.core.first(arglist__11538);
var p__11535 = cljs.core.rest(arglist__11538);
return click__delegate(path, dom_id, p__11535);
});
click.cljs$core$IFn$_invoke$arity$variadic = click__delegate;
return click;
})()
;
