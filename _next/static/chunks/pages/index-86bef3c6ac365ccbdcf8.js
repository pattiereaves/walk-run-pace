_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,"default",(function(){return M}));var i=n("nKUr"),a=n("q1tI"),c=n("8Kt/"),s=n.n(c),u=n("rePB"),l=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2)};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){return Math.floor(e/60)},p=function(e){return Math.abs(e%60)},b=function(e){return 60*(e-Math.floor(e))},h=function(e){var t=e.setTime,n=e.time,r=e.showHours,c=void 0===r||r,s=e.legend,f=void 0===s?"":s,h=o(a.useState({hours:d(n),minutes:p(n),seconds:b(n)}),2),v=h[0],j=h[1];a.useEffect((function(){t(60*v.hours+v.minutes+v.seconds/60)}),[v]),a.useEffect((function(){var e={hours:d(n),minutes:p(n),seconds:b(n)};JSON.stringify(e)!==JSON.stringify(v)&&j(e)}),[n]);var x=function(e,t){var n=m(m({},v),{},Object(u.a)({},e,t));j(n)},y=l();return Object(i.jsxs)("fieldset",{className:"flex flex-nowrap flex-row w-full max-w-full mb-1 align-middle",children:[""!==f?Object(i.jsx)("legend",{className:"label",children:f}):null,Object(i.jsxs)("div",{className:"inline-flex flex-nowrap",children:[c?Object(i.jsxs)("div",{className:"inline-flex flex-wrap-reversed flex-col flex-shrink-1",children:[Object(i.jsx)("label",{className:"w-auto order-2 text-sm",htmlFor:"hours-".concat(y),children:"Hours"}),Object(i.jsx)("input",{className:"inline w-14 mb-0",type:"number",value:v.hours,onChange:function(e){return x("hours",+e.target.value)}})]}):null,Object(i.jsxs)("div",{className:"inline-flex flex-wrap-reversed flex-col flex-shrink-1",children:[Object(i.jsx)("label",{className:"w-auto order-2 text-sm",htmlFor:"minutes-".concat(y),children:"Minutes"}),Object(i.jsx)("input",{className:"inline w-14 mb-0",type:"number",value:v.minutes,onChange:function(e){return x("minutes",+e.target.value)}})]}),Object(i.jsxs)("div",{className:"inline-flex flex-wrap-reversed flex-col flex-shrink-1",children:[Object(i.jsx)("label",{className:"w-auto order-2 text-sm",htmlFor:"seconds-".concat(y),children:"Seconds"}),Object(i.jsx)("input",{className:"inline w-14 mb-0",type:"number",value:v.seconds,onChange:function(e){return x("seconds",+e.target.value)}})]})]})]})},v=n("ozIn"),j=n.n(v);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=e.values,n=e.setValues;return Object(i.jsxs)("form",{className:"block border-double rounded-lg border-4 border-white p-2 mb-4 md:-mx-16",children:[Object(i.jsxs)("fieldset",{className:"max-w-full flex flex-nowrap align-middle",children:[Object(i.jsx)("legend",{className:"text-base font-serif mb-3 font-bold border-b-2 block w-full",children:"Event details"}),Object(i.jsx)("div",{className:"block mb-1 mr-2 flex-grow",children:Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{className:"text-2xl flex-shrink",htmlFor:"event-distance",children:"Distance"}),Object(i.jsxs)("select",{className:"flex-grow",name:"event-distance",id:"event-distance",required:!0,value:t.event.distance,onChange:function(e){var r=y({},t);r.event.distance=+e.target.value,n(r)},children:[Object(i.jsx)("option",{value:"3.10686",children:"5k"}),Object(i.jsx)("option",{value:"6.21371",children:"10k"}),Object(i.jsx)("option",{value:"13.1",children:"Half Marathon"}),Object(i.jsx)("option",{value:"26.2",children:"Marathon"}),Object(i.jsx)("option",{value:"31.0686",children:"50k"}),Object(i.jsx)("option",{value:"50",children:"50 miles"})]})]})}),Object(i.jsx)("div",{className:j.a["goal-time"],children:Object(i.jsx)(h,{time:t.event.duration,setTime:function(e){var r=y({},t);r.event.duration=e,n(r)},legend:"Goal time"})})]}),Object(i.jsxs)("fieldset",{className:"flex flex-wrap justify-around",children:[Object(i.jsx)("legend",{className:"text-base font-serif mb-3 font-bold border-b-2 block w-full",children:"Intervals"}),Object(i.jsx)("div",{className:j.a.intervals,children:Object(i.jsx)(h,{time:t.intervalDuration.run,setTime:function(e){var r=y({},t);r.intervalDuration.run=e,n(r)},legend:"\ud83c\udfc3\u200d\u2640\ufe0f Run",showHours:!1})}),Object(i.jsx)("div",{className:j.a.intervals,children:Object(i.jsx)(h,{time:t.intervalDuration.walk,setTime:function(e){var r=y({},t);r.intervalDuration.walk=e,n(r)},showHours:!1,legend:"\ud83d\udeb6\u200d\u2640\ufe0f Walk"})}),Object(i.jsx)("div",{className:"text-center block w-full flex-grow-1 text-base italic",children:"Walk pace assumes 16:00 per mile."})]})]})}var g=n("cebo");function w(e){var t=e.calculations;return t?Object(i.jsxs)("div",{className:"results",children:[Object(i.jsx)("h2",{className:"sr-only",children:"Results"}),Object(i.jsxs)("p",{className:"text-xl leading-loose",children:["Run at a ",Object(i.jsx)("span",{className:"text-white p-1 border-blue-200 border-dashed border-4",children:Object(g.convert)(t.pace.run,"mih").minmi})," per mile pace for ",Object(i.jsx)("span",{className:"border-dashed rounded-full border-4 py-1 px-2 border-blue-200 text-white",children:t.intervals.toFixed(1)})," intervals. Each interval, averages \ud83c\udfc3\u200d\u2640\ufe0f running "," ",Object(i.jsx)("strong",{className:"border-dashed border-b-4 border-black",children:t.distance.run.toFixed(2)})," miles and \ud83d\udeb6\u200d\u2640\ufe0f walking ",Object(i.jsx)("strong",{className:"border-dashed border-b-4 border-black",children:t.distance.walk.toFixed(2)})," miles."]})]}):Object(i.jsx)("div",{})}var k={event:{distance:3.10686,duration:60},intervalDuration:{run:4,walk:1}};function M(){var e=o(a.useState(k),2),t=e[0],n=e[1],r=o(a.useState(void 0),2),c=r[0],u=r[1];return a.useEffect((function(){var e=t.event,n=e.distance,r=e.duration,o=t.intervalDuration.run+t.intervalDuration.walk,i=o>0?r/o:0,a=i>0?n/i:0,c=t.intervalDuration.walk/16,s=a-c,l=s/t.intervalDuration.run*60;u({distance:{run:s,walk:c},intervals:i,pace:{run:l,walk:16}})}),[t]),Object(i.jsxs)("div",{className:"container mx-auto px-4 flex flex-wrap",children:[Object(i.jsxs)(s.a,{children:[Object(i.jsx)("title",{children:"Walk - Run Pace calculator"}),Object(i.jsx)("link",{rel:"icon",href:"stopwatch.png"})]}),Object(i.jsxs)("main",{className:"block max-w-md mx-auto pt-9",children:[Object(i.jsxs)("h1",{className:"text-center text-2xl font-bold font-serif mb-3",children:[Object(i.jsx)("img",{src:"stopwatch.png",className:"w-8 mr-2 inline",alt:""}),"Walk - Run Pace Calculator"]}),Object(i.jsx)(O,{values:t,setValues:n}),Object(i.jsx)(w,{calculations:c})]})]})}},"5O33":function(e,t){const n=e=>e<10?"0"+e:e;e.exports=e=>{const t=Math.floor(e),r=e%1;return`${n(t)}:${n((60*r).toFixed(2))}`}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,s=m.length;c<s;c++){var u=m[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var l=o.props[u],f=r[u]||new Set;f.has(l)?i=!1:(f.add(l),r[u]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}p.rewind=function(){};var b=p;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},QqW5:function(e,t){const n=e=>Math.round(1e3*e)/1e3;e.exports={minkm2kmh:e=>n(60/e),kmh2minkm:e=>n(60/e),minkm2minmi:e=>n(e/.6214),minmi2minkm:e=>n(.6214*e),minkm2mih:e=>n(60/e*.6214),mih2minkm:e=>n(60/e*.6214),kmh2minmi:e=>n(60/e/.6214),minmi2kmh:e=>n(60/e/.6214),kmh2mih:e=>n(.6214*e),mih2kmh:e=>n(e/.6214),mih2minmi:e=>n(60/e),minmi2mih:e=>n(60/e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YCf2:function(e,t,n){const r=n("in+h"),o=n("5O33"),{minkm2kmh:i,minkm2minmi:a,minkm2mih:c,kmh2minkm:s,kmh2minmi:u,kmh2mih:l,minmi2minkm:f,minmi2kmh:m,minmi2mih:d,mih2minkm:p,mih2kmh:b,mih2minmi:h}=n("QqW5"),v=n("ebx1");e.exports=(e,t)=>{if(t===v.MINKM){const t=r(e);return{minkm:o(t),kmh:i(t),minmi:o(a(t)),mih:c(t)}}if(t===v.KMH){const t=Number.parseFloat(e);return{minkm:o(s(t)),kmh:t,minmi:o(u(t)),mih:l(t)}}if(t===v.MINMI){const t=r(e);return{minkm:o(f(t)),kmh:m(t),minmi:o(t),mih:d(t)}}if(t===v.MIH){const t=Number.parseFloat(e);return{minkm:o(p(t)),kmh:b(t),minmi:o(h(t)),mih:t}}throw new Error("unknown unit")}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},cebo:function(e,t,n){e.exports=n("gA75")},ebx1:function(e,t){e.exports={MINKM:"minkm",KMH:"kmh",MINMI:"minmi",MIH:"mih"}},gA75:function(e,t,n){const r=n("YCf2");e.exports={convert:r}},"in+h":function(e,t){e.exports=e=>{const t=e.split(":")[0],n=e.split(":")[1];return Number.parseInt(t,10)+n/60}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},ozIn:function(e,t,n){e.exports={"goal-time":"form_goal-time__151IN",intervals:"form_intervals__1JTG4"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["/EDR",0,1]]]);