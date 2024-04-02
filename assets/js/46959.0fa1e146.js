"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[46959,69340],{69340:(e,t,i)=>{i.r(t),i.d(t,{dyte_plugins_toggle:()=>l});var s=i(72944),n=i(17073),a=i(74157),r=i(26468),o=i(37545);i(55055),i(94370),i(64383);const l=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.updateCanView=()=>{this.canViewPlugins=(0,o.b)(this.meeting)},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,a.u)(),this.pluginsActive=!1,this.canViewPlugins=!1}disconnectedCallback(){var e,t,i,s;this.removeStateChangeListener&&this.removeStateChangeListener(),null===(t=null===(e=this.meeting)||void 0===e?void 0:e.stage)||void 0===t||t.removeListener("stageStatusUpdate",this.updateCanView),null===(s=null===(i=this.meeting)||void 0===i?void 0:i.self)||void 0===s||s.permissions.removeListener("pluginsUpdate",this.updateCanView)}connectedCallback(){this.statesChanged(this.states),this.meetingChanged(this.meeting),this.removeStateChangeListener=(0,r.o)("sidebar",(()=>this.statesChanged()))}meetingChanged(e){var t,i;null!=e&&(this.canViewPlugins=(0,o.b)(e),null===(t=null==e?void 0:e.stage)||void 0===t||t.on("stageStatusUpdate",this.updateCanView),null===(i=null==e?void 0:e.self)||void 0===i||i.permissions.addListener("pluginsUpdate",this.updateCanView))}statesChanged(e){const t=e||r.s;null!=t&&(this.pluginsActive=!0===t.activeSidebar&&"plugins"===t.sidebar)}togglePlugins(){const e=this.states||r.s;this.pluginsActive=!((null==e?void 0:e.activeSidebar)&&"plugins"===(null==e?void 0:e.sidebar)),this.stateUpdate.emit({activeSidebar:this.pluginsActive,sidebar:this.pluginsActive?"plugins":void 0,activeMoreMenu:!1,activeAI:!1}),r.s.activeSidebar=this.pluginsActive,r.s.sidebar=this.pluginsActive?"plugins":void 0,r.s.activeMoreMenu=!1,r.s.activeAI=!1}render(){if(!this.canViewPlugins)return;const e=this.t("plugins");return(0,s.h)(s.H,{title:e},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.pluginsActive},onClick:()=>this.togglePlugins(),icon:this.iconPack.rocket,label:e,variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},64383:(e,t,i)=>{i.d(t,{F:()=>n,d:()=>o,i:()=>a,u:()=>r});var s=i(94370);const n={PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE:"play_participant_tile_video_on_pause",DISABLE_EMOJI_PICKER:"disable_emoji_picker",FEAT_PAGINATED_CHAT:"feat_paginated_chat",LOG_PLAYING_FAILURES:"log_playing_failures",FEAT_CHANNEL_CHAT:"feat_channel_chat",FEAT_PARTICIPANT_LIST:"feat_participant_list",DISABLE_KICKING:"disable_kicking",ADMIN_CANTREMOVE_ADMIN:"admin_cantremove_admin",CANTINVITE_VIEWER:"cantinvite_viewer",PINNED_MESSAGES:"pinned_msgs"},a=e=>e.connectedMeetings.supportsConnectedMeetings,r=e=>{var t;return"CHAT"===(null==e?void 0:e.meta.viewType)||(0,s.s)(e)||(null===(t=null==e?void 0:e.__internals__)||void 0===t?void 0:t.features.hasFeature("feat_paginated_chat"))},o=e=>{var t,i;return(null===(t=null==e?void 0:e.__internals__)||void 0===t?void 0:t.browserSpecs.isFirefox())&&(null===(i=null==e?void 0:e.__internals__)||void 0===i?void 0:i.features.hasFeature("disable_firefox_setting_sink_id"))}},94370:(e,t,i)=>{i.d(t,{P:()=>r,a:()=>s,b:()=>o,c:()=>l,d:()=>c,i:()=>n,s:()=>a});const s=e=>!!a(e)&&("LIVESTREAM"===e.meta.viewType&&"ON_STAGE"!==e.stage.status),n=e=>{var t;return!!a(e)&&("LIVESTREAM"===e.meta.viewType&&(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.canLivestream))},a=e=>{var t;return(null===(t=null==e?void 0:e.self)||void 0===t?void 0:t.permissions.isV2)&&(null==e?void 0:e.livestream)};var r,o;!function(e){e.BUFFERING="Buffering",e.ENDED="Ended",e.IDLE="Idle",e.PLAYING="Playing",e.READY="Ready"}(r||(r={})),function(e){e.INITIALIZED="PlayerInitialized",e.QUALITY_CHANGED="PlayerQualityChanged",e.DURATION_CHANGED="PlayerDurationChanged",e.VOLUME_CHANGED="PlayerVolumeChanged",e.MUTED_CHANGED="PlayerMutedChanged",e.PLAYBACK_RATE_CHANGED="PlayerPlaybackRateChanged",e.REBUFFERING="PlayerRebuffering",e.AUDIO_BLOCKED="PlayerAudioBlocked",e.PLAYBACK_BLOCKED="PlayerPlaybackBlocked",e.ERROR="PlayerError",e.RECOVERABLE_ERROR="PlayerRecoverableError",e.ANALYTICS_EVENT="PlayerAnalyticsEvent",e.TIME_UPDATE="PlayerTimeUpdate",e.BUFFER_UPDATE="PlayerBufferUpdate",e.SEEK_COMPLETED="PlayerSeekCompleted",e.SESSION_DATA="PlayerSessionData",e.STATE_CHANGED="PlayerStateChanged",e.WORKER_ERROR="PlayerWorkerError",e.METADATA="PlayerMetadata",e.TEXT_CUE="PlayerTextCue",e.TEXT_METADATA_CUE="PlayerTextMetadataCue",e.AD_CUE="PlayerAdCue",e.STREAM_SOURCE_CUE="PlayerStreamSourceCue",e.NETWORK_UNAVAILABLE="PlayerNetworkUnavailable",e.SEGMENT_DISCONTINUITY="PlayerSegmentDiscontinuity",e.SEGMENT_METADATA="PlayerSegmentMetadata",e.PLAYER_METADATA="PlayerMetadata"}(o||(o={}));const l=[o.TIME_UPDATE,o.BUFFER_UPDATE,o.TEXT_METADATA_CUE,o.PLAYER_METADATA],c=[o.REBUFFERING,o.AUDIO_BLOCKED,o.PLAYBACK_BLOCKED,o.ERROR,o.RECOVERABLE_ERROR,o.WORKER_ERROR,o.NETWORK_UNAVAILABLE,o.ANALYTICS_EVENT,o.PLAYBACK_RATE_CHANGED,o.QUALITY_CHANGED,o.INITIALIZED]},37545:(e,t,i)=>{i.d(t,{a:()=>o,b:()=>l,c:()=>a,d:()=>r});var s=i(94370),n=i(64383);const a=e=>{if(e&&!e.chat)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.chat)return!1;const{chatPublic:i,chatPrivate:s}=e.self.permissions;return i.canSend||i.text||i.files||s.canSend||s.canReceive||s.files||s.text},r=e=>{if(e&&!e.polls)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.polls)return!1;const{polls:i}=e.self.permissions;return i.canCreate||i.canView||i.canVote},o=e=>{var t,i,a,r;if((null===(t=null==e?void 0:e.__internals__)||void 0===t?void 0:t.features.hasFeature(n.F.FEAT_PARTICIPANT_LIST))&&!(null===(i=e.self.permissions)||void 0===i?void 0:i.showParticipantList))return!1;if((0,s.s)(e)&&!(null===(a=e.self.permissions)||void 0===a?void 0:a.acceptStageRequests))return!1;if(e&&!e.participants)return!1;if("LIVESTREAM"===e.meta.viewType)return e.self.permissions.acceptStageRequests||"ON_STAGE"===(null===(r=null==e?void 0:e.stage)||void 0===r?void 0:r.status);const o=null==e?void 0:e.self.config;return!(o&&!o.controlBar.elements.participants)},l=e=>{if((0,s.a)(e))return!1;if(e&&!e.plugins)return!1;if("LIVESTREAM"===e.meta.viewType)return"ON_STAGE"===e.stage.status;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.plugins)return!1;const{plugins:i}=e.self.permissions;return i.canClose||i.canStart}},26468:(e,t,i)=>{i.d(t,{o:()=>u,s:()=>c});var s=i(72944),n=i(55055);const a=e=>!("isConnected"in e)||e.isConnected,r=((e,t)=>{let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(a))}),2e3),o=e=>"function"==typeof e?e():e,l=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:c,onChange:u}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=o(e);let s=new Map(Object.entries(null!=i?i:{}));const n={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;s=new Map(Object.entries(null!==(t=o(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},r=e=>(n.get.forEach((t=>t(e))),s.get(e)),c=(e,i)=>{const a=s.get(e);t(i,a,e)&&(s.set(e,i),n.set.forEach((t=>t(e,i,a))))},u="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>r(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,i)=>(c(t,i),!0)}),d=(e,t)=>(n[e].push(t),()=>{l(n[e],t)});return{state:u,get:r,set:c,on:d,onChange:(t,i)=>{const s=d("set",((e,s)=>{e===t&&i(s)})),n=d("reset",(()=>i(o(e)[t])));return()=>{s(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=s.get(e);n.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof s.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,s.g)();i&&((e,t,i)=>{const s=e.get(t);s?s.includes(i)||s.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(s.f)),r(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),r(e)}}})()),i})({prefs:(0,n.g)()})},55055:(e,t,i)=>{i.d(t,{a:()=>a,b:()=>l,c:()=>u,g:()=>c,s:()=>o});const s={get:(e,t,i)=>(...s)=>{try{return Reflect.get(e,t,i).apply(e,s)}catch(n){return null}}};let n;try{n=new Proxy(localStorage,s)}catch(d){n=new Proxy({},s)}const a=n,r="dyte-prefs",o=(e,t)=>{const i=JSON.parse(a.getItem(r)||"{}");i[e]=JSON.stringify(t),a.setItem("dyte-prefs",JSON.stringify(i))},l=e=>JSON.parse(a.getItem(r)||"{}")[e],c=()=>{const e=JSON.parse(a.getItem(r)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"]}},u={}}}]);