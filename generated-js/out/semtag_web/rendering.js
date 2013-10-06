goog.provide('semtag_web.rendering');
goog.require('cljs.core');
goog.require('semtag_web.route');
goog.require('semtag_web.partials');
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10769_SHARP_){
return cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s %s",cljs.core.array_seq([cljs.core.second(p1__10769_SHARP_),cljs.core.name(cljs.core.first(p1__10769_SHARP_))], 0));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__10768_SHARP_){
return cljs.core.second(p1__10768_SHARP_);
}),(function (a,b){
return (a > b);
}),cljs.core.frequencies(items))));
});
semtag_web.rendering.frequency_stat = (function frequency_stat(title,data){
return cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s: %s - %s",cljs.core.array_seq([title,cljs.core.count(data),semtag_web.rendering.frequencies_string(data)], 0));
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
* Adds an alert box at the top of the page
*/
semtag_web.rendering.render_alert = (function render_alert(msg,alert_type){
return domina.prepend_BANG_(domina.by_id("main"),semtag_web.partials.alert(msg,[cljs.core.str("alert-"),cljs.core.str(cljs.core.name(alert_type))].join('')));
});
semtag_web.rendering.templates = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:semtag-web-page",(function templates(){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.EMPTY,(function (G__10770){
return (function (G__10771){
return [cljs.core.str("<div id=\"main\"><div id=\"search_box\" class=\"top_box hero-unit\"><form onsubmit=\"return false;\" class=\"form-search\"><label class=\"radio\"><input value=\"tagged\" type=\"radio\" name=\"search_type\" checked=\"checked\" />Tagged with\n          </label><label class=\"radio\"><input value=\"tagged-with-type\" type=\"radio\" name=\"search_type\" />Tagged with type\n            </label><label class=\"radio\"><input value=\"regex\" type=\"radio\" name=\"search_type\" />Containing regex\n            </label><input type=\"text\" list=\"tags\" id=\"url_search_text\" class=\"search-query\" autofocus=\"autofocus\" autocomplete=\"on\" /><button id=\"url_search_button\" class=\"btn-primary\">Search</button></form><button id=\"add_url_button\" class=\"btn-large btn-success\">Add Url</button><textarea id=\"add_url_text\"></textarea><h2 id=\"search_title\"></h2><div id=\"table_stats\"></div><div id=\"search_table\"></div></div></div>")].join('');
}).call(null,G__10770);
})], true);
})], true);
semtag_web.rendering.render_search_form = (function render_search_form(renderer,p__10772,input_queue){
var vec__10774 = p__10772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10774,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10774,1,null);
var html = io.pedestal.app.render.push.templates.add_template(renderer,path,(new cljs.core.Keyword("\uFDD0:semtag-web-page")).call(null,semtag_web.rendering.templates));
return domina.set_html_BANG_(domina.by_id("content"),(html.cljs$core$IFn$_invoke$arity$1 ? html.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : html.call(null,cljs.core.PersistentArrayMap.EMPTY)));
});
semtag_web.rendering.render_tags_results = (function render_tags_results(_,p__10775,___$1){
var vec__10777 = p__10775;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10777,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10777,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10777,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10777,3,null);
return domina.insert_after_BANG_(domina.by_id("url_search_text"),semtag_web.partials.generate_datalist(new_value));
});
semtag_web.rendering.url_search = (function url_search(p__10778){
var map__10780 = p__10778;
var map__10780__$1 = ((cljs.core.seq_QMARK_(map__10780))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10780):map__10780);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10780__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10780__$1,"\uFDD0:transform");
var search_map = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:query",domina.by_id("url_search_text").value,"\uFDD0:search-type",domina.value(domina.css.sel.cljs$core$IFn$_invoke$arity$1("input[name=search_type]:checked"))], true);
var search_id = semtag_web.route.create_screen_id("\uFDD0:search",search_map);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(semtag_web.route.dynamic_screens,cljs.core.assoc,search_id,search_map);
return (io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(search_map,"\uFDD0:name",search_id,cljs.core.array_seq(["\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search",search_id], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true)], 0))) : io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(search_map,"\uFDD0:name",search_id,cljs.core.array_seq(["\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search",search_id], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true)], 0))));
});
semtag_web.rendering.create_url = (function create_url(p__10781){
var map__10783 = p__10781;
var map__10783__$1 = ((cljs.core.seq_QMARK_(map__10783))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10783):map__10783);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10783__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10783__$1,"\uFDD0:transform");
return (io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",domina.value(domina.by_id("add_url_text"))], true)) : io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",domina.value(domina.by_id("add_url_text"))], true)));
});
semtag_web.rendering.set_search_title = (function set_search_title(renderer,p__10784,_){
var vec__10786 = p__10784;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10786,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10786,1,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10786,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10786,3,null);
return domina.set_html_BANG_(domina.by_id("search_title"),new_value);
});
semtag_web.rendering.render_search_results = (function render_search_results(_,p__10787,___$1){
var vec__10790 = p__10787;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10790,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10790,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10790,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10790,3,null);
var map__10791 = new_value;
var map__10791__$1 = ((cljs.core.seq_QMARK_(map__10791))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10791):map__10791);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10791__$1,"\uFDD0:tags");
var things = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10791__$1,"\uFDD0:things");
domina.swap_content_BANG_(domina.by_id("table_stats"),semtag_web.partials.table_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([semtag_web.rendering.frequency_stat("Tag Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tags)),semtag_web.rendering.frequency_stat("Tag Counts",cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:tags",things))),semtag_web.rendering.frequency_stat("Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:type",things))], 0)));
return domina.swap_content_BANG_(domina.by_id("search_table"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("search_table",things,cljs.core.array_seq(["\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:desc","\uFDD0:tags"], true),"\uFDD0:row-partial",semtag_web.partials.tag_search_row,"\uFDD0:caption",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("Total: %s",cljs.core.array_seq([cljs.core.count(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:url",things))], 0))], 0)));
});
semtag_web.rendering.clear_search = (function clear_search(_,___$1,___$2){
domina.set_html_BANG_(domina.by_id("table_stats"),"");
return domina.set_html_BANG_(domina.by_id("search_table"),"");
});
semtag_web.rendering.render_types_results = (function render_types_results(_,p__10792,___$1){
var vec__10794 = p__10792;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10794,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10794,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10794,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10794,3,null);
return domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("type_stats_table",(new cljs.core.Keyword("\uFDD0:results")).call(null,new_value),cljs.core.array_seq(["\uFDD0:caption",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s things, %s tags",cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:thing"], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:tags"], true))], 0)),"\uFDD0:row-partial",semtag_web.partials.type_stats_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:name","\uFDD0:count","\uFDD0:name-percent","\uFDD0:url-percent"], true)], 0)));
});
semtag_web.rendering.render_tag_stats_results = (function render_tag_stats_results(_,p__10795,___$1){
var vec__10797 = p__10795;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10797,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10797,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10797,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10797,3,null);
return domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("tag_stats_table",new_value,cljs.core.array_seq(["\uFDD0:row-partial",semtag_web.partials.tag_stats_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:tag","\uFDD0:count","\uFDD0:desc"], true)], 0)));
});
semtag_web.rendering.render_all_results = (function render_all_results(_,p__10798,___$1){
var vec__10800 = p__10798;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10800,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10800,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10800,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10800,3,null);
return domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("all_table",new_value,cljs.core.array_seq(["\uFDD0:row-partial",semtag_web.partials.all_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:tags","\uFDD0:created-at"], true)], 0)));
});
semtag_web.rendering.render_thing_results = (function render_thing_results(_,p__10801,___$1){
var vec__10803 = p__10801;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10803,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10803,1,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10803,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10803,3,null);
var thing_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path,(cljs.core.count(path) - 2));
return domina.set_html_BANG_(domina.by_id("content"),semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$variadic("thing_show_table",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:attribute","\uFDD0:actions","\uFDD0:id",(new cljs.core.Keyword("\uFDD0:id")).call(null,cljs.core.first(new_value))], true)),cljs.core.array_seq(["\uFDD0:caption",(cljs.core.truth_(cljs.core.re_find(/\d+$/,thing_id))?"":semtag_web.partials.link_tagged(thing_id)),"\uFDD0:row-partial",semtag_web.partials.thing_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:attribute","\uFDD0:value"], true)], 0)));
});
semtag_web.rendering.href_sets_focus = (function href_sets_focus(p__10804){
var map__10806 = p__10804;
var map__10806__$1 = ((cljs.core.seq_QMARK_(map__10806))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10806):map__10806);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10806__$1,"\uFDD0:event");
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10806__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10806__$1,"\uFDD0:transform");
var temp__4090__auto__ = semtag_web.route.url__GT_screen.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/#.*?$/,event.currentTarget.href));
if(cljs.core.truth_(temp__4090__auto__))
{var screen = temp__4090__auto__;
return (io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",cljs.core.name(screen),"\uFDD0:name",screen], true)) : io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",cljs.core.name(screen),"\uFDD0:name",screen], true)));
} else
{return console.log("No screen found for element",event.currentTarget);
}
});
semtag_web.rendering.render_alert_error = (function render_alert_error(_,p__10807,___$1){
var vec__10809 = p__10807;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10809,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10809,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10809,2,null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10809,3,null);
return semtag_web.rendering.render_alert(msg,"\uFDD0:error");
});
/**
* Navigate paths whose last element is the navigated id
*/
semtag_web.rendering.navigate_path = (function navigate_path(_,p__10810,input_queue){
var vec__10812 = p__10810;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10812,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10812,1,null);
return semtag_web.history.navigated(input_queue,cljs.core.last(path));
});
semtag_web.rendering.render_config = (function render_config(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:home"], true),semtag_web.rendering.navigate_fn("\uFDD0:home")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),semtag_web.rendering.render_search_form], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:tags-results"], true),semtag_web.rendering.render_tags_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types"], true),semtag_web.rendering.navigate_fn("\uFDD0:types")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types","\uFDD0:types-results"], true),semtag_web.rendering.render_types_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats"], true),semtag_web.rendering.navigate_fn("\uFDD0:tag-stats")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats","\uFDD0:tag-stats-results"], true),semtag_web.rendering.render_tag_stats_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all"], true),semtag_web.rendering.navigate_fn("\uFDD0:all")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all","\uFDD0:all-results"], true),semtag_web.rendering.render_all_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*"], true),semtag_web.rendering.clear_search], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*","\uFDD0:search-title"], true),semtag_web.rendering.set_search_title], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*","\uFDD0:search-results"], true),semtag_web.rendering.render_search_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*","\uFDD0:thing-results"], true),semtag_web.rendering.render_thing_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:alert-error"], true),semtag_web.rendering.render_alert_error], true)], true),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:links"], true),domina.css.sel.cljs$core$IFn$_invoke$arity$1(".navbar a"),cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.href_sets_focus], 0)),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:search"], true),"url_search_button",cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.url_search], 0)),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:create-url"], true),"add_url_button",cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.create_url], 0))], true));
});
