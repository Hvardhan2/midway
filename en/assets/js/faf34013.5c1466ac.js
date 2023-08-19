"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},l="Serverless trigger POST case differences",p={unversionedId:"serverless/serverless_post_difference",id:"serverless/serverless_post_difference",title:"Serverless trigger POST case differences",description:"alibaba cloud API gateway",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/serverless_post_difference.md",sourceDirName:"serverless",slug:"/serverless/serverless_post_difference",permalink:"/en/docs/serverless/serverless_post_difference",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_post_difference.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Egg application migration",permalink:"/en/docs/serverless/migrate_egg"},next:{title:"Introduction",permalink:"/en/docs/hooks/intro"}},s={},i=[{value:"alibaba cloud API gateway",id:"alibaba-cloud-api-gateway",level:2},{value:"POST of entering and passing through",id:"post-of-entering-and-passing-through",level:3},{value:"Example 1 (text/html)",id:"example-1-texthtml",level:4},{value:"Example 2 (application/json)",id:"example-2-applicationjson",level:4},{value:"Example 3 (application/x-www-form-urlencoded)",id:"example-3-applicationx-www-form-urlencoded",level:4},{value:"POST of input parameter mapping",id:"post-of-input-parameter-mapping",level:3},{value:"Alibaba Cloud HTTP Trigger",id:"alibaba-cloud-http-trigger",level:2},{value:"Ordinary POST(application/json)",id:"ordinary-postapplicationjson",level:3},{value:"Form (application/x-www-form-urlencoded)",id:"form-applicationx-www-form-urlencoded",level:3},{value:"File upload (Binary)",id:"file-upload-binary",level:3},{value:"Tencent Cloud Gateway",id:"tencent-cloud-gateway",level:2},{value:"Ordinary POST(application/json)",id:"ordinary-postapplicationjson-1",level:3},{value:"Form (application/x-www-form-urlencoded)",id:"form-applicationx-www-form-urlencoded-1",level:3}],c={toc:i},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"serverless-trigger-post-case-differences"},"Serverless trigger POST case differences"),(0,r.kt)("h2",{id:"alibaba-cloud-api-gateway"},"alibaba cloud API gateway"),(0,r.kt)("p",null,"Alibaba Cloud API Gateway supports different types of POST requests."),(0,r.kt)("h3",{id:"post-of-entering-and-passing-through"},"POST of entering and passing through"),(0,r.kt)("p",null,"The gateway configuration is as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593175823751-f9b305fc-ddeb-4b04-ba13-481a616be260.png",alt:null})),(0,r.kt)("p",null,"The event feature of gateway pass-through has a ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," field and the ",(0,r.kt)("inlineCode",{parentName:"p"},"isBase64Encoded")," is true. It is easy to decode and directly solve base64."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After passing through, all the results are handed over to the function for processing.")),(0,r.kt)("h4",{id:"example-1-texthtml"},"Example 1 (text/html)"),(0,r.kt)("p",null,"The following event is the simplest pass-through example. Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"text/html"),", the base64 decoding result passed by the body is also a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": "eyJjIjoiYiJ9 ",\n  "headers": {\n    "x-ca-dashboard-action": "DEBUG ",\n    "x-ca-dashboard-uid": "125087",\n    "x-ca-stage": "RELEASE ",\n    "x-ca-dashboard-role": "USER ",\n    "user-agent": "Apache-HttpClient/4.5.6 (Java/1.8.0_172) ",\n    "accept-encoding": "gzip,deflate ",\n    "content-md5": "Kry+hjKjc2lvIrwoJqdY9Q== ",\n    "content-type": "text/html; charset=utf-8"\n  },\n  "httpMethod": "POST ",\n  "isBase64Encoded": true\n  "path": "/api/321 ",\n  "pathParameters": {\n    "userId": "321"\n  },\n  "queryParameters": {}\n}\n')),(0,r.kt)("p",null,"function result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // \'{"c":" B "}\' => string\n')),(0,r.kt)("h4",{id:"example-2-applicationjson"},"Example 2 (application/json)"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json"),", the framework is considered to be JSON and will be automatically used by JSON.parse."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": "eyJjIjoiYiJ9 ",\n  "headers": {\n    "X-Ca-Dashboard-Action": "DEBUG ",\n    "X-Ca-Dashboard-Uid": "125087",\n    "X-Ca-Stage": "RELEASE ",\n    "X-Ca-Dashboard-Role": "USER ",\n    "User-Agent": "Apache-HttpClient/4.5.6 (Java/1.8.0_172) ",\n    "Accept-Encoding": "gzip,deflate ",\n    "Content-MD5": "Kry+hjKjc2lvIrwoJqdY9Q== ",\n    "Content-Type": "application/json; charset=utf-8"\n  },\n  "httpMethod": "POST ",\n  "isBase64Encoded": true\n  "path": "/api/321 ",\n  "pathParameters": {\n    "userId": "321"\n  },\n  "queryParameters": {}\n}\n')),(0,r.kt)("p",null,"function result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // {"c":" B "} => object\n')),(0,r.kt)("h4",{id:"example-3-applicationx-www-form-urlencoded"},"Example 3 (application/x-www-form-urlencoded)"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),", the gateway will not pass through in base64 format. This is also the default submission type for front-end native forms."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'In the API gateway side test, keeping the "in-reference pass", it seems to have no effect, so I switched to the Postman to test.')),(0,r.kt)("p",null,"The Postman simulation request is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593188653464-2a5659de-40ad-4611-ba86-f5754c7d4425.png",alt:null})),(0,r.kt)("p",null,"The event value obtained by the function is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": "{\\"c\\":\\" B \\"}",\n  "headers": {\n    "accept": "*/*",\n    "cache-control": "no-cache",\n    "user-agent": "PostmanRuntime/7.24.1",\n    "postman-token": "feb51b11-9103-463a-92ff-73076d37b683",\n    "accept-encoding": "gzip, deflate, br",\n    "content-type": "application/x-www-form-urlencoded"\n  },\n  "httpMethod": "POST",\n  "isBase64Encoded": false\n  "path": "/api/321 ",\n  "pathParameters": {\n    "userId": "321"\n  },\n  "queryParameters": {}\n}\n')),(0,r.kt)("p",null,"function result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // {"c":" B "} => object\n')),(0,r.kt)("h3",{id:"post-of-input-parameter-mapping"},"POST of input parameter mapping"),(0,r.kt)("p",null,"After the gateway configuration selects input parameter mapping, there are two types of body data."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593186831907-7975c65c-aee5-4f96-9ae4-ffaeee66c7dd.png",alt:null})),(0,r.kt)("p",null,"Once the mapping is selected, there is ",(0,r.kt)("strong",{parentName:"p"},"no content-type")," in the Headers the entire function gets."),(0,r.kt)("p",null,"At this time, the return event of the gateway is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": "eyJjIjoiYiJ9 ",\n  "headers": {\n    "X-Ca-Dashboard-Action": "DEBUG ",\n    "X-Ca-Dashboard-Uid": "111111",\n    "X-Ca-Dashboard-Role": "USER"\n  },\n  "httpMethod": "POST ",\n  "isBase64Encoded": true\n  "path": "/api/321 ",\n  "pathParameters": {\n    "userId": "321"\n  },\n  "queryParameters": {}\n}\n')),(0,r.kt)("p",null,"Because the function does not get the header by default, it only processes the base64 result, and the result is a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // \'{"c":" B "}\' => string\n')),(0,r.kt)("h2",{id:"alibaba-cloud-http-trigger"},"Alibaba Cloud HTTP Trigger"),(0,r.kt)("p",null,"The HTTP trigger provided by the function (different from the gateway)."),(0,r.kt)("h3",{id:"ordinary-postapplicationjson"},"Ordinary POST(application/json)"),(0,r.kt)("p",null,"The verification code is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const body = this.ctx.request.body;\nreturn {\n  type: typeof body\n  body\n};\n")),(0,r.kt)("p",null,"String format."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593321679770-a7609684-ec5e-4f93-99f2-d346ed79c1fa.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // "bbb" => string\n')),(0,r.kt)("p",null,"JSON format"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593321730423-f9b2860f-7902-4f3a-81cf-bfbcfd4ee57f.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // {" B":"c"} => object\n')),(0,r.kt)("h3",{id:"form-applicationx-www-form-urlencoded"},"Form (application/x-www-form-urlencoded)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593321823455-23ec3970-35a5-4746-8995-d9146eaa4ab0.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // {" B":"c"} => object\n')),(0,r.kt)("h3",{id:"file-upload-binary"},"File upload (Binary)"),(0,r.kt)("p",null,"Not yet supported"),(0,r.kt)("h2",{id:"tencent-cloud-gateway"},"Tencent Cloud Gateway"),(0,r.kt)("p",null,"Tencent Cloud provides a separate gateway."),(0,r.kt)("h3",{id:"ordinary-postapplicationjson-1"},"Ordinary POST(application/json)"),(0,r.kt)("p",null,"The verification code is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const body = this.ctx.request.body;\nreturn {\n  type: typeof body\n  body\n};\n")),(0,r.kt)("p",null,"Use Postman requests."),(0,r.kt)("p",null,"string format, normal parsing."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593323223487-c4e5f365-b500-4a2d-85e3-45bd4aba4653.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // "bbb" => string\n')),(0,r.kt)("p",null,"JSON format, can be parsed normally."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593323187488-e7b4e32e-4195-404d-b309-ba436c3f5f8e.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // {"c":" B "} => object\n')),(0,r.kt)("h3",{id:"form-applicationx-www-form-urlencoded-1"},"Form (application/x-www-form-urlencoded)"),(0,r.kt)("p",null,"Normal parses to JSON."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1593323279728-983fd844-f37d-419b-90f3-f96d1ee8236d.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'ctx.request.body; // {"c":" B "} => object\n')))}u.isMDXComponent=!0}}]);