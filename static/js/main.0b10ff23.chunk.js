(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},27:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(13),c=a.n(r),o=(a(25),a(8)),s=a(15),m=(a(27),a(7));function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/about"},"About"))),e.searchBar?l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):"")))}i.defaultProps={title:"Your title here :)"};var u=function(e){var t=e.todo,a=e.onDelete;e.sno;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.desc),l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)}},"Delete")),l.a.createElement("hr",null))},d=function(e){return l.a.createElement("div",{className:"container my-3",style:{minHeight:"43.9vh",margin:"40px auto"}},l.a.createElement("h3",{className:"my-3"},"Todos List"),0===e.todos.length?"No Todos to display, enjoy your day or pick up a new skill!\ud83d\udc4f\ud83c\udffd":e.todos.map(function(t){return l.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete})}))},b=function(){return l.a.createElement("footer",{className:"bg-dark text-light py-3"},l.a.createElement("p",{className:"text-center"},"Copyright \xa9 Todos List ",l.a.createElement("span",{role:"img","aria-label":"wink"},"\ud83d\ude09")))},E=function(e){var t=e.addTodo,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),u=i[0],d=i[1];return l.a.createElement("div",{className:"container my-3 "},l.a.createElement("h3",null,"Add a Todo"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&u?(t(c,u),s(""),d("")):alert("Title or Description can't be blank")}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"Todo title"),l.a.createElement("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"desc",className:"form-label"},"Description"),l.a.createElement("input",{type:"text",value:u,onChange:function(e){d(e.target.value)},className:"form-control",id:"desc"})),l.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success"},"Submit")))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h4",null,"About this app ",l.a.createElement("span",{role:"img","aria-label":"think"},"\ud83d\udcad")," "),l.a.createElement("hr",null),l.a.createElement("span",null,"This app uses react framework and react router.",l.a.createElement("br",null),"It can:",l.a.createElement("ul",null,l.a.createElement("li",null,"Create todo task"),l.a.createElement("li",null,"Show the current list of todo tasks"),l.a.createElement("li",null,"Delete the tasks"),l.a.createElement("li",null,"Saves the unattended(not deleted) tasks to be retrieved for next time :)")))))},g=a(0);var f=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){f(u.filter(function(t){return t!==e})),localStorage.setItem("todos",JSON.stringify(u))},a=function(e,t){var a={sno:0===u.length?1:u[u.length-1].sno+1,title:e,desc:t};f([].concat(Object(s.a)(u),[a]))},r=Object(n.useState)(e),c=Object(o.a)(r,2),u=c[0],f=c[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(u))},[u]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(i,{title:"Todos List\ud83d\udcc3",searchBar:!1}),l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{addTodo:a}),l.a.createElement(d,{todos:u,onDelete:t}))}}),l.a.createElement(g.a,{path:"/about"},l.a.createElement(p,null))),l.a.createElement(b,null)))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,37)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null))),v()}},[[16,3,2]]]);
//# sourceMappingURL=main.0b10ff23.chunk.js.map