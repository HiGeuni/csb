"use strict";(self.webpackChunkcsb_site=self.webpackChunkcsb_site||[]).push([[269],{9978:function(e,t,r){r.d(t,{Aq:function(){return l},OE:function(){return n},_W:function(){return a}});const n=[{title:"문의사항",to:"/help"},{title:"FAQ",to:"/help/faq"},{title:"공지사항",to:"/help/notice"}],l=[{title:"대표소개",to:"/introduction"},{title:"조직도",to:"/introduction/organization"},{title:"회사 비전",to:"/introduction/vision"}],a=[{title:"보도 자료",to:"/news"}]},4213:function(e,t,r){var n=r(7294),l=r(4160);t.Z=e=>{let{menus:t}=e;return n.createElement("div",{className:"flex justify-center  gap-x-8 xs:gap-x-12 md:gap-x-20 md:mx-8 p-8 h-20 items-center text-accent text-md md:text-lg font-bold"},t.map((e=>n.createElement(l.rU,{key:e.title,to:e.to,getProps:t=>{let{isCurrent:r,location:n}=t,l="";return l="/help/notice"===e.to&&n.pathname.includes("/help/notice")?" after:scale-x-100 ":r?" after:transition-none ":" after:scale-x-0 after:hover:transition-all after:hover:ease-in-out after:hover:duration-200 after:hover:scale-100 ",{className:"relative leading-10 after:box-border after:bg-accent/[.50] after:w-full after:h-1 after:absolute after:left-0 after:bottom-0"+l}}},e.title))))}},5784:function(e,t,r){var n=r(36),l=r(7955),a=r(4213),i=r(7294);t.Z=e=>{let{children:t,title:r,detailTitle:o,menus:c}=e;return i.createElement(n.Z,null,i.createElement(l.Z,{title:r,detailTitle:o}),i.createElement(a.Z,{menus:c}),t)}},3008:function(e,t,r){r.r(t);var n=r(7294),l=r(2091),a=r(9978),i=r(5784),o=r(4160);t.default=e=>{let{pageContext:t}=e;return n.createElement(i.Z,{title:"고객 지원",detailTitle:"Help",menus:a.OE},n.createElement("section",{className:"px-4"},n.createElement("div",{className:"flex items-center cursor-pointer mb-4 md:mb-2 text-[#595959] gap-2",onClick:async()=>{await(0,o.c4)(-1)}},n.createElement(l.x_l,null),"뒤로 가기"),n.createElement("div",{className:"text-accent text-2xl md:text-3xl lg:text-4xl font-bold mb-6"},t.title),n.createElement("div",{className:"flex gap-2 items-center text-text mb-6"},n.createElement("div",{className:"w-8 h-8 bg-primary rounded-full"}),n.createElement("div",{className:"text-accent"},"PennBIT"),n.createElement("div",{className:"text-[#595959]"},"/ ",t.createdAt)),n.createElement("div",{className:"leading-loose"},t.content.content)))}},3621:function(e,t,r){r.d(t,{w_:function(){return p}});var n=r(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),i=["attr","size","title"];function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),m(e.child))))}function p(e){return t=>n.createElement(d,c({attr:u({},e.attr)},t),m(e.child))}function d(e){var t=t=>{var r,{attr:l,size:a,title:s}=e,f=o(e,i),m=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,f,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=component---src-components-notice-notice-detail-page-tsx-2b8b41d47abc19d1ad7c.js.map