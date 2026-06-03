"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=f(function(T,m){
var p=require('@stdlib/assert-is-function-array/dist'),q=require('@stdlib/assert-is-function/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r,n){if(!p(e))throw new TypeError(v('1RdAl',e));if(!q(r))throw new TypeError(v('1Rd2H',r));return y;function y(){var u=-1;o();function o(){var t,s,a;if(arguments[0])return r(arguments[0]);if(u+=1,u>=e.length)return r();for(s=arguments.length,t=[],a=0;a<s-1;a++)t.push(arguments[a+1]);t.push(o),e[u].apply(n,t)}}}m.exports=h
});var c=f(function(V,g){
var w=i();function d(e,r,n){w(e,r,n)()}g.exports=d
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=c(),F=i();x(l,"factory",F);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
