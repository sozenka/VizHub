(this["webpackJsonpvizhub-client"]=this["webpackJsonpvizhub-client"]||[]).push([[0],{17:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t(6),n=t.n(s),r=t(12),l=t(26),i=t(4),o=t(11),b=(t(17),t(3));i.d.register(i.a,i.l,i.f);var j=function(){const[e,a]=Object(c.useState)(""),[t,s]=Object(c.useState)(null),[n,r]=Object(c.useState)([]),[i,j]=Object(c.useState)(null),d={labels:n.map((e=>e.language)).filter(Boolean),datasets:[{label:"Languages Used",data:n.map((e=>e.size)),backgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"navbar",children:Object(b.jsx)("h1",{className:"navbar-title",children:"VizHub"})}),Object(b.jsxs)("div",{className:"center-container",children:[Object(b.jsx)("h1",{children:"GitHub Profile Viewer"}),Object(b.jsx)("input",{className:"input",type:"text",placeholder:"Enter GitHub username",value:e,onChange:e=>a(e.target.value)}),Object(b.jsx)("button",{className:"button",onClick:async()=>{j(null);try{const a=await l.a.get("/api/profile/".concat(e));s(a.data);const t=await l.a.get("/api/repos/".concat(e));r(t.data)}catch(i){j("Error fetching data. Please try again."),console.error("Error fetching data",i)}},children:"FETCH"}),i&&Object(b.jsx)("p",{className:"error-message visible",children:i}),t&&Object(b.jsxs)("div",{className:"profile-card",children:[Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("img",{src:t.avatar_url,alt:"Avatar",className:"profile-avatar"}),Object(b.jsx)("p",{children:t.bio}),Object(b.jsxs)("p",{children:["Followers: ",t.followers]}),Object(b.jsxs)("p",{children:["Following: ",t.following]}),Object(b.jsxs)("p",{children:["Public Repos: ",t.public_repos]}),Object(b.jsxs)("p",{children:["Location: ",t.location]}),Object(b.jsxs)("p",{children:["Company: ",t.company]}),Object(b.jsxs)("p",{children:["Blog: ",Object(b.jsx)("a",{href:t.blog,target:"_blank",rel:"noopener noreferrer",children:t.blog})]})]}),n.length>0&&Object(b.jsx)("div",{className:"chart-container",children:Object(b.jsx)(o.a,{data:d})})]}),Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"\xa9 2024 VizHub. Made by Sozenka."})})]})};t(23);n.a.render(Object(b.jsx)(r.a,{basename:"/VizHub",children:Object(b.jsx)(j,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b0a335dd.chunk.js.map