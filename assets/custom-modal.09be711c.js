var e=Object.assign;import{A as t}from"./index.1d7c63f3.js";import{aF as a,aG as s,aH as o,aI as n,aJ as l,aK as i,aL as r,S as c,aM as d,r as u,aN as p,aO as v,aP as f,aQ as m,aR as b,t as y,aS as h,Y as g,aT as R,aU as T,a1 as C,aV as x,aW as k,aX as w,$ as z,aY as E,aZ as L,a_ as B,a$ as S,b0 as H,b1 as M,b2 as P,k as A,U as _,A as F,a3 as O,b3 as W,b4 as j,b5 as V,b6 as G,a2 as N,c as U,b7 as D,d as I,b8 as Y,b9 as K,ba as X,bb as $,bc as q,ag as J,bd as Q,be as Z,i as ee,bf as te,f as ae,n as se,s as oe,bg as ne,bh as le,ay as ie,bi as re,bj as ce,bk as de,aw as ue,bl as pe,bm as ve,bn as fe,bo as me,z as be,y as ye,p as he,x as ge,bp as Re,bq as Te,a0 as Ce,br as xe,Z as ke,bs as we,ad as ze,bt as Ee,bu as Le,bv as Be,bw as Se,bx as He,by as Me,ae as Pe,bz as Ae,bA as _e,bB as Fe,bC as Oe,bD as We,bE as je,V as Ve,aE as Ge,a5 as Ne,C as Ue,F as De,bF as Ie,bG as Ye,bH as Ke,bI as Xe,bJ as $e,bK as qe,bL as Je,bM as Qe,bN as Ze,bO as et,bP as tt,bQ as at,bR as st,E as ot,bS as nt,af as lt,bT as it,an as rt,bU as ct,G as dt}from"./index.10b41d6e.js";import"./vendor.183d7d35.js";var ut=it(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",compile:()=>{},customRef:a,isProxy:s,isReactive:o,isReadonly:n,isRef:l,markRaw:i,proxyRefs:r,reactive:c,readonly:d,ref:u,shallowReactive:p,shallowReadonly:v,shallowRef:f,toRaw:m,toRef:b,toRefs:y,triggerRef:h,unref:g,camelize:R,capitalize:T,toDisplayString:C,toHandlerKey:x,BaseTransition:k,Comment:w,Fragment:z,KeepAlive:E,Static:L,Suspense:B,Teleport:S,Text:H,callWithAsyncErrorHandling:M,callWithErrorHandling:P,cloneVNode:A,computed:_,createBlock:F,createCommentVNode:O,createHydrationRenderer:W,createRenderer:j,createSlots:V,createStaticVNode:G,createTextVNode:N,createVNode:U,defineAsyncComponent:D,defineComponent:I,defineEmit:Y,defineProps:K,get devtools(){return X},getCurrentInstance:$,getTransitionRawChildren:q,h:J,handleError:Q,initCustomFormatter:Z,inject:ee,isRuntimeOnly:te,isVNode:ae,mergeProps:se,nextTick:oe,onActivated:ne,onBeforeMount:le,onBeforeUnmount:ie,onBeforeUpdate:re,onDeactivated:ce,onErrorCaptured:de,onMounted:ue,onRenderTracked:pe,onRenderTriggered:ve,onUnmounted:fe,onUpdated:me,openBlock:be,popScopeId:ye,provide:he,pushScopeId:ge,queuePostFlushCb:Re,registerRuntimeCompiler:Te,renderList:Ce,renderSlot:xe,resolveComponent:ke,resolveDirective:we,resolveDynamicComponent:ze,resolveTransitionHooks:Ee,setBlockTracking:Le,setDevtoolsHook:Be,setTransitionHooks:Se,ssrContextKey:He,ssrUtils:Me,toHandlers:Pe,transformVNodeArgs:Ae,useContext:_e,useSSRContext:Fe,useTransitionState:Oe,version:We,warn:je,watch:Ve,watchEffect:Ge,withCtx:Ne,withDirectives:Ue,withScopeId:De,Transition:Ie,TransitionGroup:Ye,createApp:Ke,createSSRApp:Xe,hydrate:$e,render:qe,useCssModule:Je,useCssVars:Qe,vModelCheckbox:Ze,vModelDynamic:et,vModelRadio:tt,vModelSelect:at,vModelText:st,vShow:ot,withKeys:nt,withModifiers:lt})),pt=rt((function(e,t){function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TransitionGroup=t.Transition=t.getTransitionGroupProps=t.getTransitionProps=void 0;t.getTransitionProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a(e?{appear:!0,appearFromClass:"".concat(e,"-appear ").concat(e,"-appear-prepare"),appearToClass:"".concat(e,"-appear ").concat(e,"-appear-active"),enterFromClass:"".concat(e,"-enter ").concat(e,"-enter-prepare"),enterToClass:"".concat(e,"-enter ").concat(e,"-enter-active"),leaveFromClass:" ".concat(e,"-leave"),leaveActiveClass:"".concat(e,"-leave ").concat(e,"-leave-active"),leaveToClass:"".concat(e,"-leave ").concat(e,"-leave-active")}:{css:!1},t);return s};t.getTransitionGroupProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a(e?{appear:!0,appearFromClass:"".concat(e,"-appear ").concat(e,"-appear-prepare"),appearActiveClass:"".concat(e),appearToClass:"".concat(e,"-appear ").concat(e,"-appear-active"),enterFromClass:"".concat(e,"-appear ").concat(e,"-enter ").concat(e,"-appear-prepare ").concat(e,"-enter-prepare"),enterActiveClass:"".concat(e),enterToClass:"".concat(e,"-enter ").concat(e,"-appear ").concat(e,"-appear-active ").concat(e,"-enter-active"),leaveActiveClass:"".concat(e," ").concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-active")}:{css:!1},t);return s};var s=ut.Transition;t.Transition=s;var o=ut.TransitionGroup;t.TransitionGroup=o;var n=s;t.default=n}));function vt(e,{emit:t,attrs:a}){const s=u(null),o=u(null),n=u(null),l=u(null),i=u(null),r=u(null),c=u(null),d=u(null),p=u(null),v=u(null),f=u(null),m=u(null),b=u(null),y=u(null),h=u(null),g=u(null),R={x:0,y:0},T=e=>Object.assign(R,{x:e.pageX,y:e.pageY});document.documentElement.addEventListener("click",T,!0);const C=pt.getTransitionProps("fade"),x=pt.getTransitionProps("zoom",{onAfterLeave:()=>t("update:visible",!1)});let k,w,z,E,L,B=0;function S(e,t,a,s,o,l){t.onmousedown=function(i){const r=i.clientX-t.offsetLeft,c=i.clientY-t.offsetTop,d=e.offsetTop,u=e.offsetLeft,p=e.offsetWidth,v=e.offsetHeight,f=i=>{const f=i.clientX-r,m=i.clientY-c,b=document.documentElement.clientWidth-e.offsetLeft-2,y=document.documentElement.clientHeight-e.offsetTop-2;let h=a?p-f:t.offsetWidth+f,g=s?v-m:t.offsetHeight+m;return a&&(e.style.left=u+f+"px"),s&&(e.style.top=d+m+"px"),h<400&&(h=400),h>b&&(h=b),o||(n.value.style.width=h+"px"),g<140&&(g=140),g>y&&(g=y),l||(n.value.style.height=g-B-L+"px"),(a&&400==h||s&&140==g)&&(document.onmousemove=null),(a||s)&&(document.onmousemove=null),!1},m=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",m)};return document.addEventListener("mousemove",f),document.addEventListener("mouseup",m),!1}}const H=()=>{!function(e,t){let a=0;(t=t||e).style.cursor="move",t.onmousedown=function(t){a=t.clientX-e.offsetLeft;const s=t.clientY-e.offsetTop,o=t=>{let o=t.clientX-a,n=t.clientY-s;const l=document.documentElement.clientWidth-e.offsetWidth,i=document.documentElement.clientHeight-e.offsetHeight;return o<=0&&(o=0),n<=0&&(n=0),o>=l&&(o=l),n>=i&&(n=i),e.style.left=o+"px",e.style.top=n+"px",!1},n=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",n)};return document.addEventListener("mousemove",o),document.addEventListener("mouseup",n),!1},h.value.onclick=function(){const{left:t,top:a}=getComputedStyle(e),{width:s,height:o}=getComputedStyle(n.value);k=s,w=o,z=t,E=a,e.style.top=e.style.left=0,e.style.width=document.documentElement.clientWidth-2+"px",e.style.height=document.documentElement.clientHeight-2+"px",n.value.style.width=e.style.width,n.value.style.height=parseFloat(e.style.height)-L-B+"px",this.style.display="none",g.value.style.display="block"},g.value.onclick=function(){n.value.style.height=w,n.value.style.width=k,e.style.width=e.style.height="unset",e.style.left=z,e.style.top=E,this.style.display="none",h.value.style.display="block"}}(s.value,i.value),S(s.value,v.value,!0,!0,!1,!1),S(s.value,f.value,!1,!0,!1,!1),S(s.value,m.value,!1,!1,!1,!1),S(s.value,b.value,!0,!1,!1,!1),S(s.value,r.value,!0,!1,!1,!0),S(s.value,c.value,!1,!0,!0,!1),S(s.value,d.value,!1,!1,!1,!0),S(s.value,p.value,!1,!1,!0,!1),s.value.style.left=(document.documentElement.clientWidth-s.value.offsetWidth)/2+"px",s.value.style.top=e.centered?(document.documentElement.clientHeight-s.value.offsetHeight)/2+"px":"100px";const{left:t,top:a}=s.value.getBoundingClientRect(),{x:l,y:u}=R;o.value.style.transformOrigin=`${l-t}px ${u-a}px`},M=ct(H,30);return ue((()=>{Ve((()=>e.visible),(e=>{e&&(oe((()=>{var e,t;L=(null==(e=i.value)?void 0:e.offsetHeight)||0,B=(null==(t=l.value)?void 0:t.offsetHeight)||0,H()})),window.addEventListener("resize",M))}),{immediate:!0})})),ie((()=>{window.removeEventListener("resize",M),document.documentElement.removeEventListener("click",T,!0)})),{dragRef:s,modalWrapRef:o,modalBody:n,modalFooter:l,titleRef:i,resizeLRef:r,resizeTRef:c,resizeRRef:d,resizeBRef:p,resizeLTRef:v,resizeTRRef:f,resizeBRRef:m,resizeLBRef:b,minRef:y,maxRef:h,revertRef:g,maskTransitionProps:C,dialogTransitionProps:x,closeModal:()=>{t("update:visible",!1)}}}var ft=I({name:"a-custom-modal",emits:["update:visible"],components:{Transition:pt.Transition},props:{title:{type:String,default:"标题"},visible:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},footer:{default:"I am footer"},confirmLoading:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},setup:(e,t)=>vt(e,t)});const mt={ref:"modalRootRef",class:"ant-modal-root custom-modal"},bt={class:"ant-modal-mask"},yt={key:0,ref:"modalWrapRef",class:"ant-modal-wrap"},ht={ref:"dragRef",class:"ant-modal"},gt={class:"ant-modal-content"},Rt={ref:"titleRef",class:"ant-modal-header"},Tt={class:"ant-modal-title"},Ct={class:"ant-modal-operate"},xt={ref:"minRef",type:"button",class:"min",title:"最小化"},kt={ref:"maxRef",type:"button",class:"max",title:"最大化"},wt={ref:"revertRef",type:"button",class:"revert",title:"还原"},zt={ref:"resizeLRef",class:"resizeL"},Et={ref:"resizeTRef",class:"resizeT"},Lt={ref:"resizeRRef",class:"resizeR"},Bt={ref:"resizeBRef",class:"resizeB"},St={ref:"resizeLTRef",class:"resizeLT"},Ht={ref:"resizeTRRef",class:"resizeTR"},Mt={ref:"resizeBRRef",class:"resizeBR"},Pt={ref:"resizeLBRef",class:"resizeLB"},At={ref:"modalBody",class:"ant-modal-body"},_t=N(" ① 窗口可以拖动；"),Ft=U("br",null,null,-1),Ot=N(" ② 窗口可以通过八个方向改变大小；"),Wt=U("br",null,null,-1),jt=N(" ③ 窗口可以最小化、最大化、还原、关闭；"),Vt=U("br",null,null,-1),Gt=N(" ④ 限制窗口最小宽度/高度。 "),Nt={key:0,ref:"modalFooter",class:"ant-modal-footer"},Ut=N("取 消"),Dt=N("确 认");ft.render=function(e,t,a,s,o,n){const l=ke("a-button");return e.destroyOnClose&&!e.visible?(be(),F(z,{key:0},[],64)):(be(),F(S,{key:1,to:"body"},[U("div",mt,[U(Ie,se({key:"mask"},e.maskTransitionProps),{default:Ne((()=>[Ue(U("div",bt,null,512),[[ot,e.visible]])])),_:1},16),U(Ie,se({key:"dialog"},e.dialogTransitionProps),{default:Ne((()=>[e.visible?(be(),F("div",yt,[U("div",ht,[U("div",gt,[U("div",Rt,[U("span",Tt,C(e.title),1),U("div",Ct,[U("button",xt,null,512),U("button",kt,null,512),U("button",wt,null,512),U("button",{onClick:t[1]||(t[1]=(...t)=>e.closeModal&&e.closeModal(...t)),type:"button",class:"close",title:"关闭"})])],512),U("div",zt,null,512),U("div",Et,null,512),U("div",Lt,null,512),U("div",Bt,null,512),U("div",St,null,512),U("div",Ht,null,512),U("div",Mt,null,512),U("div",Pt,null,512),U("div",At,[xe(e.$slots,"default",{},(()=>[_t,Ft,Ot,Wt,jt,Vt,Gt]))],512),null!=e.footer?(be(),F("div",Nt,[xe(e.$slots,"footer",{},(()=>[U("div",null,[U(l,{onClick:e.closeModal},{default:Ne((()=>[Ut])),_:1},8,["onClick"]),U(l,{onClick:e.closeModal,type:"primary",loading:e.confirmLoading},{default:Ne((()=>[Dt])),_:1},8,["onClick","loading"])])]))],512)):O("",!0)])],512)],512)):O("",!0)])),_:1},16)],512)]))};var It=I({name:"custom-modal",components:{[t.name]:t,[dt.name]:dt,ACustomModal:ft},setup(){const t=c({visible:!1});return e({},y(t))}});const Yt=De("data-v-06fe08b2");ge("data-v-06fe08b2");const Kt=N("弹出弹窗");ye();const Xt=Yt(((e,t,a,s,o,n)=>{const l=ke("a-alert"),i=ke("a-button"),r=ke("a-card"),c=ke("a-custom-modal");return be(),F("div",null,[U(l,{message:"自定义模态框",description:"沿用ant-design-vue的modal样式，自定义一个可拖拽、可调整大小的模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),U(r,null,{default:Yt((()=>[U(i,{onClick:t[1]||(t[1]=t=>e.visible=!0),type:"primary"},{default:Yt((()=>[Kt])),_:1})])),_:1}),U(c,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=t=>e.visible=t)},null,8,["visible"])])}));It.render=Xt,It.__scopeId="data-v-06fe08b2";export default It;
