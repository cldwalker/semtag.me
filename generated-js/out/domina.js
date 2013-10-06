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
var opt_wrapper_13471 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_13472 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_13473 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_13472,table_section_wrapper_13472,opt_wrapper_13471,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_13473,table_section_wrapper_13472,cell_wrapper_13473,opt_wrapper_13471,table_section_wrapper_13472,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_13472]);
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
var seq__13478 = cljs.core.seq(tbody);
var chunk__13479 = null;
var count__13480 = 0;
var i__13481 = 0;
while(true){
if((i__13481 < count__13480))
{var child = chunk__13479.cljs$core$IIndexed$_nth$arity$2(chunk__13479,i__13481);
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
var G__13482 = seq__13478;
var G__13483 = chunk__13479;
var G__13484 = count__13480;
var G__13485 = (i__13481 + 1);
seq__13478 = G__13482;
chunk__13479 = G__13483;
count__13480 = G__13484;
i__13481 = G__13485;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13478);
if(temp__4092__auto__)
{var seq__13478__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13478__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13478__$1);
{
var G__13486 = cljs.core.chunk_rest(seq__13478__$1);
var G__13487 = c__9646__auto__;
var G__13488 = cljs.core.count(c__9646__auto__);
var G__13489 = 0;
seq__13478 = G__13486;
chunk__13479 = G__13487;
count__13480 = G__13488;
i__13481 = G__13489;
continue;
}
} else
{var child = cljs.core.first(seq__13478__$1);
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
var G__13490 = cljs.core.next(seq__13478__$1);
var G__13491 = null;
var G__13492 = 0;
var G__13493 = 0;
seq__13478 = G__13490;
chunk__13479 = G__13491;
count__13480 = G__13492;
i__13481 = G__13493;
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
var vec__13495 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13495,0,null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13495,1,null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13495,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__13496 = wrapper.lastChild;
var G__13497 = (level - 1);
wrapper = G__13496;
level = G__13497;
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
log_debug.cljs$lang$applyTo = (function (arglist__13498){
var mesg = cljs.core.seq(arglist__13498);
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
log.cljs$lang$applyTo = (function (arglist__13499){
var mesg = cljs.core.seq(arglist__13499);
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
if((void 0 === domina.t13503))
{goog.provide('domina.t13503');

/**
* @constructor
*/
domina.t13503 = (function (class_name,by_class,meta13504){
this.class_name = class_name;
this.by_class = by_class;
this.meta13504 = meta13504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t13503.cljs$lang$type = true;
domina.t13503.cljs$lang$ctorStr = "domina/t13503";
domina.t13503.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina/t13503");
});
domina.t13503.prototype.domina$DomContent$ = true;
domina.t13503.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(self__.class_name))));
});
domina.t13503.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name(self__.class_name))));
});
domina.t13503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13505){
var self__ = this;
return self__.meta13504;
});
domina.t13503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13505,meta13504__$1){
var self__ = this;
return (new domina.t13503(self__.class_name,self__.by_class,meta13504__$1));
});
domina.__GT_t13503 = (function __GT_t13503(class_name__$1,by_class__$1,meta13504){
return (new domina.t13503(class_name__$1,by_class__$1,meta13504));
});
} else
{}
return (new domina.t13503(class_name,by_class,null));
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13506){
var contents = cljs.core.seq(arglist__13506);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13507_SHARP_){
return p1__13507_SHARP_.cloneNode(true);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13508_SHARP_,p2__13509_SHARP_){
return goog.dom.insertChildAt(p1__13508_SHARP_,p2__13509_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__13508_SHARP_,p2__13509_SHARP_){
return goog.dom.insertChildAt(p1__13508_SHARP_,p2__13509_SHARP_,idx);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13511_SHARP_,p2__13510_SHARP_){
return goog.dom.insertSiblingBefore(p2__13510_SHARP_,p1__13511_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13511_SHARP_,p2__13510_SHARP_){
return goog.dom.insertSiblingBefore(p2__13510_SHARP_,p1__13511_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13513_SHARP_,p2__13512_SHARP_){
return goog.dom.insertSiblingAfter(p2__13512_SHARP_,p1__13513_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13513_SHARP_,p2__13512_SHARP_){
return goog.dom.insertSiblingAfter(p2__13512_SHARP_,p1__13513_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13515_SHARP_,p2__13514_SHARP_){
return goog.dom.replaceNode(p2__13514_SHARP_,p1__13515_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13515_SHARP_,p2__13514_SHARP_){
return goog.dom.replaceNode(p2__13514_SHARP_,p1__13515_SHARP_);
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
var seq__13520_13524 = cljs.core.seq(domina.nodes(content));
var chunk__13521_13525 = null;
var count__13522_13526 = 0;
var i__13523_13527 = 0;
while(true){
if((i__13523_13527 < count__13522_13526))
{var n_13528 = chunk__13521_13525.cljs$core$IIndexed$_nth$arity$2(chunk__13521_13525,i__13523_13527);
goog.style.setStyle(n_13528,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13529 = seq__13520_13524;
var G__13530 = chunk__13521_13525;
var G__13531 = count__13522_13526;
var G__13532 = (i__13523_13527 + 1);
seq__13520_13524 = G__13529;
chunk__13521_13525 = G__13530;
count__13522_13526 = G__13531;
i__13523_13527 = G__13532;
continue;
}
} else
{var temp__4092__auto___13533 = cljs.core.seq(seq__13520_13524);
if(temp__4092__auto___13533)
{var seq__13520_13534__$1 = temp__4092__auto___13533;
if(cljs.core.chunked_seq_QMARK_(seq__13520_13534__$1))
{var c__9646__auto___13535 = cljs.core.chunk_first(seq__13520_13534__$1);
{
var G__13536 = cljs.core.chunk_rest(seq__13520_13534__$1);
var G__13537 = c__9646__auto___13535;
var G__13538 = cljs.core.count(c__9646__auto___13535);
var G__13539 = 0;
seq__13520_13524 = G__13536;
chunk__13521_13525 = G__13537;
count__13522_13526 = G__13538;
i__13523_13527 = G__13539;
continue;
}
} else
{var n_13540 = cljs.core.first(seq__13520_13534__$1);
goog.style.setStyle(n_13540,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13541 = cljs.core.next(seq__13520_13534__$1);
var G__13542 = null;
var G__13543 = 0;
var G__13544 = 0;
seq__13520_13524 = G__13541;
chunk__13521_13525 = G__13542;
count__13522_13526 = G__13543;
i__13523_13527 = G__13544;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13545){
var content = cljs.core.first(arglist__13545);
arglist__13545 = cljs.core.next(arglist__13545);
var name = cljs.core.first(arglist__13545);
var value = cljs.core.rest(arglist__13545);
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
var seq__13550_13554 = cljs.core.seq(domina.nodes(content));
var chunk__13551_13555 = null;
var count__13552_13556 = 0;
var i__13553_13557 = 0;
while(true){
if((i__13553_13557 < count__13552_13556))
{var n_13558 = chunk__13551_13555.cljs$core$IIndexed$_nth$arity$2(chunk__13551_13555,i__13553_13557);
n_13558.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13559 = seq__13550_13554;
var G__13560 = chunk__13551_13555;
var G__13561 = count__13552_13556;
var G__13562 = (i__13553_13557 + 1);
seq__13550_13554 = G__13559;
chunk__13551_13555 = G__13560;
count__13552_13556 = G__13561;
i__13553_13557 = G__13562;
continue;
}
} else
{var temp__4092__auto___13563 = cljs.core.seq(seq__13550_13554);
if(temp__4092__auto___13563)
{var seq__13550_13564__$1 = temp__4092__auto___13563;
if(cljs.core.chunked_seq_QMARK_(seq__13550_13564__$1))
{var c__9646__auto___13565 = cljs.core.chunk_first(seq__13550_13564__$1);
{
var G__13566 = cljs.core.chunk_rest(seq__13550_13564__$1);
var G__13567 = c__9646__auto___13565;
var G__13568 = cljs.core.count(c__9646__auto___13565);
var G__13569 = 0;
seq__13550_13554 = G__13566;
chunk__13551_13555 = G__13567;
count__13552_13556 = G__13568;
i__13553_13557 = G__13569;
continue;
}
} else
{var n_13570 = cljs.core.first(seq__13550_13564__$1);
n_13570.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13571 = cljs.core.next(seq__13550_13564__$1);
var G__13572 = null;
var G__13573 = 0;
var G__13574 = 0;
seq__13550_13554 = G__13571;
chunk__13551_13555 = G__13572;
count__13552_13556 = G__13573;
i__13553_13557 = G__13574;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13575){
var content = cljs.core.first(arglist__13575);
arglist__13575 = cljs.core.next(arglist__13575);
var name = cljs.core.first(arglist__13575);
var value = cljs.core.rest(arglist__13575);
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
var seq__13580_13584 = cljs.core.seq(domina.nodes(content));
var chunk__13581_13585 = null;
var count__13582_13586 = 0;
var i__13583_13587 = 0;
while(true){
if((i__13583_13587 < count__13582_13586))
{var n_13588 = chunk__13581_13585.cljs$core$IIndexed$_nth$arity$2(chunk__13581_13585,i__13583_13587);
n_13588.removeAttribute(cljs.core.name(name));
{
var G__13589 = seq__13580_13584;
var G__13590 = chunk__13581_13585;
var G__13591 = count__13582_13586;
var G__13592 = (i__13583_13587 + 1);
seq__13580_13584 = G__13589;
chunk__13581_13585 = G__13590;
count__13582_13586 = G__13591;
i__13583_13587 = G__13592;
continue;
}
} else
{var temp__4092__auto___13593 = cljs.core.seq(seq__13580_13584);
if(temp__4092__auto___13593)
{var seq__13580_13594__$1 = temp__4092__auto___13593;
if(cljs.core.chunked_seq_QMARK_(seq__13580_13594__$1))
{var c__9646__auto___13595 = cljs.core.chunk_first(seq__13580_13594__$1);
{
var G__13596 = cljs.core.chunk_rest(seq__13580_13594__$1);
var G__13597 = c__9646__auto___13595;
var G__13598 = cljs.core.count(c__9646__auto___13595);
var G__13599 = 0;
seq__13580_13584 = G__13596;
chunk__13581_13585 = G__13597;
count__13582_13586 = G__13598;
i__13583_13587 = G__13599;
continue;
}
} else
{var n_13600 = cljs.core.first(seq__13580_13594__$1);
n_13600.removeAttribute(cljs.core.name(name));
{
var G__13601 = cljs.core.next(seq__13580_13594__$1);
var G__13602 = null;
var G__13603 = 0;
var G__13604 = 0;
seq__13580_13584 = G__13601;
chunk__13581_13585 = G__13602;
count__13582_13586 = G__13603;
i__13583_13587 = G__13604;
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
var vec__13606 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13606,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13606,1,null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13607_SHARP_){
var attr = attrs__$1.item(p1__13607_SHARP_);
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
var seq__13614_13620 = cljs.core.seq(styles);
var chunk__13615_13621 = null;
var count__13616_13622 = 0;
var i__13617_13623 = 0;
while(true){
if((i__13617_13623 < count__13616_13622))
{var vec__13618_13624 = chunk__13615_13621.cljs$core$IIndexed$_nth$arity$2(chunk__13615_13621,i__13617_13623);
var name_13625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13618_13624,0,null);
var value_13626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13618_13624,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13625,cljs.core.array_seq([value_13626], 0));
{
var G__13627 = seq__13614_13620;
var G__13628 = chunk__13615_13621;
var G__13629 = count__13616_13622;
var G__13630 = (i__13617_13623 + 1);
seq__13614_13620 = G__13627;
chunk__13615_13621 = G__13628;
count__13616_13622 = G__13629;
i__13617_13623 = G__13630;
continue;
}
} else
{var temp__4092__auto___13631 = cljs.core.seq(seq__13614_13620);
if(temp__4092__auto___13631)
{var seq__13614_13632__$1 = temp__4092__auto___13631;
if(cljs.core.chunked_seq_QMARK_(seq__13614_13632__$1))
{var c__9646__auto___13633 = cljs.core.chunk_first(seq__13614_13632__$1);
{
var G__13634 = cljs.core.chunk_rest(seq__13614_13632__$1);
var G__13635 = c__9646__auto___13633;
var G__13636 = cljs.core.count(c__9646__auto___13633);
var G__13637 = 0;
seq__13614_13620 = G__13634;
chunk__13615_13621 = G__13635;
count__13616_13622 = G__13636;
i__13617_13623 = G__13637;
continue;
}
} else
{var vec__13619_13638 = cljs.core.first(seq__13614_13632__$1);
var name_13639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13619_13638,0,null);
var value_13640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13619_13638,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13639,cljs.core.array_seq([value_13640], 0));
{
var G__13641 = cljs.core.next(seq__13614_13632__$1);
var G__13642 = null;
var G__13643 = 0;
var G__13644 = 0;
seq__13614_13620 = G__13641;
chunk__13615_13621 = G__13642;
count__13616_13622 = G__13643;
i__13617_13623 = G__13644;
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
var seq__13651_13657 = cljs.core.seq(attrs);
var chunk__13652_13658 = null;
var count__13653_13659 = 0;
var i__13654_13660 = 0;
while(true){
if((i__13654_13660 < count__13653_13659))
{var vec__13655_13661 = chunk__13652_13658.cljs$core$IIndexed$_nth$arity$2(chunk__13652_13658,i__13654_13660);
var name_13662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13655_13661,0,null);
var value_13663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13655_13661,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13662,cljs.core.array_seq([value_13663], 0));
{
var G__13664 = seq__13651_13657;
var G__13665 = chunk__13652_13658;
var G__13666 = count__13653_13659;
var G__13667 = (i__13654_13660 + 1);
seq__13651_13657 = G__13664;
chunk__13652_13658 = G__13665;
count__13653_13659 = G__13666;
i__13654_13660 = G__13667;
continue;
}
} else
{var temp__4092__auto___13668 = cljs.core.seq(seq__13651_13657);
if(temp__4092__auto___13668)
{var seq__13651_13669__$1 = temp__4092__auto___13668;
if(cljs.core.chunked_seq_QMARK_(seq__13651_13669__$1))
{var c__9646__auto___13670 = cljs.core.chunk_first(seq__13651_13669__$1);
{
var G__13671 = cljs.core.chunk_rest(seq__13651_13669__$1);
var G__13672 = c__9646__auto___13670;
var G__13673 = cljs.core.count(c__9646__auto___13670);
var G__13674 = 0;
seq__13651_13657 = G__13671;
chunk__13652_13658 = G__13672;
count__13653_13659 = G__13673;
i__13654_13660 = G__13674;
continue;
}
} else
{var vec__13656_13675 = cljs.core.first(seq__13651_13669__$1);
var name_13676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13656_13675,0,null);
var value_13677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13656_13675,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13676,cljs.core.array_seq([value_13677], 0));
{
var G__13678 = cljs.core.next(seq__13651_13669__$1);
var G__13679 = null;
var G__13680 = 0;
var G__13681 = 0;
seq__13651_13657 = G__13678;
chunk__13652_13658 = G__13679;
count__13653_13659 = G__13680;
i__13654_13660 = G__13681;
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
var seq__13686_13690 = cljs.core.seq(domina.nodes(content));
var chunk__13687_13691 = null;
var count__13688_13692 = 0;
var i__13689_13693 = 0;
while(true){
if((i__13689_13693 < count__13688_13692))
{var node_13694 = chunk__13687_13691.cljs$core$IIndexed$_nth$arity$2(chunk__13687_13691,i__13689_13693);
goog.dom.classes.add(node_13694,class$);
{
var G__13695 = seq__13686_13690;
var G__13696 = chunk__13687_13691;
var G__13697 = count__13688_13692;
var G__13698 = (i__13689_13693 + 1);
seq__13686_13690 = G__13695;
chunk__13687_13691 = G__13696;
count__13688_13692 = G__13697;
i__13689_13693 = G__13698;
continue;
}
} else
{var temp__4092__auto___13699 = cljs.core.seq(seq__13686_13690);
if(temp__4092__auto___13699)
{var seq__13686_13700__$1 = temp__4092__auto___13699;
if(cljs.core.chunked_seq_QMARK_(seq__13686_13700__$1))
{var c__9646__auto___13701 = cljs.core.chunk_first(seq__13686_13700__$1);
{
var G__13702 = cljs.core.chunk_rest(seq__13686_13700__$1);
var G__13703 = c__9646__auto___13701;
var G__13704 = cljs.core.count(c__9646__auto___13701);
var G__13705 = 0;
seq__13686_13690 = G__13702;
chunk__13687_13691 = G__13703;
count__13688_13692 = G__13704;
i__13689_13693 = G__13705;
continue;
}
} else
{var node_13706 = cljs.core.first(seq__13686_13700__$1);
goog.dom.classes.add(node_13706,class$);
{
var G__13707 = cljs.core.next(seq__13686_13700__$1);
var G__13708 = null;
var G__13709 = 0;
var G__13710 = 0;
seq__13686_13690 = G__13707;
chunk__13687_13691 = G__13708;
count__13688_13692 = G__13709;
i__13689_13693 = G__13710;
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
var seq__13715_13719 = cljs.core.seq(domina.nodes(content));
var chunk__13716_13720 = null;
var count__13717_13721 = 0;
var i__13718_13722 = 0;
while(true){
if((i__13718_13722 < count__13717_13721))
{var node_13723 = chunk__13716_13720.cljs$core$IIndexed$_nth$arity$2(chunk__13716_13720,i__13718_13722);
goog.dom.classes.remove(node_13723,class$);
{
var G__13724 = seq__13715_13719;
var G__13725 = chunk__13716_13720;
var G__13726 = count__13717_13721;
var G__13727 = (i__13718_13722 + 1);
seq__13715_13719 = G__13724;
chunk__13716_13720 = G__13725;
count__13717_13721 = G__13726;
i__13718_13722 = G__13727;
continue;
}
} else
{var temp__4092__auto___13728 = cljs.core.seq(seq__13715_13719);
if(temp__4092__auto___13728)
{var seq__13715_13729__$1 = temp__4092__auto___13728;
if(cljs.core.chunked_seq_QMARK_(seq__13715_13729__$1))
{var c__9646__auto___13730 = cljs.core.chunk_first(seq__13715_13729__$1);
{
var G__13731 = cljs.core.chunk_rest(seq__13715_13729__$1);
var G__13732 = c__9646__auto___13730;
var G__13733 = cljs.core.count(c__9646__auto___13730);
var G__13734 = 0;
seq__13715_13719 = G__13731;
chunk__13716_13720 = G__13732;
count__13717_13721 = G__13733;
i__13718_13722 = G__13734;
continue;
}
} else
{var node_13735 = cljs.core.first(seq__13715_13729__$1);
goog.dom.classes.remove(node_13735,class$);
{
var G__13736 = cljs.core.next(seq__13715_13729__$1);
var G__13737 = null;
var G__13738 = 0;
var G__13739 = 0;
seq__13715_13719 = G__13736;
chunk__13716_13720 = G__13737;
count__13717_13721 = G__13738;
i__13718_13722 = G__13739;
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
var classes_13748__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__13744_13749 = cljs.core.seq(domina.nodes(content));
var chunk__13745_13750 = null;
var count__13746_13751 = 0;
var i__13747_13752 = 0;
while(true){
if((i__13747_13752 < count__13746_13751))
{var node_13753 = chunk__13745_13750.cljs$core$IIndexed$_nth$arity$2(chunk__13745_13750,i__13747_13752);
goog.dom.classes.set(node_13753,classes_13748__$1);
{
var G__13754 = seq__13744_13749;
var G__13755 = chunk__13745_13750;
var G__13756 = count__13746_13751;
var G__13757 = (i__13747_13752 + 1);
seq__13744_13749 = G__13754;
chunk__13745_13750 = G__13755;
count__13746_13751 = G__13756;
i__13747_13752 = G__13757;
continue;
}
} else
{var temp__4092__auto___13758 = cljs.core.seq(seq__13744_13749);
if(temp__4092__auto___13758)
{var seq__13744_13759__$1 = temp__4092__auto___13758;
if(cljs.core.chunked_seq_QMARK_(seq__13744_13759__$1))
{var c__9646__auto___13760 = cljs.core.chunk_first(seq__13744_13759__$1);
{
var G__13761 = cljs.core.chunk_rest(seq__13744_13759__$1);
var G__13762 = c__9646__auto___13760;
var G__13763 = cljs.core.count(c__9646__auto___13760);
var G__13764 = 0;
seq__13744_13749 = G__13761;
chunk__13745_13750 = G__13762;
count__13746_13751 = G__13763;
i__13747_13752 = G__13764;
continue;
}
} else
{var node_13765 = cljs.core.first(seq__13744_13759__$1);
goog.dom.classes.set(node_13765,classes_13748__$1);
{
var G__13766 = cljs.core.next(seq__13744_13759__$1);
var G__13767 = null;
var G__13768 = 0;
var G__13769 = 0;
seq__13744_13749 = G__13766;
chunk__13745_13750 = G__13767;
count__13746_13751 = G__13768;
i__13747_13752 = G__13769;
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
var seq__13774_13778 = cljs.core.seq(domina.nodes(content));
var chunk__13775_13779 = null;
var count__13776_13780 = 0;
var i__13777_13781 = 0;
while(true){
if((i__13777_13781 < count__13776_13780))
{var node_13782 = chunk__13775_13779.cljs$core$IIndexed$_nth$arity$2(chunk__13775_13779,i__13777_13781);
goog.dom.setTextContent(node_13782,value);
{
var G__13783 = seq__13774_13778;
var G__13784 = chunk__13775_13779;
var G__13785 = count__13776_13780;
var G__13786 = (i__13777_13781 + 1);
seq__13774_13778 = G__13783;
chunk__13775_13779 = G__13784;
count__13776_13780 = G__13785;
i__13777_13781 = G__13786;
continue;
}
} else
{var temp__4092__auto___13787 = cljs.core.seq(seq__13774_13778);
if(temp__4092__auto___13787)
{var seq__13774_13788__$1 = temp__4092__auto___13787;
if(cljs.core.chunked_seq_QMARK_(seq__13774_13788__$1))
{var c__9646__auto___13789 = cljs.core.chunk_first(seq__13774_13788__$1);
{
var G__13790 = cljs.core.chunk_rest(seq__13774_13788__$1);
var G__13791 = c__9646__auto___13789;
var G__13792 = cljs.core.count(c__9646__auto___13789);
var G__13793 = 0;
seq__13774_13778 = G__13790;
chunk__13775_13779 = G__13791;
count__13776_13780 = G__13792;
i__13777_13781 = G__13793;
continue;
}
} else
{var node_13794 = cljs.core.first(seq__13774_13788__$1);
goog.dom.setTextContent(node_13794,value);
{
var G__13795 = cljs.core.next(seq__13774_13788__$1);
var G__13796 = null;
var G__13797 = 0;
var G__13798 = 0;
seq__13774_13778 = G__13795;
chunk__13775_13779 = G__13796;
count__13776_13780 = G__13797;
i__13777_13781 = G__13798;
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
var seq__13803_13807 = cljs.core.seq(domina.nodes(content));
var chunk__13804_13808 = null;
var count__13805_13809 = 0;
var i__13806_13810 = 0;
while(true){
if((i__13806_13810 < count__13805_13809))
{var node_13811 = chunk__13804_13808.cljs$core$IIndexed$_nth$arity$2(chunk__13804_13808,i__13806_13810);
goog.dom.forms.setValue(node_13811,value);
{
var G__13812 = seq__13803_13807;
var G__13813 = chunk__13804_13808;
var G__13814 = count__13805_13809;
var G__13815 = (i__13806_13810 + 1);
seq__13803_13807 = G__13812;
chunk__13804_13808 = G__13813;
count__13805_13809 = G__13814;
i__13806_13810 = G__13815;
continue;
}
} else
{var temp__4092__auto___13816 = cljs.core.seq(seq__13803_13807);
if(temp__4092__auto___13816)
{var seq__13803_13817__$1 = temp__4092__auto___13816;
if(cljs.core.chunked_seq_QMARK_(seq__13803_13817__$1))
{var c__9646__auto___13818 = cljs.core.chunk_first(seq__13803_13817__$1);
{
var G__13819 = cljs.core.chunk_rest(seq__13803_13817__$1);
var G__13820 = c__9646__auto___13818;
var G__13821 = cljs.core.count(c__9646__auto___13818);
var G__13822 = 0;
seq__13803_13807 = G__13819;
chunk__13804_13808 = G__13820;
count__13805_13809 = G__13821;
i__13806_13810 = G__13822;
continue;
}
} else
{var node_13823 = cljs.core.first(seq__13803_13817__$1);
goog.dom.forms.setValue(node_13823,value);
{
var G__13824 = cljs.core.next(seq__13803_13817__$1);
var G__13825 = null;
var G__13826 = 0;
var G__13827 = 0;
seq__13803_13807 = G__13824;
chunk__13804_13808 = G__13825;
count__13805_13809 = G__13826;
i__13806_13810 = G__13827;
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
{var value_13838 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13834_13839 = cljs.core.seq(domina.nodes(content));
var chunk__13835_13840 = null;
var count__13836_13841 = 0;
var i__13837_13842 = 0;
while(true){
if((i__13837_13842 < count__13836_13841))
{var node_13843 = chunk__13835_13840.cljs$core$IIndexed$_nth$arity$2(chunk__13835_13840,i__13837_13842);
goog.events.removeAll(node_13843);
node_13843.innerHTML = value_13838;
{
var G__13844 = seq__13834_13839;
var G__13845 = chunk__13835_13840;
var G__13846 = count__13836_13841;
var G__13847 = (i__13837_13842 + 1);
seq__13834_13839 = G__13844;
chunk__13835_13840 = G__13845;
count__13836_13841 = G__13846;
i__13837_13842 = G__13847;
continue;
}
} else
{var temp__4092__auto___13848 = cljs.core.seq(seq__13834_13839);
if(temp__4092__auto___13848)
{var seq__13834_13849__$1 = temp__4092__auto___13848;
if(cljs.core.chunked_seq_QMARK_(seq__13834_13849__$1))
{var c__9646__auto___13850 = cljs.core.chunk_first(seq__13834_13849__$1);
{
var G__13851 = cljs.core.chunk_rest(seq__13834_13849__$1);
var G__13852 = c__9646__auto___13850;
var G__13853 = cljs.core.count(c__9646__auto___13850);
var G__13854 = 0;
seq__13834_13839 = G__13851;
chunk__13835_13840 = G__13852;
count__13836_13841 = G__13853;
i__13837_13842 = G__13854;
continue;
}
} else
{var node_13855 = cljs.core.first(seq__13834_13849__$1);
goog.events.removeAll(node_13855);
node_13855.innerHTML = value_13838;
{
var G__13856 = cljs.core.next(seq__13834_13849__$1);
var G__13857 = null;
var G__13858 = 0;
var G__13859 = 0;
seq__13834_13839 = G__13856;
chunk__13835_13840 = G__13857;
count__13836_13841 = G__13858;
i__13837_13842 = G__13859;
continue;
}
}
} else
{}
}
break;
}
}catch (e13833){if((e13833 instanceof Error))
{var e_13860 = e13833;
domina.replace_children_BANG_(content,value_13838);
} else
{if("\uFDD0:else")
{throw e13833;
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
var seq__13867_13871 = cljs.core.seq(children);
var chunk__13868_13872 = null;
var count__13869_13873 = 0;
var i__13870_13874 = 0;
while(true){
if((i__13870_13874 < count__13869_13873))
{var child_13875 = chunk__13868_13872.cljs$core$IIndexed$_nth$arity$2(chunk__13868_13872,i__13870_13874);
frag.appendChild(child_13875);
{
var G__13876 = seq__13867_13871;
var G__13877 = chunk__13868_13872;
var G__13878 = count__13869_13873;
var G__13879 = (i__13870_13874 + 1);
seq__13867_13871 = G__13876;
chunk__13868_13872 = G__13877;
count__13869_13873 = G__13878;
i__13870_13874 = G__13879;
continue;
}
} else
{var temp__4092__auto___13880 = cljs.core.seq(seq__13867_13871);
if(temp__4092__auto___13880)
{var seq__13867_13881__$1 = temp__4092__auto___13880;
if(cljs.core.chunked_seq_QMARK_(seq__13867_13881__$1))
{var c__9646__auto___13882 = cljs.core.chunk_first(seq__13867_13881__$1);
{
var G__13883 = cljs.core.chunk_rest(seq__13867_13881__$1);
var G__13884 = c__9646__auto___13882;
var G__13885 = cljs.core.count(c__9646__auto___13882);
var G__13886 = 0;
seq__13867_13871 = G__13883;
chunk__13868_13872 = G__13884;
count__13869_13873 = G__13885;
i__13870_13874 = G__13886;
continue;
}
} else
{var child_13887 = cljs.core.first(seq__13867_13881__$1);
frag.appendChild(child_13887);
{
var G__13888 = cljs.core.next(seq__13867_13881__$1);
var G__13889 = null;
var G__13890 = 0;
var G__13891 = 0;
seq__13867_13871 = G__13888;
chunk__13868_13872 = G__13889;
count__13869_13873 = G__13890;
i__13870_13874 = G__13891;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__13861_SHARP_,p2__13862_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__13861_SHARP_,p2__13862_SHARP_) : f.call(null,p1__13861_SHARP_,p2__13862_SHARP_));
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
{if((function (){var G__13893 = list_thing;
if(G__13893)
{if((function (){var or__3943__auto__ = (G__13893.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13893.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13893.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13893);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13893);
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
{if((function (){var G__13894 = content;
if(G__13894)
{if((function (){var or__3943__auto__ = (G__13894.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13894.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13894.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13894);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13894);
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
{if((function (){var G__13895 = content;
if(G__13895)
{if((function (){var or__3943__auto__ = (G__13895.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13895.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13895.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13895);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13895);
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
