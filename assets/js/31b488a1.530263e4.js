"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[47307],{10322:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(74848),i=n(28453);const s={image:"/static/ui-kit/1.x.x/components/dyte-button.svg",description:"Learn how to use and customize the DyteButton component in Dyte's iOS UiKit with our detailed documentation."},r="DyteButton",d={id:"components/dyte-button",title:"DyteButton",description:"Learn how to use and customize the DyteButton component in Dyte's iOS UiKit with our detailed documentation.",source:"@site/docs/ios/components/dyte-button.mdx",sourceDirName:"components",slug:"/components/dyte-button",permalink:"/docs/ios/components/dyte-button",draft:!1,unlisted:!1,editUrl:"https://github.com/dyte-io/docs/tree/main/docs/ios/components/dyte-button.mdx",tags:[],version:"current",lastUpdatedAt:1707374989,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{image:"/static/ui-kit/1.x.x/components/dyte-button.svg",description:"Learn how to use and customize the DyteButton component in Dyte's iOS UiKit with our detailed documentation."},sidebar:"tutorialSidebar",previous:{title:"DyteAvatarView",permalink:"/docs/ios/components/dyte-avatar"},next:{title:"DyteSwitchCameraButtonControlBar",permalink:"/docs/ios/components/dyte-camera-toggle"}},a={},c=[];function u(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...t.components},{Head:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"dytebutton",children:"DyteButton"}),"\n",(0,o.jsx)(e.p,{children:"A button that follows Dyte's Design System."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-swift",children:'let dyteImage = DyteImage(image:ImageProvider.image(named: "icon_down_arrow"))\nlet downloadButton: DyteButton = {\n        let button = DyteButton(style: .iconOnly(icon: dyteImage),\n                      dyteButtonState: .active)\n        button.backgroundColor = dyteSharedTokenColor.background.shade800\n        button.isUserInteractionEnabled = false\n        button.tintColor = .white\n        // Set additional button properties if needed\n        button.selectedStateTintColor = DesignLibrary.shared.color.status.danger\n        return button\n    }()\n'})}),"\n",(0,o.jsx)(n,{children:(0,o.jsx)("title",{children:"iOS DyteButton"})})]})}function l(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var o=n(96540);const i={},s=o.createContext(i);function r(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);