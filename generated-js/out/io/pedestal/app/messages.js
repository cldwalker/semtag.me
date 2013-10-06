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
return [cljs.core.str(cljs.core.namespace.call(null,dummy_kw)),cljs.core.str(".param")].join('');
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
return cljs.core.keyword.call(null,io.pedestal.app.messages.param_ns,cljs.core.name.call(null,kw));
});
/**
* Assoc message-type as type in a message, unless a type key is already present.
*/
io.pedestal.app.messages.add_message_type = (function add_message_type(message_type,message){
if(cljs.core.truth_(io.pedestal.app.messages.type.call(null,message)))
{return message;
} else
{return cljs.core.assoc.call(null,message,io.pedestal.app.messages.type,message_type);
}
});
/**
* Return if a key is both a symbol and is namespaced with param-namespace.
*/
io.pedestal.app.messages.param_keyword_present_QMARK_ = (function param_keyword_present_QMARK_(key){
var and__3941__auto__ = cljs.core.keyword_QMARK_.call(null,key);
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,io.pedestal.app.messages.param_ns,cljs.core.namespace.call(null,key));
} else
{return and__3941__auto__;
}
});
/**
* Strip the namespace from keyword kw.
*/
io.pedestal.app.messages.strip_ns = (function strip_ns(kw){
return cljs.core.keyword.call(null,cljs.core.name.call(null,kw));
});
/**
* Assert every key of param-map is a param namespaced key.
*/
io.pedestal.app.messages.assert_only_param_keys = (function assert_only_param_keys(param_map){
var keys = cljs.core.keys.call(null,param_map);
if(cljs.core.every_QMARK_.call(null,(function (key){
return io.pedestal.app.messages.param_keyword_present_QMARK_.call(null,key);
}),keys))
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Every key of param-map must be a namespaced param keyword (see io.pedestal.app.messages/param). These keys are invalid: "),cljs.core.str(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (key){
return cljs.core.not.call(null,io.pedestal.app.messages.param_keyword_present_QMARK_.call(null,key));
}),keys)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"key","key",-1640425448,null)], true),cljs.core.list(new cljs.core.Symbol(null,"param-keyword-present?","param-keyword-present?",1661635905,null),new cljs.core.Symbol(null,"key","key",-1640425448,null))),new cljs.core.Symbol(null,"keys","keys",-1637242963,null))))].join('')));
}
});
/**
* Replace parameter key-value pairs in a message with the appropriate values from param-map.
*/
io.pedestal.app.messages.fill_params_msg = (function fill_params_msg(param_map,msg){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10315){
var vec__10316 = p__10315;
var k = cljs.core.nth.call(null,vec__10316,0,null);
var v = cljs.core.nth.call(null,vec__10316,1,null);
var original_pair = vec__10316;
var temp__4090__auto__ = k.call(null,param_map);
if(cljs.core.truth_(temp__4090__auto__))
{var param_val = temp__4090__auto__;
return cljs.core.PersistentVector.fromArray([io.pedestal.app.messages.strip_ns.call(null,k),param_val], true);
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
io.pedestal.app.messages.assert_only_param_keys.call(null,param_map);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.fill_params_msg,param_map),messages);
});
/**
* Return all distinct params present as keys in messages.
* 
* Example:
* (message-params [{(msg/param :name) "John", (msg/param :age) 42}, {(msg/param :name) "Joe"}])
* ; -> ((msg/param :name) (msg/param :age))
*/
io.pedestal.app.messages.message_params = (function message_params(msgs){
return cljs.core.distinct.call(null,(function (){var iter__9609__auto__ = (function iter__10323(s__10324){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10324__$1 = s__10324;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10324__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var msg = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9605__auto__ = ((function (s__10324__$1,msg,xs__4579__auto__,temp__4092__auto__){
return (function iter__10325(s__10326){
return (new cljs.core.LazySeq(null,false,((function (s__10324__$1,msg,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10326__$1 = s__10326;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10326__$1);
if(temp__4092__auto____$1)
{var s__10326__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10326__$2))
{var c__9607__auto__ = cljs.core.chunk_first.call(null,s__10326__$2);
var size__9608__auto__ = cljs.core.count.call(null,c__9607__auto__);
var b__10328 = cljs.core.chunk_buffer.call(null,size__9608__auto__);
if((function (){var i__10327 = 0;
while(true){
if((i__10327 < size__9608__auto__))
{var key = cljs.core._nth.call(null,c__9607__auto__,i__10327);
if(cljs.core.truth_(io.pedestal.app.messages.param_keyword_present_QMARK_.call(null,key)))
{cljs.core.chunk_append.call(null,b__10328,key);
{
var G__10329 = (i__10327 + 1);
i__10327 = G__10329;
continue;
}
} else
{{
var G__10330 = (i__10327 + 1);
i__10327 = G__10330;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10328),iter__10325.call(null,cljs.core.chunk_rest.call(null,s__10326__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10328),null);
}
} else
{var key = cljs.core.first.call(null,s__10326__$2);
if(cljs.core.truth_(io.pedestal.app.messages.param_keyword_present_QMARK_.call(null,key)))
{return cljs.core.cons.call(null,key,iter__10325.call(null,cljs.core.rest.call(null,s__10326__$2)));
} else
{{
var G__10331 = cljs.core.rest.call(null,s__10326__$2);
s__10326__$1 = G__10331;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__10324__$1,msg,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10324__$1,msg,xs__4579__auto__,temp__4092__auto__))
;
var fs__9606__auto__ = cljs.core.seq.call(null,iterys__9605__auto__.call(null,cljs.core.keys.call(null,msg)));
if(fs__9606__auto__)
{return cljs.core.concat.call(null,fs__9606__auto__,iter__10323.call(null,cljs.core.rest.call(null,s__10324__$1)));
} else
{{
var G__10332 = cljs.core.rest.call(null,s__10324__$1);
s__10324__$1 = G__10332;
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
return iter__9609__auto__.call(null,msgs);
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10335){
var vec__10336 = p__10335;
var k = cljs.core.nth.call(null,vec__10336,0,null);
var v = cljs.core.nth.call(null,vec__10336,1,null);
return cljs.core.PersistentVector.fromArray([io.pedestal.app.messages.param.call(null,k),v], true);
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
return fill.call(null,message_type,messages,cljs.core.PersistentArrayMap.EMPTY);
});
var fill__3 = (function (message_type,messages,input_map){
var missing_keys = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,cljs.core.name,io.pedestal.app.messages.message_params.call(null,messages))));
var input_keys = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.keys.call(null,input_map)));
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,missing_keys,input_keys)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Missing keys "),cljs.core.str(missing_keys),cljs.core.str(" is not a subset of "),cljs.core.str(input_keys),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),cljs.core.list(new cljs.core.Symbol("set","difference","set/difference",95029996,null),new cljs.core.Symbol(null,"missing-keys","missing-keys",1461467060,null),new cljs.core.Symbol(null,"input-keys","input-keys",-300302384,null)))))].join('')));
}
var messages__$1 = (cljs.core.truth_(message_type)?cljs.core.map.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.add_message_type,message_type),messages):messages);
return io.pedestal.app.messages.fill_params.call(null,io.pedestal.app.messages.keys_to_param_keys.call(null,input_map),messages__$1);
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
