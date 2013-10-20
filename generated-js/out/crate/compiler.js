goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom');
crate.compiler.xmlns = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:xhtml","http://www.w3.org/1999/xhtml","\uFDD0:svg","http://www.w3.org/2000/svg"], true);
crate.compiler.group_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.compiler.bindings,cljs.core.conj,cljs.core.PersistentVector.fromArray([tag,b], true));
});
crate.compiler.as_content = (function as_content(parent,content){
var seq__17912 = cljs.core.seq(content);
var chunk__17913 = null;
var count__17914 = 0;
var i__17915 = 0;
while(true){
if((i__17915 < count__17914))
{var c = chunk__17913.cljs$core$IIndexed$_nth$arity$2(chunk__17913,i__17915);
var child_17916 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_17916))
{goog.dom.appendChild(parent,child_17916);
} else
{}
{
var G__17917 = seq__17912;
var G__17918 = chunk__17913;
var G__17919 = count__17914;
var G__17920 = (i__17915 + 1);
seq__17912 = G__17917;
chunk__17913 = G__17918;
count__17914 = G__17919;
i__17915 = G__17920;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__17912);
if(temp__4092__auto__)
{var seq__17912__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17912__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__17912__$1);
{
var G__17921 = cljs.core.chunk_rest(seq__17912__$1);
var G__17922 = c__9926__auto__;
var G__17923 = cljs.core.count(c__9926__auto__);
var G__17924 = 0;
seq__17912 = G__17921;
chunk__17913 = G__17922;
count__17914 = G__17923;
i__17915 = G__17924;
continue;
}
} else
{var c = cljs.core.first(seq__17912__$1);
var child_17925 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_17925))
{goog.dom.appendChild(parent,child_17925);
} else
{}
{
var G__17926 = cljs.core.next(seq__17912__$1);
var G__17927 = null;
var G__17928 = 0;
var G__17929 = 0;
seq__17912 = G__17926;
chunk__17913 = G__17927;
count__17914 = G__17928;
i__17915 = G__17929;
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
crate.compiler.dom_binding = (function (){var method_table__9983__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9984__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9985__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9986__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){
return type;
}),"\uFDD0:default",hierarchy__9987__auto__,method_table__9983__auto__,prefer_table__9984__auto__,method_cache__9985__auto__,cached_hierarchy__9986__auto__));
})();
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:text",(function (_,b,elem){
return crate.binding.on_change(b,(function (v){
goog.dom.removeChildren(elem);
return crate.compiler.as_content(elem,cljs.core.PersistentVector.fromArray([v], true));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:attr",(function (_,p__17930,elem){
var vec__17931 = p__17930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17931,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17931,1,null);
return crate.binding.on_change(b,(function (v){
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:style",(function (_,p__17932,elem){
var vec__17933 = p__17932;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17933,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17933,1,null);
return crate.binding.on_change(b,(function (v){
if(cljs.core.truth_(k))
{return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_style.call(null,elem,k,v));
} else
{return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v) : crate.compiler.dom_style.call(null,elem,v));
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__4090__auto__ = crate.binding.opt(bc,"\uFDD0:add");
if(cljs.core.truth_(temp__4090__auto__))
{var adder = temp__4090__auto__;
return (adder.cljs$core$IFn$_invoke$arity$3 ? adder.cljs$core$IFn$_invoke$arity$3(parent,elem,v) : adder.call(null,parent,elem,v));
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__4090__auto__ = crate.binding.opt(bc,"\uFDD0:remove");
if(cljs.core.truth_(temp__4090__auto__))
{var remover = temp__4090__auto__;
return (remover.cljs$core$IFn$_invoke$arity$1 ? remover.cljs$core$IFn$_invoke$arity$1(elem) : remover.call(null,elem));
} else
{return goog.dom.removeNode(elem);
}
});
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:coll",(function (_,bc,parent){
return crate.binding.on_change(bc,(function (type,elem,v){
var pred__17934 = cljs.core._EQ_;
var expr__17935 = type;
if((pred__17934.cljs$core$IFn$_invoke$arity$2 ? pred__17934.cljs$core$IFn$_invoke$arity$2("\uFDD0:add",expr__17935) : pred__17934.call(null,"\uFDD0:add",expr__17935)))
{return crate.compiler.dom_add(bc,parent,elem,v);
} else
{if((pred__17934.cljs$core$IFn$_invoke$arity$2 ? pred__17934.cljs$core$IFn$_invoke$arity$2("\uFDD0:remove",expr__17935) : pred__17934.call(null,"\uFDD0:remove",expr__17935)))
{return crate.compiler.dom_remove(bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17935)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__17943 = cljs.core.seq(bs);
var chunk__17944 = null;
var count__17945 = 0;
var i__17946 = 0;
while(true){
if((i__17946 < count__17945))
{var vec__17947 = chunk__17944.cljs$core$IIndexed$_nth$arity$2(chunk__17944,i__17946);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17947,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17947,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__17949 = seq__17943;
var G__17950 = chunk__17944;
var G__17951 = count__17945;
var G__17952 = (i__17946 + 1);
seq__17943 = G__17949;
chunk__17944 = G__17950;
count__17945 = G__17951;
i__17946 = G__17952;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__17943);
if(temp__4092__auto__)
{var seq__17943__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17943__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__17943__$1);
{
var G__17953 = cljs.core.chunk_rest(seq__17943__$1);
var G__17954 = c__9926__auto__;
var G__17955 = cljs.core.count(c__9926__auto__);
var G__17956 = 0;
seq__17943 = G__17953;
chunk__17944 = G__17954;
count__17945 = G__17955;
i__17946 = G__17956;
continue;
}
} else
{var vec__17948 = cljs.core.first(seq__17943__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__17957 = cljs.core.next(seq__17943__$1);
var G__17958 = null;
var G__17959 = 0;
var G__17960 = 0;
seq__17943 = G__17957;
chunk__17944 = G__17958;
count__17945 = G__17959;
i__17946 = G__17960;
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
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){
if(cljs.core.string_QMARK_(v))
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_(v))
{var seq__17967_17973 = cljs.core.seq(v);
var chunk__17968_17974 = null;
var count__17969_17975 = 0;
var i__17970_17976 = 0;
while(true){
if((i__17970_17976 < count__17969_17975))
{var vec__17971_17977 = chunk__17968_17974.cljs$core$IIndexed$_nth$arity$2(chunk__17968_17974,i__17970_17976);
var k_17978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17971_17977,0,null);
var v_17979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17971_17977,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_17978,v_17979__$1);
{
var G__17980 = seq__17967_17973;
var G__17981 = chunk__17968_17974;
var G__17982 = count__17969_17975;
var G__17983 = (i__17970_17976 + 1);
seq__17967_17973 = G__17980;
chunk__17968_17974 = G__17981;
count__17969_17975 = G__17982;
i__17970_17976 = G__17983;
continue;
}
} else
{var temp__4092__auto___17984 = cljs.core.seq(seq__17967_17973);
if(temp__4092__auto___17984)
{var seq__17967_17985__$1 = temp__4092__auto___17984;
if(cljs.core.chunked_seq_QMARK_(seq__17967_17985__$1))
{var c__9926__auto___17986 = cljs.core.chunk_first(seq__17967_17985__$1);
{
var G__17987 = cljs.core.chunk_rest(seq__17967_17985__$1);
var G__17988 = c__9926__auto___17986;
var G__17989 = cljs.core.count(c__9926__auto___17986);
var G__17990 = 0;
seq__17967_17973 = G__17987;
chunk__17968_17974 = G__17988;
count__17969_17975 = G__17989;
i__17970_17976 = G__17990;
continue;
}
} else
{var vec__17972_17991 = cljs.core.first(seq__17967_17985__$1);
var k_17992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17972_17991,0,null);
var v_17993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17972_17991,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_17992,v_17993__$1);
{
var G__17994 = cljs.core.next(seq__17967_17985__$1);
var G__17995 = null;
var G__17996 = 0;
var G__17997 = 0;
seq__17967_17973 = G__17994;
chunk__17968_17974 = G__17995;
count__17969_17975 = G__17996;
i__17970_17976 = G__17997;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core.truth_(crate.binding.binding_QMARK_(v)))
{crate.compiler.capture_binding("\uFDD0:style",cljs.core.PersistentVector.fromArray([null,v], true));
dom_style.cljs$core$IFn$_invoke$arity$2(elem,crate.binding.value(v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding("\uFDD0:style",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value(v);
})():v);
return goog.style.setStyle(elem,cljs.core.name(k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_(attrs)))
{return elem.getAttribute(cljs.core.name(attrs));
} else
{var seq__18004_18010 = cljs.core.seq(attrs);
var chunk__18005_18011 = null;
var count__18006_18012 = 0;
var i__18007_18013 = 0;
while(true){
if((i__18007_18013 < count__18006_18012))
{var vec__18008_18014 = chunk__18005_18011.cljs$core$IIndexed$_nth$arity$2(chunk__18005_18011,i__18007_18013);
var k_18015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008_18014,0,null);
var v_18016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008_18014,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_18015,v_18016);
{
var G__18017 = seq__18004_18010;
var G__18018 = chunk__18005_18011;
var G__18019 = count__18006_18012;
var G__18020 = (i__18007_18013 + 1);
seq__18004_18010 = G__18017;
chunk__18005_18011 = G__18018;
count__18006_18012 = G__18019;
i__18007_18013 = G__18020;
continue;
}
} else
{var temp__4092__auto___18021 = cljs.core.seq(seq__18004_18010);
if(temp__4092__auto___18021)
{var seq__18004_18022__$1 = temp__4092__auto___18021;
if(cljs.core.chunked_seq_QMARK_(seq__18004_18022__$1))
{var c__9926__auto___18023 = cljs.core.chunk_first(seq__18004_18022__$1);
{
var G__18024 = cljs.core.chunk_rest(seq__18004_18022__$1);
var G__18025 = c__9926__auto___18023;
var G__18026 = cljs.core.count(c__9926__auto___18023);
var G__18027 = 0;
seq__18004_18010 = G__18024;
chunk__18005_18011 = G__18025;
count__18006_18012 = G__18026;
i__18007_18013 = G__18027;
continue;
}
} else
{var vec__18009_18028 = cljs.core.first(seq__18004_18022__$1);
var k_18029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18009_18028,0,null);
var v_18030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18009_18028,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_18029,v_18030);
{
var G__18031 = cljs.core.next(seq__18004_18022__$1);
var G__18032 = null;
var G__18033 = 0;
var G__18034 = 0;
seq__18004_18010 = G__18031;
chunk__18005_18011 = G__18032;
count__18006_18012 = G__18033;
i__18007_18013 = G__18034;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"\uFDD0:style"))
{crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v);
} else
{var v_18035__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding("\uFDD0:attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value(v);
})():v);
elem.setAttribute(cljs.core.name(k),v_18035__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18038){
var vec__18039 = p__18038;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,1,null);
if(v === true)
{return cljs.core.PersistentVector.fromArray([n,cljs.core.name(n)], true);
} else
{return cljs.core.PersistentVector.fromArray([n,v], true);
}
}),cljs.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__18041){
var vec__18046 = p__18041;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046,0,null);
var content = cljs.core.nthnext(vec__18046,1);
if(!((function (){var or__3943__auto__ = cljs.core.keyword_QMARK_(tag);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (tag instanceof cljs.core.Symbol);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljs.core.string_QMARK_(tag);
}
}
})()))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__18047 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,0,null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,1,null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,2,null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,3,null);
var vec__18048 = (function (){var vec__18049 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18049,0,null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18049,1,null);
var ns_xmlns = (crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp)) : crate.compiler.xmlns.call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp)));
if(cljs.core.truth_(t))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3943__auto__ = ns_xmlns;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return nsp;
}
})(),t], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0:xhtml")).call(null,crate.compiler.xmlns),nsp], true);
}
})();
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,0,null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048,1,null);
var tag_attrs = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (vec__18047,_,tag__$1,id,class$,vec__18048,nsp,tag__$2){
return (function (p1__18040_SHARP_){
return !((cljs.core.second(p1__18040_SHARP_) == null));
});})(vec__18047,_,tag__$1,id,class$,vec__18048,nsp,tag__$2))
,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",(function (){var or__3943__auto__ = id;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return null;
}
})(),"\uFDD0:class",(cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null)], true)));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs))
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,crate.compiler.normalize_map_attrs(map_attrs)], 0)),cljs.core.next(content)], true);
} else
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,tag_attrs,content], true);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(attrs))
{crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
return cljs.core.rest(content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){
var bindings18053 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var vec__18055 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,0,null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,1,null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,2,null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,3,null);
var elem = (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(nsp,tag) : crate.compiler.create_elem.call(null,nsp,tag));
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
crate.compiler.as_content(elem,content);
crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings18053;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__18058__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__18057 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18057,0,null);
var body = cljs.core.nthnext(vec__18057,1);
if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__18058 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18058__delegate.call(this, args);
};
G__18058.cljs$lang$maxFixedArity = 0;
G__18058.cljs$lang$applyTo = (function (arglist__18059){
var args = cljs.core.seq(arglist__18059);
return G__18058__delegate(args);
});
G__18058.cljs$core$IFn$_invoke$arity$variadic = G__18058__delegate;
return G__18058;
})()
;
});
