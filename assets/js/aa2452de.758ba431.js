"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[35079],{84645:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=i(74848),a=i(28453);const s={title:"Participant Maps",description:"Events, methods and data pertaining to meeting participants.",sidebar_position:1,slug:"/participants/",tags:["web-core","participants","participant"]},r="Participant Maps",c={id:"participants/remote-participants",title:"Participant Maps",description:"Events, methods and data pertaining to meeting participants.",source:"@site/docs/web-core/participants/remote-participants.mdx",sourceDirName:"participants",slug:"/participants/",permalink:"/docs/web-core/participants/",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/web-core/participants/remote-participants.mdx",tags:[{label:"web-core",permalink:"/docs/web-core/tags/web-core"},{label:"participants",permalink:"/docs/web-core/tags/participants"},{label:"participant",permalink:"/docs/web-core/tags/participant"}],version:"current",lastUpdatedAt:1711302110,formattedLastUpdatedAt:"Mar 24, 2024",sidebarPosition:1,frontMatter:{title:"Participant Maps",description:"Events, methods and data pertaining to meeting participants.",sidebar_position:1,slug:"/participants/",tags:["web-core","participants","participant"]},sidebar:"tutorialSidebar",previous:{title:"Other Methods",permalink:"/docs/web-core/local-user/extras"},next:{title:"Participant Object",permalink:"/docs/web-core/participants/participant-object"}},o={},p=[{value:"Set participant view mode",id:"set-participant-view-mode",level:2},{value:"Set page number in paginated mode",id:"set-page-number-in-paginated-mode",level:3},{value:"Waiting room methods",id:"waiting-room-methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"participant-maps",children:"Participant Maps"}),"\n",(0,n.jsxs)(t.p,{children:["The data regarding all meeting participants is stored under\n",(0,n.jsx)(t.code,{children:"meeting.participants"}),". These ",(0,n.jsx)(t.strong,{children:"does not"})," include the local user. Use the\nmethods and events to consume the participants data. For example, to get all the\nparticipants who joined the meeting:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// get all joined participants\nconst joinedParticipants = meeting.participants.joined;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"meeting.participants"})," object has the following ",(0,n.jsx)(t.strong,{children:"maps"})," of participants"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"joined"}),": A map that contains all the participants who are currently in the meeting\nexcept the local user"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"waitlisted"}),": A map that contains all the participants waiting to join the\nmeeting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"active"}),": A map that contains all the participants except the local user whose media is subscribed to i.e\nparticipants are supposed to be on the screen at the moment except the local user"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"pinned"}),": A map that contains all the pinned participants of the meeting."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Therefore if you were to make a video / audio grid of participants, you'd use the ",(0,n.jsx)(t.code,{children:"active"}),"\nmap, but to display the list of all participants in the meeting you'd use the ",(0,n.jsx)(t.code,{children:"joined"})," map."]}),"\n",(0,n.jsxs)(t.p,{children:["Each participant in each of the ",(0,n.jsx)(t.code,{children:"joined"}),", ",(0,n.jsx)(t.code,{children:"waitlisted"}),", ",(0,n.jsx)(t.code,{children:"active"}),", and ",(0,n.jsx)(t.code,{children:"pinned"}),"\nmaps is of type ",(0,n.jsx)(t.a,{href:"/docs/web-core/reference/DyteParticipant",children:(0,n.jsx)(t.code,{children:"DyteParticipant"})}),". Read more\nabout each individual ",(0,n.jsx)(t.code,{children:"participant"})," object\n",(0,n.jsx)(t.a,{href:"/docs/web-core/participants/participant-object",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Each of these maps are of type\n",(0,n.jsx)(t.a,{href:"/docs/web-core/reference/DyteParticipantMap",children:(0,n.jsx)(t.code,{children:"DyteParticipantMap"})}),", and therefore emit a\n",(0,n.jsx)(t.code,{children:"participantJoined"})," event when a participant is added to the map, and a\n",(0,n.jsx)(t.code,{children:"participantLeft"})," event when a participant leaves the map. For instance, to\nlisten for when a participant gets pinned in the meeting, you can use the\nfollowing snippet:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"meeting.participants.pinned.on('participantJoined', (participant) => {\n  console.log(`Participant ${participant.name} got pinned`);\n});\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"and these other properties"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"count"}),": The number of participants who are joined in the meeting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"pageCount"}),": Number of pages available in paginated mode."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"maxActiveParticipantsCount"}),": The maximum number of participants that can be\npresent in the active state."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"lastActiveSpeaker "}),": This stores the ",(0,n.jsx)(t.code,{children:"participantId"})," of the last participant\nwho spoke in the meeting."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"set-participant-view-mode",children:"Set participant view mode"}),"\n",(0,n.jsxs)(t.p,{children:["The view mode indicates whether the participants are populated in ",(0,n.jsx)(t.code,{children:"ACTIVE_GRID"}),"\nmode or ",(0,n.jsx)(t.code,{children:"PAGINATED"})," mode. In ",(0,n.jsx)(t.code,{children:"ACTIVE_GRID"})," mode, the participants are\nautomatically replaced in ",(0,n.jsx)(t.code,{children:"meeting.participants.active"}),", based on who is\nspeaking or who has their video turned on."]}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"PAGINATED"})," mode, the participants in ",(0,n.jsx)(t.code,{children:"meeting.participants.active"})," will be\nfixed. Only when you call the ",(0,n.jsx)(t.code,{children:"meeting.participants.setPage(pageNumber)"})," method,\nit will replace the ",(0,n.jsx)(t.code,{children:"active"})," participants with a different set of participants."]}),"\n",(0,n.jsxs)(t.p,{children:["You can change the participant view between ",(0,n.jsx)(t.code,{children:"ACTIVE_GRID"})," and ",(0,n.jsx)(t.code,{children:"PAGINATED"})," mode\nusing the following method. This will trigger ",(0,n.jsx)(t.code,{children:"viewModeChanged"})," event as a side\naffect."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// set the view mode to paginated\nawait meeting.participants.setViewMode('PAGINATED');\n\n// set the view mode to active grid\nawait meeting.participants.setViewMode('ACTIVE_GRID');\n"})}),"\n",(0,n.jsx)(t.h3,{id:"set-page-number-in-paginated-mode",children:"Set page number in paginated mode"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"setPage()"})," method allows you to switch between pages of participants\npresent in the meeting."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// switch to second page\nawait meeting.participants.setPage(2);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"waiting-room-methods",children:"Waiting room methods"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"acceptWaitingRoomRequest()"})," method accepts requests from waitlisted\nparticipants if user has appropriate permissions."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"await meeting.participants.joined.acceptWaitingRoomRequest(participantId);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"rejectWaitingRoomRequest()"})," method requests from waitlisted participants if\nuser has appropriate permissions."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"await meeting.participants.joined.rejectWaitingRoomRequest(participantId);\n"})}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"Web Core Participants"})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);