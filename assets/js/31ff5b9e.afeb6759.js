"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[24229],{3905:(t,e,n)=>{n.r(e),n.d(e,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){return function(e){var n=s(e.components);return a.createElement(t,i({},e,{components:n}))}},s=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},x=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),p=s(n),c=r,x=p["".concat(o,".").concat(c)]||p[c]||u[c]||i;return n?a.createElement(x,l(l({ref:e},m),{},{components:n})):a.createElement(x,l({ref:e},m))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=x;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},77494:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(87462),r=n(67294),i=n(3905);const o={title:"TransitionConfig",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,d={unversionedId:"xstate.transitionconfig",id:"xstate.transitionconfig",title:"TransitionConfig",description:"TransitionConfig interface",source:"@site/api/xstate/xstate.transitionconfig.md",sourceDirName:".",slug:"/xstate.transitionconfig",permalink:"/statelyai-docs/api/xstate/xstate.transitionconfig",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"TransitionConfig",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},m={},p=[{value:"TransitionConfig interface",id:"transitionconfig-interface",level:2},{value:"Properties",id:"properties",level:2}],s={toc:p};function c(t){let{components:e,...n}=t;return(0,i.mdx)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"transitionconfig-interface"},"TransitionConfig interface"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Signature:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface TransitionConfig<TContext extends MachineContext, TExpressionEvent extends EventObject, TEvent extends EventObject, TActor extends ProvidedActor, TAction extends ParameterizedObject, TGuard extends ParameterizedObject, TDelay extends string> \n")),(0,i.mdx)("h2",{id:"properties"},"Properties"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Property"),(0,i.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.actions"},"actions?")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actions"},"Actions"),(0,i.mdx)(r.Fragment,null),"<","TContext, TExpressionEvent, TEvent, undefined, TActor, TAction, TGuard, TDelay",">"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"(Optional)"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.description"},"description?")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"(Optional)"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.guard"},"guard?")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"Guard","<","TContext, TExpressionEvent, undefined, TGuard",">"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"(Optional)"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.meta"},"meta?")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"Record","<","string, any",">"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"(Optional)"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.reenter"},"reenter?")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"(Optional)"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitionconfig.target"},"target?")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.transitiontarget"},"TransitionTarget")," ","|"," undefined"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"(Optional)"))))))}c.isMDXComponent=!0}}]);