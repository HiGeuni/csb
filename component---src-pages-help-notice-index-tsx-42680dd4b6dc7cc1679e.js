"use strict";(self.webpackChunkcsb_site=self.webpackChunkcsb_site||[]).push([[346],{4168:function(e,t,r){r.d(t,{i:function(){return w}});var n=r(7294),a=r(4360),o=r(6768),i=r(47),l=r(4258);const c={xs:(0,o.h)(1),sm:(0,o.h)(2),md:(0,o.h)(3),lg:(0,o.h)(4),xl:(0,o.h)(5)};function s(e,t){const r=e.fn.variant({variant:"outline",color:t}).border;return"string"==typeof t&&(t in e.colors||t.split(".")[0]in e.colors)?r:void 0===t?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:t}var u=(0,i.k)(((e,{color:t},{size:r,variant:n})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,o.h)(1),borderTop:`${(0,l.a)({size:r,sizes:c})} ${n} ${s(e,t)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,l.a)({size:r,sizes:c})} ${n} ${s(e,t)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===t?e.colors.dark[1]:e.fn.themeColor(t,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,o.h)((0,l.a)({size:r,sizes:c})),borderTopColor:s(e,t),borderTopStyle:n,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,o.h)((0,l.a)({size:r,sizes:c})),borderLeftColor:s(e,t),borderLeftStyle:n}}))),d=r(209),f=r(5918),p=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&h(e,r,t[r]);if(g)for(var r of g(t))y.call(t,r)&&h(e,r,t[r]);return e};const P={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},w=(0,n.forwardRef)(((e,t)=>{const r=(0,a.N4)("Divider",P,e),{className:i,color:l,orientation:c,size:s,label:p,labelPosition:h,labelProps:w,variant:x,styles:E,classNames:N,unstyled:j}=r,z=((e,t)=>{var r={};for(var n in e)v.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))t.indexOf(n)<0&&y.call(e,n)&&(r[n]=e[n]);return r})(r,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:C,cx:S}=u({color:l},{classNames:N,styles:E,unstyled:j,name:"Divider",variant:x,size:s}),k="vertical"===c,I="horizontal"===c,L=!!p&&I,A=!(null==w?void 0:w.color);return n.createElement(d.x,O({ref:t,className:S(C.root,{[C.vertical]:k,[C.horizontal]:I,[C.withLabel]:L},i),role:"separator"},z),L&&n.createElement(f.x,(D=O({},w),$={size:(null==w?void 0:w.size)||"xs",mt:(0,o.h)(2),className:S(C.label,C[h],{[C.labelDefaultStyles]:A})},m(D,b($))),p));var D,$}));w.displayName="@mantine/core/Divider"},9978:function(e,t,r){r.d(t,{A:function(){return a},O:function(){return n}});const n=[{title:"문의사항",to:"/help"},{title:"FAQ",to:"/help/faq"},{title:"공지사항",to:"/help/notice"},{title:"오시는길",to:"/help/way"}],a=[{title:"대표소개",to:"/introduction"},{title:"조직도",to:"/introduction/organization"},{title:"회사 비전",to:"/introduction/vision"}]},537:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(36),a=r(7955),o=r(7294),i=r(4160);var l=e=>{let{menus:t}=e;const{0:r,1:n}=(0,o.useState)("");return o.createElement("div",{className:"flex justify-center gap-x-20 mx-8 p-8 h-20 items-center text-accent text-lg font-bold"},t.map((e=>o.createElement(i.rU,{key:e.title,to:e.to,getProps:t=>{let{isCurrent:r}=t;return r&&n(e.title),""},className:"\n              "+(r===e.title?"after:transition-none ":"after:scale-x-0 after:hover:transition-all after:hover:ease-in-out after:hover:duration-200 after:hover:scale-100 ")+"\n              relative leading-10 after:box-border after:bg-accent/[.50] after:w-full after:h-1 after:absolute after:left-0 after:bottom-0\n            "},e.title))))};var c=e=>{let{children:t,title:r,menus:i}=e;return o.createElement(n.Z,null,o.createElement(a.Z,{title:r,isSplit:!0}),o.createElement(l,{menus:i}),t)}},3561:function(e,t,r){r.r(t),r.d(t,{default:function(){return Xe}});var n=r(7294),a=r(537),o=r(9978);const i=[{id:1,title:"Notice1",createdAt:"2021-08-20",content:{content:"Notice1 content"},tag:"notice"},{id:2,title:"Notice2",createdAt:"2021-08-20",content:{content:"Notice2 content"},tag:"notice"},{id:3,title:"Notice3",createdAt:"2021-08-20",content:{content:"Notice3 content"},tag:"notice"},{id:4,title:"Notice4",createdAt:"2021-08-20",content:{content:"Notice4 content"},tag:"notice"},{id:5,title:"Notice5",createdAt:"2021-08-20",content:{content:"Notice5 content"},tag:"notice"},{id:6,title:"Academy1",createdAt:"2021-08-20",content:{content:"Academy1 content"},tag:"academy"},{id:7,title:"Academy2",createdAt:"2021-08-20",content:{content:"Academy2 content"},tag:"academy"},{id:8,title:"Academy3",createdAt:"2021-08-20",content:{content:"Academy3 content"},tag:"academy"},{id:9,title:"Academy4",createdAt:"2021-08-20",content:{content:"Academy4 content"},tag:"academy"},{id:10,title:"Academy5",createdAt:"2021-08-20",content:{content:"Academy5 content"},tag:"academy"}];var l=r(4168),c=r(4360),s=r(4258);function u(e,t){const r=t-e+1;return Array.from({length:r},((t,r)=>r+e))}const d="dots";function f({total:e,siblings:t=1,boundaries:r=1,page:a,initialPage:o=1,onChange:i}){const l=Math.max(Math.trunc(e),0),[c,s]=function({value:e,defaultValue:t,finalValue:r,onChange:a=(()=>{})}){const[o,i]=(0,n.useState)(void 0!==t?t:r);return void 0!==e?[e,a,!0]:[o,e=>{i(e),null==a||a(e)},!1]}({value:a,onChange:i,defaultValue:o,finalValue:o}),f=e=>{s(e<=0?1:e>l?l:e)};return{range:(0,n.useMemo)((()=>{if(2*t+3+2*r>=l)return u(1,l);const e=Math.max(c-t,r),n=Math.min(c+t,l-r),a=e>r+2,o=n<l-(r+1);if(!a&&o){return[...u(1,2*t+r+2),d,...u(l-(r-1),l)]}if(a&&!o){const e=r+1+2*t;return[...u(1,r),d,...u(l-e,l)]}return[...u(1,r),d,...u(e,n),d,...u(l-r+1,l)]}),[l,t,c]),active:c,setPage:f,next:()=>f(c+1),previous:()=>f(c-1),first:()=>f(1),last:()=>f(l)}}function p(e,t){return r=>{null==e||e(r),null==t||t(r)}}const[m,b]=function(e){const t=(0,n.createContext)(null);return[({children:e,value:r})=>n.createElement(t.Provider,{value:r},e),()=>{const r=(0,n.useContext)(t);if(null===r)throw new Error(e);return r}]}("Pagination.Root component was not found in tree"),g={siblings:1,boundaries:1};function v(e){const{total:t,value:r,defaultValue:a,onChange:o,disabled:i,children:l,siblings:s,boundaries:u,color:d,radius:b,onNextPage:v,onPreviousPage:y,onFirstPage:h,onLastPage:O,getItemProps:P,classNames:w,styles:x,unstyled:E,variant:N,size:j}=(0,c.N4)("PaginationRoot",g,e),{range:z,setPage:C,next:S,previous:k,active:I,first:L,last:A}=f({page:r,initialPage:a,onChange:o,total:t,siblings:s,boundaries:u}),D=p(v,S),$=p(y,k),M=p(h,L),F=p(O,A);return n.createElement(m,{value:{total:t,range:z,active:I,disabled:i,color:d,radius:b,getItemProps:P,onChange:C,onNext:D,onPrevious:$,onFirst:M,onLast:F,stylesApi:{name:"Pagination",classNames:w,styles:x,unstyled:E,variant:N,size:j}}},l)}var y=r(6768),h=r(47);const O={xs:(0,y.h)(22),sm:(0,y.h)(26),md:(0,y.h)(32),lg:(0,y.h)(38),xl:(0,y.h)(44)};var P=(0,h.k)(((e,{color:t,radius:r,withPadding:n},{size:a})=>{const o=e.fn.variant({color:t,variant:"filled"});return{control:{cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"center",border:`${(0,y.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,height:(0,s.a)({size:a,sizes:O}),minWidth:(0,s.a)({size:a,sizes:O}),padding:n?`0 calc(${(0,s.a)({size:a,sizes:e.spacing})} / 2)`:void 0,fontSize:(0,s.a)({size:a,sizes:e.fontSizes}),borderRadius:e.fn.radius(r),lineHeight:1,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,"&:not([data-disabled])":e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[0]}),"&:active:not([data-disabled])":e.activeStyles,"&[data-disabled]":{opacity:.4,cursor:"not-allowed",pointerEvents:"none"},"&[data-active]":{borderColor:"transparent",color:o.color,backgroundColor:o.background,"&:not([data-disabled])":e.fn.hover({backgroundColor:o.hover})}}}})),w=r(8427),x=Object.defineProperty,E=Object.defineProperties,N=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&S(e,r,t[r]);if(j)for(var r of j(t))C.call(t,r)&&S(e,r,t[r]);return e},I=(0,h.k)((e=>{return{root:(t=k(k({},e.fn.focusStyles()),e.fn.fontStyles()),r={cursor:"pointer",border:0,padding:0,appearance:"none",fontSize:e.fontSizes.md,backgroundColor:"transparent",textAlign:"left",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,textDecoration:"none",boxSizing:"border-box"},E(t,N(r)))};var t,r})),L=r(209),A=Object.defineProperty,D=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const R=(0,n.forwardRef)(((e,t)=>{const r=(0,c.N4)("UnstyledButton",{},e),{className:a,component:o="button",unstyled:i,variant:l}=r,s=((e,t)=>{var r={};for(var n in e)$.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&D)for(var n of D(e))t.indexOf(n)<0&&M.call(e,n)&&(r[n]=e[n]);return r})(r,["className","component","unstyled","variant"]),{classes:u,cx:d}=I(null,{name:"UnstyledButton",unstyled:i,variant:l});return n.createElement(L.x,((e,t)=>{for(var r in t||(t={}))$.call(t,r)&&F(e,r,t[r]);if(D)for(var r of D(t))M.call(t,r)&&F(e,r,t[r]);return e})({component:o,ref:t,className:d(u.root,a),type:"button"===o?"button":void 0},s))}));R.displayName="@mantine/core/UnstyledButton";const W=(0,w.F)(R);var Z=Object.defineProperty,T=Object.defineProperties,V=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const q={withPadding:!0},H=(0,n.forwardRef)(((e,t)=>{const r=(0,c.N4)("PaginationControl",q,e),{active:a,className:o,disabled:i,withPadding:l}=r,s=((e,t)=>{var r={};for(var n in e)U.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&B)for(var n of B(e))t.indexOf(n)<0&&G.call(e,n)&&(r[n]=e[n]);return r})(r,["active","className","disabled","withPadding"]),u=b(),{classes:d,cx:f}=P({color:u.color,radius:u.radius,withPadding:l},u.stylesApi);return n.createElement(W,(p=((e,t)=>{for(var r in t||(t={}))U.call(t,r)&&_(e,r,t[r]);if(B)for(var r of B(t))G.call(t,r)&&_(e,r,t[r]);return e})({},s),m={disabled:i,"data-active":a||void 0,"data-disabled":i||void 0,ref:t,className:f(d.control,o)},T(p,V(m))));var p,m}));H.displayName="@mantine/core/PaginationControl";var Q=Object.defineProperty,J=Object.defineProperties,K=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,re=(e,t)=>{for(var r in t||(t={}))Y.call(t,r)&&te(e,r,t[r]);if(X)for(var r of X(t))ee.call(t,r)&&te(e,r,t[r]);return e},ne=(e,t)=>J(e,K(t));function ae(e){return`calc(${(0,s.a)({size:e,sizes:O})} / 2)`}function oe(e){var t=e,{size:r,style:a,children:o,path:i}=t,l=((e,t)=>{var r={};for(var n in e)Y.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&X)for(var n of X(e))t.indexOf(n)<0&&ee.call(e,n)&&(r[n]=e[n]);return r})(t,["size","style","children","path"]);return n.createElement("svg",re({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:re({width:r,height:r},a)},l),n.createElement("path",{d:i,fill:"currentColor"}))}var ie=(0,h.k)(((e,t,{size:r})=>({dots:{height:(0,s.a)({size:r,sizes:O}),minWidth:(0,s.a)({size:r,sizes:O}),display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}))),le=Object.defineProperty,ce=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,de=(e,t,r)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const fe={icon:e=>n.createElement(oe,ne(re({},e),{path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"}))},pe=(0,n.forwardRef)(((e,t)=>{const r=(0,c.N4)("PaginationDots",fe,e),{className:a,icon:o}=r,i=((e,t)=>{var r={};for(var n in e)se.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&ce)for(var n of ce(e))t.indexOf(n)<0&&ue.call(e,n)&&(r[n]=e[n]);return r})(r,["className","icon"]),l=b(),{classes:s,cx:u}=ie(null,l.stylesApi);return n.createElement(L.x,((e,t)=>{for(var r in t||(t={}))se.call(t,r)&&de(e,r,t[r]);if(ce)for(var r of ce(t))ue.call(t,r)&&de(e,r,t[r]);return e})({ref:t,className:u(s.dots,a)},i),n.createElement(o,{size:ae(l.stylesApi.size)}))}));pe.displayName="@mantine/core/PaginationDots";var me=Object.defineProperty,be=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ye=(e,t,r)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))ge.call(t,r)&&ye(e,r,t[r]);if(be)for(var r of be(t))ve.call(t,r)&&ye(e,r,t[r]);return e};function Oe({dotsIcon:e}){const t=b(),r=t.range.map(((r,a)=>{var o;return"dots"===r?n.createElement(pe,{icon:e,key:a}):n.createElement(H,he({key:a,active:r===t.active,"aria-current":r===t.active?"page":void 0,onClick:()=>t.onChange(r),disabled:t.disabled},null==(o=t.getItemProps)?void 0:o.call(t,r)),r)}));return n.createElement(n.Fragment,null,r)}Oe.displayName="@mantine/core/PaginationItems";var Pe=(0,h.k)((e=>({icon:{transform:"rtl"===e.dir?"rotate(180deg)":"unset"}}))),we=Object.defineProperty,xe=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,je=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function ze({icon:e,name:t,action:r,type:a}){const o={icon:e},i=(0,n.forwardRef)(((e,i)=>{const l=(0,c.N4)(t,o,e),{icon:s}=l,u=((e,t)=>{var r={};for(var n in e)Ee.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&xe)for(var n of xe(e))t.indexOf(n)<0&&Ne.call(e,n)&&(r[n]=e[n]);return r})(l,["icon"]),{classes:d}=Pe(),f=b(),p="next"===a?f.active===f.total:1===f.active;return n.createElement(H,((e,t)=>{for(var r in t||(t={}))Ee.call(t,r)&&je(e,r,t[r]);if(xe)for(var r of xe(t))Ne.call(t,r)&&je(e,r,t[r]);return e})({disabled:f.disabled||p,ref:i,onClick:f[r],withPadding:!1},u),n.createElement(s,{className:d.icon,size:ae(f.stylesApi.size)}))}));return i.displayName=`@mantine/core/${t}`,(0,w.F)(i)}const Ce=ze({icon:e=>n.createElement(oe,ne(re({},e),{path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"})),name:"PaginationNext",action:"onNext",type:"next"}),Se=ze({icon:e=>n.createElement(oe,ne(re({},e),{path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"})),name:"PaginationPrevious",action:"onPrevious",type:"previous"}),ke=ze({icon:e=>n.createElement(oe,ne(re({},e),{path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"})),name:"PaginationFirst",action:"onFirst",type:"previous"}),Ie=ze({icon:e=>n.createElement(oe,ne(re({},e),{path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"})),name:"PaginationLast",action:"onLast",type:"next"});const Le={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var Ae=(0,h.k)(((e,{spacing:t,position:r,noWrap:n,grow:a,align:o,count:i})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:o||"center",flexWrap:n?"nowrap":"wrap",justifyContent:Le[r],gap:(0,s.a)({size:t,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:a?`calc(${100/i}% - (${(0,y.h)((0,s.a)({size:t,sizes:e.spacing}))} - ${(0,s.a)({size:t,sizes:e.spacing})} / ${i}))`:void 0,flexGrow:a?1:0}}}))),De=Object.defineProperty,$e=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,Re=(e,t,r)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const We={position:"left",spacing:"md"},Ze=(0,n.forwardRef)(((e,t)=>{const r=(0,c.N4)("Group",We,e),{className:a,position:o,align:i,children:l,noWrap:s,grow:u,spacing:d,unstyled:f,variant:p}=r,m=((e,t)=>{var r={};for(var n in e)Me.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&$e)for(var n of $e(e))t.indexOf(n)<0&&Fe.call(e,n)&&(r[n]=e[n]);return r})(r,["className","position","align","children","noWrap","grow","spacing","unstyled","variant"]),b=function(e){return n.Children.toArray(e).filter(Boolean)}(l),{classes:g,cx:v}=Ae({align:i,grow:u,noWrap:s,spacing:d,position:o,count:b.length},{unstyled:f,name:"Group",variant:p});return n.createElement(L.x,((e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&Re(e,r,t[r]);if($e)for(var r of $e(t))Fe.call(t,r)&&Re(e,r,t[r]);return e})({className:v(g.root,a),ref:t},m),b)}));Ze.displayName="@mantine/core/Group";var Te=Object.defineProperty,Ve=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,Ge=(e,t,r)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_e=(e,t)=>{for(var r in t||(t={}))Be.call(t,r)&&Ge(e,r,t[r]);if(Ve)for(var r of Ve(t))Ue.call(t,r)&&Ge(e,r,t[r]);return e};const qe={withControls:!0,siblings:1,boundaries:1};function He(e){const t=(0,c.N4)("Pagination",qe,e),{withEdges:r,withControls:a,classNames:o,styles:i,unstyled:l,variant:u,size:d,total:f,value:p,defaultValue:m,onChange:b,disabled:g,siblings:y,boundaries:h,color:O,radius:P,onNextPage:w,onPreviousPage:x,onFirstPage:E,onLastPage:N,getItemProps:j,getControlProps:z,spacing:C,nextIcon:S,previousIcon:k,lastIcon:I,firstIcon:L,dotsIcon:A}=t,D=((e,t)=>{var r={};for(var n in e)Be.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Ve)for(var n of Ve(e))t.indexOf(n)<0&&Ue.call(e,n)&&(r[n]=e[n]);return r})(t,["withEdges","withControls","classNames","styles","unstyled","variant","size","total","value","defaultValue","onChange","disabled","siblings","boundaries","color","radius","onNextPage","onPreviousPage","onFirstPage","onLastPage","getItemProps","getControlProps","spacing","nextIcon","previousIcon","lastIcon","firstIcon","dotsIcon"]),$=(0,c.rZ)();return f<=0?null:n.createElement(v,{classNames:o,styles:i,unstyled:l,variant:u,size:d,total:f,value:p,defaultValue:m,onChange:b,disabled:g,siblings:y,boundaries:h,color:O,radius:P,onNextPage:w,onPreviousPage:x,onFirstPage:E,onLastPage:N,getItemProps:j},n.createElement(Ze,_e({spacing:null!=C?C:`calc(${(0,s.a)({size:d,sizes:$.spacing})} / 2)`},D),r&&n.createElement(ke,_e({icon:L},null==z?void 0:z("first"))),a&&n.createElement(Se,_e({icon:k},null==z?void 0:z("previous"))),n.createElement(Oe,{dotsIcon:A}),a&&n.createElement(Ce,_e({icon:S},null==z?void 0:z("next"))),r&&n.createElement(Ie,_e({icon:I},null==z?void 0:z("last")))))}He.displayName="@mantine/core/Pagination",He.Root=v,He.Items=Oe,He.Control=H,He.Dots=pe,He.Next=Ce,He.Previous=Se,He.Last=Ie,He.First=ke;const Qe=()=>n.createElement("div",{className:"flex flex-col items-center"},n.createElement("table",{className:"w-full mb-4 rounded-full"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("td",{className:"p-4 w-1/12 bg-accent text-white"},"No",n.createElement(l.i,{orientation:"vertical",size:"lg"})),n.createElement("td",{className:"p-4 bg-accent text-white"},"Title",n.createElement(l.i,{orientation:"vertical",size:"lg"})),n.createElement("td",{className:"p-4 w-2/12 bg-accent text-white"},"Date"))),n.createElement("tbody",null,i.map(((e,t)=>n.createElement("tr",{key:t},n.createElement("td",{className:"p-4"},e.id),n.createElement("td",{className:"p-4 cursor-pointer"},e.title),n.createElement("td",{className:"p-4"},e.createdAt)))))),n.createElement(He,{total:10,color:"#05174E"}));var Je=r(80);const Ke=()=>n.createElement("div",{className:"flex items-center gap-3 p-3 w-max border border-secondary rounded-md"},n.createElement(Je.vU7,null),n.createElement("input",{type:"text",className:"bg-transparent border-none outline-none"}),n.createElement(l.i,{orientation:"vertical"}),n.createElement("button",{className:"appearance-none"},"검색"));var Xe=()=>n.createElement(a.Z,{title:"고객 지원",menus:o.O},n.createElement("div",{className:"flex justify-end mb-2"},n.createElement(Ke,null)),n.createElement(Qe,null))},3621:function(e,t,r){r.d(t,{w_:function(){return p}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=["attr","size","title"];function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),f(e.child))))}function p(e){return t=>n.createElement(m,c({attr:u({},e.attr)},t),f(e.child))}function m(e){var t=t=>{var r,{attr:a,size:o,title:s}=e,d=l(e,i),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,d,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-help-notice-index-tsx-42680dd4b6dc7cc1679e.js.map