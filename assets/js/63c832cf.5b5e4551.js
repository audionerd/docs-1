"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[23619],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>x,mdx:()=>u,useMDXComponents:()=>d,withMDXComponents:()=>l});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},x=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),x=a,f=l["".concat(i,".").concat(x)]||l[x]||m[x]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"xstate.invokeconfig",id:"xstate.invokeconfig",title:"xstate.invokeconfig",description:"Home &gt; xstate &gt; InvokeConfig",source:"@site/api/xstate/xstate.invokeconfig.md",sourceDirName:".",slug:"/xstate.invokeconfig",permalink:"/statelyai-docs/api/xstate/xstate.invokeconfig",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.interpreterstatus",permalink:"/statelyai-docs/api/xstate/xstate.interpreterstatus"},next:{title:"xstate.invokedefinition.id",permalink:"/statelyai-docs/api/xstate/xstate.invokedefinition.id"}},c={},p=[{value:"InvokeConfig type",id:"invokeconfig-type",level:2}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.invokeconfig"},"InvokeConfig")),(0,a.mdx)("h2",{id:"invokeconfig-type"},"InvokeConfig type"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type InvokeConfig<TContext extends MachineContext, TEvent extends EventObject, TActor extends ProvidedActor, TAction extends ParameterizedObject, TGuard extends ParameterizedObject, TDelay extends string> = IsLiteralString<TActor['src']> extends true ? DistributeActors<TContext, TEvent, TActor, TAction, TGuard, TDelay, TActor> : {\n    id?: string;\n    systemId?: string;\n    src: AnyActorLogic | string;\n    input?: Mapper<TContext, TEvent, NonReducibleUnknown, TEvent> | NonReducibleUnknown;\n    onDone?: string | SingleOrArray<TransitionConfigOrTarget<TContext, DoneActorEvent<any>, // TODO: consider replacing with `unknown`\n    TEvent, TActor, TAction, TGuard, TDelay>>;\n    onError?: string | SingleOrArray<TransitionConfigOrTarget<TContext, ErrorActorEvent, TEvent, TActor, TAction, TGuard, TDelay>>;\n    onSnapshot?: string | SingleOrArray<TransitionConfigOrTarget<TContext, SnapshotEvent, TEvent, TActor, TAction, TGuard, TDelay>>;\n};\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"References:")," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.machinecontext"},"MachineContext"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.eventobject"},"EventObject"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.providedactor"},"ProvidedActor"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.parameterizedobject"},"ParameterizedObject"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.isliteralstring"},"IsLiteralString"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.anyactorlogic"},"AnyActorLogic"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.mapper"},"Mapper"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.nonreducibleunknown"},"NonReducibleUnknown"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.singleorarray"},"SingleOrArray"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.transitionconfigortarget"},"TransitionConfigOrTarget"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.doneactorevent"},"DoneActorEvent"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.erroractorevent"},"ErrorActorEvent"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.snapshotevent"},"SnapshotEvent")))}d.isMDXComponent=!0}}]);