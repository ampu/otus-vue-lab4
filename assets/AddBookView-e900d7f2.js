import{d,D as n,b as u,h as e,q as m,e as c,a as i,u as l,n as p,k as f}from"./index-767bb067.js";import{A as k}from"./add-d8581c15.js";import{B as _}from"./BookForm-8d3c513b.js";import{u as h}from"./book-store-e7848659.js";import{F as B}from"./flash-types-479cb01b.js";import"./lodash-10555ade.js";const S=c("h1",null,"New Book",-1),g=d({__name:"AddBookView",setup(w){const a=f(),t=h(),s=n(),r=async o=>{await t.addBook(o),s.addFlash({status:B.SUCCESS,message:"Book added"}),await a.push({name:"books",query:{page:-1}})};return(o,F)=>(i(),u("div",null,[S,e(_,{"onUpdate:modelValue":r},{default:m(()=>[e(l(k)),p(" Add ")]),_:1})]))}});export{g as default};
