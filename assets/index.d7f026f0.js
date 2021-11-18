var j=Object.defineProperty,D=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var F=(e,o,d)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[o]=d,y=(e,o)=>{for(var d in o||(o={}))S.call(o,d)&&F(e,d,o[d]);if(C)for(var d of C(o))U.call(o,d)&&F(e,d,o[d]);return e},g=(e,o)=>D(e,B(o));import{S as p}from"./index.12adc25e.js";import{B as _}from"./index.649744eb.js";import{A as E}from"./AppType.8af12281.js";import{c as b}from"./index.789f7251.js";import{d as A}from"./index.c912a576.js";import{u as V,a as h,_ as T,b as L,c as N}from"./en-US.51e06fb5.js";import{w as z,a as I,b as H}from"./utils.efdc8a96.js";import{_ as M}from"./elevation.7a86b580.js";import{p as P,H as R,Z as W,d as w,o as Z,c as q,a as f,h as s,i as n,F as G,l as i,t as l}from"./vendor.8a125dba.js";import"./index.860f6244.js";import"./shared.cba5a5a3.js";import"./index.7c2ed277.js";import"./elements.524bf92a.js";import"./zIndex.2c847fc6.js";import"./components.581beddd.js";import"./lock.2797eacf.js";import"./index.23ced9c1.js";var J={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",type:"Snackbar \u7C7B\u578B",success:"\u6210\u529F",info:"\u6D88\u606F",warning:"\u8B66\u544A",error:"\u9519\u8BEF",loading:"\u52A0\u8F7D",text:"\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01",loaded:"\u52A0\u8F7D\u6210\u529F\uFF01\uFF01",wait:"\u7B49\u5F85\u4E2D...",close:"\u5173\u95ED",basicUsage:"\u57FA\u672C\u4F7F\u7528",multiLine:"\u5782\u76F4\u6392\u5217",bottomDisplay:"\u5E95\u90E8\u663E\u793A",hiddenTime:"\u663E\u793A\u65F6\u957F",forbidClick:"\u7981\u6B62\u7A7F\u900F\u70B9\u51FB"},K={functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",forbidClick:"Forbid Click"};const{add:x,use:O,pack:c,packs:ho,merge:xo}=V(),Q=e=>{N(e),O(e)};h("zh-CN",T);h("en-US",L);x("zh-CN",J);x("en-US",K);const X={name:"SnackbarExample",components:{VarSnackbar:p.Component,VarButton:_,AppType:E},setup(){const e=P({show1:!1,show2:!1,show3:!1,show4:!1,show9:!1}),o=u=>{e[u]=!e[u]},d=u=>{const m=u==="loading"?c.value.wait:c.value.text;p[u](m),u==="loading"&&setTimeout(()=>{p.success(c.value.loaded)},2e3)},a=u=>{u==="time"&&p({content:c.value.text,duration:1e3}),u==="position"&&p({content:c.value.text,position:"bottom"}),u||p(c.value.text)};z(Q),I(A);const v=b.touchmoveForbid;return H(u=>{u==="pc"&&(b.touchmoveForbid=!1)}),R(()=>{b.touchmoveForbid=v}),g(y({},W(e)),{pack:c,createSnackbar:a,changeValue:o,create:d})}},Y={class:"snackbar-demo"},$={class:"snackbar-demo"},oo={class:"snackbar-demo"},ao={class:"snackbar-demo__type-block"},eo={class:"snackbar-demo"};function no(e,o,d,a,v,u){const m=w("app-type"),r=w("var-button"),k=w("var-snackbar");return Z(),q(G,null,[f("div",Y,[s(m,null,{default:n(()=>[i(l(a.pack.componentCall),1)]),_:1}),s(r,{type:"primary",block:"",onClick:o[0]||(o[0]=t=>a.changeValue("show1"))},{default:n(()=>[i(l(a.pack.basicUsage),1)]),_:1}),s(r,{type:"primary",block:"",onClick:o[1]||(o[1]=t=>a.changeValue("show3"))},{default:n(()=>[i(l(a.pack.multiLine),1)]),_:1}),s(r,{type:"primary",block:"",onClick:o[2]||(o[2]=t=>a.changeValue("show2"))},{default:n(()=>[i(l(a.pack.bottomDisplay),1)]),_:1}),s(r,{type:"primary",block:"",onClick:o[3]||(o[3]=t=>a.changeValue("show4"))},{default:n(()=>[i(l(a.pack.hiddenTime),1)]),_:1}),s(r,{type:"primary",block:"",onClick:o[4]||(o[4]=t=>a.changeValue("show9"))},{default:n(()=>[i(l(a.pack.forbidClick),1)]),_:1})]),f("div",$,[s(m,null,{default:n(()=>[i(l(a.pack.functionCall),1)]),_:1}),s(r,{type:"warning",block:"",onClick:o[5]||(o[5]=t=>a.createSnackbar())},{default:n(()=>[i(l(a.pack.basicUsage),1)]),_:1}),s(r,{type:"warning",block:"",onClick:o[6]||(o[6]=t=>a.createSnackbar("time"))},{default:n(()=>[i(l(a.pack.hiddenTime),1)]),_:1}),s(r,{type:"warning",block:"",onClick:o[7]||(o[7]=t=>a.createSnackbar("position"))},{default:n(()=>[i(l(a.pack.bottomDisplay),1)]),_:1})]),f("div",oo,[s(m,null,{default:n(()=>[i(l(a.pack.type),1)]),_:1}),f("div",ao,[s(r,{type:"success",block:"",onClick:o[8]||(o[8]=t=>a.create("success"))},{default:n(()=>[i(l(a.pack.success),1)]),_:1}),s(r,{type:"warning",block:"",onClick:o[9]||(o[9]=t=>a.create("warning"))},{default:n(()=>[i(l(a.pack.warning),1)]),_:1}),s(r,{type:"info",block:"",onClick:o[10]||(o[10]=t=>a.create("info"))},{default:n(()=>[i(l(a.pack.info),1)]),_:1}),s(r,{type:"danger",block:"",onClick:o[11]||(o[11]=t=>a.create("error"))},{default:n(()=>[i(l(a.pack.error),1)]),_:1}),s(r,{type:"primary",block:"",onClick:o[12]||(o[12]=t=>a.create("loading"))},{default:n(()=>[i(l(a.pack.loading),1)]),_:1})])]),f("div",eo,[s(k,{show:e.show1,"onUpdate:show":o[13]||(o[13]=t=>e.show1=t)},{default:n(()=>[i(l(a.pack.text),1)]),_:1},8,["show"]),s(k,{show:e.show2,"onUpdate:show":o[15]||(o[15]=t=>e.show2=t),position:"bottom"},{action:n(()=>[s(r,{type:"primary",onClick:o[14]||(o[14]=t=>e.show2=!1)},{default:n(()=>[i(l(a.pack.close),1)]),_:1})]),default:n(()=>[i(l(a.pack.text)+" ",1)]),_:1},8,["show"]),s(k,{show:e.show3,"onUpdate:show":o[17]||(o[17]=t=>e.show3=t),vertical:!0},{action:n(()=>[s(r,{type:"primary",onClick:o[16]||(o[16]=t=>e.show3=!1)},{default:n(()=>[i(l(a.pack.close),1)]),_:1})]),default:n(()=>[i(l(a.pack.text)+" ",1)]),_:1},8,["show"]),s(k,{show:e.show4,"onUpdate:show":o[18]||(o[18]=t=>e.show4=t),duration:1e3},{default:n(()=>[i(l(a.pack.text),1)]),_:1},8,["show"]),s(k,{show:e.show9,"onUpdate:show":o[19]||(o[19]=t=>e.show9=t),"forbid-click":!0},{default:n(()=>[i(l(a.pack.text),1)]),_:1},8,["show"])])],64)}var jo=M(X,[["render",no],["__scopeId","data-v-0a209ccb"]]);export{jo as default};
