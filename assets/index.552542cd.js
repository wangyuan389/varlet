import{A as V}from"./AppType.8af12281.js";import{d as w,i as $,c as z}from"./shared.cba5a5a3.js";import{e as h}from"./elements.524bf92a.js";import{q as D,h as t,H as E,d as x,o as T,c as I,i as e,F as L,l as n,t as i}from"./vendor.8a125dba.js";import{B as P}from"./index.649744eb.js";import{c as B}from"./index.789f7251.js";import{d as q}from"./index.c912a576.js";import{u as H,a as A,_ as M,b as R,c as W}from"./en-US.51e06fb5.js";import{w as G,a as J,b as K}from"./utils.efdc8a96.js";import{_ as O}from"./elevation.7a86b580.js";import"./index.23ced9c1.js";import"./index.860f6244.js";import"./components.581beddd.js";const F=o=>["mini","small","normal","large"].includes(o),Q=o=>F(o)||w(o)||$(o)||z(o),X=o=>["start","end","center","space-around","space-between"].includes(o),Y={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:Q},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:X},inline:{type:Boolean,default:!1}};const Z={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]};var _=D({name:"VarSpace",props:Y,setup(o,{slots:c}){const g=(l,p)=>p?Z[l]:w(l)?l.map(h):[h(l),h(l)];return()=>{var j,S;const{inline:l,justify:p,align:v,wrap:u,direction:a,size:s}=o,b=(S=(j=c.default)==null?void 0:j.call(c))!=null?S:[],y=b.length-1,C=F(s),[r,f]=g(s,C),N=b.map((U,m)=>{let d="0";return a==="row"&&(m===0?d=`${r/2}px ${f/2}px ${r/2}px 0`:m===y?d=`${r/2}px 0 ${r/2}px ${f/2}px`:d=`${r/2}px ${f/2}px`),a==="column"&&m!==y&&(d=`0 0 ${r}px 0`),t("div",{style:{margin:d}},[U])});return t("div",{class:["var-space","var--box",l?"var-space--inline":null],style:{flexDirection:a,justifyContent:p,alignItems:v,flexWrap:u?"wrap":"nowrap",margin:a==="row"?`-${r/2}px 0`:void 0}},[N])}}});_.install=function(o){o.component(_.name,_)};var tt={baseUse:"\u57FA\u672C\u7528\u6CD5",vertical:"\u5782\u76F4",space:"\u95F4\u9699",rightAlign:"\u9760\u53F3",around:"\u73AF\u7ED5",center:"\u5C45\u4E2D",between:"\u4E24\u7AEF\u5BF9\u9F50"},et={baseUse:"Basic use",vertical:"Vertical",space:"Space Between",rightAlign:"Right Align",around:"Space Around",center:"Align Center",between:"Space Between"};const{add:k,use:nt,pack:at,packs:Tt,merge:It}=H(),ot=o=>{W(o),nt(o)};A("zh-CN",M);A("en-US",R);k("zh-CN",tt);k("en-US",et);const lt={components:{VarSpace:_,VarButton:P,AppType:V},setup(){G(ot),J(q);const o=B.touchmoveForbid;return K(c=>{c==="pc"&&(B.touchmoveForbid=!1)}),E(()=>{B.touchmoveForbid=o}),{pack:at}}},st=n("Button1"),ut=n("Button2"),rt=n("Button3"),it=n("Button1"),ct=n("Button2"),dt=n("Button3"),pt=n("Button1"),_t=n("Button2"),ft=n("Button3"),mt=n("Button1"),ht=n("Button2"),xt=n("Button1"),Bt=n("Button2"),gt=n("Button1"),vt=n("Button2"),bt=n("Button1"),yt=n("Button2");function jt(o,c,g,l,p,v){const u=x("app-type"),a=x("var-button"),s=x("var-space");return T(),I(L,null,[t(u,null,{default:e(()=>[n(i(l.pack.baseUse),1)]),_:1}),t(s,null,{default:e(()=>[t(a,null,{default:e(()=>[st]),_:1}),t(a,null,{default:e(()=>[ut]),_:1}),t(a,null,{default:e(()=>[rt]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(l.pack.vertical),1)]),_:1}),t(s,{direction:"column",size:"large"},{default:e(()=>[t(a,null,{default:e(()=>[it]),_:1}),t(a,null,{default:e(()=>[ct]),_:1}),t(a,null,{default:e(()=>[dt]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(l.pack.space),1)]),_:1}),t(s,{size:["30px","10px"]},{default:e(()=>[t(a,null,{default:e(()=>[pt]),_:1}),t(a,null,{default:e(()=>[_t]),_:1}),t(a,null,{default:e(()=>[ft]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(l.pack.rightAlign),1)]),_:1}),t(s,{justify:"end"},{default:e(()=>[t(a,null,{default:e(()=>[mt]),_:1}),t(a,null,{default:e(()=>[ht]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(l.pack.around),1)]),_:1}),t(s,{justify:"space-around"},{default:e(()=>[t(a,null,{default:e(()=>[xt]),_:1}),t(a,null,{default:e(()=>[Bt]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(l.pack.center),1)]),_:1}),t(s,{justify:"center"},{default:e(()=>[t(a,null,{default:e(()=>[gt]),_:1}),t(a,null,{default:e(()=>[vt]),_:1})]),_:1}),t(u,null,{default:e(()=>[n(i(l.pack.between),1)]),_:1}),t(s,{justify:"space-between"},{default:e(()=>[t(a,null,{default:e(()=>[bt]),_:1}),t(a,null,{default:e(()=>[yt]),_:1})]),_:1})],64)}var Lt=O(lt,[["render",jt]]);export{Lt as default};
