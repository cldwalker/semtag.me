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
var seq__13744 = cljs.core.seq(t);
var chunk__13749 = null;
var count__13750 = 0;
var i__13751 = 0;
while(true){
if((i__13751 < count__13750))
{var vec__13756 = chunk__13749.cljs$core$IIndexed$_nth$arity$2(chunk__13749,i__13751);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13756,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13756,1,null);
var seq__13752_13766 = cljs.core.seq(v);
var chunk__13753_13767 = null;
var count__13754_13768 = 0;
var i__13755_13769 = 0;
while(true){
if((i__13755_13769 < count__13754_13768))
{var map__13757_13770 = chunk__13753_13767.cljs$core$IIndexed$_nth$arity$2(chunk__13753_13767,i__13755_13769);
var map__13757_13771__$1 = ((cljs.core.seq_QMARK_(map__13757_13770))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13757_13770):map__13757_13770);
var attr_name_13772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13757_13771__$1,"\uFDD0:attr-name");
var type_13773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13757_13771__$1,"\uFDD0:type");
var id_13774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13757_13771__$1,"\uFDD0:id");
var G__13758_13775 = type_13773;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13758_13775))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13774),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13758_13775))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13774),attr_name_13772);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13774),cljs.core.PersistentArrayMap.fromArray([attr_name_13772,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13776 = seq__13752_13766;
var G__13777 = chunk__13753_13767;
var G__13778 = count__13754_13768;
var G__13779 = (i__13755_13769 + 1);
seq__13752_13766 = G__13776;
chunk__13753_13767 = G__13777;
count__13754_13768 = G__13778;
i__13755_13769 = G__13779;
continue;
}
} else
{var temp__4092__auto___13780 = cljs.core.seq(seq__13752_13766);
if(temp__4092__auto___13780)
{var seq__13752_13781__$1 = temp__4092__auto___13780;
if(cljs.core.chunked_seq_QMARK_(seq__13752_13781__$1))
{var c__9646__auto___13782 = cljs.core.chunk_first(seq__13752_13781__$1);
{
var G__13783 = cljs.core.chunk_rest(seq__13752_13781__$1);
var G__13784 = c__9646__auto___13782;
var G__13785 = cljs.core.count(c__9646__auto___13782);
var G__13786 = 0;
seq__13752_13766 = G__13783;
chunk__13753_13767 = G__13784;
count__13754_13768 = G__13785;
i__13755_13769 = G__13786;
continue;
}
} else
{var map__13759_13787 = cljs.core.first(seq__13752_13781__$1);
var map__13759_13788__$1 = ((cljs.core.seq_QMARK_(map__13759_13787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13759_13787):map__13759_13787);
var attr_name_13789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13759_13788__$1,"\uFDD0:attr-name");
var type_13790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13759_13788__$1,"\uFDD0:type");
var id_13791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13759_13788__$1,"\uFDD0:id");
var G__13760_13792 = type_13790;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13760_13792))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13791),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13760_13792))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13791),attr_name_13789);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13791),cljs.core.PersistentArrayMap.fromArray([attr_name_13789,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13793 = cljs.core.next(seq__13752_13781__$1);
var G__13794 = null;
var G__13795 = 0;
var G__13796 = 0;
seq__13752_13766 = G__13793;
chunk__13753_13767 = G__13794;
count__13754_13768 = G__13795;
i__13755_13769 = G__13796;
continue;
}
}
} else
{}
}
break;
}
{
var G__13797 = seq__13744;
var G__13798 = chunk__13749;
var G__13799 = count__13750;
var G__13800 = (i__13751 + 1);
seq__13744 = G__13797;
chunk__13749 = G__13798;
count__13750 = G__13799;
i__13751 = G__13800;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13744);
if(temp__4092__auto__)
{var seq__13744__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13744__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13744__$1);
{
var G__13801 = cljs.core.chunk_rest(seq__13744__$1);
var G__13802 = c__9646__auto__;
var G__13803 = cljs.core.count(c__9646__auto__);
var G__13804 = 0;
seq__13744 = G__13801;
chunk__13749 = G__13802;
count__13750 = G__13803;
i__13751 = G__13804;
continue;
}
} else
{var vec__13761 = cljs.core.first(seq__13744__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13761,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13761,1,null);
var seq__13745_13805 = cljs.core.seq(v);
var chunk__13746_13806 = null;
var count__13747_13807 = 0;
var i__13748_13808 = 0;
while(true){
if((i__13748_13808 < count__13747_13807))
{var map__13762_13809 = chunk__13746_13806.cljs$core$IIndexed$_nth$arity$2(chunk__13746_13806,i__13748_13808);
var map__13762_13810__$1 = ((cljs.core.seq_QMARK_(map__13762_13809))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13762_13809):map__13762_13809);
var attr_name_13811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13762_13810__$1,"\uFDD0:attr-name");
var type_13812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13762_13810__$1,"\uFDD0:type");
var id_13813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13762_13810__$1,"\uFDD0:id");
var G__13763_13814 = type_13812;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13763_13814))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13813),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13763_13814))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13813),attr_name_13811);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13813),cljs.core.PersistentArrayMap.fromArray([attr_name_13811,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13815 = seq__13745_13805;
var G__13816 = chunk__13746_13806;
var G__13817 = count__13747_13807;
var G__13818 = (i__13748_13808 + 1);
seq__13745_13805 = G__13815;
chunk__13746_13806 = G__13816;
count__13747_13807 = G__13817;
i__13748_13808 = G__13818;
continue;
}
} else
{var temp__4092__auto___13819__$1 = cljs.core.seq(seq__13745_13805);
if(temp__4092__auto___13819__$1)
{var seq__13745_13820__$1 = temp__4092__auto___13819__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13745_13820__$1))
{var c__9646__auto___13821 = cljs.core.chunk_first(seq__13745_13820__$1);
{
var G__13822 = cljs.core.chunk_rest(seq__13745_13820__$1);
var G__13823 = c__9646__auto___13821;
var G__13824 = cljs.core.count(c__9646__auto___13821);
var G__13825 = 0;
seq__13745_13805 = G__13822;
chunk__13746_13806 = G__13823;
count__13747_13807 = G__13824;
i__13748_13808 = G__13825;
continue;
}
} else
{var map__13764_13826 = cljs.core.first(seq__13745_13820__$1);
var map__13764_13827__$1 = ((cljs.core.seq_QMARK_(map__13764_13826))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13764_13826):map__13764_13826);
var attr_name_13828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13764_13827__$1,"\uFDD0:attr-name");
var type_13829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13764_13827__$1,"\uFDD0:type");
var id_13830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13764_13827__$1,"\uFDD0:id");
var G__13765_13831 = type_13829;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",G__13765_13831))
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_html_BANG_(domina.by_id(id_13830),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k));
} else
{}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:attr",G__13765_13831))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_(m,k);
if(and__3941__auto__)
{return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_(domina.by_id(id_13830),attr_name_13828);
} else
{if(cljs.core.contains_QMARK_(m,k))
{domina.set_attrs_BANG_(domina.by_id(id_13830),cljs.core.PersistentArrayMap.fromArray([attr_name_13828,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)], true));
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
var G__13832 = cljs.core.next(seq__13745_13820__$1);
var G__13833 = null;
var G__13834 = 0;
var G__13835 = 0;
seq__13745_13805 = G__13832;
chunk__13746_13806 = G__13833;
count__13747_13807 = G__13834;
i__13748_13808 = G__13835;
continue;
}
}
} else
{}
}
break;
}
{
var G__13836 = cljs.core.next(seq__13744__$1);
var G__13837 = null;
var G__13838 = 0;
var G__13839 = 0;
seq__13744 = G__13836;
chunk__13749 = G__13837;
count__13750 = G__13838;
i__13751 = G__13839;
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
var seq__13854 = cljs.core.seq(m);
var chunk__13855 = null;
var count__13856 = 0;
var i__13857 = 0;
while(true){
if((i__13857 < count__13856))
{var vec__13858 = chunk__13855.cljs$core$IIndexed$_nth$arity$2(chunk__13855,i__13857);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13858,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13858,1,null);
if(cljs.core.every_QMARK_(((function (seq__13854,chunk__13855,count__13856,i__13857,vec__13858,k,v){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13854,chunk__13855,count__13856,i__13857,vec__13858,k,v))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__13859_13868 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__13860_13869 = null;
var count__13861_13870 = 0;
var i__13862_13871 = 0;
while(true){
if((i__13862_13871 < count__13861_13870))
{var info_13872 = chunk__13860_13869.cljs$core$IIndexed$_nth$arity$2(chunk__13860_13869,i__13862_13871);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13872)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13872)),v));
{
var G__13873 = seq__13859_13868;
var G__13874 = chunk__13860_13869;
var G__13875 = count__13861_13870;
var G__13876 = (i__13862_13871 + 1);
seq__13859_13868 = G__13873;
chunk__13860_13869 = G__13874;
count__13861_13870 = G__13875;
i__13862_13871 = G__13876;
continue;
}
} else
{var temp__4092__auto___13877 = cljs.core.seq(seq__13859_13868);
if(temp__4092__auto___13877)
{var seq__13859_13878__$1 = temp__4092__auto___13877;
if(cljs.core.chunked_seq_QMARK_(seq__13859_13878__$1))
{var c__9646__auto___13879 = cljs.core.chunk_first(seq__13859_13878__$1);
{
var G__13880 = cljs.core.chunk_rest(seq__13859_13878__$1);
var G__13881 = c__9646__auto___13879;
var G__13882 = cljs.core.count(c__9646__auto___13879);
var G__13883 = 0;
seq__13859_13868 = G__13880;
chunk__13860_13869 = G__13881;
count__13861_13870 = G__13882;
i__13862_13871 = G__13883;
continue;
}
} else
{var info_13884 = cljs.core.first(seq__13859_13878__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13884)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13884)),v));
{
var G__13885 = cljs.core.next(seq__13859_13878__$1);
var G__13886 = null;
var G__13887 = 0;
var G__13888 = 0;
seq__13859_13868 = G__13885;
chunk__13860_13869 = G__13886;
count__13861_13870 = G__13887;
i__13862_13871 = G__13888;
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
var G__13889 = seq__13854;
var G__13890 = chunk__13855;
var G__13891 = count__13856;
var G__13892 = (i__13857 + 1);
seq__13854 = G__13889;
chunk__13855 = G__13890;
count__13856 = G__13891;
i__13857 = G__13892;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13854);
if(temp__4092__auto__)
{var seq__13854__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13854__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13854__$1);
{
var G__13893 = cljs.core.chunk_rest(seq__13854__$1);
var G__13894 = c__9646__auto__;
var G__13895 = cljs.core.count(c__9646__auto__);
var G__13896 = 0;
seq__13854 = G__13893;
chunk__13855 = G__13894;
count__13856 = G__13895;
i__13857 = G__13896;
continue;
}
} else
{var vec__13863 = cljs.core.first(seq__13854__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13863,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13863,1,null);
if(cljs.core.every_QMARK_(((function (seq__13854,chunk__13855,count__13856,i__13857,vec__13863,k,v,seq__13854__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13854,chunk__13855,count__13856,i__13857,vec__13863,k,v,seq__13854__$1,temp__4092__auto__))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], 0)))].join('')));
}
if(cljs.core.contains_QMARK_(t,k))
{var seq__13864_13897 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,k));
var chunk__13865_13898 = null;
var count__13866_13899 = 0;
var i__13867_13900 = 0;
while(true){
if((i__13867_13900 < count__13866_13899))
{var info_13901 = chunk__13865_13898.cljs$core$IIndexed$_nth$arity$2(chunk__13865_13898,i__13867_13900);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13901)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13901)),v));
{
var G__13902 = seq__13864_13897;
var G__13903 = chunk__13865_13898;
var G__13904 = count__13866_13899;
var G__13905 = (i__13867_13900 + 1);
seq__13864_13897 = G__13902;
chunk__13865_13898 = G__13903;
count__13866_13899 = G__13904;
i__13867_13900 = G__13905;
continue;
}
} else
{var temp__4092__auto___13906__$1 = cljs.core.seq(seq__13864_13897);
if(temp__4092__auto___13906__$1)
{var seq__13864_13907__$1 = temp__4092__auto___13906__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13864_13907__$1))
{var c__9646__auto___13908 = cljs.core.chunk_first(seq__13864_13907__$1);
{
var G__13909 = cljs.core.chunk_rest(seq__13864_13907__$1);
var G__13910 = c__9646__auto___13908;
var G__13911 = cljs.core.count(c__9646__auto___13908);
var G__13912 = 0;
seq__13864_13897 = G__13909;
chunk__13865_13898 = G__13910;
count__13866_13899 = G__13911;
i__13867_13900 = G__13912;
continue;
}
} else
{var info_13913 = cljs.core.first(seq__13864_13907__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13913)),v) : f.call(null,domina.by_id((new cljs.core.Keyword("\uFDD0:id")).call(null,info_13913)),v));
{
var G__13914 = cljs.core.next(seq__13864_13907__$1);
var G__13915 = null;
var G__13916 = 0;
var G__13917 = 0;
seq__13864_13897 = G__13914;
chunk__13865_13898 = G__13915;
count__13866_13899 = G__13916;
i__13867_13900 = G__13917;
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
var G__13918 = cljs.core.next(seq__13854__$1);
var G__13919 = null;
var G__13920 = 0;
var G__13921 = 0;
seq__13854 = G__13918;
chunk__13855 = G__13919;
count__13856 = G__13920;
i__13857 = G__13921;
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
return io.pedestal.app.render.push.templates.add_in_template((function (p1__13922_SHARP_,p2__13923_SHARP_){
return domina.insert_BANG_(p1__13922_SHARP_,p2__13923_SHARP_,idx);
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
var vec__13925 = (make_template.cljs$core$IFn$_invoke$arity$0 ? make_template.cljs$core$IFn$_invoke$arity$0() : make_template.call(null));
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13925,0,null);
var html = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13925,1,null);
io.pedestal.app.render.push.set_data_BANG_(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
