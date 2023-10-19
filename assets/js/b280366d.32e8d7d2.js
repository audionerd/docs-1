"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[60959],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s.apply(this,arguments)}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){return function(e){var a=c(e.components);return r.createElement(t,s({},e,{components:a}))}},c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},x=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(a),d=n,x=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return a?r.createElement(x,l(l({ref:e},p),{},{components:a})):r.createElement(x,l({ref:e},p))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,o=new Array(s);o[0]=x;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}x.displayName="MDXCreateElement"},19533:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={},o=void 0,l={unversionedId:"xstate.state.hastag",id:"xstate.state.hastag",title:"xstate.state.hastag",description:"Home &gt; xstate &gt; State &gt; hasTag",source:"@site/api/xstate/xstate.state.hastag.md",sourceDirName:".",slug:"/xstate.state.hastag",permalink:"/statelyai-docs/api/xstate/xstate.state.hastag",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.state.from",permalink:"/statelyai-docs/api/xstate/xstate.state.from"},next:{title:"xstate.state.historyvalue",permalink:"/statelyai-docs/api/xstate/xstate.state.historyvalue"}},i={},p=[{value:"State.hasTag() method",id:"statehastag-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:p};function c(t){let{components:e,...a}=t;return(0,n.mdx)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.state"},"State")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.state.hastag"},"hasTag")),(0,n.mdx)("h2",{id:"statehastag-method"},"State.hasTag() method"),(0,n.mdx)("p",null,"Whether the current state configuration has a state node with the specified ",(0,n.mdx)("inlineCode",{parentName:"p"},"tag"),"."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"hasTag(tag: TTag): boolean;\n")),(0,n.mdx)("h2",{id:"parameters"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"tag"),(0,n.mdx)("td",{parentName:"tr",align:null},"TTag"),(0,n.mdx)("td",{parentName:"tr",align:null})))),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Returns:")),(0,n.mdx)("p",null,"boolean"))}c.isMDXComponent=!0}}]);