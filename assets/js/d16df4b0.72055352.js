"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[2743],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,y=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},33887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=n(67294),i=n(3905);const o={title:"DelayedTransitions",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"xstate.delayedtransitions",id:"xstate.delayedtransitions",title:"DelayedTransitions",description:"DelayedTransitions type",source:"@site/api/xstate/xstate.delayedtransitions.md",sourceDirName:".",slug:"/xstate.delayedtransitions",permalink:"/statelyai-docs/api/xstate/xstate.delayedtransitions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"DelayedTransitions",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},c={},p=[{value:"DelayedTransitions type",id:"delayedtransitions-type",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"delayedtransitions-type"},"DelayedTransitions type"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Signature:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type DelayedTransitions<TContext extends MachineContext, TEvent extends EventObject, TActor extends ProvidedActor, TAction extends ParameterizedObject, TGuard extends ParameterizedObject, TDelay extends string> = {\n    [K in Delay<TDelay>]?: string | SingleOrArray<TransitionConfig<TContext, TEvent, TEvent, TActor, TAction, TGuard, TDelay>>;\n};\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"References:")," ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.machinecontext"},"MachineContext"),(0,i.mdx)(a.Fragment,null),", ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.eventobject"},"EventObject"),(0,i.mdx)(a.Fragment,null),", ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.providedactor"},"ProvidedActor"),(0,i.mdx)(a.Fragment,null),", ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.parameterizedobject"},"ParameterizedObject"),(0,i.mdx)(a.Fragment,null),", ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.singleorarray"},"SingleOrArray"),(0,i.mdx)(a.Fragment,null),", ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.transitionconfig"},"TransitionConfig")))}u.isMDXComponent=!0}}]);