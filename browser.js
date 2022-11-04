// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(e,r)||a.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),p="get"in l,_="set"in l,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,r,l.get),_&&i&&i.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e,r,t,n,o,i){var u,a,l;if(e<=0)return n;for(u=t<0?(1-e)*t:0,a=o<0?(1-e)*o:0,l=0;l<e;l++)n[a]=i(r[u]),u+=t,a+=o;return n}function p(e,r,t,n,o,i,u,a){var l,f,c;if(e<=0)return o;for(l=n,f=u,c=0;c<e;c++)o[f]=a(r[l]),l+=t,f+=i;return o}function _(e){return function(e){return e!=e}(e)?NaN:e>0?e:0}function d(e,r,t,n,o){return c(e,r,t,n,o,_)}return f(c,"ndarray",p),f(d,"ndarray",(function(e,r,t,n,o,i,u){return p(e,r,t,n,o,i,u,_)})),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dramp=r();
//# sourceMappingURL=browser.js.map
