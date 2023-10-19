"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[48692],{3905:(t,e,n)=>{n.r(e),n.d(e,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>l,withMDXComponents:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){return function(e){var n=l(e.components);return r.createElement(t,o({},e,{components:n}))}},l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=l(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,p(p({ref:e},u),{},{components:n})):r.createElement(f,p({ref:e},u))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=f;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,s[1]=p;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67202:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},s=void 0,p={unversionedId:"xstate.statenode.output",id:"xstate.statenode.output",title:"xstate.statenode.output",description:"Home &gt; xstate &gt; StateNode &gt; output",source:"@site/api/xstate/xstate.statenode.output.md",sourceDirName:".",slug:"/xstate.statenode.output",permalink:"/statelyai-docs/api/xstate/xstate.statenode.output",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.statenode.order",permalink:"/statelyai-docs/api/xstate/xstate.statenode.order"},next:{title:"xstate.statenode.ownevents",permalink:"/statelyai-docs/api/xstate/xstate.statenode.ownevents"}},i={},u=[{value:"StateNode.output property",id:"statenodeoutput-property",level:2}],c={toc:u};function l(t){let{components:e,...n}=t;return(0,a.mdx)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statenode"},"StateNode")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statenode.output"},"output")),(0,a.mdx)("h2",{id:"statenodeoutput-property"},"StateNode.output property"),(0,a.mdx)("p",null,'The output data sent with the "xstate.done.state.',"_","id","_",'" event if this is a final state node.'),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"output?: Mapper<MachineContext, EventObject, unknown, EventObject> | NonReducibleUnknown;\n")))}l.isMDXComponent=!0}}]);