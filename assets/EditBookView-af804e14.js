import{d as k,D as f,c as n,y as h,b as B,h as c,q as S,u as d,e as _,a as b,n as E,k as F,l as V}from"./index-767bb067.js";import{b as w,E as g,d as v}from"./navigation-helpers-7f2ce2ce.js";import{B as x}from"./BookForm-8d3c513b.js";import{u as C}from"./book-store-e7848659.js";import{F as N}from"./flash-types-479cb01b.js";import"./lodash-10555ade.js";import"./add-d8581c15.js";const y=_("h1",null,"Edit Book",-1),j=k({__name:"EditBookView",props:{bookId:null},setup(i){const l=i,o=F(),s=V(),t=C(),m=f(),e=n(()=>t.getBook(l.bookId)),r=n(()=>t.fetchStatuses);h([e,r],()=>{!e.value&&r.value.active&&v(o,s)},{immediate:!0});const p=async u=>{await t.updateBook(u),m.addFlash({status:N.SUCCESS,message:"Book edited"});const a=s.query.redirect;if(!a){await o.push({name:"books"});return}await w(o,a)};return(u,a)=>(b(),B("div",null,[y,c(x,{modelValue:d(e),"onUpdate:modelValue":p},{default:S(()=>[c(d(g)),E(" Edit ")]),_:1},8,["modelValue"])]))}});export{j as default};