var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{aN as o,aO as s,r as i,y as r,o as c,aj as u,aP as d,aQ as v,d as p,A as f,c as m,e as y,F as h,f as g,T as b,a0 as R,B as T,w as C,v as L,t as z,a1 as k,V as x,aR as E,i as w,aS as B,a6 as O,l as P,k as j}from"./vendor.6799ef26.js";/* empty css              */var H={},W=o(s);Object.defineProperty(H,"__esModule",{value:!0}),H.default=H.TransitionGroup=H.Transition=H.getTransitionGroupProps=A=H.getTransitionProps=void 0;var F=W;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var A=H.getTransitionProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=M(e?{appear:!0,appearFromClass:"".concat(e,"-appear ").concat(e,"-appear-prepare"),appearToClass:"".concat(e,"-appear ").concat(e,"-appear-active"),enterFromClass:"".concat(e,"-enter ").concat(e,"-enter-prepare"),enterToClass:"".concat(e,"-enter ").concat(e,"-enter-active"),leaveFromClass:" ".concat(e,"-leave"),leaveActiveClass:"".concat(e,"-leave ").concat(e,"-leave-active"),leaveToClass:"".concat(e,"-leave ").concat(e,"-leave-active")}:{css:!1},t);return a};H.getTransitionGroupProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=M(e?{appear:!0,appearFromClass:"".concat(e,"-appear ").concat(e,"-appear-prepare"),appearActiveClass:"".concat(e),appearToClass:"".concat(e,"-appear ").concat(e,"-appear-active"),enterFromClass:"".concat(e,"-appear ").concat(e,"-enter ").concat(e,"-appear-prepare ").concat(e,"-enter-prepare"),enterActiveClass:"".concat(e),enterToClass:"".concat(e,"-enter ").concat(e,"-appear ").concat(e,"-appear-active ").concat(e,"-enter-active"),leaveActiveClass:"".concat(e," ").concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-active")}:{css:!1},t);return a};var _=F.Transition,G=H.Transition=_,S=F.TransitionGroup;H.TransitionGroup=S;var X=_;function Y(e,{emit:t,attrs:a}){const l=i(null),n=i(null),o=i(null),s=i(null),p=i(null),f=i(null),m=i(null),y=i(null),h=i(null),g=i(null),b=i(null),R=i(null),T=i(null),C=i(null),L=i(null),z=i(null),k={x:0,y:0},x=e=>Object.assign(k,{x:e.pageX,y:e.pageY});document.documentElement.addEventListener("click",x,!0);const E=A("fade"),w=A("zoom",{onAfterLeave:()=>t("update:visible",!1)});let B,O,P,j,H,W=0;function F(e,t,a,l,n,s){t.onmousedown=function(i){const r=i.clientX-t.offsetLeft,c=i.clientY-t.offsetTop,u=e.offsetTop,d=e.offsetLeft,v=e.offsetWidth,p=e.offsetHeight,f=i=>{const f=i.clientX-r,m=i.clientY-c,y=document.documentElement.clientWidth-e.offsetLeft-2,h=document.documentElement.clientHeight-e.offsetTop-2;let g=a?v-f:t.offsetWidth+f,b=l?p-m:t.offsetHeight+m;return a&&(e.style.left=d+f+"px"),l&&(e.style.top=u+m+"px"),g<400&&(g=400),g>y&&(g=y),n||(o.value.style.width=g+"px"),b<140&&(b=140),b>h&&(b=h),s||(o.value.style.height=b-W-H+"px"),(a&&400==g||l&&140==b)&&(document.onmousemove=null),(a||l)&&(document.onmousemove=null),!1},m=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",m)};return document.addEventListener("mousemove",f),document.addEventListener("mouseup",m),!1}}const M=()=>{!function(e,t){let a=0;(t=t||e).style.cursor="move",t.onmousedown=function(t){a=t.clientX-e.offsetLeft;const l=t.clientY-e.offsetTop,n=t=>{let n=t.clientX-a,o=t.clientY-l;const s=document.documentElement.clientWidth-e.offsetWidth,i=document.documentElement.clientHeight-e.offsetHeight;return n<=0&&(n=0),o<=0&&(o=0),n>=s&&(n=s),o>=i&&(o=i),e.style.left=n+"px",e.style.top=o+"px",!1},o=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)};return document.addEventListener("mousemove",n),document.addEventListener("mouseup",o),!1},L.value.onclick=function(){const{left:t,top:a}=getComputedStyle(e),{width:l,height:n}=getComputedStyle(o.value);B=l,O=n,P=t,j=a,e.style.top=e.style.left=0,e.style.width=document.documentElement.clientWidth-2+"px",e.style.height=document.documentElement.clientHeight-2+"px",o.value.style.width=e.style.width,o.value.style.height=parseFloat(e.style.height)-H-W+"px",this.style.display="none",z.value.style.display="block"},z.value.onclick=function(){o.value.style.height=O,o.value.style.width=B,e.style.width=e.style.height="unset",e.style.left=P,e.style.top=j,this.style.display="none",L.value.style.display="block"}}(l.value,p.value),F(l.value,g.value,!0,!0,!1,!1),F(l.value,b.value,!1,!0,!1,!1),F(l.value,R.value,!1,!1,!1,!1),F(l.value,T.value,!0,!1,!1,!1),F(l.value,f.value,!0,!1,!1,!0),F(l.value,m.value,!1,!0,!0,!1),F(l.value,y.value,!1,!1,!1,!0),F(l.value,h.value,!1,!1,!0,!1),l.value.style.left=(document.documentElement.clientWidth-l.value.offsetWidth)/2+"px",l.value.style.top=e.centered?(document.documentElement.clientHeight-l.value.offsetHeight)/2+"px":"100px";const{left:t,top:a}=l.value.getBoundingClientRect(),{x:s,y:i}=k;n.value.style.transformOrigin=`${s-t}px ${i-a}px`},_=r(M,30);return c((()=>{u((()=>e.visible),(e=>{e&&(v((()=>{var e,t;H=(null==(e=p.value)?void 0:e.offsetHeight)||0,W=(null==(t=s.value)?void 0:t.offsetHeight)||0,M()})),window.addEventListener("resize",_))}),{immediate:!0})})),d((()=>{window.removeEventListener("resize",_),document.documentElement.removeEventListener("click",x,!0)})),{dragRef:l,modalWrapRef:n,modalBody:o,modalFooter:s,titleRef:p,resizeLRef:f,resizeTRef:m,resizeRRef:y,resizeBRef:h,resizeLTRef:g,resizeTRRef:b,resizeBRRef:R,resizeLBRef:T,minRef:C,maxRef:L,revertRef:z,maskTransitionProps:E,dialogTransitionProps:w,closeModal:()=>{t("update:visible",!1)}}}H.default=X;var $=p({name:"ACustomModal",components:{Transition:G},emits:["update:visible"],props:{title:{type:String,default:"标题"},visible:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},footer:{default:"I am footer"},confirmLoading:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},setup:(e,t)=>Y(e,t)});const I={ref:"modalRootRef",class:"ant-modal-root custom-modal"},N={class:"ant-modal-mask"},Q={key:0,ref:"modalWrapRef",class:"ant-modal-wrap"},U={ref:"dragRef",class:"ant-modal"},V={class:"ant-modal-content"},q={ref:"titleRef",class:"ant-modal-header"},D={class:"ant-modal-title"},J={class:"ant-modal-operate"},K={ref:"minRef",type:"button",class:"min",title:"最小化"},Z={ref:"maxRef",type:"button",class:"max",title:"最大化"},ee={ref:"revertRef",type:"button",class:"revert",title:"还原"},te={ref:"resizeLRef",class:"resizeL"},ae={ref:"resizeTRef",class:"resizeT"},le={ref:"resizeRRef",class:"resizeR"},ne={ref:"resizeBRef",class:"resizeB"},oe={ref:"resizeLTRef",class:"resizeLT"},se={ref:"resizeTRRef",class:"resizeTR"},ie={ref:"resizeBRRef",class:"resizeBR"},re={ref:"resizeLBRef",class:"resizeLB"},ce={ref:"modalBody",class:"ant-modal-body"},ue=w(" ① 窗口可以拖动；"),de=g("br",null,null,-1),ve=w(" ② 窗口可以通过八个方向改变大小；"),pe=g("br",null,null,-1),fe=w(" ③ 窗口可以最小化、最大化、还原、关闭；"),me=g("br",null,null,-1),ye=w(" ④ 限制窗口最小宽度/高度。 "),he={key:0,ref:"modalFooter",class:"ant-modal-footer"},ge=w("取 消"),be=w("确 认");$.render=function(e,t,a,l,n,o){const s=f("a-button");return e.destroyOnClose&&!e.visible?(m(),y(h,{key:0},[],64)):(m(),y(E,{key:1,to:"body"},[g("div",I,[g(b,R({key:"mask"},e.maskTransitionProps),{default:T((()=>[C(g("div",N,null,512),[[L,e.visible]])])),_:1},16),g(b,R({key:"dialog"},e.dialogTransitionProps),{default:T((()=>[e.visible?(m(),y("div",Q,[g("div",U,[g("div",V,[g("div",q,[g("span",D,z(e.title),1),g("div",J,[g("button",K,null,512),g("button",Z,null,512),g("button",ee,null,512),g("button",{type:"button",class:"close",title:"关闭",onClick:t[1]||(t[1]=(...t)=>e.closeModal&&e.closeModal(...t))})])],512),g("div",te,null,512),g("div",ae,null,512),g("div",le,null,512),g("div",ne,null,512),g("div",oe,null,512),g("div",se,null,512),g("div",ie,null,512),g("div",re,null,512),g("div",ce,[k(e.$slots,"default",{},(()=>[ue,de,ve,pe,fe,me,ye]))],512),null!=e.footer?(m(),y("div",he,[k(e.$slots,"footer",{},(()=>[g("div",null,[g(s,{onClick:e.closeModal},{default:T((()=>[ge])),_:1},8,["onClick"]),g(s,{type:"primary",loading:e.confirmLoading,onClick:e.closeModal},{default:T((()=>[be])),_:1},8,["loading","onClick"])])]))],512)):x("",!0)])],512)],512)):x("",!0)])),_:3},16)],512)]))};var Re=p({name:"CustomModal",components:{[B.name]:B,[O.name]:O,ACustomModal:$},setup(){const e=P({visible:!1});return((e,o)=>{for(var s in o||(o={}))a.call(o,s)&&n(e,s,o[s]);if(t)for(var s of t(o))l.call(o,s)&&n(e,s,o[s]);return e})({},j(e))}});const Te=w("弹出弹窗");Re.render=function(e,t,a,l,n,o){const s=f("a-alert"),i=f("a-button"),r=f("a-card"),c=f("a-custom-modal");return m(),y("div",null,[g(s,{message:"自定义模态框",description:"沿用ant-design-vue的modal样式，自定义一个可拖拽、可调整大小的模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),g(r,null,{default:T((()=>[g(i,{type:"primary",onClick:t[1]||(t[1]=t=>e.visible=!0)},{default:T((()=>[Te])),_:1})])),_:1}),g(c,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=t=>e.visible=t)},null,8,["visible"])])};export default Re;