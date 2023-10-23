"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[92325],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,x=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(x,l(l({ref:t},p),{},{components:n})):r.createElement(x,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=x;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},84842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=n(67294),o=n(3905);const i={title:"pure",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"xstate.pure",id:"xstate.pure",title:"pure",description:"pure() function",source:"@site/api/xstate/xstate.pure.md",sourceDirName:".",slug:"/xstate.pure",permalink:"/statelyai-docs/api/xstate/xstate.pure",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"pure",hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},p={},s=[{value:"pure() function",id:"pure-function",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"pure-function"},"pure() function"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Signature:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"export declare function pure<TContext extends MachineContext, TExpressionEvent extends EventObject, TExpressionAction extends ParameterizedObject | undefined = ParameterizedObject | undefined, TEvent extends EventObject = TExpressionEvent, TActor extends ProvidedActor = ProvidedActor, TAction extends ParameterizedObject = ParameterizedObject, TGuard extends ParameterizedObject = ParameterizedObject, TDelay extends string = string>(getActions: ({ context, event }: {\n    context: TContext;\n    event: TExpressionEvent;\n}) => Actions<TContext, TExpressionEvent, NoInfer<TEvent>, undefined, TActor, NoInfer<TAction>, NoInfer<TGuard>, TDelay> | undefined): PureAction<TContext, TExpressionEvent, TExpressionAction, TEvent, TActor, TAction, TGuard, TDelay>;\n")),(0,o.mdx)("h2",{id:"parameters"},"Parameters"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"getActions"),(0,o.mdx)("td",{parentName:"tr",align:null},"({ context, event }: { context: TContext; event: TExpressionEvent; }) =",">"," ",(0,o.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.actions"},"Actions"),(0,o.mdx)(a.Fragment,null),"<","TContext, TExpressionEvent, ",(0,o.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.noinfer"},"NoInfer"),(0,o.mdx)(a.Fragment,null),"<","TEvent",">",", undefined, TActor, ",(0,o.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.noinfer"},"NoInfer"),(0,o.mdx)(a.Fragment,null),"<","TAction",">",", ",(0,o.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/xstate.noinfer"},"NoInfer"),(0,o.mdx)(a.Fragment,null),"<","TGuard",">",", TDelay",">"," ","|"," undefined"),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Returns:")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/xstate.pureaction"},"PureAction"),(0,o.mdx)(a.Fragment,null),"<","TContext, TExpressionEvent, TExpressionAction, TEvent, TActor, TAction, TGuard, TDelay",">"))}d.isMDXComponent=!0}}]);