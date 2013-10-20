goog.provide('semtag_web.partials');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('crate.core');
semtag_web.partials.field_to_header = (function field_to_header(field){
return clojure.string.capitalize(clojure.string.replace(cljs.core.name(field),"-"," "));
});
semtag_web.partials.shorten_to = (function shorten_to(s,max_length){
var s_length = cljs.core.count(s);
if((s_length > max_length))
{return [cljs.core.str(s.substring(0,(max_length - 3))),cljs.core.str("...")].join('');
} else
{return s;
}
});
semtag_web.partials.abbreviate_url = (function abbreviate_url(url){
return clojure.string.replace_first(clojure.string.replace_first(url,/^https?:\/\/(www\.)?/,""),/\/$/,"");
});
/**
* Concats string currently. Should construct paths based on routes and properly encode queries.
* @param {...*} var_args
*/
semtag_web.partials.path_to = (function() { 
var path_to__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
};
var path_to = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return path_to__delegate.call(this, args);
};
path_to.cljs$lang$maxFixedArity = 0;
path_to.cljs$lang$applyTo = (function (arglist__154698){
var args = cljs.core.seq(arglist__154698);
return path_to__delegate(args);
});
path_to.cljs$core$IFn$_invoke$arity$variadic = path_to__delegate;
return path_to;
})()
;
semtag_web.partials.link_thing = (function() {
var link_thing = null;
var link_thing__1 = (function (unique_id){
return link_thing.cljs$core$IFn$_invoke$arity$2(unique_id,unique_id);
});
var link_thing__2 = (function (unique_id,text){
return link_thing.cljs$core$IFn$_invoke$arity$3(unique_id,text,cljs.core.PersistentArrayMap.EMPTY);
});
var link_thing__3 = (function (unique_id,text,attr){
return cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href",semtag_web.partials.path_to.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["#/thing/",unique_id], 0))], true),attr], 0)),text], true);
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
return cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href",semtag_web.partials.path_to.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["#/search?query=",tag], 0))], true),[cljs.core.str("Tagged with "),cljs.core.str(tag)].join('')], true);
});
semtag_web.partials.td_url = (function td_url(url){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-field","url","\uFDD0:title",url], true),cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href",url], true),semtag_web.partials.shorten_to((cljs.core.truth_(url)?semtag_web.partials.abbreviate_url(url):url),40)], true)], true);
});
semtag_web.partials.td_name = (function() {
var td_name = null;
var td_name__1 = (function (s){
return td_name.cljs$core$IFn$_invoke$arity$2(s,null);
});
var td_name__2 = (function (s,id){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-field","name","\uFDD0:title",s], true),((cljs.core.seq(s))?semtag_web.partials.link_thing.cljs$core$IFn$_invoke$arity$1(s):(cljs.core.truth_(id)?semtag_web.partials.link_thing.cljs$core$IFn$_invoke$arity$3(id,"nil",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:class","noname","\uFDD0:title","This thing has no name. Feel free to give it one."], true)):s))], true);
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
return td_desc.cljs$core$IFn$_invoke$arity$2(desc,70);
});
var td_desc__2 = (function (desc,max_length){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.ellipsis.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",desc,"\uFDD0:data-field","desc"], true),semtag_web.partials.shorten_to(desc,max_length)], true);
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
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",tags),"\uFDD0:data-field","tags"], true),cljs.core.interpose(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(semtag_web.partials.link_thing,tags))], true);
});
semtag_web.partials.td_type = (function td_type(type){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.editable",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",type,"\uFDD0:data-field","type"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href",semtag_web.partials.path_to.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["#/type/",type], 0))], true),type], true)], true);
});
semtag_web.partials.td_timestamp = (function td_timestamp(datetime){
return cljs.core.PersistentVector.fromArray(["\uFDD0:td.timestamp",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",(cljs.core.truth_(datetime)?datetime.toISOString():"")], true),(cljs.core.truth_(datetime)?[cljs.core.str(datetime.toLocaleDateString())].join(''):null)], true);
});
var group__11254__auto___154700 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
semtag_web.partials.default_row = (function default_row(row,fields){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__154699_SHARP_){
return cljs.core.vec(cljs.core.PersistentVector.fromArray(["\uFDD0:td",(p1__154699_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__154699_SHARP_.cljs$core$IFn$_invoke$arity$1(row) : p1__154699_SHARP_.call(null,row))], true));
}),fields)], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154700);
return elem__11255__auto__;
});
semtag_web.partials.default_row.prototype._crateGroup = group__11254__auto___154700;
var group__11254__auto___154705 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
semtag_web.partials.generate_rows = (function generate_rows(data,p__154702){
var map__154704 = p__154702;
var map__154704__$1 = ((cljs.core.seq_QMARK_(map__154704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154704):map__154704);
var row_partial = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__154704__$1,"\uFDD0:row-partial",semtag_web.partials.default_row);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154704__$1,"\uFDD0:fields");
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:tbody",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__154701_SHARP_){
return (row_partial.cljs$core$IFn$_invoke$arity$2 ? row_partial.cljs$core$IFn$_invoke$arity$2(p1__154701_SHARP_,fields) : row_partial.call(null,p1__154701_SHARP_,fields));
}),data)], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154705);
return elem__11255__auto__;
});
semtag_web.partials.generate_rows.prototype._crateGroup = group__11254__auto___154705;
var group__11254__auto___154710 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.generate_table = (function() { 
var generate_table__delegate = function (table_id,data,p__154707){
var map__154709 = p__154707;
var map__154709__$1 = ((cljs.core.seq_QMARK_(map__154709))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154709):map__154709);
var options = map__154709__$1;
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154709__$1,"\uFDD0:fields");
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var headers = (function (){var or__3943__auto__ = (new cljs.core.Keyword("\uFDD0:headers")).call(null,options);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(semtag_web.partials.field_to_header,fields);
}
})();
return cljs.core.PersistentVector.fromArray(["\uFDD0:table",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",table_id,"\uFDD0:class","table table-bordered table-striped"], true),cljs.core.PersistentVector.fromArray(["\uFDD0:caption",(new cljs.core.Keyword("\uFDD0:caption")).call(null,options)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:thead",cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (headers){
return (function (p1__154706_SHARP_){
return cljs.core.vec(cljs.core.PersistentVector.fromArray(["\uFDD0:th",p1__154706_SHARP_], true));
});})(headers))
,headers)], true)], true),semtag_web.partials.generate_rows(data,options)], true);
})()], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154710);
return elem__11255__auto__;
};
var generate_table = function (table_id,data,var_args){
var p__154707 = null;
if (arguments.length > 2) {
  p__154707 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return generate_table__delegate.call(this, table_id, data, p__154707);
};
generate_table.cljs$lang$maxFixedArity = 2;
generate_table.cljs$lang$applyTo = (function (arglist__154711){
var table_id = cljs.core.first(arglist__154711);
arglist__154711 = cljs.core.next(arglist__154711);
var data = cljs.core.first(arglist__154711);
var p__154707 = cljs.core.rest(arglist__154711);
return generate_table__delegate(table_id, data, p__154707);
});
generate_table.cljs$core$IFn$_invoke$arity$variadic = generate_table__delegate;
return generate_table;
})()
;
semtag_web.partials.generate_table.prototype._crateGroup = group__11254__auto___154710;
var group__11254__auto___154712 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.table_stats = (function() { 
var table_stats__delegate = function (stats){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:h4#table_stats",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (stat){
return cljs.core.PersistentVector.fromArray(["\uFDD0:div.ellipsis",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:title",stat], true),stat], true);
}),stats)], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154712);
return elem__11255__auto__;
};
var table_stats = function (var_args){
var stats = null;
if (arguments.length > 0) {
  stats = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return table_stats__delegate.call(this, stats);
};
table_stats.cljs$lang$maxFixedArity = 0;
table_stats.cljs$lang$applyTo = (function (arglist__154713){
var stats = cljs.core.seq(arglist__154713);
return table_stats__delegate(stats);
});
table_stats.cljs$core$IFn$_invoke$arity$variadic = table_stats__delegate;
return table_stats;
})()
;
semtag_web.partials.table_stats.prototype._crateGroup = group__11254__auto___154712;
var group__11254__auto___154714 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.tag_search_row = (function() { 
var tag_search_row__delegate = function (row,fields){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-id",(new cljs.core.Keyword("\uFDD0:id")).call(null,row)], true),semtag_web.partials.td_type((new cljs.core.Keyword("\uFDD0:type")).call(null,row)),semtag_web.partials.td_name.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:name")).call(null,row),(new cljs.core.Keyword("\uFDD0:id")).call(null,row)),semtag_web.partials.td_url((new cljs.core.Keyword("\uFDD0:url")).call(null,row)),semtag_web.partials.td_desc.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword("\uFDD0:desc")).call(null,row)),semtag_web.partials.td_tags((new cljs.core.Keyword("\uFDD0:tags")).call(null,row))], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154714);
return elem__11255__auto__;
};
var tag_search_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return tag_search_row__delegate.call(this, row, fields);
};
tag_search_row.cljs$lang$maxFixedArity = 1;
tag_search_row.cljs$lang$applyTo = (function (arglist__154715){
var row = cljs.core.first(arglist__154715);
var fields = cljs.core.rest(arglist__154715);
return tag_search_row__delegate(row, fields);
});
tag_search_row.cljs$core$IFn$_invoke$arity$variadic = tag_search_row__delegate;
return tag_search_row;
})()
;
semtag_web.partials.tag_search_row.prototype._crateGroup = group__11254__auto___154714;
var group__11254__auto___154718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.tag_stats_row = (function() { 
var tag_stats_row__delegate = function (row,fields){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentVector.fromArray(["\uFDD0:td",(function (){var vec__154717 = clojure.string.split.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:tag")).call(null,row),/=/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154717,0,null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154717,1,null);
return semtag_web.partials.link_thing.cljs$core$IFn$_invoke$arity$1(tag);
})()], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:count")).call(null,row)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:desc")).call(null,row)], true)], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154718);
return elem__11255__auto__;
};
var tag_stats_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return tag_stats_row__delegate.call(this, row, fields);
};
tag_stats_row.cljs$lang$maxFixedArity = 1;
tag_stats_row.cljs$lang$applyTo = (function (arglist__154719){
var row = cljs.core.first(arglist__154719);
var fields = cljs.core.rest(arglist__154719);
return tag_stats_row__delegate(row, fields);
});
tag_stats_row.cljs$core$IFn$_invoke$arity$variadic = tag_stats_row__delegate;
return tag_stats_row;
})()
;
semtag_web.partials.tag_stats_row.prototype._crateGroup = group__11254__auto___154718;
var group__11254__auto___154720 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.type_stats_row = (function() { 
var type_stats_row__delegate = function (row,fields){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:tr",semtag_web.partials.td_type(cljs.core.name((new cljs.core.Keyword("\uFDD0:name")).call(null,row))),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:count")).call(null,row)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:name-percent")).call(null,row)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",(new cljs.core.Keyword("\uFDD0:url-percent")).call(null,row)], true)], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154720);
return elem__11255__auto__;
};
var type_stats_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return type_stats_row__delegate.call(this, row, fields);
};
type_stats_row.cljs$lang$maxFixedArity = 1;
type_stats_row.cljs$lang$applyTo = (function (arglist__154721){
var row = cljs.core.first(arglist__154721);
var fields = cljs.core.rest(arglist__154721);
return type_stats_row__delegate(row, fields);
});
type_stats_row.cljs$core$IFn$_invoke$arity$variadic = type_stats_row__delegate;
return type_stats_row;
})()
;
semtag_web.partials.type_stats_row.prototype._crateGroup = group__11254__auto___154720;
var group__11254__auto___154722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.type_row = (function() { 
var type_row__delegate = function (row,fields){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-id",(new cljs.core.Keyword("\uFDD0:id")).call(null,row)], true),semtag_web.partials.td_name.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:name")).call(null,row),(new cljs.core.Keyword("\uFDD0:id")).call(null,row)),semtag_web.partials.td_url((new cljs.core.Keyword("\uFDD0:url")).call(null,row)),semtag_web.partials.td_desc.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword("\uFDD0:desc")).call(null,row)),semtag_web.partials.td_tags((new cljs.core.Keyword("\uFDD0:tags")).call(null,row)),semtag_web.partials.td_timestamp((new cljs.core.Keyword("\uFDD0:created-at")).call(null,row))], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154722);
return elem__11255__auto__;
};
var type_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return type_row__delegate.call(this, row, fields);
};
type_row.cljs$lang$maxFixedArity = 1;
type_row.cljs$lang$applyTo = (function (arglist__154723){
var row = cljs.core.first(arglist__154723);
var fields = cljs.core.rest(arglist__154723);
return type_row__delegate(row, fields);
});
type_row.cljs$core$IFn$_invoke$arity$variadic = type_row__delegate;
return type_row;
})()
;
semtag_web.partials.type_row.prototype._crateGroup = group__11254__auto___154722;
var group__11254__auto___154724 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.all_row = (function() { 
var all_row__delegate = function (row,fields){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-id",(new cljs.core.Keyword("\uFDD0:id")).call(null,row)], true),semtag_web.partials.td_type((new cljs.core.Keyword("\uFDD0:type")).call(null,row)),semtag_web.partials.td_name.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:name")).call(null,row),(new cljs.core.Keyword("\uFDD0:id")).call(null,row)),semtag_web.partials.td_url((new cljs.core.Keyword("\uFDD0:url")).call(null,row)),semtag_web.partials.td_tags((new cljs.core.Keyword("\uFDD0:tags")).call(null,row)),semtag_web.partials.td_timestamp((new cljs.core.Keyword("\uFDD0:created-at")).call(null,row))], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154724);
return elem__11255__auto__;
};
var all_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return all_row__delegate.call(this, row, fields);
};
all_row.cljs$lang$maxFixedArity = 1;
all_row.cljs$lang$applyTo = (function (arglist__154725){
var row = cljs.core.first(arglist__154725);
var fields = cljs.core.rest(arglist__154725);
return all_row__delegate(row, fields);
});
all_row.cljs$core$IFn$_invoke$arity$variadic = all_row__delegate;
return all_row;
})()
;
semtag_web.partials.all_row.prototype._crateGroup = group__11254__auto___154724;
var group__11254__auto___154728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
semtag_web.partials.thing_row = (function() { 
var thing_row__delegate = function (row,fields){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var attr = (new cljs.core.Keyword("\uFDD0:attribute")).call(null,row);
return cljs.core.PersistentVector.fromArray(["\uFDD0:tr",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:data-id",(new cljs.core.Keyword("\uFDD0:id")).call(null,row)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:td",attr], true),(function (){var G__154727 = attr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:actions",G__154727))
{return cljs.core.PersistentVector.fromArray(["\uFDD0:td.delete",cljs.core.PersistentVector.fromArray(["\uFDD0:a",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:href","#"], true),"Delete"], true)], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:updated-at",G__154727))
{return semtag_web.partials.td_timestamp((new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:created-at",G__154727))
{return semtag_web.partials.td_timestamp((new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:desc",G__154727))
{return semtag_web.partials.td_desc.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:value")).call(null,row),1000);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:tagged",G__154727))
{return cljs.core.PersistentVector.fromArray(["\uFDD0:td",semtag_web.partials.link_tagged((new cljs.core.Keyword("\uFDD0:value")).call(null,row))], true);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:tags",G__154727))
{return semtag_web.partials.td_tags((new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:name",G__154727))
{return semtag_web.partials.td_name.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:url",G__154727))
{return semtag_web.partials.td_url((new cljs.core.Keyword("\uFDD0:value")).call(null,row));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:type",G__154727))
{return semtag_web.partials.td_type((new cljs.core.Keyword("\uFDD0:value")).call(null,row));
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
})()], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154728);
return elem__11255__auto__;
};
var thing_row = function (row,var_args){
var fields = null;
if (arguments.length > 1) {
  fields = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return thing_row__delegate.call(this, row, fields);
};
thing_row.cljs$lang$maxFixedArity = 1;
thing_row.cljs$lang$applyTo = (function (arglist__154729){
var row = cljs.core.first(arglist__154729);
var fields = cljs.core.rest(arglist__154729);
return thing_row__delegate(row, fields);
});
thing_row.cljs$core$IFn$_invoke$arity$variadic = thing_row__delegate;
return thing_row;
})()
;
semtag_web.partials.thing_row.prototype._crateGroup = group__11254__auto___154728;
var group__11254__auto___154731 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
semtag_web.partials.generate_datalist = (function generate_datalist(tags){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:datalist#tags",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__154730_SHARP_){
return cljs.core.vec(cljs.core.PersistentVector.fromArray(["\uFDD0:option",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",p1__154730_SHARP_], true)], true));
}),tags)], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154731);
return elem__11255__auto__;
});
semtag_web.partials.generate_datalist.prototype._crateGroup = group__11254__auto___154731;
var group__11254__auto___154732 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crate.core.group_id,cljs.core.inc);
semtag_web.partials.alert = (function alert(msg,alert_class){
var elem__11255__auto__ = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.fromArray(["\uFDD0:div",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:class",[cljs.core.str("alert "),cljs.core.str(alert_class)].join('')], true),cljs.core.PersistentVector.fromArray(["\uFDD0:button.close",cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","button","\uFDD0:data-dismiss","alert"], true),"x"], true),msg], true)], 0));
elem__11255__auto__.setAttribute("crateGroup",group__11254__auto___154732);
return elem__11255__auto__;
});
semtag_web.partials.alert.prototype._crateGroup = group__11254__auto___154732;
