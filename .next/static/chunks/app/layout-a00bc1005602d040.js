(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1218:function(t,e,r){Promise.resolve().then(r.bind(r,8681)),Promise.resolve().then(r.t.bind(r,4138,23)),Promise.resolve().then(r.t.bind(r,7402,23))},8681:function(t,e,r){"use strict";r.r(e),r.d(e,{ShoppingCartProvider:function(){return a}});var n=r(9268),o=r(6006);let i=(0,o.createContext)({itemsOnProductList:[],totalItemsOnProductList:0,addToProductList:t=>{},removeFromProductList:t=>{},productIsOnList:t=>{},itemsInCart:[],addToCart:t=>{},removeFromCart:t=>{},removeOneFromCart:t=>{},itemIsInCart:t=>{}});function a(t){let[e,r]=(0,o.useState)([]),[a,c]=(0,o.useState)([]),s={itemsOnProductList:a,totalItemsOnProductList:a.length,addToProductList:function(t){c(e=>{let r=e.find(e=>e.id===t.id);return r?e:e.concat(t)})},removeFromProductList:function(t){c(e=>e.filter(e=>e.id!==t))},productIsOnList:function(t){return a.some(e=>e.id===t)},itemsInCart:e,addToCart:function(t){t.countincart=parseInt(t.countincart)+1,r(e=>{let r=e.find(e=>e.id===t.id);return r?(r.countincart=parseInt(r.countincart)+1,e.filter(t=>t.id!==r.id).concat(r)):e.concat(t)})},removeFromCart:function(t){r(e=>e.filter(e=>e.id!==t))},removeOneFromCart:function(t){r(e=>{let r=e.find(e=>e.id===t);if(r&&r.countincart>0)return r.countincart=parseInt(r.countincart)-1,e.filter(t=>t.countincart>0)})},itemIsInCart:function(t){return e.some(e=>e.id===t)}};return(0,n.jsx)(i.Provider,{value:s,children:t.children})}e.default=i},7402:function(){},4138:function(t){t.exports={style:{fontFamily:"'__Yanone_Kaffeesatz_af6621', '__Yanone_Kaffeesatz_Fallback_af6621'",fontStyle:"normal"},className:"__className_af6621",variable:"__variable_af6621"}},3177:function(t,e,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(t,e,r){var n,s={},u=null,f=null;for(n in void 0!==r&&(u=""+r),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(f=e.ref),e)i.call(e,n)&&!c.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===s[n]&&(s[n]=e[n]);return{$$typeof:o,type:t,key:u,ref:f,props:s,_owner:a.current}}e.jsx=s,e.jsxs=s},9268:function(t,e,r){"use strict";t.exports=r(3177)}},function(t){t.O(0,[253,769,744],function(){return t(t.s=1218)}),_N_E=t.O()}]);