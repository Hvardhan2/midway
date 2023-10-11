"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},s="Authentication",i={unversionedId:"extensions/passport",id:"extensions/passport",title:"Authentication",description:"Authentication is an important part of most Web applications. Therefore, Midway encapsulates the most popular Passport library in Nodejs.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/passport.md",sourceDirName:"extensions",slug:"/extensions/passport",permalink:"/en/docs/extensions/passport",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/passport.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"File Upload",permalink:"/en/docs/extensions/upload"},next:{title:"Role authentication",permalink:"/en/docs/extensions/casbin"}},l={},p=[{value:"Some concepts",id:"some-concepts",level:2},{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Enable components",id:"enable-components",level:2},{value:"Policy example",id:"policy-example",level:2},{value:"Example: Local Policy",id:"example-local-policy",level:3},{value:"Example: Jwt strategy",id:"example-jwt-strategy",level:3},{value:"Customize other policies",id:"customize-other-policies",level:2},{value:"Policy options",id:"policy-options",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"1. Failed to serialize user into session",id:"1-failed-to-serialize-user-into-session",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Authentication is an important part of most Web applications. Therefore, Midway encapsulates the most popular Passport library in Nodejs."),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Web support"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("p",null,"Starting from v3.4.0, Midway maintains its own passport and will no longer need to introduce community packages and type packages."),(0,r.kt)("h2",{id:"some-concepts"},"Some concepts"),(0,r.kt)("p",null,"The passport is that the community uses more authentication libraries to make authentication requests through extensible plug-ins called policies. "),(0,r.kt)("p",null,"It itself contains several parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Verification strategies, such as jwt verification, github verification, oauth verification, etc. The most abundant passport is this one."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"After the policy is executed, the logic processing and configuration of middleware, such as jump after success or failure, error reporting, etc.")))),(0,r.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm I @midwayjs/passport")," installation and related policy dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## Required\n$ npm i @midwayjs/passport@3 --save\n\n## Optional\n## Install the local policy below\n$ npm i passport-local --save\n$ npm i @types/passport-local --save-dev\n## Install Github policy below\n$ npm i passport-github --save\n## Install Jwt policy below\n$ npm i passport-jwt --save\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/passport": "^3.0.0",\n    // Local policy\n    "passport-local": "^1.0.0"\n    // Jwt strategy\n    "passport-jwt": "4.0.0",\n    // Github policy\n    "passport-github": "1.1.0",\n    // ...\n  },\n  "devDependencies": {\n    // Local policy\n    "@types/passport-local": "^1.0.34 ",\n    // Jwt strategy\n    "@types/passport-jwt": "^3.0.6 ",\n    // Github policy\n    "@types/passport-github": "^1.1.7 ",\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"enable-components"},"Enable components"),(0,r.kt)("p",null,"Enable the component first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nimport { join } from 'path';\nimport { ILifeCycle,} from '@midwayjs/core';\nimport { Configuration } from '@midwayjs/core';\nimport * as passport from '@midwayjs/passport';\n\n@Configuration({\n  imports: [\n    // ...\n    passport\n  ],\n  importConfigs: [join(__dirname, './config')]\n})\nexport class MainConfiguration implements ILifeCycle {}\n\n")),(0,r.kt)("h2",{id:"policy-example"},"Policy example"),(0,r.kt)("p",null,"Here we use the local authentication strategy and the Jwt strategy as a demonstration."),(0,r.kt)("h3",{id:"example-local-policy"},"Example: Local Policy"),(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"passport-local")," to introduce how to use the Passport policy in Midway. The official document example of ",(0,r.kt)("inlineCode",{parentName:"p"},"passport-local")," is as follows. Load a policy through ",(0,r.kt)("inlineCode",{parentName:"p"},"passport.use"),". The verification logic of the policy is a ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," method, including callback parameter, the rest of the strategy parameters are in the constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"passport.use(\n   //Initialize a strategy\n   new LocalStrategy({\n       usernameField: 'username',\n       passwordField: 'password',\n       passReqToCallback: true,\n       session: false\n     },\n     function verify(username, password, done) {\n       User.findOne({ username: username }, function (err, user) {\n         if (err) { return done(err); }\n         if (!user) { return done(null, false); }\n         if (!user.verifyPassword(password)) { return done(null, false); }\n         return done(null, user);\n       });\n     }\n)\n);\n")),(0,r.kt)("p",null,"Midway adapts this by inheriting a Passport existing strategy through the ",(0,r.kt)("inlineCode",{parentName:"p"},"@CustomStrategy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PassportStrategy")," classes."),(0,r.kt)("p",null,"The asynchronous ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," method replaces the original ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," method. The ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," method returns the verified user result. The parameters of the method are consistent with the original corresponding policy."),(0,r.kt)("p",null,"The effect written in Midway is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/strategy/local.strategy.ts\n\nimport { CustomStrategy, PassportStrategy } from '@midwayjs/passport';\nimport { Strategy } from 'passport-local';\nimport { Repository } from 'typeorm';\nimport { InjectEntityModel } from '@midwayjs/typeorm';\nimport { UserEntity } from './user';\nimport * as bcrypt from 'bcrypt';\n\n@CustomStrategy()\nexport class LocalStrategy extends PassportStrategy(Strategy) {\n   @InjectEntityModel(UserEntity)\n   userModel: Repository<UserEntity>;\n\n   //Verification of strategy\n   async validate(username, password) {\n     const user = await this.userModel.findOneBy({ username });\n     if (await bcrypt.compare(password, user.password)) {\n       throw new Error('error password ' + username);\n     }\n\n     return {\n       username,\n       password,\n     };\n   }\n\n   // Constructor parameters of the current strategy\n   getStrategyOptions(): any {\n     return {};\n   }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note: The validate method is a Promise alternative to the community policy verify. You do not need to pass the callback parameter at the end.")),(0,r.kt)("p",null,"In the official documentation of ",(0,r.kt)("inlineCode",{parentName:"p"},"passport-local"),", after the strategy is implemented, it needs to be loaded into the business as middleware, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"app.post('/login/password', passport.authenticate('local', {\n   successRedirect: '/',\n   failureRedirect: '/login'\n}));\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," is the internal name of ",(0,r.kt)("inlineCode",{parentName:"p"},"passport-local"),".")),(0,r.kt)("p",null,"In Midway, the ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalStrategy")," implemented above also needs to be loaded through middleware."),(0,r.kt)("p",null,"Customize a middleware that inherits the basic middleware extended by ",(0,r.kt)("inlineCode",{parentName:"p"},"PassportMiddleware"),". The example is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/local.middleware.ts\n\nimport { Middleware } from '@midwayjs/core';\nimport { PassportMiddleware, AuthenticateOptions } from '@midwayjs/passport';\nimport { LocalStrategy } from '../strategy/local.strategy';\n\n@Middleware()\nexport class LocalPassportMiddleware extends PassportMiddleware(LocalStrategy) {\n   //Set AuthenticateOptions\n   getAuthenticateOptions(): Promise<AuthenticateOptions> | AuthenticateOptions {\n     return {\n       failureRedirect: '/login',\n     };\n   }\n}\n")),(0,r.kt)("p",null,"Load middleware into the global or route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller.ts\nimport { Post, Inject, Controller } from '@midwayjs/core';\nimport { LocalPassportMiddleware } from '../middleware/local.middleware';\n\n@Controller('/')\nexport class LocalController {\n   @Post('/passport/local', { middleware: [LocalPassportMiddleware] })\n   async localPassport() {\n     console.log('local user: ', this.ctx.state.user);\n     return this.ctx.state.user;\n   }\n}\n")),(0,r.kt)("p",null,"Use curl to simulate a request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:7001/passport/local -d \'{"username": "demo", "password": "1234"}\' -H "Content-Type: application/json"\n\nResult {"username": "demo", "password": "1234"}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note: If you place middleware globally, remember to ignore routes that require login, otherwise the request will loop endlessly.")),(0,r.kt)("h3",{id:"example-jwt-strategy"},"Example: Jwt strategy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additional installation")," of dependencies and policies is required first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/jwt passport-jwt --save\n")),(0,r.kt)("p",null,"Additional jwt components are enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\n\nimport { join } from 'path';\nimport * as jwt from '@midwayjs/jwt';\nimport { Configuration, ILifeCycle,} from '@midwayjs/core';\nimport * as passport from '@midwayjs/passport';\n\n@Configuration({\n  imports: [\n    // ...\n    jwt,\n    passport\n  ],\n  importConfigs: [join(__dirname, './config')]\n})\nexport class MainConfiguration implements ILifeCycle {}\n\n")),(0,r.kt)("p",null,"Then set in the configuration, the default is not encrypted, please do not store sensitive information in the payload."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  jwt: {\n    secret: 'xxxxxxxxxxxxxx', // fs.readFileSync('xxxxx.key')\n    expiresIn: '2d' // https://github.com/vercel/ms\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/strategy/jwt.strategy.ts\n\nimport { CustomStrategy, PassportStrategy } from '@midwayjs/passport';\nimport { Strategy, ExtractJwt } from 'passport-jwt';\nimport { Config } from '@midwayjs/core';\n\n@CustomStrategy()\nexport class JwtStrategy extends PassportStrategy (\n  Strategy,\n  'jwt'\n) {\n  @Config('jwt')\n  jwtConfig;\n\n  async validate(payload) {\n    return payload;\n  }\n\n  getStrategyOptions(): any {\n    return {\n      secretOrKey: this.jwtConfig.secret\n      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()\n    };\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note: validate method is an Promise alternative to community policy verify. You don't need to pass callback parameters at the end.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/jwt.middleware.ts\n\nimport { Middleware } from '@midwayjs/core';\nimport { PassportMiddleware, AuthenticateOptions } from '@midwayjs/passport';\nimport { JwtStrategy } from '../strategy/jwt.strategy';\n\n@Middleware()\nexport class JwtPassportMiddleware extends PassportMiddleware(JwtStrategy) {\n  getAuthenticateOptions(): Promise<AuthenticateOptions> | AuthenticateOptions {\n    return {};\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, Inject, Controller } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\nimport { JwtService } from '@midwayjs/jwt';\nimport { JwtPassportMiddleware } from '../middleware/jwt.middleware';\n\n@Controller('/')\nexport class JwtController {\n\n  @Inject()\n  jwt: JwtService;\n\n  @Inject()\n  ctx: Context;\n\n  @Post('/passport/jwt', { middleware: [JwtPassportMiddleware] })\n  async jwtPassport() {\n    console.log('jwt user:', this.ctx.state.user);\n    return this.ctx.state.user;\n  }\n\n  @Post('/jwt')\n  async genJwt() {\n    return {\n      t: await this.jwt.sign({ msg: 'Hello Midway' })\n    };\n  }\n}\n")),(0,r.kt)("p",null,"Use curl to simulate requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://127.0.0.1:7001/jwt\n\nResult {"t": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}\n\ncurl http://127.0.0.1:7001/passport/jwt -H "Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\n\nResults {"msg": "Hello Midway","iat": 1635468727,"exp": 1635468827}\n\n')),(0,r.kt)("h2",{id:"customize-other-policies"},"Customize other policies"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/passport")," supports customizing ",(0,r.kt)("a",{parentName:"p",href:"http://www.passportjs.org/packages/"},"other policies"),". Here, take Github OAuth as an example.\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm I passport-github")," first, and then write the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// github-strategy.ts\n\nimport { CustomStrategy, PassportStrategy } from '@midwayjs/passport';\nimport { Strategy, StrategyOptions } from 'passport-github';\n\nconst GITHUB_CLIENT_ID = 'xxxxxx', GITHUB_CLIENT_SECRET = 'xxxxxxxx';\n\n@CustomStrategy()\nexport class GithubStrategy extends PassportStrategy(Strategy, 'github') {\n  async validate(...payload) {\n    return payload;\n  }\n  getStrategyOptions() {\n    return {\n      clientID: GITHUB_CLIENT_ID\n      clientSecret: GITHUB_CLIENT_SECRET\n      callbackURL: 'https://127.0.0.1:7001/auth/github/cb'\n    };\n  }\n}\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/github.middleware.ts\n\nimport { PassportMiddleware } from '@midwayjs/passport';\nimport { Middleware } from '@midwayjs/core';\nimport { GithubStrategy } from './github-strategy.ts';\n\n@Middleware()\nexport class GithubPassportMiddleware extends PassportMiddleware(GithubStrategy) {\n  getAuthenticateOptions(): AuthenticateOptions | Promise<AuthenticateOptions> {\n    return {};\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controoer/auth.controller.ts\n\nimport { Controller, Get, Inject } from '@midwayjs/core';\nimport { GithubPassportMiddleware } from './github.middleware';\n\n@Controller('/oauth')\nexport class AuthController {\n  @Inject()\n  ctx;\n\n  @Get('/github', { middleware: [GithubPassportMiddleware] })\n  async githubOAuth() {}\n\n  @Get('/github/cb', { middleware: [GithubPassportMiddleware] })\n  async githubOAuthCallback() {\n    return this.ctx.state.user;\n  }\n}\n\n")),(0,r.kt)("h2",{id:"policy-options"},"Policy options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failureRedirect"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The url of the failed jump.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"session"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"The default is true. When it is turned on, the user information will be automatically set to the session")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionUserProperty"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"set to the key on the session, the default user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userProperty"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The key set to ctx.state or req, the default user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"successRedirect"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The address that jumps after user authentication is successful.")))),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"1-failed-to-serialize-user-into-session"},"1. Failed to serialize user into session"),(0,r.kt)("p",null,"Since the passport will try to write user data to the session by default, if you do not need to save the user to the session, you can turn off session support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  passport: {\n    session: false\n  }\n}\n")),(0,r.kt)("p",null,"If you explicitly need to save data to the Session, you need to rewrite the serialization method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PassportStrategy")," User. Please do not save particularly large data."),(0,r.kt)("p",null,"For example, the local strategy implemented by oneself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/strategy/local.strategy.ts\n\nimport { CustomStrategy, PassportStrategy } from '@midwayjs/passport';\nimport { Repository } from 'typeorm';\nimport { InjectEntityModel } from '@midwayjs/typeorm';\nimport { UserEntity } from './user';\nimport * as bcrypt from 'bcrypt';\n\n@CustomStrategy()\nexport class LocalStrategy extends PassportStrategy(Strategy) {\n\n  // ...\n  serializeUser(user, done) {\n    // You can save only the user name\n    done(null, user.username);\n  }\n\n  deserializeUser(id, done) {\n\n    // This is not an asynchronous method. You can check the user data from other places according to the user name.\n    const user = getUserFromDataBase(id);\n\n    done(null, user);\n  }\n}\n")))}m.isMDXComponent=!0}}]);