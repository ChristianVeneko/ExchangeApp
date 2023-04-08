(()=>{var r={960:(r,t,e)=>{"use strict";e.d(t,{Z:()=>c});var n=e(81),o=e.n(n),a=e(645),i=e.n(a)()(o());i.push([r.id,"body {\r\n  background: #00bf8f; /* fallback for old browsers */\r\n  background: -webkit-linear-gradient(\r\n    to right,\r\n    #001510,\r\n    #00bf8f\r\n  ); /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(\r\n    to right,\r\n    #001510,\r\n    #00bf8f\r\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card {\r\n  width: 400px;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  text-align: center;\r\n  border: 1px solid #ccc;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n}\r\n\r\n.card-icon {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-size: 30px;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.result-card {\r\n  margin-top: 50px;\r\n}\r\n\r\n.result-card-img {\r\n  width: 200px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.result-card-number {\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.result-card-icon {\r\n  font-size: 30px;\r\n  margin-left: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.result-card {\r\n  margin-top: 50px;\r\n}\r\n\r\n.result-image {\r\n  width: 32px;\r\n  height: 32px;\r\n  object-fit: cover;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.result-number {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.result-left {\r\n  text-align: center;\r\n}\r\n\r\n.result-right {\r\n  text-align: center;\r\n}\r\n\r\n.result-equal-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .result-equal-icon i {\r\n    font-size: 48px;\r\n    color: #777;\r\n  }\r\n  \r\n\r\n@media (max-width: 576px) {\r\n  .card,\r\n  .result-card {\r\n    width: 100%;\r\n  }\r\n}\r\n",""]);const c=i},645:r=>{"use strict";r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var e="",n=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),n&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=r(t),n&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(r,e,n,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var p=[].concat(r[u]);n&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:r=>{"use strict";r.exports=function(r){return r[1]}},106:(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var n=e(379),o=e.n(n),a=e(795),i=e.n(a),c=e(569),s=e.n(c),u=e(565),p=e.n(u),l=e(216),d=e.n(l),m=e(589),f=e.n(m),g=e(960),h={};h.styleTagTransform=f(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),o()(g.Z,h);const y=g.Z&&g.Z.locals?g.Z.locals:void 0},379:r=>{"use strict";var t=[];function e(r){for(var e=-1,n=0;n<t.length;n++)if(t[n].identifier===r){e=n;break}return e}function n(r,n){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=n.base?s[0]+n.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=e(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(m);else{var f=o(m,n);n.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(r,t){var e=t.domAPI(t);return e.update(r),function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap&&t.supports===r.supports&&t.layer===r.layer)return;e.update(r=t)}else e.remove()}}r.exports=function(r,o){var a=n(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var s=n(r,o),u=0;u<a.length;u++){var p=e(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},569:r=>{"use strict";var t={};r.exports=function(r,e){var n=function(r){if(void 0===t[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}t[r]=e}return t[r]}(r);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},216:r=>{"use strict";r.exports=function(r){var t=document.createElement("style");return r.setAttributes(t,r.attributes),r.insert(t,r.options),t}},565:(r,t,e)=>{"use strict";r.exports=function(r){var t=e.nc;t&&r.setAttribute("nonce",t)}},795:r=>{"use strict";r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=r.insertStyleElement(r);return{update:function(e){!function(r,t,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,o&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,r,t.options)}(t,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)}}}},589:r=>{"use strict";r.exports=function(r,t){if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},382:(r,t,e)=>{"use strict";e.r(t),e.d(t,{UI:()=>n});class n{constructor(){this.flagImport=document.getElementById("flagImport"),this.currencyImport=document.getElementById("currencyImport"),this.importString=document.getElementById("import"),this.flagExport=document.getElementById("flagExport"),this.currencyExport=document.getElementById("currencyExport"),this.exportEstring=document.getElementById("export")}getFlag(r,t){const e=r.substring(0,r.length-1);let n=`https://flagsapi.com/${e}/flat/64.png`;"EU"==e&&(n="https://cdn-icons-png.flaticon.com/512/555/555657.png"),"import"==t?this.flagImport.src=n:this.flagExport.src=n}showResults(r,t,e,n){this.currencyImport.textContent=r,this.importString.textContent=t,this.currencyExport.textContent=e,this.exportEstring.textContent=n}}},38:(r,t,e)=>{"use strict";e.r(t),e.d(t,{Currency:()=>n});class n{constructor(r,t,e){this.importMoney=r,this.importCurrency=t,this.exportCurrency=e,this.result=0,this.apiKey="21269929c292c24434675fef"}async getExchangeImport(){const r=`https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${this.importCurrency}`;return(await fetch(r,{method:"GET"})).json()}calculateResult(r){return this.importMoney*r}updateData(r,t,e){this.importMoney=r,this.importCurrency=t,this.exportCurrency=e}}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return r[n](a,a.exports,e),a.exports}e.n=r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.nc=void 0,(()=>{const{Currency:r}=e(38),{UI:t}=e(382);e(106);const n=new t,o=new r(1,"usd","ves");async function a(){const r=await o.getExchangeImport();!function(r){const t=r.toFixed(2);n.getFlag(o.importCurrency.toUpperCase(),"import"),n.getFlag(o.exportCurrency.toUpperCase(),"export"),n.showResults(o.importCurrency,o.importMoney,o.exportCurrency,t)}(o.calculateResult(r.conversion_rates[o.exportCurrency.toUpperCase()]))}console.log("hi"),document.getElementById("calculate").addEventListener("click",(r=>{if(3==n.currencyImport.value.length&&3==n.currencyExport.value.length){const r=document.getElementById("cantImport").value,t=document.getElementById("currencyImport").value,e=document.getElementById("currencyExport").value,n=parseFloat(r);o.updateData(n,t,e),a()}else window.alert("There is a minimum and maximum of 3 characters on the currency");r.preventDefault()})),document.addEventListener("DOMContentLoaded",a)})()})();