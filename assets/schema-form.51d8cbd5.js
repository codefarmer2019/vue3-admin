var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,s=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))o.call(t,r)&&i(e,r,t[r]);return e};import{aT as u,s as l,l as c,aQ as f,aU as d,aV as h,aj as m,aW as p,aX as v,aY as b,aZ as g,a_ as _,d as y,a7 as O,a$ as w,b0 as j,m as E,A as I,c as S,e as A,f as V,B as k,F as M,g as x,i as T,t as F,a0 as R,aD as P,b1 as z,a3 as L,a8 as D,b2 as C,b3 as q,b4 as U,a2 as G,r as W,b5 as B,b6 as $,b7 as H,C as N,a1 as Q,V as X,h as Y}from"./vendor.b5e2da0f.js";import{e as Z,f as J,i as K}from"./index.5e885673.js";function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){te(e,t,r[t])}))}return e}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ne(e){var t=!1;return e&&e.length&&e.every((function(e){return!e.required||(t=!0,!1)})),t}function ae(e){return null==e?[]:Array.isArray(e)?e:[e]}function oe(e,t,r){for(var n=e,a=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,i=a.length;o<i-1&&(n||r);++o){var s=a[o];if(!(s in n)){if(r)throw new Error("please transfer a valid name path to validate!");break}n=n[s]}return{o:n,k:a[o],v:n?n[a[o]]:null,isValid:n&&a[o]in n}}function ie(e,t,r){var n=l(e),a={};Object.keys(t).forEach((function(e){a[e]={autoLink:!1,required:ne(t[e])}})),a=c(a);var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.length?e.filter((function(e){var r=ae(e.trigger||"change");return _(r,t).length})):e},i=null,s=function(e,t,r,n){var o=d([e],t,r,ee({validateMessages:h},n),!!n.validateFirst);return a[e].validateStatus="validating",o.catch((function(e){return e})).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"validating"===a[e].validateStatus&&(a[e].validateStatus=t.length?"error":"success",a[e].help=t[0])})),o},u=function(r,n){var a=[],u=!0;r?a=Array.isArray(r)?r:[r]:(u=!1,a=Object.keys(t));var l=function(r){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,u=[],l={},c=function(i){var c=r[i],f=oe(e,c,a);if(!f.isValid)return"continue";l[c]=f.v;var d=o(t[c],ae(n&&n.trigger));d.length&&u.push(s(c,f.v,d,n||{}).then((function(){return{name:c,errors:[]}})).catch((function(e){return Promise.reject({name:c,errors:e})})))},f=0;f<r.length;f++)c(f);var d=b(u);i=d;var h=d.then((function(){return i===d?Promise.resolve(l):Promise.reject([])})).catch((function(e){var t=e.filter((function(e){return e&&e.errors.length}));return Promise.reject({values:l,errorFields:t,outOfDate:i!==d})}));return h.catch((function(e){return e})),h}(a,n||{},u);return l.catch((function(e){return e})),l},y=n,O=function(e){var r=[];Object.keys(t).forEach((function(t){var n=oe(e,t,!1),a=oe(y,t,!1);g(n.v,a.v)||r.push(t)})),u(r,{trigger:"change"}),y=l(e)},w=null==r?void 0:r.debounce;return m(e,w&&w.wait?p(O,w.wait,v(w,["wait"])):O,{immediate:r&&!!r.immediate,deep:!0}),m(t,(function(){r&&r.validateOnRuleChange&&u()}),{deep:!0}),{modelRef:e,rulesRef:t,initialModel:n,validateInfos:a,resetFields:function(r){re(e,ee({},l(n),r)),f((function(){Object.keys(a).forEach((function(e){a[e]={autoLink:!1,required:ne(t[e])}}))}))},validate:u,validateField:s,mergeValidateInfo:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={autoLink:!1},r=[],n=Array.isArray(e)?e:[e],a=0;a<n.length;a++){var o=n[a];"error"===(null==o?void 0:o.validateStatus)&&(t.validateStatus="error",o.help&&r.push(o.help)),t.required=t.required||(null==o?void 0:o.required)}return t.help=r.join("\n"),t},clearValidate:function(e){(e?Array.isArray(e)?e:[e]:Object.keys(t)).forEach((function(e){a[e]&&re(a[e],{validateStatus:"",help:""})}))}}}u("","success","warning","error","validating");var se=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var r=-1;return e.some((function(e,n){return e[0]===t&&(r=n,!0)})),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var r=e(this.__entries__,t),n=this.__entries__[r];return n&&n[1]},t.prototype.set=function(t,r){var n=e(this.__entries__,t);~n?this.__entries__[n][1]=r:this.__entries__.push([t,r])},t.prototype.delete=function(t){var r=this.__entries__,n=e(r,t);~n&&r.splice(n,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var r=0,n=this.__entries__;r<n.length;r++){var a=n[r];e.call(t,a[1],a[0])}},t}()}(),ue="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,le="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),ce="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(le):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var fe=["top","right","bottom","left","width","height","size","weight"],de="undefined"!=typeof MutationObserver,he=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var r=!1,n=!1,a=0;function o(){r&&(r=!1,e()),n&&s()}function i(){ce(o)}function s(){var e=Date.now();if(r){if(e-a<2)return;n=!0}else r=!0,n=!1,setTimeout(i,t);a=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,r=t.indexOf(e);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){ue&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),de?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){ue&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,r=void 0===t?"":t;fe.some((function(e){return!!~r.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),me=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var a=n[r];Object.defineProperty(e,a,{value:t[a],enumerable:!1,writable:!1,configurable:!0})}return e},pe=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||le},ve=we(0,0,0,0);function be(e){return parseFloat(e)||0}function ge(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce((function(t,r){return t+be(e["border-"+r+"-width"])}),0)}function _e(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return ve;var n=pe(e).getComputedStyle(e),a=function(e){for(var t={},r=0,n=["top","right","bottom","left"];r<n.length;r++){var a=n[r],o=e["padding-"+a];t[a]=be(o)}return t}(n),o=a.left+a.right,i=a.top+a.bottom,s=be(n.width),u=be(n.height);if("border-box"===n.boxSizing&&(Math.round(s+o)!==t&&(s-=ge(n,"left","right")+o),Math.round(u+i)!==r&&(u-=ge(n,"top","bottom")+i)),!function(e){return e===pe(e).document.documentElement}(e)){var l=Math.round(s+o)-t,c=Math.round(u+i)-r;1!==Math.abs(l)&&(s-=l),1!==Math.abs(c)&&(u-=c)}return we(a.left,a.top,s,u)}var ye="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof pe(e).SVGGraphicsElement}:function(e){return e instanceof pe(e).SVGElement&&"function"==typeof e.getBBox};function Oe(e){return ue?ye(e)?function(e){var t=e.getBBox();return we(0,0,t.width,t.height)}(e):_e(e):ve}function we(e,t,r,n){return{x:e,y:t,width:r,height:n}}var je=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=we(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=Oe(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),Ee=function(e,t){var r,n,a,o,i,s,u,l=(n=(r=t).x,a=r.y,o=r.width,i=r.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(s.prototype),me(u,{x:n,y:a,width:o,height:i,top:a,right:n+o,bottom:i+a,left:n}),u);me(this,{target:e,contentRect:l})},Ie=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new se,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof pe(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new je(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof pe(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new Ee(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Se="undefined"!=typeof WeakMap?new WeakMap:new se,Ae=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=he.getInstance(),n=new Ie(t,r,this);Se.set(this,n)};["observe","unobserve","disconnect"].forEach((function(e){Ae.prototype[e]=function(){var t;return(t=Se.get(this))[e].apply(t,arguments)}})),void 0!==le.ResizeObserver&&le.ResizeObserver;var Ve=y({name:"SchemaFormCheckbox",components:{[O.name]:O,[w.name]:w,[j.name]:j,[O.Group.name]:O.Group},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:r})=>({modelValue:E({get:()=>e.value,set:e=>r("update:value",e)})})});Ve.render=function(e,t,r,n,a,o){const i=I("a-checkbox"),s=I("a-col"),u=I("a-row"),l=I("a-checkbox-group");return S(),A("div",null,[V(l,R({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t),style:{width:"100%"}},P(e.formItem.eventObject)),{default:k((()=>[V(u,null,{default:k((()=>[(S(!0),A(M,null,x(e.formItem.options,(e=>(S(),A(s,{key:e.value,span:8},{default:k((()=>[V(i,{value:e.value},{default:k((()=>[T(F(e.label),1)])),_:2},1032,["value"])])),_:2},1024)))),128))])),_:1})])),_:1},16,["value"])])};var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ve}),Me=y({name:"SchemaFormInputNumber",components:{[z.name]:z},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:r})=>({modelValue:E({get:()=>e.value,set:e=>r("update:value",e)})})});Me.render=function(e,t,r,n,a,o){const i=I("a-input-number");return S(),A(i,R({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,P(e.formItem.eventObject)),null,16,["value"])};var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me}),Te=y({name:"SchemaFormInput",components:{[L.name]:L},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:r})=>({modelValue:E({get:()=>e.value,set:e=>r("update:value",e)})})});Te.render=function(e,t,r,n,a,o){const i=I("a-input");return S(),A(i,R({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,{autocomplete:"new-password"},P(e.formItem.eventObject)),null,16,["value"])};var Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te}),Re=y({name:"SchemaFormRadio",components:{[D.name]:D,[D.Group.name]:D.Group},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:r})=>({modelValue:E({get:()=>e.value,set:e=>r("update:value",e)})})});Re.render=function(e,t,r,n,a,o){const i=I("a-radio"),s=I("a-radio-group");return S(),A(s,R({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},P(e.formItem.eventObject)),{default:k((()=>[(S(!0),A(M,null,x(e.formItem.options,(e=>(S(),A(i,{key:e.value,value:e.value},{default:k((()=>[T(F(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},16,["value"])};var Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Re}),ze=y({name:"SchemaFormSelect",components:{[C.name]:C,[C.Option.name]:C.Option},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:r})=>({modelValue:E({get:()=>e.value,set:e=>r("update:value",e)})})});ze.render=function(e,t,r,n,a,o){const i=I("Option"),s=I("a-select");return S(),A(s,R({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,P(e.formItem.eventObject)),{default:k((()=>[(S(!0),A(M,null,x(e.formItem.options,(e=>(S(),A(i,{key:e.value,value:e.value},{default:k((()=>[T(F(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},16,["value"])};var Le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze}),De=y({name:"SchemaFormTextarea",components:{[q.name]:q},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:r})=>({modelValue:E({get:()=>e.value,set:e=>r("update:value",e)})})});De.render=function(e,t,r,n,a,o){const i=I("a-switch");return S(),A(i,R({checked:e.modelValue,"onUpdate:checked":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,P(e.formItem.eventObject)),null,16,["checked"])};var Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:De}),qe=y({name:"SchemaFormTextarea",components:{[L.TextArea.name]:L.TextArea},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:r})=>({modelValue:E({get:()=>e.value,set:e=>r("update:value",e)})})});qe.render=function(e,t,r,n,a,o){const i=I("a-textarea");return S(),A(i,R({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,P(e.formItem.eventObject)),null,16,["value"])};const Ue={"./schema-form-checkbox.vue":ke,"./schema-form-input-number.vue":xe,"./schema-form-input.vue":Fe,"./schema-form-radio.vue":Pe,"./schema-form-select.vue":Le,"./schema-form-switch.vue":Ce,"./schema-form-textarea.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qe})},Ge={};Object.keys(Ue).forEach((e=>{const t=e.replace(/(.*\/)*([^.]+).*/gi,"$2");Ge[t]=Ue[e].default}));var We,Be,$e=y({name:"DynamicForm",components:(We=s({},Ge),Be={[U.name]:U,[G.name]:G,[G.Item.name]:G.Item},t(We,r(Be))),props:{formSchema:{required:!0,type:Object},fields:{type:Object,default:()=>({})}},setup(e,t){const r=W(null),n=B(),a=s({labelCol:{span:4},wrapperCol:{span:20}},e.formSchema.formItemLayout),o=c(e.formSchema.formItem.reduce(((e,t)=>(null!=t.eventObject||(t.eventObject={}),e[t.field]=t.value,e)),{}));e.fields&&Object.assign(o,e.fields),e.formSchema.formItem.forEach((async e=>{(null==e?void 0:e.hasOwnProperty("loading"))&&(e.loading=!0),Z(e.asyncOptions)||J(e.asyncOptions)?e.options=await e.asyncOptions(e,n).finally((()=>e.loading=!1)):(Z(e.asyncValue)||J(e.asyncValue))&&(o[e.field]=await e.asyncValue(e,n).finally((()=>e.loading=!1)))}));const i=c(e.formSchema.formItem.filter((e=>!e.hidden)).reduce(((e,t)=>(t.rules&&(e[t.field]=t.rules),e)),{})),{resetFields:u,validate:l,validateInfos:f,validateField:d}=ie(o,i),h=["input","textarea","select","radio","checkbox","input-number","input-range","switch"],m=({field:e,trigger:t})=>()=>l(e,{trigger:t}).catch((()=>({})));return{formItemLayout:a,validate:l,resetFields:u,validateField:d,validateInfos:f,modelRef:o,schemaFormRef:r,getTriggerEvent:e=>{var t,r;const n={},a=e.field;if(Array.isArray(e.rules))e.rules.forEach((e=>{Array.isArray(e.trigger)?e.trigger.forEach((e=>n[e]=m({field:a,trigger:e}))):K(e.trigger)&&(n[e.trigger]=m({field:a,trigger:e.trigger}))}));else if(null==(t=e.rules)?void 0:t.trigger){const t=null==(r=e.rules)?void 0:r.trigger;n[t]=m({field:a,trigger:t}),Array.isArray(t)?t.forEach((e=>n[e]=m({field:a,trigger:e}))):K(t)&&(n[t]=m({field:a,trigger:t}))}return n},getComponent:e=>h.includes(e)?"schema-form-"+e:$(e)||H(e)?V(e):e}}});const He=Y(),Ne=He(((e,t,r,n,a,o)=>{const i=I("a-form-item"),u=I("a-spin"),l=I("a-form");return S(),A(l,R({ref:"schemaFormRef"},e.formItemLayout),{default:He((()=>[(S(!0),A(M,null,x(e.formSchema.formItem.filter((e=>!e.hidden)),((t,r)=>(S(),A(u,{key:t.field,spinning:t.loading||!1},{default:He((()=>[V(i,R({help:t.help,extra:t.extra,label:t.label},s(s({},t.props),e.validateInfos[t.field])),{default:He((()=>[(S(),A(N(e.getComponent(t.type)),R({value:e.modelRef[t.field],"onUpdate:value":r=>e.modelRef[t.field]=r,"form-item":t},P(s({},e.getTriggerEvent(t)))),null,16,["value","onUpdate:value","form-item"]))])),_:2},1040,["help","extra","label"])])),_:2},1032,["spinning"])))),128)),e.$slots["operate-button"]?(S(),A(i,{key:0,"wrapper-col":{span:e.formItemLayout.wrapperCol.span,offset:e.formItemLayout.labelCol.span}},{default:He((()=>[Q(e.$slots,"operate-button",{},void 0,!0)])),_:3},8,["wrapper-col"])):X("",!0)])),_:1},16)}));$e.render=Ne,$e.__scopeId="data-v-10c082b4";export{$e as _};