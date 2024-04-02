"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[63546],{6315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(74848),o=n(28453);const l={title:"Creating a poll",description:"Create polls in a meeting.",sidebar_position:2,tags:["rn-core","polls","create"]},s="Creating a poll",i={id:"polls/creating-a-poll",title:"Creating a poll",description:"Create polls in a meeting.",source:"@site/docs/rn-core/polls/creating-a-poll.mdx",sourceDirName:"polls",slug:"/polls/creating-a-poll",permalink:"/docs/rn-core/polls/creating-a-poll",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/rn-core/polls/creating-a-poll.mdx",tags:[{label:"rn-core",permalink:"/docs/rn-core/tags/rn-core"},{label:"polls",permalink:"/docs/rn-core/tags/polls"},{label:"create",permalink:"/docs/rn-core/tags/create"}],version:"current",lastUpdatedAt:1706782034,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:2,frontMatter:{title:"Creating a poll",description:"Create polls in a meeting.",sidebar_position:2,tags:["rn-core","polls","create"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/rn-core/polls/introduction"},next:{title:"Voting on a poll",permalink:"/docs/rn-core/polls/voting-on-a-poll"}},d={},c=[];function a(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"creating-a-poll",children:"Creating a poll"}),"\n",(0,r.jsxs)(t.p,{children:["A new poll can be created using the ",(0,r.jsx)(t.code,{children:"create"})," method from the\n",(0,r.jsx)(t.a,{href:"./introduction",children:(0,r.jsx)(t.code,{children:"meeting.polls"})})," object. The ",(0,r.jsx)(t.code,{children:"meeting.polls.create()"})," method\naccepts the following params."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"The question that is to be voted for."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:"string[]"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"The options of the poll."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"anonymous"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"If true, the poll votes are anonymous."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hideVotes"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"If true, the votes on the poll are hidden."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"The following snippet creates a poll where votes are anonymous."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"await meeting.poll.create(\n  'Are you an early bird or a night owl?',\n  ['Early bird', 'Night owl'],\n  true\n);\n"})}),"\n",(0,r.jsx)(n,{children:(0,r.jsx)("title",{children:"React Native Core Creating a poll"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const o={},l=r.createContext(o);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);