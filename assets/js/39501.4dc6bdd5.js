"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[39501,61882],{39501:(t,e,i)=>{i.r(e),i.d(e,{dyte_recording_toggle:()=>a});var r=i(72944),s=i(17073),n=i(74157);const a=class{constructor(t){(0,r.r)(this,t),this.dyteAPIError=(0,r.c)(this,"dyteAPIError",7),this.toggleRecording=async()=>{var t,e,i;if(!this.isLoading()&&!this.disabled)switch(this.recordingState){case"IDLE":try{return void await(null===(t=this.meeting)||void 0===t?void 0:t.recording.start())}catch(r){this.dyteAPIError.emit({trace:this.t("recording.start"),message:this.t("recording.error.start")})}return;case"RECORDING":try{return void await(null===(e=this.meeting)||void 0===e?void 0:e.recording.stop())}catch(s){this.dyteAPIError.emit({trace:this.t("recording.stop"),message:this.t("recording.error.stop")})}return;case"PAUSED":try{return void await(null===(i=this.meeting)||void 0===i?void 0:i.recording.resume())}catch(n){this.dyteAPIError.emit({trace:this.t("recording.resume"),message:this.t("recording.error.resume")})}return;default:return}},this.isLoading=()=>null==this.meeting||"STARTING"===this.recordingState||"STOPPING"===this.recordingState,this.variant="button",this.meeting=void 0,this.t=(0,n.u)(),this.iconPack=s.d,this.size=void 0,this.disabled=!1,this.recordingState=void 0,this.canRecord=!1}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var t;this.recordingStateUpdateListener&&(null===(t=this.meeting)||void 0===t||t.recording.removeListener("recordingUpdate",this.recordingStateUpdateListener))}meetingChanged(t){null!=t&&(this.recordingState=t.recording.recordingState,this.canRecord=!0===t.self.permissions.canRecord,this.recordingStateUpdateListener=t=>{this.recordingState=t},t.recording.addListener("recordingUpdate",this.recordingStateUpdateListener))}getLabel(){switch(this.recordingState){case"IDLE":return this.t("recording.idle");case"RECORDING":return this.t("recording.stop");case"STARTING":return this.t("recording.starting");case"STOPPING":return this.t("recording.stopping");case"PAUSED":return this.t("recording.resume");default:return this.t("recording.loading")}}getIcon(){switch(this.recordingState){case"IDLE":case"STARTING":case"STOPPING":default:return this.iconPack.recording;case"RECORDING":return this.iconPack.stop_recording}}render(){if(this.canRecord)return(0,r.h)(r.H,{title:this.t("RECORDING"===this.recordingState?"recording.stop":"recording.idle")},(0,r.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:this.toggleRecording,icon:this.getIcon(),isLoading:this.isLoading(),label:this.t(this.getLabel()),variant:this.variant,disabled:this.disabled}))}static get watchers(){return{meeting:["meetingChanged"]}}};a.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);