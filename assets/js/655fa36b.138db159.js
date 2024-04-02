"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[7213],{52908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(74848),i=n(28453),o=n(74235),a=n(15947);const l={title:"Quickstart",sidebar_position:2,tags:["plugin-sdk","quickstart","setup"],description:"Quickly start integrating your plugin with Dyte using our Plugin SDK Quickstart guide. Streamline the development process for your custom plugins."},s=void 0,u={id:"quickstart",title:"Quickstart",description:"Quickly start integrating your plugin with Dyte using our Plugin SDK Quickstart guide. Streamline the development process for your custom plugins.",source:"@site/docs/plugin-sdk/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/plugin-sdk/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/plugin-sdk/quickstart.mdx",tags:[{label:"plugin-sdk",permalink:"/docs/plugin-sdk/tags/plugin-sdk"},{label:"quickstart",permalink:"/docs/plugin-sdk/tags/quickstart"},{label:"setup",permalink:"/docs/plugin-sdk/tags/setup"}],version:"current",lastUpdatedAt:1709899206,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:2,frontMatter:{title:"Quickstart",sidebar_position:2,tags:["plugin-sdk","quickstart","setup"],description:"Quickly start integrating your plugin with Dyte using our Plugin SDK Quickstart guide. Streamline the development process for your custom plugins."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/plugin-sdk/"},next:{title:"Create a Plugin",permalink:"/docs/plugin-sdk/setup/create"}},c={},d=[{value:"Create a plugin",id:"create-a-plugin",level:2},{value:"Configure your plugin",id:"configure-your-plugin",level:2},{value:"Setup your development environment",id:"setup-your-development-environment",level:2},{value:"Start building",id:"start-building",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"before you start",type:"info",children:(0,r.jsxs)(t.p,{children:["Before you start working with Dyte's Plugin SDK, make sure you've read the\n",(0,r.jsx)(t.a,{href:"/getting-started",children:"Getting Started"})," with Dyte guide."]})}),"\n",(0,r.jsx)(t.p,{children:"Short on time? No problem. This document covers everything you need in order to\nquickly get started with building your own collaborative plugin."}),"\n",(0,r.jsx)(t.h2,{id:"create-a-plugin",children:"Create a plugin"}),"\n",(0,r.jsx)(t.p,{children:"You can use Dyte CLI to create your plugin."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd <your-project-directory>\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dyte plugins create\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This command asks you a bunch of questions and then generates a\n",(0,r.jsx)(t.code,{children:"dyte-config.json"})," for you. This file must always stay in the root of your\nfolder."]}),"\n",(0,r.jsx)(t.h2,{id:"configure-your-plugin",children:"Configure your plugin"}),"\n",(0,r.jsxs)(t.p,{children:["You can customise a bunch of properties for your plugin using this config file.\nIt allows you to change the name, description, logo, build config and more.\n",(0,r.jsx)(t.a,{href:"/plugin-sdk/setup/customize",children:"Read More"})]}),"\n",(0,r.jsx)(t.admonition,{title:"important",type:"danger",children:(0,r.jsxs)(t.p,{children:["Do not change the value of ",(0,r.jsx)(t.code,{children:"pluginId"})," in your config file."]})}),"\n",(0,r.jsx)(t.p,{children:"Here's what a basic config file would look like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "name": "my-plugin",\n  "version": "1.x.x",\n  "description": "Add a short description for your plugin here",\n  "pluginId": "79936149-758e-4d8d-8366-23deaxxxxxxx",\n  "picture": "https://dyte-uploads.s3.ap-south-1.amazonaws.com/dyte.png",\n  "url": "https://79936149-758e-4d8d-8366-23deaxxxxxxx-latest.plugins.dyte.app",\n  "files": {\n    "include": ["index.html", "**/*"],\n    "exclude": ["**/*.ts", "*.md"]\n  },\n  "tags": ["#plugin"],\n  "author": "",\n  "repository": ""\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"setup-your-development-environment",children:"Setup your development environment"}),"\n",(0,r.jsxs)(t.p,{children:["Now that your plugin is created, It's time to start building. Dyte's ",(0,r.jsx)(t.code,{children:"devTools"}),"\nmodule provides a live playground like experience to help you build your plugin\nlocally."]}),"\n",(0,r.jsx)(t.p,{children:"The code snippet below shows how you can use it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"<body>\n <dyte-meeting id=\"my-meeting\"></dyte-meeting>\n\n  <script>\n    const init = async () => {\n      const meeting = await DyteClient.init({\n        authToken: '',\n        roomName: '',\n        defaults: {\n          audio: true,\n          video: true,\n        },\n        modules: {\n          devTools: {\n            plugin: [{\n              name: 'My Awesome Plugin',\n              port: '5000'\n            }],\n          }}});\n\n      document.getElementById('my-meeting').meeting = meeting;\n    };\n\n    init();\n  <\/script>\n</body>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now run your plugin on the port specified, In this case ",(0,r.jsx)(t.code,{children:"localhost:5000"}),". Et\nvoila! Your live plugin is now available to be developed locally."]}),"\n",(0,r.jsx)(t.h2,{id:"start-building",children:"Start building"}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n","\n","\n",(0,r.jsxs)(o.A,{groupId:"node-pm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"CDN",value:"CDN"}],children:[(0,r.jsx)(a.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npm install @dytesdk/plugin-sdk\n"})})}),(0,r.jsx)(a.A,{value:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"yarn add @dytesdk/plugin-sdk\n"})})}),(0,r.jsx)(a.A,{value:"CDN",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/@dytesdk/plugin-sdk" />\n'})})})]}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"This is a simple plugin that greets every new person who joins the meeting."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import DytePlugin from '@dytesdk/plugin-sdk';\n\nconst plugin = DytePlugin.init();\nawait plugin.stores.populate('storeName');\n\nplugin.room.on('peerJoined', async (p) => {\n  const message: ChatMessage = {\n    type: 'text',\n    message: `Welcome ${p.displayName}! We hope you bought pizza ;)`,\n  };\n  await plugin.room.sendChatMessage(message);\n});\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("title",{children:"Plugin SDK Quickstart"}),(0,r.jsx)("meta",{name:"description",content:"Quickly start integrating your plugin with Dyte using our Plugin SDK Quickstart guide. Streamline the development process for your custom plugins."})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},15947:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(96540),i=n(18215);const o={tabItem:"tabItem_Ymn6"};function a({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,n),hidden:t},e)}},74235:(e,t,n)=>{n.d(t,{A:()=>P});var r=n(96540),i=n(18215),o=n(52204),a=n(56347),l=n(13321),s=n(57641),u=n(73094),c=n(14278);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function g(e){var t,n;return null!==(n=null===(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return g(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const n=(0,a.W6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,s.aZ)(i),l=(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[i,n]);return[o,l]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=m(e),[a,s]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=y({queryString:n,groupId:i}),[p,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,i]=(0,c.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:i}),f=(()=>{const e=null!=u?u:p;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{f&&s(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var b=n(12075);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function k(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function w({className:e,block:t,selectedValue:n,selectValue:a,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),i=l[r].value;i!==n&&(u(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;var n;t=null!==(n=s[r])&&void 0!==n?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;var r;t=null!==(r=s[n])&&void 0!==r?r:s[s.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>r.createElement("li",k(x({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:c},o),{className:(0,i.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function O({lazy:e,children:t,selectedValue:n}){const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function D(e){const t=f(e);return r.createElement("div",{className:(0,i.A)("tabs-container",v.tabList)},r.createElement(w,x({},e,t)),r.createElement(O,x({},e,t)))}function P(e){const t=(0,b.A)();return r.createElement(D,x({key:String(t)},e),g(e.children))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);