"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[60122],{75630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(74848),s=n(28453);const r={title:"Quickstart",description:"Quickstart guide for Dyte's Flutter UI Kit.",sidebar_position:2},o="Quickstart",a={id:"quickstart",title:"Quickstart",description:"Quickstart guide for Dyte's Flutter UI Kit.",source:"@site/docs/flutter/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/flutter/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/flutter/quickstart.mdx",tags:[],version:"current",lastUpdatedAt:1709899166,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:2,frontMatter:{title:"Quickstart",description:"Quickstart guide for Dyte's Flutter UI Kit.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/flutter/"},next:{title:"Design System",permalink:"/docs/flutter/design-token"}},l={},d=[{value:"Objective",id:"objective",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"Step 2: Configure permissions for Android and iOS",id:"step-2-configure-permissions-for-android-and-ios",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Step 3: Configure a Dyte meeting",id:"step-3-configure-a-dyte-meeting",level:2},{value:"Step 4: Initialize the SDK",id:"step-4-initialize-the-sdk",level:2},{value:"Step 5: Launch the meeting UI",id:"step-5-launch-the-meeting-ui",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsx)(t.p,{children:"This quickstart shows how to use Dyte's Flutter UI Kit SDK to add live video and\naudio to your Flutter applications."}),"\n",(0,i.jsxs)(t.p,{children:["For getting started quickly, you can use our sample code. You can clone and run\na sample application from the\n",(0,i.jsx)(t.a,{href:"https://github.com/dyte-io/flutter-samples/tree/main/flutter_uikit",children:"Flutter UI Kit Sample App GitHub repository"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"objective",children:"Objective"}),"\n",(0,i.jsx)(t.p,{children:"You\u2019ll learn how to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Install the Dyte SDK"}),"\n",(0,i.jsx)(t.li,{children:"Configuring Android & iOS permissions"}),"\n",(0,i.jsx)(t.li,{children:"Initialize the SDK"}),"\n",(0,i.jsx)(t.li,{children:"Configure a Dyte meeting"}),"\n",(0,i.jsx)(t.li,{children:"Launch the meeting UI"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"before-getting-started",children:"Before Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["Make sure you've read the\n",(0,i.jsx)(t.a,{href:"https://docs.dyte.io/getting-started",children:"Getting Started with Dyte"})," topic and\ncompleted the steps in the\n",(0,i.jsx)(t.a,{href:"https://docs.dyte.io/getting-started#integrate-dyte",children:"Integrate Dyte"})," section.\nYou must complete the following steps:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a ",(0,i.jsx)(t.a,{href:"https://dev.dyte.io/",children:"Dyte Developer Account"})]}),"\n",(0,i.jsxs)(t.li,{children:["Create ",(0,i.jsx)(t.a,{href:"https://dev.dyte.io/roles-presets",children:"Presets"})]}),"\n",(0,i.jsxs)(t.li,{children:["Create a\n",(0,i.jsx)(t.a,{href:"https://docs.dyte.io/api/?v=v2#/operations/create_meeting",children:"Dyte Meeting"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.dyte.io/api/?v=v2#/operations/add_participant",children:"Add Participant"}),"\nto the meeting"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-install-the-sdk",children:"Step 1: Install the SDK"}),"\n",(0,i.jsxs)(t.p,{children:["Install the SDK from ",(0,i.jsx)(t.a,{href:"https://pub.dev",children:"pub.dev"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\nflutter pub add dyte_uikit\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-2-configure-permissions-for-android-and-ios",children:"Step 2: Configure permissions for Android and iOS"}),"\n",(0,i.jsx)(t.p,{children:"Perform the following steps:"}),"\n",(0,i.jsx)(t.h3,{id:"android",children:"Android"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"compileSdkVersion 33"})," and ",(0,i.jsx)(t.code,{children:"minSdkVersion 21"})," inside ",(0,i.jsx)(t.code,{children:"build.gradle"})," file at the ",(0,i.jsx)(t.code,{children:"<project root>/android/app/build.gradle"})," file."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"  defaultConfig {\n        ...\n\n        compileSdkVersion 33\n        minSdkVersion 21\n\n        ...\n    }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["And change the kotlin version to ",(0,i.jsx)(t.code,{children:"1.9.0"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"    ext.kotlin_version = '1.9.0'\n"})}),"\n",(0,i.jsx)(t.h3,{id:"ios",children:"iOS"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Set minimum deployment target for your Flutter app to 13.0 or higher."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-<Swift>",children:"platform :ios, '13.0'\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Add the following keys to your ",(0,i.jsx)(t.code,{children:"Info.plist"})," file, located in ",(0,i.jsx)(t.code,{children:"<project root>/ios/Runner/Info.plist"})," :"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-<Swift>",children:"/* Attach the permission to use camera & microphone. */\n<key>NSBluetoothPeripheralUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n\n<key>NSBluetoothAlwaysUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n\n<key>NSPhotoLibraryUsageDescription</key>\n<string>For people to share, we need access to your photos.</string>\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"In iOS, if you are allowing user to download attachments in chat, add the following permissions in your app's Info.plist:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-<Swift>",children:"<key>LSSupportsOpeningDocumentsInPlace</key>\n<true/>\n<key>UIFileSharingEnabled</key>\n<true/>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-3-configure-a-dyte-meeting",children:"Step 3: Configure a Dyte meeting"}),"\n",(0,i.jsxs)(t.p,{children:["To initiate Dyte Meeting for any participant you just need to pass ",(0,i.jsx)(t.code,{children:"authToken"})," as an argument. You can get the ",(0,i.jsx)(t.code,{children:"authToken"})," via the ",(0,i.jsx)(t.a,{href:"https://docs.dyte.io/api?v=v2#/operations/add_participant",children:"Add Participant API"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["After getting the ",(0,i.jsx)(t.code,{children:"authToken"}),", you need to create the ",(0,i.jsx)(t.code,{children:"DyteMeetingInfoV2"})," object as follows:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"authToken"})}),(0,i.jsxs)(t.td,{children:["After you've created the meeting, ",(0,i.jsx)("br",{})," add each participant to the meeting ",(0,i.jsx)("br",{})," using the ",(0,i.jsx)(t.a,{href:"/api?v=v2#/operations/add_participant",children:"Add Participant API"}),(0,i.jsx)("br",{})," (The presetName created earlier ",(0,i.jsx)("br",{})," must be passed in the body ",(0,i.jsx)("br",{})," of the Add Participant API request) ",(0,i.jsx)("br",{})," The API response contains the ",(0,i.jsx)(t.code,{children:"authToken"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"baseUrl"})}),(0,i.jsxs)(t.td,{children:["The base URL of the Dyte server. Default value is ",(0,i.jsx)(t.code,{children:"https://api.dyte.io/v2"}),". This is an optional argument."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enableAudio"})}),(0,i.jsxs)(t.td,{children:["A boolean value to enable or disable audio in the meeting. Default value is ",(0,i.jsx)(t.code,{children:"true"}),". This is an optional argument."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enableVideo"})}),(0,i.jsxs)(t.td,{children:["A boolean value to enable or disable video in the meeting. Default value is ",(0,i.jsx)(t.code,{children:"true"}),". This is an optional argument."]})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"final meetingInfo = DyteMeetingInfoV2(\n                    authToken: '<authToken>',\n                    baseUrl: 'https://api.dyte.io/v2',      // optional argument, if you want to pass your own baseUrl\n                    enableAudio: false,                     // optional argument, to enable or disable audio in the meeting\n                    enableVideo: false,                     // optional argument, to enable or disable video in the meeting\n                  );\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-4-initialize-the-sdk",children:"Step 4: Initialize the SDK"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"DyteUIKit"})," is the main class of the SDK. It is the entry point and the only\nclass required to initialize Dyte UI Kit SDK. To initialize it we have to pass ",(0,i.jsx)(t.code,{children:"DyteUIKitInfo"})," object as an argument."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"\n/* Passing the DyteMeetingInfoV2 object `meetingInfo` you created in the Step 3,\n*/\n\nfinal uikitInfo = DyteUIKitInfo(\n      meetingInfo,\n      // Optional: Pass the DyteDesignTokens object to customize the UI\n      designToken: DyteDesignTokens(\n        colorToken: DyteColorToken(\n          brandColor: Colors.purple,\n          backgroundColor: Colors.black,\n          textOnBackground: Colors.white,\n          textOnBrand: Colors.white,\n        ),\n      ),\n    );\n\nfinal uiKit = DyteUIKitBuilder.build(uiKitInfo: uikitInfo, context: context);\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can learn more about customization of the uikit in the ",(0,i.jsx)(t.a,{href:"/flutter/design-token",children:"Design System"})," section."]}),"\n",(0,i.jsx)(t.h2,{id:"step-5-launch-the-meeting-ui",children:"Step 5: Launch the meeting UI"}),"\n",(0,i.jsxs)(t.p,{children:["To launch the meeting you can simply use the object returned after calling ",(0,i.jsx)(t.code,{children:"build"})," method. The ",(0,i.jsx)(t.code,{children:"uikit"})," above is a widget itself.\nYou can push this widget as a page to start the flow of prebuilt Flutter UI Kit."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"import 'package:dyte_uikit/dyte_uikit.dart';\nimport 'package:flutter/material.dart';\n\nclass DyteMeetingPage extends StatelessWidget {\n  const DyteMeetingPage({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    ...\n    // Push this widget as page in your app\n    // Earlier it was uikit.loadUI() which is now deprecated,just use uikit.\n    return uiKit;\n  }\n}\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"Voila! You're all done. Here is the pictorial representation of all the configuration options passed."}),"\n",(0,i.jsx)("div",{id:"one",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",flex:"1 1 0",justifyContent:"center"},children:["/static/mobile/0.x.x/flutter-setup-page.png","/static/mobile/0.x.x/flutter-video-call.png","/static/mobile/0.x.x/flutter-participant-list.png","/static/mobile/0.x.x/flutter-advanced-features.png","/static/mobile/0.x.x/flutter-chat.png"].map((e=>(0,i.jsx)(t.img,{src:e,alt:"Image 1",width:"220",padding:"10",margin:"10 3",style:{margin:"10px",borderRadius:"8px"}})))}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'\n\n<head>\n  <title>Flutter Quickstart</title>\n  <meta name="description" content="Get started quickly with Dyte\'s Flutter integration. Follow our quickstart guide for seamless integration and development."/>\n</head>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);