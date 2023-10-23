"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[83553],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>o,MDXProvider:()=>x,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},l.apply(this,arguments)}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){return function(e){var a=p(e.components);return r.createElement(t,l({},e,{components:a}))}},p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},x=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),s=p(a),x=n,u=s["".concat(d,".").concat(x)]||s[x]||c[x]||l;return a?r.createElement(u,m(m({ref:e},o),{},{components:a})):r.createElement(u,m({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,d=new Array(l);d[0]=u;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m.mdxType="string"==typeof t?t:n,d[1]=m;for(var o=2;o<l;o++)d[o]=a[o];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54675:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var r=a(87462),n=a(67294),l=a(3905);const d={title:"Actor",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},m=void 0,i={unversionedId:"xstate.actor",id:"xstate.actor",title:"Actor",description:"Actor class",source:"@site/api/xstate/xstate.actor.md",sourceDirName:".",slug:"/xstate.actor",permalink:"/statelyai-docs/api/xstate/xstate.actor",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Actor",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},o={},s=[{value:"Actor class",id:"actor-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],p={toc:s};function x(t){let{components:e,...a}=t;return(0,l.mdx)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"actor-class"},"Actor class"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Signature:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-typescript"},"export declare class Actor<TLogic extends AnyActorLogic> implements ActorRef<EventFromLogic<TLogic>, SnapshotFrom<TLogic>> \n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Implements:")," ",(0,l.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.actorref"},"ActorRef"),(0,l.mdx)(n.Fragment,null),"<",(0,l.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.eventfromlogic"},"EventFromLogic"),(0,l.mdx)(n.Fragment,null),"<","TLogic",">",", ",(0,l.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.snapshotfrom"},"SnapshotFrom"),(0,l.mdx)(n.Fragment,null),"<","TLogic",">",">"),(0,l.mdx)("h2",{id:"constructors"},"Constructors"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Constructor"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor._constructor_"},"(constructor)(logic, options)")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Creates a new actor instance for the given logic with the provided options, if any.")))),(0,l.mdx)("h2",{id:"properties"},"Properties"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor._parent"},"_","parent?")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref"},"ActorRef"),(0,l.mdx)(n.Fragment,null),"<","any, any",">"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(Optional)"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.clock"},"clock")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Clock"),(0,l.mdx)("td",{parentName:"tr",align:null},"The clock that is responsible for setting and clearing timeouts, such as delayed events and transitions.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.id"},"id")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The unique identifier for this actor relative to its parent.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.logic"},"logic")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"TLogic"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.options"},"options")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Readonly","<",(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actoroptions"},"ActorOptions"),(0,l.mdx)(n.Fragment,null),"<","TLogic",">",">"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.ref"},"ref")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorref"},"ActorRef"),(0,l.mdx)(n.Fragment,null),"<",(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.eventfromlogic"},"EventFromLogic"),(0,l.mdx)(n.Fragment,null),"<","TLogic",">",", ",(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.snapshotfrom"},"SnapshotFrom"),(0,l.mdx)(n.Fragment,null),"<","TLogic",">",">"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.sessionid"},"sessionId")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The globally unique process ID for this invocation.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.src"},"src?")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(Optional)"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.status"},"status")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorstatus"},"ActorStatus")),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether the service is started.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.system"},"system")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actorsystem"},"ActorSystem"),(0,l.mdx)(n.Fragment,null),"<","any",">"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"methods"},"Methods"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Method"),(0,l.mdx)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor._symbolobservable_"},"[","symbolObservable","]","()")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.cancel"},"cancel(sendId)")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.delaysend"},"delaySend(params)")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.getpersistedstate"},"getPersistedState()")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.getsnapshot"},"getSnapshot()")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.send"},"send(event)")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Sends an event to the running Actor to trigger a transition.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.start"},"start()")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Starts the Actor from the initial state")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.stop"},"stop()")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Stops the Actor and unsubscribe all listeners.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.subscribe"},"subscribe(observer)")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.subscribe_1"},"subscribe(nextListener, errorListener, completeListener)")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actor.tojson"},"toJSON()")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})))))}x.isMDXComponent=!0}}]);