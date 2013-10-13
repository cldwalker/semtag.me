goog.provide('semtag_web.simulated.start');
goog.require('cljs.core');
goog.require('io.pedestal.app_tools.tooling');
goog.require('semtag_web.rendering');
goog.require('semtag_web.simulated.services');
goog.require('semtag_web.start');
goog.require('io.pedestal.app.render.push.handlers.automatic');
semtag_web.simulated.start.main = (function main(){
var render_config = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("auto",semtag_web.start.param("renderer")))?io.pedestal.app.render.push.handlers.automatic.data_renderer_config:semtag_web.rendering.render_config());
var G__11646 = semtag_web.start.create_app(render_config);
semtag_web.start.setup_effects(G__11646,semtag_web.simulated.services.services_fn);
return G__11646;
});
goog.exportSymbol('semtag_web.simulated.start.main', semtag_web.simulated.start.main);
