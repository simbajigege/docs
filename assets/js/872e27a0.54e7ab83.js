"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[93457],{522:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(74848),l=n(28453);const s={title:"Other poll functions",description:"Other poll functions",sidebar_position:4,tags:["rn-core","polls","results","updates"]},r="Other poll functions",i={id:"polls/other-poll-functions",title:"Other poll functions",description:"Other poll functions",source:"@site/docs/rn-core/polls/other-poll-functions.mdx",sourceDirName:"polls",slug:"/polls/other-poll-functions",permalink:"/docs/rn-core/polls/other-poll-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/rn-core/polls/other-poll-functions.mdx",tags:[{label:"rn-core",permalink:"/docs/rn-core/tags/rn-core"},{label:"polls",permalink:"/docs/rn-core/tags/polls"},{label:"results",permalink:"/docs/rn-core/tags/results"},{label:"updates",permalink:"/docs/rn-core/tags/updates"}],version:"current",lastUpdatedAt:1706782034,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:4,frontMatter:{title:"Other poll functions",description:"Other poll functions",sidebar_position:4,tags:["rn-core","polls","results","updates"]},sidebar:"tutorialSidebar",previous:{title:"Voting on a poll",permalink:"/docs/rn-core/polls/voting-on-a-poll"},next:{title:"Introduction",permalink:"/docs/rn-core/plugins/introduction"}},c={},d=[{value:"View poll results",id:"view-poll-results",level:2},{value:"Get notified when a poll is created or updated",id:"get-notified-when-a-poll-is-created-or-updated",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Head:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"other-poll-functions",children:"Other poll functions"}),"\n",(0,t.jsx)(o.h2,{id:"view-poll-results",children:"View poll results"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"The total votes on a poll can be accessed in the following manner."})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"const poll = meeting.polls.items[0];\nconst votes = poll.voted;\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"votes"})," is an array of participant ID's (",(0,t.jsx)(o.code,{children:"meeting.participant.id"}),")."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"The total votes on a poll option can be accessed in the following manner."})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"const poll = meeting.polls.items[0];\nconst options = poll.options;\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"options"})," returns an array of objects, where each object is of type\n",(0,t.jsx)(o.a,{href:"./introduction",children:(0,t.jsx)(o.code,{children:"PollObject"})}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"get-notified-when-a-poll-is-created-or-updated",children:"Get notified when a poll is created or updated"}),"\n",(0,t.jsxs)(o.p,{children:["An event is fired each time ",(0,t.jsx)(o.code,{children:"meeting.polls.items"})," is updated or created. User\ncan listen for this to get the updated list of polls. the response object\ncontains the following properties."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"polls"}),": List of all polls."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"newPoll"}),": A boolean variable which is true when a new poll has been created."]}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"meeting.polls.on('pollsUpdate', ({ polls, newPoll }) => {\n  console.log(polls, newPoll);\n});\n"})}),"\n",(0,t.jsx)(n,{children:(0,t.jsx)("title",{children:"React Native Core Other poll functions"})})]})}function p(e={}){const{wrapper:o}={...(0,l.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>i});var t=n(96540);const l={},s=t.createContext(l);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);