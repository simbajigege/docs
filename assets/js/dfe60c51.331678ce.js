"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[59109],{72563:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(74848),r=i(28453);const s={sidebar_position:5,slug:"/basics/display-videos"},d="Render participant videos",a={id:"display-videos",title:"Render participant videos",description:"To display the videos of all participants you need to show on the screen, you",source:"@site/docs/react-ui-kit/display-videos.mdx",sourceDirName:".",slug:"/basics/display-videos",permalink:"/docs/react-ui-kit/basics/display-videos",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/react-ui-kit/display-videos.mdx",tags:[],version:"current",lastUpdatedAt:1710630131,formattedLastUpdatedAt:"Mar 16, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/basics/display-videos"},sidebar:"tutorialSidebar",previous:{title:"Virtual background",permalink:"/docs/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware"},next:{title:"Gallery",permalink:"/docs/react-ui-kit/components"}},l={},c=[{value:"Render each participant manually",id:"render-each-participant-manually",level:2},{value:"Grid Components",id:"grid-components",level:2},{value:"Parent Grid Component",id:"parent-grid-component",level:4},{value:"Normal Grid Components",id:"normal-grid-components",level:4},{value:"DyteSimpleGrid",id:"dytesimplegrid",level:5},{value:"DyteSimpleGrid",id:"dytesimplegrid-1",level:5},{value:"DyteMixedGrid",id:"dytemixedgrid",level:5},{value:"Example for SimpleGrid",id:"example-for-simplegrid",level:5}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"render-participant-videos",children:"Render participant videos"}),"\n",(0,t.jsx)(n.p,{children:"To display the videos of all participants you need to show on the screen, you\ncan either render each participant tile manually or choose from our pre built\nvideo tile grid components"}),"\n",(0,t.jsx)(n.h2,{id:"render-each-participant-manually",children:"Render each participant manually"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Meeting() {\n  const { meeting } = useDyteMeeting();\n  const activeParticipants = useDyteSelector(\n    (meeting) => meeting.participants.active\n  );\n\n  function ParticipantTile({ participant, meeting }) {\n    return (\n      <DyteParticipantTile\n        participant={participant}\n        style={{\n          maxWidth: '240px',\n        }}\n      >\n        <DyteNameTag participant={participant} meeting={meeting}>\n          <DyteAudioVisualizer participant={participant} />\n        </DyteNameTag>\n        <DyteAvatar size=\"sm\" participant={participant} />\n      </DyteParticipantTile>\n    );\n  }\n\n  return (\n    <div\n      id=\"grid\"\n      style={{\n        display: 'flex',\n        flexWrap: 'wrap',\n        alignContent: 'center',\n        justifyContent: 'center',\n        gap: '1rem',\n      }}\n    >\n      {activeParticipants.toArray().map((participant) => (\n        <ParticipantTile participant={participant} meeting={meeting} />\n      ))}\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"But in the real world, a video tile grid is more complex, it is responsive, tile\nsizes are dynamic, there are different layouts, the grid handles screensharing\netc."}),"\n",(0,t.jsx)(n.p,{children:"Dyte has ready to use grid components, that you can use out of the box"}),"\n",(0,t.jsx)(n.h2,{id:"grid-components",children:"Grid Components"}),"\n",(0,t.jsx)(n.p,{children:"There are two types of grid components, so that the grid can be easily extended\nand modularized."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Parent Grid component - ",(0,t.jsx)(n.code,{children:"DyteGrid"})]}),"\n",(0,t.jsxs)(n.li,{children:["Child Grid components each having a different layour - ",(0,t.jsx)(n.code,{children:"DyteSimpleGrid"}),",\n",(0,t.jsx)(n.code,{children:"DyteMixedGrid"}),", ",(0,t.jsx)(n.code,{children:"DyteSpotlightGrid"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parent-grid-component",children:"Parent Grid Component"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"DyteGrid"})," component is a monolith component which handles all grid related\nevents and data on it's own and passes the following props to it's children."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Prop"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"participants[]"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Active Participants"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"pinnedParticipants[]"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Pinned Participants"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"screenShareParticipants[]"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Participants who are screen sharing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"plugins[]"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Active Plugins"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"These props are passed to it's children which it computes from the UI Config\nwhich is passed to it. By default it will use the default UI Config."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Try editing the ",(0,t.jsx)(n.code,{children:"aspectRatio"})," and ",(0,t.jsx)(n.code,{children:"gap"})," props."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Example() {\n  const { meeting } = useDyteMeeting();\n\n  return (\n    <div style={{ width: \'100%\', height: \'400px\' }}>\n      <DyteGrid meeting={meeting} aspectRatio="16:9" gap="8" size="sm" />\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"normal-grid-components",children:"Normal Grid Components"}),"\n",(0,t.jsx)(n.p,{children:"These components just accept the props mentioned above and render the UI."}),"\n",(0,t.jsx)(n.p,{children:"Read more about them in their Reference pages."}),"\n",(0,t.jsx)(n.h5,{id:"dytesimplegrid",children:"DyteSimpleGrid"}),"\n",(0,t.jsxs)(n.p,{children:["Accepts: ",(0,t.jsx)(n.code,{children:"participants"}),", ",(0,t.jsx)(n.code,{children:"pinnedParticipants"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This grid renders just the ParticipantTiles of the participants you pass to it.\nIt also brings ",(0,t.jsx)(n.code,{children:"pinnedParticipants"})," to the start of the grid."]}),"\n",(0,t.jsx)(n.h5,{id:"dytesimplegrid-1",children:"DyteSimpleGrid"}),"\n",(0,t.jsxs)(n.p,{children:["Accepts: ",(0,t.jsx)(n.code,{children:"participants"}),", ",(0,t.jsx)(n.code,{children:"pinnedParticipants"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This grid renders the ParticipantTiles of the participants and\npinnedParticipants in separate grids."}),"\n",(0,t.jsx)(n.p,{children:"Pinned participants are in spotlight area, i.e; larger grid."}),"\n",(0,t.jsx)(n.h5,{id:"dytemixedgrid",children:"DyteMixedGrid"}),"\n",(0,t.jsxs)(n.p,{children:["Accepts: ",(0,t.jsx)(n.code,{children:"participants"}),", ",(0,t.jsx)(n.code,{children:"pinnedParticipants"}),", ",(0,t.jsx)(n.code,{children:"screenShareParticipants"}),",\n",(0,t.jsx)(n.code,{children:"plugins"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This grid renders screenshares as well as plugins in the main larger view and\nrenders a smaller grid on the right side which is configurable via the UI\nConfig. You can use SimleGrid or SpotlightGrid here."}),"\n",(0,t.jsxs)(n.p,{children:["If you just want to render ",(0,t.jsx)(n.code,{children:"self"})," twice in a SimpleGrid:"]}),"\n",(0,t.jsx)(n.h5,{id:"example-for-simplegrid",children:"Example for SimpleGrid"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Example() {\n  const { meeting } = useDyteMeeting();\n  const [count, setCount] = useState(2);\n\n  if (!meeting) return null;\n\n  const add = () => setCount((count) => count + 1);\n  const remove = () => count > 1 && setCount((count) => count - 1);\n\n  const participants = new Array(count).fill(meeting.self);\n\n  return (\n    <div>\n      <div\n        style={{\n          display: 'flex',\n          flexWrap: 'wrap',\n          justifyContent: 'center',\n          gap: '12px',\n        }}\n      >\n        <DyteButton onClick={add}>Add</DyteButton>\n        <DyteButton variant=\"danger\" onClick={remove}>\n          Remove\n        </DyteButton>\n      </div>\n      <div style={{ width: '100%', height: '400px' }}>\n        <DyteSimpleGrid\n          aspectRatio=\"16:9\"\n          gap=\"8\"\n          participants={participants}\n        />\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)("title",{children:"React UI Kit Render participant videos"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);