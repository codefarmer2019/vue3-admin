var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&l(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&l(e,n,t[n]);return e};import{aT as u,s as i,aU as c,aV as f,aW as d,aX as p,aY as m,aZ as v,a_ as h,d as g,a7 as y,a$ as b,b0 as _,m as O,A as w,c as S,e as j,f as I,B as x,F as k,g as R,i as E,t as V,a0 as P,aD as A,b1 as M,a3 as F,a8 as $,b2 as C,b3 as T,b4 as U,a2 as z,r as N,l as L,b5 as W,b6 as q,b7 as D,C as B,a1 as G,V as K,h as H}from"./vendor.6799ef26.js";import{e as J,f as X,i as Y}from"./index.cc90ea9b.js";function Z(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const Q=Z("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),ee={},te=()=>{},ne=Object.assign,re=Object.prototype.hasOwnProperty,ae=(e,t)=>re.call(e,t),oe=Array.isArray,le=e=>"[object Map]"===de(e),se=e=>"function"==typeof e,ue=e=>"string"==typeof e,ie=e=>"symbol"==typeof e,ce=e=>null!==e&&"object"==typeof e,fe=Object.prototype.toString,de=e=>fe.call(e),pe=e=>ue(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,me=(e,t)=>e!==t&&(e==e||t==t),ve=new WeakMap,he=[];let ge;const ye=Symbol(""),be=Symbol("");function _e(e,t=ee){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!he.includes(n)){we(n);try{return je.push(Se),Se=!0,he.push(n),ge=n,e()}finally{he.pop(),Ie(),ge=he[he.length-1]}}};return n.id=Oe++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}let Oe=0;function we(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Se=!0;const je=[];function Ie(){const e=je.pop();Se=void 0===e||e}function xe(e,t,n){if(!Se||void 0===ge)return;let r=ve.get(e);r||ve.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=new Set),a.has(ge)||(a.add(ge),ge.deps.push(a))}function ke(e,t,n,r,a,o){const l=ve.get(e);if(!l)return;const s=new Set,u=e=>{e&&e.forEach((e=>{(e!==ge||e.allowRecurse)&&s.add(e)}))};if("clear"===t)l.forEach(u);else if("length"===n&&oe(e))l.forEach(((e,t)=>{("length"===t||t>=r)&&u(e)}));else switch(void 0!==n&&u(l.get(n)),t){case"add":oe(e)?pe(n)&&u(l.get("length")):(u(l.get(ye)),le(e)&&u(l.get(be)));break;case"delete":oe(e)||(u(l.get(ye)),le(e)&&u(l.get(be)));break;case"set":le(e)&&u(l.get(ye))}s.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const Re=Z("__proto__,__v_isRef,__isVue"),Ee=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(ie)),Ve=$e(),Pe=$e(!1,!0),Ae=$e(!0),Me=$e(!0,!0),Fe={};function $e(e=!1,t=!1){return function(n,r,a){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&a===(e?t?it:ut:t?st:lt).get(n))return n;const o=oe(n);if(!e&&o&&ae(Fe,r))return Reflect.get(Fe,r,a);const l=Reflect.get(n,r,a);if(ie(r)?Ee.has(r):Re(r))return l;if(e||xe(n,0,r),t)return l;if(ht(l)){return!o||!pe(r)?l.value:l}return ce(l)?e?dt(l):ft(l):l}}["includes","indexOf","lastIndexOf"].forEach((e=>{const t=Array.prototype[e];Fe[e]=function(...e){const n=vt(this);for(let t=0,a=this.length;t<a;t++)xe(n,0,t+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(vt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{const t=Array.prototype[e];Fe[e]=function(...e){je.push(Se),Se=!1;const n=t.apply(this,e);return Ie(),n}}));function Ce(e=!1){return function(t,n,r,a){let o=t[n];if(!e&&(r=vt(r),o=vt(o),!oe(t)&&ht(o)&&!ht(r)))return o.value=r,!0;const l=oe(t)&&pe(n)?Number(n)<t.length:ae(t,n),s=Reflect.set(t,n,r,a);return t===vt(a)&&(l?me(r,o)&&ke(t,"set",n,r):ke(t,"add",n,r)),s}}const Te={get:Ve,set:Ce(),deleteProperty:function(e,t){const n=ae(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ke(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return ie(t)&&Ee.has(t)||xe(e,0,t),n},ownKeys:function(e){return xe(e,0,oe(e)?"length":ye),Reflect.ownKeys(e)}},Ue={get:Ae,set:(e,t)=>!0,deleteProperty:(e,t)=>!0};ne({},Te,{get:Pe,set:Ce(!0)}),ne({},Ue,{get:Me});const ze=e=>ce(e)?ft(e):e,Ne=e=>ce(e)?dt(e):e,Le=e=>e,We=e=>Reflect.getPrototypeOf(e);function qe(e,t,n=!1,r=!1){const a=vt(e=e.__v_raw),o=vt(t);t!==o&&!n&&xe(a,0,t),!n&&xe(a,0,o);const{has:l}=We(a),s=r?Le:n?Ne:ze;return l.call(a,t)?s(e.get(t)):l.call(a,o)?s(e.get(o)):void 0}function De(e,t=!1){const n=this.__v_raw,r=vt(n),a=vt(e);return e!==a&&!t&&xe(r,0,e),!t&&xe(r,0,a),e===a?n.has(e):n.has(e)||n.has(a)}function Be(e,t=!1){return e=e.__v_raw,!t&&xe(vt(e),0,ye),Reflect.get(e,"size",e)}function Ge(e){e=vt(e);const t=vt(this);return We(t).has.call(t,e)||(t.add(e),ke(t,"add",e,e)),this}function Ke(e,t){t=vt(t);const n=vt(this),{has:r,get:a}=We(n);let o=r.call(n,e);o||(e=vt(e),o=r.call(n,e));const l=a.call(n,e);return n.set(e,t),o?me(t,l)&&ke(n,"set",e,t):ke(n,"add",e,t),this}function He(e){const t=vt(this),{has:n,get:r}=We(t);let a=n.call(t,e);a||(e=vt(e),a=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return a&&ke(t,"delete",e,void 0),o}function Je(){const e=vt(this),t=0!==e.size,n=e.clear();return t&&ke(e,"clear",void 0,void 0),n}function Xe(e,t){return function(n,r){const a=this,o=a.__v_raw,l=vt(o),s=t?Le:e?Ne:ze;return!e&&xe(l,0,ye),o.forEach(((e,t)=>n.call(r,s(e),s(t),a)))}}function Ye(e,t,n){return function(...r){const a=this.__v_raw,o=vt(a),l=le(o),s="entries"===e||e===Symbol.iterator&&l,u="keys"===e&&l,i=a[e](...r),c=n?Le:t?Ne:ze;return!t&&xe(o,0,u?be:ye),{next(){const{value:e,done:t}=i.next();return t?{value:e,done:t}:{value:s?[c(e[0]),c(e[1])]:c(e),done:t}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return"delete"!==e&&this}}const Qe={get(e){return qe(this,e)},get size(){return Be(this)},has:De,add:Ge,set:Ke,delete:He,clear:Je,forEach:Xe(!1,!1)},et={get(e){return qe(this,e,!1,!0)},get size(){return Be(this)},has:De,add:Ge,set:Ke,delete:He,clear:Je,forEach:Xe(!1,!0)},tt={get(e){return qe(this,e,!0)},get size(){return Be(this,!0)},has(e){return De.call(this,e,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Xe(!0,!1)},nt={get(e){return qe(this,e,!0,!0)},get size(){return Be(this,!0)},has(e){return De.call(this,e,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Xe(!0,!0)};function rt(e,t){const n=t?e?nt:et:e?tt:Qe;return(t,r,a)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(ae(n,r)&&r in t?n:t,r,a)}["keys","values","entries",Symbol.iterator].forEach((e=>{Qe[e]=Ye(e,!1,!1),tt[e]=Ye(e,!0,!1),et[e]=Ye(e,!1,!0),nt[e]=Ye(e,!0,!0)}));const at={get:rt(!1,!1)},ot={get:rt(!0,!1)},lt=new WeakMap,st=new WeakMap,ut=new WeakMap,it=new WeakMap;function ct(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>de(e).slice(8,-1))(e))}function ft(e){return e&&e.__v_isReadonly?e:pt(e,!1,Te,at,lt)}function dt(e){return pt(e,!0,Ue,ot,ut)}function pt(e,t,n,r,a){if(!ce(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const o=a.get(e);if(o)return o;const l=ct(e);if(0===l)return e;const s=new Proxy(e,2===l?r:n);return a.set(e,s),s}function mt(e){return function(e){return!(!e||!e.__v_isReadonly)}(e)?mt(e.__v_raw):!(!e||!e.__v_isReactive)}function vt(e){return e&&vt(e.__v_raw)||e}function ht(e){return Boolean(e&&!0===e.__v_isRef)}function gt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(o){bt(o,t,n)}return a}function yt(e,t,n,r){if(se(e)){const o=gt(e,t,n,r);return o&&(ce(a=o)&&se(a.then)&&se(a.catch))&&o.catch((e=>{bt(e,t,n)})),o}var a;const o=[];for(let l=0;l<e.length;l++)o.push(yt(e[l],t,n,r));return o}function bt(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const a=t.proxy,o=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,a,o))return;r=r.parent}const l=t.appContext.config.errorHandler;if(l)return void gt(l,null,10,[e,a,o])}}let _t=!1,Ot=!1;const wt=[];let St=0;const jt=[];let It=null,xt=0;const kt=[];let Rt=null,Et=0;const Vt=Promise.resolve();let Pt=null,At=null;function Mt(e){const t=Pt||Vt;return e?t.then(this?e.bind(this):e):t}function Ft(e){if(!(wt.length&&wt.includes(e,_t&&e.allowRecurse?St+1:St)||e===At)){const t=function(e){let t=St+1,n=wt.length;const r=Ut(e);for(;t<n;){const e=t+n>>>1;Ut(wt[e])<r?t=e+1:n=e}return t}(e);t>-1?wt.splice(t,0,e):wt.push(e),$t()}}function $t(){_t||Ot||(Ot=!0,Pt=Vt.then(zt))}function Ct(e,t,n,r){oe(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),$t()}function Tt(e,t=null){if(jt.length){for(At=t,It=[...new Set(jt)],jt.length=0,xt=0;xt<It.length;xt++)It[xt]();It=null,xt=0,At=null,Tt(e,t)}}const Ut=e=>null==e.id?Infinity:e.id;function zt(e){Ot=!1,_t=!0,Tt(e),wt.sort(((e,t)=>Ut(e)-Ut(t)));try{for(St=0;St<wt.length;St++){const e=wt[St];e&&gt(e,null,14)}}finally{St=0,wt.length=0,function(e){if(kt.length){const e=[...new Set(kt)];if(kt.length=0,Rt)return void Rt.push(...e);for(Rt=e,Rt.sort(((e,t)=>Ut(e)-Ut(t))),Et=0;Et<Rt.length;Et++)Rt[Et]();Rt=null,Et=0}}(),_t=!1,Pt=null,(wt.length||kt.length)&&zt(e)}}const Nt={};function Lt(e,t,n){return Wt(e,t,n)}function Wt(e,t,{immediate:n,deep:r,flush:a,onTrack:o,onTrigger:l}=ee,s=Xt){let u,i,c=!1;if(ht(e)?(u=()=>e.value,c=!!e._shallow):mt(e)?(u=()=>e,r=!0):u=oe(e)?()=>e.map((e=>ht(e)?e.value:mt(e)?Dt(e):se(e)?gt(e,s,2,[s&&s.proxy]):void 0)):se(e)?t?()=>gt(e,s,2,[s&&s.proxy]):()=>{if(!s||!s.isUnmounted)return i&&i(),yt(e,s,3,[f])}:te,t&&r){const e=u;u=()=>Dt(e())}let f=e=>{i=v.options.onStop=()=>{gt(e,s,4)}},d=oe(e)?[]:Nt;const p=()=>{if(v.active)if(t){const e=v();(r||c||me(e,d))&&(i&&i(),yt(t,s,3,[e,d===Nt?void 0:d,f]),d=e)}else v()};let m;p.allowRecurse=!!t,m="sync"===a?p:"post"===a?()=>Bt(p,s&&s.suspense):()=>{!s||s.isMounted?function(e){Ct(e,It,jt,xt)}(p):p()};const v=_e(u,{lazy:!0,onTrack:o,onTrigger:l,scheduler:m});return function(e,t=Xt){t&&(t.effects||(t.effects=[])).push(e)}(v,s),t?n?p():d=v():"post"===a?Bt(v,s&&s.suspense):v(),()=>{var e;(e=v).active&&(we(e),e.options.onStop&&e.options.onStop(),e.active=!1),s&&((e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)})(s.effects,v)}}function qt(e,t,n){const r=this.proxy;return Wt(ue(e)?()=>r[e]:e.bind(r),t.bind(r),n,this)}function Dt(e,t=new Set){if(!ce(e)||t.has(e))return e;if(t.add(e),ht(e))Dt(e.value,t);else if(oe(e))for(let n=0;n<e.length;n++)Dt(e[n],t);else if("[object Set]"===de(e)||le(e))e.forEach((e=>{Dt(e,t)}));else for(const n in e)Dt(e[n],t);return e}const Bt=function(e,t){t&&t.pendingBranch?oe(e)?t.effects.push(...e):t.effects.push(e):Ct(e,Rt,kt,Et)};function Gt(e,t,n){const r=n.appContext.config.optionMergeStrategies,{mixins:a,extends:o}=t;o&&Gt(e,o,n),a&&a.forEach((t=>Gt(e,t,n)));for(const l in t)r&&ae(r,l)?e[l]=r[l](e[l],t[l],n.proxy,l):e[l]=t[l]}const Kt=e=>e?4&e.vnode.shapeFlag?e.exposed?e.exposed:e.proxy:Kt(e.parent):null,Ht=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kt(e.parent),$root:e=>Kt(e.root),$emit:e=>e.emit,$options:e=>function(e){const t=e.type,{__merged:n,mixins:r,extends:a}=t;if(n)return n;const o=e.appContext.mixins;if(!o.length&&!r&&!a)return t;const l={};return o.forEach((t=>Gt(l,t,e))),Gt(l,t,e),t.__merged=l}(e),$forceUpdate:e=>()=>Ft(e.update),$nextTick:e=>Mt.bind(e.proxy),$watch:e=>qt.bind(e)}),Jt={get({_:e},t){const{ctx:n,setupState:r,data:a,props:o,accessCache:l,type:s,appContext:u}=e;if("__v_skip"===t)return!0;let i;if("$"!==t[0]){const s=l[t];if(void 0!==s)switch(s){case 0:return r[t];case 1:return a[t];case 3:return n[t];case 2:return o[t]}else{if(r!==ee&&ae(r,t))return l[t]=0,r[t];if(a!==ee&&ae(a,t))return l[t]=1,a[t];if((i=e.propsOptions[0])&&ae(i,t))return l[t]=2,o[t];if(n!==ee&&ae(n,t))return l[t]=3,n[t];l[t]=4}}const c=Ht[t];let f,d;return c?("$attrs"===t&&xe(e,0,t),c(e)):(f=s.__cssModules)&&(f=f[t])?f:n!==ee&&ae(n,t)?(l[t]=3,n[t]):(d=u.config.globalProperties,ae(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:r,setupState:a,ctx:o}=e;if(a!==ee&&ae(a,t))a[t]=n;else if(r!==ee&&ae(r,t))r[t]=n;else if(ae(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:o}},l){let s;return void 0!==n[l]||e!==ee&&ae(e,l)||t!==ee&&ae(t,l)||(s=o[0])&&ae(s,l)||ae(r,l)||ae(Ht,l)||ae(a.config.globalProperties,l)}};ne({},Jt,{get(e,t){if(t!==Symbol.unscopables)return Jt.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!Q(t)});let Xt=null;function Yt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Zt(e,t,n[t])}))}return e}function Zt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qt(){return(Qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function en(e){var t=!1;return e&&e.length&&e.every((function(e){return!e.required||(t=!0,!1)})),t}function tn(e){return null==e?[]:Array.isArray(e)?e:[e]}function nn(e,t,n){for(var r=e,a=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,l=a.length;o<l-1&&(r||n);++o){var s=a[o];if(!(s in r)){if(n)throw new Error("please transfer a valid name path to validate!");break}r=r[s]}return{o:r,k:a[o],v:r?r[a[o]]:null,isValid:r&&a[o]in r}}function rn(e,t,n){var r=i(e),a={};Object.keys(t).forEach((function(e){a[e]={autoLink:!1,required:en(t[e])}})),a=ft(a);var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.length?e.filter((function(e){var n=tn(e.trigger||"change");return h(n,t).length})):e},l=null,s=function(e,t,n,r){var o=c([e],t,n,Yt({validateMessages:f},r),!!r.validateFirst);return a[e].validateStatus="validating",o.catch((function(e){return e})).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"validating"===a[e].validateStatus&&(a[e].validateStatus=t.length?"error":"success",a[e].help=t[0])})),o},u=function(n,r){var a=[],u=!0;n?a=Array.isArray(n)?n:[n]:(u=!1,a=Object.keys(t));var i=function(n){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,u=[],i={},c=function(l){var c=n[l],f=nn(e,c,a);if(!f.isValid)return"continue";i[c]=f.v;var d=o(t[c],tn(r&&r.trigger));d.length&&u.push(s(c,f.v,d,r||{}).then((function(){return{name:c,errors:[]}})).catch((function(e){return Promise.reject({name:c,errors:e})})))},f=0;f<n.length;f++)c(f);var d=m(u);l=d;var p=d.then((function(){return l===d?Promise.resolve(i):Promise.reject([])})).catch((function(e){var t=e.filter((function(e){return e&&e.errors.length}));return Promise.reject({values:i,errorFields:t,outOfDate:l!==d})}));return p.catch((function(e){return e})),p}(a,r||{},u);return i.catch((function(e){return e})),i},g=r,y=function(e){var n=[];Object.keys(t).forEach((function(t){var r=nn(e,t,!1),a=nn(g,t,!1);v(r.v,a.v)||n.push(t)})),u(n,{trigger:"change"}),g=i(e)},b=null==n?void 0:n.debounce;return Lt(e,b&&b.wait?d(y,b.wait,p(b,["wait"])):y,{immediate:n&&!!n.immediate,deep:!0}),Lt(t,(function(){n&&n.validateOnRuleChange&&u()}),{deep:!0}),{modelRef:e,rulesRef:t,initialModel:r,validateInfos:a,resetFields:function(n){Qt(e,Yt({},i(r),n)),Mt((function(){Object.keys(a).forEach((function(e){a[e]={autoLink:!1,required:en(t[e])}}))}))},validate:u,validateField:s,mergeValidateInfo:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={autoLink:!1},n=[],r=Array.isArray(e)?e:[e],a=0;a<r.length;a++){var o=r[a];"error"===(null==o?void 0:o.validateStatus)&&(t.validateStatus="error",o.help&&n.push(o.help)),t.required=t.required||(null==o?void 0:o.required)}return t.help=n.join("\n"),t},clearValidate:function(e){(e?Array.isArray(e)?e:[e]:Object.keys(t)).forEach((function(e){a[e]&&Qt(a[e],{validateStatus:"",help:""})}))}}}u("","success","warning","error","validating");var an=g({name:"SchemaFormCheckbox",components:{[y.name]:y,[b.name]:b,[_.name]:_,[y.Group.name]:y.Group},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:n})=>({modelValue:O({get:()=>e.value,set:e=>n("update:value",e)})})});an.render=function(e,t,n,r,a,o){const l=w("a-checkbox"),s=w("a-col"),u=w("a-row"),i=w("a-checkbox-group");return S(),j("div",null,[I(i,P({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t),style:{width:"100%"}},A(e.formItem.eventObject)),{default:x((()=>[I(u,null,{default:x((()=>[(S(!0),j(k,null,R(e.formItem.options,(e=>(S(),j(s,{key:e.value,span:8},{default:x((()=>[I(l,{value:e.value},{default:x((()=>[E(V(e.label),1)])),_:2},1032,["value"])])),_:2},1024)))),128))])),_:1})])),_:1},16,["value"])])};var on=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:an}),ln=g({name:"SchemaFormInputNumber",components:{[M.name]:M},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:n})=>({modelValue:O({get:()=>e.value,set:e=>n("update:value",e)})})});ln.render=function(e,t,n,r,a,o){const l=w("a-input-number");return S(),j(l,P({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,A(e.formItem.eventObject)),null,16,["value"])};var sn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ln}),un=g({name:"SchemaFormInput",components:{[F.name]:F},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:n})=>({modelValue:O({get:()=>e.value,set:e=>n("update:value",e)})})});un.render=function(e,t,n,r,a,o){const l=w("a-input");return S(),j(l,P({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,{autocomplete:"new-password"},A(e.formItem.eventObject)),null,16,["value"])};var cn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:un}),fn=g({name:"SchemaFormRadio",components:{[$.name]:$,[$.Group.name]:$.Group},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:n})=>({modelValue:O({get:()=>e.value,set:e=>n("update:value",e)})})});fn.render=function(e,t,n,r,a,o){const l=w("a-radio"),s=w("a-radio-group");return S(),j(s,P({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},A(e.formItem.eventObject)),{default:x((()=>[(S(!0),j(k,null,R(e.formItem.options,(e=>(S(),j(l,{key:e.value,value:e.value},{default:x((()=>[E(V(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},16,["value"])};var dn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fn}),pn=g({name:"SchemaFormSelect",components:{[C.name]:C,[C.Option.name]:C.Option},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:n})=>({modelValue:O({get:()=>e.value,set:e=>n("update:value",e)})})});pn.render=function(e,t,n,r,a,o){const l=w("Option"),s=w("a-select");return S(),j(s,P({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,A(e.formItem.eventObject)),{default:x((()=>[(S(!0),j(k,null,R(e.formItem.options,(e=>(S(),j(l,{key:e.value,value:e.value},{default:x((()=>[E(V(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},16,["value"])};var mn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pn}),vn=g({name:"SchemaFormTextarea",components:{[T.name]:T},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:n})=>({modelValue:O({get:()=>e.value,set:e=>n("update:value",e)})})});vn.render=function(e,t,n,r,a,o){const l=w("a-switch");return S(),j(l,P({checked:e.modelValue,"onUpdate:checked":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,A(e.formItem.eventObject)),null,16,["checked"])};var hn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vn}),gn=g({name:"SchemaFormTextarea",components:{[F.TextArea.name]:F.TextArea},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:n})=>({modelValue:O({get:()=>e.value,set:e=>n("update:value",e)})})});gn.render=function(e,t,n,r,a,o){const l=w("a-textarea");return S(),j(l,P({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,A(e.formItem.eventObject)),null,16,["value"])};const yn={"./schema-form-checkbox.vue":on,"./schema-form-input-number.vue":sn,"./schema-form-input.vue":cn,"./schema-form-radio.vue":dn,"./schema-form-select.vue":mn,"./schema-form-switch.vue":hn,"./schema-form-textarea.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gn})},bn={};Object.keys(yn).forEach((e=>{const t=e.replace(/(.*\/)*([^.]+).*/gi,"$2");bn[t]=yn[e].default}));var _n,On,wn=g({name:"DynamicForm",components:(_n=s({},bn),On={[U.name]:U,[z.name]:z,[z.Item.name]:z.Item},t(_n,n(On))),props:{formSchema:{required:!0,type:Object},fields:{type:Object,default:()=>({})}},setup(e,t){const n=N(null),r=W(),a=s({labelCol:{span:4},wrapperCol:{span:20}},e.formSchema.formItemLayout),o=L(e.formSchema.formItem.reduce(((e,t)=>(null!=t.eventObject||(t.eventObject={}),e[t.field]=t.value,e)),{}));e.fields&&Object.assign(o,e.fields),e.formSchema.formItem.forEach((async e=>{(null==e?void 0:e.hasOwnProperty("loading"))&&(e.loading=!0),J(e.asyncOptions)||X(e.asyncOptions)?e.options=await e.asyncOptions(e,r).finally((()=>e.loading=!1)):(J(e.asyncValue)||X(e.asyncValue))&&(o[e.field]=await e.asyncValue(e,r).finally((()=>e.loading=!1)))}));const l=L(e.formSchema.formItem.filter((e=>!e.hidden)).reduce(((e,t)=>(t.rules&&(e[t.field]=t.rules),e)),{})),{resetFields:u,validate:i,validateInfos:c,validateField:f}=rn(o,l),d=["input","textarea","select","radio","checkbox","input-number","input-range","switch"],p=({field:e,trigger:t})=>()=>i(e,{trigger:t}).catch((()=>({})));return{formItemLayout:a,validate:i,resetFields:u,validateField:f,validateInfos:c,modelRef:o,schemaFormRef:n,getTriggerEvent:e=>{var t,n;const r={},a=e.field;if(Array.isArray(e.rules))e.rules.forEach((e=>{Array.isArray(e.trigger)?e.trigger.forEach((e=>r[e]=p({field:a,trigger:e}))):Y(e.trigger)&&(r[e.trigger]=p({field:a,trigger:e.trigger}))}));else if(null==(t=e.rules)?void 0:t.trigger){const t=null==(n=e.rules)?void 0:n.trigger;r[t]=p({field:a,trigger:t}),Array.isArray(t)?t.forEach((e=>r[e]=p({field:a,trigger:e}))):Y(t)&&(r[t]=p({field:a,trigger:t}))}return r},getComponent:e=>d.includes(e)?"schema-form-"+e:q(e)||D(e)?I(e):e}}});const Sn=H(),jn=Sn(((e,t,n,r,a,o)=>{const l=w("a-form-item"),u=w("a-spin"),i=w("a-form");return S(),j(i,P({ref:"schemaFormRef"},e.formItemLayout),{default:Sn((()=>[(S(!0),j(k,null,R(e.formSchema.formItem.filter((e=>!e.hidden)),((t,n)=>(S(),j(u,{key:t.field,spinning:t.loading||!1},{default:Sn((()=>[I(l,P({help:t.help,extra:t.extra,label:t.label},s(s({},t.props),e.validateInfos[t.field])),{default:Sn((()=>[(S(),j(B(e.getComponent(t.type)),P({value:e.modelRef[t.field],"onUpdate:value":n=>e.modelRef[t.field]=n,"form-item":t},A(s({},e.getTriggerEvent(t)))),null,16,["value","onUpdate:value","form-item"]))])),_:2},1040,["help","extra","label"])])),_:2},1032,["spinning"])))),128)),e.$slots["operate-button"]?(S(),j(l,{key:0,"wrapper-col":{span:e.formItemLayout.wrapperCol.span,offset:e.formItemLayout.labelCol.span}},{default:Sn((()=>[G(e.$slots,"operate-button",{},void 0,!0)])),_:3},8,["wrapper-col"])):K("",!0)])),_:1},16)}));wn.render=jn,wn.__scopeId="data-v-10c082b4";export{wn as _};