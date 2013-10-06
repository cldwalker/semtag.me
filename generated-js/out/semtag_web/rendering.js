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
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__11483_SHARP_){
return cljs.core.format.call(null,"%s %s",cljs.core.second.call(null,p1__11483_SHARP_),cljs.core.name.call(null,cljs.core.first.call(null,p1__11483_SHARP_)));
}),cljs.core.sort_by.call(null,(function (p1__11482_SHARP_){
return cljs.core.second.call(null,p1__11482_SHARP_);
}),(function (a,b){
return (a > b);
}),cljs.core.frequencies.call(null,items))));
});
semtag_web.rendering.frequency_stat = (function frequency_stat(title,data){
return cljs.core.format.call(null,"%s: %s - %s",title,cljs.core.count.call(null,data),semtag_web.rendering.frequencies_string.call(null,data));
});
semtag_web.rendering.clear_id = (function clear_id(id){
return (function (_,___$1,___$2){
return domina.set_html_BANG_.call(null,domina.by_id.call(null,id),"");
});
});
semtag_web.rendering.navigate_fn = (function navigate_fn(screen){
return (function (_,___$1,input_queue){
return semtag_web.history.navigated.call(null,input_queue,screen);
});
});
/**
* Adds an alert box at the top of the page
*/
semtag_web.rendering.render_alert = (function render_alert(msg,alert_type){
return domina.prepend_BANG_.call(null,domina.by_id.call(null,"main"),semtag_web.partials.alert.call(null,msg,[cljs.core.str("alert-"),cljs.core.str(cljs.core.name.call(null,alert_type))].join('')));
});
semtag_web.rendering.templates = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:semtag-web-page",(function templates(){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.EMPTY,(function (G__11484){
return (function (G__11485){
return [cljs.core.str("<div id=\"main\"><div id=\"search_box\" class=\"top_box hero-unit\"><form onsubmit=\"return false;\" class=\"form-search\"><label class=\"radio\"><input value=\"tagged\" type=\"radio\" name=\"search_type\" checked=\"checked\" />Tagged with\n          </label><label class=\"radio\"><input value=\"tagged-with-type\" type=\"radio\" name=\"search_type\" />Tagged with type\n            </label><label class=\"radio\"><input value=\"regex\" type=\"radio\" name=\"search_type\" />Containing regex\n            </label><input type=\"text\" list=\"tags\" id=\"url_search_text\" class=\"search-query\" autofocus=\"autofocus\" autocomplete=\"on\" /><button id=\"url_search_button\" class=\"btn-primary\">Search</button></form><button id=\"add_url_button\" class=\"btn-large btn-success\">Add Url</button><textarea id=\"add_url_text\"></textarea><h2 id=\"search_title\"></h2><div id=\"table_stats\"></div><div id=\"search_table\"></div></div></div>")].join('');
}).call(null,G__11484);
})], true);
})], true);
semtag_web.rendering.render_search_form = (function render_search_form(renderer,p__11486,input_queue){
var vec__11488 = p__11486;
var _ = cljs.core.nth.call(null,vec__11488,0,null);
var path = cljs.core.nth.call(null,vec__11488,1,null);
var html = io.pedestal.app.render.push.templates.add_template.call(null,renderer,path,(new cljs.core.Keyword("\uFDD0:semtag-web-page")).call(null,semtag_web.rendering.templates));
return domina.set_html_BANG_.call(null,domina.by_id.call(null,"content"),html.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
semtag_web.rendering.render_tags_results = (function render_tags_results(_,p__11489,___$1){
var vec__11491 = p__11489;
var ___$2 = cljs.core.nth.call(null,vec__11491,0,null);
var ___$3 = cljs.core.nth.call(null,vec__11491,1,null);
var ___$4 = cljs.core.nth.call(null,vec__11491,2,null);
var new_value = cljs.core.nth.call(null,vec__11491,3,null);
return domina.insert_after_BANG_.call(null,domina.by_id.call(null,"url_search_text"),semtag_web.partials.generate_datalist.call(null,new_value));
});
semtag_web.rendering.url_search = (function url_search(p__11492){
var map__11494 = p__11492;
var map__11494__$1 = ((cljs.core.seq_QMARK_.call(null,map__11494))?cljs.core.apply.call(null,cljs.core.hash_map,map__11494):map__11494);
var messages = cljs.core.get.call(null,map__11494__$1,"\uFDD0:messages");
var transform = cljs.core.get.call(null,map__11494__$1,"\uFDD0:transform");
var search_map = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:query",domina.by_id.call(null,"url_search_text").value,"\uFDD0:search-type",domina.value.call(null,domina.css.sel.call(null,"input[name=search_type]:checked"))], true);
var search_id = semtag_web.route.create_screen_id.call(null,"\uFDD0:search",search_map);
cljs.core.swap_BANG_.call(null,semtag_web.route.dynamic_screens,cljs.core.assoc,search_id,search_map);
return io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.assoc.call(null,search_map,"\uFDD0:name",search_id,"\uFDD0:paths",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search",search_id], true),cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar"], true)], true)));
});
semtag_web.rendering.create_url = (function create_url(p__11495){
var map__11497 = p__11495;
var map__11497__$1 = ((cljs.core.seq_QMARK_.call(null,map__11497))?cljs.core.apply.call(null,cljs.core.hash_map,map__11497):map__11497);
var messages = cljs.core.get.call(null,map__11497__$1,"\uFDD0:messages");
var transform = cljs.core.get.call(null,map__11497__$1,"\uFDD0:transform");
return io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",domina.value.call(null,domina.by_id.call(null,"add_url_text"))], true));
});
semtag_web.rendering.set_search_title = (function set_search_title(renderer,p__11498,_){
var vec__11500 = p__11498;
var ___$1 = cljs.core.nth.call(null,vec__11500,0,null);
var path = cljs.core.nth.call(null,vec__11500,1,null);
var ___$2 = cljs.core.nth.call(null,vec__11500,2,null);
var new_value = cljs.core.nth.call(null,vec__11500,3,null);
return domina.set_html_BANG_.call(null,domina.by_id.call(null,"search_title"),new_value);
});
semtag_web.rendering.render_search_results = (function render_search_results(_,p__11501,___$1){
var vec__11504 = p__11501;
var ___$2 = cljs.core.nth.call(null,vec__11504,0,null);
var ___$3 = cljs.core.nth.call(null,vec__11504,1,null);
var ___$4 = cljs.core.nth.call(null,vec__11504,2,null);
var new_value = cljs.core.nth.call(null,vec__11504,3,null);
var map__11505 = new_value;
var map__11505__$1 = ((cljs.core.seq_QMARK_.call(null,map__11505))?cljs.core.apply.call(null,cljs.core.hash_map,map__11505):map__11505);
var tags = cljs.core.get.call(null,map__11505__$1,"\uFDD0:tags");
var things = cljs.core.get.call(null,map__11505__$1,"\uFDD0:things");
domina.swap_content_BANG_.call(null,domina.by_id.call(null,"table_stats"),semtag_web.partials.table_stats.call(null,semtag_web.rendering.frequency_stat.call(null,"Tag Type Counts",cljs.core.map.call(null,cljs.core.first,tags)),semtag_web.rendering.frequency_stat.call(null,"Tag Counts",cljs.core.flatten.call(null,cljs.core.map.call(null,"\uFDD0:tags",things))),semtag_web.rendering.frequency_stat.call(null,"Type Counts",cljs.core.map.call(null,"\uFDD0:type",things))));
return domina.swap_content_BANG_.call(null,domina.by_id.call(null,"search_table"),semtag_web.partials.generate_table.call(null,"search_table",things,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:desc","\uFDD0:tags"], true),"\uFDD0:row-partial",semtag_web.partials.tag_search_row,"\uFDD0:caption",cljs.core.format.call(null,"Total: %s",cljs.core.count.call(null,cljs.core.map.call(null,"\uFDD0:url",things)))));
});
semtag_web.rendering.clear_search = (function clear_search(_,___$1,___$2){
domina.set_html_BANG_.call(null,domina.by_id.call(null,"table_stats"),"");
return domina.set_html_BANG_.call(null,domina.by_id.call(null,"search_table"),"");
});
semtag_web.rendering.render_types_results = (function render_types_results(_,p__11506,___$1){
var vec__11508 = p__11506;
var ___$2 = cljs.core.nth.call(null,vec__11508,0,null);
var ___$3 = cljs.core.nth.call(null,vec__11508,1,null);
var ___$4 = cljs.core.nth.call(null,vec__11508,2,null);
var new_value = cljs.core.nth.call(null,vec__11508,3,null);
return domina.set_html_BANG_.call(null,domina.by_id.call(null,"content"),semtag_web.partials.generate_table.call(null,"type_stats_table",(new cljs.core.Keyword("\uFDD0:results")).call(null,new_value),"\uFDD0:caption",cljs.core.format.call(null,"%s things, %s tags",cljs.core.get_in.call(null,new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:thing"], true)),cljs.core.get_in.call(null,new_value,cljs.core.PersistentVector.fromArray(["\uFDD0:counts","\uFDD0:tags"], true))),"\uFDD0:row-partial",semtag_web.partials.type_stats_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:name","\uFDD0:count","\uFDD0:name-percent","\uFDD0:url-percent"], true)));
});
semtag_web.rendering.render_tag_stats_results = (function render_tag_stats_results(_,p__11509,___$1){
var vec__11511 = p__11509;
var ___$2 = cljs.core.nth.call(null,vec__11511,0,null);
var ___$3 = cljs.core.nth.call(null,vec__11511,1,null);
var ___$4 = cljs.core.nth.call(null,vec__11511,2,null);
var new_value = cljs.core.nth.call(null,vec__11511,3,null);
return domina.set_html_BANG_.call(null,domina.by_id.call(null,"content"),semtag_web.partials.generate_table.call(null,"tag_stats_table",new_value,"\uFDD0:row-partial",semtag_web.partials.tag_stats_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count.call(null,new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:tag","\uFDD0:count","\uFDD0:desc"], true)));
});
semtag_web.rendering.render_all_results = (function render_all_results(_,p__11512,___$1){
var vec__11514 = p__11512;
var ___$2 = cljs.core.nth.call(null,vec__11514,0,null);
var ___$3 = cljs.core.nth.call(null,vec__11514,1,null);
var ___$4 = cljs.core.nth.call(null,vec__11514,2,null);
var new_value = cljs.core.nth.call(null,vec__11514,3,null);
return domina.set_html_BANG_.call(null,domina.by_id.call(null,"content"),semtag_web.partials.generate_table.call(null,"all_table",new_value,"\uFDD0:row-partial",semtag_web.partials.all_row,"\uFDD0:caption",[cljs.core.str("Total: "),cljs.core.str(cljs.core.count.call(null,new_value))].join(''),"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:type","\uFDD0:name","\uFDD0:url","\uFDD0:tags","\uFDD0:created-at"], true)));
});
semtag_web.rendering.render_thing_results = (function render_thing_results(_,p__11515,___$1){
var vec__11517 = p__11515;
var ___$2 = cljs.core.nth.call(null,vec__11517,0,null);
var path = cljs.core.nth.call(null,vec__11517,1,null);
var ___$3 = cljs.core.nth.call(null,vec__11517,2,null);
var new_value = cljs.core.nth.call(null,vec__11517,3,null);
var thing_id = cljs.core.nth.call(null,path,(cljs.core.count.call(null,path) - 2));
return domina.set_html_BANG_.call(null,domina.by_id.call(null,"content"),semtag_web.partials.generate_table.call(null,"thing_show_table",cljs.core.conj.call(null,new_value,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:attribute","\uFDD0:actions","\uFDD0:id",(new cljs.core.Keyword("\uFDD0:id")).call(null,cljs.core.first.call(null,new_value))], true)),"\uFDD0:caption",(cljs.core.truth_(cljs.core.re_find.call(null,/\d+$/,thing_id))?"":semtag_web.partials.link_tagged.call(null,thing_id)),"\uFDD0:row-partial",semtag_web.partials.thing_row,"\uFDD0:fields",cljs.core.PersistentVector.fromArray(["\uFDD0:attribute","\uFDD0:value"], true)));
});
semtag_web.rendering.href_sets_focus = (function href_sets_focus(p__11518){
var map__11520 = p__11518;
var map__11520__$1 = ((cljs.core.seq_QMARK_.call(null,map__11520))?cljs.core.apply.call(null,cljs.core.hash_map,map__11520):map__11520);
var event = cljs.core.get.call(null,map__11520__$1,"\uFDD0:event");
var messages = cljs.core.get.call(null,map__11520__$1,"\uFDD0:messages");
var transform = cljs.core.get.call(null,map__11520__$1,"\uFDD0:transform");
var temp__4090__auto__ = semtag_web.route.url__GT_screen.call(null,cljs.core.re_find.call(null,/#.*?$/,event.currentTarget.href));
if(cljs.core.truth_(temp__4090__auto__))
{var screen = temp__4090__auto__;
return io.pedestal.app.messages.fill.call(null,transform,messages,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",cljs.core.name.call(null,screen),"\uFDD0:name",screen], true));
} else
{return console.log("No screen found for element",event.currentTarget);
}
});
semtag_web.rendering.render_alert_error = (function render_alert_error(_,p__11521,___$1){
var vec__11523 = p__11521;
var ___$2 = cljs.core.nth.call(null,vec__11523,0,null);
var ___$3 = cljs.core.nth.call(null,vec__11523,1,null);
var ___$4 = cljs.core.nth.call(null,vec__11523,2,null);
var msg = cljs.core.nth.call(null,vec__11523,3,null);
return semtag_web.rendering.render_alert.call(null,msg,"\uFDD0:error");
});
/**
* Navigate paths whose last element is the navigated id
*/
semtag_web.rendering.navigate_path = (function navigate_path(_,p__11524,input_queue){
var vec__11526 = p__11524;
var ___$1 = cljs.core.nth.call(null,vec__11526,0,null);
var path = cljs.core.nth.call(null,vec__11526,1,null);
return semtag_web.history.navigated.call(null,input_queue,cljs.core.last.call(null,path));
});
semtag_web.rendering.render_config = (function render_config(){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:home"], true),semtag_web.rendering.navigate_fn.call(null,"\uFDD0:home")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),semtag_web.rendering.render_search_form], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form"], true),semtag_web.rendering.clear_id.call(null,"content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:tags-results"], true),semtag_web.rendering.render_tags_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types"], true),semtag_web.rendering.navigate_fn.call(null,"\uFDD0:types")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types"], true),semtag_web.rendering.clear_id.call(null,"content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:types","\uFDD0:types-results"], true),semtag_web.rendering.render_types_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats"], true),semtag_web.rendering.navigate_fn.call(null,"\uFDD0:tag-stats")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats"], true),semtag_web.rendering.clear_id.call(null,"content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:tag-stats","\uFDD0:tag-stats-results"], true),semtag_web.rendering.render_tag_stats_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all"], true),semtag_web.rendering.navigate_fn.call(null,"\uFDD0:all")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all"], true),semtag_web.rendering.clear_id.call(null,"content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:all","\uFDD0:all-results"], true),semtag_web.rendering.render_all_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*"], true),semtag_web.rendering.clear_search], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*","\uFDD0:search-title"], true),semtag_web.rendering.set_search_title], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search","\uFDD0:*","\uFDD0:search-results"], true),semtag_web.rendering.render_search_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*"], true),semtag_web.rendering.navigate_path], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*"], true),semtag_web.rendering.clear_id.call(null,"content")], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:thing","\uFDD0:*","\uFDD0:thing-results"], true),semtag_web.rendering.render_thing_results], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:alert-error"], true),semtag_web.rendering.render_alert_error], true)], true),semtag_web.rendering_util.click.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:navbar","\uFDD0:links"], true),domina.css.sel.call(null,".navbar a"),"\uFDD0:fn",semtag_web.rendering.href_sets_focus),semtag_web.rendering_util.click.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:search"], true),"url_search_button","\uFDD0:fn",semtag_web.rendering.url_search),semtag_web.rendering_util.click.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:app-model","\uFDD0:search-form","\uFDD0:create-url"], true),"add_url_button","\uFDD0:fn",semtag_web.rendering.create_url)], true));
});
