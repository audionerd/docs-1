"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[11356],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,s({},t,{components:n}))}},d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,g=c["".concat(i,".").concat(u)]||c[u]||m[u]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},80881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=n(67294),s=n(3905);const i={title:"AssignArgs",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"xstate.assignargs",id:"xstate.assignargs",title:"AssignArgs",description:"AssignArgs interface",source:"@site/api/xstate/xstate.assignargs.md",sourceDirName:".",slug:"/xstate.assignargs",permalink:"/statelyai-docs/api/xstate/xstate.assignargs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"AssignArgs",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},p={},c=[{value:"AssignArgs interface",id:"assignargs-interface",level:2},{value:"Properties",id:"properties",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,s.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h2",{id:"assignargs-interface"},"AssignArgs interface"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Signature:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface AssignArgs<TContext extends MachineContext, TExpressionEvent extends EventObject, TExpressionAction extends ParameterizedObject | undefined, TEvent extends EventObject, TActor extends ProvidedActor> extends ActionArgs<TContext, TExpressionEvent, TExpressionAction, TEvent> \n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Extends:")," ",(0,s.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actionargs"},"ActionArgs"),(0,s.mdx)(a.Fragment,null),"<","TContext, TExpressionEvent, TExpressionAction, TEvent",">"),(0,s.mdx)("h2",{id:"properties"},"Properties"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Property"),(0,s.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.assignargs.spawn"},"spawn")),(0,s.mdx)("td",{parentName:"tr",align:null}),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.spawner"},"Spawner"),(0,s.mdx)(a.Fragment,null),"<","TActor",">"),(0,s.mdx)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);