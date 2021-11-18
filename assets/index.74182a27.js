var N=Object.defineProperty,j=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(e,a,n)=>a in e?N(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,u=(e,a)=>{for(var n in a||(a={}))I.call(a,n)&&w(e,n,a[n]);if(b)for(var n of b(a))V.call(a,n)&&w(e,n,a[n]);return e},v=(e,a)=>j(e,E(a));import{A as z}from"./AppType.8af12281.js";import{t as m}from"./elements.524bf92a.js";import{l as F,t as A}from"./shared.cba5a5a3.js";import{_ as C}from"./elevation.7a86b580.js";import{q as $,p as M,b as S,x as L,a1 as q,Z as H,o as g,c as B,B as R,m as W,n as Z,t as o,f as G,d as k,a as l,h as t,i as d,F as J,l as c}from"./vendor.8a125dba.js";import{I as K}from"./index.7c2ed277.js";import{d as O}from"./index.c912a576.js";import{u as P,a as T,_ as Q,b as X,c as Y}from"./en-US.51e06fb5.js";import{w as ee,a as ae}from"./utils.efdc8a96.js";const te={inset:{type:[Boolean,Number,String],default:!1},vertical:{type:Boolean,default:!1},description:{type:String},margin:{type:String},dashed:{type:Boolean,default:!1}};const ne=$({name:"VarDivider",props:te,setup(e,{slots:a}){const n=M({withText:!1}),i=S(()=>F(e.inset)?e.inset:!0),f=S(()=>{const{inset:s,vertical:r,margin:h}=e,x={margin:h};if(F(s)||s===0)return u({},x);const y=A(s),D=Math.abs(y)+(s+"").replace(y+"","");return r?v(u({},x),{height:`calc(80% - ${m(D)})`}):v(u({},x),{width:`calc(100% - ${m(D)})`,left:y>0?m(D):m(0)})}),p=()=>{var s;n.withText=Boolean((s=a.default)==null?void 0:s.call(a).length)||Boolean(e.description)};return L(()=>{p()}),q(()=>{p()}),v(u({},H(n)),{style:f,isInset:i})}}),se={key:0,class:"var-divider__text"};function ie(e,a,n,i,f,p){return g(),B("div",{class:W(["var-divider var--box",[e.vertical?"var-divider--vertical":null,e.withText?"var-divider--with-text":null,e.isInset?"var-divider--inset":null,e.dashed?"var-divider--dashed":null]]),style:Z(e.style)},[R(e.$slots,"default",{},()=>[e.description?(g(),B("span",se,o(e.description),1)):G("v-if",!0)])],6)}var _=C(ne,[["render",ie]]);_.install=function(e){e.component(_.name,_)};var re={basicUsage:"\u57FA\u672C\u4F7F\u7528",dashed:"\u865A\u7EBF",inset:"\u7F29\u8FDB",vertical:"\u5782\u76F4\u5206\u5272\u7EBF",text:"\u6587\u5B57",withDesc:"\u5E26\u6709\u6587\u5B57\u63CF\u8FF0\u7684\u5206\u5272\u7EBF",withDescText:"\u6587\u5B57\u63CF\u8FF0",custom:"\u81EA\u5B9A\u4E49"},oe={basicUsage:"Basic Usage",dashed:"Dashed Divider",inset:"Inset Divider",vertical:"Vertical Divider",text:"Text",withDesc:"The Divider with description",withDescText:"Description",custom:"Custom"};const{add:U,use:le,pack:de,packs:be,merge:we}=P(),ce=e=>{Y(e),le(e)};T("zh-CN",Q);T("en-US",X);U("zh-CN",re);U("en-US",oe);const ue={name:"DividerExample",components:{VarIcon:K,VarDivider:_,AppType:z},setup(){return ee(ce),ae(O),{pack:de}}},pe={class:"vertical-divider-wrapper"};function ve(e,a,n,i,f,p){const s=k("app-type"),r=k("var-divider"),h=k("var-icon");return g(),B(J,null,[l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.basicUsage),1)]),_:1}),t(r)]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.dashed),1)]),_:1}),t(r,{dashed:""})]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.inset),1)]),_:1}),t(r,{inset:""}),t(r,{inset:36,margin:"36px 0"}),t(r,{inset:"-36px"})]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.vertical),1)]),_:1}),l("div",pe,[l("span",null,o(i.pack.text),1),t(r,{vertical:""}),l("span",null,o(i.pack.text),1),t(r,{vertical:""}),l("span",null,o(i.pack.text),1)])]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.withDesc),1)]),_:1}),t(r,{description:i.pack.withDescText},null,8,["description"])]),l("div",null,[t(s,null,{default:d(()=>[c(o(i.pack.custom),1)]),_:1}),t(r,null,{default:d(()=>[t(h,{name:"heart-outline",style:{margin:"0 16px",color:"rgb(41, 121, 255)"}})]),_:1})])],64)}var Fe=C(ue,[["render",ve],["__scopeId","data-v-3cc8609e"]]);export{Fe as default};
