"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[84341,6722],{84341:(t,s,e)=>{e.r(s),e.d(s,{dyte_transcript:()=>i});var a=e(72944),r=e(74157);const i=class{constructor(t){(0,a.r)(this,t),this.dismiss=(0,a.c)(this,"dyteTranscriptDismiss",7),this.transcript=void 0,this.t=(0,r.u)(),this.timeout=void 0}connectedCallback(){this.transcriptChanged(this.transcript)}transcriptChanged(t){clearTimeout(this.timeout),(null==t?void 0:t.name)&&(null==t?void 0:t.transcript)&&(this.timeout=setTimeout((()=>{this.dismiss.emit(t.id)}),1e4))}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"ctr"},(0,a.h)("p",{class:"message"},(0,a.h)("span",{class:"name"},this.transcript.name),": ",this.transcript.transcript)))}static get watchers(){return{transcript:["transcriptChanged"]}}};i.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{pointer-events:none;display:block;color:rgb(var(--dyte-colors-text-1000, 255 255 255));display:flex;justify-content:center;vertical-align:middle;animation:show 0.4s ease;transition:0.4s;z-index:5;width:100%}.ctr{box-sizing:border-box;display:inline-flex;height:100%;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-shadow:var(--tw-shadow-colored);pointer-events:auto;padding:var(--dyte-space-3, 12px);overflow:auto;max-width:50%}.message{margin:var(--dyte-space-0, 0px);display:inline-block;justify-content:center;max-width:100%;text-wrap:wrap;line-height:1.5rem}.message .name{font-weight:bold}:host(.exit){animation:exit 0.4s ease}@keyframes show{0%{opacity:0;transform:translateY(120px)}100%{opacity:1;transform:translateY(0px)}}@keyframes exit{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-120px)}}:host([size='sm']){font-size:14px}"}}]);