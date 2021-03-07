(this["webpackJsonpfinal-evaluation"]=this["webpackJsonpfinal-evaluation"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(16),n=c.n(s),i=c(7),r=c(10),l=c(2),o=c.p+"static/media/logo.de13d484.png",d=(c(22),c(0)),j=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("img",{className:"header__image",src:o,alt:"Rick and Morty logo"})})},h=function(e){return Object(d.jsxs)("div",{className:"filter__form--name",children:[Object(d.jsx)("label",{className:"filter__form--label",htmlFor:"name",placeholder:"Search",children:"Show me what you got!"}),Object(d.jsx)("input",{className:"filter__form--input",type:"text",name:"name",id:"name",onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})]})},m=function(e){return Object(d.jsxs)("div",{className:"filter__form--species",children:[Object(d.jsx)("label",{className:"filter__form--label",htmlFor:"species",children:"Species"}),Object(d.jsxs)("select",{className:"filter__form--input",name:"species",id:"species",onChange:function(t){e.handleFilter({key:"species",value:t.target.value})},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"}),Object(d.jsx)("option",{value:"Human",children:"Human"})]})]})},u=(c(24),function(e){return Object(d.jsxs)("section",{className:"filter",children:[Object(d.jsx)("h3",{className:"filter__quote",children:"Let's Get Schwifty!"}),Object(d.jsxs)("form",{className:"filter__form",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsx)(h,{handleFilter:e.handleFilter,handleReset:e.handleReset}),Object(d.jsx)(m,{handleFilter:e.handleFilter,handleReset:e.handleReset}),Object(d.jsx)("span",{onClick:function(){e.handleReset()},className:"reset",children:Object(d.jsx)("i",{className:"fas fa-trash-alt"})})]})]})}),b=function(e){return Object(d.jsx)("div",{className:"card__element",children:Object(d.jsxs)(i.b,{className:"link",to:"/character/"+e.character.id,children:[Object(d.jsx)("img",{className:"card__element--image",src:e.character.image,alt:"Foto de ".concat(e.character.name),title:"Foto de ".concat(e.character.name)}),Object(d.jsx)("h4",{className:"card__element--title",children:e.character.name}),Object(d.jsx)("p",{className:"card__element--species",children:e.character.species})]})})},f=(c(30),function(e){if(0===e.characters.length)return Object(d.jsx)("section",{className:"noresult",children:Object(d.jsx)("h2",{className:"noresult__text",children:"Your search doesn't match any of the available characters"})});var t=e.characters.map((function(e){return Object(d.jsx)("li",{className:"card__item",children:Object(d.jsx)(b,{character:e})},e.id)}));return Object(d.jsx)("section",{children:Object(d.jsx)("ul",{className:"card__list",children:t})})}),O=(c(31),function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsxs)("h4",{className:"footer__credit",children:["Made with ",Object(d.jsx)("i",{className:"fab fa-react"})," by Marina FP"]}),Object(d.jsx)("span",{className:"footer__quote",children:"Wubba-lubba-dub-dub!"})]})}),x=(c(32),c.p+"static/media/notfound.a93a0fb5.jpg"),p=function(e){return void 0===e.selectedCharacter?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"notfound",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("span",{className:"arrow",children:Object(d.jsx)("i",{className:"fas fa-undo-alt"})})}),Object(d.jsxs)("div",{className:"notfound__container",children:[Object(d.jsx)("h2",{className:"notfound__title",children:"Character not found"}),Object(d.jsx)("p",{className:"notfound__quote",children:"\u201cI\u2019m sorry, but your opinion means very little to me.\u201d- Rick"}),Object(d.jsx)("img",{className:"notfound__image",src:x,alt:""})]}),Object(d.jsx)(O,{})]})}):Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("span",{className:"arrow",children:Object(d.jsx)("i",{className:"fas fa-undo-alt"})})}),Object(d.jsxs)("section",{className:"detail__container",children:[Object(d.jsx)("h2",{className:"detail__header",children:e.selectedCharacter.name}),Object(d.jsx)("img",{className:"detail__image",src:e.selectedCharacter.image,alt:"Foto de ".concat(e.selectedCharacter.name)}),Object(d.jsxs)("ul",{className:"detail__description",children:[Object(d.jsxs)("li",{className:"detail__description--element",children:["Species: ",e.selectedCharacter.species]}),Object(d.jsxs)("li",{className:"detail__description--element",children:["Origin planet: ",e.selectedCharacter.origin]}),Object(d.jsxs)("li",{className:"detail__description--element",children:["Localizaci\xf3n: ",e.selectedCharacter.location]}),Object(d.jsxs)("li",{className:"detail__description--element",children:["Estado: ",e.selectedCharacter.status]}),Object(d.jsxs)("li",{className:"detail__description--element",children:["Episodios: ",e.selectedCharacter.episodes]})]})]}),Object(d.jsx)(O,{})]})},_=function(){return fetch("//rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,image:e.image,origin:e.origin.name,location:e.location.name,status:e.status,episodes:e.episode.length}}))}))},N=(c(33),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),o=i[0],h=i[1],m=Object(a.useState)("all"),b=Object(r.a)(m,2),x=b[0],N=b[1];Object(a.useEffect)((function(){_().then((function(e){return s(e)}))}),[]);var g=function(e){"name"===e.key?h(e.value):"species"===e.key&&N(e.value)},v=function(){h(""),N("all")},y=c.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())})).filter((function(e){return"all"===x||e.species===x}));return Object(d.jsx)("body",{className:"App",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(d.jsxs)("div",{className:"home__body",children:[Object(d.jsx)(j,{}),Object(d.jsx)(u,{handleFilter:g,handleReset:v}),Object(d.jsx)(f,{characters:y}),Object(d.jsx)(O,{})]})}}),Object(d.jsx)(l.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),a=c.find((function(e){return e.id===t}));return Object(d.jsx)(p,{selectedCharacter:a})}})]})})});n.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ca61db3c.chunk.js.map