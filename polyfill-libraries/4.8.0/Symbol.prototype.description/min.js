!function(r){function n(r){return 0===r.toString().indexOf("__symbol:")}function e(r){if("symbol"===Type(r))return r;throw TypeError(r+" is not a symbol")}var i,t={};try{i=Function("s","var v = s.valueOf(); return { [v]() {} }[v].name;")}catch(r){}var o=function(){},l=i&&"inferred"===o.name?i:null;if(Object.defineProperty(Symbol.prototype,"description",{configurable:!0,enumerable:!1,get:function(){var r=this,o=e(r);if(l){var a=i(o);if(""!==a)return a.slice(1,-1)}if(void 0!==t[o])return t[o];var u=o.toString();if(n(o)){var f=u.lastIndexOf("0.");u=u.slice(10,f)}else u=u.slice(7,u.length-1);return""!==u?u:void 0}}),"Proxy"in r){var a={apply:function(r,e,i){var o=i[0],l=r.apply(null,i);return n(l)?void 0===o||null!==o&&!isNaN(o)&&""!==String(o)||(t[l]=String(o)):""===String(o)&&(t[l]=""),l}};r.Symbol=new Proxy(r.Symbol,a)}}(self);