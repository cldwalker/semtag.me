goog.provide('io.pedestal.app.tree');
goog.require('cljs.core');
goog.require('io.pedestal.app.query');
goog.require('io.pedestal.app.util.log');
goog.require('clojure.set');
io.pedestal.app.tree._STAR_gc_deltas_STAR_ = true;
io.pedestal.app.tree.inverse = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("inverse",(function (delta){
return cljs.core.first(delta);
}),"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
})();
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:node-create",(function (p__10453){
var vec__10454 = p__10453;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10454,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10454,1,null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10454,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",path,type], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:node-destroy",(function (p__10455){
var vec__10456 = p__10455;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,1,null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,type], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:value",(function (p__10457){
var vec__10458 = p__10457;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10458,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10458,1,null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10458,2,null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10458,3,null);
return cljs.core.PersistentVector.fromArray([op,path,n,o], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:attr",(function (p__10459){
var vec__10460 = p__10459;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,2,null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,3,null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,4,null);
return cljs.core.PersistentVector.fromArray([op,path,k,n,o], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:transform-enable",(function (p__10461){
var vec__10462 = p__10461;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10462,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10462,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10462,2,null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10462,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",path,transform_name,msgs], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:transform-disable",(function (p__10463){
var vec__10464 = p__10463;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10464,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10464,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10464,2,null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10464,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",path,transform_name,msgs], true);
}));
io.pedestal.app.tree.invert = (function invert(deltas){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.tree.inverse,cljs.core.reverse(deltas));
});
io.pedestal.app.tree.real_path = (function real_path(path){
return cljs.core.vec(cljs.core.interpose("\uFDD0:children",cljs.core.into(cljs.core.PersistentVector.fromArray(["\uFDD0:tree"], true),path)));
});
io.pedestal.app.tree.new_node = (function new_node(children){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:children",children], true);
});
io.pedestal.app.tree.node_type = (function node_type(x){
if(cljs.core.map_QMARK_(x))
{return "\uFDD0:map";
} else
{if(cljs.core.vector_QMARK_(x))
{return "\uFDD0:vector";
} else
{if("\uFDD0:else")
{return "\uFDD0:unknown";
} else
{return null;
}
}
}
});
io.pedestal.app.tree.existing_node_has_same_type_QMARK_ = (function existing_node_has_same_type_QMARK_(tree,r_path,type){
var temp__4090__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,r_path);
if(cljs.core.truth_(temp__4090__auto__))
{var node = temp__4090__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.tree.node_type((new cljs.core.Keyword("\uFDD0:children")).call(null,node)),type);
} else
{return true;
}
});
io.pedestal.app.tree.node_exists_QMARK_ = (function node_exists_QMARK_(tree,path){
var r_path = io.pedestal.app.tree.real_path(path);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,r_path);
});
io.pedestal.app.tree.parent_exists_QMARK_ = (function parent_exists_QMARK_(tree,path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentVector.EMPTY))
{return true;
} else
{var r_path = io.pedestal.app.tree.real_path(cljs.core.vec(cljs.core.butlast(path)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,r_path);
}
});
io.pedestal.app.tree.apply_to_tree_dispatch = (function apply_to_tree_dispatch(_,delta){
if(cljs.core.fn_QMARK_(delta))
{return "\uFDD0:function";
} else
{return cljs.core.first(delta);
}
});
io.pedestal.app.tree.apply_to_tree = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("apply-to-tree",io.pedestal.app.tree.apply_to_tree_dispatch,"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
})();
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:default",(function (tree,_){
return tree;
}));
/**
* Given a tree and a path, ensure that all the parent nodes in the
* tree exist.
*/
io.pedestal.app.tree.ensure_parents_exist = (function ensure_parents_exist(tree,path){
if(cljs.core.truth_(io.pedestal.app.tree.parent_exists_QMARK_(tree,path)))
{return tree;
} else
{return (io.pedestal.app.tree.apply_to_tree.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.tree.apply_to_tree.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.vec(cljs.core.butlast(path)),"\uFDD0:map"], true)) : io.pedestal.app.tree.apply_to_tree.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.vec(cljs.core.butlast(path)),"\uFDD0:map"], true)));
}
});
/**
* Given a tree and a path, create the node at path if it does not
* already exist.
*/
io.pedestal.app.tree.ensure_node_exists = (function ensure_node_exists(tree,path){
if(cljs.core.truth_(io.pedestal.app.tree.node_exists_QMARK_(tree,path)))
{return tree;
} else
{return (io.pedestal.app.tree.apply_to_tree.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.tree.apply_to_tree.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,"\uFDD0:map"], true)) : io.pedestal.app.tree.apply_to_tree.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,"\uFDD0:map"], true)));
}
});
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:node-create",(function (tree,delta){
var vec__10465 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10465,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10465,1,null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10465,2,null);
if(cljs.core.map_QMARK_(type))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.tree.apply_to_tree,tree,(io.pedestal.app.tree.map__GT_deltas.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.tree.map__GT_deltas.cljs$core$IFn$_invoke$arity$2(type,path) : io.pedestal.app.tree.map__GT_deltas.call(null,type,path)));
} else
{var type__$1 = (function (){var or__3943__auto__ = type;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return "\uFDD0:map";
}
})();
var delta__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(delta),2))?cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,type__$1], true):delta);
var r_path = io.pedestal.app.tree.real_path(path);
var children = (function (){var pred__10466 = cljs.core._EQ_;
var expr__10467 = type__$1;
if((pred__10466.cljs$core$IFn$_invoke$arity$2 ? pred__10466.cljs$core$IFn$_invoke$arity$2("\uFDD0:vector",expr__10467) : pred__10466.call(null,"\uFDD0:vector",expr__10467)))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((pred__10466.cljs$core$IFn$_invoke$arity$2 ? pred__10466.cljs$core$IFn$_invoke$arity$2("\uFDD0:map",expr__10467) : pred__10466.call(null,"\uFDD0:map",expr__10467)))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10467)].join('')));
}
}
})();
var tree__$1 = io.pedestal.app.tree.ensure_parents_exist(tree,path);
if(cljs.core.truth_(io.pedestal.app.tree.existing_node_has_same_type_QMARK_(tree__$1,r_path,type__$1)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The node at "),cljs.core.str(path),cljs.core.str(" exists and is not the same type as the requested node.\n"),cljs.core.str("node:\n"),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree__$1,r_path)),cljs.core.str("\n"),cljs.core.str("delta:\n"),cljs.core.str(delta__$1)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"existing-node-has-same-type?","existing-node-has-same-type?",-641989933,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"r-path","r-path",1668183641,null),new cljs.core.Symbol(null,"type","type",-1636955917,null))], 0)))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree__$1,r_path)))
{return tree__$1;
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(tree__$1,r_path,io.pedestal.app.tree.new_node(children)),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,delta__$1);
}
}
}));
io.pedestal.app.tree.remove_index_from_vector = (function remove_index_from_vector(vector,index){
var vec__10470 = cljs.core.split_at(index,vector);
var begin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,0,null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,1,null);
return cljs.core.into(cljs.core.vec(begin),cljs.core.rest(end));
});
io.pedestal.app.tree.child_keys = (function child_keys(children){
var pred__10474 = cljs.core._EQ_;
var expr__10475 = io.pedestal.app.tree.node_type(children);
if((pred__10474.cljs$core$IFn$_invoke$arity$2 ? pred__10474.cljs$core$IFn$_invoke$arity$2("\uFDD0:map",expr__10475) : pred__10474.call(null,"\uFDD0:map",expr__10475)))
{return cljs.core.keys(children);
} else
{if((pred__10474.cljs$core$IFn$_invoke$arity$2 ? pred__10474.cljs$core$IFn$_invoke$arity$2("\uFDD0:vector",expr__10475) : pred__10474.call(null,"\uFDD0:vector",expr__10475)))
{return cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children)));
} else
{if((pred__10474.cljs$core$IFn$_invoke$arity$2 ? pred__10474.cljs$core$IFn$_invoke$arity$2("\uFDD0:else",expr__10475) : pred__10474.call(null,"\uFDD0:else",expr__10475)))
{return cljs.core.PersistentVector.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10475)].join('')));
}
}
}
});
io.pedestal.app.tree.remove_children = (function remove_children(tree,path,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.tree.apply_to_tree,tree,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k)], true);
}),io.pedestal.app.tree.child_keys(children)));
});
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:node-destroy",(function (tree,delta){
var vec__10477 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10477,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10477,1,null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10477,2,null);
var r_path = io.pedestal.app.tree.real_path(path);
var containing_path = cljs.core.butlast(r_path);
var node_to_remove = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,r_path);
var children = (new cljs.core.Keyword("\uFDD0:children")).call(null,node_to_remove);
var type__$1 = (function (){var or__3943__auto__ = type;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return io.pedestal.app.tree.node_type(children);
}
})();
var delta__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(delta),2))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(delta,type__$1):delta);
if(cljs.core.not(node_to_remove))
{return tree;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.tree.node_type(children),type__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The given child node type does not match the actual type: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([delta__$1], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"node-type","node-type",-1220874786,null),new cljs.core.Symbol(null,"children","children",18995128,null)),new cljs.core.Symbol(null,"type","type",-1636955917,null))], 0)))].join('')));
}
var tree__$1 = ((!(cljs.core.empty_QMARK_(children)))?io.pedestal.app.tree.remove_children(tree,path,children):tree);
var tree__$2 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:value")).call(null,node_to_remove))?(io.pedestal.app.tree.apply_to_tree.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.tree.apply_to_tree.cljs$core$IFn$_invoke$arity$2(tree__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:value",path,(new cljs.core.Keyword("\uFDD0:value")).call(null,node_to_remove),null], true)) : io.pedestal.app.tree.apply_to_tree.call(null,tree__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:value",path,(new cljs.core.Keyword("\uFDD0:value")).call(null,node_to_remove),null], true))):tree__$1);
var tree__$3 = (function (){var temp__4090__auto__ = (new cljs.core.Keyword("\uFDD0:transforms")).call(null,node_to_remove);
if(cljs.core.truth_(temp__4090__auto__))
{var ks = temp__4090__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.tree.apply_to_tree,tree__$2,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,temp__4090__auto__,tree__$1,tree__$2){
return (function (p__10478){
var vec__10479 = p__10478;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10479,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10479,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",path,k], true);
});})(ks,temp__4090__auto__,tree__$1,tree__$2))
,ks));
} else
{return tree__$2;
}
})();
var tree__$4 = (function (){var temp__4090__auto__ = (new cljs.core.Keyword("\uFDD0:attrs")).call(null,node_to_remove);
if(cljs.core.truth_(temp__4090__auto__))
{var ks = temp__4090__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.tree.apply_to_tree,tree__$3,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,temp__4090__auto__,tree__$1,tree__$2,tree__$3){
return (function (p__10480){
var vec__10481 = p__10480;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:attr",path,k,v,null], true);
});})(ks,temp__4090__auto__,tree__$1,tree__$2,tree__$3))
,ks));
} else
{return tree__$3;
}
})();
var new_tree = (((containing_path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree__$4,"\uFDD0:tree",null):(function (){var last_path = cljs.core.last(r_path);
var container = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree__$4,containing_path);
if(cljs.core.map_QMARK_(container))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree__$4,containing_path,cljs.core.dissoc,last_path);
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree__$4,containing_path,io.pedestal.app.tree.remove_index_from_vector,last_path);
}
})());
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(new_tree,cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,delta__$1);
}
}));
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:children-exit",(function (tree,delta){
var vec__10482 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,1,null);
var r_path = io.pedestal.app.tree.real_path(path);
var c_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r_path,"\uFDD0:children");
var children = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,c_path);
if(!(cljs.core.empty_QMARK_(children)))
{return io.pedestal.app.tree.remove_children(tree,path,children);
} else
{return tree;
}
}));
io.pedestal.app.tree.same_value_QMARK_ = (function same_value_QMARK_(tree,path,v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,path),v);
});
io.pedestal.app.tree.update_or_remove = (function update_or_remove(tree,path,v){
if((v == null))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
} else
{return cljs.core.assoc_in(tree,path,v);
}
});
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:value",(function (tree,delta){
var vec__10483 = delta;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,1,null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,2,null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,3,null);
var r_path = io.pedestal.app.tree.real_path(path);
var v_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r_path,"\uFDD0:value");
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,v_path);
var vec__10484 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(delta),4))?cljs.core.PersistentVector.fromArray([o,n], true):cljs.core.PersistentVector.fromArray([old_value,o], true));
var o__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,0,null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,1,null);
var tree__$1 = io.pedestal.app.tree.ensure_node_exists(tree,path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o__$1,old_value))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The old value at path "),cljs.core.str(path),cljs.core.str(" is "),cljs.core.str(old_value),cljs.core.str(" but was expected to be "),cljs.core.str(o__$1),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"o","o",-1640531416,null),new cljs.core.Symbol(null,"old-value","old-value",-1203219452,null))], 0)))].join('')));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o__$1,n__$1))
{return tree__$1;
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(io.pedestal.app.tree.update_or_remove(tree__$1,v_path,n__$1),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op,path,o__$1,n__$1], true));
}
}));
io.pedestal.app.tree.remove_empty = (function remove_empty(tree,path){
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,path)))
{return tree;
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
}
});
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:attr",(function (tree,delta){
var vec__10485 = delta;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,2,null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,3,null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,4,null);
var r_path = io.pedestal.app.tree.real_path(path);
var a_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(r_path,"\uFDD0:attrs",cljs.core.array_seq([k], 0));
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,a_path);
var vec__10486 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(delta),5))?cljs.core.PersistentVector.fromArray([o,n], true):cljs.core.PersistentVector.fromArray([old_value,o], true));
var o__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486,0,null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486,1,null);
var tree__$1 = io.pedestal.app.tree.ensure_node_exists(tree,path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o__$1,old_value))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Error:"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([delta], 0))),cljs.core.str("\n"),cljs.core.str("The old attribute value for "),cljs.core.str(k),cljs.core.str(" is "),cljs.core.str(old_value),cljs.core.str(" but was expected to be "),cljs.core.str(o__$1),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"o","o",-1640531416,null),new cljs.core.Symbol(null,"old-value","old-value",-1203219452,null))], 0)))].join('')));
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o__$1,n__$1))
{return tree__$1;
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(io.pedestal.app.tree.remove_empty(io.pedestal.app.tree.update_or_remove(tree__$1,a_path,n__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r_path,"\uFDD0:attrs")),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op,path,k,o__$1,n__$1], true));
}
}));
io.pedestal.app.tree.same_transform_QMARK_ = (function same_transform_QMARK_(tree,path,msgs){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,path),msgs);
});
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:transform-enable",(function (tree,delta){
var vec__10487 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,2,null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,3,null);
var r_path = io.pedestal.app.tree.real_path(path);
var e_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(r_path,"\uFDD0:transforms",cljs.core.array_seq([k], 0));
var tree__$1 = io.pedestal.app.tree.ensure_node_exists(tree,path);
if(cljs.core.truth_((function (){var or__3943__auto__ = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree__$1,e_path));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return io.pedestal.app.tree.same_transform_QMARK_(tree__$1,e_path,msgs);
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("A different transform "),cljs.core.str(k),cljs.core.str(" at path "),cljs.core.str(path),cljs.core.str(" already exists.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",1405049013,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"e-path","e-path",1296004678,null))),cljs.core.list(new cljs.core.Symbol(null,"same-transform?","same-transform?",-319550509,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"e-path","e-path",1296004678,null),new cljs.core.Symbol(null,"msgs","msgs",-1637170485,null)))], 0)))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree__$1,e_path)))
{return tree__$1;
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(tree__$1,e_path,msgs),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,delta);
}
}));
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:transform-disable",(function (tree,delta){
var vec__10488 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10488,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10488,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10488,2,null);
var r_path = io.pedestal.app.tree.real_path(path);
var transforms_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r_path,"\uFDD0:transforms");
var e_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(transforms_path,k);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,e_path)))
{return io.pedestal.app.tree.remove_empty(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(delta,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,e_path))),transforms_path,cljs.core.dissoc,k),transforms_path);
} else
{return tree;
}
}));
io.pedestal.app.tree.node_deltas = (function node_deltas(p__10489,path){
var map__10495 = p__10489;
var map__10495__$1 = ((cljs.core.seq_QMARK_(map__10495))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10495):map__10495);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10495__$1,"\uFDD0:attrs");
var transforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10495__$1,"\uFDD0:transforms");
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10495__$1,"\uFDD0:value");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(value)?cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",path,value], true)], true):null),cljs.core.array_seq([(cljs.core.truth_(attrs)?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10496){
var vec__10497 = p__10496;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10497,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10497,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:attr",path,k,v], true);
}),attrs)):null),(cljs.core.truth_(transforms)?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10498){
var vec__10499 = p__10498;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",path,k,v], true);
}),transforms)):null)], 0));
});
io.pedestal.app.tree.map__GT_deltas = (function map__GT_deltas(tree,path){
var node_keys = cljs.core.PersistentHashSet.fromArray(["\uFDD0:children",null,"\uFDD0:transforms",null,"\uFDD0:attrs",null,"\uFDD0:value",null], true);
var node_QMARK_ = (function (){var and__3941__auto__ = cljs.core.map_QMARK_(tree);
if(and__3941__auto__)
{return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(tree)),node_keys)));
} else
{return and__3941__auto__;
}
})();
var children = (cljs.core.truth_(node_QMARK_)?(function (){var or__3943__auto__ = (new cljs.core.Keyword("\uFDD0:children")).call(null,tree);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})():tree);
var children_type = io.pedestal.app.tree.node_type(children);
var node_deltas = (cljs.core.truth_(node_QMARK_)?io.pedestal.app.tree.node_deltas(tree,path):null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,children_type], true)], true),node_deltas,cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (k){
return map__GT_deltas(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,(cljs.core.truth_(node_QMARK_)?cljs.core.PersistentVector.fromArray(["\uFDD0:children",k], true):cljs.core.PersistentVector.fromArray([k], true))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k));
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(children_type,"\uFDD0:map"))?cljs.core.keys(children):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(children_type,"\uFDD0:vector"))?cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children)):(("\uFDD0:else")?cljs.core.PersistentVector.EMPTY:null))))], 0));
});
io.pedestal.app.tree.expand_map = (function expand_map(delta){
if(cljs.core.map_QMARK_(delta))
{return io.pedestal.app.tree.map__GT_deltas(delta,cljs.core.PersistentVector.EMPTY);
} else
{return cljs.core.PersistentVector.fromArray([delta], true);
}
});
io.pedestal.app.tree.expand_maps = (function expand_maps(deltas){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.tree.expand_map,deltas);
});
/**
* Update the tree and return the actual deltas which were used to
* update the tree. A single delta can be expanded into multiple
* deltas.
*/
io.pedestal.app.tree.update_tree = (function update_tree(tree,deltas){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.tree.apply_to_tree,tree,deltas);
});
io.pedestal.app.tree.apply_to_tree.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.apply_to_tree,"\uFDD0:function",(function (tree,f){
var deltas = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(tree) : f.call(null,tree));
return io.pedestal.app.tree.update_tree(tree,deltas);
}));
io.pedestal.app.tree.next_eid_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
io.pedestal.app.tree.next_eid = (function next_eid(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.tree.next_eid_atom,cljs.core.inc);
});
io.pedestal.app.tree.transform__GT_entities = (function transform__GT_entities(transform_name,msgs,node_id){
var transform_id = io.pedestal.app.tree.next_eid();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",transform_id,"\uFDD0:t/transform-name",transform_name,"\uFDD0:t/node",node_id,"\uFDD0:t/type","\uFDD0:t/transform"], true)], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",io.pedestal.app.tree.next_eid(),"\uFDD0:t/transform",transform_id,"\uFDD0:t/type","\uFDD0:t/message"], true)], 0));
}),msgs));
});
io.pedestal.app.tree.transforms__GT_entities = (function transforms__GT_entities(transforms,node_id){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__10502){
var vec__10503 = p__10502;
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10503,0,null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10503,1,null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,io.pedestal.app.tree.transform__GT_entities(transform_name,msgs,node_id));
}),cljs.core.PersistentVector.EMPTY,transforms);
});
io.pedestal.app.tree.attrs__GT_entities = (function attrs__GT_entities(attrs,node_id){
if(!(cljs.core.empty_QMARK_(attrs)))
{return cljs.core.PersistentVector.fromArray([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",io.pedestal.app.tree.next_eid(),"\uFDD0:t/node",node_id,"\uFDD0:t/type","\uFDD0:t/attrs"], true)], 0))], true);
} else
{return null;
}
});
io.pedestal.app.tree.node__GT_entities = (function node__GT_entities(node,path,parent_id,node_id){
var map__10505 = node;
var map__10505__$1 = ((cljs.core.seq_QMARK_(map__10505))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10505):map__10505);
var transforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10505__$1,"\uFDD0:transforms");
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10505__$1,"\uFDD0:attrs");
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10505__$1,"\uFDD0:value");
var node_e = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",node_id,"\uFDD0:t/path",path,"\uFDD0:t/type","\uFDD0:t/node","\uFDD0:t/segment",cljs.core.last(path)], true);
var node_e__$1 = (cljs.core.truth_(parent_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node_e,"\uFDD0:t/parent",parent_id):node_e);
var node_e__$2 = (cljs.core.truth_(value)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node_e__$1,"\uFDD0:t/value",value):node_e__$1);
var attrs_es = io.pedestal.app.tree.attrs__GT_entities(attrs,node_id);
var transform_es = io.pedestal.app.tree.transforms__GT_entities(transforms,node_id);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray([node_e__$2], true),attrs_es,cljs.core.array_seq([transform_es], 0));
});
io.pedestal.app.tree.tree__GT_entities = (function tree__GT_entities(tree,path,parent_id){
var map__10507 = tree;
var map__10507__$1 = ((cljs.core.seq_QMARK_(map__10507))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10507):map__10507);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10507__$1,"\uFDD0:children");
var ks = io.pedestal.app.tree.child_keys(children);
var node_id = io.pedestal.app.tree.next_eid();
var node_tuples = io.pedestal.app.tree.node__GT_entities(tree,path,parent_id,node_id);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(node_tuples,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (k){
return tree__GT_entities(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.PersistentVector.fromArray(["\uFDD0:children",k], true)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),node_id);
}),ks));
});
io.pedestal.app.tree.entity__GT_tuples = (function entity__GT_tuples(e){
var id = (new cljs.core.Keyword("\uFDD0:t/id")).call(null,e);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10510){
var vec__10511 = p__10510;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10511,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10511,1,null);
return cljs.core.PersistentVector.fromArray([id,k,v], true);
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(e,"\uFDD0:t/id"));
});
io.pedestal.app.tree.entities__GT_tuples = (function entities__GT_tuples(entities){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.tree.entity__GT_tuples,entities);
});
io.pedestal.app.tree.tree__GT_tuples = (function tree__GT_tuples(tree){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:tree")).call(null,tree)))
{return io.pedestal.app.tree.entities__GT_tuples(io.pedestal.app.tree.tree__GT_entities((new cljs.core.Keyword("\uFDD0:tree")).call(null,tree),cljs.core.PersistentVector.EMPTY,null));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
goog.provide('io.pedestal.app.tree.Tree');

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
io.pedestal.app.tree.Tree = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app.tree.Tree.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9469__auto__){
var self__ = this;
var h__9341__auto__ = self__.__hash;
if(!((h__9341__auto__ == null)))
{return h__9341__auto__;
} else
{var h__9341__auto____$1 = cljs.core.hash_imap(this__9469__auto__);
self__.__hash = h__9341__auto____$1;
return h__9341__auto____$1;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9474__auto__,k__9475__auto__){
var self__ = this;
return this__9474__auto__.cljs$core$ILookup$_lookup$arity$3(this__9474__auto__,k__9475__auto__,null);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9476__auto__,k10513,else__9477__auto__){
var self__ = this;
if("\uFDD0:else")
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10513,else__9477__auto__);
} else
{return null;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9481__auto__,k__9482__auto__,G__10512){
var self__ = this;
var pred__10515 = cljs.core.identical_QMARK_;
var expr__10516 = k__9482__auto__;
return (new io.pedestal.app.tree.Tree(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9482__auto__,G__10512),null));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9488__auto__,writer__9489__auto__,opts__9490__auto__){
var self__ = this;
var pr_pair__9491__auto__ = (function (keyval__9492__auto__){
return cljs.core.pr_sequential_writer(writer__9489__auto__,cljs.core.pr_writer,""," ","",opts__9490__auto__,keyval__9492__auto__);
});
return cljs.core.pr_sequential_writer(writer__9489__auto__,pr_pair__9491__auto__,"#io.pedestal.app.tree.Tree{",", ","}",opts__9490__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9479__auto__,entry__9480__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_(entry__9480__auto__))
{return this__9479__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9479__auto__,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9480__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9480__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9479__auto__,entry__9480__auto__);
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9486__auto__){
var self__ = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9478__auto__){
var self__ = this;
return (0 + cljs.core.count(self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9470__auto__,other__9471__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__9471__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__9470__auto__.constructor === other__9471__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map(this__9470__auto__,other__9471__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9473__auto__,G__10512){
var self__ = this;
return (new io.pedestal.app.tree.Tree(G__10512,self__.__extmap,self__.__hash));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9472__auto__){
var self__ = this;
return self__.__meta;
});
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$ = true;
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$tuple_seq$arity$1 = (function (this$){
var self__ = this;
return io.pedestal.app.tree.tree__GT_tuples(this$);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9483__auto__,k__9484__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9484__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__9483__auto__),self__.__meta),k__9484__auto__);
} else
{return (new io.pedestal.app.tree.Tree(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9484__auto__)),null));
}
});
io.pedestal.app.tree.Tree.cljs$lang$type = true;
io.pedestal.app.tree.Tree.cljs$lang$ctorPrSeq = (function (this__9508__auto__){
return cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["io.pedestal.app.tree/Tree"], 0));
});
io.pedestal.app.tree.Tree.cljs$lang$ctorPrWriter = (function (this__9508__auto__,writer__9509__auto__){
return cljs.core._write(writer__9509__auto__,"io.pedestal.app.tree/Tree");
});
io.pedestal.app.tree.__GT_Tree = (function __GT_Tree(){
return (new io.pedestal.app.tree.Tree());
});
io.pedestal.app.tree.map__GT_Tree = (function map__GT_Tree(G__10514){
return (new io.pedestal.app.tree.Tree(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__10514)));
});
io.pedestal.app.tree.delete_deltas = (function delete_deltas(t,deltas){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,k){
if((k < t))
{io.pedestal.app.util.log.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:gc",[cljs.core.str("GC: Deleting "),cljs.core.str(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(d,k))),cljs.core.str(" deltas at time "),cljs.core.str(k)].join('')], 0));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(d,k);
} else
{return d;
}
}),deltas,cljs.core.keys(deltas));
});
io.pedestal.app.tree.gc = (function gc(state){
if(cljs.core.truth_(io.pedestal.app.tree._STAR_gc_deltas_STAR_))
{io.pedestal.app.util.log.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:gc","GC: Running..."], 0));
var t = (new cljs.core.Keyword("\uFDD0:t")).call(null,state);
var delete_t = (t - 2);
io.pedestal.app.util.log.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:gc",[cljs.core.str("GC: Deleting t < "),cljs.core.str(delete_t)].join('')], 0));
io.pedestal.app.util.log.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:gc",[cljs.core.str("GC: There are currently "),cljs.core.str(cljs.core.count(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals((new cljs.core.Keyword("\uFDD0:deltas")).call(null,state))))),cljs.core.str(" deltas.")].join('')], 0));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentVector.fromArray(["\uFDD0:deltas"], true),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.tree.delete_deltas,delete_t));
} else
{io.pedestal.app.util.log.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:gc",[cljs.core.str("GC is turned off. There are "),cljs.core.str(cljs.core.count(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals((new cljs.core.Keyword("\uFDD0:deltas")).call(null,state))))),cljs.core.str(" accumulated deltas")].join('')], 0));
return state;
}
});
/**
* Given an old tree and a sequence of deltas, return an updated tree.
* The deltas can be a sequence of tuples or a map which can be
* expanded into a sequence of tuples.
* 
* The keyword :commit can be inserted into the stream of deltas to force
* a commit at a specific point.
*/
io.pedestal.app.tree.apply_deltas = (function apply_deltas(old,deltas){
var map__10520 = old;
var map__10520__$1 = ((cljs.core.seq_QMARK_(map__10520))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10520):map__10520);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10520__$1,"\uFDD0:t");
var seq = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10520__$1,"\uFDD0:seq");
var deltas__$1 = io.pedestal.app.tree.expand_maps(deltas);
var map__10521 = io.pedestal.app.tree.update_tree(old,deltas__$1);
var map__10521__$1 = ((cljs.core.seq_QMARK_(map__10521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10521):map__10521);
var this_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10521__$1,"\uFDD0:this-tx");
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10521__$1,"\uFDD0:tree");
var deltas__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__10520,map__10520__$1,t,seq,deltas__$1,map__10521,map__10521__$1,this_tx,tree){
return (function (d,s){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:delta",d,"\uFDD0:t",t,"\uFDD0:seq",s], true);
});})(map__10520,map__10520__$1,t,seq,deltas__$1,map__10521,map__10521__$1,this_tx,tree))
,this_tx,cljs.core.iterate(cljs.core.inc,seq));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(old,cljs.core.PersistentVector.fromArray(["\uFDD0:deltas",t], true),deltas__$2),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.fromArray(["\uFDD0:seq"], true),cljs.core._PLUS_,cljs.core.count(deltas__$2)),cljs.core.PersistentVector.fromArray(["\uFDD0:tree"], true),tree),cljs.core.PersistentVector.fromArray(["\uFDD0:t"], true),cljs.core.inc);
});
io.pedestal.app.tree.value = (function value(tree,path){
var r_path = io.pedestal.app.tree.real_path(path);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r_path,"\uFDD0:value"));
});
io.pedestal.app.tree.new_app_model = io.pedestal.app.tree.map__GT_Tree(cljs.core.PersistentArrayMap.fromArray(["\uFDD0:deltas",cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:this-tx",cljs.core.PersistentVector.EMPTY,"\uFDD0:tree",null,"\uFDD0:seq",0,"\uFDD0:t",0], true));
/**
* Get the current tree time value.
*/
io.pedestal.app.tree.t = (function t(tree){
return (new cljs.core.Keyword("\uFDD0:t")).call(null,tree);
});
/**
* Get all deltas since time t, inclusive.
*/
io.pedestal.app.tree.since_t = (function since_t(tree,t){
var ts = cljs.core.range.cljs$core$IFn$_invoke$arity$2(t,(new cljs.core.Keyword("\uFDD0:t")).call(null,tree));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:delta",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__10522_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:deltas")).call(null,tree),p1__10522_SHARP_);
}),ts)));
});
