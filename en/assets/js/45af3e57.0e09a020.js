"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16153],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},i="Deployment environment",l={unversionedId:"serverless/serverless_environment",id:"serverless/serverless_environment",title:"Deployment environment",description:"In Serverless scenarios, because the environment is different from the traditional container (provided by the platform and cannot be modified), when we start, we use the traditional command to pass through the environment variables, and the function cannot be read correctly.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/serverless_environment.md",sourceDirName:"serverless",slug:"/serverless/serverless_environment",permalink:"/en/docs/serverless/serverless_environment",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_environment.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"f.yml definition",permalink:"/en/docs/serverless/serverless_yml"},next:{title:"Default error behavior",permalink:"/en/docs/serverless/serverless_error"}},s={},p=[{value:"Publishing environment variable",id:"publishing-environment-variable",level:2},{value:"YML variable population",id:"yml-variable-population",level:2},{value:"Error stack output",id:"error-stack-output",level:2},{value:"Copy additional resources",id:"copy-additional-resources",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment-environment"},"Deployment environment"),(0,o.kt)("p",null,"In Serverless scenarios, because the environment is different from the traditional container (provided by the platform and cannot be modified), when we start, we use the traditional command to pass through the environment variables, and the function cannot be read correctly."),(0,o.kt)("p",null,"For example, the following command can only take effect locally, not on the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ NODE_ENV midway-bin deploy // Wrong writing, only valid locally\n")),(0,o.kt)("p",null,"We need special ways to make the function container receive the environment as well."),(0,o.kt)("h2",{id:"publishing-environment-variable"},"Publishing environment variable"),(0,o.kt)("p",null,"To distinguish from common environment variables, environment variables deployed to the platform are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"UDEV_")," (User Defined Environment Variable) and ",(0,o.kt)("strong",{parentName:"p"},"are written to the published yml file corresponding to the environment field.")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ UDEV_NODE_ENV=prod midway-bin deploy\n")),(0,o.kt)("p",null,"At this time, the platform will receive an environment variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"prod"),"."),(0,o.kt)("h2",{id:"yml-variable-population"},"YML variable population"),(0,o.kt)("p",null,"You can fill some variables in yml. We provide a default fill keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"env"),", which allows you to assign values to any yml variable. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"provider:\n  runtime: ${env.RUNTIME}\n")),(0,o.kt)("p",null,"Then, if the environment variable added when ",(0,o.kt)("inlineCode",{parentName:"p"},"midway-bin deploy")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNTIME = nodejs10 midway-bin deploy"),", it will be filled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"provider:\n  runtime: nodejs10\n")),(0,o.kt)("h2",{id:"error-stack-output"},"Error stack output"),(0,o.kt)("p",null,"When the function reports an error, Midway will automatically output error information in the function log, including stack, etc. However, the error stack will only be output in the response (Response) in ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"development")," environments."),(0,o.kt)("p",null,"If you need to see the error stack in the return values of other environments, you can configure the following environment variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"process.env.SERVERLESS_OUTPUT_ERROR_STACK = 'true';\n")),(0,o.kt)("h2",{id:"copy-additional-resources"},"Copy additional resources"),(0,o.kt)("p",null,"The default build tool only copies the package.json, the built code, and dependencies. If you need to copy other directories, such as some static resources, you need to configure them in ",(0,o.kt)("inlineCode",{parentName:"p"},"f.yml"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"package: # Package Configuration\n  include: # Package contains a list of files, which defaults to package.json, built code, and dependencies.\n    -resource\n    -public\n  exclude: # Package and Reject File List\n    -test\n")))}d.isMDXComponent=!0}}]);