"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[65999,88380],{88380:(i,t,s)=>{s.r(t),s.d(t,{dyte_spotlight_grid:()=>r});var e=s(72944),h=s(93514),d=s(37895),a=s(17073),n=s(74157),o=s(17213);const r=class{constructor(i){(0,e.r)(this,i),this.getAdaptiveSize=i=>"sm"===this.size||i>3||"md"===this.size?"sm":"md",this.layout="row",this.participants=[],this.pinnedParticipants=[],this.aspectRatio="16:9",this.gap=8,this.size=void 0,this.meeting=void 0,this.states=void 0,this.config=h.d,this.iconPack=a.d,this.t=(0,n.u)(),this.gridSize=d.d}render(){const i={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t},t=this.participants.filter((i=>this.pinnedParticipants.some((t=>t.id!=i.id))));return(0,e.h)(e.H,null,(0,e.h)("main",{part:"main"},(0,e.h)(o.R,{element:"dyte-simple-grid",defaults:i,props:{part:"main-grid",participants:this.pinnedParticipants,aspectRatio:this.aspectRatio,gap:this.gap,size:this.getAdaptiveSize(this.pinnedParticipants.length)}})),t.length>0&&(0,e.h)("aside",{part:"aside",class:this.gridSize.spotlight?`grid-width-${this.gridSize.spotlight}`:"grid-width-md"},(0,e.h)(o.R,{element:"dyte-simple-grid",defaults:i,props:{part:"aside-grid",participants:t,aspectRatio:this.aspectRatio,gap:this.gap,size:this.getAdaptiveSize(t.length)}})))}get host(){return(0,e.a)(this)}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%}main{flex:1 1 0%}.grid-width-sm{width:25%}.grid-width-md{width:50%}.grid-width-lg{width:66.666667%}:host([size='sm']),:host([size='md']){flex-direction:column}:host([size='md']) aside{max-height:var(--dyte-space-96, 384px);width:100%;max-width:100%}:host([size='md']) .grid-width-sm{height:25%}:host([size='md']) .grid-width-md{height:50%}:host([size='md']) .grid-width-lg{height:66.666667%}:host([size='sm']) aside{max-height:var(--dyte-space-96, 384px);width:100%;max-width:100%}:host([size='sm']) .grid-width-sm,:host([size='sm']) .grid-width-md,:host([size='sm']) .grid-width-lg{height:50%}:host([size='xl']) .grid-width-sm,:host([size='xl']) .grid-width-md,:host([size='xl']) .grid-width-lg{width:400px}:host([layout='column']){flex-direction:column}:host([layout='column']) main{flex:4}:host([layout='column']) aside{flex:2;max-width:100%;width:100%}"}}]);