goog.provide('io.pedestal.app.render.push.templates');
goog.require('cljs.core');
goog.require('domina');
goog.require('io.pedestal.app.render.push');
io.pedestal.app.render.push.templates.sibling = (function sibling(path,segment){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(path)),segment);
});
io.pedestal.app.render.push.templates.parent = (function parent(path){
return cljs.core.vec(cljs.core.butlast(path));
});
io.pedestal.app.render.push.templates.update_template = (function update_template(t,m){
var seq__157419 = cljs.core.seq(t);
var chunk__157424 = null;
var count__157425 = 0;
var i__157426 = 0;
while(true){
if((i__157426 < count__157425))
{var vec__157431 = chunk__157424.cljs$core$IIndexed$_nth$arity$2(chunk__157424,i__157426);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157431,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157431,1,null);
var seq__157427_157441 = cljs.core.seq(v);
var chunk__157428_157442 = null;
var count__157429_157443 = 0;
var i__157430_157444 = 0;
while(true){
if((i__157430_157444 < count__157429_157443))
{var map__157432_157445 = chunk__157428_157442.cljs$core$IIndexed$_nth$arity$2(chunk__157428_157442,i__157430_157444);
var map__157432_157446__$1 = ((cljs.core.seq_QMARK_(map__157432_157445))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__157432_157445):map__157432_157445);
var attr_name_157447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157432_157446__$1,"\uFDD0:attr-name");
var type_157448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157432_157446__$1,"\uFDD0:type");
var id_157449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157432_157446__$1,"\uFDD0:id");
var G__157433_157450 = type_157448;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__157433_157450))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_157449),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__157433_157450))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_157449),attr_name_157447);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_157449),cljs.core.PersistentArrayMap.fromArray([attr_name_157447,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__157451 = seq__157427_157441;
var G__157452 = chunk__157428_157442;
var G__157453 = count__157429_157443;
var G__157454 = (i__157430_157444 + 1);
seq__157427_157441 = G__157451;
chunk__157428_157442 = G__157452;
count__157429_157443 = G__157453;
i__157430_157444 = G__157454;
continue;
}
} else
{var temp__4092__auto___157455 = cljs.core.seq(seq__157427_157441);
if(temp__4092__auto___157455)
{var seq__157427_157456__$1 = temp__4092__auto___157455;
if(cljs.core.chunked_seq_QMARK_(seq__157427_157456__$1))
{var c__9926__auto___157457 = cljs.core.chunk_first(seq__157427_157456__$1);
{
var G__157458 = cljs.core.chunk_rest(seq__157427_157456__$1);
var G__157459 = c__9926__auto___157457;
var G__157460 = cljs.core.count(c__9926__auto___157457);
var G__157461 = 0;
seq__157427_157441 = G__157458;
chunk__157428_157442 = G__157459;
count__157429_157443 = G__157460;
i__157430_157444 = G__157461;
continue;
}
} else
{var map__157434_157462 = cljs.core.first(seq__157427_157456__$1);
var map__157434_157463__$1 = ((cljs.core.seq_QMARK_(map__157434_157462))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__157434_157462):map__157434_157462);
var attr_name_157464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157434_157463__$1,"\uFDD0:attr-name");
var type_157465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157434_157463__$1,"\uFDD0:type");
var id_157466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157434_157463__$1,"\uFDD0:id");
var G__157435_157467 = type_157465;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__157435_157467))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_157466),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__157435_157467))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_157466),attr_name_157464);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_157466),cljs.core.PersistentArrayMap.fromArray([attr_name_157464,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__157468 = cljs.core.next(seq__157427_157456__$1);
var G__157469 = null;
var G__157470 = 0;
var G__157471 = 0;
seq__157427_157441 = G__157468;
chunk__157428_157442 = G__157469;
count__157429_157443 = G__157470;
i__157430_157444 = G__157471;
continue;
}
}
} else
{}
}
break;
}
{
var G__157472 = seq__157419;
var G__157473 = chunk__157424;
var G__157474 = count__157425;
var G__157475 = (i__157426 + 1);
seq__157419 = G__157472;
chunk__157424 = G__157473;
count__157425 = G__157474;
i__157426 = G__157475;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__157419);
if(temp__4092__auto__)
{var seq__157419__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__157419__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__157419__$1);
{
var G__157476 = cljs.core.chunk_rest(seq__157419__$1);
var G__157477 = c__9926__auto__;
var G__157478 = cljs.core.count(c__9926__auto__);
var G__157479 = 0;
seq__157419 = G__157476;
chunk__157424 = G__157477;
count__157425 = G__157478;
i__157426 = G__157479;
continue;
}
} else
{var vec__157436 = cljs.core.first(seq__157419__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157436,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157436,1,null);
var seq__157420_157480 = cljs.core.seq(v);
var chunk__157421_157481 = null;
var count__157422_157482 = 0;
var i__157423_157483 = 0;
while(true){
if((i__157423_157483 < count__157422_157482))
{var map__157437_157484 = chunk__157421_157481.cljs$core$IIndexed$_nth$arity$2(chunk__157421_157481,i__157423_157483);
var map__157437_157485__$1 = ((cljs.core.seq_QMARK_(map__157437_157484))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__157437_157484):map__157437_157484);
var attr_name_157486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157437_157485__$1,"\uFDD0:attr-name");
var type_157487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157437_157485__$1,"\uFDD0:type");
var id_157488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157437_157485__$1,"\uFDD0:id");
var G__157438_157489 = type_157487;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__157438_157489))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_157488),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__157438_157489))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_157488),attr_name_157486);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_157488),cljs.core.PersistentArrayMap.fromArray([attr_name_157486,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__157490 = seq__157420_157480;
var G__157491 = chunk__157421_157481;
var G__157492 = count__157422_157482;
var G__157493 = (i__157423_157483 + 1);
seq__157420_157480 = G__157490;
chunk__157421_157481 = G__157491;
count__157422_157482 = G__157492;
i__157423_157483 = G__157493;
continue;
}
} else
{var temp__4092__auto___157494__$1 = cljs.core.seq(seq__157420_157480);
if(temp__4092__auto___157494__$1)
{var seq__157420_157495__$1 = temp__4092__auto___157494__$1;
if(cljs.core.chunked_seq_QMARK_(seq__157420_157495__$1))
{var c__9926__auto___157496 = cljs.core.chunk_first(seq__157420_157495__$1);
{
var G__157497 = cljs.core.chunk_rest(seq__157420_157495__$1);
var G__157498 = c__9926__auto___157496;
var G__157499 = cljs.core.count(c__9926__auto___157496);
var G__157500 = 0;
seq__157420_157480 = G__157497;
chunk__157421_157481 = G__157498;
count__157422_157482 = G__157499;
i__157423_157483 = G__157500;
continue;
}
} else
{var map__157439_157501 = cljs.core.first(seq__157420_157495__$1);
var map__157439_157502__$1 = ((cljs.core.seq_QMARK_(map__157439_157501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__157439_157501):map__157439_157501);
var attr_name_157503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157439_157502__$1,"\uFDD0:attr-name");
var type_157504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157439_157502__$1,"\uFDD0:type");
var id_157505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__157439_157502__$1,"\uFDD0:id");
var G__157440_157506 = type_157504;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__157440_157506))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_157505),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__157440_157506))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_157505),attr_name_157503);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_157505),cljs.core.PersistentArrayMap.fromArray([attr_name_157503,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__157507 = cljs.core.next(seq__157420_157495__$1);
var G__157508 = null;
var G__157509 = 0;
var G__157510 = 0;
seq__157420_157480 = G__157507;
chunk__157421_157481 = G__157508;
count__157422_157482 = G__157509;
i__157423_157483 = G__157510;
continue;
}
}
} else
{}
}
break;
}
{
var G__157511 = cljs.core.next(seq__157419__$1);
var G__157512 = null;
var G__157513 = 0;
var G__157514 = 0;
seq__157419 = G__157511;
chunk__157424 = G__157512;
count__157425 = G__157513;
i__157426 = G__157514;
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
io.pedestal.app.render.push.templates.add_in_template = (function add_in_template(f,t,m){
var seq__157529 = cljs.core.seq(m);
var chunk__157530 = null;
var count__157531 = 0;
var i__157532 = 0;
while(true){
if((i__157532 < count__157531))
{var vec__157533 = chunk__157530.cljs$core$IIndexed$_nth$arity$2(chunk__157530,i__157532);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157533,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157533,1,null);
if(cljs.core.every_QMARK_(((function (seq__157529,chunk__157530,count__157531,i__157532,vec__157533,k,v){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__157529,chunk__157530,count__157531,i__157532,vec__157533,k,v))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__157534_157543 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__157535_157544 = null;
var count__157536_157545 = 0;
var i__157537_157546 = 0;
while(true){
if((i__157537_157546 < count__157536_157545))
{var info_157547 = chunk__157535_157544.cljs$core$IIndexed$_nth$arity$2(chunk__157535_157544,i__157537_157546);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_157547)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_157547)),v));
{
var G__157548 = seq__157534_157543;
var G__157549 = chunk__157535_157544;
var G__157550 = count__157536_157545;
var G__157551 = (i__157537_157546 + 1);
seq__157534_157543 = G__157548;
chunk__157535_157544 = G__157549;
count__157536_157545 = G__157550;
i__157537_157546 = G__157551;
continue;
}
} else
{var temp__4092__auto___157552 = cljs.core.seq(seq__157534_157543);
if(temp__4092__auto___157552)
{var seq__157534_157553__$1 = temp__4092__auto___157552;
if(cljs.core.chunked_seq_QMARK_(seq__157534_157553__$1))
{var c__9926__auto___157554 = cljs.core.chunk_first(seq__157534_157553__$1);
{
var G__157555 = cljs.core.chunk_rest(seq__157534_157553__$1);
var G__157556 = c__9926__auto___157554;
var G__157557 = cljs.core.count(c__9926__auto___157554);
var G__157558 = 0;
seq__157534_157543 = G__157555;
chunk__157535_157544 = G__157556;
count__157536_157545 = G__157557;
i__157537_157546 = G__157558;
continue;
}
} else
{var info_157559 = cljs.core.first(seq__157534_157553__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_157559)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_157559)),v));
{
var G__157560 = cljs.core.next(seq__157534_157553__$1);
var G__157561 = null;
var G__157562 = 0;
var G__157563 = 0;
seq__157534_157543 = G__157560;
chunk__157535_157544 = G__157561;
count__157536_157545 = G__157562;
i__157537_157546 = G__157563;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__157564 = seq__157529;
var G__157565 = chunk__157530;
var G__157566 = count__157531;
var G__157567 = (i__157532 + 1);
seq__157529 = G__157564;
chunk__157530 = G__157565;
count__157531 = G__157566;
i__157532 = G__157567;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__157529);
if(temp__4092__auto__)
{var seq__157529__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__157529__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__157529__$1);
{
var G__157568 = cljs.core.chunk_rest(seq__157529__$1);
var G__157569 = c__9926__auto__;
var G__157570 = cljs.core.count(c__9926__auto__);
var G__157571 = 0;
seq__157529 = G__157568;
chunk__157530 = G__157569;
count__157531 = G__157570;
i__157532 = G__157571;
continue;
}
} else
{var vec__157538 = cljs.core.first(seq__157529__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157538,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157538,1,null);
if(cljs.core.every_QMARK_(((function (seq__157529,chunk__157530,count__157531,i__157532,vec__157538,k,v,seq__157529__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__157529,chunk__157530,count__157531,i__157532,vec__157538,k,v,seq__157529__$1,temp__4092__auto__))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__157539_157572 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__157540_157573 = null;
var count__157541_157574 = 0;
var i__157542_157575 = 0;
while(true){
if((i__157542_157575 < count__157541_157574))
{var info_157576 = chunk__157540_157573.cljs$core$IIndexed$_nth$arity$2(chunk__157540_157573,i__157542_157575);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_157576)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_157576)),v));
{
var G__157577 = seq__157539_157572;
var G__157578 = chunk__157540_157573;
var G__157579 = count__157541_157574;
var G__157580 = (i__157542_157575 + 1);
seq__157539_157572 = G__157577;
chunk__157540_157573 = G__157578;
count__157541_157574 = G__157579;
i__157542_157575 = G__157580;
continue;
}
} else
{var temp__4092__auto___157581__$1 = cljs.core.seq(seq__157539_157572);
if(temp__4092__auto___157581__$1)
{var seq__157539_157582__$1 = temp__4092__auto___157581__$1;
if(cljs.core.chunked_seq_QMARK_(seq__157539_157582__$1))
{var c__9926__auto___157583 = cljs.core.chunk_first(seq__157539_157582__$1);
{
var G__157584 = cljs.core.chunk_rest(seq__157539_157582__$1);
var G__157585 = c__9926__auto___157583;
var G__157586 = cljs.core.count(c__9926__auto___157583);
var G__157587 = 0;
seq__157539_157572 = G__157584;
chunk__157540_157573 = G__157585;
count__157541_157574 = G__157586;
i__157542_157575 = G__157587;
continue;
}
} else
{var info_157588 = cljs.core.first(seq__157539_157582__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_157588)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_157588)),v));
{
var G__157589 = cljs.core.next(seq__157539_157582__$1);
var G__157590 = null;
var G__157591 = 0;
var G__157592 = 0;
seq__157539_157572 = G__157589;
chunk__157540_157573 = G__157590;
count__157541_157574 = G__157591;
i__157542_157575 = G__157592;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__157593 = cljs.core.next(seq__157529__$1);
var G__157594 = null;
var G__157595 = 0;
var G__157596 = 0;
seq__157529 = G__157593;
chunk__157530 = G__157594;
count__157531 = G__157595;
i__157532 = G__157596;
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
io.pedestal.app.render.push.templates.update_t = (function update_t(r,path,data){
var template = io.pedestal.app.render.push.get_data(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.update_template(template,data);
});
io.pedestal.app.render.push.templates.prepend_t = (function prepend_t(r,path,data){
var template = io.pedestal.app.render.push.get_data(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template(domina.prepend_BANG_,template,data);
});
io.pedestal.app.render.push.templates.insert_t = (function insert_t(r,path,data,idx){
var template = io.pedestal.app.render.push.get_data(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template((function (p1__157597_SHARP_,p2__157598_SHARP_){
return domina.insert_BANG_(p1__157597_SHARP_,p2__157598_SHARP_,idx);
}),template,data);
});
io.pedestal.app.render.push.templates.append_t = (function append_t(r,path,data){
var template = io.pedestal.app.render.push.get_data(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template(domina.append_BANG_,template,data);
});
io.pedestal.app.render.push.templates.update_parent_t = (function update_parent_t(r,path,data){
var template = io.pedestal.app.render.push.get_data(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.render.push.templates.parent(path),"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.update_template(template,data);
});
io.pedestal.app.render.push.templates.add_template = (function add_template(r,path,make_template){
var vec__157600 = (make_template.cljs$core$IFn$_invoke$arity$0 ? make_template.cljs$core$IFn$_invoke$arity$0() : make_template.call(null));
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157600,0,null);
var html = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__157600,1,null);
io.pedestal.app.render.push.set_data_BANG_(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
