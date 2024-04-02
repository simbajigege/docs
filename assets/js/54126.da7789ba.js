"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[54126,31745],{54126:(t,e,s)=>{s.r(e),s.d(e,{dyte_stage_toggle:()=>o});var i=s(72944),a=s(26468),n=(s(60064),s(94370),s(17073)),l=s(74157);s(55055),s(70694),s(64383);const o=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.stageCallback=async()=>{var t,e,s,i,n,l,o;const d=null===(t=this.meeting.stage)||void 0===t?void 0:t.status;"ON_STAGE"===d&&await(null===(s=null===(e=null==this?void 0:this.meeting)||void 0===e?void 0:e.stage)||void 0===s?void 0:s.leave()),"OFF_STAGE"===d&&(null===(n=null===(i=null==this?void 0:this.meeting)||void 0===i?void 0:i.stage)||void 0===n||n.requestAccess(),(t=>{var e,s;return(null===(e=null==t?void 0:t.self)||void 0===e?void 0:e.permissions.stageEnabled)&&"ALLOWED"===(null===(s=null==t?void 0:t.self)||void 0===s?void 0:s.permissions.stageAccess)})(this.meeting)&&(this.stateUpdate.emit({activeJoinStage:!0}),a.s.activeJoinStage=!0)),"REQUESTED_TO_JOIN_STAGE"===d&&(null===(o=null===(l=null==this?void 0:this.meeting)||void 0===l?void 0:l.stage)||void 0===o||o.cancelRequestAccess())},this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=n.d,this.stageStatus="OFF_STAGE",this.state={label:"",disabled:!1,icon:""},this.t=(0,l.u)()}connectedCallback(){this.meetingChanged(this.meeting)}stageStatusHandler(t,e){this.stageStatus=e,"ACCEPTED_TO_JOIN_STAGE"===e&&(t.self.setupTracks({audio:!1,video:!1}),this.stateUpdate.emit({activeJoinStage:!0}),a.s.activeJoinStage=!0),this.state=this.getState()}disconnectedCallback(){var t,e;null===(e=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===e||e.removeListener("stageStatusUpdate",(t=>this.stageStatusHandler(this.meeting,t)))}meetingChanged(t){var e,s,i,a;null!=t&&(this.stageStatus=null===(e=t.stage)||void 0===e?void 0:e.status,this.stageStatusHandler(t,null===(s=t.stage)||void 0===s?void 0:s.status),null===(a=null===(i=this.meeting)||void 0===i?void 0:i.stage)||void 0===a||a.on("stageStatusUpdate",(e=>this.stageStatusHandler(t,e))))}getState(){let t="",e="",s=!1;switch(this.stageStatus){case"ON_STAGE":e=this.iconPack.leave_stage,t=this.t("stage_request.leave_stage"),s=!1;break;case"ACCEPTED_TO_JOIN_STAGE":e=this.iconPack.join_stage,t=this.t("stage_request.request"),s=!0;break;case"REQUESTED_TO_JOIN_STAGE":e=this.iconPack.join_stage,t=this.t("stage_request.requested"),s=!1;break;default:e=this.iconPack.join_stage,t=this.t("stage_request.request"),s=!1}return{label:t,disabled:s,icon:e}}render(){var t,e,s;if(t=this.meeting,(null===(e=null==t?void 0:t.self)||void 0===e?void 0:e.permissions.stageEnabled)&&"NOT_ALLOWED"!==(null===(s=null==t?void 0:t.self)||void 0===s?void 0:s.permissions.stageAccess))return(0,i.h)(i.H,{title:this.state.label},(0,i.h)("dyte-tooltip",{placement:"top",kind:"block",label:this.state.label,delay:600,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,variant:this.variant,label:this.state.label,icon:this.state.icon,onClick:this.stageCallback,disabled:this.state.disabled,showWarning:!1})))}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);