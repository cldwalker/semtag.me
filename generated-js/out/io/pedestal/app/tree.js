goog.provide('io.pedestal.app.tree');
goog.require('cljs.core');
goog.require('io.pedestal.app.query');
goog.require('io.pedestal.app.util.log');
goog.require('clojure.set');
io.pedestal.app.tree._STAR_gc_deltas_STAR_ = true;
io.pedestal.app.tree.inverse = (function (){var method_table__9983__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9984__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9985__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9986__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("inverse",(function (delta){
return cljs.core.first(delta);
}),"\uFDD0:default",hierarchy__9987__auto__,method_table__9983__auto__,prefer_table__9984__auto__,method_cache__9985__auto__,cached_hierarchy__9986__auto__));
})();
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:node-create",(function (p__154187){
var vec__154188 = p__154187;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154188,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154188,1,null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154188,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",path,type], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:node-destroy",(function (p__154189){
var vec__154190 = p__154189;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154190,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154190,1,null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154190,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,type], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:value",(function (p__154191){
var vec__154192 = p__154191;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154192,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154192,1,null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154192,2,null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154192,3,null);
return cljs.core.PersistentVector.fromArray([op,path,n,o], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:attr",(function (p__154193){
var vec__154194 = p__154193;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154194,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154194,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154194,2,null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154194,3,null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154194,4,null);
return cljs.core.PersistentVector.fromArray([op,path,k,n,o], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:transform-enable",(function (p__154195){
var vec__154196 = p__154195;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154196,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154196,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154196,2,null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154196,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",path,transform_name,msgs], true);
}));
io.pedestal.app.tree.inverse.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.tree.inverse,"\uFDD0:transform-disable",(function (p__154197){
var vec__154198 = p__154197;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154198,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154198,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154198,2,null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154198,3,null);
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
io.pedestal.app.tree.apply_to_tree = (function (){var method_table__9983__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9984__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9985__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9986__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("apply-to-tree",io.pedestal.app.tree.apply_to_tree_dispatch,"\uFDD0:default",hierarchy__9987__auto__,method_table__9983__auto__,prefer_table__9984__auto__,method_cache__9985__auto__,cached_hierarchy__9986__auto__));
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
var vec__154199 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154199,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154199,1,null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154199,2,null);
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
var children = (function (){var pred__154200 = cljs.core._EQ_;
var expr__154201 = type__$1;
if((pred__154200.cljs$core$IFn$_invoke$arity$2 ? pred__154200.cljs$core$IFn$_invoke$arity$2("\uFDD0:vector",expr__154201) : pred__154200.call(null,"\uFDD0:vector",expr__154201)))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((pred__154200.cljs$core$IFn$_invoke$arity$2 ? pred__154200.cljs$core$IFn$_invoke$arity$2("\uFDD0:map",expr__154201) : pred__154200.call(null,"\uFDD0:map",expr__154201)))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__154201)].join('')));
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
var vec__154204 = cljs.core.split_at(index,vector);
var begin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154204,0,null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154204,1,null);
return cljs.core.into(cljs.core.vec(begin),cljs.core.rest(end));
});
io.pedestal.app.tree.child_keys = (function child_keys(children){
var pred__154208 = cljs.core._EQ_;
var expr__154209 = io.pedestal.app.tree.node_type(children);
if((pred__154208.cljs$core$IFn$_invoke$arity$2 ? pred__154208.cljs$core$IFn$_invoke$arity$2("\uFDD0:map",expr__154209) : pred__154208.call(null,"\uFDD0:map",expr__154209)))
{return cljs.core.keys(children);
} else
{if((pred__154208.cljs$core$IFn$_invoke$arity$2 ? pred__154208.cljs$core$IFn$_invoke$arity$2("\uFDD0:vector",expr__154209) : pred__154208.call(null,"\uFDD0:vector",expr__154209)))
{return cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children)));
} else
{if((pred__154208.cljs$core$IFn$_invoke$arity$2 ? pred__154208.cljs$core$IFn$_invoke$arity$2("\uFDD0:else",expr__154209) : pred__154208.call(null,"\uFDD0:else",expr__154209)))
{return cljs.core.PersistentVector.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__154209)].join('')));
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
var vec__154211 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154211,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154211,1,null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154211,2,null);
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
return (function (p__154212){
var vec__154213 = p__154212;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154213,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154213,1,null);
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
return (function (p__154214){
var vec__154215 = p__154214;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154215,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154215,1,null);
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
var vec__154216 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154216,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154216,1,null);
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
var vec__154217 = delta;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154217,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154217,1,null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154217,2,null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154217,3,null);
var r_path = io.pedestal.app.tree.real_path(path);
var v_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r_path,"\uFDD0:value");
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,v_path);
var vec__154218 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(delta),4))?cljs.core.PersistentVector.fromArray([o,n], true):cljs.core.PersistentVector.fromArray([old_value,o], true));
var o__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154218,0,null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154218,1,null);
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
var vec__154219 = delta;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154219,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154219,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154219,2,null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154219,3,null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154219,4,null);
var r_path = io.pedestal.app.tree.real_path(path);
var a_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(r_path,"\uFDD0:attrs",cljs.core.array_seq([k], 0));
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,a_path);
var vec__154220 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(delta),5))?cljs.core.PersistentVector.fromArray([o,n], true):cljs.core.PersistentVector.fromArray([old_value,o], true));
var o__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154220,0,null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154220,1,null);
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
var vec__154221 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154221,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154221,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154221,2,null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154221,3,null);
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
var vec__154222 = delta;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154222,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154222,1,null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154222,2,null);
var r_path = io.pedestal.app.tree.real_path(path);
var transforms_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r_path,"\uFDD0:transforms");
var e_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(transforms_path,k);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,e_path)))
{return io.pedestal.app.tree.remove_empty(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(delta,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,e_path))),transforms_path,cljs.core.dissoc,k),transforms_path);
} else
{return tree;
}
}));
io.pedestal.app.tree.node_deltas = (function node_deltas(p__154223,path){
var map__154229 = p__154223;
var map__154229__$1 = ((cljs.core.seq_QMARK_(map__154229))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154229):map__154229);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154229__$1,"\uFDD0:attrs");
var transforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154229__$1,"\uFDD0:transforms");
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154229__$1,"\uFDD0:value");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(value)?cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",path,value], true)], true):null),cljs.core.array_seq([(cljs.core.truth_(attrs)?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__154230){
var vec__154231 = p__154230;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154231,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154231,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:attr",path,k,v], true);
}),attrs)):null),(cljs.core.truth_(transforms)?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__154232){
var vec__154233 = p__154232;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154233,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154233,1,null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__154236){
var vec__154237 = p__154236;
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154237,0,null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154237,1,null);
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
var map__154239 = node;
var map__154239__$1 = ((cljs.core.seq_QMARK_(map__154239))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154239):map__154239);
var transforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154239__$1,"\uFDD0:transforms");
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154239__$1,"\uFDD0:attrs");
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154239__$1,"\uFDD0:value");
var node_e = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",node_id,"\uFDD0:t/path",path,"\uFDD0:t/type","\uFDD0:t/node","\uFDD0:t/segment",cljs.core.last(path)], true);
var node_e__$1 = (cljs.core.truth_(parent_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node_e,"\uFDD0:t/parent",parent_id):node_e);
var node_e__$2 = (cljs.core.truth_(value)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node_e__$1,"\uFDD0:t/value",value):node_e__$1);
var attrs_es = io.pedestal.app.tree.attrs__GT_entities(attrs,node_id);
var transform_es = io.pedestal.app.tree.transforms__GT_entities(transforms,node_id);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.fromArray([node_e__$2], true),attrs_es,cljs.core.array_seq([transform_es], 0));
});
io.pedestal.app.tree.tree__GT_entities = (function tree__GT_entities(tree,path,parent_id){
var map__154241 = tree;
var map__154241__$1 = ((cljs.core.seq_QMARK_(map__154241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154241):map__154241);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154241__$1,"\uFDD0:children");
var ks = io.pedestal.app.tree.child_keys(children);
var node_id = io.pedestal.app.tree.next_eid();
var node_tuples = io.pedestal.app.tree.node__GT_entities(tree,path,parent_id,node_id);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(node_tuples,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (k){
return tree__GT_entities(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.PersistentVector.fromArray(["\uFDD0:children",k], true)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),node_id);
}),ks));
});
io.pedestal.app.tree.entity__GT_tuples = (function entity__GT_tuples(e){
var id = (new cljs.core.Keyword("\uFDD0:t/id")).call(null,e);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__154244){
var vec__154245 = p__154244;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154245,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154245,1,null);
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
io.pedestal.app.tree.Tree.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9749__auto__){
var self__ = this;
var h__9621__auto__ = self__.__hash;
if(!((h__9621__auto__ == null)))
{return h__9621__auto__;
} else
{var h__9621__auto____$1 = cljs.core.hash_imap(this__9749__auto__);
self__.__hash = h__9621__auto____$1;
return h__9621__auto____$1;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9754__auto__,k__9755__auto__){
var self__ = this;
return this__9754__auto__.cljs$core$ILookup$_lookup$arity$3(this__9754__auto__,k__9755__auto__,null);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9756__auto__,k154247,else__9757__auto__){
var self__ = this;
if("\uFDD0:else")
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k154247,else__9757__auto__);
} else
{return null;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9761__auto__,k__9762__auto__,G__154246){
var self__ = this;
var pred__154249 = cljs.core.identical_QMARK_;
var expr__154250 = k__9762__auto__;
return (new io.pedestal.app.tree.Tree(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9762__auto__,G__154246),null));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9768__auto__,writer__9769__auto__,opts__9770__auto__){
var self__ = this;
var pr_pair__9771__auto__ = (function (keyval__9772__auto__){
return cljs.core.pr_sequential_writer(writer__9769__auto__,cljs.core.pr_writer,""," ","",opts__9770__auto__,keyval__9772__auto__);
});
return cljs.core.pr_sequential_writer(writer__9769__auto__,pr_pair__9771__auto__,"#io.pedestal.app.tree.Tree{",", ","}",opts__9770__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9759__auto__,entry__9760__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_(entry__9760__auto__))
{return this__9759__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9759__auto__,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9760__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9760__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9759__auto__,entry__9760__auto__);
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9766__auto__){
var self__ = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9758__auto__){
var self__ = this;
return (0 + cljs.core.count(self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9750__auto__,other__9751__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__9751__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__9750__auto__.constructor === other__9751__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map(this__9750__auto__,other__9751__auto__);
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
io.pedestal.app.tree.Tree.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9753__auto__,G__154246){
var self__ = this;
return (new io.pedestal.app.tree.Tree(G__154246,self__.__extmap,self__.__hash));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9752__auto__){
var self__ = this;
return self__.__meta;
});
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$ = true;
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$tuple_seq$arity$1 = (function (this$){
var self__ = this;
return io.pedestal.app.tree.tree__GT_tuples(this$);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9763__auto__,k__9764__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9764__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__9763__auto__),self__.__meta),k__9764__auto__);
} else
{return (new io.pedestal.app.tree.Tree(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9764__auto__)),null));
}
});
io.pedestal.app.tree.Tree.cljs$lang$type = true;
io.pedestal.app.tree.Tree.cljs$lang$ctorPrSeq = (function (this__9788__auto__){
return cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["io.pedestal.app.tree/Tree"], 0));
});
io.pedestal.app.tree.Tree.cljs$lang$ctorPrWriter = (function (this__9788__auto__,writer__9789__auto__){
return cljs.core._write(writer__9789__auto__,"io.pedestal.app.tree/Tree");
});
io.pedestal.app.tree.__GT_Tree = (function __GT_Tree(){
return (new io.pedestal.app.tree.Tree());
});
io.pedestal.app.tree.map__GT_Tree = (function map__GT_Tree(G__154248){
return (new io.pedestal.app.tree.Tree(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__154248)));
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
var map__154254 = old;
var map__154254__$1 = ((cljs.core.seq_QMARK_(map__154254))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154254):map__154254);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154254__$1,"\uFDD0:t");
var seq = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154254__$1,"\uFDD0:seq");
var deltas__$1 = io.pedestal.app.tree.expand_maps(deltas);
var map__154255 = io.pedestal.app.tree.update_tree(old,deltas__$1);
var map__154255__$1 = ((cljs.core.seq_QMARK_(map__154255))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__154255):map__154255);
var this_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154255__$1,"\uFDD0:this-tx");
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__154255__$1,"\uFDD0:tree");
var deltas__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__154254,map__154254__$1,t,seq,deltas__$1,map__154255,map__154255__$1,this_tx,tree){
return (function (d,s){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:delta",d,"\uFDD0:t",t,"\uFDD0:seq",s], true);
});})(map__154254,map__154254__$1,t,seq,deltas__$1,map__154255,map__154255__$1,this_tx,tree))
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2("\uFDD0:delta",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__154256_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("\uFDD0:deltas")).call(null,tree),p1__154256_SHARP_);
}),ts)));
});
