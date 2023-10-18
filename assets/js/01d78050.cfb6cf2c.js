"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[62098],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>m,withMDXComponents:()=>l});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){return function(t){var r=m(t.components);return a.createElement(e,s({},t,{components:r}))}},m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=m(r),u=n,x=l["".concat(o,".").concat(u)]||l[u]||d[u]||s;return r?a.createElement(x,i(i({ref:t},p),{},{components:r})):a.createElement(x,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=x;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}x.displayName="MDXCreateElement"},65321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={},o=void 0,i={unversionedId:"xstate.actor.subscribe",id:"xstate.actor.subscribe",title:"xstate.actor.subscribe",description:"Home &gt; xstate &gt; Actor &gt; subscribe",source:"@site/api/xstate/xstate.actor.subscribe.md",sourceDirName:".",slug:"/xstate.actor.subscribe",permalink:"/statelyai-docs/api/xstate/next/xstate.actor.subscribe",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.actor.stop",permalink:"/statelyai-docs/api/xstate/next/xstate.actor.stop"},next:{title:"xstate.actor.subscribe_1",permalink:"/statelyai-docs/api/xstate/next/xstate.actor.subscribe_1"}},c={},p=[{value:"Actor.subscribe() method",id:"actorsubscribe-method",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.actor"},"Actor")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.actor.subscribe"},"subscribe")),(0,n.mdx)("h2",{id:"actorsubscribe-method"},"Actor.subscribe() method"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"subscribe(observer: Observer<SnapshotFrom<TLogic>>): Subscription;\n")),(0,n.mdx)("h2",{id:"parameters"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"observer"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.observer"},"Observer"),"<",(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.snapshotfrom"},"SnapshotFrom"),"<","TLogic",">",">"),(0,n.mdx)("td",{parentName:"tr",align:null})))),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Returns:")),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.subscription"},"Subscription")))}m.isMDXComponent=!0}}]);