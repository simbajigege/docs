"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[68142],{45823:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(74848),a=s(28453);const i={title:"Sending a chat message",description:"Send a chat message in a meeting.",sidebar_position:2,tags:["web-core","chat"]},c="Sending a chat message",d={id:"chat/sending-a-chat-message",title:"Sending a chat message",description:"Send a chat message in a meeting.",source:"@site/docs/web-core/chat/sending-a-chat-message.mdx",sourceDirName:"chat",slug:"/chat/sending-a-chat-message",permalink:"/docs/web-core/chat/sending-a-chat-message",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/web-core/chat/sending-a-chat-message.mdx",tags:[{label:"web-core",permalink:"/docs/web-core/tags/web-core"},{label:"chat",permalink:"/docs/web-core/tags/chat"}],version:"current",lastUpdatedAt:1706782034,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:2,frontMatter:{title:"Sending a chat message",description:"Send a chat message in a meeting.",sidebar_position:2,tags:["web-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Introducing chat",permalink:"/docs/web-core/chat/introduction"},next:{title:"Receiving chat messages",permalink:"/docs/web-core/chat/receiving-chat-messages"}},o={},l=[{value:"Send a text message",id:"send-a-text-message",level:2},{value:"Send an image",id:"send-an-image",level:2},{value:"Send a file",id:"send-a-file",level:2},{value:"Extra",id:"extra",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sending-a-chat-message",children:"Sending a chat message"}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned in ",(0,t.jsx)(n.a,{href:"./introduction",children:"introduction"}),", there are 3 types of chat\nmessages - text messages, images, and files. There is a method in ",(0,t.jsx)(n.code,{children:"meeting.chat"}),"\nto send a message of each type."]}),"\n",(0,t.jsx)(n.h2,{id:"send-a-text-message",children:"Send a text message"}),"\n",(0,t.jsxs)(n.p,{children:["To send a text message, the ",(0,t.jsx)(n.code,{children:"meeting.chat.sendTextMessage()"})," method can be used.\nThis accepts a string ",(0,t.jsx)(n.code,{children:"message"})," and sends it to the room."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const message = 'Is this the real life?';\nawait meeting.chat.sendTextMessage(message);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"send-an-image",children:"Send an image"}),"\n",(0,t.jsxs)(n.p,{children:["You can send an image with the help of ",(0,t.jsx)(n.code,{children:"meeting.chat.sendImageMessage()"}),". This\naccepts an image of type ",(0,t.jsx)(n.code,{children:"File"}),", and sends it to the participants in the\nmeeting."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<label for="img">Select image:</label>\n<input type="file" id="img" name="img" accept="image/*" />\n<button onclick="onSendImage()">Send Image</button>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"async function onSendImage() {\n  const image = document.getElementById('img');\n  await meeting.chat.sendImageMessage(image.files[0]);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"send-a-file",children:"Send a file"}),"\n",(0,t.jsxs)(n.p,{children:["Sending a file is quite similar to sending an image. The only difference is that\nwhen you send an image, a preview will be shown in the meeting chat, which is\nnot the case for sending files. That being said, an image can be sent as a file\ntoo using ",(0,t.jsx)(n.code,{children:"meeting.chat.sendFileMessage()"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<label for="file">Select file:</label>\n<input type="file" id="file" name="file" />\n<button onclick="onSendFile()">Send File</button>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"async function onSendFile() {\n  const file = document.getElementById('file');\n  await meeting.chat.sendFileMessage(file.files[0]);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"extra",children:"Extra"}),"\n",(0,t.jsxs)(n.p,{children:["There is also a common method called ",(0,t.jsx)(n.code,{children:"meeting.chat.sendMessage()"})," that can be\nused to send any of the 3 types of messages displayed above. It essentially\ncalls one of the methods from above depending upon the type of payload you send\nto the method. The ",(0,t.jsx)(n.code,{children:"sendMessage()"})," method accepts a parameter ",(0,t.jsx)(n.code,{children:"message"})," of the\nfollowing type:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"async function sendMessage(\n    message: { type: 'text', message: string }\n        | { type: 'image', image: File }\n        | { type: 'file', file: File },\n) {...}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here's how you would use the ",(0,t.jsx)(n.code,{children:"sendMessage()"})," method to send a text message."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const message = 'Is this just fantasy?';\nawait meeting.chat.sendMessage({ type: 'text', message });\n"})}),"\n",(0,t.jsx)(s,{children:(0,t.jsx)("title",{children:"Web Core Sending a chat message"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(96540);const a={},i=t.createContext(a);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);