"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[99267],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>l});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){return function(t){var n=d(t.components);return a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),m=r,f=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"xstate.statenode.machine",id:"xstate.statenode.machine",title:"xstate.statenode.machine",description:"Home &gt; xstate &gt; StateNode &gt; machine",source:"@site/api/xstate/xstate.statenode.machine.md",sourceDirName:".",slug:"/xstate.statenode.machine",permalink:"/statelyai-docs/api/xstate/next/xstate.statenode.machine",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.statenode.key",permalink:"/statelyai-docs/api/xstate/next/xstate.statenode.key"},next:{title:"xstate.statenode",permalink:"/statelyai-docs/api/xstate/next/xstate.statenode"}},c={},p=[{value:"StateNode.machine property",id:"statenodemachine-property",level:2}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statenode"},"StateNode")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statenode.machine"},"machine")),(0,r.mdx)("h2",{id:"statenodemachine-property"},"StateNode.machine property"),(0,r.mdx)("p",null,"The root machine node."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Signature:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"machine: StateMachine<TContext, TEvent, any, // actors\n    any, // input\n    TODO, // output\n    TODO, // guards\n    TODO, // delays\n    TODO, // tags\n    TODO>;\n")))}d.isMDXComponent=!0}}]);