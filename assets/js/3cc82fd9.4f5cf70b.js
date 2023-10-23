"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[60184],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>s,mdx:()=>d,useMDXComponents:()=>u,withMDXComponents:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){return function(t){var r=u(t.components);return n.createElement(e,i({},t,{components:r}))}},u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),s=o,y=m["".concat(a,".").concat(s)]||m[s]||f[s]||i;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},34806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"HomomorphicOmit",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},a=void 0,c={unversionedId:"xstate.homomorphicomit",id:"xstate.homomorphicomit",title:"HomomorphicOmit",description:"HomomorphicOmit type",source:"@site/api/xstate/xstate.homomorphicomit.md",sourceDirName:".",slug:"/xstate.homomorphicomit",permalink:"/statelyai-docs/api/xstate/xstate.homomorphicomit",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"HomomorphicOmit",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},p={},l=[{value:"HomomorphicOmit type",id:"homomorphicomit-type",level:2}],m={toc:l};function u(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"homomorphicomit-type"},"HomomorphicOmit type"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Signature:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type HomomorphicOmit<T, K extends keyof any> = {\n    [P in keyof T as Exclude<P, K>]: T[P];\n};\n")))}u.isMDXComponent=!0}}]);