"use strict";(self.webpackChunkcsb_site=self.webpackChunkcsb_site||[]).push([[448],{4168:function(e,t,r){r.d(t,{i:function(){return j}});var n=r(7294),o=r(4360),l=r(6768),a=r(47),i=r(4258);const s={xs:(0,l.h)(1),sm:(0,l.h)(2),md:(0,l.h)(3),lg:(0,l.h)(4),xl:(0,l.h)(5)};function c(e,t){const r=e.fn.variant({variant:"outline",color:t}).border;return"string"==typeof t&&(t in e.colors||t.split(".")[0]in e.colors)?r:void 0===t?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:t}var u=(0,a.k)(((e,{color:t},{size:r,variant:n})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,l.h)(1),borderTop:`${(0,i.a)({size:r,sizes:s})} ${n} ${c(e,t)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,i.a)({size:r,sizes:s})} ${n} ${c(e,t)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===t?e.colors.dark[1]:e.fn.themeColor(t,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,l.h)((0,i.a)({size:r,sizes:s})),borderTopColor:c(e,t),borderTopStyle:n,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,l.h)((0,i.a)({size:r,sizes:s})),borderLeftColor:c(e,t),borderLeftStyle:n}}))),f=r(209),m=r(5918),b=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&g(e,r,t[r]);if(v)for(var r of v(t))h.call(t,r)&&g(e,r,t[r]);return e};const w={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},j=(0,n.forwardRef)(((e,t)=>{const r=(0,o.N4)("Divider",w,e),{className:a,color:i,orientation:s,size:c,label:b,labelPosition:g,labelProps:j,variant:x,styles:E,classNames:z,unstyled:P}=r,N=((e,t)=>{var r={};for(var n in e)y.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&v)for(var n of v(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:k,cx:S}=u({color:i},{classNames:z,styles:E,unstyled:P,name:"Divider",variant:x,size:c}),C="vertical"===s,D="horizontal"===s,T=!!b&&D,L=!(null==j?void 0:j.color);return n.createElement(f.x,O({ref:t,className:S(k.root,{[k.vertical]:C,[k.horizontal]:D,[k.withLabel]:T},a),role:"separator"},N),T&&n.createElement(m.x,($=O({},j),Z={size:(null==j?void 0:j.size)||"xs",mt:(0,l.h)(2),className:S(k.label,k[g],{[k.labelDefaultStyles]:L})},d($,p(Z))),b));var $,Z}));j.displayName="@mantine/core/Divider"},9978:function(e,t,r){r.d(t,{A:function(){return o},O:function(){return n}});const n=[{title:"문의사항",to:"/help"},{title:"FAQ",to:"/help/faq"},{title:"공지사항",to:"/help/notice"},{title:"오시는길",to:"/help/way"}],o=[{title:"대표소개",to:"/introduction"},{title:"조직도",to:"/introduction/organization"},{title:"회사 비전",to:"/introduction/vision"}]},537:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(36),o=r(7955),l=r(7294),a=r(4160);const i="relative leading-10 after:box-border after:bg-accent/[.50] after:w-full after:h-1 after:absolute after:left-0 after:bottom-0";var s=e=>{let{menus:t}=e;const r=e=>{let{isCurrent:t}=e;return t?{className:i+" after:transition-none "}:{className:i+" after:scale-x-0 after:hover:transition-all after:hover:ease-in-out after:hover:duration-200 after:hover:scale-100 "}};return l.createElement("div",{className:"flex justify-center gap-x-20 mx-8 p-8 h-20 items-center text-accent text-lg font-bold"},t.map((e=>l.createElement(a.rU,{key:e.title,to:e.to,getProps:r},e.title))))};var c=e=>{let{children:t,title:r,menus:a}=e;return l.createElement(n.Z,null,l.createElement(o.Z,{title:r,isSplit:!0}),l.createElement(s,{menus:a}),t)}},9665:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=r(9978),o=r(7294),l=r(537),a=r(4168),i=r(2091);const s=()=>o.createElement(o.Fragment,null,o.createElement("div",{className:"w-full text-accent p-4 flex justify-between"},o.createElement("div",{className:"flex "},o.createElement("div",{className:"pl-2 pr-4 font-bold"},"Q"),o.createElement("div",null,"Question")),o.createElement("div",null,o.createElement(i.iUH,null))),o.createElement(a.i,{size:"sm"}));var c=()=>o.createElement(l.Z,{title:"고객 지원",menus:n.O},o.createElement(a.i,{size:"lg"}),Array.from({length:10},((e,t)=>o.createElement(s,{key:t}))))},3621:function(e,t,r){r.d(t,{w_:function(){return b}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),a=["attr","size","title"];function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),m(e.child))))}function b(e){return t=>n.createElement(d,s({attr:u({},e.attr)},t),m(e.child))}function d(e){var t=t=>{var r,{attr:o,size:l,title:c}=e,f=i(e,a),m=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(e=>t(e))):t(o)}}}]);
//# sourceMappingURL=component---src-pages-help-faq-index-tsx-e9e4d35f3e7e700e2476.js.map