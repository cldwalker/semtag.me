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
var seq__12654 = cljs.core.seq(content);
var chunk__12655 = null;
var count__12656 = 0;
var i__12657 = 0;
while(true){
if((i__12657 < count__12656))
{var c = chunk__12655.cljs$core$IIndexed$_nth$arity$2(chunk__12655,i__12657);
var child_12658 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12658))
{goog.dom.appendChild(parent,child_12658);
} else
{}
{
var G__12659 = seq__12654;
var G__12660 = chunk__12655;
var G__12661 = count__12656;
var G__12662 = (i__12657 + 1);
seq__12654 = G__12659;
chunk__12655 = G__12660;
count__12656 = G__12661;
i__12657 = G__12662;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12654);
if(temp__4092__auto__)
{var seq__12654__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12654__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12654__$1);
{
var G__12663 = cljs.core.chunk_rest(seq__12654__$1);
var G__12664 = c__9646__auto__;
var G__12665 = cljs.core.count(c__9646__auto__);
var G__12666 = 0;
seq__12654 = G__12663;
chunk__12655 = G__12664;
count__12656 = G__12665;
i__12657 = G__12666;
continue;
}
} else
{var c = cljs.core.first(seq__12654__$1);
var child_12667 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12667))
{goog.dom.appendChild(parent,child_12667);
} else
{}
{
var G__12668 = cljs.core.next(seq__12654__$1);
var G__12669 = null;
var G__12670 = 0;
var G__12671 = 0;
seq__12654 = G__12668;
chunk__12655 = G__12669;
count__12656 = G__12670;
i__12657 = G__12671;
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
crate.compiler.dom_binding = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){
return type;
}),"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
})();
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:text",(function (_,b,elem){
return crate.binding.on_change(b,(function (v){
goog.dom.removeChildren(elem);
return crate.compiler.as_content(elem,cljs.core.PersistentVector.fromArray([v], true));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:attr",(function (_,p__12672,elem){
var vec__12673 = p__12672;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12673,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12673,1,null);
return crate.binding.on_change(b,(function (v){
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:style",(function (_,p__12674,elem){
var vec__12675 = p__12674;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12675,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12675,1,null);
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
var pred__12676 = cljs.core._EQ_;
var expr__12677 = type;
if((pred__12676.cljs$core$IFn$_invoke$arity$2 ? pred__12676.cljs$core$IFn$_invoke$arity$2("\uFDD0:add",expr__12677) : pred__12676.call(null,"\uFDD0:add",expr__12677)))
{return crate.compiler.dom_add(bc,parent,elem,v);
} else
{if((pred__12676.cljs$core$IFn$_invoke$arity$2 ? pred__12676.cljs$core$IFn$_invoke$arity$2("\uFDD0:remove",expr__12677) : pred__12676.call(null,"\uFDD0:remove",expr__12677)))
{return crate.compiler.dom_remove(bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12677)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__12685 = cljs.core.seq(bs);
var chunk__12686 = null;
var count__12687 = 0;
var i__12688 = 0;
while(true){
if((i__12688 < count__12687))
{var vec__12689 = chunk__12686.cljs$core$IIndexed$_nth$arity$2(chunk__12686,i__12688);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12689,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12689,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__12691 = seq__12685;
var G__12692 = chunk__12686;
var G__12693 = count__12687;
var G__12694 = (i__12688 + 1);
seq__12685 = G__12691;
chunk__12686 = G__12692;
count__12687 = G__12693;
i__12688 = G__12694;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12685);
if(temp__4092__auto__)
{var seq__12685__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12685__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12685__$1);
{
var G__12695 = cljs.core.chunk_rest(seq__12685__$1);
var G__12696 = c__9646__auto__;
var G__12697 = cljs.core.count(c__9646__auto__);
var G__12698 = 0;
seq__12685 = G__12695;
chunk__12686 = G__12696;
count__12687 = G__12697;
i__12688 = G__12698;
continue;
}
} else
{var vec__12690 = cljs.core.first(seq__12685__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12690,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12690,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__12699 = cljs.core.next(seq__12685__$1);
var G__12700 = null;
var G__12701 = 0;
var G__12702 = 0;
seq__12685 = G__12699;
chunk__12686 = G__12700;
count__12687 = G__12701;
i__12688 = G__12702;
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
{var seq__12709_12715 = cljs.core.seq(v);
var chunk__12710_12716 = null;
var count__12711_12717 = 0;
var i__12712_12718 = 0;
while(true){
if((i__12712_12718 < count__12711_12717))
{var vec__12713_12719 = chunk__12710_12716.cljs$core$IIndexed$_nth$arity$2(chunk__12710_12716,i__12712_12718);
var k_12720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12713_12719,0,null);
var v_12721__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12713_12719,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_12720,v_12721__$1);
{
var G__12722 = seq__12709_12715;
var G__12723 = chunk__12710_12716;
var G__12724 = count__12711_12717;
var G__12725 = (i__12712_12718 + 1);
seq__12709_12715 = G__12722;
chunk__12710_12716 = G__12723;
count__12711_12717 = G__12724;
i__12712_12718 = G__12725;
continue;
}
} else
{var temp__4092__auto___12726 = cljs.core.seq(seq__12709_12715);
if(temp__4092__auto___12726)
{var seq__12709_12727__$1 = temp__4092__auto___12726;
if(cljs.core.chunked_seq_QMARK_(seq__12709_12727__$1))
{var c__9646__auto___12728 = cljs.core.chunk_first(seq__12709_12727__$1);
{
var G__12729 = cljs.core.chunk_rest(seq__12709_12727__$1);
var G__12730 = c__9646__auto___12728;
var G__12731 = cljs.core.count(c__9646__auto___12728);
var G__12732 = 0;
seq__12709_12715 = G__12729;
chunk__12710_12716 = G__12730;
count__12711_12717 = G__12731;
i__12712_12718 = G__12732;
continue;
}
} else
{var vec__12714_12733 = cljs.core.first(seq__12709_12727__$1);
var k_12734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714_12733,0,null);
var v_12735__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714_12733,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_12734,v_12735__$1);
{
var G__12736 = cljs.core.next(seq__12709_12727__$1);
var G__12737 = null;
var G__12738 = 0;
var G__12739 = 0;
seq__12709_12715 = G__12736;
chunk__12710_12716 = G__12737;
count__12711_12717 = G__12738;
i__12712_12718 = G__12739;
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
{var seq__12746_12752 = cljs.core.seq(attrs);
var chunk__12747_12753 = null;
var count__12748_12754 = 0;
var i__12749_12755 = 0;
while(true){
if((i__12749_12755 < count__12748_12754))
{var vec__12750_12756 = chunk__12747_12753.cljs$core$IIndexed$_nth$arity$2(chunk__12747_12753,i__12749_12755);
var k_12757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12750_12756,0,null);
var v_12758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12750_12756,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_12757,v_12758);
{
var G__12759 = seq__12746_12752;
var G__12760 = chunk__12747_12753;
var G__12761 = count__12748_12754;
var G__12762 = (i__12749_12755 + 1);
seq__12746_12752 = G__12759;
chunk__12747_12753 = G__12760;
count__12748_12754 = G__12761;
i__12749_12755 = G__12762;
continue;
}
} else
{var temp__4092__auto___12763 = cljs.core.seq(seq__12746_12752);
if(temp__4092__auto___12763)
{var seq__12746_12764__$1 = temp__4092__auto___12763;
if(cljs.core.chunked_seq_QMARK_(seq__12746_12764__$1))
{var c__9646__auto___12765 = cljs.core.chunk_first(seq__12746_12764__$1);
{
var G__12766 = cljs.core.chunk_rest(seq__12746_12764__$1);
var G__12767 = c__9646__auto___12765;
var G__12768 = cljs.core.count(c__9646__auto___12765);
var G__12769 = 0;
seq__12746_12752 = G__12766;
chunk__12747_12753 = G__12767;
count__12748_12754 = G__12768;
i__12749_12755 = G__12769;
continue;
}
} else
{var vec__12751_12770 = cljs.core.first(seq__12746_12764__$1);
var k_12771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751_12770,0,null);
var v_12772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12751_12770,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_12771,v_12772);
{
var G__12773 = cljs.core.next(seq__12746_12764__$1);
var G__12774 = null;
var G__12775 = 0;
var G__12776 = 0;
seq__12746_12752 = G__12773;
chunk__12747_12753 = G__12774;
count__12748_12754 = G__12775;
i__12749_12755 = G__12776;
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
{var v_12777__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding("\uFDD0:attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value(v);
})():v);
elem.setAttribute(cljs.core.name(k),v_12777__$1);
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
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12780){
var vec__12781 = p__12780;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,1,null);
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
crate.compiler.normalize_element = (function normalize_element(p__12783){
var vec__12788 = p__12783;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12788,0,null);
var content = cljs.core.nthnext(vec__12788,1);
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
var vec__12789 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12789,0,null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12789,1,null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12789,2,null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12789,3,null);
var vec__12790 = (function (){var vec__12791 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,0,null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,1,null);
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
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12790,0,null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12790,1,null);
var tag_attrs = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (vec__12789,_,tag__$1,id,class$,vec__12790,nsp,tag__$2){
return (function (p1__12782_SHARP_){
return !((cljs.core.second(p1__12782_SHARP_) == null));
});})(vec__12789,_,tag__$1,id,class$,vec__12790,nsp,tag__$2))
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
var bindings12795 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var vec__12797 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12797,0,null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12797,1,null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12797,2,null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12797,3,null);
var elem = (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(nsp,tag) : crate.compiler.create_elem.call(null,nsp,tag));
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
crate.compiler.as_content(elem,content);
crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings12795;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__12800__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__12799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,0,null);
var body = cljs.core.nthnext(vec__12799,1);
if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__12800 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12800__delegate.call(this, args);
};
G__12800.cljs$lang$maxFixedArity = 0;
G__12800.cljs$lang$applyTo = (function (arglist__12801){
var args = cljs.core.seq(arglist__12801);
return G__12800__delegate(args);
});
G__12800.cljs$core$IFn$_invoke$arity$variadic = G__12800__delegate;
return G__12800;
})()
;
});
