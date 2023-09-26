(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),c=t(667),s=t.n(c),l=new URL(t(772),t.b),d=new URL(t(759),t.b),f=i()(r()),u=s()(l),p=s()(d);f.push([e.id,`@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 200;\n    font-display: swap;\n    src: url(${u}) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n@font-face {\n    font-family: 'Montserrat-bold';\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: url(${p}) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n\n* {\n    font-family: 'Montserrat';\n    box-sizing:border-box;\n}\n\nbody {\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:center;\n    margin:0;\n    height:max(100vh,100%);\n    overflow:auto;\n    gap:20px;\n}\n\nform {\n    display:flex;\n    flex-direction:column;\n    gap:20px;\n    align-items:center;\n}\n\nform>.inputs {\n    display:flex;\n    flex-direction:row;\n    gap:5px;\n}\n\ninput,\nselect {\n    width:80%;\n    text-align:center;\n}\n\nform>button {\n    width:50%;\n}\n\n.label-input-pair {\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:center;\n    width:100px;\n    gap:10px;\n}\n\n#weather-forecast {\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:center;\n    gap:15px;\n    width:min(100%, 500px);\n    border: 1px solid orange;\n    height:100%;\n}\n\n#weather-forecast>.forecast-day {\n    width:100%;\n    border:1px solid gray;\n    border-radius:5px;\n    display:grid;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    grid-template-rows: 1.5em 2em;\n    grid-auto-rows: 100px;\n    gap:10px;\n    background-color:rgb(227, 247, 253);\n    padding:15px;\n}\n\n.databit {\n    border: 1px solid green;\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:center;\n}\n\n.databit-header {\n    font-size:0.8em;\n    color:gray;\n    text-align:center;\n    margin-bottom:5px;\n}\n\n.databit-content {\n    font-size:1.2em;\n    text-align:center;\n}\n\n.forecast-day-header {\n    grid-column: 1 / -1;\n    text-align:center;\n    font-size:1.2em;\n    height:100%;\n    align-items:center;\n    justify-content:center;\n    font-family: 'Montserrat-bold';\n}\n\n.forecast-day-subheader {\n    grid-column: 1 / -1;\n    text-align:center;\n    font-size:1em;\n    height:100%;\n    align-items:flex-end;\n    justify-content:center;\n}`,""]);const m=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=a.base?s[0]+a.base:s[0],d=o[l]||0,f="".concat(l," ").concat(d);o[l]=d+1;var u=t(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var m=r(p,a);a.byIndex=c,n.splice(c,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=a(e,r),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},759:(e,n,t)=>{e.exports=t.p+"bd62b395df700f8d01c5.woff2"},772:(e,n,t)=>{e.exports=t.p+"bd62b395df700f8d01c5.woff2"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),s=t.n(c),l=t(216),d=t.n(l),f=t(589),u=t.n(f),p=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const h=document.getElementById("location"),y=document.getElementById("days"),b=document.getElementById("form"),g=document.getElementById("weather-forecast"),v=[{name:"maxtemp_f",label:"High",unit:"°f"},{name:"mintemp_f",label:"Low",unit:"°f"},{name:"avghumidity",label:"Humidity",unit:"%"},{name:"maxwind_mph",label:"Wind",unit:" mph"},{name:"avgvis_miles",label:"Visibility",unit:" mi"},{name:"daily_chance_of_rain",label:"Rain chance",unit:"%"},{name:"daily_chance_of_snow",label:"Snow chance",unit:"%"},{name:"totalprecip_in",label:"Precipitation",unit:" in"}];b.onsubmit=function(e){e.preventDefault(),async function(){const e=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2e21eea24f714bb4a65154936231909&q=${h.value}&days=${y.value}&aqi=no&alerts=no)`,{mode:"cors"}),n=await e.json();console.log(n.forecast.forecastday[0]),console.log(n),function(e){for(let n=0;n<y.value;n++){const t=document.createElement("div");t.classList.add("forecast-day");const a=document.createElement("div");a.classList.add("forecast-day-header");let r=e.forecast.forecastday[n].date.slice(5,7);switch(r){case"01":r="January";break;case"02":r="February";break;case"03":r="March";break;case"04":r="April";break;case"05":r="May";break;case"06":r="June";break;case"07":r="July";break;case"08":r="August";break;case"09":r="September";break;case"10":r="October";break;case"11":r="November";break;case"12":r="December"}a.textContent+=`${r} `,a.textContent+=`${e.forecast.forecastday[n].date.slice(8,10)}`,a.textContent=0===n?"Today":a.textContent,t.appendChild(a);const o=document.createElement("div");o.classList.add("forecast-day-subheader"),o.textContent=`${e.forecast.forecastday[n].day.condition.text}`,t.appendChild(o),v.forEach((a=>{const r=document.createElement("div");r.classList.add("databit");const o=document.createElement("div");o.classList.add("databit-header"),o.textContent=`${a.label}`,r.appendChild(o);const i=document.createElement("div");i.classList.add("databit-content"),i.textContent=`${e.forecast.forecastday[n].day[a.name]}${a.unit}`,r.appendChild(i),t.appendChild(r)})),g.appendChild(t)}}(n)}()}})()})();