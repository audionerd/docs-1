"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[32008],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){return function(t){var a=c(t.components);return n.createElement(e,s({},t,{components:a}))}},c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,x=m["".concat(o,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(x,l(l({ref:t},p),{},{components:a})):n.createElement(x,l({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=x;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},44476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={},o=void 0,l={unversionedId:"xstate.statemachine.resolvestatevalue",id:"xstate.statemachine.resolvestatevalue",title:"xstate.statemachine.resolvestatevalue",description:"Home &gt; xstate &gt; StateMachine &gt; resolveStateValue",source:"@site/api/xstate/xstate.statemachine.resolvestatevalue.md",sourceDirName:".",slug:"/xstate.statemachine.resolvestatevalue",permalink:"/statelyai-docs/api/xstate/next/xstate.statemachine.resolvestatevalue",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.statemachine.resolvestate",permalink:"/statelyai-docs/api/xstate/next/xstate.statemachine.resolvestate"},next:{title:"xstate.statemachine.restorestate",permalink:"/statelyai-docs/api/xstate/next/xstate.statemachine.restorestate"}},i={},p=[{value:"StateMachine.resolveStateValue() method",id:"statemachineresolvestatevalue-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statemachine"},"StateMachine")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statemachine.resolvestatevalue"},"resolveStateValue")),(0,r.mdx)("h2",{id:"statemachineresolvestatevalue-method"},"StateMachine.resolveStateValue() method"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Signature:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"resolveStateValue(stateValue: StateValue, ...[context]: Equals<TContext, MachineContext> extends true ? [] : [TContext]): MachineSnapshot<TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta>;\n")),(0,r.mdx)("h2",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"stateValue"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.statevalue"},"StateValue")),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"[","context","]"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.equals"},"Equals"),"<","TContext, ",(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.machinecontext"},"MachineContext"),">"," extends true ? ","[","]"," : ","[","TContext","]"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Returns:")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.machinesnapshot"},"MachineSnapshot"),"<","TContext, TEvent, TActor, TTag, TOutput, TResolvedTypesMeta",">"))}c.isMDXComponent=!0}}]);