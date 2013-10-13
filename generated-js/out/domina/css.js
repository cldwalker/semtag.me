goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){
return sel.cljs$core$IFn$_invoke$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){
if((void 0 === domina.css.t13926))
{goog.provide('domina.css.t13926');

/**
* @constructor
*/
domina.css.t13926 = (function (expr,base,sel,meta13927){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta13927 = meta13927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t13926.cljs$lang$type = true;
domina.css.t13926.cljs$lang$ctorStr = "domina.css/t13926";
domina.css.t13926.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.css/t13926");
});
domina.css.t13926.prototype.domina$DomContent$ = true;
domina.css.t13926.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13921_SHARP_){
return domina.normalize_seq(goog.dom.query(self__.expr,p1__13921_SHARP_));
}),domina.nodes(self__.base));
});
domina.css.t13926.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13922_SHARP_){
return domina.normalize_seq(goog.dom.query(self__.expr,p1__13922_SHARP_));
}),domina.nodes(self__.base))));
});
domina.css.t13926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13928){
var self__ = this;
return self__.meta13927;
});
domina.css.t13926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13928,meta13927__$1){
var self__ = this;
return (new domina.css.t13926(self__.expr,self__.base,self__.sel,meta13927__$1));
});
domina.css.__GT_t13926 = (function __GT_t13926(expr__$1,base__$1,sel__$1,meta13927){
return (new domina.css.t13926(expr__$1,base__$1,sel__$1,meta13927));
});
} else
{}
return (new domina.css.t13926(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;
