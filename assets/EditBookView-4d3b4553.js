import{d as f,E as k,c as n,y as h,a as B,n as S,q as _,u as c,b,o as i,f as E,g as F,s as V,h as w,i as g}from"./index-384e0710.js";import{b as v,E as C,d as x}from"./navigation-helpers-fc83d6b2.js";import{B as y}from"./BookForm-2a7b99cf.js";import{u as N}from"./book-store-46949dd4.js";import{F as I}from"./flash-types-fe8956ec.js";import"./lodash-4c9e5a16.js";import"./add-899f0b12.js";const T=b("h1",null,"Edit Book",-1),A=f({__name:"EditBookView",props:{bookId:null},setup(d){const m=d,o=w(),s=g(),e=N(),l=k(),t=n(()=>e.getBook(m.bookId)),r=n(()=>e.fetchStatuses);h([t,r],()=>{!t.value&&r.value.active&&x(o,s)},{immediate:!0});const p=async u=>{await e.updateBook(u),l.addFlash({status:I.SUCCESS,message:"Book edited"});const a=s.query.redirect;if(!a){await o.push({name:"books"});return}await v(o,a)};return(u,a)=>(i(),B("div",null,[T,S(y,{modelValue:c(t),"onUpdate:modelValue":p},{default:_(()=>[(i(),E(F(c(C)))),V(" Edit ")]),_:1},8,["modelValue"])]))}});export{A as default};