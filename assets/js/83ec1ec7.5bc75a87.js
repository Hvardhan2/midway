"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22086],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||p;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const p={},l="Midway \u5e94\u7528\u8fc1\u79fb",i={unversionedId:"serverless/migrate_midway",id:"serverless/migrate_midway",title:"Midway \u5e94\u7528\u8fc1\u79fb",description:"Midway Serverless \u63d0\u4f9b\u4e86\u4e00\u5957\u901a\u7528\u7684\u5e94\u7528\u8fc1\u79fb\u65b9\u6848\uff0c\u5c06\u539f\u6709\u5e94\u7528\u5c3d\u53ef\u80fd\u4e0d\u4fee\u6539\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u53d1\u5e03\u5230\u51fd\u6570\u5e73\u53f0\u3002\u4f7f\u7528\u6b64\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06\u539f\u6709\u7684 midway \u5e94\u7528\u5c3d\u53ef\u80fd\u5feb\u901f\u7b80\u5355\u7684\u8fc1\u79fb\u5230\u51fd\u6570\u5e73\u53f0\u8fdb\u884c\u6258\u7ba1\uff0c\u4eab\u53d7\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u5f39\u6027\u7ea2\u5229\u3002",source:"@site/docs/serverless/migrate_midway.md",sourceDirName:"serverless",slug:"/serverless/migrate_midway",permalink:"/docs/serverless/migrate_midway",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/migrate_midway.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u6807\u51c6\u5e94\u7528\u8fc1\u79fb\u65b9\u6848",permalink:"/docs/serverless/app_deploy_serverless"},next:{title:"\u9759\u6001\u7f51\u7ad9\u6258\u7ba1",permalink:"/docs/serverless/migrate_static"}},o={},s=[{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"@midway/koa",id:"midwaykoa",level:2},{value:"@midway/express",id:"midwayexpress",level:2},{value:"@midwayjs/web",id:"midwayjsweb",level:2},{value:"\u8fc1\u79fb\u65b9\u6848\u7684 Egg \u9ed8\u8ba4\u914d\u7f6e",id:"\u8fc1\u79fb\u65b9\u6848\u7684-egg-\u9ed8\u8ba4\u914d\u7f6e",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u9ed8\u8ba4\u60c5\u51b5",id:"\u9ed8\u8ba4\u60c5\u51b5",level:2},{value:"\u4fee\u6539\u9ed8\u8ba4\u90e8\u7f72\u7684\u51fd\u6570\u540d",id:"\u4fee\u6539\u9ed8\u8ba4\u90e8\u7f72\u7684\u51fd\u6570\u540d",level:3},{value:"\u963f\u91cc\u4e91",id:"\u963f\u91cc\u4e91",level:3},{value:"\u817e\u8baf\u4e91",id:"\u817e\u8baf\u4e91",level:3},{value:"\u4e00\u4e9b\u9650\u5236",id:"\u4e00\u4e9b\u9650\u5236",level:2}],m={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"midway-\u5e94\u7528\u8fc1\u79fb"},"Midway \u5e94\u7528\u8fc1\u79fb"),(0,r.kt)("p",null,"Midway Serverless \u63d0\u4f9b\u4e86\u4e00\u5957\u901a\u7528\u7684\u5e94\u7528\u8fc1\u79fb\u65b9\u6848\uff0c\u5c06\u539f\u6709\u5e94\u7528\u5c3d\u53ef\u80fd\u4e0d\u4fee\u6539\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u53d1\u5e03\u5230\u51fd\u6570\u5e73\u53f0\u3002\u4f7f\u7528\u6b64\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06\u539f\u6709\u7684 midway \u5e94\u7528\u5c3d\u53ef\u80fd\u5feb\u901f\u7b80\u5355\u7684\u8fc1\u79fb\u5230\u51fd\u6570\u5e73\u53f0\u8fdb\u884c\u6258\u7ba1\uff0c\u4eab\u53d7\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u5f39\u6027\u7ea2\u5229\u3002"),(0,r.kt)("h2",{id:"\u9650\u5236"},"\u9650\u5236"),(0,r.kt)("p",null,"\u5f53\u524d\u53ea\u6709\u7eaf ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/express"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u9879\u76ee\uff08\u7eaf Http\uff09\u624d\u53ef\u8fc1\u79fb\u3002"),(0,r.kt)("h2",{id:"midwaykoa"},"@midway/koa"),(0,r.kt)("p",null,"Serverless \u73af\u5883\u6307\u7684\u662f\u963f\u91cc\u4e91 FC\uff0c\u817e\u8baf\u4e91\u7b49\u51fd\u6570\u73af\u5883\u3002Midway \u53ef\u4ee5\u5c06\u73b0\u6709\u7684 Web \u9879\u76ee\u90e8\u7f72\u4e3a Serverless \u5e94\u7528\uff0c\u8fd9\u91cc\u4ee5\u90e8\u7f72\u5230\u963f\u91cc\u4e91\u51fd\u6570\u8ba1\u7b97\u4f5c\u4e3a\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"1\u3001\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"f.yml")," \u6587\u4ef6\u5230\u4f60\u7684\u9879\u76ee\u6839\u76ee\u5f55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  hello_koa tree\n.\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 f.yml                               # Midway Serverless \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-midway-app         ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\uff0c\u4e00\u822c\u6307\u5e94\u7528\u540d\n\nprovider:\n  name: aliyun                 ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: koa                    ## \u90e8\u7f72\u7684\u5e94\u7528\u7c7b\u578b\n  version: 3.0.0\n")),(0,r.kt)("p",null,"2\u3001\u4ee3\u7801\u4fee\u6539"),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," \u91cd\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),"\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a app\u3002"),(0,r.kt)("p",null,"\u4fee\u6539\u540e\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u83b7\u53d6\u6846\u67b6\nconst WebFramework = require('@midwayjs/koa').Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\nmodule.exports = async () => {\n  // \u52a0\u8f7d\u6846\u67b6\u5e76\u6267\u884c\n  await Bootstrap.run();\n  // \u83b7\u53d6\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\n  const container = Bootstrap.getApplicationContext();\n  // \u83b7\u53d6 koa framework\n  const framework = container.get(WebFramework);\n  // \u8fd4\u56de app \u5bf9\u8c61\n  return framework.getApplication();\n};\n")),(0,r.kt)("p",null,"3\u3001\u6dfb\u52a0\u53d1\u5e03\u65f6\u7684\u6784\u5efa\u94a9\u5b50"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u52a0\u5165\u4e0b\u9762\u7684\u8fd9\u6bb5\uff0c\u7528\u4e8e\u5728\u53d1\u5e03\u65f6\u81ea\u52a8\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "midway-integration": {\n    "lifecycle": {\n      "before:package:cleanup": "npm run build"\n    }\n  },\n    "scripts": {\n    "deploy": "midway-bin deploy"\n  }\n')),(0,r.kt)("p",null,"3\u3001\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u5373\u53ef\uff0c\u53d1\u5e03\u540e\uff0c\u963f\u91cc\u4e91\u4f1a\u8f93\u51fa\u4e00\u4e2a\u4e34\u65f6\u53ef\u7528\u7684\u57df\u540d\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\u5373\u53ef\u3002"),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1600835297676-1753de7a-fb0d-46ca-98f0-944eba5b2f2b.png#height=193&id=XpZAN&margin=%5Bobject%20Object%5D&name=image.png&originHeight=193&originWidth=1219&originalType=binary&ratio=1&size=35152&status=done&style=none&width=1219",width:"1219"}),(0,r.kt)("p",null,"\u5982\u9700\u66f4\u8be6\u7ec6\u7684\u53d1\u5e03\u6587\u6863\uff0c\u8bf7\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"./serverless/deploy_aliyun_faq"},(0,r.kt)("strong",{parentName:"a"},"Serverless \u53d1\u5e03 FAQ")),"\u3002"),(0,r.kt)("h2",{id:"midwayexpress"},"@midway/express"),(0,r.kt)("p",null,"1\u3001\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"f.yml")," \u6587\u4ef6\u5230\u4f60\u7684\u9879\u76ee\u6839\u76ee\u5f55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  hello_express tree\n.\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 f.yml                               # Midway Serverless \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-midway-app             ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\uff0c\u4e00\u822c\u6307\u5e94\u7528\u540d\n\nprovider:\n  name: aliyun                     ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: express                    ## \u90e8\u7f72\u7684\u5e94\u7528\u7c7b\u578b\n  version: 3.0.0\n")),(0,r.kt)("p",null,"2\u3001\u4ee3\u7801\u4fee\u6539"),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," \u91cd\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),"\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a app\u3002"),(0,r.kt)("p",null,"\u4fee\u6539\u540e\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u83b7\u53d6\u6846\u67b6\nconst WebFramework = require('@midwayjs/express').Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\nmodule.exports = async () => {\n  // \u52a0\u8f7d\u6846\u67b6\u5e76\u6267\u884c\n  await Bootstrap.run();\n  // \u83b7\u53d6\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\n  const container = Bootstrap.getApplicationContext();\n  // \u83b7\u53d6 express framework\n  const framework = container.get(WebFramework);\n  // \u8fd4\u56de app \u5bf9\u8c61\n  return framework.getApplication();\n};\n")),(0,r.kt)("p",null,"3\u3001\u6dfb\u52a0\u53d1\u5e03\u65f6\u7684\u6784\u5efa\u94a9\u5b50"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u52a0\u5165\u4e0b\u9762\u7684\u8fd9\u6bb5\uff0c\u7528\u4e8e\u5728\u53d1\u5e03\u65f6\u81ea\u52a8\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "midway-integration": {\n    "lifecycle": {\n      "before:package:cleanup": "npm run build"\n    }\n  },\n    "scripts": {\n    "deploy": "midway-bin deploy"\n  }\n}\n')),(0,r.kt)("p",null,"3\u3001\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u5373\u53ef\uff0c\u53d1\u5e03\u540e\uff0c\u963f\u91cc\u4e91\u4f1a\u8f93\u51fa\u4e00\u4e2a\u4e34\u65f6\u53ef\u7528\u7684\u57df\u540d\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\u5373\u53ef\u3002"),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1600835297676-1753de7a-fb0d-46ca-98f0-944eba5b2f2b.png"}),(0,r.kt)("p",null,"\u5982\u9700\u66f4\u8be6\u7ec6\u7684\u53d1\u5e03\u6587\u6863\uff0c\u8bf7\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"./serverless/deploy_aliyun_faq"},(0,r.kt)("strong",{parentName:"a"},"Serverless \u53d1\u5e03 FAQ")),"\u3002"),(0,r.kt)("h2",{id:"midwayjsweb"},"@midwayjs/web"),(0,r.kt)("p",null,"1\u3001\u5728\u4ee3\u7801\u6839\u76ee\u5f55\u65b0\u589e\u52a0\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"f.yml"),"\uff0c\u6700\u4e3a\u7cbe\u7b80\u7684\u5185\u5bb9\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-egg-demo          ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun                ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: egg                   ## \u90e8\u7f72\u7684\u5e94\u7528\u7c7b\u578b\n  version: 3.0.0\n\npackage:\n  include:\n    - public                  ## \u5982\u679c\u6709\u9759\u6001\u6587\u4ef6\u76ee\u5f55\uff0c\u5199\u5728\u8fd9\u91cc\u4f1a\u88ab\u81ea\u52a8\u62f7\u8d1d\n  exclude:\n    - package-lock.json       ## \u5ffd\u7565 package-lock.json \u6587\u4ef6\n\ncustom:\n  customDomain:\n    domainName: auto          ## \u81ea\u52a8\u751f\u6210\u57df\u540d\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6709\u65f6\u5019 package-lock.json \u6587\u4ef6\u4f1a\u9020\u6210\u90e8\u7f72\u5305\u8fc7\u5927\uff08\u5c06 dev \u4f9d\u8d56\u6253\u5165\uff09\u3002")),(0,r.kt)("p",null,"2\u3001\u4fee\u6539\u4ee3\u7801\u6839\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," \u4e3a\u4e0b\u9762\u7684\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { Bootstrap } = require('@midwayjs/bootstrap');\nconst { MidwayFrameworkService } = require('@midwayjs/core');\nconst { join } = require('path');\n\nmodule.exports = async (options) => {\n  // \u52a0\u8f7d\u6846\u67b6\u5e76\u6267\u884c\n  await Bootstrap\n    .configure({\n      appDir: __dirname,\n      baseDir: join(__dirname, './dist'),\n      ...options\n    })\n    .run();\n  const applicationContext = Bootstrap.getApplicationContext();\n  const frameworkService = applicationContext.get(MidwayFrameworkService);\n  // \u8fd4\u56de app \u5bf9\u8c61\n  return frameworkService.getMainApp();\n};\n\n")),(0,r.kt)("p",null,"3\u3001\u4e3a\u4e86\u5728\u53d1\u5e03\u65f6\u81ea\u52a8\u6267\u884c\u7f16\u8bd1\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "xxxxxx",\n  "version": "xxxx",\n  .....\n  "scripts": {\n        "deploy": "midway-bin deploy",\n    ....\n    },\n  "midway-integration": {\n    "lifecycle": {\n      "before:package:cleanup": "npm run build"\n    }\n  },\n    "egg": {\n    "framework": "@midwayjs/web"\n  }\n}\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684\u8981\u70b9\u6709\u4e24\u4e2a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001\u8fd9\u91cc\u6307\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"egg")," \u5b57\u6bb5\uff0c\u7528\u4e8e\u6307\u5b9a\u7279\u5b9a\u7684 egg \u4e0a\u5c42\u6846\u67b6"),(0,r.kt)("li",{parentName:"ul"},"2\u3001\u8fd9\u91cc\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"midway-integration")," \u5b57\u6bb5\uff0c\u7528\u4e8e\u652f\u6301 midway \u5e94\u7528\u4f53\u7cfb\u4e0b\u539f\u6765\u7684\u7f16\u8bd1\u3002"),(0,r.kt)("li",{parentName:"ul"},"3\u3001\u589e\u52a0 deploy \u811a\u672c")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u4e86\u81ea\u5df1\u7684 egg \u4e0a\u5c42\u6846\u67b6\uff0c\u8fd9\u91cc\u7684 egg.framework \u53ef\u4ee5\u53d8\u4e3a\u81ea\u5df1\u7684\u5305\u540d\u3002")),(0,r.kt)("h3",{id:"\u8fc1\u79fb\u65b9\u6848\u7684-egg-\u9ed8\u8ba4\u914d\u7f6e"},"\u8fc1\u79fb\u65b9\u6848\u7684 Egg \u9ed8\u8ba4\u914d\u7f6e"),(0,r.kt)("p",null,"\u5f53\u524d\u8fc1\u79fb\u65b9\u6848\u4f1a\u589e\u52a0\u4e00\u4e9b\u9ed8\u8ba4\u914d\u7f6e\uff0c\u7528\u4e8e\u5728\u51fd\u6570\u4f53\u7cfb\u4e0b\u66f4\u597d\u8fd0\u884c\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u65e0\u9700\u4fee\u6539"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default\nconst os = require('os');\nexports.logger = {\n  dir: os.tmpdir(),\n};\n\nexports.rundir = os.tmpdir();\n\nexports.static = {\n  buffer: true,\n};\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u51fd\u6570\u73af\u5883\u78c1\u76d8\u4e0d\u53ef\u5199\uff0c\u6211\u4eec\u5c06\u9ed8\u8ba4\u7684\u65e5\u5fd7\u76ee\u5f55\u90fd\u8c03\u6574\u4e3a\u4e86\u4e34\u65f6\u76ee\u5f55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// plugin\n\n'use strict';\n\nexports.i18n = false;\nexports.watcher = false;\nexports.development = false;\nexports.logrotator = false;\nexports.schedule = false;\nexports.static = false;\n")),(0,r.kt)("p",null,"\u548c\u9ed8\u8ba4 egg \u4e0d\u540c\u7684\u662f\uff0c\u8fd9\u91cc\u9ed8\u8ba4\u5173\u95ed\u4e86 static \u63d2\u4ef6\uff0c\u539f\u56e0\u662f\uff0c\u5982\u679c\u9ed8\u8ba4\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"app/public")," \u76ee\u5f55\uff0c\u63d2\u4ef6\u542f\u52a8\u65f6\u4f1a\u521b\u5efa\u4e00\u4e2a\uff0c\u7531\u4e8e\u670d\u52a1\u5668\u78c1\u76d8\u4e0d\u53ef\u5199\uff0c\u5c31\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6709 static \u63d2\u4ef6\u7684\u9700\u6c42\uff0c\u8bf7",(0,r.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6253\u5f00"),"\uff0c\u5e76",(0,r.kt)("strong",{parentName:"p"},"\u52a1\u5fc5\u4fdd\u8bc1\u5b58\u5728")," ",(0,r.kt)("inlineCode",{parentName:"p"},"app/public")," \u6216\u8005\u76f8\u5e94\u7684\u76ee\u5f55\u3002"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," \u76ee\u5f55\u5728\u6839\u76ee\u5f55\uff0c\u8bf7\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"f.yml")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.include")," \u5b57\u6bb5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-egg-demo         ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun               ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType: egg              ## \u90e8\u7f72\u7684\u5e94\u7528\u7c7b\u578b\n\npackage:\n  include:\n    - public                 ## \u5982\u679c\u6709\u9759\u6001\u6587\u4ef6\u76ee\u5f55\uff0c\u5199\u5728\u8fd9\u91cc\u4f1a\u88ab\u81ea\u52a8\u62f7\u8d1d\n  exclude:\n    - package-lock.json      ## \u5ffd\u7565 package-lock.json \u6587\u4ef6\n")),(0,r.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e Scripts \u811a\u672c\u548c dev \u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," \uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.36"\n    ...\n  },\n  "scripts": {\n    "deploy": "midway-bin deploy",\n    ...\n  }\n}\n')),(0,r.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u4e0d\u540c\u7684 npm \u5305\u52a0\u901f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "scripts": {\n    "deploy": "midway-bin deploy --npm=cnpm",\n    ...\n  }\n}\n')),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5355\u72ec\u6267\u884c\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx midway-bin deploy                   ## deploy by npm\n$ npx midway-bin deploy --npm=cnpm        ## deploy by cnpm\n")),(0,r.kt)("h2",{id:"\u9ed8\u8ba4\u60c5\u51b5"},"\u9ed8\u8ba4\u60c5\u51b5"),(0,r.kt)("h3",{id:"\u4fee\u6539\u9ed8\u8ba4\u90e8\u7f72\u7684\u51fd\u6570\u540d"},"\u4fee\u6539\u9ed8\u8ba4\u90e8\u7f72\u7684\u51fd\u6570\u540d"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 name \u5b57\u6bb5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-demo              ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun                ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: egg\n  name: app_idx               ## \u51fd\u6570\u540d\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 deployType \u65f6 aggregation \u5b57\u6bb5\u4e0d\u751f\u6548\u3002")),(0,r.kt)("h3",{id:"\u963f\u91cc\u4e91"},"\u963f\u91cc\u4e91"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u53d1\u5e03\u4e3a http \u89e6\u53d1\u5668\uff0c\u5982\u679c\u9700\u8981 API \u7f51\u5173\uff0c\u53ef\u4ee5\u81ea\u884c\u6309\u7167 f.yml \u7684\u683c\u5f0f\u8fdb\u884c functions \u7ed3\u6784\u7684\u4fee\u6539\u914d\u7f6e\uff0c\u540c\u65f6\uff0c\u5728 API \u7f51\u5173\u5904\u914d\u7f6e\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"/*")," \u4e2d\u8f6c\u5230\u8be5\u51fd\u6570\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"\u817e\u8baf\u4e91"},"\u817e\u8baf\u4e91"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u53d1\u5e03\u4e3a API \u7f51\u5173\u89e6\u53d1\u5668\uff0c\u540c\u65f6\u4f1a\u81ea\u52a8\u914d\u7f6e\u7f51\u5173\u8def\u7531\u3002"),(0,r.kt)("h2",{id:"\u4e00\u4e9b\u9650\u5236"},"\u4e00\u4e9b\u9650\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 egg-socketio \u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u6587\u4ef6\u4e0a\u4f20\u7b49\u7f51\u5173\u65e0\u6cd5\u652f\u6301\u7684\u80fd\u529b")))}c.isMDXComponent=!0}}]);