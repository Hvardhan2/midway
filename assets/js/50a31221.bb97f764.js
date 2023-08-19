"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={slug:"remove-node-14-ci",title:"\u79fb\u9664 Node.js v14 \u7684 CI \u73af\u5883",authors:["harry"],tags:["node"]},l=void 0,i={permalink:"/blog/remove-node-14-ci",source:"@site/blog/2023-08-13-remove-node-14-ci.md",title:"\u79fb\u9664 Node.js v14 \u7684 CI \u73af\u5883",description:"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\uff0c\u6211\u4eec\u53d1\u73b0\u8d8a\u6765\u8d8a\u591a\u7684\u5e93\u79fb\u9664\u4e86 Node.js v14 \u7684\u652f\u6301\u3002",date:"2023-08-13T00:00:00.000Z",formattedDate:"2023\u5e748\u670813\u65e5",tags:[{label:"node",permalink:"/blog/tags/node"}],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"remove-node-14-ci",title:"\u79fb\u9664 Node.js v14 \u7684 CI \u73af\u5883",authors:["harry"],tags:["node"]},prevItem:{title:"Release 3.12.0",permalink:"/blog/release/3.12.0"},nextItem:{title:"Release 3.11.0",permalink:"/blog/release/3.11.0"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\uff0c\u6211\u4eec\u53d1\u73b0\u8d8a\u6765\u8d8a\u591a\u7684\u5e93\u79fb\u9664\u4e86 Node.js v14 \u7684\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u6709\u4e9b\u5e93\u662f\u5347\u7ea7\u7684\u5927\u7248\u672c\uff0c\u6709\u4e9b\u5e93\u4ec5\u4ec5\u53ea\u5347\u7ea7 minor \u7248\u672c\uff0c\u8fd9\u4f7f\u5f97\u4f9d\u8d56\u4ed6\u4eec\u7684\u4e1a\u52a1\u3001\u6a21\u5757\u4e43\u81f3\u6846\u67b6\u90fd\u5f88\u96be\u4fe1\u4efb\u793e\u533a\u7684 SemVer \u7248\u672c\u7ea6\u5b9a\u4e86\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u4fdd\u6301 Midway \u7684\u5355\u6d4b\u6b63\u5e38\u8fd0\u884c\uff0c\u4ece v3.12.0 \u5f00\u59cb\uff0cMidway \u79fb\u9664\u4e86 Node.js v14 \u7684 CI\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u65e0\u6cd5\u6d4b\u8bd5 Node.js v16 \u4ee5\u4e0b\u793e\u533a\u5e93\u7684\u517c\u5bb9\u6027\uff0c\u53ea\u80fd\u9760\u793e\u533a\u5e93\u66f4\u65b0\u7684 Changelog \u4ee5\u53ca\u6211\u4eec\u7684\u7ecf\u9a8c\u6765\u4fdd\u8bc1\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u53d1\u73b0\u67d0\u4e9b\u5e93\u53ea\u652f\u6301\u7279\u5b9a\u7248\u672c\u7684 Node.js\uff0c\u6211\u4eec\u4f1a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u8fdb\u884c\u7248\u672c\u9650\u5236\uff0c\u5982\u679c\u4f60\u53d1\u73b0\u67d0\u4e9b\u5e93\u7684\u7248\u672c\u66f4\u65b0\u65e0\u6cd5\u5728\u4f4e\u7248\u672c Node.js \u4e2d\u8fd0\u884c\uff0c\u4e14 Midway \u7684\u7ec4\u4ef6\u6ca1\u6709\u8fdb\u884c\u9650\u5236\uff0c\u8bf7\u901a\u77e5\u6211\u4eec\u3002"),(0,o.kt)("p",null,"\u6700\u540e\u518d\u6b21\u63d0\u9192\uff0c\u5982\u679c\u6ca1\u6709\u5f3a\u9700\u6c42\uff0c\u8bf7\u4f7f\u7528 Node.js v16 \u4ee5\u4e0a\u7248\u672c\u3002"))}m.isMDXComponent=!0}}]);