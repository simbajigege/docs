"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[64058],{42963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const r={description:"Learn how to use and customize the WebinarAlertView component in Dyte's iOS UiKit with our detailed documentation."},s="WebinarAlertView",a={id:"components/dyte-join-stage",title:"WebinarAlertView",description:"Learn how to use and customize the WebinarAlertView component in Dyte's iOS UiKit with our detailed documentation.",source:"@site/docs/ios/components/dyte-join-stage.mdx",sourceDirName:"components",slug:"/components/dyte-join-stage",permalink:"/docs/ios/components/dyte-join-stage",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/ios/components/dyte-join-stage.mdx",tags:[],version:"current",lastUpdatedAt:1707374989,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{description:"Learn how to use and customize the WebinarAlertView component in Dyte's iOS UiKit with our detailed documentation."},sidebar:"tutorialSidebar",previous:{title:"GridView",permalink:"/docs/ios/components/dyte-grid"},next:{title:"DyteLeaveDialog",permalink:"/docs/ios/components/dyte-leave-meeting"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"webinaralertview",children:"WebinarAlertView"}),"\n",(0,o.jsx)(t.p,{children:"A confirmation dialog screen which is shown"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"When the user's request to Join Stage is approved by the meeting host."}),"\n",(0,o.jsx)(t.li,{children:"When host invites the localUser to join stage."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"let alert = WebinarAlertView(meetingClient: meeting, participant: meeting.localUser)\nalert.layer.zPosition = 1.0\nbaseController.view.addSubview(alert)\nalert.confirmAndJoinButton\n  .addTarget(self,\n            action: #selector(alertConfirmAndJoinClick(button:)),\n            for: .touchUpInside)\nalert.cancelButton\n  .addTarget(self,\n            action: #selector(alertCancelButton(button:)),\n            for: .touchUpInside)\n"})}),"\n",(0,o.jsx)(n,{children:(0,o.jsx)("title",{children:"iOS WebinarAlertView"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);