import{d as e,aS as a,a6 as r,r as o,p as s,b as m,A as t,c as l,e as n,f as c,h as i,i as d}from"./vendor.6799ef26.js";/* empty css              */import{d as p}from"./index.cc90ea9b.js";import{_ as f}from"./schema-form.bf534207.js";const u=e=>({formItemLayout:{labelCol:{span:4},wrapperCol:{span:14}},formItem:[{type:"input",label:"账号",field:"name",value:"",props:{placeholder:"请输入账号(长度3-5个字符)"},rules:[{required:!0,message:"请输入账号"},{min:3,max:5,message:"账号长度为3-5个字符",trigger:"blur"}]},{type:"input",label:"密码",field:"password",value:"",props:{"has-feedback":!0,placeholder:"请输入密码"},rules:[{required:!0,message:"密码不能为空",validator:async(a,r)=>{const{confirmPassword:o,password:s}=e.value.modelRef;return""===s?Promise.reject("请输入密码"):Promise.resolve()}}]},{type:"input",label:"确认密码",field:"confirmPassword",value:"",props:{"has-feedback":!0,placeholder:"请输入确认密码"},rules:[{required:!0,validator:async(a,r,o,s,m)=>{const{confirmPassword:t,password:l}=e.value.modelRef;return""===t?Promise.reject("请重新输入密码"):t!==l?Promise.reject("两次输入的密码不匹配!"):Promise.resolve()}}]}]});var v=e({name:"RuleForm",components:{[a.name]:a,[r.name]:r,AButton:p,SchemaForm:f},setup(){const e=o();return{dynamicForm:e,confirm:()=>e.value.validate(),formSchema:u(e)}}});const h=i();s("data-v-9fe2246c");const b=d(" 确定 ");m();const y=h(((e,a,r,o,s,m)=>{const i=t("a-alert"),d=t("a-button"),p=t("schema-form"),f=t("a-card");return l(),n("div",null,[c(i,{message:"验证表单",description:"动态验证表单",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),c(f,null,{default:h((()=>[c(p,{ref:"dynamicForm","form-schema":e.formSchema},{"operate-button":h((()=>[c(d,{type:"primary",onClick:e.confirm},{default:h((()=>[b])),_:1},8,["onClick"])])),_:1},8,["form-schema"])])),_:1})])}));v.render=y,v.__scopeId="data-v-9fe2246c";export default v;