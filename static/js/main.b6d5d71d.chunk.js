(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{117:function(n,e,t){"use strict";t.r(e);var i,r,o,c,a,l,s,d,b=t(16),h=t(43),u=t.n(h),j=t(85),p=t(13),g=t(34),v=t(9),x=t(10),f=t(7),m=t(122),O=t(124),w=t(125),y=t(0),k=t.n(y),z=t(81),S=t(4),C=Object(p.c)(m.a.nav)(i||(i=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    background-color: black;\n    font-size: 14px;\n    padding: 20px 60px;\n    color: white;\n"]))),P=p.c.div(r||(r=Object(b.a)(["\n    display: flex;\n    align-items: center;\n"]))),q=Object(p.c)(m.a.svg)(o||(o=Object(b.a)(["\n    margin-right: 50px;\n    width: 95px;\n    height: 25px;\n    fill: ",";\n    path {\n        stroke-width: 6px;\n        stroke: white;\n    }\n"])),(function(n){return n.theme.red})),I=p.c.ul(c||(c=Object(b.a)(["\n    display: flex;\n    align-items: center;\n"]))),L=p.c.li(a||(a=Object(b.a)(["\n    margin-right: 20px;\n    color: ",";\n    transition: color 0.3s ease-in-out;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    &:hover {\n        color: ",";\n    }\n"])),(function(n){return n.theme.white.darker}),(function(n){return n.theme.white.lighter})),M=p.c.form(l||(l=Object(b.a)(["\n    color: white;\n    display: flex;\n    align-items: center;\n    position: relative;\n    svg {\n        height: 25px;\n    }\n"]))),F=Object(p.c)(m.a.input)(s||(s=Object(b.a)(["\n    transform-origin: right center;\n    position: absolute;\n    right: 0px;\n    padding: 5px 10px;\n    padding-left: 40px;\n    z-index: -1;\n    color: white;\n    font-size: 16px;\n    background-color: transparent;\n    border: 1px solid ",";\n    border-radius: 4px;\n"])),(function(n){return n.theme.white.lighter})),H=Object(p.c)(m.a.span)(d||(d=Object(b.a)(["\n    position: absolute;\n    width: 5px;\n    height: 5px;\n    border-radius: 5px;\n    bottom: -8px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    background-color: ",";\n"])),(function(n){return n.theme.red})),_={normal:{fillOpacity:1},active:{fillOpacity:[0,1,0],transtition:{repeat:1/0}}},E={top:{backgroundColor:"rgba(0,0,0,0)"},scroll:{backgroundColor:"rgba(0,0,0,1)"}};var T,B,Q,X,J,R,W,Y,D,U,V,A,G,K,N=function(){var n=Object(y.useState)(!1),e=Object(f.a)(n,2),t=e[0],i=e[1],r=Object(v.f)("/"),o=Object(v.f)("/tv"),c=Object(O.a)(),a=Object(O.a)(),l=Object(w.a)().scrollY;Object(y.useEffect)((function(){l.onChange((function(){l.get()>80?c.start("scroll"):c.start("top")}))}),[l,c]);var s=Object(v.g)(),d=Object(z.a)(),b=d.register,h=d.handleSubmit;return Object(S.jsxs)(C,{variants:E,animate:c,initial:"top",children:[Object(S.jsxs)(P,{children:[Object(S.jsx)(q,{variants:_,whileHover:"active",xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"276.742",viewBox:"0 0 1024 276.742",children:Object(S.jsx)(m.a.path,{d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"})}),Object(S.jsxs)(I,{children:[Object(S.jsx)(L,{children:Object(S.jsxs)(g.b,{to:"/",children:["Home ",r&&Object(S.jsx)(H,{layoutId:"circle"})]})}),Object(S.jsx)(L,{children:Object(S.jsxs)(g.b,{to:"/tv",children:["Tv shows ",o&&Object(S.jsx)(H,{layoutId:"circle"})]})})]})]}),Object(S.jsx)(P,{children:Object(S.jsxs)(M,{onSubmit:h((function(n){console.log(n),s("/search?keyword=".concat(n.keyword))})),children:[Object(S.jsx)(m.a.svg,{onClick:function(){t?a.start({scaleX:0}):a.start({scaleX:1}),i((function(n){return!n}))},animate:{x:t?-215:0},transition:{type:"linear"},fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(S.jsx)("path",{fillRule:"evenodd",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})}),Object(S.jsx)(F,Object(x.a)(Object(x.a)({},b("keyword",{required:!0,minLength:2})),{},{animate:a,transition:{type:"linear"},initial:{scaleX:0},placeholder:"Search for movie or tv show..."}))]})})]})},Z=t(123),$=t(56);function nn(){return fetch("".concat("https://api.themoviedb.org/3","/movie/now_playing?api_key=").concat("520945fdf6771d8cc071cc16fd185649")).then((function(n){return n.json()}))}function en(n,e){return"https://image.tmdb.org/t/p/".concat(e||"original","/").concat(n)}var tn=p.c.div(T||(T=Object(b.a)(["\n    background: black;\n"]))),rn=p.c.div(B||(B=Object(b.a)(["\n    height: 20vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),on=p.c.div(Q||(Q=Object(b.a)(["\n    height: 100vh;\n    background-color: red;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 60px;\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(",");\n    background-size: cover;\n"])),(function(n){return n.bgPhoto})),cn=p.c.h2(X||(X=Object(b.a)(["\n    font-size: 68px;\n    margin-bottom: 20px;\n"]))),an=p.c.p(J||(J=Object(b.a)(["\n    font-size: 30px;\n    width: 50%;\n"]))),ln=p.c.div(R||(R=Object(b.a)(["\n    position: relative;\n    top: -100px;\n"]))),sn=Object(p.c)(m.a.div)(W||(W=Object(b.a)(["\n    display: grid;\n    gap: 5px;\n    grid-template-columns: repeat(6, 1fr);\n    margin-bottom: 5px;\n    position: absolute;\n    width: 100%;\n"]))),dn=Object(p.c)(m.a.div)(Y||(Y=Object(b.a)(["\n    background-color: none;\n    height: 200px;\n    font-size: 30px;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n    &:first-child {\n        transform-origin: center left;\n    }\n    &:last-child {\n        transform-origin: center right;\n    }\n"])),(function(n){return n.bgPhoto})),bn=Object(p.c)(m.a.div)(D||(D=Object(b.a)(["\n    padding: 20px;\n    background-color: ",";\n    opacity: 0;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    h4 {\n        text-align: center;\n        font-size: 18px;\n    }\n"])),(function(n){return n.theme.black.lighter})),hn=Object(p.c)(m.a.div)(U||(U=Object(b.a)(["\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n"]))),un=Object(p.c)(m.a.div)(V||(V=Object(b.a)(["\n    position: absolute;\n    width: 60vw;\n    height: 80vh;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    background-color: ",";\n    border-radius: 15px;\n    overflow: hidden;\n"])),(function(n){return n.theme.black.lighter})),jn=p.c.div(A||(A=Object(b.a)(["\n    width: 100%;\n    height: 400px;\n    background-size: cover;\n    background-position: center center;\n    background-image: linear-gradient(to top, black, transparent), url(",");\n"])),(function(n){return n.bgPhoto})),pn=p.c.h3(G||(G=Object(b.a)(["\n    color: ",";\n    font-size: 36px;\n    position: relative;\n    top: -60px;\n    padding: 20px;\n"])),(function(n){return n.theme.white.lighter})),gn=p.c.p(K||(K=Object(b.a)(["\n    position: relative;\n    padding: 20px;\n    color: ",";\n    top: -80px;\n"])),(function(n){return n.theme.white.lighter})),vn={hidden:{x:window.innerWidth+5},visible:{x:0},exit:{x:-window.innerWidth-5}},xn={normal:{scale:1},hover:{scale:1.3,y:-10,transition:{delay:.5,transition:{type:"tween",duration:.3}}}},fn={hover:{opacity:1,transition:{delay:.5,transition:{type:"tween",duration:.3}}}};var mn=function(){var n=Object(v.g)(),e=Object(v.f)("/movies/:movieId"),t=Object(w.a)().scrollY,i=Object($.useQuery)(["movies","nowPlaying"],nn),r=i.data,o=i.isLoading,c=Object(y.useState)(0),a=Object(f.a)(c,2),l=a[0],s=a[1],d=Object(y.useState)(!1),b=Object(f.a)(d,2),h=b[0],u=b[1],j=function(){return u((function(n){return!n}))},p=(null===e||void 0===e?void 0:e.params.movieId)&&(null===r||void 0===r?void 0:r.results.find((function(n){return String(n.id)===e.params.movieId})));return Object(S.jsx)(tn,{children:o?Object(S.jsx)(rn,{children:"Loading"}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(on,{onClick:function(){if(r){if(h)return;j();var n=r.results.length-1,e=Math.floor(n/6)-1;s((function(n){return n===e?0:n+1}))}},bgPhoto:en((null===r||void 0===r?void 0:r.results[0].backdrop_path)||""),children:[Object(S.jsx)(cn,{children:null===r||void 0===r?void 0:r.results[0].title}),Object(S.jsx)(an,{children:null===r||void 0===r?void 0:r.results[0].overview})]}),Object(S.jsx)(ln,{children:Object(S.jsx)(Z.a,{initial:!1,onExitComplete:j,children:Object(S.jsx)(sn,{variants:vn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===r||void 0===r?void 0:r.results.slice(1).slice(6*l,6*l+6).map((function(e){return Object(S.jsx)(dn,{layoutId:String(e.id),onClick:function(){return t=e.id,void n("/movies/".concat(t));var t},variants:xn,initial:"normal",whileHover:"hover",transition:{type:"tween"},bgPhoto:en(e.backdrop_path,"w500"),children:Object(S.jsx)(bn,{variants:fn,children:Object(S.jsx)("h4",{children:e.title})})},e.id)}))},l)})}),Object(S.jsx)(Z.a,{children:e?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(hn,{onClick:function(){return n("/")},animate:{opacity:1},exit:{opacity:0}}),Object(S.jsx)(un,{layoutId:e.params.movieId,style:{top:t.get()+100},children:p&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(jn,{bgPhoto:en(p.backdrop_path)}),Object(S.jsx)(pn,{children:p.title}),Object(S.jsx)(gn,{children:p.overview})]})})]}):null})]})})};var On=function(){var n=Object(v.e)(),e=new URLSearchParams(n.search).get("keyword");return console.log(e),null};var wn=function(){return Object(S.jsx)("h1",{children:"TV"})};var yn,kn=function(){return Object(S.jsxs)(g.a,{children:[Object(S.jsx)(N,{}),Object(S.jsxs)(v.c,{children:[Object(S.jsx)(v.a,{path:"/tv",element:Object(S.jsx)(wn,{})}),Object(S.jsx)(v.a,{path:"/search",element:Object(S.jsx)(On,{})}),Object(S.jsx)(v.a,{path:"/*",element:Object(S.jsx)(mn,{}),children:Object(S.jsx)(v.a,{path:"movie/:movieId",element:Object(S.jsx)(mn,{})})})]})]})},zn=Object(p.b)(yn||(yn=Object(b.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  background-color : black;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.white.darker})),Sn=new $.QueryClient;u.a.render(Object(S.jsx)(k.a.StrictMode,{children:Object(S.jsx)(j.a,{children:Object(S.jsx)($.QueryClientProvider,{client:Sn,children:Object(S.jsxs)(p.a,{theme:{red:"#E51013",black:{veryDark:"#141414",darker:"#181818",lighter:"#2F2F2F"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(S.jsx)(zn,{}),Object(S.jsx)(kn,{})]})})})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.b6d5d71d.chunk.js.map