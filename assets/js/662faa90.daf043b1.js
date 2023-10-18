"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[68041],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s.apply(this,arguments)}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),c=function(t){return function(e){var a=m(e.components);return r.createElement(t,s({},e,{components:a}))}},m=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},x=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,o=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),c=m(a),d=n,x=c["".concat(o,".").concat(d)]||c[d]||u[d]||s;return a?r.createElement(x,i(i({ref:e},l),{},{components:a})):r.createElement(x,i({ref:e},l))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,o=new Array(s);o[0]=x;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}x.displayName="MDXCreateElement"},62675:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const s={},o=void 0,i={unversionedId:"xstate.statemachine.restorestate",id:"xstate.statemachine.restorestate",title:"xstate.statemachine.restorestate",description:"Home &gt; xstate &gt; StateMachine &gt; restoreState",source:"@site/api/xstate/xstate.statemachine.restorestate.md",sourceDirName:".",slug:"/xstate.statemachine.restorestate",permalink:"/statelyai-docs/api/xstate/next/xstate.statemachine.restorestate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.statemachine.resolvestatevalue",permalink:"/statelyai-docs/api/xstate/next/xstate.statemachine.resolvestatevalue"},next:{title:"xstate.statemachine.root",permalink:"/statelyai-docs/api/xstate/next/xstate.statemachine.root"}},p={},l=[{value:"StateMachine.restoreState() method",id:"statemachinerestorestate-method",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:l};function m(t){let{components:e,...a}=t;return(0,n.mdx)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statemachine"},"StateMachine")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statemachine.restorestate"},"restoreState")),(0,n.mdx)("h2",{id:"statemachinerestorestate-method"},"StateMachine.restoreState() method"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"restoreState(snapshot: PersistedMachineState<TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta>, _actorCtx: ActorContext<MachineSnapshot<TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta>, TEvent>): MachineSnapshot<TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta>;\n")),(0,n.mdx)("h2",{id:"parameters"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"snapshot"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.persistedmachinestate"},"PersistedMachineState"),"<","TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta",">"),(0,n.mdx)("td",{parentName:"tr",align:null})),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"_","actorCtx"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.actorcontext"},"ActorContext"),"<",(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.machinesnapshot"},"MachineSnapshot"),"<","TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta",">",", TEvent",">"),(0,n.mdx)("td",{parentName:"tr",align:null})))),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Returns:")),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.machinesnapshot"},"MachineSnapshot"),"<","TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta",">"))}m.isMDXComponent=!0}}]);