CreateMethodProperty(Array.prototype,"findLast",function r(t){var e=ToObject(this),o=LengthOfArrayLike(e);if(!IsCallable(t))throw TypeError();for(var a=o-1;a>=0;){var i=ToString(a),n=Get(e,i);if(ToBoolean(Call(t,arguments.length>1?arguments[1]:void 0,[n,a,e])))return n;a-=1}});