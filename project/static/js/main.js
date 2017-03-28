/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.9 (2017-03-08)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(I,a){"object"===typeof module&&module.exports?module.exports=I.document?a(I):a:I.Highcharts=a(I)})("undefined"!==typeof window?window:this,function(I){I=function(){var a=window,B=a.document,z=a.navigator&&a.navigator.userAgent||"",C=B&&B.createElementNS&&!!B.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,E=/(edge|msie|trident)/i.test(z)&&!window.opera,u=!C,h=/Firefox/.test(z),n=h&&4>parseInt(z.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",
version:"5.0.9",deg2rad:2*Math.PI/360,doc:B,hasBidiBug:n,hasTouch:B&&void 0!==B.documentElement.ontouchstart,isMS:E,isWebKit:/AppleWebKit/.test(z),isFirefox:h,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(z),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:C,vml:u,win:a,charts:[],marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){}}}();(function(a){var B=[],z=a.charts,C=a.doc,E=a.win;a.error=function(u,h){u=a.isNumber(u)?"Highcharts error #"+
u+": www.highcharts.com/errors/"+u:u;if(h)throw Error(u);E.console&&console.log(u)};a.Fx=function(a,h,n){this.options=h;this.elem=a;this.prop=n};a.Fx.prototype={dSetter:function(){var a=this.paths[0],h=this.paths[1],n=[],t=this.now,l=a.length,k;if(1===t)n=this.toD;else if(l===h.length&&1>t)for(;l--;)k=parseFloat(a[l]),n[l]=isNaN(k)?a[l]:t*parseFloat(h[l]-k)+k;else n=h;this.elem.attr("d",n,null,!0)},update:function(){var a=this.elem,h=this.prop,n=this.now,t=this.options.step;if(this[h+"Setter"])this[h+
"Setter"]();else a.attr?a.element&&a.attr(h,n,null,!0):a.style[h]=n+this.unit;t&&t.call(a,n,this)},run:function(a,h,n){var u=this,l=function(a){return l.stopped?!1:u.step(a)},k;this.startTime=+new Date;this.start=a;this.end=h;this.unit=n;this.now=this.start;this.pos=0;l.elem=this.elem;l.prop=this.prop;l()&&1===B.push(l)&&(l.timerId=setInterval(function(){for(k=0;k<B.length;k++)B[k]()||B.splice(k--,1);B.length||clearInterval(l.timerId)},13))},step:function(a){var h=+new Date,u,t=this.options;u=this.elem;
var l=t.complete,k=t.duration,e=t.curAnim,c;if(u.attr&&!u.element)u=!1;else if(a||h>=k+this.startTime){this.now=this.end;this.pos=1;this.update();a=e[this.prop]=!0;for(c in e)!0!==e[c]&&(a=!1);a&&l&&l.call(u);u=!1}else this.pos=t.easing((h-this.startTime)/k),this.now=this.start+(this.end-this.start)*this.pos,this.update(),u=!0;return u},initPath:function(u,h,n){function t(a){var b,f;for(r=a.length;r--;)b="M"===a[r]||"L"===a[r],f=/[a-zA-Z]/.test(a[r+3]),b&&f&&a.splice(r+1,0,a[r+1],a[r+2],a[r+1],a[r+
2])}function l(a,f){for(;a.length<m;){a[0]=f[m-a.length];var d=a.slice(0,b);[].splice.apply(a,[0,0].concat(d));A&&(d=a.slice(a.length-b),[].splice.apply(a,[a.length,0].concat(d)),r--)}a[0]="M"}function k(a,f){for(var c=(m-a.length)/b;0<c&&c--;)d=a.slice().splice(a.length/v-b,b*v),d[0]=f[m-b-c*b],H&&(d[b-6]=d[b-2],d[b-5]=d[b-1]),[].splice.apply(a,[a.length/v,0].concat(d)),A&&c--}h=h||"";var e,c=u.startX,p=u.endX,H=-1<h.indexOf("C"),b=H?7:3,m,d,r;h=h.split(" ");n=n.slice();var A=u.isArea,v=A?2:1,f;
H&&(t(h),t(n));if(c&&p){for(r=0;r<c.length;r++)if(c[r]===p[0]){e=r;break}else if(c[0]===p[p.length-c.length+r]){e=r;f=!0;break}void 0===e&&(h=[])}h.length&&a.isNumber(e)&&(m=n.length+e*v*b,f?(l(h,n),k(n,h)):(l(n,h),k(h,n)));return[h,n]}};a.extend=function(a,h){var u;a||(a={});for(u in h)a[u]=h[u];return a};a.merge=function(){var u,h=arguments,n,t={},l=function(k,e){var c,p;"object"!==typeof k&&(k={});for(p in e)e.hasOwnProperty(p)&&(c=e[p],a.isObject(c,!0)&&"renderTo"!==p&&"number"!==typeof c.nodeType?
k[p]=l(k[p]||{},c):k[p]=e[p]);return k};!0===h[0]&&(t=h[1],h=Array.prototype.slice.call(h,2));n=h.length;for(u=0;u<n;u++)t=l(t,h[u]);return t};a.pInt=function(a,h){return parseInt(a,h||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(u,h){return u&&"object"===typeof u&&(!h||!a.isArray(u))};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=
function(a,h){for(var u=a.length;u--;)if(a[u]===h){a.splice(u,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(u,h,n){var t,l;if(a.isString(h))a.defined(n)?u.setAttribute(h,n):u&&u.getAttribute&&(l=u.getAttribute(h));else if(a.defined(h)&&a.isObject(h))for(t in h)u.setAttribute(t,h[t]);return l};a.splat=function(u){return a.isArray(u)?u:[u]};a.syncTimeout=function(a,h,n){if(h)return setTimeout(a,h,n);a.call(0,n)};a.pick=function(){var a=arguments,h,n,t=a.length;for(h=
0;h<t;h++)if(n=a[h],void 0!==n&&null!==n)return n};a.css=function(u,h){a.isMS&&!a.svg&&h&&void 0!==h.opacity&&(h.filter="alpha(opacity\x3d"+100*h.opacity+")");a.extend(u.style,h)};a.createElement=function(u,h,n,t,l){u=C.createElement(u);var k=a.css;h&&a.extend(u,h);l&&k(u,{padding:0,border:"none",margin:0});n&&k(u,n);t&&t.appendChild(u);return u};a.extendClass=function(u,h){var n=function(){};n.prototype=new u;a.extend(n.prototype,h);return n};a.pad=function(a,h,n){return Array((h||2)+1-String(a).length).join(n||
0)+a};a.relativeLength=function(a,h){return/%$/.test(a)?h*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,h,n){var t=a[h];a[h]=function(){var a=Array.prototype.slice.call(arguments),k=arguments,e=this;e.proceed=function(){t.apply(e,arguments.length?arguments:k)};a.unshift(t);a=n.apply(this,a);e.proceed=null;return a}};a.getTZOffset=function(u){var h=a.Date;return 6E4*(h.hcGetTimezoneOffset&&h.hcGetTimezoneOffset(u)||h.hcTimezoneOffset||0)};a.dateFormat=function(u,h,n){if(!a.defined(h)||isNaN(h))return a.defaultOptions.lang.invalidDate||
"";u=a.pick(u,"%Y-%m-%d %H:%M:%S");var t=a.Date,l=new t(h-a.getTZOffset(h)),k,e=l[t.hcGetHours](),c=l[t.hcGetDay](),p=l[t.hcGetDate](),H=l[t.hcGetMonth](),b=l[t.hcGetFullYear](),m=a.defaultOptions.lang,d=m.weekdays,r=m.shortWeekdays,A=a.pad,t=a.extend({a:r?r[c]:d[c].substr(0,3),A:d[c],d:A(p),e:A(p,2," "),w:c,b:m.shortMonths[H],B:m.months[H],m:A(H+1),y:b.toString().substr(2,2),Y:b,H:A(e),k:e,I:A(e%12||12),l:e%12||12,M:A(l[t.hcGetMinutes]()),p:12>e?"AM":"PM",P:12>e?"am":"pm",S:A(l.getSeconds()),L:A(Math.round(h%
1E3),3)},a.dateFormats);for(k in t)for(;-1!==u.indexOf("%"+k);)u=u.replace("%"+k,"function"===typeof t[k]?t[k](h):t[k]);return n?u.substr(0,1).toUpperCase()+u.substr(1):u};a.formatSingle=function(u,h){var n=/\.([0-9])/,t=a.defaultOptions.lang;/f$/.test(u)?(n=(n=u.match(n))?n[1]:-1,null!==h&&(h=a.numberFormat(h,n,t.decimalPoint,-1<u.indexOf(",")?t.thousandsSep:""))):h=a.dateFormat(u,h);return h};a.format=function(u,h){for(var n="{",t=!1,l,k,e,c,p=[],H;u;){n=u.indexOf(n);if(-1===n)break;l=u.slice(0,
n);if(t){l=l.split(":");k=l.shift().split(".");c=k.length;H=h;for(e=0;e<c;e++)H=H[k[e]];l.length&&(H=a.formatSingle(l.join(":"),H));p.push(H)}else p.push(l);u=u.slice(n+1);n=(t=!t)?"}":"{"}p.push(u);return p.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(u,h,n,t,l){var k,e=u;n=a.pick(n,1);k=u/n;h||(h=l?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===n?h=a.grep(h,function(a){return 0===a%1}):.1>=n&&(h=[1/n])));
for(t=0;t<h.length&&!(e=h[t],l&&e*n>=u||!l&&k<=(h[t]+(h[t+1]||h[t]))/2);t++);return e=a.correctFloat(e*n,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,h){var n=a.length,t,l;for(l=0;l<n;l++)a[l].safeI=l;a.sort(function(a,e){t=h(a,e);return 0===t?a.safeI-e.safeI:t});for(l=0;l<n;l++)delete a[l].safeI};a.arrayMin=function(a){for(var h=a.length,n=a[0];h--;)a[h]<n&&(n=a[h]);return n};a.arrayMax=function(a){for(var h=a.length,n=a[0];h--;)a[h]>n&&(n=a[h]);return n};a.destroyObjectProperties=
function(a,h){for(var n in a)a[n]&&a[n]!==h&&a[n].destroy&&a[n].destroy(),delete a[n]};a.discardElement=function(u){var h=a.garbageBin;h||(h=a.createElement("div"));u&&h.appendChild(u);h.innerHTML=""};a.correctFloat=function(a,h){return parseFloat(a.toPrecision(h||14))};a.setAnimation=function(u,h){h.renderer.globalAnimation=a.pick(u,h.options.chart.animation,!0)};a.animObject=function(u){return a.isObject(u)?a.merge(u):{duration:u?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(u,h,n,t){u=+u||0;h=+h;var l=a.defaultOptions.lang,k=(u.toString().split(".")[1]||"").length,e,c;-1===h?h=Math.min(k,20):a.isNumber(h)||(h=2);c=(Math.abs(u)+Math.pow(10,-Math.max(h,k)-1)).toFixed(h);k=String(a.pInt(c));e=3<k.length?k.length%3:0;n=a.pick(n,l.decimalPoint);t=a.pick(t,l.thousandsSep);u=(0>u?"-":"")+(e?k.substr(0,e)+t:"");u+=k.substr(e).replace(/(\d{3})(?=\d)/g,"$1"+t);h&&(u+=n+c.slice(-h));return u};Math.easeInOutSine=
function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(u,h){return"width"===h?Math.min(u.offsetWidth,u.scrollWidth)-a.getStyle(u,"padding-left")-a.getStyle(u,"padding-right"):"height"===h?Math.min(u.offsetHeight,u.scrollHeight)-a.getStyle(u,"padding-top")-a.getStyle(u,"padding-bottom"):(u=E.getComputedStyle(u,void 0))&&a.pInt(u.getPropertyValue(h))};a.inArray=function(a,h){return h.indexOf?h.indexOf(a):[].indexOf.call(h,a)};a.grep=function(a,h){return[].filter.call(a,h)};a.find=function(a,
h){return[].find.call(a,h)};a.map=function(a,h){for(var n=[],t=0,l=a.length;t<l;t++)n[t]=h.call(a[t],a[t],t,a);return n};a.offset=function(a){var h=C.documentElement;a=a.getBoundingClientRect();return{top:a.top+(E.pageYOffset||h.scrollTop)-(h.clientTop||0),left:a.left+(E.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}};a.stop=function(a,h){for(var n=B.length;n--;)B[n].elem!==a||h&&h!==B[n].prop||(B[n].stopped=!0)};a.each=function(a,h,n){return Array.prototype.forEach.call(a,h,n)};a.addEvent=function(u,
h,n){function t(a){a.target=a.srcElement||E;n.call(u,a)}var l=u.hcEvents=u.hcEvents||{};u.addEventListener?u.addEventListener(h,n,!1):u.attachEvent&&(u.hcEventsIE||(u.hcEventsIE={}),u.hcEventsIE[n.toString()]=t,u.attachEvent("on"+h,t));l[h]||(l[h]=[]);l[h].push(n);return function(){a.removeEvent(u,h,n)}};a.removeEvent=function(u,h,n){function t(a,c){u.removeEventListener?u.removeEventListener(a,c,!1):u.attachEvent&&(c=u.hcEventsIE[c.toString()],u.detachEvent("on"+a,c))}function l(){var a,c;if(u.nodeName)for(c in h?
(a={},a[h]=!0):a=e,a)if(e[c])for(a=e[c].length;a--;)t(c,e[c][a])}var k,e=u.hcEvents,c;e&&(h?(k=e[h]||[],n?(c=a.inArray(n,k),-1<c&&(k.splice(c,1),e[h]=k),t(h,n)):(l(),e[h]=[])):(l(),u.hcEvents={}))};a.fireEvent=function(u,h,n,t){var l;l=u.hcEvents;var k,e;n=n||{};if(C.createEvent&&(u.dispatchEvent||u.fireEvent))l=C.createEvent("Events"),l.initEvent(h,!0,!0),a.extend(l,n),u.dispatchEvent?u.dispatchEvent(l):u.fireEvent(h,l);else if(l)for(l=l[h]||[],k=l.length,n.target||a.extend(n,{preventDefault:function(){n.defaultPrevented=
!0},target:u,type:h}),h=0;h<k;h++)(e=l[h])&&!1===e.call(u,n)&&n.preventDefault();t&&!n.defaultPrevented&&t(n)};a.animate=function(u,h,n){var t,l="",k,e,c;a.isObject(n)||(t=arguments,n={duration:t[2],easing:t[3],complete:t[4]});a.isNumber(n.duration)||(n.duration=400);n.easing="function"===typeof n.easing?n.easing:Math[n.easing]||Math.easeInOutSine;n.curAnim=a.merge(h);for(c in h)a.stop(u,c),e=new a.Fx(u,n,c),k=null,"d"===c?(e.paths=e.initPath(u,u.d,h.d),e.toD=h.d,t=0,k=1):u.attr?t=u.attr(c):(t=parseFloat(a.getStyle(u,
c))||0,"opacity"!==c&&(l="px")),k||(k=h[c]),k&&k.match&&k.match("px")&&(k=k.replace(/px/g,"")),e.run(t,k,l)};a.seriesType=function(u,h,n,t,l){var k=a.getOptions(),e=a.seriesTypes;k.plotOptions[u]=a.merge(k.plotOptions[h],n);e[u]=a.extendClass(e[h]||function(){},t);e[u].prototype.type=u;l&&(e[u].prototype.pointClass=a.extendClass(a.Point,l));return e[u]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),h=0;return function(){return"highcharts-"+a+"-"+h++}}();E.jQuery&&(E.jQuery.fn.highcharts=
function(){var u=[].slice.call(arguments);if(this[0])return u[0]?(new (a[a.isString(u[0])?u.shift():"Chart"])(this[0],u[0],u[1]),this):z[a.attr(this[0],"data-highcharts-chart")]});C&&!C.defaultView&&(a.getStyle=function(u,h){var n={width:"clientWidth",height:"clientHeight"}[h];if(u.style[h])return a.pInt(u.style[h]);"opacity"===h&&(h="filter");if(n)return u.style.zoom=1,Math.max(u[n]-2*a.getStyle(u,"padding"),0);u=u.currentStyle[h.replace(/\-(\w)/g,function(a,l){return l.toUpperCase()})];"filter"===
h&&(u=u.replace(/alpha\(opacity=([0-9]+)\)/,function(a,l){return l/100}));return""===u?1:a.pInt(u)});Array.prototype.forEach||(a.each=function(a,h,n){for(var t=0,l=a.length;t<l;t++)if(!1===h.call(n,a[t],t,a))return t});Array.prototype.indexOf||(a.inArray=function(a,h){var n,t=0;if(h)for(n=h.length;t<n;t++)if(h[t]===a)return t;return-1});Array.prototype.filter||(a.grep=function(a,h){for(var n=[],t=0,l=a.length;t<l;t++)h(a[t],t)&&n.push(a[t]);return n});Array.prototype.find||(a.find=function(a,h){var n,
t=a.length;for(n=0;n<t;n++)if(h(a[n],n))return a[n]})})(I);(function(a){var B=a.each,z=a.isNumber,C=a.map,E=a.merge,u=a.pInt;a.Color=function(h){if(!(this instanceof a.Color))return new a.Color(h);this.init(h)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[u(a[1]),u(a[2]),u(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[u(a[1]),
u(a[2]),u(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(h){var n,t,l,k;if((this.input=h=this.names[h]||h)&&h.stops)this.stops=C(h.stops,function(e){return new a.Color(e[1])});else if(h&&"#"===h[0]&&(n=h.length,h=parseInt(h.substr(1),16),7===n?t=[(h&16711680)>>16,(h&65280)>>8,h&255,1]:4===n&&(t=[(h&3840)>>4|(h&3840)>>8,(h&240)>>4|h&240,(h&15)<<4|h&15,1])),!t)for(l=this.parsers.length;l--&&!t;)k=this.parsers[l],(n=k.regex.exec(h))&&(t=k.parse(n));this.rgba=t||[]},get:function(a){var h=
this.input,t=this.rgba,l;this.stops?(l=E(h),l.stops=[].concat(l.stops),B(this.stops,function(k,e){l.stops[e]=[l.stops[e][0],k.get(a)]})):l=t&&z(t[0])?"rgb"===a||!a&&1===t[3]?"rgb("+t[0]+","+t[1]+","+t[2]+")":"a"===a?t[3]:"rgba("+t.join(",")+")":h;return l},brighten:function(a){var h,t=this.rgba;if(this.stops)B(this.stops,function(l){l.brighten(a)});else if(z(a)&&0!==a)for(h=0;3>h;h++)t[h]+=u(255*a),0>t[h]&&(t[h]=0),255<t[h]&&(t[h]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};
a.color=function(h){return new a.Color(h)}})(I);(function(a){var B,z,C=a.addEvent,E=a.animate,u=a.attr,h=a.charts,n=a.color,t=a.css,l=a.createElement,k=a.defined,e=a.deg2rad,c=a.destroyObjectProperties,p=a.doc,H=a.each,b=a.extend,m=a.erase,d=a.grep,r=a.hasTouch,A=a.inArray,v=a.isArray,f=a.isFirefox,y=a.isMS,G=a.isObject,F=a.isString,q=a.isWebKit,x=a.merge,J=a.noop,K=a.pick,L=a.pInt,g=a.removeEvent,D=a.stop,S=a.svg,M=a.SVG_NS,R=a.symbolSizes,N=a.win;B=a.SVGElement=function(){return this};B.prototype=
{opacity:1,SVG_NS:M,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,g){this.element="span"===g?l(g):p.createElementNS(this.SVG_NS,g);this.renderer=a},animate:function(w,g,b){g=a.animObject(K(g,this.renderer.globalAnimation,!0));0!==g.duration?(b&&(g.complete=b),E(this,w,g)):(this.attr(w,null,b),g.step&&g.step.call(this));return this},colorGradient:function(w,g,b){var f=this.renderer,
d,c,q,D,O,y,r,G,e,m,p,l=[],Q;w.linearGradient?c="linearGradient":w.radialGradient&&(c="radialGradient");if(c){q=w[c];O=f.gradients;r=w.stops;m=b.radialReference;v(q)&&(w[c]=q={x1:q[0],y1:q[1],x2:q[2],y2:q[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===c&&m&&!k(q.gradientUnits)&&(D=q,q=x(q,f.getRadialAttr(m,D),{gradientUnits:"userSpaceOnUse"}));for(p in q)"id"!==p&&l.push(p,q[p]);for(p in r)l.push(r[p]);l=l.join(",");O[l]?m=O[l].attr("id"):(q.id=m=a.uniqueKey(),O[l]=y=f.createElement(c).attr(q).add(f.defs),
y.radAttr=D,y.stops=[],H(r,function(w){0===w[1].indexOf("rgba")?(d=a.color(w[1]),G=d.get("rgb"),e=d.get("a")):(G=w[1],e=1);w=f.createElement("stop").attr({offset:w[0],"stop-color":G,"stop-opacity":e}).add(y);y.stops.push(w)}));Q="url("+f.url+"#"+m+")";b.setAttribute(g,Q);b.gradient=l;w.toString=function(){return Q}}},applyTextOutline:function(a){var w=this.element,g,b,f,d;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(w.style.fill)));this.fakeTS=!0;this.ySetter=this.xSetter;
g=[].slice.call(w.getElementsByTagName("tspan"));a=a.split(" ");b=a[a.length-1];(f=a[0])&&"none"!==f&&(f=f.replace(/(^[\d\.]+)(.*?)$/g,function(a,w,g){return 2*w+g}),H(g,function(a){"highcharts-text-outline"===a.getAttribute("class")&&m(g,w.removeChild(a))}),d=w.firstChild,H(g,function(a,g){0===g&&(a.setAttribute("x",w.getAttribute("x")),g=w.getAttribute("y"),a.setAttribute("y",g||0),null===g&&w.setAttribute("y",0));a=a.cloneNode(1);u(a,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":f,
"stroke-linejoin":"round"});w.insertBefore(a,d)}))},attr:function(a,g,b,f){var w,d=this.element,q,c=this,y;"string"===typeof a&&void 0!==g&&(w=a,a={},a[w]=g);if("string"===typeof a)c=(this[a+"Getter"]||this._defaultGetter).call(this,a,d);else{for(w in a)g=a[w],y=!1,f||D(this,w),this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(w)&&(q||(this.symbolAttr(a),q=!0),y=!0),!this.rotation||"x"!==w&&"y"!==w||(this.doTransform=!0),y||(y=this[w+"Setter"]||this._defaultSetter,y.call(this,
g,w,d),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(w)&&this.updateShadows(w,g,y));this.doTransform&&(this.updateTransform(),this.doTransform=!1)}b&&b();return c},updateShadows:function(a,g,b){for(var w=this.shadows,f=w.length;f--;)b.call(w[f],"height"===a?Math.max(g-(w[f].cutHeight||0),0):"d"===a?this.d:g,a,w[f])},addClass:function(a,g){var w=this.attr("class")||"";-1===w.indexOf(a)&&(g||(a=(w+(w?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==
u(this.element,"class").indexOf(a)},removeClass:function(a){u(this.element,"class",(u(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var w=this;H("x y r start end width height innerR anchorX anchorY".split(" "),function(g){w[g]=K(a[g],w[g])});w.attr({d:w.renderer.symbols[w.symbolName](w.x,w.y,w.width,w.height,w)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var w,f={},b;g=g||a.strokeWidth||0;b=Math.round(g)%
2/2;a.x=Math.floor(a.x||this.x||0)+b;a.y=Math.floor(a.y||this.y||0)+b;a.width=Math.floor((a.width||this.width||0)-2*b);a.height=Math.floor((a.height||this.height||0)-2*b);k(a.strokeWidth)&&(a.strokeWidth=g);for(w in a)this[w]!==a[w]&&(this[w]=f[w]=a[w]);return f},css:function(a){var w=this.styles,g={},f=this.element,d,q="",c=!w,D=["textOverflow","width"];a&&a.color&&(a.fill=a.color);if(w)for(d in a)a[d]!==w[d]&&(g[d]=a[d],c=!0);if(c){w&&(a=b(w,g));w=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===
f.nodeName.toLowerCase()&&L(a.width);this.styles=a;w&&!S&&this.renderer.forExport&&delete a.width;if(y&&!S)t(this.element,a);else{w=function(a,w){return"-"+w.toLowerCase()};for(d in a)-1===A(d,D)&&(q+=d.replace(/([A-Z])/g,w)+":"+a[d]+";");q&&u(f,"style",q)}this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var w=this,f=w.element;r&&"click"===
a?(f.ontouchstart=function(a){w.touchEventFired=Date.now();a.preventDefault();g.call(f,a)},f.onclick=function(a){(-1===N.navigator.userAgent.indexOf("Android")||1100<Date.now()-(w.touchEventFired||0))&&g.call(f,a)}):f["on"+a]=g;return this},setRadialReference:function(a){var w=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;w&&w.radAttr&&w.animate(this.renderer.getRadialAttr(a,w.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,translateY:g})},
invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,f=this.scaleX,b=this.scaleY,d=this.inverted,q=this.rotation,c=this.element;d&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];d?a.push("rotate(90) scale(-1,1)"):q&&a.push("rotate("+q+" "+(c.getAttribute("x")||0)+" "+(c.getAttribute("y")||0)+")");(k(f)||k(b))&&a.push("scale("+K(f,1)+" "+K(b,1)+")");a.length&&c.setAttribute("transform",a.join(" "))},
toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,g,f){var w,b,d,q,c={};b=this.renderer;d=b.alignedObjects;var D,y;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!f||F(f))this.alignTo=w=f||"renderer",m(d,this),d.push(this),f=null}else a=this.alignOptions,g=this.alignByTranslate,w=this.alignTo;f=K(f,b[w],b);w=a.align;b=a.verticalAlign;d=(f.x||0)+(a.x||0);q=(f.y||0)+(a.y||0);"right"===w?D=1:"center"===w&&(D=2);D&&(d+=(f.width-(a.width||0))/D);c[g?
"translateX":"x"]=Math.round(d);"bottom"===b?y=1:"middle"===b&&(y=2);y&&(q+=(f.height-(a.height||0))/y);c[g?"translateY":"y"]=Math.round(q);this[this.placed?"animate":"attr"](c);this.placed=!0;this.alignAttr=c;return this},getBBox:function(a,g){var w,f=this.renderer,d,q=this.element,c=this.styles,D,y=this.textStr,x,r=f.cache,G=f.cacheKeys,m;g=K(g,this.rotation);d=g*e;D=c&&c.fontSize;void 0!==y&&(m=y.toString(),-1===m.indexOf("\x3c")&&(m=m.replace(/[0-9]/g,"0")),m+=["",g||0,D,c&&c.width,c&&c.textOverflow].join());
m&&!a&&(w=r[m]);if(!w){if(q.namespaceURI===this.SVG_NS||f.forExport){try{(x=this.fakeTS&&function(a){H(q.querySelectorAll(".highcharts-text-outline"),function(w){w.style.display=a})})&&x("none"),w=q.getBBox?b({},q.getBBox()):{width:q.offsetWidth,height:q.offsetHeight},x&&x("")}catch(X){}if(!w||0>w.width)w={width:0,height:0}}else w=this.htmlGetBBox();f.isSVG&&(a=w.width,f=w.height,c&&"11px"===c.fontSize&&17===Math.round(f)&&(w.height=f=14),g&&(w.width=Math.abs(f*Math.sin(d))+Math.abs(a*Math.cos(d)),
w.height=Math.abs(f*Math.cos(d))+Math.abs(a*Math.sin(d))));if(m&&0<w.height){for(;250<G.length;)delete r[G.shift()];r[m]||G.push(m);r[m]=w}}return w},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var w=this;w.animate({opacity:0},{duration:a||150,complete:function(){w.attr({y:-9999})}})},add:function(a){var w=this.renderer,g=this.element,f;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;
void 0!==this.textStr&&w.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)f=this.zIndexSetter();f||(a?a.element:w.box).appendChild(g);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var w=a.parentNode;w&&w.removeChild(a)},destroy:function(){var a=this.element||{},g=this.renderer.isSVG&&"SPAN"===a.nodeName&&this.parentGroup,f,b;a.onclick=a.onmouseout=a.onmouseover=a.onmousemove=a.point=null;D(this);this.clipPath&&(this.clipPath=this.clipPath.destroy());if(this.stops){for(b=
0;b<this.stops.length;b++)this.stops[b]=this.stops[b].destroy();this.stops=null}this.safeRemoveChild(a);for(this.destroyShadows();g&&g.div&&0===g.div.childNodes.length;)a=g.parentGroup,this.safeRemoveChild(g.div),delete g.div,g=a;this.alignTo&&m(this.renderer.alignedObjects,this);for(f in this)delete this[f];return null},shadow:function(a,g,f){var w=[],b,d,c=this.element,q,D,y,x;if(!a)this.destroyShadows();else if(!this.shadows){D=K(a.width,3);y=(a.opacity||.15)/D;x=this.parentInverted?"(-1,-1)":
"("+K(a.offsetX,1)+", "+K(a.offsetY,1)+")";for(b=1;b<=D;b++)d=c.cloneNode(0),q=2*D+1-2*b,u(d,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":y*b,"stroke-width":q,transform:"translate"+x,fill:"none"}),f&&(u(d,"height",Math.max(u(d,"height")-q,0)),d.cutHeight=q),g?g.element.appendChild(d):c.parentNode.insertBefore(d,c),w.push(d);this.shadows=w}return this},destroyShadows:function(){H(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===
this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=K(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,f){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");f.setAttribute(g,a);this[g]=a},dashstyleSetter:function(a){var w,g=this["stroke-width"];"inherit"===g&&(g=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot",
"3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(w=a.length;w--;)a[w]=L(a[w])*g;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,f){this[g]=a;f.setAttribute(g,a)},titleSetter:function(a){var w=this.element.getElementsByTagName("title")[0];
w||(w=p.createElementNS(this.SVG_NS,"title"),this.element.appendChild(w));w.firstChild&&w.removeChild(w.firstChild);w.appendChild(p.createTextNode(String(K(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,f){"string"===typeof a?f.setAttribute(g,a):a&&this.colorGradient(a,g,f)},visibilitySetter:function(a,g,f){"inherit"===a?f.removeAttribute(g):f.setAttribute(g,a)},zIndexSetter:function(a,
g){var w=this.renderer,f=this.parentGroup,b=(f||w).element||w.box,d,c=this.element,q;d=this.added;var D;k(a)&&(c.zIndex=a,a=+a,this[g]===a&&(d=!1),this[g]=a);if(d){(a=this.zIndex)&&f&&(f.handleZ=!0);g=b.childNodes;for(D=0;D<g.length&&!q;D++)f=g[D],d=f.zIndex,f!==c&&(L(d)>a||!k(a)&&k(d)||0>a&&!k(d)&&b!==w.box)&&(b.insertBefore(c,f),q=!0);q||b.appendChild(c)}return q},_defaultSetter:function(a,g,f){f.setAttribute(g,a)}};B.prototype.yGetter=B.prototype.xGetter;B.prototype.translateXSetter=B.prototype.translateYSetter=
B.prototype.rotationSetter=B.prototype.verticalAlignSetter=B.prototype.scaleXSetter=B.prototype.scaleYSetter=function(a,g){this[g]=a;this.doTransform=!0};B.prototype["stroke-widthSetter"]=B.prototype.strokeSetter=function(a,g,f){this[g]=a;this.stroke&&this["stroke-width"]?(B.prototype.fillSetter.call(this,this.stroke,"stroke",f),f.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(f.removeAttribute("stroke"),this.hasStroke=!1)};z=a.SVGRenderer=
function(){this.init.apply(this,arguments)};z.prototype={Element:B,SVG_NS:M,init:function(a,g,b,d,c,D){var w;d=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(d));w=d.element;a.appendChild(w);-1===a.innerHTML.indexOf("xmlns")&&u(w,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=w;this.boxWrapper=d;this.alignedObjects=[];this.url=(f||q)&&p.getElementsByTagName("base").length?N.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,
"%20"):"";this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 5.0.9"));this.defs=this.createElement("defs").add();this.allowHTML=D;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,b,!1);var y;f&&a.getBoundingClientRect&&(g=function(){t(a,{left:0,top:0});y=a.getBoundingClientRect();t(a,{left:Math.ceil(y.left)-y.left+"px",top:Math.ceil(y.top)-y.top+"px"})},g(),this.unSubPixelFix=C(N,"resize",g))},getStyle:function(a){return this.style=
b({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();c(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;
g.init(this,a);return g},draw:J,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},buildText:function(a){var g=a.element,f=this,w=f.forExport,b=K(a.textStr,"").toString(),c=-1!==b.indexOf("\x3c"),q=g.childNodes,D,y,x,r,G=u(g,"x"),m=a.styles,e=a.textWidth,l=m&&m.lineHeight,v=m&&m.textOutline,k=m&&"ellipsis"===m.textOverflow,h=m&&"nowrap"===m.whiteSpace,F=m&&m.fontSize,A,J=q.length,m=e&&!a.added&&this.box,n=function(a){var w;w=/(px|em)$/.test(a&&a.style.fontSize)?
a.style.fontSize:F||f.style.fontSize||12;return l?L(l):f.fontMetrics(w,a.getAttribute("style")?a:g).h};A=[b,k,h,l,v,F,e].join();if(A!==a.textCache){for(a.textCache=A;J--;)g.removeChild(q[J]);c||v||k||e||-1!==b.indexOf(" ")?(D=/<.*class="([^"]+)".*>/,y=/<.*style="([^"]+)".*>/,x=/<.*href="(http[^"]+)".*>/,m&&m.appendChild(g),b=c?b.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,
"\x3c/span\x3e").split(/<br.*?>/g):[b],b=d(b,function(a){return""!==a}),H(b,function(b,d){var c,q=0;b=b.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");c=b.split("|||");H(c,function(b){if(""!==b||1===c.length){var m={},v=p.createElementNS(f.SVG_NS,"tspan"),l,F;D.test(b)&&(l=b.match(D)[1],u(v,"class",l));y.test(b)&&(F=b.match(y)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),u(v,"style",F));x.test(b)&&!w&&(u(v,"onclick",'location.href\x3d"'+b.match(x)[1]+
'"'),t(v,{cursor:"pointer"}));b=(b.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==b){v.appendChild(p.createTextNode(b));q?m.dx=0:d&&null!==G&&(m.x=G);u(v,m);g.appendChild(v);!q&&d&&(!S&&w&&t(v,{display:"block"}),u(v,"dy",n(v)));if(e){m=b.replace(/([^\^])-/g,"$1- ").split(" ");l=1<c.length||d||1<m.length&&!h;for(var A,H,O=[],J=n(v),K=a.rotation,L=b,P=L.length;(l||k)&&(m.length||O.length);)a.rotation=0,A=a.getBBox(!0),H=A.width,!S&&f.forExport&&(H=f.measureSpanWidth(v.firstChild.data,
a.styles)),A=H>e,void 0===r&&(r=A),k&&r?(P/=2,""===L||!A&&.5>P?m=[]:(L=b.substring(0,L.length+(A?-1:1)*Math.ceil(P)),m=[L+(3<e?"\u2026":"")],v.removeChild(v.firstChild))):A&&1!==m.length?(v.removeChild(v.firstChild),O.unshift(m.pop())):(m=O,O=[],m.length&&!h&&(v=p.createElementNS(M,"tspan"),u(v,{dy:J,x:G}),F&&u(v,"style",F),g.appendChild(v)),H>e&&(e=H)),m.length&&v.appendChild(p.createTextNode(m.join(" ").replace(/- /g,"-")));a.rotation=K}q++}}})}),r&&a.attr("title",a.textStr),m&&m.removeChild(g),
v&&a.applyTextOutline&&a.applyTextOutline(v)):g.appendChild(p.createTextNode(b.replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=n(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,f,d,c,q,D,m,r){var w=this.label(a,g,f,r,null,null,null,null,"button"),G=0;w.attr(x({padding:8,r:2},c));var e,v,p,l;c=x({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},c);e=c.style;delete c.style;q=x(c,{fill:"#e6e6e6"},
q);v=q.style;delete q.style;D=x(c,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},D);p=D.style;delete D.style;m=x(c,{style:{color:"#cccccc"}},m);l=m.style;delete m.style;C(w.element,y?"mouseover":"mouseenter",function(){3!==G&&w.setState(1)});C(w.element,y?"mouseout":"mouseleave",function(){3!==G&&w.setState(G)});w.setState=function(a){1!==a&&(w.state=G=a);w.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||
0]);w.attr([c,q,D,m][a||0]).css([e,v,p,l][a||0])};w.attr(c).css(b({cursor:"default"},e));return w.on("click",function(a){3!==G&&d.call(w,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};v(a)?g.d=a:G(a)&&b(g,a);return this.createElement("path").attr(g)},circle:function(a,g,f){a=G(a)?a:{x:a,y:g,r:f};g=this.createElement("circle");g.xSetter=g.ySetter=function(a,g,f){f.setAttribute("c"+
g,a)};return g.attr(a)},arc:function(a,g,f,b,d,c){G(a)?(b=a,g=b.y,f=b.r,a=b.x):b={innerR:b,start:d,end:c};a=this.symbol("arc",a,g,f,f,b);a.r=f;return a},rect:function(a,g,f,b,d,c){d=G(a)?a.r:d;var w=this.createElement("rect");a=G(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(f,0),height:Math.max(b,0)};void 0!==c&&(a.strokeWidth=c,a=w.crisp(a));a.fill="none";d&&(a.r=d);w.rSetter=function(a,g,f){u(f,{rx:a,ry:a})};return w.attr(a)},setSize:function(a,g,f){var b=this.alignedObjects,d=b.length;this.width=
a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:K(f,!0)?void 0:0});d--;)b[d].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,f,d,c){var w={preserveAspectRatio:"none"};1<arguments.length&&b(w,{x:g,y:f,width:d,height:c});w=this.createElement("image").attr(w);w.element.setAttributeNS?w.element.setAttributeNS("http://www.w3.org/1999/xlink",
"href",a):w.element.setAttribute("hc-svg-href",a);return w},symbol:function(a,g,f,d,c,q){var w=this,D,y=this.symbols[a],m=k(g)&&y&&this.symbols[a](Math.round(g),Math.round(f),d,c,q),x=/^url\((.*?)\)$/,G,r;y?(D=this.path(m),D.attr("fill","none"),b(D,{symbolName:a,x:g,y:f,width:d,height:c}),q&&b(D,q)):x.test(a)&&(G=a.match(x)[1],D=this.image(G),D.imgwidth=K(R[G]&&R[G].width,q&&q.width),D.imgheight=K(R[G]&&R[G].height,q&&q.height),r=function(){D.attr({width:D.width,height:D.height})},H(["width","height"],
function(a){D[a+"Setter"]=function(a,g){var f={},b=this["img"+g],d="width"===g?"translateX":"translateY";this[g]=a;k(b)&&(this.element&&this.element.setAttribute(g,b),this.alignByTranslate||(f[d]=((this[g]||0)-b)/2,this.attr(f)))}}),k(g)&&D.attr({x:g,y:f}),D.isImg=!0,k(D.imgwidth)&&k(D.imgheight)?r():(D.attr({width:0,height:0}),l("img",{onload:function(){var a=h[w.chartIndex];0===this.width&&(t(this,{position:"absolute",top:"-999em"}),p.body.appendChild(this));R[G]={width:this.width,height:this.height};
D.imgwidth=this.width;D.imgheight=this.height;D.element&&r();this.parentNode&&this.parentNode.removeChild(this);w.imgCount--;if(!w.imgCount&&a&&a.onload)a.onload()},src:G}),this.imgCount++));return D},symbols:{circle:function(a,g,f,b){return this.arc(a+f/2,g+b/2,f/2,b/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,f,b){return["M",a,g,"L",a+f,g,a+f,g+b,a,g+b,"Z"]},triangle:function(a,g,f,b){return["M",a+f/2,g,"L",a+f,g+b,a,g+b,"Z"]},"triangle-down":function(a,g,f,b){return["M",a,g,"L",a+f,
g,a+f/2,g+b,"Z"]},diamond:function(a,g,f,b){return["M",a+f/2,g,"L",a+f,g+b/2,a+f/2,g+b,a,g+b/2,"Z"]},arc:function(a,g,f,b,d){var c=d.start,w=d.r||f,q=d.r||b||f,D=d.end-.001;f=d.innerR;b=d.open;var y=Math.cos(c),m=Math.sin(c),x=Math.cos(D),D=Math.sin(D);d=d.end-c<Math.PI?0:1;w=["M",a+w*y,g+q*m,"A",w,q,0,d,1,a+w*x,g+q*D];k(f)&&w.push(b?"M":"L",a+f*x,g+f*D,"A",f,f,0,d,0,a+f*y,g+f*m);w.push(b?"":"Z");return w},callout:function(a,g,f,b,d){var c=Math.min(d&&d.r||0,f,b),q=c+6,D=d&&d.anchorX;d=d&&d.anchorY;
var w;w=["M",a+c,g,"L",a+f-c,g,"C",a+f,g,a+f,g,a+f,g+c,"L",a+f,g+b-c,"C",a+f,g+b,a+f,g+b,a+f-c,g+b,"L",a+c,g+b,"C",a,g+b,a,g+b,a,g+b-c,"L",a,g+c,"C",a,g,a,g,a+c,g];D&&D>f?d>g+q&&d<g+b-q?w.splice(13,3,"L",a+f,d-6,a+f+6,d,a+f,d+6,a+f,g+b-c):w.splice(13,3,"L",a+f,b/2,D,d,a+f,b/2,a+f,g+b-c):D&&0>D?d>g+q&&d<g+b-q?w.splice(33,3,"L",a,d+6,a-6,d,a,d-6,a,g+c):w.splice(33,3,"L",a,b/2,D,d,a,b/2,a,g+c):d&&d>b&&D>a+q&&D<a+f-q?w.splice(23,3,"L",D+6,g+b,D,g+b+6,D-6,g+b,a+c,g+b):d&&0>d&&D>a+q&&D<a+f-q&&w.splice(3,
3,"L",D-6,g,D,g-6,D+6,g,f-c,g);return w}},clipRect:function(g,f,b,d){var c=a.uniqueKey(),q=this.createElement("clipPath").attr({id:c}).add(this.defs);g=this.rect(g,f,b,d,0).add(q);g.id=c;g.clipPath=q;g.count=0;return g},text:function(a,g,f,b){var d=!S&&this.forExport,c={};if(b&&(this.allowHTML||!this.forExport))return this.html(a,g,f);c.x=Math.round(g||0);f&&(c.y=Math.round(f));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);d&&a.css({position:"absolute"});b||(a.xSetter=function(a,g,f){var b=
f.getElementsByTagName("tspan"),d,c=f.getAttribute(g),q;for(q=0;q<b.length;q++)d=b[q],d.getAttribute(g)===c&&d.setAttribute(g,a);f.setAttribute(g,a)});return a},fontMetrics:function(a,g){a=a||g&&g.style&&g.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?L(a):/em/.test(a)?parseFloat(a)*(g?this.fontMetrics(null,g.parentNode).f:16):12;g=24>a?a+3:Math.round(1.2*a);return{h:g,b:Math.round(.8*g),f:a}},rotCorr:function(a,g,f){var b=a;g&&f&&(b=Math.max(b*Math.cos(g*e),4));return{x:-a/3*Math.sin(g*
e),y:b}},label:function(f,d,c,q,D,y,m,G,r){var w=this,e=w.g("button"!==r&&"label"),v=e.text=w.text("",0,0,m).attr({zIndex:1}),p,l,F=0,A=3,h=0,J,t,S,n,M,K={},L,u,O=/^url\((.*?)\)$/.test(q),R=O,P,Q,N,U;r&&e.addClass("highcharts-"+r);R=O;P=function(){return(L||0)%2/2};Q=function(){var a=v.element.style,g={};l=(void 0===J||void 0===t||M)&&k(v.textStr)&&v.getBBox();e.width=(J||l.width||0)+2*A+h;e.height=(t||l.height||0)+2*A;u=A+w.fontMetrics(a&&a.fontSize,v).b;R&&(p||(e.box=p=w.symbols[q]||O?w.symbol(q):
w.rect(),p.addClass(("button"===r?"":"highcharts-label-box")+(r?" highcharts-"+r+"-box":"")),p.add(e),a=P(),g.x=a,g.y=(G?-u:0)+a),g.width=Math.round(e.width),g.height=Math.round(e.height),p.attr(b(g,K)),K={})};N=function(){var a=h+A,g;g=G?0:u;k(J)&&l&&("center"===M||"right"===M)&&(a+={center:.5,right:1}[M]*(J-l.width));if(a!==v.x||g!==v.y)v.attr("x",a),void 0!==g&&v.attr("y",g);v.x=a;v.y=g};U=function(a,g){p?p.attr(a,g):K[a]=g};e.onAdd=function(){v.add(e);e.attr({text:f||0===f?f:"",x:d,y:c});p&&k(D)&&
e.attr({anchorX:D,anchorY:y})};e.widthSetter=function(g){J=a.isNumber(g)?g:null};e.heightSetter=function(a){t=a};e["text-alignSetter"]=function(a){M=a};e.paddingSetter=function(a){k(a)&&a!==A&&(A=e.padding=a,N())};e.paddingLeftSetter=function(a){k(a)&&a!==h&&(h=a,N())};e.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==F&&(F=a,l&&e.attr({x:S}))};e.textSetter=function(a){void 0!==a&&v.textSetter(a);Q();N()};e["stroke-widthSetter"]=function(a,g){a&&(R=!0);L=this["stroke-width"]=a;U(g,a)};
e.strokeSetter=e.fillSetter=e.rSetter=function(a,g){"fill"===g&&a&&(R=!0);U(g,a)};e.anchorXSetter=function(a,g){D=a;U(g,Math.round(a)-P()-S)};e.anchorYSetter=function(a,g){y=a;U(g,a-n)};e.xSetter=function(a){e.x=a;F&&(a-=F*((J||l.width)+2*A));S=Math.round(a);e.attr("translateX",S)};e.ySetter=function(a){n=e.y=Math.round(a);e.attr("translateY",n)};var W=e.css;return b(e,{css:function(a){if(a){var g={};a=x(a);H(e.textProps,function(f){void 0!==a[f]&&(g[f]=a[f],delete a[f])});v.css(g)}return W.call(e,
a)},getBBox:function(){return{width:l.width+2*A,height:l.height+2*A,x:l.x-A,y:l.y-A}},shadow:function(a){a&&(Q(),p&&p.shadow(a));return e},destroy:function(){g(e.element,"mouseenter");g(e.element,"mouseleave");v&&(v=v.destroy());p&&(p=p.destroy());B.prototype.destroy.call(e);e=w=Q=N=U=null}})}};a.Renderer=z})(I);(function(a){var B=a.attr,z=a.createElement,C=a.css,E=a.defined,u=a.each,h=a.extend,n=a.isFirefox,t=a.isMS,l=a.isWebKit,k=a.pInt,e=a.SVGRenderer,c=a.win,p=a.wrap;h(a.SVGElement.prototype,
{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=h(this.styles,a);C(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,
b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,p=this.y||0,v=this.textAlign||"left",f={left:0,center:.5,right:1}[v],y=this.styles;C(b,{marginLeft:c,marginTop:d});this.shadows&&u(this.shadows,function(a){C(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&u(b.childNodes,function(f){a.invertChild(f,b)});if("SPAN"===b.tagName){var G=this.rotation,F=k(this.textWidth),q=y&&y.whiteSpace,x=[G,v,b.innerHTML,this.textWidth,this.textAlign].join();x!==this.cTT&&(y=a.fontMetrics(b.style.fontSize).b,
E(G)&&this.setSpanRotation(G,f,y),C(b,{width:"",whiteSpace:q||"nowrap"}),b.offsetWidth>F&&/[ \-]/.test(b.textContent||b.innerText)&&C(b,{width:F+"px",display:"block",whiteSpace:q||"normal"}),this.getSpanCorrection(b.offsetWidth,y,f,G,v));C(b,{left:e+(this.xCorr||0)+"px",top:p+(this.yCorr||0)+"px"});l&&(y=b.offsetHeight);this.cTT=x}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,e){var d={},m=t?"-ms-transform":l?"-webkit-transform":n?"MozTransform":c.opera?"-o-transform":"";d[m]=d.transform=
"rotate("+a+"deg)";d[m+(n?"Origin":"-origin")]=d.transformOrigin=100*b+"% "+e+"px";C(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});h(e.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,m=d.renderer,v=m.isSVG,f=function(a,f){u(["opacity","visibility"],function(b){p(a,b+"Setter",function(a,b,d,c){a.call(this,b,d,c);f[d]=b})})};d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};
v&&f(d,d.element.style);d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,f){"align"===f&&(f="textAlign");d[f]=a;d.htmlUpdateTransform()};d.attr({text:a,x:Math.round(b),y:Math.round(c)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});e.style.whiteSpace="nowrap";d.css=d.htmlCss;v&&(d.add=function(a){var b,c=m.box.parentNode,q=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)q.push(a),a=a.parentGroup;u(q.reverse(),function(a){var y,e=B(a.element,
"class");e&&(e={className:e});b=a.div=a.div||z("div",e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||c);y=b.style;h(a,{on:function(){d.on.apply({element:q[0].div},arguments);return a},translateXSetter:function(f,g){y.left=f+"px";a[g]=f;a.doTransform=!0},translateYSetter:function(f,g){y.top=f+"px";a[g]=f;a.doTransform=!0}});f(a,y)})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&
d.htmlUpdateTransform();return d});return d}})})(I);(function(a){var B,z,C=a.createElement,E=a.css,u=a.defined,h=a.deg2rad,n=a.discardElement,t=a.doc,l=a.each,k=a.erase,e=a.extend;B=a.extendClass;var c=a.isArray,p=a.isNumber,H=a.isObject,b=a.merge;z=a.noop;var m=a.pick,d=a.pInt,r=a.SVGElement,A=a.SVGRenderer,v=a.win;a.svg||(z={docMode8:t&&8===t.documentMode,init:function(a,b){var f=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],d=["position: ","absolute",";"],c="div"===b;("shape"===b||c)&&d.push("left:0;top:0;width:1px;height:1px;");
d.push("visibility: ",c?"hidden":"visible");f.push(' style\x3d"',d.join(""),'"/\x3e');b&&(f=c||"span"===b||"img"===b?f.join(""):a.prepVML(f),this.element=C(f));this.renderer=a},add:function(a){var f=this.renderer,b=this.element,d=f.box,c=a&&a.inverted,d=a?a.element||a:d;a&&(this.parentGroup=a);c&&f.invertChild(b,d);d.appendChild(b);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},
updateTransform:r.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*h),d=Math.sin(a*h);E(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-d,", M21\x3d",d,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,d,c,q){var f=c?Math.cos(c*h):1,e=c?Math.sin(c*h):0,y=m(this.elemHeight,this.element.offsetHeight),r;this.xCorr=0>f&&-a;this.yCorr=0>e&&-y;r=0>f*e;this.xCorr+=e*b*(r?1-
d:d);this.yCorr-=f*b*(c?r?d:1-d:1);q&&"left"!==q&&(this.xCorr-=a*d*(0>f?-1:1),c&&(this.yCorr-=y*d*(0>e?-1:1)),E(this.element,{textAlign:q}))},pathToVML:function(a){for(var f=a.length,b=[];f--;)p(a[f])?b[f]=Math.round(10*a[f])-5:"Z"===a[f]?b[f]="x":(b[f]=a[f],!a.isArc||"wa"!==a[f]&&"at"!==a[f]||(b[f+5]===b[f+7]&&(b[f+7]+=a[f+7]>a[f+5]?1:-1),b[f+6]===b[f+8]&&(b[f+8]+=a[f+8]>a[f+6]?1:-1)));return b.join(" ")||"x"},clip:function(a){var f=this,b;a?(b=a.members,k(b,f),b.push(f),f.destroyClip=function(){k(b,
f)},a=a.getCSS(f)):(f.destroyClip&&f.destroyClip(),a={clip:f.docMode8?"inherit":"rect(auto)"});return f.css(a)},css:r.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&n(a)},destroy:function(){this.destroyClip&&this.destroyClip();return r.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=v.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var f;a=a.split(/[ ,]/);f=a.length;if(9===f||11===f)a[f-4]=a[f-2]=d(a[f-2])-10*b;return a.join(" ")},
shadow:function(a,b,c){var f=[],q,e=this.element,y=this.renderer,r,v=e.style,g,D=e.path,p,l,G,k;D&&"string"!==typeof D.value&&(D="x");l=D;if(a){G=m(a.width,3);k=(a.opacity||.15)/G;for(q=1;3>=q;q++)p=2*G+1-2*q,c&&(l=this.cutOffPath(D.value,p+.5)),g=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',p,'" filled\x3d"false" path\x3d"',l,'" coordsize\x3d"10 10" style\x3d"',e.style.cssText,'" /\x3e'],r=C(y.prepVML(g),null,{left:d(v.left)+m(a.offsetX,1),top:d(v.top)+m(a.offsetY,1)}),c&&(r.cutOff=p+1),g=['\x3cstroke color\x3d"',
a.color||"#000000",'" opacity\x3d"',k*q,'"/\x3e'],C(y.prepVML(g),null,null,r),b?b.element.appendChild(r):e.parentNode.insertBefore(r,e),f.push(r);this.shadows=f}return this},updateShadows:z,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,d){(d.getElementsByTagName("stroke")[0]||C(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,d))[b]=a||"solid";this[b]=a},dSetter:function(a,
b,d){var f=this.shadows;a=a||[];this.d=a.join&&a.join(" ");d.path=a=this.pathToVML(a);if(f)for(d=f.length;d--;)f[d].path=f[d].cutOff?this.cutOffPath(a,f[d].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,d){var f=d.nodeName;"SPAN"===f?d.style.color=a:"IMG"!==f&&(d.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,d,b,this)))},"fill-opacitySetter":function(a,b,d){C(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,d)},opacitySetter:z,rotationSetter:function(a,
b,d){d=d.style;this[b]=d[b]=a;d.left=-Math.round(Math.sin(a*h)+1)+"px";d.top=Math.round(Math.cos(a*h))+"px"},strokeSetter:function(a,b,d){this.setAttr("strokecolor",this.renderer.color(a,d,b,this))},"stroke-widthSetter":function(a,b,d){d.stroked=!!a;this[b]=a;p(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,d){"inherit"===a&&(a="visible");this.shadows&&l(this.shadows,function(f){f.style[b]=a});"DIV"===d.nodeName&&(a="hidden"===
a?"-999em":0,this.docMode8||(d.style[b]=a?"visible":"hidden"),b="top");d.style[b]=a},xSetter:function(a,b,d){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):d.style[b]=a},zIndexSetter:function(a,b,d){d.style[b]=a}},z["stroke-opacitySetter"]=z["fill-opacitySetter"],a.VMLElement=z=B(r,z),z.prototype.ySetter=z.prototype.widthSetter=z.prototype.heightSetter=z.prototype.xSetter,z={Element:z,isIE8:-1<v.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,
b,d){var f,c;this.alignedObjects=[];f=this.createElement("div").css({position:"relative"});c=f.element;a.appendChild(f.element);this.isVML=!0;this.box=c;this.boxWrapper=f;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,d,!1);if(!t.namespaces.hcv){t.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{t.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(x){t.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,d,c){var f=this.createElement(),m=H(a);return e(f,{members:[],count:0,left:(m?a.x:a)+1,top:(m?a.y:b)+1,width:(m?a.width:d)-1,height:(m?a.height:c)-1,getCSS:function(a){var b=a.element,d=b.nodeName,g=a.inverted,f=this.top-("shape"===d?b.offsetTop:0),c=this.left,b=c+this.width,q=f+this.height,f={clip:"rect("+Math.round(g?
c:f)+"px,"+Math.round(g?q:b)+"px,"+Math.round(g?b:q)+"px,"+Math.round(g?f:c)+"px)"};!g&&a.docMode8&&"DIV"===d&&e(f,{width:b+"px",height:q+"px"});return f},updateClipping:function(){l(f.members,function(a){a.element&&a.css(f.getCSS(a))})}})},color:function(b,d,c,e){var f=this,m,r=/^rgba/,v,p,g="none";b&&b.linearGradient?p="gradient":b&&b.radialGradient&&(p="pattern");if(p){var D,y,k=b.linearGradient||b.radialGradient,A,h,w,G,t,F="";b=b.stops;var n,H=[],u=function(){v=['\x3cfill colors\x3d"'+H.join(",")+
'" opacity\x3d"',w,'" o:opacity2\x3d"',h,'" type\x3d"',p,'" ',F,'focus\x3d"100%" method\x3d"any" /\x3e'];C(f.prepVML(v),null,null,d)};A=b[0];n=b[b.length-1];0<A[0]&&b.unshift([0,A[1]]);1>n[0]&&b.push([1,n[1]]);l(b,function(g,b){r.test(g[1])?(m=a.color(g[1]),D=m.get("rgb"),y=m.get("a")):(D=g[1],y=1);H.push(100*g[0]+"% "+D);b?(w=y,G=D):(h=y,t=D)});if("fill"===c)if("gradient"===p)c=k.x1||k[0]||0,b=k.y1||k[1]||0,A=k.x2||k[2]||0,k=k.y2||k[3]||0,F='angle\x3d"'+(90-180*Math.atan((k-b)/(A-c))/Math.PI)+'"',
u();else{var g=k.r,z=2*g,B=2*g,E=k.cx,V=k.cy,I=d.radialReference,T,g=function(){I&&(T=e.getBBox(),E+=(I[0]-T.x)/T.width-.5,V+=(I[1]-T.y)/T.height-.5,z*=I[2]/T.width,B*=I[2]/T.height);F='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+z+","+B+'" origin\x3d"0.5,0.5" position\x3d"'+E+","+V+'" color2\x3d"'+t+'" ';u()};e.added?g():e.onAdd=g;g=G}else g=D}else r.test(b)&&"IMG"!==d.tagName?(m=a.color(b),e[c+"-opacitySetter"](m.get("a"),c,d),g=m.get("rgb")):(g=d.getElementsByTagName(c),
g.length&&(g[0].opacity=1,g[0].type="solid"),g=b);return g},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:A.prototype.html,path:function(a){var b={coordsize:"10 10"};c(a)?b.d=
a:H(a)&&e(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,d){var f=this.symbol("circle");H(a)&&(d=a.r,b=a.y,a=a.x);f.isCircle=!0;f.r=d;return f.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,d,c,q){var f=this.createElement("img").attr({src:a});1<arguments.length&&f.attr({x:b,y:d,width:c,height:q});return f},createElement:function(a){return"rect"===a?this.symbol(a):A.prototype.createElement.call(this,
a)},invertChild:function(a,b){var f=this;b=b.style;var c="IMG"===a.tagName&&a.style;E(a,{flip:"x",left:d(b.width)-(c?d(c.top):1),top:d(b.height)-(c?d(c.left):1),rotation:-90});l(a.childNodes,function(b){f.invertChild(b,a)})},symbols:{arc:function(a,b,d,c,q){var f=q.start,e=q.end,m=q.r||d||c;d=q.innerR;c=Math.cos(f);var r=Math.sin(f),g=Math.cos(e),D=Math.sin(e);if(0===e-f)return["x"];f=["wa",a-m,b-m,a+m,b+m,a+m*c,b+m*r,a+m*g,b+m*D];q.open&&!d&&f.push("e","M",a,b);f.push("at",a-d,b-d,a+d,b+d,a+d*g,
b+d*D,a+d*c,b+d*r,"x","e");f.isArc=!0;return f},circle:function(a,b,d,c,q){q&&u(q.r)&&(d=c=2*q.r);q&&q.isCircle&&(a-=d/2,b-=c/2);return["wa",a,b,a+d,b+c,a+d,b+c/2,a+d,b+c/2,"e"]},rect:function(a,b,d,c,q){return A.prototype.symbols[u(q)&&q.r?"callout":"square"].call(0,a,b,d,c,q)}}},a.VMLRenderer=B=function(){this.init.apply(this,arguments)},B.prototype=b(A.prototype,z),a.Renderer=B);A.prototype.measureSpanWidth=function(a,b){var d=t.createElement("span");a=t.createTextNode(a);d.appendChild(a);E(d,
b);this.box.appendChild(d);b=d.offsetWidth;n(d);return b}})(I);(function(a){function B(){var l=a.defaultOptions.global,k=t.moment;if(l.timezone){if(k)return function(a){return-k.tz(a,l.timezone).utcOffset()};a.error(25)}return l.useUTC&&l.getTimezoneOffset}function z(){var l=a.defaultOptions.global,k,e=l.useUTC,c=e?"getUTC":"get",p=e?"setUTC":"set";a.Date=k=l.Date||t.Date;k.hcTimezoneOffset=e&&l.timezoneOffset;k.hcGetTimezoneOffset=B();k.hcMakeTime=function(a,b,c,d,r,p){var m;e?(m=k.UTC.apply(0,arguments),
m+=u(m)):m=(new k(a,b,n(c,1),n(d,0),n(r,0),n(p,0))).getTime();return m};E("Minutes Hours Day Date Month FullYear".split(" "),function(a){k["hcGet"+a]=c+a});E("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){k["hcSet"+a]=p+a})}var C=a.color,E=a.each,u=a.getTZOffset,h=a.merge,n=a.pick,t=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],
lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.9/gfx/vml-radial-gradient.png"},
chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",
labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",
top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(l){a.defaultOptions=h(!0,a.defaultOptions,l);z();
return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;z()})(I);(function(a){var B=a.arrayMax,z=a.arrayMin,C=a.defined,E=a.destroyObjectProperties,u=a.each,h=a.erase,n=a.merge,t=a.pick;a.PlotLineOrBand=function(a,k){this.axis=a;k&&(this.options=k,this.id=k.id)};a.PlotLineOrBand.prototype={render:function(){var a=this,k=a.axis,e=k.horiz,c=a.options,p=c.label,h=a.label,b=c.to,m=c.from,d=c.value,r=C(m)&&C(b),A=C(d),v=a.svgElem,f=!v,
y=[],G,F=c.color,q=t(c.zIndex,0),x=c.events,y={"class":"highcharts-plot-"+(r?"band ":"line ")+(c.className||"")},J={},u=k.chart.renderer,L=r?"bands":"lines",g=k.log2lin;k.isLog&&(m=g(m),b=g(b),d=g(d));A?(y={stroke:F,"stroke-width":c.width},c.dashStyle&&(y.dashstyle=c.dashStyle)):r&&(F&&(y.fill=F),c.borderWidth&&(y.stroke=c.borderColor,y["stroke-width"]=c.borderWidth));J.zIndex=q;L+="-"+q;(F=k[L])||(k[L]=F=u.g("plot-"+L).attr(J).add());f&&(a.svgElem=v=u.path().attr(y).add(F));if(A)y=k.getPlotLinePath(d,
v.strokeWidth());else if(r)y=k.getPlotBandPath(m,b,c);else return;if(f&&y&&y.length){if(v.attr({d:y}),x)for(G in c=function(b){v.on(b,function(g){x[b].apply(a,[g])})},x)c(G)}else v&&(y?(v.show(),v.animate({d:y})):(v.hide(),h&&(a.label=h=h.destroy())));p&&C(p.text)&&y&&y.length&&0<k.width&&0<k.height&&!y.flat?(p=n({align:e&&r&&"center",x:e?!r&&4:10,verticalAlign:!e&&r&&"middle",y:e?r?16:10:r?6:-4,rotation:e&&!r&&90},p),this.renderLabel(p,y,r,q)):h&&h.hide();return a},renderLabel:function(a,k,e,c){var p=
this.label,l=this.axis.chart.renderer;p||(p={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(e?"band":"line")+"-label "+(a.className||"")},p.zIndex=c,this.label=p=l.text(a.text,0,0,a.useHTML).attr(p).add(),p.css(a.style));c=[k[1],k[4],e?k[6]:k[1]];k=[k[2],k[5],e?k[7]:k[2]];e=z(c);l=z(k);p.align(a,!1,{x:e,y:l,width:B(c)-e,height:B(k)-l});p.show()},destroy:function(){h(this.axis.plotLinesAndBands,this);delete this.axis;E(this)}};a.AxisPlotLineOrBandExtension={getPlotBandPath:function(a,
k){k=this.getPlotLinePath(k,null,null,!0);(a=this.getPlotLinePath(a,null,null,!0))&&k?(a.flat=a.toString()===k.toString(),a.push(k[4],k[5],k[1],k[2],"z")):a=null;return a},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(l,k){var e=(new a.PlotLineOrBand(this,l)).render(),c=this.userOptions;e&&(k&&(c[k]=c[k]||[],c[k].push(l)),this.plotLinesAndBands.push(e));return e},removePlotBandOrLine:function(a){for(var k=
this.plotLinesAndBands,e=this.options,c=this.userOptions,p=k.length;p--;)k[p].id===a&&k[p].destroy();u([e.plotLines||[],c.plotLines||[],e.plotBands||[],c.plotBands||[]],function(c){for(p=c.length;p--;)c[p].id===a&&h(c,c[p])})}}})(I);(function(a){var B=a.correctFloat,z=a.defined,C=a.destroyObjectProperties,E=a.isNumber,u=a.merge,h=a.pick,n=a.deg2rad;a.Tick=function(a,l,k,e){this.axis=a;this.pos=l;this.type=k||"";this.isNew=!0;k||e||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,
l=a.options,k=a.chart,e=a.categories,c=a.names,p=this.pos,n=l.labels,b=a.tickPositions,m=p===b[0],d=p===b[b.length-1],c=e?h(e[p],c[p],p):p,e=this.label,b=b.info,r;a.isDatetimeAxis&&b&&(r=l.dateTimeLabelFormats[b.higherRanks[p]||b.unitName]);this.isFirst=m;this.isLast=d;l=a.labelFormatter.call({axis:a,chart:k,isFirst:m,isLast:d,dateTimeLabelFormat:r,value:a.isLog?B(a.lin2log(c)):c});z(e)?e&&e.attr({text:l}):(this.labelLength=(this.label=e=z(l)&&n.enabled?k.renderer.text(l,0,0,n.useHTML).css(u(n.style)).add(a.labelGroup):
null)&&e.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var l=this.axis,k=a.x,e=l.chart.chartWidth,c=l.chart.spacing,p=h(l.labelLeft,Math.min(l.pos,c[3])),c=h(l.labelRight,Math.max(l.pos+l.len,e-c[1])),t=this.label,b=this.rotation,m={left:0,center:.5,right:1}[l.labelAlign],d=t.getBBox().width,r=l.getSlotWidth(),A=r,v=1,f,y={};if(b)0>b&&k-m*d<p?f=Math.round(k/Math.cos(b*n)-p):0<b&&k+m*
d>c&&(f=Math.round((e-k)/Math.cos(b*n)));else if(e=k+(1-m)*d,k-m*d<p?A=a.x+A*(1-m)-p:e>c&&(A=c-a.x+A*m,v=-1),A=Math.min(r,A),A<r&&"center"===l.labelAlign&&(a.x+=v*(r-A-m*(r-Math.min(d,A)))),d>A||l.autoRotation&&(t.styles||{}).width)f=A;f&&(y.width=f,(l.options.labels.style||{}).textOverflow||(y.textOverflow="ellipsis"),t.css(y))},getPosition:function(a,l,k,e){var c=this.axis,p=c.chart,h=e&&p.oldChartHeight||p.chartHeight;return{x:a?c.translate(l+k,null,null,e)+c.transB:c.left+c.offset+(c.opposite?
(e&&p.oldChartWidth||p.chartWidth)-c.right-c.left:0),y:a?h-c.bottom+c.offset-(c.opposite?c.height:0):h-c.translate(l+k,null,null,e)-c.transB}},getLabelPosition:function(a,h,k,e,c,p,H,b){var m=this.axis,d=m.transA,r=m.reversed,l=m.staggerLines,v=m.tickRotCorr||{x:0,y:0},f=c.y;z(f)||(f=0===m.side?k.rotation?-8:-k.getBBox().height:2===m.side?v.y+8:Math.cos(k.rotation*n)*(v.y-k.getBBox(!1,0).height/2));a=a+c.x+v.x-(p&&e?p*d*(r?-1:1):0);h=h+f-(p&&!e?p*d*(r?1:-1):0);l&&(k=H/(b||1)%l,m.opposite&&(k=l-k-
1),h+=m.labelOffset/l*k);return{x:a,y:Math.round(h)}},getMarkPath:function(a,h,k,e,c,p){return p.crispLine(["M",a,h,"L",a+(c?0:-k),h+(c?k:0)],e)},renderGridLine:function(a,h,k){var e=this.axis,c=e.options,p=this.gridLine,l={},b=this.pos,m=this.type,d=e.tickmarkOffset,r=e.chart.renderer,A=m?m+"Grid":"grid",v=c[A+"LineWidth"],f=c[A+"LineColor"],c=c[A+"LineDashStyle"];p||(l.stroke=f,l["stroke-width"]=v,c&&(l.dashstyle=c),m||(l.zIndex=1),a&&(l.opacity=0),this.gridLine=p=r.path().attr(l).addClass("highcharts-"+
(m?m+"-":"")+"grid-line").add(e.gridGroup));if(!a&&p&&(a=e.getPlotLinePath(b+d,p.strokeWidth()*k,a,!0)))p[this.isNew?"attr":"animate"]({d:a,opacity:h})},renderMark:function(a,l,k){var e=this.axis,c=e.options,p=e.chart.renderer,n=this.type,b=n?n+"Tick":"tick",m=e.tickSize(b),d=this.mark,r=!d,A=a.x;a=a.y;var v=h(c[b+"Width"],!n&&e.isXAxis?1:0),c=c[b+"Color"];m&&(e.opposite&&(m[0]=-m[0]),r&&(this.mark=d=p.path().addClass("highcharts-"+(n?n+"-":"")+"tick").add(e.axisGroup),d.attr({stroke:c,"stroke-width":v})),
d[r?"attr":"animate"]({d:this.getMarkPath(A,a,m[0],d.strokeWidth()*k,e.horiz,p),opacity:l}))},renderLabel:function(a,l,k,e){var c=this.axis,p=c.horiz,n=c.options,b=this.label,m=n.labels,d=m.step,r=c.tickmarkOffset,A=!0,v=a.x;a=a.y;b&&E(v)&&(b.xy=a=this.getLabelPosition(v,a,b,p,m,r,e,d),this.isFirst&&!this.isLast&&!h(n.showFirstLabel,1)||this.isLast&&!this.isFirst&&!h(n.showLastLabel,1)?A=!1:!p||c.isRadial||m.step||m.rotation||l||0===k||this.handleOverflow(a),d&&e%d&&(A=!1),A&&E(a.y)?(a.opacity=k,
b[this.isNew?"attr":"animate"](a)):b.attr("y",-9999),this.isNew=!1)},render:function(a,l,k){var e=this.axis,c=e.horiz,p=this.getPosition(c,this.pos,e.tickmarkOffset,l),n=p.x,b=p.y,e=c&&n===e.pos+e.len||!c&&b===e.pos?-1:1;k=h(k,1);this.isActive=!0;this.renderGridLine(l,k,e);this.renderMark(p,k,e);this.renderLabel(p,l,k,a)},destroy:function(){C(this,this.axis)}}})(I);(function(a){var B=a.addEvent,z=a.animObject,C=a.arrayMax,E=a.arrayMin,u=a.AxisPlotLineOrBandExtension,h=a.color,n=a.correctFloat,t=a.defaultOptions,
l=a.defined,k=a.deg2rad,e=a.destroyObjectProperties,c=a.each,p=a.extend,H=a.fireEvent,b=a.format,m=a.getMagnitude,d=a.grep,r=a.inArray,A=a.isArray,v=a.isNumber,f=a.isString,y=a.merge,G=a.normalizeTickInterval,F=a.pick,q=a.PlotLineOrBand,x=a.removeEvent,J=a.splat,K=a.syncTimeout,L=a.Tick;a.Axis=function(){this.init.apply(this,arguments)};a.Axis.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",
year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},
defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],
x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var g=b.isX;this.chart=a;this.horiz=a.inverted?!g:g;this.isXAxis=g;this.coll=this.coll||(g?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,c=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=
!1!==d.visible;this.zoomEnabled=!1!==d.zoomEnabled;this.hasNames="category"===c||!0===d.categories;this.categories=d.categories||this.hasNames;this.names=this.names||[];this.isLog="logarithmic"===c;this.isDatetimeAxis="datetime"===c;this.positiveValuesOnly=this.isLog&&!this.allowNegativeLog;this.isLinked=l(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;
this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=F(d.crosshair,J(a.options.tooltip.crosshairs)[g?0:1],!1);var f;b=this.options.events;-1===r(this,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&g&&void 0===this.reversed&&(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in b)B(this,f,b[f]);this.lin2log=d.linearToLogConverter||
this.lin2log;this.isLog&&(this.val2lin=this.log2lin,this.lin2val=this.lin2log)},setOptions:function(a){this.options=y(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],y(t[this.coll],a))},defaultLabelFormatter:function(){var g=this.axis,d=this.value,c=g.categories,f=this.dateTimeLabelFormat,q=t.lang,e=q.numericSymbols,q=q.numericSymbolMagnitude||1E3,w=e&&e.length,
m,r=g.options.labels.format,g=g.isLog?Math.abs(d):g.tickInterval;if(r)m=b(r,this);else if(c)m=d;else if(f)m=a.dateFormat(f,d);else if(w&&1E3<=g)for(;w--&&void 0===m;)c=Math.pow(q,w+1),g>=c&&0===10*d%c&&null!==e[w]&&0!==d&&(m=a.numberFormat(d/c,-1)+e[w]);void 0===m&&(m=1E4<=Math.abs(d)?a.numberFormat(d,-1):a.numberFormat(d,-1,void 0,""));return m},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();
c(a.series,function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var c=g.options,f=c.threshold,q;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=f&&(f=null);if(a.isXAxis)c=g.xData,c.length&&(g=E(c),v(g)||g instanceof Date||(c=d(c,function(a){return v(a)}),g=E(c)),a.dataMin=Math.min(F(a.dataMin,c[0]),g),a.dataMax=Math.max(F(a.dataMax,c[0]),C(c)));else if(g.getExtremes(),q=g.dataMax,g=g.dataMin,l(g)&&l(q)&&(a.dataMin=Math.min(F(a.dataMin,g),g),a.dataMax=Math.max(F(a.dataMax,q),q)),l(f)&&(a.threshold=
f),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,d,c,f,q){var g=this.linkedParent||this,D=1,e=0,m=c?g.oldTransA:g.transA;c=c?g.oldMin:g.min;var r=g.minPixelPadding;f=(g.isOrdinal||g.isBroken||g.isLog&&f)&&g.lin2val;m||(m=g.transA);d&&(D*=-1,e=g.len);g.reversed&&(D*=-1,e-=D*(g.sector||g.len));b?(a=(a*D+e-r)/m+c,f&&(a=g.lin2val(a))):(f&&(a=g.val2lin(a)),a=D*(a-c)*m+e+D*r+(v(q)?m*q:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,
!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,d,c,f){var g=this.chart,q=this.left,D=this.top,e,m,r=d&&g.oldChartHeight||g.chartHeight,p=d&&g.oldChartWidth||g.chartWidth,x;e=this.transB;var k=function(a,b,g){if(a<b||a>g)c?a=Math.min(Math.max(b,a),g):x=!0;return a};f=F(f,this.translate(a,null,null,d));a=d=Math.round(f+e);e=m=Math.round(r-f-e);v(f)?this.horiz?(e=D,m=r-this.bottom,a=d=k(a,q,q+this.width)):(a=q,d=
p-this.right,e=m=k(e,D,D+this.height)):x=!0;return x&&!c?null:g.renderer.crispLine(["M",a,e,"L",d,m],b||1)},getLinearTickPositions:function(a,b,d){var g,c=n(Math.floor(b/a)*a);d=n(Math.ceil(d/a)*a);var f=[];if(this.single)return[b];for(b=c;b<=d;){f.push(b);b=n(b+a);if(b===g)break;g=b}return f},getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,f=a.minorTickInterval,q=[],e=a.pointRangePadding||0,m=a.min-e,e=a.max+e,r=e-m;if(r&&r/f<a.len/3)if(a.isLog)c(this.paddedTicks,function(b,
g,d){g&&q.push.apply(q,a.getLogTickPositions(f,d[g-1],d[g],!0))});else if(a.isDatetimeAxis&&"auto"===b.minorTickInterval)q=q.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f),m,e,b.startOfWeek));else for(b=m+(d[0]-m)%f;b<=e&&b!==q[0];b+=f)q.push(b);0!==q.length&&a.trimTicks(q);return q},adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,f,q=this.dataMax-this.dataMin>=this.minRange,e,m,r,p,v,x;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(l(a.min)||l(a.max)?this.minRange=
null:(c(this.series,function(a){p=a.xData;for(m=v=a.xIncrement?1:p.length-1;0<m;m--)if(r=p[m]-p[m-1],void 0===e||r<e)e=r}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));d-b<this.minRange&&(x=this.minRange,f=(x-d+b)/2,f=[b-f,F(a.min,b-f)],q&&(f[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=C(f),d=[b+x,F(a.max,b+x)],q&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),d=E(d),d-b<x&&(f[0]=d-x,f[1]=F(a.min,d-x),b=C(f)));this.min=b;this.max=d},getClosest:function(){var a;this.categories?
a=1:c(this.series,function(b){var g=b.closestPointRange,d=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&l(g)&&d&&(a=l(a)?Math.min(a,g):g)});return a},nameToX:function(a){var b=A(this.categories),g=b?this.categories:this.names,d=a.options.x,c;a.series.requireSorting=!1;l(d)||(d=!1===this.options.uniqueNames?a.series.autoIncrement():r(a.name,g));-1===d?b||(c=g.length):c=d;this.names[c]=a.name;return c},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=
0,this.minRange=void 0,c(this.series||[],function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)b.processData(),b.generatePoints();c(b.points,function(g,d){var c;g.options&&(c=a.nameToX(g),c!==g.x&&(g.x=c,b.xData[d]=c))})}))},setAxisTranslation:function(a){var b=this,g=b.max-b.min,d=b.axisPointRange||0,q,e=0,m=0,r=b.linkedParent,p=!!b.categories,v=b.transA,x=b.isXAxis;if(x||p||d)q=b.getClosest(),r?(e=r.minPointOffset,m=r.pointRangePadding):c(b.series,function(a){var g=p?1:x?F(a.options.pointRange,
q,0):b.axisPointRange||0;a=a.options.pointPlacement;d=Math.max(d,g);b.single||(e=Math.max(e,f(a)?0:g/2),m=Math.max(m,"on"===a?0:g))}),r=b.ordinalSlope&&q?b.ordinalSlope/q:1,b.minPointOffset=e*=r,b.pointRangePadding=m*=r,b.pointRange=Math.min(d,g),x&&(b.closestPointRange=q);a&&(b.oldTransA=v);b.translationSlope=b.transA=v=b.options.staticScale||b.len/(g+m||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=v*e},minFromRange:function(){return this.max-this.range},setTickInterval:function(b){var g=
this,d=g.chart,f=g.options,q=g.isLog,e=g.log2lin,r=g.isDatetimeAxis,p=g.isXAxis,x=g.isLinked,k=f.maxPadding,h=f.minPadding,y=f.tickInterval,A=f.tickPixelInterval,J=g.categories,t=g.threshold,u=g.softThreshold,L,K,z,B;r||J||x||this.getTickAmount();z=F(g.userMin,f.min);B=F(g.userMax,f.max);x?(g.linkedParent=d[g.coll][f.linkedTo],d=g.linkedParent.getExtremes(),g.min=F(d.min,d.dataMin),g.max=F(d.max,d.dataMax),f.type!==g.linkedParent.options.type&&a.error(11,1)):(!u&&l(t)&&(g.dataMin>=t?(L=t,h=0):g.dataMax<=
t&&(K=t,k=0)),g.min=F(z,L,g.dataMin),g.max=F(B,K,g.dataMax));q&&(g.positiveValuesOnly&&!b&&0>=Math.min(g.min,F(g.dataMin,g.min))&&a.error(10,1),g.min=n(e(g.min),15),g.max=n(e(g.max),15));g.range&&l(g.max)&&(g.userMin=g.min=z=Math.max(g.min,g.minFromRange()),g.userMax=B=g.max,g.range=null);H(g,"foundExtremes");g.beforePadding&&g.beforePadding();g.adjustForMinRange();!(J||g.axisPointRange||g.usePercentage||x)&&l(g.min)&&l(g.max)&&(e=g.max-g.min)&&(!l(z)&&h&&(g.min-=e*h),!l(B)&&k&&(g.max+=e*k));v(f.floor)?
g.min=Math.max(g.min,f.floor):v(f.softMin)&&(g.min=Math.min(g.min,f.softMin));v(f.ceiling)?g.max=Math.min(g.max,f.ceiling):v(f.softMax)&&(g.max=Math.max(g.max,f.softMax));u&&l(g.dataMin)&&(t=t||0,!l(z)&&g.min<t&&g.dataMin>=t?g.min=t:!l(B)&&g.max>t&&g.dataMax<=t&&(g.max=t));g.tickInterval=g.min===g.max||void 0===g.min||void 0===g.max?1:x&&!y&&A===g.linkedParent.options.tickPixelInterval?y=g.linkedParent.tickInterval:F(y,this.tickAmount?(g.max-g.min)/Math.max(this.tickAmount-1,1):void 0,J?1:(g.max-
g.min)*A/Math.max(g.len,A));p&&!b&&c(g.series,function(a){a.processData(g.min!==g.oldMin||g.max!==g.oldMax)});g.setAxisTranslation(!0);g.beforeSetTickPositions&&g.beforeSetTickPositions();g.postProcessTickInterval&&(g.tickInterval=g.postProcessTickInterval(g.tickInterval));g.pointRange&&!y&&(g.tickInterval=Math.max(g.pointRange,g.tickInterval));b=F(f.minTickInterval,g.isDatetimeAxis&&g.closestPointRange);!y&&g.tickInterval<b&&(g.tickInterval=b);r||q||y||(g.tickInterval=G(g.tickInterval,null,m(g.tickInterval),
F(f.allowDecimals,!(.5<g.tickInterval&&5>g.tickInterval&&1E3<g.max&&9999>g.max)),!!this.tickAmount));this.tickAmount||(g.tickInterval=g.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,d=a.tickPositions,c=a.tickPositioner,f=a.startOnTick,q=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=
this.min===this.max&&l(this.min)&&!this.tickAmount&&!1!==a.allowDecimals;this.tickPositions=b=d&&d.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,c&&(c=c.apply(this,
[this.min,this.max])))&&(this.tickPositions=b=c);this.paddedTicks=b.slice(0);this.trimTicks(b,f,q);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),d||c||this.adjustTickAmount())},trimTicks:function(a,b,d){var g=a[0],c=a[a.length-1],f=this.minPointOffset||0;if(!this.isLinked){if(b)this.min=g;else for(;this.min-f>a[0];)a.shift();if(d)this.max=c;else for(;this.max+f<a[a.length-1];)a.pop();0===a.length&&l(g)&&a.push((c+g)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||
!1===d.alignTicks||this.isLog||c(this.chart[this.coll],function(g){var d=g.options,d=[g.horiz?d.left:d.top,d.width,d.height,d.pane].join();g.series.length&&(a[d]?b=!0:a[d]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;!l(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=
this.tickInterval,b=this.tickPositions,d=this.tickAmount,c=this.finalTickAmt,f=b&&b.length;if(f<d){for(;b.length<d;)b.push(n(b[b.length-1]+a));this.transA*=(f-1)/(d-1);this.max=b[b.length-1]}else f>d&&(this.tickInterval*=2,this.setTickPositions());if(l(c)){for(a=d=b.length;a--;)(3===c&&1===a%2||2>=c&&0<a&&a<d-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;
c(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,
b,d,f,q){var g=this,e=g.chart;d=F(d,!0);c(g.series,function(a){delete a.kdTree});q=p(q,{min:a,max:b});H(g,"setExtremes",q,function(){g.userMin=a;g.userMax=b;g.eventArgs=q;d&&e.redraw(f)})},zoom:function(a,b){var g=this.dataMin,d=this.dataMax,c=this.options,f=Math.min(g,F(c.min,g)),c=Math.max(d,F(c.max,d));if(a!==this.min||b!==this.max)this.allowZoomOutside||(l(g)&&(a<f&&(a=f),a>c&&(a=c)),l(d)&&(b<f&&(b=f),b>c&&(b=c))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});
return!0},setAxisSize:function(){var a=this.chart,b=this.options,d=b.offsets||[0,0,0,0],c=this.horiz,f=F(b.width,a.plotWidth-d[3]+d[1]),q=F(b.height,a.plotHeight-d[0]+d[2]),e=F(b.top,a.plotTop+d[0]),b=F(b.left,a.plotLeft+d[3]),d=/%$/;d.test(q)&&(q=Math.round(parseFloat(q)/100*a.plotHeight));d.test(e)&&(e=Math.round(parseFloat(e)/100*a.plotHeight+a.plotTop));this.left=b;this.top=e;this.width=f;this.height=q;this.bottom=a.chartHeight-q-e;this.right=a.chartWidth-f-b;this.len=Math.max(c?f:q,0);this.pos=
c?b:e},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?n(b(this.min)):this.min,max:a?n(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=this.lin2log,d=b?g(this.min):this.min,b=b?g(this.max):this.max;null===a?a=d:d>a?a=d:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(F(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},
tickSize:function(a){var b=this.options,g=b[a+"Length"],d=F(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(d&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,d]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,d=this.tickInterval,f=d,q=this.len/(((this.categories?1:0)+this.max-this.min)/d),e,m=a.rotation,r=this.labelMetrics(),p,x=
Number.MAX_VALUE,v,h=function(a){a/=q||1;a=1<a?Math.ceil(a):1;return a*d};b?(v=!a.staggerLines&&!a.step&&(l(m)?[m]:q<F(a.autoRotationLimit,80)&&a.autoRotation))&&c(v,function(a){var b;if(a===m||a&&-90<=a&&90>=a)p=h(Math.abs(r.h/Math.sin(k*a))),b=p+Math.abs(a/360),b<x&&(x=b,e=a,f=p)}):a.step||(f=h(r.h));this.autoRotation=v;this.labelRotation=F(e,m);return f},getSlotWidth:function(){var a=this.chart,b=this.horiz,d=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),f=a.margin[3];
return b&&2>(d.step||0)&&!d.rotation&&(this.staggerLines||1)*this.len/c||!b&&(f&&f-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,q=this.ticks,e=this.options.labels,m=this.horiz,r=this.getSlotWidth(),p=Math.max(1,Math.round(r-2*(e.padding||5))),x={},v=this.labelMetrics(),k=e.style&&e.style.textOverflow,h,l=0,A,n;f(e.rotation)||(x.rotation=e.rotation||0);c(d,function(a){(a=q[a])&&a.labelLength>l&&(l=a.labelLength)});this.maxLabelLength=
l;if(this.autoRotation)l>p&&l>v.h?x.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(h={width:p+"px"},!k))for(h.textOverflow="clip",A=d.length;!m&&A--;)if(n=d[A],p=q[n].label)p.styles&&"ellipsis"===p.styles.textOverflow?p.css({textOverflow:"clip"}):q[n].labelLength>r&&p.css({width:r+"px"}),p.getBBox().height>this.len/d.length-(v.h-v.f)&&(p.specCss={textOverflow:"ellipsis"});x.rotation&&(h={width:(l>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},k||(h.textOverflow="ellipsis"));
if(this.labelAlign=e.align||this.autoLabelAlign(this.labelRotation))x.align=this.labelAlign;c(d,function(a){var b=(a=q[a])&&a.label;b&&(b.attr(x),h&&b.css(y(h,b.specCss)),delete b.specCss,a.rotation=x.rotation)});this.tickRotCorr=b.rotCorr(v.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||l(this.min)&&l(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,d=this.horiz,g=this.opposite,c=this.options.title,f;this.axisTitle||((f=c.textAlign)||
(f=(d?{low:"left",middle:"center",high:"right"}:{low:g?"right":"left",middle:"center",high:g?"left":"right"})[c.align]),this.axisTitle=b.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:f}).addClass("highcharts-axis-title").css(c.style).add(this.axisGroup),this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new L(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,f=a.options,q=a.tickPositions,
e=a.ticks,m=a.horiz,r=a.side,p=b.inverted?[1,0,3,2][r]:r,x,v,h=0,k,y=0,A=f.title,n=f.labels,G=0,J=b.axisOffset,b=b.clipOffset,t=[-1,1,1,-1][r],u,H=f.className,L=a.axisParent,K=this.tickSize("tick");x=a.hasData();a.showAxis=v=x||F(f.showEmpty,!0);a.staggerLines=a.horiz&&n.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(H||"")).add(L),a.axisGroup=d.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+
" "+(H||"")).add(L),a.labelGroup=d.g("axis-labels").attr({zIndex:n.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(H||"")).add(L));if(x||a.isLinked)c(q,function(b,d){a.generateTick(b,d)}),a.renderUnsquish(),!1===n.reserveSpace||0!==r&&2!==r&&{1:"left",3:"right"}[r]!==a.labelAlign&&"center"!==a.labelAlign||c(q,function(a){G=Math.max(e[a].getLabelSize(),G)}),a.staggerLines&&(G*=a.staggerLines,a.labelOffset=G*(a.opposite?-1:1));else for(u in e)e[u].destroy(),delete e[u];A&&A.text&&
!1!==A.enabled&&(a.addTitle(v),v&&(h=a.axisTitle.getBBox()[m?"height":"width"],k=A.offset,y=l(k)?0:F(A.margin,m?5:10)));a.renderLine();a.offset=t*F(f.offset,J[r]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===r?-a.labelMetrics().h:2===r?a.tickRotCorr.y:0;y=Math.abs(G)+y;G&&(y=y-d+t*(m?F(n.y,a.tickRotCorr.y+8*t):n.x));a.axisTitleMargin=F(k,y);J[r]=Math.max(J[r],a.axisTitleMargin+h+t*a.offset,y,x&&q.length&&K?K[0]+t*a.offset:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[p]=Math.max(b[p],
f)},getLinePath:function(a){var b=this.chart,d=this.opposite,g=this.offset,f=this.horiz,c=this.left+(d?this.width:0)+g,g=b.chartHeight-this.bottom-(d?this.height:0)+g;d&&(a*=-1);return b.renderer.crispLine(["M",f?this.left:c,f?g:this.top,"L",f?b.chartWidth-this.right:c,f?g:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,
zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,f=this.len,c=this.options.title,q=a?b:d,e=this.opposite,m=this.offset,r=c.x||0,p=c.y||0,x=this.chart.renderer.fontMetrics(c.style&&c.style.fontSize,this.axisTitle).f,f={low:q+(a?0:f),middle:q+f/2,high:q+(a?f:0)}[c.align],b=(a?d+this.height:b)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+(2===this.side?x:0);return{x:a?f+r:b+(e?this.width:0)+m+r,y:a?b+p-(e?this.height:0)+m:f+p}},renderMinorTick:function(a){var b=this.chart.hasRendered&&
v(this.oldMin),d=this.minorTicks;d[a]||(d[a]=new L(this,a,"minor"));b&&d[a].isNew&&d[a].render(null,!0);d[a].render(null,!1,1)},renderTick:function(a,b){var d=this.isLinked,g=this.ticks,f=this.chart.hasRendered&&v(this.oldMin);if(!d||a>=this.min&&a<=this.max)g[a]||(g[a]=new L(this,a)),f&&g[a].isNew&&g[a].render(b,!0,.1),g[a].render(b)},render:function(){var a=this,b=a.chart,d=a.options,f=a.isLog,e=a.lin2log,m=a.isLinked,r=a.tickPositions,p=a.axisTitle,x=a.ticks,v=a.minorTicks,h=a.alternateBands,k=
d.stackLabels,y=d.alternateGridColor,l=a.tickmarkOffset,A=a.axisLine,n=a.showAxis,G=z(b.renderer.globalAnimation),J,t;a.labelEdge.length=0;a.overlap=!1;c([x,v,h],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||m)a.minorTickInterval&&!a.categories&&c(a.getMinorTickPositions(),function(b){a.renderMinorTick(b)}),r.length&&(c(r,function(b,d){a.renderTick(b,d)}),l&&(0===a.min||a.single)&&(x[-1]||(x[-1]=new L(a,-1,null,!0)),x[-1].render(-1))),y&&c(r,function(d,g){t=void 0!==r[g+1]?r[g+1]+
l:a.max-l;0===g%2&&d<a.max&&t<=a.max+(b.polar?-l:l)&&(h[d]||(h[d]=new q(a)),J=d+l,h[d].options={from:f?e(J):J,to:f?e(t):t,color:y},h[d].render(),h[d].isActive=!0)}),a._addedPlotLB||(c((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0);c([x,v,h],function(a){var d,g,f=[],c=G.duration;for(d in a)a[d].isActive||(a[d].render(d,!1,0),a[d].isActive=!1,f.push(d));K(function(){for(g=f.length;g--;)a[f[g]]&&!a[f[g]].isActive&&(a[f[g]].destroy(),delete a[f[g]])},
a!==h&&b.hasRendered&&c?c:0)});A&&(A[A.isPlaced?"animate":"attr"]({d:this.getLinePath(A.strokeWidth())}),A.isPlaced=!0,A[n?"show":"hide"](!0));p&&n&&(p[p.isNew?"attr":"animate"](a.getTitlePosition()),p.isNew=!1);k&&k.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),c(this.plotLinesAndBands,function(a){a.render()}));c(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,
d=b.stacks,g,f=b.plotLinesAndBands,q;a||x(b);for(g in d)e(d[g]),d[g]=null;c([b.ticks,b.minorTicks,b.alternateBands],function(a){e(a)});if(f)for(a=f.length;a--;)f[a].destroy();c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(q in b)b.hasOwnProperty(q)&&-1===r(q,b.keepProps)&&delete b[q]},drawCrosshair:function(a,b){var d,f=this.crosshair,g=F(f.snap,!0),c,q=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&
!1!==(l(b)||!g)?(g?l(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),l(c)&&(d=this.getPlotLinePath(b&&(this.isXAxis?b.x:F(b.stackY,b.y)),null,null,null,c)||null),l(d)?(b=this.categories&&!this.isRadial,q||(this.cross=q=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+f.className).attr({zIndex:F(f.zIndex,2)}).add(),q.attr({stroke:f.color||(b?h("#ccd6eb").setOpacity(.25).get():"#cccccc"),
"stroke-width":F(f.width,1)}),f.dashStyle&&q.attr({dashstyle:f.dashStyle})),q.show().attr({d:d}),b&&!f.width&&q.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}};p(a.Axis.prototype,u)})(I);(function(a){var B=a.Axis,z=a.Date,C=a.dateFormat,E=a.defaultOptions,u=a.defined,h=a.each,n=a.extend,t=a.getMagnitude,l=a.getTZOffset,k=a.normalizeTickInterval,e=a.pick,c=a.timeUnits;B.prototype.getTimeTicks=function(a,
k,b,m){var d=[],r={},p=E.global.useUTC,v,f=new z(k-Math.abs(l(k))),y=z.hcMakeTime,G=a.unitRange,t=a.count,q;if(u(k)){f[z.hcSetMilliseconds](G>=c.second?0:t*Math.floor(f.getMilliseconds()/t));if(G>=c.second)f[z.hcSetSeconds](G>=c.minute?0:t*Math.floor(f.getSeconds()/t));if(G>=c.minute)f[z.hcSetMinutes](G>=c.hour?0:t*Math.floor(f[z.hcGetMinutes]()/t));if(G>=c.hour)f[z.hcSetHours](G>=c.day?0:t*Math.floor(f[z.hcGetHours]()/t));if(G>=c.day)f[z.hcSetDate](G>=c.month?1:t*Math.floor(f[z.hcGetDate]()/t));
G>=c.month&&(f[z.hcSetMonth](G>=c.year?0:t*Math.floor(f[z.hcGetMonth]()/t)),v=f[z.hcGetFullYear]());if(G>=c.year)f[z.hcSetFullYear](v-v%t);if(G===c.week)f[z.hcSetDate](f[z.hcGetDate]()-f[z.hcGetDay]()+e(m,1));v=f[z.hcGetFullYear]();m=f[z.hcGetMonth]();var x=f[z.hcGetDate](),J=f[z.hcGetHours]();if(z.hcTimezoneOffset||z.hcGetTimezoneOffset)q=(!p||!!z.hcGetTimezoneOffset)&&(b-k>4*c.month||l(k)!==l(b)),f=f.getTime(),f=new z(f+l(f));p=f.getTime();for(k=1;p<b;)d.push(p),p=G===c.year?y(v+k*t,0):G===c.month?
y(v,m+k*t):!q||G!==c.day&&G!==c.week?q&&G===c.hour?y(v,m,x,J+k*t):p+G*t:y(v,m,x+k*t*(G===c.day?1:7)),k++;d.push(p);G<=c.hour&&1E4>d.length&&h(d,function(a){0===a%18E5&&"000000000"===C("%H%M%S%L",a)&&(r[a]="day")})}d.info=n(a,{higherRanks:r,totalRange:G*t});return d};B.prototype.normalizeTimeTickInterval=function(a,e){var b=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,
3,4,6]],["year",null]];e=b[b.length-1];var m=c[e[0]],d=e[1],r;for(r=0;r<b.length&&!(e=b[r],m=c[e[0]],d=e[1],b[r+1]&&a<=(m*d[d.length-1]+c[b[r+1][0]])/2);r++);m===c.year&&a<5*m&&(d=[1,2,5]);a=k(a/m,d,"year"===e[0]?Math.max(t(a/m),1):1);return{unitRange:m,count:a,unitName:e[0]}}})(I);(function(a){var B=a.Axis,z=a.getMagnitude,C=a.map,E=a.normalizeTickInterval,u=a.pick;B.prototype.getLogTickPositions=function(a,n,t,l){var k=this.options,e=this.len,c=this.lin2log,p=this.log2lin,h=[];l||(this._minorAutoInterval=
null);if(.5<=a)a=Math.round(a),h=this.getLinearTickPositions(a,n,t);else if(.08<=a)for(var e=Math.floor(n),b,m,d,r,A,k=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];e<t+1&&!A;e++)for(m=k.length,b=0;b<m&&!A;b++)d=p(c(e)*k[b]),d>n&&(!l||r<=t)&&void 0!==r&&h.push(r),r>t&&(A=!0),r=d;else n=c(n),t=c(t),a=k[l?"minorTickInterval":"tickInterval"],a=u("auto"===a?null:a,this._minorAutoInterval,k.tickPixelInterval/(l?5:1)*(t-n)/((l?e/this.tickPositions.length:e)||1)),a=E(a,null,z(a)),h=C(this.getLinearTickPositions(a,
n,t),p),l||(this._minorAutoInterval=a/5);l||(this.tickInterval=a);return h};B.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};B.prototype.lin2log=function(a){return Math.pow(10,a)}})(I);(function(a){var B=a.dateFormat,z=a.each,C=a.extend,E=a.format,u=a.isNumber,h=a.map,n=a.merge,t=a.pick,l=a.splat,k=a.syncTimeout,e=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,e){this.chart=a;this.options=e;this.crosshairs=[];this.now={x:0,y:0};
this.isHidden=!0;this.split=e.split&&!a.inverted;this.shared=e.shared||this.split},cleanSplit:function(a){z(this.chart.series,function(c){var e=c&&c.tt;e&&(!e.isActive||a?c.tt=e.destroy():e.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,e=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,e.shape||"callout",null,null,e.useHTML,null,"tooltip").attr({padding:e.padding,r:e.borderRadius}),this.label.attr({fill:e.backgroundColor,"stroke-width":e.borderWidth}).css(e.style).shadow(e.shadow)),
this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();this.init(this.chart,n(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,e,k,b){var c=this,d=c.now,r=!1!==c.options.animation&&!c.isHidden&&(1<Math.abs(a-d.x)||1<Math.abs(e-d.y)),p=c.followPointer||1<c.len;C(d,{x:r?(2*
d.x+a)/3:a,y:r?(d.y+e)/2:e,anchorX:p?void 0:r?(2*d.anchorX+k)/3:k,anchorY:p?void 0:r?(d.anchorY+b)/2:b});c.getLabel().attr(d);r&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){c&&c.move(a,e,k,b)},32))},hide:function(a){var c=this;clearTimeout(this.hideTimer);a=t(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=k(function(){c.getLabel()[a?"fadeOut":"hide"]();c.isHidden=!0},a))},getAnchor:function(a,e){var c,b=this.chart,m=b.inverted,d=b.plotTop,r=b.plotLeft,
p=0,v=0,f,k;a=l(a);c=a[0].tooltipPos;this.followPointer&&e&&(void 0===e.chartX&&(e=b.pointer.normalize(e)),c=[e.chartX-b.plotLeft,e.chartY-d]);c||(z(a,function(a){f=a.series.yAxis;k=a.series.xAxis;p+=a.plotX+(!m&&k?k.left-r:0);v+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!m&&f?f.top-d:0)}),p/=a.length,v/=a.length,c=[m?b.plotWidth-v:p,this.shared&&!m&&1<a.length&&e?e.chartY-d:m?b.plotHeight-p:v]);return h(c,Math.round)},getPosition:function(a,e,k){var b=this.chart,c=this.distance,d={},r=k.h||0,
p,v=["y",b.chartHeight,e,k.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],f=["x",b.chartWidth,a,k.plotX+b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],h=!this.followPointer&&t(k.ttBelow,!b.inverted===!!k.negative),l=function(a,b,f,g,q,e){var m=f<g-c,x=g+c+f<b,v=g-c-f;g+=c;if(h&&x)d[a]=g;else if(!h&&m)d[a]=v;else if(m)d[a]=Math.min(e-f,0>v-r?v:v-r);else if(x)d[a]=Math.max(q,g+r+f>b?g:g+r);else return!1},n=function(a,b,f,g){var q;g<c||g>b-c?q=!1:d[a]=g<f/2?1:g>b-f/2?b-f-2:g-f/2;return q},q=function(a){var b=
v;v=f;f=b;p=a},x=function(){!1!==l.apply(0,v)?!1!==n.apply(0,f)||p||(q(!0),x()):p?d.x=d.y=0:(q(!0),x())};(b.inverted||1<this.len)&&q();x();return d},defaultFormatter:function(a){var c=this.points||l(this),e;e=[a.tooltipFooterHeaderFormatter(c[0])];e=e.concat(a.bodyFormatter(c));e.push(a.tooltipFooterHeaderFormatter(c[0],!0));return e},refresh:function(a,e){var c,b=this.options,m,d=a,r,p={},v=[];c=b.formatter||this.defaultFormatter;var p=this.shared,f;clearTimeout(this.hideTimer);this.followPointer=
l(d)[0].series.tooltipOptions.followPointer;r=this.getAnchor(d,e);e=r[0];m=r[1];!p||d.series&&d.series.noSharedTooltip?p=d.getLabelConfig():(z(d,function(a){a.setState("hover");v.push(a.getLabelConfig())}),p={x:d[0].category,y:d[0].y},p.points=v,d=d[0]);this.len=v.length;p=c.call(p,this);f=d.series;this.distance=t(f.tooltipOptions.distance,16);!1===p?this.hide():(c=this.getLabel(),this.isHidden&&c.attr({opacity:1}).show(),this.split?this.renderSplit(p,a):(c.attr({text:p&&p.join?p.join(""):p}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+
t(d.colorIndex,f.colorIndex)),c.attr({stroke:b.borderColor||d.color||f.color||"#666666"}),this.updatePosition({plotX:e,plotY:m,negative:d.negative,ttBelow:d.ttBelow,h:r[2]||0})),this.isHidden=!1)},renderSplit:function(c,e){var p=this,b=[],m=this.chart,d=m.renderer,r=!0,k=this.options,v,f=this.getLabel();z(c.slice(0,e.length+1),function(a,c){c=e[c-1]||{isHeader:!0,plotX:e[0].plotX};var h=c.series||p,q=h.tt,x=c.series||{},l="highcharts-color-"+t(c.colorIndex,x.colorIndex,"none");q||(h.tt=q=d.label(null,
null,null,"callout").addClass("highcharts-tooltip-box "+l).attr({padding:k.padding,r:k.borderRadius,fill:k.backgroundColor,stroke:c.color||x.color||"#333333","stroke-width":k.borderWidth}).add(f));q.isActive=!0;q.attr({text:a});q.css(k.style);a=q.getBBox();x=a.width+q.strokeWidth();c.isHeader?(v=a.height,x=Math.max(0,Math.min(c.plotX+m.plotLeft-x/2,m.chartWidth-x))):x=c.plotX+m.plotLeft-t(k.distance,16)-x;0>x&&(r=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=m.plotTop;b.push({target:c.isHeader?
m.plotHeight+v:a,rank:c.isHeader?1:0,size:h.tt.getBBox().height+1,point:c,x:x,tt:q})});this.cleanSplit();a.distribute(b,m.plotHeight+v);z(b,function(a){var b=a.point,d=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:r||b.isHeader?a.x:b.plotX+m.plotLeft+t(k.distance,16),y:a.pos+m.plotTop,anchorX:b.isHeader?b.plotX+m.plotLeft:b.plotX+d.xAxis.pos,anchorY:b.isHeader?a.pos+m.plotTop-15:b.plotY+d.yAxis.pos})})},updatePosition:function(a){var c=this.chart,e=this.getLabel(),e=(this.options.positioner||
this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||0),a.plotX+c.plotLeft,a.plotY+c.plotTop)},getDateFormat:function(a,p,k,b){var c=B("%m-%d %H:%M:%S.%L",p),d,r,h={millisecond:15,second:12,minute:9,hour:6,day:3},v="millisecond";for(r in e){if(a===e.week&&+B("%w",p)===k&&"00:00:00.000"===c.substr(6)){r="week";break}if(e[r]>a){r=v;break}if(h[r]&&c.substr(h[r])!=="01-01 00:00:00.000".substr(h[r]))break;"week"!==r&&(v=r)}r&&(d=b[r]);return d},getXDateFormat:function(a,
e,k){e=e.dateTimeLabelFormats;var b=k&&k.closestPointRange;return(b?this.getDateFormat(b,a.x,k.options.startOfWeek,e):e.day)||e.year},tooltipFooterHeaderFormatter:function(a,e){var c=e?"footer":"header";e=a.series;var b=e.tooltipOptions,m=b.xDateFormat,d=e.xAxis,r=d&&"datetime"===d.options.type&&u(a.key),c=b[c+"Format"];r&&!m&&(m=this.getXDateFormat(a,b,d));r&&m&&(c=c.replace("{point.key}","{point.key:"+m+"}"));return E(c,{point:a,series:e})},bodyFormatter:function(a){return h(a,function(a){var c=
a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}}})(I);(function(a){var B=a.addEvent,z=a.attr,C=a.charts,E=a.color,u=a.css,h=a.defined,n=a.doc,t=a.each,l=a.extend,k=a.fireEvent,e=a.offset,c=a.pick,p=a.removeEvent,H=a.splat,b=a.Tooltip,m=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,e){this.options=e;this.chart=a;this.runChartClick=e.chart.events&&!!e.chart.events.click;this.pinchDown=[];this.lastValidTouch=
{};b&&e.tooltip.enabled&&(a.tooltip=new b(a,e.tooltip),this.followTouchMove=c(e.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,d=b.options.chart,e=d.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(e=c(d.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=a&&!b||e&&b;this.zoomVert=e&&!b||a&&b;this.hasZoom=a||e},normalize:function(a,b){var d,c;a=a||m.event;a.target||(a.target=a.srcElement);c=a.touches?a.touches.length?a.touches.item(0):
a.changedTouches[0]:a;b||(this.chartPosition=b=e(this.chart.container));void 0===c.pageX?(d=Math.max(a.x,a.clientX-b.left),b=a.y):(d=c.pageX-b.left,b=c.pageY-b.top);return l(a,{chartX:Math.round(d),chartY:Math.round(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,b,e){var d=[],f,m,r;t(a,function(a){f=a.noSharedTooltip&&b;m=!b&&a.directTouch;
a.visible&&!f&&!m&&c(a.options.enableMouseTracking,!0)&&(r=a.searchPoint(e,!f&&1===a.kdDimensions))&&r.series&&d.push(r)});d.sort(function(a,d){var f=a.distX-d.distX,c=a.dist-d.dist,e=(d.series.group&&d.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==f&&b?f:0!==c?c:0!==e?e:a.series.index>d.series.index?-1:1});if(b)for(a=d.length;a--;)(d[a].x!==d[0].x||d[a].series.noSharedTooltip)&&d.splice(a,1);return d},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=
a.parentNode;return b},getHoverData:function(a,b,e,m,f,k){var d=a;a=b;var r;if(m)f?(r=[],t(e,function(a){var b=a.noSharedTooltip&&f,e=!f&&a.directTouch;a.visible&&!b&&!e&&c(a.options.enableMouseTracking,!0)&&(a=a.searchKDTree({clientX:d.clientX,plotY:d.plotY},!b&&1===a.kdDimensions))&&a.series&&r.push(a)}),0===r.length&&(r=[d])):r=[d];else{if(a&&!a.options.stickyTracking)r=this.getKDPoints([a],f,k);else{if(!f)if(a)a.options.stickyTracking||(e=[a]);else for(m=0;m<e.length;m++)if(e[m].directTouch||
!e[m].options.stickyTracking)e=[];r=this.getKDPoints(e,f,k)}a=(d=r[0])&&d.series}r.sort(function(a,b){return a.series.index-b.series.index});return{hoverPoint:d,hoverSeries:a,hoverPoints:r}},runPointActions:function(b,c){var d=this.chart,e=d.tooltip,f=e?e.shared:!1,m=c||d.hoverPoint,r=m&&m.series||d.hoverSeries;c=this.getHoverData(m,r,d.series,!!c||r&&r.directTouch,f,b);var k,q,m=c.hoverPoint;k=(r=c.hoverSeries)&&r.tooltipOptions.followPointer;q=(f=f&&m&&!m.series.noSharedTooltip)?c.hoverPoints:[m];
if(m&&(m!==d.hoverPoint||e&&e.isHidden)){t(d.hoverPoints||[],function(b){-1===a.inArray(b,q)&&b.setState()});t(q||[],function(a){a.setState("hover")});if(d.hoverSeries!==r)r.onMouseOver();r&&!r.directTouch&&(d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut"),m.firePointEvent("mouseOver"));d.hoverPoints=q;d.hoverPoint=m;e&&e.refresh(f?q:m,b)}else k&&e&&!e.isHidden&&(m=e.getAnchor([{}],b),e.updatePosition({plotX:m[0],plotY:m[1]}));this.unDocMouseMove||(this.unDocMouseMove=B(n,"mousemove",function(b){var d=
C[a.hoverChartIndex];if(d)d.pointer.onDocumentMouseMove(b)}));t(q,function(a){t(d.axes,function(d){(!a||a.series&&a.series[d.coll]===d)&&d.drawCrosshair(b,a)})})},reset:function(a,b){var d=this.chart,c=d.hoverSeries,f=d.hoverPoint,e=d.hoverPoints,m=d.tooltip,r=m&&m.shared?e:f;a&&r&&t(H(r),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)m&&r&&(m.refresh(r),f&&(f.setState(f.state,!0),t(d.axes,function(a){a.crosshair&&a.drawCrosshair(null,f)})));else{if(f)f.onMouseOut();e&&t(e,function(a){a.setState()});
if(c)c.onMouseOut();m&&m.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(d.axes,function(a){a.hideCrosshair()});this.hoverX=d.hoverPoints=d.hoverPoint=null}},scaleGroups:function(a,b){var d=this.chart,c;t(d.series,function(f){c=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(c),f.markerGroup&&(f.markerGroup.attr(c),f.markerGroup.clip(b?d.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(c))});d.clipRect.attr(b||d.clipBox)},dragStart:function(a){var b=
this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,d=b.options.chart,c=a.chartX,f=a.chartY,e=this.zoomHor,m=this.zoomVert,k=b.plotLeft,q=b.plotTop,x=b.plotWidth,p=b.plotHeight,h,l=this.selectionMarker,g=this.mouseDownX,n=this.mouseDownY,t=d.panKey&&a[d.panKey+"Key"];l&&l.touch||(c<k?c=k:c>k+x&&(c=k+x),f<q?f=q:f>q+p&&(f=q+p),this.hasDragged=Math.sqrt(Math.pow(g-c,2)+Math.pow(n-f,2)),10<this.hasDragged&&
(h=b.isInsidePlot(g-k,n-q),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&h&&!t&&!l&&(this.selectionMarker=l=b.renderer.rect(k,q,e?1:x,m?1:p,0).attr({fill:d.selectionMarkerFill||E("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),l&&e&&(c-=g,l.attr({width:Math.abs(c),x:(0<c?0:c)+g})),l&&m&&(c=f-n,l.attr({height:Math.abs(c),y:(0<c?0:c)+n})),h&&!l&&d.panning&&b.pan(a,d.panning)))},drop:function(a){var b=this,d=this.chart,c=this.hasPinched;if(this.selectionMarker){var f=
{originalEvent:a,xAxis:[],yAxis:[]},e=this.selectionMarker,m=e.attr?e.attr("x"):e.x,p=e.attr?e.attr("y"):e.y,q=e.attr?e.attr("width"):e.width,x=e.attr?e.attr("height"):e.height,n;if(this.hasDragged||c)t(d.axes,function(d){if(d.zoomEnabled&&h(d.min)&&(c||b[{xAxis:"zoomX",yAxis:"zoomY"}[d.coll]])){var e=d.horiz,g="touchend"===a.type?d.minPixelPadding:0,r=d.toValue((e?m:p)+g),e=d.toValue((e?m+q:p+x)-g);f[d.coll].push({axis:d,min:Math.min(r,e),max:Math.max(r,e)});n=!0}}),n&&k(d,"selection",f,function(a){d.zoom(l(a,
c?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups()}d&&(u(d.container,{cursor:d._cursor}),d.cancelClick=10<this.hasDragged,d.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
d=this.chartPosition;a=this.normalize(a,d);!d||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var d=C[a.hoverChartIndex];d&&(b.relatedTarget||b.toElement)&&(d.pointer.reset(),d.pointer.chartPosition=null)},onContainerMouseMove:function(b){var d=this.chart;h(a.hoverChartIndex)&&C[a.hoverChartIndex]&&C[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=d.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===d.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!d.isInsidePlot(b.chartX-d.plotLeft,b.chartY-d.plotTop)||d.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var d;a;){if(d=z(a,"class")){if(-1!==d.indexOf(b))return!0;if(-1!==d.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;if(!(!b||!a||b.options.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,d=b.hoverPoint,c=b.plotLeft,f=b.plotTop;a=this.normalize(a);b.cancelClick||(d&&this.inClass(a.target,"highcharts-tracker")?(k(d.series,"click",l(a,{point:d})),b.hoverPoint&&d.firePointEvent("click",a)):(l(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-c,a.chartY-f)&&k(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container;c.onmousedown=
function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};B(c,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&B(n,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&B(n,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b;p(this.chart.container,"mouseleave",this.onContainerMouseLeave);a.chartCount||
(p(n,"mouseup",this.onDocumentMouseUp),p(n,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(b in this)this[b]=null}}})(I);(function(a){var B=a.charts,z=a.each,C=a.extend,E=a.map,u=a.noop,h=a.pick;C(a.Pointer.prototype,{pinchTranslate:function(a,h,l,k,e,c){this.zoomHor&&this.pinchTranslateDirection(!0,a,h,l,k,e,c);this.zoomVert&&this.pinchTranslateDirection(!1,a,h,l,k,e,c)},pinchTranslateDirection:function(a,h,l,k,e,c,p,u){var b=this.chart,m=a?"x":"y",d=a?"X":"Y",r="chart"+
d,n=a?"width":"height",v=b["plot"+(a?"Left":"Top")],f,y,t=u||1,F=b.inverted,q=b.bounds[a?"h":"v"],x=1===h.length,J=h[0][r],K=l[0][r],L=!x&&h[1][r],g=!x&&l[1][r],D;l=function(){!x&&20<Math.abs(J-L)&&(t=u||Math.abs(K-g)/Math.abs(J-L));y=(v-K)/t+J;f=b["plot"+(a?"Width":"Height")]/t};l();h=y;h<q.min?(h=q.min,D=!0):h+f>q.max&&(h=q.max-f,D=!0);D?(K-=.8*(K-p[m][0]),x||(g-=.8*(g-p[m][1])),l()):p[m]=[K,g];F||(c[m]=y-v,c[n]=f);c=F?1/t:t;e[n]=f;e[m]=h;k[F?a?"scaleY":"scaleX":"scale"+d]=t;k["translate"+d]=c*
v+(K-c*J)},pinch:function(a){var n=this,l=n.chart,k=n.pinchDown,e=a.touches,c=e.length,p=n.lastValidTouch,H=n.hasZoom,b=n.selectionMarker,m={},d=1===c&&(n.inClass(a.target,"highcharts-tracker")&&l.runTrackerClick||n.runChartClick),r={};1<c&&(n.initiated=!0);H&&n.initiated&&!d&&a.preventDefault();E(e,function(a){return n.normalize(a)});"touchstart"===a.type?(z(e,function(a,b){k[b]={chartX:a.chartX,chartY:a.chartY}}),p.x=[k[0].chartX,k[1]&&k[1].chartX],p.y=[k[0].chartY,k[1]&&k[1].chartY],z(l.axes,function(a){if(a.zoomEnabled){var b=
l.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,c=a.toPixels(h(a.options.min,a.dataMin)),e=a.toPixels(h(a.options.max,a.dataMax)),m=Math.max(c,e);b.min=Math.min(a.pos,Math.min(c,e)-d);b.max=Math.max(a.pos+a.len,m+d)}}),n.res=!0):n.followTouchMove&&1===c?this.runPointActions(n.normalize(a)):k.length&&(b||(n.selectionMarker=b=C({destroy:u,touch:!0},l.plotBox)),n.pinchTranslate(k,e,m,b,r,p),n.hasPinched=H,n.scaleGroups(m,r),n.res&&(n.res=!1,this.reset(!1,0)))},touch:function(n,t){var l=this.chart,k,e;
if(l.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=l.index;1===n.touches.length?(n=this.normalize(n),(e=l.isInsidePlot(n.chartX-l.plotLeft,n.chartY-l.plotTop))&&!l.openMenu?(t&&this.runPointActions(n),"touchmove"===n.type&&(t=this.pinchDown,k=t[0]?4<=Math.sqrt(Math.pow(t[0].chartX-n.chartX,2)+Math.pow(t[0].chartY-n.chartY,2)):!1),h(k,!0)&&this.pinch(n)):t&&this.reset()):2===n.touches.length&&this.pinch(n)},onContainerTouchStart:function(a){this.zoomOption(a);
this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(h){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(h)}})})(I);(function(a){var B=a.addEvent,z=a.charts,C=a.css,E=a.doc,u=a.extend,h=a.noop,n=a.Pointer,t=a.removeEvent,l=a.win,k=a.wrap;if(l.PointerEvent||l.MSPointerEvent){var e={},c=!!l.PointerEvent,p=function(){var a,c=[];c.item=function(a){return this[a]};for(a in e)e.hasOwnProperty(a)&&c.push({pageX:e[a].pageX,pageY:e[a].pageY,target:e[a].target});
return c},H=function(b,c,d,e){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!z[a.hoverChartIndex]||(e(b),e=z[a.hoverChartIndex].pointer,e[c]({type:d,target:b.currentTarget,preventDefault:h,touches:p()}))};u(n.prototype,{onContainerPointerDown:function(a){H(a,"onContainerTouchStart","touchstart",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){H(a,"onContainerTouchMove","touchmove",function(a){e[a.pointerId]={pageX:a.pageX,
pageY:a.pageY};e[a.pointerId].target||(e[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){H(a,"onDocumentTouchEnd","touchend",function(a){delete e[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,c?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,c?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(E,c?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});k(n.prototype,"init",function(a,c,d){a.call(this,c,d);this.hasZoom&&
C(c.container,{"-ms-touch-action":"none","touch-action":"none"})});k(n.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(B)});k(n.prototype,"destroy",function(a){this.batchMSEvents(t);a.call(this)})}})(I);(function(a){var B,z=a.addEvent,C=a.css,E=a.discardElement,u=a.defined,h=a.each,n=a.isFirefox,t=a.marginNames,l=a.merge,k=a.pick,e=a.setAnimation,c=a.stableSort,p=a.win,H=a.wrap;B=a.Legend=function(a,c){this.init(a,c)};B.prototype={init:function(a,
c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),z(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=k(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=l(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.initialItemX=this.padding=b;this.initialItemY=b-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=k(a.symbolWidth,16);this.pages=[]},update:function(a,c){var b=this.chart;this.setOptions(l(!0,
this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;k(c,!0)&&b.redraw()},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");var b=this.options,e=a.legendItem,m=a.legendLine,k=a.legendSymbol,f=this.itemHiddenStyle.color,b=c?b.itemStyle.color:f,p=c?a.color||f:f,h=a.options&&a.options.marker,l={fill:p},q;e&&e.css({fill:b,color:b});m&&m.attr({stroke:p});if(k){if(h&&k.isMarker&&(l=a.pointAttribs(),!c))for(q in l)l[q]=f;k.attr(l)}},positionItem:function(a){var b=
this.options,d=b.symbolPadding,b=!b.rtl,c=a._legendItemPos,e=c[0],c=c[1],k=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*d-4,c);k&&(k.x=e,k.y=c)},destroyItem:function(a){var b=a.checkbox;h(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&E(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}h(this.getAllItems(),function(b){h(["legendItem","legendGroup"],a,b)});h("clipRect up down pager nav box title group".split(" "),
a,this);this.display=null},positionCheckboxes:function(a){var b=this.group&&this.group.alignAttr,d,c=this.clipHeight||this.legendHeight,e=this.titleHeight;b&&(d=b.translateY,h(this.allItems,function(m){var f=m.checkbox,k;f&&(k=d+e+f.y+(a||0)+3,C(f,{left:b.translateX+m.checkboxOffset+f.x-20+"px",top:k+"px",display:k>d-6&&k<d+c-6?"":"none"}))}))},renderTitle:function(){var a=this.padding,c=this.options.title,d=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,null,null,null,
null,null,"legend-title").attr({zIndex:1}).css(c.style).add(this.group)),a=this.title.getBBox(),d=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d},setText:function(b){var c=this.options;b.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,b):c.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,d=b.renderer,c=this.options,e="horizontal"===c.layout,p=this.symbolWidth,f=c.symbolPadding,h=this.itemStyle,n=this.itemHiddenStyle,t=this.padding,
q=e?k(c.itemDistance,20):0,x=!c.rtl,J=c.width,u=c.itemMarginBottom||0,L=this.itemMarginTop,g=this.initialItemX,D=a.legendItem,H=!a.series,z=!H&&a.series.drawLegendSymbol?a.series:a,B=z.options,B=this.createCheckboxForItem&&B&&B.showCheckbox,C=c.useHTML;D||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+z.type+"-series highcharts-color-"+a.colorIndex+(a.options.className?" "+a.options.className:"")+(H?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=D=
d.text("",x?p+f:-f,this.baseline||0,C).css(l(a.visible?h:n)).attr({align:x?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(h=h.fontSize,this.fontMetrics=d.fontMetrics(h,D),this.baseline=this.fontMetrics.f+3+L,D.attr("y",this.baseline)),this.symbolHeight=c.symbolHeight||this.fontMetrics.f,z.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,D,C),B&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);this.setText(a);d=D.getBBox();p=a.checkboxOffset=c.itemWidth||
a.legendItemWidth||p+f+d.width+q+(B?20:0);this.itemHeight=f=Math.round(a.legendItemHeight||d.height);e&&this.itemX-g+p>(J||b.chartWidth-2*t-g-c.x)&&(this.itemX=g,this.itemY+=L+this.lastLineHeight+u,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,p);this.lastItemY=L+this.itemY+u;this.lastLineHeight=Math.max(f,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=p:(this.itemY+=L+f+u,this.lastLineHeight=f);this.offsetWidth=J||Math.max((e?this.itemX-g-q:p)+t,
this.offsetWidth)},getAllItems:function(){var a=[];h(this.chart.series,function(b){var d=b&&b.options;b&&k(d.showInLegend,u(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===d.legendType?b.data:b)))});return a},adjustMargins:function(a,c){var b=this.chart,e=this.options,m=e.align.charAt(0)+e.verticalAlign.charAt(0)+e.layout.charAt(0);e.floating||h([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(d,f){d.test(m)&&!u(a[f])&&(b[t[f]]=Math.max(b[t[f]],b.legend[(f+1)%
2?"legendHeight":"legendWidth"]+[1,-1,-1,1][f]*e[f%2?"x":"y"]+k(e.margin,12)+c[f]))})},render:function(){var a=this,e=a.chart,d=e.renderer,k=a.group,p,n,f,y,t=a.box,u=a.options,q=a.padding;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;k||(a.group=k=d.g("legend").attr({zIndex:7}).add(),a.contentGroup=d.g().attr({zIndex:1}).add(k),a.scrollGroup=d.g().add(a.contentGroup));a.renderTitle();p=a.getAllItems();c(p,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&
b.options.legendIndex||0)});u.reversed&&p.reverse();a.allItems=p;a.display=n=!!p.length;a.lastLineHeight=0;h(p,function(b){a.renderItem(b)});f=(u.width||a.offsetWidth)+q;y=a.lastItemY+a.lastLineHeight+a.titleHeight;y=a.handleOverflow(y);y+=q;t||(a.box=t=d.rect().addClass("highcharts-legend-box").attr({r:u.borderRadius}).add(k),t.isNew=!0);t.attr({stroke:u.borderColor,"stroke-width":u.borderWidth||0,fill:u.backgroundColor||"none"}).shadow(u.shadow);0<f&&0<y&&(t[t.isNew?"attr":"animate"](t.crisp({x:0,
y:0,width:f,height:y},t.strokeWidth())),t.isNew=!1);t[n?"show":"hide"]();a.legendWidth=f;a.legendHeight=y;h(p,function(b){a.positionItem(b)});n&&k.align(l(u,{width:f,height:y}),!0,"spacingBox");e.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,d=this.chart,c=d.renderer,e=this.options,p=e.y,d=d.spacingBox.height+("top"===e.verticalAlign?-p:p)-this.padding,p=e.maxHeight,f,l=this.clipRect,n=e.navigation,t=k(n.animation,!0),q=n.arrowSize||12,x=this.nav,u=this.pages,K=this.padding,
L,g=this.allItems,D=function(a){a?l.attr({height:a}):l&&(b.clipRect=l.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+K+"px,9999px,"+(K+a)+"px,0)":"auto")};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(d/=2);p&&(d=Math.min(d,p));u.length=0;a>d&&!1!==n.enabled?(this.clipHeight=f=Math.max(d-20-this.titleHeight-K,0),this.currentPage=k(this.currentPage,1),this.fullHeight=a,h(g,function(a,b){var d=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);
var c=u.length;if(!c||d-u[c-1]>f&&(L||d)!==u[c-1])u.push(L||d),c++;b===g.length-1&&d+a-u[c-1]>f&&u.push(d);d!==L&&(L=d)}),l||(l=b.clipRect=c.clipRect(0,K,9999,0),b.contentGroup.clip(l)),D(f),x||(this.nav=x=c.g().attr({zIndex:1}).add(this.group),this.up=c.symbol("triangle",0,0,q,q).on("click",function(){b.scroll(-1,t)}).add(x),this.pager=c.text("",15,10).addClass("highcharts-legend-navigation").css(n.style).add(x),this.down=c.symbol("triangle-down",0,0,q,q).on("click",function(){b.scroll(1,t)}).add(x)),
b.scroll(0),a=d):x&&(D(),this.nav=x.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var b=this.pages,m=b.length;a=this.currentPage+a;var k=this.clipHeight,p=this.options.navigation,f=this.pager,h=this.padding;a>m&&(a=m);0<a&&(void 0!==c&&e(c,this.chart),this.nav.attr({translateX:h,translateY:k+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),f.attr({text:a+
"/"+m}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===m?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?p.inactiveColor:p.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===m?p.inactiveColor:p.activeColor}).css({cursor:a===m?"default":"pointer"}),c=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=a,this.positionCheckboxes(c))}};a.LegendSymbolMixin={drawRectangle:function(a,c){var b=
a.symbolHeight,e=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(e?(a.symbolWidth-b)/2:0,a.baseline-b+1,e?b:a.symbolWidth,b,k(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,e=a.symbolWidth,p=a.symbolHeight,h=p/2,f=this.chart.renderer,n=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var t;t={"stroke-width":b.lineWidth||0};b.dashStyle&&(t.dashstyle=b.dashStyle);this.legendLine=
f.path(["M",0,a,"L",e,a]).addClass("highcharts-graph").attr(t).add(n);c&&!1!==c.enabled&&(b=Math.min(k(c.radius,h),h),0===this.symbol.indexOf("url")&&(c=l(c,{width:p,height:p}),b=0),this.legendSymbol=c=f.symbol(this.symbol,e/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(n),c.isMarker=!0)}};(/Trident\/7\.0/.test(p.navigator.userAgent)||n)&&H(B.prototype,"positionItem",function(a,c){var b=this,e=function(){c._legendItemPos&&a.call(b,c)};e();setTimeout(e)})})(I);(function(a){var B=a.addEvent,z=
a.animate,C=a.animObject,E=a.attr,u=a.doc,h=a.Axis,n=a.createElement,t=a.defaultOptions,l=a.discardElement,k=a.charts,e=a.css,c=a.defined,p=a.each,H=a.extend,b=a.find,m=a.fireEvent,d=a.getStyle,r=a.grep,A=a.isNumber,v=a.isObject,f=a.isString,y=a.Legend,G=a.marginNames,F=a.merge,q=a.Pointer,x=a.pick,J=a.pInt,K=a.removeEvent,L=a.seriesTypes,g=a.splat,D=a.svg,S=a.syncTimeout,M=a.win,R=a.Renderer,N=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new N(a,b,c)};N.prototype=
{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(f(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,f=b.series;b.series=null;d=F(t,b);d.series=b.series=f;this.userOptions=b;b=d.chart;f=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var g;this.index=k.length;k.push(this);a.chartCount++;if(f)for(g in f)B(this,g,
f[g]);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;this.firstRender()},initSeries:function(b){var c=this.options.chart;(c=L[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=
this.axes,d=this.series,f=this.pointer,g=this.legend,e=this.isDirtyLegend,q,k,h=this.hasCartesianSeries,x=this.isDirtyBox,l,w=this.renderer,r=w.isHidden(),n=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);r&&this.cloneRenderTo();this.layOutTitles();for(b=d.length;b--;)if(l=d[b],l.options.stacking&&(q=!0,l.isDirty)){k=!0;break}if(k)for(b=d.length;b--;)l=d[b],l.options.stacking&&(l.isDirty=!0);p(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),
e=!0);a.isDirtyData&&m(a,"updatedData")});e&&g.options.enabled&&(g.render(),this.isDirtyLegend=!1);q&&this.getStacks();h&&p(c,function(a){a.updateNames();a.setScale()});this.getMargins();h&&(p(c,function(a){a.isDirty&&(x=!0)}),p(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,n.push(function(){m(a,"afterSetExtremes",H(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(x||q)&&a.redraw()}));x&&this.drawChartBox();m(this,"predraw");p(d,function(a){(x||a.isDirty)&&a.visible&&a.redraw();
a.isDirtyData=!1});f&&f.reset(!0);w.draw();m(this,"redraw");m(this,"render");r&&this.cloneRenderTo(!0);p(n,function(a){a.call()})},get:function(a){function c(b){return b.id===a||b.options&&b.options.id===a}var d,f=this.series,g;d=b(this.axes,c)||b(this.series,c);for(g=0;!d&&g<f.length;g++)d=b(f[g].points||[],c);return d},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});p(c,function(a,b){a.index=b;a.isX=!0});p(b,function(a,b){a.index=b});c=c.concat(b);
p(c,function(b){new h(a,b)})},getSelectedPoints:function(){var a=[];p(this.series,function(b){a=a.concat(r(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return r(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,f=d.options,g;g=f.title=F({style:{color:"#333333",fontSize:f.isStock?"16px":"18px"}},f.title,a);f=f.subtitle=F({style:{color:"#666666"}},f.subtitle,b);p([["title",a,g],["subtitle",b,f]],function(a,b){var c=a[0],f=d[c],
g=a[1];a=a[2];f&&g&&(d[c]=f=f.destroy());a&&a.text&&!f&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,d=this.renderer,f=this.spacingBox;p(["title","subtitle"],function(a){var c=this[a],g=this.options[a],e;c&&(e=g.style.fontSize,e=d.fontMetrics(e,c).b,c.css({width:(g.width||f.width+g.widthAdjust)+"px"}).align(H({y:b+
e+("title"===a?-3:2)},g),!1,"spacingBox"),g.floating||g.verticalAlign||(b=Math.ceil(b+c.getBBox().height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&x(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,f=b.width,b=b.height,g=this.renderToClone||this.renderTo;c(f)||(this.containerWidth=d(g,"width"));c(b)||(this.containerHeight=d(g,"height"));this.chartWidth=Math.max(0,f||this.containerWidth||600);
this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||this.containerHeight||400)},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);l(b);delete this.renderToClone}}else c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),e(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block",
"important"),u.body.appendChild(b),c&&b.appendChild(c)},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,d=c.chart,g,e;b=this.renderTo;var q=a.uniqueKey(),m;b||(this.renderTo=b=d.renderTo);f(b)&&(this.renderTo=b=u.getElementById(b));b||a.error(13,!0);g=J(E(b,"data-highcharts-chart"));A(g)&&k[g]&&k[g].hasRendered&&k[g].destroy();E(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.cloneRenderTo();
this.getChartSize();g=this.chartWidth;e=this.chartHeight;m=H({position:"relative",overflow:"hidden",width:g+"px",height:e+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=n("div",{id:q},m,this.renderToClone||b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||R)(b,g,e,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},
getMargins:function(a){var b=this.spacing,d=this.margin,f=this.titleOffset;this.resetMargins();f&&!c(d[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(d,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],d=a.margin;a.hasCartesianSeries&&
p(a.axes,function(a){a.visible&&a.getOffset()});p(G,function(f,g){c(d[g])||(a[f]+=b[g])});a.setChartSize()},reflow:function(a){var b=this,f=b.options.chart,g=b.renderTo,e=c(f.width),q=f.width||d(g,"width"),f=f.height||d(g,"height"),g=a?a.target:M;if(!e&&!b.isPrinting&&q&&f&&(g===M||g===u)){if(q!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=S(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=q;b.containerHeight=f}},initReflow:function(){var a=
this,b;b=B(M,"resize",function(b){a.reflow(b)});B(a,"destroy",b)},setSize:function(b,c,d){var f=this,g=f.renderer;f.isResizing+=1;a.setAnimation(d,f);f.oldChartHeight=f.chartHeight;f.oldChartWidth=f.chartWidth;void 0!==b&&(f.options.chart.width=b);void 0!==c&&(f.options.chart.height=c);f.getChartSize();b=g.globalAnimation;(b?z:e)(f.container,{width:f.chartWidth+"px",height:f.chartHeight+"px"},b);f.setChartSize(!0);g.setSize(f.chartWidth,f.chartHeight,d);p(f.axes,function(a){a.isDirty=!0;a.setScale()});
f.isDirtyLegend=!0;f.isDirtyBox=!0;f.layOutTitles();f.getMargins();f.redraw(d);f.oldChartHeight=null;m(f,"resize");S(function(){f&&m(f,"endResize",null,function(){--f.isResizing})},C(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,f=this.chartHeight,g=this.options.chart,e=this.spacing,q=this.clipOffset,k,m,h,x;this.plotLeft=k=Math.round(this.plotLeft);this.plotTop=m=Math.round(this.plotTop);this.plotWidth=h=Math.max(0,Math.round(d-k-this.marginRight));
this.plotHeight=x=Math.max(0,Math.round(f-m-this.marginBottom));this.plotSizeX=b?x:h;this.plotSizeY=b?h:x;this.plotBorderWidth=g.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:d-e[3]-e[1],height:f-e[0]-e[2]};this.plotBox=c.plotBox={x:k,y:m,width:h,height:x};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,q[3])/2);c=Math.ceil(Math.max(d,q[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,q[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
Math.max(d,q[2])/2-c))};a||p(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;p(["margin","spacing"],function(c){var d=b[c],f=v(d)?d:[d,d,d,d];p(["Top","Right","Bottom","Left"],function(d,g){a[c][g]=x(b[c+d],f[g])})});p(G,function(b,c){a[b]=x(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,f=this.chartBackground,
g=this.plotBackground,e=this.plotBorder,q,k=this.plotBGImage,m=a.backgroundColor,p=a.plotBackgroundColor,h=a.plotBackgroundImage,x,l=this.plotLeft,r=this.plotTop,n=this.plotWidth,v=this.plotHeight,t=this.plotBox,y=this.clipRect,u=this.clipBox,J="animate";f||(this.chartBackground=f=b.rect().addClass("highcharts-background").add(),J="attr");q=a.borderWidth||0;x=q+(a.shadow?8:0);m={fill:m||"none"};if(q||f["stroke-width"])m.stroke=a.borderColor,m["stroke-width"]=q;f.attr(m).shadow(a.shadow);f[J]({x:x/
2,y:x/2,width:c-x-q%2,height:d-x-q%2,r:a.borderRadius});J="animate";g||(J="attr",this.plotBackground=g=b.rect().addClass("highcharts-plot-background").add());g[J](t);g.attr({fill:p||"none"}).shadow(a.plotShadow);h&&(k?k.animate(t):this.plotBGImage=b.image(h,l,r,n,v).add());y?y.animate({width:u.width,height:u.height}):this.clipRect=b.clipRect(u);J="animate";e||(J="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||
0,fill:"none"});e[J](e.crisp({x:l,y:r,width:n,height:v},-e.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,f,g;p(["inverted","angular","polar"],function(e){c=L[b.type||b.defaultSeriesType];g=b[e]||c&&c.prototype[e];for(f=d&&d.length;!g&&f--;)(c=L[d[f].type])&&c.prototype[e]&&(g=!0);a[e]=g})},linkSeries:function(){var a=this,b=a.series;p(b,function(a){a.linkedSeries.length=0});p(b,function(b){var c=b.options.linkedTo;f(c)&&(c=":previous"===
c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=x(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){p(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&p(b.items,function(c){var d=H(b.style,c.style),f=J(d.left)+a.plotLeft,g=J(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,f,g).attr({zIndex:2}).css(d).add()})},render:function(){var a=
this.axes,b=this.renderer,c=this.options,d,f,g;this.setTitle();this.legend=new y(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight-=21;p(a,function(a){a.setScale()});this.getAxisMargins();f=1.1<c/this.plotWidth;g=1.05<d/this.plotHeight;if(f||g)p(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&p(a,function(a){a.visible&&a.render()});this.seriesGroup||
(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=F(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(M.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),
this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,d=b.series,f=b.container,g,e=f&&f.parentNode;m(b,"destroy");k[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");K(b);for(g=c.length;g--;)c[g]=c[g].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(g=d.length;g--;)d[g]=d[g].destroy();p("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});f&&(f.innerHTML="",K(f),e&&l(f));for(g in b)delete b[g]},isReadyToRender:function(){var a=this;return D||M!=M.top||"complete"===u.readyState?!0:(u.attachEvent("onreadystatechange",function(){u.detachEvent("onreadystatechange",a.firstRender);"complete"===u.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();m(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();
a.getAxes();p(b.series||[],function(b){a.initSeries(b)});a.linkSeries();m(a,"beforeRender");q&&(a.pointer=new q(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){p([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);m(this,"load");m(this,"render");c(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}}})(I);(function(a){var B,z=a.each,C=a.extend,E=a.erase,u=a.fireEvent,
h=a.format,n=a.isArray,t=a.isNumber,l=a.pick,k=a.removeEvent;B=a.Point=function(){};B.prototype={init:function(a,c,k){this.series=a;this.color=a.color;this.applyOptions(c,k);a.options.colorByPoint?(c=a.options.colors||a.chart.options.colors,this.color=this.color||c[a.colorCounter],c=c.length,k=a.colorCounter,a.colorCounter++,a.colorCounter===c&&(a.colorCounter=0)):k=a.colorIndex;this.colorIndex=l(this.colorIndex,k);a.chart.pointCount++;return this},applyOptions:function(a,c){var e=this.series,k=e.options.pointValKey||
e.pointValKey;a=B.prototype.optionsToObject.call(this,a);C(this,a);this.options=this.options?C(this.options,a):a;a.group&&delete this.group;k&&(this.y=this[k]);this.isNull=l(this.isValid&&!this.isValid(),null===this.x||!t(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===c&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===c?e.autoIncrement(this):c);return this},optionsToObject:function(a){var c={},e=this.series,k=e.options.keys,
b=k||e.pointArrayMap||["y"],m=b.length,d=0,h=0;if(t(a)||null===a)c[b[0]]=a;else if(n(a))for(!k&&a.length>m&&(e=typeof a[0],"string"===e?c.name=a[0]:"number"===e&&(c.x=a[0]),d++);h<m;)k&&void 0===a[d]||(c[b[h]]=a[d]),d++,h++;else"object"===typeof a&&(c=a,a.dataLabels&&(e._hasPointLabels=!0),a.marker&&(e._hasPointMarkers=!0));return c},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":
"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,c=a.zones,a=a.zoneAxis||"y",k=0,h;for(h=c[k];this[a]>=h.value;)h=c[++k];h&&h.color&&!this.options.color&&(this.color=h.color);return h},destroy:function(){var a=this.series.chart,c=a.hoverPoints,h;a.pointCount--;c&&(this.setState(),E(c,this),c.length||
(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)k(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(h in this)this[h]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],c,k=6;k--;)c=a[k],this[c]&&(this[c]=this[c].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,
point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var c=this.series,e=c.tooltipOptions,k=l(e.valueDecimals,""),b=e.valuePrefix||"",m=e.valueSuffix||"";z(c.pointArrayMap||["y"],function(c){c="{point."+c;if(b||m)a=a.replace(c+"}",b+c+"}"+m);a=a.replace(c+"}",c+":,."+k+"f}")});return h(a,{point:this,series:this.series})},firePointEvent:function(a,c,k){var e=this,b=this.series.options;(b.point.events[a]||e.options&&e.options.events&&e.options.events[a])&&
this.importEvents();"click"===a&&b.allowPointSelect&&(k=function(a){e.select&&e.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});u(this,a,c,k)},visible:!0}})(I);(function(a){var B=a.addEvent,z=a.animObject,C=a.arrayMax,E=a.arrayMin,u=a.correctFloat,h=a.Date,n=a.defaultOptions,t=a.defaultPlotOptions,l=a.defined,k=a.each,e=a.erase,c=a.extend,p=a.fireEvent,H=a.grep,b=a.isArray,m=a.isNumber,d=a.isString,r=a.merge,A=a.pick,v=a.removeEvent,f=a.splat,y=a.SVGElement,G=a.syncTimeout,F=a.win;a.Series=a.seriesType("line",
null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",
x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var d=this,f,e,g=a.series,q;d.chart=a;d.options=b=d.setOptions(b);d.linkedSeries=[];d.bindAxes();c(d,{name:b.name,
state:"",visible:!1!==b.visible,selected:!0===b.selected});e=b.events;for(f in e)B(d,f,e[f]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();k(d.parallelArrays,function(a){d[a+"Data"]=[]});d.setData(b.data,!1);d.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(q=g[g.length-1]);d._i=A(q&&q._i,-1)+1;a.orderSeries(this.insert(g))},insert:function(a){var b=this.options.index,c;if(m(b)){for(c=a.length;c--;)if(b>=A(a[c].options.index,
a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return A(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,f;k(b.axisTypes||[],function(e){k(d[e],function(a){f=a.options;if(c[e]===f.index||void 0!==c[e]&&c[e]===f.id||void 0===c[e]&&0===f.index)b.insert(a.series),b[e]=a,a.isDirty=!0});b[e]||b.optionalAxis===e||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=m(b)?function(d){var f="y"===d&&c.toYData?c.toYData(a):
a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};k(c.parallelArrays,f)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=A(b,a.pointStart,0);this.pointInterval=c=A(this.pointInterval,a.pointInterval,1);d&&(a=new h(b),"day"===d?a=+a[h.hcSetDate](a[h.hcGetDate]()+c):"month"===d?a=+a[h.hcSetMonth](a[h.hcGetMonth]()+c):"year"===d&&(a=+a[h.hcSetFullYear](a[h.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},
setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},f=c[this.type];this.userOptions=a;c=r(f,c.series,a);this.tooltipOptions=r(n.tooltip,n.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);null===f.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||
0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&l(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d,f=this.chart,g=this.userOptions,e=a+"Index",q=a+"Counter",k=c?c.length:A(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=A(g[e],g["_"+e]),l(d)||(f.series.length||(f[q]=0),g["_"+e]=d=f[q]%k,f[q]+=1),c&&(b=c[d]));void 0!==d&&(this[e]=d);this[a]=b},getColor:function(){this.options.colorByPoint?
this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(c,f,e,h){var q=this,g=q.points,p=g&&g.length||0,l,x=q.options,r=q.chart,n=null,v=q.xAxis,t=x.turboThreshold,y=this.xData,u=this.yData,G=(l=q.pointArrayMap)&&l.length;c=c||[];l=c.length;f=A(f,!0);if(!1!==h&&l&&p===l&&!q.cropped&&
!q.hasGroupedData&&q.visible)k(c,function(a,b){g[b].update&&a!==x.data[b]&&g[b].update(a,!1,null,!1)});else{q.xIncrement=null;q.colorCounter=0;k(this.parallelArrays,function(a){q[a+"Data"].length=0});if(t&&l>t){for(e=0;null===n&&e<l;)n=c[e],e++;if(m(n))for(e=0;e<l;e++)y[e]=this.autoIncrement(),u[e]=c[e];else if(b(n))if(G)for(e=0;e<l;e++)n=c[e],y[e]=n[0],u[e]=n.slice(1,G+1);else for(e=0;e<l;e++)n=c[e],y[e]=n[0],u[e]=n[1];else a.error(12)}else for(e=0;e<l;e++)void 0!==c[e]&&(n={series:q},q.pointClass.prototype.applyOptions.apply(n,
[c[e]]),q.updateParallelArrays(n,e));d(u[0])&&a.error(14,!0);q.data=[];q.options.data=q.userOptions.data=c;for(e=p;e--;)g[e]&&g[e].destroy&&g[e].destroy();v&&(v.minRange=v.userMinRange);q.isDirty=r.isDirtyBox=!0;q.isDirtyData=!!g;e=!1}"point"===x.legendType&&(this.processData(),this.generatePoints());f&&r.redraw(e)},processData:function(b){var c=this.xData,d=this.yData,f=c.length,e;e=0;var g,q,k=this.xAxis,m,h=this.options;m=h.cropThreshold;var l=this.getExtremesFromAll||h.getExtremesFromAll,p=this.isCartesian,
h=k&&k.val2lin,n=k&&k.isLog,r,v;if(p&&!this.isDirty&&!k.isDirty&&!this.yAxis.isDirty&&!b)return!1;k&&(b=k.getExtremes(),r=b.min,v=b.max);if(p&&this.sorted&&!l&&(!m||f>m||this.forceCrop))if(c[f-1]<r||c[0]>v)c=[],d=[];else if(c[0]<r||c[f-1]>v)e=this.cropData(this.xData,this.yData,r,v),c=e.xData,d=e.yData,e=e.start,g=!0;for(m=c.length||1;--m;)f=n?h(c[m])-h(c[m-1]):c[m]-c[m-1],0<f&&(void 0===q||f<q)?q=f:0>f&&this.requireSorting&&a.error(15);this.cropped=g;this.cropStart=e;this.processedXData=c;this.processedYData=
d;this.closestPointRange=q},cropData:function(a,b,c,d){var f=a.length,g=0,e=f,q=A(this.cropShoulder,1),k;for(k=0;k<f;k++)if(a[k]>=c){g=Math.max(0,k-q);break}for(c=k;c<f;c++)if(a[c]>d){e=c+q;break}return{xData:a.slice(g,e),yData:b.slice(g,e),start:g,end:e}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,g=this.pointClass,k=d.length,m=this.cropStart||0,h,l=this.hasGroupedData,p,n=[],r;b||l||(b=[],b.length=a.length,b=this.data=b);for(r=0;r<
k;r++)h=m+r,l?(p=(new g).init(this,[d[r]].concat(f(e[r]))),p.dataGroup=this.groupMap[r]):(p=b[h])||void 0===a[h]||(b[h]=p=(new g).init(this,a[h],d[r])),p.index=h,n[r]=p;if(b&&(k!==(c=b.length)||l))for(r=0;r<c;r++)r!==m||l||(r+=k),b[r]&&(b[r].destroyElements(),b[r].plotX=void 0);this.data=b;this.points=n},getExtremes:function(a){var c=this.yAxis,d=this.processedXData,f,e=[],g=0;f=this.xAxis.getExtremes();var q=f.min,k=f.max,h,l,p,r;a=a||this.stackedYData||this.processedYData||[];f=a.length;for(r=0;r<
f;r++)if(l=d[r],p=a[r],h=(m(p,!0)||b(p))&&(!c.positiveValuesOnly||p.length||0<p),l=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[r+1]||l)>=q&&(d[r-1]||l)<=k,h&&l)if(h=p.length)for(;h--;)null!==p[h]&&(e[g++]=p[h]);else e[g++]=p;this.dataMin=E(e);this.dataMax=C(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,f=this.yAxis,e=this.points,k=e.length,h=!!this.modifyValue,p=a.pointPlacement,
r="between"===p||m(p),n=a.threshold,v=a.startFromThreshold?n:0,t,y,G,F,H=Number.MAX_VALUE;"between"===p&&(p=.5);m(p)&&(p*=A(a.pointRange||c.pointRange));for(a=0;a<k;a++){var z=e[a],B=z.x,C=z.y;y=z.low;var E=b&&f.stacks[(this.negStacks&&C<(v?0:n)?"-":"")+this.stackKey],I;f.positiveValuesOnly&&null!==C&&0>=C&&(z.isNull=!0);z.plotX=t=u(Math.min(Math.max(-1E5,c.translate(B,0,0,0,1,p,"flags"===this.type)),1E5));b&&this.visible&&!z.isNull&&E&&E[B]&&(F=this.getStackIndicator(F,B,this.index),I=E[B],C=I.points[F.key],
y=C[0],C=C[1],y===v&&F.key===E[B].base&&(y=A(n,f.min)),f.positiveValuesOnly&&0>=y&&(y=null),z.total=z.stackTotal=I.total,z.percentage=I.total&&z.y/I.total*100,z.stackY=C,I.setOffset(this.pointXOffset||0,this.barW||0));z.yBottom=l(y)?f.translate(y,0,1,0,1):null;h&&(C=this.modifyValue(C,z));z.plotY=y="number"===typeof C&&Infinity!==C?Math.min(Math.max(-1E5,f.translate(C,0,1,0,1)),1E5):void 0;z.isInside=void 0!==y&&0<=y&&y<=f.len&&0<=t&&t<=c.len;z.clientX=r?u(c.translate(B,0,0,0,1,p)):t;z.negative=z.y<
(n||0);z.category=d&&void 0!==d[z.x]?d[z.x]:z.x;z.isNull||(void 0!==G&&(H=Math.min(H,Math.abs(t-G))),G=t);z.zone=this.zones.length&&z.getZone()}this.closestPointRangePx=H},getValidPoints:function(a,b){var c=this.chart;return H(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,e=this.clipBox,q=e||b.clipBox,k=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,q.height,
c.xAxis,c.yAxis].join(),m=b[k],h=b[k+"m"];m||(a&&(q.width=0,b[k+"m"]=h=d.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[k]=m=d.clipRect(q),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);!1!==c.clip&&(this.group.clip(a||e?m:b.clipRect),this.markerGroup.clip(h),this.sharedClipKey=k);a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&k&&b[k]&&(e||(b[k]=b[k].destroy()),b[k+"m"]&&(this.markerGroup.clip(),
b[k+"m"]=b[k+"m"].destroy())))},animate:function(a){var b=this.chart,c=z(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();p(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,c,d,f,e,k=this.options.marker,h,p,l,r,n=this.markerGroup,v=A(k.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*k.radius);
if(!1!==k.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)f=a[d],c=f.plotY,e=f.graphic,h=f.marker||{},p=!!f.marker,l=v&&void 0===h.enabled||h.enabled,r=f.isInside,l&&m(c)&&null!==f.y?(c=A(h.symbol,this.symbol),f.hasImage=0===c.indexOf("url"),l=this.markerAttribs(f,f.selected&&"select"),e?e[r?"show":"hide"](!0).animate(l):r&&(0<l.width||f.hasImage)&&(f.graphic=e=b.renderer.symbol(c,l.x,l.y,l.width,l.height,p?h:k).add(n)),e&&e.attr(this.pointAttribs(f,f.selected&&"select")),e&&e.addClass(f.getClassName(),
!0)):e&&(f.graphic=e.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=A(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],f=A(b&&b.radius,c&&c.radius,f+(c&&c.radiusPlus||0)));a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},e=this.color,q=d&&d.color,k=a&&a.color,d=A(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;e=q||a||
k||e;a=f.fillColor||c.fillColor||e;e=f.lineColor||c.lineColor||e;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=A(b.lineWidth,c.lineWidth,d+A(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,e=b.lineColor||c.lineColor||e);return{stroke:e,"stroke-width":d,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(F.navigator.userAgent),d,f=a.data||[],g,m,h;p(a,"destroy");v(a);k(a.axisTypes||[],function(b){(h=a[b])&&h.series&&(e(h.series,a),h.isDirty=h.forceRedraw=
!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(d=f.length;d--;)(g=f[d])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);for(m in a)a[m]instanceof y&&!a[m].survive&&(d=c&&"group"===m?"hide":"destroy",a[m][d]());b.hoverSeries===a&&(b.hoverSeries=null);e(b.series,a);b.orderSeries();for(m in a)delete a[m]},getGraphPath:function(a,b,c){var d=this,f=d.options,e=f.step,q,m=[],h=[],p;a=a||d.points;(q=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&q&&(e=4-e);!f.connectNulls||
b||c||(a=this.getValidPoints(a));k(a,function(g,k){var q=g.plotX,r=g.plotY,n=a[k-1];(g.leftCliff||n&&n.rightCliff)&&!c&&(p=!0);g.isNull&&!l(b)&&0<k?p=!f.connectNulls:g.isNull&&!b?p=!0:(0===k||p?k=["M",g.plotX,g.plotY]:d.getPointSpline?k=d.getPointSpline(a,g,k):e?(k=1===e?["L",n.plotX,r]:2===e?["L",(n.plotX+q)/2,n.plotY,"L",(n.plotX+q)/2,r]:["L",q,n.plotY],k.push("L",q,r)):k=["L",q,r],h.push(g.x),e&&h.push(g.x),m.push.apply(m,k),p=!1)});m.xMap=h;return d.graphPath=m},drawGraph:function(){var a=this,
b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];k(this.zones,function(c,f){d.push(["zone-graph-"+f,"highcharts-graph highcharts-zone-graph-"+f+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});k(d,function(d,f){var e=d[0],g=a[e];g?(g.endX=c.xMap,g.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),g={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&
a.color||"none"},d[3]?g.dashstyle=d[3]:"square"!==b.linecap&&(g["stroke-linecap"]=g["stroke-linejoin"]="round"),g=a[e].attr(g).shadow(2>f&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,f,e,m=this.clips||[],h,p=this.graph,l=this.area,r=Math.max(b.chartWidth,b.chartHeight),n=this[(this.zoneAxis||"y")+"Axis"],v,t,y=b.inverted,u,G,F,H,z=!1;d.length&&(p||l)&&n&&void 0!==n.min&&(t=n.reversed,u=n.horiz,p&&p.hide(),l&&l.hide(),
v=n.getExtremes(),k(d,function(d,g){f=t?u?b.plotWidth:0:u?0:n.toPixels(v.min);f=Math.min(Math.max(A(e,f),0),r);e=Math.min(Math.max(Math.round(n.toPixels(A(d.value,v.max),!0)),0),r);z&&(f=e=n.toPixels(v.max));G=Math.abs(f-e);F=Math.min(f,e);H=Math.max(f,e);n.isXAxis?(h={x:y?H:F,y:0,width:G,height:r},u||(h.x=b.plotHeight-h.x)):(h={x:0,y:y?H:F,width:r,height:G},u&&(h.y=b.plotWidth-h.y));y&&c.isVML&&(h=n.isXAxis?{x:0,y:t?F:H,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,
height:b.chartHeight});m[g]?m[g].animate(h):(m[g]=c.clipRect(h),p&&a["zone-graph-"+g].clip(m[g]),l&&a["zone-area-"+g].clip(m[g]));z=d.value>v.max}),this.clips=m)},invertGroups:function(a){function b(){k(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,f;c.xAxis&&(f=B(d,"resize",b),B(c,"destroy",f),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var e=
this[a],k=!e;k&&(this[a]=e=this.chart.renderer.g(b).attr({zIndex:d||.1}).add(f),e.addClass("highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||"")));e.attr({visibility:c})[k?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=
this,b=a.chart,c,d=a.options,f=!!a.animate&&b.renderer.isSVG&&z(d.animation).duration,e=a.visible?"inherit":"hidden",k=d.zIndex,m=a.hasRendered,h=b.seriesGroup,p=b.inverted;c=a.plotGroup("group","series",e,k,h);a.markerGroup=a.plotGroup("markerGroup","markers",e,k,h);f&&a.animate(!0);c.inverted=a.isCartesian?p:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(p);
!1===d.clip||a.sharedClipKey||m||c.clip(b.clipRect);f&&a.animate();m||(a.animationTimeout=G(function(){a.afterAnimate()},f));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:A(d&&d.left,a.plotLeft),translateY:A(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX",
"plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,f){var e,g;if(g=c&&c.length)return e=b.kdAxisArray[d%f],c.sort(function(a,b){return a[e]-b[e]}),g=Math.floor(g/2),{point:c[g],left:a(c.slice(0,g),d+1,f),right:a(c.slice(g+1),d+1,f)}}this.buildingKdTree=!0;var b=this,c=b.kdDimensions;delete b.kdTree;G(function(){b.kdTree=
a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,g,m){var h=b.point,p=d.kdAxisArray[g%m],q,r,n=h;r=l(a[f])&&l(h[f])?Math.pow(a[f]-h[f],2):null;q=l(a[e])&&l(h[e])?Math.pow(a[e]-h[e],2):null;q=(r||0)+(q||0);h.dist=l(q)?Math.sqrt(q):Number.MAX_VALUE;h.distX=l(r)?Math.sqrt(r):Number.MAX_VALUE;p=a[p]-h[p];q=0>p?"left":"right";r=0>p?"right":"left";b[q]&&(q=c(a,b[q],g+1,m),n=q[k]<n[k]?q:h);b[r]&&Math.sqrt(p*p)<n[k]&&(a=c(a,
b[r],g+1,m),n=a[k]<n[k]?a:n);return n}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],k=b?"distX":"dist";this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}})})(I);(function(a){function B(a,e,c,h,n){var b=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=e;this.x=h;this.total=null;this.points={};this.stack=n;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(b?c?"left":"right":"center"),
verticalAlign:e.verticalAlign||(b?"middle":c?"bottom":"top"),y:l(e.y,b?4:c?14:-6),x:l(e.x,b?c?-6:6:0)};this.textAlign=e.textAlign||(b?c?"right":"left":"center")}var z=a.Axis,C=a.Chart,E=a.correctFloat,u=a.defined,h=a.destroyObjectProperties,n=a.each,t=a.format,l=a.pick;a=a.Series;B.prototype={destroy:function(){h(this,this.axis)},render:function(a){var e=this.options,c=e.format,c=c?t(c,this):e.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,
null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,e){var c=this.axis,k=c.chart,h=k.inverted,b=c.reversed,b=this.isNegative&&!b||!this.isNegative&&b,m=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Math.abs(m-c);a=k.xAxis[0].translate(this.x)+a;var d=k.plotHeight,h={x:h?b?m:m-c:a,y:h?d-a-e:b?d-m-c:d-m,width:h?c:e,height:h?e:c};if(e=this.label)e.align(this.alignOptions,null,h),h=e.alignAttr,e[!1===
this.options.crop||k.isInsidePlot(h.x,h.y)?"show":"hide"](!0)}};C.prototype.getStacks=function(){var a=this;n(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});n(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+l(e.options.stack,""))})};z.prototype.buildStacks=function(){var a=this.series,e,c=l(this.options.reversedStacks,!0),h=a.length,n;if(!this.isXAxis){this.usePercentage=!1;for(n=h;n--;)a[c?n:h-n-1].setStackedPoints();
for(n=h;n--;)e=a[c?n:h-n-1],e.setStackCliffs&&e.setStackCliffs();if(this.usePercentage)for(n=0;n<h;n++)a[n].setPercentStacks()}};z.prototype.renderStackTotals=function(){var a=this.chart,e=a.renderer,c=this.stacks,h,l,b=this.stackTotalGroup;b||(this.stackTotalGroup=b=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());b.translate(a.plotLeft,a.plotTop);for(h in c)for(l in a=c[h],a)a[l].render(b)};z.prototype.resetStacks=function(){var a=this.stacks,e,c;if(!this.isXAxis)for(e in a)for(c in a[e])a[e][c].touched<
this.stacksTouched?(a[e][c].destroy(),delete a[e][c]):(a[e][c].total=null,a[e][c].cum=null)};z.prototype.cleanStacks=function(){var a,e,c;if(!this.isXAxis)for(e in this.oldStacks&&(a=this.stacks=this.oldStacks),a)for(c in a[e])a[e][c].cum=a[e][c].total};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,e=this.processedYData,c=[],h=e.length,n=this.options,b=n.threshold,m=n.startFromThreshold?
b:0,d=n.stack,n=n.stacking,r=this.stackKey,t="-"+r,v=this.negStacks,f=this.yAxis,y=f.stacks,G=f.oldStacks,F,q,x,z,K,C,g;f.stacksTouched+=1;for(K=0;K<h;K++)C=a[K],g=e[K],F=this.getStackIndicator(F,C,this.index),z=F.key,x=(q=v&&g<(m?0:b))?t:r,y[x]||(y[x]={}),y[x][C]||(G[x]&&G[x][C]?(y[x][C]=G[x][C],y[x][C].total=null):y[x][C]=new B(f,f.options.stackLabels,q,C,d)),x=y[x][C],null!==g&&(x.points[z]=x.points[this.index]=[l(x.cum,m)],u(x.cum)||(x.base=z),x.touched=f.stacksTouched,0<F.index&&!1===this.singleStacks&&
(x.points[z][0]=x.points[this.index+","+C+",0"][0])),"percent"===n?(q=q?r:t,v&&y[q]&&y[q][C]?(q=y[q][C],x.total=q.total=Math.max(q.total,x.total)+Math.abs(g)||0):x.total=E(x.total+(Math.abs(g)||0))):x.total=E(x.total+(g||0)),x.cum=l(x.cum,m)+(g||0),null!==g&&(x.points[z].push(x.cum),c[K]=x.cum);"percent"===n&&(f.usePercentage=!0);this.stackedYData=c;f.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,e=a.stackKey,c=a.yAxis.stacks,h=a.processedXData,l;n([e,"-"+e],function(b){for(var e=
h.length,d,k;e--;)if(d=h[e],l=a.getStackIndicator(l,d,a.index,b),d=(k=c[b]&&c[b][d])&&k.points[l.key])k=k.total?100/k.total:0,d[0]=E(d[0]*k),d[1]=E(d[1]*k),a.stackedYData[e]=d[1]})};a.prototype.getStackIndicator=function(a,e,c,h){!u(a)||a.x!==e||h&&a.key!==h?a={x:e,index:0,key:h}:a.index++;a.key=[c,e,a.index].join();return a}})(I);(function(a){var B=a.addEvent,z=a.animate,C=a.Axis,E=a.createElement,u=a.css,h=a.defined,n=a.each,t=a.erase,l=a.extend,k=a.fireEvent,e=a.inArray,c=a.isNumber,p=a.isObject,
H=a.merge,b=a.pick,m=a.Point,d=a.Series,r=a.seriesTypes,A=a.setAnimation,v=a.splat;l(a.Chart.prototype,{addSeries:function(a,c,d){var f,e=this;a&&(c=b(c,!0),k(e,"addSeries",{options:a},function(){f=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();c&&e.redraw(d)}));return f},addAxis:function(a,c,d,e){var f=c?"xAxis":"yAxis",h=this.options;a=H(a,{index:this[f].length,isX:c});new C(this,a);h[f]=v(h[f]||{});h[f].push(a);b(d,!0)&&this.redraw(e)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,
f=c.loading,e=function(){d&&u(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=E("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=E("span",{className:"highcharts-loading-inner"},null,d),B(b,"redraw",e));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;u(d,l(f.style,{zIndex:10}));u(b.loadingSpan,f.labelStyle);b.loadingShown||(u(d,{opacity:0,display:""}),z(d,{opacity:f.style.opacity||
.5},{duration:f.showDuration||0}));b.loadingShown=!0;e()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",z(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){u(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),update:function(a,d){var f,k={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},m=a.chart,l,p;if(m){H(!0,this.options.chart,m);"className"in m&&this.setClassName(m.className);if("inverted"in m||"polar"in m)this.propFromSeries(),l=!0;for(f in m)m.hasOwnProperty(f)&&(-1!==e("chart."+f,this.propsRequireUpdateSeries)&&(p=!0),-1!==e(f,this.propsRequireDirtyBox)&&(this.isDirtyBox=
!0));"style"in m&&this.renderer.setStyle(m.style)}for(f in a){if(this[f]&&"function"===typeof this[f].update)this[f].update(a[f],!1);else if("function"===typeof this[k[f]])this[k[f]](a[f]);"chart"!==f&&-1!==e(f,this.propsRequireUpdateSeries)&&(p=!0)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&H(!0,this.options.plotOptions,a.plotOptions);n(["xAxis","yAxis","series"],function(b){a[b]&&n(v(a[b]),function(a,c){(c=h(a.id)&&this.get(a.id)||this[b][c])&&c.coll===b&&c.update(a,!1)},this)},this);
l&&n(this.axes,function(a){a.update({},!1)});p&&n(this.series,function(a){a.update({},!1)});a.loading&&H(!0,this.options.loading,a.loading);f=m&&m.width;m=m&&m.height;c(f)&&f!==this.chartWidth||c(m)&&m!==this.chartHeight?this.setSize(f,m):b(d,!0)&&this.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});l(m.prototype,{update:function(a,c,d,e){function f(){h.applyOptions(a);null===h.y&&k&&(h.graphic=k.destroy());p(a,!0)&&(k&&k.element&&a&&a.marker&&a.marker.symbol&&(h.graphic=k.destroy()),
a&&a.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()));l=h.index;m.updateParallelArrays(h,l);n.data[l]=p(n.data[l],!0)||p(a,!0)?h.options:a;m.isDirty=m.isDirtyData=!0;!m.fixedBox&&m.hasCartesianSeries&&(g.isDirtyBox=!0);"point"===n.legendType&&(g.isDirtyLegend=!0);c&&g.redraw(d)}var h=this,m=h.series,k=h.graphic,l,g=m.chart,n=m.options;c=b(c,!0);!1===e?f():h.firePointEvent("update",{options:a},f)},remove:function(a,b){this.series.removePoint(e(this,this.series.data),a,b)}});l(d.prototype,
{addPoint:function(a,c,d,e){var f=this.options,h=this.data,m=this.chart,k=this.xAxis,k=k&&k.hasNames&&k.names,l=f.data,g,p,n=this.xData,r,v;c=b(c,!0);g={series:this};this.pointClass.prototype.applyOptions.apply(g,[a]);v=g.x;r=n.length;if(this.requireSorting&&v<n[r-1])for(p=!0;r&&n[r-1]>v;)r--;this.updateParallelArrays(g,"splice",r,0,0);this.updateParallelArrays(g,r);k&&g.name&&(k[v]=g.name);l.splice(r,0,a);p&&(this.data.splice(r,0,null),this.processData());"point"===f.legendType&&this.generatePoints();
d&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(g,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;c&&m.redraw(e)},removePoint:function(a,c,d){var f=this,e=f.data,h=e[a],m=f.points,k=f.chart,l=function(){m&&m.length===e.length&&m.splice(a,1);e.splice(a,1);f.options.data.splice(a,1);f.updateParallelArrays(h||{series:f},"splice",a,1);h&&h.destroy();f.isDirty=!0;f.isDirtyData=!0;c&&k.redraw()};A(d,k);c=b(c,!0);h?h.firePointEvent("remove",null,l):l()},remove:function(a,
c,d){function f(){e.destroy();h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();b(a,!0)&&h.redraw(c)}var e=this,h=e.chart;!1!==d?k(e,"remove",null,f):f()},update:function(a,c){var d=this,f=this.chart,e=this.userOptions,h=this.oldType||this.type,m=a.type||e.type||f.options.chart.type,k=r[h].prototype,p=["group","markerGroup","dataLabelsGroup"],g;if(m&&m!==h||void 0!==a.zIndex)p.length=0;n(p,function(a){p[a]=d[a];delete d[a]});a=H(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},
a);this.remove(!1,null,!1);for(g in k)this[g]=void 0;l(this,r[m||h].prototype);n(p,function(a){d[a]=p[a]});this.init(f,a);this.oldType=h;f.linkSeries();b(c,!0)&&f.redraw(!1)}});l(C.prototype,{update:function(a,c){var d=this.chart;a=d.options[this.coll][this.options.index]=H(this.userOptions,a);this.destroy(!0);this.init(d,l(a,{events:void 0}));d.isDirtyBox=!0;b(c,!0)&&d.redraw()},remove:function(a){for(var c=this.chart,d=this.coll,f=this.series,e=f.length;e--;)f[e]&&f[e].remove(!1);t(c.axes,this);
t(c[d],this);c.options[d].splice(this.options.index,1);n(c[d],function(a,b){a.options.index=b});this.destroy();c.isDirtyBox=!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(I);(function(a){var B=a.color,z=a.each,C=a.map,E=a.pick,u=a.Series,h=a.seriesType;h("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var a=[],h=[],l=this.xAxis,k=this.yAxis,e=k.stacks[this.stackKey],c={},
p=this.points,u=this.index,b=k.series,m=b.length,d,r=E(k.options.reversedStacks,!0)?1:-1,A,v;if(this.options.stacking){for(A=0;A<p.length;A++)c[p[A].x]=p[A];for(v in e)null!==e[v].total&&h.push(v);h.sort(function(a,b){return a-b});d=C(b,function(){return this.visible});z(h,function(b,p){var f=0,n,q;if(c[b]&&!c[b].isNull)a.push(c[b]),z([-1,1],function(a){var f=1===a?"rightNull":"leftNull",k=0,l=e[h[p+a]];if(l)for(A=u;0<=A&&A<m;)n=l.points[A],n||(A===u?c[b][f]=!0:d[A]&&(q=e[b].points[A])&&(k-=q[1]-
q[0])),A+=r;c[b][1===a?"rightCliff":"leftCliff"]=k});else{for(A=u;0<=A&&A<m;){if(n=e[b].points[A]){f=n[1];break}A+=r}f=k.translate(f,0,1,0,1);a.push({isNull:!0,plotX:l.translate(b,0,0,0,1),x:b,plotY:f,yBottom:f})}})}return a},getGraphPath:function(a){var h=u.prototype.getGraphPath,l=this.options,k=l.stacking,e=this.yAxis,c,p,n=[],b=[],m=this.index,d,r=e.stacks[this.stackKey],A=l.threshold,v=e.getThreshold(l.threshold),f,l=l.connectNulls||"percent"===k,y=function(c,f,h){var l=a[c];c=k&&r[l.x].points[m];
var p=l[h+"Null"]||0;h=l[h+"Cliff"]||0;var q,t,l=!0;h||p?(q=(p?c[0]:c[1])+h,t=c[0]+h,l=!!p):!k&&a[f]&&a[f].isNull&&(q=t=A);void 0!==q&&(b.push({plotX:d,plotY:null===q?v:e.getThreshold(q),isNull:l,isCliff:!0}),n.push({plotX:d,plotY:null===t?v:e.getThreshold(t),doCurve:!1}))};a=a||this.points;k&&(a=this.getStackPoints());for(c=0;c<a.length;c++)if(p=a[c].isNull,d=E(a[c].rectPlotX,a[c].plotX),f=E(a[c].yBottom,v),!p||l)l||y(c,c-1,"left"),p&&!k&&l||(b.push(a[c]),n.push({x:c,plotX:d,plotY:f})),l||y(c,c+
1,"right");c=h.call(this,b,!0,!0);n.reversed=!0;p=h.call(this,n,!0,!0);p.length&&(p[0]="L");p=c.concat(p);h=h.call(this,b,!1,l);p.xMap=c.xMap;this.areaPath=p;return h},drawGraph:function(){this.areaPath=[];u.prototype.drawGraph.apply(this);var a=this,h=this.areaPath,l=this.options,k=[["area","highcharts-area",this.color,l.fillColor]];z(this.zones,function(e,c){k.push(["zone-area-"+c,"highcharts-area highcharts-zone-area-"+c+" "+e.className,e.color||a.color,e.fillColor||l.fillColor])});z(k,function(e){var c=
e[0],k=a[c];k?(k.endX=h.xMap,k.animate({d:h})):(k=a[c]=a.chart.renderer.path(h).addClass(e[1]).attr({fill:E(e[3],B(e[2]).setOpacity(E(l.fillOpacity,.75)).get()),zIndex:0}).add(a.group),k.isArea=!0);k.startX=h.xMap;k.shiftUnit=l.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(I);(function(a){var B=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,C,E){var u=C.plotX,h=C.plotY,n=a[E-1];E=a[E+1];var t,l,k,e;if(n&&!n.isNull&&!1!==n.doCurve&&!C.isCliff&&E&&!E.isNull&&
!1!==E.doCurve&&!C.isCliff){a=n.plotY;k=E.plotX;E=E.plotY;var c=0;t=(1.5*u+n.plotX)/2.5;l=(1.5*h+a)/2.5;k=(1.5*u+k)/2.5;e=(1.5*h+E)/2.5;k!==t&&(c=(e-l)*(k-u)/(k-t)+h-e);l+=c;e+=c;l>a&&l>h?(l=Math.max(a,h),e=2*h-l):l<a&&l<h&&(l=Math.min(a,h),e=2*h-l);e>E&&e>h?(e=Math.max(E,h),l=2*h-e):e<E&&e<h&&(e=Math.min(E,h),l=2*h-e);C.rightContX=k;C.rightContY=e}C=["C",B(n.rightContX,n.plotX),B(n.rightContY,n.plotY),B(t,u),B(l,h),u,h];n.rightContX=n.rightContY=null;return C}})})(I);(function(a){var B=a.seriesTypes.area.prototype,
z=a.seriesType;z("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:B.getStackPoints,getGraphPath:B.getGraphPath,setStackCliffs:B.setStackCliffs,drawGraph:B.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(I);(function(a){var B=a.animObject,z=a.color,C=a.each,E=a.extend,u=a.isNumber,h=a.merge,n=a.pick,t=a.Series,l=a.seriesType,k=a.svg;l("column","line",{borderRadius:0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,
brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){t.prototype.init.apply(this,arguments);var a=this,c=a.chart;c.hasRendered&&C(c.series,function(c){c.type===a.type&&(c.isDirty=!0)})},getColumnMetrics:function(){var a=
this,c=a.options,h=a.xAxis,k=a.yAxis,b=h.reversed,m,d={},l=0;!1===c.grouping?l=1:C(a.chart.series,function(b){var c=b.options,f=b.yAxis,e;b.type===a.type&&b.visible&&k.len===f.len&&k.pos===f.pos&&(c.stacking?(m=b.stackKey,void 0===d[m]&&(d[m]=l++),e=d[m]):!1!==c.grouping&&(e=l++),b.columnIndex=e)});var t=Math.min(Math.abs(h.transA)*(h.ordinalSlope||c.pointRange||h.closestPointRange||h.tickInterval||1),h.len),v=t*c.groupPadding,f=(t-2*v)/(l||1),c=Math.min(c.maxPointWidth||h.len,n(c.pointWidth,f*(1-
2*c.pointPadding)));a.columnMetrics={width:c,offset:(f-c)/2+(v+((a.columnIndex||0)+(b?1:0))*f-t/2)*(b?-1:1)};return a.columnMetrics},crispCol:function(a,c,h,k){var b=this.chart,e=this.borderWidth,d=-(e%2?.5:0),e=e%2?.5:1;b.inverted&&b.renderer.isVML&&(e+=1);h=Math.round(a+h)+d;a=Math.round(a)+d;k=Math.round(c+k)+e;d=.5>=Math.abs(c)&&.5<k;c=Math.round(c)+e;k-=c;d&&k&&(--c,k+=1);return{x:a,y:c,width:h-a,height:k}},translate:function(){var a=this,c=a.chart,h=a.options,k=a.dense=2>a.closestPointRange*
a.xAxis.transA,k=a.borderWidth=n(h.borderWidth,k?0:1),b=a.yAxis,m=a.translatedThreshold=b.getThreshold(h.threshold),d=n(h.minPointLength,5),l=a.getColumnMetrics(),u=l.width,v=a.barW=Math.max(u,1+2*k),f=a.pointXOffset=l.offset;c.inverted&&(m-=.5);h.pointPadding&&(v=Math.ceil(v));t.prototype.translate.apply(a);C(a.points,function(e){var h=n(e.yBottom,m),k=999+Math.abs(h),k=Math.min(Math.max(-k,e.plotY),b.len+k),l=e.plotX+f,p=v,r=Math.min(k,h),t,y=Math.max(k,h)-r;Math.abs(y)<d&&d&&(y=d,t=!b.reversed&&
!e.negative||b.reversed&&e.negative,r=Math.abs(r-m)>d?h-d:m-(t?d:0));e.barX=l;e.pointWidth=u;e.tooltipPos=c.inverted?[b.len+b.pos-c.plotLeft-k,a.xAxis.len-l-p/2,y]:[l+p/2,k+b.pos-c.plotTop,y];e.shapeType="rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[e.plotX,b.len/2,0,0]:[l,r,p,y])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,c){var e=this.options,k,b=this.pointAttrToOptions||
{};k=b.stroke||"borderColor";var m=b["stroke-width"]||"borderWidth",d=a&&a.color||this.color,l=a[k]||e[k]||this.color||d,n=a[m]||e[m]||this[m]||0,b=e.dashStyle;a&&this.zones.length&&(d=(d=a.getZone())&&d.color||a.options.color||this.color);c&&(a=h(e.states[c],a.options.states&&a.options.states[c]||{}),c=a.brightness,d=a.color||void 0!==c&&z(d).brighten(a.brightness).get()||d,l=a[k]||l,n=a[m]||n,b=a.dashStyle||b);k={fill:d,stroke:l,"stroke-width":n};e.borderRadius&&(k.r=e.borderRadius);b&&(k.dashstyle=
b);return k},drawPoints:function(){var a=this,c=this.chart,k=a.options,l=c.renderer,b=k.animationLimit||250,m;C(a.points,function(d){var e=d.graphic;if(u(d.plotY)&&null!==d.y){m=d.shapeArgs;if(e)e[c.pointCount<b?"animate":"attr"](h(m));else d.graphic=e=l[d.shapeType](m).add(d.group||a.group);e.attr(a.pointAttribs(d,d.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);e.addClass(d.getClassName(),!0)}else e&&(d.graphic=e.destroy())})},animate:function(a){var c=this,e=this.yAxis,
h=c.options,b=this.chart.inverted,m={};k&&(a?(m.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(h.threshold))),b?m.translateX=a-e.len:m.translateY=a,c.group.attr(m)):(m[b?"translateX":"translateY"]=e.pos,c.group.animate(m,E(B(c.options.animation),{step:function(a,b){c.group.attr({scaleY:Math.max(.001,b.pos)})}})),c.animate=null))},remove:function(){var a=this,c=a.chart;c.hasRendered&&C(c.series,function(c){c.type===a.type&&(c.isDirty=!0)});t.prototype.remove.apply(a,arguments)}})})(I);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(I);(function(a){var B=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group",
"markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this)}})})(I);(function(a){var B=a.pick,z=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,E=this.chart,u=2*(a.slicedOffset||0),h=E.plotWidth-2*u,E=E.plotHeight-2*u,n=a.center,n=[B(n[0],"50%"),B(n[1],"50%"),a.size||"100%",a.innerSize||0],t=Math.min(h,E),l,k;for(l=0;4>l;++l)k=n[l],a=2>l||2===l&&/%$/.test(k),n[l]=z(k,[h,E,t,n[2]][l])+
(a?u:0);n[3]>n[2]&&(n[3]=n[2]);return n}}})(I);(function(a){var B=a.addEvent,z=a.defined,C=a.each,E=a.extend,u=a.inArray,h=a.noop,n=a.pick,t=a.Point,l=a.Series,k=a.seriesType,e=a.setAnimation;k("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return null===this.y?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",
borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,e=c.points,b=c.startAngleRad;a||(C(e,function(a){var d=a.graphic,e=a.shapeArgs;d&&(d.attr({r:a.startR||c.center[3]/2,start:b,end:b}),d.animate({r:e.r,start:e.start,end:e.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,
e=0,h=this.points,b=h.length,k,d=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)k=h[a],0>k.y&&(k.y=null),e+=d&&!k.visible?0:k.y;this.total=e;for(a=0;a<b;a++)k=h[a],k.percentage=0<e&&(k.visible||!d)?k.y/e*100:0,k.total=e},generatePoints:function(){l.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var c=0,e=this.options,b=e.slicedOffset,h=b+(e.borderWidth||0),d,k,l,v=e.startAngle||0,f=this.startAngleRad=Math.PI/180*(v-90),v=(this.endAngleRad=Math.PI/
180*(n(e.endAngle,v+360)-90))-f,t=this.points,u=e.dataLabels.distance,e=e.ignoreHiddenPoint,F,q=t.length,x;a||(this.center=a=this.getCenter());this.getX=function(b,c){l=Math.asin(Math.min((b-a[1])/(a[2]/2+u),1));return a[0]+(c?-1:1)*Math.cos(l)*(a[2]/2+u)};for(F=0;F<q;F++){x=t[F];d=f+c*v;if(!e||x.visible)c+=x.percentage/100;k=f+c*v;x.shapeType="arc";x.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*d)/1E3,end:Math.round(1E3*k)/1E3};l=(k+d)/2;l>1.5*Math.PI?l-=2*Math.PI:l<-Math.PI/
2&&(l+=2*Math.PI);x.slicedTranslation={translateX:Math.round(Math.cos(l)*b),translateY:Math.round(Math.sin(l)*b)};d=Math.cos(l)*a[2]/2;k=Math.sin(l)*a[2]/2;x.tooltipPos=[a[0]+.7*d,a[1]+.7*k];x.half=l<-Math.PI/2||l>Math.PI/2?1:0;x.angle=l;h=Math.min(h,u/5);x.labelPos=[a[0]+d+Math.cos(l)*u,a[1]+k+Math.sin(l)*u,a[0]+d+Math.cos(l)*h,a[1]+k+Math.sin(l)*h,a[0]+d,a[1]+k,0>u?"center":x.half?"right":"left",l]}},drawGraph:null,drawPoints:function(){var a=this,e=a.chart.renderer,h,b,k,d,l=a.options.shadow;l&&
!a.shadowGroup&&(a.shadowGroup=e.g("shadow").add(a.group));C(a.points,function(c){if(null!==c.y){b=c.graphic;d=c.shapeArgs;h=c.getTranslate();var m=c.shadowGroup;l&&!m&&(m=c.shadowGroup=e.g("shadow").add(a.shadowGroup));m&&m.attr(h);k=a.pointAttribs(c,c.selected&&"select");b?b.setRadialReference(a.center).attr(k).animate(E(d,h)):(c.graphic=b=e[c.shapeType](d).setRadialReference(a.center).attr(h).add(a.group),c.visible||b.attr({visibility:"hidden"}),b.attr(k).attr({"stroke-linejoin":"round"}).shadow(l,
m));b.addClass(c.getClassName())}})},searchPoint:h,sortByAngle:function(a,e){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:h},{init:function(){t.prototype.init.apply(this,arguments);var a=this,e;a.name=n(a.name,"Slice");e=function(c){a.slice("select"===c.type)};B(a,"select",e);B(a,"unselect",e);return a},setVisible:function(a,e){var c=this,b=c.series,h=b.chart,d=b.options.ignoreHiddenPoint;
e=n(e,d);a!==c.visible&&(c.visible=c.options.visible=a=void 0===a?!c.visible:a,b.options.data[u(c,b.data)]=c.options,C(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&h.legend.colorizeItem(c,a),a||"hover"!==c.state||c.setState(""),d&&(b.isDirty=!0),e&&h.redraw())},slice:function(a,h,k){var b=this.series;e(k,b.chart);n(h,!0);this.sliced=this.options.sliced=z(a)?a:!this.sliced;b.options.data[u(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r,start:c.start,end:c.end})}})})(I);(function(a){var B=a.addEvent,z=a.arrayMax,C=a.defined,E=a.each,u=a.extend,h=a.format,n=a.map,t=a.merge,l=a.noop,k=a.pick,e=a.relativeLength,c=a.Series,
p=a.seriesTypes,H=a.stableSort;a.distribute=function(a,c){function b(a,b){return a.target-b.target}var e,h=!0,k=a,f=[],l;l=0;for(e=a.length;e--;)l+=a[e].size;if(l>c){H(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(l=e=0;l<=c;)l+=a[e].size,e++;f=a.splice(e-1,a.length)}H(a,b);for(a=n(a,function(a){return{size:a.size,targets:[a.target]}});h;){for(e=a.length;e--;)h=a[e],l=(Math.min.apply(0,h.targets)+Math.max.apply(0,h.targets))/2,h.pos=Math.min(Math.max(0,l-h.size/2),c-h.size);e=a.length;for(h=
!1;e--;)0<e&&a[e-1].pos+a[e-1].size>a[e].pos&&(a[e-1].size+=a[e].size,a[e-1].targets=a[e-1].targets.concat(a[e].targets),a[e-1].pos+a[e-1].size>c&&(a[e-1].pos=c-a[e-1].size),a.splice(e,1),h=!0)}e=0;E(a,function(a){var b=0;E(a.targets,function(){k[e].pos=a.pos+b;b+=k[e].size;e++})});k.push.apply(k,f);H(k,b)};c.prototype.drawDataLabels=function(){var a=this,c=a.options,d=c.dataLabels,e=a.points,l,n,f=a.hasRendered||0,p,u,F=k(d.defer,!0),q=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&
a.dlProcessOptions(d),u=a.plotGroup("dataLabelsGroup","data-labels",F&&!f?"hidden":"visible",d.zIndex||6),F&&(u.attr({opacity:+f}),f||B(a,"afterAnimate",function(){a.visible&&u.show(!0);u[c.animation?"animate":"attr"]({opacity:1},{duration:200})})),n=d,E(e,function(b){var f,e=b.dataLabel,m,g,r,v=b.connector,y=!e,x;l=b.dlOptions||b.options&&b.options.dataLabels;if(f=k(l&&l.enabled,n.enabled)&&null!==b.y)for(g in d=t(n,l),m=b.getLabelConfig(),p=d.format?h(d.format,m):d.formatter.call(m,d),x=d.style,
r=d.rotation,x.color=k(d.color,x.color,a.color,"#000000"),"contrast"===x.color&&(x.color=d.inside||0>d.distance||c.stacking?q.getContrast(b.color||a.color):"#000000"),c.cursor&&(x.cursor=c.cursor),m={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:r,padding:d.padding,zIndex:1},m)void 0===m[g]&&delete m[g];!e||f&&C(p)?f&&C(p)&&(e?m.text=p:(e=b.dataLabel=q[r?"text":"label"](p,0,-9999,d.shape,null,null,d.useHTML,null,"data-label"),e.addClass("highcharts-data-label-color-"+
b.colorIndex+" "+(d.className||"")+(d.useHTML?"highcharts-tracker":""))),e.attr(m),e.css(x).shadow(d.shadow),e.added||e.add(u),a.alignDataLabel(b,e,d,null,y)):(b.dataLabel=e.destroy(),v&&(b.connector=v.destroy()))})};c.prototype.alignDataLabel=function(a,c,d,e,h){var b=this.chart,f=b.inverted,l=k(a.plotX,-9999),m=k(a.plotY,-9999),n=c.getBBox(),q,p=d.rotation,r=d.align,t=this.visible&&(a.series.forceDL||b.isInsidePlot(l,Math.round(m),f)||e&&b.isInsidePlot(l,f?e.x+1:e.y+e.height-1,f)),A="justify"===
k(d.overflow,"justify");t&&(q=d.style.fontSize,q=b.renderer.fontMetrics(q,c).b,e=u({x:f?b.plotWidth-m:l,y:Math.round(f?b.plotHeight-l:m),width:0,height:0},e),u(d,{width:n.width,height:n.height}),p?(A=!1,f=b.renderer.rotCorr(q,p),f={x:e.x+d.x+e.width/2+f.x,y:e.y+d.y+{top:0,middle:.5,bottom:1}[d.verticalAlign]*e.height},c[h?"attr":"animate"](f).attr({align:r}),l=(p+720)%360,l=180<l&&360>l,"left"===r?f.y-=l?n.height:0:"center"===r?(f.x-=n.width/2,f.y-=n.height/2):"right"===r&&(f.x-=n.width,f.y-=l?0:
n.height)):(c.align(d,null,e),f=c.alignAttr),A?this.justifyDataLabel(c,d,f,n,e,h):k(d.crop,!0)&&(t=b.isInsidePlot(f.x,f.y)&&b.isInsidePlot(f.x+n.width,f.y+n.height)),d.shape&&!p&&c.attr({anchorX:a.plotX,anchorY:a.plotY}));t||(c.attr({y:-9999}),c.placed=!1)};c.prototype.justifyDataLabel=function(a,c,d,e,h,k){var b=this.chart,l=c.align,m=c.verticalAlign,n,q,p=a.box?0:a.padding||0;n=d.x+p;0>n&&("right"===l?c.align="left":c.x=-n,q=!0);n=d.x+e.width-p;n>b.plotWidth&&("left"===l?c.align="right":c.x=b.plotWidth-
n,q=!0);n=d.y+p;0>n&&("bottom"===m?c.verticalAlign="top":c.y=-n,q=!0);n=d.y+e.height-p;n>b.plotHeight&&("top"===m?c.verticalAlign="bottom":c.y=b.plotHeight-n,q=!0);q&&(a.placed=!k,a.align(c,null,h))};p.pie&&(p.pie.prototype.drawDataLabels=function(){var b=this,e=b.data,d,h=b.chart,l=b.options.dataLabels,p=k(l.connectorPadding,10),f=k(l.connectorWidth,1),t=h.plotWidth,u=h.plotHeight,F,q=l.distance,x=b.center,B=x[2]/2,C=x[1],H=0<q,g,D,I,M,R=[[],[]],N,w,O,Q,P=[0,0,0,0];b.visible&&(l.enabled||b._hasPointLabels)&&
(E(e,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),c.prototype.drawDataLabels.apply(b),E(e,function(a){a.dataLabel&&a.visible&&(R[a.half].push(a),a.dataLabel._pos=null)}),E(R,function(c,f){var e,k,m=c.length,r,v,y;if(m)for(b.sortByAngle(c,f-.5),0<q&&(e=Math.max(0,C-B-q),k=Math.min(C+B+q,h.plotHeight),r=n(c,function(a){if(a.dataLabel)return y=a.dataLabel.getBBox().height||21,{target:a.labelPos[1]-
e+y/2,size:y,rank:a.y}}),a.distribute(r,k+y-e)),Q=0;Q<m;Q++)d=c[Q],I=d.labelPos,g=d.dataLabel,O=!1===d.visible?"hidden":"inherit",v=I[1],r?void 0===r[Q].pos?O="hidden":(M=r[Q].size,w=e+r[Q].pos):w=v,N=l.justify?x[0]+(f?-1:1)*(B+q):b.getX(w<e+2||w>k-2?v:w,f),g._attr={visibility:O,align:I[6]},g._pos={x:N+l.x+({left:p,right:-p}[I[6]]||0),y:w+l.y-10},I.x=N,I.y=w,null===b.options.size&&(D=g.getBBox().width,v=null,N-D<p?(v=Math.round(D-N+p),P[3]=Math.max(v,P[3])):N+D>t-p&&(v=Math.round(N+D-t+p),P[1]=Math.max(v,
P[1])),0>w-M/2?P[0]=Math.max(Math.round(-w+M/2),P[0]):w+M/2>u&&(P[2]=Math.max(Math.round(w+M/2-u),P[2])),g.sideOverflow=v)}),0===z(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),H&&f&&E(this.points,function(a){var c;F=a.connector;if((g=a.dataLabel)&&g._pos&&a.visible){O=g._attr.visibility;if(c=!F)a.connector=F=h.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(b.dataLabelsGroup),F.attr({"stroke-width":f,stroke:l.connectorColor||a.color||
"#666666"});F[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});F.attr("visibility",O)}else F&&(a.connector=F.destroy())}))},p.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return k(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},p.pie.prototype.placeDataLabels=function(){E(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&
(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))},this)},p.pie.prototype.alignDataLabel=l,p.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,h=c.center,k=c.minSize||80,l,f;null!==h[0]?l=Math.max(b[2]-Math.max(a[1],a[3]),k):(l=Math.max(b[2]-a[1]-a[3],k),b[0]+=(a[3]-a[1])/2);null!==h[1]?l=Math.max(Math.min(l,b[2]-
Math.max(a[0],a[2])),k):(l=Math.max(Math.min(l,b[2]-a[0]-a[2]),k),b[1]+=(a[0]-a[2])/2);l<b[2]?(b[2]=l,b[3]=Math.min(e(c.innerSize||0,l),l),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f});p.column&&(p.column.prototype.alignDataLabel=function(a,e,d,h,l){var b=this.chart.inverted,f=a.series,m=a.dlBox||a.shapeArgs,n=k(a.below,a.plotY>k(this.translatedThreshold,f.yAxis.len)),p=k(d.inside,!!this.options.stacking);m&&(h=t(m),0>h.y&&(h.height+=h.y,h.y=0),m=h.y+h.height-f.yAxis.len,
0<m&&(h.height-=m),b&&(h={x:f.yAxis.len-h.y-h.height,y:f.xAxis.len-h.x-h.width,width:h.height,height:h.width}),p||(b?(h.x+=n?0:h.width,h.width=0):(h.y+=n?h.height:0,h.height=0)));d.align=k(d.align,!b||p?"center":n?"right":"left");d.verticalAlign=k(d.verticalAlign,b||p?"middle":n?"top":"bottom");c.prototype.alignDataLabel.call(this,a,e,d,h,l)})})(I);(function(a){var B=a.Chart,z=a.each,C=a.pick,E=a.addEvent;B.prototype.callbacks.push(function(a){function h(){var h=[];z(a.series||[],function(a){var l=
a.options.dataLabels,k=a.dataLabelCollections||["dataLabel"];(l.enabled||a._hasPointLabels)&&!l.allowOverlap&&a.visible&&z(k,function(e){z(a.points,function(a){a[e]&&(a[e].labelrank=C(a.labelrank,a.shapeArgs&&a.shapeArgs.height),h.push(a[e]))})})});a.hideOverlappingLabels(h)}h();E(a,"redraw",h)});B.prototype.hideOverlappingLabels=function(a){var h=a.length,n,t,l,k,e,c,p,u,b,m=function(a,b,c,e,f,h,k,l){return!(f>a+c||f+k<a||h>b+e||h+l<b)};for(t=0;t<h;t++)if(n=a[t])n.oldOpacity=n.opacity,n.newOpacity=
1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(t=0;t<h;t++)for(l=a[t],n=t+1;n<h;++n)if(k=a[n],l&&k&&l.placed&&k.placed&&0!==l.newOpacity&&0!==k.newOpacity&&(e=l.alignAttr,c=k.alignAttr,p=l.parentGroup,u=k.parentGroup,b=2*(l.box?0:l.padding),e=m(e.x+p.translateX,e.y+p.translateY,l.width-b,l.height-b,c.x+u.translateX,c.y+u.translateY,k.width-b,k.height-b)))(l.labelrank<k.labelrank?l:k).newOpacity=0;z(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):
b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(I);(function(a){var B=a.addEvent,z=a.Chart,C=a.createElement,E=a.css,u=a.defaultOptions,h=a.defaultPlotOptions,n=a.each,t=a.extend,l=a.fireEvent,k=a.hasTouch,e=a.inArray,c=a.isObject,p=a.Legend,H=a.merge,b=a.pick,m=a.Point,d=a.Series,r=a.seriesTypes,A=a.svg;a=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);if(void 0!==c)c.onMouseOver(a)};
n(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(n(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(k)a[d].on("touchstart",c);a.options.cursor&&a[d].css(E).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?
a.areaPath:a.graphPath),e=d.length,h=a.chart,l=h.pointer,m=h.renderer,p=h.options.tooltip.snap,t=a.tracker,g,r=function(){if(h.hoverSeries!==a)a.onMouseOver()},u="rgba(192,192,192,"+(A?.0001:.002)+")";if(e&&!c)for(g=e+1;g--;)"M"===d[g]&&d.splice(g+1,0,d[g+1]-p,d[g+2],"L"),(g&&"M"===d[g]||g===e)&&d.splice(g,0,"L",d[g-2]+p,d[g-1]);t?t.attr({d:d}):a.graph&&(a.tracker=m.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:u,fill:c?u:"none","stroke-width":a.graph.strokeWidth()+
(c?0:2*p),zIndex:2}).add(a.group),n([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",r).on("mouseout",function(a){l.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(k)a.on("touchstart",r)}))}};r.column&&(r.column.prototype.drawTracker=a.drawTrackerPoint);r.pie&&(r.pie.prototype.drawTracker=a.drawTrackerPoint);r.scatter&&(r.scatter.prototype.drawTracker=a.drawTrackerPoint);t(p.prototype,{setItemEvents:function(a,b,c){var d=this,e=d.chart.renderer.boxWrapper,
f="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.addClass(f);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d.itemStyle:d.itemHiddenStyle);e.removeClass(f);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):l(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=C("input",
{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);B(a.checkbox,"click",function(b){l(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});u.legend.itemStyle.cursor="pointer";t(z.prototype,{showResetZoom:function(){var a=this,b=u.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,h="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},
d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,h)},zoomOut:function(){var a=this;l(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var d,e=this.pointer,h=!1,k;!a||a.resetSelection?n(this.axes,function(a){d=a.zoom()}):n(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;e[b.isXAxis?"zoomX":"zoomY"]&&(d=b.zoom(a.min,a.max),b.displayBtn&&(h=!0))});k=this.resetZoomButton;h&&!k?this.showResetZoom():
!h&&c(k)&&(this.resetZoomButton=k.destroy());d&&this.redraw(b(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&n(d,function(a){a.setState()});n("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],k=(b.pointRange||0)/2,g=b.getExtremes(),l=b.toValue(h-f,!0)+k,k=b.toValue(h+b.len-f,!0)-k,m=k<l,h=m?k:l,l=m?l:k,m=b.toValue(b.toPixels(g.min)-b.minPixelPadding),
k=b.toValue(b.toPixels(g.max)+b.minPixelPadding),m=Math.min(g.dataMin,m)-h,g=l-Math.max(g.dataMax,k);b.series.length&&0>m&&0>g&&(b.setExtremes(h,l,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);E(c.container,{cursor:"move"})}});t(m.prototype,{select:function(a,c){var d=this,f=d.series,h=f.chart;a=b(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;f.options.data[e(d,f.data)]=d.options;d.setState(a&&"select");c||n(h.getSelectedPoints(),
function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,f.options.data[e(a,f.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart.pointer;this.firePointEvent("mouseOver");b.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");n(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=H(this.series.options.point,
this.options).events,b;this.events=a;for(b in a)B(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,c){var d=Math.floor(this.plotX),e=this.plotY,f=this.series,k=f.options.states[a]||{},l=h[f.type].marker&&f.options.marker,m=l&&!1===l.enabled,n=l&&l.states&&l.states[a]||{},p=!1===n.enabled,g=f.stateMarkerGraphic,r=this.marker||{},u=f.chart,v=f.halo,z,A=l&&f.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===k.enabled||a&&(p||m&&!1===n.enabled)||a&&r.states&&
r.states[a]&&!1===r.states[a].enabled)){A&&(z=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(f.pointAttribs(this,a)),z&&this.graphic.animate(z,b(u.options.chart.animation,n.animation,l.animation)),g&&g.hide();else{if(a&&n){l=r.symbol||f.symbol;g&&g.currentSymbol!==l&&(g=g.destroy());if(g)g[c?"animate":"attr"]({x:z.x,y:z.y});else l&&(f.stateMarkerGraphic=g=u.renderer.symbol(l,
z.x,z.y,z.width,z.height).add(f.markerGroup),g.currentSymbol=l);g&&g.attr(f.pointAttribs(this,a))}g&&(g[a&&u.isInsidePlot(d,e,u.inverted)?"show":"hide"](),g.element.point=this)}(d=k.halo)&&d.size?(v||(f.halo=v=u.renderer.path().add(A?f.markerGroup:f.group)),v[c?"animate":"attr"]({d:this.haloPath(d.size)}),v.attr({"class":"highcharts-halo highcharts-color-"+b(this.colorIndex,f.colorIndex)}),v.point=this,v.attr(t({fill:this.color||f.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):v&&v.point&&
v.point.haloPath&&v.animate({d:v.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});t(d.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&l(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();
this&&a.events.mouseOut&&l(this,"mouseOut");!c||a.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var c=this,d=c.options,e=c.graph,h=d.states,k=d.lineWidth,d=0;a=a||"";if(c.state!==a&&(n([c.group,c.markerGroup,c.dataLabelsGroup],function(b){b&&(c.state&&b.removeClass("highcharts-series-"+c.state),a&&b.addClass("highcharts-series-"+a))}),c.state=a,!h[a]||!1!==h[a].enabled)&&(a&&(k=h[a].lineWidth||k+(h[a].lineWidthPlus||0)),e&&!e.dashstyle))for(k={"stroke-width":k},
e.animate(k,b(c.chart.options.chart.animation,h[a]&&h[a].animation));c["zone-graph-"+d];)c["zone-graph-"+d].attr(k),d+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";n(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,
a);c.isDirty=!0;c.options.stacking&&n(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});n(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();l(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);l(this,a?"select":"unselect")},drawTracker:a.drawTrackerGraph})})(I);(function(a){var B=a.Chart,z=a.each,C=a.inArray,E=
a.isArray,u=a.isObject,h=a.pick,n=a.splat;B.prototype.setResponsive=function(h){var l=this.options.responsive,k=[],e=this.currentResponsive;l&&l.rules&&z(l.rules,function(c){void 0===c._id&&(c._id=a.uniqueKey());this.matchResponsiveRule(c,k,h)},this);var c=a.merge.apply(0,a.map(k,function(c){return a.find(l.rules,function(a){return a._id===c}).chartOptions})),k=k.toString()||void 0;k!==(e&&e.ruleIds)&&(e&&this.update(e.undoOptions,h),k?(this.currentResponsive={ruleIds:k,mergedOptions:c,undoOptions:this.currentOptions(c)},
this.update(c,h)):this.currentResponsive=void 0)};B.prototype.matchResponsiveRule=function(a,l){var k=a.condition;(k.callback||function(){return this.chartWidth<=h(k.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=h(k.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=h(k.minWidth,0)&&this.chartHeight>=h(k.minHeight,0)}).call(this)&&l.push(a._id)};B.prototype.currentOptions=function(a){function h(a,c,k,l){var b,e;for(b in a)if(!l&&-1<C(b,["series","xAxis","yAxis"]))for(a[b]=n(a[b]),k[b]=[],e=0;e<a[b].length;e++)c[b][e]&&
(k[b][e]={},h(a[b][e],c[b][e],k[b][e],l+1));else u(a[b])?(k[b]=E(a[b])?[]:{},h(a[b],c[b]||{},k[b],l+1)):k[b]=c[b]||null}var k={};h(a,this.options,k,0);return k}})(I);return I});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Highcharts = __webpack_require__(0);
var $ = __webpack_require__(1);

$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

    Highcharts.chart('chart', {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
});


/***/ })
/******/ ]);