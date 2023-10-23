"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[14246],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.createElement(e,o({},t,{components:n}))}},s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(y,d(d({ref:t},c),{},{components:n})):r.createElement(y,d({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=n(67294),o=n(3905);const l={title:"delaySend",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},d=void 0,i={unversionedId:"xstate.actor.delaysend",id:"xstate.actor.delaysend",title:"delaySend",description:"Actor.delaySend() method",source:"@site/api/xstate/xstate.actor.delaysend.md",sourceDirName:".",slug:"/xstate.actor.delaysend",permalink:"/statelyai-docs/api/xstate/xstate.actor.delaysend",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"delaySend",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},c={},p=[{value:"Actor.delaySend() method",id:"actordelaysend-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"actordelaysend-method"},"Actor.delaySend() method"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Signature:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"delaySend(params: {\n        event: EventObject;\n        id: string | undefined;\n        delay: number;\n        to?: AnyActorRef;\n    }): void;\n")),(0,o.mdx)("h2",{id:"parameters"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"params"),(0,o.mdx)("td",{parentName:"tr",align:null},"{ event: ",(0,o.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.eventobject"},"EventObject"),(0,o.mdx)(a.Fragment,null),"; id: string ","|"," undefined; delay: number; to?: ",(0,o.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.anyactorref"},"AnyActorRef"),(0,o.mdx)(a.Fragment,null),"; }"),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Returns:")),(0,o.mdx)("p",null,"void"))}m.isMDXComponent=!0}}]);