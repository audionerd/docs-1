"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[61659],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>x,useMDXComponents:()=>l,withMDXComponents:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){return function(t){var r=l(t.components);return a.createElement(e,o({},t,{components:r}))}},l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},f=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(d,p(p({ref:t},c),{},{components:r})):a.createElement(d,p({ref:t},c))}));function x(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,p={unversionedId:"xstate.snapshotfrom",id:"xstate.snapshotfrom",title:"xstate.snapshotfrom",description:"Home &gt; xstate &gt; SnapshotFrom",source:"@site/api/xstate/xstate.snapshotfrom.md",sourceDirName:".",slug:"/xstate.snapshotfrom",permalink:"/statelyai-docs/api/xstate/xstate.snapshotfrom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.snapshotevent.type",permalink:"/statelyai-docs/api/xstate/xstate.snapshotevent.type"},next:{title:"xstate.spawner",permalink:"/statelyai-docs/api/xstate/xstate.spawner"}},i={},c=[{value:"SnapshotFrom type",id:"snapshotfrom-type",level:2}],m={toc:c};function l(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.snapshotfrom"},"SnapshotFrom")),(0,n.mdx)("h2",{id:"snapshotfrom-type"},"SnapshotFrom type"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type SnapshotFrom<T> = ReturnTypeOrValue<T> extends infer R ? R extends ActorRef<infer _, infer TSnapshot> ? TSnapshot : R extends Actor<infer TLogic> ? SnapshotFrom<TLogic> : R extends StateMachine<infer _TContext, infer _TEvent, infer _TActor, infer _TAction, infer _TGuard, infer _TDelay, infer _TTag, infer _TInput, infer _TOutput, infer _TResolvedTypesMeta> ? StateFrom<R> : R extends ActorLogic<any, any, any, any, any> ? ReturnType<R['transition']> : R extends ActorContext<infer TSnapshot, infer _, infer __> ? TSnapshot : never : never;\n")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"References:")," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorref"},"ActorRef"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actor"},"Actor"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.snapshotfrom"},"SnapshotFrom"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statemachine"},"StateMachine"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statefrom"},"StateFrom"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorlogic"},"ActorLogic"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorcontext"},"ActorContext")))}l.isMDXComponent=!0}}]);