goog.provide('semtag_web.spinner');
goog.require('cljs.core');
goog.require('goog.ui.KeyboardShortcutHandler');
goog.require('goog.events.KeyCodes');
goog.require('domina');
semtag_web.spinner.spinner = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
semtag_web.spinner.modal_opts = cljs.core.PersistentHashMap.fromArrays(["\uFDD0:lines","\uFDD0:width","\uFDD0:speed","\uFDD0:zIndex","\uFDD0:radius","\uFDD0:color","\uFDD0:rotate","\uFDD0:length","\uFDD0:corners","\uFDD0:trail","\uFDD0:hwaccel","\uFDD0:shadow","\uFDD0:className"],[11,8,1,2.0E9,45,"#FFF",9,33,1,50,false,true,"spinner"]);
semtag_web.spinner.setup_keybindings = (function setup_keybindings(){
var shortcut_handler = (new goog.ui.KeyboardShortcutHandler(document));
var show_triggered = ((function (shortcut_handler){
return (function (event){
console.log([cljs.core.str("Received: "),cljs.core.str(event.identifier)].join(''));
cljs.core.deref(semtag_web.spinner.spinner).stop();
return domina.by_id("spin_modal_overlay").style.display = "none";
});})(shortcut_handler))
;
shortcut_handler.registerShortcut("esc",goog.events.KeyCodes.ESC);
return goog.events.listen(shortcut_handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,show_triggered);
});
semtag_web.spinner.create_spinner = (function create_spinner(){
cljs.core.reset_BANG_(semtag_web.spinner.spinner,(new Spinner(cljs.core.clj__GT_js(semtag_web.spinner.modal_opts))));
cljs.core.deref(semtag_web.spinner.spinner).spin(domina.by_id("spin_modal_overlay"));
cljs.core.deref(semtag_web.spinner.spinner).el.style.top = "50%";
return cljs.core.deref(semtag_web.spinner.spinner).el.style.left = "50%";
});
semtag_web.spinner.render = (function render(new_value){
console.log("spinner",new_value);
if(cljs.core.truth_((function (){var and__3941__auto__ = new_value;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not(cljs.core.deref(semtag_web.spinner.spinner));
} else
{return and__3941__auto__;
}
})()))
{semtag_web.spinner.create_spinner();
semtag_web.spinner.setup_keybindings();
} else
{}
if(cljs.core.truth_(new_value))
{return domina.by_id("spin_modal_overlay").style.display = "block";
} else
{return setTimeout((function (){
return domina.by_id("spin_modal_overlay").style.display = "none";
}),300);
}
});
