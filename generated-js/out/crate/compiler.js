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
var seq__12649 = cljs.core.seq(content);
var chunk__12650 = null;
var count__12651 = 0;
var i__12652 = 0;
while(true){
if((i__12652 < count__12651))
{var c = chunk__12650.cljs$core$IIndexed$_nth$arity$2(chunk__12650,i__12652);
var child_12653 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12653))
{goog.dom.appendChild(parent,child_12653);
} else
{}
{
var G__12654 = seq__12649;
var G__12655 = chunk__12650;
var G__12656 = count__12651;
var G__12657 = (i__12652 + 1);
seq__12649 = G__12654;
chunk__12650 = G__12655;
count__12651 = G__12656;
i__12652 = G__12657;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12649);
if(temp__4092__auto__)
{var seq__12649__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12649__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12649__$1);
{
var G__12658 = cljs.core.chunk_rest(seq__12649__$1);
var G__12659 = c__9646__auto__;
var G__12660 = cljs.core.count(c__9646__auto__);
var G__12661 = 0;
seq__12649 = G__12658;
chunk__12650 = G__12659;
count__12651 = G__12660;
i__12652 = G__12661;
continue;
}
} else
{var c = cljs.core.first(seq__12649__$1);
var child_12662 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12662))
{goog.dom.appendChild(parent,child_12662);
} else
{}
{
var G__12663 = cljs.core.next(seq__12649__$1);
var G__12664 = null;
var G__12665 = 0;
var G__12666 = 0;
seq__12649 = G__12663;
chunk__12650 = G__12664;
count__12651 = G__12665;
i__12652 = G__12666;
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
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:attr",(function (_,p__12667,elem){
var vec__12668 = p__12667;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12668,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12668,1,null);
return crate.binding.on_change(b,(function (v){
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:style",(function (_,p__12669,elem){
var vec__12670 = p__12669;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,1,null);
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
var pred__12671 = cljs.core._EQ_;
var expr__12672 = type;
if((pred__12671.cljs$core$IFn$_invoke$arity$2 ? pred__12671.cljs$core$IFn$_invoke$arity$2("\uFDD0:add",expr__12672) : pred__12671.call(null,"\uFDD0:add",expr__12672)))
{return crate.compiler.dom_add(bc,parent,elem,v);
} else
{if((pred__12671.cljs$core$IFn$_invoke$arity$2 ? pred__12671.cljs$core$IFn$_invoke$arity$2("\uFDD0:remove",expr__12672) : pred__12671.call(null,"\uFDD0:remove",expr__12672)))
{return crate.compiler.dom_remove(bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12672)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__12680 = cljs.core.seq(bs);
var chunk__12681 = null;
var count__12682 = 0;
var i__12683 = 0;
while(true){
if((i__12683 < count__12682))
{var vec__12684 = chunk__12681.cljs$core$IIndexed$_nth$arity$2(chunk__12681,i__12683);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12684,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12684,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__12686 = seq__12680;
var G__12687 = chunk__12681;
var G__12688 = count__12682;
var G__12689 = (i__12683 + 1);
seq__12680 = G__12686;
chunk__12681 = G__12687;
count__12682 = G__12688;
i__12683 = G__12689;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12680);
if(temp__4092__auto__)
{var seq__12680__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12680__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__12680__$1);
{
var G__12690 = cljs.core.chunk_rest(seq__12680__$1);
var G__12691 = c__9646__auto__;
var G__12692 = cljs.core.count(c__9646__auto__);
var G__12693 = 0;
seq__12680 = G__12690;
chunk__12681 = G__12691;
count__12682 = G__12692;
i__12683 = G__12693;
continue;
}
} else
{var vec__12685 = cljs.core.first(seq__12680__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__12694 = cljs.core.next(seq__12680__$1);
var G__12695 = null;
var G__12696 = 0;
var G__12697 = 0;
seq__12680 = G__12694;
chunk__12681 = G__12695;
count__12682 = G__12696;
i__12683 = G__12697;
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
{var seq__12704_12710 = cljs.core.seq(v);
var chunk__12705_12711 = null;
var count__12706_12712 = 0;
var i__12707_12713 = 0;
while(true){
if((i__12707_12713 < count__12706_12712))
{var vec__12708_12714 = chunk__12705_12711.cljs$core$IIndexed$_nth$arity$2(chunk__12705_12711,i__12707_12713);
var k_12715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12708_12714,0,null);
var v_12716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12708_12714,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_12715,v_12716__$1);
{
var G__12717 = seq__12704_12710;
var G__12718 = chunk__12705_12711;
var G__12719 = count__12706_12712;
var G__12720 = (i__12707_12713 + 1);
seq__12704_12710 = G__12717;
chunk__12705_12711 = G__12718;
count__12706_12712 = G__12719;
i__12707_12713 = G__12720;
continue;
}
} else
{var temp__4092__auto___12721 = cljs.core.seq(seq__12704_12710);
if(temp__4092__auto___12721)
{var seq__12704_12722__$1 = temp__4092__auto___12721;
if(cljs.core.chunked_seq_QMARK_(seq__12704_12722__$1))
{var c__9646__auto___12723 = cljs.core.chunk_first(seq__12704_12722__$1);
{
var G__12724 = cljs.core.chunk_rest(seq__12704_12722__$1);
var G__12725 = c__9646__auto___12723;
var G__12726 = cljs.core.count(c__9646__auto___12723);
var G__12727 = 0;
seq__12704_12710 = G__12724;
chunk__12705_12711 = G__12725;
count__12706_12712 = G__12726;
i__12707_12713 = G__12727;
continue;
}
} else
{var vec__12709_12728 = cljs.core.first(seq__12704_12722__$1);
var k_12729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12709_12728,0,null);
var v_12730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12709_12728,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_12729,v_12730__$1);
{
var G__12731 = cljs.core.next(seq__12704_12722__$1);
var G__12732 = null;
var G__12733 = 0;
var G__12734 = 0;
seq__12704_12710 = G__12731;
chunk__12705_12711 = G__12732;
count__12706_12712 = G__12733;
i__12707_12713 = G__12734;
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
{var seq__12741_12747 = cljs.core.seq(attrs);
var chunk__12742_12748 = null;
var count__12743_12749 = 0;
var i__12744_12750 = 0;
while(true){
if((i__12744_12750 < count__12743_12749))
{var vec__12745_12751 = chunk__12742_12748.cljs$core$IIndexed$_nth$arity$2(chunk__12742_12748,i__12744_12750);
var k_12752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745_12751,0,null);
var v_12753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745_12751,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_12752,v_12753);
{
var G__12754 = seq__12741_12747;
var G__12755 = chunk__12742_12748;
var G__12756 = count__12743_12749;
var G__12757 = (i__12744_12750 + 1);
seq__12741_12747 = G__12754;
chunk__12742_12748 = G__12755;
count__12743_12749 = G__12756;
i__12744_12750 = G__12757;
continue;
}
} else
{var temp__4092__auto___12758 = cljs.core.seq(seq__12741_12747);
if(temp__4092__auto___12758)
{var seq__12741_12759__$1 = temp__4092__auto___12758;
if(cljs.core.chunked_seq_QMARK_(seq__12741_12759__$1))
{var c__9646__auto___12760 = cljs.core.chunk_first(seq__12741_12759__$1);
{
var G__12761 = cljs.core.chunk_rest(seq__12741_12759__$1);
var G__12762 = c__9646__auto___12760;
var G__12763 = cljs.core.count(c__9646__auto___12760);
var G__12764 = 0;
seq__12741_12747 = G__12761;
chunk__12742_12748 = G__12762;
count__12743_12749 = G__12763;
i__12744_12750 = G__12764;
continue;
}
} else
{var vec__12746_12765 = cljs.core.first(seq__12741_12759__$1);
var k_12766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12746_12765,0,null);
var v_12767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12746_12765,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_12766,v_12767);
{
var G__12768 = cljs.core.next(seq__12741_12759__$1);
var G__12769 = null;
var G__12770 = 0;
var G__12771 = 0;
seq__12741_12747 = G__12768;
chunk__12742_12748 = G__12769;
count__12743_12749 = G__12770;
i__12744_12750 = G__12771;
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
{var v_12772__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding("\uFDD0:attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value(v);
})():v);
elem.setAttribute(cljs.core.name(k),v_12772__$1);
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
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12775){
var vec__12776 = p__12775;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12776,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12776,1,null);
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
crate.compiler.normalize_element = (function normalize_element(p__12778){
var vec__12783 = p__12778;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,0,null);
var content = cljs.core.nthnext(vec__12783,1);
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
var vec__12784 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12784,0,null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12784,1,null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12784,2,null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12784,3,null);
var vec__12785 = (function (){var vec__12786 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12786,0,null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12786,1,null);
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
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12785,0,null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12785,1,null);
var tag_attrs = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (vec__12784,_,tag__$1,id,class$,vec__12785,nsp,tag__$2){
return (function (p1__12777_SHARP_){
return !((cljs.core.second(p1__12777_SHARP_) == null));
});})(vec__12784,_,tag__$1,id,class$,vec__12785,nsp,tag__$2))
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
var bindings12790 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var vec__12792 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,0,null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,1,null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,2,null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,3,null);
var elem = (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(nsp,tag) : crate.compiler.create_elem.call(null,nsp,tag));
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
crate.compiler.as_content(elem,content);
crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings12790;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__12795__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__12794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12794,0,null);
var body = cljs.core.nthnext(vec__12794,1);
if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__12795 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12795__delegate.call(this, args);
};
G__12795.cljs$lang$maxFixedArity = 0;
G__12795.cljs$lang$applyTo = (function (arglist__12796){
var args = cljs.core.seq(arglist__12796);
return G__12795__delegate(args);
});
G__12795.cljs$core$IFn$_invoke$arity$variadic = G__12795__delegate;
return G__12795;
})()
;
});
