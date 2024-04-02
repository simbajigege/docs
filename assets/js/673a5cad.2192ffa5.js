"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[26825],{10823:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=i(74848),a=i(28453);const s={slug:"/device-emulator",sidebar_position:1,keywords:["opensource"]},r="Introduction",c={id:"device-emulator/intro",title:"Introduction",description:"For a product, integration tests are one of the crucial part that improves quality & stability. For a WebRTC based solution like Dyte, having integration tests that can test multi-user call with Audio/Video on is necessary.",source:"@site/docs/community-packages/device-emulator/intro.mdx",sourceDirName:"device-emulator",slug:"/device-emulator",permalink:"/docs/community-packages/device-emulator",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/community-packages/device-emulator/intro.mdx",tags:[],version:"current",lastUpdatedAt:1709899166,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:1,frontMatter:{slug:"/device-emulator",sidebar_position:1,keywords:["opensource"]},sidebar:"tutorialSidebar",previous:{title:"Community packages",permalink:"/docs/community-packages/"},next:{title:"Examples",permalink:"/docs/community-packages/device-emulator/examples"}},d={},o=[{value:"Installation",id:"installation",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Add a virtual device",id:"add-a-virtual-device",level:3},{value:"Remove virtual device",id:"remove-virtual-device",level:3},{value:"Fail the device",id:"fail-the-device",level:3},{value:"Resume the device",id:"resume-the-device",level:3},{value:"Silence the tracks",id:"silence-the-tracks",level:3},{value:"Unmute the tracks from the device",id:"unmute-the-tracks-from-the-device",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:i,TabItem:s,Tabs:r}=t;return i||h("Head",!0),s||h("TabItem",!0),r||h("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"For a product, integration tests are one of the crucial part that improves quality & stability. For a WebRTC based solution like Dyte, having integration tests that can test multi-user call with Audio/Video on is necessary."}),"\n",(0,n.jsx)(t.p,{children:"For an end user, sharing a camera & mic is easy. For this, browsers expose APIs such as enumerateDevices & getUserMedia on MediaDevices interface, on which user interfaces can be built easily."}),"\n",(0,n.jsx)(t.p,{children:"Access to camera & mic prompts the users to allow permissions to do so. This works great as long as an end-user is using the product and actively allowing permissions and selecting devices, However this makes it impossible to write integration tests because for integration tests there is no active user and you need to somehow allow permissions programmatically which at the moment of writing this README is not reliably supported in modern tools like Playwright."}),"\n",(0,n.jsx)(t.p,{children:"Even if we can somehow allow permissions, The next set of questions would be: What would the video & audio feed look like? Can we customize the feed? Can we use the feed to detect delays between a video feed producer and consumer? How do we test multiple devices? How do we test media ejection on the fly? How do we test addition of a new device?"}),"\n",(0,n.jsx)(t.p,{children:"Dyte's Device Emulator is a solution that answers all these questions and provides a easier way to mimic, add, remove devices & their feed."}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(r,{groupId:"cdn-npm",children:[(0,n.jsxs)(s,{value:"cdn",label:"CDN",default:!0,children:[(0,n.jsxs)(t.p,{children:["To set up device-emulator add the following script tags inside\nthe ",(0,n.jsx)(t.code,{children:"<head />"})," tag."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<script>\n  window.addEventListener('dyte.deviceEmulatorLoaded', () => {\n    // use device emulator methods here...\n  });\n<\/script>\n<script src=\"https://cdn.jsdelivr.net/npm/@dytesdk/device-emulator/dist/index.iife.js\"><\/script>\n"})})]}),(0,n.jsxs)(s,{value:"npm",label:"npm",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install @dytesdk/device-emulator\n"})}),(0,n.jsx)(t.p,{children:"use the package like below"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import '@dytesdk/device-emulator';\n\n// use the device emulator methods\n"})})]}),(0,n.jsxs)(s,{value:"yarn",label:"yarn",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @dytesdk/device-emulator\n"})}),(0,n.jsx)(t.p,{children:"use the package like below"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import '@dytesdk/device-emulator';\n\n// use the device emulator methods\n"})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"api-reference",children:"API reference"}),"\n",(0,n.jsx)(t.h3,{id:"add-a-virtual-device",children:"Add a virtual device"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"{1}",children:"const virtualDeviceID = navigator.mediaDevices.addEmulatedDevice('videoinput');\n\n// get a media track from the virtual device\nnavigator.mediaDevices\n  .getUserMedia({\n    video: {\n      deviceId: {\n        exact: virtualDeviceID,\n      },\n    },\n  })\n  .then((mediaStream) => {\n    const video = document.querySelector('video');\n    video.srcObject = mediaStream;\n    video.onloadedmetadata = () => {\n      video.play();\n    };\n  })\n  .catch((err) => {\n    // always check for errors at the end.\n    console.error(`${err.name}: ${err.message}`);\n  });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"remove-virtual-device",children:"Remove virtual device"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"navigator.mediaDevices.removeEmulatedDevice(deviceId);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fail-the-device",children:"Fail the device"}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.code,{children:"failDevice"})," method to test scenarios where the devices stops working abruptly."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"{4}",children:"const virtualDeviceID = navigator.mediaDevices.addEmulatedDevice('videoinput');\n\n// Stop the device from working\nnavigator.mediaDevices.failDevice(virtualDeviceID, true);\n\nnavigator.mediaDevices\n  .getUserMedia({\n    video: {\n      deviceId: {\n        exact: virtualDeviceID,\n      },\n    },\n  })\n  .then((mediaStream) => {\n    // This will not work\n    const video = document.querySelector('video');\n    video.srcObject = mediaStream;\n    video.onloadedmetadata = () => {\n      video.play();\n    };\n  })\n  .catch((err) => {\n    // catch `NotReadableError` thrown from the device\n    console.error(`${err.name}: ${err.message}`);\n  });\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Executing the ",(0,n.jsx)(t.code,{children:"failDevice"})," after getting the tracks will stop the active tracks."]}),"\n",(0,n.jsx)(t.h3,{id:"resume-the-device",children:"Resume the device"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"failDevice"})," method to make the device work normally"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"navigator.mediaDevices.failDevice(deviceId, false);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"silence-the-tracks",children:"Silence the tracks"}),"\n",(0,n.jsx)(t.p,{children:"Generate tracks that are silent"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"navigator.mediaDevices.silenceDevice(deviceId, true);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"unmute-the-tracks-from-the-device",children:"Unmute the tracks from the device"}),"\n",(0,n.jsx)(t.p,{children:"Remove the silence check on the device"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"navigator.mediaDevices.silenceDevice(deviceId, false);\n"})}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("title",{children:"Community Packages Introduction"}),(0,n.jsx)("meta",{name:"description",content:"Learn about Dyte's community package for device emulation. Explore the documentation to emulate various devices and test applications effectively."})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);