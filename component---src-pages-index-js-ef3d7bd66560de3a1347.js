"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[678,873,154,739,257,793],{7606:function(e,t,r){r.d(t,{G:function(){return w}});var n=r(4694),a=r(5697),o=r.n(a),l=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var h=["style"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=d(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var y=!1;try{y=!0}catch(k){}function v(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var g=["forwardedRef"];function w(e){var t=e.forwardedRef,r=m(e,g),a=r.icon,o=r.mask,l=r.symbol,i=r.className,s=r.title,p=r.titleId,d=v(a),h=E("classes",[].concat(f(function(e){var t,r=e.beat,n=e.fade,a=e.flash,o=e.spin,l=e.spinPulse,i=e.spinReverse,c=e.pulse,s=e.fixedWidth,m=e.inverse,f=e.border,p=e.listItem,d=e.flip,h=e.size,b=e.rotation,y=e.pull,v=(u(t={"fa-beat":r,"fa-fade":n,"fa-flash":a,"fa-spin":o,"fa-spin-reverse":i,"fa-spin-pulse":l,"fa-pulse":c,"fa-fw":s,"fa-inverse":m,"fa-border":f,"fa-li":p,"fa-flip-horizontal":"horizontal"===d||"both"===d,"fa-flip-vertical":"vertical"===d||"both"===d},"fa-".concat(h),null!=h),u(t,"fa-rotate-".concat(b),null!=b&&0!==b),u(t,"fa-pull-".concat(y),null!=y),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map((function(e){return v[e]?e:null})).filter((function(e){return e}))}(r)),f(i.split(" ")))),b=E("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),k=E("mask",v(o)),j=(0,n.icon)(d,c(c(c(c({},h),b),k),{},{symbol:l,title:s,titleId:p}));if(!j)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var x=j.abstract,N={ref:t};return Object.keys(r).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(N[e]=r[e])})),O(x[0],N)}w.displayName="FontAwesomeIcon",w.propTypes={beat:o().bool,border:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,s=m(n,h);return o.attrs.style=c(c({},o.attrs.style),i),t.apply(void 0,[r.tag,c(c({},o.attrs),s)].concat(f(a)))}.bind(null,l.createElement)},48:function(e,t,r){r.r(t),r.d(t,{default:function(){return w},theme:function(){return g}});var n=r(7294),a=r(71),o=r(1958),l=r(3485),i=r(5051),c=r(4287),s=r(2248),u=r(7462),m=r(5793),f=r(1758),p="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",d=r(5893);var h=function(e){var t=e.children,r=e.theme,a=(0,f.Z)(),o=n.useMemo((function(){var e=null===a?r:function(e,t){return"function"==typeof t?t(e):(0,u.Z)({},e,t)}(a,r);return null!=e&&(e[p]=null!==a),e}),[r,a]);return(0,d.jsx)(m.Z.Provider,{value:o,children:t})},b=r(5341),y=r(3182);function v(e){var t=(0,y.Z)();return(0,d.jsx)(b.T.Provider,{value:"object"==typeof t?t:{},children:e.children})}var E=function(e){var t=e.children,r=e.theme;return(0,d.jsx)(h,{theme:r,children:(0,d.jsx)(v,{children:t})})},g=(0,r(8790).Z)({palette:{primary:{light:"#A1D8CE",main:"#4DB4A3",dark:"#009177"},secondary:{light:"#FB8AA4",main:"#F9537B"},info:{main:"#3A4249"}},components:{MuiAppBar:{styleOverrides:{colorDefault:{backgroundColor:"#A1D8CE"}}},MuiButton:{root:"#3A4249"},MuiMobileStepper:{styleOverrides:{dotActive:"#3A4249"}},MuiToolbar:{styleOverrides:{dense:{left:0,top:0}}}}}),w=function(){return n.createElement(n.Fragment,null,n.createElement(E,{theme:g},n.createElement("title",null,"Martyn Robotham Website"),n.createElement(s.default,null),n.createElement("div",{id:"home"},n.createElement(c.default,null)),n.createElement("div",{id:"about"},n.createElement("div",{className:"about"},n.createElement(a.default,null))),n.createElement("div",{id:"experience"},n.createElement("div",{className:"experience"},n.createElement(l.default,null))),n.createElement("div",{id:"portfolio"},n.createElement("div",{className:"portfolio"},n.createElement(o.default,null))),n.createElement("div",{id:"contact"},n.createElement("div",{className:"contact"},n.createElement(i.default,null)))))}},71:function(e,t,r){r.r(t);var n=r(7294);t.default=function(){return n.createElement("div",null,n.createElement("h2",null,"About me"),n.createElement("p",null,"I am an experienced Application / Web Developer specialising in front end development, but I also have the skill set to work full stack using the .NET frameworks since 2015 - with a strong focus on React, Angular and Progressive Web Applications (PWA). I have helped build customer portals and customer facing platforms to solve problems and help the business achieve their goals. Furthermore, I carry experience using SQL, Mongo, GraphQL and DynamoDB to store and retrieve data when building web applications."),n.createElement("p",null,"My current goals are to move into a senior developer role and continue to learn and improve as a developer, using technologies such as React, GraphQL & Node.js, through developing new features and implementing bug fixes. I am known to be an approachable, polite, hard-working, committed individual with a passion to grow as a programmer and as an individual with my skill set, expertise and knowledge, I am always looking for ways to improve, and I am always ready to help others achieve their long term goals."))}},5051:function(e,t,r){r.r(t);var n=r(7294),a=r(7606),o=r(8167),l=r(7190);t.default=function(){return n.createElement("div",{className:"footer"},n.createElement("div",null,n.createElement("span",null,"© ",(new Date).getFullYear()," Martyn Robotham")),n.createElement("div",{className:"icons"},n.createElement("a",{href:"mailto:martyn_robotham@hotmail.co.uk"},n.createElement(a.G,{className:"icon",icon:o.FU$,title:"Email"})),n.createElement("a",{href:"https://github.com/MartynRobotham"},n.createElement(a.G,{className:"icon",icon:l.zhw,title:"GitHub"})),n.createElement("a",{href:"https://www.linkedin.com/in/martyn-robotham-21617a87/"},n.createElement(a.G,{className:"icon",icon:l.D9H,title:"LinkedIn"})),n.createElement("a",{href:"https://stackoverflow.com/users/6200847/martyn93"},n.createElement(a.G,{className:"icon",icon:l.mGT,title:"Stack Overflow"}))))}},3485:function(e,t,r){r.r(t);var n=r(7294),a=r(6471);t.default=function(){return n.createElement(n.Fragment,null,n.createElement("h2",{style:{paddingTop:"5vh"}},"Work Experience"),n.createElement(a.default,null))}},4287:function(e,t,r){r.r(t);var n=r(7294),a=r(7606),o=r(7190),l=r(8167);t.default=function(){return n.createElement("div",{className:"test"},n.createElement("h1",null,"Martyn Robotham"),n.createElement("h2",null,"UI Developer with full stack experience"),n.createElement("div",{className:"icon-grid"},n.createElement("p",{className:"start-item"},n.createElement("a",{href:"mailto:martyn_robotham@hotmail.co.uk"},n.createElement(a.G,{icon:l.FU$,title:"Email"}))),n.createElement("p",{className:"end-item"},n.createElement("a",{href:"https://github.com/MartynRobotham"},n.createElement(a.G,{icon:o.zhw,title:"GitHub"}))),n.createElement("p",{className:"start-item"},n.createElement("a",{href:"https://www.linkedin.com/in/martyn-robotham-21617a87/"},n.createElement(a.G,{icon:o.D9H,title:"LinkedIn"}))),n.createElement("p",{className:"end-item"},n.createElement("a",{href:"https://stackoverflow.com/users/6200847/martyn93"},n.createElement(a.G,{icon:o.mGT,title:"Stack Overflow"})))))}},1958:function(e,t,r){r.r(t);var n=r(7294);t.default=function(){return n.createElement(n.Fragment,null,n.createElement("h2",null,"Other Projects"),n.createElement("div",{className:"portfolio-grid"},n.createElement("div",{className:"one"},n.createElement("h4",null,"This website"),n.createElement("p",null,"I have created this website using a range of technologies, primarily as a Gatsby PWA"),n.createElement("a",{href:"https://www.gatsbyjs.com/"},"Interested? Click here to visit")),n.createElement("div",{className:"two"},n.createElement("h4",null,"Blood donation project"),n.createElement("p",null,"A side project that gives a detailed history of my blood donations"),n.createElement("a",{href:"https://joyful-croquembouche-92ee5d.netlify.app/"},"Interested? Click here to visit")),n.createElement("div",{className:"three"},n.createElement("h4",null,"Open Source contributions"),n.createElement("p",null,"I have made small contributions to open source projects, including single-spa.js"),n.createElement("a",{href:"https://github.com/single-spa/single-spa.js.org/graphs/contributors"},"Interested? Click here to visit")),n.createElement("div",{className:"four"},n.createElement("h4",null,"Wedding"),n.createElement("p",{className:"no-interest"},"A project that was created to let us know which guests are attending & show a full itinerary of the day"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ef3d7bd66560de3a1347.js.map