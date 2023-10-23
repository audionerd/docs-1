"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[45413],{3905:(t,e,r)=>{r.r(e),r.d(e,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){return function(e){var r=u(e.components);return n.createElement(t,o({},e,{components:r}))}},u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,l(l({ref:e},p),{},{components:r})):n.createElement(f,l({ref:e},p))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19513:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(87462),a=r(67294),o=r(3905);const c={title:"(constructor)",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,i={unversionedId:"xstate.actor._constructor_",id:"xstate.actor._constructor_",title:"(constructor)",description:"Actor.(constructor)",source:"@site/api/xstate/xstate.actor._constructor_.md",sourceDirName:".",slug:"/xstate.actor._constructor_",permalink:"/statelyai-docs/api/xstate/xstate.actor._constructor_",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"(constructor)",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},p={},s=[{value:"Actor.(constructor)",id:"actorconstructor",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:s};function m(t){let{components:e,...r}=t;return(0,o.mdx)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"actorconstructor"},"Actor.(constructor)"),(0,o.mdx)("p",null,"Creates a new actor instance for the given logic with the provided options, if any."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Signature:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"constructor(logic: TLogic, options?: ActorOptions<TLogic>);\n")),(0,o.mdx)("h2",{id:"parameters"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"logic"),(0,o.mdx)("td",{parentName:"tr",align:null},"TLogic"),(0,o.mdx)("td",{parentName:"tr",align:null},"The logic to create an actor from")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"options"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actoroptions"},"ActorOptions"),(0,o.mdx)(a.Fragment,null),"<","TLogic",">"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("em",{parentName:"td"},"(Optional)")," Actor options")))))}m.isMDXComponent=!0}}]);