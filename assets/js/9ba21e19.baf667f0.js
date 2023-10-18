"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[14808],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>y,mdx:()=>d,useMDXComponents:()=>u,withMDXComponents:()=>l});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){return function(t){var r=u(t.components);return n.createElement(e,s({},t,{components:r}))}},u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},y=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),y=a,f=l["".concat(o,".").concat(y)]||l[y]||m[y]||s;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={},o=void 0,p={unversionedId:"xstate.statetypes",id:"xstate.statetypes",title:"xstate.statetypes",description:"Home &gt; xstate &gt; StateTypes",source:"@site/api/xstate/xstate.statetypes.md",sourceDirName:".",slug:"/xstate.statetypes",permalink:"/statelyai-docs/api/xstate/next/xstate.statetypes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.statesdefinition",permalink:"/statelyai-docs/api/xstate/next/xstate.statesdefinition"},next:{title:"xstate.statevalue",permalink:"/statelyai-docs/api/xstate/next/xstate.statevalue"}},i={},c=[{value:"StateTypes type",id:"statetypes-type",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statetypes"},"StateTypes")),(0,a.mdx)("h2",{id:"statetypes-type"},"StateTypes type"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type StateTypes = 'atomic' | 'compound' | 'parallel' | 'final' | 'history' | string;\n")))}u.isMDXComponent=!0}}]);