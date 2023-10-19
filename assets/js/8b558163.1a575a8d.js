"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[19418],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>l});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(r),m=a,u=l["".concat(s,".").concat(m)]||l[m]||x[m]||o;return r?n.createElement(u,p(p({ref:t},c),{},{components:r})):n.createElement(u,p({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,p={unversionedId:"xstate.propertyassigner",id:"xstate.propertyassigner",title:"xstate.propertyassigner",description:"Home &gt; xstate &gt; PropertyAssigner",source:"@site/api/xstate/xstate.propertyassigner.md",sourceDirName:".",slug:"/xstate.propertyassigner",permalink:"/statelyai-docs/api/xstate/xstate.propertyassigner",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.prop",permalink:"/statelyai-docs/api/xstate/xstate.prop"},next:{title:"xstate.providedactor.id",permalink:"/statelyai-docs/api/xstate/xstate.providedactor.id"}},i={},c=[{value:"PropertyAssigner type",id:"propertyassigner-type",level:2}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.propertyassigner"},"PropertyAssigner")),(0,a.mdx)("h2",{id:"propertyassigner-type"},"PropertyAssigner type"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type PropertyAssigner<TContext extends MachineContext, TExpressionEvent extends EventObject, TExpressionAction extends ParameterizedObject | undefined, TEvent extends EventObject, TActor extends ProvidedActor> = {\n    [K in keyof TContext]?: PartialAssigner<TContext, TExpressionEvent, TExpressionAction, TEvent, TActor, K> | TContext[K];\n};\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"References:")," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.machinecontext"},"MachineContext"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.eventobject"},"EventObject"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.parameterizedobject"},"ParameterizedObject"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.providedactor"},"ProvidedActor"),", ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.partialassigner"},"PartialAssigner")))}d.isMDXComponent=!0}}]);