"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[65960,43579],{43579:(e,t,s)=>{s.r(t),s.d(t,{dyte_webinar_stage_toggle:()=>r});var i=s(72944),a=s(17073),n=s(74157);const r=class{constructor(e){(0,i.r)(this,e),this.requestToJoinAcceptedListener=()=>{this.stageStatus="ACCEPTED"},this.requestToJoinRejectedListener=()=>{this.stageStatus="DENIED"},this.stageJoinedListener=()=>{this.stageStatus="ACCEPTED"},this.removeFromStageListener=()=>{this.stageStatus="NOT_REQUESTED"},this.selfStageLeftListener=()=>{this.stageStatus="NOT_REQUESTED"},this.requestStageListener=()=>{this.stageStatus="PENDING"},this.stageCallback=async()=>{var e;const t=null===(e=this.meeting)||void 0===e?void 0:e.self;if(null!=t&&(this.requestProduce||this.canPresent)){if("PENDING"!==this.stageStatus)return"ACCEPTED"===this.stageStatus?(await t.leaveStage(),void(this.stageStatus="NOT_REQUESTED")):void(this.canPresent?(await t.joinStage(),this.stageStatus="ACCEPTED"):(await t.requestToJoinStage(),this.stageStatus="PENDING"));await t.withdrawRequestToJoinStage()}},this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=a.d,this.t=(0,n.u)(),this.stageStatus="NOT_REQUESTED",this.canPresent=!1,this.requestProduce=!1}connectedCallback(){this.meetingChanged(this.meeting),this.meeting.self.addListener("joinStageRequestAccepted",this.requestToJoinAcceptedListener),this.meeting.self.addListener("joinStageRequestRejected",this.requestToJoinRejectedListener),this.meeting.self.addListener("stageJoined",this.stageJoinedListener),this.meeting.self.addListener("removedFromStage",this.removeFromStageListener),this.meeting.self.addListener("stageLeft",this.selfStageLeftListener),this.meeting.self.addListener("peerRequestToJoinStage",this.requestStageListener)}disconnectedCallback(){this.meeting.self.removeListener("joinStageRequestAccepted",this.requestToJoinAcceptedListener),this.meeting.self.removeListener("joinStageRequestRejected",this.requestToJoinRejectedListener),this.meeting.self.removeListener("removedFromStage",this.removeFromStageListener),this.meeting.self.removeListener("stageJoined",this.stageJoinedListener),this.meeting.self.removeListener("stageLeft",this.selfStageLeftListener),this.meeting.self.removeListener("peerRequestToJoinStage",this.requestStageListener)}meetingChanged(e){null!=e&&(this.requestProduce=e.self.permissions.requestProduce,this.canPresent=e.self.permissions.canPresent,(this.canPresent||"ON_STAGE"===e.self.webinarStageStatus)&&(this.stageStatus="ACCEPTED"))}getState(){let e="",t="",s="",i={},a=!1;return"PENDING"===this.stageStatus?(t=this.t("stage_request.cancel_request"),e=this.t("stage_request.pending_tip"),s=this.iconPack.leave_stage,i["red-icon"]=!1):"ACCEPTED"===this.stageStatus?(t=this.t("stage_request.leave_stage"),e=this.t("stage_request.leave_tip"),s=this.iconPack.leave_stage,i["red-icon"]=!1,a=!1):"DENIED"===this.stageStatus?(t=this.t("stage_request.denied"),e=this.t("stage_request.denied_tip"),s=this.iconPack.join_stage,i["red-icon"]=!1,a=!0):(t=this.t("stage_request.request"),e=this.canPresent?this.t("stage_request.request"):this.t("stage_request.request_tip"),s=this.iconPack.join_stage,a=!1),{tooltipLabel:e,label:t,icon:s,classList:i,disabled:a}}render(){if(!this.requestProduce&&!this.canPresent)return null;if("WEBINAR"!==this.meeting.self.config.viewType)return null;const{tooltipLabel:e,label:t,icon:s,classList:a,disabled:n}=this.getState();return(0,i.h)(i.H,{title:t},(0,i.h)("dyte-tooltip",{placement:"top",kind:"block",label:e,delay:600,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,variant:this.variant,label:t,icon:s,class:a,onClick:this.stageCallback,disabled:n,showWarning:!1})))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);