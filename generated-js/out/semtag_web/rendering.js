goog.provide('semtag_web.rendering');
goog.require('cljs.core');
goog.require('semtag_web.route');
goog.require('semtag_web.partials');
goog.require('io.pedestal.app.render.events');
goog.require('semtag_web.spinner');
goog.require('io.pedestal.app.render.push');
goog.require('semtag_web.history');
goog.require('domina');
goog.require('clojure.string');
goog.require('io.pedestal.app.protocols');
goog.require('io.pedestal.app.render.push.handlers.automatic');
goog.require('io.pedestal.app.messages');
goog.require('domina.css');
goog.require('semtag_web.rendering_util');
goog.require('io.pedestal.app.render.push.templates');
semtag_web.rendering.frequencies_string = (function frequencies_string(items){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11495_SHARP_){
return cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s %s",cljs.core.array_seq([cljs.core.second(p1__11495_SHARP_),cljs.core.name(cljs.core.first(p1__11495_SHARP_))], 0));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__11494_SHARP_){
return cljs.core.second(p1__11494_SHARP_);
}),(function (a,b){
return (a > b);
}),cljs.core.frequencies(items))));
});
semtag_web.rendering.frequency_stat = (function frequency_stat(title,data){
return cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s: %s - %s",cljs.core.array_seq([title,cljs.core.count(data),semtag_web.rendering.frequencies_string(data)], 0));
});
/**
* Adds an alert box at the top of the page
*/
semtag_web.rendering.render_alert = (function render_alert(msg,alert_type){
return domina.prepend_BANG_(domina.by_id("content"),semtag_web.partials.alert(msg,[cljs.core.str("alert-"),cljs.core.str(cljs.core.name(alert_type))].join('')));
});
semtag_web.rendering.clear_id = (function clear_id(id){
return (function (_,___$1,___$2){
return domina.set_html_BANG_(domina.by_id(id),"");
});
});
semtag_web.rendering.navigate_fn = (function navigate_fn(screen){
return (function (_,___$1,input_queue){
return semtag_web.history.navigated(input_queue,screen);
});
});
/**
* Navigate paths whose last element is the navigated id
*/
semtag_web.rendering.navigate_path = (function navigate_path(_,p__11496,input_queue){
var vec__11498 = p__11496;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11498,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11498,1,null);
return semtag_web.history.navigated(input_queue,cljs.core.last(path));
});
/**
* @param {...*} var_args
*/
semtag_web.rendering.dynamic_focus_messages = (function() { 
var dynamic_focus_messages__delegate = function (p__11499){
var map__11501 = p__11499;
var map__11501__$1 = ((cljs.core.seq_QMARK_(map__11501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11501):map__11501);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11501__$1,"\uFDD0:paths");
var screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11501__$1,"\uFDD0:screen");
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11501__$1,"\uFDD0:params");
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:add-named-paths",io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,"\uFDD0:name",screen,"\uFDD0:paths",paths], true),cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:set-focus",io.pedestal.app.messages.topic,io.pedestal.app.messages.app_model,"\uFDD0:name",screen], true),cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:map-value",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:page"], true),"\uFDD0:value",cljs.core.name(screen),"\uFDD0:params",params], true)], true);
};
var dynamic_focus_messages = function (var_args){
var p__11499 = null;
if (arguments.length > 0) {
  p__11499 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return dynamic_focus_messages__delegate.call(this, p__11499);
};
dynamic_focus_messages.cljs$lang$maxFixedArity = 0;
dynamic_focus_messages.cljs$lang$applyTo = (function (arglist__11502){
var p__11499 = cljs.core.seq(arglist__11502);
return dynamic_focus_messages__delegate(p__11499);
});
dynamic_focus_messages.cljs$core$IFn$_invoke$arity$variadic = dynamic_focus_messages__delegate;
return dynamic_focus_messages;
})()
;
semtag_web.rendering.dynamic_paths = (function dynamic_paths(route,screen){
var G__11504 = route;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:type",G__11504))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:type",screen], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:search",G__11504))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search",screen], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:thing",G__11504))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing",screen], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true);
} else
{if("\uFDD0:else")
{return cljs.core.PersistentVector.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Given an event creates messages to focus a new dynamic screen
*/
semtag_web.rendering.dynamic_href_sets_focus = (function dynamic_href_sets_focus(p__11505){
var map__11507 = p__11505;
var map__11507__$1 = ((cljs.core.seq_QMARK_(map__11507))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11507):map__11507);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11507__$1,"\uFDD0:event");
var rel_uri = cljs.core.re_find(/#.*?$/,event.currentTarget.href);
var temp__4090__auto__ = semtag_web.route.find_dynamic_route(rel_uri);
if(cljs.core.truth_(temp__4090__auto__))
{var route = temp__4090__auto__;
var params = semtag_web.route.parse_params(rel_uri);
var screen = semtag_web.route.url__GT_screen.cljs$core$IFn$_invoke$arity$2(rel_uri,params);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(semtag_web.route.dynamic_screens,cljs.core.assoc,screen,params);
return semtag_web.rendering.dynamic_focus_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:screen",screen,"\uFDD0:params",params,"\uFDD0:paths",semtag_web.rendering.dynamic_paths(route,screen)], 0));
} else
{return console.log("No screen found for element",event.currentTarget);
}
});
semtag_web.rendering.enable_clickable_links_on = (function enable_clickable_links_on(parent_selector,input_queue){
return io.pedestal.app.render.events.send_on.cljs$core$IFn$_invoke$arity$4("\uFDD0:click",domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str(parent_selector),cljs.core.str(" a")].join('')),input_queue,(function (p1__11508_SHARP_){
return semtag_web.rendering.dynamic_href_sets_focus(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:event",p1__11508_SHARP_.evt], true));
}));
});
semtag_web.rendering.href_sets_focus = (function href_sets_focus(p__11509){
var map__11511 = p__11509;
var map__11511__$1 = ((cljs.core.seq_QMARK_(map__11511))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11511):map__11511);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11511__$1,"\uFDD0:event");
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11511__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11511__$1,"\uFDD0:transform");
var temp__4090__auto__ = semtag_web.route.url__GT_screen.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/#.*?$/,event.currentTarget.href));
if(cljs.core.truth_(temp__4090__auto__))
{var screen = temp__4090__auto__;
return io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",cljs.core.name(screen),"\uFDD0:name",screen], true));
} else
{return console.log("No screen found for element",event.currentTarget);
}
});
semtag_web.rendering.templates = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:semtag-web-page",(function templates(){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.EMPTY,(function (G__11512){
return (function (G__11513){
return [cljs.core.str("<div id=\"main\"><div id=\"search_box\" class=\"top_box hero-unit\"><form onsubmit=\"return false;\" class=\"form-search\"><label class=\"radio\"><input value=\"tagged\" type=\"radio\" name=\"search_type\" checked=\"checked\" />Tagged with\n          </label><label class=\"radio\"><input value=\"tagged-with-type\" type=\"radio\" name=\"search_type\" />Tagged with type\n            </label><label class=\"radio\"><input value=\"regex\" type=\"radio\" name=\"search_type\" />Containing regex\n            </label><input type=\"text\" list=\"tags\" id=\"url_search_text\" class=\"search-query\" autofocus=\"autofocus\" autocomplete=\"on\" /><button id=\"url_search_button\" class=\"btn-primary\">Search</button></form><button id=\"add_url_button\" class=\"btn-large btn-success\">Add Url</button><textarea id=\"add_url_text\"></textarea><h2 id=\"search_title\"></h2><div id=\"table_stats\"></div><div id=\"search_table\"></div></div></div>")].join('');
}).call(null,G__11512);
})], true);
})], true);
semtag_web.rendering.render_search_form = (function render_search_form(renderer,p__11514,input_queue){
var vec__11516 = p__11514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11516,1,null);
var html = io.pedestal.app.render.push.templates.add_template(renderer,path,(new cljs.core.Keyword("\uFDD0:semtag-web-page")).call(null,semtag_web.rendering.templates));
return domina.set_html_BANG_(domina.by_id("content"),(html.cljs$core$IFn$_invoke$arity$1 ? html.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : html.call(null,cljs.core.PersistentArrayMap.EMPTY)));
});
semtag_web.rendering.render_tags_results = (function render_tags_results(_,p__11517,___$1){
var vec__11519 = p__11517;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,3,null);
return domina.insert_after_BANG_(domina.by_id("url_search_text"),semtag_web.partials.generate_datalist(new_value));
});
semtag_web.rendering.url_search = (function url_search(p__11520){
var map__11522 = p__11520;
var map__11522__$1 = ((cljs.core.seq_QMARK_(map__11522))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11522):map__11522);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11522__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11522__$1,"\uFDD0:transform");
var search_map = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:query",domina.by_id("url_search_text").value,"\uFDD0:search-type",domina.value(domina.css.sel.cljs$core$IFn$_invoke$arity$1("input[name=search_type]:checked"))], true);
var search_id = semtag_web.route.create_screen_id("\uFDD0:search",search_map);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(semtag_web.route.dynamic_screens,cljs.core.assoc,search_id,search_map);
return io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:name",search_id,"\uFDD0:params",search_map,"\uFDD0:paths",semtag_web.rendering.dynamic_paths("\uFDD0:search",search_id)], true));
});
semtag_web.rendering.create_url = (function create_url(p__11523){
var map__11525 = p__11523;
var map__11525__$1 = ((cljs.core.seq_QMARK_(map__11525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11525):map__11525);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11525__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11525__$1,"\uFDD0:transform");
return io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",domina.value(domina.by_id("add_url_text"))], true));
});
semtag_web.rendering.set_search_title = (function set_search_title(renderer,p__11526,_){
var vec__11528 = p__11526;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11528,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11528,1,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11528,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11528,3,null);
return domina.set_html_BANG_(domina.by_id("search_title"),new_value);
});
semtag_web.rendering.render_search_results = (function render_search_results(_,p__11529,input_queue){
var vec__11532 = p__11529;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11532,0,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11532,1,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11532,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11532,3,null);
var map__11533 = new_value;
var map__11533__$1 = ((cljs.core.seq_QMARK_(map__11533))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11533):map__11533);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11533__$1,"\uFDD0:tags");
var things = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11533__$1,"\uFDD0:things");
domina.swap_content_BANG_(domina.by_id("table_stats"),semtag_web.partials.table_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([semtag_web.rendering.frequency_stat("Tag Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tags)),semtag_web.rendering.frequency_stat("Tag Counts",cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:tags",things))),semtag_web.rendering.frequency_stat("Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:type",things))], 0)));
domina.swap_content_BANG_(domina.by_id("search_table"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("search_table",things,cljs.core.array_seq(["\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:desc","\uFDD0:tags"], true),"\uFDD0:row-partial",semtag_web.partials.tag_search_row,"\uFDD0:caption",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("Total: %s",cljs.core.array_seq([cljs.core.count(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:url",things))], 0))], 0)));
return semtag_web.rendering.enable_clickable_links_on("#search_table td:not([data-field=url])",input_queue);
});
semtag_web.rendering.clear_search = (function clear_search(_,___$1,___$2){
domina.set_html_BANG_(domina.by_id("table_stats"),"");
return domina.set_html_BANG_(domina.by_id("search_table"),"");
});
semtag_web.rendering.render_types_results = (function render_types_results(_,p__11534,input_queue){
var vec__11536 = p__11534;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11536,0,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11536,1,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11536,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11536,3,null);
domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("type_stats_table",(new cljs.core.Keyword("\uFDD0:results")).call(null,new_value),cljs.core.array_seq(["\uFDD0:caption",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s things, %s tags",cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:thing"], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:tags"], true))], 0)),"\uFDD0:row-partial",semtag_web.partials.type_stats_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:name","\uFDD0:count","\uFDD0:name-percent","\uFDD0:url-percent"], true)], 0)));
return semtag_web.rendering.enable_clickable_links_on("#type_stats_table",input_queue);
});
semtag_web.rendering.render_tag_stats_results = (function render_tag_stats_results(_,p__11537,input_queue){
var vec__11539 = p__11537;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,0,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,1,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,3,null);
domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("tag_stats_table",new_value,cljs.core.array_seq(["\uFDD0:row-partial",semtag_web.partials.tag_stats_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:tag","\uFDD0:count","\uFDD0:desc"], true)], 0)));
return semtag_web.rendering.enable_clickable_links_on("#tag_stats_table",input_queue);
});
semtag_web.rendering.render_all_results = (function render_all_results(_,p__11540,input_queue){
var vec__11542 = p__11540;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11542,0,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11542,1,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11542,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11542,3,null);
domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("all_table",new_value,cljs.core.array_seq(["\uFDD0:row-partial",semtag_web.partials.all_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:tags","\uFDD0:created-at"], true)], 0)));
return semtag_web.rendering.enable_clickable_links_on("#all_table td:not([data-field=url])",input_queue);
});
semtag_web.rendering.render_thing_results = (function render_thing_results(_,p__11543,input_queue){
var vec__11545 = p__11543;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11545,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11545,1,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11545,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11545,3,null);
var screen_11546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path,(cljs.core.count(path) - 2));
var thing_id_11547 = (new cljs.core.Keyword("\uFDD0:id")).call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(semtag_web.route.dynamic_screens),screen_11546));
domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("thing_show_table",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:attribute","\uFDD0:actions","\uFDD0:id",(new cljs.core.Keyword("\uFDD0:id")).call(null,cljs.core.first(new_value))], true)),cljs.core.array_seq(["\uFDD0:caption",(cljs.core.truth_(cljs.core.re_find(/\d+$/,thing_id_11547))?"":semtag_web.partials.link_tagged(thing_id_11547)),"\uFDD0:row-partial",semtag_web.partials.thing_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:attribute","\uFDD0:value"], true)], 0)));
semtag_web.rendering.enable_clickable_links_on("#thing_show_table td:not([data-field=url])",input_queue);
return semtag_web.rendering.enable_clickable_links_on("#thing_show_table caption",input_queue);
});
semtag_web.rendering.render_type_results = (function render_type_results(_,p__11548,input_queue){
var vec__11551 = p__11548;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11551,0,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11551,1,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11551,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11551,3,null);
var map__11552_11553 = new_value;
var map__11552_11554__$1 = ((cljs.core.seq_QMARK_(map__11552_11553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11552_11553):map__11552_11553);
var tags_11555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11552_11554__$1,"\uFDD0:tags");
var things_11556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11552_11554__$1,"\uFDD0:things");
domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("type_show_table",things_11556,cljs.core.array_seq(["\uFDD0:row-partial",semtag_web.partials.type_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(things_11556))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:name","\uFDD0:url","\uFDD0:desc","\uFDD0:tags","\uFDD0:created-at"], true)], 0)));
domina.insert_before_BANG_(domina.by_id("type_show_table"),semtag_web.partials.table_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([semtag_web.rendering.frequency_stat("Tag Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tags_11555)),semtag_web.rendering.frequency_stat("Tag Counts",cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:tags",things_11556)))], 0)));
return semtag_web.rendering.enable_clickable_links_on("#type_show_table td:not([data-field=url])",input_queue);
});
semtag_web.rendering.render_alert_error = (function render_alert_error(_,p__11557,___$1){
var vec__11559 = p__11557;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11559,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11559,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11559,2,null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11559,3,null);
return semtag_web.rendering.render_alert(msg,"\uFDD0:error");
});
semtag_web.rendering.render_modal_spinner = (function render_modal_spinner(_,p__11560,___$1){
var vec__11562 = p__11560;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11562,3,null);
return semtag_web.spinner.render(new_value);
});
semtag_web.rendering.render_config = (function render_config(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:home"], true),semtag_web.rendering.navigate_fn("\uFDD0:home")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),semtag_web.rendering.render_search_form], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:tags-results"], true),semtag_web.rendering.render_tags_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types"], true),semtag_web.rendering.navigate_fn("\uFDD0:types")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types","\uFDD0:types-results"], true),semtag_web.rendering.render_types_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats"], true),semtag_web.rendering.navigate_fn("\uFDD0:tag-stats")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats","\uFDD0:tag-stats-results"], true),semtag_web.rendering.render_tag_stats_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all"], true),semtag_web.rendering.navigate_fn("\uFDD0:all")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all","\uFDD0:all-results"], true),semtag_web.rendering.render_all_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*"], true),semtag_web.rendering.clear_search], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*","\uFDD0:search-title"], true),semtag_web.rendering.set_search_title], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*","\uFDD0:search-results"], true),semtag_web.rendering.render_search_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*","\uFDD0:thing-results"], true),semtag_web.rendering.render_thing_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:type","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:type","\uFDD0:*"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:type","\uFDD0:*","\uFDD0:type-results"], true),semtag_web.rendering.render_type_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:alert-error"], true),semtag_web.rendering.render_alert_error], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:modal-spinner"], true),semtag_web.rendering.render_modal_spinner], true)], true),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:links"], true),domina.css.sel.cljs$core$IFn$_invoke$arity$1(".navbar a"),cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.href_sets_focus], 0)),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:search"], true),"url_search_button",cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.url_search], 0)),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:create-url"], true),"add_url_button",cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.create_url], 0))], true));
});
