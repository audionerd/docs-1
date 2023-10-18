"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[41634],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>b,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>i});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){return function(t){var r=m(t.components);return a.createElement(e,o({},t,{components:r}))}},m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),i=m(r),b=n,d=i["".concat(s,".").concat(b)]||i[b]||u[b]||o;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,l={unversionedId:"xstate.actor._symbolobservable_",id:"xstate.actor._symbolobservable_",title:"xstate.actor._symbolobservable_",description:"Home &gt; xstate &gt; Actor &gt; \\[symbolObservable\\]",source:"@site/api/xstate/xstate.actor._symbolobservable_.md",sourceDirName:".",slug:"/xstate.actor._symbolobservable_",permalink:"/statelyai-docs/api/xstate/next/xstate.actor._symbolobservable_",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.actor._parent",permalink:"/statelyai-docs/api/xstate/next/xstate.actor._parent"},next:{title:"xstate.actor.cancel",permalink:"/statelyai-docs/api/xstate/next/xstate.actor.cancel"}},c={},p=[{value:"Actor.[symbolObservable]() method",id:"actorsymbolobservable-method",level:2}],i={toc:p};function m(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.actor"},"Actor")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.actor._symbolobservable_"},"[","symbolObservable","]")),(0,n.mdx)("h2",{id:"actorsymbolobservable-method"},"Actor.","[","symbolObservable","]","() method"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"[symbolObservable](): InteropSubscribable<SnapshotFrom<TLogic>>;\n")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Returns:")),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.interopsubscribable"},"InteropSubscribable"),"<",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.snapshotfrom"},"SnapshotFrom"),"<","TLogic",">",">"))}m.isMDXComponent=!0}}]);