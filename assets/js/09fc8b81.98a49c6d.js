"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={slug:"release/3.11.0",title:"Release 3.11.0",authors:["harry"],tags:["release"]},o=void 0,i={permalink:"/blog/release/3.11.0",source:"@site/blog/2023-03-27-release-3.11.md",title:"Release 3.11.0",description:"\u5347\u7ea7\u8bf7\u53c2\u8003  \u5982\u4f55\u66f4\u65b0 Midway \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002",date:"2023-03-27T00:00:00.000Z",formattedDate:"2023\u5e743\u670827\u65e5",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.245,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.11.0",title:"Release 3.11.0",authors:["harry"],tags:["release"]},prevItem:{title:"\u79fb\u9664 Node.js v14 \u7684 CI \u73af\u5883",permalink:"/blog/remove-node-14-ci"},nextItem:{title:"Release 3.10.0",permalink:"/blog/release/3.10.0"}},p={authorsImageUrls:[void 0]},c=[{value:"\u5b89\u5168\u6027\u66f4\u65b0",id:"\u5b89\u5168\u6027\u66f4\u65b0",level:2},{value:"New Feature",id:"new-feature",level:2},{value:"\u7cbe\u7ec6\u5316\u7684 Mock \u80fd\u529b",id:"\u7cbe\u7ec6\u5316\u7684-mock-\u80fd\u529b",level:3},{value:"\u4e2d\u95f4\u4ef6\u7684 Match/Ignore",id:"\u4e2d\u95f4\u4ef6\u7684-matchignore",level:3},{value:"\u672c\u5730\u5b9a\u65f6\u4efb\u52a1\u7ec4\u4ef6",id:"\u672c\u5730\u5b9a\u65f6\u4efb\u52a1\u7ec4\u4ef6",level:3},{value:"\u6807\u7b7e\u7ec4\u4ef6",id:"\u6807\u7b7e\u7ec4\u4ef6",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5347\u7ea7\u8bf7\u53c2\u8003  ",(0,a.kt)("a",{parentName:"p",href:"/docs/how_to_update_midway"},"\u5982\u4f55\u66f4\u65b0 Midway")," \u4e2d\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002"),(0,a.kt)("p",null,"\u5f88\u9ad8\u5174\u7ed9\u5927\u5bb6\u4ecb\u7ecd\u6211\u4eec\u7684 3.11 \u65b0\u7248\u672c\u3002"),(0,a.kt)("h2",{id:"\u5b89\u5168\u6027\u66f4\u65b0"},"\u5b89\u5168\u6027\u66f4\u65b0"),(0,a.kt)("p",null,"Upload \u7ec4\u4ef6\u589e\u52a0\u4e86\u5b89\u5168\u6027\u6027\u80fd\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," \u4e0a\u4f20\u6a21\u5f0f\u4e0b\uff0c\u6211\u4eec\u53d1\u73b0\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6587\u4ef6\u7684\u540e\u7f00\u548c\u5b9e\u9645\u5185\u5bb9\u4e0d\u5339\u914d\uff0c\u5bfc\u81f4\u53ef\u80fd\u4f1a\u5728\u670d\u52a1\u5668\u88ab\u52a8\u6267\u884c\u7684\u5b89\u5168\u6027\u6f0f\u6d1e\u3002"),(0,a.kt)("p",null,"\u65b0\u7248\u672c\u6211\u4eec\u589e\u52a0\u4e86\u4e00\u4e2a MIME \u914d\u7f6e\uff0c\u53ef\u4ee5\u5728\u4e0a\u4f20\u65f6\u68c0\u67e5\u6269\u5c55\u540d\u4e4b\u5916\uff0c\u989d\u5916\u68c0\u67e5 MIME \u7684\u7c7b\u578b\uff0c\u4f1a\u66f4\u52a0\u5b89\u5168\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  upload: {\n    // ...\n    // \u4ec5\u5141\u8bb8\u4e0b\u9762\u8fd9\u4e9b\u6587\u4ef6\u7c7b\u578b\u53ef\u4ee5\u4e0a\u4f20\n    mimeTypeWhiteList: {\n      '.jpg': 'image/jpeg',\n    }\n  },\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\u53ef\u4ee5\u67e5\u770b\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensions/upload"},"Upload \u7ec4\u4ef6"),"\u3002"),(0,a.kt)("h2",{id:"new-feature"},"New Feature"),(0,a.kt)("h3",{id:"\u7cbe\u7ec6\u5316\u7684-mock-\u80fd\u529b"},"\u7cbe\u7ec6\u5316\u7684 Mock \u80fd\u529b"),(0,a.kt)("p",null,"\u57fa\u4e8e\u6846\u67b6\u65b0\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Mock")," \u88c5\u9970\u5668\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5728\u4e0d\u540c\u7684\u9636\u6bb5\u8fdb\u884c\u6570\u636e\u6a21\u62df\u3002\u540c\u65f6\u4f5c\u4e3a\u903b\u8f91\u7684\u4e00\u90e8\u5206\uff0c\u8fd9\u4e2a\u529f\u80fd\u53ef\u4ee5\u5728\u5f00\u53d1\u548c\u6d4b\u8bd5\u671f\u88ab\u81ea\u52a8\u6267\u884c\uff0c\u65b9\u4fbf\u7528\u6237\u7684\u5f00\u53d1\u671f\u6a21\u62df\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u6587\u6863\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/mock"},"\u6570\u636e\u6a21\u62df"),"\u3002"),(0,a.kt)("h3",{id:"\u4e2d\u95f4\u4ef6\u7684-matchignore"},"\u4e2d\u95f4\u4ef6\u7684 Match/Ignore"),(0,a.kt)("p",null,"Middleware \u7684\u529f\u80fd\u8fdb\u4e00\u6b65\u589e\u5f3a\uff0cmatch \u548c ignore \u73b0\u5728\u53ef\u4ee5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," \uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"regexp"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"function")," \u6216\u8005\u4ed6\u4eec\u7684\u6570\u7ec4\u7ec4\u5408\u5f62\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u672c\u5730\u5b9a\u65f6\u4efb\u52a1\u7ec4\u4ef6"},"\u672c\u5730\u5b9a\u65f6\u4efb\u52a1\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u63d0\u4f9b\u4e86 bull \u7ec4\u4ef6\uff0c\u7528\u4e8e\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u4f9d\u65e7\u9700\u8981\u5355\u673a\u7684\u5b9a\u65f6\u4efb\u52a1\u6765\u8d4b\u503c\u5b8c\u6210\u4e00\u4e9b\u4e8b\u9879\uff0c\u539f\u6709\u7684 task \u7ec4\u4ef6\u5b9e\u73b0\u4e86 cron \u7684\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u5176\u5206\u79bb\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"cron")," \u7ec4\u4ef6\uff0c\u7ee7\u7eed\u63d0\u4f9b\u80fd\u529b\u652f\u6301\u3002 "),(0,a.kt)("p",null,"\u6587\u6863\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensions/cron"},"cron \u7ec4\u4ef6"),"\u3002"),(0,a.kt)("h3",{id:"\u6807\u7b7e\u7ec4\u4ef6"},"\u6807\u7b7e\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u4e00\u79cd\u62bd\u8c61\u5316\u7684\u670d\u52a1\u7aef\u80fd\u529b\uff0c\u7528\u4e8e\u6570\u636e\u7b5b\u9009\u548c\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u6587\u6863\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensions/tags"},"\u6807\u7b7e\u7ec4\u4ef6"),"\u3002"))}m.isMDXComponent=!0}}]);