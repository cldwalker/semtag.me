goog.provide('semtag_web.route');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* Maps screens to relative paths
*/
semtag_web.route.routes = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:types","#/types","\uFDD0:tag-stats","#/tag-stats","\uFDD0:all","#/all","\uFDD0:home","#/"], true);
semtag_web.route.dynamic_routes = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:search","#/search","\uFDD0:thing","#/thing"], true);
/**
* Maps screen ids to their url params
*/
semtag_web.route.dynamic_screens = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
semtag_web.route.inv_routes = cljs.core.zipmap.call(null,cljs.core.vals.call(null,semtag_web.route.routes),cljs.core.keys.call(null,semtag_web.route.routes));
semtag_web.route.url_for = (function url_for(screen){
var temp__4090__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,semtag_web.route.dynamic_screens),screen);
if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;
return [cljs.core.str(cljs.core.get.call(null,semtag_web.route.dynamic_routes,cljs.core.keyword.call(null,cljs.core.re_find.call(null,/[a-z]+/,cljs.core.name.call(null,screen))))),cljs.core.str("?"),cljs.core.str(clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__10808_SHARP_){
return [cljs.core.str(cljs.core.name.call(null,cljs.core.key.call(null,p1__10808_SHARP_))),cljs.core.str("="),cljs.core.str(cljs.core.val.call(null,p1__10808_SHARP_))].join('');
}),params)))].join('');
} else
{return cljs.core.get.call(null,semtag_web.route.routes,screen,"");
}
});
semtag_web.route.create_screen_id = (function create_screen_id(seed,params){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,seed)),cljs.core.str("-"),cljs.core.str(clojure.string.join.call(null,"_",cljs.core.map.call(null,(function (p1__10809_SHARP_){
return [cljs.core.str(cljs.core.name.call(null,cljs.core.key.call(null,p1__10809_SHARP_))),cljs.core.str("_"),cljs.core.str(cljs.core.val.call(null,p1__10809_SHARP_))].join('');
}),cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.reduce.call(null,cljs.core.into,params)))))].join(''));
});
semtag_web.route.url__GT_screen = (function() {
var url__GT_screen = null;
var url__GT_screen__1 = (function (url){
return url__GT_screen.call(null,url,cljs.core.PersistentArrayMap.EMPTY);
});
var url__GT_screen__2 = (function (url,params){
var or__3943__auto__ = cljs.core.get.call(null,semtag_web.route.inv_routes,url);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var temp__4092__auto__ = cljs.core.some.call(null,(function (p__10812){
var vec__10813 = p__10812;
var screen = cljs.core.nth.call(null,vec__10813,0,null);
var v = cljs.core.nth.call(null,vec__10813,1,null);
if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,v),url)))
{return screen;
} else
{return null;
}
}),semtag_web.route.dynamic_routes);
if(cljs.core.truth_(temp__4092__auto__))
{var seed = temp__4092__auto__;
return semtag_web.route.create_screen_id.call(null,seed,params);
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
