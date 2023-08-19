"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95721],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(y,o(o({ref:n},s),{},{components:t})):a.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={},o="Static website hosting",l={unversionedId:"serverless/migrate_static",id:"serverless/migrate_static",title:"Static website hosting",description:"This solution is applicable to hosting pure front-end projects (React, vue, etc.) to Serverless platforms (Aliyun, Tencent, etc.).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/migrate_static.md",sourceDirName:"serverless",slug:"/serverless/migrate_static",permalink:"/en/docs/serverless/migrate_static",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/migrate_static.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Midway application migration",permalink:"/en/docs/serverless/migrate_midway"},next:{title:"Koa application migration",permalink:"/en/docs/serverless/migrate_koa"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Optional configuration",id:"optional-configuration",level:2},{value:"Modify managed directory",id:"modify-managed-directory",level:3},{value:"Modify managed prefix",id:"modify-managed-prefix",level:3},{value:"Configuration 404 page",id:"configuration-404-page",level:3},{value:"rewrite routing",id:"rewrite-routing",level:3},{value:"Modify the name of the deployed function",id:"modify-the-name-of-the-deployed-function",level:3}],s={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"static-website-hosting"},"Static website hosting"),(0,i.kt)("p",null,"This solution is applicable to hosting pure front-end projects (React, vue, etc.) to Serverless platforms (Aliyun, Tencent, etc.)."),(0,i.kt)("p",null,"Common scenes include hosting company official website, personal homepage, blog, etc."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"F. yml")," to any static project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: static\n  version: 3.0.0\n\npackage:\n  include:\n    -build ## Directory to Copy\n  exclude:\n    -package-lock.json ## Ignore package-lock.json files\n\ncustom:\n  customDomain:\n    domainName: auto ## automatically generates domain name\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Sometimes package-lock.json files will cause the deployment package to be too large (enter dev dependencies).")),(0,i.kt)("p",null,"Add dev dependency ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.36"\n    ...\n  },\n  "scripts": {\n    "deploy": "npm run build && midway-bin deploy --skipBuild"\n  }\n}\n')),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run deploy"),"."),(0,i.kt)("p",null,"Or use a different npm package to accelerate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "scripts": {\n    "deploy": "npm run build && midway-bin deploy --skipBuild --npm=cnpm ",\n    ...\n  }\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--skipBuild")," parameter is used here to skip the build of the function. ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," connects to the front-end build command.")),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directory is used as the managed root directory. When you access the",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"route, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/index.html")," is automatically searched."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/=> /index.html"),(0,i.kt)("li",{parentName:"ul"},"/api/ => /api/index.html")),(0,i.kt)("h2",{id:"optional-configuration"},"Optional configuration"),(0,i.kt)("p",null,"In addition to the default configuration, we can do some additional configuration for static websites."),(0,i.kt)("h3",{id:"modify-managed-directory"},"Modify managed directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: static\n  version: 3.0.0\n  config:\n    rootDir: public          ## hosting directory becomes public\n\npackage:\n  include: the directory to be copied by public ## changes with the configured managed Directory\n")),(0,i.kt)("h3",{id:"modify-managed-prefix"},"Modify managed prefix"),(0,i.kt)("p",null,"Sometimes a unified route prefix is required for deployment, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/*"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: static\n  version: 3.0.0\n  config:\n    prefix: /api\n\npackage:\n  include: build\n")),(0,i.kt)("p",null,"In this way, all/",(0,i.kt)("em",{parentName:"p"},"will become/api/"),"."),(0,i.kt)("h3",{id:"configuration-404-page"},"Configuration 404 page"),(0,i.kt)("p",null,"Ordinary routes are based on managed directory structures and files. If a file that does not exist is accessed, a 404 is returned. We can specify a 404 page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: static\n  version: 3.0.0\n  config\n    notFoundUrl: /404.html\n\npackage:\n  include: build\n")),(0,i.kt)("h3",{id:"rewrite-routing"},"rewrite routing"),(0,i.kt)("p",null,"Sometimes, we want to access some specific routes to a specific file. For example, we want to transfer all route requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"/index.html"),", and then let the front-end route process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: static\n  version: 3.0.0\n  config:\n    rewrite:\n        /(.*): /index.html\n\npackage:\n  include: build\n")),(0,i.kt)("p",null,"You can write multiple rewrite, and the rules are the same as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/koajs/rewrite"},"koa-rewrite"),"."),(0,i.kt)("p",null,"To exclude certain directories, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@not")," syntax."),(0,i.kt)("p",null,"For example, exclude static directories."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"deployType:\n  type: static\n  version: 3.0.0\n  config:\n    rootDir: build\n    rewrite:\n      '@not /static/(.*)': /index.html\n")),(0,i.kt)("h3",{id:"modify-the-name-of-the-deployed-function"},"Modify the name of the deployed function"),(0,i.kt)("p",null,"You can use the name field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n    type: static\n  version: 3.0.0\n  Name: app_idx ## function name\n\npackage:\n  include: the directory to be copied by public ## changes with the configured managed Directory\n")))}u.isMDXComponent=!0}}]);