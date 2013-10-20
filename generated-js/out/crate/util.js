goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
/**
* @param {...*} var_args
*/
crate.util.as_str = (function() {
var as_str = null;
var as_str__0 = (function (){
return "";
});
var as_str__1 = (function (x){
if((function (){var or__3943__auto__ = (x instanceof cljs.core.Symbol);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.keyword_QMARK_(x);
}
})())
{return cljs.core.name(x);
} else
{return [cljs.core.str(x)].join('');
}
});
var as_str__2 = (function() { 
var G__156587__delegate = function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__156588 = [cljs.core.str(s),cljs.core.str(as_str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)))].join('');
var G__156589 = cljs.core.next(more);
s = G__156588;
more = G__156589;
continue;
}
} else
{return s;
}
break;
}
}).call(null,as_str.cljs$core$IFn$_invoke$arity$1(x),xs);
};
var G__156587 = function (x,var_args){
var xs = null;
if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__156587__delegate.call(this, x, xs);
};
G__156587.cljs$lang$maxFixedArity = 1;
G__156587.cljs$lang$applyTo = (function (arglist__156590){
var x = cljs.core.first(arglist__156590);
var xs = cljs.core.rest(arglist__156590);
return G__156587__delegate(x, xs);
});
G__156587.cljs$core$IFn$_invoke$arity$variadic = G__156587__delegate;
return G__156587;
})()
;
as_str = function(x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return as_str__0.call(this);
case 1:
return as_str__1.call(this,x);
default:
return as_str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_str.cljs$lang$maxFixedArity = 1;
as_str.cljs$lang$applyTo = as_str__2.cljs$lang$applyTo;
as_str.cljs$core$IFn$_invoke$arity$0 = as_str__0;
as_str.cljs$core$IFn$_invoke$arity$1 = as_str__1;
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__2.cljs$core$IFn$_invoke$arity$variadic;
return as_str;
})()
;
/**
* Change special characters into HTML character entities.
*/
crate.util.escape_html = (function escape_html(text){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
* Prepends the base-url to the supplied URI.
*/
crate.util.to_uri = (function to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches(/^\w+:.*/,uri)))
{return uri;
} else
{return [cljs.core.str(crate.util._STAR_base_url_STAR_),cljs.core.str(uri)].join('');
}
});
crate.util.url_encode_component = (function url_encode_component(s){
return encodeURIComponent(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(s));
});
/**
* Turn a map of parameters into a urlencoded string.
*/
crate.util.url_encode = (function url_encode(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__9895__auto__ = (function iter__156599(s__156600){
return (new cljs.core.LazySeq(null,false,(function (){
var s__156600__$1 = s__156600;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__156600__$1);
if(temp__4092__auto__)
{var s__156600__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s__156600__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__156600__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__156602 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__156601 = 0;
while(true){
if((i__156601 < size__9894__auto__))
{var vec__156605 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__156601);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156605,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156605,1,null);
cljs.core.chunk_append(b__156602,[cljs.core.str(crate.util.url_encode_component(k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component(v))].join(''));
{
var G__156607 = (i__156601 + 1);
i__156601 = G__156607;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__156602),iter__156599(cljs.core.chunk_rest(s__156600__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__156602),null);
}
} else
{var vec__156606 = cljs.core.first(s__156600__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156606,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156606,1,null);
return cljs.core.cons([cljs.core.str(crate.util.url_encode_component(k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component(v))].join(''),iter__156599(cljs.core.rest(s__156600__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9895__auto__(params);
})());
});
/**
* Creates a URL string from a variable list of arguments and an optional
* parameter map as the last argument. For example:
* (url "/group/" 4 "/products" {:page 9})
* => "/group/4/products?page=9"
* @param {...*} var_args
*/
crate.util.url = (function() { 
var url__delegate = function (args){
var params = cljs.core.last(args);
var args__$1 = cljs.core.butlast(args);
return [cljs.core.str(crate.util.to_uri([cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args__$1)),cljs.core.str(((cljs.core.map_QMARK_(params))?[cljs.core.str("?"),cljs.core.str(crate.util.url_encode(params))].join(''):params))].join('')))].join('');
};
var url = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return url__delegate.call(this, args);
};
url.cljs$lang$maxFixedArity = 0;
url.cljs$lang$applyTo = (function (arglist__156608){
var args = cljs.core.seq(arglist__156608);
return url__delegate(args);
});
url.cljs$core$IFn$_invoke$arity$variadic = url__delegate;
return url;
})()
;
