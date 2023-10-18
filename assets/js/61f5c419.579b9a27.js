"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[45499],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>x,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>l});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){return function(t){var n=d(t.components);return r.createElement(e,s({},t,{components:n}))}},d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},x=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),x=a,u=l["".concat(o,".").concat(x)]||l[x]||m[x]||s;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={},o=void 0,i={unversionedId:"xstate.assign",id:"xstate.assign",title:"xstate.assign",description:"Home &gt; xstate &gt; assign",source:"@site/api/xstate/xstate.assign.md",sourceDirName:".",slug:"/xstate.assign",permalink:"/statelyai-docs/api/xstate/next/xstate.assign",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xstate.areallimplementationsassumedtobeprovided",permalink:"/statelyai-docs/api/xstate/next/xstate.areallimplementationsassumedtobeprovided"},next:{title:"xstate.assignaction._out_tactor",permalink:"/statelyai-docs/api/xstate/next/xstate.assignaction._out_tactor"}},p={},c=[{value:"assign() function",id:"assign-function",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/"},"Home")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate"},"xstate")," ",">"," ",(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.assign"},"assign")),(0,a.mdx)("h2",{id:"assign-function"},"assign() function"),(0,a.mdx)("p",null,"Updates the current context of the machine."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Signature:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-typescript"},"export declare function assign<TContext extends MachineContext, TExpressionEvent extends AnyEventObject = AnyEventObject, // TODO: consider using a stricter `EventObject` here\nTExpressionAction extends ParameterizedObject | undefined = ParameterizedObject | undefined, TEvent extends EventObject = EventObject, TActor extends ProvidedActor = ProvidedActor>(assignment: Assigner<LowInfer<TContext>, TExpressionEvent, TExpressionAction, TEvent, TActor> | PropertyAssigner<LowInfer<TContext>, TExpressionEvent, TExpressionAction, TEvent, TActor>): AssignAction<TContext, TExpressionEvent, TExpressionAction, TEvent, TActor>;\n")),(0,a.mdx)("h2",{id:"parameters"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,a.mdx)("th",{parentName:"tr",align:null},"Type"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"assignment"),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.assigner"},"Assigner"),"<",(0,a.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.lowinfer"},"LowInfer"),"<","TContext",">",", TExpressionEvent, TExpressionAction, TEvent, TActor",">"," ","|"," ",(0,a.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.propertyassigner"},"PropertyAssigner"),"<",(0,a.mdx)("a",{parentName:"td",href:"/statelyai-docs/api/xstate/next/xstate.lowinfer"},"LowInfer"),"<","TContext",">",", TExpressionEvent, TExpressionAction, TEvent, TActor",">"),(0,a.mdx)("td",{parentName:"tr",align:null},"An object that represents the partial context to update.")))),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Returns:")),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/statelyai-docs/api/xstate/next/xstate.assignaction"},"AssignAction"),"<","TContext, TExpressionEvent, TExpressionAction, TEvent, TActor",">"))}d.isMDXComponent=!0}}]);