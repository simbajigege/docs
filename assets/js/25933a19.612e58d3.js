"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[53226],{8234:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=r(74848),t=r(28453);const a={title:"Other Methods",description:"Methods to manage the local user.",sidebar_position:5,tags:["react-web-core","local-user","self","methods"]},s=void 0,d={id:"local-user/extras",title:"Other Methods",description:"Methods to manage the local user.",source:"@site/docs/react-web-core/local-user/extras.mdx",sourceDirName:"local-user",slug:"/local-user/extras",permalink:"/docs/react-web-core/local-user/extras",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/react-web-core/local-user/extras.mdx",tags:[{label:"react-web-core",permalink:"/docs/react-web-core/tags/react-web-core"},{label:"local-user",permalink:"/docs/react-web-core/tags/local-user"},{label:"self",permalink:"/docs/react-web-core/tags/self"},{label:"methods",permalink:"/docs/react-web-core/tags/methods"}],version:"current",lastUpdatedAt:1711302110,formattedLastUpdatedAt:"Mar 24, 2024",sidebarPosition:5,frontMatter:{title:"Other Methods",description:"Methods to manage the local user.",sidebar_position:5,tags:["react-web-core","local-user","self","methods"]},sidebar:"tutorialSidebar",previous:{title:"Media Permission Errors",permalink:"/docs/react-web-core/local-user/media-permission-errors"},next:{title:"Participant Maps",permalink:"/docs/react-web-core/participants/"}},o={},l=[{value:"Update media resolution at runtime",id:"update-media-resolution-at-runtime",level:2},{value:"Camera",id:"camera",level:3},{value:"Screenshare",id:"screenshare",level:3},{value:"Using Middlewares",id:"using-middlewares",level:2},{value:"Create a middleware",id:"create-a-middleware",level:3},{value:"Working with video middlewares",id:"working-with-video-middlewares",level:3},{value:"Working with audio middlewares",id:"working-with-audio-middlewares",level:3},{value:"Pinning &amp; unpinning",id:"pinning--unpinning",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"update-media-resolution-at-runtime",children:"Update media resolution at runtime"}),"\n",(0,i.jsx)(n.h3,{id:"camera",children:"Camera"}),"\n",(0,i.jsx)(n.p,{children:"meeting.self.updateVideoConstraints(resolution)"}),"\n",(0,i.jsx)(n.p,{children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"meeting.self.updateVideoConstraints({\n  width: { ideal: 1920 },\n  height: { ideal: 1080 },\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"screenshare",children:"Screenshare"}),"\n",(0,i.jsx)(n.p,{children:"meeting.self.updateScreenshareConstraints(resolution)"}),"\n",(0,i.jsx)(n.p,{children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"meeting.self.updateScreenshareConstraints({\n  width: { ideal: 1920 },\n  height: { ideal: 1080 },\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-middlewares",children:"Using Middlewares"}),"\n",(0,i.jsxs)(n.p,{children:["Middlewares are add-ons that you can use to add effects and filters to your\naudio and video streams with ease. The ",(0,i.jsx)(n.code,{children:"meeting.self"})," namespace exposes methods\nto add and remove these middlewares. Read more about how to work with\nmiddlewares ",(0,i.jsx)(n.a,{href:"https://dyte.io/blog/streams-blog/",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"create-a-middleware",children:"Create a middleware"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function RetroTheme() {\n  return (canvas, ctx) => {\n    ctx.filter = 'grayscale(1)';\n    ctx.shadowColor = '#000';\n    ctx.shadowBlur = 20;\n    ctx.lineWidth = 50;\n    ctx.strokeStyle = '#000';\n    ctx.strokeRect(0, 0, canvas.width, canvas.height);\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"working-with-video-middlewares",children:"Working with video middlewares"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Add the video middleware\nmeeting.self.addVideoMiddleware(RetroTheme);\n\n// Remove the video middleware\nmeeting.self.removeVideoMiddleware(RetroTheme);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"working-with-audio-middlewares",children:"Working with audio middlewares"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Add the audio middleware\nmeeting.self.addAudioMiddleware(YourAudioMiddleware);\n\n// Remove the audio middleware\nmeeting.self.removeAudioMiddleware(YourAudioMiddleware);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"pinning--unpinning",children:"Pinning & unpinning"}),"\n",(0,i.jsxs)(n.p,{children:["You can pin or unpin yourself given you have the appropriate permissions. You\ncan check the pinned status of the local user using ",(0,i.jsx)(n.code,{children:"meeting.isPinned"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"meeting.self.pin();\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"meeting.self.unpin();\n"})}),"\n",(0,i.jsx)(r,{children:(0,i.jsx)("title",{children:"React Web Core Other Methods"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var i=r(96540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);