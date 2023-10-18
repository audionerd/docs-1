"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[45534],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>l});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){return function(t){var r=m(t.components);return n.createElement(e,s({},t,{components:r}))}},m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=m(r),d=a,u=l["".concat(o,".").concat(d)]||l[d]||f[d]||s;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={},o=void 0,i={unversionedId:"xstate.persistedstatefrom",id:"xstate.persistedstatefrom",title:"xstate.persistedstatefrom",description:"Home &gt; xstate &gt; PersistedStateFrom",source:"@site/api/xstate/xstate.persistedstatefrom.md",sourceDirName:".",slug:"/xstate.persistedstatefrom",permalink:"/statelyai-docs/api/xstate/next/xstate.persistedstatefrom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.persistedmachinestate",permalink:"/statelyai-docs/api/xstate/next/xstate.persistedmachinestate"},next:{title:"xstate.promiseactorlogic",permalink:"/statelyai-docs/api/xstate/next/xstate.promiseactorlogic"}},p={},c=[{value:"PersistedStateFrom type",id:"persistedstatefrom-type",level:2}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.persistedstatefrom"},"PersistedStateFrom")),(0,a.mdx)("h2",{id:"persistedstatefrom-type"},"PersistedStateFrom type"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type PersistedStateFrom<TLogic extends ActorLogic<any, any, any, any, any>> = TLogic extends ActorLogic<infer _TSnapshot, infer _TEvent, infer _TInput, infer TPersisted, infer _TSystem> ? TPersisted : never;\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"References:")," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.actorlogic"},"ActorLogic")))}m.isMDXComponent=!0}}]);