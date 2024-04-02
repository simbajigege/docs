"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[66346],{88287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(74848),a=n(28453);const r={title:"The participant object",description:"The object corresponding to a particular participant.",sidebar_position:2,tags:["rn-core","participants","participant"]},c="The participant object",s={id:"participants/participant-object",title:"The participant object",description:"The object corresponding to a particular participant.",source:"@site/docs/rn-core/participants/participant-object.mdx",sourceDirName:"participants",slug:"/participants/participant-object",permalink:"/docs/rn-core/participants/participant-object",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/rn-core/participants/participant-object.mdx",tags:[{label:"rn-core",permalink:"/docs/rn-core/tags/rn-core"},{label:"participants",permalink:"/docs/rn-core/tags/participants"},{label:"participant",permalink:"/docs/rn-core/tags/participant"}],version:"current",lastUpdatedAt:1707759492,formattedLastUpdatedAt:"Feb 12, 2024",sidebarPosition:2,frontMatter:{title:"The participant object",description:"The object corresponding to a particular participant.",sidebar_position:2,tags:["rn-core","participants","participant"]},sidebar:"tutorialSidebar",previous:{title:"Participants",permalink:"/docs/rn-core/participants/"},next:{title:"Participant Events",permalink:"/docs/rn-core/participants/events"}},o={},p=[{value:"Host controls methods",id:"host-controls-methods",level:2},{value:"Webinar methods",id:"webinar-methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"the-participant-object",children:"The participant object"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"participant"})," object consists of all the information related to a particular\nparticipant. For instance, it contains a participants video/audio/screenshare\nstream, and the participant's name. It also contains state variables that\nindicate whether a participant's camera is on or off, and whether they are muted\nor unmuted. Head over to ",(0,i.jsx)(t.a,{href:"/docs/rn-core/reference/DyteParticipant",children:"DyteParticipant"})," for\na detailed reference."]}),"\n",(0,i.jsx)(t.p,{children:"The participant object has the following properties."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"id"}),": The ",(0,i.jsx)(t.code,{children:"participantId"})," of the participant (aka ",(0,i.jsx)(t.code,{children:"peerId"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"userId"}),": The ",(0,i.jsx)(t.code,{children:"userId"})," of the participant."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"name"}),": The participant's name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"picture"}),": The participant's picture (if any)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"clientSpecificId"}),": An arbitrary ID that can be set to identify the\nparticipant."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"device"}),": Information about the device used by the participant."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"videoTrack"}),": The video track of the participant."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"audioTrack"}),": The audio track of the participant."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"screenShareTracks"}),": The video and audio (if any) track of the participant's\nscreen share stream."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"videoEnabled"}),": Set to true if the participant's camera is on."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"audioEnabled"}),": Set to true if the participant is unmuted."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"screenShareEnabled"}),": Set to true if the participant is sharing their screen."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"supportsRemoteControl"}),": Set to true if the participant is using an SDK that\nsupports remote control."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"isPinned"}),": Set to true if the participant is pinned."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"presetName"}),": Name of the preset associated with the participant."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"webinarStageStatus"}),": Represents the participants current webinar status."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The participant object is an event emitter, so you can set listeners on this\nobject for events such as video and audio updates. For instance, to fire a\ncallback when a participant toggles their mic, you can subscribe to the\nfollowing events."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"meeting.participants.joined\n  .get(participantId)\n  .on('audioUpdate', ({ audioEnabled, audioTrack }) => {\n    // This will only be fired on mic toggles for the participant with ID `participantId`\n    console.log(\n      'The participant with id',\n      participantId,\n      'has toggled their mic to',\n      audioEnabled\n    );\n  });\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The events emitted by all participant objects are also re-emitted by all the\nmaps in ",(0,i.jsx)(t.code,{children:"meeting.participants"}),". Therefore, you can add a listener to\n",(0,i.jsx)(t.code,{children:"meeting.participants.joined"})," for the ",(0,i.jsx)(t.code,{children:"audioUpdate"})," event. For instance, the\nsame code above can be re-implemented as follows."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"meeting.participants.joined.on(\n  'audioUpdate',\n  (participant, { audioEnabled, audioTrack }) => {\n    // This will be fired on mic toggles for all participants in the meeting\n    console.log(\n      'The participant with id',\n      participant.id,\n      'has toggled their mic to',\n      audioEnabled\n    );\n  }\n);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Read more about the participant events in the\n",(0,i.jsx)(t.a,{href:"/web-core/participants/events",children:"events"})," section in the API reference."]}),"\n",(0,i.jsx)(t.h2,{id:"host-controls-methods",children:"Host controls methods"}),"\n",(0,i.jsx)(t.p,{children:"If you (the local user) have the relevant permissions in the meeting, you can\ndisable a participant's video/audio streams, or even remove them from the\nmeeting."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const participant = meeting.participants.joined.get(participantId);\n\n// To disable a participant's video stream\nparticipant.disableVideo();\n\n// To disable a participant's audio stream\nparticipant.disableAudio();\n\n// To kick a participant from the meeting\nparticipant.kick();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also ",(0,i.jsx)(t.code,{children:"pin"})," or ",(0,i.jsx)(t.code,{children:"unpin"}),' a participant in the meeting. All "pinned"\nparticipants are added to the ',(0,i.jsx)(t.code,{children:"meeting.participants.pinned"})," map."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const participant = meeting.participants.joined.get(participantId);\n\n// Pin a participant to the meeting.\nawait participant.pin();\n\n// Unpin a participant in the meeting.\nawait participant.unpin();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"webinar-methods",children:"Webinar methods"}),"\n",(0,i.jsxs)(t.p,{children:["The host can accept a user's request to join the webinar using\n",(0,i.jsx)(t.code,{children:"acceptJoinStageRequest()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"meeting.participants.joined.on('peerRequestToJoinStage', (p) => {\n  const participant = meeting.participants.joined.get(p.id);\n  await participant.acceptJoinStageRequest();\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The host can reject a user's request to join the webinar using\n",(0,i.jsx)(t.code,{children:"rejectRequestToJoinStage()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"meeting.participants.joined.on('peerRequestToJoinStage', (p) => {\n  const participant = meeting.participants.joined.get(p.id);\n  await participant.rejectRequestToJoinStage();\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The host has the option of removing a user from the webinar. It can be done\nusing the ",(0,i.jsx)(t.code,{children:"removeFromStage()"})," method."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const participant = meeting.participants.joined.get(participantId);\nawait participant.removeFromStage();\n"})}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"React Native Core The participant object"})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(96540);const a={},r=i.createContext(a);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);