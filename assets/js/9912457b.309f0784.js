"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[35936],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>i,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,l={unversionedId:"xstate.equals",id:"xstate.equals",title:"xstate.equals",description:"Home &gt; xstate &gt; Equals",source:"@site/api/xstate/xstate.equals.md",sourceDirName:".",slug:"/xstate.equals",permalink:"/statelyai-docs/api/xstate/xstate.equals",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.donestateevent.type",permalink:"/statelyai-docs/api/xstate/xstate.donestateevent.type"},next:{title:"xstate.erroractorevent.data",permalink:"/statelyai-docs/api/xstate/xstate.erroractorevent.data"}},p={},i=[{value:"Equals type",id:"equals-type",level:2}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.equals"},"Equals")),(0,a.mdx)("h2",{id:"equals-type"},"Equals type"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type Equals<A1 extends any, A2 extends any> = (<A>() => A extends A2 ? true : false) extends <A>() => A extends A1 ? true : false ? true : false;\n")))}u.isMDXComponent=!0}}]);