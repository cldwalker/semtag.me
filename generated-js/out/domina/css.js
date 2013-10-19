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
if((void 0 === domina.css.t13931))
{goog.provide('domina.css.t13931');

/**
* @constructor
*/
domina.css.t13931 = (function (expr,base,sel,meta13932){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta13932 = meta13932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t13931.cljs$lang$type = true;
domina.css.t13931.cljs$lang$ctorStr = "domina.css/t13931";
domina.css.t13931.cljs$lang$ctorPrWriter = (function (this__9456__auto__,writer__9457__auto__,opt__9458__auto__){
return cljs.core._write(writer__9457__auto__,"domina.css/t13931");
});
domina.css.t13931.prototype.domina$DomContent$ = true;
domina.css.t13931.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13926_SHARP_){
return domina.normalize_seq(goog.dom.query(self__.expr,p1__13926_SHARP_));
}),domina.nodes(self__.base));
});
domina.css.t13931.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13927_SHARP_){
return domina.normalize_seq(goog.dom.query(self__.expr,p1__13927_SHARP_));
}),domina.nodes(self__.base))));
});
domina.css.t13931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13933){
var self__ = this;
return self__.meta13932;
});
domina.css.t13931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13933,meta13932__$1){
var self__ = this;
return (new domina.css.t13931(self__.expr,self__.base,self__.sel,meta13932__$1));
});
domina.css.__GT_t13931 = (function __GT_t13931(expr__$1,base__$1,sel__$1,meta13932){
return (new domina.css.t13931(expr__$1,base__$1,sel__$1,meta13932));
});
} else
{}
return (new domina.css.t13931(expr,base,sel,null));
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
