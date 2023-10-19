"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[45053],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>f,mdx:()=>x,useMDXComponents:()=>m,withMDXComponents:()=>l});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){return function(t){var r=m(t.components);return a.createElement(e,o({},t,{components:r}))}},m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=m(r),f=n,u=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return r?a.createElement(u,i(i({ref:t},p),{},{components:r})):a.createElement(u,i({ref:t},p))}));function x(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,i={unversionedId:"xstate.actorreffrom",id:"xstate.actorreffrom",title:"xstate.actorreffrom",description:"Home &gt; xstate &gt; ActorRefFrom",source:"@site/api/xstate/xstate.actorreffrom.md",sourceDirName:".",slug:"/xstate.actorreffrom",permalink:"/statelyai-docs/api/xstate/xstate.actorreffrom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.actorref.tojson",permalink:"/statelyai-docs/api/xstate/xstate.actorref.tojson"},next:{title:"xstate.actorstatus",permalink:"/statelyai-docs/api/xstate/xstate.actorstatus"}},c={},p=[{value:"ActorRefFrom type",id:"actorreffrom-type",level:2}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorreffrom"},"ActorRefFrom")),(0,n.mdx)("h2",{id:"actorreffrom-type"},"ActorRefFrom type"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type ActorRefFrom<T> = ReturnTypeOrValue<T> extends infer R ? R extends StateMachine<infer TContext, infer TEvent, infer TActor, infer _TAction, infer _TGuard, infer _TDelay, infer TTag, infer _TInput, infer TOutput, infer TResolvedTypesMeta> ? ActorRef<TEvent, MachineSnapshot<TContext, TEvent, TActor, TTag, TOutput, AreAllImplementationsAssumedToBeProvided<TResolvedTypesMeta> extends false ? MarkAllImplementationsAsProvided<TResolvedTypesMeta> : TResolvedTypesMeta>> : R extends Promise<infer U> ? ActorRefFrom<PromiseActorLogic<U>> : R extends ActorLogic<infer TSnapshot, infer TEvent, infer _TInput, infer _TPersisted, infer _TSystem> ? ActorRef<TEvent, TSnapshot> : never : never;\n")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"References:")," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statemachine"},"StateMachine"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorref"},"ActorRef"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.machinesnapshot"},"MachineSnapshot"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.areallimplementationsassumedtobeprovided"},"AreAllImplementationsAssumedToBeProvided"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.markallimplementationsasprovided"},"MarkAllImplementationsAsProvided"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorreffrom"},"ActorRefFrom"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.promiseactorlogic"},"PromiseActorLogic"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorlogic"},"ActorLogic")))}m.isMDXComponent=!0}}]);