"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[72932,50551],{24613:(t,a,e)=>{e.d(a,{d:()=>i,e:()=>r,f:()=>o});const i=(t,a)=>{const e=a.getTime()-t.getTime();return Math.round(Math.abs(e/1e3/60))},r=(t,a)=>{const e=i(t,a);if(e<2)return"just now";if(e<60)return`${e}m ago`;const r=Math.round(e/60);if(e<90)return`about ${r}h ago`;if(r<24)return`${r}h ago`;const o=Math.round(r/24);if(o<7)return`${o}d ago`;return`${Math.round(o/7)}w ago`},o=t=>t.toDateString()+" "+t.toLocaleTimeString()},50551:(t,a,e)=>{e.r(a),e.d(a,{dyte_file_message_view:()=>c,dyte_image_message_view:()=>l,dyte_message_view:()=>p});var i=e(72944),r=(e(26468),e(60064),e(94370),e(17073)),o=e(74157),s=(e(55055),e(1821)),d=e(31247),n=e(24613);e(70694),e(64383);const c=class{constructor(t){(0,i.r)(this,t),this.name=void 0,this.size=void 0,this.url=void 0,this.iconPack=r.d,this.t=(0,o.u)()}render(){return(0,i.h)("div",{class:"file"},(0,i.h)("dyte-button",{variant:"secondary",kind:"icon",iconPack:this.iconPack,t:this.t,onClick:()=>(0,d.d)((0,s.a)(this.url),{name:this.name,fallbackName:"file"}),part:"button"},(0,i.h)("dyte-icon",{icon:this.iconPack.download,iconPack:this.iconPack,t:this.t})),(0,i.h)("div",{class:"file-data"},(0,i.h)("div",{class:"name"},this.name),(0,i.h)("div",{class:"file-data-split"},(0,i.h)("div",{class:"ext"},(0,d.g)(this.name)),(0,i.h)("span",{class:"divider"}),(0,i.h)("div",{class:"size"},(0,d.a)(this.size)))))}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);min-width:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.file .file-data{margin-left:var(--dyte-space-1, 4px);flex:1 1 0%}.file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}";const l=class{constructor(t){(0,i.r)(this,t),this.onPreview=(0,i.c)(this,"preview",7),this.url=void 0,this.iconPack=r.d,this.t=(0,o.u)(),this.status="loading"}render(){return(0,i.h)("div",{class:{image:!0,loaded:"loaded"===this.status}},(0,i.h)("img",{src:(0,s.a)(this.url),onLoad:()=>{this.status="loaded"},onError:()=>{this.status="errored"},onClick:()=>{"loaded"===this.status&&this.onPreview.emit(this.url)}}),"loading"===this.status&&(0,i.h)("div",{class:"image-spinner",title:this.t("chat.img.loading"),"aria-label":this.t("chat.img.loading")},(0,i.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t})),"errored"===this.status&&(0,i.h)("div",{class:"image-errored",title:this.t("chat.error.img_not_found"),"aria-label":this.t("chat.error.img_not_found")},(0,i.h)("dyte-icon",{icon:this.iconPack.image_off,iconPack:this.iconPack,t:this.t})),"loaded"===this.status&&(0,i.h)("div",{class:"actions"},(0,i.h)("dyte-button",{class:"action",variant:"secondary",kind:"icon",onClick:()=>{this.onPreview.emit(this.url)},iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:this.iconPack.full_screen_maximize})),(0,i.h)("dyte-button",{class:"action",variant:"secondary",kind:"icon",onClick:()=>(0,d.d)(this.url,{fallbackName:"image"}),iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-icon",{icon:this.iconPack.download,iconPack:this.iconPack,t:this.t}))))}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.image-spinner{cursor:wait}.image-errored{cursor:not-allowed}.image{display:block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}";const p=class{constructor(t){(0,i.r)(this,t),this.onAction=(0,i.c)(this,"action",7),this.actions=[],this.variant="bubble",this.viewType="outgoing",this.avatarUrl=void 0,this.hideAvatar=!1,this.authorName=void 0,this.hideAuthorName=!1,this.hideMetadata=!1,this.time=void 0,this.iconPack=r.d}renderActions(){return(0,i.h)("dyte-menu",{placement:"top-end",offset:1},(0,i.h)("button",{slot:"trigger",class:"actions"},(0,i.h)("dyte-icon",{icon:this.iconPack.chevron_down})),(0,i.h)("dyte-menu-list",null,this.actions.map((t=>(0,i.h)("dyte-menu-item",{onClick:()=>this.onAction.emit(t.id)},t.icon&&(0,i.h)("dyte-icon",{icon:t.icon,slot:"start"}),t.label)))))}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{"message-wrapper":!0,[this.viewType]:!0}},!this.hideAvatar&&(0,i.h)("aside",{class:"avatar",part:"avatar"},(0,i.h)("dyte-avatar",{participant:{name:this.authorName,picture:this.avatarUrl},size:"sm"})),(0,i.h)("div",{class:"message",part:"message"},!this.hideAuthorName&&(0,i.h)("div",{class:"header"},this.authorName),(0,i.h)("div",{class:{body:!0,bubble:"bubble"===this.variant}},(0,i.h)("slot",null),!this.hideMetadata&&!!this.time&&(0,i.h)("div",{class:"metadata",title:(0,n.f)(this.time)},(0,n.e)(this.time,new Date(Date.now()))),0!==this.actions.length&&this.renderActions()))))}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.message-wrapper{display:flex;flex-direction:row-reverse;gap:var(--dyte-space-2, 8px)}.message-wrapper.incoming{flex-direction:row}.message{display:flex;flex-direction:column}.header{margin-bottom:var(--dyte-space-1, 4px);align-self:flex-end;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));font-size:14px;font-weight:600}.incoming .header{align-self:flex-start}.body{display:flex;flex-direction:column;min-width:var(--dyte-space-24, 96px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));font-size:14px;line-height:1.375;position:relative}.body .metadata{margin-top:var(--dyte-space-2, 8px);align-self:flex-end;font-size:10px}.bubble{max-width:var(--dyte-space-96, 384px);padding:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:var(--dyte-border-radius-md, 8px)}.incoming .bubble{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.avatar{display:none}dyte-menu{position:absolute;right:var(--dyte-space-0, 0px);top:var(--dyte-space-0, 0px);border-radius:var(--dyte-border-radius-lg, 12px)}dyte-menu dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);cursor:pointer}.actions{display:flex;align-items:center;justify-content:center;padding-left:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1, 4px);padding-right:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;background:radial-gradient(\n    at top right,\n    rgb(var(--dyte-colors-brand-300, 73 124 253)) 60%,\n    rgba(255, 255, 255, 0) 80%\n  )}.actions dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.incoming .actions{background:radial-gradient(\n      at top right,\n      rgb(var(--dyte-colors-background-800, 30 30 30)) 60%,\n      rgba(255, 255, 255, 0) 80%\n    )}.incoming .actions dyte-icon{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.incoming dyte-avatar{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}@media (min-width: 400px){.avatar{display:flex;width:var(--dyte-space-6, 24px)}.avatar dyte-avatar{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);font-size:10px;overflow:clip;border-radius:9999px}}@media (hover: hover){dyte-menu{visibility:hidden}.body:hover dyte-menu{visibility:visible}}"},31247:(t,a,e)=>{e.d(a,{a:()=>o,d:()=>s,g:()=>r});var i=e(1821);const r=t=>t.split(/[#?]/)[0].split(".").pop().trim(),o=t=>{if(!t)return"0 B";const a=Math.floor(Math.log(t)/Math.log(1024));return`${(t/1024**a).toFixed(2)} ${["B","kB","MB","GB","TB"][a]}`},s=async(t,a)=>{t=(0,i.a)(t);let e=null==a?void 0:a.name;const r=await fetch(t);if(!r.ok)return void window.open(t,"_blank");const o=URL.createObjectURL(await r.blob()),s=document.createElement("a");s.href=o,s.download=null!=e?e:((t,a="file")=>{try{const e=new URL(t).pathname.split("/").pop();return"/"!==e?e:a}catch(e){return a}})(t,null==a?void 0:a.fallbackName),s.click()}},1821:(t,a,e)=>{e.d(a,{a:()=>o,f:()=>s,g:()=>c,h:()=>r,s:()=>i});const i=(t,a=20)=>null==t?"":t.length>a?`${t.substring(0,a)}...`:t,r=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),o=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,s=t=>""===(t=null==t?void 0:t.trim())?"Participant":t,d=new RegExp(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/,"g"),n=new RegExp(/\s+/);function c(t,a=2){return t.replace(d,"").trim().split(n).slice(0,a).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);