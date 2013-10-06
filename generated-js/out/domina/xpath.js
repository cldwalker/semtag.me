goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('domina');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc = goog.dom.getOwnerDocument(node);
if(cljs.core.truth_((function (){var and__3941__auto__ = node.selectSingleNode;
if(cljs.core.truth_(and__3941__auto__))
{return doc.setProperty;
} else
{return and__3941__auto__;
}
})()))
{doc.setProperty("SelectionLanguage","XPath");
return (technique_1.cljs$core$IFn$_invoke$arity$2 ? technique_1.cljs$core$IFn$_invoke$arity$2(node,path) : technique_1.call(null,node,path));
} else
{if(cljs.core.truth_(doc.evaluate))
{return (technique_2.cljs$core$IFn$_invoke$arity$4 ? technique_2.cljs$core$IFn$_invoke$arity$4(null,doc,node,path) : technique_2.call(null,null,doc,node,path));
} else
{if("\uFDD0:else")
{throw (new Error("Could not find XPath support in this browser."));
} else
{return null;
}
}
}
});
/**
* Selects a single node using an XPath expression and a root node
*/
domina.xpath.select_node = (function select_node(expr,node){
return domina.xpath.select_node_STAR_(expr,node,(function (node__$1,expr__$1){
return node__$1.selectSingleNode(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
return result.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_(expr,node,(function (node__$1,expr__$1){
return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results = result.snapshotLength;
var i = 0;
var acc = null;
while(true){
if((i < num_results))
{{
var G__13259 = (i + 1);
var G__13260 = cljs.core.cons(result.snapshotItem(i),acc);
i = G__13259;
acc = G__13260;
continue;
}
} else
{return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__1 = (function (expr){
return xpath.cljs$core$IFn$_invoke$arity$2(domina.xpath.root_element(),expr);
});
var xpath__2 = (function (base,expr){
if((void 0 === domina.xpath.t13264))
{goog.provide('domina.xpath.t13264');

/**
* @constructor
*/
domina.xpath.t13264 = (function (expr,base,xpath,meta13265){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.meta13265 = meta13265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.xpath.t13264.cljs$lang$type = true;
domina.xpath.t13264.cljs$lang$ctorStr = "domina.xpath/t13264";
domina.xpath.t13264.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.xpath/t13264");
});
domina.xpath.t13264.prototype.domina$DomContent$ = true;
domina.xpath.t13264.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_nodes,self__.expr),domina.nodes(self__.base));
});
domina.xpath.t13264.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_node,self__.expr),domina.nodes(self__.base))));
});
domina.xpath.t13264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13266){
var self__ = this;
return self__.meta13265;
});
domina.xpath.t13264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13266,meta13265__$1){
var self__ = this;
return (new domina.xpath.t13264(self__.expr,self__.base,self__.xpath,meta13265__$1));
});
domina.xpath.__GT_t13264 = (function __GT_t13264(expr__$1,base__$1,xpath__$1,meta13265){
return (new domina.xpath.t13264(expr__$1,base__$1,xpath__$1,meta13265));
});
} else
{}
return (new domina.xpath.t13264(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case 1:
return xpath__1.call(this,base);
case 2:
return xpath__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xpath.cljs$core$IFn$_invoke$arity$1 = xpath__1;
xpath.cljs$core$IFn$_invoke$arity$2 = xpath__2;
return xpath;
})()
;
