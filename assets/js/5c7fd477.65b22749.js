"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[34038],{50694:(e,t,n)=>{n.d(t,{Ay:()=>l});var i=n(74848),r=n(28453);n(20633);function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsx)("span",{class:"mb-2 block",children:(0,i.jsxs)(t.p,{children:["This quickstart shows how to add Dyte's ",e.product," SDK to your"," ","\n",(0,i.jsx)("a",{href:"https://angular.io/",children:"Angular"})," applications."]})}),"\n",(0,i.jsx)("span",{class:"mb-2 block",children:(0,i.jsxs)(t.p,{children:["Further down this guide we also explain how Dyte's UI component library can\nhelp to build your UI faster with components specially made for"," ","\n",e.product," applications."]})}),"\n",(0,i.jsxs)(t.p,{children:["You can also checkout our\n",(0,i.jsx)(t.a,{href:"https://github.com/dyte-io/angular-samples#samples",children:"sample code"})," for Angular. You can clone\nand run a sample application from the\n",(0,i.jsx)(t.a,{href:"https://github.com/dyte-io/angular-samples",children:"Angular Samples GitHub repository"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"before-getting-started",children:"Before getting started"}),"\n",(0,i.jsxs)(t.p,{children:["Make sure you've a mechanism to get ",(0,i.jsx)(t.code,{children:"authToken"})," from your server-side, which you would have received as part of ",(0,i.jsx)(t.a,{href:"/guides/live-video/build-live-video-app#step-2-add-participants",children:"Add Participant"})," call."]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-install-dyte-sdk-packages",children:"Step 1: Install Dyte SDK packages"}),"\n",(0,i.jsx)(t.p,{children:"To begin, install the following packages:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@dytesdk/web-core"}),": This core package powers video, voice, livestream and chat SDKs. This is a required package."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@dytesdk/ui-kit"}),": This package includes Dyte UI components which can be used with core to easily build your own UI, including a prebuilt UI component. You can skip installing this package if you wish to build your own UI from scratch."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can install the SDKs using CDN, npm, or Yarn."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @dytesdk/angular-ui-kit @dytesdk/web-core\n"})}),"\n",(0,i.jsx)(t.h3,{id:"version",children:"Version"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"@dytesdk/web-core"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fweb-core",children:(0,i.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fweb-core.svg",alt:"npm version"})})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"@dytesdk/ui-kit"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fui-kit",children:(0,i.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-prepare-meeting-object",children:"Step 2: Prepare meeting object"}),"\n",(0,i.jsx)(t.p,{children:"Here's a series of steps that you need to perform:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Fetch the ",(0,i.jsx)(t.code,{children:"authToken"})," from your server-side."]}),"\n",(0,i.jsxs)(t.li,{children:["Call the ",(0,i.jsx)(t.code,{children:"DyteClient.init()"})," method from the ",(0,i.jsx)(t.code,{children:"web-core"})," package and pass the ",(0,i.jsx)(t.code,{children:"authToken"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"class AppComponent {\n  title = 'MyProject';\n  dyteMeeting: DyteClient;\n\n  async ngAfterViewInit() {\n    const meeting = await DyteClient.init({\n      authToken: '<auth-token>',\n    });\n    this.dyteMeeting = meeting;\n  }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now, you have established the connection with the Dyte meeting server successfully."}),"\n",(0,i.jsx)(t.h2,{id:"step-3-bring-up-the-ui",children:"Step 3: Bring up the UI"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"meeting"})," object serves as the link between web-core and UI Kit, allowing them to communicate with one another. Once the UI Kit has the meeting object, it can join and leave meetings, and so on.\nDyte offers a UI Kit that is highly customizatble and uses the ",(0,i.jsx)(t.code,{children:"meeting"})," instance that you just created."]}),"\n",(0,i.jsx)(t.h3,{id:"ui-kit",children:"UI Kit"}),"\n",(0,i.jsxs)(t.p,{children:["A single ",(0,i.jsx)(t.code,{children:"<dyte-meeting />"})," component that is feature rich renders a complete meeting UI and handles all events."]}),"\n",(0,i.jsxs)(t.h4,{id:"load-the-dytecomponentsmodule-into-your-app-module",children:["Load the ",(0,i.jsx)(t.code,{children:"DyteComponentsModule"})," into your App Module"]}),"\n",(0,i.jsxs)(t.p,{children:["This is how typically the ",(0,i.jsx)(t.code,{children:"app.module.ts"})," file looks like. This allows you to use Dyte's UI components in your component HTML files. For\nmore information on the components, see\n",(0,i.jsx)(t.a,{href:"https://angular.io/guide/component-overview",children:"Angular components"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:"{3,8}",children:"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { DyteComponentsModule } from '@dytesdk/angular-ui-kit';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, DyteComponentsModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n"})}),"\n",(0,i.jsx)(t.h4,{id:"optional-allow-synthetic-default-imports-for-typescript",children:"(Optional) Allow synthetic default imports for TypeScript"}),"\n",(0,i.jsx)(t.p,{children:"If you are using TypeScript, perform the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Set ",(0,i.jsx)(t.code,{children:"allowSyntheticDefaultImports"})," as true in your\n",(0,i.jsx)(t.code,{children:"tsconfig.json"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "allowSyntheticDefaultImports": true\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Add the Dyte meeting component to your template file (",(0,i.jsx)(t.code,{children:"component.html"}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<dyte-meeting #myid></dyte-meeting>\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Get a reference to the meeting component using ",(0,i.jsx)(t.code,{children:"@ViewChild()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Pass the meeting object to the UI Kit component."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:"{3,13}",children:"class AppComponent {\n  title = 'MyProject';\n  @ViewChild('myid') meetingComponent: DyteMeeting;\n  dyteMeeting: DyteClient;\n\n  async ngAfterViewInit() {\n    const meeting = await DyteClient.init({\n      authToken: '<auth-token>',\n    });\n    meeting.join();\n    this.dyteMeeting = meeting;\n\n    if (this.meetingComponent) this.meetingComponent.meeting = meeting;\n  }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"build-your-own-ui",children:"Build your own UI"}),"\n",(0,i.jsxs)(t.p,{children:["If you want more customizations, pick the components that are needed and build the UI that suits your need using low level APIs that our core SDK offers ",(0,i.jsx)(t.a,{href:"/web-core/",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"add-dyte-meeting-to-the-template-file",children:"Add Dyte Meeting to the Template File"}),"\n",(0,i.jsxs)(t.p,{children:["Load the Dyte component to your template file (",(0,i.jsx)(t.code,{children:"component.html"}),")."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:"{5}",children:'<div>\n  <dyte-grid class="dyte-el"></dyte-grid>\n  <div class="controlbar">\n    \x3c!-- Your own components --\x3e\n    <button #mic (click)="onMicToggle">Toggle Mic</button>\n  </div>\n</div>\n'})}),"\n",(0,i.jsx)(t.h4,{id:"pass-the-meeting-object-to-component",children:"Pass the meeting object to component"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:"{3,12-15,19-25}",children:"class AppComponent {\n  title = 'MyProject';\n  dyteMeeting: DyteClient;\n  @ViewChild('mic') micButton: HTMLButton;\n\n  async ngAfterViewInit() {\n    const meeting = await DyteClient.init({\n      authToken: '<auth-token>',\n    });\n\n    meeting.join();\n    this.dyteMeeting = meeting;\n    const elements = document.getElementsByClassName('dyte-el');\n    for (i = 0; i < elements.length; i++) {\n      elements[i].meeting = meeting;\n    }\n  }\n\n  onMicToggle() {\n    if (this.dyteMeeting.self.audioEnabled) {\n      this.dyteMeeting.self.disableAudio();\n    } else {\n      this.dyteMeeting.self.enableAudio();\n    }\n  }\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},88441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=n(74848),r=n(28453),o=n(50694);const l={title:"Angular",sidebar_position:1,description:"Explore the setup of the Livestream client in Angular with Dyte. Follow our guide for effective Angular client setup."},s=void 0,a={id:"livestream/client-setup/angular",title:"Angular",description:"Explore the setup of the Livestream client in Angular with Dyte. Follow our guide for effective Angular client setup.",source:"@site/docs/guides/livestream/client-setup/angular.mdx",sourceDirName:"livestream/client-setup",slug:"/livestream/client-setup/angular",permalink:"/docs/guides/livestream/client-setup/angular",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/guides/livestream/client-setup/angular.mdx",tags:[],version:"current",lastUpdatedAt:1709899166,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:1,frontMatter:{title:"Angular",sidebar_position:1,description:"Explore the setup of the Livestream client in Angular with Dyte. Follow our guide for effective Angular client setup."},sidebar:"tutorialSidebar",previous:{title:"Client Setup",permalink:"/docs/guides/livestream/client-setup/"},next:{title:"HTML",permalink:"/docs/guides/livestream/client-setup/javascript"}},c={},d=[];function u(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Ay,{product:"Livestream"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("title",{children:"Angular Guide"}),(0,i.jsx)("meta",{name:"description",content:"Explore the setup of the Livestream client in Angular with Dyte. Follow our guide for effective Angular client setup."})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},20633:(e,t,n)=>{n.d(t,{hB:()=>a,OV:()=>d,tb:()=>u,vE:()=>s,$r:()=>c});var i=n(96540),r=n(30499);const o={};async function l({pkg:e="ui-kit"}){if(void 0!==o[e])return o[e];const t=await fetch(`https://registry.npmjs.com/@dytesdk/${e}`),n=(await t.json())["dist-tags"].latest;return o[e]=n,n}const s=({pkg:e})=>{const[t,n]=(0,i.useState)("+");return(0,i.useEffect)((()=>{const t=JSON.stringify({maven:e});var i;fetch("https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest",{method:"POST",body:t}).then((e=>e.json())).then((e=>n(null!==(i=e.latestVersion)&&void 0!==i?i:"+")))}),[]),i.createElement("div",null,i.createElement(r.A,{language:"groovy"},`dependencies {\n    // (other dependencies)\n    implementation 'io.dyte:${e}:${t}'\n}`))},a=({pkg:e,path:t})=>{const[n,o]=(0,i.useState)(void 0);return(0,i.useEffect)((()=>{fetch(`https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${t}/`,{method:"GET",body:null}).then((e=>e.json())).then((e=>o(e[e.length-1].name)))}),[]),i.createElement("div",null,i.createElement(r.A,{language:"ruby"},`pod '${e}' ${n?`, '${n}'`:""}`))},c=()=>{const[e,t]=(0,i.useState)("");return(0,i.useEffect)((()=>{!async function(){const e=await l({pkg:"web-core"});t(`-${e}`)}()}),[]),i.createElement(r.A,{language:"html"},`<script src="https://cdn.dyte.in/core/dyte${e}.js" />`)},d=()=>{const[e,t]=(0,i.useState)(""),[n,o]=(0,i.useState)("");return(0,i.useEffect)((()=>{!async function(){const e=await l({pkg:"web-core"});t(`-${e}`);const n=await l({pkg:"ui-kit"});o(`@${n}`)}()}),[]),i.createElement(r.A,{language:"html"},`<head>\n  <script type="module">\n      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${n}/loader/index.es2017.js';\n      defineCustomElements();\n  <\/script>\n  \x3c!-- Import Web Core via CDN too --\x3e\n  <script src="https://cdn.dyte.in/core/dyte${e}.js"><\/script>\n</head>`)},u=({modules:e=["provideDyteDesignSystem","extendConfig,"]})=>{const[t,n]=(0,i.useState)("");return(0,i.useEffect)((()=>{!async function(){const e=await l({pkg:"ui-kit"});n(`@${e}`)}()}),[]),i.createElement(r.A,{language:"html"},`<head>\n  <script type="module">\n    import {\n      ${e.join(", ")}\n    } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${t}/dist/esm/index.js';\n  <\/script>\n</head>`)}},74866:(e,t,n)=>{n.d(t,{A:()=>k});var i=n(96540),r=n(20053),o=n(12075),l=n(86850),s=n(15418),a=n(90062),c=n(65354),d=n(54982);const u={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var p=n(1589),h=n(63581),m=n(33257);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f({children:e}){return i.createElement("div",{className:(0,r.A)(u.playgroundHeader)},e)}function j(){return i.createElement("div",null,"Loading...")}function x(){return i.createElement(i.Fragment,null,i.createElement(f,null,i.createElement(s.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Preview")),i.createElement("div",{className:u.playgroundPreview},i.createElement(c.A,{fallback:i.createElement(j,null)},(()=>i.createElement(i.Fragment,null,i.createElement(l.pA,null),i.createElement(l.p1,null))))))}function b(){const e=(0,o.A)();return i.createElement(l.w,{key:String(e),className:(0,r.A)(u.playgroundEditor,"border border-secondary-800 !pb-4")})}function v(){return i.createElement("div",{className:"relative"},i.createElement("div",{className:"-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},i.createElement(s.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"LIVE EDITOR"),i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},i.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),i.createElement(b,null))}const w={value:!1};function k(e){var{children:t,transformCode:n}=e,o=y(e,["children","transformCode"]);const{siteConfig:{themeConfig:s}}=(0,a.A)(),{liveCodeBlock:{playgroundPosition:c}}=s,f=(0,d.A)(),[j,b]=(0,p.useDyteClient)(),{colorMode:k}=(0,m.G)();return(0,i.useEffect)((()=>{w.value||(w.value=!0,b({roomName:"qplrfc-uuujcj",authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds",defaults:{audio:!1,video:!1}}).then((e=>{0==location.href.includes("build-pre-call-ui")&&e.join(),window.meeting=e,e.meta.meetingStartedTimestamp=new Date,e.participants.setMockParticipantCount(5,5);const t=document.getElementsByTagName("html")[0].dataset.theme;(0,h.provideDyteDesignSystem)(document.body,{theme:t}),w.value=!1})))}),[]),(0,i.useEffect)((()=>{(0,h.provideDyteDesignSystem)(document.body,{theme:k})}),[k]),i.createElement("div",{className:(0,r.A)(u.playgroundContainer,"!rounded-none !shadow-none")},i.createElement(p.DyteProvider,{value:j},i.createElement(l.Q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){g(e,t,n[t])}))}return e}({code:t.replace(/\n$/,""),transformCode:null!=n?n:e=>`${e};`,theme:f},o),"top"===c?i.createElement(i.Fragment,null,i.createElement(x,null),i.createElement(v,null)):i.createElement(i.Fragment,null,i.createElement(v,null),i.createElement(x,null)))))}},72041:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(96540),r=n(63581),o=n(1589);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){l(e,t,n[t])}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){c(e,t,n[t])}))}return e}({React:i},i,r,o,{Row:function(e){var{children:t,style:n={}}=e,r=a(e,["children","style"]);return i.createElement("div",s({style:s({display:"flex",gap:8,flexWrap:"wrap"},n)},r),t)},Col:function(e){var{children:t,style:n={}}=e,r=a(e,["children","style"]);return i.createElement("div",s({style:s({display:"flex",flexDirection:"column",flexWrap:"wrap",gap:8},n)},r),t)},Center:function(e){var{children:t,style:n}=e,r=a(e,["children","style"]);return i.createElement("div",s({style:s({display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",gap:8},n)},r),t)},airplaneSVG:'<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',activePlugin:{}})}}]);