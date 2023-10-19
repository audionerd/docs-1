"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[76231],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>u,useMDXComponents:()=>l,withMDXComponents:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),m=function(e){return function(t){var a=l(t.components);return n.createElement(e,i({},t,{components:a}))}},l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,y=m["".concat(o,".").concat(d)]||m[d]||x[d]||i;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},89540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,s={unversionedId:"xstate.machineimplementations",id:"xstate.machineimplementations",title:"xstate.machineimplementations",description:"Home &gt; xstate &gt; MachineImplementations",source:"@site/api/xstate/xstate.machineimplementations.md",sourceDirName:".",slug:"/xstate.machineimplementations",permalink:"/statelyai-docs/api/xstate/xstate.machineimplementations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.machinecontext",permalink:"/statelyai-docs/api/xstate/xstate.machinecontext"},next:{title:"xstate.machineimplementationsfrom",permalink:"/statelyai-docs/api/xstate/xstate.machineimplementationsfrom"}},p={},c=[{value:"MachineImplementations type",id:"machineimplementations-type",level:2}],m={toc:c};function l(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.machineimplementations"},"MachineImplementations")),(0,r.mdx)("h2",{id:"machineimplementations-type"},"MachineImplementations type"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Signature:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type MachineImplementations<TContext extends MachineContext, TEvent extends EventObject, TActor extends ProvidedActor = ProvidedActor, TAction extends ParameterizedObject = ParameterizedObject, TGuard extends ParameterizedObject = ParameterizedObject, TDelay extends string = string, TTag extends string = string, TTypesMeta extends TypegenConstraint = TypegenDisabled> = InternalMachineImplementations<TContext, TEvent, TActor, TAction, TDelay, ResolveTypegenMeta<TTypesMeta, TEvent, TActor, TAction, TGuard, TDelay, TTag>>;\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"References:")," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.machinecontext"},"MachineContext"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.eventobject"},"EventObject"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.providedactor"},"ProvidedActor"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.parameterizedobject"},"ParameterizedObject"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.typegenconstraint"},"TypegenConstraint"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.typegendisabled"},"TypegenDisabled"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.internalmachineimplementations"},"InternalMachineImplementations"),", ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.resolvetypegenmeta"},"ResolveTypegenMeta")))}l.isMDXComponent=!0}}]);