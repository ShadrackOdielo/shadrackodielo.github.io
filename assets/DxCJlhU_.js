import{f as g,r as f,aa as $,aq as L,c as n,j as M,o as a,s as O,w as _,b as c,g as C,a as r,au as N,av as j,Q as A,F as w,A as S,y as z,a4 as I,n as B,d as b,t as E,z as R}from"./BBe-37ea.js";import{_ as V}from"./Bd3_tExM.js";import{u as U,_ as D}from"./BRwoSIpH.js";import"./DJik2PkE.js";import"./CAZilBRX.js";import"./DvDH6DOc.js";const F=Symbol.for("nuxt:client-only"),T=g({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(k,{slots:e,attrs:s}){const i=f(!1);return $(()=>{i.value=!0}),L(F,!0),o=>{var m;if(i.value)return(m=e.default)==null?void 0:m.call(e);const h=e.fallback||e.placeholder;if(h)return h();const d=o.fallback||o.placeholder||"",p=o.fallbackTag||o.placeholderTag||"span";return n(p,s,d)}}}),Y=r("div",{class:"w-8 h-8"},null,-1),q=g({__name:"ColorModeToggle",setup(k){const e=U(),s=M({get(){return e.value==="dark"},set(){e.preference=e.value==="dark"?"light":"dark"}});return(i,o)=>{const h=D,d=T;return a(),O(d,null,{fallback:_(()=>[Y]),default:_(()=>[c(h,{icon:C(s)?"i-heroicons-moon-20-solid":"i-heroicons-sun-20-solid",color:"gray",variant:"ghost","aria-label":"Theme",onClick:o[0]||(o[0]=p=>s.value=!C(s))},null,8,["icon"])]),_:1})}}}),Q=N("/avatar.jpg"),W={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"},G={class:"flex-shrink-0"},J={key:0,src:Q,alt:"Avatar",class:"h-8 w-8 rounded-full"},K={key:1,class:"text-xl font-bold dark:text-white"},P={class:"hidden md:flex space-x-4"},X={class:"-mr-2 flex md:hidden"},Z={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ee={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"},te={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},oe={key:0,class:"md:hidden"},ne={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},ae=["href"],se=g({__name:"Navbar",setup(k){const e=f(!1),s=j(),i=f(!0),o=f(""),h=f(0),d=[{id:"home",name:"Home",href:"/#"},{id:"about",name:"About",href:"/#about"},{id:"work",name:"Work",href:"/#work"},{id:"skills",name:"Skills",href:"/#skills"},{id:"experience",name:"Experience",href:"/#experience"},{id:"contact",name:"Contact",href:"/#contact"}],p=M(()=>s.path==="/"?"#":"/"),m=()=>{i.value=window.scrollY<window.innerHeight,h.value=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100,d.map(t=>document.getElementById(t.id)).forEach(t=>{t&&t.getBoundingClientRect().top<=window.innerHeight/2&&t.getBoundingClientRect().bottom>=window.innerHeight/2&&(o.value=t.id,s.path==="/"&&history.replaceState(null,"",`#${t.id}`))})},H=()=>{const x=new IntersectionObserver(t=>{t.forEach(u=>{u.isIntersecting&&(o.value=u.target.id,s.path==="/"&&history.replaceState(null,"",`#${u.target.id}`))})},{threshold:.5});d.forEach(t=>{const u=document.getElementById(t.id);u&&x.observe(u)})};return $(()=>{window.addEventListener("scroll",m),H()}),A(()=>{window.removeEventListener("scroll",m)}),(x,t)=>{const u=T,v=V,y=q;return a(),n("header",{class:B([{"bg-white dark:bg-gray-800":!i.value,"bg-transparent":i.value},"fixed w-full z-50 transition-colors duration-300"])},[r("nav",W,[r("div",G,[c(v,{to:p.value,class:"flex items-center"},{default:_(()=>[c(u,null,{default:_(()=>[i.value?(a(),n("img",J)):(a(),n("span",K,"Shadrack Odielo"))]),_:1})]),_:1},8,["to"])]),r("div",P,[(a(),n(w,null,S(d,l=>c(v,{key:l.id,href:l.href,class:B(["text-black dark:text-white hover:text-blue-500",{underline:o.value===l.id}])},{default:_(()=>[b(E(l.name),1)]),_:2},1032,["href","class"])),64)),c(v,{to:"/blog",class:"text-gray-800 dark:text-white hover:text-blue-500"},{default:_(()=>[b("Blog")]),_:1}),c(y)]),r("div",X,[r("button",{onClick:t[0]||(t[0]=l=>e.value=!e.value),class:"text-gray-800 dark:text-white hover:text-blue-500"},[(a(),n("svg",Z,[e.value?(a(),n("path",te)):(a(),n("path",ee))]))])])]),e.value?(a(),n("div",oe,[r("div",ne,[(a(),n(w,null,S(d,l=>r("a",{key:l.id,href:l.href,class:"block text-gray-800 dark:text-white hover:text-blue-500"},E(l.name),9,ae)),64)),c(v,{to:"/blog",class:"block text-gray-800 dark:text-white hover:text-blue-500"},{default:_(()=>[b("Blog")]),_:1}),c(y)])])):z("",!0),r("div",{class:"h-1 bg-blue-500",style:I({width:h.value+"%"})},null,4)],2)}}}),he=g({__name:"default",setup(k){return(e,s)=>(a(),n(w,null,[c(se),R(e.$slots,"default")],64))}});export{he as default};