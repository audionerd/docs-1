"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[11628],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){return function(t){var r=d(t.components);return a.createElement(e,o({},t,{components:r}))}},d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(r),c=n,x=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return r?a.createElement(x,i(i({ref:t},p),{},{components:r})):a.createElement(x,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=x;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}x.displayName="MDXCreateElement"},17092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"xstate.toobserver",id:"xstate.toobserver",title:"xstate.toobserver",description:"Home &gt; xstate &gt; toObserver",source:"@site/api/xstate/xstate.toobserver.md",sourceDirName:".",slug:"/xstate.toobserver",permalink:"/statelyai-docs/api/xstate/xstate.toobserver",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.todo",permalink:"/statelyai-docs/api/xstate/xstate.todo"},next:{title:"xstate.transitionactorlogic",permalink:"/statelyai-docs/api/xstate/xstate.transitionactorlogic"}},s={},p=[{value:"toObserver() function",id:"toobserver-function",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.toobserver"},"toObserver")),(0,n.mdx)("h2",{id:"toobserver-function"},"toObserver() function"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"export declare function toObserver<T>(nextHandler?: Observer<T> | ((value: T) => void), errorHandler?: (error: any) => void, completionHandler?: () => void): Observer<T>;\n")),(0,n.mdx)("h2",{id:"parameters"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"nextHandler"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.observer"},"Observer"),"<","T",">"," ","|"," ((value: T) =",">"," void)"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"errorHandler"),(0,n.mdx)("td",{parentName:"tr",align:null},"(error: any) =",">"," void"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"completionHandler"),(0,n.mdx)("td",{parentName:"tr",align:null},"() =",">"," void"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))))),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Returns:")),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.observer"},"Observer"),"<","T",">"))}d.isMDXComponent=!0}}]);