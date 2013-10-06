goog.provide('io.pedestal.app.render.push.templates');
goog.require('cljs.core');
goog.require('domina');
goog.require('io.pedestal.app.render.push');
io.pedestal.app.render.push.templates.sibling = (function sibling(path,segment){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),segment);
});
io.pedestal.app.render.push.templates.parent = (function parent(path){
return cljs.core.vec.call(null,cljs.core.butlast.call(null,path));
});
io.pedestal.app.render.push.templates.update_template = (function update_template(t,m){
var seq__13283 = cljs.core.seq.call(null,t);
var chunk__13288 = null;
var count__13289 = 0;
var i__13290 = 0;
while(true){
if((i__13290 < count__13289))
{var vec__13295 = cljs.core._nth.call(null,chunk__13288,i__13290);
var k = cljs.core.nth.call(null,vec__13295,0,null);
var v = cljs.core.nth.call(null,vec__13295,1,null);
var seq__13291_13305 = cljs.core.seq.call(null,v);
var chunk__13292_13306 = null;
var count__13293_13307 = 0;
var i__13294_13308 = 0;
while(true){
if((i__13294_13308 < count__13293_13307))
{var map__13296_13309 = cljs.core._nth.call(null,chunk__13292_13306,i__13294_13308);
var map__13296_13310__$1 = ((cljs.core.seq_QMARK_.call(null,map__13296_13309))?cljs.core.apply.call(null,cljs.core.hash_map,map__13296_13309):map__13296_13309);
var attr_name_13311 = cljs.core.get.call(null,map__13296_13310__$1,"\uFDD0:attr-name");
var type_13312 = cljs.core.get.call(null,map__13296_13310__$1,"\uFDD0:type");
var id_13313 = cljs.core.get.call(null,map__13296_13310__$1,"\uFDD0:id");
var G__13297_13314 = type_13312;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__13297_13314))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_13313),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__13297_13314))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_13313),attr_name_13311);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_13313),cljs.core.PersistentArrayMap.fromArray([attr_name_13311,cljs.core.get.call(null,m,k)], true));
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
var G__13315 = seq__13291_13305;
var G__13316 = chunk__13292_13306;
var G__13317 = count__13293_13307;
var G__13318 = (i__13294_13308 + 1);
seq__13291_13305 = G__13315;
chunk__13292_13306 = G__13316;
count__13293_13307 = G__13317;
i__13294_13308 = G__13318;
continue;
}
} else
{var temp__4092__auto___13319 = cljs.core.seq.call(null,seq__13291_13305);
if(temp__4092__auto___13319)
{var seq__13291_13320__$1 = temp__4092__auto___13319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13291_13320__$1))
{var c__9640__auto___13321 = cljs.core.chunk_first.call(null,seq__13291_13320__$1);
{
var G__13322 = cljs.core.chunk_rest.call(null,seq__13291_13320__$1);
var G__13323 = c__9640__auto___13321;
var G__13324 = cljs.core.count.call(null,c__9640__auto___13321);
var G__13325 = 0;
seq__13291_13305 = G__13322;
chunk__13292_13306 = G__13323;
count__13293_13307 = G__13324;
i__13294_13308 = G__13325;
continue;
}
} else
{var map__13298_13326 = cljs.core.first.call(null,seq__13291_13320__$1);
var map__13298_13327__$1 = ((cljs.core.seq_QMARK_.call(null,map__13298_13326))?cljs.core.apply.call(null,cljs.core.hash_map,map__13298_13326):map__13298_13326);
var attr_name_13328 = cljs.core.get.call(null,map__13298_13327__$1,"\uFDD0:attr-name");
var type_13329 = cljs.core.get.call(null,map__13298_13327__$1,"\uFDD0:type");
var id_13330 = cljs.core.get.call(null,map__13298_13327__$1,"\uFDD0:id");
var G__13299_13331 = type_13329;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__13299_13331))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_13330),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__13299_13331))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_13330),attr_name_13328);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_13330),cljs.core.PersistentArrayMap.fromArray([attr_name_13328,cljs.core.get.call(null,m,k)], true));
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
var G__13332 = cljs.core.next.call(null,seq__13291_13320__$1);
var G__13333 = null;
var G__13334 = 0;
var G__13335 = 0;
seq__13291_13305 = G__13332;
chunk__13292_13306 = G__13333;
count__13293_13307 = G__13334;
i__13294_13308 = G__13335;
continue;
}
}
} else
{}
}
break;
}
{
var G__13336 = seq__13283;
var G__13337 = chunk__13288;
var G__13338 = count__13289;
var G__13339 = (i__13290 + 1);
seq__13283 = G__13336;
chunk__13288 = G__13337;
count__13289 = G__13338;
i__13290 = G__13339;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13283);
if(temp__4092__auto__)
{var seq__13283__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13283__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__13283__$1);
{
var G__13340 = cljs.core.chunk_rest.call(null,seq__13283__$1);
var G__13341 = c__9640__auto__;
var G__13342 = cljs.core.count.call(null,c__9640__auto__);
var G__13343 = 0;
seq__13283 = G__13340;
chunk__13288 = G__13341;
count__13289 = G__13342;
i__13290 = G__13343;
continue;
}
} else
{var vec__13300 = cljs.core.first.call(null,seq__13283__$1);
var k = cljs.core.nth.call(null,vec__13300,0,null);
var v = cljs.core.nth.call(null,vec__13300,1,null);
var seq__13284_13344 = cljs.core.seq.call(null,v);
var chunk__13285_13345 = null;
var count__13286_13346 = 0;
var i__13287_13347 = 0;
while(true){
if((i__13287_13347 < count__13286_13346))
{var map__13301_13348 = cljs.core._nth.call(null,chunk__13285_13345,i__13287_13347);
var map__13301_13349__$1 = ((cljs.core.seq_QMARK_.call(null,map__13301_13348))?cljs.core.apply.call(null,cljs.core.hash_map,map__13301_13348):map__13301_13348);
var attr_name_13350 = cljs.core.get.call(null,map__13301_13349__$1,"\uFDD0:attr-name");
var type_13351 = cljs.core.get.call(null,map__13301_13349__$1,"\uFDD0:type");
var id_13352 = cljs.core.get.call(null,map__13301_13349__$1,"\uFDD0:id");
var G__13302_13353 = type_13351;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__13302_13353))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_13352),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__13302_13353))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_13352),attr_name_13350);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_13352),cljs.core.PersistentArrayMap.fromArray([attr_name_13350,cljs.core.get.call(null,m,k)], true));
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
var G__13354 = seq__13284_13344;
var G__13355 = chunk__13285_13345;
var G__13356 = count__13286_13346;
var G__13357 = (i__13287_13347 + 1);
seq__13284_13344 = G__13354;
chunk__13285_13345 = G__13355;
count__13286_13346 = G__13356;
i__13287_13347 = G__13357;
continue;
}
} else
{var temp__4092__auto___13358__$1 = cljs.core.seq.call(null,seq__13284_13344);
if(temp__4092__auto___13358__$1)
{var seq__13284_13359__$1 = temp__4092__auto___13358__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13284_13359__$1))
{var c__9640__auto___13360 = cljs.core.chunk_first.call(null,seq__13284_13359__$1);
{
var G__13361 = cljs.core.chunk_rest.call(null,seq__13284_13359__$1);
var G__13362 = c__9640__auto___13360;
var G__13363 = cljs.core.count.call(null,c__9640__auto___13360);
var G__13364 = 0;
seq__13284_13344 = G__13361;
chunk__13285_13345 = G__13362;
count__13286_13346 = G__13363;
i__13287_13347 = G__13364;
continue;
}
} else
{var map__13303_13365 = cljs.core.first.call(null,seq__13284_13359__$1);
var map__13303_13366__$1 = ((cljs.core.seq_QMARK_.call(null,map__13303_13365))?cljs.core.apply.call(null,cljs.core.hash_map,map__13303_13365):map__13303_13365);
var attr_name_13367 = cljs.core.get.call(null,map__13303_13366__$1,"\uFDD0:attr-name");
var type_13368 = cljs.core.get.call(null,map__13303_13366__$1,"\uFDD0:type");
var id_13369 = cljs.core.get.call(null,map__13303_13366__$1,"\uFDD0:id");
var G__13304_13370 = type_13368;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__13304_13370))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_13369),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__13304_13370))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_13369),attr_name_13367);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_13369),cljs.core.PersistentArrayMap.fromArray([attr_name_13367,cljs.core.get.call(null,m,k)], true));
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
var G__13371 = cljs.core.next.call(null,seq__13284_13359__$1);
var G__13372 = null;
var G__13373 = 0;
var G__13374 = 0;
seq__13284_13344 = G__13371;
chunk__13285_13345 = G__13372;
count__13286_13346 = G__13373;
i__13287_13347 = G__13374;
continue;
}
}
} else
{}
}
break;
}
{
var G__13375 = cljs.core.next.call(null,seq__13283__$1);
var G__13376 = null;
var G__13377 = 0;
var G__13378 = 0;
seq__13283 = G__13375;
chunk__13288 = G__13376;
count__13289 = G__13377;
i__13290 = G__13378;
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
var seq__13393 = cljs.core.seq.call(null,m);
var chunk__13394 = null;
var count__13395 = 0;
var i__13396 = 0;
while(true){
if((i__13396 < count__13395))
{var vec__13397 = cljs.core._nth.call(null,chunk__13394,i__13396);
var k = cljs.core.nth.call(null,vec__13397,0,null);
var v = cljs.core.nth.call(null,vec__13397,1,null);
if(cljs.core.every_QMARK_.call(null,((function (seq__13393,chunk__13394,count__13395,i__13396,vec__13397,k,v){
return (function (info){
return cljs.core._EQ_.call(null,"\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13393,chunk__13394,count__13395,i__13396,vec__13397,k,v))
,cljs.core.get.call(null,t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))))].join('')));
}
if(cljs.core.contains_QMARK_.call(null,t,k))
{var seq__13398_13407 = cljs.core.seq.call(null,cljs.core.get.call(null,t,k));
var chunk__13399_13408 = null;
var count__13400_13409 = 0;
var i__13401_13410 = 0;
while(true){
if((i__13401_13410 < count__13400_13409))
{var info_13411 = cljs.core._nth.call(null,chunk__13399_13408,i__13401_13410);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13411)),v);
{
var G__13412 = seq__13398_13407;
var G__13413 = chunk__13399_13408;
var G__13414 = count__13400_13409;
var G__13415 = (i__13401_13410 + 1);
seq__13398_13407 = G__13412;
chunk__13399_13408 = G__13413;
count__13400_13409 = G__13414;
i__13401_13410 = G__13415;
continue;
}
} else
{var temp__4092__auto___13416 = cljs.core.seq.call(null,seq__13398_13407);
if(temp__4092__auto___13416)
{var seq__13398_13417__$1 = temp__4092__auto___13416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13398_13417__$1))
{var c__9640__auto___13418 = cljs.core.chunk_first.call(null,seq__13398_13417__$1);
{
var G__13419 = cljs.core.chunk_rest.call(null,seq__13398_13417__$1);
var G__13420 = c__9640__auto___13418;
var G__13421 = cljs.core.count.call(null,c__9640__auto___13418);
var G__13422 = 0;
seq__13398_13407 = G__13419;
chunk__13399_13408 = G__13420;
count__13400_13409 = G__13421;
i__13401_13410 = G__13422;
continue;
}
} else
{var info_13423 = cljs.core.first.call(null,seq__13398_13417__$1);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13423)),v);
{
var G__13424 = cljs.core.next.call(null,seq__13398_13417__$1);
var G__13425 = null;
var G__13426 = 0;
var G__13427 = 0;
seq__13398_13407 = G__13424;
chunk__13399_13408 = G__13425;
count__13400_13409 = G__13426;
i__13401_13410 = G__13427;
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
var G__13428 = seq__13393;
var G__13429 = chunk__13394;
var G__13430 = count__13395;
var G__13431 = (i__13396 + 1);
seq__13393 = G__13428;
chunk__13394 = G__13429;
count__13395 = G__13430;
i__13396 = G__13431;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13393);
if(temp__4092__auto__)
{var seq__13393__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13393__$1))
{var c__9640__auto__ = cljs.core.chunk_first.call(null,seq__13393__$1);
{
var G__13432 = cljs.core.chunk_rest.call(null,seq__13393__$1);
var G__13433 = c__9640__auto__;
var G__13434 = cljs.core.count.call(null,c__9640__auto__);
var G__13435 = 0;
seq__13393 = G__13432;
chunk__13394 = G__13433;
count__13395 = G__13434;
i__13396 = G__13435;
continue;
}
} else
{var vec__13402 = cljs.core.first.call(null,seq__13393__$1);
var k = cljs.core.nth.call(null,vec__13402,0,null);
var v = cljs.core.nth.call(null,vec__13402,1,null);
if(cljs.core.every_QMARK_.call(null,((function (seq__13393,chunk__13394,count__13395,i__13396,vec__13402,k,v,seq__13393__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.call(null,"\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13393,chunk__13394,count__13395,i__13396,vec__13402,k,v,seq__13393__$1,temp__4092__auto__))
,cljs.core.get.call(null,t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))))].join('')));
}
if(cljs.core.contains_QMARK_.call(null,t,k))
{var seq__13403_13436 = cljs.core.seq.call(null,cljs.core.get.call(null,t,k));
var chunk__13404_13437 = null;
var count__13405_13438 = 0;
var i__13406_13439 = 0;
while(true){
if((i__13406_13439 < count__13405_13438))
{var info_13440 = cljs.core._nth.call(null,chunk__13404_13437,i__13406_13439);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13440)),v);
{
var G__13441 = seq__13403_13436;
var G__13442 = chunk__13404_13437;
var G__13443 = count__13405_13438;
var G__13444 = (i__13406_13439 + 1);
seq__13403_13436 = G__13441;
chunk__13404_13437 = G__13442;
count__13405_13438 = G__13443;
i__13406_13439 = G__13444;
continue;
}
} else
{var temp__4092__auto___13445__$1 = cljs.core.seq.call(null,seq__13403_13436);
if(temp__4092__auto___13445__$1)
{var seq__13403_13446__$1 = temp__4092__auto___13445__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13403_13446__$1))
{var c__9640__auto___13447 = cljs.core.chunk_first.call(null,seq__13403_13446__$1);
{
var G__13448 = cljs.core.chunk_rest.call(null,seq__13403_13446__$1);
var G__13449 = c__9640__auto___13447;
var G__13450 = cljs.core.count.call(null,c__9640__auto___13447);
var G__13451 = 0;
seq__13403_13436 = G__13448;
chunk__13404_13437 = G__13449;
count__13405_13438 = G__13450;
i__13406_13439 = G__13451;
continue;
}
} else
{var info_13452 = cljs.core.first.call(null,seq__13403_13446__$1);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13452)),v);
{
var G__13453 = cljs.core.next.call(null,seq__13403_13446__$1);
var G__13454 = null;
var G__13455 = 0;
var G__13456 = 0;
seq__13403_13436 = G__13453;
chunk__13404_13437 = G__13454;
count__13405_13438 = G__13455;
i__13406_13439 = G__13456;
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
var G__13457 = cljs.core.next.call(null,seq__13393__$1);
var G__13458 = null;
var G__13459 = 0;
var G__13460 = 0;
seq__13393 = G__13457;
chunk__13394 = G__13458;
count__13395 = G__13459;
i__13396 = G__13460;
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
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.update_template.call(null,template,data);
});
io.pedestal.app.render.push.templates.prepend_t = (function prepend_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,domina.prepend_BANG_,template,data);
});
io.pedestal.app.render.push.templates.insert_t = (function insert_t(r,path,data,idx){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,(function (p1__13461_SHARP_,p2__13462_SHARP_){
return domina.insert_BANG_.call(null,p1__13461_SHARP_,p2__13462_SHARP_,idx);
}),template,data);
});
io.pedestal.app.render.push.templates.append_t = (function append_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,domina.append_BANG_,template,data);
});
io.pedestal.app.render.push.templates.update_parent_t = (function update_parent_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,io.pedestal.app.render.push.templates.parent.call(null,path),"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.update_template.call(null,template,data);
});
io.pedestal.app.render.push.templates.add_template = (function add_template(r,path,make_template){
var vec__13464 = make_template.call(null);
var template = cljs.core.nth.call(null,vec__13464,0,null);
var html = cljs.core.nth.call(null,vec__13464,1,null);
io.pedestal.app.render.push.set_data_BANG_.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
