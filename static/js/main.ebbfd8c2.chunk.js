(this.webpackJsonprandom_quote_machine=this.webpackJsonprandom_quote_machine||[]).push([[0],{17:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),a=n(10),r=n.n(a),s=(n(17),n(8)),i=n.n(s),u=n(11),l=n(3),h=n(5),b=n(12),j=n(9),d=n(1),f=function(t){var e=t.quote,n=t.mainColor,o=t.getNewQuote,c=t.fadeDuration,a=t.fadeState,r=e.content,s=e.author,i={backgroundColor:n,transition:"background-color ".concat(c,"ms ease-out")},u={color:n,transition:"color ".concat(c,"ms ease-out")},l={color:n,transition:"color ".concat(c,"ms ease-out, opacity ").concat(c/2,"ms ease-out")};return Object(d.jsx)("div",{className:"container",style:i,children:Object(d.jsxs)("div",{className:"quote-box",children:[Object(d.jsxs)("div",{className:"quote-wrapper fade-wrapper ".concat(a),style:l,children:[Object(d.jsx)(h.a,{className:"quote-icon",icon:b.a}),r,Object(d.jsxs)("div",{className:"quote-author",style:u,children:["- ",s]})]}),Object(d.jsxs)("div",{className:"quote-btn",children:[Object(d.jsxs)("ul",{className:"share-container",children:[Object(d.jsx)("li",{style:i,onClick:function(){var t="https://twitter.com/intent/tweet?text="+encodeURI("".concat(r,"\n-").concat(s,"}"));console.log(t),window.open(t,"_blank").focus()},children:Object(d.jsx)(h.a,{icon:j.b,className:"share-btn"})}),Object(d.jsx)("li",{style:i,onClick:function(){window.FB.ui({display:"popup",method:"share",hashTag:"#randomquotes",quote:"".concat(r,"\n-").concat(s),href:"https://voxuannguyen2001.github.io/random-quote-generator/"},(function(t){}))},children:Object(d.jsx)(h.a,{icon:j.a,className:"share-btn"})})]}),Object(d.jsx)("button",{style:i,className:"new-quote-btn",onClick:o,children:"New quote"})]})]})})},m=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],O=function(){var t=Object(o.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)({content:"",author:""}),r=Object(l.a)(a,2),s=r[0],h=r[1],b=Object(o.useState)("fade-in"),j=Object(l.a)(b,2),O=j[0],p=j[1],g=Object(o.useState)(null),x=Object(l.a)(g,2),v=x[0],q=x[1],w=Object(o.useState)(""),N=Object(l.a)(w,2),y=N[0],k=N[1];Object(o.useEffect)((function(){var t=Math.floor(100),e=Math.floor(Math.random()*t)+1,n=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://api.quotable.io/quotes?limit=".concat(20,"&page=").concat(e)).then((function(t){return t.json()})).then((function(t){c(t.results)})).catch((function(t){return alert("Internet connection error")}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n()}),[]),Object(o.useEffect)((function(){C()}),[n]);var C=function(){if(0!==n.length){var t=setTimeout((function(){var t=n[Math.floor(Math.random()*n.length)],e=t.content,o=t.author;h({content:e,author:o}),p("fade-in"),q(null)}),500),e=m[Math.floor(Math.random()*m.length)];k(e),clearTimeout(v),q(t),p("fade-out")}};return Object(d.jsx)(f,{quote:s,mainColor:y,getNewQuote:C,fadeDuration:1e3,fadeState:O})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),a(t),r(t)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),p()}},[[25,1,2]]]);
//# sourceMappingURL=main.ebbfd8c2.chunk.js.map