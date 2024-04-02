"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[69967],{55576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const r={title:"Quickstart",description:"Quickstart guide for web-core.",sidebar_position:2,tags:["rn-core","quickstart","setup"]},s="Quickstart",a={id:"quickstart",title:"Quickstart",description:"Quickstart guide for web-core.",source:"@site/docs/rn-core/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/rn-core/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/rn-core/quickstart.mdx",tags:[{label:"rn-core",permalink:"/docs/rn-core/tags/rn-core"},{label:"quickstart",permalink:"/docs/rn-core/tags/quickstart"},{label:"setup",permalink:"/docs/rn-core/tags/setup"}],version:"current",lastUpdatedAt:1710692958,formattedLastUpdatedAt:"Mar 17, 2024",sidebarPosition:2,frontMatter:{title:"Quickstart",description:"Quickstart guide for web-core.",sidebar_position:2,tags:["rn-core","quickstart","setup"]},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/rn-core/"},next:{title:"Introduction",permalink:"/docs/rn-core/local-user/introduction"}},c={},d=[{value:"Leave room",id:"leave-room",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,o.jsx)(t.admonition,{title:"Before Getting Started",type:"info",children:(0,o.jsxs)(t.p,{children:["Before you start integrating Dyte into your application, make sure you've read\nthe ",(0,o.jsx)(t.a,{href:"/getting-started",children:"Getting Started with Dyte"})," topic and completed the steps\nin the ",(0,o.jsx)(t.a,{href:"/getting-started#integrate-dyte",children:"Integrate Dyte"})," section."]})}),"\n",(0,o.jsx)(t.p,{children:"The DyteClient is the root class of the SDK. It is the main entry point of the\nSDK. It is the only class that you need to instantiate in order to use the SDK."}),"\n",(0,o.jsx)(t.p,{children:"To instantiate DyteClient, you can run the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import React from 'react';\nimport { useDyteClient, DyteProvider } from '@dytesdk/react-native-core';\n\nexport default function App() {\n  const [meeting, initMeeting] = useDyteClient();\n  React.useEffect(() => {\n    const init = async () => {\n      const meetingOptions = {\n        audio: true,\n        video: true,\n      };\n      await initMeeting({\n        authToken: 'YourAuthToken',\n        defaults: meetingOptions,\n      });\n    };\n    init();\n    if (meeting) meeting.joinRoom();\n  }, []);\n\n  if (meeting)\n    return (\n      <DyteProvider value={meeting}>\n        {/* Render you Components here*/}\n        {/* Components rendered inside DyteProvider can access DyteClient object using useDyteClient() hook */}\n      </DyteProvider>\n    );\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can get the authToken using our backend APIs and then pass it\nto the init method of DyteClient."}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["Once join room process completes ",(0,o.jsx)(t.code,{children:"roomJoined"})," event is emitted on ",(0,o.jsx)(t.code,{children:"meeting.self"}),"\nnamespace. If you want to take any actions like enabling audio, video or start\nand stop recording etc. it should be done after the ",(0,o.jsx)(t.code,{children:"roomJoined"})," event is fired."]}),(0,o.jsx)(t.p,{children:"For example:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"meeting.self.on('roomJoined', () => {\n  console.log('User has joined the room', meeting.self.roomJoined);\n  // run my actions.\n});\n\nawait meeting.joinRoom();\n"})})]}),"\n",(0,o.jsx)(t.h3,{id:"leave-room",children:"Leave room"}),"\n",(0,o.jsx)(t.p,{children:"Leave the meeting room."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"await meeting.leaveRoom();\n"})}),"\n",(0,o.jsx)(n,{children:(0,o.jsx)("title",{children:"React Native Core Quickstart"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);