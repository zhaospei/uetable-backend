(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9413],{96901:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"}},94613:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let o=(n=r(54952))&&n.__esModule?n:{default:n};t.default=o,e.exports=o},54952:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(2265)),o=_interop_require_default(r(96901)),a=_interop_require_default(r(51718));function _interop_require_default(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}var s=n.forwardRef(function(e,t){var r,s;return n.createElement(a.default,(r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e),s=s={ref:t,icon:o.default},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))}),r))})},56801:function(e,t,r){Promise.resolve().then(r.bind(r,99421))},75826:function(e,t,r){"use strict";var n=r(92173),o=r(99110),a=r(99231),s=r.n(a);let c=new o.Z,i=n.Z.create({baseURL:"http://fall2324w3g4.int3306.freeddns.org/api"});i.interceptors.request.use(e=>{let t=c.get("authToken");return s()(t)||(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),i.interceptors.response.use(e=>e.data,e=>e.response?Promise.reject({status:e.response.status,data:e.response.data}):Promise.reject(e.request?e.request:e.message)),t.Z=i},99421:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ScoreColumn}});var n=r(57437),o=r(75826),a=r(45623),s=r(2265),c=r(44909),i=r(16573),l=r(24235),u=r(50039),f=r(86812),d=r(79857),p=r(12001),m=r(24010),y=r(36045);function ScoreColumn(){let[e,t]=(0,s.useState)(),[r,b]=(0,s.useState)([]),[h,O]=(0,s.useState)("QH-2018");return(0,s.useEffect)(()=>{let e=[];for(let t=18;t<=25;t++){let r={id:t,title:"QH-20"+t};e.push(r)}b(e)},[]),(0,s.useEffect)(()=>{o.Z.get("/statistic/getAverageGpaBySchoolYear",{params:{schoolYear:h}}).then(e=>{t(e.result)}).catch(e=>{})},[h]),(0,n.jsxs)(m.default,{title:"Thống k\xea - Điểm số",children:[(0,n.jsxs)("div",{className:"flex gap-5  items-center",children:[(0,n.jsx)(y.Z,{}),(0,n.jsx)(function(e){let{allYearInfo:t,onChange:r,selectedYear:o}=e;return(0,n.jsxs)("div",{className:"flex w-full gap-4 items-center relative h-[42px]",children:[(0,n.jsx)("span",{className:"font-semibold text-2xl",children:"Kh\xf3a học"}),(0,n.jsx)(function(){return(0,n.jsx)(a.default,{defaultValue:o,className:"w-[170px] h-full",options:[...t.map((e,t)=>({value:e.id,label:(0,n.jsx)("strong",{children:e.title})}))],onChange:r})},{})]})},{allYearInfo:r,onChange:function(e){O(e)},selectedYear:h})]}),(0,n.jsxs)(c.v,{width:1e3,height:500,data:e,margin:{top:40,left:20},children:[(0,n.jsx)(i.q,{strokeDasharray:"3 3"}),(0,n.jsx)(l.K,{dataKey:"type",fontWeight:"bold"}),(0,n.jsx)(u.B,{}),(0,n.jsx)(f.u,{}),(0,n.jsx)(d.D,{}),(0,n.jsx)(p.$,{dataKey:"value",name:"Sinh vi\xean",fill:"#8884d8",activeBar:{fill:"#6863db"}})]})]})}},36045:function(e,t,r){"use strict";var n=r(57437),o=r(35302),a=r(99231),s=r.n(a),c=r(33147),i=r(2265),l=r(23986);let{Text:u}=o.default,f=["#7bb8ea","#FFBC99","#FFD88D","#B5E4CA","#CABDFF","#B1E5FC","#E0C9C1"];t.Z=i.memo(e=>{let{color:t,className:r,children:o}=e;return(s()(t)&&(t=f[(0,c.Z)(f.length-1)]),o)?(0,n.jsx)("div",{className:(0,l.m)("min-h-8 px-1 min-w-8 rounded-md flex items-center justify-center text-center",r),style:{backgroundColor:t},children:(0,n.jsx)(u,{strong:!0,className:"font-semibold text-xl",children:o})}):(0,n.jsx)("div",{className:(0,l.m)("h-8 w-4 rounded",r),style:{backgroundColor:t}})})},24010:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Main}});var n=r(57437),o=r(89271),a=r(35302);r(2265);var s=r(23986),c=r(78073);function BackTopIcon(e){let{size:t,color:r,className:o}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:null!=t?t:30,height:null!=t?t:30,fill:null!=r?r:c.C.ROYAL_GRAY_COLOR,className:o,children:(0,n.jsx)("path",{d:"M17.71,9.88l-4.3-4.29a2,2,0,0,0-2.82,0L6.29,9.88a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0L11,8V19a1,1,0,0,0,2,0V8l3.29,3.29a1,1,0,1,0,1.42-1.41Z"})})}let{Title:i}=a.default;function Main(e){let{className:t,children:r,title:a,goToTop:c=!0}=e;return(0,n.jsxs)("div",{className:"flex flex-col ml-layout-el w-auto mr-body-pd",children:[a&&(0,n.jsx)(i,{level:2,className:"mt-3",children:a}),(0,n.jsxs)("main",{className:(0,s.m)("\n                bg-secondary\n                rounded-layout-el\n                p-8\n                min-h-[calc(100vh-109px)]\n                shadow\n            ",t),children:[r,c&&(0,n.jsx)(o.Z.BackTop,{icon:(0,n.jsx)(BackTopIcon,{className:"absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 group-hover:fill-black"}),className:"group"})]})]})}},78073:function(e,t,r){"use strict";r.d(t,{C:function(){return n}});let n={PRIMARY_COLOR:"#4096ff",DARK_PRIMARY_COLOR:"#19619D",LIGHT_PRIMARY_COLOR:"#c6e0f6",SECONDARY_COLOR:"#FFFFFF",SECONDARY_CONTRAST_COLOR:"#1A1D1F",ROYAL_GRAY_COLOR:"#6F767E",TABLE_BORDER_COLOR:"rgba(75, 85, 99)",DANGER_COLOR:"#FF4D4F",PRIMARY_ICON_COLOR:"#7D7C7C",UNDERGROUND_COLOR:"#f4f4f4",CLICKABLE_COLOR:"#4096ff",LAYOUT_ELEMENT_SPACE:"15px",LAYOUT_ELEMENT_BORDER_RADIUS:"15px",BODY_PADDING:"12px"}},8236:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,O=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function z(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case a:case c:case s:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case b:case y:case i:return e;default:return t}}case o:return t}}}function A(e){return z(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=i,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=b,t.Memo=y,t.Portal=o,t.Profiler=c,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return A(e)||z(e)===u},t.isConcurrentMode=A,t.isContextConsumer=function(e){return z(e)===l},t.isContextProvider=function(e){return z(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return z(e)===d},t.isFragment=function(e){return z(e)===a},t.isLazy=function(e){return z(e)===b},t.isMemo=function(e){return z(e)===y},t.isPortal=function(e){return z(e)===o},t.isProfiler=function(e){return z(e)===c},t.isStrictMode=function(e){return z(e)===s},t.isSuspense=function(e){return z(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===c||e===s||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===i||e.$$typeof===l||e.$$typeof===d||e.$$typeof===O||e.$$typeof===x||e.$$typeof===_||e.$$typeof===h)},t.typeOf=z},9176:function(e,t,r){"use strict";e.exports=r(8236)},44909:function(e,t,r){"use strict";r.d(t,{v:function(){return i}});var n=r(94140),o=r(12001),a=r(24235),s=r(50039),c=r(39677),i=(0,n.z)({chartName:"BarChart",GraphicalChild:o.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:a.K},{axisType:"yAxis",AxisComp:s.B}],formatAxisMap:c.t9})},33147:function(e,t,r){"use strict";function randomInteger(e,t){if(void 0===t&&(t=e,e=0),"number"!=typeof e||"number"!=typeof t)throw TypeError("Expected all arguments to be numbers");return Math.floor(Math.random()*(t-e+1)+e)}r.d(t,{Z:function(){return randomInteger}})}},function(e){e.O(0,[9020,1718,9273,2808,350,260,3986,5022,3954,9271,5623,8660,2971,2472,1744],function(){return e(e.s=56801)}),_N_E=e.O()}]);