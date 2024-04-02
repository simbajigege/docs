"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[19537],{25068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(74848),s=t(28453);const i={title:"Set Up Webhooks to Receive Real-time Updates",sidebar_position:2,description:"Learn about the relationship between webhooks and events in Dyte. Follow our guide for effective integration and management."},r="Set Up Webhooks to Receive Real-time Updates",a={id:"capabilities/webhooks/webhooks-and-events",title:"Set Up Webhooks to Receive Real-time Updates",description:"Learn about the relationship between webhooks and events in Dyte. Follow our guide for effective integration and management.",source:"@site/docs/guides/capabilities/webhooks/webhooks-and-events.mdx",sourceDirName:"capabilities/webhooks",slug:"/capabilities/webhooks/webhooks-and-events",permalink:"/docs/guides/capabilities/webhooks/webhooks-and-events",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/webhooks/webhooks-and-events.mdx",tags:[],version:"current",lastUpdatedAt:1709899166,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:2,frontMatter:{title:"Set Up Webhooks to Receive Real-time Updates",sidebar_position:2,description:"Learn about the relationship between webhooks and events in Dyte. Follow our guide for effective integration and management."},sidebar:"tutorialSidebar",previous:{title:"Webhooks Overview",permalink:"/docs/guides/capabilities/webhooks/webhooks-overview"},next:{title:"Webhook Events List",permalink:"/docs/guides/capabilities/webhooks/webhook-events"}},d={},c=[{value:"Step 1: Identify the events to monitor",id:"step-1-identify-the-events-to-monitor",level:3},{value:"Step 2: Create a webhook endpoint",id:"step-2-create-a-webhook-endpoint",level:3},{value:"Step 3: Handle requests from Dyte",id:"step-3-handle-requests-from-dyte",level:3},{value:"Register your Endpoint",id:"register-your-endpoint",level:4},{value:"Check for <code>dyte-uuid</code> Header",id:"check-for-dyte-uuid-header",level:4},{value:"Return a <code>2xx</code> Response",id:"return-a-2xx-response",level:4},{value:"Built-in Retries",id:"built-in-retries",level:4},{value:"Step 4: Secure your webhooks (recommended)",id:"step-4-secure-your-webhooks-recommended",level:3},{value:"Sample code",id:"sample-code",level:4},{value:"Step 5: Register your HTTPS URL",id:"step-5-register-your-https-url",level:3},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Head:t,TabItem:i,Tabs:r}=n;return t||p("Head",!0),i||p("TabItem",!0),r||p("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"set-up-webhooks-to-receive-real-time-updates",children:"Set Up Webhooks to Receive Real-time Updates"}),"\n",(0,o.jsxs)(n.p,{children:["This topic explains how to set up webhooks to receive real-time updates for\nspecific events. Refer\n",(0,o.jsx)(n.a,{href:"/guides/capabilities/webhooks/webhook-events",children:"View Webhook Events List"})," to view the list of\nevents for which notifications can be sent. Setting up a webhook to start\nreceiving notifications in your application involves the following steps:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Identify the events you want to monitor and the event payloads you want to\nparse."}),"\n",(0,o.jsx)(n.li,{children:"Create a webhook endpoint as an HTTP endpoint (URL) on your backend\napplication. Creating a webhook endpoint is no different from creating any\nother API route on your backend. It's an HTTP or HTTPS endpoint on your\nserver with a URL. You can use a single endpoint to handle multiple event\ntypes at once, or you can set up individual endpoints for specific events."}),"\n",(0,o.jsx)(n.li,{children:"Handle requests from Dyte by parsing each event object and returning 2xx\nresponse status codes."}),"\n",(0,o.jsx)(n.li,{children:"Deploy your webhook endpoint so it's a publicly accessible HTTPS URL."}),"\n",(0,o.jsxs)(n.li,{children:["Register your publicly accessible HTTPS URL using the Dyte\n",(0,o.jsx)(n.a,{href:"https://dev.dyte.io",children:"developer portal"})," or Webhook APIs."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step-1-identify-the-events-to-monitor",children:"Step 1: Identify the events to monitor"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.a,{href:"/guides/capabilities/webhooks/webhook-events",children:"events overview guide"})," to identify the\nevents your webhook endpoint needs to parse."]}),"\n",(0,o.jsx)(n.h3,{id:"step-2-create-a-webhook-endpoint",children:"Step 2: Create a webhook endpoint"}),"\n",(0,o.jsx)(n.p,{children:"Set up an HTTP endpoint that can accept webhook requests with a POST method. For\nexample, this route in express is a map to a Node.js webhook function."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const express = require('express');\nconst app = express();\n\napp.post('/webhook', express.json({ type: 'application/json' }), (req, res) => {\n  const event = request.body;\n  // ... do further processing\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step-3-handle-requests-from-dyte",children:"Step 3: Handle requests from Dyte"}),"\n",(0,o.jsx)(n.p,{children:"Your endpoint must be configured to receive events for the type of event\nnotifications you want to receive. Dyte sends events to your webhook endpoint as\npart of a POST request with a JSON payload."}),"\n",(0,o.jsx)(n.h4,{id:"register-your-endpoint",children:"Register your Endpoint"}),"\n",(0,o.jsxs)(n.p,{children:["You can register your endpoint as a webhook and listen for specific events using\nour ",(0,o.jsx)(n.a,{href:"https://dev.dyte.io",children:"dev portal"})," or by making an API request. For example,\nto receive all events, you can make a request like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl --location --request POST \'https://api.dyte.io/v2/webhooks\' \\\n--header \'Authorization: Basic WRiOmQyNzBmYjJmOGNiNGUzZWY1MGI1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "All events webhook",\n    "url": "<your endpoint here>",\n    "events": [\n        "meeting.started",\n        "meeting.ended",\n        "meeting.participantJoined",\n        "meeting.participantLeft",\n        "recording.statusUpdate",\n        "livestreaming.statusUpdate"\n    ]\n}\'\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more information, check out the\n",(0,o.jsx)(n.a,{href:"/api/?v=v2#/operations/addWebhook",children:"webhooks API reference"}),"."]}),"\n",(0,o.jsxs)(n.h4,{id:"check-for-dyte-uuid-header",children:["Check for ",(0,o.jsx)(n.code,{children:"dyte-uuid"})," Header"]}),"\n",(0,o.jsxs)(n.p,{children:["Each webhook will have a unique value for the ",(0,o.jsx)(n.code,{children:"dyte-uuid"})," header. You can use\nthese to ensure you don't process any retries."]}),"\n",(0,o.jsxs)(n.h4,{id:"return-a-2xx-response",children:["Return a ",(0,o.jsx)(n.code,{children:"2xx"})," Response"]}),"\n",(0,o.jsxs)(n.p,{children:["Your endpoint must quickly (within 3 seconds) return a successful status code (",(0,o.jsx)(n.code,{children:"2xx"}),") prior to any\ncomplex logic that could cause a timeout."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"app.post('/webhook', express.json({ type: 'application/json' }), (req, res) => {\n  const event = request.body;\n  // ... do further processing\n  res.status(200).send();\n  // ... perform heavy tasks\n  return;\n});\n"})}),"\n",(0,o.jsx)(n.h4,{id:"built-in-retries",children:"Built-in Retries"}),"\n",(0,o.jsxs)(n.p,{children:["Dyte webhooks have built-in retry methods for ",(0,o.jsx)(n.code,{children:"3xx"}),", ",(0,o.jsx)(n.code,{children:"4xx"})," or ",(0,o.jsx)(n.code,{children:"5xx"})," response\nstatus codes. If Dyte doesn't receive a ",(0,o.jsx)(n.code,{children:"2xx"})," response status code for an event within 3 seconds,\nwe mark the event as failed and retry up to 5 times."]}),"\n",(0,o.jsx)(n.h3,{id:"step-4-secure-your-webhooks-recommended",children:"Step 4: Secure your webhooks (recommended)"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.a,{href:"/guides/capabilities/webhooks/signatures",children:"webhook signatures"})," to verify that Dyte\ngenerated a webhook request and that it didn't come from a malicious server\npretending to be Dyte."]}),"\n",(0,o.jsx)(n.h4,{id:"sample-code",children:"Sample code"}),"\n",(0,o.jsx)(r,{children:(0,o.jsx)(i,{value:"node",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const express = require('express');\nconst app = express();\n\napp.post('/webhook', express.json({ type: 'application/json' }), (req, res) => {\n  // verify signature\n  // ...\n\n  // parse event body\n  switch (req.body.event) {\n    case 'meeting.participantJoined':\n      const { meeting, participant } = req.body;\n      // Then define and call a method to handle the joined participant\n      // handleParticipantJoined(meeting, participant);\n      break;\n    case 'recording.statusUpdate':\n      const { meeting, recording } = req.body;\n      // Then define and call a method to handle the recording status update\n      // handleRecordingUpdate(meeting, recording);\n      break;\n    // ... handle other event types\n    default:\n      console.log(`Unhandled event type ${event.type}`);\n  }\n});\n\napp.listen(8000, () => console.log('Running on port 8000'));\n"})})})}),"\n",(0,o.jsx)(n.h3,{id:"step-5-register-your-https-url",children:"Step 5: Register your HTTPS URL"}),"\n",(0,o.jsxs)(n.p,{children:["Register your publicly accessible HTTPS URL using the\n",(0,o.jsx)(n.a,{href:"https://dev.dyte.io",children:"Dyte developer portal"})," or\n",(0,o.jsx)(n.a,{href:"/api/?v=v2#/operations/addWebhook",children:"Webhook APIs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/guides/capabilities/webhooks/webhook-events",children:"Events overview guide"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/api/?v=v2#/operations/addWebhook",children:"Webhooks API reference"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/guides/capabilities/webhooks/signatures",children:"Webhook signatures"})}),"\n"]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("title",{children:"Set Up Webhooks to Receive Real-time Updates Guide"}),(0,o.jsx)("meta",{name:"description",content:"Learn about the relationship between webhooks and events in Dyte. Follow our guide for effective integration and management."})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);