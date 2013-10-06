goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom');
crate.compiler.xmlns = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:xhtml","http://www.w3.org/1999/xhtml","\uFDD0:svg","http://www.w3.org/2000/svg"], true);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,cljs.core.PersistentVector.fromArray([tag,b], true));
});
crate.compiler.as_content = (function as_content(parent,content){
var seq__12620 = cljs.core.seq.call(null,content);
var chunk__12621 = null;
var count__12622 = 0;
var i__12623 = 0;
while(true){
if((i__12623 < count__12622))
{var c = cljs.core._nth.call(null,chunk__12621,i__12623);
var child_12624 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_.call(null,c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0:coll",c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0:text",c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12624))
{goog.dom.appendChild(parent,child_12624);
} else
{}
{
var G__12625 = seq__12620;
var G__12626 = chunk__12621;
var G__12627 = count__12622;
var G__12628 = (i__12623 + 1);
seq__12620 = G__12625;
chunk__12621 = G__12626;
count__12622 = G__12627;
i__12623 = G__12628;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12620);
if(temp__4092__auto__)
{var seq__12620__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12620__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__12620__$1);
{
var G__12629 = cljs.core.chunk_rest.call(null,seq__12620__$1);
var G__12630 = c__9640__auto__;
var G__12631 = cljs.core.count.call(null,c__9640__auto__);
var G__12632 = 0;
seq__12620 = G__12629;
chunk__12621 = G__12630;
count__12622 = G__12631;
i__12623 = G__12632;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__12620__$1);
var child_12633 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_.call(null,c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0:coll",c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0:text",c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_12633))
{goog.dom.appendChild(parent,child_12633);
} else
{}
{
var G__12634 = cljs.core.next.call(null,seq__12620__$1);
var G__12635 = null;
var G__12636 = 0;
var G__12637 = 0;
seq__12620 = G__12634;
chunk__12621 = G__12635;
count__12622 = G__12636;
i__12623 = G__12637;
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
crate.compiler.dom_binding = (function (){var method_table__9697__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9701__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){
return type;
}),"\uFDD0:default",hierarchy__9701__auto__,method_table__9697__auto__,prefer_table__9698__auto__,method_cache__9699__auto__,cached_hierarchy__9700__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0:text",(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,cljs.core.PersistentVector.fromArray([v], true));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0:attr",(function (_,p__12638,elem){
var vec__12639 = p__12638;
var k = cljs.core.nth.call(null,vec__12639,0,null);
var b = cljs.core.nth.call(null,vec__12639,1,null);
return crate.binding.on_change.call(null,b,(function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0:style",(function (_,p__12640,elem){
var vec__12641 = p__12640;
var k = cljs.core.nth.call(null,vec__12641,0,null);
var b = cljs.core.nth.call(null,vec__12641,1,null);
return crate.binding.on_change.call(null,b,(function (v){
if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__4090__auto__ = crate.binding.opt.call(null,bc,"\uFDD0:add");
if(cljs.core.truth_(temp__4090__auto__))
{var adder = temp__4090__auto__;
return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__4090__auto__ = crate.binding.opt.call(null,bc,"\uFDD0:remove");
if(cljs.core.truth_(temp__4090__auto__))
{var remover = temp__4090__auto__;
return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0:coll",(function (_,bc,parent){
return crate.binding.on_change.call(null,bc,(function (type,elem,v){
var pred__12642 = cljs.core._EQ_;
var expr__12643 = type;
if(pred__12642.call(null,"\uFDD0:add",expr__12643))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(pred__12642.call(null,"\uFDD0:remove",expr__12643))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12643)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__12651 = cljs.core.seq.call(null,bs);
var chunk__12652 = null;
var count__12653 = 0;
var i__12654 = 0;
while(true){
if((i__12654 < count__12653))
{var vec__12655 = cljs.core._nth.call(null,chunk__12652,i__12654);
var type = cljs.core.nth.call(null,vec__12655,0,null);
var b = cljs.core.nth.call(null,vec__12655,1,null);
crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__12657 = seq__12651;
var G__12658 = chunk__12652;
var G__12659 = count__12653;
var G__12660 = (i__12654 + 1);
seq__12651 = G__12657;
chunk__12652 = G__12658;
count__12653 = G__12659;
i__12654 = G__12660;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12651);
if(temp__4092__auto__)
{var seq__12651__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12651__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__12651__$1);
{
var G__12661 = cljs.core.chunk_rest.call(null,seq__12651__$1);
var G__12662 = c__9640__auto__;
var G__12663 = cljs.core.count.call(null,c__9640__auto__);
var G__12664 = 0;
seq__12651 = G__12661;
chunk__12652 = G__12662;
count__12653 = G__12663;
i__12654 = G__12664;
continue;
}
} else
{var vec__12656 = cljs.core.first.call(null,seq__12651__$1);
var type = cljs.core.nth.call(null,vec__12656,0,null);
var b = cljs.core.nth.call(null,vec__12656,1,null);
crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__12665 = cljs.core.next.call(null,seq__12651__$1);
var G__12666 = null;
var G__12667 = 0;
var G__12668 = 0;
seq__12651 = G__12665;
chunk__12652 = G__12666;
count__12653 = G__12667;
i__12654 = G__12668;
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
if(cljs.core.string_QMARK_.call(null,v))
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__12675_12681 = cljs.core.seq.call(null,v);
var chunk__12676_12682 = null;
var count__12677_12683 = 0;
var i__12678_12684 = 0;
while(true){
if((i__12678_12684 < count__12677_12683))
{var vec__12679_12685 = cljs.core._nth.call(null,chunk__12676_12682,i__12678_12684);
var k_12686 = cljs.core.nth.call(null,vec__12679_12685,0,null);
var v_12687__$1 = cljs.core.nth.call(null,vec__12679_12685,1,null);
dom_style.call(null,elem,k_12686,v_12687__$1);
{
var G__12688 = seq__12675_12681;
var G__12689 = chunk__12676_12682;
var G__12690 = count__12677_12683;
var G__12691 = (i__12678_12684 + 1);
seq__12675_12681 = G__12688;
chunk__12676_12682 = G__12689;
count__12677_12683 = G__12690;
i__12678_12684 = G__12691;
continue;
}
} else
{var temp__4092__auto___12692 = cljs.core.seq.call(null,seq__12675_12681);
if(temp__4092__auto___12692)
{var seq__12675_12693__$1 = temp__4092__auto___12692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12675_12693__$1))
{var c__9640__auto___12694 = cljs.core.chunk_first.call(null,seq__12675_12693__$1);
{
var G__12695 = cljs.core.chunk_rest.call(null,seq__12675_12693__$1);
var G__12696 = c__9640__auto___12694;
var G__12697 = cljs.core.count.call(null,c__9640__auto___12694);
var G__12698 = 0;
seq__12675_12681 = G__12695;
chunk__12676_12682 = G__12696;
count__12677_12683 = G__12697;
i__12678_12684 = G__12698;
continue;
}
} else
{var vec__12680_12699 = cljs.core.first.call(null,seq__12675_12693__$1);
var k_12700 = cljs.core.nth.call(null,vec__12680_12699,0,null);
var v_12701__$1 = cljs.core.nth.call(null,vec__12680_12699,1,null);
dom_style.call(null,elem,k_12700,v_12701__$1);
{
var G__12702 = cljs.core.next.call(null,seq__12675_12693__$1);
var G__12703 = null;
var G__12704 = 0;
var G__12705 = 0;
seq__12675_12681 = G__12702;
chunk__12676_12682 = G__12703;
count__12677_12683 = G__12704;
i__12678_12684 = G__12705;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v)))
{crate.compiler.capture_binding.call(null,"\uFDD0:style",cljs.core.PersistentVector.fromArray([null,v], true));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0:style",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);
return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
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
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__12712_12718 = cljs.core.seq.call(null,attrs);
var chunk__12713_12719 = null;
var count__12714_12720 = 0;
var i__12715_12721 = 0;
while(true){
if((i__12715_12721 < count__12714_12720))
{var vec__12716_12722 = cljs.core._nth.call(null,chunk__12713_12719,i__12715_12721);
var k_12723 = cljs.core.nth.call(null,vec__12716_12722,0,null);
var v_12724 = cljs.core.nth.call(null,vec__12716_12722,1,null);
dom_attr.call(null,elem,k_12723,v_12724);
{
var G__12725 = seq__12712_12718;
var G__12726 = chunk__12713_12719;
var G__12727 = count__12714_12720;
var G__12728 = (i__12715_12721 + 1);
seq__12712_12718 = G__12725;
chunk__12713_12719 = G__12726;
count__12714_12720 = G__12727;
i__12715_12721 = G__12728;
continue;
}
} else
{var temp__4092__auto___12729 = cljs.core.seq.call(null,seq__12712_12718);
if(temp__4092__auto___12729)
{var seq__12712_12730__$1 = temp__4092__auto___12729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12712_12730__$1))
{var c__9640__auto___12731 = cljs.core.chunk_first.call(null,seq__12712_12730__$1);
{
var G__12732 = cljs.core.chunk_rest.call(null,seq__12712_12730__$1);
var G__12733 = c__9640__auto___12731;
var G__12734 = cljs.core.count.call(null,c__9640__auto___12731);
var G__12735 = 0;
seq__12712_12718 = G__12732;
chunk__12713_12719 = G__12733;
count__12714_12720 = G__12734;
i__12715_12721 = G__12735;
continue;
}
} else
{var vec__12717_12736 = cljs.core.first.call(null,seq__12712_12730__$1);
var k_12737 = cljs.core.nth.call(null,vec__12717_12736,0,null);
var v_12738 = cljs.core.nth.call(null,vec__12717_12736,1,null);
dom_attr.call(null,elem,k_12737,v_12738);
{
var G__12739 = cljs.core.next.call(null,seq__12712_12730__$1);
var G__12740 = null;
var G__12741 = 0;
var G__12742 = 0;
seq__12712_12718 = G__12739;
chunk__12713_12719 = G__12740;
count__12714_12720 = G__12741;
i__12715_12721 = G__12742;
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
if(cljs.core._EQ_.call(null,k,"\uFDD0:style"))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_12743__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0:attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);
elem.setAttribute(cljs.core.name.call(null,k),v_12743__$1);
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12746){
var vec__12747 = p__12746;
var n = cljs.core.nth.call(null,vec__12747,0,null);
var v = cljs.core.nth.call(null,vec__12747,1,null);
if(v === true)
{return cljs.core.PersistentVector.fromArray([n,cljs.core.name.call(null,n)], true);
} else
{return cljs.core.PersistentVector.fromArray([n,v], true);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__12749){
var vec__12754 = p__12749;
var tag = cljs.core.nth.call(null,vec__12754,0,null);
var content = cljs.core.nthnext.call(null,vec__12754,1);
if(!((function (){var or__3943__auto__ = cljs.core.keyword_QMARK_.call(null,tag);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (tag instanceof cljs.core.Symbol);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljs.core.string_QMARK_.call(null,tag);
}
}
})()))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__12755 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__12755,0,null);
var tag__$1 = cljs.core.nth.call(null,vec__12755,1,null);
var id = cljs.core.nth.call(null,vec__12755,2,null);
var class$ = cljs.core.nth.call(null,vec__12755,3,null);
var vec__12756 = (function (){var vec__12757 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__12757,0,null);
var t = cljs.core.nth.call(null,vec__12757,1,null);
var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));
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
var nsp = cljs.core.nth.call(null,vec__12756,0,null);
var tag__$2 = cljs.core.nth.call(null,vec__12756,1,null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__12755,_,tag__$1,id,class$,vec__12756,nsp,tag__$2){
return (function (p1__12748_SHARP_){
return !((cljs.core.second.call(null,p1__12748_SHARP_) == null));
});})(vec__12755,_,tag__$1,id,class$,vec__12756,nsp,tag__$2))
,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",(function (){var or__3943__auto__ = id;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return null;
}
})(),"\uFDD0:class",(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], true)));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs))
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], true);
} else
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,tag_attrs,content], true);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
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
var bindings12761 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__12763 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__12763,0,null);
var tag = cljs.core.nth.call(null,vec__12763,1,null);
var attrs = cljs.core.nth.call(null,vec__12763,2,null);
var content = cljs.core.nth.call(null,vec__12763,3,null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings12761;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__12766__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__12765 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__12765,0,null);
var body = cljs.core.nthnext.call(null,vec__12765,1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__12766 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12766__delegate.call(this, args);
};
G__12766.cljs$lang$maxFixedArity = 0;
G__12766.cljs$lang$applyTo = (function (arglist__12767){
var args = cljs.core.seq(arglist__12767);
return G__12766__delegate(args);
});
G__12766.cljs$core$IFn$_invoke$arity$variadic = G__12766__delegate;
return G__12766;
})()
;
});
