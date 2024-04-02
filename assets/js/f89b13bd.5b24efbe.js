"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[23862],{4559:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=t(74848),a=t(28453);const i={title:"Receiving chat messages",description:"Learn how to receive chat messages in iOS Core with Dyte Docs. Enhance your app's communication capabilities with seamless chat integration.",sidebar_position:3,tags:["mobile-core","chat"]},c="Receiving chat messages",o={id:"chat/receiving-chat-messages",title:"Receiving chat messages",description:"Learn how to receive chat messages in iOS Core with Dyte Docs. Enhance your app's communication capabilities with seamless chat integration.",source:"@site/docs/ios-core/chat/receiving-chat-messages.mdx",sourceDirName:"chat",slug:"/chat/receiving-chat-messages",permalink:"/docs/ios-core/chat/receiving-chat-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/ios-core/chat/receiving-chat-messages.mdx",tags:[{label:"mobile-core",permalink:"/docs/ios-core/tags/mobile-core"},{label:"chat",permalink:"/docs/ios-core/tags/chat"}],version:"current",lastUpdatedAt:1709899206,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:3,frontMatter:{title:"Receiving chat messages",description:"Learn how to receive chat messages in iOS Core with Dyte Docs. Enhance your app's communication capabilities with seamless chat integration.",sidebar_position:3,tags:["mobile-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Sending a chat message",permalink:"/docs/ios-core/chat/sending-a-chat-message"},next:{title:"Introduction",permalink:"/docs/ios-core/livestream/introduction"}},r={},h=[];function d(e){const s={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"receiving-chat-messages",children:"Receiving chat messages"}),"\n",(0,n.jsxs)(s.p,{children:["To be able to receive chat messages you need to implement a method\n",(0,n.jsx)(s.code,{children:"onChatUpdates()"})," method from callback ",(0,n.jsx)(s.code,{children:"DyteChatEventsListener"}),". You can\nsubscribe to this events by calling\n",(0,n.jsx)(s.code,{children:"meeting.addMeetingEventsListener(dyteChatEventsListener)"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-swift",children:"    extension MeetingViewModel: DyteChatEventsListener {\n      func onChatUpdates(messages: [DyteChatMessage]) {\n        // any update in chat messages\n      }\n\n      func onNewChatMessage(message: DyteChatMessage) {\n        // updates for new chat messages only\n      }\n    }\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Here, the ",(0,n.jsx)(s.code,{children:"message"})," is of type ",(0,n.jsx)(s.code,{children:"Message"}),", as defined in\n",(0,n.jsx)(s.a,{href:"./introduction",children:"introduction"}),". ",(0,n.jsx)(s.code,{children:"messages"})," is a list of all chat messages in the\nmeeting, which is the same as ",(0,n.jsx)(s.code,{children:"meeting.chat.messages"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["When a chat message is received, the ",(0,n.jsx)(s.code,{children:"meeting.chat.messages"})," list is also\nupdated."]}),"\n",(0,n.jsx)(s.p,{children:"DyteChatMessage has different implementations of it, thus you will need to cast and use appropriate type as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-swift",children:'   func onNewChatMessage(message: DyteChatMessage) {\n    if let msg = message {\n      switch msg.type {\n      case .text:\n        if let textMsg = msg as? DyteTextMessage {\n          //print("onNewChatMessage: Text : \\(textMsg)")\n        }\n      case .file:\n        if let fileMsg = msg as? DyteFileMessage {\n          //print("onNewChatMessage: File : \\(fileMsg.name)")\n        }\n      case .image:\n        if let imgMsg = msg as? DyteImageMessage {\n           //print("onNewChatMessage: Image : \\(imgMsg.link)")\n        }\n\n      default:\n        print("Error! Message type unknown!")\n      }\n    }\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("title",{children:"iOS Core Receiving chat messages"}),(0,n.jsx)("meta",{name:"description",content:"Learn how to receive chat messages in iOS Core with Dyte Docs. Enhance your app's communication capabilities with seamless chat integration."})]})]})}function g(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var n=t(96540);const a={},i=n.createContext(a);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);