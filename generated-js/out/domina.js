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
var opt_wrapper_13494 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_13495 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_13496 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_13495,table_section_wrapper_13495,opt_wrapper_13494,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_13496,table_section_wrapper_13495,cell_wrapper_13496,opt_wrapper_13494,table_section_wrapper_13495,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_13495]);
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
var seq__13501 = cljs.core.seq(tbody);
var chunk__13502 = null;
var count__13503 = 0;
var i__13504 = 0;
while(true){
if((i__13504 < count__13503))
{var child = chunk__13502.cljs$core$IIndexed$_nth$arity$2(chunk__13502,i__13504);
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
var G__13505 = seq__13501;
var G__13506 = chunk__13502;
var G__13507 = count__13503;
var G__13508 = (i__13504 + 1);
seq__13501 = G__13505;
chunk__13502 = G__13506;
count__13503 = G__13507;
i__13504 = G__13508;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13501);
if(temp__4092__auto__)
{var seq__13501__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13501__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13501__$1);
{
var G__13509 = cljs.core.chunk_rest(seq__13501__$1);
var G__13510 = c__9646__auto__;
var G__13511 = cljs.core.count(c__9646__auto__);
var G__13512 = 0;
seq__13501 = G__13509;
chunk__13502 = G__13510;
count__13503 = G__13511;
i__13504 = G__13512;
continue;
}
} else
{var child = cljs.core.first(seq__13501__$1);
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
var G__13513 = cljs.core.next(seq__13501__$1);
var G__13514 = null;
var G__13515 = 0;
var G__13516 = 0;
seq__13501 = G__13513;
chunk__13502 = G__13514;
count__13503 = G__13515;
i__13504 = G__13516;
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
var vec__13518 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13518,0,null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13518,1,null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13518,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__13519 = wrapper.lastChild;
var G__13520 = (level - 1);
wrapper = G__13519;
level = G__13520;
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
log_debug.cljs$lang$applyTo = (function (arglist__13521){
var mesg = cljs.core.seq(arglist__13521);
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
log.cljs$lang$applyTo = (function (arglist__13522){
var mesg = cljs.core.seq(arglist__13522);
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
if((void 0 === domina.t13526))
{goog.provide('domina.t13526');

/**
* @constructor
*/
domina.t13526 = (function (class_name,by_class,meta13527){
this.class_name = class_name;
this.by_class = by_class;
this.meta13527 = meta13527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t13526.cljs$lang$type = true;
domina.t13526.cljs$lang$ctorStr = "domina/t13526";
domina.t13526.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina/t13526");
});
domina.t13526.prototype.domina$DomContent$ = true;
domina.t13526.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(self__.class_name))));
});
domina.t13526.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name(self__.class_name))));
});
domina.t13526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13528){
var self__ = this;
return self__.meta13527;
});
domina.t13526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13528,meta13527__$1){
var self__ = this;
return (new domina.t13526(self__.class_name,self__.by_class,meta13527__$1));
});
domina.__GT_t13526 = (function __GT_t13526(class_name__$1,by_class__$1,meta13527){
return (new domina.t13526(class_name__$1,by_class__$1,meta13527));
});
} else
{}
return (new domina.t13526(class_name,by_class,null));
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13529){
var contents = cljs.core.seq(arglist__13529);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13530_SHARP_){
return p1__13530_SHARP_.cloneNode(true);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13531_SHARP_,p2__13532_SHARP_){
return goog.dom.insertChildAt(p1__13531_SHARP_,p2__13532_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__13531_SHARP_,p2__13532_SHARP_){
return goog.dom.insertChildAt(p1__13531_SHARP_,p2__13532_SHARP_,idx);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13534_SHARP_,p2__13533_SHARP_){
return goog.dom.insertSiblingBefore(p2__13533_SHARP_,p1__13534_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13534_SHARP_,p2__13533_SHARP_){
return goog.dom.insertSiblingBefore(p2__13533_SHARP_,p1__13534_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13536_SHARP_,p2__13535_SHARP_){
return goog.dom.insertSiblingAfter(p2__13535_SHARP_,p1__13536_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13536_SHARP_,p2__13535_SHARP_){
return goog.dom.insertSiblingAfter(p2__13535_SHARP_,p1__13536_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13538_SHARP_,p2__13537_SHARP_){
return goog.dom.replaceNode(p2__13537_SHARP_,p1__13538_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13538_SHARP_,p2__13537_SHARP_){
return goog.dom.replaceNode(p2__13537_SHARP_,p1__13538_SHARP_);
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
var seq__13543_13547 = cljs.core.seq(domina.nodes(content));
var chunk__13544_13548 = null;
var count__13545_13549 = 0;
var i__13546_13550 = 0;
while(true){
if((i__13546_13550 < count__13545_13549))
{var n_13551 = chunk__13544_13548.cljs$core$IIndexed$_nth$arity$2(chunk__13544_13548,i__13546_13550);
goog.style.setStyle(n_13551,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13552 = seq__13543_13547;
var G__13553 = chunk__13544_13548;
var G__13554 = count__13545_13549;
var G__13555 = (i__13546_13550 + 1);
seq__13543_13547 = G__13552;
chunk__13544_13548 = G__13553;
count__13545_13549 = G__13554;
i__13546_13550 = G__13555;
continue;
}
} else
{var temp__4092__auto___13556 = cljs.core.seq(seq__13543_13547);
if(temp__4092__auto___13556)
{var seq__13543_13557__$1 = temp__4092__auto___13556;
if(cljs.core.chunked_seq_QMARK_(seq__13543_13557__$1))
{var c__9646__auto___13558 = cljs.core.chunk_first(seq__13543_13557__$1);
{
var G__13559 = cljs.core.chunk_rest(seq__13543_13557__$1);
var G__13560 = c__9646__auto___13558;
var G__13561 = cljs.core.count(c__9646__auto___13558);
var G__13562 = 0;
seq__13543_13547 = G__13559;
chunk__13544_13548 = G__13560;
count__13545_13549 = G__13561;
i__13546_13550 = G__13562;
continue;
}
} else
{var n_13563 = cljs.core.first(seq__13543_13557__$1);
goog.style.setStyle(n_13563,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13564 = cljs.core.next(seq__13543_13557__$1);
var G__13565 = null;
var G__13566 = 0;
var G__13567 = 0;
seq__13543_13547 = G__13564;
chunk__13544_13548 = G__13565;
count__13545_13549 = G__13566;
i__13546_13550 = G__13567;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13568){
var content = cljs.core.first(arglist__13568);
arglist__13568 = cljs.core.next(arglist__13568);
var name = cljs.core.first(arglist__13568);
var value = cljs.core.rest(arglist__13568);
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
var seq__13573_13577 = cljs.core.seq(domina.nodes(content));
var chunk__13574_13578 = null;
var count__13575_13579 = 0;
var i__13576_13580 = 0;
while(true){
if((i__13576_13580 < count__13575_13579))
{var n_13581 = chunk__13574_13578.cljs$core$IIndexed$_nth$arity$2(chunk__13574_13578,i__13576_13580);
n_13581.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13582 = seq__13573_13577;
var G__13583 = chunk__13574_13578;
var G__13584 = count__13575_13579;
var G__13585 = (i__13576_13580 + 1);
seq__13573_13577 = G__13582;
chunk__13574_13578 = G__13583;
count__13575_13579 = G__13584;
i__13576_13580 = G__13585;
continue;
}
} else
{var temp__4092__auto___13586 = cljs.core.seq(seq__13573_13577);
if(temp__4092__auto___13586)
{var seq__13573_13587__$1 = temp__4092__auto___13586;
if(cljs.core.chunked_seq_QMARK_(seq__13573_13587__$1))
{var c__9646__auto___13588 = cljs.core.chunk_first(seq__13573_13587__$1);
{
var G__13589 = cljs.core.chunk_rest(seq__13573_13587__$1);
var G__13590 = c__9646__auto___13588;
var G__13591 = cljs.core.count(c__9646__auto___13588);
var G__13592 = 0;
seq__13573_13577 = G__13589;
chunk__13574_13578 = G__13590;
count__13575_13579 = G__13591;
i__13576_13580 = G__13592;
continue;
}
} else
{var n_13593 = cljs.core.first(seq__13573_13587__$1);
n_13593.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13594 = cljs.core.next(seq__13573_13587__$1);
var G__13595 = null;
var G__13596 = 0;
var G__13597 = 0;
seq__13573_13577 = G__13594;
chunk__13574_13578 = G__13595;
count__13575_13579 = G__13596;
i__13576_13580 = G__13597;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13598){
var content = cljs.core.first(arglist__13598);
arglist__13598 = cljs.core.next(arglist__13598);
var name = cljs.core.first(arglist__13598);
var value = cljs.core.rest(arglist__13598);
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
var seq__13603_13607 = cljs.core.seq(domina.nodes(content));
var chunk__13604_13608 = null;
var count__13605_13609 = 0;
var i__13606_13610 = 0;
while(true){
if((i__13606_13610 < count__13605_13609))
{var n_13611 = chunk__13604_13608.cljs$core$IIndexed$_nth$arity$2(chunk__13604_13608,i__13606_13610);
n_13611.removeAttribute(cljs.core.name(name));
{
var G__13612 = seq__13603_13607;
var G__13613 = chunk__13604_13608;
var G__13614 = count__13605_13609;
var G__13615 = (i__13606_13610 + 1);
seq__13603_13607 = G__13612;
chunk__13604_13608 = G__13613;
count__13605_13609 = G__13614;
i__13606_13610 = G__13615;
continue;
}
} else
{var temp__4092__auto___13616 = cljs.core.seq(seq__13603_13607);
if(temp__4092__auto___13616)
{var seq__13603_13617__$1 = temp__4092__auto___13616;
if(cljs.core.chunked_seq_QMARK_(seq__13603_13617__$1))
{var c__9646__auto___13618 = cljs.core.chunk_first(seq__13603_13617__$1);
{
var G__13619 = cljs.core.chunk_rest(seq__13603_13617__$1);
var G__13620 = c__9646__auto___13618;
var G__13621 = cljs.core.count(c__9646__auto___13618);
var G__13622 = 0;
seq__13603_13607 = G__13619;
chunk__13604_13608 = G__13620;
count__13605_13609 = G__13621;
i__13606_13610 = G__13622;
continue;
}
} else
{var n_13623 = cljs.core.first(seq__13603_13617__$1);
n_13623.removeAttribute(cljs.core.name(name));
{
var G__13624 = cljs.core.next(seq__13603_13617__$1);
var G__13625 = null;
var G__13626 = 0;
var G__13627 = 0;
seq__13603_13607 = G__13624;
chunk__13604_13608 = G__13625;
count__13605_13609 = G__13626;
i__13606_13610 = G__13627;
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
var vec__13629 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629,1,null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13630_SHARP_){
var attr = attrs__$1.item(p1__13630_SHARP_);
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
var seq__13637_13643 = cljs.core.seq(styles);
var chunk__13638_13644 = null;
var count__13639_13645 = 0;
var i__13640_13646 = 0;
while(true){
if((i__13640_13646 < count__13639_13645))
{var vec__13641_13647 = chunk__13638_13644.cljs$core$IIndexed$_nth$arity$2(chunk__13638_13644,i__13640_13646);
var name_13648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13641_13647,0,null);
var value_13649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13641_13647,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13648,cljs.core.array_seq([value_13649], 0));
{
var G__13650 = seq__13637_13643;
var G__13651 = chunk__13638_13644;
var G__13652 = count__13639_13645;
var G__13653 = (i__13640_13646 + 1);
seq__13637_13643 = G__13650;
chunk__13638_13644 = G__13651;
count__13639_13645 = G__13652;
i__13640_13646 = G__13653;
continue;
}
} else
{var temp__4092__auto___13654 = cljs.core.seq(seq__13637_13643);
if(temp__4092__auto___13654)
{var seq__13637_13655__$1 = temp__4092__auto___13654;
if(cljs.core.chunked_seq_QMARK_(seq__13637_13655__$1))
{var c__9646__auto___13656 = cljs.core.chunk_first(seq__13637_13655__$1);
{
var G__13657 = cljs.core.chunk_rest(seq__13637_13655__$1);
var G__13658 = c__9646__auto___13656;
var G__13659 = cljs.core.count(c__9646__auto___13656);
var G__13660 = 0;
seq__13637_13643 = G__13657;
chunk__13638_13644 = G__13658;
count__13639_13645 = G__13659;
i__13640_13646 = G__13660;
continue;
}
} else
{var vec__13642_13661 = cljs.core.first(seq__13637_13655__$1);
var name_13662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13642_13661,0,null);
var value_13663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13642_13661,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13662,cljs.core.array_seq([value_13663], 0));
{
var G__13664 = cljs.core.next(seq__13637_13655__$1);
var G__13665 = null;
var G__13666 = 0;
var G__13667 = 0;
seq__13637_13643 = G__13664;
chunk__13638_13644 = G__13665;
count__13639_13645 = G__13666;
i__13640_13646 = G__13667;
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
var seq__13674_13680 = cljs.core.seq(attrs);
var chunk__13675_13681 = null;
var count__13676_13682 = 0;
var i__13677_13683 = 0;
while(true){
if((i__13677_13683 < count__13676_13682))
{var vec__13678_13684 = chunk__13675_13681.cljs$core$IIndexed$_nth$arity$2(chunk__13675_13681,i__13677_13683);
var name_13685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678_13684,0,null);
var value_13686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678_13684,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13685,cljs.core.array_seq([value_13686], 0));
{
var G__13687 = seq__13674_13680;
var G__13688 = chunk__13675_13681;
var G__13689 = count__13676_13682;
var G__13690 = (i__13677_13683 + 1);
seq__13674_13680 = G__13687;
chunk__13675_13681 = G__13688;
count__13676_13682 = G__13689;
i__13677_13683 = G__13690;
continue;
}
} else
{var temp__4092__auto___13691 = cljs.core.seq(seq__13674_13680);
if(temp__4092__auto___13691)
{var seq__13674_13692__$1 = temp__4092__auto___13691;
if(cljs.core.chunked_seq_QMARK_(seq__13674_13692__$1))
{var c__9646__auto___13693 = cljs.core.chunk_first(seq__13674_13692__$1);
{
var G__13694 = cljs.core.chunk_rest(seq__13674_13692__$1);
var G__13695 = c__9646__auto___13693;
var G__13696 = cljs.core.count(c__9646__auto___13693);
var G__13697 = 0;
seq__13674_13680 = G__13694;
chunk__13675_13681 = G__13695;
count__13676_13682 = G__13696;
i__13677_13683 = G__13697;
continue;
}
} else
{var vec__13679_13698 = cljs.core.first(seq__13674_13692__$1);
var name_13699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13679_13698,0,null);
var value_13700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13679_13698,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13699,cljs.core.array_seq([value_13700], 0));
{
var G__13701 = cljs.core.next(seq__13674_13692__$1);
var G__13702 = null;
var G__13703 = 0;
var G__13704 = 0;
seq__13674_13680 = G__13701;
chunk__13675_13681 = G__13702;
count__13676_13682 = G__13703;
i__13677_13683 = G__13704;
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
var seq__13709_13713 = cljs.core.seq(domina.nodes(content));
var chunk__13710_13714 = null;
var count__13711_13715 = 0;
var i__13712_13716 = 0;
while(true){
if((i__13712_13716 < count__13711_13715))
{var node_13717 = chunk__13710_13714.cljs$core$IIndexed$_nth$arity$2(chunk__13710_13714,i__13712_13716);
goog.dom.classes.add(node_13717,class$);
{
var G__13718 = seq__13709_13713;
var G__13719 = chunk__13710_13714;
var G__13720 = count__13711_13715;
var G__13721 = (i__13712_13716 + 1);
seq__13709_13713 = G__13718;
chunk__13710_13714 = G__13719;
count__13711_13715 = G__13720;
i__13712_13716 = G__13721;
continue;
}
} else
{var temp__4092__auto___13722 = cljs.core.seq(seq__13709_13713);
if(temp__4092__auto___13722)
{var seq__13709_13723__$1 = temp__4092__auto___13722;
if(cljs.core.chunked_seq_QMARK_(seq__13709_13723__$1))
{var c__9646__auto___13724 = cljs.core.chunk_first(seq__13709_13723__$1);
{
var G__13725 = cljs.core.chunk_rest(seq__13709_13723__$1);
var G__13726 = c__9646__auto___13724;
var G__13727 = cljs.core.count(c__9646__auto___13724);
var G__13728 = 0;
seq__13709_13713 = G__13725;
chunk__13710_13714 = G__13726;
count__13711_13715 = G__13727;
i__13712_13716 = G__13728;
continue;
}
} else
{var node_13729 = cljs.core.first(seq__13709_13723__$1);
goog.dom.classes.add(node_13729,class$);
{
var G__13730 = cljs.core.next(seq__13709_13723__$1);
var G__13731 = null;
var G__13732 = 0;
var G__13733 = 0;
seq__13709_13713 = G__13730;
chunk__13710_13714 = G__13731;
count__13711_13715 = G__13732;
i__13712_13716 = G__13733;
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
var seq__13738_13742 = cljs.core.seq(domina.nodes(content));
var chunk__13739_13743 = null;
var count__13740_13744 = 0;
var i__13741_13745 = 0;
while(true){
if((i__13741_13745 < count__13740_13744))
{var node_13746 = chunk__13739_13743.cljs$core$IIndexed$_nth$arity$2(chunk__13739_13743,i__13741_13745);
goog.dom.classes.remove(node_13746,class$);
{
var G__13747 = seq__13738_13742;
var G__13748 = chunk__13739_13743;
var G__13749 = count__13740_13744;
var G__13750 = (i__13741_13745 + 1);
seq__13738_13742 = G__13747;
chunk__13739_13743 = G__13748;
count__13740_13744 = G__13749;
i__13741_13745 = G__13750;
continue;
}
} else
{var temp__4092__auto___13751 = cljs.core.seq(seq__13738_13742);
if(temp__4092__auto___13751)
{var seq__13738_13752__$1 = temp__4092__auto___13751;
if(cljs.core.chunked_seq_QMARK_(seq__13738_13752__$1))
{var c__9646__auto___13753 = cljs.core.chunk_first(seq__13738_13752__$1);
{
var G__13754 = cljs.core.chunk_rest(seq__13738_13752__$1);
var G__13755 = c__9646__auto___13753;
var G__13756 = cljs.core.count(c__9646__auto___13753);
var G__13757 = 0;
seq__13738_13742 = G__13754;
chunk__13739_13743 = G__13755;
count__13740_13744 = G__13756;
i__13741_13745 = G__13757;
continue;
}
} else
{var node_13758 = cljs.core.first(seq__13738_13752__$1);
goog.dom.classes.remove(node_13758,class$);
{
var G__13759 = cljs.core.next(seq__13738_13752__$1);
var G__13760 = null;
var G__13761 = 0;
var G__13762 = 0;
seq__13738_13742 = G__13759;
chunk__13739_13743 = G__13760;
count__13740_13744 = G__13761;
i__13741_13745 = G__13762;
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
var classes_13771__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__13767_13772 = cljs.core.seq(domina.nodes(content));
var chunk__13768_13773 = null;
var count__13769_13774 = 0;
var i__13770_13775 = 0;
while(true){
if((i__13770_13775 < count__13769_13774))
{var node_13776 = chunk__13768_13773.cljs$core$IIndexed$_nth$arity$2(chunk__13768_13773,i__13770_13775);
goog.dom.classes.set(node_13776,classes_13771__$1);
{
var G__13777 = seq__13767_13772;
var G__13778 = chunk__13768_13773;
var G__13779 = count__13769_13774;
var G__13780 = (i__13770_13775 + 1);
seq__13767_13772 = G__13777;
chunk__13768_13773 = G__13778;
count__13769_13774 = G__13779;
i__13770_13775 = G__13780;
continue;
}
} else
{var temp__4092__auto___13781 = cljs.core.seq(seq__13767_13772);
if(temp__4092__auto___13781)
{var seq__13767_13782__$1 = temp__4092__auto___13781;
if(cljs.core.chunked_seq_QMARK_(seq__13767_13782__$1))
{var c__9646__auto___13783 = cljs.core.chunk_first(seq__13767_13782__$1);
{
var G__13784 = cljs.core.chunk_rest(seq__13767_13782__$1);
var G__13785 = c__9646__auto___13783;
var G__13786 = cljs.core.count(c__9646__auto___13783);
var G__13787 = 0;
seq__13767_13772 = G__13784;
chunk__13768_13773 = G__13785;
count__13769_13774 = G__13786;
i__13770_13775 = G__13787;
continue;
}
} else
{var node_13788 = cljs.core.first(seq__13767_13782__$1);
goog.dom.classes.set(node_13788,classes_13771__$1);
{
var G__13789 = cljs.core.next(seq__13767_13782__$1);
var G__13790 = null;
var G__13791 = 0;
var G__13792 = 0;
seq__13767_13772 = G__13789;
chunk__13768_13773 = G__13790;
count__13769_13774 = G__13791;
i__13770_13775 = G__13792;
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
var seq__13797_13801 = cljs.core.seq(domina.nodes(content));
var chunk__13798_13802 = null;
var count__13799_13803 = 0;
var i__13800_13804 = 0;
while(true){
if((i__13800_13804 < count__13799_13803))
{var node_13805 = chunk__13798_13802.cljs$core$IIndexed$_nth$arity$2(chunk__13798_13802,i__13800_13804);
goog.dom.setTextContent(node_13805,value);
{
var G__13806 = seq__13797_13801;
var G__13807 = chunk__13798_13802;
var G__13808 = count__13799_13803;
var G__13809 = (i__13800_13804 + 1);
seq__13797_13801 = G__13806;
chunk__13798_13802 = G__13807;
count__13799_13803 = G__13808;
i__13800_13804 = G__13809;
continue;
}
} else
{var temp__4092__auto___13810 = cljs.core.seq(seq__13797_13801);
if(temp__4092__auto___13810)
{var seq__13797_13811__$1 = temp__4092__auto___13810;
if(cljs.core.chunked_seq_QMARK_(seq__13797_13811__$1))
{var c__9646__auto___13812 = cljs.core.chunk_first(seq__13797_13811__$1);
{
var G__13813 = cljs.core.chunk_rest(seq__13797_13811__$1);
var G__13814 = c__9646__auto___13812;
var G__13815 = cljs.core.count(c__9646__auto___13812);
var G__13816 = 0;
seq__13797_13801 = G__13813;
chunk__13798_13802 = G__13814;
count__13799_13803 = G__13815;
i__13800_13804 = G__13816;
continue;
}
} else
{var node_13817 = cljs.core.first(seq__13797_13811__$1);
goog.dom.setTextContent(node_13817,value);
{
var G__13818 = cljs.core.next(seq__13797_13811__$1);
var G__13819 = null;
var G__13820 = 0;
var G__13821 = 0;
seq__13797_13801 = G__13818;
chunk__13798_13802 = G__13819;
count__13799_13803 = G__13820;
i__13800_13804 = G__13821;
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
var seq__13826_13830 = cljs.core.seq(domina.nodes(content));
var chunk__13827_13831 = null;
var count__13828_13832 = 0;
var i__13829_13833 = 0;
while(true){
if((i__13829_13833 < count__13828_13832))
{var node_13834 = chunk__13827_13831.cljs$core$IIndexed$_nth$arity$2(chunk__13827_13831,i__13829_13833);
goog.dom.forms.setValue(node_13834,value);
{
var G__13835 = seq__13826_13830;
var G__13836 = chunk__13827_13831;
var G__13837 = count__13828_13832;
var G__13838 = (i__13829_13833 + 1);
seq__13826_13830 = G__13835;
chunk__13827_13831 = G__13836;
count__13828_13832 = G__13837;
i__13829_13833 = G__13838;
continue;
}
} else
{var temp__4092__auto___13839 = cljs.core.seq(seq__13826_13830);
if(temp__4092__auto___13839)
{var seq__13826_13840__$1 = temp__4092__auto___13839;
if(cljs.core.chunked_seq_QMARK_(seq__13826_13840__$1))
{var c__9646__auto___13841 = cljs.core.chunk_first(seq__13826_13840__$1);
{
var G__13842 = cljs.core.chunk_rest(seq__13826_13840__$1);
var G__13843 = c__9646__auto___13841;
var G__13844 = cljs.core.count(c__9646__auto___13841);
var G__13845 = 0;
seq__13826_13830 = G__13842;
chunk__13827_13831 = G__13843;
count__13828_13832 = G__13844;
i__13829_13833 = G__13845;
continue;
}
} else
{var node_13846 = cljs.core.first(seq__13826_13840__$1);
goog.dom.forms.setValue(node_13846,value);
{
var G__13847 = cljs.core.next(seq__13826_13840__$1);
var G__13848 = null;
var G__13849 = 0;
var G__13850 = 0;
seq__13826_13830 = G__13847;
chunk__13827_13831 = G__13848;
count__13828_13832 = G__13849;
i__13829_13833 = G__13850;
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
{var value_13861 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13857_13862 = cljs.core.seq(domina.nodes(content));
var chunk__13858_13863 = null;
var count__13859_13864 = 0;
var i__13860_13865 = 0;
while(true){
if((i__13860_13865 < count__13859_13864))
{var node_13866 = chunk__13858_13863.cljs$core$IIndexed$_nth$arity$2(chunk__13858_13863,i__13860_13865);
goog.events.removeAll(node_13866);
node_13866.innerHTML = value_13861;
{
var G__13867 = seq__13857_13862;
var G__13868 = chunk__13858_13863;
var G__13869 = count__13859_13864;
var G__13870 = (i__13860_13865 + 1);
seq__13857_13862 = G__13867;
chunk__13858_13863 = G__13868;
count__13859_13864 = G__13869;
i__13860_13865 = G__13870;
continue;
}
} else
{var temp__4092__auto___13871 = cljs.core.seq(seq__13857_13862);
if(temp__4092__auto___13871)
{var seq__13857_13872__$1 = temp__4092__auto___13871;
if(cljs.core.chunked_seq_QMARK_(seq__13857_13872__$1))
{var c__9646__auto___13873 = cljs.core.chunk_first(seq__13857_13872__$1);
{
var G__13874 = cljs.core.chunk_rest(seq__13857_13872__$1);
var G__13875 = c__9646__auto___13873;
var G__13876 = cljs.core.count(c__9646__auto___13873);
var G__13877 = 0;
seq__13857_13862 = G__13874;
chunk__13858_13863 = G__13875;
count__13859_13864 = G__13876;
i__13860_13865 = G__13877;
continue;
}
} else
{var node_13878 = cljs.core.first(seq__13857_13872__$1);
goog.events.removeAll(node_13878);
node_13878.innerHTML = value_13861;
{
var G__13879 = cljs.core.next(seq__13857_13872__$1);
var G__13880 = null;
var G__13881 = 0;
var G__13882 = 0;
seq__13857_13862 = G__13879;
chunk__13858_13863 = G__13880;
count__13859_13864 = G__13881;
i__13860_13865 = G__13882;
continue;
}
}
} else
{}
}
break;
}
}catch (e13856){if((e13856 instanceof Error))
{var e_13883 = e13856;
domina.replace_children_BANG_(content,value_13861);
} else
{if("\uFDD0:else")
{throw e13856;
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
var seq__13890_13894 = cljs.core.seq(children);
var chunk__13891_13895 = null;
var count__13892_13896 = 0;
var i__13893_13897 = 0;
while(true){
if((i__13893_13897 < count__13892_13896))
{var child_13898 = chunk__13891_13895.cljs$core$IIndexed$_nth$arity$2(chunk__13891_13895,i__13893_13897);
frag.appendChild(child_13898);
{
var G__13899 = seq__13890_13894;
var G__13900 = chunk__13891_13895;
var G__13901 = count__13892_13896;
var G__13902 = (i__13893_13897 + 1);
seq__13890_13894 = G__13899;
chunk__13891_13895 = G__13900;
count__13892_13896 = G__13901;
i__13893_13897 = G__13902;
continue;
}
} else
{var temp__4092__auto___13903 = cljs.core.seq(seq__13890_13894);
if(temp__4092__auto___13903)
{var seq__13890_13904__$1 = temp__4092__auto___13903;
if(cljs.core.chunked_seq_QMARK_(seq__13890_13904__$1))
{var c__9646__auto___13905 = cljs.core.chunk_first(seq__13890_13904__$1);
{
var G__13906 = cljs.core.chunk_rest(seq__13890_13904__$1);
var G__13907 = c__9646__auto___13905;
var G__13908 = cljs.core.count(c__9646__auto___13905);
var G__13909 = 0;
seq__13890_13894 = G__13906;
chunk__13891_13895 = G__13907;
count__13892_13896 = G__13908;
i__13893_13897 = G__13909;
continue;
}
} else
{var child_13910 = cljs.core.first(seq__13890_13904__$1);
frag.appendChild(child_13910);
{
var G__13911 = cljs.core.next(seq__13890_13904__$1);
var G__13912 = null;
var G__13913 = 0;
var G__13914 = 0;
seq__13890_13894 = G__13911;
chunk__13891_13895 = G__13912;
count__13892_13896 = G__13913;
i__13893_13897 = G__13914;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__13884_SHARP_,p2__13885_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__13884_SHARP_,p2__13885_SHARP_) : f.call(null,p1__13884_SHARP_,p2__13885_SHARP_));
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
{if((function (){var G__13916 = list_thing;
if(G__13916)
{if((function (){var or__3943__auto__ = (G__13916.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13916.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13916);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13916);
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
{if((function (){var G__13917 = content;
if(G__13917)
{if((function (){var or__3943__auto__ = (G__13917.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13917.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13917.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13917);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13917);
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
{if((function (){var G__13918 = content;
if(G__13918)
{if((function (){var or__3943__auto__ = (G__13918.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13918.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13918.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13918);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13918);
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
