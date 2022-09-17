// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).waterfall={})}(this,(function(t){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,c,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,c&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,e,r.get),y&&f&&f.call(t,e,r.set),t};var c=r;function p(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=Math.floor;function s(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(e=t.length,y(e)===e)&&t.length>=0&&t.length<=4294967295;var e}var b=/./;function d(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return v&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=g()?function(t){var e,r,n,o,i;if(null==t)return w.call(t);r=t[m],i=m,e=null!=(o=t)&&h.call(o,i);try{t[m]=void 0}catch(e){return w.call(t)}return n=w.call(t),e?t[m]=r:delete t[m],n}:function(t){return w.call(t)},j=Boolean.prototype.toString;var S=g();function E(t){return"object"==typeof t&&(t instanceof Boolean||(S?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function O(t){return d(t)||E(t)}function T(){return new Function("return this;")()}p(O,"isPrimitive",d),p(O,"isObject",E);var A="object"==typeof self?self:null,P="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof B?B:null;var V=function(t){if(arguments.length){if(!d(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(A)return A;if(P)return P;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),M=V.document&&V.document.childNodes,C=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;p(k,"REGEXP",F);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function L(t){return null!==t&&"object"==typeof t}function I(t){var e,r,n,o;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=F.exec(n.toString()))return e[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(L));var R="function"==typeof b||"object"==typeof C||"function"==typeof M?function(t){return I(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?I(t).toLowerCase():e};function U(t){return"function"===R(t)}var N=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!s(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(U);function X(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function q(t,e,r){if(!N(t))throw new TypeError(X("invalid argument. First argument must be an array of functions. Value: `%s`.",t));if(!U(e))throw new TypeError(X("0if2S",e));return function(){var n=-1;!function o(){var i,u,f;if(arguments[0])return e(arguments[0]);if((n+=1)>=t.length)return e();for(u=arguments.length,i=new Array(u),f=0;f<u-1;f++)i[f]=arguments[f+1];i[f]=o,t[n].apply(r,i)}()}}function z(t,e,r){q(t,e,r)()}p(z,"factory",q),t.default=z,t.factory=q,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
