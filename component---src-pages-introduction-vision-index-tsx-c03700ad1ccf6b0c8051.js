"use strict";(self.webpackChunkcsb_site=self.webpackChunkcsb_site||[]).push([[156],{457:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(7294),o=n(537),i=n(4486);const s=[{id:1,content:"지금 바로 여기에 행복이 있는 기업",image:"../../../../images/1.png"},{id:2,content:"인류와 자연 환경의 조화로움 속에 공생/공유의 아름다움으로 더 나은 미래를 추구하는 기업",image:""},{id:3,content:"자신의 가치가 존중 받고, 그 가치가 행복을 가져다 주는 기업",image:""},{id:4,content:"최고의 연구자들이 모여 최고의 연구를 하고, 최고의 연구를 통해 최고의 제품을 만들어내는 기업",image:""}];var c=n(3234),l=n(6681),a=n(5487);const f=new WeakMap;let u;function g({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=f.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function d(e){e.forEach(g)}function h(e,t){u||"undefined"!=typeof ResizeObserver&&(u=new ResizeObserver(d));const n=function(e,t,n){var r;if("string"==typeof e){let o=document;t&&((0,a.k)(Boolean(t.current),"Scope provided, but no element detected."),o=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach((e=>{let n=f.get(e);n||(n=new Set,f.set(e,n)),n.add(t),null==u||u.observe(e)})),()=>{n.forEach((e=>{const n=f.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==u||u.unobserve(e)}))}}const m=new Set;let p;function v(e){return m.add(e),p||(p=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};m.forEach((e=>e(t)))},window.addEventListener("resize",p)),()=>{m.delete(e),!m.size&&p&&(p=void 0)}}var y=n(3967),x=n(3038);const w=50,E=()=>({time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}),b={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function L(e,t,n,r){const o=n[t],{length:i,position:s}=b[t],c=o.current,l=n.time;o.current=e["scroll"+s],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,y.Y)(0,o.scrollLength,o.current);const a=r-l;o.velocity=a>w?0:(0,x.R)(o.current-c,a)}const W={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},B={start:0,center:.5,end:1};function S(e,t,n=0){let r=0;if(void 0!==B[e]&&(e=B[e]),"string"==typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}const z=[0,0];function k(e,t,n,r){let o=Array.isArray(e)?e:z,i=0,s=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,B[e]?e:"0"]),i=S(o[0],n,r),s=S(o[1],t),i-s}var A=n(5367),H=n(2093);const O={x:0,y:0};function N(e,t,n){let{offset:r=W.All}=n;const{target:o=e,axis:i="y"}=n,s="y"===i?"height":"width",c=o!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}}return n}(o,e):O,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(o),a={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let f=!t[i].interpolate;const u=r.length;for(let g=0;g<u;g++){const e=k(r[g],a[s],l[s],c[i]);f||e===t[i].interpolatorOffsets[g]||(f=!0),t[i].offset[g]=e}f&&(t[i].interpolate=(0,A.s)(t[i].offset,(0,H.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function P(e,t,n,r={}){return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){L(e,"x",t,n),L(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&N(e,n,r)},notify:()=>t(n)}}var X=n(5618);const Y=new WeakMap,R=new WeakMap,C=new WeakMap,M=e=>e===document.documentElement?window:e;function T(e,{container:t=document.documentElement,...n}={}){let r=C.get(t);r||(r=new Set,C.set(t,r));const o=E(),i=P(t,e,o,n);if(r.add(i),!Y.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(X.frameData.timestamp)},o=()=>{for(const e of r)e.notify()},i=()=>{X.Wi.read(e,!1,!0),X.Wi.read(n,!1,!0),X.Wi.update(o,!1,!0)};Y.set(t,i);const l=M(t);window.addEventListener("resize",i,{passive:!0}),t!==document.documentElement&&R.set(t,(c=i,"function"==typeof(s=t)?v(s):h(s,c))),l.addEventListener("scroll",i,{passive:!0})}var s,c;const l=Y.get(t);return X.Wi.read(l,!1,!0),()=>{var e;(0,X.Pn)(l);const n=C.get(t);if(!n)return;if(n.delete(i),n.size)return;const r=Y.get(t);Y.delete(t),r&&(M(t).removeEventListener("scroll",r),null===(e=R.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}var j=n(8868);function F(e,t){(0,a.K)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const G=()=>({scrollX:(0,c.BX)(0),scrollY:(0,c.BX)(0),scrollXProgress:(0,c.BX)(0),scrollYProgress:(0,c.BX)(0)});const _=e=>(e=>e&&"object"==typeof e&&e.mix)(e)?e.mix:void 0;var q=n(6014);function U(e,t){const n=function(e){const t=(0,l.h)((()=>(0,c.BX)(e))),{isStatic:n}=(0,r.useContext)(q._);if(n){const[,n]=(0,r.useState)(e);(0,r.useEffect)((()=>t.on("change",n)),[])}return t}(t()),o=()=>n.set(t());return o(),(0,j.L)((()=>{const t=()=>X.Wi.update(o,!1,!0),n=e.map((e=>e.on("change",t)));return()=>{n.forEach((e=>e())),(0,X.Pn)(o)}})),n}function V(e,t,n,r){if("function"==typeof e)return function(e){c.S1.current=[],e();const t=U(c.S1.current,e);return c.S1.current=void 0,t}(e);const o="function"==typeof t?t:function(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],o=e[1+n],i=e[2+n],s=e[3+n],c=(0,A.s)(o,i,{mixer:_(i[0]),...s});return t?c(r):c}(t,n,r);return Array.isArray(e)?D(e,o):D([e],(([e])=>o(e)))}function D(e,t){const n=(0,l.h)((()=>[]));return U(e,(()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)}))}const I=e=>{let{content:t,imageUrl:n}=e;const o=(0,r.useRef)(null),{scrollYProgress:s}=function({container:e,target:t,layoutEffect:n=!0,...o}={}){const i=(0,l.h)(G);return(n?j.L:r.useEffect)((()=>(F("target",t),F("container",e),T((({x:e,y:t})=>{i.scrollX.set(e.current),i.scrollXProgress.set(e.progress),i.scrollY.set(t.current),i.scrollYProgress.set(t.progress)}),{...o,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(o.offset)]),i}({target:o,offset:["0 1","2 1"]}),c=V(s,[0,1],[0,1]),a=V(s,[0,1],[100,1]);return r.createElement(i.E.div,{ref:o,style:{opacity:c,y:a},transition:{type:"tween",duration:.2},viewport:{once:!0},className:"group mb-3 sm:mb-8 last:mb-0 flex justify-center"},r.createElement("section",{className:"relative bg-gray-100 rounded-lg w-[800px] max-w-[42rem] borderBlack overflow-y-hidden overflow-hidden sm:pr-8 sm:mb-8 last:mb-0 hover:bg-gray-200 transition group-even:pl-8 flex"},r.createElement("div",{className:"pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[70%] sm:h-[20rem] flex flex-col h-full group-even:ml-[18rem] text-accent text-xl font-bold  justify-center"},t)))};var J=()=>r.createElement(r.Fragment,null,r.createElement(i.E.div,{className:"scroll-mt-28 mb-28 flex flex-col justify-center"},s.map(((e,t)=>r.createElement(r.Fragment,{key:t},r.createElement(I,{content:e.content,imageUrl:e.image}))))));var K=n(9978);var Z=()=>r.createElement(o.Z,{title:"Introduction",menus:K.A},r.createElement(J,null))}}]);
//# sourceMappingURL=component---src-pages-introduction-vision-index-tsx-c03700ad1ccf6b0c8051.js.map