"use strict";(self.webpackChunkcsb_site=self.webpackChunkcsb_site||[]).push([[691],{5505:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),i=n(7955),r=n(36),c=n(5785),o=n(2730),s=n(8032);function u(){const[e,t]=a.useState(0),{0:i,1:r}=(0,a.useState)(!1),[u,d]=(0,o.E)({initial:0,loop:!0,slideChanged(e){t(e.track.details.rel)},created(){r(!0)}});return a.createElement(a.Fragment,null,a.createElement("div",{className:"container mx-auto navigation-wrapper"},a.createElement("div",{ref:u,className:"keen-slider"},a.createElement("div",{className:"keen-slider__slide"},a.createElement(s.S,{src:"../../images/1.png",alt:"1",__imageData:n(9067)})),a.createElement("div",{className:"keen-slider__slide"},a.createElement(s.S,{src:"../../images/2.png",alt:"1",__imageData:n(306)})),a.createElement("div",{className:"keen-slider__slide"},a.createElement(s.S,{src:"../../images/3.png",alt:"1",__imageData:n(7441)})),a.createElement("div",{className:"keen-slider__slide"},a.createElement(s.S,{src:"../../images/4.png",alt:"1",__imageData:n(7920)}))),i&&d.current&&a.createElement(a.Fragment,null,a.createElement(l,{left:!0,onClick:e=>{var t;return e.stopPropagation()||(null===(t=d.current)||void 0===t?void 0:t.prev())},disabled:0===e}),a.createElement(l,{onClick:e=>{var t;return e.stopPropagation()||(null===(t=d.current)||void 0===t?void 0:t.next())},disabled:e===d.current.track.details.slides.length-1}))),i&&d.current&&a.createElement("div",{className:"dots"},(0,c.Z)(Array(d.current.track.details.slides.length).keys()).map((t=>a.createElement("button",{key:t,onClick:()=>{var e;null===(e=d.current)||void 0===e||e.moveToIdx(t)},className:"dot"+(e===t?" active":"")})))))}function l(e){const t=e.disabled?" arrow--disabled":"";return a.createElement("svg",{onClick:e.onClick,className:"arrow "+(e.left?"arrow--left":"arrow--right")+" "+t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.left&&a.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}),!e.left&&a.createElement("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"}))}var d=()=>a.createElement(r.Z,null,a.createElement(u,null),a.createElement("div",{className:"container mx-auto p-1 w-full h-fit md:flex"},a.createElement("div",{className:"w-full md:w-1/2 h-fit bg-gray-500 p-4"},a.createElement(i.Z,{title:"Business",isSplit:!0}),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt"))),a.createElement("div",{className:"w-full md:w-1/2 h-fit p-4"},a.createElement(i.Z,{title:"Business",isSplit:!0}),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")),a.createElement("div",{className:"flex justify-between m-2 "},a.createElement("div",null,"name"),a.createElement("div",null,"createdAt")))))},2730:function(e,t,n){var a=n(7294);function i(e){return Array.prototype.slice.call(e)}function r(e,t){var n=Math.floor(e);return n===t||n+1===t?e:t}function c(){return Date.now()}function o(e,t,n){if(t="data-keen-slider-"+t,null===n)return e.removeAttribute(t);e.setAttribute(t,n||"")}function s(e,t){return t=t||document,"function"==typeof e&&(e=e(t)),Array.isArray(e)?e:"string"==typeof e?i(t.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList?i(e):[]}function u(e){e.raw&&(e=e.raw),e.cancelable&&!e.defaultPrevented&&e.preventDefault()}function l(e){e.raw&&(e=e.raw),e.stopPropagation&&e.stopPropagation()}function d(){var e=[];return{add:function(t,n,a,i){t.addListener?t.addListener(a):t.addEventListener(n,a,i),e.push([t,n,a,i])},input:function(e,t,n,a){this.add(e,t,function(e){return function(t){t.nativeEvent&&(t=t.nativeEvent);var n=t.changedTouches||[],a=t.targetTouches||[],i=t.detail&&t.detail.x?t.detail:null;return e({id:i?i.identifier?i.identifier:"i":a[0]?a[0]?a[0].identifier:"e":"d",idChanged:i?i.identifier?i.identifier:"i":n[0]?n[0]?n[0].identifier:"e":"d",raw:t,x:i&&i.x?i.x:a[0]?a[0].screenX:i?i.x:t.pageX,y:i&&i.y?i.y:a[0]?a[0].screenY:i?i.y:t.pageY})}}(n),a)},purge:function(){e.forEach((function(e){e[0].removeListener?e[0].removeListener(e[2]):e[0].removeEventListener(e[1],e[2],e[3])})),e=[]}}}function f(e,t,n){return Math.min(Math.max(e,t),n)}function m(e){return(e>0?1:0)-(e<0?1:0)||+e}function p(e){var t=e.getBoundingClientRect();return{height:r(t.height,e.offsetHeight),width:r(t.width,e.offsetWidth)}}function b(e,t,n,a){var i=e&&e[t];return null==i?n:a&&"function"==typeof i?i():i}function v(e){return Math.round(1e6*e)/1e6}function g(e,t){if(e===t)return!0;var n=typeof e;if(n!==typeof t)return!1;if("object"!==n||null===e||null===t)return"function"===n&&e.toString()===t.toString();if(e.length!==t.length||Object.getOwnPropertyNames(e).length!==Object.getOwnPropertyNames(t).length)return!1;for(var a in e)if(!g(e[a],t[a]))return!1;return!0}var h=function(){return h=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},h.apply(this,arguments)};function w(e,t,n){if(n||2===arguments.length)for(var a,i=0,r=t.length;i<r;i++)!a&&i in t||(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}function x(e){var t,n,a,i,r,o,s,u,l,d,p,g,h,x,E=1/0,k=[],y=null,M=0;function C(e){O(M+e)}function N(e){var t=S(M+e).abs;return _(t)?t:null}function S(e){var t=Math.floor(Math.abs(v(e/n))),a=v((e%n+n)%n);a===n&&(a=0);var i=m(e),r=s.indexOf(w([],s,!0).reduce((function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e}))),c=r;return i<0&&t++,r===o&&(c=0,t+=i>0?1:-1),{abs:c+t*o*i,origin:r,rel:c}}function T(e,t,n){var a;if(t||!j())return z(e,n);if(!_(e))return null;var i=S(null!=n?n:M),r=i.abs,c=e-i.rel,s=r+c;a=z(s);var u=z(s-o*m(c));return(null!==u&&Math.abs(u)<Math.abs(a)||null===a)&&(a=u),v(a)}function z(e,t){if(null==t&&(t=v(M)),!_(e)||null===e)return null;e=Math.round(e);var a=S(t),i=a.abs,r=a.rel,c=a.origin,u=D(e),l=(t%n+n)%n,d=s[c],f=Math.floor((e-(i-r))/o)*n;return v(d-l-d+s[u]+f+(c===o?n:0))}function _(e){return A(e)===e}function A(e){return f(e,l,d)}function j(){return i.loop}function D(e){return(e%o+o)%o}function O(t){var n;n=t-M,k.push({distance:n,timestamp:c()}),k.length>6&&(k=k.slice(-6)),M=v(t);var a=I().abs;if(a!==y){var i=null!==y;y=a,i&&e.emit("slideChanged")}}function I(c){var s=c?null:function(){if(o){var e=j(),t=e?(M%n+n)%n:M,c=(e?M%n:M)-r[0][2],s=0-(c<0&&e?n-Math.abs(c):c),u=0,f=S(M),b=f.abs,v=f.rel,w=r[v][2],E=r.map((function(t,a){var r=s+u;(r<0-t[0]||r>1)&&(r+=(Math.abs(r)>n-1&&e?n:0)*m(-r));var c=a-v,l=m(c),d=c+b;e&&(-1===l&&r>w&&(d+=o),1===l&&r<w&&(d-=o),null!==p&&d<p&&(r+=n),null!==g&&d>g&&(r-=n));var f=r+t[0]+t[1],h=Math.max(r>=0&&f<=1?1:f<0||r>1?0:r<0?Math.min(1,(t[0]+r)/t[0]):(1-r)/t[0],0);return u+=t[0]+t[1],{abs:d,distance:i.rtl?-1*r+1-t[0]:r,portion:h,size:t[0]}}));return b=A(b),v=D(b),{abs:A(b),length:a,max:x,maxIdx:d,min:h,minIdx:l,position:M,progress:e?t/n:M/a,rel:v,slides:E,slidesLength:n}}}();return t.details=s,e.emit("detailsChanged"),s}return t={absToRel:D,add:C,details:null,distToIdx:N,idxToDist:T,init:function(t){if(function(){if(i=e.options,r=(i.trackConfig||[]).map((function(e){return[b(e,"size",1),b(e,"spacing",0),b(e,"origin",0)]})),o=r.length){n=v(r.reduce((function(e,t){return e+t[0]+t[1]}),0));var t,c=o-1;a=v(n+r[0][2]-r[c][0]-r[c][2]-r[c][1]),s=r.reduce((function(e,n){if(!e)return[0];var a=r[e.length-1],i=e[e.length-1]+(a[0]+a[2])+a[1];return i-=n[2],e[e.length-1]>i&&(i=e[e.length-1]),i=v(i),e.push(i),(!t||t<i)&&(u=e.length-1),t=i,e}),null),0===a&&(u=0),s.push(v(n))}}(),!o)return I(!0);var c;!function(){var t=e.options.range,n=e.options.loop;p=l=n?b(n,"min",-1/0):0,g=d=n?b(n,"max",E):u;var a=b(t,"min",null),i=b(t,"max",null);null!==a&&(l=a),null!==i&&(d=i),h=l===-1/0?l:e.track.idxToDist(l||0,!0,0),x=d===E?d:T(d,!0,0),null===i&&(g=d),b(t,"align",!1)&&d!==E&&0===r[D(d)][2]&&(x-=1-r[D(d)][0],d=N(x-M)),h=v(h),x=v(x)}(),c=t,Number(c)===c?C(z(A(t))):I()},to:O,velocity:function(){var e=c(),t=k.reduce((function(t,n){var a=n.distance,i=n.timestamp;return e-i>200||(m(a)!==m(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=a),t.lastTimestamp&&(t.time+=i-t.lastTimestamp),t.lastTimestamp=i),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function E(e){var t,n,a,i,r,c,o,s;function u(e){return 2*e}function l(e){return f(e,o,s)}function d(e){return 1-Math.pow(1-e,3)}function p(){return a?e.track.velocity():0}function b(e,t){void 0===t&&(t=1e3);var n=147e-9+(e=Math.abs(e))/t;return{dist:Math.pow(e,2)/n,dur:e/n}}function v(){var t=e.track.details;t&&(r=t.min,c=t.max,o=t.minIdx,s=t.maxIdx)}function g(){e.animator.stop()}e.on("updated",v),e.on("optionsChanged",v),e.on("created",v),e.on("dragStarted",(function(){a=!1,g(),t=n=e.track.details.abs})),e.on("dragChecked",(function(){a=!0})),e.on("dragEnded",(function(){var a=e.options.mode;"snap"===a&&function(){var a=e.track,i=e.track.details,o=i.position,s=m(p());(o>c||o<r)&&(s=0);var u=t+s;0===i.slides[a.absToRel(u)].portion&&(u-=s),t!==n&&(u=n),m(a.idxToDist(u,!0))!==s&&(u+=s),u=l(u);var d=a.idxToDist(u,!0);e.animator.start([{distance:d,duration:500,easing:function(e){return 1+--e*e*e*e*e}}])}(),"free"!==a&&"free-snap"!==a||function(){g();var t="free-snap"===e.options.mode,n=e.track,a=p();i=m(a);var o=e.track.details,s=[];if(a||!t){var f=b(a),v=f.dist,h=f.dur;if(h=u(h),v*=i,t){var w=n.idxToDist(n.distToIdx(v),!0);w&&(v=w)}s.push({distance:v,duration:h,easing:d});var x=o.position,E=x+v;if(E<r||E>c){var k=E<r?r-x:c-x,y=0,M=a;if(m(k)===i){var C=Math.min(Math.abs(k)/Math.abs(v),1),N=function(e){return 1-Math.pow(1-e,1/3)}(C)*h;s[0].earlyExit=N,M=a*(1-C)}else s[0].earlyExit=0,y+=k;var S=b(M,100),T=S.dist*i;e.options.rubberband&&(s.push({distance:T,duration:u(S.dur),easing:d}),s.push({distance:-T+y,duration:500,easing:d}))}e.animator.start(s)}else e.moveToIdx(l(o.abs),!0,{duration:500,easing:function(e){return 1+--e*e*e*e*e}})}()})),e.on("dragged",(function(){n=e.track.details.abs}))}function k(e){var t,n,a,i,r,c,o,p,b,v,g,h,w,x,E,k,y,M,C=d();function N(t){if(c&&p===t.id){var s=_(t);if(b){if(!z(t))return T(t);v=s,b=!1,e.emit("dragChecked")}if(k)return v=s;u(t);var d=function(t){if(y===-1/0&&M===1/0)return t;var a=e.track.details,c=a.length,o=a.position,s=f(t,y-o,M-o);if(0===c)return 0;if(!e.options.rubberband)return s;if(o<=M&&o>=y)return t;if(o<y&&n>0||o>M&&n<0)return t;var u=(o<y?o-y:o-M)/c,l=i*c,d=Math.abs(u*l),m=Math.max(0,1-d/r*2);return m*m*t}(o(v-s)/i*a);n=m(d);var w=e.track.details.position;(w>y&&w<M||w===y&&n>0||w===M&&n<0)&&l(t),g+=d,!h&&Math.abs(g*i)>5&&(h=!0),e.track.add(d),v=s,e.emit("dragged")}}function S(t){!c&&e.track.details&&e.track.details.length&&(g=0,c=!0,h=!1,b=!0,p=t.id,z(t),v=_(t),e.emit("dragStarted"))}function T(t){c&&p===t.idChanged&&(c=!1,e.emit("dragEnded"))}function z(e){var t=A(),n=t?e.y:e.x,a=t?e.x:e.y,i=void 0!==w&&void 0!==x&&Math.abs(x-a)<=Math.abs(w-n);return w=n,x=a,i}function _(e){return A()?e.y:e.x}function A(){return e.options.vertical}function j(){i=e.size,r=A()?window.innerHeight:window.innerWidth;var t=e.track.details;t&&(y=t.min,M=t.max)}function D(e){h&&(l(e),u(e))}function O(){if(C.purge(),e.options.drag&&!e.options.disabled){var n;n=e.options.dragSpeed||1,o="function"==typeof n?n:function(e){return e*n},a=e.options.rtl?-1:1,j(),t=e.container,function(){var e="data-keen-slider-clickable";s("[".concat(e,"]:not([").concat(e,"=false])"),t).map((function(e){C.add(e,"dragstart",l),C.add(e,"mousedown",l),C.add(e,"touchstart",l)}))}(),C.add(t,"dragstart",(function(e){u(e)})),C.add(t,"click",D,{capture:!0}),C.input(t,"ksDragStart",S),C.input(t,"ksDrag",N),C.input(t,"ksDragEnd",T),C.input(t,"mousedown",S),C.input(t,"mousemove",N),C.input(t,"mouseleave",T),C.input(t,"mouseup",T),C.input(t,"touchstart",S,{passive:!0}),C.input(t,"touchmove",N,{passive:!1}),C.input(t,"touchend",T),C.input(t,"touchcancel",T),C.add(window,"wheel",(function(e){c&&u(e)}));var i="data-keen-slider-scrollable";s("[".concat(i,"]:not([").concat(i,"=false])"),e.container).map((function(e){return function(e){var t;C.input(e,"touchstart",(function(e){t=_(e),k=!0,E=!0}),{passive:!0}),C.input(e,"touchmove",(function(n){var a=A(),i=a?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,r=t-_(n),c=a?e.scrollTop:e.scrollLeft,o=a&&"scroll"===e.style.overflowY||!a&&"scroll"===e.style.overflowX;if(t=_(n),(r<0&&c>0||r>0&&c<i)&&E&&o)return k=!0;E=!1,u(n),k=!1})),C.input(e,"touchend",(function(){k=!1}))}(e)}))}}e.on("updated",j),e.on("optionsChanged",O),e.on("created",O),e.on("destroyed",C.purge)}function y(e){var t,n,a=null;function i(t,n,a){e.animator.active?c(t,n,a):requestAnimationFrame((function(){return c(t,n,a)}))}function r(){i(!1,!1,n)}function c(n,i,r){var c=0,o=e.size,l=e.track.details;if(l&&t){var d=l.slides;t.forEach((function(e,t){if(n)!a&&i&&s(e,null,r),u(e,null,r);else{if(!d[t])return;var l=d[t].size*o;!a&&i&&s(e,l,r),u(e,d[t].distance*o-c,r),c+=l}}))}}function o(t){return"performance"===e.options.renderMode?Math.round(t):t}function s(e,t,n){var a=n?"height":"width";null!==t&&(t=o(t)+"px"),e.style["min-"+a]=t,e.style["max-"+a]=t}function u(e,t,n){if(null!==t){t=o(t);var a=n?t:0;t="translate3d(".concat(n?0:t,"px, ").concat(a,"px, 0)")}e.style.transform=t,e.style["-webkit-transform"]=t}function l(){t&&(c(!0,!0,n),t=null),e.on("detailsChanged",r,!0)}function d(){i(!1,!0,n)}function f(){l(),n=e.options.vertical,e.options.disabled||"custom"===e.options.renderMode||(a="auto"===b(e.options.slides,"perView",null),e.on("detailsChanged",r),(t=e.slides).length&&d())}e.on("created",f),e.on("optionsChanged",f),e.on("beforeOptionsChanged",(function(){l()})),e.on("updated",d),e.on("destroyed",l)}function M(e,t){return function(n){var a,i,r,c,u,l=d();function f(e){var t;o(n.container,"reverse","rtl"!==(t=n.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||e?null:""),o(n.container,"v",n.options.vertical&&!e?"":null),o(n.container,"disabled",n.options.disabled&&!e?"":null)}function m(){v()&&k()}function v(){var e=null;if(c.forEach((function(t){t.matches&&(e=t.__media)})),e===a)return!1;a||n.emit("beforeOptionsChanged"),a=e;var t=e?r.breakpoints[e]:r;return n.options=h(h({},r),t),f(),S(),T(),M(),!0}function g(e){var t=p(e);return(n.options.vertical?t.height:t.width)/n.size||1}function w(){return n.options.trackConfig.length}function x(e){for(var o in a=!1,r=h(h({},t),e),l.purge(),i=n.size,c=[],r.breakpoints||[]){var s=window.matchMedia(o);s.__media=o,c.push(s),l.add(s,"change",m)}l.add(window,"orientationchange",N),l.add(window,"resize",C),v()}function E(e){n.animator.stop();var t=n.track.details;n.track.init(null!=e?e:t?t.abs:0)}function k(e){E(e),n.emit("optionsChanged")}function y(e,t){if(e)return x(e),void k(t);S(),T();var a=w();M(),w()!==a?k(t):E(t),n.emit("updated")}function M(){var e=n.options.slides;if("function"==typeof e)return n.options.trackConfig=e(n.size,n.slides);for(var t=n.slides,a=t.length,i="number"==typeof e?e:b(e,"number",a,!0),r=[],c=b(e,"perView",1,!0),o=b(e,"spacing",0,!0)/n.size||0,s="auto"===c?o:o/c,u=b(e,"origin","auto"),l=0,d=0;d<i;d++){var f="auto"===c?g(t[d]):1/c-o+s,m="center"===u?.5-f/2:"auto"===u?0:u;r.push({origin:m,size:f,spacing:o}),l+=f}if(l+=o*(i-1),"auto"===u&&!n.options.loop&&1!==c){var p=0;r.map((function(e){var t=l-p;return p+=e.size+o,t>=1||(e.origin=1-t-(l>1?0:1-l)),e}))}n.options.trackConfig=r}function C(){S();var e=n.size;n.options.disabled||e===i||(i=e,y())}function N(){C(),setTimeout(C,500),setTimeout(C,2e3)}function S(){var e=p(n.container);n.size=(n.options.vertical?e.height:e.width)||1}function T(){n.slides=s(n.options.selector,n.container)}n.container=(u=s(e,document)).length?u[0]:null,n.destroy=function(){l.purge(),n.emit("destroyed"),f(!0)},n.prev=function(){n.moveToIdx(n.track.details.abs-1,!0)},n.next=function(){n.moveToIdx(n.track.details.abs+1,!0)},n.update=y,x(n.options)}}var C=function(e,t,n){try{return function(e,t){var n,a={};return n={emit:function(e){a[e]&&a[e].forEach((function(e){e(n)}));var t=n.options&&n.options[e];t&&t(n)},moveToIdx:function(e,t,a){var i=n.track.idxToDist(e,t);if(i){var r=n.options.defaultAnimation;n.animator.start([{distance:i,duration:b(a||r,"duration",500),easing:b(a||r,"easing",(function(e){return 1+--e*e*e*e*e}))}])}},on:function(e,t,n){void 0===n&&(n=!1),a[e]||(a[e]=[]);var i=a[e].indexOf(t);i>-1?n&&delete a[e][i]:n||a[e].push(t)},options:e},function(){if(n.track=x(n),n.animator=function(e){var t,n,a,i,r,c;function o(t){c||(c=t),s(!0);var r=t-c;r>a&&(r=a);var d=i[n];if(d[3]<r)return n++,o(t);var f=d[2],m=d[4],p=d[0],b=d[1]*(0,d[5])(0===m?1:(r-f)/m);if(b&&e.track.to(p+b),r<a)return l();c=null,s(!1),u(null),e.emit("animationEnded")}function s(e){t.active=e}function u(e){t.targetIdx=e}function l(){var e;e=o,r=window.requestAnimationFrame(e)}function d(){var t;t=r,window.cancelAnimationFrame(t),s(!1),u(null),c&&e.emit("animationStopped"),c=null}return t={active:!1,start:function(t){if(d(),e.track.details){var r=0,c=e.track.details.position;n=0,a=0,i=t.map((function(e){var t,n=Number(c),i=null!==(t=e.earlyExit)&&void 0!==t?t:e.duration,o=e.easing,s=e.distance*o(i/e.duration)||0;c+=s;var u=a;return a+=i,r+=s,[n,e.distance,u,a,e.duration,o]})),u(e.track.distToIdx(r)),l(),e.emit("animationStarted")}},stop:d,targetIdx:null}}(n),t)for(var e=0,a=t;e<a.length;e++)(0,a[e])(n);n.track.init(n.options.initial||0),n.emit("created")}(),n}(t,w([M(e,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),y,k,E],n||[],!0))}catch(e){console.error(e)}};t.E=function(e,t){var n=a.useRef(null),i=a.useRef(!1),r=a.useRef(e),c=a.useCallback((function(a){a?(r.current=e,n.current=new C(a,e,t),i.current=!1):(n.current&&n.current.destroy&&n.current.destroy(),n.current=null)}),[]);return a.useEffect((function(){g(r.current,e)||(r.current=e,n.current&&n.current.update(r.current))}),[e]),[c,n]}},7920:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#688898","images":{"fallback":{"src":"/csb/static/032c53ec60b87d8ce38a895d955169e1/77779/4.png","srcSet":"/csb/static/032c53ec60b87d8ce38a895d955169e1/63619/4.png 448w,\\n/csb/static/032c53ec60b87d8ce38a895d955169e1/bffbd/4.png 896w,\\n/csb/static/032c53ec60b87d8ce38a895d955169e1/77779/4.png 1792w","sizes":"(min-width: 1792px) 1792px, 100vw"},"sources":[{"srcSet":"/csb/static/032c53ec60b87d8ce38a895d955169e1/c9dbf/4.webp 448w,\\n/csb/static/032c53ec60b87d8ce38a895d955169e1/7112f/4.webp 896w,\\n/csb/static/032c53ec60b87d8ce38a895d955169e1/fb23b/4.webp 1792w","type":"image/webp","sizes":"(min-width: 1792px) 1792px, 100vw"}]},"width":1792,"height":1024}')},7441:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/csb/static/4f81ade64f332e7ba750a2d412fc4144/77779/3.png","srcSet":"/csb/static/4f81ade64f332e7ba750a2d412fc4144/63619/3.png 448w,\\n/csb/static/4f81ade64f332e7ba750a2d412fc4144/bffbd/3.png 896w,\\n/csb/static/4f81ade64f332e7ba750a2d412fc4144/77779/3.png 1792w","sizes":"(min-width: 1792px) 1792px, 100vw"},"sources":[{"srcSet":"/csb/static/4f81ade64f332e7ba750a2d412fc4144/c9dbf/3.webp 448w,\\n/csb/static/4f81ade64f332e7ba750a2d412fc4144/7112f/3.webp 896w,\\n/csb/static/4f81ade64f332e7ba750a2d412fc4144/fb23b/3.webp 1792w","type":"image/webp","sizes":"(min-width: 1792px) 1792px, 100vw"}]},"width":1792,"height":1024}')},306:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/csb/static/4bae0c29fd5be82ff3e2297c13c0edf1/77779/2.png","srcSet":"/csb/static/4bae0c29fd5be82ff3e2297c13c0edf1/63619/2.png 448w,\\n/csb/static/4bae0c29fd5be82ff3e2297c13c0edf1/bffbd/2.png 896w,\\n/csb/static/4bae0c29fd5be82ff3e2297c13c0edf1/77779/2.png 1792w","sizes":"(min-width: 1792px) 1792px, 100vw"},"sources":[{"srcSet":"/csb/static/4bae0c29fd5be82ff3e2297c13c0edf1/c9dbf/2.webp 448w,\\n/csb/static/4bae0c29fd5be82ff3e2297c13c0edf1/7112f/2.webp 896w,\\n/csb/static/4bae0c29fd5be82ff3e2297c13c0edf1/fb23b/2.webp 1792w","type":"image/webp","sizes":"(min-width: 1792px) 1792px, 100vw"}]},"width":1792,"height":1024}')},9067:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/csb/static/c702bf5a7b2aa908845bfca8bfac74e7/77779/1.png","srcSet":"/csb/static/c702bf5a7b2aa908845bfca8bfac74e7/63619/1.png 448w,\\n/csb/static/c702bf5a7b2aa908845bfca8bfac74e7/bffbd/1.png 896w,\\n/csb/static/c702bf5a7b2aa908845bfca8bfac74e7/77779/1.png 1792w","sizes":"(min-width: 1792px) 1792px, 100vw"},"sources":[{"srcSet":"/csb/static/c702bf5a7b2aa908845bfca8bfac74e7/c9dbf/1.webp 448w,\\n/csb/static/c702bf5a7b2aa908845bfca8bfac74e7/7112f/1.webp 896w,\\n/csb/static/c702bf5a7b2aa908845bfca8bfac74e7/fb23b/1.webp 1792w","type":"image/webp","sizes":"(min-width: 1792px) 1792px, 100vw"}]},"width":1792,"height":1024}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d83d4a0f9e40ad6beb7e.js.map