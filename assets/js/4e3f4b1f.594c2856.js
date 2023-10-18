"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[70330],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>l});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},o.apply(this,arguments)}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),l=function(t){return function(e){var a=p(e.components);return n.createElement(t,o({},e,{components:a}))}},p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},x=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),l=p(a),m=r,x=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return a?n.createElement(x,i(i({ref:e},c),{},{components:a})):n.createElement(x,i({ref:e},c))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=x;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},80834:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"xstate.statenode._constructor_",id:"xstate.statenode._constructor_",title:"xstate.statenode._constructor_",description:"Home &gt; xstate &gt; StateNode &gt; (constructor)",source:"@site/api/xstate/xstate.statenode._constructor_.md",sourceDirName:".",slug:"/xstate.statenode._constructor_",permalink:"/statelyai-docs/api/xstate/next/xstate.statenode._constructor_",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.statemachinedefinition",permalink:"/statelyai-docs/api/xstate/next/xstate.statemachinedefinition"},next:{title:"xstate.statenode._initialize",permalink:"/statelyai-docs/api/xstate/next/xstate.statenode._initialize"}},d={},c=[{value:"StateNode.(constructor)",id:"statenodeconstructor",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:c};function p(t){let{components:e,...a}=t;return(0,r.mdx)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statenode"},"StateNode")," ",">"," ",(0,r.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.statenode._constructor_"},"(constructor)")),(0,r.mdx)("h2",{id:"statenodeconstructor"},"StateNode.(constructor)"),(0,r.mdx)("p",null,"Constructs a new instance of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"StateNode")," class"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Signature:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"constructor(\n    config: StateNodeConfig<TContext, TEvent, TODO, // actions\n    TODO, // actors\n    TODO, // output\n    TODO, // guards\n    TODO, // delays\n    TODO>, options: StateNodeOptions<TContext, TEvent>);\n")),(0,r.mdx)("h2",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"config"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.statenodeconfig"},"StateNodeConfig"),"<","TContext, TEvent, ",(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.todo"},"TODO"),", // actions ",(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.todo"},"TODO"),", // actors ",(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.todo"},"TODO"),", // output ",(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.todo"},"TODO"),", // guards ",(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.todo"},"TODO"),", // delays ",(0,r.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.todo"},"TODO"),">"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"options"),(0,r.mdx)("td",{parentName:"tr",align:null},"StateNodeOptions","<","TContext, TEvent",">"),(0,r.mdx)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);