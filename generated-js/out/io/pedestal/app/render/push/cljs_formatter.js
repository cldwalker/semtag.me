goog.provide('io.pedestal.app.render.push.cljs_formatter');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom.classes');
goog.require('goog.color');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('domina.xpath');
goog.require('domina');
io.pedestal.app.render.push.cljs_formatter.span = (function span(class$,body){
return [cljs.core.str("<span class='"),cljs.core.str(class$),cljs.core.str("'>"),cljs.core.str(body),cljs.core.str("</span>")].join('');
});
io.pedestal.app.render.push.cljs_formatter.literal = (function literal(class$,x){
return io.pedestal.app.render.push.cljs_formatter.span(class$,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)));
});
io.pedestal.app.render.push.cljs_formatter.join = (function join(separator,coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.render.push.cljs_formatter.span("separator",separator),cljs.core.map.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.render.push.cljs_formatter.html,coll));
});
io.pedestal.app.render.push.cljs_formatter.html_collection = (function html_collection(class$,opener,closer,coll){
return io.pedestal.app.render.push.cljs_formatter.span([cljs.core.str("collection "),cljs.core.str(class$)].join(''),[cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("opener",opener)),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("contents",io.pedestal.app.render.push.cljs_formatter.join(" ",coll))),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("closer",closer))].join(''));
});
io.pedestal.app.render.push.cljs_formatter.html_keyval = (function html_keyval(p__13221){
var vec__13223 = p__13221;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13223,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13223,1,null);
return io.pedestal.app.render.push.cljs_formatter.span("keyval",[cljs.core.str((io.pedestal.app.render.push.cljs_formatter.html.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.render.push.cljs_formatter.html.cljs$core$IFn$_invoke$arity$1(k) : io.pedestal.app.render.push.cljs_formatter.html.call(null,k))),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("separator"," ")),cljs.core.str((io.pedestal.app.render.push.cljs_formatter.html.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.render.push.cljs_formatter.html.cljs$core$IFn$_invoke$arity$1(v) : io.pedestal.app.render.push.cljs_formatter.html.call(null,v)))].join(''));
});
io.pedestal.app.render.push.cljs_formatter.html_keyvals = (function html_keyvals(coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.render.push.cljs_formatter.span("separator",", "),cljs.core.map.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.render.push.cljs_formatter.html_keyval,coll));
});
io.pedestal.app.render.push.cljs_formatter.html_map = (function html_map(coll){
return io.pedestal.app.render.push.cljs_formatter.span("collection map",[cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("opener","{")),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("contents",io.pedestal.app.render.push.cljs_formatter.html_keyvals(coll))),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("closer","}"))].join(''));
});
io.pedestal.app.render.push.cljs_formatter.html_string = (function html_string(s){
return io.pedestal.app.render.push.cljs_formatter.span("string",[cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("opener","\"")),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("contents",s)),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span("closer","\""))].join(''));
});
io.pedestal.app.render.push.cljs_formatter.html = (function html(x){
if(typeof x === 'number')
{return io.pedestal.app.render.push.cljs_formatter.literal("number",x);
} else
{if(cljs.core.keyword_QMARK_(x))
{return io.pedestal.app.render.push.cljs_formatter.literal("keyword",x);
} else
{if((x instanceof cljs.core.Symbol))
{return io.pedestal.app.render.push.cljs_formatter.literal("symbol",x);
} else
{if(cljs.core.string_QMARK_(x))
{return io.pedestal.app.render.push.cljs_formatter.html_string(x);
} else
{if(cljs.core.map_QMARK_(x))
{return io.pedestal.app.render.push.cljs_formatter.html_map(x);
} else
{if(cljs.core.set_QMARK_(x))
{return io.pedestal.app.render.push.cljs_formatter.html_collection("set","#{","}",x);
} else
{if(cljs.core.vector_QMARK_(x))
{return io.pedestal.app.render.push.cljs_formatter.html_collection("vector","[","]",x);
} else
{if(cljs.core.seq_QMARK_(x))
{return io.pedestal.app.render.push.cljs_formatter.html_collection("seq","(",")",x);
} else
{if("\uFDD0:else")
{return io.pedestal.app.render.push.cljs_formatter.literal("literal",x);
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
});
io.pedestal.app.render.push.cljs_formatter.overflow_QMARK_ = (function overflow_QMARK_(child,parent){
var parent_box = goog.style.getBounds(parent).toBox();
var child_box = goog.style.getBounds(child).toBox();
return (parent_box.right < child_box.right);
});
io.pedestal.app.render.push.cljs_formatter.max_inline_width = (function max_inline_width(elem,container){
var child = domina.single_node(elem);
var parent = domina.single_node(elem).parentNode;
var container_node = domina.single_node(container);
var left_bound = goog.style.getBounds(child).toBox().left;
var parent_right_bound = goog.style.getBounds(parent).toBox().right;
var container_right_bound = goog.style.getBounds(container_node).toBox().right;
return ((function (){var x__9249__auto__ = parent_right_bound;
var y__9250__auto__ = container_right_bound;
return ((x__9249__auto__ < y__9250__auto__) ? x__9249__auto__ : y__9250__auto__);
})() - left_bound);
});
io.pedestal.app.render.push.cljs_formatter.width = (function width(elem){
return goog.style.getBounds(domina.single_node(elem)).width;
});
io.pedestal.app.render.push.cljs_formatter.initial_arrange_state = cljs.core.cycle(cljs.core.PersistentVector.fromArray(["#e6f3f7","#f2ffff","#e5f2ff","#ebf7f4","#e5fff1"], true));
io.pedestal.app.render.push.cljs_formatter.color = cljs.core.first;
io.pedestal.app.render.push.cljs_formatter.next_state = cljs.core.rest;
io.pedestal.app.render.push.cljs_formatter.arrange_keyval_BANG_ = (function arrange_keyval_BANG_(state,elem,container){
var vec__13225 = domina.children(elem);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13225,0,null);
var separator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13225,1,null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13225,2,null);
(io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.cljs$core$IFn$_invoke$arity$3(state,key,container) : io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,state,key,container));
(io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.cljs$core$IFn$_invoke$arity$3(state,val,container) : io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,state,val,container));
if(cljs.core.truth_(io.pedestal.app.render.push.cljs_formatter.overflow_QMARK_(elem,container)))
{domina.set_styles_BANG_(separator,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","none"], true));
domina.set_styles_BANG_(key,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","block"], true));
return domina.set_styles_BANG_(val,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","block","\uFDD0:margin-left","1em"], true));
} else
{return null;
}
});
io.pedestal.app.render.push.cljs_formatter.collection_styles = cljs.core.PersistentHashMap.fromArrays(["\uFDD0:border-top-left-radius","\uFDD0:margin-bottom","\uFDD0:padding-left","\uFDD0:display","\uFDD0:border-top-right-radius","\uFDD0:border-bottom-left-radius","\uFDD0:padding-right","\uFDD0:color","\uFDD0:padding-bottom","\uFDD0:border-bottom-right-radius","\uFDD0:padding-top"],["5px","1ex","2px","inline-block","10px","10px","2px","black","2px","5px","1px"]);
io.pedestal.app.render.push.cljs_formatter.arrange_collection_BANG_ = (function arrange_collection_BANG_(state,elem,container){
domina.add_class_BANG_(elem,"arranged");
domina.set_styles_BANG_(elem,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([io.pedestal.app.render.push.cljs_formatter.collection_styles,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:background-color",(io.pedestal.app.render.push.cljs_formatter.color.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.render.push.cljs_formatter.color.cljs$core$IFn$_invoke$arity$1(state) : io.pedestal.app.render.push.cljs_formatter.color.call(null,state))], true)], 0)));
var vec__13231 = domina.children(elem);
var opener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,0,null);
var contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,1,null);
var closer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,2,null);
domina.set_styles_BANG_(opener,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","inline","\uFDD0:vertical-align","top"], true));
domina.set_styles_BANG_(closer,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","inline","\uFDD0:vertical-align","bottom"], true));
domina.set_styles_BANG_(contents,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","inline-block","\uFDD0:vertical-align","top"], true));
var seq__13232_13236 = cljs.core.seq(domina.children(contents));
var chunk__13233_13237 = null;
var count__13234_13238 = 0;
var i__13235_13239 = 0;
while(true){
if((i__13235_13239 < count__13234_13238))
{var child_13240 = chunk__13233_13237.cljs$core$IIndexed$_nth$arity$2(chunk__13233_13237,i__13235_13239);
if(cljs.core.truth_(domina.has_class_QMARK_(child_13240,"separator")))
{domina.set_styles_BANG_(child_13240,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","none"], true));
} else
{(io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.cljs$core$IFn$_invoke$arity$3((io.pedestal.app.render.push.cljs_formatter.next_state.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.render.push.cljs_formatter.next_state.cljs$core$IFn$_invoke$arity$1(state) : io.pedestal.app.render.push.cljs_formatter.next_state.call(null,state)),child_13240,container) : io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,(io.pedestal.app.render.push.cljs_formatter.next_state.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.render.push.cljs_formatter.next_state.cljs$core$IFn$_invoke$arity$1(state) : io.pedestal.app.render.push.cljs_formatter.next_state.call(null,state)),child_13240,container));
domina.set_styles_BANG_(child_13240,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","block"], true));
}
{
var G__13241 = seq__13232_13236;
var G__13242 = chunk__13233_13237;
var G__13243 = count__13234_13238;
var G__13244 = (i__13235_13239 + 1);
seq__13232_13236 = G__13241;
chunk__13233_13237 = G__13242;
count__13234_13238 = G__13243;
i__13235_13239 = G__13244;
continue;
}
} else
{var temp__4092__auto___13245 = cljs.core.seq(seq__13232_13236);
if(temp__4092__auto___13245)
{var seq__13232_13246__$1 = temp__4092__auto___13245;
if(cljs.core.chunked_seq_QMARK_(seq__13232_13246__$1))
{var c__9646__auto___13247 = cljs.core.chunk_first(seq__13232_13246__$1);
{
var G__13248 = cljs.core.chunk_rest(seq__13232_13246__$1);
var G__13249 = c__9646__auto___13247;
var G__13250 = cljs.core.count(c__9646__auto___13247);
var G__13251 = 0;
seq__13232_13236 = G__13248;
chunk__13233_13237 = G__13249;
count__13234_13238 = G__13250;
i__13235_13239 = G__13251;
continue;
}
} else
{var child_13252 = cljs.core.first(seq__13232_13246__$1);
if(cljs.core.truth_(domina.has_class_QMARK_(child_13252,"separator")))
{domina.set_styles_BANG_(child_13252,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","none"], true));
} else
{(io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.cljs$core$IFn$_invoke$arity$3 ? io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.cljs$core$IFn$_invoke$arity$3((io.pedestal.app.render.push.cljs_formatter.next_state.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.render.push.cljs_formatter.next_state.cljs$core$IFn$_invoke$arity$1(state) : io.pedestal.app.render.push.cljs_formatter.next_state.call(null,state)),child_13252,container) : io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,(io.pedestal.app.render.push.cljs_formatter.next_state.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.render.push.cljs_formatter.next_state.cljs$core$IFn$_invoke$arity$1(state) : io.pedestal.app.render.push.cljs_formatter.next_state.call(null,state)),child_13252,container));
domina.set_styles_BANG_(child_13252,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","block"], true));
}
{
var G__13253 = cljs.core.next(seq__13232_13246__$1);
var G__13254 = null;
var G__13255 = 0;
var G__13256 = 0;
seq__13232_13236 = G__13253;
chunk__13233_13237 = G__13254;
count__13234_13238 = G__13255;
i__13235_13239 = G__13256;
continue;
}
}
} else
{}
}
break;
}
return domina.set_styles_BANG_(elem,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:width",[cljs.core.str(((io.pedestal.app.render.push.cljs_formatter.width(contents) + io.pedestal.app.render.push.cljs_formatter.width(opener)) + io.pedestal.app.render.push.cljs_formatter.width(closer))),cljs.core.str("px")].join('')], true));
});
io.pedestal.app.render.push.cljs_formatter.remove_all_styles_BANG_ = (function remove_all_styles_BANG_(elem){
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,"\uFDD0:style",cljs.core.array_seq([""], 0));
domina.remove_class_BANG_(elem,"arranged");
var seq__13261 = cljs.core.seq(domina.children(elem));
var chunk__13262 = null;
var count__13263 = 0;
var i__13264 = 0;
while(true){
if((i__13264 < count__13263))
{var child = chunk__13262.cljs$core$IIndexed$_nth$arity$2(chunk__13262,i__13264);
remove_all_styles_BANG_(child);
{
var G__13265 = seq__13261;
var G__13266 = chunk__13262;
var G__13267 = count__13263;
var G__13268 = (i__13264 + 1);
seq__13261 = G__13265;
chunk__13262 = G__13266;
count__13263 = G__13267;
i__13264 = G__13268;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13261);
if(temp__4092__auto__)
{var seq__13261__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13261__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13261__$1);
{
var G__13269 = cljs.core.chunk_rest(seq__13261__$1);
var G__13270 = c__9646__auto__;
var G__13271 = cljs.core.count(c__9646__auto__);
var G__13272 = 0;
seq__13261 = G__13269;
chunk__13262 = G__13270;
count__13263 = G__13271;
i__13264 = G__13272;
continue;
}
} else
{var child = cljs.core.first(seq__13261__$1);
remove_all_styles_BANG_(child);
{
var G__13273 = cljs.core.next(seq__13261__$1);
var G__13274 = null;
var G__13275 = 0;
var G__13276 = 0;
seq__13261 = G__13273;
chunk__13262 = G__13274;
count__13263 = G__13275;
i__13264 = G__13276;
continue;
}
}
} else
{return null;
}
}
break;
}
});
io.pedestal.app.render.push.cljs_formatter.condense_collection_BANG_ = (function condense_collection_BANG_(elem,container){
var vec__13278 = domina.children(elem);
var opener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,0,null);
var contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,1,null);
var closer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,2,null);
var w = (io.pedestal.app.render.push.cljs_formatter.max_inline_width(elem,container) - (2 * (io.pedestal.app.render.push.cljs_formatter.width(opener) + io.pedestal.app.render.push.cljs_formatter.width(closer))));
domina.set_styles_BANG_(opener,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:font-weight","bold"], true));
domina.set_styles_BANG_(closer,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:font-weight","bold"], true));
return domina.set_styles_BANG_(contents,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color","gray","\uFDD0:display","inline-block","\uFDD0:max-width",[cljs.core.str(w),cljs.core.str("px")].join(''),"\uFDD0:overflow","hidden","\uFDD0:text-overflow","ellipsis"], true));
});
io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_ = (function arrange_element_BANG_(state,elem,container){
io.pedestal.app.render.push.cljs_formatter.remove_all_styles_BANG_(elem);
domina.set_styles_BANG_(elem,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:white-space","pre"], true));
if(cljs.core.truth_(io.pedestal.app.render.push.cljs_formatter.overflow_QMARK_(elem,container)))
{if(cljs.core.truth_(domina.has_class_QMARK_(elem,"collection")))
{if(cljs.core.truth_(domina.has_class_QMARK_(elem,"condensed")))
{return io.pedestal.app.render.push.cljs_formatter.condense_collection_BANG_(elem,container);
} else
{return io.pedestal.app.render.push.cljs_formatter.arrange_collection_BANG_(state,elem,container);
}
} else
{if(cljs.core.truth_(domina.has_class_QMARK_(elem,"keyval")))
{return io.pedestal.app.render.push.cljs_formatter.arrange_keyval_BANG_(state,elem,container);
} else
{return null;
}
}
} else
{return null;
}
});
io.pedestal.app.render.push.cljs_formatter.arrange_BANG_ = (function arrange_BANG_(elem,container){
return io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_(io.pedestal.app.render.push.cljs_formatter.initial_arrange_state,elem,container);
});
io.pedestal.app.render.push.cljs_formatter.find_arranged_parent = (function find_arranged_parent(elem,container){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(container,elem))
{return elem;
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = goog.dom.isElement(elem);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = domina.has_class_QMARK_(elem,"collection");
if(cljs.core.truth_(and__3941__auto____$1))
{return domina.has_class_QMARK_(elem,"arranged");
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return elem;
} else
{if("\uFDD0:else")
{{
var G__13279 = elem.parentNode;
var G__13280 = container;
elem = G__13279;
container = G__13280;
continue;
}
} else
{return null;
}
}
}
break;
}
});
io.pedestal.app.render.push.cljs_formatter.toggle_BANG_ = (function toggle_BANG_(target_elem,arranged_elem,container){
if(cljs.core.truth_(domina.has_class_QMARK_(target_elem,"condensed")))
{domina.remove_class_BANG_(target_elem,"condensed");
} else
{domina.add_class_BANG_(target_elem,"condensed");
}
return io.pedestal.app.render.push.cljs_formatter.arrange_BANG_(arranged_elem,container);
});
io.pedestal.app.render.push.cljs_formatter.set_toggle_on_click_BANG_ = (function set_toggle_on_click_BANG_(elem,container){
return goog.events.listen(domina.single_node(elem),"click",(function (event){
var t = event.target;
while(true){
if(cljs.core.truth_(t))
{if(cljs.core.truth_((function (){var and__3941__auto__ = goog.dom.isElement(t);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = domina.has_class_QMARK_(t,"collection");
if(cljs.core.truth_(and__3941__auto____$1))
{var or__3943__auto__ = domina.has_class_QMARK_(t,"condensed");
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return domina.has_class_QMARK_(t,"arranged");
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{event.stopPropagation();
event.preventDefault();
return io.pedestal.app.render.push.cljs_formatter.toggle_BANG_(t,elem,container);
} else
{{
var G__13281 = t.parentNode;
t = G__13281;
continue;
}
}
} else
{return null;
}
break;
}
}));
});
