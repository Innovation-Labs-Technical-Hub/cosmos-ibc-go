"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83090],{72027:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(85893),a=t(11151);const o={title:"IBC middleware",sidebar_label:"IBC middleware",sidebar_position:1,slug:"/ibc/middleware/overview"},r="IBC middleware",s={id:"ibc/middleware/overview",title:"IBC middleware",description:"Learn how to write your own custom middleware to wrap an IBC application, and understand how to hook different middleware to IBC base applications to form different IBC application stacks",source:"@site/versioned_docs/version-v8.5.x/01-ibc/04-middleware/01-overview.md",sourceDirName:"01-ibc/04-middleware",slug:"/ibc/middleware/overview",permalink:"/v8/ibc/middleware/overview",draft:!1,unlisted:!1,tags:[],version:"v8.5.x",sidebarPosition:1,frontMatter:{title:"IBC middleware",sidebar_label:"IBC middleware",sidebar_position:1,slug:"/ibc/middleware/overview"},sidebar:"defaultSidebar",previous:{title:"Routing",permalink:"/v8/ibc/apps/routing"},next:{title:"Create a custom IBC middleware",permalink:"/v8/ibc/middleware/develop"}},d={},l=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Why middleware?",id:"why-middleware",level:2},{value:"Definitions",id:"definitions",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"ibc-middleware",children:"IBC middleware"}),"\n",(0,n.jsx)(i.admonition,{title:"Synopsis",type:"note",children:(0,n.jsx)(i.p,{children:"Learn how to write your own custom middleware to wrap an IBC application, and understand how to hook different middleware to IBC base applications to form different IBC application stacks"})}),"\n",(0,n.jsx)(i.p,{children:"This documentation serves as a guide for middleware developers who want to write their own middleware and for chain developers who want to use IBC middleware on their chains."}),"\n",(0,n.jsx)(i.p,{children:"After going through the overview they can consult respectively:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/v8/ibc/middleware/develop",children:"documentation on developing custom middleware"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/v8/ibc/middleware/integration",children:"documentation on integrating middleware into a stack on a chain"})}),"\n"]}),"\n",(0,n.jsxs)(i.admonition,{type:"note",children:[(0,n.jsx)(i.h2,{id:"pre-requisite-readings",children:"Pre-requisite readings"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/v8/ibc/overview",children:"IBC Overview"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/v8/ibc/integration",children:"IBC Integration"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/v8/ibc/apps/apps",children:"IBC Application Developer Guide"})}),"\n"]})]}),"\n",(0,n.jsx)(i.h2,{id:"why-middleware",children:"Why middleware?"}),"\n",(0,n.jsxs)(i.p,{children:["IBC applications are designed to be self-contained modules that implement their own application-specific logic through a set of interfaces with the core IBC handlers. These core IBC handlers, in turn, are designed to enforce the correctness properties of IBC (transport, authentication, ordering) while delegating all application-specific handling to the IBC application modules. ",(0,n.jsx)(i.strong,{children:"However, there are cases where some functionality may be desired by many applications, yet not appropriate to place in core IBC."})]}),"\n",(0,n.jsx)(i.p,{children:"Middleware allows developers to define the extensions as separate modules that can wrap over the base application. This middleware can thus perform its own custom logic, and pass data into the application so that it may run its logic without being aware of the middleware's existence. This allows both the application and the middleware to implement its own isolated logic while still being able to run as part of a single packet flow."}),"\n",(0,n.jsx)(i.h2,{id:"definitions",children:"Definitions"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Middleware"}),": A self-contained module that sits between core IBC and an underlying IBC application during packet execution. All messages between core IBC and underlying application must flow through middleware, which may perform its own custom logic."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Underlying Application"}),": An underlying application is the application that is directly connected to the middleware in question. This underlying application may itself be middleware that is chained to a base application."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Base Application"}),": A base application is an IBC application that does not contain any middleware. It may be nested by 0 or multiple middleware to form an application stack."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Application Stack (or stack)"}),": A stack is the complete set of application logic (middleware(s) + base application) that gets connected to core IBC. A stack may be just a base application, or it may be a series of middlewares that nest a base application."]}),"\n",(0,n.jsx)(i.p,{children:"The diagram below gives an overview of a middleware stack consisting of two middleware (one stateless, the other stateful)."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"middleware-stack.png",src:t(55600).Z+"",width:"1209",height:"1352"})}),"\n",(0,n.jsx)(i.p,{children:"Keep in mind that:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"The order of the middleware matters"})," (more on how to correctly define your stack in the code will follow in the ",(0,n.jsx)(i.a,{href:"/v8/ibc/middleware/integration",children:"integration section"}),")."]}),"\n",(0,n.jsx)(i.li,{children:"Depending on the type of message, it will either be passed on from the base application up the middleware stack to core IBC or down the stack in the reverse situation (handshake and packet callbacks)."}),"\n",(0,n.jsxs)(i.li,{children:["IBC middleware will wrap over an underlying IBC application and sits between core IBC and the application. It has complete control in modifying any message coming from IBC to the application, and any message coming from the application to core IBC. ",(0,n.jsx)(i.strong,{children:"Middleware must be completely trusted by chain developers who wish to integrate them"}),", as this gives them complete flexibility in modifying the application(s) they wrap."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},55600:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/middleware-stack-e1a1a53f5bdd38e895527b182ea68f7e.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>s,a:()=>r});var n=t(67294);const a={},o=n.createContext(a);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);