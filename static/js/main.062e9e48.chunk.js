(this["webpackJsonpvr-ui"]=this["webpackJsonpvr-ui"]||[]).push([[0],{102:function(e,t,a){e.exports=a(192)},107:function(e,t,a){},114:function(e,t){},116:function(e,t){},149:function(e,t){},150:function(e,t){},192:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(95),r=a.n(c),o=(a(107),a(56),a(12)),m=a(17);var s=function(){return n.a.createElement("div",{className:"container h-100 d-flex justify-content-center align-items-start outbox"},n.a.createElement("div",{className:"panel d-flex flex-column justify-content-center align-items-center"},n.a.createElement("h1",null,"Dental Practice"),n.a.createElement(o.b,{to:"/signin",role:"button",className:"btn btn-primary btn-lg btn-round"},"Start")))},i=a(16);var u=function(){var e=Object(l.useRef)(),t=Object(l.useRef)(),a=Object(l.useRef)(),c=Object(l.useState)(),r=Object(i.a)(c,2),m=r[0],s=r[1],u=Object(l.useState)(),p=Object(i.a)(u,2),E=p[0],g=p[1];return n.a.createElement("div",{className:"container h-100 d-flex justify-content-center align-items-start outbox"},n.a.createElement("form",{className:"panel d-flex flex-column"},n.a.createElement("h1",null,"Welcome Back"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email address"),n.a.createElement("input",{ref:t,type:"email",id:"email",className:"form-control",placeholder:"elite@email.com","aria-describedby":"emailHelp",onChange:function(e){s(e.target.value)}}),n.a.createElement("small",{id:"emailHelp",className:"form-text tex-muted"},"We'll never share your email with anyone else")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{ref:a,type:"password",id:"password",className:"form-control",placeholder:"Choose a good password","aria-describedby":"passwordHelp",onChange:function(e){g(e.target.value),console.log("password: ".concat(E))}})),n.a.createElement("div",{className:"form-group form-check"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"check"}),n.a.createElement("label",{htmlFor:"check",className:"form-check-label"},"Remember Me")),n.a.createElement(o.b,{to:"/game-menu",ref:e,role:"button",className:"btn btn-primary btn-lg btn-round align-self-start".concat((console.log("shall disable? ".concat(void 0===m||""===m||void 0===E||""===E)),void 0===m||""===m||void 0===E||""===E?" disabled":""))},"Sign In")))},p=a(98);var E=function(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"gamer"},"Name"),n.a.createElement("input",{type:"text",id:"gamer",className:"form-control",placeholder:"Your Name"})));return n.a.createElement("div",{className:"container h-100 d-flex justify-content-center align-items-start outbox"},n.a.createElement("form",{className:"panel d-flex flex-column"},n.a.createElement("h1",null,"Configue Game"),n.a.createElement("div",{className:"form-group pb-1"},n.a.createElement("label",{htmlFor:"practice"},n.a.createElement("i",{class:"fas fa-tooth"})," Practice"),n.a.createElement("select",{name:"practice",id:"practice",className:"form-control"},n.a.createElement("option",{selected:!0},"Dental Cleaning"),n.a.createElement("option",null,"Deep Cleaning"),n.a.createElement("option",null,"Root Canel"),n.a.createElement("option",null,"Tooth Extraction"))),n.a.createElement("div",{className:"form-group pb-1"},n.a.createElement("label",{htmlFor:"gameType"},n.a.createElement("i",{class:"fas fa-gamepad"})," Mode"),n.a.createElement("div",{className:"row px-3"},n.a.createElement("div",{className:"form-check col-5"},n.a.createElement("input",{type:"radio",className:"form-check-input",name:"gameType",id:"gameType1",value:"gameType1",checked:!0}),n.a.createElement("label",{htmlFor:"gameType1",className:"form-check-label"},n.a.createElement("i",{class:"fas fa-stopwatch"})," Tick-Tack")),n.a.createElement("div",{className:"form-check col-5"},n.a.createElement("input",{type:"radio",className:"form-check-input",name:"gameType",id:"gameType2",value:"gameType2"}),n.a.createElement("label",{htmlFor:"gameType2",className:"form-check-label"},n.a.createElement("i",{class:"fas fa-school"})," Free Mode")))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"gameType"},n.a.createElement("i",{class:"fas fa-hat-wizard"})," Level"),n.a.createElement("select",{name:"gameType",id:"gameType",className:"form-control"},n.a.createElement("option",null,"Easy"),n.a.createElement("option",{selected:!0},"Normal"),n.a.createElement("option",null,"Hard"),n.a.createElement("option",null,"Elite"))),n.a.createElement("div",{className:"form-group form-check"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"check",onChange:function(e){console.log("checked? ".concat(e.target.checked)),c(e.target.checked)}}),n.a.createElement("label",{htmlFor:"check",className:"form-check-label"},"Extra Info")),a&&r,n.a.createElement(o.b,{to:"/running",role:"button",className:"btn btn-primary btn-lg btn-round align-self-start","data-tip":"Start your game!","data-place":"top",title:"Start your game!"},"Start Game")),n.a.createElement(p.a,null))},g=a(101);function d(e){return n.a.createElement("div",{className:"list-group list-group-flush"},n.a.createElement("button",{name:"0",type:"button",onClick:e.onTabClick,className:"list-group-item list-group-item-action custom-item active"},"Levels"),n.a.createElement("button",{name:"1",type:"button",onClick:e.onTabClick,className:"list-group-item list-group-item-action custom-item"},"Game Settings"),n.a.createElement("button",{name:"2",type:"button",onClick:e.onTabClick,className:"list-group-item list-group-item-action custom-item"},"System"))}function f(){return n.a.createElement("div",{className:"list-group list-group-flush"},n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item active"},"Step 1: #1"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 2: #2"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 3: #3"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 4: #4"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 5: #5"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 6: #6"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 7: #7"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 8: #8"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 9: #9"),n.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action custom-item"},"Step 10: #10"))}function b(){return n.a.createElement("div",{className:"list-group list-group-flush"},n.a.createElement("div",{className:"list-group-item custom-item d-flex align-items-center"},n.a.createElement("div",{className:"title-box d-flex flex-column flex-grow-1"},n.a.createElement("h3",null,"Show Alice"),n.a.createElement("p",null,"Show or hide the patient")),n.a.createElement(g.a,null)))}function h(){return n.a.createElement("div",{className:"list-group list-group-flush"},n.a.createElement(o.b,{to:"/",className:"list-group-item list-group-item-action custom-item"},"Restart"))}var N=function(){var e=Object(l.useRef)(),t=Object(l.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(l.useState)(0),m=Object(i.a)(o,2),s=m[0],u=m[1],p=[n.a.createElement(f,null),n.a.createElement(b,null),n.a.createElement(h,null)];return Object(l.useEffect)((function(){setTimeout((function(){r(!0)}),2e3)})),n.a.createElement("div",{className:"container p-5 position-relative d-flex justify-content-center"},n.a.createElement("div",{className:"alert alert-success position-absolute dismissable-alert ".concat(c?" dismiss":""),role:"alert",ref:e},"The ",n.a.createElement("strong",null,"GAME")," is running! Press MENU key in controller to restart.",n.a.createElement("button",{className:"close",type:"button","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"panel panel-lg panel-tabs d-flex flex-column"},n.a.createElement("h1",null,"Settings"),n.a.createElement("div",{className:"d-flex flex-row flex-grow-1 tabs-container"},n.a.createElement("div",{className:"tab-left"},n.a.createElement(d,{onTabClick:function(e){console.log(e.target.name),u(parseInt(e.target.name))}})),n.a.createElement("div",{className:"tab-right flex-grow-1 ml-2 pb-4"},p[s]))))};var v=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/signin"},n.a.createElement(u,null)),n.a.createElement(m.a,{path:"/game-menu"},n.a.createElement(E,null)),n.a.createElement(m.a,{path:"/running"},n.a.createElement(N,null)),n.a.createElement(m.a,{path:"/"},n.a.createElement(s,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.062e9e48.chunk.js.map