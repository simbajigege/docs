"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[14482],{24133:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=i(74848),r=i(28453);const a={title:"Picture-in-Picture",description:"Events, methods and data pertaining to browser picture in picture mode",sidebar_position:3,tags:["react-web-core","participants","participant"]},s=void 0,c={id:"participants/pip",title:"Picture-in-Picture",description:"Events, methods and data pertaining to browser picture in picture mode",source:"@site/docs/react-web-core/participants/pip.mdx",sourceDirName:"participants",slug:"/participants/pip",permalink:"/docs/react-web-core/participants/pip",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/participants/pip.mdx",tags:[{label:"react-web-core",permalink:"/docs/react-web-core/tags/react-web-core"},{label:"participants",permalink:"/docs/react-web-core/tags/participants"},{label:"participant",permalink:"/docs/react-web-core/tags/participant"}],version:"current",lastUpdatedAt:1706782034,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:3,frontMatter:{title:"Picture-in-Picture",description:"Events, methods and data pertaining to browser picture in picture mode",sidebar_position:3,tags:["react-web-core","participants","participant"]},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/react-web-core/participants/events"},next:{title:"Permissions",permalink:"/docs/react-web-core/participants/permissions"}},o={},p=[{value:"Methods",id:"methods",level:2},{value:"Check if supported",id:"check-if-supported",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Enable",id:"enable",level:3},{value:"Disable",id:"disable",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Picture-in-Picture API allows you to render ",(0,n.jsx)(t.code,{children:"meeting.participants.active"})," participant's video as a floating tile outside of the current webpage's context."]}),"\n",(0,n.jsx)(t.p,{children:"Supported in Chrome/Edge/Chromium based browsers"}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"check-if-supported",children:"Check if supported"}),"\n",(0,n.jsxs)(t.p,{children:["Use the boolean value at ",(0,n.jsx)(t.code,{children:"meeting.participants.pip.isSupported"})," to check if the browser supports PIP capabilities"]}),"\n",(0,n.jsx)(t.h3,{id:"initialization",children:"Initialization"}),"\n",(0,n.jsxs)(t.p,{children:["Call ",(0,n.jsx)(t.code,{children:"meeting.participants.pip.init()"})," to activate PIP mode. Optionally you can pass height and width the configure the size of the PIP tile"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const { meeting } = useDyteMeeting();\n\nmeeting.participants.pip.init({\n  width: 360,\n  height: 360,\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"enable",children:"Enable"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"meeting.participants.pip.enable()"})," to enable PIP mode if disabled"]}),"\n",(0,n.jsx)(t.h3,{id:"disable",children:"Disable"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"meeting.participants.pip.disable()"})," to enable PIP mode if enabled"]}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"React Web Core Picture-in-Picture"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);