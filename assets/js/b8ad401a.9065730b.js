"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[53780],{88855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(74848),a=n(28453);const i={title:"Manage Stage in Dyte's Group Call Meeting",description:"Effectively manage the stage in your Android application with Dyte's documentation on stage management.",sidebar_position:3,tags:["mobile-core","stage"]},o="Manage Stage in Dyte's Meeting",r={id:"stage/stage-management",title:"Manage Stage in Dyte's Group Call Meeting",description:"Effectively manage the stage in your Android application with Dyte's documentation on stage management.",source:"@site/docs/android-core/stage/stage-management.mdx",sourceDirName:"stage",slug:"/stage/stage-management",permalink:"/docs/android-core/stage/stage-management",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/android-core/stage/stage-management.mdx",tags:[{label:"mobile-core",permalink:"/docs/android-core/tags/mobile-core"},{label:"stage",permalink:"/docs/android-core/tags/stage"}],version:"current",lastUpdatedAt:1710757288,formattedLastUpdatedAt:"Mar 18, 2024",sidebarPosition:3,frontMatter:{title:"Manage Stage in Dyte's Group Call Meeting",description:"Effectively manage the stage in your Android application with Dyte's documentation on stage management.",sidebar_position:3,tags:["mobile-core","stage"]},sidebar:"tutorialSidebar",previous:{title:"Join and Leave Stage using Dyte's group call",permalink:"/docs/android-core/stage/introduction"},next:{title:"Plugins",permalink:"/docs/android-core/plugins"}},c={},d=[{value:"Host stage management",id:"host-stage-management",level:2},{value:"Participant stage management",id:"participant-stage-management",level:2},{value:"Access the list of requests",id:"access-the-list-of-requests",level:3},{value:"Listen to the incoming requests",id:"listen-to-the-incoming-requests",level:3},{value:"Accept stage requests",id:"accept-stage-requests",level:3},{value:"Reject stage requests",id:"reject-stage-requests",level:3},{value:"Withdraw stage request",id:"withdraw-stage-request",level:3}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"manage-stage-in-dytes-meeting",children:"Manage Stage in Dyte's Meeting"}),"\n",(0,s.jsx)(t.p,{children:"In a meeting, both hosts and participants can manage the stage. This allows for seamless control and organization of the session."}),"\n",(0,s.jsx)(t.h2,{id:"host-stage-management",children:"Host stage management"}),"\n",(0,s.jsxs)(t.p,{children:["In Dyte's meeting platform, hosts have the capability to request participants to join the stage. When a host sends a request to a participant, the participant will receive a callback in the ",(0,s.jsx)(t.code,{children:"DyteStageEventListener#onPresentRequestReceived()"})," method. The participant can then choose to accept or decline the request using specific functions."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"meeting.addStageEventsListener(object : DyteStageEventListener {\n  ...\n  override fun onPresentRequestReceived() {\n    // when host requests any user to join stage, that user received this callback\n  }\n  ...\n})\n"})}),"\n",(0,s.jsx)(t.p,{children:"To accept the request and join the stage, participants can utilize the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"meeting.stage.join()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Alternatively, if participants wish to decline the request and not join the stage, use the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"meeting.stage.cancelRequestAccess()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"participant-stage-management",children:"Participant stage management"}),"\n",(0,s.jsx)(t.p,{children:'Participants with the "Accept requests" setting enabled in the Preset can manage the stage in the webinar.'}),"\n",(0,s.jsx)(t.h3,{id:"access-the-list-of-requests",children:"Access the list of requests"}),"\n",(0,s.jsxs)(t.p,{children:["To access the list of requests received to join the stage, you can utilize the ",(0,s.jsx)(t.code,{children:"meeting.stage.accessRequests"})," API. This provides you with the necessary information about the participants who have requested to join the stage."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"meeting.stage.accessRequests\n"})}),"\n",(0,s.jsx)(t.h3,{id:"listen-to-the-incoming-requests",children:"Listen to the incoming requests"}),"\n",(0,s.jsx)(t.p,{children:"Once you are in the meeting, you can register a listener in the meeting object to listen for incoming requests."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"meeting.addStageEventsListener(object : DyteStageEventsListener {\n  override fun onPresentRequestReceived() {\n    // when host requests this user to join stage. Here one should give choice to either accept the request or decline it.\n  }\n\n  override fun onAddedToStage() {\n    // when this user is joined to stage\n  }\n\n  override fun onRemovedFromStage() {\n    // when this user is no longer on stage\n  }\n\n  override fun onPresentRequestAdded(participant: DyteStageParticipant) {\n    // when a user is requesting to join the stage\n  }\n\n  override fun onPresentRequestClosed(participant: DyteStageParticipant) {\n    // when a user who was trying to join stage leaves the call.\n  }\n\n  override fun onPresentRequestAccepted(participant: DyteStageParticipant) {\n    // when a join stage request is accepted by host\n  }\n\n  override fun onPresentRequestRejected(participant: DyteStageParticipant) {\n    // when a join stage request is denied by host\n  }\n\n  override fun onPresentRequestWithdrawn(participant: DyteStageParticipant) {\n    // when a user who was trying to join stage withdraws their request to join.\n  }\n})\n"})}),"\n",(0,s.jsx)(t.h3,{id:"accept-stage-requests",children:"Accept stage requests"}),"\n",(0,s.jsxs)(t.p,{children:["To accept a request to join the stage, call the following function, where ",(0,s.jsx)(t.code,{children:"ids"})," represents the list of unique identifier of the request."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"meeting.stage.grantAccess(ids: List<String>)\n// to deny all stage requests\nmeeting.stage.grantAccessAll()\n"})}),"\n",(0,s.jsx)(t.h3,{id:"reject-stage-requests",children:"Reject stage requests"}),"\n",(0,s.jsx)(t.p,{children:"To reject a request, call the following function:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"meeting.stage.denyAccess(ids: List<String>)\n// to deny all stage requests\nmeeting.stage.denyAccessAll()\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["It's important to note that if a participant doesn't have the permission to perform these operations, the SDK will throw an ",(0,s.jsx)(t.code,{children:"UnsupportedOperationException"})]})}),"\n",(0,s.jsx)(t.h3,{id:"withdraw-stage-request",children:"Withdraw stage request"}),"\n",(0,s.jsx)(t.p,{children:"To withdraw a request to join the stage, call the following function:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"meeting.stage.cancelRequestAccess()\n"})})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);