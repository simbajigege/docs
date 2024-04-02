"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[32880],{53247:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(74848),a=i(28453);const s={title:"Introduction",description:"Get started with participants integration in Android apps with this introductory guide from Dyte documentation.",sidebar_position:1,tags:["mobile-core","participants","participant"]},r="Introduction - Room participants",o={id:"participants/introduction",title:"Introduction",description:"Get started with participants integration in Android apps with this introductory guide from Dyte documentation.",source:"@site/docs/android-core/participants/introduction.mdx",sourceDirName:"participants",slug:"/participants/introduction",permalink:"/docs/android-core/participants/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/android-core/participants/introduction.mdx",tags:[{label:"mobile-core",permalink:"/docs/android-core/tags/mobile-core"},{label:"participants",permalink:"/docs/android-core/tags/participants"},{label:"participant",permalink:"/docs/android-core/tags/participant"}],version:"current",lastUpdatedAt:1710757288,formattedLastUpdatedAt:"Mar 18, 2024",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Get started with participants integration in Android apps with this introductory guide from Dyte documentation.",sidebar_position:1,tags:["mobile-core","participants","participant"]},sidebar:"tutorialSidebar",previous:{title:"Media Permissions",permalink:"/docs/android-core/local-user/manage-permissions"},next:{title:"The participant object",permalink:"/docs/android-core/participants/participant-object"}},c={},l=[{value:"Room participants object",id:"room-participants-object",level:2},{value:"Move between pages in paginated mode",id:"move-between-pages-in-paginated-mode",level:2},{value:"Host control methods",id:"host-control-methods",level:2},{value:"Broadcast message to all participants",id:"broadcast-message-to-all-participants",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introduction---room-participants",children:"Introduction - Room participants"}),"\n",(0,n.jsxs)(t.p,{children:["The data regarding all meeting participants is stored under ",(0,n.jsx)(t.code,{children:"meeting.participants"}),". Use the methods and events to consume the participants data."]}),"\n",(0,n.jsx)(t.h2,{id:"room-participants-object",children:"Room participants object"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"joined"}),": A list that contains all the participants who have joined the meeting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"active"}),": A list that contains all the participants for the current page in the meeting. Its a subset of ",(0,n.jsx)(t.code,{children:"joined"})," array."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"screenShares"}),": A list that contains all the participants who have shared screen in the meeting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"waitlisted"}),": A list that contains all the participants waiting to join the meeting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"broadcastMessage"}),": Broadcasts the message to all participants including ",(0,n.jsx)(t.code,{children:"self"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"pinned"}),": A nullable participant object represeting the participant who is pinned else it is set to null."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"activeSpeaker"}),": A nullable participant object represting latest active speaker in the meeting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"maxNumberOnScreen"}),": A int showing the maximum number of people set for this meeting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"currentPageNumber"}),": A int showing the current page in this meeting. Participants from this page are filled in the ",(0,n.jsx)(t.code,{children:"active"})," list."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"pageCount"}),": A int showing total number of pages available in the meeting."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"canGoNextPage"}),": A boolean indicating if next page of joined  participants is available to show."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"canGoPreviousPage"}),": A boolean indicating if previous page of joined  participants is available to show."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Each participant in the ",(0,n.jsx)(t.code,{children:"joined"}),", ",(0,n.jsx)(t.code,{children:"waitlisted"}),", ",(0,n.jsx)(t.code,{children:"active"})," and\n",(0,n.jsx)(t.code,{children:"screenShares"})," is type list containing objects of ",(0,n.jsx)(t.code,{children:"DyteMeetingParticipant"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"// all joined participants in the meeting\nval joined = meeting.participants.joined\n\n// all active participants in the meeting.\n// this should be used to show participants on the screen\nval active = meeting.participants.active\n\n// participants who are in the waiting room\nval waitlisted = meeting.participants.waitlisted\n\n// participants who have shared screen\nval screenShares = meeting.participants.screenShares\n\n// latest active speaker in the meeting\nval activeSpeaker = meeting.participants.activeSpeaker\n"})}),"\n",(0,n.jsx)(t.p,{children:"Similarely you can access the pagination related information like follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"val maxNumberOnScreen = meeting.participants.maxNumberOnScreen\nval currentPageNumber = meeting.participants.currentPageNumber\nval pageCount = meeting.participants.pageCount\nval canGoNextPage = meeting.participants.canGoNextPage\nval canGoPreviousPage = meeting.participants.canGoPreviousPage\n"})}),"\n",(0,n.jsx)(t.h2,{id:"move-between-pages-in-paginated-mode",children:"Move between pages in paginated mode"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"setPage(pageNumber: Int)"})," method allows you to switch between pages of participants present in the meeting."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"// switch to 1st page\nmeeting.participants.setPage(1)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"host-control-methods",children:"Host control methods"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"meeting.participants"})," object has host control methods that allow you to disable the audio and video streams of other users in the meeting (given that the user preset has the right permissions)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"// mute all participants\nmeeting.participants.disableAllAudio();\n\n// mute a single participant\nval participantToUpdate = meeting.participants.joined.first()\nparticipantToUpdate.disableAudio()\n\n// disable video for all participants\nmeeting.participants.disableAllVideo();\n\n// disable video for a single participant\nval participantToUpdate = meeting.participants.joined.first()\nparticipantToUpdate.disableVideo()\n"})}),"\n",(0,n.jsx)(t.p,{children:"Operations related to waiting room"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"// to accept all waiting room requests for participants in `waitlisted` list\nmeeting.participants.acceptAllWaitingRequests()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To remove all participants from a meeting, you can call the ",(0,n.jsx)(t.code,{children:"kickAll()"})," method."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"// remove all participants from the meeting\nmeeting.participants.kickAll();\n\n// remove a single participant\nval participantToRemove = meeting.participants.joined.first()\nparticipantToRemove.kick()\n"})}),"\n",(0,n.jsx)(t.h2,{id:"broadcast-message-to-all-participants",children:"Broadcast message to all participants"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"// broadcast message\nmeeting.participants.broadcastMessage(type, payload)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);