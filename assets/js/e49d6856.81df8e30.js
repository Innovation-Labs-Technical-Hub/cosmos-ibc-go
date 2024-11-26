"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83203],{11547:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=s(85893),a=s(11151);const l={title:"Parameters",sidebar_label:"Parameters",sidebar_position:6,slug:"/apps/interchain-accounts/parameters"},r="Parameters",i={id:"apps/interchain-accounts/parameters",title:"Parameters",description:"The Interchain Accounts module contains the following on-chain parameters, logically separated for each distinct submodule:",source:"@site/versioned_docs/version-v9.0.x/02-apps/02-interchain-accounts/06-parameters.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/parameters",permalink:"/v9/apps/interchain-accounts/parameters",draft:!1,unlisted:!1,tags:[],version:"v9.0.x",sidebarPosition:6,frontMatter:{title:"Parameters",sidebar_label:"Parameters",sidebar_position:6,slug:"/apps/interchain-accounts/parameters"},sidebar:"defaultSidebar",previous:{title:"Messages",permalink:"/v9/apps/interchain-accounts/messages"},next:{title:"Transaction Encoding",permalink:"/v9/apps/interchain-accounts/tx-encoding"}},c={},o=[{value:"Controller Submodule Parameters",id:"controller-submodule-parameters",level:2},{value:"ControllerEnabled",id:"controllerenabled",level:3},{value:"Host Submodule Parameters",id:"host-submodule-parameters",level:2},{value:"HostEnabled",id:"hostenabled",level:3},{value:"AllowMessages",id:"allowmessages",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"The Interchain Accounts module contains the following on-chain parameters, logically separated for each distinct submodule:"}),"\n",(0,t.jsx)(n.h2,{id:"controller-submodule-parameters",children:"Controller Submodule Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default Value"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ControllerEnabled"})}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"controllerenabled",children:"ControllerEnabled"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ControllerEnabled"})," parameter controls a chains ability to service ICS-27 controller specific logic. This includes the sending of Interchain Accounts packet data as well as the following ICS-26 callback handlers:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnChanOpenInit"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnChanOpenAck"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnChanCloseConfirm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnAcknowledgementPacket"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnTimeoutPacket"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"host-submodule-parameters",children:"Host Submodule Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HostEnabled"})}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"AllowMessages"})}),(0,t.jsx)(n.td,{children:"[]string"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'["*"]'})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"hostenabled",children:"HostEnabled"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"HostEnabled"})," parameter controls a chains ability to service ICS-27 host specific logic. This includes the following ICS-26 callback handlers:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnChanOpenTry"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnChanOpenConfirm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnChanCloseConfirm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"OnRecvPacket"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"allowmessages",children:"AllowMessages"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AllowMessages"})," parameter provides the ability for a chain to limit the types of messages or transactions that hosted interchain accounts are authorized to execute by defining an allowlist using the Protobuf message type URL format."]}),"\n",(0,t.jsx)(n.p,{children:"For example, a Cosmos SDK-based chain that elects to provide hosted Interchain Accounts with the ability of governance voting and staking delegations will define its parameters as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"params": {\n  "host_enabled": true,\n  "allow_messages": ["/cosmos.staking.v1beta1.MsgDelegate", "/cosmos.gov.v1beta1.MsgVote"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["There is also a special wildcard ",(0,t.jsx)(n.code,{children:'"*"'})," value which allows any type of message to be executed by the interchain account. This must be the only value in the ",(0,t.jsx)(n.code,{children:"allow_messages"})," array."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"params": {\n  "host_enabled": true,\n  "allow_messages": ["*"]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(67294);const a={},l=t.createContext(a);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);