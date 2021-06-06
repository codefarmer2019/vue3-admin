var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,r=(e,o)=>{for(var t in o||(o={}))n.call(o,t)&&s(e,t,o[t]);if(a)for(var t of a(o))l.call(o,t)&&s(e,t,o[t]);return e},i=(e,a)=>o(e,t(a));import{r as c,d,a4 as u,a6 as p,b2 as m,bi as f,l as g,k as v,p as y,b as h,z as b,bh as O,c as w,e as k,$ as S,g as C,a1 as F,a0 as j,F as z,B as R,V as x,i as _,t as E,w as D,f as P,h as $,M as W,A as L}from"./vendor.2480f8af.js";import{_ as T}from"./schema-form.15ae6368.js";const I=e=>{let o,t,a,n;const l=()=>n.onmouseup=n.onmousedown=n.onmousemove=null;e.forEach((e=>e.customHeaderCell=e=>({onmouseenter:()=>{n=e.title[0].el.closest("th"),null!=a||(a=n.closest(".ant-table-wrapper")),null!=t||(t=a.clientWidth),n.onmousemove=function(e){e.offsetX>this.offsetWidth-10?this.style.cursor="col-resize":this.style.cursor="default",null==o&&(o=this),null!=o.mouseDown&&1==o.mouseDown&&(o.style.cursor="default",o.oldWidth+(e.x-o.oldX)>0&&(o.width=o.oldWidth+(e.x-o.oldX)),o.style.width=o.width,a.style.width=t+(e.x-o.oldX)+"px",o.style.cursor="col-resize")},n.onmousedown=function(e){o=this,e.offsetX>o.offsetWidth-10&&(o.mouseDown=!0,o.oldX=e.x,o.oldWidth=o.offsetWidth)},n.onmouseup=l,a.onmouseup=function(){l(),null==o&&(o=this),o.mouseDown=!1,o.style.cursor="default",t=a.clientWidth}},onmouseup:()=>l})))};var X=d({name:"DynamicTable",components:{[u.name]:u,[p.name]:p,[m.name]:m,[f.name]:f,Option:m.Option},inheritAttrs:!1,props:{columns:{type:Object,required:!0},getListFunc:{type:Function,required:!0},rowSelection:{type:Object},rowKey:{type:[String,Function]},pageOption:{type:Object,default:()=>({})},dragColEnable:{type:Boolean,default:!0},dragRowEnable:Boolean},emits:["change"],setup(e,{emit:o}){var t;const{pageOptions:a}=function(e){const o=c(r({current:1,pageSize:10,total:0,pageSizeOptions:["10","20","30","40","50"],showQuickJumper:!0,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`,onChange:(o,t)=>{var a;return null==(a=null==e?void 0:e.pageChange)?void 0:a.call(e,o,t)},onShowSizeChange:(o,t)=>{var a;return null==(a=null==e?void 0:e.pageChange)?void 0:a.call(e,o,t)}},e));return{pageOptions:o,updatePageOption:(e={})=>{Object.assign(o.value,e)}}}();Object.assign(a.value,e.pageOption),e.dragColEnable&&I(e.columns);const n=g({expandItemRefs:{},customRow:()=>({}),data:[],actions:(null==(t=e.columns.find((e=>"action"==(e.dataIndex||e.key))))?void 0:t.actions)||[],loading:!1}),l=async(o={})=>{o=r(r({pageNumber:a.value.current,pageSize:a.value.pageSize},e.pageOption),o),n.loading=!0;const{data:t,pageNumber:l,pageSize:s,total:i}=await e.getListFunc(o).finally((()=>n.loading=!1));Object.assign(a.value,{current:~~l,pageSize:~~s,total:~~i}),n.data=t,e.dragRowEnable&&(n.customRow=function(e){let o,t;return a=>({draggable:!0,ondrag(e){o=a},ondrop(e){t=a},ondragend(a){if(o!==t){const a=e.indexOf(o),n=e.indexOf(t);[e[a],e[n]]=[e[n],e[a]]}},ondragover:e=>!1})}(n.data))};l();return i(r({},v(n)),{pageOptions:a,buttonProps:{size:"small"},actionEvent:async(o,t,s="")=>{await t({record:o,props:e},(()=>setTimeout((()=>l())))),"del"==s&&n.data.length<2&&(a.value.current=Math.max(1,a.value.current-1))},refreshTableData:l,paginationChange:(t,n,s,{currentDataSource:c})=>{const{field:d,order:u}=s;a.value=r(r({},a.value),t),l(i(r(r({pageSize:t.pageSize,pageNumber:t.current},e.pageOption),n),{field:d,order:u})),o("change",t,n,s,{currentDataSource:c})}})}});const K=$();y("data-v-c7603a60");const V=_(" 您确定要删除吗？ ");h();const A=K(((e,o,t,a,n,l)=>{const s=b("Option"),i=b("a-select"),c=b("a-button"),d=b("a-popconfirm"),u=b("a-table"),p=O("permission");return w(),k(u,j({columns:e.columns,loading:e.loading,rowSelection:e.rowSelection,rowKey:e.rowKey,size:"middle","data-source":e.data,pagination:e.pageOptions,bordered:"",customRow:e.customRow},r(r({},e.$props),e.$attrs),{onChange:e.paginationChange}),S({_:2},[C(e.$slots,((o,t)=>({name:t,fn:K((o=>[F(e.$slots,t,o,void 0,!0)]))}))),C(e.columns.filter((e=>e.slots)),(o=>{var t;return{name:null==(t=o.slots)?void 0:t.customRender,fn:K((t=>{var a,n,l,u,m,f;return[e.$slots[null==(a=o.slots)?void 0:a.customRender]?F(e.$slots,null==(n=o.slots)?void 0:n.customRender,j({key:0},t),void 0,!0):(w(),k(z,{key:1},["action"!==(null==(l=o.slots)?void 0:l.customRender)?(w(),k(z,{key:0},["component"==o.slotsType?(w(),k(R(null==(u=null==o?void 0:o.slotsFunc)?void 0:u.call(o,t.record)),{key:0})):x("",!0),"format"==o.slotsType?(w(),k(z,{key:1},[_(E(null==(m=null==o?void 0:o.slotsFunc)?void 0:m.call(o,t.record[o.dataIndex||o.key],t.record)),1)],64)):x("",!0)],64)):x("",!0),"action"==(null==(f=o.slots)?void 0:f.customRender)?(w(),k("div",{key:o.slots.customRender,class:"actions"},[(w(!0),k(z,null,C(e.actions,((o,a)=>(w(),k(z,null,["select"==o.type?(w(),k(i,{key:a,value:t.record[o.key],"onUpdate:value":e=>t.record[o.key]=e,size:"small"},{default:K((()=>[(w(!0),k(z,null,C(o.options,(e=>(w(),k(s,{key:e.value,value:e.value},{default:K((()=>[_(E(e.label),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["value","onUpdate:value"])):x("",!0),"button"==o.type?D((w(),k(c,j({key:1},r(r({},e.buttonProps),o.props),{key:a,onClick:a=>e.actionEvent(t.record,o.func)}),{default:K((()=>[_(E(o.text),1)])),_:2},1040,["onClick"])),[[p,o.permission]]):x("",!0),"popconfirm"==o.type?(w(),k(d,{key:a,placement:"leftTop",onConfirm:a=>e.actionEvent(t.record,o.func,"del")},{title:K((()=>[V])),default:K((()=>[D(P(c,r(r({},e.buttonProps),o.props),{default:K((()=>[_(E(o.text),1)])),_:2},1040),[[p,o.permission]])])),_:2},1032,["onConfirm"])):x("",!0)],64)))),256))])):x("",!0)],64))]}))}}))]),1040,["columns","loading","rowSelection","rowKey","data-source","pagination","customRow","onChange"])}));X.render=A,X.__scopeId="data-v-c7603a60";var B=d({name:"OperateModal",components:{[W.name]:W,SchemaForm:T},props:{remove:{type:Function},formSchema:{type:Object,default:()=>({})},fields:{type:Object,default:()=>({})},hiddenFields:{type:Array,default:()=>[]},handleOk:{type:Function}},setup(e){const o=c(null),t=g({visible:!0,confirmLoading:!1,dynamicValidateForm:e.formSchema});e.hiddenFields.forEach((o=>t.dynamicValidateForm.formItem.find((e=>e.field==o)).hidden=!!e.fields));return i(r({},v(t)),{onOk:()=>{t.confirmLoading=!0,o.value.validate().then((async a=>{await(e.handleOk&&e.handleOk(o.value.modelRef,t)).finally((()=>t.confirmLoading=!1)),t.visible=!1})).catch((e=>{t.confirmLoading=!1}))},dynamicForm:o})}});B.render=function(e,o,t,a,n,l){const s=b("schema-form"),r=b("a-modal");return w(),k(r,j({visible:e.visible,"onUpdate:visible":o[1]||(o[1]=o=>e.visible=o)},e.$attrs,{"confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.onOk}),{default:L((()=>[P(s,{ref:"dynamicForm",fields:e.fields,"form-schema":e.dynamicValidateForm},null,8,["fields","form-schema"])])),_:1},16,["visible","confirm-loading","afterClose","onOk"])};export{X as _,B as a};