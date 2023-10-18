"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[94890],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){return function(t){var n=c(t.components);return a.createElement(e,i({},t,{components:n}))}},c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,u=m["".concat(s,".").concat(d)]||m[d]||x[d]||i;return n?a.createElement(u,o(o({ref:t},l),{},{components:n})):a.createElement(u,o({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},s=void 0,o={unversionedId:"xstate.internalmachineimplementations",id:"xstate.internalmachineimplementations",title:"xstate.internalmachineimplementations",description:"Home &gt; xstate &gt; InternalMachineImplementations",source:"@site/api/xstate/xstate.internalmachineimplementations.md",sourceDirName:".",slug:"/xstate.internalmachineimplementations",permalink:"/statelyai-docs/api/xstate/next/xstate.internalmachineimplementations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.inspectionevent",permalink:"/statelyai-docs/api/xstate/next/xstate.inspectionevent"},next:{title:"xstate.interopobservable._symbol.observable_",permalink:"/statelyai-docs/api/xstate/next/xstate.interopobservable._symbol.observable_"}},p={},l=[{value:"InternalMachineImplementations type",id:"internalmachineimplementations-type",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.internalmachineimplementations"},"InternalMachineImplementations")),(0,r.mdx)("h2",{id:"internalmachineimplementations-type"},"InternalMachineImplementations type"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Signature:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type InternalMachineImplementations<TContext extends MachineContext, TEvent extends EventObject, TActor extends ProvidedActor, TAction extends ParameterizedObject, TDelay extends string, TResolvedTypesMeta, TRequireMissingImplementations extends boolean = false, TMissingImplementations = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'missingImplementations'>> = Compute<GenerateActionsImplementationsPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> & GenerateActorsImplementationsPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> & GenerateDelaysImplementationsPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> & GenerateGuardsImplementationsPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations>>;\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"References:")," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.machinecontext"},"MachineContext"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.eventobject"},"EventObject"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.providedactor"},"ProvidedActor"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.parameterizedobject"},"ParameterizedObject"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.prop"},"Prop"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.compute"},"Compute")))}c.isMDXComponent=!0}}]);