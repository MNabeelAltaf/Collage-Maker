import{R as a,b as h,j as t,a as k}from"./app-KrnwSHJn.js";import{A as T}from"./AuthenticatedLayout-DiwffALl.js";import{A as E,G as I,S as N,T as F}from"./ActionBar-WMUz1Erl.js";import{A as P}from"./AssetImage-f2zaTduQ.js";import{C as _}from"./CustomSelectCategoryBox-CTmT3N-4.js";import{S as z,A as G}from"./Snackbar-DabAd_Z-.js";import{B as L}from"./Box-C3rZ52Yg.js";import"./ApplicationLogo-D2EIyXXd.js";import"./transition-BODHFSKf.js";import"./Delete-DK_ZgqZR.js";import"./Autocomplete-BElCKSLM.js";function Z({auth:x,type:M,assets:O,title:c,headerOptions:f,token:l,categories:y}){a.useEffect(()=>{localStorage.setItem("token",l)},[]);const[o,d]=a.useState({status:!1,message:"",severity:""}),u=a.useRef(),i=a.useRef(),[C,m]=a.useState([]),[r,p]=a.useState(1),[n,j]=a.useState({name:"All Categories",id:"all"}),S=()=>{p(r+1)};a.useEffect(()=>{u.current!==void 0&&i.current!==void 0&&i.current!==n&&m([]),v(n.name),u.current=r,i.current=n},[r,n]);const v=(s="All Categories")=>{h.get(route("v2.get.assets.for.single.category",{type:"type",category_name:s})+"?page="+r).then(e=>{m(R=>[...R,...e.data.images])})},A=(s,e)=>{e&&(j({name:e.name,id:e.id}),r!=1&&p(1))},w=(s,e)=>{d({status:!0,message:s,severity:e})},g=(s,e)=>{e!=="clickaway"&&d(!1)},b={Create:function(){handleSubmit()}},B=s=>{console.log("hii"),h.delete(route("delete.single.image.data",{uni:s}),{headers:{Accept:"application/json",Authorization:"Bearer "+l}}).then(e=>{w("Asset has been deleted","success")}).catch(e=>{console.error("Error:",e)})};return t.jsxs(T,{user:x.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:c}),actionBar:t.jsx(E,{actions:b,headerOptions:f,children:t.jsx(_,{categories:y,changeCategory:A})}),children:[t.jsx(k,{title:c}),o.status&&t.jsx(z,{open:o.status,autoHideDuration:4e3,onClose:g,TransitionComponent:I,anchorOrigin:{vertical:"top",horizontal:"right"},children:t.jsx(G,{onClose:g,severity:o.severity,variant:"filled",sx:{width:"100%"},children:o.message})}),t.jsx("div",{className:"square-pattern-bg",children:t.jsx("div",{className:"py-12",style:{width:"100%"},children:t.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",style:{position:"relative",width:"100%"},children:[t.jsx(N,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:C.map((s,e)=>t.jsx(P,{asset_type:s.type,category_name:s.category_name,src:s.thumbnail,isSingleImage:!0,uni:s.uni,title:s.title,handleRemoveFileInput:B},e))}),t.jsx(L,{direction:"row",flexWrap:"wrap",justifyContent:"center",sx:{width:"100%",display:"flex"},my:4,children:t.jsx(F,{action:S,type:"action",href:"",children:"Load More"},"abc")})]})})})]})}export{Z as default};
