"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[52672],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>s,MDXProvider:()=>x,mdx:()=>f,useMDXComponents:()=>o,withMDXComponents:()=>i});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},l.apply(this,arguments)}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),i=function(t){return function(e){var a=o(e.components);return r.createElement(t,l({},e,{components:a}))}},o=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},x=function(t){var e=o(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),i=o(a),x=n,u=i["".concat(d,".").concat(x)]||i[x]||c[x]||l;return a?r.createElement(u,m(m({ref:e},s),{},{components:a})):r.createElement(u,m({ref:e},s))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,d=new Array(l);d[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:n,d[1]=m;for(var s=2;s<l;s++)d[s]=a[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9454:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},d=void 0,m={unversionedId:"xstate.actorref",id:"xstate.actorref",title:"xstate.actorref",description:"Home &gt; xstate &gt; ActorRef",source:"@site/api/xstate/xstate.actorref.md",sourceDirName:".",slug:"/xstate.actorref",permalink:"/statelyai-docs/api/xstate/xstate.actorref",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.actorref.id",permalink:"/statelyai-docs/api/xstate/xstate.actorref.id"},next:{title:"xstate.actorref.send",permalink:"/statelyai-docs/api/xstate/xstate.actorref.send"}},p={},s=[{value:"ActorRef interface",id:"actorref-interface",level:2},{value:"Properties",id:"properties",level:2}],i={toc:s};function o(t){let{components:e,...a}=t;return(0,n.mdx)("wrapper",(0,r.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/"},"Home")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate"},"xstate")," ",">"," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorref"},"ActorRef")),(0,n.mdx)("h2",{id:"actorref-interface"},"ActorRef interface"),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Signature:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"export interface ActorRef<TEvent extends EventObject, TSnapshot extends Snapshot<unknown>> extends Subscribable<TSnapshot>, InteropObservable<TSnapshot> \n")),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Extends:")," ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.subscribable"},"Subscribable"),"<","TSnapshot",">",", ",(0,n.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.interopobservable"},"InteropObservable"),"<","TSnapshot",">"),(0,n.mdx)("h2",{id:"properties"},"Properties"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Property"),(0,n.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref._parent"},"_","parent?")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref"},"ActorRef"),"<","any, any",">"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.getpersistedstate"},"getPersistedState?")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"() =",">"," any"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.getsnapshot"},"getSnapshot")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"() =",">"," TSnapshot"),(0,n.mdx)("td",{parentName:"tr",align:null})),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.id"},"id")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null},"The unique identifier for this actor relative to its parent.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.send"},"send")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"(event: TEvent) =",">"," void"),(0,n.mdx)("td",{parentName:"tr",align:null})),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.sessionid"},"sessionId")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null})),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.src"},"src?")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.start"},"start?")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"() =",">"," void"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.status"},"status")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorstatus"},"ActorStatus")),(0,n.mdx)("td",{parentName:"tr",align:null})),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.stop"},"stop")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"() =",">"," void"),(0,n.mdx)("td",{parentName:"tr",align:null})),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.system"},"system?")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorsystem"},"ActorSystem"),"<","any",">"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref.tojson"},"toJSON?")),(0,n.mdx)("td",{parentName:"tr",align:null}),(0,n.mdx)("td",{parentName:"tr",align:null},"() =",">"," any"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"(Optional)"))))))}o.isMDXComponent=!0}}]);