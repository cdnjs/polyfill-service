!function(){var n=/^\s*function\s+([^(\s]*)\s*/,t=Function,e=t.prototype,r=e.constructor,o=function(o){var c,u;return o===t||o===r?u="Function":o!==e&&(c=(""+o).match(n),u=c&&c[1]),u||""};Object.defineProperty(e,"name",{get:function n(){var t=this,r=o(t);return t!==e&&Object.defineProperty(t,"name",{value:r,configurable:!0}),r},configurable:!0})}();