goog.provide('io.pedestal.app.render.push.handlers.automatic');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('io.pedestal.app.render.push.templates');
goog.require('io.pedestal.app.render.events');
goog.require('io.pedestal.app.render.push.cljs_formatter');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.render.push');
goog.require('io.pedestal.app.util.log');
goog.require('cljs.reader');
io.pedestal.app.render.push.handlers.automatic.prompt_values = (function prompt_values(syms){
return cljs.core.zipmap(syms,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13552_SHARP_){
return prompt([cljs.core.str("Enter value for: "),cljs.core.str(cljs.core.name(p1__13552_SHARP_))].join(''));
}),syms));
});
io.pedestal.app.render.push.handlers.automatic.get_missing_input = (function get_missing_input(messages){
var syms = io.pedestal.app.messages.message_params(messages);
if(cljs.core.seq(syms))
{return (function (_){
var env = io.pedestal.app.render.push.handlers.automatic.prompt_values(syms);
return io.pedestal.app.messages.fill_params(env,messages);
});
} else
{return messages;
}
});
io.pedestal.app.render.push.handlers.automatic.modal_id = (function modal_id(id,transform_name){
return [cljs.core.str(id),cljs.core.str("-modal-"),cljs.core.str(cljs.core.name(transform_name))].join('');
});
io.pedestal.app.render.push.handlers.automatic.modal_continue_button_id = (function modal_continue_button_id(id,transform_name){
return [cljs.core.str(io.pedestal.app.render.push.handlers.automatic.modal_id(id,transform_name)),cljs.core.str("-continue")].join('');
});
io.pedestal.app.render.push.handlers.automatic.modal_field_id = (function modal_field_id(id,transform_name,sym){
return [cljs.core.str(io.pedestal.app.render.push.handlers.automatic.modal_id(id,transform_name)),cljs.core.str("-field-"),cljs.core.str(cljs.core.name(sym))].join('');
});
io.pedestal.app.render.push.handlers.automatic.modal_title = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("modal-title",(function (transform_name,messages){
return transform_name;
}),"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
})();
io.pedestal.app.render.push.handlers.automatic.modal_title.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.render.push.handlers.automatic.modal_title,"\uFDD0:default",(function (transform_name,_){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([transform_name], 0));
}));
io.pedestal.app.render.push.handlers.automatic.modal_content = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("modal-content",(function (transform_name,messages){
return transform_name;
}),"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
})();
io.pedestal.app.render.push.handlers.automatic.modal_content.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.render.push.handlers.automatic.modal_content,"\uFDD0:default",(function (transform_name,_){
return "";
}));
io.pedestal.app.render.push.handlers.automatic.modal_field = (function (){var method_table__9703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9705__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9706__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9707__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn("modal-field",(function (transform_name,field_name){
return cljs.core.PersistentVector.fromArray([transform_name,field_name], true);
}),"\uFDD0:default",hierarchy__9707__auto__,method_table__9703__auto__,prefer_table__9704__auto__,method_cache__9705__auto__,cached_hierarchy__9706__auto__));
})();
io.pedestal.app.render.push.handlers.automatic.modal_field.cljs$core$IMultiFn$_add_method$arity$3(io.pedestal.app.render.push.handlers.automatic.modal_field,"\uFDD0:default",(function (_,field_name){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:field-name",[cljs.core.str(field_name),cljs.core.str(":")].join(''),"\uFDD0:placeholder",[cljs.core.str("Enter "),cljs.core.str(field_name)].join(''),"\uFDD0:input-class","input-xlarge","\uFDD0:default",null,"\uFDD0:validation-fn",(function (x){
return !((function (){var or__3943__auto__ = (x == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"");
}
})());
}),"\uFDD0:inline-help","","\uFDD0:inline-help-error",[cljs.core.str(field_name),cljs.core.str(" is required")].join('')], true);
}));
io.pedestal.app.render.push.handlers.automatic.modal_input_field = (function modal_input_field(id,transform_name,sym){
var map__13554 = (io.pedestal.app.render.push.handlers.automatic.modal_field.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.render.push.handlers.automatic.modal_field.cljs$core$IFn$_invoke$arity$2(transform_name,cljs.core.name(sym)) : io.pedestal.app.render.push.handlers.automatic.modal_field.call(null,transform_name,cljs.core.name(sym)));
var map__13554__$1 = ((cljs.core.seq_QMARK_(map__13554))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13554):map__13554);
var inline_help = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13554__$1,"\uFDD0:inline-help");
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13554__$1,"\uFDD0:default");
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13554__$1,"\uFDD0:input-class");
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13554__$1,"\uFDD0:placeholder");
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13554__$1,"\uFDD0:field-name");
var field_id = io.pedestal.app.render.push.handlers.automatic.modal_field_id(id,transform_name,sym);
return [cljs.core.str("<label class='control-label' for='"),cljs.core.str(field_id),cljs.core.str("'>"),cljs.core.str(field_name),cljs.core.str("</label>"),cljs.core.str("<div class='controls'>"),cljs.core.str("<input id='"),cljs.core.str(field_id),cljs.core.str("' "),cljs.core.str("       class='"),cljs.core.str(input_class),cljs.core.str("' type='text' placeholder='"),cljs.core.str(placeholder),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(default$)?[cljs.core.str(" value='"),cljs.core.str(default$),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str("<span class='help-inline' id='"),cljs.core.str(field_id),cljs.core.str("-help-inline'>"),cljs.core.str(inline_help),cljs.core.str("</span>"),cljs.core.str("</div>")].join('');
});
io.pedestal.app.render.push.handlers.automatic.modal_input_html = (function modal_input_html(id,transform_name,messages){
var syms = io.pedestal.app.messages.message_params(messages);
if(cljs.core.seq(syms))
{var modal_id = io.pedestal.app.render.push.handlers.automatic.modal_id(id,transform_name);
var continue_button_id = io.pedestal.app.render.push.handlers.automatic.modal_continue_button_id(id,transform_name);
return [cljs.core.str("<div class='modal hide fade' id='"),cljs.core.str(modal_id),cljs.core.str("' tabindex='-1' role='dialog'"),cljs.core.str("     aria-labelledby='"),cljs.core.str(modal_id),cljs.core.str("Label' aria-hidden='true'>"),cljs.core.str("  <div class='modal-header'>"),cljs.core.str("    <button type='button' class='close' data-dismiss='modal'"),cljs.core.str("            aria-hidden='true'>\u00D7</button>"),cljs.core.str("    <h3 id='"),cljs.core.str(modal_id),cljs.core.str("Label'>"),cljs.core.str((io.pedestal.app.render.push.handlers.automatic.modal_title.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.render.push.handlers.automatic.modal_title.cljs$core$IFn$_invoke$arity$2(transform_name,messages) : io.pedestal.app.render.push.handlers.automatic.modal_title.call(null,transform_name,messages))),cljs.core.str("</h3>"),cljs.core.str("  </div>"),cljs.core.str("  <div class='modal-body'>"),cljs.core.str((io.pedestal.app.render.push.handlers.automatic.modal_content.cljs$core$IFn$_invoke$arity$1 ? io.pedestal.app.render.push.handlers.automatic.modal_content.cljs$core$IFn$_invoke$arity$1(transform_name) : io.pedestal.app.render.push.handlers.automatic.modal_content.call(null,transform_name))),cljs.core.str("<div class='control-group' id='modal-control-group'>"),cljs.core.str("    <form onsubmit='return false;'>"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(io.pedestal.app.render.push.handlers.automatic.modal_input_field,id,transform_name),syms))),cljs.core.str("    </form>"),cljs.core.str("  </div>"),cljs.core.str("</div>"),cljs.core.str("  <div class='modal-footer'>"),cljs.core.str("    <button class='btn' data-dismiss='modal' aria-hidden='true'>Cancel</button>"),cljs.core.str("    <button class='btn btn-primary' id='"),cljs.core.str(continue_button_id),cljs.core.str("'>Continue</button>"),cljs.core.str("  </div>"),cljs.core.str("</div>")].join('');
} else
{return null;
}
});
io.pedestal.app.render.push.handlers.automatic.get_modal_value = (function get_modal_value(id,transform_name,sym){
var field_id = io.pedestal.app.render.push.handlers.automatic.modal_field_id(id,transform_name,sym);
var value = domina.by_id(field_id).value;
var map__13556 = (io.pedestal.app.render.push.handlers.automatic.modal_field.cljs$core$IFn$_invoke$arity$2 ? io.pedestal.app.render.push.handlers.automatic.modal_field.cljs$core$IFn$_invoke$arity$2(transform_name,cljs.core.name(sym)) : io.pedestal.app.render.push.handlers.automatic.modal_field.call(null,transform_name,cljs.core.name(sym)));
var map__13556__$1 = ((cljs.core.seq_QMARK_(map__13556))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13556):map__13556);
var inline_help_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13556__$1,"\uFDD0:inline-help-error");
var validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13556__$1,"\uFDD0:validation-fn");
if(cljs.core.truth_((validation_fn.cljs$core$IFn$_invoke$arity$1 ? validation_fn.cljs$core$IFn$_invoke$arity$1(value) : validation_fn.call(null,value))))
{return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",value], true);
} else
{return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:value",value,"\uFDD0:error",true,"\uFDD0:field-id",field_id,"\uFDD0:message",inline_help_error], true);
}
});
io.pedestal.app.render.push.handlers.automatic.get_modal_values = (function get_modal_values(id,transform_name,syms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,sym){
var v = io.pedestal.app.render.push.handlers.automatic.get_modal_value(id,transform_name,sym);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:error")).call(null,v)))
{return cljs.core.assoc_in(a,cljs.core.PersistentVector.fromArray(["\uFDD0:errors",sym], true),v);
} else
{return cljs.core.assoc_in(a,cljs.core.PersistentVector.fromArray(["\uFDD0:env",sym], true),v);
}
}),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:env",cljs.core.PersistentArrayMap.EMPTY], true),syms);
});
io.pedestal.app.render.push.handlers.automatic.hide_and_return_messages = (function hide_and_return_messages(id,transform_name,messages){
hideModal(io.pedestal.app.render.push.handlers.automatic.modal_id(id,transform_name));
return messages;
});
io.pedestal.app.render.push.handlers.automatic.highlight_errors = (function highlight_errors(errors){
var seq__13563 = cljs.core.seq(cljs.core.vals(errors));
var chunk__13564 = null;
var count__13565 = 0;
var i__13566 = 0;
while(true){
if((i__13566 < count__13565))
{var map__13567 = chunk__13564.cljs$core$IIndexed$_nth$arity$2(chunk__13564,i__13566);
var map__13567__$1 = ((cljs.core.seq_QMARK_(map__13567))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13567):map__13567);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13567__$1,"\uFDD0:message");
var field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13567__$1,"\uFDD0:field-id");
domina.add_class_BANG_(domina.by_id("modal-control-group"),"error");
domina.set_text_BANG_(domina.by_id([cljs.core.str(field_id),cljs.core.str("-help-inline")].join('')),message);
{
var G__13569 = seq__13563;
var G__13570 = chunk__13564;
var G__13571 = count__13565;
var G__13572 = (i__13566 + 1);
seq__13563 = G__13569;
chunk__13564 = G__13570;
count__13565 = G__13571;
i__13566 = G__13572;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13563);
if(temp__4092__auto__)
{var seq__13563__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13563__$1))
{var c__9646__auto__ = cljs.core.chunk_first(seq__13563__$1);
{
var G__13573 = cljs.core.chunk_rest(seq__13563__$1);
var G__13574 = c__9646__auto__;
var G__13575 = cljs.core.count(c__9646__auto__);
var G__13576 = 0;
seq__13563 = G__13573;
chunk__13564 = G__13574;
count__13565 = G__13575;
i__13566 = G__13576;
continue;
}
} else
{var map__13568 = cljs.core.first(seq__13563__$1);
var map__13568__$1 = ((cljs.core.seq_QMARK_(map__13568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13568):map__13568);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13568__$1,"\uFDD0:message");
var field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13568__$1,"\uFDD0:field-id");
domina.add_class_BANG_(domina.by_id("modal-control-group"),"error");
domina.set_text_BANG_(domina.by_id([cljs.core.str(field_id),cljs.core.str("-help-inline")].join('')),message);
{
var G__13577 = cljs.core.next(seq__13563__$1);
var G__13578 = null;
var G__13579 = 0;
var G__13580 = 0;
seq__13563 = G__13577;
chunk__13564 = G__13578;
count__13565 = G__13579;
i__13566 = G__13580;
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
io.pedestal.app.render.push.handlers.automatic.submit_dialog_fn = (function submit_dialog_fn(id,transform_name,messages){
var syms = io.pedestal.app.messages.message_params(messages);
var messages_hash = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9615__auto__ = ((function (syms){
return (function iter__13598(s__13599){
return (new cljs.core.LazySeq(null,false,((function (syms){
return (function (){
var s__13599__$1 = s__13599;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__13599__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var m = cljs.core.first(xs__4579__auto__);
var iterys__9611__auto__ = ((function (s__13599__$1,m,xs__4579__auto__,temp__4092__auto__,syms){
return (function iter__13600(s__13601){
return (new cljs.core.LazySeq(null,false,((function (s__13599__$1,m,xs__4579__auto__,temp__4092__auto__,syms){
return (function (){
var s__13601__$1 = s__13601;
while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__13601__$1);
if(temp__4092__auto____$1)
{var s__13601__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13601__$2))
{var c__9613__auto__ = cljs.core.chunk_first(s__13601__$2);
var size__9614__auto__ = cljs.core.count(c__9613__auto__);
var b__13603 = cljs.core.chunk_buffer(size__9614__auto__);
if((function (){var i__13602 = 0;
while(true){
if((i__13602 < size__9614__auto__))
{var vec__13610 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9613__auto__,i__13602);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13610,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13610,1,null);
cljs.core.chunk_append(b__13603,cljs.core.PersistentVector.fromArray([k,v], true));
{
var G__13615 = (i__13602 + 1);
i__13602 = G__13615;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__13603),iter__13600(cljs.core.chunk_rest(s__13601__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__13603),null);
}
} else
{var vec__13611 = cljs.core.first(s__13601__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,1,null);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([k,v], true),iter__13600(cljs.core.rest(s__13601__$2)));
}
} else
{return null;
}
break;
}
});})(s__13599__$1,m,xs__4579__auto__,temp__4092__auto__,syms))
,null));
});})(s__13599__$1,m,xs__4579__auto__,temp__4092__auto__,syms))
;
var fs__9612__auto__ = cljs.core.seq(iterys__9611__auto__(m));
if(fs__9612__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9612__auto__,iter__13598(cljs.core.rest(s__13599__$1)));
} else
{{
var G__13616 = cljs.core.rest(s__13599__$1);
s__13599__$1 = G__13616;
continue;
}
}
} else
{return null;
}
break;
}
});})(syms))
,null));
});})(syms))
;
return iter__9615__auto__(messages);
})());
var read_value = ((function (syms,messages_hash){
return (function (k,v){
var map__13612 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(messages_hash) : k.call(null,messages_hash));
var map__13612__$1 = ((cljs.core.seq_QMARK_(map__13612))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13612):map__13612);
var read_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13612__$1,"\uFDD0:read-as");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_as,"\uFDD0:data"))
{return cljs.reader.read_string(v);
} else
{return v;
}
});})(syms,messages_hash))
;
return (function (_){
if(cljs.core.seq(syms))
{var values = io.pedestal.app.render.push.handlers.automatic.get_modal_values(id,transform_name,syms);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:errors")).call(null,values)))
{io.pedestal.app.render.push.handlers.automatic.highlight_errors((new cljs.core.Keyword("\uFDD0:errors")).call(null,values));
return cljs.core.PersistentVector.EMPTY;
} else
{return io.pedestal.app.render.push.handlers.automatic.hide_and_return_messages(id,transform_name,io.pedestal.app.messages.fill_params(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__13613){
var vec__13614 = p__13613;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13614,0,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13614,1,null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,read_value(k,(new cljs.core.Keyword("\uFDD0:value")).call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,(new cljs.core.Keyword("\uFDD0:env")).call(null,values)),messages));
}
} else
{return io.pedestal.app.render.push.handlers.automatic.hide_and_return_messages(id,transform_name,messages);
}
});
});
io.pedestal.app.render.push.handlers.automatic.generic_modal_collect_input = (function generic_modal_collect_input(parent_id,id,input_queue,transform_name,messages){
var modal_continue_button_id = io.pedestal.app.render.push.handlers.automatic.modal_continue_button_id(id,transform_name);
domina.append_BANG_(domina.by_id(parent_id),io.pedestal.app.render.push.handlers.automatic.modal_input_html(id,transform_name,messages));
io.pedestal.app.render.events.send_on_click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([domina.by_id(modal_continue_button_id),input_queue,io.pedestal.app.render.push.handlers.automatic.submit_dialog_fn(id,transform_name,messages)], 0));
return showModal(io.pedestal.app.render.push.handlers.automatic.modal_id(id,transform_name));
});
io.pedestal.app.render.push.handlers.automatic.modal_collect_input = (function modal_collect_input(r,input_queue,path,transform_name,messages){
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"\uFDD0:modal");
var parent_id = io.pedestal.app.render.push.get_parent_id(r,path__$1);
var id = io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2(r,path__$1);
return io.pedestal.app.render.push.handlers.automatic.generic_modal_collect_input(parent_id,id,input_queue,transform_name,messages);
});
io.pedestal.app.render.push.handlers.automatic.render_event_enter = (function render_event_enter(r,p__13618,input_queue){
var vec__13620 = p__13618;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13620,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13620,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13620,2,null);
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13620,3,null);
var control_id = io.pedestal.app.render.push.get_id(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"control"));
var button_id = io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,"control",cljs.core.array_seq([transform_name], 0)));
var messages__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.messages.add_message_type,transform_name),messages);
var syms = io.pedestal.app.messages.message_params(messages__$1);
if(cljs.core.truth_(input_queue))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Input-Queue is nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"input-queue","input-queue",1257864967,null)], 0)))].join('')));
}
domina.append_BANG_(domina.by_id(control_id),[cljs.core.str("<a class='btn btn-primary' style='margin-top:5px;margin-right:5px;' "),cljs.core.str("id='"),cljs.core.str(button_id),cljs.core.str("'>"),cljs.core.str([cljs.core.str(transform_name)].join('')),cljs.core.str("</a>")].join(''));
if(cljs.core.seq(syms))
{domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id(button_id),"\uFDD0:click",(function (e){
domina.events.prevent_default(e);
return io.pedestal.app.render.push.handlers.automatic.modal_collect_input(r,input_queue,path,transform_name,messages__$1);
}));
} else
{io.pedestal.app.render.events.send_on_click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([domina.by_id(button_id),input_queue,io.pedestal.app.render.push.handlers.automatic.get_missing_input(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13617_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13617_SHARP_,"\uFDD0:from","\uFDD0:ui");
}),messages__$1))], 0));
}
return io.pedestal.app.render.push.on_destroy_BANG_(r,path,(function (){
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2(domina.by_id(button_id),"\uFDD0:click");
}));
});
io.pedestal.app.render.push.handlers.automatic.render_node_enter = (function render_node_enter(r,p__13621,input_queue){
var vec__13623 = p__13621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13623,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13623,1,null);
var parent = io.pedestal.app.render.push.get_parent_id(r,path);
var id = io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2(r,path);
var data_id = io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"data"));
var control_id = io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"control"));
var path_length = cljs.core.count(path);
return domina.append_BANG_(domina.by_id(parent),[cljs.core.str("<div id='"),cljs.core.str(id),cljs.core.str("' class='"),cljs.core.str((((path_length <= 1))?"root-node-section":"node-section")),cljs.core.str("'>"),cljs.core.str("  <div class='row-fluid'>"),cljs.core.str("    <div class='span3' style='text-align:right' id='"),cljs.core.str(control_id),cljs.core.str("'></div>"),cljs.core.str("    <div class='span9'>"),cljs.core.str("      <h4 class='muted'>"),cljs.core.str(cljs.core.last(path)),cljs.core.str("</h4>"),cljs.core.str("      <div id='"),cljs.core.str(data_id),cljs.core.str("'></div>"),cljs.core.str("    </div>"),cljs.core.str("  </div>"),cljs.core.str("</div>")].join(''));
});
io.pedestal.app.render.push.handlers.automatic.render_value_update = (function render_value_update(r,p__13624,d){
var vec__13626 = p__13624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,1,null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,2,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,3,null);
var data_id = io.pedestal.app.render.push.get_id(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,"data"));
var container = domina.single_node(domina.by_id(data_id));
domina.destroy_children_BANG_(container);
if(cljs.core.truth_(v))
{var expression = domina.single_node(io.pedestal.app.render.push.cljs_formatter.html(v));
domina.append_BANG_(container,expression);
return io.pedestal.app.render.push.cljs_formatter.arrange_BANG_(expression,container);
} else
{return null;
}
});
io.pedestal.app.render.push.handlers.automatic.div_with_id = (function div_with_id(id){
return (function (r,p__13629,d){
var vec__13630 = p__13629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13630,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13630,1,null);
var parent = io.pedestal.app.render.push.get_parent_id(r,path);
var id__$1 = io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$3(r,path,id);
return domina.append_BANG_(domina.by_id(parent),[cljs.core.str("<div id='"),cljs.core.str(id__$1),cljs.core.str("'></div>")].join(''));
});
});
io.pedestal.app.render.push.handlers.automatic.append_to_parent = (function append_to_parent(f){
return (function (r,p__13633,d){
var vec__13634 = p__13633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13634,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13634,1,null);
var parent = io.pedestal.app.render.push.get_parent_id(r,path);
var id = io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2(r,path);
return domina.append_BANG_(domina.by_id(parent),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(id) : f.call(null,id)));
});
});
io.pedestal.app.render.push.handlers.automatic.prepend_to_parent = (function prepend_to_parent(f){
return (function (r,p__13637,d){
var vec__13638 = p__13637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13638,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13638,1,null);
var parent = io.pedestal.app.render.push.get_parent_id(r,path);
var id = io.pedestal.app.render.push.new_id_BANG_.cljs$core$IFn$_invoke$arity$2(r,path);
return domina.prepend_BANG_(domina.by_id(parent),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(id) : f.call(null,id)));
});
});
io.pedestal.app.render.push.handlers.automatic.append_value = (function append_value(f){
return (function (r,p__13641,d){
var vec__13642 = p__13641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13642,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13642,1,null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13642,2,null);
var id = io.pedestal.app.render.push.get_id(r,path);
return domina.append_BANG_(domina.by_id(id),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
});
});
io.pedestal.app.render.push.handlers.automatic.attach_click_event = (function attach_click_event(id,transform_name,messages,input_queue){
var messages__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.messages.add_message_type,transform_name),messages);
return io.pedestal.app.render.events.send_on_click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([domina.by_id(id),input_queue,io.pedestal.app.render.push.handlers.automatic.get_missing_input(messages__$1)], 0));
});
io.pedestal.app.render.push.handlers.automatic.event_enter = (function() {
var event_enter = null;
var event_enter__0 = (function (){
return event_enter.cljs$core$IFn$_invoke$arity$1(null);
});
var event_enter__1 = (function (modal_path){
return (function (r,p__13645,input_queue){
var vec__13646 = p__13645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,2,null);
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,3,null);
var modal_path__$1 = (function (){var or__3943__auto__ = modal_path;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return path;
}
})();
var item_id = io.pedestal.app.render.push.get_id(r,path);
var messages__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(io.pedestal.app.messages.add_message_type,transform_name),messages);
var syms = io.pedestal.app.messages.message_params(messages__$1);
if(cljs.core.seq(syms))
{return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id(item_id),"\uFDD0:click",(function (e){
domina.events.prevent_default(e);
return io.pedestal.app.render.push.handlers.automatic.modal_collect_input(r,input_queue,modal_path__$1,transform_name,messages__$1);
}));
} else
{return io.pedestal.app.render.events.send_on_click.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([domina.by_id(item_id),input_queue,io.pedestal.app.render.push.handlers.automatic.get_missing_input(messages__$1)], 0));
}
});
});
event_enter = function(modal_path){
switch(arguments.length){
case 0:
return event_enter__0.call(this);
case 1:
return event_enter__1.call(this,modal_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
event_enter.cljs$core$IFn$_invoke$arity$0 = event_enter__0;
event_enter.cljs$core$IFn$_invoke$arity$1 = event_enter__1;
return event_enter;
})()
;
io.pedestal.app.render.push.handlers.automatic.event_exit = (function event_exit(r,p__13647,_){
var vec__13649 = p__13647;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13649,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13649,1,null);
var transform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13649,2,null);
var node_id = io.pedestal.app.render.push.get_id(r,path);
var default_button_id = io.pedestal.app.render.push.get_id(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,"control",cljs.core.array_seq([transform_name], 0)));
var id = (function (){var or__3943__auto__ = default_button_id;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return node_id;
}
})();
if(cljs.core.truth_(id))
{domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2(domina.by_id(id),"\uFDD0:click");
} else
{}
if(cljs.core.truth_(default_button_id))
{return domina.destroy_BANG_(domina.by_id(default_button_id));
} else
{return null;
}
});
io.pedestal.app.render.push.handlers.automatic.destroy_BANG_ = (function destroy_BANG_(r,path){
var temp__4090__auto__ = io.pedestal.app.render.push.get_id(r,path);
if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;
io.pedestal.app.render.push.delete_id_BANG_(r,path);
return domina.destroy_BANG_(domina.by_id(id));
} else
{return io.pedestal.app.util.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\uFDD0:in","\uFDD0:default-exit","\uFDD0:msg",[cljs.core.str("warning! no id "),cljs.core.str(io.pedestal.app.render.push.handlers.automatic.id),cljs.core.str(" found for path "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')], 0));
}
});
io.pedestal.app.render.push.handlers.automatic.default_exit = (function default_exit(r,p__13650,d){
var vec__13652 = p__13650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,0,null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,1,null);
return io.pedestal.app.render.push.handlers.automatic.destroy_BANG_(r,path);
});
io.pedestal.app.render.push.handlers.automatic.sync_class_BANG_ = (function sync_class_BANG_(pred,id,class_name){
var element = domina.by_id(id);
if(cljs.core.truth_(pred))
{if(cljs.core.not(domina.has_class_QMARK_(element,class_name)))
{return domina.add_class_BANG_(element,class_name);
} else
{return null;
}
} else
{if(cljs.core.truth_(domina.has_class_QMARK_(element,class_name)))
{return domina.remove_class_BANG_(element,class_name);
} else
{return null;
}
}
});
io.pedestal.app.render.push.handlers.automatic.data_renderer_config = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.EMPTY,cljs.core.constantly(null)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.EMPTY,cljs.core.constantly(null)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.render_node_enter], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.default_exit], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.render_value_update], true),cljs.core.PersistentVector.fromArray(["\uFDD0:attr",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),cljs.core.constantly(null)], true),cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.render_event_enter], true),cljs.core.PersistentVector.fromArray(["\uFDD0:transform-disable",cljs.core.PersistentVector.fromArray(["\uFDD0:**"], true),io.pedestal.app.render.push.handlers.automatic.event_exit], true)], true);
