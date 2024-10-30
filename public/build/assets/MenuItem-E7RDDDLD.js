import{d as p,g as j,s as F,b as N,p as P,_ as r,k as c,u as E,e as G,D as x,E as _,H as D,f as I,h as H}from"./ActionBar-WMUz1Erl.js";import{r as d,j as $}from"./app-KrnwSHJn.js";const S=p("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),M=S,U=p("MuiListItemIcon",["root","alignItemsFlexStart"]),O=U,W=p("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),k=W;function z(e){return j("MuiMenuItem",e)}const A=p("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=A,h=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],q=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},J=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:u,classes:o}=e,i=H({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",u&&"selected"]},z,o);return r({},o,i)},K=F(N,{shouldForwardProp:e=>P(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:q})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${k.root}`]:{marginTop:0,marginBottom:0},[`& .${k.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),Q=d.forwardRef(function(t,s){const a=E({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:o=!1,divider:b=!1,disableGutters:i=!1,focusVisibleClassName:R,role:V="menuitem",tabIndex:v,className:w}=a,L=G(a,h),f=d.useContext(x),C=d.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),g=d.useRef(null);_(()=>{l&&g.current&&g.current.focus()},[l]);const T=r({},a,{dense:C.dense,divider:b,disableGutters:i}),m=J(a),B=D(g,s);let y;return a.disabled||(y=v!==void 0?v:-1),$.jsx(x.Provider,{value:C,children:$.jsx(K,r({ref:B,role:V,tabIndex:y,component:u,focusVisibleClassName:I(m.focusVisible,R),className:I(m.root,w)},L,{ownerState:T,classes:m}))})}),Z=Q;export{Z as M};