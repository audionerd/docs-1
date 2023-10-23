"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[67120],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,x=d["".concat(i,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(x,l(l({ref:t},s),{},{components:n})):a.createElement(x,l({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=x;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},34730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905);const i={title:"provide",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"xstate.statemachine.provide",id:"xstate.statemachine.provide",title:"provide",description:"StateMachine.provide() method",source:"@site/api/xstate/xstate.statemachine.provide.md",sourceDirName:".",slug:"/xstate.statemachine.provide",permalink:"/statelyai-docs/api/xstate/xstate.statemachine.provide",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"provide",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},s={},d=[{value:"StateMachine.provide() method",id:"statemachineprovide-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"statemachineprovide-method"},"StateMachine.provide() method"),(0,o.mdx)("p",null,"Clones this state machine with the provided implementations and merges the ",(0,o.mdx)("inlineCode",{parentName:"p"},"context")," (if provided)."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Signature:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"provide(implementations: InternalMachineImplementations<TContext, TEvent, TActor, TAction, TDelay, TResolvedTypesMeta, true>): StateMachine<TContext, TEvent, TActor, TAction, TGuard, TDelay, TTag, TInput, TOutput, AreAllImplementationsAssumedToBeProvided<TResolvedTypesMeta> extends false ? MarkAllImplementationsAsProvided<TResolvedTypesMeta> : TResolvedTypesMeta>;\n")),(0,o.mdx)("h2",{id:"parameters"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"implementations"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.internalmachineimplementations"},"InternalMachineImplementations"),(0,o.mdx)(r.Fragment,null),"<","TContext, TEvent, TActor, TAction, TDelay, TResolvedTypesMeta, true",">"),(0,o.mdx)("td",{parentName:"tr",align:null},"Options (",(0,o.mdx)("code",null,"actions"),", ",(0,o.mdx)("code",null,"guards"),", ",(0,o.mdx)("code",null,"actors"),", ",(0,o.mdx)("code",null,"delays"),", ",(0,o.mdx)("code",null,"context"),") to recursively merge with the existing options.")))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Returns:")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statemachine"},"StateMachine"),(0,o.mdx)(r.Fragment,null),"<","TContext, TEvent, TActor, TAction, TGuard, TDelay, TTag, TInput, TOutput, ",(0,o.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.areallimplementationsassumedtobeprovided"},"AreAllImplementationsAssumedToBeProvided"),(0,o.mdx)(r.Fragment,null),"<","TResolvedTypesMeta",">"," extends false ? ",(0,o.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.markallimplementationsasprovided"},"MarkAllImplementationsAsProvided"),(0,o.mdx)(r.Fragment,null),"<","TResolvedTypesMeta",">"," : TResolvedTypesMeta",">"),(0,o.mdx)("p",null,"A new ",(0,o.mdx)("inlineCode",{parentName:"p"},"StateMachine")," instance with the provided implementations."))}c.isMDXComponent=!0}}]);