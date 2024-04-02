"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[22805],{62665:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(74848),r=i(28453);const o={title:"Start Recording a Meeting",sidebar_position:2,description:"Explore how to start recordings with Dyte's recording capabilities. Follow our guide for effective recording initiation."},s=void 0,a={id:"capabilities/recording/start-recording",title:"Start Recording a Meeting",description:"Explore how to start recordings with Dyte's recording capabilities. Follow our guide for effective recording initiation.",source:"@site/docs/guides/capabilities/recording/start-recording.mdx",sourceDirName:"capabilities/recording",slug:"/capabilities/recording/start-recording",permalink:"/docs/guides/capabilities/recording/start-recording",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/recording/start-recording.mdx",tags:[],version:"current",lastUpdatedAt:1710698925,formattedLastUpdatedAt:"Mar 17, 2024",sidebarPosition:2,frontMatter:{title:"Start Recording a Meeting",sidebar_position:2,description:"Explore how to start recordings with Dyte's recording capabilities. Follow our guide for effective recording initiation."},sidebar:"tutorialSidebar",previous:{title:"Recording Overview",permalink:"/docs/guides/capabilities/recording/recording-overview"},next:{title:"Configure Video Settings",permalink:"/docs/guides/capabilities/recording/configure-codecs"}},c={},d=[{value:"Using the <code>record_on_start</code> parameter",id:"using-the-record_on_start-parameter",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Using the Start Recording API",id:"using-the-start-recording-api",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This topic explains how to use Dyte to implement composite recording."}),"\n",(0,n.jsxs)(t.p,{children:["Before getting started with this guide, we recommend that you read\n",(0,n.jsx)(t.a,{href:"/getting-started",children:"Getting Started with Dyte"})," to familiarize yourself with Dyte."]}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to start recording a Dyte meeting:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Using the ",(0,n.jsx)(t.code,{children:"record_on_start"})," flag when\n",(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/create_meeting",children:"creating a meeting"})]}),"\n",(0,n.jsxs)(t.li,{children:["Using the ",(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/start_recording",children:"Start Recording API"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Dyte stores recordings for a period of 7 days, after which they will expire and no longer be accessible. It is important to either download a copy of your recording or ",(0,n.jsx)(t.a,{href:"/guides/capabilities/recording/custom-cloud-storage",children:"set up storage"})," before the link expires."]}),"\n",(0,n.jsx)(t.admonition,{title:"note",type:"info",children:(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Our system does not currently support recordings of brief durations that are less than five seconds. In such cases, it is possible that the recording APIs may experience occasional failures. Due to limitations in encoding recordings of short duration, these failures may result in an ERRORED state."}),"\n",(0,n.jsx)(t.li,{children:"Recording will stop if there are no participants in a meeting for 60 seconds."}),"\n",(0,n.jsx)(t.li,{children:"The average file size for one hour of recording is approximately 300MB."}),"\n",(0,n.jsxs)(t.li,{children:["There can only be one active recording of a meeting at any given time, unless the ",(0,n.jsx)(t.code,{children:"allow_multiple_recording"})," field is set in the ",(0,n.jsx)(t.a,{href:"/api#/operations/start_recording",children:"Start recording a meeting"})," API."]}),"\n",(0,n.jsxs)(t.li,{children:["Maximum recording time is 24 hours. Recording will automatically stop after\n24 hours have elapsed since the recording's start time. This option can be\nconfigured to any value up to 24 hours by passing the ",(0,n.jsx)(t.code,{children:"max_seconds"})," parameter\nin the ",(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/start_recording",children:"start recording"})," API request."]}),"\n"]})}),"\n",(0,n.jsxs)(t.h2,{id:"using-the-record_on_start-parameter",children:["Using the ",(0,n.jsx)(t.code,{children:"record_on_start"})," parameter"]}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/create_meeting",children:"creating a meeting"}),", you can\nspecify the ",(0,n.jsx)(t.code,{children:"record_on_start"})," parameter to start the recording as soon as someone joins the\nmeeting."]}),"\n",(0,n.jsx)(t.admonition,{title:"Specify storage_config",type:"info",children:(0,n.jsxs)(t.p,{children:["If you're using this method to start the recording, you must specify the\n`storage-config' using the ",(0,n.jsx)(t.a,{href:"https://dev.dyte.io/",children:"Developer Portal"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(t.p,{children:["Specify the ",(0,n.jsx)(t.code,{children:"record_on_start"})," parameter. If this flag is true, then a recording\nwill be started as soon as a meeting starts on Dyte, i.e, when the first\nparticipant joins the meeting."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl --request POST \\\n  --url https://api.dyte.io/v2/meetings \\\n  --header \'Authorization: Basic NzcyNDMyYXNoZGphZDpkc2ZzZGFmc2FkZmFzZGZzZGY=\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "title": "Lorem Ipsum",\n  "preferred_region": "ap-south-1",\n  "record_on_start": true\n}\'\n'})}),"\n",(0,n.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "success": true,\n  "data": {\n    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n    "preferred_region": "ap-south-1",\n    "record_on_start": true,\n    "created_at": "2019-08-24T14:15:22Z",\n    "updated_at": "2019-08-24T14:15:22Z"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"using-the-start-recording-api",children:"Using the Start Recording API"}),"\n",(0,n.jsxs)(t.p,{children:["You can also start a recording using the\n",(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/start_recording",children:"Start Recording"})," API."]}),"\n",(0,n.jsxs)(t.p,{children:["Specify the ",(0,n.jsx)(t.code,{children:"meeting ID"})," of the meeting that you want to record."]}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.a,{href:"/api?v=v2#/operations/get_all_meetings",children:"Fetch all meetings"})," for an\norganization or ",(0,n.jsx)(t.a,{href:"/api?v=v2#/operations/create_meeting",children:"Create a meeting"})," API to\nget the meeting ID. The API returns a parameter called ",(0,n.jsx)(t.code,{children:"id"}),", which is your\nmeeting ID."]}),"\n",(0,n.jsx)(t.h3,{id:"request-1",children:"Request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Calling Start Recording API"',children:"curl --request POST \\\n  --url https://api.dyte.io/v2/recordings \\\n  --header 'Authorization: Basic NzcyNDMyYXNoZGphZDpkc2ZzZGFmc2FkZmFzZGZzZGY=' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n  \"meeting_id\": \"97440c6a-140b-40a9-9499-b23fd7a3868a\"\n}'\n"})}),"\n",(0,n.jsx)(t.h3,{id:"response-1",children:"Response"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "success": true,\n  "data": {\n    "id": "97440c6a-140b-40a9-9499-b23fd7a3868a",\n    "download_url": "http://example.com",\n    "download_url_expiry": "2019-08-24T14:15:22Z",\n    "download_audio_url": "http://example1.com",\n    "file_size": 0,\n    "session_id": "1ffd059c-17ea-40a8-8aef-70fd0307db82",\n    "output_file_name": "string",\n    "status": "INVOKED",\n    "invoked_time": "2019-08-24T14:15:22Z",\n    "started_time": "2019-08-24T14:15:22Z",\n    "stopped_time": "2019-08-24T14:15:22Z",\n    "storage_config": {\n      "type": "aws",\n      "secret_key": "string",\n      "bucket": "string",\n      "region": "us-east-1",\n      "path": "string"\n    }\n  }\n}\n'})}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("title",{children:"Start Recording a Meeting Guide"}),(0,n.jsx)("meta",{name:"description",content:"Explore how to start recordings with Dyte's recording capabilities. Follow our guide for effective recording initiation."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);