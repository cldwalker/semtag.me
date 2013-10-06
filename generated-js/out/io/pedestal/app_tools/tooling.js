goog.provide('io.pedestal.app_tools.tooling');
goog.require('cljs.core');
goog.require('io.pedestal.app.net.repl_client');
goog.require('io.pedestal.app.util.console_log');
goog.require('io.pedestal.app.util.observers');
goog.require('io.pedestal.app_tools.rendering_view.record');
goog.require('io.pedestal.app_tools.rendering_view.client');
io.pedestal.app_tools.tooling.add_recording = (function add_recording(app){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:app-model")).call(null,app)))
{io.pedestal.app_tools.rendering_view.record.init_recording((new cljs.core.Keyword("\uFDD0:app-model")).call(null,app));
} else
{}
return app;
});
goog.exportSymbol('io.pedestal.app_tools.tooling.add_recording', io.pedestal.app_tools.tooling.add_recording);
io.pedestal.app_tools.tooling.add_logging = (function add_logging(app){
if(cljs.core.truth_(app))
{io.pedestal.app.util.observers.subscribe("\uFDD0:log",io.pedestal.app.util.console_log.log_map);
} else
{}
return app;
});
goog.exportSymbol('io.pedestal.app_tools.tooling.add_logging', io.pedestal.app_tools.tooling.add_logging);
