"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[47730],{53601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(74848),i=t(28453);const r={sidebar_position:4},s="Use Web Core Hooks",c={id:"using-hooks",title:"Use Web Core Hooks",description:"Dyte's React UI Kit provides multiple",source:"@site/docs/react-ui-kit/using-hooks.mdx",sourceDirName:".",slug:"/using-hooks",permalink:"/docs/react-ui-kit/using-hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/react-ui-kit/using-hooks.mdx",tags:[],version:"current",lastUpdatedAt:1709552848,formattedLastUpdatedAt:"Mar 4, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Customization Prerequisite",permalink:"/docs/react-ui-kit/basics/integrate"},next:{title:"DyteSetupScreen",permalink:"/docs/react-ui-kit/build-pre-call-ui/default-setup-screen"}},d={},l=[{value:"<code>&lt;DyteProvider /&gt;</code>",id:"dyteprovider-",level:2},{value:"<code>useDyteMeeting()</code>",id:"usedytemeeting",level:2},{value:"<code>useDyteSelector()</code>",id:"usedyteselector",level:2},{value:"Example",id:"example",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"use-web-core-hooks",children:"Use Web Core Hooks"}),"\n",(0,o.jsxs)(n.p,{children:["Dyte's React UI Kit provides multiple\n",(0,o.jsx)(n.a,{href:"https://beta.reactjs.org/reference/react",children:"Hooks"}),". Hooks let you use different\nReact features from your components."]}),"\n",(0,o.jsxs)(n.p,{children:["This provides seamless developer experience when integrating Dyte's UI Kit in\nyour React project. You can simply import the package from\n",(0,o.jsx)(n.code,{children:"dytesdk/react-web-core"}),", which is a hooks wrapper on ",(0,o.jsx)(n.code,{children:"dytesdk/web-core"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This page lists all the built-in Hooks in Dyte."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"<DyteProvider />"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"useDyteMeeting()"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"useDyteSelector()"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"dyteprovider-",children:(0,o.jsx)(n.code,{children:"<DyteProvider />"})}),"\n",(0,o.jsx)(n.p,{children:"It is a simple context provider providing the meeting object to child\ncomponents."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { useDyteClient } from '@dytesdk/react-web-core';\n\nfunction App() {\n  const [meeting, initMeeting] = useDyteClient();\n\n  useEffect(() => {\n    initMeeting({\n      authToken: '<auth-token>',\n      // set default values for user media\n      defaults: {\n        audio: false,\n        video: true,\n      },\n    });\n  }, []);\n\n  return (\n    <DyteProvider value={meeting}>\n      <Meeting />\n    </DyteProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"And to consume the context value, we provide two more hooks, each serving a\nspecific purpose."}),"\n",(0,o.jsx)(n.p,{children:"These are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"useDyteMeeting()"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"useDyteSelector()"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usedytemeeting",children:(0,o.jsx)(n.code,{children:"useDyteMeeting()"})}),"\n",(0,o.jsxs)(n.p,{children:["This hook essentially returns the ",(0,o.jsx)(n.code,{children:"meeting"})," object you passed to the\n",(0,o.jsx)(n.code,{children:"DyteProvider"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The value returned doesn't re-render always whenever properties inside the\nobject change."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { useDyteSelector, useDyteMeeting } from '@dytesdk/';\n\nfunction Meeting() {\n  const { meeting } = useDyteMeeting();\n\n  /*\n    use join() method or the setup screen component\n    to actually enter the meeting\n  */\n  useEffect(() => {\n    meeting.join();\n  }, [meeting]);\n\n  // show DyteMeeting\n  return <DyteMeeting meeting={meeting} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usedyteselector",children:(0,o.jsx)(n.code,{children:"useDyteSelector()"})}),"\n",(0,o.jsxs)(n.p,{children:["If you're familiar with Redux's\n",(0,o.jsx)(n.a,{href:"https://react-redux.js.org/api/hooks#useselector",children:"useSelector"})," hook, this hook\nworks in a similar way."]}),"\n",(0,o.jsxs)(n.p,{children:["It allows you to extract data from the ",(0,o.jsx)(n.code,{children:"meeting"})," object using a selector\nfunction."]}),"\n",(0,o.jsx)(n.p,{children:"This hook will only cause a re-render when the actual data you returned for\nchanges."}),"\n",(0,o.jsx)(n.p,{children:"Here is how you can get all the joined participants data:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const joinedParticipants = useDyteSelector(\n  (meeting) => meeting.participants.joined\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Refer to core ",(0,o.jsx)(n.a,{href:"/web-core/reference/DyteClient",children:"documentation for reference"})," on\nthe various properties of the ",(0,o.jsx)(n.code,{children:"meeting"})," object."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';\nimport { DyteGrid, DyteButton } from '@dytesdk/react-ui-kit';\n\nfunction Meeting() {\n  const { meeting } = useDyteMeeting();\n  const roomJoined = useDyteSelector((m) => m.self.roomJoined);\n\n  if (!roomJoined) {\n    return (\n      <div>\n        <p>You haven't joined the room yet.</p>\n        <DyteButton onClick={() => meeting.joinRoom()}>Join Room</DyteButton>\n      </div>\n    );\n  }\n\n  return (\n    <div style={{ height: '100vh', width: '100vw' }}>\n      <DyteGrid meeting={meeting} />\n    </div>\n  );\n}\n\nexport default Meeting;\n"})}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)("title",{children:"React UI Kit Use Web Core Hooks"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);