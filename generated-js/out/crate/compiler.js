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
var seq__12636 = cljs.core.seq(content);
var chunk__12637 = null;
var count__12638 = 0;
var i__12639 = 0;
while(true){
if((i__12639 < count__12638))
{var c = chunk__12637.cljs$core$IIndexed$_nth$arity$2(chunk__12637,i__12639);
var child_12640 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12640))
{goog.dom.appendChild(parent,child_12640);
} else
{}
{
var G__12641 = seq__12636;
var G__12642 = chunk__12637;
var G__12643 = count__12638;
var G__12644 = (i__12639 + 1);
seq__12636 = G__12641;
chunk__12637 = G__12642;
count__12638 = G__12643;
i__12639 = G__12644;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12636);
if(temp__4092__auto__)
{var seq__12636__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12636__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12636__$1);
{
var G__12645 = cljs.core.chunk_rest(seq__12636__$1);
var G__12646 = c__9646__auto__;
var G__12647 = cljs.core.count(c__9646__auto__);
var G__12648 = 0;
seq__12636 = G__12645;
chunk__12637 = G__12646;
count__12638 = G__12647;
i__12639 = G__12648;
continue;
}
} else
{var c = cljs.core.first(seq__12636__$1);
var child_12649 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12649))
{goog.dom.appendChild(parent,child_12649);
} else
{}
{
var G__12650 = cljs.core.next(seq__12636__$1);
var G__12651 = null;
var G__12652 = 0;
var G__12653 = 0;
seq__12636 = G__12650;
chunk__12637 = G__12651;
count__12638 = G__12652;
i__12639 = G__12653;
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
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:attr",(function (_,p__12654,elem){
var vec__12655 = p__12654;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655,1,null);
return crate.binding.on_change(b,(function (v){
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:style",(function (_,p__12656,elem){
var vec__12657 = p__12656;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12657,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12657,1,null);
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
var pred__12658 = cljs.core._EQ_;
var expr__12659 = type;
if((pred__12658.cljs$core$IFn$_invoke$arity$2 ? pred__12658.cljs$core$IFn$_invoke$arity$2("\uFDD0:add",expr__12659) : pred__12658.call(null,"\uFDD0:add",expr__12659)))
{return crate.compiler.dom_add(bc,parent,elem,v);
} else
{if((pred__12658.cljs$core$IFn$_invoke$arity$2 ? pred__12658.cljs$core$IFn$_invoke$arity$2("\uFDD0:remove",expr__12659) : pred__12658.call(null,"\uFDD0:remove",expr__12659)))
{return crate.compiler.dom_remove(bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12659)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__12667 = cljs.core.seq(bs);
var chunk__12668 = null;
var count__12669 = 0;
var i__12670 = 0;
while(true){
if((i__12670 < count__12669))
{var vec__12671 = chunk__12668.cljs$core$IIndexed$_nth$arity$2(chunk__12668,i__12670);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12671,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12671,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__12673 = seq__12667;
var G__12674 = chunk__12668;
var G__12675 = count__12669;
var G__12676 = (i__12670 + 1);
seq__12667 = G__12673;
chunk__12668 = G__12674;
count__12669 = G__12675;
i__12670 = G__12676;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12667);
if(temp__4092__auto__)
{var seq__12667__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12667__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12667__$1);
{
var G__12677 = cljs.core.chunk_rest(seq__12667__$1);
var G__12678 = c__9646__auto__;
var G__12679 = cljs.core.count(c__9646__auto__);
var G__12680 = 0;
seq__12667 = G__12677;
chunk__12668 = G__12678;
count__12669 = G__12679;
i__12670 = G__12680;
continue;
}
} else
{var vec__12672 = cljs.core.first(seq__12667__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12672,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12672,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__12681 = cljs.core.next(seq__12667__$1);
var G__12682 = null;
var G__12683 = 0;
var G__12684 = 0;
seq__12667 = G__12681;
chunk__12668 = G__12682;
count__12669 = G__12683;
i__12670 = G__12684;
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
{var seq__12691_12697 = cljs.core.seq(v);
var chunk__12692_12698 = null;
var count__12693_12699 = 0;
var i__12694_12700 = 0;
while(true){
if((i__12694_12700 < count__12693_12699))
{var vec__12695_12701 = chunk__12692_12698.cljs$core$IIndexed$_nth$arity$2(chunk__12692_12698,i__12694_12700);
var k_12702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12695_12701,0,null);
var v_12703__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12695_12701,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_12702,v_12703__$1);
{
var G__12704 = seq__12691_12697;
var G__12705 = chunk__12692_12698;
var G__12706 = count__12693_12699;
var G__12707 = (i__12694_12700 + 1);
seq__12691_12697 = G__12704;
chunk__12692_12698 = G__12705;
count__12693_12699 = G__12706;
i__12694_12700 = G__12707;
continue;
}
} else
{var temp__4092__auto___12708 = cljs.core.seq(seq__12691_12697);
if(temp__4092__auto___12708)
{var seq__12691_12709__$1 = temp__4092__auto___12708;
if(cljs.core.chunked_seq_QMARK_(seq__12691_12709__$1))
{var c__9646__auto___12710 = cljs.core.chunk_first(seq__12691_12709__$1);
{
var G__12711 = cljs.core.chunk_rest(seq__12691_12709__$1);
var G__12712 = c__9646__auto___12710;
var G__12713 = cljs.core.count(c__9646__auto___12710);
var G__12714 = 0;
seq__12691_12697 = G__12711;
chunk__12692_12698 = G__12712;
count__12693_12699 = G__12713;
i__12694_12700 = G__12714;
continue;
}
} else
{var vec__12696_12715 = cljs.core.first(seq__12691_12709__$1);
var k_12716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12696_12715,0,null);
var v_12717__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12696_12715,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_12716,v_12717__$1);
{
var G__12718 = cljs.core.next(seq__12691_12709__$1);
var G__12719 = null;
var G__12720 = 0;
var G__12721 = 0;
seq__12691_12697 = G__12718;
chunk__12692_12698 = G__12719;
count__12693_12699 = G__12720;
i__12694_12700 = G__12721;
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
{var seq__12728_12734 = cljs.core.seq(attrs);
var chunk__12729_12735 = null;
var count__12730_12736 = 0;
var i__12731_12737 = 0;
while(true){
if((i__12731_12737 < count__12730_12736))
{var vec__12732_12738 = chunk__12729_12735.cljs$core$IIndexed$_nth$arity$2(chunk__12729_12735,i__12731_12737);
var k_12739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12732_12738,0,null);
var v_12740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12732_12738,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_12739,v_12740);
{
var G__12741 = seq__12728_12734;
var G__12742 = chunk__12729_12735;
var G__12743 = count__12730_12736;
var G__12744 = (i__12731_12737 + 1);
seq__12728_12734 = G__12741;
chunk__12729_12735 = G__12742;
count__12730_12736 = G__12743;
i__12731_12737 = G__12744;
continue;
}
} else
{var temp__4092__auto___12745 = cljs.core.seq(seq__12728_12734);
if(temp__4092__auto___12745)
{var seq__12728_12746__$1 = temp__4092__auto___12745;
if(cljs.core.chunked_seq_QMARK_(seq__12728_12746__$1))
{var c__9646__auto___12747 = cljs.core.chunk_first(seq__12728_12746__$1);
{
var G__12748 = cljs.core.chunk_rest(seq__12728_12746__$1);
var G__12749 = c__9646__auto___12747;
var G__12750 = cljs.core.count(c__9646__auto___12747);
var G__12751 = 0;
seq__12728_12734 = G__12748;
chunk__12729_12735 = G__12749;
count__12730_12736 = G__12750;
i__12731_12737 = G__12751;
continue;
}
} else
{var vec__12733_12752 = cljs.core.first(seq__12728_12746__$1);
var k_12753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12733_12752,0,null);
var v_12754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12733_12752,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_12753,v_12754);
{
var G__12755 = cljs.core.next(seq__12728_12746__$1);
var G__12756 = null;
var G__12757 = 0;
var G__12758 = 0;
seq__12728_12734 = G__12755;
chunk__12729_12735 = G__12756;
count__12730_12736 = G__12757;
i__12731_12737 = G__12758;
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
{var v_12759__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding("\uFDD0:attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value(v);
})():v);
elem.setAttribute(cljs.core.name(k),v_12759__$1);
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
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12762){
var vec__12763 = p__12762;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,1,null);
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
crate.compiler.normalize_element = (function normalize_element(p__12765){
var vec__12770 = p__12765;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12770,0,null);
var content = cljs.core.nthnext(vec__12770,1);
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
var vec__12771 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,0,null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,1,null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,2,null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,3,null);
var vec__12772 = (function (){var vec__12773 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12773,0,null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12773,1,null);
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
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12772,0,null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12772,1,null);
var tag_attrs = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (vec__12771,_,tag__$1,id,class$,vec__12772,nsp,tag__$2){
return (function (p1__12764_SHARP_){
return !((cljs.core.second(p1__12764_SHARP_) == null));
});})(vec__12771,_,tag__$1,id,class$,vec__12772,nsp,tag__$2))
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
var bindings12777 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var vec__12779 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12779,0,null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12779,1,null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12779,2,null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12779,3,null);
var elem = (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(nsp,tag) : crate.compiler.create_elem.call(null,nsp,tag));
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
crate.compiler.as_content(elem,content);
crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings12777;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__12782__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__12781 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,0,null);
var body = cljs.core.nthnext(vec__12781,1);
if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__12782 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12782__delegate.call(this, args);
};
G__12782.cljs$lang$maxFixedArity = 0;
G__12782.cljs$lang$applyTo = (function (arglist__12783){
var args = cljs.core.seq(arglist__12783);
return G__12782__delegate(args);
});
G__12782.cljs$core$IFn$_invoke$arity$variadic = G__12782__delegate;
return G__12782;
})()
;
});
