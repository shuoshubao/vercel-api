(()=>{var L=Object.create;var m=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var O=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var a=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var D=(o,t,r,d)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of C(t))!v.call(o,n)&&n!==r&&m(o,n,{get:()=>t[n],enumerable:!(d=S(t,n))||d.enumerable});return o};var s=(o,t,r)=>(r=o!=null?L(O(o)):{},D(t||!o||!o.__esModule?m(r,"default",{value:o,enumerable:!0}):r,o));var p=a((A,u)=>{u.exports=window.React});var y=a((q,c)=>{c.exports=window.ReactDOM});var _=a(l=>{"use strict";var f=y();l.createRoot=f.createRoot,l.hydrateRoot=f.hydrateRoot;var U});var E=a((B,g)=>{g.exports=window.antd});var w=a((F,R)=>{R.exports=window._});var T=s(p()),I=s(_());var i=s(p()),e=s(E()),h=s(w()),{Text:N}=e.Typography,x=()=>{let o=(0,h.get)(window,"globalData.RouterList");return i.default.createElement(e.List,{header:"API",dataSource:o,renderItem:t=>{let{method:r,url:d}=t;return i.default.createElement(e.List.Item,null,i.default.createElement(e.Space,{style:{display:"flex"}},i.default.createElement("div",{style:{width:60}},i.default.createElement(e.Tag,{color:"green",style:{margin:0}},r)),i.default.createElement(N,null,d)))},style:{padding:24}})};(0,I.createRoot)(document.querySelector("#app")).render(T.default.createElement(x,null));})();
