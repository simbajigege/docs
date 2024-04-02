"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[35908],{9657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(74848),r=a(28453),o=a(60621);const s={title:"Release Notes",sidebar_position:101,sidebar_class_name:"releaseSidebarHeading",tags:["mobile-core","releasenotes"]},l=void 0,c={id:"release-notes",title:"Release Notes",description:"Android Core Release Notes",source:"@site/docs/android-core/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/docs/android-core/release-notes",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/android-core/release-notes.mdx",tags:[{label:"mobile-core",permalink:"/docs/android-core/tags/mobile-core"},{label:"releasenotes",permalink:"/docs/android-core/tags/releasenotes"}],version:"current",lastUpdatedAt:1706782034,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:101,frontMatter:{title:"Release Notes",sidebar_position:101,sidebar_class_name:"releaseSidebarHeading",tags:["mobile-core","releasenotes"]},sidebar:"tutorialSidebar",previous:{title:"Recording",permalink:"/docs/android-core/recording"}},i={},d=[];function m(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{noteKey:"android-core"}),"\n",(0,n.jsx)(t,{children:(0,n.jsx)("title",{children:"Android Core Release Notes"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},60621:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(61917),o=a(63835);const s=[{name:"features",color:"#00e0a5",label:"Features"},{name:"fixes",color:"#e0ac12",label:"Fixed Issues"},{name:"perf",color:"#5555aa",label:"Performance Improvements"},{name:"new_api",color:"#1264a3",label:"New API",className:"newAPI"},{name:"dep_api",color:"#e01d5a",label:"Deprecated API",className:"deprecated"}];function l({noteKey:e,tagType:t}){const[a,l]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(`/release-notes/${e}.json`).then((e=>e.json())).then((e=>l(e)))}),[e]),n.createElement("div",{className:"notesContainer"},a.map((e=>n.createElement(n.Fragment,null,e.version&&n.createElement(r.A,{as:"h2",id:e.version},"v",e.version),n.createElement("p",{className:"text-sm"},"Released on"," ",n.createElement("time",null,new Date(1e3*e.createdAt).toLocaleDateString("en-US",{day:"numeric",year:"numeric",month:"long"}))),n.createElement("table",{className:"releaseNotes"},s.map((a=>{var r,s,l;return(null===(r=e[a.name])||void 0===r?void 0:r.length)>0?n.createElement("tr",{className:null!==(l=a.className)&&void 0!==l?l:""},n.createElement("td",{className:"type",style:{borderColor:a.color}},a.label),n.createElement("td",{className:"sublist"},null===(s=e[a.name])||void 0===s?void 0:s.map((e=>{return n.createElement("tr",null,n.createElement("td",null,("react"===t?(a=e,a.replace(/<\s*\/?\s*([a-z][a-z0-9-]*)(\s[^>]*?)?\s*\/?>/g,((e,t,a,n,r)=>{let o=t.split("-").map(((e,t)=>0===t?e:e.charAt(0).toUpperCase()+e.slice(1))).join("");o=o.charAt(0).toUpperCase()+o.slice(1);const s=e.trim().endsWith("/>");return`<${"/"===e.charAt(1)?"/":""}${o}${a||""}${s?" /":""}>`}))):e).split("\n").map(((e,t)=>n.createElement(o.$,{className:"changeline",key:t},e)))));var a})))):null})))))))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>l});var n=a(96540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);