"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[96201,18582],{18582:(e,t,s)=>{s.r(t),s.d(t,{dyte_meeting:()=>m});var i=s(72944),n=s(68759),o=s(20037),r=s(74157),a=s(93514),d=s(17213),c=s(26468),l=(s(60064),s(94370),s(55055)),h=s(79379),g=s(17073);s(84898),s(49583),s(64383),s(70694);const m=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.roomJoinedListener=()=>{this.setStates({meeting:"joined"}),c.s.meeting="joined"},this.socketServiceRoomJoinedListener=()=>{"ON_STAGE"!==this.meeting.stage.status&&void 0!==this.meeting.stage.status&&(this.setStates({meeting:"joined"}),c.s.meeting="joined")},this.waitlistedListener=()=>{this.setStates({meeting:"waiting"}),c.s.meeting="waiting"},this.roomLeftListener=({state:e})=>{const t=this.states||c.s;if("disconnected"===(null==t?void 0:t.roomLeftState))return this.setStates({meeting:"ended",roomLeftState:e}),void(c.s.meeting="ended");this.setStates({meeting:"ended",roomLeftState:e}),c.s.meeting="ended",c.s.roomLeftState=e},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{if(["audio","video"].includes(e)){if("ACCEPTED"===t||"NOT_REQUESTED"===t||c.s.activeDebugger)return;const s={enabled:!0,kind:e};this.setStates({activePermissionsMessage:s}),c.s.activePermissionsMessage=s}},this.joinStateAcceptedListener=()=>{this.setStates({activeJoinStage:!0}),this.stateUpdate.emit({activeJoinStage:!0}),c.s.activeJoinStage=!0},this.loadConfigFromPreset=!0,this.applyDesignSystem=!0,this.mode="fixed",this.leaveOnUnmount=!1,this.meeting=void 0,this.showSetupScreen=void 0,this.t=(0,r.u)(),this.config=a.d,this.iconPackUrl=void 0,this.size=void 0,this.gridLayout="row",this.states={meeting:"idle",prefs:(0,l.g)()},this.iconPack=g.d}connectedCallback(){var e;this.resizeObserver=new h.i((()=>this.handleResize())),this.resizeObserver.observe(this.host),this.applyDesignSystem&&null!=(null===(e=this.config)||void 0===e?void 0:e.designTokens)&&"undefined"!=typeof document&&(0,n.p)(document.documentElement,this.config.designTokens),this.meetingChanged(this.meeting),this.iconPackUrlChanged(this.iconPackUrl)}clearListeners(e){null!=e&&(e.self.removeListener("roomJoined",this.roomJoinedListener),e.self.removeListener("socketServiceRoomJoined",this.roomJoinedListener),e.meta.removeListener("socketReconnected",this.roomJoinedListener),e.self.removeListener("roomLeft",this.roomLeftListener),e.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),e.self.removeListener("waitlisted",this.waitlistedListener),e.self.removeListener("joinStageRequestAccepted",this.joinStateAcceptedListener))}disconnectedCallback(){var e;this.leaveOnUnmount&&(null===(e=this.meeting)||void 0===e||e.leaveRoom()),this.resizeObserver.disconnect(),this.clearListeners(this.meeting)}meetingChanged(e){var t,s;if(null!=e){if(this.setStates({viewType:e.meta.viewType}),this.loadConfigFromPreset&&null!=e.self.config){const s=e.self.config,{config:i,data:o}=(0,n.g)(s,e);this.config===a.d&&(this.config=i),null==this.showSetupScreen&&(this.showSetupScreen=o.showSetupScreen),e.connectedMeetings.supportsConnectedMeetings&&(null===(t=c.s.activeBreakoutRoomsManager)||void 0===t?void 0:t.destinationMeetingId)&&(this.showSetupScreen=!1)}this.applyDesignSystem&&null!=(null===(s=this.config)||void 0===s?void 0:s.designTokens)&&"undefined"!=typeof document&&(0,n.p)(document.documentElement,this.config.designTokens),"LIVESTREAM"===e.meta.viewType&&e.self.addListener("socketServiceRoomJoined",this.socketServiceRoomJoinedListener),e.self.addListener("roomJoined",this.roomJoinedListener),e.self.addListener("waitlisted",this.waitlistedListener),e.self.addListener("roomLeft",this.roomLeftListener),e.self.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),e.self.addListener("joinStageRequestAccepted",this.joinStateAcceptedListener),e.connectedMeetings.supportsConnectedMeetings&&e.connectedMeetings.once("changingMeeting",this.handleChangingMeeting),e.self.roomJoined?(this.states=Object.assign(Object.assign({},this.states),{meeting:"joined"}),c.s.meeting="joined"):this.showSetupScreen?(this.states=Object.assign(Object.assign({},this.states),{meeting:"setup"}),c.s.meeting="setup"):e.joinRoom()}}async iconPackUrlChanged(e){this.iconPack=await(0,o.g)(e)}listenState(e){e.stopPropagation(),this.setStates(e.detail)}handleChangingMeeting(e){c.s.activeBreakoutRoomsManager=Object.assign(Object.assign({},c.s.activeBreakoutRoomsManager),{destinationMeetingId:e})}handleResize(){this.size=(0,o.a)(this.host.clientWidth)}setStates(e){const t=Object.assign({},this.states);(0,n.m)(t,e),this.states=t}render(){var e,t;const s={meeting:this.meeting,size:this.size,states:this.states||c.s,config:this.config,iconPack:this.iconPack,t:this.t},n={"dyte-grid":{layout:this.gridLayout}};return"CHAT"===(null===(t=null===(e=this.meeting)||void 0===e?void 0:e.meta)||void 0===t?void 0:t.viewType)?(0,i.h)(d.R,{element:"dyte-chat",defaults:s}):(0,i.h)(d.R,{element:"dyte-meeting",defaults:s,asHost:!0,elementProps:n})}get host(){return(0,i.a)(this)}static get watchers(){return{meeting:["meetingChanged"],iconPackUrl:["iconPackUrlChanged"]}}};m.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));overflow:hidden;position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);height:100%;width:100%}:host([mode='fill']){position:relative}"},17213:(e,t,s)=>{s.d(t,{R:()=>d,l:()=>a});var i=s(72944);const n=({element:e,size:t,states:s={},config:i={}})=>{let n=[];const o=null==i?void 0:i.root[e],r=e=>{n.push(e),"string"==typeof t&&n.push(`${e}.${t}`)};if(r(e),"object"==typeof o&&!Array.isArray(o)&&null!==o){const{state:t,states:i}=o;let n=e,a=[];if(Array.isArray(i)){a=i.filter((e=>s[e])),a.sort();for(const e of a)r(`${n}.${e}`);if(a.length>1){r([n,...a].join("."))}}if("string"==typeof t){const i=`${e}[${t}=${s[t]}]`;r(i);for(const e of a)r(`${i}.${e}`);if(a.length>1){r([i,...a].join("."))}}}return n},o=({selectors:e,root:t})=>{if(!t||!Array.isArray(e))return[];let s=[];for(const i of e){const e=t[i];if(Array.isArray(e))s=[...e];else if(e){if(e.children&&(s=[...e.children]),Array.isArray(e.remove))for(const t of e.remove)s=s.filter((e=>"string"==typeof e?e!==t:!Array.isArray(e)||e[0]!==t));if(e.addBefore)for(const[t,i]of Object.entries(e.addBefore)){const e=s.findIndex((e=>"string"==typeof e?e===t:!!Array.isArray(e)&&e[0]===t));e>=0&&s.splice(e,0,...i)}Array.isArray(e.add)&&(s=s.concat(e.add)),Array.isArray(e.prepend)&&(s=e.prepend.concat(s))}}return s},r=({elements:e,defaults:t,props:s={},deepProps:n=!1,elementProps:o={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,i.h)(d,{element:e,defaults:t,props:s,childProps:n&&s,elementProps:o}))):null,a=({element:e,defaults:t,props:s={},elementProps:i={}})=>{var r;const{config:a,size:d,states:c}=t;let l,h={},g=[];Array.isArray(e)?[l,h,...g]=e:l=e;const m=null===(r=null==a?void 0:a.root)||void 0===r?void 0:r[l];null!=m&&"props"in m&&(s=Object.assign(Object.assign({},m.props),s)),s=Object.assign(Object.assign({},s),h),l in i&&(s=Object.assign(Object.assign({},s),i[l]));const p=n({element:l,size:d,states:c,config:a});return o({selectors:p,root:a.root}).length},d=({element:e,defaults:t,childProps:s={},props:a={},onlyChildren:d=!1,asHost:c=!1,deepProps:l=!1,elementProps:h={}},g)=>{var m;const{config:p,size:f,states:u}=t;let y,v={},b=[];Array.isArray(e)?[y,v,...b]=e:y=e;const L=null===(m=null==p?void 0:p.root)||void 0===m?void 0:m[y];null!=L&&"props"in L&&(a=Object.assign(Object.assign({},L.props),a)),a=Object.assign(Object.assign({},a),v),y in h&&(a=Object.assign(Object.assign({},a),h[y]));const S=n({element:y,size:f,states:u,config:p}),j=o({selectors:S,root:p.root});if(d)return(0,i.h)(r,{elements:j,defaults:t,props:s,deepProps:l,elementProps:h});const A=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const s={};for(const i of e){const e=t[i];null!=e&&Object.assign(s,e)}return s})({selectors:S,styles:p.styles});if(c)return(0,i.h)(i.H,Object.assign({},t,{style:A},a),(0,i.h)(r,{elements:j,defaults:t,props:s,deepProps:l,elementProps:h}),g,b.map((e=>{if(Array.isArray(e)){const[s,n]=e;return(0,i.h)(s,Object.assign({},t,n))}return e})));if(["dyte-header","dyte-controlbar"].includes(y)&&(a.disableRender=!0),y.startsWith("dyte-"))return(0,i.h)(y,Object.assign({},t,{style:A},a),(0,i.h)(r,{elements:j,defaults:t,props:s,deepProps:l,elementProps:h}),g,b.map((e=>{if(Array.isArray(e)){const[s,n]=e;return(0,i.h)(s,Object.assign({},t,n))}return e})));{const[e,n]=y.split("#");return(0,i.h)(e,Object.assign({id:n,style:A},a),(0,i.h)(r,{elements:j,defaults:t,props:s,deepProps:l,elementProps:h}),g,b.map((e=>{if(Array.isArray(e)){const[s,n]=e;return(0,i.h)(s,Object.assign({},t,n))}return e})))}}},20037:(e,t,s)=>{s.d(t,{a:()=>a,g:()=>n});var i=s(17073);const n=async e=>{if(null==e)return i.d;try{const t=await fetch(e);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},o=768,r=1080,a=e=>e>=r?"lg":e>=o?"md":"sm"}}]);