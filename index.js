// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=t,c=function(e,r,t){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e},p=r()?f:c,_=function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=function(e,r,t,n,o,a){var i,u,l;if(e<=0)return n;for(i=t<0?(1-e)*t:0,u=o<0?(1-e)*o:0,l=0;l<e;l++)n[u]=a(r[i]),i+=t,u+=o;return n};_(d,"ndarray",(function(e,r,t,n,o,a,i,u){var l,f,c;if(e<=0)return o;for(l=n,f=i,c=0;c<e;c++)o[f]=u(r[l]),l+=t,f+=a;return o}));var y=d,b=function(e){return e!=e},s=function(e){return b(e)?NaN:e>0?e:0};function v(e,r,t,n,o){return y(e,r,t,n,o,s)}return _(v,"ndarray",(function(e,r,t,n,o,a,i){return y.ndarray(e,r,t,n,o,a,i,s)})),v},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dramp=r();
//# sourceMappingURL=index.js.map
