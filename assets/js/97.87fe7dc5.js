"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[97,22478],{22478:(e,t,a)=>{a.r(t),a.d(t,{dyte_remote_access_manager:()=>d});var r=a(72944),i=a(17073),o=a(74157);const d=class{constructor(e){(0,r.r)(this,e),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.acceptedRequestId=void 0,this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=i.d,this.t=(0,o.u)()}disconnectedCallback(){}meetingChanged(e){var t,a,r,i,o;null!=e&&!Boolean(this.acceptedRequestId)&&Boolean(null===(r=null===(a=null===(t=this.meeting)||void 0===t?void 0:t.remote)||void 0===a?void 0:a.active)||void 0===r?void 0:r.id)&&(this.acceptedRequestId=null===(o=null===(i=this.meeting.remote)||void 0===i?void 0:i.active)||void 0===o?void 0:o.id)}render(){var e,t,a,i;return Boolean(null===(t=null===(e=null==this?void 0:this.meeting)||void 0===e?void 0:e.remote)||void 0===t?void 0:t.incomingRequests.toArray().length)?(0,r.h)(r.H,null,(0,r.h)("h3",null,this.t("remote_access.requests")),(0,r.h)("p",null,this.t("remote_access.allow")),(0,r.h)("div",{class:"scrollbar"},null===(i=null===(a=null==this?void 0:this.meeting)||void 0===a?void 0:a.remote)||void 0===i?void 0:i.incomingRequests.toArray().map((e=>{const t=this.meeting.participants.joined.get(e.remotePeerId);return(0,r.h)("label",{onClick:()=>{this.acceptedRequestId=e.id},class:"participant",htmlFor:t.id},(0,r.h)("input",{type:"radio",checked:this.acceptedRequestId===e.id,name:"remote-access-participant",value:e.id}),(0,r.h)("dyte-avatar",{participant:t,size:"sm"}),t.name)}))),(0,r.h)("div",{id:"actions"},(0,r.h)("dyte-button",{disabled:!Boolean(this.acceptedRequestId),iconPack:this.iconPack,t:this.t,onClick:()=>{var e,t;null===(t=null===(e=this.meeting)||void 0===e?void 0:e.remote)||void 0===t||t.acceptControl(this.acceptedRequestId),this.stateUpdate.emit({activeRemoteAccessManager:!1})}},this.t("remote_access.grant")))):(0,r.h)(r.H,null,(0,r.h)("p",{class:"empty-message"},this.t("remote_access.empty")))}static get watchers(){return{meeting:["meetingChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{box-sizing:border-box;display:block;width:512px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-6, 24px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);line-height:1.25}.deny-access{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}h3,p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}h3{margin-bottom:var(--dyte-space-4, 16px);font-size:20px;line-height:1.5}p{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}p.empty-message{text-align:center;font-size:16px}label>input{margin-right:var(--dyte-space-2, 8px)}input{background-color:transparent;accent-color:rgb(var(--dyte-colors-brand-500, 33 96 253))}#allow-requests-label{display:flex;align-items:center;font-size:12px}#actions{margin-top:var(--dyte-space-4, 16px);display:flex;align-items:center}dyte-button{flex:1 1 0%;border-radius:var(--dyte-border-radius-sm, 4px);font-size:12px}#participants-list{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);border-radius:var(--dyte-border-radius-md, 8px);max-height:var(--dyte-space-56, 224px);overflow-y:auto}.participant{box-sizing:border-box;display:flex;height:var(--dyte-space-14, 56px);align-items:center;padding-left:var(--dyte-space-1, 4px);padding-right:var(--dyte-space-1, 4px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-700, 44 44 44))}.participant:last-child{border-bottom-width:var(--dyte-border-width-none, 0)}.participant{cursor:pointer;font-size:14px}.participant input{margin-right:var(--dyte-space-3, 12px)}dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px)}"}}]);