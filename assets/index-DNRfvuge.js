import{_ as y}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{r as w,b as s,j as R,e as _,i as u,k as b}from"./index-C8o1iBzI.js";import{s as U,c as $}from"./styled-DyrGQLbK.js";import{g as S,a as M}from"./generateUtilityClasses-Ckh-AizS.js";import{u as j}from"./DefaultPropsProvider-D22CNB2E.js";import{a as A}from"./colorManipulator-BMr32wc4.js";import"./createTheme-J6VsOux9.js";import"./createTheme-DEyFv5vV.js";import"./index-BfuMG_bF.js";import"./defaultTheme-Co9W6fc2.js";import"./DefaultPropsProvider-R4O0oDhy.js";import"./resolveProps-BpZSi0wK.js";function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(t){return parseFloat(t)}function B(t){return M("MuiSkeleton",t)}const Y=S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]),E=["animation","className","component","height","style","variant","width"];let n=t=>t,p,m,f,g;const F=t=>{const{classes:a,variant:e,animation:i,hasChildren:o,width:l,height:r}=t;return $({root:["root",e,i,o&&"withChildren",o&&!l&&"fitContent",o&&!r&&"heightAuto"]},B,a)},K=b(p||(p=n`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),P=b(m||(m=n`
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
`)),W=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=X(t.shape.borderRadius)||"px",i=N(t.shape.borderRadius);return s({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:A(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(f||(f=n`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),K),({ownerState:t,theme:a})=>t.animation==="wave"&&u(g||(g=n`
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
    `),P,(a.vars||a).palette.action.hover)),Z=w.forwardRef(function(a,e){const i=j({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:l,component:r="span",height:d,style:v,variant:C="text",width:k}=i,h=y(i,E),c=s({},i,{animation:o,component:r,variant:C,hasChildren:!!h.children}),x=F(c);return R.jsx(W,s({as:r,ref:e,className:_(x.root,l),ownerState:c},h,{style:s({width:k,height:d},v)}))});export{Z as default,B as getSkeletonUtilityClass,Y as skeletonClasses};
