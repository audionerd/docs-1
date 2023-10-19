"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[81603],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>l});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){return function(t){var r=m(t.components);return a.createElement(e,o({},t,{components:r}))}},m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=m(r),u=n,d=l["".concat(s,".").concat(u)]||l[u]||f[u]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,i={unversionedId:"xstate.tagsfrom",id:"xstate.tagsfrom",title:"xstate.tagsfrom",description:"Home &gt; xstate &gt; TagsFrom",source:"@site/api/xstate/xstate.tagsfrom.md",sourceDirName:".",slug:"/xstate.tagsfrom",permalink:"/statelyai-docs/api/xstate/xstate.tagsfrom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.subscription.unsubscribe",permalink:"/statelyai-docs/api/xstate/xstate.subscription.unsubscribe"},next:{title:"xstate.todo",permalink:"/statelyai-docs/api/xstate/xstate.todo"}},p={},c=[{value:"TagsFrom type",id:"tagsfrom-type",level:2}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.tagsfrom"},"TagsFrom")),(0,n.mdx)("h2",{id:"tagsfrom-type"},"TagsFrom type"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"export type TagsFrom<TMachine extends AnyStateMachine> = Parameters<StateFrom<TMachine>['hasTag']>[0];\n")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"References:")," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.anystatemachine"},"AnyStateMachine"),", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.statefrom"},"StateFrom")))}m.isMDXComponent=!0}}]);