"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[8167],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>d,useMDXComponents:()=>g,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){return function(t){var n=g(t.components);return r.createElement(e,o({},t,{components:n}))}},g=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=g(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"New experimental feature: generating flows",description:"Learn how to generate and modify flows from plain text using Stately's new intelligent features",tags:["pro","generate flows","modeling"],authors:["david"],date:new Date("2023-09-06T00:00:00.000Z"),slug:"2023-09-06-generating-flows",image:"/blog/2023-09-06-generating-flows.png"},i=void 0,l={permalink:"/statelyai-docs/blog/2023-09-06-generating-flows",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-09-06-generating-flows/index.mdx",source:"@site/blog/2023-09-06-generating-flows/index.mdx",title:"New experimental feature: generating flows",description:"Learn how to generate and modify flows from plain text using Stately's new intelligent features",date:"2023-09-06T00:00:00.000Z",formattedDate:"September 6, 2023",tags:[{label:"pro",permalink:"/statelyai-docs/blog/tags/pro"},{label:"generate flows",permalink:"/statelyai-docs/blog/tags/generate-flows"},{label:"modeling",permalink:"/statelyai-docs/blog/tags/modeling"}],readingTime:4.3,hasTruncateMarker:!0,authors:[{name:"David Khourshid",title:"Stately Team",url:"https://github.com/davidkpiano",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/david.png",key:"david"}],frontMatter:{title:"New experimental feature: generating flows",description:"Learn how to generate and modify flows from plain text using Stately's new intelligent features",tags:["pro","generate flows","modeling"],authors:["david"],date:"2023-09-06T00:00:00.000Z",slug:"2023-09-06-generating-flows",image:"/blog/2023-09-06-generating-flows.png"},prevItem:{title:"Event schemas, free Viewer roles for teams, and more!",permalink:"/statelyai-docs/blog/2023-09-15-event-schemas-viewer-role"},nextItem:{title:"Fixes and improvements",permalink:"/statelyai-docs/blog/2023-09-06-fixes-and-improvements"}},s={authorsImageUrls:[void 0]},c=[{value:"New generative features",id:"new-generative-features",level:2}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"As software architecture grows increasingly complex, developers and project managers often grapple with the challenge of visualizing and organizing application logic. This is where state machines and flows come into play. State machines are a powerful tool for modeling application logic, and flows are a great way to visualize and organize state machines. At Stately, we\u2019re committed to making state machines and flows more accessible and easier to use."),(0,a.mdx)("p",null,"But state machines, though powerful, have a learning curve that can be a bit intimidating. And then there\u2019s the blank slate problem: where do you even start when modeling a flow? Furthermore, when flows get large, how can you apply broad changes in a more natural way while keeping the flow intact and logically correct? These are some of the challenges we set out to solve with our new experimental generative features."),(0,a.mdx)("h2",{id:"new-generative-features"},"New generative features"),(0,a.mdx)("p",null,"In response to these challenges, we are thrilled to introduce two experimental beta features:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The ability to ",(0,a.mdx)("strong",{parentName:"li"},"generate a flow")," from plain text"),(0,a.mdx)("li",{parentName:"ul"},"The ability to ",(0,a.mdx)("strong",{parentName:"li"},"modify an existing flow")," from plain text")))}g.isMDXComponent=!0}}]);