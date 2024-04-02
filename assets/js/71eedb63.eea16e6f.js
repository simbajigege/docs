"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[57166],{25097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453),r=n(81398);const o={title:"Edit user name",sidebar_position:2},a=void 0,l={id:"build-pre-call-ui/build-your-own/edit-user-name",title:"Edit user name",description:"A common use case of pre-call UI is to give the user a option to set / edit their name.",source:"@site/docs/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name.mdx",sourceDirName:"build-pre-call-ui/build-your-own",slug:"/build-pre-call-ui/build-your-own/edit-user-name",permalink:"/docs/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name.mdx",tags:[],version:"current",lastUpdatedAt:1710891814,formattedLastUpdatedAt:"Mar 19, 2024",sidebarPosition:2,frontMatter:{title:"Edit user name",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic structure",permalink:"/docs/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton"},next:{title:"Audio/video - Preview",permalink:"/docs/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-preview"}},c={},d=[{value:"Permissions",id:"permissions",level:3},{value:"File: CustomMeetingPreview.tsx",id:"file-custommeetingpreviewtsx",level:3}];function m(e){const t={code:"code",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"A common use case of pre-call UI is to give the user a option to set / edit their name."}),"\n",(0,i.jsx)(t.h3,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsxs)(t.p,{children:["Requires ",(0,i.jsx)(t.code,{children:"meeting.self.permissions.canEditDisplayName"})," to be ",(0,i.jsx)(t.code,{children:"true"})]}),"\n",(0,i.jsxs)(t.p,{children:["In the preset editor, ensure ",(0,i.jsx)(t.code,{children:"Miscellaneous > Edit Name"})," is toggled enabled."]}),"\n",(0,i.jsx)("img",{src:"/static/react/preset-edit-name.png"}),"\n",(0,i.jsx)(t.h3,{id:"file-custommeetingpreviewtsx",children:"File: CustomMeetingPreview.tsx"}),"\n",(0,i.jsxs)(t.p,{children:["We add a ",(0,i.jsx)(t.code,{children:"<input>"})," element for entering the participant name. We should not show this input if the user doese not have permission to edit name (",(0,i.jsx)(t.code,{children:"permissions.canEditDisplayName"}),")"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"await meeting.self.setName(participantName);"})," sets the new name for the participant."]}),"\n",(0,i.jsxs)(t.p,{children:["At the end, we let user join the meeting using ",(0,i.jsx)(t.code,{children:"await meeting.join();"}),"."]}),"\n",(0,i.jsx)(r.A,{highlight:[{start:8,end:8},{start:29,end:30},{start:44,end:44}],hide:[{start:1,end:4}],file:'\nimport { useDyteMeeting, useDyteSelector } from "@dytesdk/react-web-core";\nimport { DyteButton } from "@dytesdk/react-ui-kit";\nimport { useState, useEffect } from "react";\n\nexport default function CustomMeetingPreview() {\n  const { meeting } = useDyteMeeting();\n  const permissions = useDyteSelector((m) => m.self.permissions);\n  const [participantName, setParticipantName] = useState("");\n\n  useEffect(() => {\n    if (!meeting) {\n      return;\n    }\n    setParticipantName(meeting.self.name);\n  }, [meeting]);\n\n  return (\n    <div\n      className="h-full w-full flex flex-col items-center justify-center"\n      style={{ minHeight: "400px" }}\n    >\n      <div className="flex w-full items-center justify-around p-[10%]">\n        <div></div>\n        <div className="flex w-1/4 flex-col justify-between">\n          <div className="flex flex-col items-center">\n            <p>Joining as</p>\n          </div>\n          {permissions.canEditDisplayName && (\n            <input\n              placeholder="Your name"\n              className="mb-10 rounded-sm border p-2.5 focus:border-blue-500"\n              value={participantName}\n              onChange={(event) => setParticipantName(event.target.value)}\n            />\n          )}\n          <DyteButton\n            kind="wide"\n            size="lg"\n            style={{ cursor: participantName ? "pointer" : "not-allowed" }}\n            onClick={async () => {\n              if (participantName) {\n                if (permissions.canEditDisplayName) {\n                  await meeting.self.setName(participantName);\n                }\n                await meeting.join();\n              }\n            }}\n          >\n            Join\n          </DyteButton>\n        </div>\n      </div>\n    </div>\n  );\n}\n'})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},81398:(e,t,n)=>{n.d(t,{A:()=>f});var i=n(24967),s=n(96540);const r=e=>`import React, { useEffect } from 'react';\nimport { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';\nimport { provideDyteDesignSystem } from '@dytesdk/react-ui-kit';\nimport Custom from './meeting.tsx';\n\nconst initInProgress = {\n  value: false,\n};\n\nexport default function App() {\n  const [meeting, initMeeting] = useDyteClient();\n\n  useEffect(() => {\n    if (initInProgress.value) return;\n    initInProgress.value = true;\n    initMeeting({\n      roomName: 'qplrfc-uuujcj',\n      authToken:\n        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds',\n      defaults: {\n        audio: false,\n        video: false,\n      },\n    }).then((m) => {\n\n\n      // window.meeting = m;\n      m.meta.meetingStartedTimestamp = new Date();\n      m.participants.setMockParticipantCount(5, 5);\n      // m.recording.recordingState = 'RECORDING';\n      const theme = document.getElementsByTagName('html')[0].dataset['theme'];\n      initInProgress.value = false;\n      provideDyteDesignSystem(document.body, {\n        theme: "${e}",\n      });\n      document.getElementsByTagName("html")[0].classList.remove("dark");\n      document.getElementsByTagName("html")[0].classList.remove("light");\n      document.getElementsByTagName("html")[0].classList.add("${e}");\n\n      HTMLAudioElement.prototype.play = function() {};\n      window.tailwind.config.darkMode = 'selector';\n    });\n  }, []);\n\n\n  return (<div className="bg-white dark:bg-black flex justify-center items-center w-full h-screen">\n    <DyteProvider value={meeting}><Custom /></DyteProvider>\n    </div>\n  );\n}`;var o=n(33257),a=n(59047);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){l(e,t,n[t])}))}return e}const d=(e,t,n,i={})=>"react-ts"==e?{files:{"/App.tsx":r(t),"/meeting.tsx":n},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(i)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":n,"/src/app/app.module.ts":"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\n\nimport { AppComponent } from './app.component';\n\nimport { DyteComponentsModule } from '@dytesdk/angular-ui-kit';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, DyteComponentsModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}"},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(i)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":n},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]},m=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},u=(e,t)=>{let n=[];return e.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"highlight",line:t})})),t.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"hide",line:t})})),n},p=e=>"light"===e?a.Zw:a.iU;function f({file:e,files:t={},framework:n="react-ts",entry:r,highlight:a=[],additionalDecorators:l=[],hide:f=[],minHeight:h="480px"}){const{colorMode:g}=(0,o.G)(),v=d(n,g,null!=e?e:"",t),x=m(n),y=[...l,...u(a,f)],[w,b]=(0,s.useState)(0===y.length);return(0,s.useEffect)((()=>{const e=()=>{0!==y.length&&1==w&&b(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[y.length,w]),s.createElement(i.l5,{template:n,customSetup:{dependencies:c({},x)},theme:p(g),options:{activeFile:v.activeFile,visibleFiles:v.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...v.scripts]},files:v.files},s.createElement("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},s.createElement("span",null,"LIVE EDITOR"),s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},s.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),s.createElement("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4"},s.createElement("div",{onClick:e=>{e.stopPropagation(),b(!0)},className:"cursor-text"},w?s.createElement(i.cW,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):s.createElement(i.R8,{className:"code-viewer",initMode:"immediate",decorators:y,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})),s.createElement(i.G5,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:h}})))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);