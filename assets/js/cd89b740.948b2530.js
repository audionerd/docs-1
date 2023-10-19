"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[36477],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){return function(t){var a=d(t.components);return r.createElement(e,l({},t,{components:a}))}},d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,x=m["".concat(o,".").concat(p)]||m[p]||u[p]||l;return a?r.createElement(x,c(c({ref:t},s),{},{components:a})):r.createElement(x,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=x;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}x.displayName="MDXCreateElement"},92210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,c={unversionedId:"xstate.simulatedclock",id:"xstate.simulatedclock",title:"xstate.simulatedclock",description:"Home &gt; xstate &gt; SimulatedClock",source:"@site/api/xstate/xstate.simulatedclock.md",sourceDirName:".",slug:"/xstate.simulatedclock",permalink:"/statelyai-docs/api/xstate/xstate.simulatedclock",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.simulatedclock.increment",permalink:"/statelyai-docs/api/xstate/xstate.simulatedclock.increment"},next:{title:"xstate.simulatedclock.now",permalink:"/statelyai-docs/api/xstate/xstate.simulatedclock.now"}},i={},s=[{value:"SimulatedClock interface",id:"simulatedclock-interface",level:2},{value:"Methods",id:"methods",level:2}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.simulatedclock"},"SimulatedClock")),(0,n.mdx)("h2",{id:"simulatedclock-interface"},"SimulatedClock interface"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface SimulatedClock extends Clock \n")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Extends:")," Clock"),(0,n.mdx)("h2",{id:"methods"},"Methods"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Method"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.simulatedclock.increment"},"increment(ms)")),(0,n.mdx)("td",{parentName:"tr",align:null})),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.simulatedclock.set"},"set(ms)")),(0,n.mdx)("td",{parentName:"tr",align:null})),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.simulatedclock.start"},"start(speed)")),(0,n.mdx)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);