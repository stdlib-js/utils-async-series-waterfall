// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(r,s,i){if(!t(r))throw new TypeError(e("invalid argument. First argument must be an array of functions. Value: `%s`.",r));if(!n(s))throw new TypeError(e("0if2S",s));return function(){var t=-1;!function n(){var e,o,f;if(arguments[0])return s(arguments[0]);if((t+=1)>=r.length)return s();for(o=arguments.length,e=new Array(o),f=0;f<o-1;f++)e[f]=arguments[f+1];e[f]=n,r[t].apply(i,e)}()}}function i(r,t,n){s(r,t,n)()}r(i,"factory",s);export{i as default,s as factory};
//# sourceMappingURL=index.mjs.map
