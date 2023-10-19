"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3042],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>i,MDXProvider:()=>m,mdx:()=>d,useMDXComponents:()=>u,withMDXComponents:()=>l});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){return function(t){var n=u(t.components);return r.createElement(e,s({},t,{components:n}))}},u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,g=l["".concat(o,".").concat(m)]||l[m]||y[m]||s;return n?r.createElement(g,c(c({ref:t},i),{},{components:n})):r.createElement(g,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const s={},o=void 0,c={unversionedId:"xstate.typegenmeta.eventscausingactors",id:"xstate.typegenmeta.eventscausingactors",title:"xstate.typegenmeta.eventscausingactors",description:"Home &gt; xstate &gt; TypegenMeta &gt; eventsCausingActors",source:"@site/api/xstate/xstate.typegenmeta.eventscausingactors.md",sourceDirName:".",slug:"/xstate.typegenmeta.eventscausingactors",permalink:"/statelyai-docs/api/xstate/xstate.typegenmeta.eventscausingactors",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.typegenmeta.eventscausingactions",permalink:"/statelyai-docs/api/xstate/xstate.typegenmeta.eventscausingactions"},next:{title:"xstate.typegenmeta.eventscausingdelays",permalink:"/statelyai-docs/api/xstate/xstate.typegenmeta.eventscausingdelays"}},p={},i=[{value:"TypegenMeta.eventsCausingActors property",id:"typegenmetaeventscausingactors-property",level:2}],l={toc:i};function u(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.typegenmeta"},"TypegenMeta")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.typegenmeta.eventscausingactors"},"eventsCausingActors")),(0,a.mdx)("h2",{id:"typegenmetaeventscausingactors-property"},"TypegenMeta.eventsCausingActors property"),(0,a.mdx)("p",null,"Keeps track of which events lead to which actors."),(0,a.mdx)("p",null,"Key: 'EVENT","_","NAME' Value: 'actorName' ","|"," 'otherActorName'"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"eventsCausingActors: Record<string, string>;\n")))}u.isMDXComponent=!0}}]);