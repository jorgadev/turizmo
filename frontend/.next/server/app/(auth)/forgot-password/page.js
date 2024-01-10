(()=>{var e={};e.id=985,e.ids=[985],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9141:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var r=s(7096),a=s(6132),i=s(7284),o=s.n(i),n=s(2564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let d=["",{children:["(auth)",{children:["forgot-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3509)),"/home/rado/personal/turizmo/frontend/src/app/(auth)/forgot-password/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,1935)),"/home/rado/personal/turizmo/frontend/src/app/(auth)/layout.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,4553)),"/home/rado/personal/turizmo/frontend/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,220)),"/home/rado/personal/turizmo/frontend/src/app/not-found.js"]}],u=["/home/rado/personal/turizmo/frontend/src/app/(auth)/forgot-password/page.js"],c="/(auth)/forgot-password/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/forgot-password/page",pathname:"/forgot-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3231:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3579,23)),Promise.resolve().then(s.t.bind(s,619,23)),Promise.resolve().then(s.t.bind(s,1459,23)),Promise.resolve().then(s.t.bind(s,3456,23)),Promise.resolve().then(s.t.bind(s,847,23)),Promise.resolve().then(s.t.bind(s,7303,23))},6306:(e,t,s)=>{Promise.resolve().then(s.bind(s,2233))},5649:()=>{},5303:()=>{},6272:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({status:e,className:t,...s})=>r.jsx(r.Fragment,{children:e&&r.jsx("div",{className:`${t} font-medium text-sm text-green-600`,...s,children:e})})},2233:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(3854),a=s(6726),i=s(3032),o=s(1724),n=s(3341),l=s(2990),d=s(4218),u=s(6272);let c=()=>{let{forgotPassword:e}=(0,l.a)({middleware:"guest",redirectIfAuthenticated:"/dashboard"}),[t,s]=(0,d.useState)(""),[c,m]=(0,d.useState)([]),[p,h]=(0,d.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email email address and we will email you a password reset link that that will allow you to choose a new one."}),r.jsx(u.Z,{className:"mb-4",status:p}),(0,r.jsxs)("form",{onSubmit:s=>{s.preventDefault(),e({email:t,setErrors:m,setStatus:h})},children:[(0,r.jsxs)("div",{children:[r.jsx(n.Z,{htmlFor:"email",children:"Email"}),r.jsx(i.Z,{id:"email",type:"email",name:"email",value:t,className:"block mt-1 w-full",onChange:e=>s(e.target.value),required:!0,autoFocus:!0}),r.jsx(o.Z,{messages:c.email,className:"mt-2"})]}),r.jsx("div",{className:"flex items-center justify-end mt-4",children:r.jsx(a.Z,{children:"Email Password Reset Link"})})]})]})}},6726:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({type:e="submit",className:t,...s})=>r.jsx("button",{type:e,className:`${t} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,...s})},3032:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({disabled:e=!1,className:t,...s})=>r.jsx("input",{disabled:e,className:`${t} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,...s})},1724:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({messages:e=[],className:t=""})=>r.jsx(r.Fragment,{children:e.length>0&&r.jsx(r.Fragment,{children:e.map((e,s)=>r.jsx("p",{className:`${t} text-sm text-red-600`,children:e},s))})})},3341:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({className:e,children:t,...s})=>r.jsx("label",{className:`${e} block font-medium text-sm text-gray-700`,...s,children:t})},2990:(e,t,s)=>{"use strict";s.d(t,{a:()=>d});var r=s(9335),a=s(6575),i=s.n(a);let o=i().create({baseURL:"https://api-dev.turizmo.pro",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0});var n=s(4218),l=s(1018);let d=({middleware:e,redirectIfAuthenticated:t}={})=>{let s=(0,l.useRouter)(),a=(0,l.useParams)(),{data:i,error:d,mutate:u}=(0,r.ZP)("/api/user",()=>o.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;s.push("/verify-email")})),c=()=>o.get("/sanctum/csrf-cookie"),m=async({setErrors:e,...t})=>{await c(),e([]),o.post("/register",t).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},p=async({setErrors:e,setStatus:t,...s})=>{await c(),e([]),t(null),o.post("/login",s).then(()=>u()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},h=async({setErrors:e,setStatus:t,email:s})=>{await c(),e([]),t(null),o.post("/forgot-password",{email:s}).then(e=>t(e.data.status)).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},x=async({setErrors:e,setStatus:t,...r})=>{await c(),e([]),t(null),o.post("/reset-password",{token:a.token,...r}).then(e=>s.push("/login?reset="+btoa(e.data.status))).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},g=async()=>{d||await o.post("/logout").then(()=>u()),window.location.pathname="/login"};return(0,n.useEffect)(()=>{"guest"===e&&t&&i&&s.push(t),"/verify-email"===window.location.pathname&&i?.email_verified_at&&s.push(t),"auth"===e&&d&&g()},[i,d]),{user:i,register:m,login:p,forgotPassword:h,resetPassword:x,resendEmailVerification:({setStatus:e})=>{o.post("/email/verification-notification").then(t=>e(t.data.status))},logout:g}}},3509:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>l});var r=s(5153);let a=(0,r.createProxy)(String.raw`/home/rado/personal/turizmo/frontend/src/app/(auth)/forgot-password/page.js`),{__esModule:i,$$typeof:o}=a,n=a.default,l=n},1935:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>a});var r=s(4656);let a={title:"Laravel"},i=({children:e})=>r.jsx("div",{children:r.jsx("div",{className:"font-sans text-gray-900 antialiased",children:r.jsx("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:r.jsx("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:e})})})})},4553:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>a});var r=s(4656);s(833);let a={title:"Laravel"},i=({children:e})=>r.jsx("html",{lang:"en",children:r.jsx("body",{className:"antialiased",children:e})})},220:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(4656);let a=()=>r.jsx("div",{className:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0",children:r.jsx("div",{className:"max-w-xl mx-auto sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex items-center pt-8 sm:justify-start sm:pt-0",children:[r.jsx("div",{className:"px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider",children:"404"}),r.jsx("div",{className:"ml-4 text-lg text-gray-500 uppercase tracking-wider",children:"Not Found"})]})})})},833:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[84,443],()=>s(9141));module.exports=r})();