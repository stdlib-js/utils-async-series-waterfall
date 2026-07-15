"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var i=f(function(T,m){
var p=require('@stdlib/assert-is-function-array/dist'),q=require('@stdlib/assert-is-function/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r,t){if(!p(e))throw new TypeError(v('1RdAl',e));if(!q(r))throw new TypeError(v('1Rd2H',r));return y;function y(){var u=-1;o();function o(){var a,s,n;if(arguments[0])return r(arguments[0]);if(u+=1,u>=e.length)return r();for(s=arguments.length,a=[],n=0;n<s-1;n++)a.push(arguments[n+1]);a.push(o),e[u].apply(t,a)}}}m.exports=h
});var c=f(function(V,g){
var w=i();function d(e,r,t){w(e,r,t)()}g.exports=d
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=c(),F=i();x(l,"factory",F);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
