import{R as s,b as h,j as t,a as T}from"./app-KrnwSHJn.js";import{A as k}from"./AuthenticatedLayout-DiwffALl.js";import{A as N,G as E,S as F,T as P}from"./ActionBar-WMUz1Erl.js";import{A as z}from"./AssetImage-f2zaTduQ.js";import{C as G}from"./CustomSelectCategoryBox-CTmT3N-4.js";import{S as I,A as L}from"./Snackbar-DabAd_Z-.js";import{B as M}from"./Box-C3rZ52Yg.js";import"./ApplicationLogo-D2EIyXXd.js";import"./transition-BODHFSKf.js";import"./Delete-DK_ZgqZR.js";import"./Autocomplete-BElCKSLM.js";function Z({auth:x,templates:O,title:c,headerOptions:f,token:g,categories:y}){const[o,l]=s.useState({status:!1,message:"",severity:""}),d=s.useRef(),i=s.useRef(),[C,m]=s.useState([]),[r,u]=s.useState(1),[n,j]=s.useState({name:"All Categories",id:"all"}),v=()=>{u(r+1)};s.useEffect(()=>{d.current!==void 0&&i.current!==void 0&&i.current!==n&&m([]),S(n.name),d.current=r,i.current=n},[r,n]);const S=(a="All Categories")=>{h.get(route("v2.get.all.template.for.a.category",{category_name:a})+"?page="+r+"&build=1.2.1").then(e=>{m(R=>[...R,...e.data.templates])})},A=(a,e)=>{e&&(j({name:e.name,id:e.id}),r!=1&&u(1))},w=(a,e)=>{l({status:!0,message:a,severity:e})},p=(a,e)=>{e!=="clickaway"&&l(!1)},b={Create:function(){handleSubmit()}},B=a=>{h.delete(route("delete.template",{uni:a}),{headers:{Accept:"application/json",Authorization:"Bearer "+g}}).then(e=>{w("Template and its assets have been deleted","success")}).catch(e=>{console.error("Error:",e)})};return t.jsxs(k,{user:x.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:c}),actionBar:t.jsx(N,{actions:b,headerOptions:f,children:t.jsx(G,{categories:y,changeCategory:A})}),children:[t.jsx(T,{title:c}),o.status&&t.jsx(I,{open:o.status,autoHideDuration:4e3,onClose:p,TransitionComponent:E,anchorOrigin:{vertical:"top",horizontal:"right"},children:t.jsx(L,{onClose:p,severity:o.severity,variant:"filled",sx:{width:"100%"},children:o.message})}),t.jsx("div",{className:"square-pattern-bg",children:t.jsx("div",{className:"py-12",style:{width:"100%"},children:t.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative",width:"100%"},children:[t.jsx(F,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:C.map((a,e)=>t.jsx(z,{src:a.thumbnail,uni:a.uni,title:a.title,handleRemoveFileInput:B},e))}),t.jsx(M,{direction:"row",flexWrap:"wrap",justifyContent:"center",sx:{width:"100%",display:"flex"},my:4,children:t.jsx(P,{action:v,type:"action",href:"",children:"Load More"},"abc")})]})})})]})}export{Z as default};
