goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom');
crate.compiler.xmlns = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:xhtml","http://www.w3.org/1999/xhtml","\uFDD0:svg","http://www.w3.org/2000/svg"], true);
crate.compiler.group_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.compiler.bindings,cljs.core.conj,cljs.core.PersistentVector.fromArray([tag,b], true));
});
crate.compiler.as_content = (function as_content(parent,content){
var seq__156329 = cljs.core.seq(content);
var chunk__156330 = null;
var count__156331 = 0;
var i__156332 = 0;
while(true){
if((i__156332 < count__156331))
{var c = chunk__156330.cljs$core$IIndexed$_nth$arity$2(chunk__156330,i__156332);
var child_156333 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_156333))
{goog.dom.appendChild(parent,child_156333);
} else
{}
{
var G__156334 = seq__156329;
var G__156335 = chunk__156330;
var G__156336 = count__156331;
var G__156337 = (i__156332 + 1);
seq__156329 = G__156334;
chunk__156330 = G__156335;
count__156331 = G__156336;
i__156332 = G__156337;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__156329);
if(temp__4092__auto__)
{var seq__156329__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__156329__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__156329__$1);
{
var G__156338 = cljs.core.chunk_rest(seq__156329__$1);
var G__156339 = c__9926__auto__;
var G__156340 = cljs.core.count(c__9926__auto__);
var G__156341 = 0;
seq__156329 = G__156338;
chunk__156330 = G__156339;
count__156331 = G__156340;
i__156332 = G__156341;
continue;
}
} else
{var c = cljs.core.first(seq__156329__$1);
var child_156342 = (((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_(c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?as_content(parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:coll",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_(c))?(function (){crate.compiler.capture_binding("\uFDD0:text",c);
return as_content(parent,cljs.core.PersistentVector.fromArray([crate.binding.value(c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0:else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child_156342))
{goog.dom.appendChild(parent,child_156342);
} else
{}
{
var G__156343 = cljs.core.next(seq__156329__$1);
var G__156344 = null;
var G__156345 = 0;
var G__156346 = 0;
seq__156329 = G__156343;
chunk__156330 = G__156344;
count__156331 = G__156345;
i__156332 = G__156346;
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
crate.compiler.dom_binding = (function (){var method_table__9983__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9984__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9985__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9986__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){
return type;
}),"\uFDD0:default",hierarchy__9987__auto__,method_table__9983__auto__,prefer_table__9984__auto__,method_cache__9985__auto__,cached_hierarchy__9986__auto__));
})();
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:text",(function (_,b,elem){
return crate.binding.on_change(b,(function (v){
goog.dom.removeChildren(elem);
return crate.compiler.as_content(elem,cljs.core.PersistentVector.fromArray([v], true));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:attr",(function (_,p__156347,elem){
var vec__156348 = p__156347;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156348,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156348,1,null);
return crate.binding.on_change(b,(function (v){
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:style",(function (_,p__156349,elem){
var vec__156350 = p__156349;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156350,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156350,1,null);
return crate.binding.on_change(b,(function (v){
if(cljs.core.truth_(k))
{return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_style.call(null,elem,k,v));
} else
{return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v) : crate.compiler.dom_style.call(null,elem,v));
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__4090__auto__ = crate.binding.opt(bc,"\uFDD0:add");
if(cljs.core.truth_(temp__4090__auto__))
{var adder = temp__4090__auto__;
return (adder.cljs$core$IFn$_invoke$arity$3 ? adder.cljs$core$IFn$_invoke$arity$3(parent,elem,v) : adder.call(null,parent,elem,v));
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__4090__auto__ = crate.binding.opt(bc,"\uFDD0:remove");
if(cljs.core.truth_(temp__4090__auto__))
{var remover = temp__4090__auto__;
return (remover.cljs$core$IFn$_invoke$arity$1 ? remover.cljs$core$IFn$_invoke$arity$1(elem) : remover.call(null,elem));
} else
{return goog.dom.removeNode(elem);
}
});
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(crate.compiler.dom_binding,"\uFDD0:coll",(function (_,bc,parent){
return crate.binding.on_change(bc,(function (type,elem,v){
var pred__156351 = cljs.core._EQ_;
var expr__156352 = type;
if((pred__156351.cljs$core$IFn$_invoke$arity$2 ? pred__156351.cljs$core$IFn$_invoke$arity$2("\uFDD0:add",expr__156352) : pred__156351.call(null,"\uFDD0:add",expr__156352)))
{return crate.compiler.dom_add(bc,parent,elem,v);
} else
{if((pred__156351.cljs$core$IFn$_invoke$arity$2 ? pred__156351.cljs$core$IFn$_invoke$arity$2("\uFDD0:remove",expr__156352) : pred__156351.call(null,"\uFDD0:remove",expr__156352)))
{return crate.compiler.dom_remove(bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__156352)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__156360 = cljs.core.seq(bs);
var chunk__156361 = null;
var count__156362 = 0;
var i__156363 = 0;
while(true){
if((i__156363 < count__156362))
{var vec__156364 = chunk__156361.cljs$core$IIndexed$_nth$arity$2(chunk__156361,i__156363);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156364,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156364,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__156366 = seq__156360;
var G__156367 = chunk__156361;
var G__156368 = count__156362;
var G__156369 = (i__156363 + 1);
seq__156360 = G__156366;
chunk__156361 = G__156367;
count__156362 = G__156368;
i__156363 = G__156369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__156360);
if(temp__4092__auto__)
{var seq__156360__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__156360__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__156360__$1);
{
var G__156370 = cljs.core.chunk_rest(seq__156360__$1);
var G__156371 = c__9926__auto__;
var G__156372 = cljs.core.count(c__9926__auto__);
var G__156373 = 0;
seq__156360 = G__156370;
chunk__156361 = G__156371;
count__156362 = G__156372;
i__156363 = G__156373;
continue;
}
} else
{var vec__156365 = cljs.core.first(seq__156360__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156365,0,null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156365,1,null);
(crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem) : crate.compiler.dom_binding.call(null,type,b,elem));
{
var G__156374 = cljs.core.next(seq__156360__$1);
var G__156375 = null;
var G__156376 = 0;
var G__156377 = 0;
seq__156360 = G__156374;
chunk__156361 = G__156375;
count__156362 = G__156376;
i__156363 = G__156377;
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
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){
if(cljs.core.string_QMARK_(v))
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_(v))
{var seq__156384_156390 = cljs.core.seq(v);
var chunk__156385_156391 = null;
var count__156386_156392 = 0;
var i__156387_156393 = 0;
while(true){
if((i__156387_156393 < count__156386_156392))
{var vec__156388_156394 = chunk__156385_156391.cljs$core$IIndexed$_nth$arity$2(chunk__156385_156391,i__156387_156393);
var k_156395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156388_156394,0,null);
var v_156396__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156388_156394,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_156395,v_156396__$1);
{
var G__156397 = seq__156384_156390;
var G__156398 = chunk__156385_156391;
var G__156399 = count__156386_156392;
var G__156400 = (i__156387_156393 + 1);
seq__156384_156390 = G__156397;
chunk__156385_156391 = G__156398;
count__156386_156392 = G__156399;
i__156387_156393 = G__156400;
continue;
}
} else
{var temp__4092__auto___156401 = cljs.core.seq(seq__156384_156390);
if(temp__4092__auto___156401)
{var seq__156384_156402__$1 = temp__4092__auto___156401;
if(cljs.core.chunked_seq_QMARK_(seq__156384_156402__$1))
{var c__9926__auto___156403 = cljs.core.chunk_first(seq__156384_156402__$1);
{
var G__156404 = cljs.core.chunk_rest(seq__156384_156402__$1);
var G__156405 = c__9926__auto___156403;
var G__156406 = cljs.core.count(c__9926__auto___156403);
var G__156407 = 0;
seq__156384_156390 = G__156404;
chunk__156385_156391 = G__156405;
count__156386_156392 = G__156406;
i__156387_156393 = G__156407;
continue;
}
} else
{var vec__156389_156408 = cljs.core.first(seq__156384_156402__$1);
var k_156409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156389_156408,0,null);
var v_156410__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156389_156408,1,null);
dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_156409,v_156410__$1);
{
var G__156411 = cljs.core.next(seq__156384_156402__$1);
var G__156412 = null;
var G__156413 = 0;
var G__156414 = 0;
seq__156384_156390 = G__156411;
chunk__156385_156391 = G__156412;
count__156386_156392 = G__156413;
i__156387_156393 = G__156414;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core.truth_(crate.binding.binding_QMARK_(v)))
{crate.compiler.capture_binding("\uFDD0:style",cljs.core.PersistentVector.fromArray([null,v], true));
dom_style.cljs$core$IFn$_invoke$arity$2(elem,crate.binding.value(v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding("\uFDD0:style",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value(v);
})():v);
return goog.style.setStyle(elem,cljs.core.name(k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_(attrs)))
{return elem.getAttribute(cljs.core.name(attrs));
} else
{var seq__156421_156427 = cljs.core.seq(attrs);
var chunk__156422_156428 = null;
var count__156423_156429 = 0;
var i__156424_156430 = 0;
while(true){
if((i__156424_156430 < count__156423_156429))
{var vec__156425_156431 = chunk__156422_156428.cljs$core$IIndexed$_nth$arity$2(chunk__156422_156428,i__156424_156430);
var k_156432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156425_156431,0,null);
var v_156433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156425_156431,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_156432,v_156433);
{
var G__156434 = seq__156421_156427;
var G__156435 = chunk__156422_156428;
var G__156436 = count__156423_156429;
var G__156437 = (i__156424_156430 + 1);
seq__156421_156427 = G__156434;
chunk__156422_156428 = G__156435;
count__156423_156429 = G__156436;
i__156424_156430 = G__156437;
continue;
}
} else
{var temp__4092__auto___156438 = cljs.core.seq(seq__156421_156427);
if(temp__4092__auto___156438)
{var seq__156421_156439__$1 = temp__4092__auto___156438;
if(cljs.core.chunked_seq_QMARK_(seq__156421_156439__$1))
{var c__9926__auto___156440 = cljs.core.chunk_first(seq__156421_156439__$1);
{
var G__156441 = cljs.core.chunk_rest(seq__156421_156439__$1);
var G__156442 = c__9926__auto___156440;
var G__156443 = cljs.core.count(c__9926__auto___156440);
var G__156444 = 0;
seq__156421_156427 = G__156441;
chunk__156422_156428 = G__156442;
count__156423_156429 = G__156443;
i__156424_156430 = G__156444;
continue;
}
} else
{var vec__156426_156445 = cljs.core.first(seq__156421_156439__$1);
var k_156446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156426_156445,0,null);
var v_156447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156426_156445,1,null);
dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_156446,v_156447);
{
var G__156448 = cljs.core.next(seq__156421_156439__$1);
var G__156449 = null;
var G__156450 = 0;
var G__156451 = 0;
seq__156421_156427 = G__156448;
chunk__156422_156428 = G__156449;
count__156423_156429 = G__156450;
i__156424_156430 = G__156451;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"\uFDD0:style"))
{crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v);
} else
{var v_156452__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_(v))?(function (){crate.compiler.capture_binding("\uFDD0:attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value(v);
})():v);
elem.setAttribute(cljs.core.name(k),v_156452__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__156455){
var vec__156456 = p__156455;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156456,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156456,1,null);
if(v === true)
{return cljs.core.PersistentVector.fromArray([n,cljs.core.name(n)], true);
} else
{return cljs.core.PersistentVector.fromArray([n,v], true);
}
}),cljs.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__156458){
var vec__156463 = p__156458;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156463,0,null);
var content = cljs.core.nthnext(vec__156463,1);
if(!((function (){var or__3943__auto__ = cljs.core.keyword_QMARK_(tag);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (tag instanceof cljs.core.Symbol);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljs.core.string_QMARK_(tag);
}
}
})()))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__156464 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156464,0,null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156464,1,null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156464,2,null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156464,3,null);
var vec__156465 = (function (){var vec__156466 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156466,0,null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156466,1,null);
var ns_xmlns = (crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp)) : crate.compiler.xmlns.call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp)));
if(cljs.core.truth_(t))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3943__auto__ = ns_xmlns;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return nsp;
}
})(),t], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0:xhtml")).call(null,crate.compiler.xmlns),nsp], true);
}
})();
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156465,0,null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156465,1,null);
var tag_attrs = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (vec__156464,_,tag__$1,id,class$,vec__156465,nsp,tag__$2){
return (function (p1__156457_SHARP_){
return !((cljs.core.second(p1__156457_SHARP_) == null));
});})(vec__156464,_,tag__$1,id,class$,vec__156465,nsp,tag__$2))
,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",(function (){var or__3943__auto__ = id;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return null;
}
})(),"\uFDD0:class",(cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null)], true)));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs))
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,crate.compiler.normalize_map_attrs(map_attrs)], 0)),cljs.core.next(content)], true);
} else
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,tag_attrs,content], true);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(attrs))
{crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
return cljs.core.rest(content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){
var bindings156470 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var vec__156472 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156472,0,null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156472,1,null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156472,2,null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156472,3,null);
var elem = (crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.create_elem.cljs$core$IFn$_invoke$arity$2(nsp,tag) : crate.compiler.create_elem.call(null,nsp,tag));
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);
crate.compiler.as_content(elem,content);
crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings156470;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__156475__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__156474 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__156474,0,null);
var body = cljs.core.nthnext(vec__156474,1);
if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__156475 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156475__delegate.call(this, args);
};
G__156475.cljs$lang$maxFixedArity = 0;
G__156475.cljs$lang$applyTo = (function (arglist__156476){
var args = cljs.core.seq(arglist__156476);
return G__156475__delegate(args);
});
G__156475.cljs$core$IFn$_invoke$arity$variadic = G__156475__delegate;
return G__156475;
})()
;
});
