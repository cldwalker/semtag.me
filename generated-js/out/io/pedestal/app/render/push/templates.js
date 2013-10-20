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
var seq__18384 = cljs.core.seq(t);
var chunk__18389 = null;
var count__18390 = 0;
var i__18391 = 0;
while(true){
if((i__18391 < count__18390))
{var vec__18396 = chunk__18389.cljs$core$IIndexed$_nth$arity$2(chunk__18389,i__18391);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18396,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18396,1,null);
var seq__18392_18406 = cljs.core.seq(v);
var chunk__18393_18407 = null;
var count__18394_18408 = 0;
var i__18395_18409 = 0;
while(true){
if((i__18395_18409 < count__18394_18408))
{var map__18397_18410 = chunk__18393_18407.cljs$core$IIndexed$_nth$arity$2(chunk__18393_18407,i__18395_18409);
var map__18397_18411__$1 = ((cljs.core.seq_QMARK_(map__18397_18410))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18397_18410):map__18397_18410);
var attr_name_18412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18397_18411__$1,"\uFDD0:attr-name");
var type_18413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18397_18411__$1,"\uFDD0:type");
var id_18414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18397_18411__$1,"\uFDD0:id");
var G__18398_18415 = type_18413;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__18398_18415))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_18414),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__18398_18415))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_18414),attr_name_18412);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_18414),cljs.core.PersistentArrayMap.fromArray([attr_name_18412,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__18416 = seq__18392_18406;
var G__18417 = chunk__18393_18407;
var G__18418 = count__18394_18408;
var G__18419 = (i__18395_18409 + 1);
seq__18392_18406 = G__18416;
chunk__18393_18407 = G__18417;
count__18394_18408 = G__18418;
i__18395_18409 = G__18419;
continue;
}
} else
{var temp__4092__auto___18420 = cljs.core.seq(seq__18392_18406);
if(temp__4092__auto___18420)
{var seq__18392_18421__$1 = temp__4092__auto___18420;
if(cljs.core.chunked_seq_QMARK_(seq__18392_18421__$1))
{var c__9926__auto___18422 = cljs.core.chunk_first(seq__18392_18421__$1);
{
var G__18423 = cljs.core.chunk_rest(seq__18392_18421__$1);
var G__18424 = c__9926__auto___18422;
var G__18425 = cljs.core.count(c__9926__auto___18422);
var G__18426 = 0;
seq__18392_18406 = G__18423;
chunk__18393_18407 = G__18424;
count__18394_18408 = G__18425;
i__18395_18409 = G__18426;
continue;
}
} else
{var map__18399_18427 = cljs.core.first(seq__18392_18421__$1);
var map__18399_18428__$1 = ((cljs.core.seq_QMARK_(map__18399_18427))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18399_18427):map__18399_18427);
var attr_name_18429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18399_18428__$1,"\uFDD0:attr-name");
var type_18430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18399_18428__$1,"\uFDD0:type");
var id_18431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18399_18428__$1,"\uFDD0:id");
var G__18400_18432 = type_18430;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__18400_18432))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_18431),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__18400_18432))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_18431),attr_name_18429);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_18431),cljs.core.PersistentArrayMap.fromArray([attr_name_18429,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__18433 = cljs.core.next(seq__18392_18421__$1);
var G__18434 = null;
var G__18435 = 0;
var G__18436 = 0;
seq__18392_18406 = G__18433;
chunk__18393_18407 = G__18434;
count__18394_18408 = G__18435;
i__18395_18409 = G__18436;
continue;
}
}
} else
{}
}
break;
}
{
var G__18437 = seq__18384;
var G__18438 = chunk__18389;
var G__18439 = count__18390;
var G__18440 = (i__18391 + 1);
seq__18384 = G__18437;
chunk__18389 = G__18438;
count__18390 = G__18439;
i__18391 = G__18440;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__18384);
if(temp__4092__auto__)
{var seq__18384__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18384__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__18384__$1);
{
var G__18441 = cljs.core.chunk_rest(seq__18384__$1);
var G__18442 = c__9926__auto__;
var G__18443 = cljs.core.count(c__9926__auto__);
var G__18444 = 0;
seq__18384 = G__18441;
chunk__18389 = G__18442;
count__18390 = G__18443;
i__18391 = G__18444;
continue;
}
} else
{var vec__18401 = cljs.core.first(seq__18384__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18401,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18401,1,null);
var seq__18385_18445 = cljs.core.seq(v);
var chunk__18386_18446 = null;
var count__18387_18447 = 0;
var i__18388_18448 = 0;
while(true){
if((i__18388_18448 < count__18387_18447))
{var map__18402_18449 = chunk__18386_18446.cljs$core$IIndexed$_nth$arity$2(chunk__18386_18446,i__18388_18448);
var map__18402_18450__$1 = ((cljs.core.seq_QMARK_(map__18402_18449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18402_18449):map__18402_18449);
var attr_name_18451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402_18450__$1,"\uFDD0:attr-name");
var type_18452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402_18450__$1,"\uFDD0:type");
var id_18453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402_18450__$1,"\uFDD0:id");
var G__18403_18454 = type_18452;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__18403_18454))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_18453),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__18403_18454))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_18453),attr_name_18451);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_18453),cljs.core.PersistentArrayMap.fromArray([attr_name_18451,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__18455 = seq__18385_18445;
var G__18456 = chunk__18386_18446;
var G__18457 = count__18387_18447;
var G__18458 = (i__18388_18448 + 1);
seq__18385_18445 = G__18455;
chunk__18386_18446 = G__18456;
count__18387_18447 = G__18457;
i__18388_18448 = G__18458;
continue;
}
} else
{var temp__4092__auto___18459__$1 = cljs.core.seq(seq__18385_18445);
if(temp__4092__auto___18459__$1)
{var seq__18385_18460__$1 = temp__4092__auto___18459__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18385_18460__$1))
{var c__9926__auto___18461 = cljs.core.chunk_first(seq__18385_18460__$1);
{
var G__18462 = cljs.core.chunk_rest(seq__18385_18460__$1);
var G__18463 = c__9926__auto___18461;
var G__18464 = cljs.core.count(c__9926__auto___18461);
var G__18465 = 0;
seq__18385_18445 = G__18462;
chunk__18386_18446 = G__18463;
count__18387_18447 = G__18464;
i__18388_18448 = G__18465;
continue;
}
} else
{var map__18404_18466 = cljs.core.first(seq__18385_18460__$1);
var map__18404_18467__$1 = ((cljs.core.seq_QMARK_(map__18404_18466))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18404_18466):map__18404_18466);
var attr_name_18468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18404_18467__$1,"\uFDD0:attr-name");
var type_18469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18404_18467__$1,"\uFDD0:type");
var id_18470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18404_18467__$1,"\uFDD0:id");
var G__18405_18471 = type_18469;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__18405_18471))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_18470),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__18405_18471))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_18470),attr_name_18468);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_18470),cljs.core.PersistentArrayMap.fromArray([attr_name_18468,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__18472 = cljs.core.next(seq__18385_18460__$1);
var G__18473 = null;
var G__18474 = 0;
var G__18475 = 0;
seq__18385_18445 = G__18472;
chunk__18386_18446 = G__18473;
count__18387_18447 = G__18474;
i__18388_18448 = G__18475;
continue;
}
}
} else
{}
}
break;
}
{
var G__18476 = cljs.core.next(seq__18384__$1);
var G__18477 = null;
var G__18478 = 0;
var G__18479 = 0;
seq__18384 = G__18476;
chunk__18389 = G__18477;
count__18390 = G__18478;
i__18391 = G__18479;
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
var seq__18494 = cljs.core.seq(m);
var chunk__18495 = null;
var count__18496 = 0;
var i__18497 = 0;
while(true){
if((i__18497 < count__18496))
{var vec__18498 = chunk__18495.cljs$core$IIndexed$_nth$arity$2(chunk__18495,i__18497);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498,1,null);
if(cljs.core.every_QMARK_(((function (seq__18494,chunk__18495,count__18496,i__18497,vec__18498,k,v){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__18494,chunk__18495,count__18496,i__18497,vec__18498,k,v))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__18499_18508 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__18500_18509 = null;
var count__18501_18510 = 0;
var i__18502_18511 = 0;
while(true){
if((i__18502_18511 < count__18501_18510))
{var info_18512 = chunk__18500_18509.cljs$core$IIndexed$_nth$arity$2(chunk__18500_18509,i__18502_18511);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_18512)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_18512)),v));
{
var G__18513 = seq__18499_18508;
var G__18514 = chunk__18500_18509;
var G__18515 = count__18501_18510;
var G__18516 = (i__18502_18511 + 1);
seq__18499_18508 = G__18513;
chunk__18500_18509 = G__18514;
count__18501_18510 = G__18515;
i__18502_18511 = G__18516;
continue;
}
} else
{var temp__4092__auto___18517 = cljs.core.seq(seq__18499_18508);
if(temp__4092__auto___18517)
{var seq__18499_18518__$1 = temp__4092__auto___18517;
if(cljs.core.chunked_seq_QMARK_(seq__18499_18518__$1))
{var c__9926__auto___18519 = cljs.core.chunk_first(seq__18499_18518__$1);
{
var G__18520 = cljs.core.chunk_rest(seq__18499_18518__$1);
var G__18521 = c__9926__auto___18519;
var G__18522 = cljs.core.count(c__9926__auto___18519);
var G__18523 = 0;
seq__18499_18508 = G__18520;
chunk__18500_18509 = G__18521;
count__18501_18510 = G__18522;
i__18502_18511 = G__18523;
continue;
}
} else
{var info_18524 = cljs.core.first(seq__18499_18518__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_18524)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_18524)),v));
{
var G__18525 = cljs.core.next(seq__18499_18518__$1);
var G__18526 = null;
var G__18527 = 0;
var G__18528 = 0;
seq__18499_18508 = G__18525;
chunk__18500_18509 = G__18526;
count__18501_18510 = G__18527;
i__18502_18511 = G__18528;
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
var G__18529 = seq__18494;
var G__18530 = chunk__18495;
var G__18531 = count__18496;
var G__18532 = (i__18497 + 1);
seq__18494 = G__18529;
chunk__18495 = G__18530;
count__18496 = G__18531;
i__18497 = G__18532;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__18494);
if(temp__4092__auto__)
{var seq__18494__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18494__$1))
{var c__9926__auto__ = cljs.core.chunk_first(seq__18494__$1);
{
var G__18533 = cljs.core.chunk_rest(seq__18494__$1);
var G__18534 = c__9926__auto__;
var G__18535 = cljs.core.count(c__9926__auto__);
var G__18536 = 0;
seq__18494 = G__18533;
chunk__18495 = G__18534;
count__18496 = G__18535;
i__18497 = G__18536;
continue;
}
} else
{var vec__18503 = cljs.core.first(seq__18494__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18503,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18503,1,null);
if(cljs.core.every_QMARK_(((function (seq__18494,chunk__18495,count__18496,i__18497,vec__18503,k,v,seq__18494__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__18494,chunk__18495,count__18496,i__18497,vec__18503,k,v,seq__18494__$1,temp__4092__auto__))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__18504_18537 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__18505_18538 = null;
var count__18506_18539 = 0;
var i__18507_18540 = 0;
while(true){
if((i__18507_18540 < count__18506_18539))
{var info_18541 = chunk__18505_18538.cljs$core$IIndexed$_nth$arity$2(chunk__18505_18538,i__18507_18540);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_18541)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_18541)),v));
{
var G__18542 = seq__18504_18537;
var G__18543 = chunk__18505_18538;
var G__18544 = count__18506_18539;
var G__18545 = (i__18507_18540 + 1);
seq__18504_18537 = G__18542;
chunk__18505_18538 = G__18543;
count__18506_18539 = G__18544;
i__18507_18540 = G__18545;
continue;
}
} else
{var temp__4092__auto___18546__$1 = cljs.core.seq(seq__18504_18537);
if(temp__4092__auto___18546__$1)
{var seq__18504_18547__$1 = temp__4092__auto___18546__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18504_18547__$1))
{var c__9926__auto___18548 = cljs.core.chunk_first(seq__18504_18547__$1);
{
var G__18549 = cljs.core.chunk_rest(seq__18504_18547__$1);
var G__18550 = c__9926__auto___18548;
var G__18551 = cljs.core.count(c__9926__auto___18548);
var G__18552 = 0;
seq__18504_18537 = G__18549;
chunk__18505_18538 = G__18550;
count__18506_18539 = G__18551;
i__18507_18540 = G__18552;
continue;
}
} else
{var info_18553 = cljs.core.first(seq__18504_18547__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_18553)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_18553)),v));
{
var G__18554 = cljs.core.next(seq__18504_18547__$1);
var G__18555 = null;
var G__18556 = 0;
var G__18557 = 0;
seq__18504_18537 = G__18554;
chunk__18505_18538 = G__18555;
count__18506_18539 = G__18556;
i__18507_18540 = G__18557;
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
var G__18558 = cljs.core.next(seq__18494__$1);
var G__18559 = null;
var G__18560 = 0;
var G__18561 = 0;
seq__18494 = G__18558;
chunk__18495 = G__18559;
count__18496 = G__18560;
i__18497 = G__18561;
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
return io.pedestal.app.render.push.templates.add_in_template((function (p1__18562_SHARP_,p2__18563_SHARP_){
return domina.insert_BANG_(p1__18562_SHARP_,p2__18563_SHARP_,idx);
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
var vec__18565 = (make_template.cljs$core$IFn$_invoke$arity$0 ? make_template.cljs$core$IFn$_invoke$arity$0() : make_template.call(null));
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18565,0,null);
var html = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18565,1,null);
io.pedestal.app.render.push.set_data_BANG_(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
