import{j as o,r as g,b as ee,R as J,a as We}from"./app-KrnwSHJn.js";import{A as Qe}from"./AuthenticatedLayout-DiwffALl.js";import{c as re,d as _e,g as Oe,s as Te,p as Ke,j as U,_,k as et,u as Ie,e as Ne,f as Ae,h as Re,q as De,t as tt,v as me,r as Y,i as Z,S as O,a as H,G as Me,P as nt,M as rt,o as st,A as it,L as at}from"./ActionBar-WMUz1Erl.js";import{S as ot,M as lt}from"./ModelComponent-DWRQufwO.js";import{B as M}from"./Box-C3rZ52Yg.js";import{T as $,C as ct,S as ge,A as ve}from"./Snackbar-DabAd_Z-.js";import{P as ut,A as ht}from"./Autocomplete-BElCKSLM.js";import{M as dt}from"./MenuItem-E7RDDDLD.js";import"./ApplicationLogo-D2EIyXXd.js";import"./transition-BODHFSKf.js";function ft(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function pt(n){return parseFloat(n)}const mt=re(o.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),gt=re(o.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),vt=re(o.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function xt(n){return Oe("MuiCheckbox",n)}const bt=_e("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),W=bt,yt=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],wt=n=>{const{classes:e,indeterminate:t,color:r,size:s}=n,i={root:["root",t&&"indeterminate",`color${U(r)}`,`size${U(s)}`]},a=Re(i,xt,e);return _({},e,a)},St=Te(ot,{shouldForwardProp:n=>Ke(n)||n==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.indeterminate&&e.indeterminate,e[`size${U(t.size)}`],t.color!=="default"&&e[`color${U(t.color)}`]]}})(({theme:n,ownerState:e})=>_({color:(n.vars||n).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:n.vars?`rgba(${e.color==="default"?n.vars.palette.action.activeChannel:n.vars.palette[e.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:et(e.color==="default"?n.palette.action.active:n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${W.checked}, &.${W.indeterminate}`]:{color:(n.vars||n).palette[e.color].main},[`&.${W.disabled}`]:{color:(n.vars||n).palette.action.disabled}})),kt=o.jsx(gt,{}),$t=o.jsx(mt,{}),Ct=o.jsx(vt,{}),jt=g.forwardRef(function(e,t){var r,s;const i=Ie({props:e,name:"MuiCheckbox"}),{checkedIcon:a=kt,color:l="primary",icon:u=$t,indeterminate:c=!1,indeterminateIcon:h=Ct,inputProps:d,size:f="medium",className:m}=i,p=Ne(i,yt),v=c?h:u,x=c?h:a,C=_({},i,{color:l,indeterminate:c,size:f}),k=wt(C);return o.jsx(St,_({type:"checkbox",inputProps:_({"data-indeterminate":c},d),icon:g.cloneElement(v,{fontSize:(r=v.props.fontSize)!=null?r:f}),checkedIcon:g.cloneElement(x,{fontSize:(s=x.props.fontSize)!=null?s:f}),ownerState:C,ref:t,className:Ae(k.root,m)},p,{classes:k}))}),Et=jt;function _t(n){return Oe("MuiSkeleton",n)}_e("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Ot=["animation","className","component","height","style","variant","width"];let F=n=>n,xe,be,ye,we;const Tt=n=>{const{classes:e,variant:t,animation:r,hasChildren:s,width:i,height:a}=n;return Re({root:["root",t,r,s&&"withChildren",s&&!i&&"fitContent",s&&!a&&"heightAuto"]},_t,e)},It=De(xe||(xe=F`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Nt=De(be||(be=F`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),At=Te("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],t.animation!==!1&&e[t.animation],t.hasChildren&&e.withChildren,t.hasChildren&&!t.width&&e.fitContent,t.hasChildren&&!t.height&&e.heightAuto]}})(({theme:n,ownerState:e})=>{const t=ft(n.shape.borderRadius)||"px",r=pt(n.shape.borderRadius);return _({display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:tt(n.palette.text.primary,n.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${t}/${Math.round(r/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(n.vars||n).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:n})=>n.animation==="pulse"&&me(ye||(ye=F`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),It),({ownerState:n,theme:e})=>n.animation==="wave"&&me(we||(we=F`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Nt,(e.vars||e).palette.action.hover)),Rt=g.forwardRef(function(e,t){const r=Ie({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:a="span",height:l,style:u,variant:c="text",width:h}=r,d=Ne(r,Ot),f=_({},r,{animation:s,component:a,variant:c,hasChildren:!!d.children}),m=Tt(f);return o.jsx(At,_({as:a,ref:t,className:Ae(m.root,i),ownerState:f},d,{style:_({width:h,height:l},u)}))}),Q=Rt;function A(n){this._maxSize=n,this.clear()}A.prototype.clear=function(){this._size=0,this._values=Object.create(null)};A.prototype.get=function(n){return this._values[n]};A.prototype.set=function(n,e){return this._size>=this._maxSize&&this.clear(),n in this._values||this._size++,this._values[n]=e};var Dt=/[^.^\]^[]+|(?=\[\]|\.\.)/g,ze=/^\d+$/,Mt=/^\d/,zt=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Pt=/^\s*(['"]?)(.*?)(\1)\s*$/,se=512,Se=new A(se),ke=new A(se),$e=new A(se),Pe={Cache:A,split:te,normalizePath:K,setter:function(n){var e=K(n);return ke.get(n)||ke.set(n,function(r,s){for(var i=0,a=e.length,l=r;i<a-1;){var u=e[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;l=l[e[i++]]}l[e[i]]=s})},getter:function(n,e){var t=K(n);return $e.get(n)||$e.set(n,function(s){for(var i=0,a=t.length;i<a;)if(s!=null||!e)s=s[t[i++]];else return;return s})},join:function(n){return n.reduce(function(e,t){return e+(ie(t)||ze.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(n,e,t){Bt(Array.isArray(n)?n:te(n),e,t)}};function K(n){return Se.get(n)||Se.set(n,te(n).map(function(e){return e.replace(Pt,"$2")}))}function te(n){return n.match(Dt)||[""]}function Bt(n,e,t){var r=n.length,s,i,a,l;for(i=0;i<r;i++)s=n[i],s&&(qt(s)&&(s='"'+s+'"'),l=ie(s),a=!l&&/^\d+$/.test(s),e.call(t,s,l,a,i,n))}function ie(n){return typeof n=="string"&&n&&["'",'"'].indexOf(n.charAt(0))!==-1}function Vt(n){return n.match(Mt)&&!n.match(ze)}function Lt(n){return zt.test(n)}function qt(n){return!ie(n)&&(Vt(n)||Lt(n))}var Be={exports:{}};Be.exports=function(n){return Ve(Ut(n),n)};Be.exports.array=Ve;function Ve(n,e){var t=n.length,r=new Array(t),s={},i=t,a=Ht(e),l=Ft(n);for(e.forEach(function(c){if(!l.has(c[0])||!l.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||u(n[i],i,new Set);return r;function u(c,h,d){if(d.has(c)){var f;try{f=", node was:"+JSON.stringify(c)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!l.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!s[h]){s[h]=!0;var m=a.get(c)||new Set;if(m=Array.from(m),h=m.length){d.add(c);do{var p=m[--h];u(p,l.get(p),d)}while(h);d.delete(c)}r[--t]=c}}}function Ut(n){for(var e=new Set,t=0,r=n.length;t<r;t++){var s=n[t];e.add(s[0]),e.add(s[1])}return Array.from(e)}function Ht(n){for(var e=new Map,t=0,r=n.length;t<r;t++){var s=n[t];e.has(s[0])||e.set(s[0],new Set),e.has(s[1])||e.set(s[1],new Set),e.get(s[0]).add(s[1])}return e}function Ft(n){for(var e=new Map,t=0,r=n.length;t<r;t++)e.set(n[t],t);return e}const Xt=Object.prototype.toString,Gt=Error.prototype.toString,Yt=RegExp.prototype.toString,Zt=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Jt=/^Symbol\((.*)\)(.*)$/;function Wt(n){return n!=+n?"NaN":n===0&&1/n<0?"-0":""+n}function Ce(n,e=!1){if(n==null||n===!0||n===!1)return""+n;const t=typeof n;if(t==="number")return Wt(n);if(t==="string")return e?`"${n}"`:n;if(t==="function")return"[Function "+(n.name||"anonymous")+"]";if(t==="symbol")return Zt.call(n).replace(Jt,"Symbol($1)");const r=Xt.call(n).slice(8,-1);return r==="Date"?isNaN(n.getTime())?""+n:n.toISOString(n):r==="Error"||n instanceof Error?"["+Gt.call(n)+"]":r==="RegExp"?Yt.call(n):null}function T(n,e){let t=Ce(n,e);return t!==null?t:JSON.stringify(n,function(r,s){let i=Ce(this[r],e);return i!==null?i:s},2)}function Le(n){return n==null?[]:[].concat(n)}let qe,Ue,He,Qt=/\$\{\s*(\w+)\s*\}/g;qe=Symbol.toStringTag;class je{constructor(e,t,r,s){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[qe]="Error",this.name="ValidationError",this.value=t,this.path=r,this.type=s,this.errors=[],this.inner=[],Le(e).forEach(i=>{if(S.isError(i)){this.errors.push(...i.errors);const a=i.inner.length?i.inner:[i];this.inner.push(...a)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Ue=Symbol.hasInstance;He=Symbol.toStringTag;class S extends Error{static formatError(e,t){const r=t.label||t.path||"this";return r!==t.path&&(t=Object.assign({},t,{path:r})),typeof e=="string"?e.replace(Qt,(s,i)=>T(t[i])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,r,s,i){const a=new je(e,t,r,s);if(i)return a;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[He]="Error",this.name=a.name,this.message=a.message,this.type=a.type,this.value=a.value,this.path=a.path,this.errors=a.errors,this.inner=a.inner,Error.captureStackTrace&&Error.captureStackTrace(this,S)}static[Ue](e){return je[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let E={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:n,type:e,value:t,originalValue:r})=>{const s=r!=null&&r!==t?` (cast from the value \`${T(r,!0)}\`).`:".";return e!=="mixed"?`${n} must be a \`${e}\` type, but the final value was: \`${T(t,!0)}\``+s:`${n} must match the configured type. The validated value was: \`${T(t,!0)}\``+s}},Kt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},en={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ne={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},tn={isValue:"${path} field must be ${value}"},nn={noUnknown:"${path} field has unspecified keys: ${unknown}"},rn={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},sn={notType:n=>{const{path:e,value:t,spec:r}=n,s=r.types.length;if(Array.isArray(t)){if(t.length<s)return`${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${T(t,!0)}\``;if(t.length>s)return`${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${T(t,!0)}\``}return S.formatError(E.notType,n)}};Object.assign(Object.create(null),{mixed:E,string:Kt,number:en,date:ne,object:nn,array:rn,boolean:tn,tuple:sn});const Fe=n=>n&&n.__isYupSchema__;class X{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:s,otherwise:i}=t,a=typeof r=="function"?r:(...l)=>l.every(u=>u===r);return new X(e,(l,u)=>{var c;let h=a(...l)?s:i;return(c=h==null?void 0:h(u))!=null?c:u})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let r=this.refs.map(i=>i.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),s=this.fn(r,e,t);if(s===void 0||s===e)return e;if(!Fe(s))throw new TypeError("conditions must return a schema object");return s.resolve(t)}}const q={context:"$",value:"."};class P{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===q.context,this.isValue=this.key[0]===q.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?q.context:this.isValue?q.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Pe.getter(this.path,!0),this.map=t.map}getValue(e,t,r){let s=this.isContext?r:this.isValue?e:t;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}P.prototype.__isYupRef=!0;const Xe=n=>n==null;function R(n){function e({value:t,path:r="",options:s,originalValue:i,schema:a},l,u){const{name:c,test:h,params:d,message:f,skipAbsent:m}=n;let{parent:p,context:v,abortEarly:x=a.spec.abortEarly,disableStackTrace:C=a.spec.disableStackTrace}=s;function k(b){return P.isRef(b)?b.getValue(t,p,v):b}function B(b={}){const I=Object.assign({value:t,originalValue:i,label:a.spec.label,path:b.path||r,spec:a.spec,disableStackTrace:b.disableStackTrace||C},d,b.params);for(const pe of Object.keys(I))I[pe]=k(I[pe]);const fe=new S(S.formatError(b.message||f,I),t,I.path,b.type||c,I.disableStackTrace);return fe.params=I,fe}const z=x?l:u;let y={path:r,parent:p,type:c,from:s.from,createError:B,resolve:k,options:s,originalValue:i,schema:a};const w=b=>{S.isError(b)?z(b):b?u(null):z(B())},V=b=>{S.isError(b)?z(b):l(b)};if(m&&Xe(t))return w(!0);let L;try{var de;if(L=h.call(y,t,y),typeof((de=L)==null?void 0:de.then)=="function"){if(s.sync)throw new Error(`Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(L).then(w,V)}}catch(b){V(b);return}w(L)}return e.OPTIONS=n,e}function an(n,e,t,r=t){let s,i,a;return e?(Pe.forEach(e,(l,u,c)=>{let h=u?l.slice(1,l.length-1):l;n=n.resolve({context:r,parent:s,value:t});let d=n.type==="tuple",f=c?parseInt(h,10):0;if(n.innerType||d){if(d&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(t&&f>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${e}. because there is no value at that index. `);s=t,t=t&&t[f],n=d?n.spec.types[f]:n.innerType}if(!c){if(!n.fields||!n.fields[h])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${n.type}")`);s=t,t=t&&t[h],n=n.fields[h]}i=h,a=u?"["+l+"]":"."+l}),{schema:n,parent:s,parentPath:i}):{parent:s,parentPath:e,schema:n}}class G extends Set{describe(){const e=[];for(const t of this.values())e.push(P.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const r of this.values())t.push(e(r));return t}clone(){return new G(this.values())}merge(e,t){const r=this.clone();return e.forEach(s=>r.add(s)),t.forEach(s=>r.delete(s)),r}}function D(n,e=new Map){if(Fe(n)||!n||typeof n!="object")return n;if(e.has(n))return e.get(n);let t;if(n instanceof Date)t=new Date(n.getTime()),e.set(n,t);else if(n instanceof RegExp)t=new RegExp(n),e.set(n,t);else if(Array.isArray(n)){t=new Array(n.length),e.set(n,t);for(let r=0;r<n.length;r++)t[r]=D(n[r],e)}else if(n instanceof Map){t=new Map,e.set(n,t);for(const[r,s]of n.entries())t.set(r,D(s,e))}else if(n instanceof Set){t=new Set,e.set(n,t);for(const r of n)t.add(D(r,e))}else if(n instanceof Object){t={},e.set(n,t);for(const[r,s]of Object.entries(n))t[r]=D(s,e)}else throw Error(`Unable to clone ${n}`);return t}class N{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new G,this._blacklist=new G,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(E.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=D(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=t,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,r=e.clone();const s=Object.assign({},t.spec,r.spec);return r.spec=s,r.internalTests=Object.assign({},t.internalTests,r.internalTests),r._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),r.tests=t.tests,r.exclusiveTests=t.exclusiveTests,r.withMutation(i=>{e.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...t.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let r=t.conditions;t=t.clone(),t.conditions=[],t=r.reduce((s,i)=>i.resolve(s,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,r,s,i;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(s=e.recursive)!=null?s:this.spec.recursive,disableStackTrace:(i=e.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(e,t={}){let r=this.resolve(Object.assign({value:e},t)),s=t.assert==="ignore-optionality",i=r._cast(e,t);if(t.assert!==!1&&!r.isType(i)){if(s&&Xe(i))return i;let a=T(e),l=T(i);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(l!==a?`result of cast: ${l}`:""))}return i}_cast(e,t){let r=e===void 0?e:this.transforms.reduce((s,i)=>i.call(this,s,e,this),e);return r===void 0&&(r=this.getDefault(t)),r}_validate(e,t={},r,s){let{path:i,originalValue:a=e,strict:l=this.spec.strict}=t,u=e;l||(u=this._cast(u,Object.assign({assert:!1},t)));let c=[];for(let h of Object.values(this.internalTests))h&&c.push(h);this.runTests({path:i,value:u,originalValue:a,options:t,tests:c},r,h=>{if(h.length)return s(h,u);this.runTests({path:i,value:u,originalValue:a,options:t,tests:this.tests},r,s)})}runTests(e,t,r){let s=!1,{tests:i,value:a,originalValue:l,path:u,options:c}=e,h=v=>{s||(s=!0,t(v,a))},d=v=>{s||(s=!0,r(v,a))},f=i.length,m=[];if(!f)return d([]);let p={value:a,originalValue:l,path:u,options:c,schema:this};for(let v=0;v<i.length;v++){const x=i[v];x(p,h,function(k){k&&(Array.isArray(k)?m.push(...k):m.push(k)),--f<=0&&d(m)})}}asNestedTest({key:e,index:t,parent:r,parentPath:s,originalParent:i,options:a}){const l=e??t;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof l=="number";let c=r[l];const h=Object.assign({},a,{strict:!0,parent:r,value:c,originalValue:i[l],key:void 0,[u?"index":"key"]:l,path:u||l.includes(".")?`${s||""}[${u?l:`"${l}"`}]`:(s?`${s}.`:"")+e});return(d,f,m)=>this.resolve(h)._validate(c,h,f,m)}validate(e,t){var r;let s=this.resolve(Object.assign({},t,{value:e})),i=(r=t==null?void 0:t.disableStackTrace)!=null?r:s.spec.disableStackTrace;return new Promise((a,l)=>s._validate(e,t,(u,c)=>{S.isError(u)&&(u.value=c),l(u)},(u,c)=>{u.length?l(new S(u,c,void 0,void 0,i)):a(c)}))}validateSync(e,t){var r;let s=this.resolve(Object.assign({},t,{value:e})),i,a=(r=t==null?void 0:t.disableStackTrace)!=null?r:s.spec.disableStackTrace;return s._validate(e,Object.assign({},t,{sync:!0}),(l,u)=>{throw S.isError(l)&&(l.value=u),l},(l,u)=>{if(l.length)throw new S(l,e,void 0,void 0,a);i=u}),i}isValid(e,t){return this.validate(e,t).then(()=>!0,r=>{if(S.isError(r))return!1;throw r})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(r){if(S.isError(r))return!1;throw r}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):D(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const r=this.clone({nullable:e});return r.internalTests.nullable=R({message:t,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),r}optionality(e,t){const r=this.clone({optional:e});return r.internalTests.optionality=R({message:t,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=E.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=E.notNull){return this.nullability(!1,e)}required(e=E.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=E.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),s=R(t),i=t.exclusive||t.name&&r.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(r.exclusiveTests[t.name]=!!t.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===t.name&&(i||a.OPTIONS.test===s.OPTIONS.test))),r.tests.push(s),r}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let r=this.clone(),s=Le(e).map(i=>new P(i));return s.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof t=="function"?new X(s,t):X.fromOptions(s,t)),r}typeError(e){let t=this.clone();return t.internalTests.typeError=R({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=E.oneOf){let r=this.clone();return e.forEach(s=>{r._whitelist.add(s),r._blacklist.delete(s)}),r.internalTests.whiteList=R({message:t,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(e,t=E.notOneOf){let r=this.clone();return e.forEach(s=>{r._blacklist.add(s),r._whitelist.delete(s)}),r.internalTests.blacklist=R({message:t,name:"notOneOf",test(s){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:r,meta:s,optional:i,nullable:a}=t.spec;return{meta:s,label:r,optional:i,nullable:a,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,c,h)=>h.findIndex(d=>d.name===u.name)===c)}}}N.prototype.__isYupSchema__=!0;for(const n of["validate","validateSync"])N.prototype[`${n}At`]=function(e,t,r={}){const{parent:s,parentPath:i,schema:a}=an(this,e,t,r.context);return a[n](s&&s[i],Object.assign({},r,{parent:s,path:e}))};for(const n of["equals","is"])N.prototype[n]=N.prototype.oneOf;for(const n of["not","nope"])N.prototype[n]=N.prototype.notOneOf;const on=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function ln(n){const e=cn(n);if(!e)return Date.parse?Date.parse(n):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function cn(n){var e,t;const r=on.exec(n);return r?{year:j(r[1]),month:j(r[2],1)-1,day:j(r[3],1),hour:j(r[4]),minute:j(r[5]),second:j(r[6]),millisecond:r[7]?j(r[7].substring(0,3)):0,precision:(e=(t=r[7])==null?void 0:t.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:j(r[10]),minuteOffset:j(r[11])}:null}function j(n,e=0){return Number(n)||e}let un=new Date(""),hn=n=>Object.prototype.toString.call(n)==="[object Date]";class ae extends N{constructor(){super({type:"date",check(e){return hn(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=ln(e),isNaN(e)?ae.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let r;if(P.isRef(e))r=e;else{let s=this.cast(e);if(!this._typeCheck(s))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);r=s}return r}min(e,t=ne.min){let r=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s>=this.resolve(r)}})}max(e,t=ne.max){let r=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(s){return s<=this.resolve(r)}})}}ae.INVALID_DATE=un;const dn=({addEvent:n,isSubmitting:e})=>{g.useEffect(()=>{},[e]);const[t,r]=g.useState({title:"",description:"",from:"",to:""}),[s,i]=g.useState({isError:!1,errors:{}}),a=(c,h)=>{const d={...t,[h]:c.target.value.trim()};r(d)},l=()=>{const c={};let h=!1;return t.title.length<3&&(c.title="Minimum title lenght shuold be 3",h=!0),t.description.length<5&&(c.description="Minimum description lenght shuold be 5",h=!0),t.from.length==0&&(c.from="From date requried",h=!0),t.to.length==0&&(c.to="To date requried",h=!0),t.from.length>0&&t.to.length>0&&new Date(t.from)>new Date(t.to)&&(c.date="Date is not correct",h=!0),h&&i({isError:!0,errors:c}),h},u=c=>{c.preventDefault(),l()||(i({isError:!1,errors:{}}),n(c,t))};return o.jsxs(M,{sx:{width:"30%",display:"flex",flexDirection:"column"},children:[o.jsx($,{variant:"h5",marginBottom:"20px",children:"Create"}),o.jsxs("form",{style:{display:"flex",flexDirection:"column"},action:"",id:"create-event-form",onSubmit:u,children:[o.jsx("input",{onChange:c=>{a(c,"title")},className:"add-event-form-input",type:"text",placeholder:"Enter event title",name:"title"}),s.errors.title&&o.jsx($,{variant:"p",className:"input-validation-error",children:s.errors.title}),o.jsx("input",{onChange:c=>{a(c,"description")},className:"add-event-form-input",type:"text",placeholder:"Enter event description",name:"description"}),s.errors.description&&o.jsx($,{variant:"p",className:"input-validation-error",children:s.errors.description}),o.jsx("input",{onChange:c=>{a(c,"from")},className:"add-event-form-input",type:"date",placeholder:"From",name:"from"}),s.errors.from&&o.jsx($,{variant:"p",className:"input-validation-error",children:s.errors.from}),o.jsx("input",{onChange:c=>{a(c,"to")},className:"add-event-form-input",type:"date",placeholder:"To",name:"to"}),s.errors.to&&o.jsx($,{variant:"p",className:"input-validation-error",children:s.errors.to}),s.errors.date&&o.jsx($,{variant:"p",className:"input-validation-error",children:s.errors.date}),o.jsx("input",{className:"add-event-form-input "+(e?"add-event-form-input-disabled":""),disabled:e,type:"submit",value:"Add event"})]})]})},fn=dn;var oe={},pn=Z;Object.defineProperty(oe,"__esModule",{value:!0});var Ge=oe.default=void 0,mn=pn(Y()),gn=o;Ge=oe.default=(0,mn.default)((0,gn.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");var le={},vn=Z;Object.defineProperty(le,"__esModule",{value:!0});var Ye=le.default=void 0,xn=vn(Y()),bn=o;Ye=le.default=(0,xn.default)((0,bn.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");const Ee=["Default","Title","Date"];function yn(){const[n,e]=g.useState(!1),t=g.useRef(null),[r,s]=g.useState(1),[i,a]=g.useState(!0),l=()=>{a(d=>!d)},u=(d,f)=>{s(f),e(!1)},c=()=>{e(d=>!d)},h=d=>{t.current&&t.current.contains(d.target)||e(!1)};return o.jsxs(g.Fragment,{children:[o.jsxs(O,{direction:"row",sx:{backgroundColor:"#333",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"},variant:"contained",ref:t,"aria-label":"Button group with a nested menu",children:[o.jsx(H,{sx:{width:"130px",fontWeight:"500",fontSize:"1.1em",padding:"2px 40px",color:"white",backgroundColor:"#333",borderRadius:"0px","&:hover":{backgroundColor:"#333"}},onClick:c,children:Ee[r]}),o.jsxs(H,{size:"small","aria-controls":n?"split-button-menu":void 0,"aria-expanded":n?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:l,sx:{width:"20px",fontWeight:"500",fontSize:"1.1em",padding:"2px 0px",color:"white",backgroundColor:"#333",borderRadius:"0px","&:hover":{backgroundColor:"#333"}},children:[i&&o.jsx(Ge,{sx:{color:"white"}}),!i&&o.jsx(Ye,{sx:{color:"white"}})]})]}),o.jsx(ut,{sx:{zIndex:1,width:"193px"},open:n,placement:"bottom-start",anchorEl:t.current,role:void 0,transition:!0,children:({TransitionProps:d,placement:f})=>o.jsx(Me,{...d,style:{transformOrigin:f==="bottom"?"center top":"center bottom"},children:o.jsx(nt,{children:o.jsx(ct,{onClickAway:h,children:o.jsx(rt,{id:"split-button-menu",autoFocusItem:!0,children:Ee.map((m,p)=>o.jsx(dt,{disabled:p===2,selected:p===r,onClick:v=>u(v,p),children:m},m))})})})})})]})}const wn=({events:n,onClick:e})=>{const[t,r]=g.useState(n);return g.useEffect(()=>{r(n)},[n]),o.jsxs(M,{sx:{width:"60%",display:"flex",flexDirection:"column"},children:[o.jsxs(O,{direction:"row",sx:{marginBottom:"20px "},justifyContent:"space-between",alignItems:"center",children:[o.jsx($,{variant:"h5",children:"Existing Events"}),o.jsx(yn,{})]}),o.jsx(O,{sx:{margin:"0px 0px",flexDirection:"column"},children:t.map((s,i)=>o.jsxs(M,{sx:{backgroundColor:"white",padding:"10px",margin:"5px 0px",border:"2px solid #333",borderRadius:"7px",transition:"all 300ms ease","&:hover":{background:"#eee",cursor:"pointer"}},onClick:()=>{e(s.id)},children:[o.jsxs(O,{direction:"row",justifyContent:"space-between",children:[o.jsx($,{variant:"h6",children:s.title}),o.jsxs(O,{direction:"row",alignItems:"center",children:[o.jsx($,{padding:"0px 5px",variant:"body2",children:s.from})," -",o.jsx($,{padding:"0px 5px",variant:"body2",children:s.to})]})]}),o.jsx($,{variant:"body1",children:s.description})]},s.id))})]})},Sn=wn;var ce={},kn=Z;Object.defineProperty(ce,"__esModule",{value:!0});var Ze=ce.default=void 0,$n=kn(Y()),Cn=o;Ze=ce.default=(0,$n.default)((0,Cn.jsx)("path",{d:"M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"CheckBoxOutlineBlank");var ue={},jn=Z;Object.defineProperty(ue,"__esModule",{value:!0});var Je=ue.default=void 0,En=jn(Y()),_n=o;Je=ue.default=(0,En.default)((0,_n.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckBox");const On=o.jsx(Ze,{fontSize:"small"}),Tn=o.jsx(Je,{fontSize:"small"});function In({alreadySelectedCategoriesForThisEvent:n,allCategories:e,onChange:t}){const[r,s]=g.useState([...n.map(a=>e[e.findIndex(l=>l.id===a.id&&l.name===a.name)])]);g.useEffect(()=>{t(n)},[]);const i=(a,l)=>{s(l),t(l)};return o.jsx(ht,{multiple:!0,id:"checkboxes-tags-demo",options:e,disableCloseOnSelect:!0,value:r,getOptionLabel:a=>a.name,renderOption:(a,l,{selected:u})=>{const{key:c,...h}=a;return o.jsxs("li",{...h,children:[o.jsx(Et,{icon:On,checkedIcon:Tn,style:{marginRight:8},checked:u}),l.name]},c)},style:{margin:"25px 0px"},renderInput:a=>o.jsx(st,{...a,label:"Checkboxes",placeholder:"Categories"}),onChange:i})}const Nn=({closed:n,isOpen:e,href:t,eventId:r,categories:s})=>{const[i,a]=g.useState(!0),[l,u]=g.useState({}),[c,h]=g.useState(s),d=p=>{h(p)},f=()=>{let p=c.map(x=>x.id);a(!0);const v=new FormData;v.append("categories",JSON.stringify(p)),ee.post(route("get.categories.for.event",{id:r}),v).then(x=>{a(!1),u(C=>({...C,categories:c}))}).catch(x=>{console.log(x)})},m=()=>{n("")};return g.useEffect(()=>{ee.get(route("get.categories.for.event",{id:r})).then(p=>{a(!1);const v=p.data.categories.map(x=>(delete x.pivot,x));u(x=>({...x,categories:v,event:p.data.event}))}).catch(p=>{console.log(p)})},[]),o.jsx(lt,{href:t,isOpen:e,closed:n,children:o.jsx(O,{sx:{flexDirection:"column",minHeight:"200px"},children:i?o.jsxs(O,{sx:{flexDirection:"column",width:"100%"},children:[o.jsx(Q,{animation:"wave",height:30,width:"100%",style:{marginBottom:2}}),o.jsx(Q,{animation:"wave",height:80,width:"100%",style:{marginBottom:2}}),o.jsx(Q,{animation:"wave",height:30,width:"100%",style:{marginBottom:2}})]}):o.jsxs(M,{sx:{alignItems:"flex-start"},children:[o.jsxs($,{variant:"h6",children:["Categories for ",l.event]}),o.jsx(M,{children:o.jsx(In,{allCategories:s,alreadySelectedCategoriesForThisEvent:l.categories,onChange:d})}),o.jsxs(O,{sx:{flexDirection:"row-reverse"},children:[o.jsx(H,{variant:"outlined",onClick:f,children:"Save"}),o.jsx(H,{variant:"text",onClick:m,children:"Cancel"})]})]})})})},An=Nn;function Hn({auth:n,categories:e,title:t,headerOptions:r,apiToken:s,eventsFromServer:i}){const[a,l]=J.useState({status:!1,message:"",color:""}),[u,c]=g.useState({}),[h,d]=g.useState(i),[f,m]=g.useState(!1),[p,v]=J.useState({status:!1,message:"",severity:""});J.useEffect(()=>{let y=r[0];c({title:y.title,isOpen:!1,href:y.href,eventId:void 0})},[]),g.useRef(null);const x=(y,w)=>{},C=(y,w=!1)=>{w=!u.isOpen,c(w?{...u,isOpen:!0,eventId:+y}:{...u,isOpen:!1,eventId:void 0})},k=(y,w)=>{w!=="clickaway"&&v(!1)},B=(y,w)=>{v({status:!0,message:y,severity:w})},z=async(y,w)=>{m(!0),{...w,id:h.length>0&&h.length+1};const V=await ee.post(route("add.new.event"),w,{headers:{Accept:"application/json",Authorization:"Bearer "+s}});B("Event has been created","success"),m(!1);const he=[...h,V.data.event];d(he)};return o.jsxs(Qe,{user:n.user,header:o.jsx("h2",{className:"font-bold text-xl text-gray-800 leading-tight",children:t}),actionBar:o.jsx(it,{headerOptions:r,handleChange:C}),children:[o.jsx(We,{title:"Categories"}),p.status&&o.jsx(ge,{open:p.status,autoHideDuration:4e3,onClose:k,TransitionComponent:Me,anchorOrigin:{vertical:"top",horizontal:"right"},children:o.jsx(ve,{onClose:k,severity:p.severity,variant:"filled",sx:{width:"100%"},children:p.message})}),o.jsxs("div",{className:"square-pattern-bg ",children:[a.status&&o.jsx(ge,{anchorOrigin:{vertical:"top",horizontal:"right"},open:a.status,autoHideDuration:3500,onClose:x,children:o.jsx(ve,{onClose:x,severity:a.color,variant:"filled",sx:{width:"100%"},children:a.message})}),u.eventId&&o.jsx(An,{eventId:u.eventId,href:u.href,isOpen:u.isOpen,closed:y=>C(y,!0),categories:e}),o.jsx(at,{className:"categoriey-items",sx:{width:"100%",padding:"15px",display:"flex",justifyContent:"center",alignItems:"center"},children:o.jsxs(M,{sx:{width:"60%",padding:"15px",display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[o.jsx(Sn,{events:h,onClick:C}),o.jsx(fn,{isSubmitting:f,addEvent:z})]})})]})]})}export{Hn as default};
