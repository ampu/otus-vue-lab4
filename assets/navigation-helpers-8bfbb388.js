import{o as d,a as f,b as u}from"./index-432f5527.js";import{_ as i}from"./lodash-cfb1e125.js";const P={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},w=u("path",{fill:"currentColor",d:"m19.3 8.925-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Z"},null,-1),M=[w];function _(t,s){return d(),f("svg",P,M)}const v={render:_},I=async(t,s)=>{const n=new URL(s,location.href);await t.push({path:n.pathname,query:Object.fromEntries(n.searchParams),hash:n.hash})},B=async(t,s)=>{await t.replace({name:"not-found",params:{pathMatch:s.path.split("/").slice(1)},query:s.query,hash:s.hash})},E=(t,s,n)=>{const a=(s-1)*n,o=a+n;return t.slice(a,o)},x=(t,s)=>Math.ceil(t/s),b=(t,s,n,a=3)=>{const o=x(s,n);t=i.clamp(t,1,o),a=i.clamp(a,o);let h=Math.ceil(a/2),r;if(t-h>o-a)r=i.range(o-a+1,o+1);else{t-h<0&&(h=t);const m=t-h;r=i.range(m+1,m+a+1)}const l=Math.floor(a/2);let e=t-l,c=t+l;return e<1&&(c=Math.min(c+(1-e),o),e=1),c>o&&(e=Math.max(e-(c-o),1),c=o),{page:t,perPage:n,totalPages:o,total:s,pageRange:a,startPage:e,endPage:c,previousPage:t>1?t-1:0,nextPage:t<o?t+1:0,pagesInRange:r,firstPageInRange:Math.min(...r),lastPageInPage:Math.max(...r)}};export{v as E,E as a,I as b,b as c,B as d,x as g};
