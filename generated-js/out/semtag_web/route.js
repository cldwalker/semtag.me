goog.provide('semtag_web.route');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* Maps screens to relative paths
*/
semtag_web.route.routes = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:types","#/types","\uFDD0:tag-stats","#/tag-stats","\uFDD0:all","#/all","\uFDD0:home","#/"], true);
/**
* Maps routes to relative paths
*/
semtag_web.route.dynamic_routes = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:search","#/search","\uFDD0:thing","#/thing/:id","\uFDD0:type","#/type/:name"], true);
/**
* Maps screen ids to their url params
*/
semtag_web.route.dynamic_screens = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
semtag_web.route.inv_routes = cljs.core.zipmap(cljs.core.vals(semtag_web.route.routes),cljs.core.keys(semtag_web.route.routes));
/**
* Returns route name from a screen. Returns nil if invalid screen
*/
semtag_web.route.screen__GT_route = (function screen__GT_route(screen){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/^[^-]+/,cljs.core.name(screen)));
});
semtag_web.route.dynamic_screen__GT_route = (function dynamic_screen__GT_route(screen){
var route = semtag_web.route.screen__GT_route(screen);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(semtag_web.route.dynamic_routes,route)))
{return route;
} else
{return null;
}
});
semtag_web.route.url_for = (function url_for(screen){
var temp__4090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(semtag_web.route.dynamic_screens),screen);
if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(semtag_web.route.dynamic_routes,semtag_web.route.screen__GT_route(screen));
if(cljs.core.truth_(cljs.core.re_find(/:/,path)))
{return clojure.string.replace(path,/:\w+/,(function (x){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,1)));
}));
} else
{return [cljs.core.str(path),cljs.core.str("?"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__154545_SHARP_){
return [cljs.core.str(cljs.core.name(cljs.core.key(p1__154545_SHARP_))),cljs.core.str("="),cljs.core.str(cljs.core.val(p1__154545_SHARP_))].join('');
}),params)))].join('');
}
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(semtag_web.route.routes,screen,"");
}
});
semtag_web.route.create_screen_id = (function create_screen_id(seed,params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.name(seed)),cljs.core.str("-"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__154546_SHARP_){
return [cljs.core.str(cljs.core.name(cljs.core.key(p1__154546_SHARP_))),cljs.core.str("_"),cljs.core.str(cljs.core.val(p1__154546_SHARP_))].join('');
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,params)))))].join(''));
});
semtag_web.route.params_from_url = (function params_from_url(dynamic_screen,url){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__154549){
var vec__154550 = p__154549;
var route_piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154550,0,null);
var url_piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154550,1,null);
var temp__4090__auto__ = cljs.core.second(cljs.core.re_find(/:(.*)/,route_piece));
if(cljs.core.truth_(temp__4090__auto__))
{var keyword_piece = temp__4090__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accum,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(keyword_piece),url_piece);
} else
{return accum;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.zipmap(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(semtag_web.route.dynamic_routes,dynamic_screen),/\//),clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\//)));
});
semtag_web.route.params_from_query = (function params_from_query(url){
var temp__4092__auto__ = cljs.core.second(cljs.core.re_find(/\?(.*)/,url));
if(cljs.core.truth_(temp__4092__auto__))
{var params_string = temp__4092__auto__;
var vals = (function (){var pairs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(params_string,/\&/);
var pairs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pairs){
return (function (p1__154551_SHARP_){
var vec__154553 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__154551_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154553,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154553,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], true);
});})(pairs))
,pairs);
return pairs__$1;
})();
var vals__$1 = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,vals);
return vals__$1;
} else
{return null;
}
});
/**
* Finds a dynamic route e.g. :thing for a given url
*/
semtag_web.route.find_dynamic_route = (function find_dynamic_route(url){
return cljs.core.some((function (p__154557){
var vec__154558 = p__154557;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154558,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154558,1,null);
if(cljs.core.truth_((function (){var G__154559 = cljs.core.re_find(/[^:]+/,path);
var G__154559__$1 = (((G__154559 == null))?null:cljs.core.re_pattern(G__154559));
var G__154559__$2 = (((G__154559__$1 == null))?null:cljs.core.re_find(G__154559__$1,url));
return G__154559__$2;
})()))
{return route;
} else
{return null;
}
}),semtag_web.route.dynamic_routes);
});
/**
* Parses param from url if it matches a route with a keyword segment.
* Otherwise parses param from query string
*/
semtag_web.route.parse_params = (function parse_params(url){
var temp__4092__auto__ = semtag_web.route.find_dynamic_route(url);
if(cljs.core.truth_(temp__4092__auto__))
{var route = temp__4092__auto__;
if(cljs.core.truth_(cljs.core.re_find(/:/,(route.cljs$core$IFn$_invoke$arity$1 ? route.cljs$core$IFn$_invoke$arity$1(semtag_web.route.dynamic_routes) : route.call(null,semtag_web.route.dynamic_routes)))))
{return semtag_web.route.params_from_url(route,url);
} else
{return semtag_web.route.params_from_query(url);
}
} else
{return null;
}
});
semtag_web.route.url__GT_screen = (function() {
var url__GT_screen = null;
var url__GT_screen__1 = (function (url){
return url__GT_screen.cljs$core$IFn$_invoke$arity$2(url,null);
});
var url__GT_screen__2 = (function (url,params){
var or__3943__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(semtag_web.route.inv_routes,url);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var temp__4092__auto__ = semtag_web.route.find_dynamic_route(url);
if(cljs.core.truth_(temp__4092__auto__))
{var seed = temp__4092__auto__;
return semtag_web.route.create_screen_id(seed,(function (){var or__3943__auto____$1 = params;
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return semtag_web.route.parse_params(url);
}
})());
} else
{return null;
}
}
});
url__GT_screen = function(url,params){
switch(arguments.length){
case 1:
return url__GT_screen__1.call(this,url);
case 2:
return url__GT_screen__2.call(this,url,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url__GT_screen.cljs$core$IFn$_invoke$arity$1 = url__GT_screen__1;
url__GT_screen.cljs$core$IFn$_invoke$arity$2 = url__GT_screen__2;
return url__GT_screen;
})()
;
