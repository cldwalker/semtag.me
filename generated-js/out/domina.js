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
var opt_wrapper_13481 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_13482 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_13483 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_13482,table_section_wrapper_13482,opt_wrapper_13481,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_13483,table_section_wrapper_13482,cell_wrapper_13483,opt_wrapper_13481,table_section_wrapper_13482,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_13482]);
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
var seq__13488 = cljs.core.seq(tbody);
var chunk__13489 = null;
var count__13490 = 0;
var i__13491 = 0;
while(true){
if((i__13491 < count__13490))
{var child = chunk__13489.cljs$core$IIndexed$_nth$arity$2(chunk__13489,i__13491);
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
var G__13492 = seq__13488;
var G__13493 = chunk__13489;
var G__13494 = count__13490;
var G__13495 = (i__13491 + 1);
seq__13488 = G__13492;
chunk__13489 = G__13493;
count__13490 = G__13494;
i__13491 = G__13495;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13488);
if(temp__4092__auto__)
{var seq__13488__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13488__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13488__$1);
{
var G__13496 = cljs.core.chunk_rest(seq__13488__$1);
var G__13497 = c__9646__auto__;
var G__13498 = cljs.core.count(c__9646__auto__);
var G__13499 = 0;
seq__13488 = G__13496;
chunk__13489 = G__13497;
count__13490 = G__13498;
i__13491 = G__13499;
continue;
}
} else
{var child = cljs.core.first(seq__13488__$1);
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
var G__13500 = cljs.core.next(seq__13488__$1);
var G__13501 = null;
var G__13502 = 0;
var G__13503 = 0;
seq__13488 = G__13500;
chunk__13489 = G__13501;
count__13490 = G__13502;
i__13491 = G__13503;
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
var vec__13505 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13505,0,null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13505,1,null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13505,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__13506 = wrapper.lastChild;
var G__13507 = (level - 1);
wrapper = G__13506;
level = G__13507;
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
log_debug.cljs$lang$applyTo = (function (arglist__13508){
var mesg = cljs.core.seq(arglist__13508);
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
log.cljs$lang$applyTo = (function (arglist__13509){
var mesg = cljs.core.seq(arglist__13509);
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
if((void 0 === domina.t13513))
{goog.provide('domina.t13513');

/**
* @constructor
*/
domina.t13513 = (function (class_name,by_class,meta13514){
this.class_name = class_name;
this.by_class = by_class;
this.meta13514 = meta13514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t13513.cljs$lang$type = true;
domina.t13513.cljs$lang$ctorStr = "domina/t13513";
domina.t13513.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina/t13513");
});
domina.t13513.prototype.domina$DomContent$ = true;
domina.t13513.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(self__.class_name))));
});
domina.t13513.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementByClass(cljs.core.name(self__.class_name))) : domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name(self__.class_name))));
});
domina.t13513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13515){
var self__ = this;
return self__.meta13514;
});
domina.t13513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13515,meta13514__$1){
var self__ = this;
return (new domina.t13513(self__.class_name,self__.by_class,meta13514__$1));
});
domina.__GT_t13513 = (function __GT_t13513(class_name__$1,by_class__$1,meta13514){
return (new domina.t13513(class_name__$1,by_class__$1,meta13514));
});
} else
{}
return (new domina.t13513(class_name,by_class,null));
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13516){
var contents = cljs.core.seq(arglist__13516);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13517_SHARP_){
return p1__13517_SHARP_.cloneNode(true);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13518_SHARP_,p2__13519_SHARP_){
return goog.dom.insertChildAt(p1__13518_SHARP_,p2__13519_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__13518_SHARP_,p2__13519_SHARP_){
return goog.dom.insertChildAt(p1__13518_SHARP_,p2__13519_SHARP_,idx);
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
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13521_SHARP_,p2__13520_SHARP_){
return goog.dom.insertSiblingBefore(p2__13520_SHARP_,p1__13521_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13521_SHARP_,p2__13520_SHARP_){
return goog.dom.insertSiblingBefore(p2__13520_SHARP_,p1__13521_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13523_SHARP_,p2__13522_SHARP_){
return goog.dom.insertSiblingAfter(p2__13522_SHARP_,p1__13523_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13523_SHARP_,p2__13522_SHARP_){
return goog.dom.insertSiblingAfter(p2__13522_SHARP_,p1__13523_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__13525_SHARP_,p2__13524_SHARP_){
return goog.dom.replaceNode(p2__13524_SHARP_,p1__13525_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__13525_SHARP_,p2__13524_SHARP_){
return goog.dom.replaceNode(p2__13524_SHARP_,p1__13525_SHARP_);
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
var seq__13530_13534 = cljs.core.seq(domina.nodes(content));
var chunk__13531_13535 = null;
var count__13532_13536 = 0;
var i__13533_13537 = 0;
while(true){
if((i__13533_13537 < count__13532_13536))
{var n_13538 = chunk__13531_13535.cljs$core$IIndexed$_nth$arity$2(chunk__13531_13535,i__13533_13537);
goog.style.setStyle(n_13538,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13539 = seq__13530_13534;
var G__13540 = chunk__13531_13535;
var G__13541 = count__13532_13536;
var G__13542 = (i__13533_13537 + 1);
seq__13530_13534 = G__13539;
chunk__13531_13535 = G__13540;
count__13532_13536 = G__13541;
i__13533_13537 = G__13542;
continue;
}
} else
{var temp__4092__auto___13543 = cljs.core.seq(seq__13530_13534);
if(temp__4092__auto___13543)
{var seq__13530_13544__$1 = temp__4092__auto___13543;
if(cljs.core.chunked_seq_QMARK_(seq__13530_13544__$1))
{var c__9646__auto___13545 = cljs.core.chunk_first(seq__13530_13544__$1);
{
var G__13546 = cljs.core.chunk_rest(seq__13530_13544__$1);
var G__13547 = c__9646__auto___13545;
var G__13548 = cljs.core.count(c__9646__auto___13545);
var G__13549 = 0;
seq__13530_13534 = G__13546;
chunk__13531_13535 = G__13547;
count__13532_13536 = G__13548;
i__13533_13537 = G__13549;
continue;
}
} else
{var n_13550 = cljs.core.first(seq__13530_13544__$1);
goog.style.setStyle(n_13550,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13551 = cljs.core.next(seq__13530_13544__$1);
var G__13552 = null;
var G__13553 = 0;
var G__13554 = 0;
seq__13530_13534 = G__13551;
chunk__13531_13535 = G__13552;
count__13532_13536 = G__13553;
i__13533_13537 = G__13554;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13555){
var content = cljs.core.first(arglist__13555);
arglist__13555 = cljs.core.next(arglist__13555);
var name = cljs.core.first(arglist__13555);
var value = cljs.core.rest(arglist__13555);
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
var seq__13560_13564 = cljs.core.seq(domina.nodes(content));
var chunk__13561_13565 = null;
var count__13562_13566 = 0;
var i__13563_13567 = 0;
while(true){
if((i__13563_13567 < count__13562_13566))
{var n_13568 = chunk__13561_13565.cljs$core$IIndexed$_nth$arity$2(chunk__13561_13565,i__13563_13567);
n_13568.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13569 = seq__13560_13564;
var G__13570 = chunk__13561_13565;
var G__13571 = count__13562_13566;
var G__13572 = (i__13563_13567 + 1);
seq__13560_13564 = G__13569;
chunk__13561_13565 = G__13570;
count__13562_13566 = G__13571;
i__13563_13567 = G__13572;
continue;
}
} else
{var temp__4092__auto___13573 = cljs.core.seq(seq__13560_13564);
if(temp__4092__auto___13573)
{var seq__13560_13574__$1 = temp__4092__auto___13573;
if(cljs.core.chunked_seq_QMARK_(seq__13560_13574__$1))
{var c__9646__auto___13575 = cljs.core.chunk_first(seq__13560_13574__$1);
{
var G__13576 = cljs.core.chunk_rest(seq__13560_13574__$1);
var G__13577 = c__9646__auto___13575;
var G__13578 = cljs.core.count(c__9646__auto___13575);
var G__13579 = 0;
seq__13560_13564 = G__13576;
chunk__13561_13565 = G__13577;
count__13562_13566 = G__13578;
i__13563_13567 = G__13579;
continue;
}
} else
{var n_13580 = cljs.core.first(seq__13560_13574__$1);
n_13580.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__13581 = cljs.core.next(seq__13560_13574__$1);
var G__13582 = null;
var G__13583 = 0;
var G__13584 = 0;
seq__13560_13564 = G__13581;
chunk__13561_13565 = G__13582;
count__13562_13566 = G__13583;
i__13563_13567 = G__13584;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13585){
var content = cljs.core.first(arglist__13585);
arglist__13585 = cljs.core.next(arglist__13585);
var name = cljs.core.first(arglist__13585);
var value = cljs.core.rest(arglist__13585);
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
var seq__13590_13594 = cljs.core.seq(domina.nodes(content));
var chunk__13591_13595 = null;
var count__13592_13596 = 0;
var i__13593_13597 = 0;
while(true){
if((i__13593_13597 < count__13592_13596))
{var n_13598 = chunk__13591_13595.cljs$core$IIndexed$_nth$arity$2(chunk__13591_13595,i__13593_13597);
n_13598.removeAttribute(cljs.core.name(name));
{
var G__13599 = seq__13590_13594;
var G__13600 = chunk__13591_13595;
var G__13601 = count__13592_13596;
var G__13602 = (i__13593_13597 + 1);
seq__13590_13594 = G__13599;
chunk__13591_13595 = G__13600;
count__13592_13596 = G__13601;
i__13593_13597 = G__13602;
continue;
}
} else
{var temp__4092__auto___13603 = cljs.core.seq(seq__13590_13594);
if(temp__4092__auto___13603)
{var seq__13590_13604__$1 = temp__4092__auto___13603;
if(cljs.core.chunked_seq_QMARK_(seq__13590_13604__$1))
{var c__9646__auto___13605 = cljs.core.chunk_first(seq__13590_13604__$1);
{
var G__13606 = cljs.core.chunk_rest(seq__13590_13604__$1);
var G__13607 = c__9646__auto___13605;
var G__13608 = cljs.core.count(c__9646__auto___13605);
var G__13609 = 0;
seq__13590_13594 = G__13606;
chunk__13591_13595 = G__13607;
count__13592_13596 = G__13608;
i__13593_13597 = G__13609;
continue;
}
} else
{var n_13610 = cljs.core.first(seq__13590_13604__$1);
n_13610.removeAttribute(cljs.core.name(name));
{
var G__13611 = cljs.core.next(seq__13590_13604__$1);
var G__13612 = null;
var G__13613 = 0;
var G__13614 = 0;
seq__13590_13594 = G__13611;
chunk__13591_13595 = G__13612;
count__13592_13596 = G__13613;
i__13593_13597 = G__13614;
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
var vec__13616 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13616,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13616,1,null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13617_SHARP_){
var attr = attrs__$1.item(p1__13617_SHARP_);
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
var seq__13624_13630 = cljs.core.seq(styles);
var chunk__13625_13631 = null;
var count__13626_13632 = 0;
var i__13627_13633 = 0;
while(true){
if((i__13627_13633 < count__13626_13632))
{var vec__13628_13634 = chunk__13625_13631.cljs$core$IIndexed$_nth$arity$2(chunk__13625_13631,i__13627_13633);
var name_13635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13628_13634,0,null);
var value_13636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13628_13634,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13635,cljs.core.array_seq([value_13636], 0));
{
var G__13637 = seq__13624_13630;
var G__13638 = chunk__13625_13631;
var G__13639 = count__13626_13632;
var G__13640 = (i__13627_13633 + 1);
seq__13624_13630 = G__13637;
chunk__13625_13631 = G__13638;
count__13626_13632 = G__13639;
i__13627_13633 = G__13640;
continue;
}
} else
{var temp__4092__auto___13641 = cljs.core.seq(seq__13624_13630);
if(temp__4092__auto___13641)
{var seq__13624_13642__$1 = temp__4092__auto___13641;
if(cljs.core.chunked_seq_QMARK_(seq__13624_13642__$1))
{var c__9646__auto___13643 = cljs.core.chunk_first(seq__13624_13642__$1);
{
var G__13644 = cljs.core.chunk_rest(seq__13624_13642__$1);
var G__13645 = c__9646__auto___13643;
var G__13646 = cljs.core.count(c__9646__auto___13643);
var G__13647 = 0;
seq__13624_13630 = G__13644;
chunk__13625_13631 = G__13645;
count__13626_13632 = G__13646;
i__13627_13633 = G__13647;
continue;
}
} else
{var vec__13629_13648 = cljs.core.first(seq__13624_13642__$1);
var name_13649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629_13648,0,null);
var value_13650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629_13648,1,null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13649,cljs.core.array_seq([value_13650], 0));
{
var G__13651 = cljs.core.next(seq__13624_13642__$1);
var G__13652 = null;
var G__13653 = 0;
var G__13654 = 0;
seq__13624_13630 = G__13651;
chunk__13625_13631 = G__13652;
count__13626_13632 = G__13653;
i__13627_13633 = G__13654;
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
var seq__13661_13667 = cljs.core.seq(attrs);
var chunk__13662_13668 = null;
var count__13663_13669 = 0;
var i__13664_13670 = 0;
while(true){
if((i__13664_13670 < count__13663_13669))
{var vec__13665_13671 = chunk__13662_13668.cljs$core$IIndexed$_nth$arity$2(chunk__13662_13668,i__13664_13670);
var name_13672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13665_13671,0,null);
var value_13673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13665_13671,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13672,cljs.core.array_seq([value_13673], 0));
{
var G__13674 = seq__13661_13667;
var G__13675 = chunk__13662_13668;
var G__13676 = count__13663_13669;
var G__13677 = (i__13664_13670 + 1);
seq__13661_13667 = G__13674;
chunk__13662_13668 = G__13675;
count__13663_13669 = G__13676;
i__13664_13670 = G__13677;
continue;
}
} else
{var temp__4092__auto___13678 = cljs.core.seq(seq__13661_13667);
if(temp__4092__auto___13678)
{var seq__13661_13679__$1 = temp__4092__auto___13678;
if(cljs.core.chunked_seq_QMARK_(seq__13661_13679__$1))
{var c__9646__auto___13680 = cljs.core.chunk_first(seq__13661_13679__$1);
{
var G__13681 = cljs.core.chunk_rest(seq__13661_13679__$1);
var G__13682 = c__9646__auto___13680;
var G__13683 = cljs.core.count(c__9646__auto___13680);
var G__13684 = 0;
seq__13661_13667 = G__13681;
chunk__13662_13668 = G__13682;
count__13663_13669 = G__13683;
i__13664_13670 = G__13684;
continue;
}
} else
{var vec__13666_13685 = cljs.core.first(seq__13661_13679__$1);
var name_13686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13666_13685,0,null);
var value_13687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13666_13685,1,null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_13686,cljs.core.array_seq([value_13687], 0));
{
var G__13688 = cljs.core.next(seq__13661_13679__$1);
var G__13689 = null;
var G__13690 = 0;
var G__13691 = 0;
seq__13661_13667 = G__13688;
chunk__13662_13668 = G__13689;
count__13663_13669 = G__13690;
i__13664_13670 = G__13691;
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
var seq__13696_13700 = cljs.core.seq(domina.nodes(content));
var chunk__13697_13701 = null;
var count__13698_13702 = 0;
var i__13699_13703 = 0;
while(true){
if((i__13699_13703 < count__13698_13702))
{var node_13704 = chunk__13697_13701.cljs$core$IIndexed$_nth$arity$2(chunk__13697_13701,i__13699_13703);
goog.dom.classes.add(node_13704,class$);
{
var G__13705 = seq__13696_13700;
var G__13706 = chunk__13697_13701;
var G__13707 = count__13698_13702;
var G__13708 = (i__13699_13703 + 1);
seq__13696_13700 = G__13705;
chunk__13697_13701 = G__13706;
count__13698_13702 = G__13707;
i__13699_13703 = G__13708;
continue;
}
} else
{var temp__4092__auto___13709 = cljs.core.seq(seq__13696_13700);
if(temp__4092__auto___13709)
{var seq__13696_13710__$1 = temp__4092__auto___13709;
if(cljs.core.chunked_seq_QMARK_(seq__13696_13710__$1))
{var c__9646__auto___13711 = cljs.core.chunk_first(seq__13696_13710__$1);
{
var G__13712 = cljs.core.chunk_rest(seq__13696_13710__$1);
var G__13713 = c__9646__auto___13711;
var G__13714 = cljs.core.count(c__9646__auto___13711);
var G__13715 = 0;
seq__13696_13700 = G__13712;
chunk__13697_13701 = G__13713;
count__13698_13702 = G__13714;
i__13699_13703 = G__13715;
continue;
}
} else
{var node_13716 = cljs.core.first(seq__13696_13710__$1);
goog.dom.classes.add(node_13716,class$);
{
var G__13717 = cljs.core.next(seq__13696_13710__$1);
var G__13718 = null;
var G__13719 = 0;
var G__13720 = 0;
seq__13696_13700 = G__13717;
chunk__13697_13701 = G__13718;
count__13698_13702 = G__13719;
i__13699_13703 = G__13720;
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
var seq__13725_13729 = cljs.core.seq(domina.nodes(content));
var chunk__13726_13730 = null;
var count__13727_13731 = 0;
var i__13728_13732 = 0;
while(true){
if((i__13728_13732 < count__13727_13731))
{var node_13733 = chunk__13726_13730.cljs$core$IIndexed$_nth$arity$2(chunk__13726_13730,i__13728_13732);
goog.dom.classes.remove(node_13733,class$);
{
var G__13734 = seq__13725_13729;
var G__13735 = chunk__13726_13730;
var G__13736 = count__13727_13731;
var G__13737 = (i__13728_13732 + 1);
seq__13725_13729 = G__13734;
chunk__13726_13730 = G__13735;
count__13727_13731 = G__13736;
i__13728_13732 = G__13737;
continue;
}
} else
{var temp__4092__auto___13738 = cljs.core.seq(seq__13725_13729);
if(temp__4092__auto___13738)
{var seq__13725_13739__$1 = temp__4092__auto___13738;
if(cljs.core.chunked_seq_QMARK_(seq__13725_13739__$1))
{var c__9646__auto___13740 = cljs.core.chunk_first(seq__13725_13739__$1);
{
var G__13741 = cljs.core.chunk_rest(seq__13725_13739__$1);
var G__13742 = c__9646__auto___13740;
var G__13743 = cljs.core.count(c__9646__auto___13740);
var G__13744 = 0;
seq__13725_13729 = G__13741;
chunk__13726_13730 = G__13742;
count__13727_13731 = G__13743;
i__13728_13732 = G__13744;
continue;
}
} else
{var node_13745 = cljs.core.first(seq__13725_13739__$1);
goog.dom.classes.remove(node_13745,class$);
{
var G__13746 = cljs.core.next(seq__13725_13739__$1);
var G__13747 = null;
var G__13748 = 0;
var G__13749 = 0;
seq__13725_13729 = G__13746;
chunk__13726_13730 = G__13747;
count__13727_13731 = G__13748;
i__13728_13732 = G__13749;
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
var classes_13758__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__13754_13759 = cljs.core.seq(domina.nodes(content));
var chunk__13755_13760 = null;
var count__13756_13761 = 0;
var i__13757_13762 = 0;
while(true){
if((i__13757_13762 < count__13756_13761))
{var node_13763 = chunk__13755_13760.cljs$core$IIndexed$_nth$arity$2(chunk__13755_13760,i__13757_13762);
goog.dom.classes.set(node_13763,classes_13758__$1);
{
var G__13764 = seq__13754_13759;
var G__13765 = chunk__13755_13760;
var G__13766 = count__13756_13761;
var G__13767 = (i__13757_13762 + 1);
seq__13754_13759 = G__13764;
chunk__13755_13760 = G__13765;
count__13756_13761 = G__13766;
i__13757_13762 = G__13767;
continue;
}
} else
{var temp__4092__auto___13768 = cljs.core.seq(seq__13754_13759);
if(temp__4092__auto___13768)
{var seq__13754_13769__$1 = temp__4092__auto___13768;
if(cljs.core.chunked_seq_QMARK_(seq__13754_13769__$1))
{var c__9646__auto___13770 = cljs.core.chunk_first(seq__13754_13769__$1);
{
var G__13771 = cljs.core.chunk_rest(seq__13754_13769__$1);
var G__13772 = c__9646__auto___13770;
var G__13773 = cljs.core.count(c__9646__auto___13770);
var G__13774 = 0;
seq__13754_13759 = G__13771;
chunk__13755_13760 = G__13772;
count__13756_13761 = G__13773;
i__13757_13762 = G__13774;
continue;
}
} else
{var node_13775 = cljs.core.first(seq__13754_13769__$1);
goog.dom.classes.set(node_13775,classes_13758__$1);
{
var G__13776 = cljs.core.next(seq__13754_13769__$1);
var G__13777 = null;
var G__13778 = 0;
var G__13779 = 0;
seq__13754_13759 = G__13776;
chunk__13755_13760 = G__13777;
count__13756_13761 = G__13778;
i__13757_13762 = G__13779;
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
var seq__13784_13788 = cljs.core.seq(domina.nodes(content));
var chunk__13785_13789 = null;
var count__13786_13790 = 0;
var i__13787_13791 = 0;
while(true){
if((i__13787_13791 < count__13786_13790))
{var node_13792 = chunk__13785_13789.cljs$core$IIndexed$_nth$arity$2(chunk__13785_13789,i__13787_13791);
goog.dom.setTextContent(node_13792,value);
{
var G__13793 = seq__13784_13788;
var G__13794 = chunk__13785_13789;
var G__13795 = count__13786_13790;
var G__13796 = (i__13787_13791 + 1);
seq__13784_13788 = G__13793;
chunk__13785_13789 = G__13794;
count__13786_13790 = G__13795;
i__13787_13791 = G__13796;
continue;
}
} else
{var temp__4092__auto___13797 = cljs.core.seq(seq__13784_13788);
if(temp__4092__auto___13797)
{var seq__13784_13798__$1 = temp__4092__auto___13797;
if(cljs.core.chunked_seq_QMARK_(seq__13784_13798__$1))
{var c__9646__auto___13799 = cljs.core.chunk_first(seq__13784_13798__$1);
{
var G__13800 = cljs.core.chunk_rest(seq__13784_13798__$1);
var G__13801 = c__9646__auto___13799;
var G__13802 = cljs.core.count(c__9646__auto___13799);
var G__13803 = 0;
seq__13784_13788 = G__13800;
chunk__13785_13789 = G__13801;
count__13786_13790 = G__13802;
i__13787_13791 = G__13803;
continue;
}
} else
{var node_13804 = cljs.core.first(seq__13784_13798__$1);
goog.dom.setTextContent(node_13804,value);
{
var G__13805 = cljs.core.next(seq__13784_13798__$1);
var G__13806 = null;
var G__13807 = 0;
var G__13808 = 0;
seq__13784_13788 = G__13805;
chunk__13785_13789 = G__13806;
count__13786_13790 = G__13807;
i__13787_13791 = G__13808;
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
var seq__13813_13817 = cljs.core.seq(domina.nodes(content));
var chunk__13814_13818 = null;
var count__13815_13819 = 0;
var i__13816_13820 = 0;
while(true){
if((i__13816_13820 < count__13815_13819))
{var node_13821 = chunk__13814_13818.cljs$core$IIndexed$_nth$arity$2(chunk__13814_13818,i__13816_13820);
goog.dom.forms.setValue(node_13821,value);
{
var G__13822 = seq__13813_13817;
var G__13823 = chunk__13814_13818;
var G__13824 = count__13815_13819;
var G__13825 = (i__13816_13820 + 1);
seq__13813_13817 = G__13822;
chunk__13814_13818 = G__13823;
count__13815_13819 = G__13824;
i__13816_13820 = G__13825;
continue;
}
} else
{var temp__4092__auto___13826 = cljs.core.seq(seq__13813_13817);
if(temp__4092__auto___13826)
{var seq__13813_13827__$1 = temp__4092__auto___13826;
if(cljs.core.chunked_seq_QMARK_(seq__13813_13827__$1))
{var c__9646__auto___13828 = cljs.core.chunk_first(seq__13813_13827__$1);
{
var G__13829 = cljs.core.chunk_rest(seq__13813_13827__$1);
var G__13830 = c__9646__auto___13828;
var G__13831 = cljs.core.count(c__9646__auto___13828);
var G__13832 = 0;
seq__13813_13817 = G__13829;
chunk__13814_13818 = G__13830;
count__13815_13819 = G__13831;
i__13816_13820 = G__13832;
continue;
}
} else
{var node_13833 = cljs.core.first(seq__13813_13827__$1);
goog.dom.forms.setValue(node_13833,value);
{
var G__13834 = cljs.core.next(seq__13813_13827__$1);
var G__13835 = null;
var G__13836 = 0;
var G__13837 = 0;
seq__13813_13817 = G__13834;
chunk__13814_13818 = G__13835;
count__13815_13819 = G__13836;
i__13816_13820 = G__13837;
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
{var value_13848 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13844_13849 = cljs.core.seq(domina.nodes(content));
var chunk__13845_13850 = null;
var count__13846_13851 = 0;
var i__13847_13852 = 0;
while(true){
if((i__13847_13852 < count__13846_13851))
{var node_13853 = chunk__13845_13850.cljs$core$IIndexed$_nth$arity$2(chunk__13845_13850,i__13847_13852);
goog.events.removeAll(node_13853);
node_13853.innerHTML = value_13848;
{
var G__13854 = seq__13844_13849;
var G__13855 = chunk__13845_13850;
var G__13856 = count__13846_13851;
var G__13857 = (i__13847_13852 + 1);
seq__13844_13849 = G__13854;
chunk__13845_13850 = G__13855;
count__13846_13851 = G__13856;
i__13847_13852 = G__13857;
continue;
}
} else
{var temp__4092__auto___13858 = cljs.core.seq(seq__13844_13849);
if(temp__4092__auto___13858)
{var seq__13844_13859__$1 = temp__4092__auto___13858;
if(cljs.core.chunked_seq_QMARK_(seq__13844_13859__$1))
{var c__9646__auto___13860 = cljs.core.chunk_first(seq__13844_13859__$1);
{
var G__13861 = cljs.core.chunk_rest(seq__13844_13859__$1);
var G__13862 = c__9646__auto___13860;
var G__13863 = cljs.core.count(c__9646__auto___13860);
var G__13864 = 0;
seq__13844_13849 = G__13861;
chunk__13845_13850 = G__13862;
count__13846_13851 = G__13863;
i__13847_13852 = G__13864;
continue;
}
} else
{var node_13865 = cljs.core.first(seq__13844_13859__$1);
goog.events.removeAll(node_13865);
node_13865.innerHTML = value_13848;
{
var G__13866 = cljs.core.next(seq__13844_13859__$1);
var G__13867 = null;
var G__13868 = 0;
var G__13869 = 0;
seq__13844_13849 = G__13866;
chunk__13845_13850 = G__13867;
count__13846_13851 = G__13868;
i__13847_13852 = G__13869;
continue;
}
}
} else
{}
}
break;
}
}catch (e13843){if((e13843 instanceof Error))
{var e_13870 = e13843;
domina.replace_children_BANG_(content,value_13848);
} else
{if("\uFDD0:else")
{throw e13843;
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
var seq__13877_13881 = cljs.core.seq(children);
var chunk__13878_13882 = null;
var count__13879_13883 = 0;
var i__13880_13884 = 0;
while(true){
if((i__13880_13884 < count__13879_13883))
{var child_13885 = chunk__13878_13882.cljs$core$IIndexed$_nth$arity$2(chunk__13878_13882,i__13880_13884);
frag.appendChild(child_13885);
{
var G__13886 = seq__13877_13881;
var G__13887 = chunk__13878_13882;
var G__13888 = count__13879_13883;
var G__13889 = (i__13880_13884 + 1);
seq__13877_13881 = G__13886;
chunk__13878_13882 = G__13887;
count__13879_13883 = G__13888;
i__13880_13884 = G__13889;
continue;
}
} else
{var temp__4092__auto___13890 = cljs.core.seq(seq__13877_13881);
if(temp__4092__auto___13890)
{var seq__13877_13891__$1 = temp__4092__auto___13890;
if(cljs.core.chunked_seq_QMARK_(seq__13877_13891__$1))
{var c__9646__auto___13892 = cljs.core.chunk_first(seq__13877_13891__$1);
{
var G__13893 = cljs.core.chunk_rest(seq__13877_13891__$1);
var G__13894 = c__9646__auto___13892;
var G__13895 = cljs.core.count(c__9646__auto___13892);
var G__13896 = 0;
seq__13877_13881 = G__13893;
chunk__13878_13882 = G__13894;
count__13879_13883 = G__13895;
i__13880_13884 = G__13896;
continue;
}
} else
{var child_13897 = cljs.core.first(seq__13877_13891__$1);
frag.appendChild(child_13897);
{
var G__13898 = cljs.core.next(seq__13877_13891__$1);
var G__13899 = null;
var G__13900 = 0;
var G__13901 = 0;
seq__13877_13881 = G__13898;
chunk__13878_13882 = G__13899;
count__13879_13883 = G__13900;
i__13880_13884 = G__13901;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__13871_SHARP_,p2__13872_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__13871_SHARP_,p2__13872_SHARP_) : f.call(null,p1__13871_SHARP_,p2__13872_SHARP_));
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
{if((function (){var G__13903 = list_thing;
if(G__13903)
{if((function (){var or__3943__auto__ = (G__13903.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13903.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13903.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13903);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13903);
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
{if((function (){var G__13904 = content;
if(G__13904)
{if((function (){var or__3943__auto__ = (G__13904.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13904.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13904.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13904);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13904);
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
{if((function (){var G__13905 = content;
if(G__13905)
{if((function (){var or__3943__auto__ = (G__13905.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13905.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13905.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13905);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__13905);
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
