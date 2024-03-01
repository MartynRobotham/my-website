"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[154],{7606:function(e,t,r){r.d(t,{G:function(){return w}});var n=r(4694),o=r(5697),a=r.n(o),i=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];var d=!1;try{d=!0}catch(j){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var v=["forwardedRef"];function w(e){var t=e.forwardedRef,r=u(e,v),o=r.icon,a=r.mask,i=r.symbol,l=r.className,c=r.title,b=r.titleId,m=h(o),y=O("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,o=e.flash,a=e.spin,i=e.spinPulse,l=e.spinReverse,s=e.pulse,c=e.fixedWidth,u=e.inverse,p=e.border,b=e.listItem,m=e.flip,y=e.size,d=e.rotation,h=e.pull,O=(f(t={"fa-beat":r,"fa-fade":n,"fa-flash":o,"fa-spin":a,"fa-spin-reverse":l,"fa-spin-pulse":i,"fa-pulse":s,"fa-fw":c,"fa-inverse":u,"fa-border":p,"fa-li":b,"fa-flip-horizontal":"horizontal"===m||"both"===m,"fa-flip-vertical":"vertical"===m||"both"===m},"fa-".concat(y),null!=y),f(t,"fa-rotate-".concat(d),null!=d&&0!==d),f(t,"fa-pull-".concat(h),null!=h),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map((function(e){return O[e]?e:null})).filter((function(e){return e}))}(r)),p(l.split(" ")))),j=O("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),x=O("mask",h(a)),k=(0,n.icon)(m,s(s(s(s({},y),j),x),{},{symbol:i,title:c,titleId:b}));if(!k)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var E=k.abstract,P={ref:t};return Object.keys(r).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(P[e]=r[e])})),g(E[0],P)}w.displayName="FontAwesomeIcon",w.propTypes={beat:a().bool,border:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=m(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=u(n,y);return a.attrs.style=s(s({},a.attrs.style),l),t.apply(void 0,[r.tag,s(s({},a.attrs),c)].concat(p(o)))}.bind(null,i.createElement)},2995:function(e,t,r){r.r(t);var n=r(7294),o=r(7606),a=r(8167),i=r(7190);t.default=function(){return n.createElement("div",{className:"footer"},n.createElement("div",null,n.createElement("span",null,"© ",(new Date).getFullYear()," Martyn Robotham")),n.createElement("div",{className:"icons"},n.createElement("a",{href:"mailto:martyn_robotham@hotmail.co.uk"},n.createElement(o.G,{className:"icon",icon:a.FU$,title:"Email"})),n.createElement("a",{href:"https://github.com/MartynRobotham"},n.createElement(o.G,{className:"icon",icon:i.zhw,title:"GitHub"})),n.createElement("a",{href:"https://www.linkedin.com/in/martyn-robotham-21617a87/"},n.createElement(o.G,{className:"icon",icon:i.D9H,title:"LinkedIn"})),n.createElement("a",{href:"https://stackoverflow.com/users/6200847/martyn93"},n.createElement(o.G,{className:"icon",icon:i.mGT,title:"Stack Overflow"}))))}}}]);
//# sourceMappingURL=component---src-pages-sub-pages-contact-contact-js-73633ab45340185ac855.js.map