// Console.groupCollapsed gets borked on advanced compilation
// http://dev.clojure.org/jira/browse/CLJS-581
function Console() {};
Console.prototype.groupCollapsed = function(var_args) {};
function Spinner(a) {};
var spinner = {};
spinner.spin = function(t) {};
Spinner.stop = function() {};
Spinner.el.style = {};
