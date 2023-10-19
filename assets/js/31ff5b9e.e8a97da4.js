"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[24229],{3905:(t,e,n)=>{n.r(e),n.d(e,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){return function(e){var n=p(e.components);return a.createElement(t,i({},e,{components:n}))}},p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},x={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,u=m["".concat(o,".").concat(c)]||m[c]||x[c]||i;return n?a.createElement(u,d(d({ref:e},s),{},{components:n})):a.createElement(u,d({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77494:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,d={unversionedId:"xstate.transitionconfig",id:"xstate.transitionconfig",title:"xstate.transitionconfig",description:"Home &gt; xstate &gt; TransitionConfig",source:"@site/api/xstate/xstate.transitionconfig.md",sourceDirName:".",slug:"/xstate.transitionconfig",permalink:"/statelyai-docs/api/xstate/xstate.transitionconfig",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.transitionconfig.guard",permalink:"/statelyai-docs/api/xstate/xstate.transitionconfig.guard"},next:{title:"xstate.transitionconfig.meta",permalink:"/statelyai-docs/api/xstate/xstate.transitionconfig.meta"}},l={},s=[{value:"TransitionConfig interface",id:"transitionconfig-interface",level:2},{value:"Properties",id:"properties",level:2}],m={toc:s};function p(t){let{components:e,...n}=t;return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.transitionconfig"},"TransitionConfig")),(0,r.mdx)("h2",{id:"transitionconfig-interface"},"TransitionConfig interface"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Signature:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface TransitionConfig<TContext extends MachineContext, TExpressionEvent extends EventObject, TEvent extends EventObject, TActor extends ProvidedActor, TAction extends ParameterizedObject, TGuard extends ParameterizedObject, TDelay extends string> \n")),(0,r.mdx)("h2",{id:"properties"},"Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property"),(0,r.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.actions"},"actions?")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actions"},"Actions"),"<","TContext, TExpressionEvent, TEvent, undefined, TActor, TAction, TGuard, TDelay",">"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"(Optional)"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.description"},"description?")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"(Optional)"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.guard"},"guard?")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"Guard","<","TContext, TExpressionEvent, undefined, TGuard",">"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"(Optional)"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.meta"},"meta?")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"Record","<","string, any",">"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"(Optional)"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.reenter"},"reenter?")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"(Optional)"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.target"},"target?")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitiontarget"},"TransitionTarget")," ","|"," undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"(Optional)"))))))}p.isMDXComponent=!0}}]);