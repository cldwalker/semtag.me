goog.provide('semtag_web.partials');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('crate.core');
semtag_web.partials.field_to_header = (function field_to_header(field){
return clojure.string.capitalize.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,field),"-"," "));
});
semtag_web.partials.shorten_to = (function shorten_to(s,max_length){
var s_length = cljs.core.count.call(null,s);
if((s_length > max_length))
{return [cljs.core.str(s.substring(0,(max_length - 3))),cljs.core.str("...")].join('');
} else
{return s;
}
});
semtag_web.partials.abbreviate_url = (function abbreviate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,url,/^https?:\/\/(www\.)?/,""),/\/$/,"");
});
/**
* Concats string currently. Should construct paths based on routes and properly encode queries.
* @param {...*} var_args
*/
semtag_web.partials.path_to = (function() { 
var path_to__delegate = function (args){
return cljs.core.apply.call(null,cljs.core.str,args);
};
var path_to = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return path_to__delegate.call(this, args);
};
path_to.cljs$lang$maxFixedArity = 0;
path_to.cljs$lang$applyTo = (function (arglist__10981){
var args = cljs.core.seq(arglist__10981);
return path_to__delegate(args);
});
path_to.cljs$core$IFn$_invoke$arity$variadic = path_to__delegate;
return path_to;
})()
;
semtag_web.partials.link_thing = (function() {
var link_thing = null;
var link_thing__1 = (function (unique_id){
return link_thing.call(null,unique_id,unique_id);
});
var link_thing__2 = (function (unique_id,text){
return link_thing.call(null,unique_id,text,cljs.core.PersistentArrayMap.EMPTY);
});
var link_thing__3 = (function (unique_id,text,attr){
return cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href",semtag_web.partials.path_to.call(null,"/thing/",unique_id)], true),attr),text], true);
});
link_thing = function(unique_id,text,attr){
switch(arguments.length){
case 1:
return link_thing__1.call(this,unique_id);
case 2:
return link_thing__2.call(this,unique_id,text);
case 3:
return link_thing__3.call(this,unique_id,text,attr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
link_thing.cljs$core$IFn$_invoke$arity$1 = link_thing__1;
link_thing.cljs$core$IFn$_invoke$arity$2 = link_thing__2;
link_thing.cljs$core$IFn$_invoke$arity$3 = link_thing__3;
return link_thing;
})()
;
semtag_web.partials.link_tagged = (function link_tagged(tag){
return cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href",semtag_web.partials.path_to.call(null,"/?query=",tag)], true),[cljs.core.str("Tagged with "),cljs.core.str(tag)].join('')], true);
});
semtag_web.partials.td_url = (function td_url(url){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-field","url","\uFDD0:title",url], true),cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href",url], true),semtag_web.partials.shorten_to.call(null,(cljs.core.truth_(url)?semtag_web.partials.abbreviate_url.call(null,url):url),40)], true)], true);
});
semtag_web.partials.td_name = (function() {
var td_name = null;
var td_name__1 = (function (s){
return td_name.call(null,s,null);
});
var td_name__2 = (function (s,id){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-field","name","\uFDD0:title",s], true),((cljs.core.seq.call(null,s))?semtag_web.partials.link_thing.call(null,s):(cljs.core.truth_(id)?semtag_web.partials.link_thing.call(null,id,"nil",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:class","noname","\uFDD0:title","This thing has no name. Feel free to give it one."], true)):s))], true);
});
td_name = function(s,id){
switch(arguments.length){
case 1:
return td_name__1.call(this,s);
case 2:
return td_name__2.call(this,s,id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
td_name.cljs$core$IFn$_invoke$arity$1 = td_name__1;
td_name.cljs$core$IFn$_invoke$arity$2 = td_name__2;
return td_name;
})()
;
semtag_web.partials.td_desc = (function() {
var td_desc = null;
var td_desc__1 = (function (desc){
return td_desc.call(null,desc,70);
});
var td_desc__2 = (function (desc,max_length){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.ellipsis.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",desc,"\uFDD0:data-field","desc"], true),semtag_web.partials.shorten_to.call(null,desc,max_length)], true);
});
td_desc = function(desc,max_length){
switch(arguments.length){
case 1:
return td_desc__1.call(this,desc);
case 2:
return td_desc__2.call(this,desc,max_length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
td_desc.cljs$core$IFn$_invoke$arity$1 = td_desc__1;
td_desc.cljs$core$IFn$_invoke$arity$2 = td_desc__2;
return td_desc;
})()
;
semtag_web.partials.td_tags = (function td_tags(tags){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",clojure.string.join.call(null,", ",tags),"\uFDD0:data-field","tags"], true),cljs.core.interpose.call(null,", ",cljs.core.map.call(null,semtag_web.partials.link_thing,tags))], true);
});
semtag_web.partials.td_type = (function td_type(type){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",type,"\uFDD0:data-field","type"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href",semtag_web.partials.path_to.call(null,"/",type)], true),type], true)], true);
});
semtag_web.partials.td_timestamp = (function td_timestamp(datetime){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.timestamp",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",(cljs.core.truth_(datetime)?datetime.toISOString():"")], true),[cljs.core.str(datetime)].join('')], true);
});
var group__10962__auto___10983 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
semtag_web.partials.default_row = (function default_row(row,fields){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.map.call(null,(function (p1__10982_SHARP_){
return cljs.core.vec.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:td",p1__10982_SHARP_.call(null,row)], true));
}),fields)], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___10983);
return elem__10963__auto__;
});
semtag_web.partials.default_row.prototype._crateGroup = group__10962__auto___10983;
var group__10962__auto___10988 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
semtag_web.partials.generate_rows = (function generate_rows(data,p__10985){
var map__10987 = p__10985;
var map__10987__$1 = ((cljs.core.seq_QMARK_.call(null,map__10987))?cljs.core.apply.call(null,cljs.core.hash_map,map__10987):map__10987);
var row_partial = cljs.core.get.call(null,map__10987__$1,"\uFDD0:row-partial",semtag_web.partials.default_row);
var fields = cljs.core.get.call(null,map__10987__$1,"\uFDD0:fields");
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:tbody",cljs.core.map.call(null,(function (p1__10984_SHARP_){
return row_partial.call(null,p1__10984_SHARP_,fields);
}),data)], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___10988);
return elem__10963__auto__;
});
semtag_web.partials.generate_rows.prototype._crateGroup = group__10962__auto___10988;
var group__10962__auto___10993 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.generate_table = (function() { 
var generate_table__delegate = function (table_id,data,p__10990){
var map__10992 = p__10990;
var map__10992__$1 = ((cljs.core.seq_QMARK_.call(null,map__10992))?cljs.core.apply.call(null,cljs.core.hash_map,map__10992):map__10992);
var options = map__10992__$1;
var fields = cljs.core.get.call(null,map__10992__$1,"\uFDD0:fields");
var elem__10963__auto__ = crate.core.html.call(null,(function (){var headers = (function (){var or__3943__auto__ = (new cljs.core.Keyword("\uFDD0:headers")).call(null,options);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.map.call(null,semtag_web.partials.field_to_header,fields);
}
})();
return cljs.core.PersistentVector.fromArray(["\uFDD0:table",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",table_id,"\uFDD0:class","table table-bordered table-striped"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:caption",(new cljs.core.Keyword("\uFDD0:caption")).call(null,options)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:thead",cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.map.call(null,((function (headers){
return (function (p1__10989_SHARP_){
return cljs.core.vec.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:th",p1__10989_SHARP_], true));
});})(headers))
,headers)], true)], true),semtag_web.partials.generate_rows.call(null,data,options)], true);
})());
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___10993);
return elem__10963__auto__;
};
var generate_table = function (table_id,data,var_args){
var p__10990 = null;
if (arguments.length > 2) {
  p__10990 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return generate_table__delegate.call(this, table_id, data, p__10990);
};
generate_table.cljs$lang$maxFixedArity = 2;
generate_table.cljs$lang$applyTo = (function (arglist__10994){
var table_id = cljs.core.first(arglist__10994);
arglist__10994 = cljs.core.next(arglist__10994);
var data = cljs.core.first(arglist__10994);
var p__10990 = cljs.core.rest(arglist__10994);
return generate_table__delegate(table_id, data, p__10990);
});
generate_table.cljs$core$IFn$_invoke$arity$variadic = generate_table__delegate;
return generate_table;
})()
;
semtag_web.partials.generate_table.prototype._crateGroup = group__10962__auto___10993;
var group__10962__auto___10995 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.table_stats = (function() { 
var table_stats__delegate = function (stats){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:h4#table_stats",cljs.core.map.call(null,(function (stat){
return cljs.core.PersistentVector.fromArray(["\uFDD0:div.ellipsis",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",stat], true),stat], true);
}),stats)], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___10995);
return elem__10963__auto__;
};
var table_stats = function (var_args){
var stats = null;
if (arguments.length > 0) {
  stats = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return table_stats__delegate.call(this, stats);
};
table_stats.cljs$lang$maxFixedArity = 0;
table_stats.cljs$lang$applyTo = (function (arglist__10996){
var stats = cljs.core.seq(arglist__10996);
return table_stats__delegate(stats);
});
table_stats.cljs$core$IFn$_invoke$arity$variadic = table_stats__delegate;
return table_stats;
})()
;
semtag_web.partials.table_stats.prototype._crateGroup = group__10962__auto___10995;
var group__10962__auto___10997 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.tag_search_row = (function() { 
var tag_search_row__delegate = function (row,fields){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-id",(new cljs.core.Keyword("\uFDD0:id")).call(null,row)], true),semtag_web.partials.td_type.call(null,(new cljs.core.Keyword("\uFDD0:type")).call(null,row)),semtag_web.partials.td_name.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,row),(new cljs.core.Keyword("\uFDD0:id")).call(null,row)),semtag_web.partials.td_url.call(null,(new cljs.core.Keyword("\uFDD0:url")).call(null,row)),semtag_web.partials.td_desc.call(null,(new cljs.core.Keyword("\uFDD0:desc")).call(null,row)),semtag_web.partials.td_tags.call(null,(new cljs.core.Keyword("\uFDD0:tags")).call(null,row))], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___10997);
return elem__10963__auto__;
};
var tag_search_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return tag_search_row__delegate.call(this, row, fields);
};
tag_search_row.cljs$lang$maxFixedArity = 1;
tag_search_row.cljs$lang$applyTo = (function (arglist__10998){
var row = cljs.core.first(arglist__10998);
var fields = cljs.core.rest(arglist__10998);
return tag_search_row__delegate(row, fields);
});
tag_search_row.cljs$core$IFn$_invoke$arity$variadic = tag_search_row__delegate;
return tag_search_row;
})()
;
semtag_web.partials.tag_search_row.prototype._crateGroup = group__10962__auto___10997;
var group__10962__auto___11001 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.tag_stats_row = (function() { 
var tag_stats_row__delegate = function (row,fields){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentVector.fromArray(["\uFDD0:td",(function (){var vec__11000 = clojure.string.split.call(null,(new cljs.core.Keyword("\uFDD0:tag")).call(null,row),/=/);
var nsp = cljs.core.nth.call(null,vec__11000,0,null);
var tag = cljs.core.nth.call(null,vec__11000,1,null);
return semtag_web.partials.link_thing.call(null,tag);
})()], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:count")).call(null,row)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:desc")).call(null,row)], true)], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___11001);
return elem__10963__auto__;
};
var tag_stats_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return tag_stats_row__delegate.call(this, row, fields);
};
tag_stats_row.cljs$lang$maxFixedArity = 1;
tag_stats_row.cljs$lang$applyTo = (function (arglist__11002){
var row = cljs.core.first(arglist__11002);
var fields = cljs.core.rest(arglist__11002);
return tag_stats_row__delegate(row, fields);
});
tag_stats_row.cljs$core$IFn$_invoke$arity$variadic = tag_stats_row__delegate;
return tag_stats_row;
})()
;
semtag_web.partials.tag_stats_row.prototype._crateGroup = group__10962__auto___11001;
var group__10962__auto___11003 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.type_stats_row = (function() { 
var type_stats_row__delegate = function (row,fields){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:tr",semtag_web.partials.td_type.call(null,cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,row))),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:count")).call(null,row)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:name-percent")).call(null,row)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:url-percent")).call(null,row)], true)], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___11003);
return elem__10963__auto__;
};
var type_stats_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return type_stats_row__delegate.call(this, row, fields);
};
type_stats_row.cljs$lang$maxFixedArity = 1;
type_stats_row.cljs$lang$applyTo = (function (arglist__11004){
var row = cljs.core.first(arglist__11004);
var fields = cljs.core.rest(arglist__11004);
return type_stats_row__delegate(row, fields);
});
type_stats_row.cljs$core$IFn$_invoke$arity$variadic = type_stats_row__delegate;
return type_stats_row;
})()
;
semtag_web.partials.type_stats_row.prototype._crateGroup = group__10962__auto___11003;
var group__10962__auto___11005 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.type_row = (function() { 
var type_row__delegate = function (row,fields){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-id",(new cljs.core.Keyword("\uFDD0:id")).call(null,row)], true),semtag_web.partials.td_name.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,row),(new cljs.core.Keyword("\uFDD0:id")).call(null,row)),semtag_web.partials.td_url.call(null,(new cljs.core.Keyword("\uFDD0:url")).call(null,row)),semtag_web.partials.td_desc.call(null,(new cljs.core.Keyword("\uFDD0:desc")).call(null,row)),semtag_web.partials.td_tags.call(null,(new cljs.core.Keyword("\uFDD0:tags")).call(null,row)),semtag_web.partials.td_timestamp.call(null,(new cljs.core.Keyword("\uFDD0:created-at")).call(null,row))], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___11005);
return elem__10963__auto__;
};
var type_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return type_row__delegate.call(this, row, fields);
};
type_row.cljs$lang$maxFixedArity = 1;
type_row.cljs$lang$applyTo = (function (arglist__11006){
var row = cljs.core.first(arglist__11006);
var fields = cljs.core.rest(arglist__11006);
return type_row__delegate(row, fields);
});
type_row.cljs$core$IFn$_invoke$arity$variadic = type_row__delegate;
return type_row;
})()
;
semtag_web.partials.type_row.prototype._crateGroup = group__10962__auto___11005;
var group__10962__auto___11007 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.all_row = (function() { 
var all_row__delegate = function (row,fields){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-id",(new cljs.core.Keyword("\uFDD0:id")).call(null,row)], true),semtag_web.partials.td_type.call(null,(new cljs.core.Keyword("\uFDD0:type")).call(null,row)),semtag_web.partials.td_name.call(null,(new cljs.core.Keyword("\uFDD0:name")).call(null,row),(new cljs.core.Keyword("\uFDD0:id")).call(null,row)),semtag_web.partials.td_url.call(null,(new cljs.core.Keyword("\uFDD0:url")).call(null,row)),semtag_web.partials.td_tags.call(null,(new cljs.core.Keyword("\uFDD0:tags")).call(null,row)),semtag_web.partials.td_timestamp.call(null,(new cljs.core.Keyword("\uFDD0:created-at")).call(null,row))], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___11007);
return elem__10963__auto__;
};
var all_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return all_row__delegate.call(this, row, fields);
};
all_row.cljs$lang$maxFixedArity = 1;
all_row.cljs$lang$applyTo = (function (arglist__11008){
var row = cljs.core.first(arglist__11008);
var fields = cljs.core.rest(arglist__11008);
return all_row__delegate(row, fields);
});
all_row.cljs$core$IFn$_invoke$arity$variadic = all_row__delegate;
return all_row;
})()
;
semtag_web.partials.all_row.prototype._crateGroup = group__10962__auto___11007;
var group__10962__auto___11011 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.thing_row = (function() { 
var thing_row__delegate = function (row,fields){
var elem__10963__auto__ = crate.core.html.call(null,(function (){var attr = (new cljs.core.Keyword("\uFDD0:attribute")).call(null,row);
return cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-id",(new cljs.core.Keyword("\uFDD0:id")).call(null,row)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",attr], true),(function (){var G__11010 = attr;
if(cljs.core._EQ_.call(null,"\uFDD0:actions",G__11010))
{return cljs.core.PersistentVector.fromArray(["\uFDD0:td.delete",cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href","#"], true),"Delete"], true)], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:updated-at",G__11010))
{return semtag_web.partials.td_timestamp.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:created-at",G__11010))
{return semtag_web.partials.td_timestamp.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:desc",G__11010))
{return semtag_web.partials.td_desc.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,row),1000);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:tagged",G__11010))
{return cljs.core.PersistentVector.fromArray(["\uFDD0:td",semtag_web.partials.link_tagged.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,row))], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:tags",G__11010))
{return semtag_web.partials.td_tags.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:name",G__11010))
{return semtag_web.partials.td_name.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:url",G__11010))
{return semtag_web.partials.td_url.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:type",G__11010))
{return semtag_web.partials.td_type.call(null,(new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if("\uFDD0:else")
{return cljs.core.PersistentVector.fromArray(["\uFDD0:td",[cljs.core.str((new cljs.core.Keyword("\uFDD0:value")).call(null,row))].join('')], true);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
})()], true);
})());
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___11011);
return elem__10963__auto__;
};
var thing_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return thing_row__delegate.call(this, row, fields);
};
thing_row.cljs$lang$maxFixedArity = 1;
thing_row.cljs$lang$applyTo = (function (arglist__11012){
var row = cljs.core.first(arglist__11012);
var fields = cljs.core.rest(arglist__11012);
return thing_row__delegate(row, fields);
});
thing_row.cljs$core$IFn$_invoke$arity$variadic = thing_row__delegate;
return thing_row;
})()
;
semtag_web.partials.thing_row.prototype._crateGroup = group__10962__auto___11011;
var group__10962__auto___11014 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
semtag_web.partials.generate_datalist = (function generate_datalist(tags){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:datalist#tags",cljs.core.map.call(null,(function (p1__11013_SHARP_){
return cljs.core.vec.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:option",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",p1__11013_SHARP_], true)], true));
}),tags)], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___11014);
return elem__10963__auto__;
});
semtag_web.partials.generate_datalist.prototype._crateGroup = group__10962__auto___11014;
var group__10962__auto___11015 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
semtag_web.partials.alert = (function alert(msg,alert_class){
var elem__10963__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:div",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:class",[cljs.core.str("alert "),cljs.core.str(alert_class)].join('')], true),cljs.core.PersistentVector.fromArray(["\uFDD0:button.close",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","button","\uFDD0:data-dismiss","alert"], true),"x"], true),msg], true));
elem__10963__auto__.setAttribute("crateGroup",group__10962__auto___11015);
return elem__10963__auto__;
});
semtag_web.partials.alert.prototype._crateGroup = group__10962__auto___11015;
