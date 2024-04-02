"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[95463],{93514:(e,t,i)=>{i.d(t,{d:()=>a});const a={designTokens:{spacingBase:4,googleFont:"Inter"},styles:{"dyte-header":{display:"grid",height:"48px",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"dyte-header.sm":{display:"grid",gridArea:"header",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"div#header-left":{display:"flex",alignItems:"center",height:"48px",wordBreak:"break-all"},"dyte-logo":{height:"26px"},"div#header-center":{display:"flex",alignItems:"center",justifyContent:"center",wordBreak:"break-all"},"div#header-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-stage":{display:"flex",flex:"1"},"dyte-grid":{flex:"1",height:"auto"},"dyte-controlbar":{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr",alignItems:"center",padding:"8px"},"dyte-controlbar.sm":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"dyte-controlbar.md":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"div#controlbar-left":{display:"flex",alignItems:"center"},"div#controlbar-center":{display:"flex",alignItems:"center",position:"relative",overflow:"visible",justifyContent:"center"},"div#controlbar-mobile":{display:"flex",flex:"1",alignItems:"center",justifyContent:"center"},"div#controlbar-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-settings":{width:"720px",height:"480px"},"dyte-debugger":{width:"720px",height:"480px"},"dyte-breakout-rooms-manager":{minHeight:"400px",minWidth:"500px",maxWidth:"80%",maxHeight:"480px"},"div#setupcontrols-media":{position:"absolute",bottom:"8px",right:"8px",display:"flex"},"div#setupcontrols-settings":{position:"absolute",top:"8px",right:"8px"},"dyte-meeting-title.sm":{marginLeft:"0"},"dyte-clock":{marginRight:"0"}},root:{"dyte-meeting":{state:"meeting",states:["activeSidebar","activeAI"]},"dyte-meeting[meeting=waiting]":["dyte-waiting-screen"],"dyte-meeting[meeting=idle]":["dyte-idle-screen"],"dyte-meeting[meeting=setup]":["dyte-setup-screen","dyte-dialog-manager"],"dyte-meeting[meeting=joined]":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager"],"dyte-meeting[meeting=joined].activeSidebar.sm":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeSidebar.md":{add:[["dyte-sidebar",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.sm":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=joined].activeAI.md":{add:[["dyte-ai",{view:"full-screen"}]]},"dyte-meeting[meeting=ended]":["dyte-ended-screen"],"dyte-header":["div#header-left","div#header-center","div#header-right"],"dyte-header.sm":{remove:["div#header-center"]},"div#header-left":["dyte-logo","dyte-recording-indicator","dyte-livestream-indicator"],"div#header-center":["dyte-meeting-title"],"div#header-right":["dyte-grid-pagination","dyte-clock","dyte-participant-count","dyte-viewer-count"],"div#header-left.sm":["dyte-meeting-title","dyte-recording-indicator","dyte-livestream-indicator"],"dyte-stage":{states:["activeSidebar","activeAI"],children:["dyte-grid","dyte-notifications","dyte-transcripts"]},"dyte-stage.activeSidebar":{add:[["dyte-sidebar",{view:"sidebar"}]]},"dyte-stage.activeSidebar.sm":{remove:["dyte-sidebar"]},"dyte-stage.activeAI":{add:[["dyte-ai",{view:"sidebar"}]]},"dyte-stage.activeAI.sm":{remove:["dyte-ai"]},"dyte-grid":{states:["activeScreenShare","activePlugin","activeSpotlight"],children:["dyte-simple-grid"]},"dyte-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-grid.activeScreenShare":["dyte-mixed-grid"],"dyte-grid.activePlugin":["dyte-mixed-grid"],"dyte-grid.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-mixed-grid":{states:["activeSpotlight"],children:["dyte-simple-grid"]},"dyte-mixed-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-participant-tile":{state:"meeting",children:["dyte-name-tag","dyte-avatar","dyte-network-indicator"]},"dyte-participant-setup":["dyte-avatar","div#setupcontrols-media"],"dyte-participant-tile[meeting=setup]":["dyte-avatar","div#setupcontrols-settings","div#setupcontrols-media"],"div#setupcontrols-media":[["dyte-mic-toggle",{size:"sm"}],["dyte-camera-toggle",{size:"sm"}]],"div#setupcontrols-settings":[["dyte-settings-toggle",{size:"sm"}]],"dyte-screenshare-view":{children:["dyte-name-tag","dyte-network-indicator"]},"dyte-name-tag":[["dyte-audio-visualizer",{slot:"start"}]],"dyte-controlbar":{states:["activeMoreMenu"],props:{variant:"solid"},children:["div#controlbar-left","div#controlbar-center","div#controlbar-right"]},"dyte-more-toggle":{states:["activeMoreMenu"],children:[]},"dyte-controlbar.sm":["div#controlbar-mobile"],"dyte-controlbar.md":["div#controlbar-mobile"],"dyte-more-toggle.activeMoreMenu":[["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-caption-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-recording-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-debugger-toggle",{variant:"horizontal"}]],"dyte-more-toggle.activeMoreMenu.sm":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-caption-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}],["dyte-debugger-toggle",{variant:"horizontal"}]],"dyte-more-toggle.activeMoreMenu.md":[["dyte-chat-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-participants-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-polls-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-plugins-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-fullscreen-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-screen-share-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-pip-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-caption-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-mute-all-button",{variant:"horizontal",slot:"more-elements"}],["dyte-breakout-rooms-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-settings-toggle",{variant:"horizontal",slot:"more-elements"}],["dyte-ai-toggle",{variant:"horizontal"}],["dyte-debugger-toggle",{variant:"horizontal"}]],"div#controlbar-mobile":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-leave-button","dyte-more-toggle"],"div#controlbar-left":["dyte-settings-toggle","dyte-screen-share-toggle","dyte-livestream-toggle"],"div#controlbar-center":["dyte-mic-toggle","dyte-camera-toggle","dyte-webinar-stage-toggle","dyte-stage-toggle","dyte-more-toggle","dyte-leave-button"],"div#controlbar-right":["dyte-chat-toggle","dyte-polls-toggle","dyte-participants-toggle","dyte-plugins-toggle","dyte-ai-toggle"]},config:{notification_sounds:{participant_left:!1},participant_joined_sound_notification_limit:10,participant_chat_message_sound_notification_limit:10,videoFit:"cover"}}},95463:(e,t,i)=>{i.r(t),i.d(t,{dyte_participants_stage_list:()=>l});var a=i(72944),r=i(17073),s=i(74157),n=i(26468),o=(i(60064),i(93514)),d=(i(94370),i(55055),i(17213));i(70694),i(64383);const l=class{constructor(e){(0,a.r)(this,e),this.updateStageList=()=>{var e,t,i;"LIVESTREAM"===(null===(e=this.meeting)||void 0===e?void 0:e.meta.viewType)?this.showStageList="ON_STAGE"===(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===i?void 0:i.status):this.showStageList=!0,this.getParticipants(this.search)},this.meeting=void 0,this.config=o.d,this.size=void 0,this.iconPack=r.d,this.view="sidebar",this.t=(0,s.u)(),this.search="",this.participants=[],this.showStageList=!1}connectedCallback(){this.meetingChanged(this.meeting),this.searchChanged(this.search)}disconnectedCallback(){const{participants:e,stage:t}=this.meeting;null!=this.meeting&&(this.participantJoinedListener&&this.meeting.participants.joined.removeListener("participantJoined",this.participantJoinedListener),this.participantLeftListener&&this.meeting.participants.joined.removeListener("participantLeft",this.participantLeftListener),e.joined.removeListener("stageStatusUpdate",this.updateStageList),null==t||t.removeListener("stageStatusUpdate",this.updateStageList))}meetingChanged(e){null!=e&&(this.participantJoinedListener=e=>{if("ON_STAGE"!==e.stageStatus)return;const t=this.search.toLowerCase();e.name.toLowerCase().includes(t)&&e.id.toLowerCase().includes(t)&&(this.participants=[...this.participants.filter((t=>t.id!==e.id)),e])},this.participantLeftListener=e=>{this.participants=this.participants.filter((t=>t.id!==e.id))},e.participants.joined.addListener("participantJoined",this.participantJoinedListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),this.updateStageList(),null==e||e.participants.joined.on("stageStatusUpdate",this.updateStageList),null==e||e.stage.on("stageStatusUpdate",this.updateStageList))}searchChanged(e){this.getParticipants(e)}getParticipants(e=this.search){let t="ON_STAGE"===this.meeting.stage.status?[this.meeting.self]:[];t=[...t,...this.meeting.participants.joined.toArray().filter((e=>"ON_STAGE"===e.stageStatus))],this.participants=""===e?t:t.filter((t=>{var i;return(null!==(i=t.name)&&void 0!==i?i:t.id).toLowerCase().includes(e.toLowerCase())}))}render(){if(!this.showStageList)return;const e={meeting:this.meeting,view:this.view,t:this.t,config:this.config,states:n.s,size:this.size,iconPack:this.iconPack};return(0,a.h)(a.H,null,(0,a.h)("div",{class:"participants-container"},(0,a.h)("div",{class:"heading-count",part:"heading-count"},this.t("participants")," (",this.participants.length,")"),(0,a.h)("ul",{class:"participants",part:"participants"},this.participants.map((t=>(0,a.h)(d.R,{element:"dyte-participant",defaults:e,props:{role:"listitem",participant:t,key:t.id},childProps:Object.assign(Object.assign({},e),{participant:t,size:this.size}),deepProps:!0}))),0===this.participants.length&&(0,a.h)("div",{class:"empty-message",part:"empty-message"},this.search.length>0?this.t("search.could_not_find"):this.t("search.empty")))))}static get watchers(){return{meeting:["meetingChanged"],search:["searchChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;width:100%;flex-direction:column;font-size:14px}.participants-container{margin-bottom:var(--dyte-space-4, 16px);width:100%}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.empty-message{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}dyte-participant{width:100%}"},17213:(e,t,i)=>{i.d(t,{R:()=>d,l:()=>o});var a=i(72944);const r=({element:e,size:t,states:i={},config:a={}})=>{let r=[];const s=null==a?void 0:a.root[e],n=e=>{r.push(e),"string"==typeof t&&r.push(`${e}.${t}`)};if(n(e),"object"==typeof s&&!Array.isArray(s)&&null!==s){const{state:t,states:a}=s;let r=e,o=[];if(Array.isArray(a)){o=a.filter((e=>i[e])),o.sort();for(const e of o)n(`${r}.${e}`);if(o.length>1){n([r,...o].join("."))}}if("string"==typeof t){const a=`${e}[${t}=${i[t]}]`;n(a);for(const e of o)n(`${a}.${e}`);if(o.length>1){n([a,...o].join("."))}}}return r},s=({selectors:e,root:t})=>{if(!t||!Array.isArray(e))return[];let i=[];for(const a of e){const e=t[a];if(Array.isArray(e))i=[...e];else if(e){if(e.children&&(i=[...e.children]),Array.isArray(e.remove))for(const t of e.remove)i=i.filter((e=>"string"==typeof e?e!==t:!Array.isArray(e)||e[0]!==t));if(e.addBefore)for(const[t,a]of Object.entries(e.addBefore)){const e=i.findIndex((e=>"string"==typeof e?e===t:!!Array.isArray(e)&&e[0]===t));e>=0&&i.splice(e,0,...a)}Array.isArray(e.add)&&(i=i.concat(e.add)),Array.isArray(e.prepend)&&(i=e.prepend.concat(i))}}return i},n=({elements:e,defaults:t,props:i={},deepProps:r=!1,elementProps:s={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,a.h)(d,{element:e,defaults:t,props:i,childProps:r&&i,elementProps:s}))):null,o=({element:e,defaults:t,props:i={},elementProps:a={}})=>{var n;const{config:o,size:d,states:l}=t;let g,c={},p=[];Array.isArray(e)?[g,c,...p]=e:g=e;const y=null===(n=null==o?void 0:o.root)||void 0===n?void 0:n[g];null!=y&&"props"in y&&(i=Object.assign(Object.assign({},y.props),i)),i=Object.assign(Object.assign({},i),c),g in a&&(i=Object.assign(Object.assign({},i),a[g]));const m=r({element:g,size:d,states:l,config:o});return s({selectors:m,root:o.root}).length},d=({element:e,defaults:t,childProps:i={},props:o={},onlyChildren:d=!1,asHost:l=!1,deepProps:g=!1,elementProps:c={}},p)=>{var y;const{config:m,size:h,states:v}=t;let u,f={},b=[];Array.isArray(e)?[u,f,...b]=e:u=e;const x=null===(y=null==m?void 0:m.root)||void 0===y?void 0:y[u];null!=x&&"props"in x&&(o=Object.assign(Object.assign({},x.props),o)),o=Object.assign(Object.assign({},o),f),u in c&&(o=Object.assign(Object.assign({},o),c[u]));const z=r({element:u,size:h,states:v,config:m}),A=s({selectors:z,root:m.root});if(d)return(0,a.h)(n,{elements:A,defaults:t,props:i,deepProps:g,elementProps:c});const j=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const i={};for(const a of e){const e=t[a];null!=e&&Object.assign(i,e)}return i})({selectors:z,styles:m.styles});if(l)return(0,a.h)(a.H,Object.assign({},t,{style:j},o),(0,a.h)(n,{elements:A,defaults:t,props:i,deepProps:g,elementProps:c}),p,b.map((e=>{if(Array.isArray(e)){const[i,r]=e;return(0,a.h)(i,Object.assign({},t,r))}return e})));if(["dyte-header","dyte-controlbar"].includes(u)&&(o.disableRender=!0),u.startsWith("dyte-"))return(0,a.h)(u,Object.assign({},t,{style:j},o),(0,a.h)(n,{elements:A,defaults:t,props:i,deepProps:g,elementProps:c}),p,b.map((e=>{if(Array.isArray(e)){const[i,r]=e;return(0,a.h)(i,Object.assign({},t,r))}return e})));{const[e,r]=u.split("#");return(0,a.h)(e,Object.assign({id:r,style:j},o),(0,a.h)(n,{elements:A,defaults:t,props:i,deepProps:g,elementProps:c}),p,b.map((e=>{if(Array.isArray(e)){const[i,r]=e;return(0,a.h)(i,Object.assign({},t,r))}return e})))}}}}]);