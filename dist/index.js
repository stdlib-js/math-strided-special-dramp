"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(z,s){
var j=require('@stdlib/strided-base-dmap/dist'),x=require('@stdlib/math-base-special-ramp/dist');function l(e,r,a,i,t){return j(e,r,a,i,t,x)}s.exports=l
});var q=u(function(A,p){
var R=require('@stdlib/strided-base-dmap/dist').ndarray,_=require('@stdlib/math-base-special-ramp/dist');function E(e,r,a,i,t,y,f){return R(e,r,a,i,t,y,f,_)}p.exports=E
});var o=u(function(B,m){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),b=q();O(d,"ndarray",b);m.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=o(),n,c=h(g(__dirname,"./native.js"));c instanceof Error?n=k:n=c;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
