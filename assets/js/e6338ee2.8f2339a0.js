"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[63563],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){return function(e){var a=c(e.components);return n.createElement(t,i({},e,{components:a}))}},c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},x=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(a),d=r,x=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(x,s(s({ref:e},p),{},{components:a})):n.createElement(x,s({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=x;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},16027:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,s={unversionedId:"xstate.statemachine.gettransitiondata",id:"xstate.statemachine.gettransitiondata",title:"xstate.statemachine.gettransitiondata",description:"Home &gt; xstate &gt; StateMachine &gt; getTransitionData",source:"@site/api/xstate/xstate.statemachine.gettransitiondata.md",sourceDirName:".",slug:"/xstate.statemachine.gettransitiondata",permalink:"/statelyai-docs/api/xstate/xstate.statemachine.gettransitiondata",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.statemachine.getstatenodebyid",permalink:"/statelyai-docs/api/xstate/xstate.statemachine.getstatenodebyid"},next:{title:"xstate.statemachine.id",permalink:"/statelyai-docs/api/xstate/xstate.statemachine.id"}},l={},p=[{value:"StateMachine.getTransitionData() method",id:"statemachinegettransitiondata-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:p};function c(t){let{components:e,...a}=t;return(0,r.mdx)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statemachine"},"StateMachine")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statemachine.gettransitiondata"},"getTransitionData")),(0,r.mdx)("h2",{id:"statemachinegettransitiondata-method"},"StateMachine.getTransitionData() method"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Signature:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"getTransitionData(state: MachineSnapshot<TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta>, event: TEvent): Array<TransitionDefinition<TContext, TEvent>>;\n")),(0,r.mdx)("h2",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"state"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.machinesnapshot"},"MachineSnapshot"),"<","TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta",">"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"event"),(0,r.mdx)("td",{parentName:"tr",align:null},"TEvent"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Returns:")),(0,r.mdx)("p",null,"Array","<",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.transitiondefinition"},"TransitionDefinition"),"<","TContext, TEvent",">",">"))}c.isMDXComponent=!0}}]);