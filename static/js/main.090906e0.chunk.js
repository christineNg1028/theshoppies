(this.webpackJsonptheshoppies=this.webpackJsonptheshoppies||[]).push([[0],{117:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),i=(n(117),n(15)),o=n(22),l=n.n(o),j=n(34),u=n(87),d=n(88),b=n(103),h=n(101),p=n(192),m=n(178),O=n(195),x=n(5),f=n(38),v=n(174),g=n(196),y=n(184),N=n(185),S=n(181),k=n(198),w=n(193),C=n(186),R=n(187),T=n(93),I=n.n(T),z=n(70),A=n.n(z),D=n(2);var E=Object(x.a)((function(e){return{paper:{textAlign:"left",padding:16},formControl:{minWidth:120},button:{color:"black","&:hover":{color:"#f03a17"},transition:"all linear 200ms"},clearBtn:{"&:hover":{color:"black"},transition:"all linear 200ms"}}}))((function(e){var t=e.classes,n=e.handleSearch,r=e.search,c=Object(a.useState)(r.title),s=Object(f.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(r.type),j=Object(f.a)(l,2),u=j[0],d=j[1],b=Object(a.useState)(r.year),h=Object(f.a)(b,2),p=h[0],O=h[1];return Object(D.jsxs)(v.a,{className:t.paper,elevation:24,children:["Search for a movie...",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(i,p,u)},children:Object(D.jsxs)(m.a,{container:!0,xs:12,spacing:2,alignItems:"center",children:[Object(D.jsx)(m.a,{item:!0,xs:6,children:Object(D.jsx)(g.a,{color:"secondary",fullWidth:!0,variant:"outlined",placeholder:"Title",onChange:function(e){o(e.target.value)},value:i,InputProps:{endAdornment:i?Object(D.jsx)(y.a,{position:"end",children:Object(D.jsx)(N.a,{className:t.clearBtn,size:"small",disableRipple:!0,style:{background:"transparent"},onClick:function(){return o("")},children:Object(D.jsx)(A.a,{})})}):Object(D.jsx)(D.Fragment,{})}})}),Object(D.jsx)(m.a,{item:!0,xs:3,children:Object(D.jsx)(g.a,{color:"secondary",fullWidth:!0,variant:"outlined",placeholder:"Year of release",onChange:function(e){O(e.target.value)},value:p,InputProps:{endAdornment:p?Object(D.jsx)(y.a,{position:"end",children:Object(D.jsx)(N.a,{className:t.clearBtn,size:"small",disableRipple:!0,style:{background:"transparent"},onClick:function(){return O("")},children:Object(D.jsx)(A.a,{})})}):Object(D.jsx)(D.Fragment,{})}})}),Object(D.jsx)(m.a,{item:!0,xs:2,children:Object(D.jsxs)(S.a,{variant:"outlined",color:"secondary",className:t.formControl,children:[Object(D.jsx)(k.a,{id:"movie-type-label",children:"Type"}),Object(D.jsxs)(w.a,{labelId:"movie-type-label",id:"movie-type",value:u,onChange:function(e){d(e.target.value)},label:"Type",children:[Object(D.jsx)(C.a,{value:"",children:Object(D.jsx)("em",{children:"None"})}),Object(D.jsx)(C.a,{value:"movie",children:"Movie"}),Object(D.jsx)(C.a,{value:"series",children:"Series"}),Object(D.jsx)(C.a,{value:"episode",children:"Episode"})]})]})}),Object(D.jsx)(m.a,{item:!0,xs:1,children:Object(D.jsx)(R.a,{type:"submit",style:{background:"transparent"},className:t.button,disableRipple:!0,children:Object(D.jsx)(I.a,{fontSize:"large"})})})]})})]})})),F=n(146),B=n(188),P=n(199),W=n(189),M=n(190),Y=n(191),H=n(183),_=n(12);var L=Object(x.a)((function(){return{paper:{textAlign:"left",padding:16},button:{width:85,textTransform:"none",backgroundColor:"#f03a17",color:"white","&:hover":{backgroundColor:"black"}},result:{cursor:"pointer","&:hover":{backgroundColor:"#f1f3f4",borderRadius:4},transition:"all linear 200ms"},readMore:{fontSize:12,marginTop:-10}}}))((function(e){var t=e.classes,n=e.results,a=e.search,r=e.handleNominate,c=e.nominations,s=e.loading,i=Object(_.f)(),o=[];Object.values(a).forEach((function(e){e&&o.push(e)}));var l="";l=o.map((function(e,t){return o[t+1]?l+e+", ":l+e}));var j=c.map((function(e){return e.imdbID})),u=n&&n.map((function(e,n){var a=j.includes(e.imdbID);return Object(D.jsxs)(F.a,{className:t.result,onClick:function(){return i.push("/theshoppies/".concat(e.imdbID))},children:[Object(D.jsx)(B.a,{children:Object(D.jsx)(P.a,{variant:"square",src:e.Poster,alt:e.Title})}),Object(D.jsx)(m.a,{xs:7,children:Object(D.jsx)(W.a,{primary:e.Title,secondary:e.Year})}),Object(D.jsx)(M.a,{children:Object(D.jsx)(R.a,{className:t.button,variant:"contained",size:"small",onClick:function(){return r(e)},disabled:a||5===c.length,children:a?"Nominated":"Nominate"})})]},n)}));return Object(D.jsx)(v.a,{className:t.paper,elevation:24,children:s?Object(D.jsx)(m.a,{container:!0,xs:12,justify:"center",children:Object(D.jsx)(Y.a,{color:"secondary",size:40})}):n?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("h4",{children:['Results for "',l,'"']}),Object(D.jsx)("p",{className:t.readMore,children:"Click on a movie to read more."}),Object(D.jsx)(H.a,{dense:!0,children:u})]}):Object(D.jsxs)("h4",{children:["Sorry, we couldn't find anything for \"",l,'".']})})})),q=n(200),J=n(95),V=n.n(J);var G=Object(x.a)((function(){return{paper:{textAlign:"left",padding:16},button:{color:"black","&:hover":{color:"#f03a17"},transition:"all linear 200ms",marginRight:16}}}))((function(e){var t=e.classes,n=e.nominations,a=e.handleRemove,r=n.map((function(e,n){return Object(D.jsxs)(F.a,{children:[Object(D.jsx)(q.a,{title:"Remove nominee",children:Object(D.jsx)(N.a,{disableRipple:!0,style:{background:"transparent"},className:t.button,size:"small",onClick:function(){return a(e)},children:Object(D.jsx)(V.a,{})})}),Object(D.jsx)(B.a,{children:Object(D.jsx)(P.a,{variant:"square",src:e.Poster,alt:e.Title})}),Object(D.jsx)(m.a,{xs:7,children:Object(D.jsx)(W.a,{primary:e.Title,secondary:e.Year})})]},n)}));return Object(D.jsxs)(v.a,{className:t.paper,elevation:24,children:[Object(D.jsx)("h4",{children:"Nominations"}),Object(D.jsx)(H.a,{dense:!0,children:r})]})})),U=n(47),K=n(63),Q=n.n(K),X="FETCH_SEARCH_RESULTS",Z="ADD_NOMINEE",$="REMOVE_NOMINEE";function ee(e,t,n,a){return{type:X,payload:{title:e,year:t,type:n,results:a}}}function te(e){return{type:Z,movie:e}}function ne(e){return{type:$,movie:e}}var ae=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSearch=function(){var e=Object(j.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{loading:!0})),e.next=3,a.props.fetchSearchResultsAsync(t,n,r);case 3:a.setState(Object(i.a)(Object(i.a)({},a.state),{},{results:a.props.results,title:t,year:n,type:r,loading:!1}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),a.handleNominate=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.addNominee(t);case 2:a.setState(Object(i.a)(Object(i.a)({},a.state),{},{nominations:a.props.nominations,open:5===a.props.nominations.length}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleRemove=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.removeNominee(t);case 2:a.setState(Object(i.a)(Object(i.a)({},a.state),{},{nominations:a.props.nominations}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={results:e.results,title:e.title,year:e.year,type:e.type,nominations:e.nominations,open:!1,loading:!1},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=n.title,r=n.year,c=n.type,s=n.results,o=n.nominations,l=n.open,j=n.loading,u={title:a,year:r,type:c};return Object(D.jsxs)(p.a,{maxWidth:"md",children:[Object(D.jsxs)(m.a,{container:!0,spacing:2,children:[Object(D.jsx)("h1",{className:t.header,children:"The Shoppies \ud83c\udf7f"}),Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsx)(E,{handleSearch:this.handleSearch,search:u})}),(a||r||c)&&Object(D.jsx)(m.a,{item:!0,xs:6,children:Object(D.jsx)(L,{search:u,results:s,loading:j,handleNominate:this.handleNominate,nominations:o})}),o&&o.length>0&&Object(D.jsx)(m.a,{item:!0,xs:6,children:Object(D.jsx)(G,{nominations:o,handleRemove:this.handleRemove})})]}),Object(D.jsx)(O.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:l,message:"You have nominated 5 movies!",autoHideDuration:3e3,onClose:function(){return e.setState(Object(i.a)(Object(i.a)({},e.state),{},{open:!1}))}})]})}}]),n}(r.a.Component);var re=Object(U.b)((function(e){return{title:e.theShoppies.title,year:e.theShoppies.year,type:e.theShoppies.type,results:e.theShoppies.results,nominations:e.theShoppies.nominations}}),{fetchSearchResultsAsync:function(e,t,n){return function(){var a=Object(j.a)(l.a.mark((function a(r,c){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Q.a.get("https://www.omdbapi.com/?s=".concat(e,"&y=").concat(t,"&type=").concat(n,"&apikey=8803b9a5")).then((function(a){var c=a.data.Search;r(ee(e,t,n,c))})).catch((function(e){return console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},addNominee:te,removeNominee:ne})(Object(x.a)((function(){return{header:{width:"100%",textAlign:"left",fontSize:40}}}))(ae)),ce=n(98),se=n.n(ce),ie=n(97),oe=n.n(ie),le=n(96),je=n.n(le);var ue=Object(U.b)((function(e){return{nominations:e.theShoppies.nominations}}),{addNominee:te,removeNominee:ne})(Object(x.a)((function(){return{paper:{textAlign:"left",padding:16,backgroundColor:"black",color:"white"},container:{marginTop:16},flexRow:{display:"flex",justifyContent:"space-between"},rating:{textAlign:"right",fontSize:20},votes:{fontSize:12,textAlign:"right",marginTop:-10},info:{marginTop:-10},button:{width:150,textTransform:"none",backgroundColor:"#f03a17",border:"2px solid #f03a17",color:"white","&:hover":{backgroundColor:"transparent",color:"#f03a17",fontWeight:"bold"}},backBtn:{color:"white",marginBottom:16}}}))((function(e){var t=e.classes,n=e.nominations,r=e.addNominee,c=e.removeNominee,s=e.history,i=Object(_.g)().id,o=Object(a.useState)({}),u=Object(f.a)(o,2),d=u[0],b=u[1],h=Object(a.useState)(!1),x=Object(f.a)(h,2),g=x[0],y=x[1],S=n.map((function(e){return e.imdbID})).includes(i);Object(a.useEffect)((function(){Q.a.get("https://www.omdbapi.com/?i=".concat(i,"&apikey=8803b9a5")).then((function(e){var t=e.data;b(t),console.log(t)})).catch((function(e){return console.log(e)}))}),[i]);var k=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(d);case 2:y(4===n.length);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)(p.a,{maxWidth:"lg",className:t.container,children:[Object(D.jsxs)(v.a,{className:t.paper,elevation:24,children:[Object(D.jsx)(m.a,{container:!0,xs:12,children:Object(D.jsx)(N.a,{className:t.backBtn,size:"small",onClick:function(){return s.push("/theshoppies/")},children:Object(D.jsx)(je.a,{})})}),Object(D.jsxs)(m.a,{container:!0,xs:12,spacing:2,children:[Object(D.jsx)(m.a,{item:!0,xs:4,children:Object(D.jsx)("img",{src:d.Poster,alt:d.Title})}),Object(D.jsxs)(m.a,{item:!0,xs:8,children:[Object(D.jsxs)("div",{className:t.flexRow,children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("h1",{children:[d.Title," (",d.Year,")"]}),Object(D.jsxs)("p",{className:t.info,children:[d.Rated," | ",d.Runtime," | ",d.Genre," |"," ",d.Released," (",d.Country,")"]})]}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("h2",{className:t.rating,children:["\u2b50 ",d.imdbRating,"/10"]}),Object(D.jsxs)("p",{className:t.votes,children:[d.imdbVotes," votes"]})]})]}),Object(D.jsx)("p",{children:d.Plot}),Object(D.jsx)("br",{}),Object(D.jsxs)("p",{children:[Object(D.jsx)("strong",{children:"Director:"})," ",d.Director]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("strong",{children:"Writers:"})," ",d.Writer]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("strong",{children:"Stars:"})," ",d.Actors]}),Object(D.jsx)("br",{}),(5!==n.length||S)&&Object(D.jsx)(R.a,{className:t.button,variant:"contained",size:"large",onClick:S?function(){c(d)}:k,children:S?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(oe.a,{style:{marginRight:2}}),"Nominated"]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(se.a,{style:{marginRight:2}}),"Nominate"]})})]})]})]}),Object(D.jsx)(O.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:g,message:"You have nominated 5 movies!",autoHideDuration:3e3,onClose:function(){return y(!1)}})]})}))),de=n(99);var be=function(){return Object(D.jsx)(de.a,{children:Object(D.jsxs)(_.c,{children:[Object(D.jsx)(_.a,{exact:!0,path:"/theshoppies/",render:function(e){return Object(D.jsx)(re,Object(i.a)({},e))}}),Object(D.jsx)(_.a,{exact:!0,path:"/theshoppies/:id",render:function(e){return Object(D.jsx)(ue,Object(i.a)({},e))}})]})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},pe=n(53),me=n(102),Oe={title:"",year:"",type:"",results:[],nominations:[]};var xe=Object(pe.b)({theShoppies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:var n=t.payload.title,a=t.payload.year,r=t.payload.type,c=t.payload.results;return Object(i.a)(Object(i.a)({},e),{},{title:n,year:a,type:r,results:c});case Z:return Object(i.a)(Object(i.a)({},e),{},{nominations:[].concat(Object(me.a)(e.nominations),[t.movie])});case $:var s=e.nominations.findIndex((function(e){return e.imdbID===t.movie.imdbID}));return Object(i.a)(Object(i.a)({},e),{},{nominations:e.nominations.slice(0,s).concat(e.nominations.slice(s+1))});default:return e}}}),fe=n(100),ve=Object(pe.c)(xe,Object(pe.a)(fe.a));s.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(U.a,{store:ve,children:Object(D.jsx)(be,{})})}),document.getElementById("root")),he()}},[[144,1,2]]]);
//# sourceMappingURL=main.090906e0.chunk.js.map