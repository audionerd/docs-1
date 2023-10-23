"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[27939],{3905:(t,e,n)=>{n.r(e),n.d(e,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>m,withMDXComponents:()=>d});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a.apply(this,arguments)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),d=function(t){return function(e){var n=m(e.components);return i.createElement(t,a({},e,{components:n}))}},m=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=m(t.components);return i.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=m(n),c=r,f=d["".concat(o,".").concat(c)]||d[c]||u[c]||a;return n?i.createElement(f,l(l({ref:e},s),{},{components:n})):i.createElement(f,l({ref:e},s))}));function x(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20459:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var i=n(87462),r=n(67294),a=n(3905);const o={title:"InitialTransitionDefinition",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"xstate.initialtransitiondefinition",id:"xstate.initialtransitiondefinition",title:"InitialTransitionDefinition",description:"InitialTransitionDefinition interface",source:"@site/api/xstate/xstate.initialtransitiondefinition.md",sourceDirName:".",slug:"/xstate.initialtransitiondefinition",permalink:"/statelyai-docs/api/xstate/xstate.initialtransitiondefinition",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"InitialTransitionDefinition",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},s={},d=[{value:"InitialTransitionDefinition interface",id:"initialtransitiondefinition-interface",level:2},{value:"Properties",id:"properties",level:2}],m={toc:d};function c(t){let{components:e,...n}=t;return(0,a.mdx)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"initialtransitiondefinition-interface"},"InitialTransitionDefinition interface"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface InitialTransitionDefinition<TContext extends MachineContext, TEvent extends EventObject> extends TransitionDefinition<TContext, TEvent> \n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Extends:")," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.transitiondefinition"},"TransitionDefinition"),(0,a.mdx)(r.Fragment,null),"<","TContext, TEvent",">"),(0,a.mdx)("h2",{id:"properties"},"Properties"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Property"),(0,a.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.initialtransitiondefinition.guard"},"guard?")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"never"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("em",{parentName:"td"},"(Optional)"))),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.initialtransitiondefinition.target"},"target")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,a.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.statenode"},"StateNode"),(0,a.mdx)(r.Fragment,null),"<","TContext, TEvent",">",">"),(0,a.mdx)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);