"use strict";(self.webpackChunkcsb_site=self.webpackChunkcsb_site||[]).push([[288],{4168:function(e,t,r){r.d(t,{i:function(){return w}});var l=r(7294),a=r(4360),i=r(6768),o=r(47),n=r(4258);const s={xs:(0,i.h)(1),sm:(0,i.h)(2),md:(0,i.h)(3),lg:(0,i.h)(4),xl:(0,i.h)(5)};function c(e,t){const r=e.fn.variant({variant:"outline",color:t}).border;return"string"==typeof t&&(t in e.colors||t.split(".")[0]in e.colors)?r:void 0===t?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:t}var d=(0,o.k)(((e,{color:t},{size:r,variant:l})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,i.h)(1),borderTop:`${(0,n.a)({size:r,sizes:s})} ${l} ${c(e,t)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,n.a)({size:r,sizes:s})} ${l} ${c(e,t)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===t?e.colors.dark[1]:e.fn.themeColor(t,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,i.h)((0,n.a)({size:r,sizes:s})),borderTopColor:c(e,t),borderTopStyle:l,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,i.h)((0,n.a)({size:r,sizes:s})),borderLeftColor:c(e,t),borderLeftStyle:l}}))),m=r(209),p=r(5918),f=Object.defineProperty,b=Object.defineProperties,h=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&y(e,r,t[r]);if(u)for(var r of u(t))x.call(t,r)&&y(e,r,t[r]);return e};const N={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},w=(0,l.forwardRef)(((e,t)=>{const r=(0,a.N4)("Divider",N,e),{className:o,color:n,orientation:s,size:c,label:f,labelPosition:y,labelProps:w,variant:z,styles:E,classNames:k,unstyled:D}=r,O=((e,t)=>{var r={};for(var l in e)v.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&u)for(var l of u(e))t.indexOf(l)<0&&x.call(e,l)&&(r[l]=e[l]);return r})(r,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:P,cx:S}=d({color:n},{classNames:k,styles:E,unstyled:D,name:"Divider",variant:z,size:c}),j="vertical"===s,T="horizontal"===s,A=!!f&&T,I=!(null==w?void 0:w.color);return l.createElement(m.x,g({ref:t,className:S(P.root,{[P.vertical]:j,[P.horizontal]:T,[P.withLabel]:A},o),role:"separator"},O),A&&l.createElement(p.x,(L=g({},w),$={size:(null==w?void 0:w.size)||"xs",mt:(0,i.h)(2),className:S(P.label,P[y],{[P.labelDefaultStyles]:I})},b(L,h($))),f));var L,$}));w.displayName="@mantine/core/Divider"},556:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var l=r(7294),a=r(36),i=r(7955);const o=[{name:"aDNA : 고대 DNA 분석",description:"유적지 발굴 내 유전자 분석을 통한 과거 시간을 표현"},{name:"eDNA : 환경 DNA 분석",description:"해양, 담수, 토양 및 공기내 생물 군집 "},{name:"iDNA : 개인 DNA 분석",description:"개인 맞춤형 의학을 위한 유전체 정보"},{name:"차세대 염기서열 분석 기법을 기반한 빅데이터 생산 및 분석",description:"다양한 연구자들의 관심사에 중점을 두고 샘플링부터 최종 NGS 분석까지를 망라한 결과 도출"},{name:"유전자 (유전체/전사체) 분석",description:"대부분의 모델/비모델 생물을 대상으로 진행"}];var n=r(2820);const s=e=>{const t=(0,l.useRef)(null);return l.createElement(n.E.div,{ref:t,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{duration:.5},variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:50}},className:"w-full flex px-4 flex-col justify-center  items-center md:justify-between md:flex-row gap-4 p-8"},l.createElement("div",{className:" sm:hidden w-[200px] h-[200px]  bg-black"},"Image"),l.createElement("div",{className:"w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[616px] lg:h-[600px] flex flex-col justify-center items-start"},l.createElement("div",{className:"text-2xl font-bold text-accent mb-4"},e.name),l.createElement("div",null,e.description)),l.createElement("div",{className:"hidden sm:block md:w-[300px] md:h-[300px] lg:w-[616px] lg:h-[600px] bg-black"},"Image"))};var c=r(4168);const d=()=>l.createElement("div",null,l.createElement(c.i,{size:"sm",style:{marginTop:"2rem"}}),o.map(((e,t)=>l.createElement("div",{key:t,className:""},l.createElement(s,e),l.createElement(c.i,{size:"sm"})))));var m=()=>l.createElement(a.Z,null,l.createElement(i.Z,{title:"사업 소개",detailTitle:"Business Information"}),l.createElement(d,null))}}]);
//# sourceMappingURL=component---src-pages-business-index-tsx-90979673ebad607e515f.js.map