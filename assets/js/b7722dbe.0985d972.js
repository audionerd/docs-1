"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[37589],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,x=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(x,s(s({ref:t},p),{},{components:n})):r.createElement(x,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=x;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},59298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=n(67294),i=n(3905);const o={title:"RaiseActionParams",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"xstate.raiseactionparams",id:"xstate.raiseactionparams",title:"RaiseActionParams",description:"RaiseActionParams interface",source:"@site/api/xstate/xstate.raiseactionparams.md",sourceDirName:".",slug:"/xstate.raiseactionparams",permalink:"/statelyai-docs/api/xstate/xstate.raiseactionparams",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"RaiseActionParams",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},p={},c=[{value:"RaiseActionParams interface",id:"raiseactionparams-interface",level:2},{value:"Properties",id:"properties",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"raiseactionparams-interface"},"RaiseActionParams interface"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Signature:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface RaiseActionParams<TContext extends MachineContext, TExpressionEvent extends EventObject, TExpressionAction extends ParameterizedObject | undefined, TEvent extends EventObject, TDelay extends string> extends RaiseActionOptions<TContext, TExpressionEvent, TExpressionAction, TEvent, TDelay> \n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Extends:")," ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.raiseactionoptions"},"RaiseActionOptions"),(0,i.mdx)(a.Fragment,null),"<","TContext, TExpressionEvent, TExpressionAction, TEvent, TDelay",">"),(0,i.mdx)("h2",{id:"properties"},"Properties"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Property"),(0,i.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.raiseactionparams.event"},"event")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"TEvent ","|"," ",(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.sendexpr"},"SendExpr"),(0,i.mdx)(a.Fragment,null),"<","TContext, TExpressionEvent, TExpressionAction, TEvent, TEvent",">"),(0,i.mdx)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);