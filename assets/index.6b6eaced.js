var B=Object.defineProperty,F=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(e,a,o)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,v=(e,a)=>{for(var o in a||(a={}))U.call(a,o)&&m(e,o,a[o]);if(i)for(var o of i(a))y.call(a,o)&&m(e,o,a[o]);return e},V=(e,a)=>F(e,b(a));import{C as c}from"./index.b633b7ce.js";import{A as k}from"./AppType.8af12281.js";import{d as j}from"./index.c912a576.js";import{w as z,a as h}from"./utils.efdc8a96.js";import{u as E,a as f,_ as S,b as A,c as D}from"./en-US.51e06fb5.js";import{_ as N}from"./elevation.7a86b580.js";import{p as w,Z as x,d as g,o as _,c as I,h as u,i as t,F as M,V as T,W as L,l as r,t as p,a as R}from"./vendor.8a125dba.js";import"./index.7c2ed277.js";import"./shared.cba5a5a3.js";import"./elements.524bf92a.js";import"./provide.92646073.js";import"./components.581beddd.js";import"./index.23ced9c1.js";import"./index.789f7251.js";var P={basicUsage:"\u57FA\u672C\u4F7F\u7528",range:"\u8BBE\u7F6E\u53D6\u503C\u8303\u56F4",step:"\u8BBE\u7F6E\u6B65\u957F",toFixed:"\u4FDD\u7559\u5C0F\u6570",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",lazyChange:"\u5F02\u6B65\u53D8\u66F4",size:"\u8BBE\u7F6E\u5C3A\u5BF8",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u8BF7\u9009\u62E9\u5927\u4E8E5\u7684\u503C"},W={basicUsage:"Basic Usage",range:"Set the value range",step:"Set step",toFixed:"Decimal length",disabled:"Disabled",readonly:"Readonly",lazyChange:"Asynchronous change",size:"Set size",validate:"Validate",validateMessage:"Please select a value greater than 5"};const{add:C,use:Z,pack:q,packs:ve,merge:Ve}=E(),G=e=>{D(e),Z(e)};f("zh-CN",S);f("en-US",A);C("zh-CN",P);C("en-US",W);const H={name:"CounterExample",components:{VarCounter:c,AppType:k},setup(){const e=w({value:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0,value8:0,value9:0}),a=(o,d)=>{setTimeout(()=>{d(o)},500)};return z(G),h(j),V(v({pack:q},x(e)),{handleBeforeChange:a})}},J=e=>(T("data-v-55143404"),e=e(),L(),e),K=J(()=>R("div",{class:"space"},null,-1));function O(e,a,o,d,Q,X){const n=g("app-type"),s=g("var-counter");return _(),I(M,null,[u(n,null,{default:t(()=>[r(p(d.pack.basicUsage),1)]),_:1}),u(s,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[r(p(d.pack.range),1)]),_:1}),u(s,{min:0,max:5,modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value2=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[r(p(d.pack.step),1)]),_:1}),u(s,{step:10,modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value3=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[r(p(d.pack.toFixed),1)]),_:1}),u(s,{"decimal-length":1,modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value4=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[r(p(d.pack.size),1)]),_:1}),u(s,{"input-text-size":"18px","input-width":"50px","button-size":"36px",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value5=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[r(p(d.pack.disabled),1)]),_:1}),u(s,{disabled:"",modelValue:e.value6,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value6=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[r(p(d.pack.readonly),1)]),_:1}),u(s,{readonly:"",modelValue:e.value7,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value7=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[r(p(d.pack.lazyChange),1)]),_:1}),u(s,{"lazy-change":"",modelValue:e.value8,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value8=l),onBeforeChange:d.handleBeforeChange},null,8,["modelValue","onBeforeChange"]),u(n,null,{default:t(()=>[r(p(d.pack.validate),1)]),_:1}),u(s,{rules:[l=>l>5||d.pack.validateMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value9=l)},null,8,["rules","modelValue"]),K],64)}var fe=N(H,[["render",O],["__scopeId","data-v-55143404"]]);export{fe as default};
