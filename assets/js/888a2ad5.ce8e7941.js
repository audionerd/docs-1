"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[95079],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>f,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=n(67294),i=n(3905);const o={title:"StatesDefinition",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"xstate.statesdefinition",id:"xstate.statesdefinition",title:"StatesDefinition",description:"StatesDefinition type",source:"@site/api/xstate/xstate.statesdefinition.md",sourceDirName:".",slug:"/xstate.statesdefinition",permalink:"/statelyai-docs/api/xstate/xstate.statesdefinition",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"StatesDefinition",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},p={},c=[{value:"StatesDefinition type",id:"statesdefinition-type",level:2}],u={toc:c};function f(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"statesdefinition-type"},"StatesDefinition type"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Signature:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type StatesDefinition<TContext extends MachineContext, TEvent extends EventObject> = {\n    [K in string]: StateNodeDefinition<TContext, TEvent>;\n};\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"References:")," ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.machinecontext"},"MachineContext"),(0,i.mdx)(a.Fragment,null),", ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.eventobject"},"EventObject"),(0,i.mdx)(a.Fragment,null),", ",(0,i.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statenodedefinition"},"StateNodeDefinition")))}f.isMDXComponent=!0}}]);