"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[20261,42642],{42642:(t,i,e)=>{e.r(i),e.d(i,{dyte_simple_grid:()=>d});var s=e(72944),n=e(93514),a=e(17073),o=e(74157),h=e(17213),r=e(37895),p=e(79379),l=e(1821);const d=class{constructor(t){(0,s.r)(this,t),this.setHostDimensions=()=>{const{clientWidth:t,clientHeight:i}=this.host;this.dimensions={width:t,height:i}},this.onParticipantTileLoad=t=>{var i,e,s;if(!this.meeting)return;const{participant:n,videoElement:a}=t.detail;n&&a&&(null===(i=this.meeting.participants.pip)||void 0===i||i.addSource(n.id,a,n.videoEnabled,!1,null!==(e=n.name)&&void 0!==e?e:(0,l.g)(n.name)),n.videoEnabled&&(null===(s=this.meeting.participants.pip)||void 0===s||s.enableSource(n.id)))},this.onParticipantTileUnload=t=>{var i;if(!this.meeting)return;const e=t.detail;null===(i=this.meeting.participants.pip)||void 0===i||i.removeSource(e.id)},this.participants=[],this.aspectRatio="16:9",this.gap=8,this.size=void 0,this.meeting=void 0,this.states=void 0,this.config=n.d,this.iconPack=a.d,this.t=(0,o.u)(),this.dimensions={width:0,height:0}}connectedCallback(){this.resizeObserver=new p.i(this.setHostDimensions),this.resizeObserver.observe(this.host)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const t={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t},{width:i,height:e,getPosition:n}=(0,r.u)({dimensions:this.dimensions,count:this.participants.length,aspectRatio:this.aspectRatio,gap:this.gap});return(0,s.h)(s.H,null,this.participants.map(((a,o)=>{const{top:r,left:p}=n(o);return(0,s.h)(h.R,{element:"dyte-participant-tile",defaults:t,props:{participant:a,style:{position:"absolute",top:`${r}px`,left:`${p}px`,width:`${i}px`,height:`${e}px`},key:a.id,"data-participant":a.id,onTileLoad:this.onParticipantTileLoad,onTileUnload:this.onParticipantTileUnload},childProps:{participant:a},deepProps:!0})})),(0,s.h)("slot",null))}get host(){return(0,s.a)(this)}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block;height:100%;width:100%}"},1821:(t,i,e)=>{e.d(i,{a:()=>a,f:()=>o,g:()=>p,h:()=>n,s:()=>s});const s=(t,i=20)=>null==t?"":t.length>i?`${t.substring(0,i)}...`:t,n=t=>/^\p{Emoji}+$/u.test(t)&&!/^\d+$/.test(t),a=t=>(null==t?void 0:t.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":t,o=t=>""===(t=null==t?void 0:t.trim())?"Participant":t,h=new RegExp(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/,"g"),r=new RegExp(/\s+/);function p(t,i=2){return t.replace(h,"").trim().split(r).slice(0,i).map((t=>t.charAt(0))).join("").toUpperCase()}}}]);