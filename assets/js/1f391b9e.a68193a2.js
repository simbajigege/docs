"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[66061,18401],{96411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(96540),a=n(18215),l=n(19912),c=n(23891),o=n(68459),i=n(12378),s=n(50701),m=n(13988);const u={mdxPageWrapper:"mdxPageWrapper_j9I6"};function d(e){const{content:t}=e,{metadata:{title:n,description:d,frontMatter:p,unlisted:f},assets:y}=t,{keywords:g,wrapperClassName:b,hide_table_of_contents:E}=p;var v;const h=null!==(v=y.image)&&void 0!==v?v:p.image;return r.createElement(l.e3,{className:(0,a.A)(null!=b?b:c.G.wrapper.mdxPages,c.G.page.mdxPage)},r.createElement(o.A,null,r.createElement(l.be,{title:n,description:d,keywords:g,image:h}),r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.A)("row",u.mdxPageWrapper)},r.createElement("div",{className:(0,a.A)("col",!E&&"col--8")},f&&r.createElement(m.A,null),r.createElement("article",null,r.createElement(i.A,null,r.createElement(t,null)))),!E&&t.toc.length>0&&r.createElement("div",{className:"col col--2"},r.createElement(s.A,{toc:t.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level}))))))}},79036:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(8821),a=n(74235),l=n(15947),c=n(96540);const o={root:"root_TFid",color:"color_c5nl"};var i=n(20053);const s="root_SmJj",m="name_Qr96",u="shades_vZEF",d="shade_tGhu",p="color_t_w9",f="info_EacV",y="colorCode_qqP9",g="infoRGB_wI14";function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=n(63581),h=n(84012);var O=n(97689),w=n(30499);const P={card:"card_caBg",props:"props_N7pt",docs:"docs_IfE7",propType:"propType_pJSY",default:"default_AlOI"};var N=n(28618);const j={config:{path:"../reference/interfaces/UIConfig",name:"UIConfig"},iconPack:{path:"../reference/#iconpack",name:"IconPack"},t:{path:"../reference/#dytei18n",name:"DyteI18n"},states:{path:"../reference/interfaces/States",name:"States"},notification:{path:"../reference/interfaces/Notification",name:"Notification"},plugins:{path:"/web-core/reference/DytePlugin",name:"DytePlugin[]"},plugin:{path:"/web-core/reference/DytePlugin",name:"DytePlugin"}},A={DyteClient:{path:"/web-core/reference/DyteClient",name:"DyteClient"}};function D({prop:e}){if("participant"===e.name)return c.createElement("pre",{className:P.propType},c.createElement("code",null,c.createElement(N.A,{href:"/web-core/reference/DyteParticipant"},"DyteParticipant")," ","| ",c.createElement(N.A,{href:"/web-core/reference/DyteSelf"},"DyteSelf")));if("Peer[]"===e.type)return c.createElement("pre",{className:P.propType},c.createElement("code",null,"(",c.createElement(N.A,{href:"/web-core/reference/DyteParticipant"},"DyteParticipant")," ","| ",c.createElement(N.A,{href:"/web-core/reference/DyteSelf"},"DyteSelf"),")[]"));const t=j[e.name]||A[e.type];return t?c.createElement("pre",{className:P.propType},c.createElement("code",null,c.createElement(N.A,{href:t.path},t.name))):c.createElement(w.A,{language:"ts"},e.type)}function _({prop:e}){return c.createElement("div",{className:P.card},c.createElement("h4",null,c.createElement("code",null,e.name)),c.createElement("div",null,e.required&&c.createElement("p",null,c.createElement("code",{"data-code":"required"},"required")),c.createElement("p",{className:P.docs},e.docs),e.default&&e.default.length>0&&c.createElement("div",null,c.createElement("h5",null,"Default"),c.createElement(w.A,{language:"ts"},e.default)),c.createElement("div",null,c.createElement("h5",null,"Type"),c.createElement(D,{prop:e}))))}const x={grid:"grid_ywne",section:"section_IlLm",card:"card_eF6A",imageContainer:"imageContainer_qYw4",image:"image_iZ6r"};function C({item:e,basePath:t}){return c.createElement(N.A,{className:x.card,to:`./components/${e.component}`,key:e.component},c.createElement("div",{className:x.imageContainer},c.createElement("img",{src:`${t}/${e.component}.svg`,alt:"",className:x.image})),c.createElement("div",null,e.name))}var k=n(41310);var S=n(72384);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const T=(J=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}({},r.A,S),M={Tabs:a.A,TabItem:l.A,color:function({color:e,colorCode:t,children:n}){return c.createElement("div",{className:o.root},c.createElement("div",{className:o.color,style:{backgroundColor:e}}),c.createElement("div",{className:o.content},t?c.createElement("code",null,e):n))},ColorPalette:function({name:e,shades:t,desc:n,rgb:r}){let a=Object.keys(t);return n&&a.sort(((e,t)=>+t-+e)),c.createElement("div",{className:s},c.createElement("div",{className:m},e),c.createElement("div",{className:u},a.map((e=>{const n=t[e];return c.createElement("div",{key:e,className:d},c.createElement("div",{className:p,style:{backgroundColor:n}}),c.createElement("div",{className:(0,i.A)(f,r&&g)},c.createElement("div",null,e),c.createElement("div",{className:y},n)))}))))},VideoPlayer:function(e){var{src:t,mobile:n,className:r}=e,a=E(e,["src","mobile","className"]);return c.createElement("video",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}({className:(0,i.A)("dyte-video-showcase",r,n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},a))},InfoTooltip:function({label:e}){return c.createElement("span",{style:{verticalAlign:"middle"}},c.createElement(v.DyteTooltip,{variant:"primary",label:e,kind:"inline"},c.createElement(h.A,null)))},PropsTable:function({of:e}){const t=O.dK.find((t=>t.tag===e));if(!t)return null;const{props:n}=t;return n.sort((e=>e.required?-1:1)),c.createElement("div",{className:P.root},c.createElement("div",{className:P.props},n.map((e=>c.createElement(_,{prop:e,key:e.name})))))},ComponentsGrid:function({items:e,basePath:t="/"}){return e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),c.createElement("div",{className:x.section},c.createElement("div",{className:x.grid},e.map((e=>c.createElement(C,{key:e.component,item:e,basePath:t})))))},CardSection:function({id:e,title:t,children:n,description:r,className:a,hasSubSections:l=!1,HeadingTag:o="h3"}){return c.createElement("div",{className:(0,i.A)("homepage-section",l&&"has-sub-sections",a)},t&&c.createElement(o,{id:null!=e?e:(0,k.c)(t)},t),r&&c.createElement("p",{className:"section-description"},r),c.createElement("div",{className:"section-content"},n))},Card:function({id:e,icon:t,title:n,description:r,to:a,tag:l,className:o}){return c.createElement(N.A,{to:a,className:(0,i.A)("homepage-card",o)},t&&c.createElement("div",{className:"icon"},t),c.createElement("div",{className:"card-content"},c.createElement("div",{className:"title",id:e&&(0,k.c)(n)},n),r&&c.createElement("div",{className:"description"},r)),l&&c.createElement("div",{className:"tag absolute right-0 top-0 h-16 w-16"},c.createElement("span",{className:"absolute right-[-28px] top-[-2px] w-[80px] rotate-45 transform bg-gray-600 py-1 text-center font-semibold text-white",style:{backgroundColor:l.color},title:l.description},l.label)))}},M=null!=M?M:{},Object.getOwnPropertyDescriptors?Object.defineProperties(J,Object.getOwnPropertyDescriptors(M)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(M)).forEach((function(e){Object.defineProperty(J,e,Object.getOwnPropertyDescriptor(M,e))})),J);var J,M},74866:(e,t,n)=>{n.d(t,{A:()=>P});var r=n(96540),a=n(20053),l=n(12075),c=n(86850),o=n(15418),i=n(90062),s=n(65354),m=n(54982);const u={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var d=n(1589),p=n(63581),f=n(33257);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b({children:e}){return r.createElement("div",{className:(0,a.A)(u.playgroundHeader)},e)}function E(){return r.createElement("div",null,"Loading...")}function v(){return r.createElement(r.Fragment,null,r.createElement(b,null,r.createElement(o.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Preview")),r.createElement("div",{className:u.playgroundPreview},r.createElement(s.A,{fallback:r.createElement(E,null)},(()=>r.createElement(r.Fragment,null,r.createElement(c.pA,null),r.createElement(c.p1,null))))))}function h(){const e=(0,l.A)();return r.createElement(c.w,{key:String(e),className:(0,a.A)(u.playgroundEditor,"border border-secondary-800 !pb-4")})}function O(){return r.createElement("div",{className:"relative"},r.createElement("div",{className:"-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},r.createElement(o.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"LIVE EDITOR"),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},r.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),r.createElement(h,null))}const w={value:!1};function P(e){var{children:t,transformCode:n}=e,l=g(e,["children","transformCode"]);const{siteConfig:{themeConfig:o}}=(0,i.A)(),{liveCodeBlock:{playgroundPosition:s}}=o,b=(0,m.A)(),[E,h]=(0,d.useDyteClient)(),{colorMode:P}=(0,f.G)();return(0,r.useEffect)((()=>{w.value||(w.value=!0,h({roomName:"qplrfc-uuujcj",authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds",defaults:{audio:!1,video:!1}}).then((e=>{0==location.href.includes("build-pre-call-ui")&&e.join(),window.meeting=e,e.meta.meetingStartedTimestamp=new Date,e.participants.setMockParticipantCount(5,5);const t=document.getElementsByTagName("html")[0].dataset.theme;(0,p.provideDyteDesignSystem)(document.body,{theme:t}),w.value=!1})))}),[]),(0,r.useEffect)((()=>{(0,p.provideDyteDesignSystem)(document.body,{theme:P})}),[P]),r.createElement("div",{className:(0,a.A)(u.playgroundContainer,"!rounded-none !shadow-none")},r.createElement(d.DyteProvider,{value:E},r.createElement(c.Q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}({code:t.replace(/\n$/,""),transformCode:null!=n?n:e=>`${e};`,theme:b},l),"top"===s?r.createElement(r.Fragment,null,r.createElement(v,null),r.createElement(O,null)):r.createElement(r.Fragment,null,r.createElement(O,null),r.createElement(v,null)))))}},72041:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(96540),a=n(63581),l=n(1589);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({React:r},r,a,l,{Row:function(e){var{children:t,style:n={}}=e,a=i(e,["children","style"]);return r.createElement("div",o({style:o({display:"flex",gap:8,flexWrap:"wrap"},n)},a),t)},Col:function(e){var{children:t,style:n={}}=e,a=i(e,["children","style"]);return r.createElement("div",o({style:o({display:"flex",flexDirection:"column",flexWrap:"wrap",gap:8},n)},a),t)},Center:function(e){var{children:t,style:n}=e,a=i(e,["children","style"]);return r.createElement("div",o({style:o({display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",gap:8},n)},a),t)},airplaneSVG:'<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',activePlugin:{}})}}]);