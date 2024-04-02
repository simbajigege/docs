"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[44746],{50601:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var l=n(74848),a=n(28453);const t={slug:"/capabilities/plugins",sidebar_position:1},s="Basics",c={id:"capabilities/plugins/basics",title:"Basics",description:"Dyte Plugins allow you to build collaborative and immersive experiences in your meetings without ever having to leave the meeting. The guides listed here will help you enable or disable plugins during meetings, configure existing plugins and even create new plugins with the help of Meeting APIs and built-in realtime database.",source:"@site/docs/guides/capabilities/plugins/basics.mdx",sourceDirName:"capabilities/plugins",slug:"/capabilities/plugins",permalink:"/docs/guides/capabilities/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/guides/capabilities/plugins/basics.mdx",tags:[],version:"current",lastUpdatedAt:1706782034,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:1,frontMatter:{slug:"/capabilities/plugins",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Export Chat Messages",permalink:"/docs/guides/capabilities/chat/export-chat-dump"},next:{title:"Rendering",permalink:"/docs/guides/capabilities/plugins/rendering"}},d={},r=[{value:"Usage",id:"usage",level:2},{value:'Methods / Properties <div class="header-tag tag-core">Core</div>',id:"methods--properties-core",level:3},{value:"List all plugins",id:"list-all-plugins",level:4},{value:"Activate plugin",id:"activate-plugin",level:4},{value:"Deactivate plugin",id:"deactivate-plugin",level:4},{value:"List all plugins",id:"list-all-plugins-1",level:4},{value:"Activate plugin",id:"activate-plugin-1",level:4},{value:"Deactivate plugin",id:"deactivate-plugin-1",level:4},{value:"List all plugins",id:"list-all-plugins-2",level:4},{value:"Activate plugin",id:"activate-plugin-2",level:4},{value:"Deactivate plugin",id:"deactivate-plugin-2",level:4},{value:"List all plugins",id:"list-all-plugins-3",level:4},{value:"Activate plugin",id:"activate-plugin-3",level:4},{value:"Deactivate plugin",id:"deactivate-plugin-3",level:4},{value:"List all plugins",id:"list-all-plugins-4",level:4},{value:"Activate plugin",id:"activate-plugin-4",level:4},{value:"Deactivate plugin",id:"deactivate-plugin-4",level:4},{value:"List all plugins",id:"list-all-plugins-5",level:4},{value:"Activate plugin",id:"activate-plugin-5",level:4},{value:"Deactivate plugin",id:"deactivate-plugin-5",level:4},{value:'Events <div class="header-tag tag-core">Core</div>',id:"events-core",level:3}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:n,TabItem:t,Tabs:s}=i;return n||g("Head",!0),t||g("TabItem",!0),s||g("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"basics",children:"Basics"}),"\n",(0,l.jsx)(i.p,{children:"Dyte Plugins allow you to build collaborative and immersive experiences in your meetings without ever having to leave the meeting. The guides listed here will help you enable or disable plugins during meetings, configure existing plugins and even create new plugins with the help of Meeting APIs and built-in realtime database."}),"\n",(0,l.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(i.h3,{id:"methods--properties-core",children:["Methods / Properties ",(0,l.jsx)("div",{class:"header-tag tag-core",children:"Core"})]}),"\n",(0,l.jsx)(i.p,{children:"Here is an introduction on the basics of plugins in your meetings:"}),"\n",(0,l.jsxs)(s,{groupId:"framework",children:[(0,l.jsxs)(t,{value:"js",label:"Javascript",children:[(0,l.jsx)(i.h4,{id:"list-all-plugins",children:"List all plugins"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const plugins = meeting.plugins.all.toArray();\n"})}),(0,l.jsxs)(i.p,{children:["Each plugin object in the array is of type ",(0,l.jsx)(i.a,{href:"/web-core/reference/DytePlugin",children:"DytePlugin"})]}),(0,l.jsx)(i.h4,{id:"activate-plugin",children:"Activate plugin"}),(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"activate()"})," method activates a plugin for all users in the meeting. When you activate a plugin, it moves into the active plugins map and can be accessed from ",(0,l.jsx)(i.code,{children:"meeting.plugins.active"}),"."]}),(0,l.jsx)(i.p,{children:"The snippet below finds a plugin by name and activates it"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const plugins = meeting.plugins.all.toArray();\nconst whiteboard = plugins.find((p) => p.name == 'Whiteboard');\n\nawait whiteboard.activate();\n"})}),(0,l.jsx)(i.h4,{id:"deactivate-plugin",children:"Deactivate plugin"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"whiteboard.deactivate()\n"})})]}),(0,l.jsxs)(t,{value:"react",label:"React",children:[(0,l.jsx)(i.h4,{id:"list-all-plugins-1",children:"List all plugins"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const plugins = meeting.plugins.all.toArray();\n"})}),(0,l.jsxs)(i.p,{children:["Each plugin object in the array is of type ",(0,l.jsx)(i.a,{href:"/react-web-core/reference/DytePlugin",children:"DytePlugin"})]}),(0,l.jsx)(i.h4,{id:"activate-plugin-1",children:"Activate plugin"}),(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"activate()"})," method activates a plugin for all users in the meeting. When you activate a plugin, it moves into the active plugins map and can be accessed from ",(0,l.jsx)(i.code,{children:"meeting.plugins.active"}),"."]}),(0,l.jsx)(i.p,{children:"The snippet below finds a plugin by name and activates it"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const plugins = meeting.plugins.all.toArray();\nconst whiteboard = plugins.find((p) => p.name == 'Whiteboard');\n\nawait whiteboard.activate();\n"})}),(0,l.jsx)(i.h4,{id:"deactivate-plugin-1",children:"Deactivate plugin"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"whiteboard.deactivate()\n"})})]}),(0,l.jsxs)(t,{value:"flutter",label:"Flutter",children:[(0,l.jsx)(i.h4,{id:"list-all-plugins-2",children:"List all plugins"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-dart",children:"List<DytePlugin> plugins = await dyteClient.plugins.all;\n"})}),(0,l.jsx)(i.p,{children:"Each plugin object in the array is of type DytePlugin"}),(0,l.jsx)(i.h4,{id:"activate-plugin-2",children:"Activate plugin"}),(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"activate()"})," method activates a plugin for all users in the meeting. When you activate a plugin, it moves into the active plugins map and can be accessed from ",(0,l.jsx)(i.code,{children:"meeting.plugins.active"}),"."]}),(0,l.jsx)(i.p,{children:"The snippet below finds a plugin by name and activates it"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-dart",children:"List<DytePlugin> plugins = await dyteClient.plugins.all;\nDytePlugin whiteboard = plugins.firstWhere((p) => p.name == 'Whiteboard');\n\nawait whiteboard.activate();\n"})}),(0,l.jsx)(i.h4,{id:"deactivate-plugin-2",children:"Deactivate plugin"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-dart",children:"whiteboard.deactivate()\n"})})]}),(0,l.jsxs)(t,{value:"react-native",label:"React Native",children:[(0,l.jsx)(i.h4,{id:"list-all-plugins-3",children:"List all plugins"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const plugins = meeting.plugins.all.toArray();\n"})}),(0,l.jsx)(i.p,{children:"Each plugin object in the array is of type DytePlugin"}),(0,l.jsx)(i.h4,{id:"activate-plugin-3",children:"Activate plugin"}),(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"activate()"})," method activates a plugin for all users in the meeting. When you activate a plugin, it moves into the active plugins map and can be accessed from ",(0,l.jsx)(i.code,{children:"meeting.plugins.active"}),"."]}),(0,l.jsx)(i.p,{children:"The snippet below finds a plugin by name and activates it"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const plugins = meeting.plugins.all.toArray();\nconst whiteboard = plugins.find((p) => p.name == 'Whiteboard');\n\nawait whiteboard.activate();\n"})}),(0,l.jsx)(i.h4,{id:"deactivate-plugin-3",children:"Deactivate plugin"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"whiteboard.deactivate()\n"})})]}),(0,l.jsxs)(t,{value:"android",label:"Android",children:[(0,l.jsx)(i.h4,{id:"list-all-plugins-4",children:"List all plugins"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-kotlin",children:"val plugins = meeting.plugins.all\n"})}),(0,l.jsx)(i.p,{children:"Each plugin object in the array is of type DytePlugin"}),(0,l.jsx)(i.h4,{id:"activate-plugin-4",children:"Activate plugin"}),(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"activate()"})," method activates a plugin for all users in the meeting. When you activate a plugin, it moves into the active plugins array and can be accessed from ",(0,l.jsx)(i.code,{children:"meeting.plugins.active"}),"."]}),(0,l.jsx)(i.p,{children:"The snippet below finds a plugin by name and activates it"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-kotlin",children:'val plugins = meeting.plugins.all\nval whiteboard = plugins.find { p -> p.name == "Whiteboard" }\n\nwhiteboard.activate();\n'})}),(0,l.jsx)(i.h4,{id:"deactivate-plugin-4",children:"Deactivate plugin"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"whiteboard.deactivate()\n"})})]}),(0,l.jsxs)(t,{value:"ios",label:"iOS",children:[(0,l.jsx)(i.h4,{id:"list-all-plugins-5",children:"List all plugins"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-swift",children:"let plugins = meeting.plugins.all\n"})}),(0,l.jsx)(i.p,{children:"Each plugin object in the array is of type DytePlugin"}),(0,l.jsx)(i.h4,{id:"activate-plugin-5",children:"Activate plugin"}),(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"activate()"})," method activates a plugin for all users in the meeting. When you activate a plugin, it moves into the active plugins array and can be accessed from ",(0,l.jsx)(i.code,{children:"meeting.plugins.active"}),"."]}),(0,l.jsx)(i.p,{children:"The snippet below finds a plugin by name and activates it"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-swift",children:'let plugins = meeting.plugins.all\nlet whiteboard = plugins.first { $0.name == "Whiteboard" }\n\nwhiteboard.activate();\n'})}),(0,l.jsx)(i.h4,{id:"deactivate-plugin-5",children:"Deactivate plugin"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:"whiteboard.deactivate()\n"})})]})]}),"\n",(0,l.jsxs)(i.h3,{id:"events-core",children:["Events ",(0,l.jsx)("div",{class:"header-tag tag-core",children:"Core"})]}),"\n",(0,l.jsxs)(s,{groupId:"framework",children:[(0,l.jsxs)(t,{value:"js",label:"Javascript",children:[(0,l.jsxs)(i.p,{children:["Each ",(0,l.jsx)(i.code,{children:"plugin"})," object emits an ",(0,l.jsx)(i.code,{children:"enabled"})," event and a ",(0,l.jsx)(i.code,{children:"closed"})," event"]}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const whiteboard = plugins.find((p) => p.name == 'Whiteboard');\nwhiteboard.on('enabled', () => {\n  console.log('Whiteboard has been enabled');\n});\nwhiteboard.on('closed', () => {\n  console.log('Whiteboard has been disabled');\n});\n"})})]}),(0,l.jsxs)(t,{value:"react",label:"React",children:[(0,l.jsxs)(i.p,{children:["Each ",(0,l.jsx)(i.code,{children:"plugin"})," object emits an ",(0,l.jsx)(i.code,{children:"enabled"})," event and a ",(0,l.jsx)(i.code,{children:"closed"})," event"]}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const whiteboard = plugins.find((p) => p.name == 'Whiteboard');\nwhiteboard.on('enabled', () => {\n  console.log('Whiteboard has been enabled');\n});\nwhiteboard.on('closed', () => {\n  console.log('Whiteboard has been disabled');\n});\n"})})]}),(0,l.jsx)(t,{value:"flutter",label:"Flutter",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-dart",children:"\nclass PluginNotifier extends DytePluginEventsListener {\n  @override\n  void onPluginActivated(DytePlugin plugin) {\n    state = OnPluginActivated(plugin);\n  }\n\n  @override\n  void onPluginDeactivated(DytePlugin plugin) {\n    state = OnPluginDeactivated(plugin);\n  }\n}\n\nmeeting.addPluginEventsListener(PluginNotifier())\n\n"})})}),(0,l.jsxs)(t,{value:"react-native",label:"React Native",children:[(0,l.jsxs)(i.p,{children:["Each ",(0,l.jsx)(i.code,{children:"plugin"})," object emits an ",(0,l.jsx)(i.code,{children:"enabled"})," event and a ",(0,l.jsx)(i.code,{children:"closed"})," event"]}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const whiteboard = plugins.find((p) => p.name == 'Whiteboard');\nwhiteboard.on('enabled', () => {\n  console.log('Whiteboard has been enabled');\n});\nwhiteboard.on('closed', () => {\n  console.log('Whiteboard has been disabled');\n});\n"})})]}),(0,l.jsxs)(t,{value:"android",label:"Android",children:[(0,l.jsxs)(i.p,{children:["Any plugin activation / deactivation will trigger a callback. To be able to listen to plugin events you need to implement a methods from callback ",(0,l.jsx)(i.code,{children:"DytePluginEventsListener"}),". You can subscribe to this events by calling meeting.addPluginEventsListener(dytePluginEventsListener)."]}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-kotlin",children:"meeting.addMeetingRoomEventsListener(object :\n  DyteMeetingRoomEventsListener {\n    override fun onPluginActivated(plugin: DytePlugin) {\n      super.onPluginActivated(plugin)\n      // your code to handle plugin activation\n    }\n\n    override fun onPluginDeactivated(plugin: DytePlugin) {\n      super.onPluginDeactivated(plugin)\n      // your code to handle plugin de-activation\n    }\n  }\n)\n"})})]}),(0,l.jsxs)(t,{value:"ios",label:"iOS",children:[(0,l.jsxs)(i.p,{children:["Any plugin activation / deactivation will trigger a callback. To be able to listen to plugin events you need to implement a methods from callback ",(0,l.jsx)(i.code,{children:"DytePluginEventsListener"}),". You can subscribe to this events by calling meeting.addPluginEventsListener(dytePluginEventsListener)."]}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-swift",children:"extension MeetingViewModel: DytePluginEventsListener {\n\n  func onPluginActivated(plugin: DytePlugin) {\n    // your code to handle plugin activation\n  }\n\n  func onPluginDeactivated(plugin: DytePlugin) {\n    // your code to handle plugin activation\n  }\n\n}\n"})})]})]}),"\n",(0,l.jsx)(n,{children:(0,l.jsx)("title",{children:"Basics Guide"})})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}function g(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var l=n(96540);const a={},t=l.createContext(a);function s(e){const i=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(t.Provider,{value:i},e.children)}}}]);