"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[61109],{64743:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=l(74848),n=l(28453);const r={title:"Create & Vote a poll",description:"Learn how to create polls in Flutter using Dyte's features. Follow our documentation for seamless integration and effective poll creation.",sidebar_position:2,tags:["flutter-core","polls","create"]},s="Creating a poll",i={id:"polls/creating-a-poll",title:"Create & Vote a poll",description:"Learn how to create polls in Flutter using Dyte's features. Follow our documentation for seamless integration and effective poll creation.",source:"@site/docs/flutter-core/polls/creating-a-poll.mdx",sourceDirName:"polls",slug:"/polls/creating-a-poll",permalink:"/docs/flutter-core/polls/creating-a-poll",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/flutter-core/polls/creating-a-poll.mdx",tags:[{label:"flutter-core",permalink:"/docs/flutter-core/tags/flutter-core"},{label:"polls",permalink:"/docs/flutter-core/tags/polls"},{label:"create",permalink:"/docs/flutter-core/tags/create"}],version:"current",lastUpdatedAt:1710134090,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:2,frontMatter:{title:"Create & Vote a poll",description:"Learn how to create polls in Flutter using Dyte's features. Follow our documentation for seamless integration and effective poll creation.",sidebar_position:2,tags:["flutter-core","polls","create"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/flutter-core/polls/introduction"},next:{title:"Receiving polls",permalink:"/docs/flutter-core/polls/receiving-polls"}},d={},c=[];function a(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Head:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"creating-a-poll",children:"Creating a poll"}),"\n",(0,o.jsxs)(t.p,{children:["A new poll can be created using the ",(0,o.jsx)(t.code,{children:"create"})," method from the\n",(0,o.jsx)(t.a,{href:"./introduction",children:(0,o.jsx)(t.code,{children:"dyteClient.polls"})})," object. The ",(0,o.jsx)(t.code,{children:"dyteClient.polls.create()"}),"\nmethod accepts the following params."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Param"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Default Value"}),(0,o.jsx)(t.th,{children:"Required"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"question"}),(0,o.jsx)(t.td,{children:"string"}),(0,o.jsx)(t.td,{children:"-"}),(0,o.jsx)(t.td,{children:"yes"}),(0,o.jsx)(t.td,{children:"The question that is to be voted for."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"options"}),(0,o.jsx)(t.td,{children:"string[]"}),(0,o.jsx)(t.td,{children:"-"}),(0,o.jsx)(t.td,{children:"yes"}),(0,o.jsx)(t.td,{children:"The options of the poll."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"anonymous"}),(0,o.jsx)(t.td,{children:"boolean"}),(0,o.jsx)(t.td,{children:"-"}),(0,o.jsx)(t.td,{children:"yes"}),(0,o.jsx)(t.td,{children:"If true, the poll votes are anonymous."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"hideVotes"}),(0,o.jsx)(t.td,{children:"boolean"}),(0,o.jsx)(t.td,{children:"-"}),(0,o.jsx)(t.td,{children:"yes"}),(0,o.jsx)(t.td,{children:"If true, the votes on the poll are hidden."})]})]})]}),"\n",(0,o.jsx)(t.p,{children:"The following snippet creates a poll where votes are anonymous."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:'dyteClient.polls.create(\n    question: "Are you an early bird or a night owl?",\n    options: ["Early bird", "Night owl"],\n    anonymous: true,\n    hideVotes: false,\n);\n'})}),"\n",(0,o.jsx)(t.h1,{id:"voting-on-a-poll",children:"Voting on a poll"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"dyteClient.polls.vote()"})," method can be used to register a vote on a poll.\nIt accepts the following params."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Param"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Default Value"}),(0,o.jsx)(t.th,{children:"Required"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"pollMessage"}),(0,o.jsx)(t.td,{children:"DytePollMessage"}),(0,o.jsx)(t.td,{children:"-"}),(0,o.jsx)(t.td,{children:"yes"}),(0,o.jsx)(t.td,{children:"Contains all the poll properties (question, options, etc.)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"pollOption"}),(0,o.jsx)(t.td,{children:"DytePollOption"}),(0,o.jsx)(t.td,{children:"yes"}),(0,o.jsx)(t.td,{children:"yes"}),(0,o.jsx)(t.td,{children:"Option on which the user voted"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:"The following snippet votes for the 1st option on the 1st poll created in the\nmeeting."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"final poll = dyteClient.polls.polls[0];\nfinal selectedPollOption = poll.options[0];\ndyteClient.polls.vote(poll, selectedPollOption);\n"})}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("title",{children:"Flutter Core creating/voting a poll"}),(0,o.jsx)("meta",{name:"description",content:"Learn how to create and vote on polls in Flutter using Dyte's features. Follow our documentation for seamless integration and effective poll creation."})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var o=l(96540);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);