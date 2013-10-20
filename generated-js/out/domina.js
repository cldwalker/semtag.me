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
var opt_wrapper_17480 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_17481 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_17482 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_17481,table_section_wrapper_17481,opt_wrapper_17480,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_17482,table_section_wrapper_17481,cell_wrapper_17482,opt_wrapper_17480,table_section_wrapper_17481,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_17481]);
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
var seq__17487 = cljs.core.seq(tbody);
var chunk__17488 = null;
var count__17489 = 0;
var i__17490 = 0;
while(true){
if((i__17490 < count__17489))
{var child = chunk__17488.cljs$core$IIndexed$_nth$arity$2(chunk__17488,i__17490);
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
var G__17491 = seq__17487;
var G__17492 = chunk__17488;
var G__17493 = count__17489;
var G__17494 = (i__17490 + 1);
seq__17487 = G__17491;
chunk__17488 = G__17492;
count__17489 = G__17493;
i__17490 = G__17494;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__17487);
if(temp__4092__auto__)
{var seq__17487__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17487__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__17487__$1);
{
var G__17495 = cljs.core.chunk_rest(seq__17487__$1);
var G__17496 = c__9926__auto__;
var G__17497 = cljs.core.count(c__9926__auto__);
var G__17498 = 0;
seq__17487 = G__17495;
chunk__17488 = G__17496;
count__17489 = G__17497;
i__17490 = G__17498;
continue;
}
} else
{var child = cljs.core.first(seq__17487__$1);
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
var G__17499 = cljs.core.next(seq__17487__$1);
var G__17500 = null;
var G__17501 = 0;
var G__17502 = 0;
seq__17487 = G__17499;
chunk__17488 = G__17500;
count__17489 = G__17501;
i__17490 = G__17502;
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
var vec__17504 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17504,0,null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17504,1,null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17504,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__17505 = wrapper.lastChild;
var G__17506 = (level - 1);
wrapper = G__17505;
level = G__17506;
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
log_debug.cljs$lang$applyTo = (function (arglist__17507){
var mesg = cljs.core.seq(arglist__17507);
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
log.cljs$lang$applyTo = (function (arglist__17508){
var mesg = cljs.core.seq(arglist__17508);
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
if((void 0 === domina.t17512))
{goog.provide('domina.t17512');

/**
* @constructor
*/
domina.t17512 = (function (class_name,by_class,meta17513){
this.class_name = class_name;
this.by_class = by_class;
this.meta17513 = meta17513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t17512.cljs$lang$type = true;
domina.t17512.cljs$lang$ctorStr = "domina/t17512";
domina.t17512.cljs$lang$ctorPrWriter = (function (this__9736__auto__,writer__9737__auto__,opt__9738__auto__){
return cljs.core._write(writer__9737__auto__,"domina/t17512");
});
domina.t17512.prototype.domina$DomContent$ = true;
domina.t17512.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(self__.class_name))));
});
domina.t17512.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name(self__.class_name))));
});
domina.t17512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17514){
var self__ = this;
return self__.meta17513;
});
domina.t17512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17514,meta17513__$1){
var self__ = this;
return (new domina.t17512(self__.class_name,self__.by_class,meta17513__$1));
});
domina.__GT_t17512 = (function __GT_t17512(class_name__$1,by_class__$1,meta17513){
return (new domina.t17512(class_name__$1,by_class__$1,meta17513));
});
} else
{}
return (new domina.t17512(class_name,by_class,null));
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17515){
var contents = cljs.core.seq(arglist__17515);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17516_SHARP_){
return p1__17516_SHARP_.cloneNode(true);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__17517_SHARP_,p2__17518_SHARP_){
return goog.dom.insertChildAt(p1__17517_SHARP_,p2__17518_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__17517_SHARP_,p2__17518_SHARP_){
return goog.dom.insertChildAt(p1__17517_SHARP_,p2__17518_SHARP_,idx);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__17520_SHARP_,p2__17519_SHARP_){
return goog.dom.insertSiblingBefore(p2__17519_SHARP_,p1__17520_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__17520_SHARP_,p2__17519_SHARP_){
return goog.dom.insertSiblingBefore(p2__17519_SHARP_,p1__17520_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__17522_SHARP_,p2__17521_SHARP_){
return goog.dom.insertSiblingAfter(p2__17521_SHARP_,p1__17522_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__17522_SHARP_,p2__17521_SHARP_){
return goog.dom.insertSiblingAfter(p2__17521_SHARP_,p1__17522_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__17524_SHARP_,p2__17523_SHARP_){
return goog.dom.replaceNode(p2__17523_SHARP_,p1__17524_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__17524_SHARP_,p2__17523_SHARP_){
return goog.dom.replaceNode(p2__17523_SHARP_,p1__17524_SHARP_);
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
var seq__17529_17533 = cljs.core.seq(domina.nodes(content));
var chunk__17530_17534 = null;
var count__17531_17535 = 0;
var i__17532_17536 = 0;
while(true){
if((i__17532_17536 < count__17531_17535))
{var n_17537 = chunk__17530_17534.cljs$core$IIndexed$_nth$arity$2(chunk__17530_17534,i__17532_17536);
goog.style.setStyle(n_17537,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__17538 = seq__17529_17533;
var G__17539 = chunk__17530_17534;
var G__17540 = count__17531_17535;
var G__17541 = (i__17532_17536 + 1);
seq__17529_17533 = G__17538;
chunk__17530_17534 = G__17539;
count__17531_17535 = G__17540;
i__17532_17536 = G__17541;
continue;
}
} else
{var temp__4092__auto___17542 = cljs.core.seq(seq__17529_17533);
if(temp__4092__auto___17542)
{var seq__17529_17543__$1 = temp__4092__auto___17542;
if(cljs.core.chunked_seq_QMARK_(seq__17529_17543__$1))
{var c__9926__auto___17544 = cljs.core.chunk_first(seq__17529_17543__$1);
{
var G__17545 = cljs.core.chunk_rest(seq__17529_17543__$1);
var G__17546 = c__9926__auto___17544;
var G__17547 = cljs.core.count(c__9926__auto___17544);
var G__17548 = 0;
seq__17529_17533 = G__17545;
chunk__17530_17534 = G__17546;
count__17531_17535 = G__17547;
i__17532_17536 = G__17548;
continue;
}
} else
{var n_17549 = cljs.core.first(seq__17529_17543__$1);
goog.style.setStyle(n_17549,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__17550 = cljs.core.next(seq__17529_17543__$1);
var G__17551 = null;
var G__17552 = 0;
var G__17553 = 0;
seq__17529_17533 = G__17550;
chunk__17530_17534 = G__17551;
count__17531_17535 = G__17552;
i__17532_17536 = G__17553;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17554){
var content = cljs.core.first(arglist__17554);
arglist__17554 = cljs.core.next(arglist__17554);
var name = cljs.core.first(arglist__17554);
var value = cljs.core.rest(arglist__17554);
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
var seq__17559_17563 = cljs.core.seq(domina.nodes(content));
var chunk__17560_17564 = null;
var count__17561_17565 = 0;
var i__17562_17566 = 0;
while(true){
if((i__17562_17566 < count__17561_17565))
{var n_17567 = chunk__17560_17564.cljs$core$IIndexed$_nth$arity$2(chunk__17560_17564,i__17562_17566);
n_17567.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__17568 = seq__17559_17563;
var G__17569 = chunk__17560_17564;
var G__17570 = count__17561_17565;
var G__17571 = (i__17562_17566 + 1);
seq__17559_17563 = G__17568;
chunk__17560_17564 = G__17569;
count__17561_17565 = G__17570;
i__17562_17566 = G__17571;
continue;
}
} else
{var temp__4092__auto___17572 = cljs.core.seq(seq__17559_17563);
if(temp__4092__auto___17572)
{var seq__17559_17573__$1 = temp__4092__auto___17572;
if(cljs.core.chunked_seq_QMARK_(seq__17559_17573__$1))
{var c__9926__auto___17574 = cljs.core.chunk_first(seq__17559_17573__$1);
{
var G__17575 = cljs.core.chunk_rest(seq__17559_17573__$1);
var G__17576 = c__9926__auto___17574;
var G__17577 = cljs.core.count(c__9926__auto___17574);
var G__17578 = 0;
seq__17559_17563 = G__17575;
chunk__17560_17564 = G__17576;
count__17561_17565 = G__17577;
i__17562_17566 = G__17578;
continue;
}
} else
{var n_17579 = cljs.core.first(seq__17559_17573__$1);
n_17579.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__17580 = cljs.core.next(seq__17559_17573__$1);
var G__17581 = null;
var G__17582 = 0;
var G__17583 = 0;
seq__17559_17563 = G__17580;
chunk__17560_17564 = G__17581;
count__17561_17565 = G__17582;
i__17562_17566 = G__17583;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17584){
var content = cljs.core.first(arglist__17584);
arglist__17584 = cljs.core.next(arglist__17584);
var name = cljs.core.first(arglist__17584);
var value = cljs.core.rest(arglist__17584);
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
var seq__17589_17593 = cljs.core.seq(domina.nodes(content));
var chunk__17590_17594 = null;
var count__17591_17595 = 0;
var i__17592_17596 = 0;
while(true){
if((i__17592_17596 < count__17591_17595))
{var n_17597 = chunk__17590_17594.cljs$core$IIndexed$_nth$arity$2(chunk__17590_17594,i__17592_17596);
n_17597.removeAttribute(cljs.core.name(name));
{
var G__17598 = seq__17589_17593;
var G__17599 = chunk__17590_17594;
var G__17600 = count__17591_17595;
var G__17601 = (i__17592_17596 + 1);
seq__17589_17593 = G__17598;
chunk__17590_17594 = G__17599;
count__17591_17595 = G__17600;
i__17592_17596 = G__17601;
continue;
}
} else
{var temp__4092__auto___17602 = cljs.core.seq(seq__17589_17593);
if(temp__4092__auto___17602)
{var seq__17589_17603__$1 = temp__4092__auto___17602;
if(cljs.core.chunked_seq_QMARK_(seq__17589_17603__$1))
{var c__9926__auto___17604 = cljs.core.chunk_first(seq__17589_17603__$1);
{
var G__17605 = cljs.core.chunk_rest(seq__17589_17603__$1);
var G__17606 = c__9926__auto___17604;
var G__17607 = cljs.core.count(c__9926__auto___17604);
var G__17608 = 0;
seq__17589_17593 = G__17605;
chunk__17590_17594 = G__17606;
count__17591_17595 = G__17607;
i__17592_17596 = G__17608;
continue;
}
} else
{var n_17609 = cljs.core.first(seq__17589_17603__$1);
n_17609.removeAttribute(cljs.core.name(name));
{
var G__17610 = cljs.core.next(seq__17589_17603__$1);
var G__17611 = null;
var G__17612 = 0;
var G__17613 = 0;
seq__17589_17593 = G__17610;
chunk__17590_17594 = G__17611;
count__17591_17595 = G__17612;
i__17592_17596 = G__17613;
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
var vec__17615 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615,1,null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17616_SHARP_){
var attr = attrs__$1.item(p1__17616_SHARP_);
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
var seq__17623_17629 = cljs.core.seq(styles);
var chunk__17624_17630 = null;
var count__17625_17631 = 0;
var i__17626_17632 = 0;
while(true){
if((i__17626_17632 < count__17625_17631))
{var vec__17627_17633 = chunk__17624_17630.cljs$core$IIndexed$_nth$arity$2(chunk__17624_17630,i__17626_17632);
var name_17634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17627_17633,0,null);
var value_17635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17627_17633,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_17634,cljs.core.array_seq([value_17635], 0));
{
var G__17636 = seq__17623_17629;
var G__17637 = chunk__17624_17630;
var G__17638 = count__17625_17631;
var G__17639 = (i__17626_17632 + 1);
seq__17623_17629 = G__17636;
chunk__17624_17630 = G__17637;
count__17625_17631 = G__17638;
i__17626_17632 = G__17639;
continue;
}
} else
{var temp__4092__auto___17640 = cljs.core.seq(seq__17623_17629);
if(temp__4092__auto___17640)
{var seq__17623_17641__$1 = temp__4092__auto___17640;
if(cljs.core.chunked_seq_QMARK_(seq__17623_17641__$1))
{var c__9926__auto___17642 = cljs.core.chunk_first(seq__17623_17641__$1);
{
var G__17643 = cljs.core.chunk_rest(seq__17623_17641__$1);
var G__17644 = c__9926__auto___17642;
var G__17645 = cljs.core.count(c__9926__auto___17642);
var G__17646 = 0;
seq__17623_17629 = G__17643;
chunk__17624_17630 = G__17644;
count__17625_17631 = G__17645;
i__17626_17632 = G__17646;
continue;
}
} else
{var vec__17628_17647 = cljs.core.first(seq__17623_17641__$1);
var name_17648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17628_17647,0,null);
var value_17649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17628_17647,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_17648,cljs.core.array_seq([value_17649], 0));
{
var G__17650 = cljs.core.next(seq__17623_17641__$1);
var G__17651 = null;
var G__17652 = 0;
var G__17653 = 0;
seq__17623_17629 = G__17650;
chunk__17624_17630 = G__17651;
count__17625_17631 = G__17652;
i__17626_17632 = G__17653;
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
var seq__17660_17666 = cljs.core.seq(attrs);
var chunk__17661_17667 = null;
var count__17662_17668 = 0;
var i__17663_17669 = 0;
while(true){
if((i__17663_17669 < count__17662_17668))
{var vec__17664_17670 = chunk__17661_17667.cljs$core$IIndexed$_nth$arity$2(chunk__17661_17667,i__17663_17669);
var name_17671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17664_17670,0,null);
var value_17672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17664_17670,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_17671,cljs.core.array_seq([value_17672], 0));
{
var G__17673 = seq__17660_17666;
var G__17674 = chunk__17661_17667;
var G__17675 = count__17662_17668;
var G__17676 = (i__17663_17669 + 1);
seq__17660_17666 = G__17673;
chunk__17661_17667 = G__17674;
count__17662_17668 = G__17675;
i__17663_17669 = G__17676;
continue;
}
} else
{var temp__4092__auto___17677 = cljs.core.seq(seq__17660_17666);
if(temp__4092__auto___17677)
{var seq__17660_17678__$1 = temp__4092__auto___17677;
if(cljs.core.chunked_seq_QMARK_(seq__17660_17678__$1))
{var c__9926__auto___17679 = cljs.core.chunk_first(seq__17660_17678__$1);
{
var G__17680 = cljs.core.chunk_rest(seq__17660_17678__$1);
var G__17681 = c__9926__auto___17679;
var G__17682 = cljs.core.count(c__9926__auto___17679);
var G__17683 = 0;
seq__17660_17666 = G__17680;
chunk__17661_17667 = G__17681;
count__17662_17668 = G__17682;
i__17663_17669 = G__17683;
continue;
}
} else
{var vec__17665_17684 = cljs.core.first(seq__17660_17678__$1);
var name_17685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17665_17684,0,null);
var value_17686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17665_17684,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_17685,cljs.core.array_seq([value_17686], 0));
{
var G__17687 = cljs.core.next(seq__17660_17678__$1);
var G__17688 = null;
var G__17689 = 0;
var G__17690 = 0;
seq__17660_17666 = G__17687;
chunk__17661_17667 = G__17688;
count__17662_17668 = G__17689;
i__17663_17669 = G__17690;
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
var seq__17695_17699 = cljs.core.seq(domina.nodes(content));
var chunk__17696_17700 = null;
var count__17697_17701 = 0;
var i__17698_17702 = 0;
while(true){
if((i__17698_17702 < count__17697_17701))
{var node_17703 = chunk__17696_17700.cljs$core$IIndexed$_nth$arity$2(chunk__17696_17700,i__17698_17702);
goog.dom.classes.add(node_17703,class$);
{
var G__17704 = seq__17695_17699;
var G__17705 = chunk__17696_17700;
var G__17706 = count__17697_17701;
var G__17707 = (i__17698_17702 + 1);
seq__17695_17699 = G__17704;
chunk__17696_17700 = G__17705;
count__17697_17701 = G__17706;
i__17698_17702 = G__17707;
continue;
}
} else
{var temp__4092__auto___17708 = cljs.core.seq(seq__17695_17699);
if(temp__4092__auto___17708)
{var seq__17695_17709__$1 = temp__4092__auto___17708;
if(cljs.core.chunked_seq_QMARK_(seq__17695_17709__$1))
{var c__9926__auto___17710 = cljs.core.chunk_first(seq__17695_17709__$1);
{
var G__17711 = cljs.core.chunk_rest(seq__17695_17709__$1);
var G__17712 = c__9926__auto___17710;
var G__17713 = cljs.core.count(c__9926__auto___17710);
var G__17714 = 0;
seq__17695_17699 = G__17711;
chunk__17696_17700 = G__17712;
count__17697_17701 = G__17713;
i__17698_17702 = G__17714;
continue;
}
} else
{var node_17715 = cljs.core.first(seq__17695_17709__$1);
goog.dom.classes.add(node_17715,class$);
{
var G__17716 = cljs.core.next(seq__17695_17709__$1);
var G__17717 = null;
var G__17718 = 0;
var G__17719 = 0;
seq__17695_17699 = G__17716;
chunk__17696_17700 = G__17717;
count__17697_17701 = G__17718;
i__17698_17702 = G__17719;
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
var seq__17724_17728 = cljs.core.seq(domina.nodes(content));
var chunk__17725_17729 = null;
var count__17726_17730 = 0;
var i__17727_17731 = 0;
while(true){
if((i__17727_17731 < count__17726_17730))
{var node_17732 = chunk__17725_17729.cljs$core$IIndexed$_nth$arity$2(chunk__17725_17729,i__17727_17731);
goog.dom.classes.remove(node_17732,class$);
{
var G__17733 = seq__17724_17728;
var G__17734 = chunk__17725_17729;
var G__17735 = count__17726_17730;
var G__17736 = (i__17727_17731 + 1);
seq__17724_17728 = G__17733;
chunk__17725_17729 = G__17734;
count__17726_17730 = G__17735;
i__17727_17731 = G__17736;
continue;
}
} else
{var temp__4092__auto___17737 = cljs.core.seq(seq__17724_17728);
if(temp__4092__auto___17737)
{var seq__17724_17738__$1 = temp__4092__auto___17737;
if(cljs.core.chunked_seq_QMARK_(seq__17724_17738__$1))
{var c__9926__auto___17739 = cljs.core.chunk_first(seq__17724_17738__$1);
{
var G__17740 = cljs.core.chunk_rest(seq__17724_17738__$1);
var G__17741 = c__9926__auto___17739;
var G__17742 = cljs.core.count(c__9926__auto___17739);
var G__17743 = 0;
seq__17724_17728 = G__17740;
chunk__17725_17729 = G__17741;
count__17726_17730 = G__17742;
i__17727_17731 = G__17743;
continue;
}
} else
{var node_17744 = cljs.core.first(seq__17724_17738__$1);
goog.dom.classes.remove(node_17744,class$);
{
var G__17745 = cljs.core.next(seq__17724_17738__$1);
var G__17746 = null;
var G__17747 = 0;
var G__17748 = 0;
seq__17724_17728 = G__17745;
chunk__17725_17729 = G__17746;
count__17726_17730 = G__17747;
i__17727_17731 = G__17748;
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
var classes_17757__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__17753_17758 = cljs.core.seq(domina.nodes(content));
var chunk__17754_17759 = null;
var count__17755_17760 = 0;
var i__17756_17761 = 0;
while(true){
if((i__17756_17761 < count__17755_17760))
{var node_17762 = chunk__17754_17759.cljs$core$IIndexed$_nth$arity$2(chunk__17754_17759,i__17756_17761);
goog.dom.classes.set(node_17762,classes_17757__$1);
{
var G__17763 = seq__17753_17758;
var G__17764 = chunk__17754_17759;
var G__17765 = count__17755_17760;
var G__17766 = (i__17756_17761 + 1);
seq__17753_17758 = G__17763;
chunk__17754_17759 = G__17764;
count__17755_17760 = G__17765;
i__17756_17761 = G__17766;
continue;
}
} else
{var temp__4092__auto___17767 = cljs.core.seq(seq__17753_17758);
if(temp__4092__auto___17767)
{var seq__17753_17768__$1 = temp__4092__auto___17767;
if(cljs.core.chunked_seq_QMARK_(seq__17753_17768__$1))
{var c__9926__auto___17769 = cljs.core.chunk_first(seq__17753_17768__$1);
{
var G__17770 = cljs.core.chunk_rest(seq__17753_17768__$1);
var G__17771 = c__9926__auto___17769;
var G__17772 = cljs.core.count(c__9926__auto___17769);
var G__17773 = 0;
seq__17753_17758 = G__17770;
chunk__17754_17759 = G__17771;
count__17755_17760 = G__17772;
i__17756_17761 = G__17773;
continue;
}
} else
{var node_17774 = cljs.core.first(seq__17753_17768__$1);
goog.dom.classes.set(node_17774,classes_17757__$1);
{
var G__17775 = cljs.core.next(seq__17753_17768__$1);
var G__17776 = null;
var G__17777 = 0;
var G__17778 = 0;
seq__17753_17758 = G__17775;
chunk__17754_17759 = G__17776;
count__17755_17760 = G__17777;
i__17756_17761 = G__17778;
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
var seq__17783_17787 = cljs.core.seq(domina.nodes(content));
var chunk__17784_17788 = null;
var count__17785_17789 = 0;
var i__17786_17790 = 0;
while(true){
if((i__17786_17790 < count__17785_17789))
{var node_17791 = chunk__17784_17788.cljs$core$IIndexed$_nth$arity$2(chunk__17784_17788,i__17786_17790);
goog.dom.setTextContent(node_17791,value);
{
var G__17792 = seq__17783_17787;
var G__17793 = chunk__17784_17788;
var G__17794 = count__17785_17789;
var G__17795 = (i__17786_17790 + 1);
seq__17783_17787 = G__17792;
chunk__17784_17788 = G__17793;
count__17785_17789 = G__17794;
i__17786_17790 = G__17795;
continue;
}
} else
{var temp__4092__auto___17796 = cljs.core.seq(seq__17783_17787);
if(temp__4092__auto___17796)
{var seq__17783_17797__$1 = temp__4092__auto___17796;
if(cljs.core.chunked_seq_QMARK_(seq__17783_17797__$1))
{var c__9926__auto___17798 = cljs.core.chunk_first(seq__17783_17797__$1);
{
var G__17799 = cljs.core.chunk_rest(seq__17783_17797__$1);
var G__17800 = c__9926__auto___17798;
var G__17801 = cljs.core.count(c__9926__auto___17798);
var G__17802 = 0;
seq__17783_17787 = G__17799;
chunk__17784_17788 = G__17800;
count__17785_17789 = G__17801;
i__17786_17790 = G__17802;
continue;
}
} else
{var node_17803 = cljs.core.first(seq__17783_17797__$1);
goog.dom.setTextContent(node_17803,value);
{
var G__17804 = cljs.core.next(seq__17783_17797__$1);
var G__17805 = null;
var G__17806 = 0;
var G__17807 = 0;
seq__17783_17787 = G__17804;
chunk__17784_17788 = G__17805;
count__17785_17789 = G__17806;
i__17786_17790 = G__17807;
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
var seq__17812_17816 = cljs.core.seq(domina.nodes(content));
var chunk__17813_17817 = null;
var count__17814_17818 = 0;
var i__17815_17819 = 0;
while(true){
if((i__17815_17819 < count__17814_17818))
{var node_17820 = chunk__17813_17817.cljs$core$IIndexed$_nth$arity$2(chunk__17813_17817,i__17815_17819);
goog.dom.forms.setValue(node_17820,value);
{
var G__17821 = seq__17812_17816;
var G__17822 = chunk__17813_17817;
var G__17823 = count__17814_17818;
var G__17824 = (i__17815_17819 + 1);
seq__17812_17816 = G__17821;
chunk__17813_17817 = G__17822;
count__17814_17818 = G__17823;
i__17815_17819 = G__17824;
continue;
}
} else
{var temp__4092__auto___17825 = cljs.core.seq(seq__17812_17816);
if(temp__4092__auto___17825)
{var seq__17812_17826__$1 = temp__4092__auto___17825;
if(cljs.core.chunked_seq_QMARK_(seq__17812_17826__$1))
{var c__9926__auto___17827 = cljs.core.chunk_first(seq__17812_17826__$1);
{
var G__17828 = cljs.core.chunk_rest(seq__17812_17826__$1);
var G__17829 = c__9926__auto___17827;
var G__17830 = cljs.core.count(c__9926__auto___17827);
var G__17831 = 0;
seq__17812_17816 = G__17828;
chunk__17813_17817 = G__17829;
count__17814_17818 = G__17830;
i__17815_17819 = G__17831;
continue;
}
} else
{var node_17832 = cljs.core.first(seq__17812_17826__$1);
goog.dom.forms.setValue(node_17832,value);
{
var G__17833 = cljs.core.next(seq__17812_17826__$1);
var G__17834 = null;
var G__17835 = 0;
var G__17836 = 0;
seq__17812_17816 = G__17833;
chunk__17813_17817 = G__17834;
count__17814_17818 = G__17835;
i__17815_17819 = G__17836;
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
{var value_17847 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__17843_17848 = cljs.core.seq(domina.nodes(content));
var chunk__17844_17849 = null;
var count__17845_17850 = 0;
var i__17846_17851 = 0;
while(true){
if((i__17846_17851 < count__17845_17850))
{var node_17852 = chunk__17844_17849.cljs$core$IIndexed$_nth$arity$2(chunk__17844_17849,i__17846_17851);
goog.events.removeAll(node_17852);
node_17852.innerHTML = value_17847;
{
var G__17853 = seq__17843_17848;
var G__17854 = chunk__17844_17849;
var G__17855 = count__17845_17850;
var G__17856 = (i__17846_17851 + 1);
seq__17843_17848 = G__17853;
chunk__17844_17849 = G__17854;
count__17845_17850 = G__17855;
i__17846_17851 = G__17856;
continue;
}
} else
{var temp__4092__auto___17857 = cljs.core.seq(seq__17843_17848);
if(temp__4092__auto___17857)
{var seq__17843_17858__$1 = temp__4092__auto___17857;
if(cljs.core.chunked_seq_QMARK_(seq__17843_17858__$1))
{var c__9926__auto___17859 = cljs.core.chunk_first(seq__17843_17858__$1);
{
var G__17860 = cljs.core.chunk_rest(seq__17843_17858__$1);
var G__17861 = c__9926__auto___17859;
var G__17862 = cljs.core.count(c__9926__auto___17859);
var G__17863 = 0;
seq__17843_17848 = G__17860;
chunk__17844_17849 = G__17861;
count__17845_17850 = G__17862;
i__17846_17851 = G__17863;
continue;
}
} else
{var node_17864 = cljs.core.first(seq__17843_17858__$1);
goog.events.removeAll(node_17864);
node_17864.innerHTML = value_17847;
{
var G__17865 = cljs.core.next(seq__17843_17858__$1);
var G__17866 = null;
var G__17867 = 0;
var G__17868 = 0;
seq__17843_17848 = G__17865;
chunk__17844_17849 = G__17866;
count__17845_17850 = G__17867;
i__17846_17851 = G__17868;
continue;
}
}
} else
{}
}
break;
}
}catch (e17842){if((e17842 instanceof Error))
{var e_17869 = e17842;
domina.replace_children_BANG_(content,value_17847);
} else
{if("\uFDD0:else")
{throw e17842;
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
var seq__17876_17880 = cljs.core.seq(children);
var chunk__17877_17881 = null;
var count__17878_17882 = 0;
var i__17879_17883 = 0;
while(true){
if((i__17879_17883 < count__17878_17882))
{var child_17884 = chunk__17877_17881.cljs$core$IIndexed$_nth$arity$2(chunk__17877_17881,i__17879_17883);
frag.appendChild(child_17884);
{
var G__17885 = seq__17876_17880;
var G__17886 = chunk__17877_17881;
var G__17887 = count__17878_17882;
var G__17888 = (i__17879_17883 + 1);
seq__17876_17880 = G__17885;
chunk__17877_17881 = G__17886;
count__17878_17882 = G__17887;
i__17879_17883 = G__17888;
continue;
}
} else
{var temp__4092__auto___17889 = cljs.core.seq(seq__17876_17880);
if(temp__4092__auto___17889)
{var seq__17876_17890__$1 = temp__4092__auto___17889;
if(cljs.core.chunked_seq_QMARK_(seq__17876_17890__$1))
{var c__9926__auto___17891 = cljs.core.chunk_first(seq__17876_17890__$1);
{
var G__17892 = cljs.core.chunk_rest(seq__17876_17890__$1);
var G__17893 = c__9926__auto___17891;
var G__17894 = cljs.core.count(c__9926__auto___17891);
var G__17895 = 0;
seq__17876_17880 = G__17892;
chunk__17877_17881 = G__17893;
count__17878_17882 = G__17894;
i__17879_17883 = G__17895;
continue;
}
} else
{var child_17896 = cljs.core.first(seq__17876_17890__$1);
frag.appendChild(child_17896);
{
var G__17897 = cljs.core.next(seq__17876_17890__$1);
var G__17898 = null;
var G__17899 = 0;
var G__17900 = 0;
seq__17876_17880 = G__17897;
chunk__17877_17881 = G__17898;
count__17878_17882 = G__17899;
i__17879_17883 = G__17900;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__17870_SHARP_,p2__17871_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__17870_SHARP_,p2__17871_SHARP_) : f.call(null,p1__17870_SHARP_,p2__17871_SHARP_));
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
{if((function (){var G__17902 = list_thing;
if(G__17902)
{if((function (){var or__3943__auto__ = (G__17902.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__17902.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__17902.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__17902);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__17902);
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
{if((function (){var G__17903 = content;
if(G__17903)
{if((function (){var or__3943__auto__ = (G__17903.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__17903.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__17903.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__17903);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__17903);
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
{if((function (){var G__17904 = content;
if(G__17904)
{if((function (){var or__3943__auto__ = (G__17904.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__17904.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__17904.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__17904);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__17904);
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
