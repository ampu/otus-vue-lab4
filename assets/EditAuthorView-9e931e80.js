import{b as f,E as S,d as _}from"./navigation-helpers-7f2ce2ce.js";import{A}from"./AuthorForm-4e76869b.js";import{u as E,a as F}from"./book-store-e7848659.js";import{d as V,D as w,c as n,y as k,b,h as c,q as g,u as d,e as v,a as x,n as B,k as C,l as N}from"./index-767bb067.js";import{F as y}from"./flash-types-479cb01b.js";import"./lodash-10555ade.js";const I=v("h1",null,"Edit Author",-1),j=V({__name:"EditAuthorView",props:{authorId:null},setup(i){const l=i,t=C(),a=N(),h=E(),s=F(),m=w(),e=n(()=>s.getAuthor(l.authorId)),r=n(()=>h.fetchStatuses);k([e,r],()=>{!e.value&&r.value.active&&_(t,a)},{immediate:!0});const p=async u=>{await s.updateAuthor(u),m.addFlash({status:y.SUCCESS,message:"Author edited"});const o=a.query.redirect;if(!o){await t.push({name:"authors"});return}await f(t,o)};return(u,o)=>(x(),b("div",null,[I,c(A,{modelValue:d(e),"onUpdate:modelValue":p},{default:g(()=>[c(d(S)),B(" Edit ")]),_:1},8,["modelValue"])]))}});export{j as default};