"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[37303],{10995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(74848),r=n(28453),l=n(37513);const i={title:"Create Meeting",sidebar_position:1,sidebar_class_name:"interactive-tour create-meeting"},s=void 0,c={id:"interactive-onboarding/create-meeting",title:"Create Meeting",description:"",source:"@site/docs/guides/interactive-onboarding/create-meeting.mdx",sourceDirName:"interactive-onboarding",slug:"/interactive-onboarding/create-meeting",permalink:"/docs/guides/interactive-onboarding/create-meeting",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/guides/interactive-onboarding/create-meeting.mdx",tags:[],version:"current",lastUpdatedAt:1711738914,formattedLastUpdatedAt:"Mar 29, 2024",sidebarPosition:1,frontMatter:{title:"Create Meeting",sidebar_position:1,sidebar_class_name:"interactive-tour create-meeting"},sidebar:"tutorialSidebar",previous:{title:"Custom / RTMP Video Input",permalink:"/docs/guides/livestream/advanced/livestream-any-rtmp"},next:{title:"Add Participant",permalink:"/docs/guides/interactive-onboarding/add-participant"}},o={},d=[];function m(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.J,{href:"create-meeting"}),"\n",(0,a.jsx)(t,{children:(0,a.jsx)("html",{className:"interactive-onboarding"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},37513:(e,t,n)=>{n.d(t,{J:()=>W});var a=n(56347),r=n(96540),l=n(81050),i=n(67828),s=n(75438),c=(n(31388),n(63581)),o=n(1589);const d=({id:e,sourceX:t,sourceY:n,targetX:a,targetY:i,sourcePosition:s,targetPosition:c,data:o,markerStart:d,markerEnd:m,style:u})=>{const[p,f,g]=(0,l.Fp)({sourceX:t,sourceY:n,sourcePosition:s,targetX:a,targetY:i,targetPosition:c});return r.createElement(r.Fragment,null,r.createElement(l.tE,{id:e,path:p,markerEnd:m,markerStart:d,style:u}),r.createElement(l.rV,null,r.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${g}px)`,borderRadius:5},className:"nodrag nopan text-[10px] p-0.5 font-semibold bg-yellow-200 text-black"},o.label)))};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=[{id:"phone->cust-server",source:"phone",target:"cust-server",animated:!1},{id:"cust-server->cust-db",source:"cust-server",target:"cust-db",animated:!1},{id:"cust-server->dyte",source:"cust-server",target:"dyte",sourceHandle:"dyte-conn",animated:!1}];function p(e,t){const n=u.find((t=>t.id===e.id));if(void 0===n)return e;const a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){m(e,t,n[t])}))}return e}({},n,t);return a}function f(e,t){const n=[...e];for(const a in n)n[a]=p(n[a],t[n[a].id]||{});return n}const g={type:l.TG.ArrowClosed,width:24,height:24,color:"#2563eb"};function h(e,t){switch(t){case 1:return f(e,{"phone->cust-server":{animated:!0,markerEnd:{type:l.TG.ArrowClosed,width:20,height:20},style:{strokeWidth:2,stroke:"#2563eb"}}});case 2:return f(e,{"cust-server->dyte":{animated:!0,markerEnd:g,style:{strokeWidth:2,stroke:"#2563eb"},type:"edge-w-label",data:{label:"HTTP Request"}}});case 3:return f(e,{"cust-server->dyte":{animated:!0,markerStart:g,style:{strokeWidth:2,stroke:"#2563eb"},type:"edge-w-label",data:{label:"HTTP Response"}}});case 4:return f(e,{"cust-server->cust-db":{animated:!0,markerEnd:g,style:{strokeWidth:2,stroke:"#2563eb"},type:"edge-w-label",data:{label:"Store meeting information"}}});case 5:return f(e,{"cust-server->cust-db":{hidden:!0}});case 6:return f(e,{"cust-server->cust-db":{hidden:!0},"cust-server->dyte":{animated:!0,markerEnd:g,style:{strokeWidth:2,stroke:"#2563eb"},type:"edge-w-label",data:{label:"HTTP Request"}}});case 7:return f(e,{"cust-server->cust-db":{hidden:!0},"cust-server->dyte":{animated:!0,markerStart:g,style:{strokeWidth:2,stroke:"#2563eb"},type:"edge-w-label",data:{label:"HTTP Response"}},"phone->cust-server":{animated:!0,markerStart:{type:l.TG.ArrowClosed,width:20,height:20},type:"edge-w-label",data:{label:"Forward the token"},style:{strokeWidth:2,stroke:"#2563eb"}}});default:return u}}const b={"edge-w-label":d};var y=n(41195),v=n(41650),x=n(43402);function E(...e){return e.filter(Boolean).join(" ")}function w(){const e=M();return r.createElement("div",{className:"w-full h-full bg-secondary-1000"},r.createElement("main",{className:"pt-2 grid gap-6 px-0 pb-6 bg-secondary-1000"},r.createElement("div",null,r.createElement("h1",{className:"mt-2 mb-4 text-xl font-bold"},"Find a Doctor"),r.createElement("div",{className:"w-full max-w-[400px]"},r.createElement("input",{type:"search",className:"border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring -mt-2 flex h-10 w-full rounded-md border border-secondary-700 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",placeholder:"Search by name or specialty"}))),r.createElement("div",{className:"grid gap-6 bg-secondary-1000"},e.doctors.map(((t,n)=>r.createElement("div",{key:t.name,className:"bg-card text-card-foreground rounded-lg border border-secondary-700 shadow-sm","data-v0-t":"card"},r.createElement("div",{className:"p-4"},r.createElement("div",{className:"flex flex-col"},r.createElement("div",{className:"mb-4 flex flex-row items-center justify-between"},r.createElement("img",{src:t.avatar,width:"40",height:"40",alt:"Dr. Smith",className:"mx-2 aspect-square overflow-hidden rounded-full object-cover"}),r.createElement("div",{className:"flex flex-1 flex-col pl-4"},r.createElement("p",{className:"text-md mb-0 font-semibold"},"Dr ",t.name),r.createElement("p",{className:"mb-0 text-sm text-gray-500 dark:text-gray-400"},t.dept))),r.createElement("button",{onClick:()=>e.incStep(2),className:E("book-now relative cursor-pointer",0===n?"bg-blue-600":"bg-gray-600")},0===n&&1==e.currentStep&&r.createElement("div",{className:"absolute -right-1 -top-1"},r.createElement("span",{className:"relative h-4 w-4"},r.createElement("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"}),r.createElement("span",{className:"relative inline-flex h-4 w-4 rounded-full bg-yellow-500"}))),"Book Now")))))))))}function N(){const e=M(),t=e.doctors[0];return r.createElement("div",{className:"w-full h-full bg-secondary-1000"},r.createElement("main",{className:"pt-2 grid gap-6 px-0 pb-6 bg-secondary-1000"},r.createElement("div",{className:"flex flex-col"},r.createElement("span",{className:"mt-2 mb-1 text-md font-bold text-wrap"},"Time for your appointment"),r.createElement("span",{className:"text-md font-semibold text-gray-400"},"6:00 PM")),r.createElement("div",{className:"grid bg-secondary-1000"},r.createElement("div",{key:t.name,className:"bg-card text-card-foreground rounded-lg border border-secondary-700 shadow-sm","data-v0-t":"card"},r.createElement("div",{className:"p-4"},r.createElement("div",{className:"flex flex-col"},r.createElement("div",{className:"mb-4 flex flex-row items-center justify-between"},r.createElement("img",{src:t.avatar,width:"40",height:"40",alt:"Dr. Smith",className:"mx-2 aspect-square overflow-hidden rounded-full object-cover"}),r.createElement("div",{className:"flex flex-1 flex-col pl-4"},r.createElement("p",{className:"text-md mb-0 font-semibold"},"Dr ",t.name),r.createElement("p",{className:"mb-0 text-sm text-gray-500 dark:text-gray-400"},t.dept))),r.createElement("button",{onClick:()=>e.incStep(6),className:E("book-now relative cursor-pointer bg-blue-600")},5==e.currentStep&&r.createElement("div",{className:"absolute -right-1 -top-1"},r.createElement("span",{className:"relative h-4 w-4"},r.createElement("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"}),r.createElement("span",{className:"relative inline-flex h-4 w-4 rounded-full bg-yellow-500"}))),"Join Now")))))))}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){k(e,t,n[t])}))}return e}const O=[{id:"explanation",type:"explanation",position:{x:-700,y:-30},data:{}},{id:"cust-db",type:"database",position:{x:114,y:500},data:{active:!1}},{id:"cust-server",type:"rest-api-player",position:{x:-10,y:184},data:{active:!1}},{id:"phone",type:"phone",position:{x:-400,y:50},data:{children:e=>e>0&&e<=4?r.createElement(w,null):e>4&&e<=8?r.createElement(N,null):void 0,active:!1}},{id:"dyte",type:"logo",position:{x:400,y:50},data:{active:!1}}];function j(e,t){const n=O.find((t=>t.id===e.id));if(void 0===n)return e;const a=S({},e);return a.hidden=t._hidden,a.data=S({},n.data,t),a}function P(e,t){const n=[...e];for(const a in n)n[a]=j(n[a],t[n[a].id]||{});return n}function D(e,t){switch(t){case 1:return P(e,{phone:{active:!0}});case 2:return P(e,{"cust-server":{active:!0},dyte:{active:!0}});case 3:return P(e,{"cust-server":{active:!0},dyte:{active:!0}});case 4:return P(e,{"cust-server":{active:!0},"cust-db":{active:!0}});case 5:return P(e,{phone:{active:!0},"cust-db":{_hidden:!0}});case 6:return P(e,{"cust-server":{active:!0},dyte:{active:!0},"cust-db":{_hidden:!0}});case 7:return P(e,{"cust-server":{active:!0},dyte:{active:!0},"cust-db":{_hidden:!0}})}return O}var C=n(79343);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const T=[{href:"create-meeting",name:"Create a meeting",startStep:1,endStep:4},{href:"add-participant",name:"Add a participant",startStep:5,endStep:7},{href:"init-sdk",name:"Initialize SDK",startStep:8,endStep:9},{href:"join-meeting",name:"Join meeting",startStep:10,endStep:11}],M=(0,v.h)(((e,t)=>({nodes:[],nextNav:void 0,edges:[],doctors:["Cardiology","Dermatology","Pediatrics","Psychiatrist"].map((e=>({dept:e,name:C.Jb.person.fullName(),avatar:C.Jb.image.avatar()}))),currentStep:0,onNodesChange(n){e({nodes:(0,l._0)(n,t().nodes)})},onEdgesChange(n){e({edges:(0,l.zW)(n,t().edges)})},addEdge(n){const a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){I(e,t,n[t])}))}return e}({id:(0,y.Ak)(6)},n);e({edges:[a,...t().edges]})},incStep(t){e((e=>{const n=null!=t?t:e.currentStep+1,a=T.find((e=>e.startStep==n));let r;return a&&(r=a.href),{nextNav:r,currentStep:n,nodes:D(0==e.nodes.length?O:e.nodes,n),edges:h(0==e.edges.length?u:e.edges,n)}}))}})),x.x);var z=n(43894);var _=n(63835);const A={0:{title:"",desc:""},1:{title:"User books a meeting",desc:"The flow starts when your user or you want to create or schedule a meeting"},2:{title:"Create meeting on Dyte",desc:"Your server now makes a POST request to Dyte REST API [/v2/meetings](https://docs.dyte.io/api#/operations/create_meeting) endpoint to create a new meeting"},3:{title:"Handle the response",desc:"Dyte REST API responds with the details of the newly created meeting"},4:{title:"Store the details",desc:"Store the **meetingId** along with your metadata of the meeting (time of the meeting etc)"},5:{title:"User wants to join the meeting",desc:"The **authToken** generation flow starts when the user is supposed to join the meeting, this can be right after creating a meeting or at a scheduled time"},6:{title:"Add participant on Dyte",desc:"Your server now makes a **POST** request to the [Add Participant](https://docs.dyte.io/api#/operations/add_participant) endpoint to generate a token"},7:{title:"Forward the response",desc:"The response contains the token that is required for the user to authenticate to the meeting, forward it to the client"}};function J({children:e}){return r.createElement("div",{className:E("rounded-t-[28px] rounded-b-[36px] bg-pink-500/90 shadow-xl","opacity-100 grayscale-0")},r.createElement("p",{className:"mb-0 rounded-t-md px-8 py-1 font-mono text-xs font-semibold text-white"},"Your Application"),r.createElement("div",{className:"simulator nowheel bg-secondary-1000"},r.createElement("div",{className:"h-full w-full bg-secondary-1000 p-2"},e)))}var Y=n(30499);const V={2:{tag:"POST",endpoint:"/v2/meetings",desc:'\n{\n\ttitle: "Meeting with Doctor"\n}\n\n\n\n'},3:{tag:"201",endpoint:"/v2/meetings",desc:'{\n\tsuccess: true,\n\t"data": {\n\t\t"id": "497f6eca-6276...", \n\t\t"title":"Meeting with Doctor"\n\t\t.\n\t\t.'},4:{tag:"201",endpoint:"/v2/meetings",desc:'{\n\tsuccess: true,\n\t"data": {\n\t\t"id": "497f6eca-6276...", \n\t\t"title":"Meeting with Doctor"\n\t\t.\n\t\t.'},6:{tag:"POST",endpoint:"/v2/meetings/{id}/participants",desc:'{\n    "name": "Mary Sue",\n    "preset_name": "group_call_host",\n    "custom_participant_id": "<UserId>"\n\n    \n}'},7:{tag:"201",endpoint:"/v2/meetings/{id}/participants",desc:'{\n\tsuccess: true,\n\t"data": {\n\t\t"id": "497f6eca-6276...", \n\t\t"token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXV"\n\t\t.\n\t\t.'},8:{tag:"201",endpoint:"/v2/meetings/{id}/participants",desc:'{\n\tsuccess: true,\n\t"data": {\n\t\t"id": "497f6eca-6276...", \n\t\t"token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXV..."\n\t\t.\n\t\t.'}};const R={"position-logger":function({xPos:e,yPos:t,data:n}){const a=`${Math.round(e)}px`,i=`${Math.round(t)}px`;return r.createElement("div",{className:"react-flow__node-default"},n.label&&r.createElement("div",null,n.label),r.createElement("div",null,a," ",i),r.createElement(l.h7,{type:"source",position:l.yX.Bottom}))},"rest-api-player":function({data:e}){const{currentStep:t}=M();var n;const{tag:a,endpoint:i,desc:s}=null!==(n=V[t])&&void 0!==n?n:{};return r.createElement("div",{className:E("rounded-xl rounded-b-[16px] bg-pink-500/90 shadow-xl px-0.5 pb-0.5",e.active?"grayscale-0 opacity-100":"grayscale opacity-30")},r.createElement("div",{className:"rounded-t-md px-2 py-1 mb-0 text-white text-xs"},"Your Server"),r.createElement("div",{className:"overflow-hidden rounded-2xl bg-zinc-100 shadow-md dark:ring-1 dark:ring-white/10"},r.createElement("div",{className:"not-prose"},r.createElement("div",null,r.createElement("div",{id:"headlessui-tabs-panel-:rc:",role:"tabpanel","data-headlessui-state":"selected","aria-labelledby":"headlessui-tabs-tab-:r8:"},r.createElement("div",{className:"group dark:bg-white/2.5"},r.createElement("div",{className:"flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-200 px-4 dark:border-b-white/5 dark:bg-white/1"},r.createElement("div",{className:"dark flex"},r.createElement("span",{className:"font-mono text-[0.625rem] font-semibold p-1 bg-emerald-500 text-white rounded-lg"},a)),r.createElement("span",{className:"h-0.5 w-0.5 rounded-full bg-zinc-500"}),r.createElement("span",{className:"font-mono text-xs text-zinc-900 font-semibold"},i)),r.createElement("div",{className:"relative"},r.createElement("div",{className:"overflow-x-auto text-xs text-zinc-700 block justify-start items-center w-[22rem] h-36 bg-zinc-200"},r.createElement(Y.A,{language:"json"},s)))))))),r.createElement(l.h7,{className:"w-1 h-1",type:"target",position:l.yX.Left,id:"phone-conn"}),r.createElement(l.h7,{className:"w-1 h-1",type:"source",position:l.yX.Bottom,id:"db-conn"}),r.createElement(l.h7,{className:"w-1 h-1",type:"source",position:l.yX.Right,id:"dyte-conn"}))},phone:function({data:e}){const{currentStep:t}=M();return r.createElement("div",{className:E("rounded-t-[28px] rounded-b-[36px] bg-pink-500/90 shadow-xl",e.active?"opacity-100 grayscale-0":"opacity-40 grayscale")},r.createElement("p",{className:"mb-0 rounded-t-md px-8 py-1 font-mono text-xs font-semibold text-white"},"Your Application"),r.createElement("div",{className:"simulator nowheel bg-secondary-1000"},r.createElement("div",{className:"h-full w-full bg-secondary-1000 p-2"},e.children(t)),r.createElement(l.h7,{className:"h-2 w-2",type:"source",position:l.yX.Right})))},database:function({data:e}){return r.createElement("div",{className:E("flex flex-col justify-center items-center",e.active?"grayscale-0 opacity-100":"grayscale opacity-30")},r.createElement("p",{className:"rounded-md px-2 py-1 bg-pink-500/90 text-white text-sm"},"Your Database"),r.createElement(z.mwI,{className:"w-16 h-16"}),r.createElement(l.h7,{className:"w-2 h-2",type:"target",position:l.yX.Top}))},logo:function({data:e}){return r.createElement("div",{className:E(e.active?"grayscale-0 opacity-100":"grayscale opacity-30")},r.createElement("div",{className:"flex flex-col justify-center items-center"},r.createElement("svg",{className:"h-8  text-blue-600",viewBox:"0 0 88 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M35.543 18.606c0-1.329.26-2.508.78-3.536.534-1.029 1.258-1.82 2.171-2.374.913-.553 1.928-.83 3.046-.83.85 0 1.66.19 2.431.57.772.363 1.386.854 1.842 1.47V7.666h3.353v17.563h-3.353v-1.946c-.41.649-.984 1.171-1.723 1.567-.74.395-1.598.593-2.574.593a5.596 5.596 0 01-3.022-.855c-.913-.57-1.637-1.368-2.172-2.397-.52-1.044-.779-2.239-.779-3.584zm10.294.048c0-.807-.158-1.495-.473-2.065-.314-.586-.74-1.029-1.274-1.33a3.329 3.329 0 00-1.724-.474c-.614 0-1.18.15-1.7.451-.52.3-.944.744-1.275 1.33-.314.569-.472 1.25-.472 2.04 0 .791.158 1.488.472 2.089.33.585.756 1.036 1.275 1.353a3.288 3.288 0 001.7.475c.614 0 1.188-.15 1.724-.451.535-.317.96-.76 1.274-1.33.315-.585.473-1.281.473-2.088zm19.07-6.575l-8.098 19.368H53.29l2.833-6.55-5.241-12.818h3.706l3.377 9.186 3.423-9.186h3.518zm5.63 2.73v6.36c0 .444.102.768.307.974.22.19.582.285 1.086.285h1.535v2.8h-2.078c-2.786 0-4.179-1.36-4.179-4.082v-6.337H65.65v-2.73h1.558V8.828h3.329v3.251h2.928v2.73h-2.928zm17.464 3.56c0 .475-.032.902-.095 1.282h-9.562c.08.949.41 1.693.992 2.23.582.539 1.299.808 2.149.808 1.227 0 2.1-.53 2.62-1.59h3.565c-.377 1.265-1.102 2.31-2.172 3.133-1.07.806-2.384 1.21-3.943 1.21-1.259 0-2.392-.277-3.4-.83a6.099 6.099 0 01-2.337-2.398c-.55-1.028-.826-2.215-.826-3.56 0-1.361.275-2.556.826-3.584a5.783 5.783 0 012.314-2.374c.992-.553 2.133-.83 3.423-.83 1.244 0 2.353.269 3.33.807a5.552 5.552 0 012.29 2.302c.55.98.826 2.112.826 3.394zm-3.424-.95c-.015-.854-.322-1.534-.92-2.04-.599-.523-1.33-.784-2.196-.784-.819 0-1.511.253-2.078.76-.55.49-.889 1.178-1.015 2.065h6.21z",className:"fill-current text-text"}),r.createElement("path",{d:"M30.827 17.317H17.711v13.186h13.116V17.317z",className:"fill-current text-primary"}),r.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M25.581 14.521V.184a24.576 24.576 0 00-.656-.009C11.525.175.66 11.097.66 24.57c0 .22.003.44.009.66H14.9V14.522h10.68z",className:"fill-current text-primary"})),r.createElement("span",{className:"ml-1 font-semibold"},"REST API")),r.createElement(l.h7,{className:"w-2 h-2",type:"target",position:l.yX.Bottom}))},explanation:function(){const{incStep:e,currentStep:t}=M(),{title:n,desc:a}=A[t]||{title:"",desc:""};return r.createElement("div",null,r.createElement("div",{className:"overflow-hidden rounded-xl bg-secondary-700 shadow-md dark:ring-1 dark:ring-white/20 w-60"},r.createElement("div",{className:"not-prose"},r.createElement("div",null,r.createElement("div",{id:"headlessui-tabs-panel-:rc:",role:"tabpanel","data-headlessui-state":"selected","aria-labelledby":"headlessui-tabs-tab-:r8:"},r.createElement("div",{className:"group dark:bg-secondary-1000/2.5"},r.createElement("div",{className:"flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-secondary-1000/2.5 bg-zinc-500 px-4 dark:border-b-white/5 dark:bg-secondary-1000/1"},r.createElement("span",{className:"font-mono text-xs text-white font-semibold"},n)),r.createElement("div",{className:"relative flex flex-col markdown-body"},r.createElement(_.$,{className:"text-wrap p-3 pb-0 text-xs text-zinc-700 dark:text-white pr-3",linkTarget:"_blank"},a),r.createElement("div",{className:"flex justify-end p-2"},r.createElement("button",{className:"btn",onClick:()=>e()},"Next")))))))))}},X=[{step:8,title:"Initialize SDK",desc:"On the client side, the first interaction with the Dyte\n    library is to initialize it with the token from the previous\n    steps. After this step the SDK initializes all network and\n    media related capabilities and  you can render your pre-call\n    preview screen after this.",code:"const [meeting, initMeeting] = useDyteClient();\n\nuseEffect(() => {\n  initMeeting({\n    authToken: '<auth-token>',\n    defaults: {\n      audio: false,\n      video: false,\n    },\n  });\n}, []);\n\n// meeting is 'undefined'\n        \nreturn (\n  <DyteSetupScreen meeting={meeting} mode=\"fill\" />\n)\n    ",buttonText:"Execute"},{step:9,title:"Initialize SDK",desc:"On the client side, the first interaction with the Dyte\n    library is to initialize it with the token from the previous\n    steps. After this step, the SDK initializes all network and\n    media related capabilities, you can render your pre-call\n    preview screen after this.",code:"const [meeting, initMeeting] = useDyteClient();\n\nuseEffect(() => {\n  initMeeting({\n    authToken: '<auth-token>',\n    defaults: {\n      audio: false,\n      video: false,\n    },\n  });\n}, []);\n\n// meeting is defined\n\nreturn (\n  <DyteSetupScreen meeting={meeting} mode=\"fill\" />\n)\n    ",buttonText:"Next"},{step:10,title:"Join the meeting",desc:"Once the SDK is initialized you can enter the meeting by calling `meeting.join()` method. Unless the user is in a waitlisted state you can now now publish, subcribe to media, send text messages etc.",code:"meeting.join();",buttonText:"Execute"},{step:11,title:"Complete \u2705",desc:"You have now successfully joined the meeting. Checkout [Next Steps](/guides/live-video/next-steps) for further reading."}];function H({step:e,store:t,meeting:n}){return r.createElement("div",{className:"absolute flex h-full w-full pr-12"},r.createElement("div",{className:"flex flex-1 justify-between"},r.createElement("div",{className:"flex-1 p-2"},r.createElement("div",{className:"flex h-full flex-col items-start justify-start pt-4 pl-4"},r.createElement("div",null,r.createElement("span",{className:"text-xl font-semibold"},e.title),r.createElement("div",{className:"my-4 min-w-[512px] max-w-[812px]"},r.createElement(_.$,null,e.desc)),e.code&&r.createElement("div",{className:"w-[512px] rounded-t-[7px] rounded-b-[36px] bg-pink-500/90 shadow-xl"},r.createElement("p",{className:"mb-0 rounded-t-md px-4 py-1 font-mono text-sm font-semibold text-white"},"Your client side code"),r.createElement(Y.A,{language:"jsx",children:e.code})),e.buttonText&&r.createElement("div",{className:"flex"},r.createElement("div",{className:"btn",onClick:()=>t.incStep()},e.buttonText))))),r.createElement("div",{className:"large-phone flex min-w-[400px] items-start justify-center pt-8"},r.createElement("div",null,r.createElement(J,null,r.createElement("div",{className:"flex h-full w-full items-center justify-center bg-secondary-1000"},8===t.currentStep&&r.createElement(c.DyteSpinner,null),(9===t.currentStep||10===t.currentStep)&&n&&r.createElement(c.DyteMeeting,{meeting:n,mode:"fill"}),t.currentStep>10&&n&&r.createElement(c.DyteMeeting,{meeting:n,showSetupScreen:!1,mode:"fill"})))))))}const W=({href:e})=>{const t=(0,a.W6)(),[n,d]=(0,r.useState)(!1),[m,u]=(0,o.useDyteClient)(),p=M();if((0,r.useEffect)((()=>{const t=T.find((t=>t.href===e));t&&p.incStep(t.startStep),setTimeout((()=>{d(!0)}),200)}),[]),(0,r.useEffect)((()=>{u({authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjM5MGJmMjc0LTQxMzMtNDI2ZC04NDkxLWVhN2ExYTE5MDQ4YiIsIm1lZXRpbmdJZCI6ImY5MTMzODM0LWE4MmYtNGNhYi05OTRiLWY3M2RiMmQwNmY4OCIsInBhcnRpY2lwYW50SWQiOiIxZDVhNTkyMy1iYzY5LTQ5ZDAtODJhNy1lZDIzZmE0ZTUyZWYiLCJwcmVzZXRJZCI6Ijg3NzNiZDAzLTkzNjItNDdjNy1hNzlkLThmNTQxMWMyNDc2NiIsImlhdCI6MTY2OTgzMDE5OCwiZXhwIjoxNjc4NDcwMTk4fQ.ngSKuI24JHtPxiimrGT1Vkk7_AdvrMRwkbltvlWpyWmmm14-Kl4OUVw2nm7q0S2uEgw7xXRz8faxzzJTMogkKlUSXGXOpUc_lXYH9h7u29MCFf3nJDy_FZIsSgPmULLoF3p4OlU9wNSwEnO0h856PdB4MfAuXxa24vkgI1tplzBPOS4NcW9x8pfE7J98ixVZKcPvqNig_pLOypy0j5Pd3CHdi25EFml1Fr0iyui4hDrjE-mzMnYwvojkXSb47MSxVoOLGvWn__dL2qrPSho4C3fhb_HEupWAzCHMDBpl1IGhazN1-mZ40WNYsKFFcch89qOsr0dA2C_d0PHVzCVP3A",defaults:{audio:!1,video:!1}}),(0,c.provideDyteDesignSystem)(document.body,{theme:"light"})}),[]),(0,r.useEffect)((()=>{m&&m.self.on("roomJoined",(()=>{10==p.currentStep?p.incStep(11):11==p.currentStep&&p.incStep(12)}))}),[m]),(0,r.useEffect)((()=>{p.nextNav&&t.push(p.nextNav)}),[p.nextNav]),0===p.nodes.length)return r.createElement("div",null,"Nothing to see");if(!1===n)return null;const f=X.find((e=>e.step===p.currentStep));return f?r.createElement(H,{step:f,meeting:m,store:p}):r.createElement("div",{className:"absolute flex h-full w-full pr-12"},r.createElement("div",{className:"flex flex-1"},r.createElement(l.Gc,{nodeTypes:R,edgeTypes:b,nodes:p.nodes,edges:p.edges,onNodesChange:p.onNodesChange,onEdgesChange:p.onEdgesChange,onConnect:p.addEdge,fitView:!0,fitViewOptions:{padding:.02}},r.createElement(i.V,{variant:i._.Dots,className:"bg-secondary-900 dark:bg-secondary-800"}),r.createElement(s.H,null))))}},74866:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(96540),r=n(20053),l=n(12075),i=n(86850),s=n(15418),c=n(90062),o=n(65354),d=n(54982);const m={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var u=n(1589),p=n(63581),f=n(33257);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b({children:e}){return a.createElement("div",{className:(0,r.A)(m.playgroundHeader)},e)}function y(){return a.createElement("div",null,"Loading...")}function v(){return a.createElement(a.Fragment,null,a.createElement(b,null,a.createElement(s.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Preview")),a.createElement("div",{className:m.playgroundPreview},a.createElement(o.A,{fallback:a.createElement(y,null)},(()=>a.createElement(a.Fragment,null,a.createElement(i.pA,null),a.createElement(i.p1,null))))))}function x(){const e=(0,l.A)();return a.createElement(i.w,{key:String(e),className:(0,r.A)(m.playgroundEditor,"border border-secondary-800 !pb-4")})}function E(){return a.createElement("div",{className:"relative"},a.createElement("div",{className:"-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},a.createElement(s.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"LIVE EDITOR"),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},a.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),a.createElement(x,null))}const w={value:!1};function N(e){var{children:t,transformCode:n}=e,l=h(e,["children","transformCode"]);const{siteConfig:{themeConfig:s}}=(0,c.A)(),{liveCodeBlock:{playgroundPosition:o}}=s,b=(0,d.A)(),[y,x]=(0,u.useDyteClient)(),{colorMode:N}=(0,f.G)();return(0,a.useEffect)((()=>{w.value||(w.value=!0,x({roomName:"qplrfc-uuujcj",authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds",defaults:{audio:!1,video:!1}}).then((e=>{0==location.href.includes("build-pre-call-ui")&&e.join(),window.meeting=e,e.meta.meetingStartedTimestamp=new Date,e.participants.setMockParticipantCount(5,5);const t=document.getElementsByTagName("html")[0].dataset.theme;(0,p.provideDyteDesignSystem)(document.body,{theme:t}),w.value=!1})))}),[]),(0,a.useEffect)((()=>{(0,p.provideDyteDesignSystem)(document.body,{theme:N})}),[N]),a.createElement("div",{className:(0,r.A)(m.playgroundContainer,"!rounded-none !shadow-none")},a.createElement(u.DyteProvider,{value:y},a.createElement(i.Q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){g(e,t,n[t])}))}return e}({code:t.replace(/\n$/,""),transformCode:null!=n?n:e=>`${e};`,theme:b},l),"top"===o?a.createElement(a.Fragment,null,a.createElement(v,null),a.createElement(E,null)):a.createElement(a.Fragment,null,a.createElement(E,null),a.createElement(v,null)))))}},72041:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(96540),r=n(63581),l=n(1589);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({React:a},a,r,l,{Row:function(e){var{children:t,style:n={}}=e,r=c(e,["children","style"]);return a.createElement("div",s({style:s({display:"flex",gap:8,flexWrap:"wrap"},n)},r),t)},Col:function(e){var{children:t,style:n={}}=e,r=c(e,["children","style"]);return a.createElement("div",s({style:s({display:"flex",flexDirection:"column",flexWrap:"wrap",gap:8},n)},r),t)},Center:function(e){var{children:t,style:n}=e,r=c(e,["children","style"]);return a.createElement("div",s({style:s({display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",gap:8},n)},r),t)},airplaneSVG:'<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',activePlugin:{}})}}]);