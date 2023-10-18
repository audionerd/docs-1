"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[22468],{3905:(t,e,n)=>{n.r(e),n.d(e,{MDXContext:()=>i,MDXProvider:()=>u,mdx:()=>d,useMDXComponents:()=>x,withMDXComponents:()=>l});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),l=function(t){return function(e){var n=x(e.components);return r.createElement(t,o({},e,{components:n}))}},x=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=x(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),l=x(n),u=a,f=l["".concat(c,".").concat(u)]||l[u]||m[u]||o;return n?r.createElement(f,p(p({ref:e},i),{},{components:n})):r.createElement(f,p({ref:e},i))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=f;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,c[1]=p;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1150:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},c=void 0,p={unversionedId:"xstate.contextfactory",id:"xstate.contextfactory",title:"xstate.contextfactory",description:"Home &gt; xstate &gt; ContextFactory",source:"@site/api/xstate/xstate.contextfactory.md",sourceDirName:".",slug:"/xstate.contextfactory",permalink:"/statelyai-docs/api/xstate/next/xstate.contextfactory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.compute",permalink:"/statelyai-docs/api/xstate/next/xstate.compute"},next:{title:"xstate.contextfrom",permalink:"/statelyai-docs/api/xstate/next/xstate.contextfrom"}},s={},i=[{value:"ContextFactory type",id:"contextfactory-type",level:2}],l={toc:i};function x(t){let{components:e,...n}=t;return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.contextfactory"},"ContextFactory")),(0,a.mdx)("h2",{id:"contextfactory-type"},"ContextFactory type"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type ContextFactory<TContext extends MachineContext, TActor extends ProvidedActor, TInput> = ({ spawn, input }: {\n    spawn: Spawner<TActor>;\n    input: TInput;\n}) => TContext;\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"References:")," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.machinecontext"},"MachineContext"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.providedactor"},"ProvidedActor"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.spawner"},"Spawner")))}x.isMDXComponent=!0}}]);