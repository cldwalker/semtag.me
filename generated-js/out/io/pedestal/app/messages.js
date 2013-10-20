goog.provide('io.pedestal.app.messages');
goog.require('cljs.core');
goog.require('clojure.set');
/**
* A keyword used as a key in a message to indicate that message's topic.
* 
* Example Message:
* {msg/topic :todo, msg/type :clear-completed}
*/
io.pedestal.app.messages.topic = "\uFDD0:io.pedestal.app.messages/topic";
/**
* A keyword used as a key in a message to indicate that message's type.
* 
* Example Message:
* {msg/topic :todo, msg/type :clear-completed}
*/
io.pedestal.app.messages.type = "\uFDD0:io.pedestal.app.messages/type";
/**
* A special message type set when initializing a model. Whenever the
* type is init, a :value key will also be present and will contain
* the :init value from that topic in your app's dataflow.
* 
* Example Message:
* {msg/topic :todo, msg/type msg/init, :value {}}
*/
io.pedestal.app.messages.init = "\uFDD0:io.pedestal.app.messages/init";
io.pedestal.app.messages.app_model = "\uFDD0:io.pedestal.app.messages/app-model";
io.pedestal.app.messages.output = "\uFDD0:io.pedestal.app.messages/output";
io.pedestal.app.messages.effect = "\uFDD0:io.pedestal.app.messages/output";
io.pedestal.app.messages.priority = "\uFDD0:io.pedestal.app.messages/priority";
/**
* A namespace used as the namespace of message params.
*/
io.pedestal.app.messages.param_ns = (function (){var dummy_kw = "\uFDD0:io.pedestal.app.messages/dummy";
return [cljs.core.str(cljs.core.namespace(dummy_kw)),cljs.core.str(".param")].join('');
})();
/**
* Return a keyword with name `kw` which can be used mark a missing
* value in a message.
* 
* Example:
* (param :age)
* ; -> :io.pedestal.app.messages.param/age
*/
io.pedestal.app.messages.param = (function param(kw){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.messages.param_ns,cljs.core.name(kw));
});
/**
* Assoc message-type as type in a message, unless a type key is already present.
*/
io.pedestal.app.messages.add_message_type = (function add_message_type(message_type,message){
if(cljs.core.truth_((io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.messages.type.cljs$core$IFn$_invoke$arity$1(message) : io.pedestal.app.messages.type.call(null,message))))
{return message;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,io.pedestal.app.messages.type,message_type);
}
});
/**
* Return if a key is both a symbol and is namespaced with param-namespace.
*/
io.pedestal.app.messages.param_keyword_present_QMARK_ = (function param_keyword_present_QMARK_(key){
var and__3941__auto__ = cljs.core.keyword_QMARK_(key);
if(and__3941__auto__)
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.messages.param_ns,cljs.core.namespace(key));
} else
{return and__3941__auto__;
}
});
/**
* Strip the namespace from keyword kw.
*/
io.pedestal.app.messages.strip_ns = (function strip_ns(kw){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kw));
});
/**
* Assert every key of param-map is a param namespaced key.
*/
io.pedestal.app.messages.assert_only_param_keys = (function assert_only_param_keys(param_map){
var keys = cljs.core.keys(param_map);
if(cljs.core.every_QMARK_((function (key){
return io.pedestal.app.messages.param_keyword_present_QMARK_(key);
}),keys))
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Every key of param-map must be a namespaced param keyword (see io.pedestal.app.messages/param). These keys are invalid: "),cljs.core.str(cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.filter((function (key){
return cljs.core.not(io.pedestal.app.messages.param_keyword_present_QMARK_(key));
}),keys)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"key","key",-1640425448,null)], true),cljs.core.list(new cljs.core.Symbol(null,"param-keyword-present?","param-keyword-present?",1661635905,null),new cljs.core.Symbol(null,"key","key",-1640425448,null))),new cljs.core.Symbol(null,"keys","keys",-1637242963,null))], 0)))].join('')));
}
});
/**
* Replace parameter key-value pairs in a message with the appropriate values from param-map.
*/
io.pedestal.app.messages.fill_params_msg = (function fill_params_msg(param_map,msg){
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__154055){
var vec__154056 = p__154055;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154056,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154056,1,null);
var original_pair = vec__154056;
var temp__4090__auto__ = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(param_map) : k.call(null,param_map));
if(cljs.core.truth_(temp__4090__auto__))
{var param_val = temp__4090__auto__;
return cljs.core.PersistentVector.fromArray([io.pedestal.app.messages.strip_ns(k),param_val], true);
} else
{return original_pair;
}
}),msg));
});
/**
* Replace parameter key-value pairs in messages with the appropriate values from param-map.
* 
* Note: asserts that every key in param-map is a namespaced param key (see
* io.pedestal.app.messages/param).
* 
* Example:
* (fill-params {(msg/param :foo) :bar} [{msg/topic :some-model (msg/param :foo) {}}])
* ; -> [{msg/topic :some-model :foo :bar}]
*/
io.pedestal.app.messages.fill_params = (function fill_params(param_map,messages){
io.pedestal.app.messages.assert_only_param_keys(param_map);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.messages.fill_params_msg,param_map),messages);
});
/**
* Return all distinct params present as keys in messages.
* 
* Example:
* (message-params [{(msg/param :name) "John", (msg/param :age) 42}, {(msg/param :name) "Joe"}])
* ; -> ((msg/param :name) (msg/param :age))
*/
io.pedestal.app.messages.message_params = (function message_params(msgs){
return cljs.core.distinct((function (){var iter__9895__auto__ = (function iter__154063(s__154064){
return (new cljs.core.LazySeq(null,false,(function (){
var s__154064__$1 = s__154064;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__154064__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var msg = cljs.core.first(xs__4579__auto__);
var iterys__9891__auto__ = ((function (s__154064__$1,msg,xs__4579__auto__,temp__4092__auto__){
return (function iter__154065(s__154066){
return (new cljs.core.LazySeq(null,false,((function (s__154064__$1,msg,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__154066__$1 = s__154066;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__154066__$1);
if(temp__4092__auto____$1)
{var s__154066__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__154066__$2))
{var c__9893__auto__ = cljs.core.chunk_first(s__154066__$2);
var size__9894__auto__ = cljs.core.count(c__9893__auto__);
var b__154068 = cljs.core.chunk_buffer(size__9894__auto__);
if((function (){var i__154067 = 0;
while(true){
if((i__154067 < size__9894__auto__))
{var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9893__auto__,i__154067);
if(cljs.core.truth_(io.pedestal.app.messages.param_keyword_present_QMARK_(key)))
{cljs.core.chunk_append(b__154068,key);
{
var G__154069 = (i__154067 + 1);
i__154067 = G__154069;
continue;
}
} else
{{
var G__154070 = (i__154067 + 1);
i__154067 = G__154070;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__154068),iter__154065(cljs.core.chunk_rest(s__154066__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__154068),null);
}
} else
{var key = cljs.core.first(s__154066__$2);
if(cljs.core.truth_(io.pedestal.app.messages.param_keyword_present_QMARK_(key)))
{return cljs.core.cons(key,iter__154065(cljs.core.rest(s__154066__$2)));
} else
{{
var G__154071 = cljs.core.rest(s__154066__$2);
s__154066__$1 = G__154071;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__154064__$1,msg,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__154064__$1,msg,xs__4579__auto__,temp__4092__auto__))
;
var fs__9892__auto__ = cljs.core.seq(iterys__9891__auto__(cljs.core.keys(msg)));
if(fs__9892__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9892__auto__,iter__154063(cljs.core.rest(s__154064__$1)));
} else
{{
var G__154072 = cljs.core.rest(s__154064__$1);
s__154064__$1 = G__154072;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9895__auto__(msgs);
})());
});
/**
* Return mp where every key has been turned into a param.
* 
* Example:
* (keys-to-param-keys {:age 42, :name "John"})
* ; -> {(msg/param :age) 42, (msg/param :name) "John")
*/
io.pedestal.app.messages.keys_to_param_keys = (function keys_to_param_keys(mp){
return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__154075){
var vec__154076 = p__154075;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154076,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__154076,1,null);
return cljs.core.PersistentVector.fromArray([io.pedestal.app.messages.param(k),v], true);
}),mp));
});
/**
* Populate each message in messages with the appropriate message-type and
* parameters from input-map (if provided).
* 
* Note: asserts that input-map contains an entry for every param
* keyword in messages.
* 
* Example:
* (fill :set-age
* [{msg/topic :person, :id person-id, (param :age) {}}]
* {:age 42})
* ; -> [{topic :person msg/type :set-age :age 42 :id person-id}]
*/
io.pedestal.app.messages.fill = (function() {
var fill = null;
var fill__2 = (function (message_type,messages){
return fill.cljs$core$IFn$_invoke$arity$3(message_type,messages,cljs.core.PersistentArrayMap.EMPTY);
});
var fill__3 = (function (message_type,messages,input_map){
var missing_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,io.pedestal.app.messages.message_params(messages))));
var input_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.keys(input_map)));
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(missing_keys,input_keys)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Missing keys "),cljs.core.str(missing_keys),cljs.core.str(" is not a subset of "),cljs.core.str(input_keys),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),cljs.core.list(new cljs.core.Symbol("set","difference","set/difference",95029996,null),new cljs.core.Symbol(null,"missing-keys","missing-keys",1461467060,null),new cljs.core.Symbol(null,"input-keys","input-keys",-300302384,null)))], 0)))].join('')));
}
var messages__$1 = (cljs.core.truth_(message_type)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.messages.add_message_type,message_type),messages):messages);
return io.pedestal.app.messages.fill_params(io.pedestal.app.messages.keys_to_param_keys(input_map),messages__$1);
});
fill = function(message_type,messages,input_map){
switch(arguments.length){
case 2:
return fill__2.call(this,message_type,messages);
case 3:
return fill__3.call(this,message_type,messages,input_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fill.cljs$core$IFn$_invoke$arity$2 = fill__2;
fill.cljs$core$IFn$_invoke$arity$3 = fill__3;
return fill;
})()
;
