// Console.groupCollapsed gets borked on advanced compilation
// http://dev.clojure.org/jira/browse/CLJS-581
function Console() {};
Console.prototype.groupCollapsed = function(var_args) {};

function Spinner(a) {};
Spinner.prototype.spin = function(target) {};
Spinner.prototype.stop = function() {};
Spinner.el.style = {};
