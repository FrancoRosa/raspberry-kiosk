(this["webpackJsonpraspberry-kiosk"]=this["webpackJsonpraspberry-kiosk"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"fig":["landscape.jpg","penguin.jpeg"],"pdf":["automata.pdf","guide.pdf"],"vid":["animation.mp4","watermelon.mp4"]}')},48:function(e,t,c){},91:function(e,t){},92:function(e,t){},93:function(e,t){},94:function(e,t){},95:function(e,t){},96:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(0),r=c(39),i=c.n(r),o=c(11),a=(c(48),c(5)),u=c(40),j=c.n(u),d=function(e,t){var c=Object(s.useRef)(t);Object(s.useEffect)((function(){c.current=t})),Object(s.useEffect)((function(){var t=function(t){t.code===e&&c.current(t)};return document.addEventListener("keypress",t),function(){return document.removeEventListener("keypress",t)}}),[e])},f=function(e){var t=e.history;d("KeyO",(function(){t.push("/vids")}));var c=Object(a.g)().id;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("p",{children:"This is a video"}),Object(n.jsx)(j.a,{width:"840px",url:"/vid/".concat(c),playing:!0,controls:!0})]})},l=c(16),p=c(18);p.c.GlobalWorkerOptions.workerSrc="/js/pdf.worker.js";var b=function(e){var t=e.history,c=Object(s.useState)(null),r=Object(l.a)(c,2),i=r[0],o=r[1],u=Object(s.useState)(1),j=Object(l.a)(u,2),f=j[0],b=j[1],O=function(e){switch(e){case"next":return f<i?f+1:f;case"prev":return f>1?f-1:f;case"home":return 1;default:return f}},m=Object(a.g)().id;return d("KeyO",(function(){t.push("/pdfs")})),d("KeyA",(function(){document.querySelector("#prev").click()})),d("KeyD",(function(){document.querySelector("#next").click()})),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(p.a,{file:"/pdf/".concat(m),onLoadSuccess:function(e){var t=e.numPages;o(t)},className:"document-status",children:Object(n.jsx)(p.b,{pageNumber:f,height:480})}),Object(n.jsxs)("p",{className:"page-number",children:["Page ",f," of ",i]}),Object(n.jsxs)("div",{className:"pdf-controls",children:[Object(n.jsx)("button",{id:"prev",onClick:function(){return b(O("prev"))}}),Object(n.jsx)("button",{id:"next",onClick:function(){return b(O("next"))}})]})]})},O=function(e){var t=e.history;d("KeyO",(function(){t.push("/figs")}));var c=Object(a.g)().id;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("img",{className:"image",src:"/fig/".concat(c),alt:"figure"})})},m=function(e,t){switch(e){case"vid":return Object(n.jsx)("img",{src:"/icons/vid-icon.png",className:t,alt:"icon"});case"pdf":return Object(n.jsx)("img",{src:"/icons/pdf-icon.png",className:t,alt:"icon"});case"fig":return Object(n.jsx)("img",{src:"/icons/fig-icon.png",className:t,alt:"icon"});default:return}},g=function(e){var t=e.category,c=e.selected;return Object(n.jsx)(o.b,{to:"/".concat(t,"s"),children:m(t,c?"selected":"not-selected")})},x=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],r=t[1];return d("KeyA",(function(){c>0&&r(c-1)})),d("KeyD",(function(){c<2&&r(c+1)})),d("KeyP",(function(){document.querySelector(".selected").parentElement.click()})),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)(g,{selected:0===c,category:"pdf"}),Object(n.jsx)(g,{selected:1===c,category:"fig"}),Object(n.jsx)(g,{selected:2===c,category:"vid"})]})},h=c(17),v=function(e){var t=e.category,c=e.selected,s=e.file;return Object(n.jsx)(o.b,{to:"/".concat(t,"/").concat(s),className:c?"selected-i":"not-selected-i",children:Object(n.jsx)("img",{src:"thumbs/".concat(s,".png"),alt:"".concat(s)})})},y=function(e){var t=e.category,c=Object(a.f)(),r=function(e){switch(e){case"pdf":return h.pdf;case"vid":return h.vid;case"fig":return h.fig;default:return}}(t),i=r.length,o=Object(s.useState)(0),u=Object(l.a)(o,2),j=u[0],f=u[1];return d("KeyA",(function(){j>0&&f(j-1)})),d("KeyD",(function(){j<i-1&&f(j+1)})),d("KeyP",(function(){document.querySelector(".selected-i").click()})),d("KeyO",(function(){c.push("/")})),Object(n.jsx)("div",{className:"list",children:r.map((function(e){return Object(n.jsx)(v,{category:t,selected:r.indexOf(e)===j,file:e},r.indexOf(e))}))})},k=function(){return Object(n.jsxs)(a.c,{children:[Object(n.jsx)(a.a,{path:"/vid/:id",component:f}),Object(n.jsx)(a.a,{path:"/pdf/:id",component:b}),Object(n.jsx)(a.a,{path:"/fig/:id",component:O}),Object(n.jsx)(a.a,{path:"/vids",component:function(){return Object(n.jsx)(y,{category:"vid"})}}),Object(n.jsx)(a.a,{path:"/pdfs",component:function(){return Object(n.jsx)(y,{category:"pdf"})}}),Object(n.jsx)(a.a,{path:"/figs",component:function(){return Object(n.jsx)(y,{category:"fig"})}}),Object(n.jsx)(a.a,{path:"/",component:x})]})};i.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.e80ab3f6.chunk.js.map