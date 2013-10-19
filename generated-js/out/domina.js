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
var opt_wrapper_13125 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_13126 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_13127 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_13126,table_section_wrapper_13126,opt_wrapper_13125,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_13127,table_section_wrapper_13126,cell_wrapper_13127,opt_wrapper_13125,table_section_wrapper_13126,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_13126]);
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
var seq__13132 = cljs.core.seq(tbody);
var chunk__13133 = null;
var count__13134 = 0;
var i__13135 = 0;
while(true){
if((i__13135 < count__13134))
{var child = chunk__13133.cljs$core$IIndexed$_nth$arity$2(chunk__13133,i__13135);
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
var G__13136 = seq__13132;
var G__13137 = chunk__13133;
var G__13138 = count__13134;
var G__13139 = (i__13135 + 1);
seq__13132 = G__13136;
chunk__13133 = G__13137;
count__13134 = G__13138;
i__13135 = G__13139;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13132);
if(temp__4092__auto__)
{var seq__13132__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13132__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13132__$1);
{
var G__13140 = cljs.core.chunk_rest(seq__13132__$1);
var G__13141 = c__9646__auto__;
var G__13142 = cljs.core.count(c__9646__auto__);
var G__13143 = 0;
seq__13132 = G__13140;
chunk__13133 = G__13141;
count__13134 = G__13142;
i__13135 = G__13143;
continue;
}
} else
{var child = cljs.core.first(seq__13132__$1);
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
var G__13144 = cljs.core.next(seq__13132__$1);
var G__13145 = null;
var G__13146 = 0;
var G__13147 = 0;
seq__13132 = G__13144;
chunk__13133 = G__13145;
count__13134 = G__13146;
i__13135 = G__13147;
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
var vec__13149 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13149,0,null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13149,1,null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13149,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__13150 = wrapper.lastChild;
var G__13151 = (level - 1);
wrapper = G__13150;
level = G__13151;
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
{var x__9515__auto__ = (((content == null))?null:content);
return (function (){var or__3943__auto__ = (domina.nodes[goog.typeOf(x__9515__auto__)]);
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
{var x__9515__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3943__auto__ = (domina.single_node[goog.typeOf(x__9515__auto__)]);
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
log_debug.cljs$lang$applyTo = (function (arglist__13152){
var mesg = cljs.core.seq(arglist__13152);
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
log.cljs$lang$applyTo = (function (arglist__13153){
var mesg = cljs.core.seq(arglist__13153);
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
if((void 0 === domina.t13157))
{goog.provide('domina.t13157');

/**
* @constructor
*/
domina.t13157 = (function (class_name,by_class,meta13158){
this.class_name = class_name;
this.by_class = by_class;
this.meta13158 = meta13158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t13157.cljs$lang$type = true;
domina.t13157.cljs$lang$ctorStr = "domina/t13157";
domina.t13157.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina/t13157");
});
domina.t13157.prototype.domina$DomContent$ = true;
domina.t13157.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(self__.class_name))));
});
domina.t13157.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name(self__.class_name))));
});
domina.t13157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13159){
var self__ = this;
return self__.meta13158;
});
domina.t13157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13159,meta13158__$1){
var self__ = this;
return (new domina.t13157(self__.class_name,self__.by_class,meta13158__$1));
});
domina.__GT_t13157 = (function __GT_t13157(class_name__$1,by_class__$1,meta13158){
return (new domina.t13157(class_name__$1,by_class__$1,meta13158));
});
} else
{}
return (new domina.t13157(class_name,by_class,null));
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13160){
var contents = cljs.core.seq(arglist__13160);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13161_SHARP_){
return p1__13161_SHARP_.cloneNode(true);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13162_SHARP_,p2__13163_SHARP_){
return goog.dom.insertChildAt(p1__13162_SHARP_,p2__13163_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__13162_SHARP_,p2__13163_SHARP_){
return goog.dom.insertChildAt(p1__13162_SHARP_,p2__13163_SHARP_,idx);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13165_SHARP_,p2__13164_SHARP_){
return goog.dom.insertSiblingBefore(p2__13164_SHARP_,p1__13165_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13165_SHARP_,p2__13164_SHARP_){
return goog.dom.insertSiblingBefore(p2__13164_SHARP_,p1__13165_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13167_SHARP_,p2__13166_SHARP_){
return goog.dom.insertSiblingAfter(p2__13166_SHARP_,p1__13167_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13167_SHARP_,p2__13166_SHARP_){
return goog.dom.insertSiblingAfter(p2__13166_SHARP_,p1__13167_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13169_SHARP_,p2__13168_SHARP_){
return goog.dom.replaceNode(p2__13168_SHARP_,p1__13169_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13169_SHARP_,p2__13168_SHARP_){
return goog.dom.replaceNode(p2__13168_SHARP_,p1__13169_SHARP_);
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
var seq__13174_13178 = cljs.core.seq(domina.nodes(content));
var chunk__13175_13179 = null;
var count__13176_13180 = 0;
var i__13177_13181 = 0;
while(true){
if((i__13177_13181 < count__13176_13180))
{var n_13182 = chunk__13175_13179.cljs$core$IIndexed$_nth$arity$2(chunk__13175_13179,i__13177_13181);
goog.style.setStyle(n_13182,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13183 = seq__13174_13178;
var G__13184 = chunk__13175_13179;
var G__13185 = count__13176_13180;
var G__13186 = (i__13177_13181 + 1);
seq__13174_13178 = G__13183;
chunk__13175_13179 = G__13184;
count__13176_13180 = G__13185;
i__13177_13181 = G__13186;
continue;
}
} else
{var temp__4092__auto___13187 = cljs.core.seq(seq__13174_13178);
if(temp__4092__auto___13187)
{var seq__13174_13188__$1 = temp__4092__auto___13187;
if(cljs.core.chunked_seq_QMARK_(seq__13174_13188__$1))
{var c__9646__auto___13189 = cljs.core.chunk_first(seq__13174_13188__$1);
{
var G__13190 = cljs.core.chunk_rest(seq__13174_13188__$1);
var G__13191 = c__9646__auto___13189;
var G__13192 = cljs.core.count(c__9646__auto___13189);
var G__13193 = 0;
seq__13174_13178 = G__13190;
chunk__13175_13179 = G__13191;
count__13176_13180 = G__13192;
i__13177_13181 = G__13193;
continue;
}
} else
{var n_13194 = cljs.core.first(seq__13174_13188__$1);
goog.style.setStyle(n_13194,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13195 = cljs.core.next(seq__13174_13188__$1);
var G__13196 = null;
var G__13197 = 0;
var G__13198 = 0;
seq__13174_13178 = G__13195;
chunk__13175_13179 = G__13196;
count__13176_13180 = G__13197;
i__13177_13181 = G__13198;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13199){
var content = cljs.core.first(arglist__13199);
arglist__13199 = cljs.core.next(arglist__13199);
var name = cljs.core.first(arglist__13199);
var value = cljs.core.rest(arglist__13199);
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
var seq__13204_13208 = cljs.core.seq(domina.nodes(content));
var chunk__13205_13209 = null;
var count__13206_13210 = 0;
var i__13207_13211 = 0;
while(true){
if((i__13207_13211 < count__13206_13210))
{var n_13212 = chunk__13205_13209.cljs$core$IIndexed$_nth$arity$2(chunk__13205_13209,i__13207_13211);
n_13212.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13213 = seq__13204_13208;
var G__13214 = chunk__13205_13209;
var G__13215 = count__13206_13210;
var G__13216 = (i__13207_13211 + 1);
seq__13204_13208 = G__13213;
chunk__13205_13209 = G__13214;
count__13206_13210 = G__13215;
i__13207_13211 = G__13216;
continue;
}
} else
{var temp__4092__auto___13217 = cljs.core.seq(seq__13204_13208);
if(temp__4092__auto___13217)
{var seq__13204_13218__$1 = temp__4092__auto___13217;
if(cljs.core.chunked_seq_QMARK_(seq__13204_13218__$1))
{var c__9646__auto___13219 = cljs.core.chunk_first(seq__13204_13218__$1);
{
var G__13220 = cljs.core.chunk_rest(seq__13204_13218__$1);
var G__13221 = c__9646__auto___13219;
var G__13222 = cljs.core.count(c__9646__auto___13219);
var G__13223 = 0;
seq__13204_13208 = G__13220;
chunk__13205_13209 = G__13221;
count__13206_13210 = G__13222;
i__13207_13211 = G__13223;
continue;
}
} else
{var n_13224 = cljs.core.first(seq__13204_13218__$1);
n_13224.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13225 = cljs.core.next(seq__13204_13218__$1);
var G__13226 = null;
var G__13227 = 0;
var G__13228 = 0;
seq__13204_13208 = G__13225;
chunk__13205_13209 = G__13226;
count__13206_13210 = G__13227;
i__13207_13211 = G__13228;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13229){
var content = cljs.core.first(arglist__13229);
arglist__13229 = cljs.core.next(arglist__13229);
var name = cljs.core.first(arglist__13229);
var value = cljs.core.rest(arglist__13229);
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
var seq__13234_13238 = cljs.core.seq(domina.nodes(content));
var chunk__13235_13239 = null;
var count__13236_13240 = 0;
var i__13237_13241 = 0;
while(true){
if((i__13237_13241 < count__13236_13240))
{var n_13242 = chunk__13235_13239.cljs$core$IIndexed$_nth$arity$2(chunk__13235_13239,i__13237_13241);
n_13242.removeAttribute(cljs.core.name(name));
{
var G__13243 = seq__13234_13238;
var G__13244 = chunk__13235_13239;
var G__13245 = count__13236_13240;
var G__13246 = (i__13237_13241 + 1);
seq__13234_13238 = G__13243;
chunk__13235_13239 = G__13244;
count__13236_13240 = G__13245;
i__13237_13241 = G__13246;
continue;
}
} else
{var temp__4092__auto___13247 = cljs.core.seq(seq__13234_13238);
if(temp__4092__auto___13247)
{var seq__13234_13248__$1 = temp__4092__auto___13247;
if(cljs.core.chunked_seq_QMARK_(seq__13234_13248__$1))
{var c__9646__auto___13249 = cljs.core.chunk_first(seq__13234_13248__$1);
{
var G__13250 = cljs.core.chunk_rest(seq__13234_13248__$1);
var G__13251 = c__9646__auto___13249;
var G__13252 = cljs.core.count(c__9646__auto___13249);
var G__13253 = 0;
seq__13234_13238 = G__13250;
chunk__13235_13239 = G__13251;
count__13236_13240 = G__13252;
i__13237_13241 = G__13253;
continue;
}
} else
{var n_13254 = cljs.core.first(seq__13234_13248__$1);
n_13254.removeAttribute(cljs.core.name(name));
{
var G__13255 = cljs.core.next(seq__13234_13248__$1);
var G__13256 = null;
var G__13257 = 0;
var G__13258 = 0;
seq__13234_13238 = G__13255;
chunk__13235_13239 = G__13256;
count__13236_13240 = G__13257;
i__13237_13241 = G__13258;
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
var vec__13260 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13260,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13260,1,null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13261_SHARP_){
var attr = attrs__$1.item(p1__13261_SHARP_);
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
var seq__13268_13274 = cljs.core.seq(styles);
var chunk__13269_13275 = null;
var count__13270_13276 = 0;
var i__13271_13277 = 0;
while(true){
if((i__13271_13277 < count__13270_13276))
{var vec__13272_13278 = chunk__13269_13275.cljs$core$IIndexed$_nth$arity$2(chunk__13269_13275,i__13271_13277);
var name_13279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13272_13278,0,null);
var value_13280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13272_13278,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13279,cljs.core.array_seq([value_13280], 0));
{
var G__13281 = seq__13268_13274;
var G__13282 = chunk__13269_13275;
var G__13283 = count__13270_13276;
var G__13284 = (i__13271_13277 + 1);
seq__13268_13274 = G__13281;
chunk__13269_13275 = G__13282;
count__13270_13276 = G__13283;
i__13271_13277 = G__13284;
continue;
}
} else
{var temp__4092__auto___13285 = cljs.core.seq(seq__13268_13274);
if(temp__4092__auto___13285)
{var seq__13268_13286__$1 = temp__4092__auto___13285;
if(cljs.core.chunked_seq_QMARK_(seq__13268_13286__$1))
{var c__9646__auto___13287 = cljs.core.chunk_first(seq__13268_13286__$1);
{
var G__13288 = cljs.core.chunk_rest(seq__13268_13286__$1);
var G__13289 = c__9646__auto___13287;
var G__13290 = cljs.core.count(c__9646__auto___13287);
var G__13291 = 0;
seq__13268_13274 = G__13288;
chunk__13269_13275 = G__13289;
count__13270_13276 = G__13290;
i__13271_13277 = G__13291;
continue;
}
} else
{var vec__13273_13292 = cljs.core.first(seq__13268_13286__$1);
var name_13293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13273_13292,0,null);
var value_13294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13273_13292,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13293,cljs.core.array_seq([value_13294], 0));
{
var G__13295 = cljs.core.next(seq__13268_13286__$1);
var G__13296 = null;
var G__13297 = 0;
var G__13298 = 0;
seq__13268_13274 = G__13295;
chunk__13269_13275 = G__13296;
count__13270_13276 = G__13297;
i__13271_13277 = G__13298;
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
var seq__13305_13311 = cljs.core.seq(attrs);
var chunk__13306_13312 = null;
var count__13307_13313 = 0;
var i__13308_13314 = 0;
while(true){
if((i__13308_13314 < count__13307_13313))
{var vec__13309_13315 = chunk__13306_13312.cljs$core$IIndexed$_nth$arity$2(chunk__13306_13312,i__13308_13314);
var name_13316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13309_13315,0,null);
var value_13317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13309_13315,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13316,cljs.core.array_seq([value_13317], 0));
{
var G__13318 = seq__13305_13311;
var G__13319 = chunk__13306_13312;
var G__13320 = count__13307_13313;
var G__13321 = (i__13308_13314 + 1);
seq__13305_13311 = G__13318;
chunk__13306_13312 = G__13319;
count__13307_13313 = G__13320;
i__13308_13314 = G__13321;
continue;
}
} else
{var temp__4092__auto___13322 = cljs.core.seq(seq__13305_13311);
if(temp__4092__auto___13322)
{var seq__13305_13323__$1 = temp__4092__auto___13322;
if(cljs.core.chunked_seq_QMARK_(seq__13305_13323__$1))
{var c__9646__auto___13324 = cljs.core.chunk_first(seq__13305_13323__$1);
{
var G__13325 = cljs.core.chunk_rest(seq__13305_13323__$1);
var G__13326 = c__9646__auto___13324;
var G__13327 = cljs.core.count(c__9646__auto___13324);
var G__13328 = 0;
seq__13305_13311 = G__13325;
chunk__13306_13312 = G__13326;
count__13307_13313 = G__13327;
i__13308_13314 = G__13328;
continue;
}
} else
{var vec__13310_13329 = cljs.core.first(seq__13305_13323__$1);
var name_13330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13310_13329,0,null);
var value_13331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13310_13329,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13330,cljs.core.array_seq([value_13331], 0));
{
var G__13332 = cljs.core.next(seq__13305_13323__$1);
var G__13333 = null;
var G__13334 = 0;
var G__13335 = 0;
seq__13305_13311 = G__13332;
chunk__13306_13312 = G__13333;
count__13307_13313 = G__13334;
i__13308_13314 = G__13335;
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
var seq__13340_13344 = cljs.core.seq(domina.nodes(content));
var chunk__13341_13345 = null;
var count__13342_13346 = 0;
var i__13343_13347 = 0;
while(true){
if((i__13343_13347 < count__13342_13346))
{var node_13348 = chunk__13341_13345.cljs$core$IIndexed$_nth$arity$2(chunk__13341_13345,i__13343_13347);
goog.dom.classes.add(node_13348,class$);
{
var G__13349 = seq__13340_13344;
var G__13350 = chunk__13341_13345;
var G__13351 = count__13342_13346;
var G__13352 = (i__13343_13347 + 1);
seq__13340_13344 = G__13349;
chunk__13341_13345 = G__13350;
count__13342_13346 = G__13351;
i__13343_13347 = G__13352;
continue;
}
} else
{var temp__4092__auto___13353 = cljs.core.seq(seq__13340_13344);
if(temp__4092__auto___13353)
{var seq__13340_13354__$1 = temp__4092__auto___13353;
if(cljs.core.chunked_seq_QMARK_(seq__13340_13354__$1))
{var c__9646__auto___13355 = cljs.core.chunk_first(seq__13340_13354__$1);
{
var G__13356 = cljs.core.chunk_rest(seq__13340_13354__$1);
var G__13357 = c__9646__auto___13355;
var G__13358 = cljs.core.count(c__9646__auto___13355);
var G__13359 = 0;
seq__13340_13344 = G__13356;
chunk__13341_13345 = G__13357;
count__13342_13346 = G__13358;
i__13343_13347 = G__13359;
continue;
}
} else
{var node_13360 = cljs.core.first(seq__13340_13354__$1);
goog.dom.classes.add(node_13360,class$);
{
var G__13361 = cljs.core.next(seq__13340_13354__$1);
var G__13362 = null;
var G__13363 = 0;
var G__13364 = 0;
seq__13340_13344 = G__13361;
chunk__13341_13345 = G__13362;
count__13342_13346 = G__13363;
i__13343_13347 = G__13364;
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
var seq__13369_13373 = cljs.core.seq(domina.nodes(content));
var chunk__13370_13374 = null;
var count__13371_13375 = 0;
var i__13372_13376 = 0;
while(true){
if((i__13372_13376 < count__13371_13375))
{var node_13377 = chunk__13370_13374.cljs$core$IIndexed$_nth$arity$2(chunk__13370_13374,i__13372_13376);
goog.dom.classes.remove(node_13377,class$);
{
var G__13378 = seq__13369_13373;
var G__13379 = chunk__13370_13374;
var G__13380 = count__13371_13375;
var G__13381 = (i__13372_13376 + 1);
seq__13369_13373 = G__13378;
chunk__13370_13374 = G__13379;
count__13371_13375 = G__13380;
i__13372_13376 = G__13381;
continue;
}
} else
{var temp__4092__auto___13382 = cljs.core.seq(seq__13369_13373);
if(temp__4092__auto___13382)
{var seq__13369_13383__$1 = temp__4092__auto___13382;
if(cljs.core.chunked_seq_QMARK_(seq__13369_13383__$1))
{var c__9646__auto___13384 = cljs.core.chunk_first(seq__13369_13383__$1);
{
var G__13385 = cljs.core.chunk_rest(seq__13369_13383__$1);
var G__13386 = c__9646__auto___13384;
var G__13387 = cljs.core.count(c__9646__auto___13384);
var G__13388 = 0;
seq__13369_13373 = G__13385;
chunk__13370_13374 = G__13386;
count__13371_13375 = G__13387;
i__13372_13376 = G__13388;
continue;
}
} else
{var node_13389 = cljs.core.first(seq__13369_13383__$1);
goog.dom.classes.remove(node_13389,class$);
{
var G__13390 = cljs.core.next(seq__13369_13383__$1);
var G__13391 = null;
var G__13392 = 0;
var G__13393 = 0;
seq__13369_13373 = G__13390;
chunk__13370_13374 = G__13391;
count__13371_13375 = G__13392;
i__13372_13376 = G__13393;
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
var classes_13402__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__13398_13403 = cljs.core.seq(domina.nodes(content));
var chunk__13399_13404 = null;
var count__13400_13405 = 0;
var i__13401_13406 = 0;
while(true){
if((i__13401_13406 < count__13400_13405))
{var node_13407 = chunk__13399_13404.cljs$core$IIndexed$_nth$arity$2(chunk__13399_13404,i__13401_13406);
goog.dom.classes.set(node_13407,classes_13402__$1);
{
var G__13408 = seq__13398_13403;
var G__13409 = chunk__13399_13404;
var G__13410 = count__13400_13405;
var G__13411 = (i__13401_13406 + 1);
seq__13398_13403 = G__13408;
chunk__13399_13404 = G__13409;
count__13400_13405 = G__13410;
i__13401_13406 = G__13411;
continue;
}
} else
{var temp__4092__auto___13412 = cljs.core.seq(seq__13398_13403);
if(temp__4092__auto___13412)
{var seq__13398_13413__$1 = temp__4092__auto___13412;
if(cljs.core.chunked_seq_QMARK_(seq__13398_13413__$1))
{var c__9646__auto___13414 = cljs.core.chunk_first(seq__13398_13413__$1);
{
var G__13415 = cljs.core.chunk_rest(seq__13398_13413__$1);
var G__13416 = c__9646__auto___13414;
var G__13417 = cljs.core.count(c__9646__auto___13414);
var G__13418 = 0;
seq__13398_13403 = G__13415;
chunk__13399_13404 = G__13416;
count__13400_13405 = G__13417;
i__13401_13406 = G__13418;
continue;
}
} else
{var node_13419 = cljs.core.first(seq__13398_13413__$1);
goog.dom.classes.set(node_13419,classes_13402__$1);
{
var G__13420 = cljs.core.next(seq__13398_13413__$1);
var G__13421 = null;
var G__13422 = 0;
var G__13423 = 0;
seq__13398_13403 = G__13420;
chunk__13399_13404 = G__13421;
count__13400_13405 = G__13422;
i__13401_13406 = G__13423;
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
var seq__13428_13432 = cljs.core.seq(domina.nodes(content));
var chunk__13429_13433 = null;
var count__13430_13434 = 0;
var i__13431_13435 = 0;
while(true){
if((i__13431_13435 < count__13430_13434))
{var node_13436 = chunk__13429_13433.cljs$core$IIndexed$_nth$arity$2(chunk__13429_13433,i__13431_13435);
goog.dom.setTextContent(node_13436,value);
{
var G__13437 = seq__13428_13432;
var G__13438 = chunk__13429_13433;
var G__13439 = count__13430_13434;
var G__13440 = (i__13431_13435 + 1);
seq__13428_13432 = G__13437;
chunk__13429_13433 = G__13438;
count__13430_13434 = G__13439;
i__13431_13435 = G__13440;
continue;
}
} else
{var temp__4092__auto___13441 = cljs.core.seq(seq__13428_13432);
if(temp__4092__auto___13441)
{var seq__13428_13442__$1 = temp__4092__auto___13441;
if(cljs.core.chunked_seq_QMARK_(seq__13428_13442__$1))
{var c__9646__auto___13443 = cljs.core.chunk_first(seq__13428_13442__$1);
{
var G__13444 = cljs.core.chunk_rest(seq__13428_13442__$1);
var G__13445 = c__9646__auto___13443;
var G__13446 = cljs.core.count(c__9646__auto___13443);
var G__13447 = 0;
seq__13428_13432 = G__13444;
chunk__13429_13433 = G__13445;
count__13430_13434 = G__13446;
i__13431_13435 = G__13447;
continue;
}
} else
{var node_13448 = cljs.core.first(seq__13428_13442__$1);
goog.dom.setTextContent(node_13448,value);
{
var G__13449 = cljs.core.next(seq__13428_13442__$1);
var G__13450 = null;
var G__13451 = 0;
var G__13452 = 0;
seq__13428_13432 = G__13449;
chunk__13429_13433 = G__13450;
count__13430_13434 = G__13451;
i__13431_13435 = G__13452;
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
var seq__13457_13461 = cljs.core.seq(domina.nodes(content));
var chunk__13458_13462 = null;
var count__13459_13463 = 0;
var i__13460_13464 = 0;
while(true){
if((i__13460_13464 < count__13459_13463))
{var node_13465 = chunk__13458_13462.cljs$core$IIndexed$_nth$arity$2(chunk__13458_13462,i__13460_13464);
goog.dom.forms.setValue(node_13465,value);
{
var G__13466 = seq__13457_13461;
var G__13467 = chunk__13458_13462;
var G__13468 = count__13459_13463;
var G__13469 = (i__13460_13464 + 1);
seq__13457_13461 = G__13466;
chunk__13458_13462 = G__13467;
count__13459_13463 = G__13468;
i__13460_13464 = G__13469;
continue;
}
} else
{var temp__4092__auto___13470 = cljs.core.seq(seq__13457_13461);
if(temp__4092__auto___13470)
{var seq__13457_13471__$1 = temp__4092__auto___13470;
if(cljs.core.chunked_seq_QMARK_(seq__13457_13471__$1))
{var c__9646__auto___13472 = cljs.core.chunk_first(seq__13457_13471__$1);
{
var G__13473 = cljs.core.chunk_rest(seq__13457_13471__$1);
var G__13474 = c__9646__auto___13472;
var G__13475 = cljs.core.count(c__9646__auto___13472);
var G__13476 = 0;
seq__13457_13461 = G__13473;
chunk__13458_13462 = G__13474;
count__13459_13463 = G__13475;
i__13460_13464 = G__13476;
continue;
}
} else
{var node_13477 = cljs.core.first(seq__13457_13471__$1);
goog.dom.forms.setValue(node_13477,value);
{
var G__13478 = cljs.core.next(seq__13457_13471__$1);
var G__13479 = null;
var G__13480 = 0;
var G__13481 = 0;
seq__13457_13461 = G__13478;
chunk__13458_13462 = G__13479;
count__13459_13463 = G__13480;
i__13460_13464 = G__13481;
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
{var value_13492 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13488_13493 = cljs.core.seq(domina.nodes(content));
var chunk__13489_13494 = null;
var count__13490_13495 = 0;
var i__13491_13496 = 0;
while(true){
if((i__13491_13496 < count__13490_13495))
{var node_13497 = chunk__13489_13494.cljs$core$IIndexed$_nth$arity$2(chunk__13489_13494,i__13491_13496);
goog.events.removeAll(node_13497);
node_13497.innerHTML = value_13492;
{
var G__13498 = seq__13488_13493;
var G__13499 = chunk__13489_13494;
var G__13500 = count__13490_13495;
var G__13501 = (i__13491_13496 + 1);
seq__13488_13493 = G__13498;
chunk__13489_13494 = G__13499;
count__13490_13495 = G__13500;
i__13491_13496 = G__13501;
continue;
}
} else
{var temp__4092__auto___13502 = cljs.core.seq(seq__13488_13493);
if(temp__4092__auto___13502)
{var seq__13488_13503__$1 = temp__4092__auto___13502;
if(cljs.core.chunked_seq_QMARK_(seq__13488_13503__$1))
{var c__9646__auto___13504 = cljs.core.chunk_first(seq__13488_13503__$1);
{
var G__13505 = cljs.core.chunk_rest(seq__13488_13503__$1);
var G__13506 = c__9646__auto___13504;
var G__13507 = cljs.core.count(c__9646__auto___13504);
var G__13508 = 0;
seq__13488_13493 = G__13505;
chunk__13489_13494 = G__13506;
count__13490_13495 = G__13507;
i__13491_13496 = G__13508;
continue;
}
} else
{var node_13509 = cljs.core.first(seq__13488_13503__$1);
goog.events.removeAll(node_13509);
node_13509.innerHTML = value_13492;
{
var G__13510 = cljs.core.next(seq__13488_13503__$1);
var G__13511 = null;
var G__13512 = 0;
var G__13513 = 0;
seq__13488_13493 = G__13510;
chunk__13489_13494 = G__13511;
count__13490_13495 = G__13512;
i__13491_13496 = G__13513;
continue;
}
}
} else
{}
}
break;
}
}catch (e13487){if((e13487 instanceof Error))
{var e_13514 = e13487;
domina.replace_children_BANG_(content,value_13492);
} else
{if("\uFDD0:else")
{throw e13487;
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
var seq__13521_13525 = cljs.core.seq(children);
var chunk__13522_13526 = null;
var count__13523_13527 = 0;
var i__13524_13528 = 0;
while(true){
if((i__13524_13528 < count__13523_13527))
{var child_13529 = chunk__13522_13526.cljs$core$IIndexed$_nth$arity$2(chunk__13522_13526,i__13524_13528);
frag.appendChild(child_13529);
{
var G__13530 = seq__13521_13525;
var G__13531 = chunk__13522_13526;
var G__13532 = count__13523_13527;
var G__13533 = (i__13524_13528 + 1);
seq__13521_13525 = G__13530;
chunk__13522_13526 = G__13531;
count__13523_13527 = G__13532;
i__13524_13528 = G__13533;
continue;
}
} else
{var temp__4092__auto___13534 = cljs.core.seq(seq__13521_13525);
if(temp__4092__auto___13534)
{var seq__13521_13535__$1 = temp__4092__auto___13534;
if(cljs.core.chunked_seq_QMARK_(seq__13521_13535__$1))
{var c__9646__auto___13536 = cljs.core.chunk_first(seq__13521_13535__$1);
{
var G__13537 = cljs.core.chunk_rest(seq__13521_13535__$1);
var G__13538 = c__9646__auto___13536;
var G__13539 = cljs.core.count(c__9646__auto___13536);
var G__13540 = 0;
seq__13521_13525 = G__13537;
chunk__13522_13526 = G__13538;
count__13523_13527 = G__13539;
i__13524_13528 = G__13540;
continue;
}
} else
{var child_13541 = cljs.core.first(seq__13521_13535__$1);
frag.appendChild(child_13541);
{
var G__13542 = cljs.core.next(seq__13521_13535__$1);
var G__13543 = null;
var G__13544 = 0;
var G__13545 = 0;
seq__13521_13525 = G__13542;
chunk__13522_13526 = G__13543;
count__13523_13527 = G__13544;
i__13524_13528 = G__13545;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__13515_SHARP_,p2__13516_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__13515_SHARP_,p2__13516_SHARP_) : f.call(null,p1__13515_SHARP_,p2__13516_SHARP_));
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
{if((function (){var G__13547 = list_thing;
if(G__13547)
{if((function (){var or__3943__auto__ = (G__13547.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13547.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13547.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13547);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13547);
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
{if((function (){var G__13548 = content;
if(G__13548)
{if((function (){var or__3943__auto__ = (G__13548.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13548.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13548);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13548);
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
{if((function (){var G__13549 = content;
if(G__13549)
{if((function (){var or__3943__auto__ = (G__13549.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13549.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13549.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13549);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13549);
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
