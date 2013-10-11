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
var seq__13299 = cljs.core.seq(t);
var chunk__13304 = null;
var count__13305 = 0;
var i__13306 = 0;
while(true){
if((i__13306 < count__13305))
{var vec__13311 = chunk__13304.cljs$core$IIndexed$_nth$arity$2(chunk__13304,i__13306);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13311,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13311,1,null);
var seq__13307_13321 = cljs.core.seq(v);
var chunk__13308_13322 = null;
var count__13309_13323 = 0;
var i__13310_13324 = 0;
while(true){
if((i__13310_13324 < count__13309_13323))
{var map__13312_13325 = chunk__13308_13322.cljs$core$IIndexed$_nth$arity$2(chunk__13308_13322,i__13310_13324);
var map__13312_13326__$1 = ((cljs.core.seq_QMARK_(map__13312_13325))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13312_13325):map__13312_13325);
var attr_name_13327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13312_13326__$1,"\uFDD0:attr-name");
var type_13328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13312_13326__$1,"\uFDD0:type");
var id_13329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13312_13326__$1,"\uFDD0:id");
var G__13313_13330 = type_13328;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13313_13330))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13329),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13313_13330))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13329),attr_name_13327);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13329),cljs.core.PersistentArrayMap.fromArray([attr_name_13327,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13331 = seq__13307_13321;
var G__13332 = chunk__13308_13322;
var G__13333 = count__13309_13323;
var G__13334 = (i__13310_13324 + 1);
seq__13307_13321 = G__13331;
chunk__13308_13322 = G__13332;
count__13309_13323 = G__13333;
i__13310_13324 = G__13334;
continue;
}
} else
{var temp__4092__auto___13335 = cljs.core.seq(seq__13307_13321);
if(temp__4092__auto___13335)
{var seq__13307_13336__$1 = temp__4092__auto___13335;
if(cljs.core.chunked_seq_QMARK_(seq__13307_13336__$1))
{var c__9646__auto___13337 = cljs.core.chunk_first(seq__13307_13336__$1);
{
var G__13338 = cljs.core.chunk_rest(seq__13307_13336__$1);
var G__13339 = c__9646__auto___13337;
var G__13340 = cljs.core.count(c__9646__auto___13337);
var G__13341 = 0;
seq__13307_13321 = G__13338;
chunk__13308_13322 = G__13339;
count__13309_13323 = G__13340;
i__13310_13324 = G__13341;
continue;
}
} else
{var map__13314_13342 = cljs.core.first(seq__13307_13336__$1);
var map__13314_13343__$1 = ((cljs.core.seq_QMARK_(map__13314_13342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13314_13342):map__13314_13342);
var attr_name_13344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13314_13343__$1,"\uFDD0:attr-name");
var type_13345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13314_13343__$1,"\uFDD0:type");
var id_13346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13314_13343__$1,"\uFDD0:id");
var G__13315_13347 = type_13345;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13315_13347))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13346),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13315_13347))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13346),attr_name_13344);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13346),cljs.core.PersistentArrayMap.fromArray([attr_name_13344,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13348 = cljs.core.next(seq__13307_13336__$1);
var G__13349 = null;
var G__13350 = 0;
var G__13351 = 0;
seq__13307_13321 = G__13348;
chunk__13308_13322 = G__13349;
count__13309_13323 = G__13350;
i__13310_13324 = G__13351;
continue;
}
}
} else
{}
}
break;
}
{
var G__13352 = seq__13299;
var G__13353 = chunk__13304;
var G__13354 = count__13305;
var G__13355 = (i__13306 + 1);
seq__13299 = G__13352;
chunk__13304 = G__13353;
count__13305 = G__13354;
i__13306 = G__13355;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13299);
if(temp__4092__auto__)
{var seq__13299__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13299__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13299__$1);
{
var G__13356 = cljs.core.chunk_rest(seq__13299__$1);
var G__13357 = c__9646__auto__;
var G__13358 = cljs.core.count(c__9646__auto__);
var G__13359 = 0;
seq__13299 = G__13356;
chunk__13304 = G__13357;
count__13305 = G__13358;
i__13306 = G__13359;
continue;
}
} else
{var vec__13316 = cljs.core.first(seq__13299__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13316,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13316,1,null);
var seq__13300_13360 = cljs.core.seq(v);
var chunk__13301_13361 = null;
var count__13302_13362 = 0;
var i__13303_13363 = 0;
while(true){
if((i__13303_13363 < count__13302_13362))
{var map__13317_13364 = chunk__13301_13361.cljs$core$IIndexed$_nth$arity$2(chunk__13301_13361,i__13303_13363);
var map__13317_13365__$1 = ((cljs.core.seq_QMARK_(map__13317_13364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13317_13364):map__13317_13364);
var attr_name_13366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13317_13365__$1,"\uFDD0:attr-name");
var type_13367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13317_13365__$1,"\uFDD0:type");
var id_13368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13317_13365__$1,"\uFDD0:id");
var G__13318_13369 = type_13367;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13318_13369))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13368),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13318_13369))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13368),attr_name_13366);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13368),cljs.core.PersistentArrayMap.fromArray([attr_name_13366,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13370 = seq__13300_13360;
var G__13371 = chunk__13301_13361;
var G__13372 = count__13302_13362;
var G__13373 = (i__13303_13363 + 1);
seq__13300_13360 = G__13370;
chunk__13301_13361 = G__13371;
count__13302_13362 = G__13372;
i__13303_13363 = G__13373;
continue;
}
} else
{var temp__4092__auto___13374__$1 = cljs.core.seq(seq__13300_13360);
if(temp__4092__auto___13374__$1)
{var seq__13300_13375__$1 = temp__4092__auto___13374__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13300_13375__$1))
{var c__9646__auto___13376 = cljs.core.chunk_first(seq__13300_13375__$1);
{
var G__13377 = cljs.core.chunk_rest(seq__13300_13375__$1);
var G__13378 = c__9646__auto___13376;
var G__13379 = cljs.core.count(c__9646__auto___13376);
var G__13380 = 0;
seq__13300_13360 = G__13377;
chunk__13301_13361 = G__13378;
count__13302_13362 = G__13379;
i__13303_13363 = G__13380;
continue;
}
} else
{var map__13319_13381 = cljs.core.first(seq__13300_13375__$1);
var map__13319_13382__$1 = ((cljs.core.seq_QMARK_(map__13319_13381))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13319_13381):map__13319_13381);
var attr_name_13383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13319_13382__$1,"\uFDD0:attr-name");
var type_13384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13319_13382__$1,"\uFDD0:type");
var id_13385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13319_13382__$1,"\uFDD0:id");
var G__13320_13386 = type_13384;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13320_13386))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13385),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13320_13386))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13385),attr_name_13383);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13385),cljs.core.PersistentArrayMap.fromArray([attr_name_13383,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13387 = cljs.core.next(seq__13300_13375__$1);
var G__13388 = null;
var G__13389 = 0;
var G__13390 = 0;
seq__13300_13360 = G__13387;
chunk__13301_13361 = G__13388;
count__13302_13362 = G__13389;
i__13303_13363 = G__13390;
continue;
}
}
} else
{}
}
break;
}
{
var G__13391 = cljs.core.next(seq__13299__$1);
var G__13392 = null;
var G__13393 = 0;
var G__13394 = 0;
seq__13299 = G__13391;
chunk__13304 = G__13392;
count__13305 = G__13393;
i__13306 = G__13394;
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
var seq__13409 = cljs.core.seq(m);
var chunk__13410 = null;
var count__13411 = 0;
var i__13412 = 0;
while(true){
if((i__13412 < count__13411))
{var vec__13413 = chunk__13410.cljs$core$IIndexed$_nth$arity$2(chunk__13410,i__13412);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13413,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13413,1,null);
if(cljs.core.every_QMARK_(((function (seq__13409,chunk__13410,count__13411,i__13412,vec__13413,k,v){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13409,chunk__13410,count__13411,i__13412,vec__13413,k,v))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__13414_13423 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__13415_13424 = null;
var count__13416_13425 = 0;
var i__13417_13426 = 0;
while(true){
if((i__13417_13426 < count__13416_13425))
{var info_13427 = chunk__13415_13424.cljs$core$IIndexed$_nth$arity$2(chunk__13415_13424,i__13417_13426);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13427)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13427)),v));
{
var G__13428 = seq__13414_13423;
var G__13429 = chunk__13415_13424;
var G__13430 = count__13416_13425;
var G__13431 = (i__13417_13426 + 1);
seq__13414_13423 = G__13428;
chunk__13415_13424 = G__13429;
count__13416_13425 = G__13430;
i__13417_13426 = G__13431;
continue;
}
} else
{var temp__4092__auto___13432 = cljs.core.seq(seq__13414_13423);
if(temp__4092__auto___13432)
{var seq__13414_13433__$1 = temp__4092__auto___13432;
if(cljs.core.chunked_seq_QMARK_(seq__13414_13433__$1))
{var c__9646__auto___13434 = cljs.core.chunk_first(seq__13414_13433__$1);
{
var G__13435 = cljs.core.chunk_rest(seq__13414_13433__$1);
var G__13436 = c__9646__auto___13434;
var G__13437 = cljs.core.count(c__9646__auto___13434);
var G__13438 = 0;
seq__13414_13423 = G__13435;
chunk__13415_13424 = G__13436;
count__13416_13425 = G__13437;
i__13417_13426 = G__13438;
continue;
}
} else
{var info_13439 = cljs.core.first(seq__13414_13433__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13439)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13439)),v));
{
var G__13440 = cljs.core.next(seq__13414_13433__$1);
var G__13441 = null;
var G__13442 = 0;
var G__13443 = 0;
seq__13414_13423 = G__13440;
chunk__13415_13424 = G__13441;
count__13416_13425 = G__13442;
i__13417_13426 = G__13443;
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
var G__13444 = seq__13409;
var G__13445 = chunk__13410;
var G__13446 = count__13411;
var G__13447 = (i__13412 + 1);
seq__13409 = G__13444;
chunk__13410 = G__13445;
count__13411 = G__13446;
i__13412 = G__13447;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13409);
if(temp__4092__auto__)
{var seq__13409__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13409__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13409__$1);
{
var G__13448 = cljs.core.chunk_rest(seq__13409__$1);
var G__13449 = c__9646__auto__;
var G__13450 = cljs.core.count(c__9646__auto__);
var G__13451 = 0;
seq__13409 = G__13448;
chunk__13410 = G__13449;
count__13411 = G__13450;
i__13412 = G__13451;
continue;
}
} else
{var vec__13418 = cljs.core.first(seq__13409__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13418,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13418,1,null);
if(cljs.core.every_QMARK_(((function (seq__13409,chunk__13410,count__13411,i__13412,vec__13418,k,v,seq__13409__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13409,chunk__13410,count__13411,i__13412,vec__13418,k,v,seq__13409__$1,temp__4092__auto__))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__13419_13452 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__13420_13453 = null;
var count__13421_13454 = 0;
var i__13422_13455 = 0;
while(true){
if((i__13422_13455 < count__13421_13454))
{var info_13456 = chunk__13420_13453.cljs$core$IIndexed$_nth$arity$2(chunk__13420_13453,i__13422_13455);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13456)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13456)),v));
{
var G__13457 = seq__13419_13452;
var G__13458 = chunk__13420_13453;
var G__13459 = count__13421_13454;
var G__13460 = (i__13422_13455 + 1);
seq__13419_13452 = G__13457;
chunk__13420_13453 = G__13458;
count__13421_13454 = G__13459;
i__13422_13455 = G__13460;
continue;
}
} else
{var temp__4092__auto___13461__$1 = cljs.core.seq(seq__13419_13452);
if(temp__4092__auto___13461__$1)
{var seq__13419_13462__$1 = temp__4092__auto___13461__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13419_13462__$1))
{var c__9646__auto___13463 = cljs.core.chunk_first(seq__13419_13462__$1);
{
var G__13464 = cljs.core.chunk_rest(seq__13419_13462__$1);
var G__13465 = c__9646__auto___13463;
var G__13466 = cljs.core.count(c__9646__auto___13463);
var G__13467 = 0;
seq__13419_13452 = G__13464;
chunk__13420_13453 = G__13465;
count__13421_13454 = G__13466;
i__13422_13455 = G__13467;
continue;
}
} else
{var info_13468 = cljs.core.first(seq__13419_13462__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13468)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13468)),v));
{
var G__13469 = cljs.core.next(seq__13419_13462__$1);
var G__13470 = null;
var G__13471 = 0;
var G__13472 = 0;
seq__13419_13452 = G__13469;
chunk__13420_13453 = G__13470;
count__13421_13454 = G__13471;
i__13422_13455 = G__13472;
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
var G__13473 = cljs.core.next(seq__13409__$1);
var G__13474 = null;
var G__13475 = 0;
var G__13476 = 0;
seq__13409 = G__13473;
chunk__13410 = G__13474;
count__13411 = G__13475;
i__13412 = G__13476;
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
return io.pedestal.app.render.push.templates.add_in_template((function (p1__13477_SHARP_,p2__13478_SHARP_){
return domina.insert_BANG_(p1__13477_SHARP_,p2__13478_SHARP_,idx);
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
var vec__13480 = (make_template.cljs$core$IFn$_invoke$arity$0 ? make_template.cljs$core$IFn$_invoke$arity$0() : make_template.call(null));
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13480,0,null);
var html = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13480,1,null);
io.pedestal.app.render.push.set_data_BANG_(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
