import{_ as N}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{r as U,b as a,j as g,e as w,i as D,k as _}from"./index-C8o1iBzI.js";import{s as v,c as z}from"./styled-DyrGQLbK.js";import{g as E,a as I}from"./generateUtilityClasses-Ckh-AizS.js";import{u as F}from"./DefaultPropsProvider-D22CNB2E.js";import{b as n}from"./createTheme-DEyFv5vV.js";import"./createTheme-J6VsOux9.js";import"./index-BfuMG_bF.js";import"./defaultTheme-Co9W6fc2.js";import"./DefaultPropsProvider-R4O0oDhy.js";import"./resolveProps-BpZSi0wK.js";function K(r){return I("MuiCircularProgress",r)}const tr=E("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]),W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,b,S,$;const t=44,B=_(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=_(b||(b=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=r=>{const{classes:s,variant:e,color:o,disableShrink:m}=r,d={root:["root",e,`color${n(o)}`],svg:["svg"],circle:["circle",`circle${n(e)}`,m&&"circleDisableShrink"]};return z(d,K,s)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${n(e.color)}`]]}})(({ownerState:r,theme:s})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(S||(S=l`
      animation: ${0} 1.4s linear infinite;
    `),B)),Z=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),q=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${n(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),or=U.forwardRef(function(s,e){const o=F({props:s,name:"MuiCircularProgress"}),{className:m,color:d="primary",disableShrink:M=!1,size:u=40,style:R,thickness:i=3.6,value:p=0,variant:k="indeterminate"}=o,j=N(o,W),c=a({},o,{color:d,disableShrink:M,size:u,thickness:i,value:p,variant:k}),f=L(c),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(p),h.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(V,a({className:w(f.root,m),style:a({width:u,height:u},x,R),ownerState:c,ref:e,role:"progressbar"},y,j,{children:g.jsx(Z,{className:f.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(q,{className:f.circle,style:h,ownerState:c,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});export{tr as circularProgressClasses,or as default,K as getCircularProgressUtilityClass};
