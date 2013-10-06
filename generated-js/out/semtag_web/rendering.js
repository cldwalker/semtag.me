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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10711_SHARP_){
return cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s %s",cljs.core.array_seq([cljs.core.second(p1__10711_SHARP_),cljs.core.name(cljs.core.first(p1__10711_SHARP_))], 0));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__10710_SHARP_){
return cljs.core.second(p1__10710_SHARP_);
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
return (semtag_web.history.navigated.cljs$core$IFn$_invoke$arity$2 ? semtag_web.history.navigated.cljs$core$IFn$_invoke$arity$2(input_queue,screen) : semtag_web.history.navigated.call(null,input_queue,screen));
});
});
/**
* Adds an alert box at the top of the page
*/
semtag_web.rendering.render_alert = (function render_alert(msg,alert_type){
return domina.prepend_BANG_(domina.by_id("main"),(semtag_web.partials.alert.cljs$core$IFn$_invoke$arity$2 ? semtag_web.partials.alert.cljs$core$IFn$_invoke$arity$2(msg,[cljs.core.str("alert-"),cljs.core.str(cljs.core.name(alert_type))].join('')) : semtag_web.partials.alert.call(null,msg,[cljs.core.str("alert-"),cljs.core.str(cljs.core.name(alert_type))].join(''))));
});
semtag_web.rendering.templates = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:semtag-web-page",(function templates(){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.EMPTY,(function (G__10712){
return (function (G__10713){
return [cljs.core.str("<div id=\"main\"><div id=\"search_box\" class=\"top_box hero-unit\"><form onsubmit=\"return false;\" class=\"form-search\"><label class=\"radio\"><input value=\"tagged\" type=\"radio\" name=\"search_type\" checked=\"checked\" />Tagged with\n          </label><label class=\"radio\"><input value=\"tagged-with-type\" type=\"radio\" name=\"search_type\" />Tagged with type\n            </label><label class=\"radio\"><input value=\"regex\" type=\"radio\" name=\"search_type\" />Containing regex\n            </label><input type=\"text\" list=\"tags\" id=\"url_search_text\" class=\"search-query\" autofocus=\"autofocus\" autocomplete=\"on\" /><button id=\"url_search_button\" class=\"btn-primary\">Search</button></form><button id=\"add_url_button\" class=\"btn-large btn-success\">Add Url</button><textarea id=\"add_url_text\"></textarea><h2 id=\"search_title\"></h2><div id=\"table_stats\"></div><div id=\"search_table\"></div></div></div>")].join('');
}).call(null,G__10712);
})], true);
})], true);
semtag_web.rendering.render_search_form = (function render_search_form(renderer,p__10714,input_queue){
var vec__10716 = p__10714;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10716,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10716,1,null);
var html = io.pedestal.app.render.push.templates.add_template(renderer,path,(new cljs.core.Keyword("\uFDD0:semtag-web-page")).call(null,semtag_web.rendering.templates));
return domina.set_html_BANG_(domina.by_id("content"),(html.cljs$core$IFn$_invoke$arity$1 ? html.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : html.call(null,cljs.core.PersistentArrayMap.EMPTY)));
});
semtag_web.rendering.render_tags_results = (function render_tags_results(_,p__10717,___$1){
var vec__10719 = p__10717;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10719,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10719,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10719,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10719,3,null);
return domina.insert_after_BANG_(domina.by_id("url_search_text"),(semtag_web.partials.generate_datalist.cljs$core$IFn$_invoke$arity$1 ? semtag_web.partials.generate_datalist.cljs$core$IFn$_invoke$arity$1(new_value) : semtag_web.partials.generate_datalist.call(null,new_value)));
});
semtag_web.rendering.url_search = (function url_search(p__10720){
var map__10722 = p__10720;
var map__10722__$1 = ((cljs.core.seq_QMARK_(map__10722))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10722):map__10722);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,"\uFDD0:transform");
var search_map = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:query",domina.by_id("url_search_text").value,"\uFDD0:search-type",domina.value(domina.css.sel.cljs$core$IFn$_invoke$arity$1("input[name=search_type]:checked"))], true);
var search_id = (semtag_web.route.create_screen_id.cljs$core$IFn$_invoke$arity$2 ? semtag_web.route.create_screen_id.cljs$core$IFn$_invoke$arity$2("\uFDD0:search",search_map) : semtag_web.route.create_screen_id.call(null,"\uFDD0:search",search_map));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(semtag_web.route.dynamic_screens,cljs.core.assoc,search_id,search_map);
return (io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(search_map,"\uFDD0:name",search_id,cljs.core.array_seq(["\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search",search_id], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true)], 0))) : io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(search_map,"\uFDD0:name",search_id,cljs.core.array_seq(["\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search",search_id], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true)], 0))));
});
semtag_web.rendering.create_url = (function create_url(p__10723){
var map__10725 = p__10723;
var map__10725__$1 = ((cljs.core.seq_QMARK_(map__10725))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10725):map__10725);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10725__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10725__$1,"\uFDD0:transform");
return (io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",domina.value(domina.by_id("add_url_text"))], true)) : io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",domina.value(domina.by_id("add_url_text"))], true)));
});
semtag_web.rendering.set_search_title = (function set_search_title(renderer,p__10726,_){
var vec__10728 = p__10726;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10728,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10728,1,null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10728,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10728,3,null);
return domina.set_html_BANG_(domina.by_id("search_title"),new_value);
});
semtag_web.rendering.render_search_results = (function render_search_results(_,p__10729,___$1){
var vec__10732 = p__10729;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10732,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10732,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10732,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10732,3,null);
var map__10733 = new_value;
var map__10733__$1 = ((cljs.core.seq_QMARK_(map__10733))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10733):map__10733);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10733__$1,"\uFDD0:tags");
var things = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10733__$1,"\uFDD0:things");
domina.swap_content_BANG_(domina.by_id("table_stats"),(semtag_web.partials.table_stats.cljs$core$IFn$_invoke$arity$3 ? semtag_web.partials.table_stats.cljs$core$IFn$_invoke$arity$3(semtag_web.rendering.frequency_stat("Tag Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tags)),semtag_web.rendering.frequency_stat("Tag Counts",cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:tags",things))),semtag_web.rendering.frequency_stat("Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:type",things))) : semtag_web.partials.table_stats.call(null,semtag_web.rendering.frequency_stat("Tag Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tags)),semtag_web.rendering.frequency_stat("Tag Counts",cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:tags",things))),semtag_web.rendering.frequency_stat("Type Counts",cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:type",things)))));
return domina.swap_content_BANG_(domina.by_id("search_table"),(semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8 ? semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8("search_table",things,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:desc","\uFDD0:tags"], true),"\uFDD0:row-partial",semtag_web.partials.tag_search_row,"\uFDD0:caption",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("Total: %s",cljs.core.array_seq([cljs.core.count(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:url",things))], 0))) : semtag_web.partials.generate_table.call(null,"search_table",things,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:desc","\uFDD0:tags"], true),"\uFDD0:row-partial",semtag_web.partials.tag_search_row,"\uFDD0:caption",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("Total: %s",cljs.core.array_seq([cljs.core.count(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:url",things))], 0)))));
});
semtag_web.rendering.clear_search = (function clear_search(_,___$1,___$2){
domina.set_html_BANG_(domina.by_id("table_stats"),"");
return domina.set_html_BANG_(domina.by_id("search_table"),"");
});
semtag_web.rendering.render_types_results = (function render_types_results(_,p__10734,___$1){
var vec__10736 = p__10734;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10736,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10736,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10736,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10736,3,null);
return domina.set_html_BANG_(domina.by_id("content"),(semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8 ? semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8("type_stats_table",(new cljs.core.Keyword("\uFDD0:results")).call(null,new_value),"\uFDD0:caption",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s things, %s tags",cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:thing"], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:tags"], true))], 0)),"\uFDD0:row-partial",semtag_web.partials.type_stats_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:name","\uFDD0:count","\uFDD0:name-percent","\uFDD0:url-percent"], true)) : semtag_web.partials.generate_table.call(null,"type_stats_table",(new cljs.core.Keyword("\uFDD0:results")).call(null,new_value),"\uFDD0:caption",cljs.core.format.cljs$core$IFn$_invoke$arity$variadic("%s things, %s tags",cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:thing"], true)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:tags"], true))], 0)),"\uFDD0:row-partial",semtag_web.partials.type_stats_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:name","\uFDD0:count","\uFDD0:name-percent","\uFDD0:url-percent"], true))));
});
semtag_web.rendering.render_tag_stats_results = (function render_tag_stats_results(_,p__10737,___$1){
var vec__10739 = p__10737;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10739,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10739,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10739,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10739,3,null);
return domina.set_html_BANG_(domina.by_id("content"),(semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8 ? semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8("tag_stats_table",new_value,"\uFDD0:row-partial",semtag_web.partials.tag_stats_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:tag","\uFDD0:count","\uFDD0:desc"], true)) : semtag_web.partials.generate_table.call(null,"tag_stats_table",new_value,"\uFDD0:row-partial",semtag_web.partials.tag_stats_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:tag","\uFDD0:count","\uFDD0:desc"], true))));
});
semtag_web.rendering.render_all_results = (function render_all_results(_,p__10740,___$1){
var vec__10742 = p__10740;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,3,null);
return domina.set_html_BANG_(domina.by_id("content"),(semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8 ? semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8("all_table",new_value,"\uFDD0:row-partial",semtag_web.partials.all_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:tags","\uFDD0:created-at"], true)) : semtag_web.partials.generate_table.call(null,"all_table",new_value,"\uFDD0:row-partial",semtag_web.partials.all_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count(new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:tags","\uFDD0:created-at"], true))));
});
semtag_web.rendering.render_thing_results = (function render_thing_results(_,p__10743,___$1){
var vec__10745 = p__10743;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10745,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10745,1,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10745,2,null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10745,3,null);
var thing_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path,(cljs.core.count(path) - 2));
return domina.set_html_BANG_(domina.by_id("content"),(semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8 ? semtag_web.partials.generate_table.cljs$core$IFn$_invoke$arity$8("thing_show_table",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:attribute","\uFDD0:actions","\uFDD0:id",(new cljs.core.Keyword("\uFDD0:id")).call(null,cljs.core.first(new_value))], true)),"\uFDD0:caption",(cljs.core.truth_(cljs.core.re_find(/\d+$/,thing_id))?"":(semtag_web.partials.link_tagged.cljs$core$IFn$_invoke$arity$1 ? semtag_web.partials.link_tagged.cljs$core$IFn$_invoke$arity$1(thing_id) : semtag_web.partials.link_tagged.call(null,thing_id))),"\uFDD0:row-partial",semtag_web.partials.thing_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:attribute","\uFDD0:value"], true)) : semtag_web.partials.generate_table.call(null,"thing_show_table",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:attribute","\uFDD0:actions","\uFDD0:id",(new cljs.core.Keyword("\uFDD0:id")).call(null,cljs.core.first(new_value))], true)),"\uFDD0:caption",(cljs.core.truth_(cljs.core.re_find(/\d+$/,thing_id))?"":(semtag_web.partials.link_tagged.cljs$core$IFn$_invoke$arity$1 ? semtag_web.partials.link_tagged.cljs$core$IFn$_invoke$arity$1(thing_id) : semtag_web.partials.link_tagged.call(null,thing_id))),"\uFDD0:row-partial",semtag_web.partials.thing_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:attribute","\uFDD0:value"], true))));
});
semtag_web.rendering.href_sets_focus = (function href_sets_focus(p__10746){
var map__10748 = p__10746;
var map__10748__$1 = ((cljs.core.seq_QMARK_(map__10748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10748):map__10748);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10748__$1,"\uFDD0:event");
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10748__$1,"\uFDD0:messages");
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10748__$1,"\uFDD0:transform");
var temp__4090__auto__ = (semtag_web.route.url__GT_screen.cljs$core$IFn$_invoke$arity$1 ? semtag_web.route.url__GT_screen.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/#.*?$/,event.currentTarget.href)) : semtag_web.route.url__GT_screen.call(null,cljs.core.re_find(/#.*?$/,event.currentTarget.href)));
if(cljs.core.truth_(temp__4090__auto__))
{var screen = temp__4090__auto__;
return (io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.messages.fill.cljs$core$IFn$_invoke$arity$3(transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",cljs.core.name(screen),"\uFDD0:name",screen], true)) : io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",cljs.core.name(screen),"\uFDD0:name",screen], true)));
} else
{return console.log("No screen found for element",event.currentTarget);
}
});
semtag_web.rendering.render_alert_error = (function render_alert_error(_,p__10749,___$1){
var vec__10751 = p__10749;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10751,0,null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10751,1,null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10751,2,null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10751,3,null);
return semtag_web.rendering.render_alert(msg,"\uFDD0:error");
});
/**
* Navigate paths whose last element is the navigated id
*/
semtag_web.rendering.navigate_path = (function navigate_path(_,p__10752,input_queue){
var vec__10754 = p__10752;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10754,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10754,1,null);
return (semtag_web.history.navigated.cljs$core$IFn$_invoke$arity$2 ? semtag_web.history.navigated.cljs$core$IFn$_invoke$arity$2(input_queue,cljs.core.last(path)) : semtag_web.history.navigated.call(null,input_queue,cljs.core.last(path)));
});
semtag_web.rendering.render_config = (function render_config(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:home"], true),semtag_web.rendering.navigate_fn("\uFDD0:home")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),semtag_web.rendering.render_search_form], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:tags-results"], true),semtag_web.rendering.render_tags_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types"], true),semtag_web.rendering.navigate_fn("\uFDD0:types")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types","\uFDD0:types-results"], true),semtag_web.rendering.render_types_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats"], true),semtag_web.rendering.navigate_fn("\uFDD0:tag-stats")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats","\uFDD0:tag-stats-results"], true),semtag_web.rendering.render_tag_stats_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all"], true),semtag_web.rendering.navigate_fn("\uFDD0:all")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all","\uFDD0:all-results"], true),semtag_web.rendering.render_all_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*"], true),semtag_web.rendering.clear_search], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*","\uFDD0:search-title"], true),semtag_web.rendering.set_search_title], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*","\uFDD0:search-results"], true),semtag_web.rendering.render_search_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*"], true),semtag_web.rendering.clear_id("content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*","\uFDD0:thing-results"], true),semtag_web.rendering.render_thing_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:alert-error"], true),semtag_web.rendering.render_alert_error], true)], true),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:links"], true),domina.css.sel.cljs$core$IFn$_invoke$arity$1(".navbar a"),cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.href_sets_focus], 0)),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:search"], true),"url_search_button",cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.url_search], 0)),semtag_web.rendering_util.click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:create-url"], true),"add_url_button",cljs.core.array_seq(["\uFDD0:fn",semtag_web.rendering.create_url], 0))], true));
});
