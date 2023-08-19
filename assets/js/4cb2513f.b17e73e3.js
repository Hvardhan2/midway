"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45467],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var a=n(67294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,p=function(t,e){if(null==t)return{};var n,a,p={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,p=t.mdxType,r=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=c(n),k=p,u=m["".concat(o,".").concat(k)]||m[k]||g[k]||r;return n?a.createElement(u,l(l({ref:e},s),{},{components:n})):a.createElement(u,l({ref:e},s))}));function u(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[m]="string"==typeof t?t:p,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},31626:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),p=(n(67294),n(3905));const r={},l="Application \u548c Context",i={unversionedId:"req_res_app",id:"req_res_app",title:"Application \u548c Context",description:"Midway \u7684\u5e94\u7528\u4f1a\u540c\u65f6\u5bf9\u5916\u66b4\u9732\u4e0d\u540c\u534f\u8bae\uff0c\u6bd4\u5982 Http\uff0cWebSocket \u7b49\u7b49\uff0c\u8fd9\u91cc\u6bcf\u4e2a\u534f\u8bae\u5bf9 Midway \u6765\u8bf4\u90fd\u662f\u7531\u72ec\u7acb\u7684\u7ec4\u4ef6\u63d0\u4f9b\u7684\u3002",source:"@site/docs/req_res_app.md",sourceDirName:".",slug:"/req_res_app",permalink:"/docs/req_res_app",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/req_res_app.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Web \u4e2d\u95f4\u4ef6",permalink:"/docs/middleware"},next:{title:"\u670d\u52a1\u548c\u6ce8\u5165",permalink:"/docs/service"}},o={},c=[{value:"\u5b9a\u4e49\u7ea6\u5b9a",id:"\u5b9a\u4e49\u7ea6\u5b9a",level:2},{value:"Application",id:"application",level:2},{value:"\u83b7\u53d6\u65b9\u5f0f",id:"\u83b7\u53d6\u65b9\u5f0f",level:3},{value:"Main Application",id:"main-application",level:3},{value:"getAppDir",id:"getappdir",level:3},{value:"getBaseDir",id:"getbasedir",level:3},{value:"getEnv",id:"getenv",level:3},{value:"getApplicationContext",id:"getapplicationcontext",level:3},{value:"getConfig",id:"getconfig",level:3},{value:"getLogger",id:"getlogger",level:3},{value:"getCoreLogger",id:"getcorelogger",level:3},{value:"getProjectName",id:"getprojectname",level:3},{value:"setAttr &amp; getAttr",id:"setattr--getattr",level:3},{value:"getNamespace",id:"getnamespace",level:3},{value:"Context",id:"context",level:2},{value:"\u83b7\u53d6\u65b9\u5f0f",id:"\u83b7\u53d6\u65b9\u5f0f-1",level:3},{value:"requestContext",id:"requestcontext",level:3},{value:"logger",id:"logger",level:3},{value:"startTime",id:"starttime",level:3},{value:"setAttr &amp; getAttr",id:"setattr--getattr-1",level:3},{value:"getLogger",id:"getlogger-1",level:3},{value:"getApp",id:"getapp",level:3}],s={toc:c},m="wrapper";function g(t){let{components:e,...n}=t;return(0,p.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"application-\u548c-context"},"Application \u548c Context"),(0,p.kt)("p",null,"Midway \u7684\u5e94\u7528\u4f1a\u540c\u65f6\u5bf9\u5916\u66b4\u9732\u4e0d\u540c\u534f\u8bae\uff0c\u6bd4\u5982 Http\uff0cWebSocket \u7b49\u7b49\uff0c\u8fd9\u91cc\u6bcf\u4e2a\u534f\u8bae\u5bf9 Midway \u6765\u8bf4\u90fd\u662f\u7531\u72ec\u7acb\u7684\u7ec4\u4ef6\u63d0\u4f9b\u7684\u3002"),(0,p.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u524d\u9762\u793a\u4f8b\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \uff0c\u5c31\u662f\u4e00\u4e2a\u63d0\u4f9b Http \u670d\u52a1\u7684\u7ec4\u4ef6\uff0c\u4e0b\u9762\u6211\u4eec\u5c06\u4ee5\u8fd9\u4e2a\u7ec4\u4ef6\u4e3a\u4f8b\uff0c\u6765\u4ecb\u7ecd\u5185\u7f6e\u5bf9\u8c61\u3002"),(0,p.kt)("p",null,"\u6bcf\u4e2a\u4f7f\u7528\u7684 Web \u6846\u67b6\u4f1a\u63d0\u4f9b\u81ea\u5df1\u72ec\u7279\u7684\u80fd\u529b\uff0c\u8fd9\u4e9b\u72ec\u7279\u7684\u80fd\u529b\u90fd\u4f1a\u4f53\u73b0\u5728\u5404\u81ea\u7684 ",(0,p.kt)("strong",{parentName:"p"},"\u4e0a\u4e0b\u6587"),"\uff08Context\uff09\u548c ",(0,p.kt)("strong",{parentName:"p"},"\u5e94\u7528"),"\uff08Application\uff09\u4e4b\u4e0a\u3002"),(0,p.kt)("h2",{id:"\u5b9a\u4e49\u7ea6\u5b9a"},"\u5b9a\u4e49\u7ea6\u5b9a"),(0,p.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u4f7f\u7528\uff0c\u6240\u6709\u7684\u66b4\u9732\u534f\u8bae\u7684\u7ec4\u4ef6\u4f1a\u5bfc\u51fa ",(0,p.kt)("strong",{parentName:"p"},"\u4e0a\u4e0b\u6587"),"\uff08Context\uff09\u548c ",(0,p.kt)("strong",{parentName:"p"},"\u5e94\u7528"),"\uff08Application\uff09\u5b9a\u4e49\uff0c\u6211\u4eec\u90fd\u4fdd\u6301\u4e00\u81f4\u3002\u5373 ",(0,p.kt)("inlineCode",{parentName:"p"},"Context")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"Application")," \u3002"),(0,p.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context } from '@midwayjs/koa';\nimport { Application, Context } from '@midwayjs/faas';\nimport { Application, Context } from '@midwayjs/web';\nimport { Application, Context } from '@midwayjs/express';\n")),(0,p.kt)("p",null,"\u4e14\u975e Web \u6846\u67b6\uff0c\u6211\u4eec\u4e5f\u4fdd\u6301\u4e86\u4e00\u81f4\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context } from '@midwayjs/socketio';\nimport { Application, Context } from '@midwayjs/grpc';\nimport { Application, Context } from '@midwayjs/rabbitmq';\n")),(0,p.kt)("h2",{id:"application"},"Application"),(0,p.kt)("p",null,"Application \u662f\u67d0\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u7684\u5e94\u7528\u5bf9\u8c61\uff0c\u5728\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e2d\uff0c\u53ef\u80fd\u6709\u7740\u4e0d\u540c\u7684\u5b9e\u73b0\u3002Application \u5bf9\u8c61\u4e0a\u4f1a\u5305\u542b\u4e00\u4e9b\u7edf\u4e00\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u7edf\u4e00\u6765\u81ea\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"IMidwayApplication")," \u5b9a\u4e49\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application } from '@midwayjs/koa';\n")),(0,p.kt)("h3",{id:"\u83b7\u53d6\u65b9\u5f0f"},"\u83b7\u53d6\u65b9\u5f0f"),(0,p.kt)("p",null,"\u5728\u6240\u6709\u88ab\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u7ba1\u7406\u7684\u7c7b\u4e2d\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"@App()")," \u88c5\u9970\u5668\u6765\u83b7\u53d6 ",(0,p.kt)("strong",{parentName:"p"},"\u5f53\u524d\u6700\u4e3b\u8981")," \u7684 Application\u3002"),(0,p.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Controller, Get } from '@midwayjs/core';\nimport { Application } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @App()\n  app: Application;\n\n  @Get('/')\n  async home() {\n    // this.app.getConfig()\n    // this.app.getEnv()\n  }\n}\n")),(0,p.kt)("h3",{id:"main-application"},"Main Application"),(0,p.kt)("p",null,"Midway \u5e94\u7528\u5bf9\u5916\u66b4\u9732\u7684\u534f\u8bae\u662f\u7ec4\u4ef6\u5e26\u6765\u7684\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4f1a\u66b4\u9732\u81ea\u5df1\u534f\u8bae\u5bf9\u5e94\u7684 Application \u5bf9\u8c61\u3002"),(0,p.kt)("p",null,"\u8fd9\u5c31\u610f\u5473\u7740\u5728\u4e00\u4e2a\u5e94\u7528\u4e2d\u4f1a\u5305\u542b\u591a\u4e2a Application\uff0c\u6211\u4eec\u9ed8\u8ba4\u7ea6\u5b9a\uff0c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u4e2d\u7b2c\u4e00\u4e2a\u5f15\u5165\u7684 Application \u5373\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"Main Application")," \uff08",(0,p.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u7684 Application"),"\uff09\u3002"),(0,p.kt)("p",null,"\u6bd4\u5982\uff0c\u4e0b\u9762\u7684 koa \u4e2d\u7684 Application \u5b9e\u4f8b\u5373\u4e3a ",(0,p.kt)("strong",{parentName:"p"},"Main Application")," \uff08",(0,p.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u7684 Application"),"\uff09\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nimport { Configuration, ILifeCycle } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as ws from '@midwayjs/ws';\n\n@Configuration({\n  imports: [koa, ws]\n})\nexport class MainConfiguration implements ILifeCycle {\n  // ...\n}\n")),(0,p.kt)("p",null,"\u4e8b\u5b9e\u4e0a Application \u90fd\u5b9e\u73b0\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"IMidwayApplication")," \u63a5\u53e3\uff0c\u5982\u679c\u4f7f\u7528\u901a\u7528\u7684 API\uff0c\u6ca1\u6709\u5dee\u522b\u3002"),(0,p.kt)("p",null,"\u6210\u4e3a Main Application \u7a0d\u5fae\u6709\u4e00\u4e9b\u4f18\u52bf\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5728\u5927\u90e8\u5206\u7684\u573a\u666f\u4e0b\uff0c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"@App()")," \u5373\u53ef\u6ce8\u5165\u83b7\u53d6\uff0c\u65e0\u9700\u5176\u4ed6\u53c2\u6570"),(0,p.kt)("li",{parentName:"ul"},"\u4f18\u5148\u521d\u59cb\u5316")),(0,p.kt)("p",null,"\u6bd4\u5982\u5728\u591a\u4e2a\u5bfc\u51fa Application \u7ec4\u4ef6\u9700\u8981\u52a0\u8f7d\u4e2d\u95f4\u4ef6\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u7b80\u5355\u7684\u7f16\u7801\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nimport { Configuration, ILifeCycle } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as ws from '@midwayjs/ws';\n\n@Configuration({\n  imports: [koa, ws]\n})\nexport class MainConfiguration implements ILifeCycle {\n  @App()\n  koaApp: koa.Application;\n\n  @App('webSocket')\n  wsApp: ws.Application;\n\n  async onReady() {\n    this.koaApp.useMiddleweare(...);\n    this.wsApp.useMiddleweare(...);\n  }\n}\n")),(0,p.kt)("p",null,"\u975e\u4e3b\u8981\u7684 Application\uff0c\u9700\u8981\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"@App()")," \u88c5\u9970\u5668\u7684\u53c2\u6570\u6216\u8005 ",(0,p.kt)("a",{parentName:"p",href:"./built_in_service#midwayapplicationmanager"},"ApplicationManager")," \u6765\u83b7\u53d6\u3002"),(0,p.kt)("p",null," ",(0,p.kt)("inlineCode",{parentName:"p"},"@App()")," \u88c5\u9970\u5668\u7684\u53c2\u6570\u4e3a\u7ec4\u4ef6\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"namespace"),"\u3002"),(0,p.kt)("p",null,"\u5e38\u89c1\u7684 namespace \u5982\u4e0b\uff1a"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Package"),(0,p.kt)("th",{parentName:"tr",align:null},"Namespace"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,p.kt)("td",{parentName:"tr",align:null},"egg")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,p.kt)("td",{parentName:"tr",align:null},"koa")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,p.kt)("td",{parentName:"tr",align:null},"express")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/grpc"),(0,p.kt)("td",{parentName:"tr",align:null},"gRPC")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/ws"),(0,p.kt)("td",{parentName:"tr",align:null},"webSocket")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/socketio"),(0,p.kt)("td",{parentName:"tr",align:null},"socketIO")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,p.kt)("td",{parentName:"tr",align:null},"faas")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/kafka"),(0,p.kt)("td",{parentName:"tr",align:null},"kafka")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/rabbitmq"),(0,p.kt)("td",{parentName:"tr",align:null},"rabbitMQ")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"@midwayjs/bull"),(0,p.kt)("td",{parentName:"tr",align:null},"bull")))),(0,p.kt)("h3",{id:"getappdir"},"getAppDir"),(0,p.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u9879\u76ee\u6839\u76ee\u5f55\u8def\u5f84\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getAppDir();\n// => /my_project\n")),(0,p.kt)("h3",{id:"getbasedir"},"getBaseDir"),(0,p.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u9879\u76ee TypeScript \u57fa\u7840\u8def\u5f84\uff0c\u9ed8\u8ba4\u5f00\u53d1\u4e2d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\uff0c\u7f16\u8bd1\u540e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getBaseDir();\n// => /my_project/src\n")),(0,p.kt)("h3",{id:"getenv"},"getEnv"),(0,p.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u9879\u76ee\u73af\u5883\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getEnv();\n// => production\n")),(0,p.kt)("h3",{id:"getapplicationcontext"},"getApplicationContext"),(0,p.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u5168\u5c40\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getApplicationContext();\n")),(0,p.kt)("h3",{id:"getconfig"},"getConfig"),(0,p.kt)("p",null,"\u83b7\u53d6\u914d\u7f6e\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u83b7\u53d6\u6240\u6709\u914d\u7f6e\nthis.app.getConfig();\n// \u83b7\u53d6\u7279\u5b9a key \u914d\u7f6e\nthis.app.getConfig('koa');\n// \u83b7\u53d6\u591a\u7ea7\u914d\u7f6e\nthis.app.getConfig('midwayLoggers.default.dir');\n")),(0,p.kt)("h3",{id:"getlogger"},"getLogger"),(0,p.kt)("p",null,"\u83b7\u53d6\u67d0\u4e2a Logger\uff0c\u4e0d\u4f20\u53c2\u6570\uff0c\u9ed8\u8ba4\u8fd4\u56de appLogger\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getLogger();\n// => app logger\nthis.app.getLogger('custom');\n// => custom logger\n")),(0,p.kt)("h3",{id:"getcorelogger"},"getCoreLogger"),(0,p.kt)("p",null,"\u83b7\u53d6 Core Logger\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getCoreLogger();\n")),(0,p.kt)("h3",{id:"getprojectname"},"getProjectName"),(0,p.kt)("p",null,"\u83b7\u53d6\u9879\u76ee\u540d\uff0c\u4e00\u822c\u4ece ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u83b7\u53d6\u3002"),(0,p.kt)("h3",{id:"setattr--getattr"},"setAttr & getAttr"),(0,p.kt)("p",null,"\u76f4\u63a5\u5728 Application \u4e0a\u6302\u8f7d\u4e00\u4e2a\u5bf9\u8c61\u4f1a\u5bfc\u81f4\u5b9a\u4e49\u548c\u7ef4\u62a4\u7684\u56f0\u96be\u3002"),(0,p.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u9700\u8981\u7684\u662f\u4e34\u65f6\u7684\u5168\u5c40\u6570\u636e\u5b58\u50a8\u7684\u65b9\u5f0f\uff0c\u6bd4\u5982\u5728\u4e00\u4e2a\u5e94\u7528\u6216\u8005\u7ec4\u4ef6\u5185\u90e8\u8de8\u6587\u4ef6\u4e34\u65f6\u5b58\u53d6\u4e00\u4e2a\u6570\u636e\uff0c\u4ece\u4e00\u4e2a\u7c7b\u4fdd\u5b58\uff0c\u53e6\u4e00\u4e2a\u7c7b\u83b7\u53d6\u3002"),(0,p.kt)("p",null,"\u4e3a\u6b64 Midway \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u5c40\u6570\u636e\u5b58\u53d6\u7684 API\uff0c\u89e3\u51b3\u8fd9\u7c7b\u9700\u6c42\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.setAttr('abc', {\n  a: 1,\n  b: 2,\n});\n")),(0,p.kt)("p",null,"\u5728\u53e6\u4e00\u4e2a\u5730\u65b9\u83b7\u53d6\u5373\u53ef\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const value = this.app.getAttr('abc');\nconsole.log(value);\n// { a: 1, b: 2 }\n")),(0,p.kt)("h3",{id:"getnamespace"},"getNamespace"),(0,p.kt)("p",null,"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"getNamespace")," API \uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u5f53\u524d app \u5f52\u5c5e\u7684\u7ec4\u4ef6\u7684 ",(0,p.kt)("a",{parentName:"p",href:"#main-application"},"\u6846\u67b6\u7684\u7c7b\u578b"),"\uff08\u5373\u7ec4\u4ef6\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"namespace"),"\uff09\u3002"),(0,p.kt)("p",null,"\u6bd4\u5982\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"koa")," \u7ec4\u4ef6\u4e2d\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getNamespace();\n// 'koa'\n")),(0,p.kt)("h2",{id:"context"},"Context"),(0,p.kt)("p",null,"Context \u662f\u4e00\u4e2a",(0,p.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u7ea7\u522b\u7684\u5bf9\u8c61"),"\uff0c\u5728\u6bcf\u4e00\u6b21\u6536\u5230\u7528\u6237\u8bf7\u6c42\u65f6\uff0c\u6846\u67b6\u4f1a\u5b9e\u4f8b\u5316\u4e00\u4e2a Context \u5bf9\u8c61\uff0c"),(0,p.kt)("p",null,"\u5728 Http \u573a\u666f\u4e2d\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c01\u88c5\u4e86\u8fd9\u6b21\u7528\u6237\u8bf7\u6c42\u7684\u4fe1\u606f\uff0c\u6216\u8005\u5176\u4ed6\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570\uff0c\u8bbe\u7f6e\u54cd\u5e94\u4fe1\u606f\u7684\u65b9\u6cd5\uff0c\u5728 WebSocket\uff0cRabbitmq \u7b49\u573a\u666f\u4e2d\uff0cContext \u4e5f\u6709\u5404\u81ea\u7684\u5c5e\u6027\uff0c\u4ee5\u6846\u67b6\u7684\u5b9a\u4e49\u4e3a\u51c6\u3002"),(0,p.kt)("p",null,"\u4e0b\u9762\u7684 API \u662f\u6bcf\u4e2a\u4e0a\u4e0b\u6587\u5b9e\u73b0\u901a\u7528\u7684\u5c5e\u6027\u6216\u8005\u63a5\u53e3\u3002"),(0,p.kt)("h3",{id:"\u83b7\u53d6\u65b9\u5f0f-1"},"\u83b7\u53d6\u65b9\u5f0f"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u7684\u8bf7\u6c42\u4f5c\u7528\u57df "),"\u4e2d\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728 \u63a7\u5236\u5668\uff08Controller\uff09\u6216\u8005\u666e\u901a\u7684\u670d\u52a1\uff08Service\uff09\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"@Inject")," \u6765\u6ce8\u5165\u5bf9\u5e94\u7684\u5b9e\u4f8b\u3002"),(0,p.kt)("p",null,"\u6bd4\u5982\u53ef\u4ee5\u8fd9\u6837\u83b7\u53d6\u5230\u5bf9\u5e94\u7684 ctx \u5b9e\u4f8b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    // ...\n  }\n}\n")),(0,p.kt)("p",null,"\u7531\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"ctx")," \u662f\u4e00\u4e2a\u6846\u67b6\u5185\u7f6e ctx \u5b9e\u4f8b\u5173\u952e\u5b57\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u7528\u4e0d\u540c\u7684\u5c5e\u6027\u540d\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u88c5\u9970\u5668\u53c2\u6570\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject('ctx')\n  customContextName: Context;\n\n  @Get('/')\n  async home() {\n    // ...\n  }\n}\n")),(0,p.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u670d\u52a1\u53ef\u4ee5\u88ab\u591a\u4e2a\u4e0a\u5c42\u6846\u67b6\u8c03\u7528\uff0c\u7531\u4e8e\u4e0d\u540c\u6846\u67b6\u63d0\u4f9b\u7684  ctx \u7c7b\u578b\u4e0d\u540c\uff0c\u53ef\u4ee5\u901a\u8fc7\u7c7b\u578b\u7ec4\u5408\u6765\u89e3\u51b3\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\nimport { Context as BullContext } from '@midwayjs/bull';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  ctx: Context & BullContext;\n\n  async getUser() {\n    // ...\n  }\n}\n")),(0,p.kt)("p",null,"\u9664\u4e86\u663e\u5f0f\u58f0\u660e\u5916\uff0c\u5728\u62e6\u622a\u5668\u6216\u8005\u88c5\u9970\u5668\u8bbe\u8ba1\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u6211\u4eec\u65e0\u6cd5\u5f97\u77e5\u7528\u6237\u662f\u5426\u5199\u4e86 ctx \u5c5e\u6027\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5185\u7f6e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"REQUEST_OBJ_CTX_KEY")," \u5b57\u6bb5\u6765\u83b7\u53d6\u3002"),(0,p.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, REQUEST_OBJ_CTX_KEY } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    ctx.logger.info(this.ctx === this[REQUEST_OBJ_CTX_KEY]);\n    // => true\n  }\n}\n")),(0,p.kt)("h3",{id:"requestcontext"},"requestContext"),(0,p.kt)("p",null,"Midway \u4f1a\u4e3a\u6bcf\u4e2a Context \u6302\u8f7d\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"requestContext")," \u5c5e\u6027\uff0c\u5373\u8bf7\u6c42\u4f5c\u7528\u57df\u4e0b\u7684\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\uff0c\u7528\u6765\u521b\u5efa\u8bf7\u6c42\u4f5c\u7528\u57df\u4e0b\u7684\u5bf9\u8c61\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const userService = await this.ctx.requestContext.getAsync(UserService);\n// ...\n")),(0,p.kt)("h3",{id:"logger"},"logger"),(0,p.kt)("p",null,"\u8bf7\u6c42\u4f5c\u7528\u57df\u4e0b\u7684\u9ed8\u8ba4 logger \u5bf9\u8c61\uff0c\u5305\u542b\u4e0a\u4e0b\u6587\u6570\u636e\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.ctx.logger.info('xxxx');\n")),(0,p.kt)("h3",{id:"starttime"},"startTime"),(0,p.kt)("p",null,"\u4e0a\u4e0b\u6587\u6267\u884c\u5f00\u59cb\u7684\u65f6\u95f4\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.ctx.startTime\n// 1642820640502\n")),(0,p.kt)("h3",{id:"setattr--getattr-1"},"setAttr & getAttr"),(0,p.kt)("p",null,"\u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"app")," \u4e0a\u7684\u65b9\u6cd5\u76f8\u540c\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u7684\u6570\u636e\u662f\u4fdd\u5b58\u5728\u8bf7\u6c42\u94fe\u8def\u4e2d\uff0c\u968f\u7740\u8bf7\u6c42\u9500\u6bc1\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u4e00\u4e9b\u8bf7\u6c42\u7684\u4e34\u65f6\u6570\u636e\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.ctx.setAttr('abc', {\n  a: 1,\n  b: 2,\n});\n")),(0,p.kt)("p",null,"\u5728\u53e6\u4e00\u4e2a\u5730\u65b9\u83b7\u53d6\u5373\u53ef\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const value = this.ctx.getAttr('abc');\nconsole.log(value);\n// { a: 1, b: 2 }\n")),(0,p.kt)("h3",{id:"getlogger-1"},"getLogger"),(0,p.kt)("p",null,"\u83b7\u53d6\u67d0\u4e2a\u81ea\u5b9a\u4e49 Logger \u5bf9\u5e94\u7684\u4e0a\u4e0b\u6587\u65e5\u5fd7\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"this.ctx.getLogger('custom');\n// => custom logger\n")),(0,p.kt)("h3",{id:"getapp"},"getApp"),(0,p.kt)("p",null,"\u4ece ctx \u4e0a\u83b7\u53d6\u5f53\u524d\u6846\u67b6\u7c7b\u578b\u7684 app \u5bf9\u8c61\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = this.ctx.getApp();\n// app.getConfig();\n")))}g.isMDXComponent=!0}}]);