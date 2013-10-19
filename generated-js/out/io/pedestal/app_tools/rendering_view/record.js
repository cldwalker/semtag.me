goog.provide('io.pedestal.app_tools.rendering_view.record');
goog.require('cljs.core');
goog.require('io.pedestal.app.protocols');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('domina');
goog.require('goog.events.KeyHandler');
goog.require('io.pedestal.app.util.observers');
goog.require('io.pedestal.app.render.push.handlers.automatic');
goog.require('goog.events.KeyCodes');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.net.xhr');
goog.require('io.pedestal.app.tree');
io.pedestal.app_tools.rendering_view.record.recording_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:recording?",false,"\uFDD0:ui",null], true));
io.pedestal.app_tools.rendering_view.record.app_model_to_deltas = (function app_model_to_deltas(current_app_model){
var empty_tree = io.pedestal.app.tree.new_app_model;
var t0 = io.pedestal.app.tree.t(empty_tree);
var new_tree = io.pedestal.app.tree.apply_deltas(empty_tree,cljs.core.PersistentVector.fromArray([current_app_model], true));
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([current_app_model], 0)));
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([io.pedestal.app.tree.expand_map(current_app_model)], 0)));
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t0], 0)));
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_tree], 0)));
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vec(io.pedestal.app.tree.since_t(new_tree,t0))], 0)));
return cljs.core.vec(io.pedestal.app.tree.since_t(new_tree,t0));
});
io.pedestal.app_tools.rendering_view.record.maybe_init_recording = (function maybe_init_recording(state){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:recording?")).call(null,state)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,"\uFDD0:t",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.fromArray(["\uFDD0:ui","\uFDD0:t"], true))),"\uFDD0:recorded-deltas",io.pedestal.app_tools.rendering_view.record.app_model_to_deltas(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.fromArray(["\uFDD0:ui","\uFDD0:tree"], true))));
} else
{return state;
}
});
io.pedestal.app_tools.rendering_view.record.update_when_recording = (function update_when_recording(state){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:recording?")).call(null,state)))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.PersistentVector.fromArray(["\uFDD0:recorded-deltas"], true),cljs.core.conj,"\uFDD0:break"),cljs.core.PersistentVector.fromArray(["\uFDD0:recorded-deltas"], true),cljs.core.into,io.pedestal.app.tree.since_t((new cljs.core.Keyword("\uFDD0:ui")).call(null,state),(new cljs.core.Keyword("\uFDD0:t")).call(null,state))),"\uFDD0:t",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.fromArray(["\uFDD0:ui","\uFDD0:t"], true)));
} else
{return state;
}
});
io.pedestal.app_tools.rendering_view.record.toggle_recording_STAR_ = (function toggle_recording_STAR_(state){
return io.pedestal.app_tools.rendering_view.record.maybe_init_recording(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentVector.fromArray(["\uFDD0:recording?"], true),cljs.core.not));
});
io.pedestal.app_tools.rendering_view.record.update_ui = (function update_ui(state,new_app_model){
return io.pedestal.app_tools.rendering_view.record.update_when_recording(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,"\uFDD0:ui",new_app_model));
});
io.pedestal.app_tools.rendering_view.record.save_recording = (function save_recording(recording){
var recording_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recording,cljs.core.PersistentVector.fromArray(["\uFDD0:config","\uFDD0:name"], true));
return io.pedestal.app.net.xhr.request.cljs$core$IFn$_invoke$arity$variadic(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),[cljs.core.str("/_tools/render/recordings/"),cljs.core.str(cljs.core.name(recording_name))].join(''),cljs.core.array_seq(["\uFDD0:headers",cljs.core.PersistentArrayMap.fromArray(["Content-Type","application/edn"], true),"\uFDD0:request-method","POST","\uFDD0:body",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([recording], 0)),"\uFDD0:on-success",cljs.core.constantly(null),"\uFDD0:on-error",cljs.core.constantly(null)], 0));
});
io.pedestal.app.render.push.handlers.automatic.modal_title.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.render.push.handlers.automatic.modal_title,"\uFDD0:io.pedestal.app-tools.rendering-view.record/recording-info",(function (transform_name,messages){
return "Configure Recording";
}));
io.pedestal.app_tools.rendering_view.record.valid_position_QMARK_ = (function valid_position_QMARK_(x){
var p = parseInt(x,10);
var and__3941__auto__ = typeof p === 'number';
if(and__3941__auto__)
{return !((p < 0));
} else
{return and__3941__auto__;
}
});
io.pedestal.app_tools.rendering_view.record.non_empty_string_QMARK_ = (function non_empty_string_QMARK_(x){
return !(cljs.core.empty_QMARK_(x));
});
io.pedestal.app_tools.rendering_view.record.keyword_string_QMARK_ = (function keyword_string_QMARK_(x){
return cljs.core.keyword_QMARK_((function (){try{return cljs.reader.read_string(x);
}catch (e13944){if((e13944 instanceof Error))
{var _ = e13944;
return null;
} else
{if("\uFDD0:else")
{throw e13944;
} else
{return null;
}
}
}})());
});
io.pedestal.app.render.push.handlers.automatic.modal_field.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.render.push.handlers.automatic.modal_field,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app-tools.rendering-view.record/recording-info","description"], true),(function (_,___$1){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:field-name","Description:","\uFDD0:placeholder","Enter description","\uFDD0:input-class","input-xlarge","\uFDD0:validation-fn",io.pedestal.app_tools.rendering_view.record.non_empty_string_QMARK_,"\uFDD0:inline-help-error","Description is required"], true);
}));
io.pedestal.app.render.push.handlers.automatic.modal_field.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.render.push.handlers.automatic.modal_field,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app-tools.rendering-view.record/recording-info","name"], true),(function (_,___$1){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:field-name","Name Keyword:","\uFDD0:placeholder","Enter name (keyword)","\uFDD0:input-class","input-xlarge","\uFDD0:validation-fn",io.pedestal.app_tools.rendering_view.record.keyword_string_QMARK_,"\uFDD0:inline-help-error","Name must be a keyword"], true);
}));
io.pedestal.app.render.push.handlers.automatic.modal_field.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.render.push.handlers.automatic.modal_field,cljs.core.PersistentVector.fromArray(["\uFDD0:io.pedestal.app-tools.rendering-view.record/recording-info","order"], true),(function (_,___$1){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:field-name","Position:","\uFDD0:placeholder","position in list","\uFDD0:input-class","input-mini","\uFDD0:default",0,"\uFDD0:validation-fn",io.pedestal.app_tools.rendering_view.record.valid_position_QMARK_,"\uFDD0:inline-help","","\uFDD0:inline-help-error","Position must be a number >= 0"], true);
}));
io.pedestal.app_tools.rendering_view.record.make_and_save_recording = (function make_and_save_recording(message){
var map__13946 = message;
var map__13946__$1 = ((cljs.core.seq_QMARK_(map__13946))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13946):map__13946);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,"\uFDD0:order");
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,"\uFDD0:description");
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,"\uFDD0:name");
return io.pedestal.app_tools.rendering_view.record.save_recording(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:config",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:order",parseInt(order),"\uFDD0:description",description,"\uFDD0:name",cljs.reader.read_string(name)], true),"\uFDD0:data",(new cljs.core.Keyword("\uFDD0:recorded-deltas")).call(null,cljs.core.deref(io.pedestal.app_tools.rendering_view.record.recording_state))], true));
});
io.pedestal.app_tools.rendering_view.record.recording_QMARK_ = (function recording_QMARK_(){
return (new cljs.core.Keyword("\uFDD0:recording?")).call(null,cljs.core.deref(io.pedestal.app_tools.rendering_view.record.recording_state));
});
io.pedestal.app_tools.rendering_view.record.display_recording_state = (function display_recording_state(){
var node = domina.by_id("pedestal-status-panel");
if(cljs.core.truth_(io.pedestal.app_tools.rendering_view.record.recording_QMARK_()))
{domina.set_html_BANG_(node,[cljs.core.str("<div>Recording...</div>"),cljs.core.str("<div class='pedestal-recording-status-message'>"),cljs.core.str("Use [ESC] to cancel or Alt-Shift-R to stop"),cljs.core.str("</div>")].join(''));
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(node,"\uFDD0:opacity",cljs.core.array_seq([0.8], 0));
return domina.add_class_BANG_(node,"pedestal-recording-status");
} else
{domina.set_html_BANG_(node,"");
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(node,"\uFDD0:opacity",cljs.core.array_seq([0], 0));
return domina.remove_class_BANG_(node,"pedestal-recording-status");
}
});
io.pedestal.app_tools.rendering_view.record.toggle_recording_internal = (function toggle_recording_internal(){
var r_QMARK_ = (new cljs.core.Keyword("\uFDD0:recording?")).call(null,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(io.pedestal.app_tools.rendering_view.record.recording_state,io.pedestal.app_tools.rendering_view.record.toggle_recording_STAR_));
io.pedestal.app_tools.rendering_view.record.display_recording_state();
return r_QMARK_;
});
io.pedestal.app_tools.rendering_view.record.toggle_recording = (function toggle_recording(){
var recording_QMARK_ = io.pedestal.app_tools.rendering_view.record.toggle_recording_internal();
if(cljs.core.not(recording_QMARK_))
{return io.pedestal.app.render.push.handlers.automatic.generic_modal_collect_input("content",cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (){if((void 0 === io.pedestal.app_tools.rendering_view.record.t13950))
{goog.provide('io.pedestal.app_tools.rendering_view.record.t13950');

/**
* @constructor
*/
io.pedestal.app_tools.rendering_view.record.t13950 = (function (recording_QMARK_,toggle_recording,meta13951){
this.recording_QMARK_ = recording_QMARK_;
this.toggle_recording = toggle_recording;
this.meta13951 = meta13951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
io.pedestal.app_tools.rendering_view.record.t13950.cljs$lang$type = true;
io.pedestal.app_tools.rendering_view.record.t13950.cljs$lang$ctorStr = "io.pedestal.app-tools.rendering-view.record/t13950";
io.pedestal.app_tools.rendering_view.record.t13950.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"io.pedestal.app-tools.rendering-view.record/t13950");
});
io.pedestal.app_tools.rendering_view.record.t13950.prototype.io$pedestal$app$protocols$PutMessage$ = true;
io.pedestal.app_tools.rendering_view.record.t13950.prototype.io$pedestal$app$protocols$PutMessage$put_message$arity$2 = (function (_,message){
var self__ = this;
return io.pedestal.app_tools.rendering_view.record.make_and_save_recording(message);
});
io.pedestal.app_tools.rendering_view.record.t13950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13952){
var self__ = this;
return self__.meta13951;
});
io.pedestal.app_tools.rendering_view.record.t13950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13952,meta13951__$1){
var self__ = this;
return (new io.pedestal.app_tools.rendering_view.record.t13950(self__.recording_QMARK_,self__.toggle_recording,meta13951__$1));
});
io.pedestal.app_tools.rendering_view.record.__GT_t13950 = (function __GT_t13950(recording_QMARK___$1,toggle_recording__$1,meta13951){
return (new io.pedestal.app_tools.rendering_view.record.t13950(recording_QMARK___$1,toggle_recording__$1,meta13951));
});
} else
{}
return (new io.pedestal.app_tools.rendering_view.record.t13950(recording_QMARK_,toggle_recording,null));
})(),"\uFDD0:io.pedestal.app-tools.rendering-view.record/recording-info",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.param("\uFDD0:name"),cljs.core.PersistentArrayMap.EMPTY,io.pedestal.app.messages.param("\uFDD0:description"),cljs.core.PersistentArrayMap.EMPTY,io.pedestal.app.messages.param("\uFDD0:order"),cljs.core.PersistentArrayMap.EMPTY], true)], true));
} else
{return null;
}
});
io.pedestal.app_tools.rendering_view.record.docKh = (new goog.events.KeyHandler(document));
io.pedestal.app_tools.rendering_view.record.key_handler = (function key_handler(e){
var keys = cljs.core.PersistentVector.fromArray([e.keyCode,e.shiftKey,e.altKey], true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keys,cljs.core.PersistentVector.fromArray([goog.events.KeyCodes.R,true,true], true)))
{io.pedestal.app_tools.rendering_view.record.toggle_recording();
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = io.pedestal.app_tools.rendering_view.record.recording_QMARK_();
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,goog.events.KeyCodes.ESC);
} else
{return and__3941__auto__;
}
})()))
{return io.pedestal.app_tools.rendering_view.record.toggle_recording_internal();
} else
{return null;
}
});
io.pedestal.app_tools.rendering_view.record.init_recording = (function init_recording(app_model){
goog.events.listen(io.pedestal.app_tools.rendering_view.record.docKh,"key",io.pedestal.app_tools.rendering_view.record.key_handler);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(io.pedestal.app_tools.rendering_view.record.recording_state,io.pedestal.app_tools.rendering_view.record.update_ui,cljs.core.deref(app_model));
return cljs.core.add_watch(app_model,"\uFDD0:recording",(function (_,___$1,___$2,n){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(io.pedestal.app_tools.rendering_view.record.recording_state,io.pedestal.app_tools.rendering_view.record.update_ui,n);
}));
});
