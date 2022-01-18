(()=>{var e={426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body {\r\n  height: 100vh;\r\n  color: white;\r\n  background-color: #070103;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n#header {\r\n  background-color: #070103;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  height: 50px;\r\n  width: 100vw;\r\n}\r\n#header button {\r\n  border: none;\r\n  background-color: black;\r\n  color: white;\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-weight: bold;\r\n  width: 200px;\r\n}\r\n#header button:hover,\r\n#header .selected {\r\n  background-color: #3c1203;\r\n  text-shadow: gold 0 0 2px;\r\n}\r\n#main {\r\n  height: calc(100vh - 50px);\r\n  width: 100vw;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  position: relative;\r\n  column-gap: 0;\r\n}\r\n\r\n#title-container {\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 50%;\r\n  text-align: start;\r\n  font-size: 3em;\r\n  font-weight: 900;\r\n  margin: 0 auto;\r\n  color: white;\r\n}\r\nh3 {\r\n  font-size: 3rem;\r\n}\r\n#title-drink-container,\r\n#title-food-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 3em;\r\n  text-align: right;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: fit-content;\r\n  height: 20vh;\r\n  column-gap: 10px;\r\n}\r\n#main-background {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n}\r\nh5 {\r\n  font-size: 1.7rem;\r\n}\r\n\r\n#menu-background {\r\n  position: absolute;\r\n  width: 60%;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  z-index: -1;\r\n}\r\n#drinks-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: end;\r\n  row-gap: 3.5em;\r\n  transform: translateY(-52px) translateX(-25px);\r\n}\r\n#drinks-container .item-container:nth-child(even) {\r\n  transform: translateX(-150px);\r\n}\r\n#food-container .item-container:nth-child(even) {\r\n  transform: translateX(80px);\r\n}\r\n.item-container:nth-child(odd) {\r\n  transform: translateX(-41px);\r\n}\r\n\r\n#title-drink-photo {\r\n  width: 25%;\r\n}\r\n.item-container {\r\n  display: flex;\r\n  text-align: right;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: fit-content;\r\n  column-gap: 10px;\r\n  padding: 0.5rem;\r\n  transition: 0.3s ease-in;\r\n  cursor: pointer;\r\n}\r\n.item-container img {\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n#food-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transform: translateY(-16px);\r\n  row-gap: 3.5em;\r\n}\r\n#title-food-container {\r\n  display: flex;\r\n  transform: translateX(-40px);\r\n}\r\n#elizabeth {\r\n  width: 200px;\r\n}\r\n.item-container:hover {\r\n  background: rgba(95, 29, 5, 0.671);\r\n}\r\n",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},244:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"Apple Juice.jpg"},816:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"Energy Drinks.jpg"},293:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"Lemon Juice.jpg"},361:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"Abyss Cake.jpg"},332:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"Bonfire Cake.jpg"},627:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"Sif Cake.png"},725:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"Elizabeth-Mushroom.png"},766:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"blackKnight.png"},763:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"chosenUndead.png"},593:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r=t.p+"estus flask.png"},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},617:(e,n,t)=>{var r={"./Apple Juice.jpg":244,"./Energy Drinks.jpg":816,"./Lemon Juice.jpg":293};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=617},624:(e,n,t)=>{var r={"./Abyss Cake.jpg":361,"./Bonfire Cake.jpg":332,"./Sif Cake.png":627};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=624},510:(e,n,t)=>{var r={"./Elizabeth-Mushroom.png":725,"./blackKnight.png":766,"./chosenUndead.png":763,"./estus flask.png":593};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=510}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector("#content");function g(e){let n={};return e.keys().map(((t,r)=>{n[t.replace("./","")]=e(t)})),n}const v=g(t(617)),b=g(t(624)),y=g(t(510)),x=document.createElement("header");x.id="header",h.appendChild(x);let k=["Home","Menu","About"];function w(e){let n=document.createElement("button");return n.id=e.toLowerCase(),n.innerText=e,x.appendChild(n),n.addEventListener("click",(function(){for(let e=0;e<x.children.length;e++)x.children[e].classList.remove("selected");switch(E.innerHTML="",n.id){case"home":j();break;case"menu":n.classList.add("selected"),function(){let e=document.createElement("img");e.id="menu-background",e.src=y["chosenUndead.png"].default,E.appendChild(e);let n=document.createElement("div");n.id="drinks-container";let t=document.createElement("div");t.id="title-drink-container";let r=document.createElement("img");r.src=y["estus flask.png"].default,r.id="title-drink-photo",t.appendChild(r);let o=document.createElement("h3");o.innerText="DRIKS",t.appendChild(o),n.appendChild(t),E.appendChild(n);for(let e=0;e<Object.keys(v).length;e++)T(v,Object.keys(v)[e]);let i=document.createElement("div");i.id="food-container",E.appendChild(i);let a=document.createElement("div");a.id="title-food-container";let c=document.createElement("img");c.src=y["Elizabeth-Mushroom.png"].default,c.id="elizabeth",a.appendChild(c);let s=document.createElement("h3");s.innerText="Food",a.appendChild(s),i.appendChild(a);for(let e=0;e<Object.keys(b).length;e++)T(b,Object.keys(b)[e])}();break;case"about":n.classList.add("selected")}}))}for(let e=0;e<k.length;e++)w(k[e]);const E=document.createElement("main");E.id="main",h.appendChild(E);const C=document.createElement("footer");function j(){document.querySelector("#home").classList.add("selected");let e=document.createElement("div");e.id="title-container",E.appendChild(e);let n=document.createElement("h1");n.innerText="Nameless Restaurant ",n.id="home-title",e.appendChild(n);let t=document.createElement("h3");t.innerText="Prepare to Get Fat",t.id="home-subtitle",e.appendChild(t);let r=document.createElement("img");r.id="main-background",r.src=y["blackKnight.png"].default,E.appendChild(r)}function T(e,n){let t=document.createElement("div");t.id=`${n}-container`,t.classList.add("item-container");let r=document.createElement("img");e==v?r.src=v[n].default:e==b&&(r.src=b[n].default),t.appendChild(r);let o=document.createElement("h5");o.innerText=n.slice(0,-4),t.appendChild(o),e==v?document.querySelector("#drinks-container").appendChild(t):e==b&&document.querySelector("#food-container").appendChild(t)}C.id="footer",h.appendChild(C),j()})()})();