import{o as n,a as c,b as e,d as B,l as C,c as M,y as $,m as I,u as s,e as g,A as R,w as i,v as b,V as x,f as u,g as m,s as r,z as y,Q as A,P as F,S as U,p as N,k as Z,h as D,R as j,_ as z}from"./index-432f5527.js";import{R as L}from"./flash-types-70b6c1de.js";import{u as P}from"./book-store-5264f88b.js";const T={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 512 512"},q=e("path",{fill:"currentColor",d:"M442 48h-90a22 22 0 0 0 0 44h36.89l-60.39 60.39c-68.19-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 0 0 246 0c62.57-62.58 67.43-161.35 14.57-229.54L420 123.11V160a22 22 0 0 0 44 0V70a22 22 0 0 0-22-22ZM313.92 381.92a130.13 130.13 0 0 1-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0 50.69 133.16 0 183.84Z"},null,-1),E=[q];function O(l,h){return n(),c("svg",T,E)}const Q={render:O},G={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 512 512"},H=e("path",{fill:"currentColor",d:"M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-58v44h58v58h44v-58h58v-44h-58v-31.39c85.6-10.84 152-84.12 152-172.61Zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130Z"},null,-1),J=[H];function K(l,h){return n(),c("svg",G,J)}const W={render:K},_=l=>(N("data-v-2c9f9ee3"),l=l(),Z(),l),X=["onSubmit"],Y={class:"content-wrapper"},ee={key:0,class:"fetch-badge"},te={key:1,class:"fetch-badge"},se={class:"mb-3"},oe=_(()=>e("label",{for:"author-name",class:"form-label"}," Name ",-1)),ae=["disabled"],de={class:"mb-3 btn-group"},ne=["disabled"],le={for:"author-sex-female",class:"btn btn-outline-primary d-flex align-items-center gap-1"},ie=["disabled"],re={for:"author-sex-male",class:"btn btn-outline-primary d-flex align-items-center gap-1"},ce={class:"mb-3"},ue=_(()=>e("label",{for:"author-birth",class:"form-label"}," Birthday ",-1)),me=["disabled"],he={class:"mb-3"},be=_(()=>e("label",{for:"author-country",class:"form-label"}," Country ",-1)),_e=["disabled"],pe={class:"mt-4 mb-3 d-flex justify-content-between gap-2"},ve=["onClick","disabled"],fe=["disabled"],ge=B({__name:"AuthorForm",props:{modelValue:null},emits:["undefined"],setup(l,{emit:h}){const p=l,w=D(),t=C({}),v=P(),a=M(()=>v.fetchStatuses),f=()=>{t.value={},Object.assign(t.value,p.modelValue),t.value.id||(t.value.id=j())},k=()=>{h("update:modelValue",{...t.value})};return $(p,f,{immediate:!0}),I(v.fetchBooks),(V,o)=>{const S=F("focus");return n(),c("form",{"data-testid":"author-form",class:"AuthorForm",onSubmit:y(k,["prevent"])},[e("div",Y,[s(a).pending?(n(),c("div",ee," Loading... ")):g("",!0),s(a).error?(n(),c("div",te," Something went wrong... Please come back later! ")):g("",!0),e("div",{class:R(["content",{active:s(a).active}])},[e("div",se,[oe,i(e("input",{"data-testid":"author-name",type:"text",id:"author-name",class:"form-control",required:"","onUpdate:modelValue":o[0]||(o[0]=d=>t.value.name=d),disabled:s(a).disabled},null,8,ae),[[S],[b,t.value.name]])]),e("div",de,[i(e("input",{"data-testid":"author-sex-female",type:"radio",id:"author-sex-female",value:"female",class:"btn-check","onUpdate:modelValue":o[1]||(o[1]=d=>t.value.sex=d),disabled:s(a).disabled},null,8,ne),[[x,t.value.sex]]),e("label",le,[(n(),u(m(s(W)))),r(" Female ")]),i(e("input",{"data-testid":"author-sex-male",type:"radio",id:"author-sex-male",value:"male",class:"btn-check","onUpdate:modelValue":o[2]||(o[2]=d=>t.value.sex=d),disabled:s(a).disabled},null,8,ie),[[x,t.value.sex]]),e("label",re,[(n(),u(m(s(Q)))),r(" Male ")])]),e("div",ce,[ue,i(e("input",{"data-testid":"author-birth",type:"date",id:"author-birth",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=d=>t.value.birthday=d),disabled:s(a).disabled},null,8,me),[[b,t.value.birthday]])]),e("div",he,[be,i(e("input",{"data-testid":"author-country",type:"text",id:"author-country",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=d=>t.value.country=d),disabled:s(a).disabled},null,8,_e),[[b,t.value.country]])])],2)]),e("div",pe,[e("button",{"data-testid":"author-back",type:"button",class:"btn btn-secondary d-flex align-items-center gap-1",onClick:o[5]||(o[5]=d=>s(w).back())},[(n(),u(m(s(U)))),r(" Back ")]),e("button",{"data-testid":"author-reset",type:"reset",class:"btn btn-danger me-auto d-flex align-items-center gap-1",onClick:y(f,["prevent"]),disabled:s(a).disabled},[(n(),u(m(s(L)))),r(" Reset ")],8,ve),e("button",{"data-testid":"author-submit",type:"submit",class:"btn btn-primary d-flex align-items-center gap-1",disabled:s(a).disabled},[A(V.$slots,"default",{},()=>[r("Submit")],!0)],8,fe)])],40,X)}}});const ke=z(ge,[["__scopeId","data-v-2c9f9ee3"]]);export{ke as A};
