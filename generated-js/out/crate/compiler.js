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
var seq__12626 = cljs.core.seq(content);
var chunk__12627 = null;
var count__12628 = 0;
var i__12629 = 0;
while(true){
if((i__12629 < count__12628))
{var c = chunk__12627.cljs$core$IIndexed$_nth$arity$2(chunk__12627,i__12629);
var child_12630 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12630))
{goog.dom.appendChild(parent,child_12630);
} else
{}
{
var G__12631 = seq__12626;
var G__12632 = chunk__12627;
var G__12633 = count__12628;
var G__12634 = (i__12629 + 1);
seq__12626 = G__12631;
chunk__12627 = G__12632;
count__12628 = G__12633;
i__12629 = G__12634;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12626);
if(temp__4092__auto__)
{var seq__12626__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12626__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12626__$1);
{
var G__12635 = cljs.core.chunk_rest(seq__12626__$1);
var G__12636 = c__9646__auto__;
var G__12637 = cljs.core.count(c__9646__auto__);
var G__12638 = 0;
seq__12626 = G__12635;
chunk__12627 = G__12636;
count__12628 = G__12637;
i__12629 = G__12638;
continue;
}
} else
{var c = cljs.core.first(seq__12626__$1);
var child_12639 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12639))
{goog.dom.appendChild(parent,child_12639);
} else
{}
{
var G__12640 = cljs.core.next(seq__12626__$1);
var G__12641 = null;
var G__12642 = 0;
var G__12643 = 0;
seq__12626 = G__12640;
chunk__12627 = G__12641;
count__12628 = G__12642;
i__12629 = G__12643;
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
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:attr",(function (_,p__12644,elem){
var vec__12645 = p__12644;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645,1,null);
return crate.binding.on_change(b,(function (v){
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:style",(function (_,p__12646,elem){
var vec__12647 = p__12646;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647,1,null);
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
var pred__12648 = cljs.core._EQ_;
var expr__12649 = type;
if((pred__12648.cljs$core$IFn$_invoke$arity$2 ? pred__12648.cljs$core$IFn$_invoke$arity$2("\uFDD0:add",expr__12649) : pred__12648.call(null,"\uFDD0:add",expr__12649)))
{return crate.compiler.dom_add(bc,parent,elem,v);
} else
{if((pred__12648.cljs$core$IFn$_invoke$arity$2 ? pred__12648.cljs$core$IFn$_invoke$arity$2("\uFDD0:remove",expr__12649) : pred__12648.call(null,"\uFDD0:remove",expr__12649)))
{return crate.compiler.dom_remove(bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12649)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__12657 = cljs.core.seq(bs);
var chunk__12658 = null;
var count__12659 = 0;
var i__12660 = 0;
while(true){
if((i__12660 < count__12659))
{var vec__12661 = chunk__12658.cljs$core$IIndexed$_nth$arity$2(chunk__12658,i__12660);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12661,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12661,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__12663 = seq__12657;
var G__12664 = chunk__12658;
var G__12665 = count__12659;
var G__12666 = (i__12660 + 1);
seq__12657 = G__12663;
chunk__12658 = G__12664;
count__12659 = G__12665;
i__12660 = G__12666;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12657);
if(temp__4092__auto__)
{var seq__12657__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12657__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12657__$1);
{
var G__12667 = cljs.core.chunk_rest(seq__12657__$1);
var G__12668 = c__9646__auto__;
var G__12669 = cljs.core.count(c__9646__auto__);
var G__12670 = 0;
seq__12657 = G__12667;
chunk__12658 = G__12668;
count__12659 = G__12669;
i__12660 = G__12670;
continue;
}
} else
{var vec__12662 = cljs.core.first(seq__12657__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12662,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12662,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__12671 = cljs.core.next(seq__12657__$1);
var G__12672 = null;
var G__12673 = 0;
var G__12674 = 0;
seq__12657 = G__12671;
chunk__12658 = G__12672;
count__12659 = G__12673;
i__12660 = G__12674;
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
{var seq__12681_12687 = cljs.core.seq(v);
var chunk__12682_12688 = null;
var count__12683_12689 = 0;
var i__12684_12690 = 0;
while(true){
if((i__12684_12690 < count__12683_12689))
{var vec__12685_12691 = chunk__12682_12688.cljs$core$IIndexed$_nth$arity$2(chunk__12682_12688,i__12684_12690);
var k_12692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685_12691,0,null);
var v_12693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685_12691,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_12692,v_12693__$1);
{
var G__12694 = seq__12681_12687;
var G__12695 = chunk__12682_12688;
var G__12696 = count__12683_12689;
var G__12697 = (i__12684_12690 + 1);
seq__12681_12687 = G__12694;
chunk__12682_12688 = G__12695;
count__12683_12689 = G__12696;
i__12684_12690 = G__12697;
continue;
}
} else
{var temp__4092__auto___12698 = cljs.core.seq(seq__12681_12687);
if(temp__4092__auto___12698)
{var seq__12681_12699__$1 = temp__4092__auto___12698;
if(cljs.core.chunked_seq_QMARK_(seq__12681_12699__$1))
{var c__9646__auto___12700 = cljs.core.chunk_first(seq__12681_12699__$1);
{
var G__12701 = cljs.core.chunk_rest(seq__12681_12699__$1);
var G__12702 = c__9646__auto___12700;
var G__12703 = cljs.core.count(c__9646__auto___12700);
var G__12704 = 0;
seq__12681_12687 = G__12701;
chunk__12682_12688 = G__12702;
count__12683_12689 = G__12703;
i__12684_12690 = G__12704;
continue;
}
} else
{var vec__12686_12705 = cljs.core.first(seq__12681_12699__$1);
var k_12706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686_12705,0,null);
var v_12707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686_12705,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_12706,v_12707__$1);
{
var G__12708 = cljs.core.next(seq__12681_12699__$1);
var G__12709 = null;
var G__12710 = 0;
var G__12711 = 0;
seq__12681_12687 = G__12708;
chunk__12682_12688 = G__12709;
count__12683_12689 = G__12710;
i__12684_12690 = G__12711;
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
{var seq__12718_12724 = cljs.core.seq(attrs);
var chunk__12719_12725 = null;
var count__12720_12726 = 0;
var i__12721_12727 = 0;
while(true){
if((i__12721_12727 < count__12720_12726))
{var vec__12722_12728 = chunk__12719_12725.cljs$core$IIndexed$_nth$arity$2(chunk__12719_12725,i__12721_12727);
var k_12729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12722_12728,0,null);
var v_12730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12722_12728,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_12729,v_12730);
{
var G__12731 = seq__12718_12724;
var G__12732 = chunk__12719_12725;
var G__12733 = count__12720_12726;
var G__12734 = (i__12721_12727 + 1);
seq__12718_12724 = G__12731;
chunk__12719_12725 = G__12732;
count__12720_12726 = G__12733;
i__12721_12727 = G__12734;
continue;
}
} else
{var temp__4092__auto___12735 = cljs.core.seq(seq__12718_12724);
if(temp__4092__auto___12735)
{var seq__12718_12736__$1 = temp__4092__auto___12735;
if(cljs.core.chunked_seq_QMARK_(seq__12718_12736__$1))
{var c__9646__auto___12737 = cljs.core.chunk_first(seq__12718_12736__$1);
{
var G__12738 = cljs.core.chunk_rest(seq__12718_12736__$1);
var G__12739 = c__9646__auto___12737;
var G__12740 = cljs.core.count(c__9646__auto___12737);
var G__12741 = 0;
seq__12718_12724 = G__12738;
chunk__12719_12725 = G__12739;
count__12720_12726 = G__12740;
i__12721_12727 = G__12741;
continue;
}
} else
{var vec__12723_12742 = cljs.core.first(seq__12718_12736__$1);
var k_12743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12723_12742,0,null);
var v_12744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12723_12742,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_12743,v_12744);
{
var G__12745 = cljs.core.next(seq__12718_12736__$1);
var G__12746 = null;
var G__12747 = 0;
var G__12748 = 0;
seq__12718_12724 = G__12745;
chunk__12719_12725 = G__12746;
count__12720_12726 = G__12747;
i__12721_12727 = G__12748;
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
{var v_12749__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding("\uFDD0:attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value(v);
})():v);
elem.setAttribute(cljs.core.name(k),v_12749__$1);
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
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12752){
var vec__12753 = p__12752;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12753,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12753,1,null);
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
crate.compiler.normalize_element = (function normalize_element(p__12755){
var vec__12760 = p__12755;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12760,0,null);
var content = cljs.core.nthnext(vec__12760,1);
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
var vec__12761 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,0,null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,1,null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,2,null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,3,null);
var vec__12762 = (function (){var vec__12763 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,0,null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,1,null);
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
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12762,0,null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12762,1,null);
var tag_attrs = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (vec__12761,_,tag__$1,id,class$,vec__12762,nsp,tag__$2){
return (function (p1__12754_SHARP_){
return !((cljs.core.second(p1__12754_SHARP_) == null));
});})(vec__12761,_,tag__$1,id,class$,vec__12762,nsp,tag__$2))
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
var bindings12767 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var vec__12769 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769,0,null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769,1,null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769,2,null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769,3,null);
var elem = (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(nsp,tag) : crate.compiler.create_elem.call(null,nsp,tag));
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
crate.compiler.as_content(elem,content);
crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings12767;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__12772__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__12771 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,0,null);
var body = cljs.core.nthnext(vec__12771,1);
if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__12772 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12772__delegate.call(this, args);
};
G__12772.cljs$lang$maxFixedArity = 0;
G__12772.cljs$lang$applyTo = (function (arglist__12773){
var args = cljs.core.seq(arglist__12773);
return G__12772__delegate(args);
});
G__12772.cljs$core$IFn$_invoke$arity$variadic = G__12772__delegate;
return G__12772;
})()
;
});
