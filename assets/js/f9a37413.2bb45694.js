"use strict";(self.webpackChunkflower_apps_docs=self.webpackChunkflower_apps_docs||[]).push([[3340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>w});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,w=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(w,a(a({ref:t},f),{},{components:n})):o.createElement(w,a({ref:t},f))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},a="Create a Flow definition",l={unversionedId:"tutorial-basics/create-a-flow",id:"tutorial-basics/create-a-flow",title:"Create a Flow definition",description:"Follow a few steps to create a new flow definition :",source:"@site/docs/tutorial-basics/create-a-flow.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-flow",permalink:"/docs/next/tutorial-basics/create-a-flow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-flow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/next/category/tutorial---basics"},next:{title:"Create a Page",permalink:"/docs/next/tutorial-basics/create-a-page"}},s={},c=[{value:"Create your first flow definition",id:"create-your-first-flow-definition",level:2},{value:"Step 1 : define the flow key",id:"step-1--define-the-flow-key",level:3},{value:"Step 2 : add flow policies",id:"step-2--add-flow-policies",level:3},{value:"Step 3 : save flow definition",id:"step-3--save-flow-definition",level:3},{value:"Step 4 : check the new flow definition",id:"step-4--check-the-new-flow-definition",level:3}],f={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-flow-definition"},"Create a Flow definition"),(0,i.kt)("p",null,"Follow a ",(0,i.kt)("strong",{parentName:"p"},"few steps")," to create a ",(0,i.kt)("strong",{parentName:"p"},"new flow definition")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log in to flower designer"),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"flow definition")," menu"),(0,i.kt)("li",{parentName:"ul"},"Define a ",(0,i.kt)("strong",{parentName:"li"},"flow key")," then add the ",(0,i.kt)("strong",{parentName:"li"},"flow policies"))),(0,i.kt)("h2",{id:"create-your-first-flow-definition"},"Create your first flow definition"),(0,i.kt)("h3",{id:"step-1--define-the-flow-key"},"Step 1 : define the flow key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'flow key shoud be unique and is used to execution the flow. For example, "greet" or "user-save" ')),(0,i.kt)("h3",{id:"step-2--add-flow-policies"},"Step 2 : add flow policies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"choose (click on the policy name) from the policy catalog listed in the policy definition"),(0,i.kt)("li",{parentName:"ul"},"for example, to greet add a response policy and send hello in the responseContent (click on the policy to define the responseCode to 200 and responseContent to hello)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FlowDefinition Greet",src:n(5613).Z,width:"897",height:"983"})),(0,i.kt)("h3",{id:"step-3--save-flow-definition"},"Step 3 : save flow definition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"save and publish the flow definition")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FlowDefinition Greet",src:n(2234).Z,width:"1074",height:"869"})),(0,i.kt)("h3",{id:"step-4--check-the-new-flow-definition"},"Step 4 : check the new flow definition"),(0,i.kt)("p",null,"A new flow is now available, go back to home page to check the new flow definition."))}d.isMDXComponent=!0},2234:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flow_definition_greet-cf03cb79be7d32ab4b4366038b29aa71.png"},5613:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flow_definition_greet_policy-b6661c9443ec2f35b31577b7b86a9660.png"}}]);