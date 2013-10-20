goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_156800 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_156801 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_156802 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_156801,table_section_wrapper_156801,opt_wrapper_156800,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_156802,table_section_wrapper_156801,cell_wrapper_156802,opt_wrapper_156800,table_section_wrapper_156801,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_156801]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = (((function (){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?(function (){var and__3941__auto__ = div.firstChild;
if(cljs.core.truth_(and__3941__auto__))
{return div.firstChild.childNodes;
} else
{return and__3941__auto__;
}
})():(((function (){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var seq__156807 = cljs.core.seq(tbody);
var chunk__156808 = null;
var count__156809 = 0;
var i__156810 = 0;
while(true){
if((i__156810 < count__156809))
{var child = chunk__156808.cljs$core$IIndexed$_nth$arity$2(chunk__156808,i__156810);
if((function (){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__156811 = seq__156807;
var G__156812 = chunk__156808;
var G__156813 = count__156809;
var G__156814 = (i__156810 + 1);
seq__156807 = G__156811;
chunk__156808 = G__156812;
count__156809 = G__156813;
i__156810 = G__156814;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__156807);
if(temp__4092__auto__)
{var seq__156807__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__156807__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__156807__$1);
{
var G__156815 = cljs.core.chunk_rest(seq__156807__$1);
var G__156816 = c__9926__auto__;
var G__156817 = cljs.core.count(c__9926__auto__);
var G__156818 = 0;
seq__156807 = G__156815;
chunk__156808 = G__156816;
count__156809 = G__156817;
i__156810 = G__156818;
continue;
}
} else
{var child = cljs.core.first(seq__156807__$1);
if((function (){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__156819 = cljs.core.next(seq__156807__$1);
var G__156820 = null;
var G__156821 = 0;
var G__156822 = 0;
seq__156807 = G__156819;
chunk__156808 = G__156820;
count__156809 = G__156821;
i__156810 = G__156822;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__156824 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156824,0,null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156824,1,null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156824,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__156825 = wrapper.lastChild;
var G__156826 = (level - 1);
wrapper = G__156825;
level = G__156826;
continue;
}
} else
{return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__3941__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3941__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto__ = content;
if(and__3941__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__9795__auto__ = (((content == null))?null:content);
return (function (){var or__3943__auto__ = (domina.nodes[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.nodes["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto__ = nodeseq;
if(and__3941__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__9795__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3943__auto__ = (domina.single_node[goog.typeOf(x__9795__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.single_node["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3941__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__156827){
var mesg = cljs.core.seq(arglist__156827);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__156828){
var mesg = cljs.core.seq(arglist__156828);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t156832))
{goog.provide('domina.t156832');

/**
* @constructor
*/
domina.t156832 = (function (class_name,by_class,meta156833){
this.class_name = class_name;
this.by_class = by_class;
this.meta156833 = meta156833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t156832.cljs$lang$type = true;
domina.t156832.cljs$lang$ctorStr = "domina/t156832";
domina.t156832.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"domina/t156832");
});
domina.t156832.prototype.domina$DomContent$ = true;
domina.t156832.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(self__.class_name))));
});
domina.t156832.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name(self__.class_name))));
});
domina.t156832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156834){
var self__ = this;
return self__.meta156833;
});
domina.t156832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156834,meta156833__$1){
var self__ = this;
return (new domina.t156832(self__.class_name,self__.by_class,meta156833__$1));
});
domina.__GT_t156832 = (function __GT_t156832(class_name__$1,by_class__$1,meta156833){
return (new domina.t156832(class_name__$1,by_class__$1,meta156833));
});
} else
{}
return (new domina.t156832(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__156835){
var contents = cljs.core.seq(arglist__156835);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__156836_SHARP_){
return p1__156836_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__156837_SHARP_,p2__156838_SHARP_){
return goog.dom.insertChildAt(p1__156837_SHARP_,p2__156838_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__156837_SHARP_,p2__156838_SHARP_){
return goog.dom.insertChildAt(p1__156837_SHARP_,p2__156838_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__156840_SHARP_,p2__156839_SHARP_){
return goog.dom.insertSiblingBefore(p2__156839_SHARP_,p1__156840_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__156840_SHARP_,p2__156839_SHARP_){
return goog.dom.insertSiblingBefore(p2__156839_SHARP_,p1__156840_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__156842_SHARP_,p2__156841_SHARP_){
return goog.dom.insertSiblingAfter(p2__156841_SHARP_,p1__156842_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__156842_SHARP_,p2__156841_SHARP_){
return goog.dom.insertSiblingAfter(p2__156841_SHARP_,p1__156842_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__156844_SHARP_,p2__156843_SHARP_){
return goog.dom.replaceNode(p2__156843_SHARP_,p1__156844_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__156844_SHARP_,p2__156843_SHARP_){
return goog.dom.replaceNode(p2__156843_SHARP_,p1__156844_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));
if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__156849_156853 = cljs.core.seq(domina.nodes(content));
var chunk__156850_156854 = null;
var count__156851_156855 = 0;
var i__156852_156856 = 0;
while(true){
if((i__156852_156856 < count__156851_156855))
{var n_156857 = chunk__156850_156854.cljs$core$IIndexed$_nth$arity$2(chunk__156850_156854,i__156852_156856);
goog.style.setStyle(n_156857,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__156858 = seq__156849_156853;
var G__156859 = chunk__156850_156854;
var G__156860 = count__156851_156855;
var G__156861 = (i__156852_156856 + 1);
seq__156849_156853 = G__156858;
chunk__156850_156854 = G__156859;
count__156851_156855 = G__156860;
i__156852_156856 = G__156861;
continue;
}
} else
{var temp__4092__auto___156862 = cljs.core.seq(seq__156849_156853);
if(temp__4092__auto___156862)
{var seq__156849_156863__$1 = temp__4092__auto___156862;
if(cljs.core.chunked_seq_QMARK_(seq__156849_156863__$1))
{var c__9926__auto___156864 = cljs.core.chunk_first(seq__156849_156863__$1);
{
var G__156865 = cljs.core.chunk_rest(seq__156849_156863__$1);
var G__156866 = c__9926__auto___156864;
var G__156867 = cljs.core.count(c__9926__auto___156864);
var G__156868 = 0;
seq__156849_156853 = G__156865;
chunk__156850_156854 = G__156866;
count__156851_156855 = G__156867;
i__156852_156856 = G__156868;
continue;
}
} else
{var n_156869 = cljs.core.first(seq__156849_156863__$1);
goog.style.setStyle(n_156869,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__156870 = cljs.core.next(seq__156849_156863__$1);
var G__156871 = null;
var G__156872 = 0;
var G__156873 = 0;
seq__156849_156853 = G__156870;
chunk__156850_156854 = G__156871;
count__156851_156855 = G__156872;
i__156852_156856 = G__156873;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__156874){
var content = cljs.core.first(arglist__156874);
arglist__156874 = cljs.core.next(arglist__156874);
var name = cljs.core.first(arglist__156874);
var value = cljs.core.rest(arglist__156874);
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__156879_156883 = cljs.core.seq(domina.nodes(content));
var chunk__156880_156884 = null;
var count__156881_156885 = 0;
var i__156882_156886 = 0;
while(true){
if((i__156882_156886 < count__156881_156885))
{var n_156887 = chunk__156880_156884.cljs$core$IIndexed$_nth$arity$2(chunk__156880_156884,i__156882_156886);
n_156887.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__156888 = seq__156879_156883;
var G__156889 = chunk__156880_156884;
var G__156890 = count__156881_156885;
var G__156891 = (i__156882_156886 + 1);
seq__156879_156883 = G__156888;
chunk__156880_156884 = G__156889;
count__156881_156885 = G__156890;
i__156882_156886 = G__156891;
continue;
}
} else
{var temp__4092__auto___156892 = cljs.core.seq(seq__156879_156883);
if(temp__4092__auto___156892)
{var seq__156879_156893__$1 = temp__4092__auto___156892;
if(cljs.core.chunked_seq_QMARK_(seq__156879_156893__$1))
{var c__9926__auto___156894 = cljs.core.chunk_first(seq__156879_156893__$1);
{
var G__156895 = cljs.core.chunk_rest(seq__156879_156893__$1);
var G__156896 = c__9926__auto___156894;
var G__156897 = cljs.core.count(c__9926__auto___156894);
var G__156898 = 0;
seq__156879_156883 = G__156895;
chunk__156880_156884 = G__156896;
count__156881_156885 = G__156897;
i__156882_156886 = G__156898;
continue;
}
} else
{var n_156899 = cljs.core.first(seq__156879_156893__$1);
n_156899.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__156900 = cljs.core.next(seq__156879_156893__$1);
var G__156901 = null;
var G__156902 = 0;
var G__156903 = 0;
seq__156879_156883 = G__156900;
chunk__156880_156884 = G__156901;
count__156881_156885 = G__156902;
i__156882_156886 = G__156903;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__156904){
var content = cljs.core.first(arglist__156904);
arglist__156904 = cljs.core.next(arglist__156904);
var name = cljs.core.first(arglist__156904);
var value = cljs.core.rest(arglist__156904);
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__156909_156913 = cljs.core.seq(domina.nodes(content));
var chunk__156910_156914 = null;
var count__156911_156915 = 0;
var i__156912_156916 = 0;
while(true){
if((i__156912_156916 < count__156911_156915))
{var n_156917 = chunk__156910_156914.cljs$core$IIndexed$_nth$arity$2(chunk__156910_156914,i__156912_156916);
n_156917.removeAttribute(cljs.core.name(name));
{
var G__156918 = seq__156909_156913;
var G__156919 = chunk__156910_156914;
var G__156920 = count__156911_156915;
var G__156921 = (i__156912_156916 + 1);
seq__156909_156913 = G__156918;
chunk__156910_156914 = G__156919;
count__156911_156915 = G__156920;
i__156912_156916 = G__156921;
continue;
}
} else
{var temp__4092__auto___156922 = cljs.core.seq(seq__156909_156913);
if(temp__4092__auto___156922)
{var seq__156909_156923__$1 = temp__4092__auto___156922;
if(cljs.core.chunked_seq_QMARK_(seq__156909_156923__$1))
{var c__9926__auto___156924 = cljs.core.chunk_first(seq__156909_156923__$1);
{
var G__156925 = cljs.core.chunk_rest(seq__156909_156923__$1);
var G__156926 = c__9926__auto___156924;
var G__156927 = cljs.core.count(c__9926__auto___156924);
var G__156928 = 0;
seq__156909_156913 = G__156925;
chunk__156910_156914 = G__156926;
count__156911_156915 = G__156927;
i__156912_156916 = G__156928;
continue;
}
} else
{var n_156929 = cljs.core.first(seq__156909_156923__$1);
n_156929.removeAttribute(cljs.core.name(name));
{
var G__156930 = cljs.core.next(seq__156909_156923__$1);
var G__156931 = null;
var G__156932 = 0;
var G__156933 = 0;
seq__156909_156913 = G__156930;
chunk__156910_156914 = G__156931;
count__156911_156915 = G__156932;
i__156912_156916 = G__156933;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__156935 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156935,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156935,1,null);
if(cljs.core.truth_((function (){var and__3941__auto__ = k;
if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr(content,"style");
if(cljs.core.string_QMARK_(style))
{return domina.parse_style_attributes(style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node(content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__156936_SHARP_){
var attr = attrs__$1.item(p1__156936_SHARP_);
var value = attr.nodeValue;
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value);
if(and__3941__auto__)
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value);
} else
{return and__3941__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__156943_156949 = cljs.core.seq(styles);
var chunk__156944_156950 = null;
var count__156945_156951 = 0;
var i__156946_156952 = 0;
while(true){
if((i__156946_156952 < count__156945_156951))
{var vec__156947_156953 = chunk__156944_156950.cljs$core$IIndexed$_nth$arity$2(chunk__156944_156950,i__156946_156952);
var name_156954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156947_156953,0,null);
var value_156955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156947_156953,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_156954,cljs.core.array_seq([value_156955], 0));
{
var G__156956 = seq__156943_156949;
var G__156957 = chunk__156944_156950;
var G__156958 = count__156945_156951;
var G__156959 = (i__156946_156952 + 1);
seq__156943_156949 = G__156956;
chunk__156944_156950 = G__156957;
count__156945_156951 = G__156958;
i__156946_156952 = G__156959;
continue;
}
} else
{var temp__4092__auto___156960 = cljs.core.seq(seq__156943_156949);
if(temp__4092__auto___156960)
{var seq__156943_156961__$1 = temp__4092__auto___156960;
if(cljs.core.chunked_seq_QMARK_(seq__156943_156961__$1))
{var c__9926__auto___156962 = cljs.core.chunk_first(seq__156943_156961__$1);
{
var G__156963 = cljs.core.chunk_rest(seq__156943_156961__$1);
var G__156964 = c__9926__auto___156962;
var G__156965 = cljs.core.count(c__9926__auto___156962);
var G__156966 = 0;
seq__156943_156949 = G__156963;
chunk__156944_156950 = G__156964;
count__156945_156951 = G__156965;
i__156946_156952 = G__156966;
continue;
}
} else
{var vec__156948_156967 = cljs.core.first(seq__156943_156961__$1);
var name_156968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156948_156967,0,null);
var value_156969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156948_156967,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_156968,cljs.core.array_seq([value_156969], 0));
{
var G__156970 = cljs.core.next(seq__156943_156961__$1);
var G__156971 = null;
var G__156972 = 0;
var G__156973 = 0;
seq__156943_156949 = G__156970;
chunk__156944_156950 = G__156971;
count__156945_156951 = G__156972;
i__156946_156952 = G__156973;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__156980_156986 = cljs.core.seq(attrs);
var chunk__156981_156987 = null;
var count__156982_156988 = 0;
var i__156983_156989 = 0;
while(true){
if((i__156983_156989 < count__156982_156988))
{var vec__156984_156990 = chunk__156981_156987.cljs$core$IIndexed$_nth$arity$2(chunk__156981_156987,i__156983_156989);
var name_156991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156984_156990,0,null);
var value_156992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156984_156990,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_156991,cljs.core.array_seq([value_156992], 0));
{
var G__156993 = seq__156980_156986;
var G__156994 = chunk__156981_156987;
var G__156995 = count__156982_156988;
var G__156996 = (i__156983_156989 + 1);
seq__156980_156986 = G__156993;
chunk__156981_156987 = G__156994;
count__156982_156988 = G__156995;
i__156983_156989 = G__156996;
continue;
}
} else
{var temp__4092__auto___156997 = cljs.core.seq(seq__156980_156986);
if(temp__4092__auto___156997)
{var seq__156980_156998__$1 = temp__4092__auto___156997;
if(cljs.core.chunked_seq_QMARK_(seq__156980_156998__$1))
{var c__9926__auto___156999 = cljs.core.chunk_first(seq__156980_156998__$1);
{
var G__157000 = cljs.core.chunk_rest(seq__156980_156998__$1);
var G__157001 = c__9926__auto___156999;
var G__157002 = cljs.core.count(c__9926__auto___156999);
var G__157003 = 0;
seq__156980_156986 = G__157000;
chunk__156981_156987 = G__157001;
count__156982_156988 = G__157002;
i__156983_156989 = G__157003;
continue;
}
} else
{var vec__156985_157004 = cljs.core.first(seq__156980_156998__$1);
var name_157005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156985_157004,0,null);
var value_157006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156985_157004,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_157005,cljs.core.array_seq([value_157006], 0));
{
var G__157007 = cljs.core.next(seq__156980_156998__$1);
var G__157008 = null;
var G__157009 = 0;
var G__157010 = 0;
seq__156980_156986 = G__157007;
chunk__156981_156987 = G__157008;
count__156982_156988 = G__157009;
i__156983_156989 = G__157010;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__157015_157019 = cljs.core.seq(domina.nodes(content));
var chunk__157016_157020 = null;
var count__157017_157021 = 0;
var i__157018_157022 = 0;
while(true){
if((i__157018_157022 < count__157017_157021))
{var node_157023 = chunk__157016_157020.cljs$core$IIndexed$_nth$arity$2(chunk__157016_157020,i__157018_157022);
goog.dom.classes.add(node_157023,class$);
{
var G__157024 = seq__157015_157019;
var G__157025 = chunk__157016_157020;
var G__157026 = count__157017_157021;
var G__157027 = (i__157018_157022 + 1);
seq__157015_157019 = G__157024;
chunk__157016_157020 = G__157025;
count__157017_157021 = G__157026;
i__157018_157022 = G__157027;
continue;
}
} else
{var temp__4092__auto___157028 = cljs.core.seq(seq__157015_157019);
if(temp__4092__auto___157028)
{var seq__157015_157029__$1 = temp__4092__auto___157028;
if(cljs.core.chunked_seq_QMARK_(seq__157015_157029__$1))
{var c__9926__auto___157030 = cljs.core.chunk_first(seq__157015_157029__$1);
{
var G__157031 = cljs.core.chunk_rest(seq__157015_157029__$1);
var G__157032 = c__9926__auto___157030;
var G__157033 = cljs.core.count(c__9926__auto___157030);
var G__157034 = 0;
seq__157015_157019 = G__157031;
chunk__157016_157020 = G__157032;
count__157017_157021 = G__157033;
i__157018_157022 = G__157034;
continue;
}
} else
{var node_157035 = cljs.core.first(seq__157015_157029__$1);
goog.dom.classes.add(node_157035,class$);
{
var G__157036 = cljs.core.next(seq__157015_157029__$1);
var G__157037 = null;
var G__157038 = 0;
var G__157039 = 0;
seq__157015_157019 = G__157036;
chunk__157016_157020 = G__157037;
count__157017_157021 = G__157038;
i__157018_157022 = G__157039;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__157044_157048 = cljs.core.seq(domina.nodes(content));
var chunk__157045_157049 = null;
var count__157046_157050 = 0;
var i__157047_157051 = 0;
while(true){
if((i__157047_157051 < count__157046_157050))
{var node_157052 = chunk__157045_157049.cljs$core$IIndexed$_nth$arity$2(chunk__157045_157049,i__157047_157051);
goog.dom.classes.remove(node_157052,class$);
{
var G__157053 = seq__157044_157048;
var G__157054 = chunk__157045_157049;
var G__157055 = count__157046_157050;
var G__157056 = (i__157047_157051 + 1);
seq__157044_157048 = G__157053;
chunk__157045_157049 = G__157054;
count__157046_157050 = G__157055;
i__157047_157051 = G__157056;
continue;
}
} else
{var temp__4092__auto___157057 = cljs.core.seq(seq__157044_157048);
if(temp__4092__auto___157057)
{var seq__157044_157058__$1 = temp__4092__auto___157057;
if(cljs.core.chunked_seq_QMARK_(seq__157044_157058__$1))
{var c__9926__auto___157059 = cljs.core.chunk_first(seq__157044_157058__$1);
{
var G__157060 = cljs.core.chunk_rest(seq__157044_157058__$1);
var G__157061 = c__9926__auto___157059;
var G__157062 = cljs.core.count(c__9926__auto___157059);
var G__157063 = 0;
seq__157044_157048 = G__157060;
chunk__157045_157049 = G__157061;
count__157046_157050 = G__157062;
i__157047_157051 = G__157063;
continue;
}
} else
{var node_157064 = cljs.core.first(seq__157044_157058__$1);
goog.dom.classes.remove(node_157064,class$);
{
var G__157065 = cljs.core.next(seq__157044_157058__$1);
var G__157066 = null;
var G__157067 = 0;
var G__157068 = 0;
seq__157044_157048 = G__157065;
chunk__157045_157049 = G__157066;
count__157046_157050 = G__157067;
i__157047_157051 = G__157068;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_157077__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__157073_157078 = cljs.core.seq(domina.nodes(content));
var chunk__157074_157079 = null;
var count__157075_157080 = 0;
var i__157076_157081 = 0;
while(true){
if((i__157076_157081 < count__157075_157080))
{var node_157082 = chunk__157074_157079.cljs$core$IIndexed$_nth$arity$2(chunk__157074_157079,i__157076_157081);
goog.dom.classes.set(node_157082,classes_157077__$1);
{
var G__157083 = seq__157073_157078;
var G__157084 = chunk__157074_157079;
var G__157085 = count__157075_157080;
var G__157086 = (i__157076_157081 + 1);
seq__157073_157078 = G__157083;
chunk__157074_157079 = G__157084;
count__157075_157080 = G__157085;
i__157076_157081 = G__157086;
continue;
}
} else
{var temp__4092__auto___157087 = cljs.core.seq(seq__157073_157078);
if(temp__4092__auto___157087)
{var seq__157073_157088__$1 = temp__4092__auto___157087;
if(cljs.core.chunked_seq_QMARK_(seq__157073_157088__$1))
{var c__9926__auto___157089 = cljs.core.chunk_first(seq__157073_157088__$1);
{
var G__157090 = cljs.core.chunk_rest(seq__157073_157088__$1);
var G__157091 = c__9926__auto___157089;
var G__157092 = cljs.core.count(c__9926__auto___157089);
var G__157093 = 0;
seq__157073_157078 = G__157090;
chunk__157074_157079 = G__157091;
count__157075_157080 = G__157092;
i__157076_157081 = G__157093;
continue;
}
} else
{var node_157094 = cljs.core.first(seq__157073_157088__$1);
goog.dom.classes.set(node_157094,classes_157077__$1);
{
var G__157095 = cljs.core.next(seq__157073_157088__$1);
var G__157096 = null;
var G__157097 = 0;
var G__157098 = 0;
seq__157073_157078 = G__157095;
chunk__157074_157079 = G__157096;
count__157075_157080 = G__157097;
i__157076_157081 = G__157098;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__157103_157107 = cljs.core.seq(domina.nodes(content));
var chunk__157104_157108 = null;
var count__157105_157109 = 0;
var i__157106_157110 = 0;
while(true){
if((i__157106_157110 < count__157105_157109))
{var node_157111 = chunk__157104_157108.cljs$core$IIndexed$_nth$arity$2(chunk__157104_157108,i__157106_157110);
goog.dom.setTextContent(node_157111,value);
{
var G__157112 = seq__157103_157107;
var G__157113 = chunk__157104_157108;
var G__157114 = count__157105_157109;
var G__157115 = (i__157106_157110 + 1);
seq__157103_157107 = G__157112;
chunk__157104_157108 = G__157113;
count__157105_157109 = G__157114;
i__157106_157110 = G__157115;
continue;
}
} else
{var temp__4092__auto___157116 = cljs.core.seq(seq__157103_157107);
if(temp__4092__auto___157116)
{var seq__157103_157117__$1 = temp__4092__auto___157116;
if(cljs.core.chunked_seq_QMARK_(seq__157103_157117__$1))
{var c__9926__auto___157118 = cljs.core.chunk_first(seq__157103_157117__$1);
{
var G__157119 = cljs.core.chunk_rest(seq__157103_157117__$1);
var G__157120 = c__9926__auto___157118;
var G__157121 = cljs.core.count(c__9926__auto___157118);
var G__157122 = 0;
seq__157103_157107 = G__157119;
chunk__157104_157108 = G__157120;
count__157105_157109 = G__157121;
i__157106_157110 = G__157122;
continue;
}
} else
{var node_157123 = cljs.core.first(seq__157103_157117__$1);
goog.dom.setTextContent(node_157123,value);
{
var G__157124 = cljs.core.next(seq__157103_157117__$1);
var G__157125 = null;
var G__157126 = 0;
var G__157127 = 0;
seq__157103_157107 = G__157124;
chunk__157104_157108 = G__157125;
count__157105_157109 = G__157126;
i__157106_157110 = G__157127;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__157132_157136 = cljs.core.seq(domina.nodes(content));
var chunk__157133_157137 = null;
var count__157134_157138 = 0;
var i__157135_157139 = 0;
while(true){
if((i__157135_157139 < count__157134_157138))
{var node_157140 = chunk__157133_157137.cljs$core$IIndexed$_nth$arity$2(chunk__157133_157137,i__157135_157139);
goog.dom.forms.setValue(node_157140,value);
{
var G__157141 = seq__157132_157136;
var G__157142 = chunk__157133_157137;
var G__157143 = count__157134_157138;
var G__157144 = (i__157135_157139 + 1);
seq__157132_157136 = G__157141;
chunk__157133_157137 = G__157142;
count__157134_157138 = G__157143;
i__157135_157139 = G__157144;
continue;
}
} else
{var temp__4092__auto___157145 = cljs.core.seq(seq__157132_157136);
if(temp__4092__auto___157145)
{var seq__157132_157146__$1 = temp__4092__auto___157145;
if(cljs.core.chunked_seq_QMARK_(seq__157132_157146__$1))
{var c__9926__auto___157147 = cljs.core.chunk_first(seq__157132_157146__$1);
{
var G__157148 = cljs.core.chunk_rest(seq__157132_157146__$1);
var G__157149 = c__9926__auto___157147;
var G__157150 = cljs.core.count(c__9926__auto___157147);
var G__157151 = 0;
seq__157132_157136 = G__157148;
chunk__157133_157137 = G__157149;
count__157134_157138 = G__157150;
i__157135_157139 = G__157151;
continue;
}
} else
{var node_157152 = cljs.core.first(seq__157132_157146__$1);
goog.dom.forms.setValue(node_157152,value);
{
var G__157153 = cljs.core.next(seq__157132_157146__$1);
var G__157154 = null;
var G__157155 = 0;
var G__157156 = 0;
seq__157132_157136 = G__157153;
chunk__157133_157137 = G__157154;
count__157134_157138 = G__157155;
i__157135_157139 = G__157156;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3941__auto__ = allows_inner_html_QMARK_;
if(and__3941__auto__)
{var and__3941__auto____$1 = (function (){var or__3943__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{var value_157167 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__157163_157168 = cljs.core.seq(domina.nodes(content));
var chunk__157164_157169 = null;
var count__157165_157170 = 0;
var i__157166_157171 = 0;
while(true){
if((i__157166_157171 < count__157165_157170))
{var node_157172 = chunk__157164_157169.cljs$core$IIndexed$_nth$arity$2(chunk__157164_157169,i__157166_157171);
goog.events.removeAll(node_157172);
node_157172.innerHTML = value_157167;
{
var G__157173 = seq__157163_157168;
var G__157174 = chunk__157164_157169;
var G__157175 = count__157165_157170;
var G__157176 = (i__157166_157171 + 1);
seq__157163_157168 = G__157173;
chunk__157164_157169 = G__157174;
count__157165_157170 = G__157175;
i__157166_157171 = G__157176;
continue;
}
} else
{var temp__4092__auto___157177 = cljs.core.seq(seq__157163_157168);
if(temp__4092__auto___157177)
{var seq__157163_157178__$1 = temp__4092__auto___157177;
if(cljs.core.chunked_seq_QMARK_(seq__157163_157178__$1))
{var c__9926__auto___157179 = cljs.core.chunk_first(seq__157163_157178__$1);
{
var G__157180 = cljs.core.chunk_rest(seq__157163_157178__$1);
var G__157181 = c__9926__auto___157179;
var G__157182 = cljs.core.count(c__9926__auto___157179);
var G__157183 = 0;
seq__157163_157168 = G__157180;
chunk__157164_157169 = G__157181;
count__157165_157170 = G__157182;
i__157166_157171 = G__157183;
continue;
}
} else
{var node_157184 = cljs.core.first(seq__157163_157178__$1);
goog.events.removeAll(node_157184);
node_157184.innerHTML = value_157167;
{
var G__157185 = cljs.core.next(seq__157163_157178__$1);
var G__157186 = null;
var G__157187 = 0;
var G__157188 = 0;
seq__157163_157168 = G__157185;
chunk__157164_157169 = G__157186;
count__157165_157170 = G__157187;
i__157166_157171 = G__157188;
continue;
}
}
} else
{}
}
break;
}
}catch (e157162){if((e157162 instanceof Error))
{var e_157189 = e157162;
domina.replace_children_BANG_(content,value_157167);
} else
{if("\uFDD0:else")
{throw e157162;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_(inner_content))
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);
if(cljs.core.truth_((function (){var and__3941__auto__ = bubble;
if(cljs.core.truth_(and__3941__auto__))
{return (value == null);
} else
{return and__3941__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;
return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3943__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes(parent_content);
var children = domina.nodes(child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__157196_157200 = cljs.core.seq(children);
var chunk__157197_157201 = null;
var count__157198_157202 = 0;
var i__157199_157203 = 0;
while(true){
if((i__157199_157203 < count__157198_157202))
{var child_157204 = chunk__157197_157201.cljs$core$IIndexed$_nth$arity$2(chunk__157197_157201,i__157199_157203);
frag.appendChild(child_157204);
{
var G__157205 = seq__157196_157200;
var G__157206 = chunk__157197_157201;
var G__157207 = count__157198_157202;
var G__157208 = (i__157199_157203 + 1);
seq__157196_157200 = G__157205;
chunk__157197_157201 = G__157206;
count__157198_157202 = G__157207;
i__157199_157203 = G__157208;
continue;
}
} else
{var temp__4092__auto___157209 = cljs.core.seq(seq__157196_157200);
if(temp__4092__auto___157209)
{var seq__157196_157210__$1 = temp__4092__auto___157209;
if(cljs.core.chunked_seq_QMARK_(seq__157196_157210__$1))
{var c__9926__auto___157211 = cljs.core.chunk_first(seq__157196_157210__$1);
{
var G__157212 = cljs.core.chunk_rest(seq__157196_157210__$1);
var G__157213 = c__9926__auto___157211;
var G__157214 = cljs.core.count(c__9926__auto___157211);
var G__157215 = 0;
seq__157196_157200 = G__157212;
chunk__157197_157201 = G__157213;
count__157198_157202 = G__157214;
i__157199_157203 = G__157215;
continue;
}
} else
{var child_157216 = cljs.core.first(seq__157196_157210__$1);
frag.appendChild(child_157216);
{
var G__157217 = cljs.core.next(seq__157196_157210__$1);
var G__157218 = null;
var G__157219 = 0;
var G__157220 = 0;
seq__157196_157200 = G__157217;
chunk__157197_157201 = G__157218;
count__157198_157202 = G__157219;
i__157199_157203 = G__157220;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();
var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__157190_SHARP_,p2__157191_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__157190_SHARP_,p2__157191_SHARP_) : f.call(null,p1__157190_SHARP_,p2__157191_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3941__auto__ = obj;
if(cljs.core.truth_(and__3941__auto__))
{return obj.length;
} else
{return and__3941__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__157222 = list_thing;
if(G__157222)
{if((function (){var or__3943__auto__ = (G__157222.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__157222.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__157222.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__157222);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__157222);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if("\uFDD0:default")
{return cljs.core.seq(cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__157223 = content;
if(G__157223)
{if((function (){var or__3943__auto__ = (G__157223.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__157223.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__157223.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__157223);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__157223);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if("\uFDD0:default")
{return cljs.core.seq(cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__157224 = content;
if(G__157224)
{if((function (){var or__3943__auto__ = (G__157224.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__157224.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__157224.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__157224);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__157224);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if("\uFDD0:default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist(coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
