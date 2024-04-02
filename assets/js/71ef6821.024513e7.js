"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[10499],{47989:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var r=s(74848),o=s(28453);const i={title:"Create a Breakout Room",sidebar_position:2,description:"Learn how to create breakout rooms with Dyte's capabilities. Follow our guide for effective implementation and management of breakout rooms."},a=void 0,n={id:"capabilities/breakoutroom/create-breakout-rooms",title:"Create a Breakout Room",description:"Learn how to create breakout rooms with Dyte's capabilities. Follow our guide for effective implementation and management of breakout rooms.",source:"@site/docs/guides/capabilities/breakoutroom/create-breakout-rooms.mdx",sourceDirName:"capabilities/breakoutroom",slug:"/capabilities/breakoutroom/create-breakout-rooms",permalink:"/docs/guides/capabilities/breakoutroom/create-breakout-rooms",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/breakoutroom/create-breakout-rooms.mdx",tags:[],version:"current",lastUpdatedAt:1709899166,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:2,frontMatter:{title:"Create a Breakout Room",sidebar_position:2,description:"Learn how to create breakout rooms with Dyte's capabilities. Follow our guide for effective implementation and management of breakout rooms."},sidebar:"tutorialSidebar",previous:{title:"Introduction to Dyte's Breakout Rooms",permalink:"/docs/guides/capabilities/breakoutroom/introduction-breakout-rooms"},next:{title:"Integrating Breakout Rooms",permalink:"/docs/guides/capabilities/breakoutroom/integrating-breakout-rooms"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Create a Dyte Developer Account\u200b",id:"step-1-create-a-dyte-developer-account",level:2},{value:"Step 2: Create Presets\u200b",id:"step-2-create-presets",level:2},{value:"Host",id:"host",level:3},{value:"Participants",id:"participants",level:3},{value:"Step 3: Save the Preset Changes\u200b",id:"step-3-save-the-preset-changes",level:2},{value:"Step 4: Create a Meeting\u200b",id:"step-4-create-a-meeting",level:2},{value:"Step 5: Add Participants\u200b",id:"step-5-add-participants",level:2},{value:"Step 6: Start Breakout Room",id:"step-6-start-breakout-room",level:2},{value:"Assign participants automatically",id:"assign-participants-automatically",level:3},{value:"Assign participants manually",id:"assign-participants-manually",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Breakout rooms allow the participants to split in separate sessions. The host can create breakout rooms, assign participants, start and close the breakout rooms."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For hosts ensure that you've created a preset with the Full Access permissions. See ",(0,r.jsx)(t.a,{href:"/guides/capabilities/breakoutroom/create-breakout-rooms#host",children:"hosts permissions"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["For participants you've created a preset with Switch to Parent Meeting and/or Switch Connected Meetings permissions. See ",(0,r.jsx)(t.a,{href:"/guides/capabilities/breakoutroom/create-breakout-rooms#participants",children:"participants permissions"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To create a breakout room, do the following:"}),"\n",(0,r.jsx)(t.h2,{id:"step-1-create-a-dyte-developer-account",children:"Step 1: Create a Dyte Developer Account\u200b"}),"\n",(0,r.jsxs)(t.p,{children:["Login to the ",(0,r.jsx)(t.a,{href:"https://dev.dyte.io/",children:"Developer Portal"})," and create an account."]}),"\n",(0,r.jsx)(t.h2,{id:"step-2-create-presets",children:"Step 2: Create Presets\u200b"}),"\n",(0,r.jsx)(t.p,{children:"A preset is a set of permissions and UI configurations that are applied to hosts and participants. They determine the look, feel, and behavior of the breakout room, with options to set varied permissions, such as the ability to create polls or chat, control access for plugins, and more."}),"\n",(0,r.jsxs)(t.p,{children:["For breakout rooms, you must provide the following permissions for hosts and participants in the ",(0,r.jsx)(t.strong,{children:"Connected Meetings"}),". However, ensure that you've provided other necessary permissions as well for your meeting other than the ",(0,r.jsx)(t.strong,{children:"Connected Meetings"})," permissions for hosts and participants."]}),"\n",(0,r.jsx)(t.h3,{id:"host",children:"Host"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Full Access"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Permission"})})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("img",{src:"/static/breakoutrooms/full-access.png",width:"300",height:"100",alt:"breakout-room-perms",className:"breakoutroom-host-perms"})}),(0,r.jsx)(t.td,{children:"Allows you to create breakout rooms, assign participants, start and close the breakout rooms, switch between breakout rooms."})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"participants",children:"Participants"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Switch Connected Meetings"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Permission"})})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("img",{src:"/static/breakoutrooms/switch-connected-meetings.png",width:"200",height:"100",alt:"breakout-room-part-perms",className:"breakoutroom-participants-perms"})}),(0,r.jsx)(t.td,{children:"Allows you to create breakout rooms, assign participants, start and close the breakout rooms, switch between breakout rooms."})]})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Switch to Parent Meeting"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Permission"})})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("img",{src:"/static/breakoutrooms/switch-parent-meeting.png",width:"200",height:"100",alt:"breakout-room-switch-perms",className:"breakoutroom-switch-perms"})}),(0,r.jsx)(t.td,{children:"Allows you to switch to the main meeting."})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["You can choose to provide ",(0,r.jsx)(t.strong,{children:"Switch Connected Meetings"})," and ",(0,r.jsx)(t.strong,{children:"Switch to Parent Meeting"})," permissions both to the participants."]}),"\n",(0,r.jsx)(t.h2,{id:"step-3-save-the-preset-changes",children:"Step 3: Save the Preset Changes\u200b"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Once you've made all the changes that you need to add to your preset, click ",(0,r.jsx)(t.strong,{children:"Save"})," at the right-corner."]}),"\n",(0,r.jsxs)(t.li,{children:["Enter the name for your preset and click ",(0,r.jsx)(t.strong,{children:"Save"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Your preset is listed. Click ",(0,r.jsx)(t.strong,{children:"Edit"})," to make any changes to the preset."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-4-create-a-meeting",children:"Step 4: Create a Meeting\u200b"}),"\n",(0,r.jsxs)(t.p,{children:["Create a Dyte meeting using the ",(0,r.jsx)(t.a,{href:"/api#/operations/create_meeting",children:"Create Meeting API"}),". This API returns a unique identifier for your meeting."]}),"\n",(0,r.jsx)(t.h2,{id:"step-5-add-participants",children:"Step 5: Add Participants\u200b"}),"\n",(0,r.jsxs)(t.p,{children:["After you've created the meeting, add each participant to the meeting using the ",(0,r.jsx)(t.a,{href:"/api#/operations/add_participant",children:"Add Participant API"}),".\nThe ",(0,r.jsx)(t.code,{children:"presetName"})," created earlier must be passed in the body of the Add Participant API request."]}),"\n",(0,r.jsx)(t.h2,{id:"step-6-start-breakout-room",children:"Step 6: Start Breakout Room"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In your Dyte meeting, click ",(0,r.jsx)(t.strong,{children:"Breakout Rooms"}),"."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/static/breakoutrooms/breakout-room1.png",width:"600",height:"300",alt:"breakout-room",className:"breakout-room-create"}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Create Breakout"}),", add the number of rooms you want and click ",(0,r.jsx)(t.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/static/breakoutrooms/create-br.png",width:"300",height:"200",alt:"breakout-room",className:"breakout-room-create"}),"\n",(0,r.jsx)(t.p,{children:"Once you've created a breakout room, assign participants to the breakout rooms. You have the option to either individually select the participants and add them to the room manually or allow Dyte to split your participants evenly across the rooms."}),"\n",(0,r.jsx)(t.h3,{id:"assign-participants-automatically",children:"Assign participants automatically"}),"\n",(0,r.jsx)(t.p,{children:"To assign participants automatically, do the following:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Assign Participants"}),", click the shuffle button."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/static/breakoutrooms/shuffle.png",width:"300",height:"100",alt:"breakout-room",className:"breakout-room-create"}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Participants are assigned to the rooms."}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/static/breakoutrooms/assign-participants.png",width:"600",height:"300",alt:"breakout-room-assign-participants",className:"breakout-room-assign"}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"You can also edit the room names. To edit the room name, click the pencil icon beside the room name."}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/static/breakoutrooms/edit-br.png",width:"400",height:"200",alt:"breakout-room-edit-participants",className:"breakout-room-edit"}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"You can also choose to move the participants to different rooms."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Once you've made all the changes, click ",(0,r.jsx)(t.strong,{children:"Start Breakout"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Yes, start"})," in the ",(0,r.jsx)(t.strong,{children:"Start breakout rooms"})," pop-up. You will enter the breakout room."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"assign-participants-manually",children:"Assign participants manually"}),"\n",(0,r.jsx)(t.p,{children:"You can select which participants you would like in each room. To assign participants manually, do the following:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Assign Participants"}),", select the participant/s that you want to assign to a room."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/static/breakoutrooms/assign-manual.png",width:"400",height:"200",alt:"breakout-room-assign-manual",className:"breakout-assign-manual"}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.strong,{children:"Rooms"}),", click ",(0,r.jsx)(t.strong,{children:"Assign"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Once you've assigned all the participants to the rooms of your choice, click ",(0,r.jsx)(t.strong,{children:"Start Breakout"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Yes, start"})," in the ",(0,r.jsx)(t.strong,{children:"Start breakout rooms"})," pop-up. You will enter the breakout room."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("title",{children:"Create a Breakout Room Guide"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to create breakout rooms with Dyte's capabilities. Follow our guide for effective implementation and management of breakout rooms."})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>n});var r=s(96540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);