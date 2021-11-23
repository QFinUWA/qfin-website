(this["webpackJsonpqfin-website"]=this["webpackJsonpqfin-website"]||[]).push([[0],{15:function(e,i,t){},25:function(e,i,t){},31:function(e,i,t){},32:function(e,i,t){"use strict";t.r(i);var a,n,o,u,r,l,s,c=t(2),d=t.n(c),m=t(16),p=t.n(m),b=(t(25),t(5)),x=t(6),j=t(8),q=t(9),g=t(7),h=g.a.nav(a||(a=Object(x.a)(["\n  position: sticky;\n  top: 0;\n  background: #24CC54;\n  height: 6vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px calc((100vw - 1000px) / 2);\n  z-index: 12;\n  padding: 4px;\n  @media screen and (max-width: 768px) {\n    display: grid;\n    grid-template-rows: 3rem auto;\n    place-items: center;\n    height: minmax(100%, max-content);\n    height: max-content;\n  }\n"]))),f=Object(g.a)(q.b)(n||(n=Object(x.a)(["\n  color: #313131;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #000000;\n  }\n"]))),v=Object(g.a)(q.b)(o||(o=Object(x.a)(["\n  color: #313131;\n  font-size:15pt;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #000000;\n  }\n"]))),O=Object(g.a)(j.a)(u||(u=Object(x.a)(["\n  color: #808080;\n  height: 2rem;\n  position: absolute;\n  top: 0.75rem;\n  right: 1.5rem;\n  font-size: 1.8rem;\n  cursor: pointer;\n"]))),N=g.a.div(r||(r=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: 1fr;\n    place-items: center;\n    grid-gap: 0.5rem;\n    padding-bottom: 1rem;\n  }\n"]))),U=(g.a.nav(l||(l=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  font-family: Segoe UI;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Object(g.a)(q.b)(s||(s=Object(x.a)(["\n  border-radius: 4px;\n  background: #808080;\n  padding: 10px 22px;\n  color: #000000;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #808080;\n  }\n"]))),t(1)),L=function(){var e=d.a.useState(!1),i=Object(b.a)(e,2),t=i[0],a=i[1],n=d.a.useState(!1),o=Object(b.a)(n,2),u=o[0],r=o[1],l=function(){return r(window.innerWidth<768)};Object(c.useEffect)((function(){l(),window.onresize=l}),[]);return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(h,{children:[Object(U.jsx)(v,{className:"QFin",to:"/home",activestyle:"true",children:"QFin UWA"}),u&&Object(U.jsx)(O,{className:"burger",onClick:function(){a(!t),console.log("burger test"),console.log(t)}}),(!u||t)&&Object(U.jsxs)(N,{children:[Object(U.jsx)(f,{to:"/about",activestyle:"true",children:"About"}),Object(U.jsx)(f,{to:"/projects",activestyle:"true",children:"Projects"}),Object(U.jsx)(f,{to:"/events",activestyle:"true",children:"Events"}),Object(U.jsx)(f,{to:"/team",activestyle:"true",children:"Team"}),Object(U.jsx)(f,{to:"/blogs",activestyle:"true",children:"Blogs"}),Object(U.jsx)(f,{to:"/sign-up",activestyle:"true",children:"Sign Up"})]})]})})},E=t(3),w=function(){return Object(U.jsx)("div",{className:"page",children:Object(U.jsx)("h1",{className:"title",children:"Welcome to QFin"})})};t(15);var D=function(e){var i=e.id,t=e.img,a=e.title,n=e.text;return Object(U.jsx)("div",{className:"card",id:i,children:Object(U.jsxs)("div",{className:"card-body",children:[Object(U.jsx)("img",{src:t,alt:"Card"}),Object(U.jsxs)("h2",{className:"card-title",children:[" ",a," "]}),Object(U.jsxs)("p",{className:"card-text",children:[" ",n," "]})]})})};var y,F=function(e){var i=e.children;return Object(U.jsx)("div",{className:"card-container",children:i})},k=function(){return Object(U.jsxs)("div",{className:"page",children:[Object(U.jsx)("h1",{className:"title",children:"What does QFin do?"}),Object(U.jsx)("p",{className:"content",children:"QFin be a club tho"}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(U.jsxs)(F,{children:[Object(U.jsx)(D,{title:"swag",id:"card-1",text:"Wowza"}),Object(U.jsx)(D,{title:"swag2",text:"Wowza2"}),Object(U.jsx)(D,{title:"swag3",text:"Wowza3"}),Object(U.jsx)(D,{title:"swag4",text:"Wowza4"})]})]})},Q=function(){return Object(U.jsx)("div",{className:"page",children:Object(U.jsx)("h1",{className:"title",children:"QFin Events"})})},z=function(){return Object(U.jsx)("div",{className:"page",children:Object(U.jsx)("h1",{className:"title",children:"QFin Projects"})})},W=function(){return Object(U.jsx)("div",{className:"page",children:Object(U.jsx)("h1",{className:"title",children:"Meet the QFin Team"})})},S=function(){return Object(U.jsxs)("div",{className:"page",children:[Object(U.jsx)("h1",{className:"title",children:"Welcome to QFin Blogs"}),Object(U.jsx)("p",{className:"content",children:"QFin be a club tho"}),Object(U.jsx)("p",{className:"content",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})]})},C=function(){return Object(U.jsx)("div",{className:"page",children:Object(U.jsx)("h1",{className:"title",children:"QFin Sign Up"})})},A=t(20),T=t.p+"static/media/UWA_logo.107767fe.svg",B=function(e){var i=e.size,t=(e.color,e.className),a=e.alt;return Object(U.jsx)("img",{src:T,alt:a,width:i,height:i,className:t})},I=[{Logo:j.c,id:"github-img",href:"https://github.com/QFinUWA"},{Logo:j.d,id:"linkedin-img",href:"https://www.linkedin.com/company/qfin-uwa/"},{Logo:A.a,id:"discord-img",href:"https://www.facebook.com/QFinUWA/"},{Logo:j.b,id:"facebook-img",href:"https://discord.gg/pzfasHAFAn"},{Logo:B,id:"uwa-img",href:"https://www.uwastudentguild.com/clubs/qfin-uwa"}],J=(t(31),function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("footer",{className:"footer",children:Object(U.jsxs)("div",{className:"footer-content",children:[Object(U.jsx)("h2",{id:"footer-header",children:"Contact Us"}),Object(U.jsxs)("p",{children:[Object(U.jsx)("button",{onclick:'location.href="mailto:qfinuwa@gmail.com";',children:"Email Us"}),"  ",Object(U.jsx)("br",{}),"qfinuwa@gmail.com"]}),Object(U.jsx)("div",{className:"footer-icons",children:I.map((function(e){return Object(U.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:Object(U.jsx)(e.Logo,{className:"link-photos",id:null===e||void 0===e?void 0:e.id})})}))})]})})})}),M=t.p+"static/media/QFin LinkedIn Banner Thinner.d05b6b01.png",P=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("img",{className:"banner",src:M,alt:"QFin Banner"})})},_=g.a.div(y||(y=Object(x.a)(["\n   position: fixed;\n   bottom: 50px;\n   height: 0px;\n   right: 10px;\n   font-size: 2.5rem;\n   z-index: 1;\n   cursor: pointer;\n   color: #24CC54;\n"]))),H=function(){var e=Object(c.useState)(!1),i=Object(b.a)(e,2),t=i[0],a=i[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>200?a(!0):e<=200&&a(!1)})),Object(U.jsx)(_,{children:Object(U.jsx)(j.e,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"inline":"none"}})})};var G=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(q.a,{children:[Object(U.jsx)(P,{}),Object(U.jsx)(L,{}),Object(U.jsxs)(E.c,{children:[Object(U.jsx)(E.a,{path:"/",element:Object(U.jsx)(w,{})}),Object(U.jsx)(E.a,{path:"/qfin-website",element:Object(U.jsx)(w,{})}),Object(U.jsx)(E.a,{path:"/home",element:Object(U.jsx)(w,{})}),Object(U.jsx)(E.a,{path:"/about",element:Object(U.jsx)(k,{})}),Object(U.jsx)(E.a,{path:"/events",element:Object(U.jsx)(Q,{})}),Object(U.jsx)(E.a,{path:"/projects",element:Object(U.jsx)(z,{})}),Object(U.jsx)(E.a,{path:"/team",element:Object(U.jsx)(W,{})}),Object(U.jsx)(E.a,{path:"/blogs",element:Object(U.jsx)(S,{})}),Object(U.jsx)(E.a,{path:"/sign-up",element:Object(U.jsx)(C,{})})]}),Object(U.jsx)(H,{})]}),Object(U.jsx)(J,{})]})};p.a.render(Object(U.jsx)(d.a.StrictMode,{children:Object(U.jsx)(G,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f53f21dd.chunk.js.map