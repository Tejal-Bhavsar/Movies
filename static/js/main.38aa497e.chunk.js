(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),i=c(7),a=c.n(i),o=(c(15),c(16),c(17),c(6)),l=c.n(o),j=c(8),d=c(9),v=c(4);function u(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("span",{children:["Add to Favourites",Object(n.jsx)("svg",{className:"m-2",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",class:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})})}function f(e){var t=e.movie,c=e.getfavmovies;e.id;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"moviecard d-flex justify-content-start m-3",children:[Object(n.jsx)("img",{src:t.Poster}),Object(n.jsx)("div",{onClick:function(){return c(t)},className:"overlay d-flex align-items-center justify-content-center",children:Object(n.jsx)(u,{})}),console.log(t)]})})}function m(e){var t=e.setSearchval,c=e.searchval;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row m-3 align-items-center  mb-4",children:[Object(n.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-6",children:Object(n.jsx)("h2",{children:"Movies"})}),Object(n.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-6",children:Object(n.jsx)("form",{children:Object(n.jsx)("input",{type:"text",value:c,className:"searchbox",placeholder:"search for the movie",onChange:function(e){return t(e.target.value)}})})})]})})})}function b(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("span",{children:["Remove from favourite",Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",class:"bi bi-file-x-fill",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z"})})]})})}function h(e){var t=e.fav,c=e.removefavMovie;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"moviecard d-flex  justify-content-start m-3",children:[Object(n.jsx)("img",{src:t.Poster,alt:"movie"}),Object(n.jsx)("div",{onClick:function(){return c(t)},className:"overlay d-flex align-items-center justify-content-center",children:Object(n.jsx)(b,{})})]}),console.log(t,"likked")]})}function x(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(),a=Object(v.a)(i,2),o=a[0],u=a[1],b=Object(r.useState)([]),x=Object(v.a)(b,2),O=x[0],g=x[1];Object(r.useEffect)((function(){N()}),[o]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-app-fav-movie"));g(e)}),[]);var p=function(e){localStorage.setItem("react-app-fav-movie",JSON.stringify(e))},w=function(e){var t=[].concat(Object(d.a)(O),[e]);g(t),p(t)},N=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?apikey=6120232c&s=".concat(o));case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).Search&&s(c.Search);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){var t=O.filter((function(t){return t.imdbID!==e.imdbID}));g(t),p(t)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{setSearchval:u,searchval:o}),Object(n.jsxs)("div",{className:"box container-fluid",children:[Object(n.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(n.jsx)(f,{id:t,movie:e,getfavmovies:w},e.id)}))}),Object(n.jsx)("h1",{children:"Favourite Movies"}),Object(n.jsx)("div",{className:"row",children:O.map((function(e,t){return Object(n.jsx)(h,{fav:e,removefavMovie:S})}))})]})]})}var O=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)(x,{})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.38aa497e.chunk.js.map