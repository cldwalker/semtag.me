goog.provide('crate.core');
goog.require('cljs.core');
goog.require('crate.util');
goog.require('crate.compiler');
crate.core.group_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(crate.compiler.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second(res)))
{return res;
} else
{return cljs.core.first(res);
}
};
var html = function (var_args){
var tags = null;
if (arguments.length > 0) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__17907){
var tags = cljs.core.seq(arglist__17907);
return html__delegate(tags);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* Alias for crate.util/escape-html
*/
crate.core.h = crate.util.escape_html;
