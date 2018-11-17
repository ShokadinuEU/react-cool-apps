(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a(253)},109:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),i=(a(109),a(12)),o=a(13),s=a(15),u=a(14),m=a(16),p=(a(111),a(257)),h=a(254);a(113);var f=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Hi From Home Component"))},d=a(256);function E(){return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-main"},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{href:"https://shokadinueu.github.io/react-cool-apps/"},"ShokadinuEU")),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",{className:"menu-link"},r.a.createElement("a",{href:"https://shokadinueu.github.io/react-cool-apps/"},"Home")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(d.a,{className:"link",to:"/user-form"},"Step Form")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(d.a,{className:"link",to:"/todo-app"},"Todo App")))))))}var b=a(101),v=a(25),k=a.n(v),y=a(26),g=a.n(y),x=a(28),C=a.n(x),O=a(27),j=a.n(O),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(k.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:S,title:"Enter a User Details"}),r.a.createElement(C.a,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(C.a,{hintText:"Enter Your Last Name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(C.a,{hintText:"Enter Your Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(j.a,{label:"Continue",primary:!0,style:T.button,onClick:this.continue})))}}]),t}(n.Component),T={margin:15},S={maxWidth:"1280px",margin:"0 auto",padding:"0.1em 1.4em",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"},w=N,L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(k.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{title:"Enter Personal Details"}),r.a.createElement(C.a,{hintText:"Enter Your Occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement("br",null),r.a.createElement(C.a,{hintText:"Enter Your City",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(C.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement(j.a,{label:"Continue",primary:!0,style:D.button,onClick:this.continue}),r.a.createElement(j.a,{label:"Back",primary:!1,style:D.button,onClick:this.back})))}}]),t}(n.Component),D={margin:15},B=L,F=a(29),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,c=e.city,i=e.bio;return r.a.createElement(k.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{title:"Confirm User Data"}),r.a.createElement(F.List,null,r.a.createElement(F.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement(F.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement(F.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement(F.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement(F.ListItem,{primaryText:"City",secondaryText:c}),r.a.createElement(F.ListItem,{primaryText:"Bio",secondaryText:i})),r.a.createElement(j.a,{label:"Confirm and Continue",primary:!0,style:I.button,onClick:this.continue}),r.a.createElement(j.a,{label:"Back",primary:!1,style:I.button,onClick:this.back})))}}]),t}(n.Component),I={margin:15},Y=A,V=function(){return r.a.createElement(k.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{title:"Success"}),r.a.createElement("h1",null,"Thank you for your submission."),r.a.createElement("p",null,"Check your email for further instructions")))},W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(b.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(w,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(B,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(Y,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(V,null)}}}]),t}(n.Component),H=a(103);a(99);var R=function(e){var t=e.tasks,a=e.deleteTask,n=t.length?t.map(function(e){return r.a.createElement("div",{onClick:function(){a(e.id)},className:"single-task",key:e.id},r.a.createElement("span",{className:"task-content"},e.content))}):r.a.createElement("h3",{className:"tasks-finish"},"Yay.. you manage to complet all tasks!");return r.a.createElement("div",{className:"tasks-wrapper"},n)},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={content:""},a.handleChange=function(e){a.setState({content:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addTask(a.state),a.setState({content:""})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tasks-form-wrapper"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"new-task-form"},r.a.createElement("label",{className:"task-form-label"},"Add new task:"),r.a.createElement("input",{className:"task-form-input",placeholder:"Enter new task for the list...",type:"text",onChange:this.handleChange,value:this.state.content})))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:[{id:1,content:"Workout before go to work"},{id:2,content:"Eat your cereales and drink natural juice"},{id:3,content:"Check the schedule before go to work"}]},a.deleteTask=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e});a.setState({tasks:t})},a.addTask=function(e){e.id=Math.random();var t=Object(H.a)(a.state.tasks).concat([e]);a.setState({tasks:t}),console.log(t)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"app-header"},"Welcome to my Todo Daily Tasks"),r.a.createElement("div",{className:"todo-app-wrapper"},r.a.createElement(R,{tasks:this.state.tasks,deleteTask:this.deleteTask}),r.a.createElement(U,{addTask:this.addTask})))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:f}),r.a.createElement(h.a,{exact:!0,path:"/user-form",component:W}),r.a.createElement(h.a,{path:"/todo-app",component:J})))}}]),t}(n.Component),P=a(255);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){}},[[104,2,1]]]);
//# sourceMappingURL=main.715cd348.chunk.js.map