"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[86904],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>l,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){return function(t){var n=l(t.components);return r.createElement(e,s({},t,{components:n}))}},l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={},o=void 0,p={unversionedId:"xstate.typegenmeta.eventscausingguards",id:"xstate.typegenmeta.eventscausingguards",title:"xstate.typegenmeta.eventscausingguards",description:"Home &gt; xstate &gt; TypegenMeta &gt; eventsCausingGuards",source:"@site/api/xstate/xstate.typegenmeta.eventscausingguards.md",sourceDirName:".",slug:"/xstate.typegenmeta.eventscausingguards",permalink:"/statelyai-docs/api/xstate/next/xstate.typegenmeta.eventscausingguards",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.typegenmeta.eventscausingdelays",permalink:"/statelyai-docs/api/xstate/next/xstate.typegenmeta.eventscausingdelays"},next:{title:"xstate.typegenmeta.internalevents",permalink:"/statelyai-docs/api/xstate/next/xstate.typegenmeta.internalevents"}},i={},c=[{value:"TypegenMeta.eventsCausingGuards property",id:"typegenmetaeventscausingguards-property",level:2}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.typegenmeta"},"TypegenMeta")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.typegenmeta.eventscausingguards"},"eventsCausingGuards")),(0,a.mdx)("h2",{id:"typegenmetaeventscausingguards-property"},"TypegenMeta.eventsCausingGuards property"),(0,a.mdx)("p",null,"Keeps track of which events lead to which guards."),(0,a.mdx)("p",null,"Key: 'EVENT","_","NAME' Value: 'guardName' ","|"," 'otherGuardName'"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"eventsCausingGuards: Record<string, string>;\n")))}l.isMDXComponent=!0}}]);