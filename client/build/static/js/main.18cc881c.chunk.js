(this.webpackJsonpbook_search=this.webpackJsonpbook_search||[]).push([[0],{54:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(26),s=n.n(r),i=n(27),o=n(2),a=n(9),j=n(29),l=n(14),u=n(0),d=Object(c.createContext)(),b=d.Provider,h=function(e,t){switch(t.type){case"search":return Object(l.a)(Object(l.a)({},e),{},{posts:t.post.items,loading:!1});default:return e}},O={saved:[],posts:[],result:{},loading:!1},x=function(e){e.value;var t=Object(j.a)(e,["value"]),n=Object(c.useReducer)(h,O),r=Object(a.a)(n,2),s=r[0],i=r[1];return Object(u.jsx)(b,Object(l.a)({value:[s,i]},t))},f=function(){return Object(c.useContext)(d)},p=n(8),m=n.n(p),v=n(10),g=function(e){var t=e.fluid,n=e.children;return Object(u.jsx)("div",{className:"container".concat(t?"-fluid":""),children:n})},k=function(e){var t=e.fluid,n=e.children;return Object(u.jsx)("div",{className:"row".concat(t?"-fluid":""),children:n})},N=function(e){var t=e.size,n=e.children;return Object(u.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:n})},w=n(12),y=n.n(w),z=function(e){var t=e.split(" ").join("+");return y.a.get("/api/google?title=".concat(t))},I=function(){return y.a.get("/api/books")},S=function(e){return y.a.post("/api/books",e)},_=function(e){return y.a.delete("/api/books/"+e)},C=function(){var e=Object(c.useRef)(),t=f(),n=Object(a.a)(t,2),r=(n[0],n[1]),s=function(){var t=Object(v.a)(m.a.mark((function t(n){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,z(e.current.value);case 3:c=t.sent,console.log(c.data),r({type:"search",post:c.data}),e.current.value="";case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)(g,{children:Object(u.jsx)(k,{children:Object(u.jsxs)("div",{className:"input-group",children:[Object(u.jsx)(N,{size:"md-8",children:Object(u.jsx)("div",{className:"form-outline",children:Object(u.jsx)("input",{type:"search",id:"form1",className:"form-control",ref:e})})}),Object(u.jsx)(N,{size:"md-4",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:s,children:Object(u.jsx)("i",{className:"fas fa-search",children:"Search"})})})]})})})},L=(n(54),function(e){var t=e.children;return Object(u.jsx)("li",{className:"list-group-item",children:t})}),B=function(){var e=f(),t=Object(a.a)(e,2),n=t[0],c=(t[1],function(){var e=Object(v.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("save was clicked"),console.log(t),n={title:t.title,author:t.authors[0],description:t.description,image:t.imageLinks.smallThumbnail,link:t.infoLink},console.log(n),e.prev=4,e.next=7,S(n);case 7:c=e.sent,console.log(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}());return n&&n.posts&&n.posts.length?n.posts.map((function(e){return Object(u.jsx)(L,{children:Object(u.jsx)(g,{children:Object(u.jsxs)(k,{children:[Object(u.jsx)(N,{size:"md-3",children:Object(u.jsx)("img",{src:e.volumeInfo.imageLinks.smallThumbnail})}),Object(u.jsx)(N,{size:"md-9",children:Object(u.jsxs)(g,{children:[e.volumeInfo.authors?Object(u.jsx)(k,{children:Object(u.jsxs)("strong",{children:[e.volumeInfo.title," by ",e.volumeInfo.authors.join(",")]})}):Object(u.jsx)(k,{children:Object(u.jsx)("strong",{children:e.volumeInfo.title})}),e.volumeInfo.description?Object(u.jsx)(k,{children:e.volumeInfo.description.substring(0,250)}):Object(u.jsx)(k,{children:"No description available."}),Object(u.jsxs)(k,{children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return c(e.volumeInfo)},children:"\u2764\ufe0f Add to Saved"}),Object(u.jsx)("a",{href:e.volumeInfo.infoLink,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("button",{className:"btn btn-secondary",children:"View"})})]})]})})]})})},e.id)})):Object(u.jsx)("h3",{children:"Search for a book to see results."})},R=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(g,{fluid:!0,children:Object(u.jsxs)(k,{children:[Object(u.jsx)(N,{size:"md-6",children:Object(u.jsx)(C,{})}),Object(u.jsx)(N,{size:"md-6",children:Object(u.jsx)(B,{})})]})})})},E=function(){var e=Object(c.useState)(void 0),t=Object(a.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,console.log(t.data),r(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:n=e.sent,console.log(n),s();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),n?n.map((function(e){return Object(u.jsx)(L,{children:Object(u.jsx)(g,{children:Object(u.jsxs)(k,{children:[e.image?Object(u.jsx)(N,{size:"md-3",children:Object(u.jsx)("img",{src:e.image})}):Object(u.jsx)(N,{size:"md-3",children:Object(u.jsx)("p",{children:"No image found."})}),Object(u.jsx)(N,{size:"md-9",children:Object(u.jsxs)(g,{children:[Object(u.jsx)(k,{children:Object(u.jsxs)("strong",{children:[e.title," by ",e.author]})}),e.description?Object(u.jsx)(k,{children:e.description.substring(0,250)}):Object(u.jsx)(k,{children:"No description available."}),e.link?Object(u.jsxs)(k,{children:[Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("button",{className:"btn btn-secondary",children:"View"})}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){i(e._id)},children:"Remove"})]}):Object(u.jsx)(k,{children:Object(u.jsx)("p",{children:"No link found."})})]})})]})})},e._id)})):Object(u.jsx)("h3",{children:"No books have been saved."})},J=function(){return Object(u.jsx)(E,{})},T=function(){return Object(u.jsx)(g,{children:Object(u.jsxs)(k,{children:[Object(u.jsx)(N,{size:"md-2",children:Object(u.jsx)("img",{})}),Object(u.jsx)(N,{size:"md-6",children:Object(u.jsx)("h1",{children:"Google Book Search"})}),Object(u.jsx)(N,{size:"md-2",children:Object(u.jsx)("a",{href:"/",children:"Home"})}),Object(u.jsx)(N,{size:"md-2",children:Object(u.jsx)("a",{href:"/saved",children:"Saved Books"})})]})})};var V=function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(x,{children:[Object(u.jsx)(T,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(u.jsx)(o.a,{exact:!0,path:"/saved",component:J})]})]})})})};s.a.render(Object(u.jsx)(V,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.18cc881c.chunk.js.map