"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[48033,70414],{48033:(e,t,s)=>{s.r(t),s.d(t,{dyte_permissions_message:()=>r});var i=s(72944),n=s(17073),o=s(74157),a=s(26468);s(55055);const r=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.continue=()=>{this.stateUpdate.emit({activePermissionsMessage:{enabled:!1}}),a.s.activePermissionsMessage={enabled:!1}},this.reload=()=>{"undefined"!=typeof window&&window.location.reload()},this.meeting=void 0,this.t=(0,o.u)(),this.iconPack=n.d,this.states=void 0,this.device=void 0}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(e){null!=e&&(this.device=e.self.device)}getLink(e){let t;switch(e){case"audio":t="microphone";break;case"video":t="camera";break;default:t="screenshare"}let s=`Allow+${t}+access`;if(null!=this.device){const{browserName:e,isMobile:t}=this.device;s+="+"+e,t&&(s+="+mobile")}return"https://www.google.com/search?q="+s}isDeniedBySystem(){var e;const t=null===(e=this.meeting)||void 0===e?void 0:e.self.mediaPermissions;return null!=t&&!!Object.values(t).includes("SYSTEM_DENIED")}getTitle(){var e,t,s;const i=this.isDeniedBySystem(),n=null!==(s=null===(t=null===(e=this.states)||void 0===e?void 0:e.activePermissionsMessage)||void 0===t?void 0:t.kind)&&void 0!==s?s:"audio";return i?this.t(`perm_sys_denied.${n}`):this.t(`perm_denied.${n}`)}getMessage(){var e,t,s,i;const{browserName:n,osName:o}=this.meeting.self.device,a=this.isDeniedBySystem(),r=null!==(e=n.toLowerCase())&&void 0!==e?e:"others",c=null!=o?o:"others",d=null!==(i=null===(s=null===(t=this.states)||void 0===t?void 0:t.activePermissionsMessage)||void 0===s?void 0:s.kind)&&void 0!==i?i:"audio";return a?this.t(`perm_sys_denied.${d}.${c.toLowerCase()}.message`):this.t(`perm_denied.${d}.${r}.message`)}render(){var e,t,s;const n=this.isDeniedBySystem();return(0,i.h)(i.H,null,(0,i.h)("h2",null,(0,i.h)("dyte-icon",{class:"text-icon",icon:this.iconPack.warning,iconPack:this.iconPack,t:this.t}),this.getTitle()),(0,i.h)("p",null,this.getMessage()),!n&&(0,i.h)("a",{class:"need-help-link",href:this.getLink(null!==(s=null===(t=null===(e=this.states)||void 0===e?void 0:e.activePermissionsMessage)||void 0===t?void 0:t.kind)&&void 0!==s?s:"audio"),target:"_blank",rel:"noreferrer external noreferrer noopener"},(0,i.h)("dyte-icon",{class:"text-icon",icon:this.iconPack.attach,iconPack:this.iconPack,t:this.t}),this.t("cta.help")),(0,i.h)("div",{class:"actions"},(0,i.h)("dyte-button",{size:"lg",kind:"wide",variant:"secondary",onClick:this.continue,iconPack:this.iconPack,t:this.t},this.t("cta.continue")),(0,i.h)("dyte-button",{size:"lg",kind:"wide",onClick:this.reload,iconPack:this.iconPack,t:this.t},this.t("cta.reload"))),(0,i.h)("slot",null))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:block;width:560px;padding:var(--dyte-space-6, 24px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.actions{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.text-icon{display:inline-block;vertical-align:middle}h2{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-4, 16px)}h2 .text-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-4, 16px)}.need-help-link{display:inline-block;text-underline-offset:2px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-400, 53 110 253) / var(--tw-text-opacity))}.need-help-link:hover{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-text-opacity))}a dyte-icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) .actions{flex-direction:column;align-items:flex-start;justify-content:center}:host([size='sm']) .action{width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.actions{margin-top:var(--dyte-space-6, 24px)}.actions dyte-button{flex:1 1 0%}"},26468:(e,t,s)=>{s.d(t,{o:()=>l,s:()=>d});var i=s(72944),n=s(55055);const o=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))}),2e3),r=e=>"function"==typeof e?e():e,c=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:d,onChange:l}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=r(e);let i=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{var t;i=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},a=e=>(n.get.forEach((t=>t(e))),i.get(e)),d=(e,s)=>{const o=i.get(e);t(s,o,e)&&(i.set(e,s),n.set.forEach((t=>t(e,s,o))))},l="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>a(t),ownKeys:e=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>i.has(t),set:(e,t,s)=>(d(t,s),!0)}),h=(e,t)=>(n[e].push(t),()=>{c(n[e],t)});return{state:l,get:a,set:d,on:h,onChange:(t,s)=>{const i=h("set",((e,i)=>{e===t&&s(i)})),n=h("reset",(()=>s(r(e)[t])));return()=>{i(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const t=i.get(e);n.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.g)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),a(e)}}})()),s})({prefs:(0,n.g)()})},55055:(e,t,s)=>{s.d(t,{a:()=>o,b:()=>c,c:()=>l,g:()=>d,s:()=>r});const i={get:(e,t,s)=>(...i)=>{try{return Reflect.get(e,t,s).apply(e,i)}catch(n){return null}}};let n;try{n=new Proxy(localStorage,i)}catch(h){n=new Proxy({},i)}const o=n,a="dyte-prefs",r=(e,t)=>{const s=JSON.parse(o.getItem(a)||"{}");s[e]=JSON.stringify(t),o.setItem("dyte-prefs",JSON.stringify(s))},c=e=>JSON.parse(o.getItem(a)||"{}")[e],d=()=>{const e=JSON.parse(o.getItem(a)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"]}},l={}}}]);