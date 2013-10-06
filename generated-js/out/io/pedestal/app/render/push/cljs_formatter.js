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
return io.pedestal.app.render.push.cljs_formatter.span.call(null,class$,cljs.core.pr_str.call(null,x));
});
io.pedestal.app.render.push.cljs_formatter.join = (function join(separator,coll){
return clojure.string.join.call(null,io.pedestal.app.render.push.cljs_formatter.span.call(null,"separator",separator),cljs.core.map.call(null,io.pedestal.app.render.push.cljs_formatter.html,coll));
});
io.pedestal.app.render.push.cljs_formatter.html_collection = (function html_collection(class$,opener,closer,coll){
return io.pedestal.app.render.push.cljs_formatter.span.call(null,[cljs.core.str("collection "),cljs.core.str(class$)].join(''),[cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"opener",opener)),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"contents",io.pedestal.app.render.push.cljs_formatter.join.call(null," ",coll))),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"closer",closer))].join(''));
});
io.pedestal.app.render.push.cljs_formatter.html_keyval = (function html_keyval(p__13192){
var vec__13194 = p__13192;
var k = cljs.core.nth.call(null,vec__13194,0,null);
var v = cljs.core.nth.call(null,vec__13194,1,null);
return io.pedestal.app.render.push.cljs_formatter.span.call(null,"keyval",[cljs.core.str(io.pedestal.app.render.push.cljs_formatter.html.call(null,k)),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"separator"," ")),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.html.call(null,v))].join(''));
});
io.pedestal.app.render.push.cljs_formatter.html_keyvals = (function html_keyvals(coll){
return clojure.string.join.call(null,io.pedestal.app.render.push.cljs_formatter.span.call(null,"separator",", "),cljs.core.map.call(null,io.pedestal.app.render.push.cljs_formatter.html_keyval,coll));
});
io.pedestal.app.render.push.cljs_formatter.html_map = (function html_map(coll){
return io.pedestal.app.render.push.cljs_formatter.span.call(null,"collection map",[cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"opener","{")),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"contents",io.pedestal.app.render.push.cljs_formatter.html_keyvals.call(null,coll))),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"closer","}"))].join(''));
});
io.pedestal.app.render.push.cljs_formatter.html_string = (function html_string(s){
return io.pedestal.app.render.push.cljs_formatter.span.call(null,"string",[cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"opener","\"")),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"contents",s)),cljs.core.str(io.pedestal.app.render.push.cljs_formatter.span.call(null,"closer","\""))].join(''));
});
io.pedestal.app.render.push.cljs_formatter.html = (function html(x){
if(typeof x === 'number')
{return io.pedestal.app.render.push.cljs_formatter.literal.call(null,"number",x);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return io.pedestal.app.render.push.cljs_formatter.literal.call(null,"keyword",x);
} else
{if((x instanceof cljs.core.Symbol))
{return io.pedestal.app.render.push.cljs_formatter.literal.call(null,"symbol",x);
} else
{if(cljs.core.string_QMARK_.call(null,x))
{return io.pedestal.app.render.push.cljs_formatter.html_string.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return io.pedestal.app.render.push.cljs_formatter.html_map.call(null,x);
} else
{if(cljs.core.set_QMARK_.call(null,x))
{return io.pedestal.app.render.push.cljs_formatter.html_collection.call(null,"set","#{","}",x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return io.pedestal.app.render.push.cljs_formatter.html_collection.call(null,"vector","[","]",x);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return io.pedestal.app.render.push.cljs_formatter.html_collection.call(null,"seq","(",")",x);
} else
{if("\uFDD0:else")
{return io.pedestal.app.render.push.cljs_formatter.literal.call(null,"literal",x);
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
var child = domina.single_node.call(null,elem);
var parent = domina.single_node.call(null,elem).parentNode;
var container_node = domina.single_node.call(null,container);
var left_bound = goog.style.getBounds(child).toBox().left;
var parent_right_bound = goog.style.getBounds(parent).toBox().right;
var container_right_bound = goog.style.getBounds(container_node).toBox().right;
return ((function (){var x__9243__auto__ = parent_right_bound;
var y__9244__auto__ = container_right_bound;
return ((x__9243__auto__ < y__9244__auto__) ? x__9243__auto__ : y__9244__auto__);
})() - left_bound);
});
io.pedestal.app.render.push.cljs_formatter.width = (function width(elem){
return goog.style.getBounds(domina.single_node.call(null,elem)).width;
});
io.pedestal.app.render.push.cljs_formatter.initial_arrange_state = cljs.core.cycle.call(null,cljs.core.PersistentVector.fromArray(["#e6f3f7","#f2ffff","#e5f2ff","#ebf7f4","#e5fff1"], true));
io.pedestal.app.render.push.cljs_formatter.color = cljs.core.first;
io.pedestal.app.render.push.cljs_formatter.next_state = cljs.core.rest;
io.pedestal.app.render.push.cljs_formatter.arrange_keyval_BANG_ = (function arrange_keyval_BANG_(state,elem,container){
var vec__13196 = domina.children.call(null,elem);
var key = cljs.core.nth.call(null,vec__13196,0,null);
var separator = cljs.core.nth.call(null,vec__13196,1,null);
var val = cljs.core.nth.call(null,vec__13196,2,null);
io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,state,key,container);
io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,state,val,container);
if(cljs.core.truth_(io.pedestal.app.render.push.cljs_formatter.overflow_QMARK_.call(null,elem,container)))
{domina.set_styles_BANG_.call(null,separator,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","none"], true));
domina.set_styles_BANG_.call(null,key,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","block"], true));
return domina.set_styles_BANG_.call(null,val,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","block","\uFDD0:margin-left","1em"], true));
} else
{return null;
}
});
io.pedestal.app.render.push.cljs_formatter.collection_styles = cljs.core.PersistentHashMap.fromArrays(["\uFDD0:border-top-left-radius","\uFDD0:margin-bottom","\uFDD0:padding-left","\uFDD0:display","\uFDD0:border-top-right-radius","\uFDD0:border-bottom-left-radius","\uFDD0:padding-right","\uFDD0:color","\uFDD0:padding-bottom","\uFDD0:border-bottom-right-radius","\uFDD0:padding-top"],["5px","1ex","2px","inline-block","10px","10px","2px","black","2px","5px","1px"]);
io.pedestal.app.render.push.cljs_formatter.arrange_collection_BANG_ = (function arrange_collection_BANG_(state,elem,container){
domina.add_class_BANG_.call(null,elem,"arranged");
domina.set_styles_BANG_.call(null,elem,cljs.core.merge.call(null,io.pedestal.app.render.push.cljs_formatter.collection_styles,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:background-color",io.pedestal.app.render.push.cljs_formatter.color.call(null,state)], true)));
var vec__13202 = domina.children.call(null,elem);
var opener = cljs.core.nth.call(null,vec__13202,0,null);
var contents = cljs.core.nth.call(null,vec__13202,1,null);
var closer = cljs.core.nth.call(null,vec__13202,2,null);
domina.set_styles_BANG_.call(null,opener,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","inline","\uFDD0:vertical-align","top"], true));
domina.set_styles_BANG_.call(null,closer,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","inline","\uFDD0:vertical-align","bottom"], true));
domina.set_styles_BANG_.call(null,contents,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","inline-block","\uFDD0:vertical-align","top"], true));
var seq__13203_13207 = cljs.core.seq.call(null,domina.children.call(null,contents));
var chunk__13204_13208 = null;
var count__13205_13209 = 0;
var i__13206_13210 = 0;
while(true){
if((i__13206_13210 < count__13205_13209))
{var child_13211 = cljs.core._nth.call(null,chunk__13204_13208,i__13206_13210);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,child_13211,"separator")))
{domina.set_styles_BANG_.call(null,child_13211,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","none"], true));
} else
{io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,io.pedestal.app.render.push.cljs_formatter.next_state.call(null,state),child_13211,container);
domina.set_styles_BANG_.call(null,child_13211,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","block"], true));
}
{
var G__13212 = seq__13203_13207;
var G__13213 = chunk__13204_13208;
var G__13214 = count__13205_13209;
var G__13215 = (i__13206_13210 + 1);
seq__13203_13207 = G__13212;
chunk__13204_13208 = G__13213;
count__13205_13209 = G__13214;
i__13206_13210 = G__13215;
continue;
}
} else
{var temp__4092__auto___13216 = cljs.core.seq.call(null,seq__13203_13207);
if(temp__4092__auto___13216)
{var seq__13203_13217__$1 = temp__4092__auto___13216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13203_13217__$1))
{var c__9640__auto___13218 = cljs.core.chunk_first.call(null,seq__13203_13217__$1);
{
var G__13219 = cljs.core.chunk_rest.call(null,seq__13203_13217__$1);
var G__13220 = c__9640__auto___13218;
var G__13221 = cljs.core.count.call(null,c__9640__auto___13218);
var G__13222 = 0;
seq__13203_13207 = G__13219;
chunk__13204_13208 = G__13220;
count__13205_13209 = G__13221;
i__13206_13210 = G__13222;
continue;
}
} else
{var child_13223 = cljs.core.first.call(null,seq__13203_13217__$1);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,child_13223,"separator")))
{domina.set_styles_BANG_.call(null,child_13223,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","none"], true));
} else
{io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,io.pedestal.app.render.push.cljs_formatter.next_state.call(null,state),child_13223,container);
domina.set_styles_BANG_.call(null,child_13223,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:display","block"], true));
}
{
var G__13224 = cljs.core.next.call(null,seq__13203_13217__$1);
var G__13225 = null;
var G__13226 = 0;
var G__13227 = 0;
seq__13203_13207 = G__13224;
chunk__13204_13208 = G__13225;
count__13205_13209 = G__13226;
i__13206_13210 = G__13227;
continue;
}
}
} else
{}
}
break;
}
return domina.set_styles_BANG_.call(null,elem,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:width",[cljs.core.str(((io.pedestal.app.render.push.cljs_formatter.width.call(null,contents) + io.pedestal.app.render.push.cljs_formatter.width.call(null,opener)) + io.pedestal.app.render.push.cljs_formatter.width.call(null,closer))),cljs.core.str("px")].join('')], true));
});
io.pedestal.app.render.push.cljs_formatter.remove_all_styles_BANG_ = (function remove_all_styles_BANG_(elem){
domina.set_attr_BANG_.call(null,elem,"\uFDD0:style","");
domina.remove_class_BANG_.call(null,elem,"arranged");
var seq__13232 = cljs.core.seq.call(null,domina.children.call(null,elem));
var chunk__13233 = null;
var count__13234 = 0;
var i__13235 = 0;
while(true){
if((i__13235 < count__13234))
{var child = cljs.core._nth.call(null,chunk__13233,i__13235);
remove_all_styles_BANG_.call(null,child);
{
var G__13236 = seq__13232;
var G__13237 = chunk__13233;
var G__13238 = count__13234;
var G__13239 = (i__13235 + 1);
seq__13232 = G__13236;
chunk__13233 = G__13237;
count__13234 = G__13238;
i__13235 = G__13239;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13232);
if(temp__4092__auto__)
{var seq__13232__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13232__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__13232__$1);
{
var G__13240 = cljs.core.chunk_rest.call(null,seq__13232__$1);
var G__13241 = c__9640__auto__;
var G__13242 = cljs.core.count.call(null,c__9640__auto__);
var G__13243 = 0;
seq__13232 = G__13240;
chunk__13233 = G__13241;
count__13234 = G__13242;
i__13235 = G__13243;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__13232__$1);
remove_all_styles_BANG_.call(null,child);
{
var G__13244 = cljs.core.next.call(null,seq__13232__$1);
var G__13245 = null;
var G__13246 = 0;
var G__13247 = 0;
seq__13232 = G__13244;
chunk__13233 = G__13245;
count__13234 = G__13246;
i__13235 = G__13247;
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
var vec__13249 = domina.children.call(null,elem);
var opener = cljs.core.nth.call(null,vec__13249,0,null);
var contents = cljs.core.nth.call(null,vec__13249,1,null);
var closer = cljs.core.nth.call(null,vec__13249,2,null);
var w = (io.pedestal.app.render.push.cljs_formatter.max_inline_width.call(null,elem,container) - (2 * (io.pedestal.app.render.push.cljs_formatter.width.call(null,opener) + io.pedestal.app.render.push.cljs_formatter.width.call(null,closer))));
domina.set_styles_BANG_.call(null,opener,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:font-weight","bold"], true));
domina.set_styles_BANG_.call(null,closer,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:font-weight","bold"], true));
return domina.set_styles_BANG_.call(null,contents,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:color","gray","\uFDD0:display","inline-block","\uFDD0:max-width",[cljs.core.str(w),cljs.core.str("px")].join(''),"\uFDD0:overflow","hidden","\uFDD0:text-overflow","ellipsis"], true));
});
io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_ = (function arrange_element_BANG_(state,elem,container){
io.pedestal.app.render.push.cljs_formatter.remove_all_styles_BANG_.call(null,elem);
domina.set_styles_BANG_.call(null,elem,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:white-space","pre"], true));
if(cljs.core.truth_(io.pedestal.app.render.push.cljs_formatter.overflow_QMARK_.call(null,elem,container)))
{if(cljs.core.truth_(domina.has_class_QMARK_.call(null,elem,"collection")))
{if(cljs.core.truth_(domina.has_class_QMARK_.call(null,elem,"condensed")))
{return io.pedestal.app.render.push.cljs_formatter.condense_collection_BANG_.call(null,elem,container);
} else
{return io.pedestal.app.render.push.cljs_formatter.arrange_collection_BANG_.call(null,state,elem,container);
}
} else
{if(cljs.core.truth_(domina.has_class_QMARK_.call(null,elem,"keyval")))
{return io.pedestal.app.render.push.cljs_formatter.arrange_keyval_BANG_.call(null,state,elem,container);
} else
{return null;
}
}
} else
{return null;
}
});
io.pedestal.app.render.push.cljs_formatter.arrange_BANG_ = (function arrange_BANG_(elem,container){
return io.pedestal.app.render.push.cljs_formatter.arrange_element_BANG_.call(null,io.pedestal.app.render.push.cljs_formatter.initial_arrange_state,elem,container);
});
io.pedestal.app.render.push.cljs_formatter.find_arranged_parent = (function find_arranged_parent(elem,container){
while(true){
if(cljs.core._EQ_.call(null,container,elem))
{return elem;
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = goog.dom.isElement(elem);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = domina.has_class_QMARK_.call(null,elem,"collection");
if(cljs.core.truth_(and__3941__auto____$1))
{return domina.has_class_QMARK_.call(null,elem,"arranged");
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
var G__13250 = elem.parentNode;
var G__13251 = container;
elem = G__13250;
container = G__13251;
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
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,target_elem,"condensed")))
{domina.remove_class_BANG_.call(null,target_elem,"condensed");
} else
{domina.add_class_BANG_.call(null,target_elem,"condensed");
}
return io.pedestal.app.render.push.cljs_formatter.arrange_BANG_.call(null,arranged_elem,container);
});
io.pedestal.app.render.push.cljs_formatter.set_toggle_on_click_BANG_ = (function set_toggle_on_click_BANG_(elem,container){
return goog.events.listen(domina.single_node.call(null,elem),"click",(function (event){
var t = event.target;
while(true){
if(cljs.core.truth_(t))
{if(cljs.core.truth_((function (){var and__3941__auto__ = goog.dom.isElement(t);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = domina.has_class_QMARK_.call(null,t,"collection");
if(cljs.core.truth_(and__3941__auto____$1))
{var or__3943__auto__ = domina.has_class_QMARK_.call(null,t,"condensed");
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return domina.has_class_QMARK_.call(null,t,"arranged");
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
return io.pedestal.app.render.push.cljs_formatter.toggle_BANG_.call(null,t,elem,container);
} else
{{
var G__13252 = t.parentNode;
t = G__13252;
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
