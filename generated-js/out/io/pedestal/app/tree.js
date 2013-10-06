goog.provide('io.pedestal.app.tree');
goog.require('cljs.core');
goog.require('io.pedestal.app.query');
goog.require('io.pedestal.app.util.log');
goog.require('clojure.set');
io.pedestal.app.tree._STAR_gc_deltas_STAR_ = true;
io.pedestal.app.tree.inverse = (function (){var method_table__9697__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9701__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("inverse",(function (delta){
return cljs.core.first.call(null,delta);
}),"\uFDD0:default",hierarchy__9701__auto__,method_table__9697__auto__,prefer_table__9698__auto__,method_cache__9699__auto__,cached_hierarchy__9700__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0:node-create",(function (p__10447){
var vec__10448 = p__10447;
var op = cljs.core.nth.call(null,vec__10448,0,null);
var path = cljs.core.nth.call(null,vec__10448,1,null);
var type = cljs.core.nth.call(null,vec__10448,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",path,type], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0:node-destroy",(function (p__10449){
var vec__10450 = p__10449;
var op = cljs.core.nth.call(null,vec__10450,0,null);
var path = cljs.core.nth.call(null,vec__10450,1,null);
var type = cljs.core.nth.call(null,vec__10450,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,type], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0:value",(function (p__10451){
var vec__10452 = p__10451;
var op = cljs.core.nth.call(null,vec__10452,0,null);
var path = cljs.core.nth.call(null,vec__10452,1,null);
var o = cljs.core.nth.call(null,vec__10452,2,null);
var n = cljs.core.nth.call(null,vec__10452,3,null);
return cljs.core.PersistentVector.fromArray([op,path,n,o], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0:attr",(function (p__10453){
var vec__10454 = p__10453;
var op = cljs.core.nth.call(null,vec__10454,0,null);
var path = cljs.core.nth.call(null,vec__10454,1,null);
var k = cljs.core.nth.call(null,vec__10454,2,null);
var o = cljs.core.nth.call(null,vec__10454,3,null);
var n = cljs.core.nth.call(null,vec__10454,4,null);
return cljs.core.PersistentVector.fromArray([op,path,k,n,o], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0:transform-enable",(function (p__10455){
var vec__10456 = p__10455;
var op = cljs.core.nth.call(null,vec__10456,0,null);
var path = cljs.core.nth.call(null,vec__10456,1,null);
var transform_name = cljs.core.nth.call(null,vec__10456,2,null);
var msgs = cljs.core.nth.call(null,vec__10456,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",path,transform_name,msgs], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0:transform-disable",(function (p__10457){
var vec__10458 = p__10457;
var op = cljs.core.nth.call(null,vec__10458,0,null);
var path = cljs.core.nth.call(null,vec__10458,1,null);
var transform_name = cljs.core.nth.call(null,vec__10458,2,null);
var msgs = cljs.core.nth.call(null,vec__10458,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",path,transform_name,msgs], true);
}));
io.pedestal.app.tree.invert = (function invert(deltas){
return cljs.core.mapv.call(null,io.pedestal.app.tree.inverse,cljs.core.reverse.call(null,deltas));
});
io.pedestal.app.tree.real_path = (function real_path(path){
return cljs.core.vec.call(null,cljs.core.interpose.call(null,"\uFDD0:children",cljs.core.into.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:tree"], true),path)));
});
io.pedestal.app.tree.new_node = (function new_node(children){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:children",children], true);
});
io.pedestal.app.tree.node_type = (function node_type(x){
if(cljs.core.map_QMARK_.call(null,x))
{return "\uFDD0:map";
} else
{if(cljs.core.vector_QMARK_.call(null,x))
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
var temp__4090__auto__ = cljs.core.get_in.call(null,tree,r_path);
if(cljs.core.truth_(temp__4090__auto__))
{var node = temp__4090__auto__;
return cljs.core._EQ_.call(null,io.pedestal.app.tree.node_type.call(null,(new cljs.core.Keyword("\uFDD0:children")).call(null,node)),type);
} else
{return true;
}
});
io.pedestal.app.tree.node_exists_QMARK_ = (function node_exists_QMARK_(tree,path){
var r_path = io.pedestal.app.tree.real_path.call(null,path);
return cljs.core.get_in.call(null,tree,r_path);
});
io.pedestal.app.tree.parent_exists_QMARK_ = (function parent_exists_QMARK_(tree,path){
if(cljs.core._EQ_.call(null,path,cljs.core.PersistentVector.EMPTY))
{return true;
} else
{var r_path = io.pedestal.app.tree.real_path.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
return cljs.core.get_in.call(null,tree,r_path);
}
});
io.pedestal.app.tree.apply_to_tree_dispatch = (function apply_to_tree_dispatch(_,delta){
if(cljs.core.fn_QMARK_.call(null,delta))
{return "\uFDD0:function";
} else
{return cljs.core.first.call(null,delta);
}
});
io.pedestal.app.tree.apply_to_tree = (function (){var method_table__9697__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9701__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("apply-to-tree",io.pedestal.app.tree.apply_to_tree_dispatch,"\uFDD0:default",hierarchy__9701__auto__,method_table__9697__auto__,prefer_table__9698__auto__,method_cache__9699__auto__,cached_hierarchy__9700__auto__));
})();
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:default",(function (tree,_){
return tree;
}));
/**
* Given a tree and a path, ensure that all the parent nodes in the
* tree exist.
*/
io.pedestal.app.tree.ensure_parents_exist = (function ensure_parents_exist(tree,path){
if(cljs.core.truth_(io.pedestal.app.tree.parent_exists_QMARK_.call(null,tree,path)))
{return tree;
} else
{return io.pedestal.app.tree.apply_to_tree.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),"\uFDD0:map"], true));
}
});
/**
* Given a tree and a path, create the node at path if it does not
* already exist.
*/
io.pedestal.app.tree.ensure_node_exists = (function ensure_node_exists(tree,path){
if(cljs.core.truth_(io.pedestal.app.tree.node_exists_QMARK_.call(null,tree,path)))
{return tree;
} else
{return io.pedestal.app.tree.apply_to_tree.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,"\uFDD0:map"], true));
}
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:node-create",(function (tree,delta){
var vec__10459 = delta;
var _ = cljs.core.nth.call(null,vec__10459,0,null);
var path = cljs.core.nth.call(null,vec__10459,1,null);
var type = cljs.core.nth.call(null,vec__10459,2,null);
if(cljs.core.map_QMARK_.call(null,type))
{return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree,io.pedestal.app.tree.map__GT_deltas.call(null,type,path));
} else
{var type__$1 = (function (){var or__3943__auto__ = type;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return "\uFDD0:map";
}
})();
var delta__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,type__$1], true):delta);
var r_path = io.pedestal.app.tree.real_path.call(null,path);
var children = (function (){var pred__10460 = cljs.core._EQ_;
var expr__10461 = type__$1;
if(pred__10460.call(null,"\uFDD0:vector",expr__10461))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(pred__10460.call(null,"\uFDD0:map",expr__10461))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10461)].join('')));
}
}
})();
var tree__$1 = io.pedestal.app.tree.ensure_parents_exist.call(null,tree,path);
if(cljs.core.truth_(io.pedestal.app.tree.existing_node_has_same_type_QMARK_.call(null,tree__$1,r_path,type__$1)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The node at "),cljs.core.str(path),cljs.core.str(" exists and is not the same type as the requested node.\n"),cljs.core.str("node:\n"),cljs.core.str(cljs.core.get_in.call(null,tree__$1,r_path)),cljs.core.str("\n"),cljs.core.str("delta:\n"),cljs.core.str(delta__$1)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"existing-node-has-same-type?","existing-node-has-same-type?",-641989933,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"r-path","r-path",1668183641,null),new cljs.core.Symbol(null,"type","type",-1636955917,null))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree__$1,r_path)))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree__$1,r_path,io.pedestal.app.tree.new_node.call(null,children)),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,delta__$1);
}
}
}));
io.pedestal.app.tree.remove_index_from_vector = (function remove_index_from_vector(vector,index){
var vec__10464 = cljs.core.split_at.call(null,index,vector);
var begin = cljs.core.nth.call(null,vec__10464,0,null);
var end = cljs.core.nth.call(null,vec__10464,1,null);
return cljs.core.into.call(null,cljs.core.vec.call(null,begin),cljs.core.rest.call(null,end));
});
io.pedestal.app.tree.child_keys = (function child_keys(children){
var pred__10468 = cljs.core._EQ_;
var expr__10469 = io.pedestal.app.tree.node_type.call(null,children);
if(pred__10468.call(null,"\uFDD0:map",expr__10469))
{return cljs.core.keys.call(null,children);
} else
{if(pred__10468.call(null,"\uFDD0:vector",expr__10469))
{return cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,children)));
} else
{if(pred__10468.call(null,"\uFDD0:else",expr__10469))
{return cljs.core.PersistentVector.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10469)].join('')));
}
}
}
});
io.pedestal.app.tree.remove_children = (function remove_children(tree,path,children){
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree,cljs.core.map.call(null,(function (k){
return cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.conj.call(null,path,k)], true);
}),io.pedestal.app.tree.child_keys.call(null,children)));
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:node-destroy",(function (tree,delta){
var vec__10471 = delta;
var _ = cljs.core.nth.call(null,vec__10471,0,null);
var path = cljs.core.nth.call(null,vec__10471,1,null);
var type = cljs.core.nth.call(null,vec__10471,2,null);
var r_path = io.pedestal.app.tree.real_path.call(null,path);
var containing_path = cljs.core.butlast.call(null,r_path);
var node_to_remove = cljs.core.get_in.call(null,tree,r_path);
var children = (new cljs.core.Keyword("\uFDD0:children")).call(null,node_to_remove);
var type__$1 = (function (){var or__3943__auto__ = type;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return io.pedestal.app.tree.node_type.call(null,children);
}
})();
var delta__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.conj.call(null,delta,type__$1):delta);
if(cljs.core.not.call(null,node_to_remove))
{return tree;
} else
{if(cljs.core._EQ_.call(null,io.pedestal.app.tree.node_type.call(null,children),type__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The given child node type does not match the actual type: "),cljs.core.str(cljs.core.pr_str.call(null,delta__$1))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"node-type","node-type",-1220874786,null),new cljs.core.Symbol(null,"children","children",18995128,null)),new cljs.core.Symbol(null,"type","type",-1636955917,null))))].join('')));
}
var tree__$1 = ((!(cljs.core.empty_QMARK_.call(null,children)))?io.pedestal.app.tree.remove_children.call(null,tree,path,children):tree);
var tree__$2 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0:value")).call(null,node_to_remove))?io.pedestal.app.tree.apply_to_tree.call(null,tree__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:value",path,(new cljs.core.Keyword("\uFDD0:value")).call(null,node_to_remove),null], true)):tree__$1);
var tree__$3 = (function (){var temp__4090__auto__ = (new cljs.core.Keyword("\uFDD0:transforms")).call(null,node_to_remove);
if(cljs.core.truth_(temp__4090__auto__))
{var ks = temp__4090__auto__;
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree__$2,cljs.core.map.call(null,((function (ks,temp__4090__auto__,tree__$1,tree__$2){
return (function (p__10472){
var vec__10473 = p__10472;
var k = cljs.core.nth.call(null,vec__10473,0,null);
var v = cljs.core.nth.call(null,vec__10473,1,null);
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
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree__$3,cljs.core.map.call(null,((function (ks,temp__4090__auto__,tree__$1,tree__$2,tree__$3){
return (function (p__10474){
var vec__10475 = p__10474;
var k = cljs.core.nth.call(null,vec__10475,0,null);
var v = cljs.core.nth.call(null,vec__10475,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:attr",path,k,v,null], true);
});})(ks,temp__4090__auto__,tree__$1,tree__$2,tree__$3))
,ks));
} else
{return tree__$3;
}
})();
var new_tree = (((containing_path == null))?cljs.core.assoc.call(null,tree__$4,"\uFDD0:tree",null):(function (){var last_path = cljs.core.last.call(null,r_path);
var container = cljs.core.get_in.call(null,tree__$4,containing_path);
if(cljs.core.map_QMARK_.call(null,container))
{return cljs.core.update_in.call(null,tree__$4,containing_path,cljs.core.dissoc,last_path);
} else
{return cljs.core.update_in.call(null,tree__$4,containing_path,io.pedestal.app.tree.remove_index_from_vector,last_path);
}
})());
return cljs.core.update_in.call(null,new_tree,cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,delta__$1);
}
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:children-exit",(function (tree,delta){
var vec__10476 = delta;
var _ = cljs.core.nth.call(null,vec__10476,0,null);
var path = cljs.core.nth.call(null,vec__10476,1,null);
var r_path = io.pedestal.app.tree.real_path.call(null,path);
var c_path = cljs.core.conj.call(null,r_path,"\uFDD0:children");
var children = cljs.core.get_in.call(null,tree,c_path);
if(!(cljs.core.empty_QMARK_.call(null,children)))
{return io.pedestal.app.tree.remove_children.call(null,tree,path,children);
} else
{return tree;
}
}));
io.pedestal.app.tree.same_value_QMARK_ = (function same_value_QMARK_(tree,path,v){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,tree,path),v);
});
io.pedestal.app.tree.update_or_remove = (function update_or_remove(tree,path,v){
if((v == null))
{return cljs.core.update_in.call(null,tree,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
} else
{return cljs.core.assoc_in.call(null,tree,path,v);
}
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:value",(function (tree,delta){
var vec__10477 = delta;
var op = cljs.core.nth.call(null,vec__10477,0,null);
var path = cljs.core.nth.call(null,vec__10477,1,null);
var o = cljs.core.nth.call(null,vec__10477,2,null);
var n = cljs.core.nth.call(null,vec__10477,3,null);
var r_path = io.pedestal.app.tree.real_path.call(null,path);
var v_path = cljs.core.conj.call(null,r_path,"\uFDD0:value");
var old_value = cljs.core.get_in.call(null,tree,v_path);
var vec__10478 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),4))?cljs.core.PersistentVector.fromArray([o,n], true):cljs.core.PersistentVector.fromArray([old_value,o], true));
var o__$1 = cljs.core.nth.call(null,vec__10478,0,null);
var n__$1 = cljs.core.nth.call(null,vec__10478,1,null);
var tree__$1 = io.pedestal.app.tree.ensure_node_exists.call(null,tree,path);
if(cljs.core._EQ_.call(null,o__$1,old_value))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The old value at path "),cljs.core.str(path),cljs.core.str(" is "),cljs.core.str(old_value),cljs.core.str(" but was expected to be "),cljs.core.str(o__$1),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"o","o",-1640531416,null),new cljs.core.Symbol(null,"old-value","old-value",-1203219452,null))))].join('')));
}
if(cljs.core._EQ_.call(null,o__$1,n__$1))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,io.pedestal.app.tree.update_or_remove.call(null,tree__$1,v_path,n__$1),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op,path,o__$1,n__$1], true));
}
}));
io.pedestal.app.tree.remove_empty = (function remove_empty(tree,path){
if(cljs.core.seq.call(null,cljs.core.get_in.call(null,tree,path)))
{return tree;
} else
{return cljs.core.update_in.call(null,tree,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
}
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:attr",(function (tree,delta){
var vec__10479 = delta;
var op = cljs.core.nth.call(null,vec__10479,0,null);
var path = cljs.core.nth.call(null,vec__10479,1,null);
var k = cljs.core.nth.call(null,vec__10479,2,null);
var o = cljs.core.nth.call(null,vec__10479,3,null);
var n = cljs.core.nth.call(null,vec__10479,4,null);
var r_path = io.pedestal.app.tree.real_path.call(null,path);
var a_path = cljs.core.conj.call(null,r_path,"\uFDD0:attrs",k);
var old_value = cljs.core.get_in.call(null,tree,a_path);
var vec__10480 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),5))?cljs.core.PersistentVector.fromArray([o,n], true):cljs.core.PersistentVector.fromArray([old_value,o], true));
var o__$1 = cljs.core.nth.call(null,vec__10480,0,null);
var n__$1 = cljs.core.nth.call(null,vec__10480,1,null);
var tree__$1 = io.pedestal.app.tree.ensure_node_exists.call(null,tree,path);
if(cljs.core._EQ_.call(null,o__$1,old_value))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Error:"),cljs.core.str(cljs.core.pr_str.call(null,delta)),cljs.core.str("\n"),cljs.core.str("The old attribute value for "),cljs.core.str(k),cljs.core.str(" is "),cljs.core.str(old_value),cljs.core.str(" but was expected to be "),cljs.core.str(o__$1),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"o","o",-1640531416,null),new cljs.core.Symbol(null,"old-value","old-value",-1203219452,null))))].join('')));
}
if(cljs.core._EQ_.call(null,o__$1,n__$1))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,io.pedestal.app.tree.remove_empty.call(null,io.pedestal.app.tree.update_or_remove.call(null,tree__$1,a_path,n__$1),cljs.core.conj.call(null,r_path,"\uFDD0:attrs")),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op,path,k,o__$1,n__$1], true));
}
}));
io.pedestal.app.tree.same_transform_QMARK_ = (function same_transform_QMARK_(tree,path,msgs){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,tree,path),msgs);
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:transform-enable",(function (tree,delta){
var vec__10481 = delta;
var _ = cljs.core.nth.call(null,vec__10481,0,null);
var path = cljs.core.nth.call(null,vec__10481,1,null);
var k = cljs.core.nth.call(null,vec__10481,2,null);
var msgs = cljs.core.nth.call(null,vec__10481,3,null);
var r_path = io.pedestal.app.tree.real_path.call(null,path);
var e_path = cljs.core.conj.call(null,r_path,"\uFDD0:transforms",k);
var tree__$1 = io.pedestal.app.tree.ensure_node_exists.call(null,tree,path);
if(cljs.core.truth_((function (){var or__3943__auto__ = cljs.core.not.call(null,cljs.core.get_in.call(null,tree__$1,e_path));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return io.pedestal.app.tree.same_transform_QMARK_.call(null,tree__$1,e_path,msgs);
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("A different transform "),cljs.core.str(k),cljs.core.str(" at path "),cljs.core.str(path),cljs.core.str(" already exists.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",1405049013,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"e-path","e-path",1296004678,null))),cljs.core.list(new cljs.core.Symbol(null,"same-transform?","same-transform?",-319550509,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"e-path","e-path",1296004678,null),new cljs.core.Symbol(null,"msgs","msgs",-1637170485,null)))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree__$1,e_path)))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree__$1,e_path,msgs),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,delta);
}
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:transform-disable",(function (tree,delta){
var vec__10482 = delta;
var _ = cljs.core.nth.call(null,vec__10482,0,null);
var path = cljs.core.nth.call(null,vec__10482,1,null);
var k = cljs.core.nth.call(null,vec__10482,2,null);
var r_path = io.pedestal.app.tree.real_path.call(null,path);
var transforms_path = cljs.core.conj.call(null,r_path,"\uFDD0:transforms");
var e_path = cljs.core.conj.call(null,transforms_path,k);
if(cljs.core.truth_(cljs.core.get_in.call(null,tree,e_path)))
{return io.pedestal.app.tree.remove_empty.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.conj,cljs.core.conj.call(null,delta,cljs.core.get_in.call(null,tree,e_path))),transforms_path,cljs.core.dissoc,k),transforms_path);
} else
{return tree;
}
}));
io.pedestal.app.tree.node_deltas = (function node_deltas(p__10483,path){
var map__10489 = p__10483;
var map__10489__$1 = ((cljs.core.seq_QMARK_.call(null,map__10489))?cljs.core.apply.call(null,cljs.core.hash_map,map__10489):map__10489);
var attrs = cljs.core.get.call(null,map__10489__$1,"\uFDD0:attrs");
var transforms = cljs.core.get.call(null,map__10489__$1,"\uFDD0:transforms");
var value = cljs.core.get.call(null,map__10489__$1,"\uFDD0:value");
return cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(value)?cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:value",path,value], true)], true):null),(cljs.core.truth_(attrs)?cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__10490){
var vec__10491 = p__10490;
var k = cljs.core.nth.call(null,vec__10491,0,null);
var v = cljs.core.nth.call(null,vec__10491,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:attr",path,k,v], true);
}),attrs)):null),(cljs.core.truth_(transforms)?cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__10492){
var vec__10493 = p__10492;
var k = cljs.core.nth.call(null,vec__10493,0,null);
var v = cljs.core.nth.call(null,vec__10493,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",path,k,v], true);
}),transforms)):null));
});
io.pedestal.app.tree.map__GT_deltas = (function map__GT_deltas(tree,path){
var node_keys = cljs.core.PersistentHashSet.fromArray(["\uFDD0:children",null,"\uFDD0:transforms",null,"\uFDD0:attrs",null,"\uFDD0:value",null], true);
var node_QMARK_ = (function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,tree);
if(and__3941__auto__)
{return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,tree)),node_keys)));
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
var children_type = io.pedestal.app.tree.node_type.call(null,children);
var node_deltas = (cljs.core.truth_(node_QMARK_)?io.pedestal.app.tree.node_deltas.call(null,tree,path):null);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",path,children_type], true)], true),node_deltas,cljs.core.mapcat.call(null,(function (k){
return map__GT_deltas.call(null,cljs.core.get_in.call(null,tree,(cljs.core.truth_(node_QMARK_)?cljs.core.PersistentVector.fromArray(["\uFDD0:children",k], true):cljs.core.PersistentVector.fromArray([k], true))),cljs.core.conj.call(null,path,k));
}),((cljs.core._EQ_.call(null,children_type,"\uFDD0:map"))?cljs.core.keys.call(null,children):((cljs.core._EQ_.call(null,children_type,"\uFDD0:vector"))?cljs.core.range.call(null,cljs.core.count.call(null,children)):(("\uFDD0:else")?cljs.core.PersistentVector.EMPTY:null)))));
});
io.pedestal.app.tree.expand_map = (function expand_map(delta){
if(cljs.core.map_QMARK_.call(null,delta))
{return io.pedestal.app.tree.map__GT_deltas.call(null,delta,cljs.core.PersistentVector.EMPTY);
} else
{return cljs.core.PersistentVector.fromArray([delta], true);
}
});
io.pedestal.app.tree.expand_maps = (function expand_maps(deltas){
return cljs.core.mapcat.call(null,io.pedestal.app.tree.expand_map,deltas);
});
/**
* Update the tree and return the actual deltas which were used to
* update the tree. A single delta can be expanded into multiple
* deltas.
*/
io.pedestal.app.tree.update_tree = (function update_tree(tree,deltas){
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree,deltas);
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0:function",(function (tree,f){
var deltas = f.call(null,tree);
return io.pedestal.app.tree.update_tree.call(null,tree,deltas);
}));
io.pedestal.app.tree.next_eid_atom = cljs.core.atom.call(null,0);
io.pedestal.app.tree.next_eid = (function next_eid(){
return cljs.core.swap_BANG_.call(null,io.pedestal.app.tree.next_eid_atom,cljs.core.inc);
});
io.pedestal.app.tree.transform__GT_entities = (function transform__GT_entities(transform_name,msgs,node_id){
var transform_id = io.pedestal.app.tree.next_eid.call(null);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",transform_id,"\uFDD0:t/transform-name",transform_name,"\uFDD0:t/node",node_id,"\uFDD0:t/type","\uFDD0:t/transform"], true)], true),cljs.core.map.call(null,(function (m){
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",io.pedestal.app.tree.next_eid.call(null),"\uFDD0:t/transform",transform_id,"\uFDD0:t/type","\uFDD0:t/message"], true));
}),msgs));
});
io.pedestal.app.tree.transforms__GT_entities = (function transforms__GT_entities(transforms,node_id){
return cljs.core.reduce.call(null,(function (acc,p__10496){
var vec__10497 = p__10496;
var transform_name = cljs.core.nth.call(null,vec__10497,0,null);
var msgs = cljs.core.nth.call(null,vec__10497,1,null);
return cljs.core.concat.call(null,acc,io.pedestal.app.tree.transform__GT_entities.call(null,transform_name,msgs,node_id));
}),cljs.core.PersistentVector.EMPTY,transforms);
});
io.pedestal.app.tree.attrs__GT_entities = (function attrs__GT_entities(attrs,node_id){
if(!(cljs.core.empty_QMARK_.call(null,attrs)))
{return cljs.core.PersistentVector.fromArray([cljs.core.merge.call(null,attrs,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",io.pedestal.app.tree.next_eid.call(null),"\uFDD0:t/node",node_id,"\uFDD0:t/type","\uFDD0:t/attrs"], true))], true);
} else
{return null;
}
});
io.pedestal.app.tree.node__GT_entities = (function node__GT_entities(node,path,parent_id,node_id){
var map__10499 = node;
var map__10499__$1 = ((cljs.core.seq_QMARK_.call(null,map__10499))?cljs.core.apply.call(null,cljs.core.hash_map,map__10499):map__10499);
var transforms = cljs.core.get.call(null,map__10499__$1,"\uFDD0:transforms");
var attrs = cljs.core.get.call(null,map__10499__$1,"\uFDD0:attrs");
var value = cljs.core.get.call(null,map__10499__$1,"\uFDD0:value");
var node_e = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:t/id",node_id,"\uFDD0:t/path",path,"\uFDD0:t/type","\uFDD0:t/node","\uFDD0:t/segment",cljs.core.last.call(null,path)], true);
var node_e__$1 = (cljs.core.truth_(parent_id)?cljs.core.assoc.call(null,node_e,"\uFDD0:t/parent",parent_id):node_e);
var node_e__$2 = (cljs.core.truth_(value)?cljs.core.assoc.call(null,node_e__$1,"\uFDD0:t/value",value):node_e__$1);
var attrs_es = io.pedestal.app.tree.attrs__GT_entities.call(null,attrs,node_id);
var transform_es = io.pedestal.app.tree.transforms__GT_entities.call(null,transforms,node_id);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([node_e__$2], true),attrs_es,transform_es);
});
io.pedestal.app.tree.tree__GT_entities = (function tree__GT_entities(tree,path,parent_id){
var map__10501 = tree;
var map__10501__$1 = ((cljs.core.seq_QMARK_.call(null,map__10501))?cljs.core.apply.call(null,cljs.core.hash_map,map__10501):map__10501);
var children = cljs.core.get.call(null,map__10501__$1,"\uFDD0:children");
var ks = io.pedestal.app.tree.child_keys.call(null,children);
var node_id = io.pedestal.app.tree.next_eid.call(null);
var node_tuples = io.pedestal.app.tree.node__GT_entities.call(null,tree,path,parent_id,node_id);
return cljs.core.concat.call(null,node_tuples,cljs.core.mapcat.call(null,(function (k){
return tree__GT_entities.call(null,cljs.core.get_in.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0:children",k], true)),cljs.core.conj.call(null,path,k),node_id);
}),ks));
});
io.pedestal.app.tree.entity__GT_tuples = (function entity__GT_tuples(e){
var id = (new cljs.core.Keyword("\uFDD0:t/id")).call(null,e);
return cljs.core.map.call(null,(function (p__10504){
var vec__10505 = p__10504;
var k = cljs.core.nth.call(null,vec__10505,0,null);
var v = cljs.core.nth.call(null,vec__10505,1,null);
return cljs.core.PersistentVector.fromArray([id,k,v], true);
}),cljs.core.dissoc.call(null,e,"\uFDD0:t/id"));
});
io.pedestal.app.tree.entities__GT_tuples = (function entities__GT_tuples(entities){
return cljs.core.mapcat.call(null,io.pedestal.app.tree.entity__GT_tuples,entities);
});
io.pedestal.app.tree.tree__GT_tuples = (function tree__GT_tuples(tree){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:tree")).call(null,tree)))
{return io.pedestal.app.tree.entities__GT_tuples.call(null,io.pedestal.app.tree.tree__GT_entities.call(null,(new cljs.core.Keyword("\uFDD0:tree")).call(null,tree),cljs.core.PersistentVector.EMPTY,null));
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
io.pedestal.app.tree.Tree.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9463__auto__){
var self__ = this;
var h__9335__auto__ = self__.__hash;
if(!((h__9335__auto__ == null)))
{return h__9335__auto__;
} else
{var h__9335__auto____$1 = cljs.core.hash_imap.call(null,this__9463__auto__);
self__.__hash = h__9335__auto____$1;
return h__9335__auto____$1;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9468__auto__,k__9469__auto__){
var self__ = this;
return this__9468__auto__.cljs$core$ILookup$_lookup$arity$3(this__9468__auto__,k__9469__auto__,null);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9470__auto__,k10507,else__9471__auto__){
var self__ = this;
if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k10507,else__9471__auto__);
} else
{return null;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9475__auto__,k__9476__auto__,G__10506){
var self__ = this;
var pred__10509 = cljs.core.identical_QMARK_;
var expr__10510 = k__9476__auto__;
return (new io.pedestal.app.tree.Tree(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9476__auto__,G__10506),null));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9482__auto__,writer__9483__auto__,opts__9484__auto__){
var self__ = this;
var pr_pair__9485__auto__ = (function (keyval__9486__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9483__auto__,cljs.core.pr_writer,""," ","",opts__9484__auto__,keyval__9486__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__9483__auto__,pr_pair__9485__auto__,"#io.pedestal.app.tree.Tree{",", ","}",opts__9484__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9473__auto__,entry__9474__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__9474__auto__))
{return this__9473__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9473__auto__,cljs.core._nth.call(null,entry__9474__auto__,0),cljs.core._nth.call(null,entry__9474__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9473__auto__,entry__9474__auto__);
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9480__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9472__auto__){
var self__ = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9464__auto__,other__9465__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__9465__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__9464__auto__.constructor === other__9465__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__9464__auto__,other__9465__auto__);
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
io.pedestal.app.tree.Tree.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9467__auto__,G__10506){
var self__ = this;
return (new io.pedestal.app.tree.Tree(G__10506,self__.__extmap,self__.__hash));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9466__auto__){
var self__ = this;
return self__.__meta;
});
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$ = true;
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$tuple_seq$arity$1 = (function (this$){
var self__ = this;
return io.pedestal.app.tree.tree__GT_tuples.call(null,this$);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9477__auto__,k__9478__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__9478__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9477__auto__),self__.__meta),k__9478__auto__);
} else
{return (new io.pedestal.app.tree.Tree(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9478__auto__)),null));
}
});
io.pedestal.app.tree.Tree.cljs$lang$type = true;
io.pedestal.app.tree.Tree.cljs$lang$ctorPrSeq = (function (this__9502__auto__){
return cljs.core.list.call(null,"io.pedestal.app.tree/Tree");
});
io.pedestal.app.tree.Tree.cljs$lang$ctorPrWriter = (function (this__9502__auto__,writer__9503__auto__){
return cljs.core._write.call(null,writer__9503__auto__,"io.pedestal.app.tree/Tree");
});
io.pedestal.app.tree.__GT_Tree = (function __GT_Tree(){
return (new io.pedestal.app.tree.Tree());
});
io.pedestal.app.tree.map__GT_Tree = (function map__GT_Tree(G__10508){
return (new io.pedestal.app.tree.Tree(null,cljs.core.dissoc.call(null,G__10508)));
});
io.pedestal.app.tree.delete_deltas = (function delete_deltas(t,deltas){
return cljs.core.reduce.call(null,(function (d,k){
if((k < t))
{io.pedestal.app.util.log.debug.call(null,"\uFDD0:gc",[cljs.core.str("GC: Deleting "),cljs.core.str(cljs.core.count.call(null,cljs.core.get.call(null,d,k))),cljs.core.str(" deltas at time "),cljs.core.str(k)].join(''));
return cljs.core.dissoc.call(null,d,k);
} else
{return d;
}
}),deltas,cljs.core.keys.call(null,deltas));
});
io.pedestal.app.tree.gc = (function gc(state){
if(cljs.core.truth_(io.pedestal.app.tree._STAR_gc_deltas_STAR_))
{io.pedestal.app.util.log.debug.call(null,"\uFDD0:gc","GC: Running...");
var t = (new cljs.core.Keyword("\uFDD0:t")).call(null,state);
var delete_t = (t - 2);
io.pedestal.app.util.log.debug.call(null,"\uFDD0:gc",[cljs.core.str("GC: Deleting t < "),cljs.core.str(delete_t)].join(''));
io.pedestal.app.util.log.debug.call(null,"\uFDD0:gc",[cljs.core.str("GC: There are currently "),cljs.core.str(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,(new cljs.core.Keyword("\uFDD0:deltas")).call(null,state))))),cljs.core.str(" deltas.")].join(''));
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:deltas"], true),cljs.core.partial.call(null,io.pedestal.app.tree.delete_deltas,delete_t));
} else
{io.pedestal.app.util.log.debug.call(null,"\uFDD0:gc",[cljs.core.str("GC is turned off. There are "),cljs.core.str(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,(new cljs.core.Keyword("\uFDD0:deltas")).call(null,state))))),cljs.core.str(" accumulated deltas")].join(''));
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
var map__10514 = old;
var map__10514__$1 = ((cljs.core.seq_QMARK_.call(null,map__10514))?cljs.core.apply.call(null,cljs.core.hash_map,map__10514):map__10514);
var t = cljs.core.get.call(null,map__10514__$1,"\uFDD0:t");
var seq = cljs.core.get.call(null,map__10514__$1,"\uFDD0:seq");
var deltas__$1 = io.pedestal.app.tree.expand_maps.call(null,deltas);
var map__10515 = io.pedestal.app.tree.update_tree.call(null,old,deltas__$1);
var map__10515__$1 = ((cljs.core.seq_QMARK_.call(null,map__10515))?cljs.core.apply.call(null,cljs.core.hash_map,map__10515):map__10515);
var this_tx = cljs.core.get.call(null,map__10515__$1,"\uFDD0:this-tx");
var tree = cljs.core.get.call(null,map__10515__$1,"\uFDD0:tree");
var deltas__$2 = cljs.core.map.call(null,((function (map__10514,map__10514__$1,t,seq,deltas__$1,map__10515,map__10515__$1,this_tx,tree){
return (function (d,s){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:delta",d,"\uFDD0:t",t,"\uFDD0:seq",s], true);
});})(map__10514,map__10514__$1,t,seq,deltas__$1,map__10515,map__10515__$1,this_tx,tree))
,this_tx,cljs.core.iterate.call(null,cljs.core.inc,seq));
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,old,cljs.core.PersistentVector.fromArray(["\uFDD0:deltas",t], true),deltas__$2),cljs.core.PersistentVector.fromArray(["\uFDD0:this-tx"], true),cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.fromArray(["\uFDD0:seq"], true),cljs.core._PLUS_,cljs.core.count.call(null,deltas__$2)),cljs.core.PersistentVector.fromArray(["\uFDD0:tree"], true),tree),cljs.core.PersistentVector.fromArray(["\uFDD0:t"], true),cljs.core.inc);
});
io.pedestal.app.tree.value = (function value(tree,path){
var r_path = io.pedestal.app.tree.real_path.call(null,path);
return cljs.core.get_in.call(null,tree,cljs.core.conj.call(null,r_path,"\uFDD0:value"));
});
io.pedestal.app.tree.new_app_model = io.pedestal.app.tree.map__GT_Tree.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:deltas",cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:this-tx",cljs.core.PersistentVector.EMPTY,"\uFDD0:tree",null,"\uFDD0:seq",0,"\uFDD0:t",0], true));
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
var ts = cljs.core.range.call(null,t,(new cljs.core.Keyword("\uFDD0:t")).call(null,tree));
return cljs.core.vec.call(null,cljs.core.map.call(null,"\uFDD0:delta",cljs.core.mapcat.call(null,(function (p1__10516_SHARP_){
return cljs.core.get.call(null,(new cljs.core.Keyword("\uFDD0:deltas")).call(null,tree),p1__10516_SHARP_);
}),ts)));
});
