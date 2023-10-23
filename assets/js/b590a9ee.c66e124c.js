"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[53554],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,x=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(x,l(l({ref:t},s),{},{components:n})):r.createElement(x,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=x;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},1318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=n(67294),i=n(3905);const o={title:"RaiseActionOptions",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"xstate.raiseactionoptions",id:"xstate.raiseactionoptions",title:"RaiseActionOptions",description:"RaiseActionOptions interface",source:"@site/api/xstate/xstate.raiseactionoptions.md",sourceDirName:".",slug:"/xstate.raiseactionoptions",permalink:"/statelyai-docs/api/xstate/xstate.raiseactionoptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"RaiseActionOptions",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},s={},c=[{value:"RaiseActionOptions interface",id:"raiseactionoptions-interface",level:2},{value:"Properties",id:"properties",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"raiseactionoptions-interface"},"RaiseActionOptions interface"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Signature:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface RaiseActionOptions<TContext extends MachineContext, TExpressionEvent extends EventObject, TExpressionAction extends ParameterizedObject | undefined, TEvent extends EventObject, TDelay extends string> \n")),(0,i.mdx)("h2",{id:"properties"},"Properties"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Property"),(0,i.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.raiseactionoptions.delay"},"delay?")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"Delay","<","TDelay",">"," ","|"," ",(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.delayexpr"},"DelayExpr"),(0,i.mdx)(a.Fragment,null),"<","TContext, TExpressionEvent, TExpressionAction, TEvent",">"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"(Optional)"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.raiseactionoptions.id"},"id?")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"(Optional)"))))))}m.isMDXComponent=!0}}]);