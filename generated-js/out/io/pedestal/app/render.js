goog.provide('io.pedestal.app.render');
goog.require('cljs.core');
goog.require('io.pedestal.app.tree');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.protocols');
io.pedestal.app.render.consume_app_model_queue = (function consume_app_model_queue(queue,in_queue,app_model,render_fn){
return io.pedestal.app.protocols.take_message.call(null,queue,(function (message){
var old_app_model = cljs.core.deref.call(null,app_model);
var new_app_model = cljs.core.swap_BANG_.call(null,app_model,io.pedestal.app.tree.apply_deltas,(new cljs.core.Keyword("\uFDD0:deltas")).call(null,message));
var deltas = io.pedestal.app.tree.since_t.call(null,new_app_model,io.pedestal.app.tree.t.call(null,old_app_model));
render_fn.call(null,deltas,in_queue);
return consume_app_model_queue.call(null,queue,in_queue,app_model,render_fn);
}));
});
io.pedestal.app.render.consume_app_model = (function consume_app_model(app,render_fn){
var app_model = cljs.core.atom.call(null,io.pedestal.app.tree.new_app_model);
io.pedestal.app.render.consume_app_model_queue.call(null,(new cljs.core.Keyword("\uFDD0:app-model")).call(null,app),(new cljs.core.Keyword("\uFDD0:input")).call(null,app),app_model,render_fn);
return app_model;
});
io.pedestal.app.render.log_fn = (function log_fn(deltas){
return io.pedestal.app.util.platform.log_group.call(null,"Rendering Deltas",deltas);
});
