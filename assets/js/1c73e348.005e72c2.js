"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[65105],{10949:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=n(74848),o=n(28453);const s={title:"\ud83d\udd24 Basics",sidebar_position:2},r=void 0,l={id:"migration/twilio/basics",title:"\ud83d\udd24 Basics",description:"Here is a look at how the migration process would look for you if you choose to migrate from Twilio to Dyte",source:"@site/docs/guides/migration/twilio/basics.mdx",sourceDirName:"migration/twilio",slug:"/migration/twilio/basics",permalink:"/docs/guides/migration/twilio/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/guides/migration/twilio/basics.mdx",tags:[],version:"current",lastUpdatedAt:1706782034,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:2,frontMatter:{title:"\ud83d\udd24 Basics",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca1 Concepts",permalink:"/docs/guides/migration/twilio/concepts-twilio-vs-dyte"},next:{title:"\ud83c\udfac Media",permalink:"/docs/guides/migration/twilio/media"}},c={},a=[{value:"Creating a Room",id:"creating-a-room",level:2},{value:"Generating the participant token",id:"generating-the-participant-token",level:2},{value:"Installation",id:"installation",level:2},{value:"Joining a Room",id:"joining-a-room",level:2}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Here is a look at how the migration process would look for you if you choose to migrate from Twilio to Dyte"}),"\n",(0,t.jsx)(i.h2,{id:"creating-a-room",children:"Creating a Room"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Intuitively, a Room represents a virtual space where end-users communicate"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u2014 Twilio Docs"}),"\n",(0,t.jsx)(i.blockquote,{children:"\n"}),"\n",(0,t.jsx)(i.p,{children:"The equivalent of \u201cRooms\u201d from Twilio in Dyte is \u201cMeetings\u201d."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In Twilio you create a room by calling the REST API ",(0,t.jsx)(i.a,{href:"https://www.twilio.com/docs/video/api/rooms-resource",children:"https://www.twilio.com/docs/video/api/rooms-resource"})," (or using a client library)"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In Dyte you create a meeting by calling a similar REST API\n",(0,t.jsx)(i.a,{href:"https://docs.dyte.io/api#/operations/create_meeting",children:"https://docs.dyte.io/api#/operations/create_meeting"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Request"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["You pass a ",(0,t.jsx)(i.code,{children:"UniqueName"})," while creating a Room in Twilio\nThere is no UniqueName equivalent in Dyte, you can optionally pass the ",(0,t.jsx)(i.code,{children:"title"})," of meeting if want"]}),"\n",(0,t.jsxs)(i.li,{children:["If you want the recording to start when participants join you use ",(0,t.jsx)(i.code,{children:"RecordParticipantsOnConnect"})," while creating a Room\nThe equivalent parameter in Dyte is ",(0,t.jsx)(i.code,{children:"record_on_start"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"MediaRegion"})," \u201dgll\u201d is the default where Twilio decides the best region. In Dyte if you don't pass any region in ",(0,t.jsx)(i.code,{children:"preferred_region"})," Dyte selects the best region automatically"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Response"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["In the response you get a ",(0,t.jsx)(i.code,{children:"room_sid"})," in Twilio, you get a ",(0,t.jsx)(i.code,{children:"meeting_id"})," in Dyte"]}),"\n"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Twilio"})}),(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Dyte"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Room"}),(0,t.jsx)(i.td,{children:"Meeting"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Room SID"}),(0,t.jsx)(i.td,{children:"Meeting ID"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"generating-the-participant-token",children:"Generating the participant token"}),"\n",(0,t.jsxs)(i.p,{children:["With Twilio you generate the JWT for the user on your own ",(0,t.jsx)(i.a,{href:"https://www.twilio.com/docs/video/tutorials/user-identity-access-tokens",children:"https://www.twilio.com/docs/video/tutorials/user-identity-access-tokens"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, {\n  identity: identity,\n});\ntoken.addGrant(videoGrant);\nconsole.log(token.toJwt());\n"})}),"\n",(0,t.jsxs)(i.p,{children:["In Dyte, you make a REST API call to ",(0,t.jsx)(i.a,{href:"/api/#/operations/add_participant",children:"Add Participant API"})," which returns ",(0,t.jsx)(i.code,{children:"authToken"}),"."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Twilio"})}),(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Dyte"})})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Access Token"}),(0,t.jsx)(i.td,{children:"Authtoken"})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i.p,{children:"Install the Dyte SDK."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"npm install @dytesdk/web-core\n"})}),"\n",(0,t.jsx)(i.p,{children:"If you are using CDN / script tags install using"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",children:'<script src="https://cdn.dyte.in/core/dyte.js" />\n'})}),"\n",(0,t.jsx)(i.p,{children:"Now you can remove the Twilio SDK from your project by uninstalling the package."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"npm uninstall twilio-video\n"})}),"\n",(0,t.jsx)(i.p,{children:"Or if using the Twilio CDN script, remove the relevant script tag"}),"\n",(0,t.jsx)(i.h2,{id:"joining-a-room",children:"Joining a Room"}),"\n",(0,t.jsx)(i.p,{children:"Twilio"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"import * as TwilioVideo from 'twilio-video';\n\ntwilioRoom = await TwilioVideo.connect(TOKEN, {\n  name: 'yourName',\n  audio: false,\n  video: false,\n  dominantSpeaker: true,\n});\n"})}),"\n",(0,t.jsx)(i.p,{children:"Dyte"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"import DyteClient from '@dytesdk/web-core';\n\nmeeting = await DyteClient.init({ authToken: TOKEN });\nawait meeting.join();\n"})}),"\n",(0,t.jsx)(i.p,{children:"Let's look at media next"}),"\n",(0,t.jsx)(n,{children:(0,t.jsx)("title",{children:"\ud83d\udd24 Basics Guide"})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var t=n(96540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);