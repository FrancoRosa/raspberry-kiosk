(this["webpackJsonpraspberry-kiosk"]=this["webpackJsonpraspberry-kiosk"]||[]).push([[0],{48:function(e,t,c){},91:function(e,t){},92:function(e,t){},93:function(e,t){},94:function(e,t){},95:function(e,t){},96:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(0),s=c(38),i=c.n(s),a=c(11),o=(c(48),c(5)),u=c(39),j=c.n(u),f=function(e,t){var c=Object(r.useRef)(t);Object(r.useEffect)((function(){c.current=t})),Object(r.useEffect)((function(){var t=function(t){t.code===e&&c.current(t)};return document.addEventListener("keypress",t),function(){return document.removeEventListener("keypress",t)}}),[e])},d=function(e){var t=e.history;f("KeyO",(function(){t.push("/vids")}));var c=Object(o.g)().id;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(j.a,{width:"800px",url:"/vid/".concat(c),playing:!0,controls:!0})})},b=c(15),l=c(18);l.c.GlobalWorkerOptions.workerSrc="/js/pdf.worker.js";var O=function(e){var t=e.history,c=Object(r.useState)(null),s=Object(b.a)(c,2),i=s[0],a=s[1],u=Object(r.useState)(1),j=Object(b.a)(u,2),d=j[0],O=j[1],p=function(e){switch(e){case"next":return d<i?d+1:d;case"prev":return d>1?d-1:d;case"home":return 1;default:return d}},x=Object(o.g)().id;return f("KeyO",(function(){t.push("/pdfs")})),f("KeyA",(function(){document.querySelector("#prev").click()})),f("KeyD",(function(){document.querySelector("#next").click()})),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(l.a,{file:"/pdf/".concat(x),onLoadSuccess:function(e){var t=e.numPages;a(t)},className:"document-status",children:Object(n.jsx)(l.b,{pageNumber:d,height:480})}),Object(n.jsxs)("p",{className:"page-number",children:["Page ",d," of ",i]}),Object(n.jsxs)("div",{className:"pdf-controls",children:[Object(n.jsx)("button",{id:"prev",onClick:function(){return O(p("prev"))}}),Object(n.jsx)("button",{id:"next",onClick:function(){return O(p("next"))}})]})]})},p=function(e){var t=e.history;f("KeyO",(function(){t.push("/figs")}));var c=Object(o.g)().id;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("img",{className:"image",src:"/fig/".concat(c),alt:"figure"})})},x=function(e,t){switch(e){case"vid":return Object(n.jsx)("img",{src:"/icons/vid-icon.png",className:t,alt:"icon"});case"pdf":return Object(n.jsx)("img",{src:"/icons/pdf-icon.png",className:t,alt:"icon"});case"fig":return Object(n.jsx)("img",{src:"/icons/fig-icon.png",className:t,alt:"icon"});default:return}},m=function(e){var t=e.category,c=e.selected;return Object(n.jsx)(a.b,{to:"/".concat(t,"s"),children:x(t,c?"selected":"not-selected")})},g=function(){var e=Object(r.useState)(0),t=Object(b.a)(e,2),c=t[0],s=t[1];return f("KeyA",(function(){c>0&&s(c-1)})),f("KeyD",(function(){c<2&&s(c+1)})),f("KeyP",(function(){document.querySelector(".selected").parentElement.click()})),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)(m,{selected:0===c,category:"pdf"}),Object(n.jsx)(m,{selected:1===c,category:"fig"}),Object(n.jsx)(m,{selected:2===c,category:"vid"})]})},h=c(17),v=c.n(h),y=c(42),k=function(e){var t=e.category,c=e.selected,r=e.file;return Object(n.jsx)(a.b,{to:"/".concat(t,"/").concat(r),className:c?"selected-i":"not-selected-i",children:Object(n.jsx)("img",{src:"thumbs/".concat(r,".png"),alt:"".concat(r)})})},N=function(e){var t=e.category,c=Object(o.f)(),s=Object(r.useState)(0),i=Object(b.a)(s,2),a=i[0],u=i[1],j=Object(r.useState)([]),d=Object(b.a)(j,2),l=d[0],O=d[1],p=Object(r.useState)(!1),x=Object(b.a)(p,2),m=x[0],g=x[1],h=Object(r.useState)(0),N=Object(b.a)(h,2),S=N[0],K=N[1],w=function(e,t){switch(e){case"pdf":return t.pdf;case"vid":return t.vid;case"fig":return t.fig;default:return}};(function(){var e=Object(y.a)(v.a.mark((function e(){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=10;break}return e.next=3,fetch("files.json");case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,O(w(t,n)),K(l.length),g(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();return f("KeyA",(function(){a>0&&u(a-1)})),f("KeyD",(function(){a<S-1&&u(a+1)})),f("KeyP",(function(){document.querySelector(".selected-i").click()})),f("KeyO",(function(){c.push("/")})),Object(n.jsx)("div",{className:"list",children:l.map((function(e){return Object(n.jsx)(k,{category:t,selected:l.indexOf(e)===a,file:e},l.indexOf(e))}))})},S=function(){return Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/vid/:id",component:d}),Object(n.jsx)(o.a,{path:"/pdf/:id",component:O}),Object(n.jsx)(o.a,{path:"/fig/:id",component:p}),Object(n.jsx)(o.a,{path:"/vids",component:function(){return Object(n.jsx)(N,{category:"vid"})}}),Object(n.jsx)(o.a,{path:"/pdfs",component:function(){return Object(n.jsx)(N,{category:"pdf"})}}),Object(n.jsx)(o.a,{path:"/figs",component:function(){return Object(n.jsx)(N,{category:"fig"})}}),Object(n.jsx)(o.a,{path:"/",component:g})]})};i.a.render(Object(n.jsx)(a.a,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.4eefc750.chunk.js.map