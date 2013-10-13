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
var seq__13312 = cljs.core.seq(t);
var chunk__13317 = null;
var count__13318 = 0;
var i__13319 = 0;
while(true){
if((i__13319 < count__13318))
{var vec__13324 = chunk__13317.cljs$core$IIndexed$_nth$arity$2(chunk__13317,i__13319);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13324,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13324,1,null);
var seq__13320_13334 = cljs.core.seq(v);
var chunk__13321_13335 = null;
var count__13322_13336 = 0;
var i__13323_13337 = 0;
while(true){
if((i__13323_13337 < count__13322_13336))
{var map__13325_13338 = chunk__13321_13335.cljs$core$IIndexed$_nth$arity$2(chunk__13321_13335,i__13323_13337);
var map__13325_13339__$1 = ((cljs.core.seq_QMARK_(map__13325_13338))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13325_13338):map__13325_13338);
var attr_name_13340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325_13339__$1,"\uFDD0:attr-name");
var type_13341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325_13339__$1,"\uFDD0:type");
var id_13342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325_13339__$1,"\uFDD0:id");
var G__13326_13343 = type_13341;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13326_13343))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13342),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13326_13343))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13342),attr_name_13340);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13342),cljs.core.PersistentArrayMap.fromArray([attr_name_13340,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13344 = seq__13320_13334;
var G__13345 = chunk__13321_13335;
var G__13346 = count__13322_13336;
var G__13347 = (i__13323_13337 + 1);
seq__13320_13334 = G__13344;
chunk__13321_13335 = G__13345;
count__13322_13336 = G__13346;
i__13323_13337 = G__13347;
continue;
}
} else
{var temp__4092__auto___13348 = cljs.core.seq(seq__13320_13334);
if(temp__4092__auto___13348)
{var seq__13320_13349__$1 = temp__4092__auto___13348;
if(cljs.core.chunked_seq_QMARK_(seq__13320_13349__$1))
{var c__9646__auto___13350 = cljs.core.chunk_first(seq__13320_13349__$1);
{
var G__13351 = cljs.core.chunk_rest(seq__13320_13349__$1);
var G__13352 = c__9646__auto___13350;
var G__13353 = cljs.core.count(c__9646__auto___13350);
var G__13354 = 0;
seq__13320_13334 = G__13351;
chunk__13321_13335 = G__13352;
count__13322_13336 = G__13353;
i__13323_13337 = G__13354;
continue;
}
} else
{var map__13327_13355 = cljs.core.first(seq__13320_13349__$1);
var map__13327_13356__$1 = ((cljs.core.seq_QMARK_(map__13327_13355))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13327_13355):map__13327_13355);
var attr_name_13357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13327_13356__$1,"\uFDD0:attr-name");
var type_13358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13327_13356__$1,"\uFDD0:type");
var id_13359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13327_13356__$1,"\uFDD0:id");
var G__13328_13360 = type_13358;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13328_13360))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13359),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13328_13360))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13359),attr_name_13357);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13359),cljs.core.PersistentArrayMap.fromArray([attr_name_13357,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13361 = cljs.core.next(seq__13320_13349__$1);
var G__13362 = null;
var G__13363 = 0;
var G__13364 = 0;
seq__13320_13334 = G__13361;
chunk__13321_13335 = G__13362;
count__13322_13336 = G__13363;
i__13323_13337 = G__13364;
continue;
}
}
} else
{}
}
break;
}
{
var G__13365 = seq__13312;
var G__13366 = chunk__13317;
var G__13367 = count__13318;
var G__13368 = (i__13319 + 1);
seq__13312 = G__13365;
chunk__13317 = G__13366;
count__13318 = G__13367;
i__13319 = G__13368;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13312);
if(temp__4092__auto__)
{var seq__13312__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13312__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13312__$1);
{
var G__13369 = cljs.core.chunk_rest(seq__13312__$1);
var G__13370 = c__9646__auto__;
var G__13371 = cljs.core.count(c__9646__auto__);
var G__13372 = 0;
seq__13312 = G__13369;
chunk__13317 = G__13370;
count__13318 = G__13371;
i__13319 = G__13372;
continue;
}
} else
{var vec__13329 = cljs.core.first(seq__13312__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13329,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13329,1,null);
var seq__13313_13373 = cljs.core.seq(v);
var chunk__13314_13374 = null;
var count__13315_13375 = 0;
var i__13316_13376 = 0;
while(true){
if((i__13316_13376 < count__13315_13375))
{var map__13330_13377 = chunk__13314_13374.cljs$core$IIndexed$_nth$arity$2(chunk__13314_13374,i__13316_13376);
var map__13330_13378__$1 = ((cljs.core.seq_QMARK_(map__13330_13377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13330_13377):map__13330_13377);
var attr_name_13379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330_13378__$1,"\uFDD0:attr-name");
var type_13380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330_13378__$1,"\uFDD0:type");
var id_13381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330_13378__$1,"\uFDD0:id");
var G__13331_13382 = type_13380;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13331_13382))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13381),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13331_13382))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13381),attr_name_13379);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13381),cljs.core.PersistentArrayMap.fromArray([attr_name_13379,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13383 = seq__13313_13373;
var G__13384 = chunk__13314_13374;
var G__13385 = count__13315_13375;
var G__13386 = (i__13316_13376 + 1);
seq__13313_13373 = G__13383;
chunk__13314_13374 = G__13384;
count__13315_13375 = G__13385;
i__13316_13376 = G__13386;
continue;
}
} else
{var temp__4092__auto___13387__$1 = cljs.core.seq(seq__13313_13373);
if(temp__4092__auto___13387__$1)
{var seq__13313_13388__$1 = temp__4092__auto___13387__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13313_13388__$1))
{var c__9646__auto___13389 = cljs.core.chunk_first(seq__13313_13388__$1);
{
var G__13390 = cljs.core.chunk_rest(seq__13313_13388__$1);
var G__13391 = c__9646__auto___13389;
var G__13392 = cljs.core.count(c__9646__auto___13389);
var G__13393 = 0;
seq__13313_13373 = G__13390;
chunk__13314_13374 = G__13391;
count__13315_13375 = G__13392;
i__13316_13376 = G__13393;
continue;
}
} else
{var map__13332_13394 = cljs.core.first(seq__13313_13388__$1);
var map__13332_13395__$1 = ((cljs.core.seq_QMARK_(map__13332_13394))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13332_13394):map__13332_13394);
var attr_name_13396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13332_13395__$1,"\uFDD0:attr-name");
var type_13397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13332_13395__$1,"\uFDD0:type");
var id_13398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13332_13395__$1,"\uFDD0:id");
var G__13333_13399 = type_13397;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13333_13399))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13398),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13333_13399))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13398),attr_name_13396);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13398),cljs.core.PersistentArrayMap.fromArray([attr_name_13396,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13400 = cljs.core.next(seq__13313_13388__$1);
var G__13401 = null;
var G__13402 = 0;
var G__13403 = 0;
seq__13313_13373 = G__13400;
chunk__13314_13374 = G__13401;
count__13315_13375 = G__13402;
i__13316_13376 = G__13403;
continue;
}
}
} else
{}
}
break;
}
{
var G__13404 = cljs.core.next(seq__13312__$1);
var G__13405 = null;
var G__13406 = 0;
var G__13407 = 0;
seq__13312 = G__13404;
chunk__13317 = G__13405;
count__13318 = G__13406;
i__13319 = G__13407;
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
var seq__13422 = cljs.core.seq(m);
var chunk__13423 = null;
var count__13424 = 0;
var i__13425 = 0;
while(true){
if((i__13425 < count__13424))
{var vec__13426 = chunk__13423.cljs$core$IIndexed$_nth$arity$2(chunk__13423,i__13425);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13426,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13426,1,null);
if(cljs.core.every_QMARK_(((function (seq__13422,chunk__13423,count__13424,i__13425,vec__13426,k,v){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13422,chunk__13423,count__13424,i__13425,vec__13426,k,v))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__13427_13436 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__13428_13437 = null;
var count__13429_13438 = 0;
var i__13430_13439 = 0;
while(true){
if((i__13430_13439 < count__13429_13438))
{var info_13440 = chunk__13428_13437.cljs$core$IIndexed$_nth$arity$2(chunk__13428_13437,i__13430_13439);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13440)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13440)),v));
{
var G__13441 = seq__13427_13436;
var G__13442 = chunk__13428_13437;
var G__13443 = count__13429_13438;
var G__13444 = (i__13430_13439 + 1);
seq__13427_13436 = G__13441;
chunk__13428_13437 = G__13442;
count__13429_13438 = G__13443;
i__13430_13439 = G__13444;
continue;
}
} else
{var temp__4092__auto___13445 = cljs.core.seq(seq__13427_13436);
if(temp__4092__auto___13445)
{var seq__13427_13446__$1 = temp__4092__auto___13445;
if(cljs.core.chunked_seq_QMARK_(seq__13427_13446__$1))
{var c__9646__auto___13447 = cljs.core.chunk_first(seq__13427_13446__$1);
{
var G__13448 = cljs.core.chunk_rest(seq__13427_13446__$1);
var G__13449 = c__9646__auto___13447;
var G__13450 = cljs.core.count(c__9646__auto___13447);
var G__13451 = 0;
seq__13427_13436 = G__13448;
chunk__13428_13437 = G__13449;
count__13429_13438 = G__13450;
i__13430_13439 = G__13451;
continue;
}
} else
{var info_13452 = cljs.core.first(seq__13427_13446__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13452)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13452)),v));
{
var G__13453 = cljs.core.next(seq__13427_13446__$1);
var G__13454 = null;
var G__13455 = 0;
var G__13456 = 0;
seq__13427_13436 = G__13453;
chunk__13428_13437 = G__13454;
count__13429_13438 = G__13455;
i__13430_13439 = G__13456;
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
var G__13457 = seq__13422;
var G__13458 = chunk__13423;
var G__13459 = count__13424;
var G__13460 = (i__13425 + 1);
seq__13422 = G__13457;
chunk__13423 = G__13458;
count__13424 = G__13459;
i__13425 = G__13460;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13422);
if(temp__4092__auto__)
{var seq__13422__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13422__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13422__$1);
{
var G__13461 = cljs.core.chunk_rest(seq__13422__$1);
var G__13462 = c__9646__auto__;
var G__13463 = cljs.core.count(c__9646__auto__);
var G__13464 = 0;
seq__13422 = G__13461;
chunk__13423 = G__13462;
count__13424 = G__13463;
i__13425 = G__13464;
continue;
}
} else
{var vec__13431 = cljs.core.first(seq__13422__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13431,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13431,1,null);
if(cljs.core.every_QMARK_(((function (seq__13422,chunk__13423,count__13424,i__13425,vec__13431,k,v,seq__13422__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13422,chunk__13423,count__13424,i__13425,vec__13431,k,v,seq__13422__$1,temp__4092__auto__))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__13432_13465 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__13433_13466 = null;
var count__13434_13467 = 0;
var i__13435_13468 = 0;
while(true){
if((i__13435_13468 < count__13434_13467))
{var info_13469 = chunk__13433_13466.cljs$core$IIndexed$_nth$arity$2(chunk__13433_13466,i__13435_13468);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13469)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13469)),v));
{
var G__13470 = seq__13432_13465;
var G__13471 = chunk__13433_13466;
var G__13472 = count__13434_13467;
var G__13473 = (i__13435_13468 + 1);
seq__13432_13465 = G__13470;
chunk__13433_13466 = G__13471;
count__13434_13467 = G__13472;
i__13435_13468 = G__13473;
continue;
}
} else
{var temp__4092__auto___13474__$1 = cljs.core.seq(seq__13432_13465);
if(temp__4092__auto___13474__$1)
{var seq__13432_13475__$1 = temp__4092__auto___13474__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13432_13475__$1))
{var c__9646__auto___13476 = cljs.core.chunk_first(seq__13432_13475__$1);
{
var G__13477 = cljs.core.chunk_rest(seq__13432_13475__$1);
var G__13478 = c__9646__auto___13476;
var G__13479 = cljs.core.count(c__9646__auto___13476);
var G__13480 = 0;
seq__13432_13465 = G__13477;
chunk__13433_13466 = G__13478;
count__13434_13467 = G__13479;
i__13435_13468 = G__13480;
continue;
}
} else
{var info_13481 = cljs.core.first(seq__13432_13475__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13481)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13481)),v));
{
var G__13482 = cljs.core.next(seq__13432_13475__$1);
var G__13483 = null;
var G__13484 = 0;
var G__13485 = 0;
seq__13432_13465 = G__13482;
chunk__13433_13466 = G__13483;
count__13434_13467 = G__13484;
i__13435_13468 = G__13485;
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
var G__13486 = cljs.core.next(seq__13422__$1);
var G__13487 = null;
var G__13488 = 0;
var G__13489 = 0;
seq__13422 = G__13486;
chunk__13423 = G__13487;
count__13424 = G__13488;
i__13425 = G__13489;
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
return io.pedestal.app.render.push.templates.add_in_template((function (p1__13490_SHARP_,p2__13491_SHARP_){
return domina.insert_BANG_(p1__13490_SHARP_,p2__13491_SHARP_,idx);
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
var vec__13493 = (make_template.cljs$core$IFn$_invoke$arity$0 ? make_template.cljs$core$IFn$_invoke$arity$0() : make_template.call(null));
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,0,null);
var html = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,1,null);
io.pedestal.app.render.push.set_data_BANG_(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
