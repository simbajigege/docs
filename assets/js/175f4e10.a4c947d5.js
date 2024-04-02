"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[45840],{40485:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=i(74848),n=i(28453);const r={title:"Stop Recording a Meeting",sidebar_position:7,description:"Learn how to stop recordings with Dyte's recording capabilities. Follow our guide for effective recording termination."},s=void 0,a={id:"capabilities/recording/stop-recording",title:"Stop Recording a Meeting",description:"Learn how to stop recordings with Dyte's recording capabilities. Follow our guide for effective recording termination.",source:"@site/docs/guides/capabilities/recording/stop-recording.mdx",sourceDirName:"capabilities/recording",slug:"/capabilities/recording/stop-recording",permalink:"/docs/guides/capabilities/recording/stop-recording",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/recording/stop-recording.mdx",tags:[],version:"current",lastUpdatedAt:1710137968,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:7,frontMatter:{title:"Stop Recording a Meeting",sidebar_position:7,description:"Learn how to stop recordings with Dyte's recording capabilities. Follow our guide for effective recording termination."},sidebar:"tutorialSidebar",previous:{title:"Livestream the Recording to an External RTMP Endpoint",permalink:"/docs/guides/capabilities/recording/livestream-recording"},next:{title:"Manage Dyte's Default Recording Upload Settings",permalink:"/docs/guides/capabilities/recording/configure-dyte-bucket-config"}},c={},d=[];function p(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Dyte recordings can be stopped in any of the following ways:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Automatic Stop (Empty meeting)"}),": A Dyte recording will automatically stop\nif the meeting has no participants for a duration of 1 minute or more. This\nwait time can be customized by contacting Dyte's support team to configure a\ncustom value for your organization."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Automatic Stop (maxSeconds elapsed)"}),": A recording will automatically stop\nwhen it reaches the duration specified by the ",(0,o.jsx)(t.code,{children:"max_seconds"})," parameter passed\nwhile starting the recording, regardless of whether participants are present\nin the meeting. If this parameter is not passed, it defaults to 24 hours\n(86400 seconds)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Using Stop Recording API"}),": A recording can also be stopped by passing the\nrecording ID & ",(0,o.jsx)(t.code,{children:"stop"})," action to our ",(0,o.jsx)(t.a,{href:"/api/?v=v2#/operations/pause_resume_stop_recording",children:"Pause/Resume/Stop recording"}),"\nAPI."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["When a recording is stopped, it transitions to the ",(0,o.jsx)(t.code,{children:"UPLOADING"})," state and then to the ",(0,o.jsx)(t.code,{children:"UPLOADED"})," state after it has been transferred to Dyte's storage and any external storage that has been set up."]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("title",{children:"Stop Recording a Meeting Guide"}),(0,o.jsx)("meta",{name:"description",content:"Learn how to stop recordings with Dyte's recording capabilities. Follow our guide for effective recording termination."})]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var o=i(96540);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);