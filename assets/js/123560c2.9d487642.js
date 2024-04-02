"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[36023],{32388:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=o(74848),s=o(28453);const i={title:"Voting on a poll",description:"Understand the voting process on polls within iOS Core with Dyte Docs. Empower users to actively participate and express their opinions.",sidebar_position:3,tags:["mobile-core","polls","votes"]},l="Voting on a poll",r={id:"polls/voting-on-a-poll",title:"Voting on a poll",description:"Understand the voting process on polls within iOS Core with Dyte Docs. Empower users to actively participate and express their opinions.",source:"@site/docs/ios-core/polls/voting-on-a-poll.mdx",sourceDirName:"polls",slug:"/polls/voting-on-a-poll",permalink:"/docs/ios-core/polls/voting-on-a-poll",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/ios-core/polls/voting-on-a-poll.mdx",tags:[{label:"mobile-core",permalink:"/docs/ios-core/tags/mobile-core"},{label:"polls",permalink:"/docs/ios-core/tags/polls"},{label:"votes",permalink:"/docs/ios-core/tags/votes"}],version:"current",lastUpdatedAt:1709899206,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:3,frontMatter:{title:"Voting on a poll",description:"Understand the voting process on polls within iOS Core with Dyte Docs. Empower users to actively participate and express their opinions.",sidebar_position:3,tags:["mobile-core","polls","votes"]},sidebar:"tutorialSidebar",previous:{title:"Creating a poll",permalink:"/docs/ios-core/polls/creating-a-poll"},next:{title:"Plugins",permalink:"/docs/ios-core/plugins"}},d={},c=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"voting-on-a-poll",children:"Voting on a poll"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"meeting.polls.vote()"})," method can be used to register a vote on a poll. It\naccepts the following params."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"yes"}),(0,n.jsx)(t.td,{children:"The ID of the poll that is to be voted on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"yes"}),(0,n.jsx)(t.td,{children:"The index of the option."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The following snippet votes for the 1st option on the 1st poll created in the\nmeeting."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let poll = meeting.polls.items.first\nlet selectedPollOption = poll.options.first\nmeeting.polls.vote(pollMessage: poll, pollOption: selectedPollOption)\n"})}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("title",{children:"iOS Core Voting on a poll"}),(0,n.jsx)("meta",{name:"description",content:"Understand the voting process on polls within iOS Core with Dyte Docs. Empower users to actively participate and express their opinions."})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>r});var n=o(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);