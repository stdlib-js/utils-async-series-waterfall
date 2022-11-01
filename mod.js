// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var l,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(r,t)||a.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var l=t;function c(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=Math.floor;function p(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&(t=r.length,y(t)===t)&&r.length>=0&&r.length<=4294967295;var t}var s=/./;function b(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=d()?function(r){var t,e,n,o,u;if(null==r)return g.call(r);e=r[m],u=m,t=null!=(o=r)&&w.call(o,u);try{r[m]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[m]=e:delete r[m],n}:function(r){return g.call(r)},h=Boolean.prototype.toString;var j=d();function S(r){return"object"==typeof r&&(r instanceof Boolean||(j?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function E(r){return b(r)||S(r)}function A(){return new Function("return this;")()}c(E,"isPrimitive",b),c(E,"isObject",S);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var V=function(r){if(arguments.length){if(!b(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return A()}if(O)return O;if(T)return T;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),x=V.document&&V.document.childNodes,C=Int8Array;function M(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;c(M,"REGEXP",k);var F=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};function G(r){return null!==r&&"object"==typeof r}function L(r){var t,e,n,o;if(("Object"===(e=_(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=k.exec(n.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}c(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!F(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(G));var I="function"==typeof s||"object"==typeof C||"function"==typeof x?function(r){return L(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?L(r).toLowerCase():t};function R(r){return"function"===I(r)}var U=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!p(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(R);function N(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function X(r,t,e){if(!U(r))throw new TypeError(N("invalid argument. First argument must be an array of functions. Value: `%s`.",r));if(!R(t))throw new TypeError(N("0if2S",t));return function(){var n=-1;!function o(){var u,i,f;if(arguments[0])return t(arguments[0]);if((n+=1)>=r.length)return t();for(i=arguments.length,u=new Array(i),f=0;f<i-1;f++)u[f]=arguments[f+1];u[f]=o,r[n].apply(e,u)}()}}function q(r,t,e){X(r,t,e)()}c(q,"factory",X);export{q as default,X as factory};
//# sourceMappingURL=mod.js.map
