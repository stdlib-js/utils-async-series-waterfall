"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=f(function(E,m){
var p=require('@stdlib/assert-is-function-array/dist'),q=require('@stdlib/assert-is-function/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function w(e,r,n){if(!p(e))throw new TypeError(v('1RdAl',e));if(!q(r))throw new TypeError(v('1Rd2H',r));return l;function l(){var u=-1;s();function s(){var a,i,t;if(arguments[0])return r(arguments[0]);if(u+=1,u>=e.length)return r();for(i=arguments.length,a=new Array(i),t=0;t<i-1;t++)a[t]=arguments[t+1];a[t]=s,e[u].apply(n,a)}}}m.exports=w
});var y=f(function(T,g){
var d=o();function x(e,r,n){d(e,r,n)()}g.exports=x
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=y(),F=o();h(c,"factory",F);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
