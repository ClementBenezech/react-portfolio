(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(9),i=a.n(n),r=(a(25),a.p,a(26),a(2)),o={language:"FR",carouselCurrentImage:0,carouselCurrentProject:0,carouselNbOfImages:2},l={labels:{title:{FR:"D\xe9veloppeur Front-End",EN:"Front-End developer"},catchPhrase:{FR:"",EN:"My stack is so fiiiiiine"}}},u={labels:{title:{FR:"Clement Benezech",EN:"Clement Benezech"}}},j={labels:{1:{FR:"Je me concentre principalement sur React et son \xe9cosyst\xe8me, react-router, Redux... :)",EN:"I'm a front end developer with a strong focus on React and redux based apps"},2:{FR:"N'h\xe9sitez pas \xe0 visiter ma galerie de projets, et \xe0 consulter les sources sur Github",EN:"I like creating beautiful responsive UI with functional components and hooks"},3:{FR:"Je suis ouvert aux opportunit\xe9s de travail en freelance",EN:"I'm open to freelance work opportunities"}}},m={FR:"Mes outils favoris!",EN:"My favourite tools!"},g={FR:"Vous voulez lire mon blog? Il est sur",EN:"Want to read my blog? It's on"},d={FR:"Une selection de mes projets",EN:"Some of my projects"},b={previous:{FR:"pr\xe9c\xe9dent",EN:"previous"},next:{FR:"suivant",EN:"next"}},h={FR:"Repository sur github:",EN:"Github Repository:"},p={FR:"Visiter le site:",EN:"Visit the website:"},O={FR:{FR:"Fran\xe7ais (Natif)",EN:"French (Native)"},EN:{FR:"Anglais (Bilingue)",EN:"English (Fluent)"}},f=[{id:0,name:"HTML 5",description:"Clean, accessible && W3C compliant",price:300,image:"html5"},{id:1,name:"Sass / Scss",description:"Clean and nested Scss stylesheets. BEM style.",price:400,image:"sass"},{id:2,name:"Vanilla JS",description:"Mmmmhhh, Vanilla... No. seriously.",price:500,image:"jsvanilla"},{id:3,name:"ReactJS",description:"Functional style. It's all about the hooks!",price:600,image:"react"},{id:4,name:"Redux",description:"In the states, they reduced the stores",price:300,image:"redux"},{id:5,name:"React Router",description:"So you know where you're going",price:200,image:"react-router"}],A=[{id:1,name:"React Weather App",description:{FR:"Un site de pr\xe9vision m\xe9t\xe9o, bas\xe9 sur les donn\xe9es de l'API OpenWeatherApp",EN:"A weather forecast application based on OpenweatherApp API"},folder:"weatherApp",nbOfImages:3,techs:["react","redux","sass"],webPage:"https://clementbenezech.github.io/react-meteo-app/"},{id:2,name:"React Shopping Cart",description:{FR:"Un composant de type 'shopping cart' r\xe9alis\xe9 avec React et Redux",EN:"A cool simple shopping cart made with React and Redux"},folder:"shoppingCart",nbOfImages:3,techs:["react","redux","sass","react-router"],repo:"https://github.com/ClementBenezech/shopping-cart",webPage:"https://clementbenezech.github.io/react-shopping-cart/#/"},{id:3,name:"Wingman Parachutisme",description:{FR:"Un site vitrine pour une \xe9cole de parachutisme, multilingue, r\xe9alis\xe9 avec React ",EN:"A skydiving school website, with multilingual support!"},folder:"wingman",nbOfImages:4,techs:["react","redux","sass","react-router"],webPage:"https://wingmanparachutisme.com/"},{id:4,name:"Fish Eye",description:{FR:"Un site en VanillaJS et SCSS, qui pr\xe9sente des photos d'artistes",EN:"Vanilla JS / SASS based website displaying photo galleries for artists"},folder:"fisheye",nbOfImages:5,techs:["sass","jsvanilla"],repo:"https://github.com/ClementBenezech/ClementBenezech_6_19052021",webPage:"https://clementbenezech.github.io/ClementBenezech_6_19052021/"},{id:5,name:"Les petits plats",description:{FR:"Un moteur de recherche en JS avec filtres avanc\xe9s et r\xe9sultats instantan\xe9s",EN:"Made with vanilla JS, this site provides instant search results and advanced filters"},folder:"lesPetitsPlats",nbOfImages:3,techs:["sass","jsvanilla"],repo:"https://github.com/ClementBenezech/clementbenezech_7_14072021",webPage:"https://clementbenezech.github.io/clementbenezech_7_14072021/"}],x=(a(32),a(0)),v=function(){var e=Object(r.c)((function(e){return e.language}));return Object(x.jsx)("div",{className:"header",children:Object(x.jsx)("div",{className:"header__title",children:u.labels.title[e]})})},N=a.p+"static/media/home.e1b57b38.png",C=(a(34),a(6)),w=function(){var e=Object(r.c)((function(e){return e.language}));return Object(x.jsxs)("div",{className:"front-page-content",children:[Object(x.jsx)(C.Fade,{bottom:!0,children:Object(x.jsx)("img",{className:"front-page-content__image",src:N})}),Object(x.jsx)(C.Fade,{top:!0,children:Object(x.jsx)("div",{className:"front-page-content__title",children:l.labels.title[e]})})]})},I=(a(11),a(15)),R=a(20),y=(a(17),function(e){var t="projects",a=Object(r.c)((function(e){return e.carouselCurrentProject})),s=Object(r.c)((function(e){return e.carouselCurrentImage})),n=Object(r.c)((function(e){return e.carouselNbOfImages})),i=Object(c.useState)(null),o=Object(I.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(null),m=Object(I.a)(j,2),g=m[0],d=m[1],b=Object(c.useRef)(null),h=Object(c.useRef)(null),p=Object(c.useRef)(),O=Object(r.b)();return Object(c.useEffect)((function(){console.log(h.current.clientHeight),console.log("number of images "+n),O({type:"carousel/set/currentNbOfImages",payload:A[a].nbOfImages-1}),s>n&&O({type:"carousel/set/currentImage",payload:0}),"right"===l?(b.current.className="background-carousel__image background-carousel__image--exit-right",h.current.className="background-carousel__image background-carousel__image--enter-left"):"left"===l&&(b.current.className="background-carousel__image background-carousel__image--exit-left",h.current.className="background-carousel__image background-carousel__image--enter-right")}),[s,l,n,a,O,d]),Object(x.jsxs)("div",{style:{height:g},className:"background-carousel",ref:p,children:[Object(x.jsx)("button",{className:"background-carousel__button",onClick:function(e){u("left"),O(0===s?{type:"carousel/set/currentImage",payload:n}:{type:"carousel/set/currentImage",payload:s-1})},children:Object(x.jsx)("i",{class:"fas fa-chevron-left"})}),Object(x.jsx)("button",{className:"background-carousel__button",onClick:function(e){u("right"),O(s===n?{type:"carousel/set/currentImage",payload:0}:{type:"carousel/set/currentImage",payload:s+1})},children:Object(x.jsx)("i",{class:"fas fa-chevron-right"})}),Object(x.jsx)("img",{src:"images/projects/"+A[a].folder+"/"+function(e,t,a){return e===a&&"left"===t?0:e!==a&&"left"===t?e+1:0===e&&"right"===t?a:0!==e&&"right"===t?e-1:void 0}(s,l,n)+".png",alt:t,className:"background-carousel__image--hidden",ref:b}),Object(x.jsx)("img",{src:"images/projects/"+A[a].folder+"/"+s+".png",alt:t,className:"background-carousel__image",ref:h})]},Object(R.a)())}),B=(a(42),function(e){var t=Object(r.c)((function(e){return e.carouselCurrentProject})),a=(Object(r.c)((function(e){return e.carouselCurrentImage})),Object(r.c)((function(e){return e.carouselNbOfImages})),Object(r.b)()),s=Object(r.c)((function(e){return e.language}));Object(c.useEffect)((function(){}),[]);var n=A[e.projectIndex].techs.map((function(e){return Object(x.jsx)("img",{className:"project-summary__tech-container__tech",src:"./images/skills/"+e+".png"})}));A.length;return Object(x.jsxs)("div",{className:"project-summary",children:[Object(x.jsxs)("div",{className:"project-summary__browse project-summary__browse--left",onClick:function(e){a(0===t?{type:"project/set/currentProject",payload:A.length-1}:{type:"project/set/currentProject",payload:t-1})},children:[Object(x.jsx)("i",{class:"fas fa-angle-double-left"}),Object(x.jsx)("div",{children:b.previous[s]})]}),Object(x.jsx)("div",{className:"project-summary__title",children:A[e.projectIndex].name}),Object(x.jsx)("div",{className:"project-summary__description",children:A[e.projectIndex].description[s]}),Object(x.jsxs)("div",{className:"project-summary__browse project-summary__browse--right",onClick:function(e){t===A.length-1?a({type:"project/set/currentProject",payload:0}):a({type:"project/set/currentProject",payload:t+1})},children:[Object(x.jsx)("div",{children:b.next[s]}),Object(x.jsx)("i",{class:"fas fa-angle-double-right"})]}),Object(x.jsx)("div",{className:"project-summary__tech-container",children:n}),A[t].repo?Object(x.jsxs)("div",{className:"project-summary__links-container",children:[Object(x.jsx)("div",{className:"project-summary__links-container__label",children:h[s]}),Object(x.jsxs)("a",{href:A[t].repo,children:[" ",Object(x.jsx)("i",{class:"project-summary__links-container__link fab fa-github"})]}),Object(x.jsx)("div",{className:"project-summary__links-container__label",children:p[s]}),Object(x.jsxs)("a",{href:A[t].webPage,children:[" ",Object(x.jsx)("i",{class:"project-summary__links-container__link fas fa-eye"})]})]}):Object(x.jsxs)("div",{className:"project-summary__links-container",children:[Object(x.jsx)("div",{className:"project-summary__links-container__label",children:p[s]}),Object(x.jsxs)("a",{href:A[t].webPage,children:[" ",Object(x.jsx)("i",{class:"project-summary__links-container__link fas fa-globe"})]})]})]})}),Q=function(e){var t=Object(r.c)((function(e){return e.language})),a=(Object(r.b)(),Object(r.c)((function(e){return e.carouselCurrentProject}))),s=Object(r.c)((function(e){return e.carouselCurrentImage})),n=Object(r.c)((function(e){return e.carouselNbOfImages}));Object(c.useEffect)((function(){}),[a]);var i=null;return i=a===A.length-1?0:a+1,console.log("nextProjectIndex "+i),Object(x.jsxs)("div",{className:"projects",children:[Object(x.jsx)("div",{className:"projects__title",children:d[t]}),Object(x.jsx)(B,{projectIndex:a}),Object(x.jsx)(y,{initialPage:s,projectIndex:a,nbOfImages:n})]})},E=(a(43),a(44),a(13)),k=a.n(E),S=function(e){return Object(x.jsx)(k.a,{children:Object(x.jsxs)("div",{className:"skill",children:[Object(x.jsx)("img",{alt:e.name,src:"./images/skills/"+e.image+".png",className:"skill__image"}),Object(x.jsx)("div",{className:"skill__name",children:e.name})]})})},P=function(){var e=Object(r.c)((function(e){return e.language})),t=f.map((function(e){return Object(x.jsx)(S,{name:e.name,description:e.description,image:e.image})}));return Object(x.jsxs)("div",{className:"stack",children:[Object(x.jsx)("div",{className:"stack__title",children:m[e]}),t]})},D=(a(45),a(7)),z=a.n(D),G=function(){var e=Object(r.c)((function(e){return e.language}));return Object(x.jsxs)("div",{className:"what-i-do",children:[Object(x.jsx)(z.a,{left:!0,children:Object(x.jsx)("div",{children:j.labels[1][e]})}),Object(x.jsx)(z.a,{right:!0,children:Object(x.jsx)("div",{children:j.labels[2][e]})}),Object(x.jsx)(z.a,{left:!0,children:Object(x.jsx)("div",{children:j.labels[3][e]})})]})};a(46);var T=function(){var e=Object(r.b)();return Object(r.c)((function(e){return e.language})),Object(x.jsxs)("div",{className:"language-selector__icons",children:[Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:"Parachutisme",className:"",onClick:function(){e({type:"language/ChangeValue",payload:"FR"})}}),Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"",onClick:function(){e({type:"language/ChangeValue",payload:"EN"})}})]})},F=a.p+"static/media/hashnode.4c3c2081.png",M=(a(47),a(12)),U=a.n(M),W=function(){var e=Object(r.c)((function(e){return e.language}));return Object(x.jsxs)("a",{className:"blog",href:"https://clementbenezech.hashnode.dev/",children:[Object(x.jsxs)("div",{className:"blog__title",children:[g[e]," "]}),Object(x.jsx)(U.a,{right:!0,children:Object(x.jsx)("img",{className:"blog__image",src:F,alt:"Logo Blog Hashnode"})})]})},L=(a(48),a.p+"static/media/universiteParis.39bedddf.png"),H=a.p+"static/media/brightonUniversity.eed547c9.png",Z=a.p+"static/media/france.57a10d08.png",K=a.p+"static/media/england.1ff9f91a.png",J=function(){var e=Object(r.c)((function(e){return e.language}));return Object(x.jsxs)("div",{className:"who-am-i",children:[Object(x.jsx)(C.Fade,{left:!0,children:Object(x.jsxs)("div",{className:"who-am-i__item",children:[Object(x.jsx)("img",{className:"who-am-i__image",src:L}),Object(x.jsx)("div",{className:"who-am-i__text",children:"DUT Informatique / DEST Informatique"})]})}),Object(x.jsx)("i",{class:"fas fa-user-graduate"}),Object(x.jsx)(C.Fade,{right:!0,children:Object(x.jsxs)("div",{className:"who-am-i__item",children:[Object(x.jsx)("img",{className:"who-am-i__image",src:H}),Object(x.jsx)("div",{className:"who-am-i__text",children:"BSc Hons Computer Science"})]})}),Object(x.jsx)(C.Fade,{left:!0,children:Object(x.jsxs)("div",{className:"who-am-i__item",children:[Object(x.jsx)("img",{className:"who-am-i__image",src:Z}),Object(x.jsx)("div",{className:"who-am-i__text",children:O.FR[e]})]})}),Object(x.jsx)("i",{class:"fas fa-language"}),Object(x.jsx)(C.Fade,{right:!0,children:Object(x.jsxs)("div",{className:"who-am-i__item",children:[Object(x.jsx)("img",{className:"who-am-i__image",src:K}),Object(x.jsx)("div",{className:"who-am-i__text",children:O.EN[e]})]})})]})},Y=(a(49),function(){return Object(x.jsxs)("div",{className:"footer",children:[Object(x.jsx)("a",{className:"footer__icon-link",href:"https://www.linkedin.com/in/clementbenezech/",children:Object(x.jsx)("i",{class:"fab fa-linkedin"})}),Object(x.jsx)("a",{className:"footer__icon-link",href:"https://github.com/ClementBenezech",children:Object(x.jsx)("i",{class:"fab fa-github"})}),Object(x.jsx)("a",{className:"footer__icon-link",href:"mailto:clement.benezech@gmail.com",children:Object(x.jsx)("i",{class:"fas fa-paper-plane"})}),Object(x.jsx)("div",{className:"footer__credits",children:"Handcrafted by me with React and Redux"}),Object(x.jsx)("a",{className:"footer__credits",href:"https://www.vecteezy.com/free-vector/programming",children:"Homepage Illustration by Vecteezy"})]})});var V=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(T,{}),Object(x.jsx)(v,{}),Object(x.jsx)(w,{}),Object(x.jsx)(G,{}),Object(x.jsx)(P,{}),Object(x.jsx)(W,{}),Object(x.jsx)(Q,{}),Object(x.jsx)(J,{}),Object(x.jsx)(Y,{})]})},_=a(19),X=a(16),q=a(8);var $=Object(_.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Something/doSomething":return Object(X.a)(Object(X.a)({},e),{},{property:t.payload});case"language/ChangeValue":return Object(q.a)(e,(function(e){e.language=t.payload}));case"carousel/set/currentImage":return Object(q.a)(e,(function(e){e.carouselCurrentImage=t.payload}));case"project/set/currentProject":return Object(q.a)(e,(function(e){e.carouselCurrentProject=t.payload,e.carouselNbOfImages=0}));case"carousel/set/currentNbOfImages":return Object(q.a)(e,(function(e){e.carouselNbOfImages=t.payload}));default:return e}}));console.log("Initial state: ",$.getState());var ee=$;i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(r.a,{store:ee,children:Object(x.jsx)(V,{})})}),document.getElementById("root"))}],[[50,1,2]]]);
//# sourceMappingURL=main.f71a0894.chunk.js.map