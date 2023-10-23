"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[58574],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>f,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"after",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"xstate.statenodeconfig.after",id:"xstate.statenodeconfig.after",title:"after",description:"StateNodeConfig.after property",source:"@site/api/xstate/xstate.statenodeconfig.after.md",sourceDirName:".",slug:"/xstate.statenodeconfig.after",permalink:"/statelyai-docs/api/xstate/xstate.statenodeconfig.after",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"after",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},c={},p=[{value:"StateNodeConfig.after property",id:"statenodeconfigafter-property",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"statenodeconfigafter-property"},"StateNodeConfig.after property"),(0,a.mdx)("p",null,"The mapping (or array) of delays (in milliseconds) to their potential transition(s). The delayed transitions are taken after the specified delay in an interpreter."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"after?: DelayedTransitions<TContext, TEvent, TActor, TAction, TGuard, TDelay>;\n")))}u.isMDXComponent=!0}}]);