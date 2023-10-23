"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[44780],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>s,mdx:()=>d,useMDXComponents:()=>u,withMDXComponents:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){return function(t){var r=u(t.components);return n.createElement(e,i({},t,{components:r}))}},u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),s=o,y=m["".concat(c,".").concat(s)]||m[s]||f[s]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=y;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},96904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"HomomorphicPick",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,a={unversionedId:"xstate.homomorphicpick",id:"xstate.homomorphicpick",title:"HomomorphicPick",description:"HomomorphicPick type",source:"@site/api/xstate/xstate.homomorphicpick.md",sourceDirName:".",slug:"/xstate.homomorphicpick",permalink:"/statelyai-docs/api/xstate/xstate.homomorphicpick",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"HomomorphicPick",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},p={},l=[{value:"HomomorphicPick type",id:"homomorphicpick-type",level:2}],m={toc:l};function u(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"homomorphicpick-type"},"HomomorphicPick type"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Signature:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type HomomorphicPick<T, K extends keyof any> = {\n    [P in keyof T as P & K]: T[P];\n};\n")))}u.isMDXComponent=!0}}]);