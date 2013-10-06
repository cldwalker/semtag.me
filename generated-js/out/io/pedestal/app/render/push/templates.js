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
var seq__13289 = cljs.core.seq(t);
var chunk__13294 = null;
var count__13295 = 0;
var i__13296 = 0;
while(true){
if((i__13296 < count__13295))
{var vec__13301 = chunk__13294.cljs$core$IIndexed$_nth$arity$2(chunk__13294,i__13296);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13301,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13301,1,null);
var seq__13297_13311 = cljs.core.seq(v);
var chunk__13298_13312 = null;
var count__13299_13313 = 0;
var i__13300_13314 = 0;
while(true){
if((i__13300_13314 < count__13299_13313))
{var map__13302_13315 = chunk__13298_13312.cljs$core$IIndexed$_nth$arity$2(chunk__13298_13312,i__13300_13314);
var map__13302_13316__$1 = ((cljs.core.seq_QMARK_(map__13302_13315))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13302_13315):map__13302_13315);
var attr_name_13317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13302_13316__$1,"\uFDD0:attr-name");
var type_13318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13302_13316__$1,"\uFDD0:type");
var id_13319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13302_13316__$1,"\uFDD0:id");
var G__13303_13320 = type_13318;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13303_13320))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13319),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13303_13320))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13319),attr_name_13317);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13319),cljs.core.PersistentArrayMap.fromArray([attr_name_13317,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13321 = seq__13297_13311;
var G__13322 = chunk__13298_13312;
var G__13323 = count__13299_13313;
var G__13324 = (i__13300_13314 + 1);
seq__13297_13311 = G__13321;
chunk__13298_13312 = G__13322;
count__13299_13313 = G__13323;
i__13300_13314 = G__13324;
continue;
}
} else
{var temp__4092__auto___13325 = cljs.core.seq(seq__13297_13311);
if(temp__4092__auto___13325)
{var seq__13297_13326__$1 = temp__4092__auto___13325;
if(cljs.core.chunked_seq_QMARK_(seq__13297_13326__$1))
{var c__9646__auto___13327 = cljs.core.chunk_first(seq__13297_13326__$1);
{
var G__13328 = cljs.core.chunk_rest(seq__13297_13326__$1);
var G__13329 = c__9646__auto___13327;
var G__13330 = cljs.core.count(c__9646__auto___13327);
var G__13331 = 0;
seq__13297_13311 = G__13328;
chunk__13298_13312 = G__13329;
count__13299_13313 = G__13330;
i__13300_13314 = G__13331;
continue;
}
} else
{var map__13304_13332 = cljs.core.first(seq__13297_13326__$1);
var map__13304_13333__$1 = ((cljs.core.seq_QMARK_(map__13304_13332))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13304_13332):map__13304_13332);
var attr_name_13334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304_13333__$1,"\uFDD0:attr-name");
var type_13335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304_13333__$1,"\uFDD0:type");
var id_13336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304_13333__$1,"\uFDD0:id");
var G__13305_13337 = type_13335;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13305_13337))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13336),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13305_13337))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13336),attr_name_13334);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13336),cljs.core.PersistentArrayMap.fromArray([attr_name_13334,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13338 = cljs.core.next(seq__13297_13326__$1);
var G__13339 = null;
var G__13340 = 0;
var G__13341 = 0;
seq__13297_13311 = G__13338;
chunk__13298_13312 = G__13339;
count__13299_13313 = G__13340;
i__13300_13314 = G__13341;
continue;
}
}
} else
{}
}
break;
}
{
var G__13342 = seq__13289;
var G__13343 = chunk__13294;
var G__13344 = count__13295;
var G__13345 = (i__13296 + 1);
seq__13289 = G__13342;
chunk__13294 = G__13343;
count__13295 = G__13344;
i__13296 = G__13345;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13289);
if(temp__4092__auto__)
{var seq__13289__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13289__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13289__$1);
{
var G__13346 = cljs.core.chunk_rest(seq__13289__$1);
var G__13347 = c__9646__auto__;
var G__13348 = cljs.core.count(c__9646__auto__);
var G__13349 = 0;
seq__13289 = G__13346;
chunk__13294 = G__13347;
count__13295 = G__13348;
i__13296 = G__13349;
continue;
}
} else
{var vec__13306 = cljs.core.first(seq__13289__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13306,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13306,1,null);
var seq__13290_13350 = cljs.core.seq(v);
var chunk__13291_13351 = null;
var count__13292_13352 = 0;
var i__13293_13353 = 0;
while(true){
if((i__13293_13353 < count__13292_13352))
{var map__13307_13354 = chunk__13291_13351.cljs$core$IIndexed$_nth$arity$2(chunk__13291_13351,i__13293_13353);
var map__13307_13355__$1 = ((cljs.core.seq_QMARK_(map__13307_13354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13307_13354):map__13307_13354);
var attr_name_13356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307_13355__$1,"\uFDD0:attr-name");
var type_13357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307_13355__$1,"\uFDD0:type");
var id_13358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307_13355__$1,"\uFDD0:id");
var G__13308_13359 = type_13357;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13308_13359))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13358),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13308_13359))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13358),attr_name_13356);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13358),cljs.core.PersistentArrayMap.fromArray([attr_name_13356,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13360 = seq__13290_13350;
var G__13361 = chunk__13291_13351;
var G__13362 = count__13292_13352;
var G__13363 = (i__13293_13353 + 1);
seq__13290_13350 = G__13360;
chunk__13291_13351 = G__13361;
count__13292_13352 = G__13362;
i__13293_13353 = G__13363;
continue;
}
} else
{var temp__4092__auto___13364__$1 = cljs.core.seq(seq__13290_13350);
if(temp__4092__auto___13364__$1)
{var seq__13290_13365__$1 = temp__4092__auto___13364__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13290_13365__$1))
{var c__9646__auto___13366 = cljs.core.chunk_first(seq__13290_13365__$1);
{
var G__13367 = cljs.core.chunk_rest(seq__13290_13365__$1);
var G__13368 = c__9646__auto___13366;
var G__13369 = cljs.core.count(c__9646__auto___13366);
var G__13370 = 0;
seq__13290_13350 = G__13367;
chunk__13291_13351 = G__13368;
count__13292_13352 = G__13369;
i__13293_13353 = G__13370;
continue;
}
} else
{var map__13309_13371 = cljs.core.first(seq__13290_13365__$1);
var map__13309_13372__$1 = ((cljs.core.seq_QMARK_(map__13309_13371))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13309_13371):map__13309_13371);
var attr_name_13373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309_13372__$1,"\uFDD0:attr-name");
var type_13374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309_13372__$1,"\uFDD0:type");
var id_13375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309_13372__$1,"\uFDD0:id");
var G__13310_13376 = type_13374;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13310_13376))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13375),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13310_13376))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13375),attr_name_13373);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13375),cljs.core.PersistentArrayMap.fromArray([attr_name_13373,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13377 = cljs.core.next(seq__13290_13365__$1);
var G__13378 = null;
var G__13379 = 0;
var G__13380 = 0;
seq__13290_13350 = G__13377;
chunk__13291_13351 = G__13378;
count__13292_13352 = G__13379;
i__13293_13353 = G__13380;
continue;
}
}
} else
{}
}
break;
}
{
var G__13381 = cljs.core.next(seq__13289__$1);
var G__13382 = null;
var G__13383 = 0;
var G__13384 = 0;
seq__13289 = G__13381;
chunk__13294 = G__13382;
count__13295 = G__13383;
i__13296 = G__13384;
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
var seq__13399 = cljs.core.seq(m);
var chunk__13400 = null;
var count__13401 = 0;
var i__13402 = 0;
while(true){
if((i__13402 < count__13401))
{var vec__13403 = chunk__13400.cljs$core$IIndexed$_nth$arity$2(chunk__13400,i__13402);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13403,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13403,1,null);
if(cljs.core.every_QMARK_(((function (seq__13399,chunk__13400,count__13401,i__13402,vec__13403,k,v){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13399,chunk__13400,count__13401,i__13402,vec__13403,k,v))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__13404_13413 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__13405_13414 = null;
var count__13406_13415 = 0;
var i__13407_13416 = 0;
while(true){
if((i__13407_13416 < count__13406_13415))
{var info_13417 = chunk__13405_13414.cljs$core$IIndexed$_nth$arity$2(chunk__13405_13414,i__13407_13416);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13417)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13417)),v));
{
var G__13418 = seq__13404_13413;
var G__13419 = chunk__13405_13414;
var G__13420 = count__13406_13415;
var G__13421 = (i__13407_13416 + 1);
seq__13404_13413 = G__13418;
chunk__13405_13414 = G__13419;
count__13406_13415 = G__13420;
i__13407_13416 = G__13421;
continue;
}
} else
{var temp__4092__auto___13422 = cljs.core.seq(seq__13404_13413);
if(temp__4092__auto___13422)
{var seq__13404_13423__$1 = temp__4092__auto___13422;
if(cljs.core.chunked_seq_QMARK_(seq__13404_13423__$1))
{var c__9646__auto___13424 = cljs.core.chunk_first(seq__13404_13423__$1);
{
var G__13425 = cljs.core.chunk_rest(seq__13404_13423__$1);
var G__13426 = c__9646__auto___13424;
var G__13427 = cljs.core.count(c__9646__auto___13424);
var G__13428 = 0;
seq__13404_13413 = G__13425;
chunk__13405_13414 = G__13426;
count__13406_13415 = G__13427;
i__13407_13416 = G__13428;
continue;
}
} else
{var info_13429 = cljs.core.first(seq__13404_13423__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13429)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13429)),v));
{
var G__13430 = cljs.core.next(seq__13404_13423__$1);
var G__13431 = null;
var G__13432 = 0;
var G__13433 = 0;
seq__13404_13413 = G__13430;
chunk__13405_13414 = G__13431;
count__13406_13415 = G__13432;
i__13407_13416 = G__13433;
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
var G__13434 = seq__13399;
var G__13435 = chunk__13400;
var G__13436 = count__13401;
var G__13437 = (i__13402 + 1);
seq__13399 = G__13434;
chunk__13400 = G__13435;
count__13401 = G__13436;
i__13402 = G__13437;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13399);
if(temp__4092__auto__)
{var seq__13399__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13399__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13399__$1);
{
var G__13438 = cljs.core.chunk_rest(seq__13399__$1);
var G__13439 = c__9646__auto__;
var G__13440 = cljs.core.count(c__9646__auto__);
var G__13441 = 0;
seq__13399 = G__13438;
chunk__13400 = G__13439;
count__13401 = G__13440;
i__13402 = G__13441;
continue;
}
} else
{var vec__13408 = cljs.core.first(seq__13399__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13408,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13408,1,null);
if(cljs.core.every_QMARK_(((function (seq__13399,chunk__13400,count__13401,i__13402,vec__13408,k,v,seq__13399__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13399,chunk__13400,count__13401,i__13402,vec__13408,k,v,seq__13399__$1,temp__4092__auto__))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__13409_13442 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__13410_13443 = null;
var count__13411_13444 = 0;
var i__13412_13445 = 0;
while(true){
if((i__13412_13445 < count__13411_13444))
{var info_13446 = chunk__13410_13443.cljs$core$IIndexed$_nth$arity$2(chunk__13410_13443,i__13412_13445);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13446)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13446)),v));
{
var G__13447 = seq__13409_13442;
var G__13448 = chunk__13410_13443;
var G__13449 = count__13411_13444;
var G__13450 = (i__13412_13445 + 1);
seq__13409_13442 = G__13447;
chunk__13410_13443 = G__13448;
count__13411_13444 = G__13449;
i__13412_13445 = G__13450;
continue;
}
} else
{var temp__4092__auto___13451__$1 = cljs.core.seq(seq__13409_13442);
if(temp__4092__auto___13451__$1)
{var seq__13409_13452__$1 = temp__4092__auto___13451__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13409_13452__$1))
{var c__9646__auto___13453 = cljs.core.chunk_first(seq__13409_13452__$1);
{
var G__13454 = cljs.core.chunk_rest(seq__13409_13452__$1);
var G__13455 = c__9646__auto___13453;
var G__13456 = cljs.core.count(c__9646__auto___13453);
var G__13457 = 0;
seq__13409_13442 = G__13454;
chunk__13410_13443 = G__13455;
count__13411_13444 = G__13456;
i__13412_13445 = G__13457;
continue;
}
} else
{var info_13458 = cljs.core.first(seq__13409_13452__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13458)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13458)),v));
{
var G__13459 = cljs.core.next(seq__13409_13452__$1);
var G__13460 = null;
var G__13461 = 0;
var G__13462 = 0;
seq__13409_13442 = G__13459;
chunk__13410_13443 = G__13460;
count__13411_13444 = G__13461;
i__13412_13445 = G__13462;
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
var G__13463 = cljs.core.next(seq__13399__$1);
var G__13464 = null;
var G__13465 = 0;
var G__13466 = 0;
seq__13399 = G__13463;
chunk__13400 = G__13464;
count__13401 = G__13465;
i__13402 = G__13466;
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
return io.pedestal.app.render.push.templates.add_in_template((function (p1__13467_SHARP_,p2__13468_SHARP_){
return domina.insert_BANG_(p1__13467_SHARP_,p2__13468_SHARP_,idx);
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
var vec__13470 = (make_template.cljs$core$IFn$_invoke$arity$0 ? make_template.cljs$core$IFn$_invoke$arity$0() : make_template.call(null));
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13470,0,null);
var html = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13470,1,null);
io.pedestal.app.render.push.set_data_BANG_(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
