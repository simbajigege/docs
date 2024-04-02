"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[92842,70461],{92842:(t,e,s)=>{s.r(e),s.d(e,{dyte_confirmation_modal:()=>r});var o=s(72944),a=s(74157),n=s(17073),i=s(26468);s(55055);const r=class{constructor(t){(0,o.r)(this,t),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.keyPressListener=t=>{"Escape"===t.key&&this.close()},this.close=()=>{this.states.activeConfirmationModal.onClose(this.stateUpdate,i.s,this.meeting),this.stateUpdate.emit({activeConfirmationModal:{active:!1}}),i.s.activeConfirmationModal={active:!1}},this.onConfirmation=async()=>{this.states.activeConfirmationModal.onClick(this.stateUpdate,i.s,this.meeting),this.stateUpdate.emit({activeConfirmationModal:{active:!1}}),i.s.activeConfirmationModal={active:!1}},this.meeting=void 0,this.states=void 0,this.iconPack=n.d,this.t=(0,a.u)()}connectedCallback(){document.addEventListener("keydown",this.keyPressListener)}componentDidLoad(){}disconnectedCallback(){document.removeEventListener("keydown",this.keyPressListener)}render(){var t,e;const s=this.states.activeConfirmationModal;return(0,o.h)(o.H,null,(0,o.h)("div",{class:"leave-modal"},(0,o.h)("div",{class:"header"},(0,o.h)("h2",{class:"title"},s.header?this.t(s.header):this.t("cta.confirmation"))),(0,o.h)("p",{class:"message"},s.content?this.t(s.content):""),(0,o.h)("div",{class:"content"},(0,o.h)("div",{class:"leave-meeting"},(0,o.h)("dyte-button",{variant:"secondary",title:s.cancelText?this.t(s.cancelText):this.t("cancel"),onClick:this.close,iconPack:this.iconPack,t:this.t,class:"br-secondary-btn"},s.cancelText?this.t(s.cancelText):this.t("cancel")),(0,o.h)("dyte-button",{onClick:()=>this.onConfirmation(),variant:null!==(e=null===(t=this.states.activeConfirmationModal)||void 0===t?void 0:t.variant)&&void 0!==e?e:"danger",title:s.ctaText?this.t(s.ctaText):this.t("yes"),iconPack:this.iconPack,t:this.t},s.ctaText?this.t(s.ctaText):this.t("yes"))))))}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);padding:var(--dyte-space-8, 32px);width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));width:400px;max-width:80%}.leave-modal{width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between;gap:var(--dyte-space-4, 16px)}.leave-meeting dyte-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255));flex:1 1 0%}.end-meeting{margin-top:var(--dyte-space-2, 8px)}.br-secondary-btn{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-secondary-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}"},26468:(t,e,s)=>{s.d(e,{o:()=>l,s:()=>d});var o=s(72944),a=s(55055);const n=t=>!("isConnected"in t)||t.isConnected,i=((t,e)=>{let s;return(...o)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...o)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(n))}),2e3),r=t=>"function"==typeof t?t():t,c=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:d,onChange:l}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{const s=r(t);let o=new Map(Object.entries(null!=s?s:{}));const a={dispose:[],get:[],set:[],reset:[]},n=()=>{var e;o=new Map(Object.entries(null!==(e=r(t))&&void 0!==e?e:{})),a.reset.forEach((t=>t()))},i=t=>(a.get.forEach((e=>e(t))),o.get(t)),d=(t,s)=>{const n=o.get(t);e(s,n,t)&&(o.set(t,s),a.set.forEach((e=>e(t,s,n))))},l="undefined"==typeof Proxy?{}:new Proxy(s,{get:(t,e)=>i(e),ownKeys:t=>Array.from(o.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>o.has(e),set:(t,e,s)=>(d(e,s),!0)}),h=(t,e)=>(a[t].push(e),()=>{c(a[t],e)});return{state:l,get:i,set:d,on:h,onChange:(e,s)=>{const o=h("set",((t,o)=>{t===e&&s(o)})),a=h("reset",(()=>s(r(t)[e])));return()=>{o(),a()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(h("set",e.set)),e.get&&t.push(h("get",e.get)),e.reset&&t.push(h("reset",e.reset)),e.dispose&&t.push(h("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{a.dispose.forEach((t=>t())),n()},reset:n,forceUpdate:t=>{const e=o.get(t);a.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof o.g)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,o.g)();s&&((t,e,s)=>{const o=t.get(e);o?o.includes(s)||o.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(o.f)),i(t)},reset:()=>{t.forEach((t=>t.forEach(o.f))),i(t)}}})()),s})({prefs:(0,a.g)()})},55055:(t,e,s)=>{s.d(e,{a:()=>n,b:()=>c,c:()=>l,g:()=>d,s:()=>r});const o={get:(t,e,s)=>(...o)=>{try{return Reflect.get(t,e,s).apply(t,o)}catch(a){return null}}};let a;try{a=new Proxy(localStorage,o)}catch(h){a=new Proxy({},o)}const n=a,i="dyte-prefs",r=(t,e)=>{const s=JSON.parse(n.getItem(i)||"{}");s[t]=JSON.stringify(e),n.setItem("dyte-prefs",JSON.stringify(s))},c=t=>JSON.parse(n.getItem(i)||"{}")[t],d=()=>{const t=JSON.parse(n.getItem(i)||"{}");return{mirrorVideo:!t["mirror-video"]||"true"===t["mirror-video"],muteNotificationSounds:!!t["mute-notification-sounds"]&&"true"===t["mute-notification-sounds"]}},l={}}}]);