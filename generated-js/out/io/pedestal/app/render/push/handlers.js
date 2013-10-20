goog.provide('io.pedestal.app.render.push.handlers');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('io.pedestal.app.render.events');
goog.require('io.pedestal.app.render.push');
goog.require('io.pedestal.app.util.log');
io.pedestal.app.render.push.handlers.add_send_on = (function add_send_on(event_type,dom_content){
return (function (renderer,p__156791,input_queue){
var vec__156792 = p__156791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156792,0,null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156792,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156792,2,null);
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156792,3,null);
return io.pedestal.app.render.events.send_on.cljs$core$IFn$_invoke$arity$5(event_type,dom_content,input_queue,transform_name,messages);
});
});
io.pedestal.app.render.push.handlers.add_send_on_click = (function add_send_on_click(dom_content){
return io.pedestal.app.render.push.handlers.add_send_on("\uFDD0:click",dom_content);
});
io.pedestal.app.render.push.handlers.remove_send_on = (function remove_send_on(event_type,dom_content){
return (function (renderer,p__156795,input_queue){
var vec__156796 = p__156795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156796,0,null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156796,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156796,2,null);
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156796,3,null);
return io.pedestal.app.render.events.remove_event(event_type,dom_content);
});
});
io.pedestal.app.render.push.handlers.remove_send_on_click = (function remove_send_on_click(dom_content){
return io.pedestal.app.render.push.handlers.remove_send_on("\uFDD0:click",dom_content);
});
io.pedestal.app.render.push.handlers.destroy_BANG_ = (function destroy_BANG_(r,path){
var temp__4090__auto__ = io.pedestal.app.render.push.get_id(r,path);
if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;
io.pedestal.app.render.push.delete_id_BANG_(r,path);
return domina.destroy_BANG_(domina.by_id(id));
} else
{return io.pedestal.app.util.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:in","\uFDD0:default-exit","\uFDD0:msg",[cljs.core.str("warning! no id "),cljs.core.str(io.pedestal.app.render.push.handlers.id),cljs.core.str(" found for path "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')], 0));
}
});
io.pedestal.app.render.push.handlers.default_destroy = (function default_destroy(r,p__156797,_){
var vec__156799 = p__156797;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156799,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156799,1,null);
return io.pedestal.app.render.push.handlers.destroy_BANG_(r,path);
});
