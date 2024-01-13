(()=>{var e={};e.id=915,e.ids=[915],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3167:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var s=t(7096),a=t(6132),i=t(7284),o=t.n(i),n=t(2564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let c=["",{children:["(app)",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,666)),"/home/rado/personal/turizmo/frontend/src/app/(app)/profile/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,6538)),"/home/rado/personal/turizmo/frontend/src/app/(app)/layout.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,4553)),"/home/rado/personal/turizmo/frontend/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,220)),"/home/rado/personal/turizmo/frontend/src/app/not-found.js"]}],u=["/home/rado/personal/turizmo/frontend/src/app/(app)/profile/page.js"],d="/(app)/profile/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(app)/profile/page",pathname:"/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6219:(e,r,t)=>{Promise.resolve().then(t.bind(t,865))},865:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x});var s=t(3854),a=t(4218),i=t(1599),o=t(6726),n=t(3032),l=t(3341),c=t(55);function u({data:e,mutate:r}){let[t,i]=(0,a.useState)(e?.worker?.full_name||""),[u,d]=(0,a.useState)(e?.worker?.contact_number||""),[p,m]=(0,a.useState)(e?.worker?.hourly_wage||""),[x,h]=(0,a.useState)(e?.worker?.availability?JSON.parse(e?.worker?.availability):[!0,!0,!0,!0,!0,!0,!0]),[g,f]=(0,a.useState)(e?.worker?.cv||""),v=async e=>{e.preventDefault();try{let e=await c.Z.put("/api/worker/update",{fullName:t,contactNumber:u,hourlyWage:p,availability:x,cv:g});200===e.status?r():console.error("Error updating profile")}catch(e){console.error("Error updating profile",e)}},j=e=>{let r=[...x];r[e]=!r[e],h(r)};return s.jsx("div",{className:"w-64",children:(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx(l.Z,{htmlFor:"fullName",children:"Full Name"}),s.jsx(n.Z,{id:"fullName",type:"text",value:t,onChange:e=>i(e.target.value)})]}),(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx(l.Z,{htmlFor:"contactNumber",children:"Contact Number"}),s.jsx(n.Z,{id:"contactNumber",type:"text",value:u,onChange:e=>d(e.target.value)})]}),(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx(l.Z,{htmlFor:"hourlyWage",children:"Hourly Wage"}),s.jsx(n.Z,{id:"hourlyWage",type:"text",value:p,onChange:e=>m(e.target.value)})]}),(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx(l.Z,{htmlFor:"cv",children:"CV"}),s.jsx(n.Z,{id:"cv",type:"text",value:g,onChange:e=>f(e.target.value)})]}),(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx(l.Z,{children:"Availability"}),s.jsx("div",{className:"flex space-x-4",children:x.map((e,r)=>s.jsx("span",{className:`cursor-pointer inline-block w-6 h-6 rounded-full text-center leading-6 ${e?"bg-green-500 text-white":"bg-red-500 text-white"}`,onClick:()=>j(r),children:["M","T","W","T","F","S","S"][r]},r))})]}),s.jsx("div",{className:"mt-6",children:s.jsx(o.Z,{onClick:v,children:"Update Profile"})})]})})}function d({data:e,mutate:r}){let[t,i]=(0,a.useState)(e?.company?.company_name||""),[u,d]=(0,a.useState)(e?.company?.contact_number||""),p=async e=>{e.preventDefault();try{let e=await c.Z.put("/api/company/update",{companyName:t,contactNumber:u});200===e.status?r():console.error("Error updating profile")}catch(e){console.error("Error updating profile",e)}};return s.jsx("div",{className:"w-64",children:(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx(l.Z,{htmlFor:"companyName",children:"Company Name"}),s.jsx(n.Z,{id:"companyName",type:"text",value:t,onChange:e=>i(e.target.value)})]}),(0,s.jsxs)("div",{className:"mt-4",children:[s.jsx(l.Z,{htmlFor:"contactNumber",children:"Contact Number"}),s.jsx(n.Z,{id:"contactNumber",type:"text",value:u,onChange:e=>d(e.target.value)})]}),s.jsx("div",{className:"mt-6",children:s.jsx(o.Z,{onClick:p,children:"Update Profile"})})]})})}var p=t(2324),m=t(7072);function x(){let{user:e}=(0,i.a)({middleware:"auth"}),{data:r,error:t,mutate:a,isLoading:o}=(0,p.i)(e?.is_company?"api/company/me":"/api/worker/me");return t?s.jsx("p",{children:t.message}):s.jsx("div",{className:"py-8 h-[calc(100vh-64px)]",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 h-full",children:s.jsx("div",{className:"bg-white overflow-auto shadow-sm sm:rounded-lg flex justify-center p-6 h-full",children:r?s.jsx(s.Fragment,{children:e.is_company?s.jsx(d,{data:r,mutate:a}):s.jsx(u,{data:r,mutate:a})}):s.jsx("div",{className:"flex items-center justify-center h-full",children:o?s.jsx(m.Z,{}):t?t?.message:""})})})})}},6726:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(3854);let a=({type:e="submit",className:r,...t})=>s.jsx("button",{type:e,className:`${r} inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,...t})},3032:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(3854);let a=({disabled:e=!1,className:r,...t})=>s.jsx("input",{disabled:e,className:`${r} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full`,...t})},3341:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(3854);let a=({className:e,children:r,...t})=>s.jsx("label",{className:`${e} block font-medium text-sm text-gray-700`,...t,children:r})},2324:(e,r,t)=>{"use strict";t.d(r,{i:()=>l});var s=t(9335),a=t(55),i=t(4218),o=t(1018);let n=async(e,r,t)=>{let s=(0,o.useRouter)();try{let s=await (0,a.Z)({method:r,url:e,...t});return s.data}catch(e){if(409!==e.response.status)throw e;s.push("/verify-email")}},l=(e,r="GET",t={})=>{let{data:a,error:o,mutate:l,isValidating:c}=(0,s.ZP)([e,r],()=>n(e,r,t),t);return(0,i.useEffect)(()=>{},[a,o]),{data:a,error:o,mutate:l,isLoading:c}}},666:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>i,default:()=>l});var s=t(5153);let a=(0,s.createProxy)(String.raw`/home/rado/personal/turizmo/frontend/src/app/(app)/profile/page.js`),{__esModule:i,$$typeof:o}=a,n=a.default,l=n}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[84,443,490,575],()=>t(3167));module.exports=s})();