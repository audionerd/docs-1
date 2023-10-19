"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[99949],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>l});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){return function(t){var n=d(t.components);return a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),m=r,u=l["".concat(s,".").concat(m)]||l[m]||x[m]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"xstate.sendtoactionparams",id:"xstate.sendtoactionparams",title:"xstate.sendtoactionparams",description:"Home &gt; xstate &gt; SendToActionParams",source:"@site/api/xstate/xstate.sendtoactionparams.md",sourceDirName:".",slug:"/xstate.sendtoactionparams",permalink:"/statelyai-docs/api/xstate/xstate.sendtoactionparams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.sendtoactionparams.event",permalink:"/statelyai-docs/api/xstate/xstate.sendtoactionparams.event"},next:{title:"xstate.simpleorstatenodeconfig",permalink:"/statelyai-docs/api/xstate/xstate.simpleorstatenodeconfig"}},p={},c=[{value:"SendToActionParams interface",id:"sendtoactionparams-interface",level:2},{value:"Properties",id:"properties",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.sendtoactionparams"},"SendToActionParams")),(0,r.mdx)("h2",{id:"sendtoactionparams-interface"},"SendToActionParams interface"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Signature:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface SendToActionParams<TContext extends MachineContext, TExpressionEvent extends EventObject, TExpressionAction extends ParameterizedObject | undefined, TSentEvent extends EventObject, TEvent extends EventObject, TDelay extends string> extends SendToActionOptions<TContext, TExpressionEvent, TExpressionAction, TEvent, TDelay> \n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Extends:")," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.sendtoactionoptions"},"SendToActionOptions"),"<","TContext, TExpressionEvent, TExpressionAction, TEvent, TDelay",">"),(0,r.mdx)("h2",{id:"properties"},"Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property"),(0,r.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.sendtoactionparams.event"},"event")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"TSentEvent ","|"," ",(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.sendexpr"},"SendExpr"),"<","TContext, TExpressionEvent, TExpressionAction, TSentEvent, TEvent",">"),(0,r.mdx)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);