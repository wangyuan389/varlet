var _=Object.defineProperty;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var V=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,b=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&V(e,t,a[t]);if(f)for(var t of f(a))x.call(a,t)&&V(e,t,a[t]);return e};import{C as y}from"./index.dd819506.js";import{C as B}from"./index.a00f2951.js";import{I as j}from"./index.7c2ed277.js";import{B as A}from"./index.649744eb.js";import{A as S}from"./AppType.8af12281.js";import{d as U}from"./index.c912a576.js";import{w as G,a as F}from"./utils.efdc8a96.js";import{u as E,a as h,_ as D,b as I,c as M}from"./en-US.51e06fb5.js";import{_ as N}from"./elevation.7a86b580.js";import{p as z,Z as w,d as p,o as T,c as L,h as o,i as d,a as i,t as l,F as P,V as R,W,l as s}from"./vendor.8a125dba.js";import"./provide.92646073.js";import"./components.581beddd.js";import"./shared.cba5a5a3.js";import"./index.23ced9c1.js";import"./index.789f7251.js";import"./elements.524bf92a.js";import"./index.860f6244.js";var Z={basicUsage:"\u57FA\u672C\u4F7F\u7528",currentValue:"\u5F53\u524D\u7684\u503C:",setState:"\u8BBE\u7F6E\u72B6\u6001\u503C",setStyle:"\u4FEE\u6539\u56FE\u6807\u548C\u989C\u8272",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",eat:"\u5403\u996D",sleep:"\u7761\u89C9",checkAll:"\u5168\u9009",inverseAll:"\u53CD\u9009",checkboxGroup:"\u590D\u9009\u6846\u7EC4",checkboxValidate:"\u590D\u9009\u6846\u5B57\u6BB5\u6821\u9A8C",checkboxGroupValidate:"\u590D\u9009\u6846\u7EC4\u5B57\u6BB5\u6821\u9A8C",checkboxValidateMessage:"\u8BF7\u52FE\u9009",checkboxGroupValidateMessage:"\u8BF7\u5168\u9009"},q={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State value",setStyle:"Modify the icon and color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",checkboxValidate:"Checkbox validation",checkboxGroupValidate:"CheckboxGroup validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all"};const{add:C,use:H,pack:J,packs:_e,merge:ge}=E(),K=e=>{M(e),H(e)};h("zh-CN",D);h("en-US",I);C("zh-CN",Z);C("en-US",q);const O={name:"CheckboxGroupExample",components:{VarCheckboxGroup:y,VarCheckbox:B,VarIcon:j,VarButton:A,AppType:S},setup(){const e=z({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],group:null});return G(K),F(U),b({pack:J},w(e))}},Q=e=>(R("data-v-620f7bec"),e=e(),W(),e),X={class:"relation"},Y={class:"relation"},$=Q(()=>i("div",{class:"space"},null,-1));function ee(e,a,t,u,ae,le){const c=p("app-type"),n=p("var-checkbox"),k=p("var-icon"),v=p("var-button"),m=p("var-checkbox-group");return T(),L(P,null,[o(c,null,{default:d(()=>[s(l(u.pack.basicUsage),1)]),_:1}),o(n,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r)},{default:d(()=>[s(l(u.pack.currentValue)+" "+l(e.value),1)]),_:1},8,["modelValue"]),o(c,null,{default:d(()=>[s(l(u.pack.setState),1)]),_:1}),o(n,{"unchecked-value":0,"checked-value":1,modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=r=>e.value2=r)},{default:d(()=>[s(l(u.pack.currentValue)+" "+l(e.value2),1)]),_:1},8,["modelValue"]),o(c,null,{default:d(()=>[s(l(u.pack.setStyle),1)]),_:1}),o(n,{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=r=>e.value3=r)},{"unchecked-icon":d(()=>[o(k,{name:"heart-half-full",size:"24px"})]),"checked-icon":d(()=>[o(k,{name:"heart",size:"24px"})]),default:d(()=>[s(l(u.pack.currentValue)+" "+l(e.value3),1)]),_:1},8,["modelValue"]),o(c,null,{default:d(()=>[s(l(u.pack.disabled),1)]),_:1}),o(n,{disabled:"",modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=r=>e.value4=r)},{default:d(()=>[s(l(u.pack.currentValue)+" "+l(e.value4),1)]),_:1},8,["modelValue"]),o(c,null,{default:d(()=>[s(l(u.pack.readonly),1)]),_:1}),o(n,{readonly:"",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=r=>e.value5=r)},{default:d(()=>[s(l(u.pack.currentValue)+" "+l(e.value5),1)]),_:1},8,["modelValue"]),o(c,null,{default:d(()=>[s(l(u.pack.checkboxGroup),1)]),_:1}),o(m,{ref:"group",modelValue:e.value6,"onUpdate:modelValue":a[7]||(a[7]=r=>e.value6=r)},{default:d(()=>[o(n,{"checked-value":0},{default:d(()=>[s(l(u.pack.eat),1)]),_:1}),o(n,{"checked-value":1},{default:d(()=>[s(l(u.pack.sleep),1)]),_:1}),o(v,{class:"button",type:"primary",onClick:a[5]||(a[5]=r=>e.$refs.group.checkAll())},{default:d(()=>[s(l(u.pack.checkAll),1)]),_:1}),o(v,{class:"button",type:"primary",onClick:a[6]||(a[6]=r=>e.$refs.group.inverseAll())},{default:d(()=>[s(l(u.pack.inverseAll),1)]),_:1})]),_:1},8,["modelValue"]),i("div",X,l(u.pack.currentValue)+" "+l(e.value6),1),o(c,null,{default:d(()=>[s(l(u.pack.checkboxValidate),1)]),_:1}),o(n,{modelValue:e.value7,"onUpdate:modelValue":a[8]||(a[8]=r=>e.value7=r),rules:[r=>r||u.pack.checkboxValidateMessage]},{default:d(()=>[s(l(u.pack.currentValue)+" "+l(e.value7),1)]),_:1},8,["modelValue","rules"]),o(c,null,{default:d(()=>[s(l(u.pack.checkboxGroupValidate),1)]),_:1}),o(m,{modelValue:e.value8,"onUpdate:modelValue":a[9]||(a[9]=r=>e.value8=r),rules:[r=>r.length===2||u.pack.checkboxGroupValidateMessage]},{default:d(()=>[o(n,{"checked-value":0},{default:d(()=>[s(l(u.pack.eat),1)]),_:1}),o(n,{"checked-value":1},{default:d(()=>[s(l(u.pack.sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),i("div",Y,l(u.pack.currentValue)+" "+l(e.value8),1),$],64)}var xe=N(O,[["render",ee],["__scopeId","data-v-620f7bec"]]);export{xe as default};
