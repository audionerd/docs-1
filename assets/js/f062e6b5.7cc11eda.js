"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[66672],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>f,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,c={unversionedId:"xstate.logaction",id:"xstate.logaction",title:"xstate.logaction",description:"Home &gt; xstate &gt; LogAction",source:"@site/api/xstate/xstate.logaction.md",sourceDirName:".",slug:"/xstate.logaction",permalink:"/statelyai-docs/api/xstate/xstate.logaction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.log",permalink:"/statelyai-docs/api/xstate/xstate.log"},next:{title:"xstate.logexpr",permalink:"/statelyai-docs/api/xstate/xstate.logexpr"}},s={},l=[{value:"LogAction interface",id:"logaction-interface",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.logaction"},"LogAction")),(0,a.mdx)("h2",{id:"logaction-interface"},"LogAction interface"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface LogAction<TContext extends MachineContext, TExpressionEvent extends EventObject, TExpressionAction extends ParameterizedObject | undefined, TEvent extends EventObject> \n")))}u.isMDXComponent=!0}}]);