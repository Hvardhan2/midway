"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},i="ESModule usage guide",s={unversionedId:"esm",id:"esm",title:"ESModule usage guide",description:"For the past few years, Node.js has been working on supporting running ECMAScript modules (ESM). This is a difficult feature to support because the foundation of the Node.js ecosystem is built on a different module system called CommonJS (CJS).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/esm.md",sourceDirName:".",slug:"/esm",permalink:"/en/docs/esm",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/esm.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Framework Error Code",permalink:"/en/docs/error_code"},next:{title:"Interceptors(AOP)",permalink:"/en/docs/aspect"}},l={},p=[{value:"Scaffolding",id:"scaffolding",level:2},{value:"Differences from CJS projects",id:"differences-from-cjs-projects",level:2},{value:"1. Changes in package.json",id:"1-changes-in-packagejson",level:3},{value:"2. Changes in tsconfig.json",id:"2-changes-in-tsconfigjson",level:3},{value:"3. Changes in the tool chain",id:"3-changes-in-the-tool-chain",level:3},{value:"4. Some code differences",id:"4-some-code-differences",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"esmodule-usage-guide"},"ESModule usage guide"),(0,a.kt)("p",null,"For the past few years, Node.js has been working on supporting running ECMAScript modules (ESM). This is a difficult feature to support because the foundation of the Node.js ecosystem is built on a different module system called CommonJS (CJS)."),(0,a.kt)("p",null,"The interoperability between the two modular systems poses great challenges and has many functional differences."),(0,a.kt)("p",null,"Since Node.js v16, the support of ESM has been relatively stable, and some matching functions of TypeScript have also been implemented one after another."),(0,a.kt)("p",null,"On this basis, Midway supports file loading in ESM format, and businesses can also use this new module loading method to build their own business."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It is not recommended for users to use it without understanding ESM.")),(0,a.kt)("p",null,"Recommended reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/esm-node.html"},"TypeScript Official ESM Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/esm.html"},"Node.js official ESM documentation"))),(0,a.kt)("h2",{id:"scaffolding"},"Scaffolding"),(0,a.kt)("p",null,"Due to many changes, Midway provides a brand-new scaffolding in ESM format. If there is a need for ESM, we recommend that users re-create it before developing business."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway\n")),(0,a.kt)("p",null,"Select the scaffolding in the esm group."),(0,a.kt)("h2",{id:"differences-from-cjs-projects"},"Differences from CJS projects"),(0,a.kt)("h3",{id:"1-changes-in-packagejson"},"1. Changes in package.json"),(0,a.kt)("p",null,"  type in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"module"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "my-package",\n   "type": "module",\n   //...\n   "dependencies": {\n   }\n}\n')),(0,a.kt)("h3",{id:"2-changes-in-tsconfigjson"},"2. Changes in tsconfig.json"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions")," compile-related options need to be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Node16")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeNext"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "compilerOptions": {\n     "target": "ESNext",\n     "module": "ESNext",\n     "moduleResolution": "Node16",\n     "esModuleInterop": true,\n     //...\n   }\n}\n')),(0,a.kt)("h3",{id:"3-changes-in-the-tool-chain"},"3. Changes in the tool chain"),(0,a.kt)("p",null,"Since the original development toolchain only supports CJS code, and some modules in the community do not support ESM, Midway uses a new toolchain in ESM mode."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Development command, use mwtsc (only do tsc necessary package)"),(0,a.kt)("li",{parentName:"ul"},"Test and coverage commands, using mocha + ts-node, both test code and test configuration have been adjusted"),(0,a.kt)("li",{parentName:"ul"},"build command, use tsc")),(0,a.kt)("p",null,"Some features that are no longer supported"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"alias path, please use ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/packages.html#subpath-exports"},"subpath export")," that comes with Node.js instead"),(0,a.kt)("li",{parentName:"ul"},"Copy non-js files when building, put non-code files outside src, or add custom commands when building")),(0,a.kt)("p",null,"For specific differences, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway-boilerplate/blob/master/v3/midway-framework-koa-esm/boilerplate/_package.json"},"Scaffolding")," to check."),(0,a.kt)("h3",{id:"4-some-code-differences"},"4. Some code differences"),(0,a.kt)("p",null,"Here's a quick list of some of the differences between ESM and CJS in development."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In ts, the import file must specify a suffix name, and the suffix name is js.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { helper } from "./foo.js"; // works in ESM & CJS\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"You can no longer use ",(0,a.kt)("inlineCode",{parentName:"li"},"module.exports")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"exports.")," to export.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// ./foo.ts\nexport function helper() {\n     //...\n}\n// ./bar.ts\nimport { helper } from "./foo"; // only works in CJS\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"You cannot use ",(0,a.kt)("inlineCode",{parentName:"li"},"require")," in your code")),(0,a.kt)("p",null,"Only the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," keyword can be used."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"You cannot use ",(0,a.kt)("inlineCode",{parentName:"li"},"__dirname"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"__filename"),", etc. and path-related keywords in the code")),(0,a.kt)("p",null,"Therefore, the configuration part must use the object mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport DefulatConfig from './config/config.default.js';\nimport UnittestConfig from './config/config.unittest.js';\n\n@Configuration({\n   importConfigs: [\n     {\n       default: DefulatConfig,\n       unittest: UnittestConfig,\n     },\n   ],\n})\nexport class MainConfiguration {\n   //...\n}\n")))}d.isMDXComponent=!0}}]);