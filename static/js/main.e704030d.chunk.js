(this["webpackJsonpqfin-website"]=this["webpackJsonpqfin-website"]||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var i,a,s,r,c,o,l,d,h,m=n(2),j=n.n(m),b=n(19),p=n.n(b),g=(n(27),n(7)),u=n(8),f=n(5),x=n(10),O=n(9),w=O.a.nav(i||(i=Object(u.a)(["\n  // position: sticky;\n  position: relative;\n  background: #24CC54;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px calc((100vw - 1000px) / 2);\n  z-index: 12;\n  padding: 4px;\n  @media screen and (max-width: 768px) {\n    display: grid;\n    grid-template-rows: 3rem auto;\n    place-items: center;\n    height: minmax(100%, max-content);\n    // height: max-content;\n  }\n"]))),v=Object(O.a)(x.b)(a||(a=Object(u.a)(["\n  color: #313131;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 50px;\n  cursor: pointer;\n  &.active {\n    color: #000000;\n  }\n  @media screen and (max-width: 768px) {\n    justify-content: center;\n    height: 100%;\n    width: 300px;\n    color: rgba(255, 255, 255, 0.8);\n  }\n"]))),k=Object(O.a)(x.b)(s||(s=Object(u.a)(["\n  color: #313131;\n  font-size:15pt;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #000000;\n  }\n"]))),y=Object(O.a)(f.a)(r||(r=Object(u.a)(["\n  color: #808080;\n  background: #24CC54;\n  height: 2rem;\n  position: absolute;\n  top: 0.75rem;\n  right: 1.5rem;\n  font-size: 1.8rem;\n  cursor: pointer;\n"]))),N=O.a.div(c||(c=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    align-items: right;\n    float: right;\n    margin-top: 4px;\n    background-color: rgba(97, 97, 102, 0.9);\n    width: auto;\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: 1fr;\n    place-items: center;\n    grid-gap: 0.5rem;\n    padding-bottom: 1rem;\n  }\n"]))),T=(O.a.nav(o||(o=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  font-family: Segoe UI;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Object(O.a)(x.b)(l||(l=Object(u.a)(["\n  border-radius: 4px;\n  background: #808080;\n  padding: 10px 22px;\n  color: #000000;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #808080;\n  }\n"]))),O.a.div(d||(d=Object(u.a)(["\n  position: absolute;\n  justify-items: center;\n  float: right;\n  background-color: rgba(97, 97, 102, 0.9);\n  width: 100%;\n  display: grid;\n  grid-auto-rows: 1fr;\n  grid-template-columns: 1fr;\n  place-items: center;\n  grid-gap: 0.5rem;\n  padding: 1rem 0rem 1rem 0rem;\n  z-index: 10\n  "])))),F=n(1),S=function(){var e=j.a.useState(!1),t=Object(g.a)(e,2),n=t[0],i=t[1],a=j.a.useState(!1),s=Object(g.a)(a,2),r=s[0],c=s[1],o=function(){return c(window.innerWidth<768)};Object(m.useEffect)((function(){o(),window.onresize=o}),[]);var l=function(){i(!n)};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(w,{children:[Object(F.jsx)(k,{className:"QFin",to:"/home",onClick:function(){i(!1)},activestyle:"true",children:"QFin UWA"}),r&&Object(F.jsx)(y,{className:"burger",onClick:l}),!r&&Object(F.jsxs)(N,{children:[Object(F.jsx)(v,{to:"/events",activestyle:"true",children:"Events"}),Object(F.jsx)(v,{to:"/projects",activestyle:"true",children:"Projects"}),Object(F.jsx)(v,{to:"/team",activestyle:"true",children:"Team"}),Object(F.jsx)(v,{to:"/sponsors",activestyle:"true",children:"Sponsors"}),Object(F.jsxs)("a",{href:"https://forms.gle/LjNMSxCUY9ytyvJ97",target:"blank_",style:{textDecoration:"none"},children:[Object(F.jsx)("div",{className:"fakeNavLink",children:"Sign Up"})," "]})]})]}),n&&r&&Object(F.jsxs)(T,{children:[Object(F.jsx)(v,{to:"/about",onClick:l,activestyle:"true",children:"About"}),Object(F.jsx)(v,{to:"/projects",onClick:l,activestyle:"true",children:"Projects"}),Object(F.jsx)(v,{to:"/events",onClick:l,activestyle:"true",children:"Events"}),Object(F.jsx)(v,{to:"/team",onClick:l,activestyle:"true",children:"Team"}),Object(F.jsx)(v,{to:"/sponsors",onClick:l,activestyle:"true",children:"Sponsors"}),Object(F.jsxs)("a",{href:"https://forms.gle/LjNMSxCUY9ytyvJ97",target:"blank_",style:{textDecoration:"none"},children:[Object(F.jsx)("div",{className:"fakeNavLink",children:"Sign Up"})," "]})]})]})},P=n(3),Q=function(){return Object(F.jsxs)("div",{className:"page",children:[Object(F.jsx)("h1",{className:"title",children:"Welcome to QFin"}),Object(F.jsx)("p",{className:"content",children:"Quantitative Finance (QFin) UWA is a mathematical finance and financial technology club that affiliated with the University of Western Australia\u2019s Societies Council in early 2021. At the time of affiliation, our 3 core objectives as a student run organisation were:"}),Object(F.jsxs)("ul",{children:[Object(F.jsx)("li",{className:"content",children:"To provide a platform for interested individuals to get practical experience in the field of algorithmic and statistical trading"}),Object(F.jsx)("li",{className:"content",children:"To demystify the quantitative finance industry and prepare students for a career in the field"}),Object(F.jsx)("li",{className:"content",children:"To create an inclusive environment for students with a common interest in mathematics and finance to meet one another "})]}),Object(F.jsx)("p",{className:"content",children:"QFin operates at the intersection of the EMS and Commerce faculty, and as such brings these students from different backgrounds together. We combine mathematics, finance, economics, engineering, computer science and data science to solve complicated problems relating to the financial markets."}),Object(F.jsx)("div",{className:"content",children:Object(F.jsx)("p",{className:"content2",children:"QFin hosts Quantitative Finance-based events and runs algorithmic trading projects for our trading team. Read more about these on our website! "})})]})},A=function(){return Object(F.jsxs)("div",{className:"page",children:[Object(F.jsx)("h1",{className:"title",children:"What is QFin?"}),Object(F.jsx)("h2",{className:"content",children:"History of QFin"}),Object(F.jsx)("p",{className:"content",children:"When we started, who was involved, why we started qfin etc"}),Object(F.jsx)("p",{className:"content",children:"Talk about what quant is and what we want to teach/accomplish in terms of awareness of quant"}),Object(F.jsx)("h2",{className:"content",children:"What does QFin do?"}),Object(F.jsx)("p",{className:"content",children:"Talk about events, projects and sponsors(?)"}),Object(F.jsx)("br",{})]})},C=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"Event hideme",children:[Object(F.jsx)("h2",{className:"Event-header",children:e.title}),e.image.length>0&&Object(F.jsx)("img",{className:"Event-image",src:e.image,alt:e.title}),Object(F.jsxs)("p",{className:"Event-date",children:[Object(F.jsx)("b",{children:"Date"}),": ",e.date]}),Object(F.jsxs)("p",{className:"Event-desc",children:[" ",Object(F.jsx)("b",{children:"Description"}),": ",e.desc]}),e.host.length>0&&Object(F.jsxs)("p",{className:"Event-host",children:[" ",Object(F.jsx)("b",{children:"Host"}),": ",e.host]}),e.attendees.length>0&&Object(F.jsxs)("p",{className:"Event-attendees",children:[Object(F.jsx)("b",{children:"Attendees"}),": ",e.attendees]}),e.facebook.length>0&&Object(F.jsx)("a",{href:e.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(f.b,{className:"contact-icon"})}),e.linkedin.length>0&&Object(F.jsx)("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(f.e,{className:"contact-icon"})})]})})},E=n.p+"static/media/QFinPoker2021.66c08ddb.jpg",U=n.p+"static/media/PythonWorkshop1.74104be4.jpg",M=n.p+"static/media/tradeathonSMIFeToro.c06d0a0a.jpg",W=n.p+"static/media/studynightECOMS21.de1919a5.png",_=n.p+"static/media/Oday2022.16f6c2e5.jpg",J=n.p+"static/media/PokerNight2022Sem1.4012716b.png",D=n.p+"static/media/TradingTeamProjectStart.4e64a55e.jpg",q=n(4),I=function(){return Object(F.jsxs)("div",{className:"page",children:[Object(F.jsx)("h1",{className:"title",children:"QFin Events"}),Object(F.jsx)("p",{className:"content",style:{textAlign:"center",padding:"15px 0px"},children:"Events that QFin has run since the start of the club"}),Object(F.jsx)("div",{className:"EventsContainer"}),Object(F.jsxs)("div",{className:"UpcomingEvents",children:[Object(F.jsx)("h2",{className:"EventYearTitle",children:"Upcoming Events"}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(C,{title:"QFin x Maths Union - Poker Night 2022",image:J,date:"5th of May 2022",desc:"An upgraded version of last year's event, with a bigger prize pool and new venue!",host:"",sponsor:"SIG",attendees:"",linkedin:"",facebook:""})})]}),Object(F.jsx)("hr",{}),Object(F.jsxs)("div",{className:"EventYear",children:[Object(F.jsx)("h2",{className:"EventYearTitle",children:"2022"}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(C,{title:"Trading Team 2022 - Project Initiation Semester 1",image:D,date:"16th of March 2022",desc:"The trading team met up for their introductory meeting to talk about the project for the semester. It was a very interesting meeting organised and run by QFin's Director of Trading, Jake Lyell. It introduced the concept of Mean Reversion to the traders and familiarised them with Jake's custom back-testing framework.\r They were then split up into their respective teams and assigned team leaders. Each team will compete to produce the best quantitative trading algorithm and accompanying report for the semester.",host:"Jake Lyell",sponsor:"Optiver",attendees:"10",linkedin:"https://www.linkedin.com/posts/qfin-uwa_trading-team-project-activity-6911923365452656640-rQ0E?utm_source=linkedin_share&utm_medium=member_desktop_web",facebook:"https://www.facebook.com/QFinUWA/posts/386535556807406"})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(C,{title:"UWA O-Day 2022",image:_,date:"25th of February 2022",desc:"Hosted a stall at UWA O-Day 2022 to advertise our club and sign up new members!",host:"",sponsor:"",attendees:"",linkedin:"",facebook:"https://www.facebook.com/QFinUWA/posts/374655521328743"})})]}),Object(F.jsxs)("div",{className:"EventYear",children:[Object(F.jsx)("h2",{className:"EventYearTitle",children:"2021"}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(C,{title:"Algorithmic Trading x Python Workshop",image:U,date:"5th of October 2021",desc:"A Workshop for QFin members to learn how to use Python to develop trading strategies by backtesting on historical data.",host:"Kane Alexander",sponsor:"",attendees:"20",linkedin:"https://www.linkedin.com/posts/qfin-uwa_yesterday-kane-alexander-our-director-of-activity-6848756902684364801-JvL7",facebook:"https://www.facebook.com/QFinUWA/posts/273622691432027"})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(C,{title:"QFin x SMIF - Trade-a-thon",image:M,date:"2nd of September 2021",desc:"This event was a real life practical trading competition that helped participants learn how to trade and gave them a chance to meet like-minded students. Members got to experience what it's like to be a Trader on the fast-paced trading floor. They traded virtually in the Forex markets and the winner received a $500 prize.",host:"",sponsor:"eToro",attendees:"75",linkedin:"https://www.linkedin.com/posts/qfin-uwa_last-week-i-had-the-pleasure-of-speaking-activity-6841310823588212736-PFgA",facebook:"https://www.facebook.com/QFinUWA/posts/252664786861151"})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(C,{title:"QFin x ECOMS - Study Night Event",image:W,date:"25th of May 2021",desc:"In this event, we had presentations from previous high performing students and had tutors walking around and providing individualised assistance to students requiring help with their studies.",host:"",sponsor:"",attendees:"20",linkedin:"",facebook:"https://fb.me/e/2lisyfaM4"})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(C,{title:"QFin x Maths Union - Poker Night 2021",image:E,date:"20th of May 2021",desc:"QFin also collaborated with the UWA Mathematics Union to bring a Poker Night to campus. It was a major social event for the club in its first ever semester. The club chose to include poker not because we endorse gambling, but due to its significance in many Quantitative Finance firms. \u200b\u200bAn example is Susquehanna International Group (SIG) - a major firm in the industry that holds poker at its core for social outings.",host:"",sponsor:"",attendees:"60",linkedin:"",facebook:"https://www.facebook.com/QFinUWA/posts/168551088605855?__cft__[0]=AZX12oedX1bZrHyrIrQ9IAcMbjbfxG9gxeSlxIARF-SFm9LIprIgFZttJUnaVeNbeTMXzUsZwEsau7O_8oG9cxQstDPBOu7b2ZR2WjuT8Jxr5rIp4US4tkWcot3BQ1qV_J29eP2gbndzIeXEZMMZj8Li&__tn__=%2CO%2CP-R"})})]})]})},L=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"Project",children:[Object(F.jsx)("h2",{className:"Project-header",children:e.title}),e.image.length>0&&Object(F.jsx)("img",{className:"Project-image",src:e.image,alt:e.title}),Object(F.jsxs)("p",{className:"Project-DOT",children:[Object(F.jsx)("b",{children:"Director of Trading"}),": ",Object(F.jsxs)("a",{href:e.DOTlink,target:"_blank",rel:"noopener noreferrer",children:[" ",e.DOT," "]})]}),Object(F.jsxs)("p",{className:"Project-desc",children:[" ",Object(F.jsx)("b",{children:"Description"}),": ",e.desc]}),Object(F.jsxs)("p",{className:"Project-tools",children:[" ",Object(F.jsx)("b",{children:"Technologies"}),": ",e.tools]}),e.repolink.length>5&&Object(F.jsxs)("p",{className:"Project-repo-link",children:[Object(F.jsx)("b",{children:"Repository"}),": ",Object(F.jsx)("a",{href:e.repolink,target:"_blank",rel:"noopener noreferrer",children:" GitHub "})]})]})})},R=n.p+"static/media/Momentum.ead64933.png",H=n.p+"static/media/Pairs.8146ff80.png",z=n.p+"static/media/Reversion.fbbada9c.png",G=function(){return Object(F.jsxs)("div",{className:"page",children:[Object(F.jsx)("h1",{className:"title",children:"QFin Trading Team Projects"}),Object(F.jsx)("p",{className:"content",children:"Each Semester, the Executive Director of Trading devises a project for the QFin Trading Teams to complete throughout the semester. The project is based around the core concepts of quantitative analysis and mathematical theory. So far, the projects have primarily consisted of backtesting trading strategies against historical stock and crypto data, with the goal of determining the best trading strategy across a range of stocks and crypto assets and optimizing that strategy."}),Object(F.jsxs)("div",{className:"ProjectContainer",children:[Object(F.jsxs)("div",{className:"ProjectYear",children:[Object(F.jsx)("h2",{className:"ProjectYearTitle",children:"2022"}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(L,{title:"Mean Reversion - Semester 1",image:z,DOT:"Jake Lyell",DOTlink:"https://www.linkedin.com/in/jake-lyell/",desc:"This Project will be focused on the theory of mean reversion. Teams will be given a set of historical data and will be tasked with finding the optimal parameters for a mean reversion model.",tools:"Python, Pandas, Custom Backtesting Module",repolink:"TBD"})})]}),Object(F.jsxs)("div",{className:"ProjectYear",children:[Object(F.jsx)("h2",{className:"ProjectYearTitle",children:"2021"}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(L,{title:"Momentum Trading - Semester 2",image:R,DOT:"Kane Alexander",DOTlink:"https://www.linkedin.com/in/kane-alexander-08131b216/",desc:"This project was based on the Quantitative concept of Momentum Trading. \r The goal of this project was to determine the best trading strategy based on stock price momentum for a set of historical data of popular cryptocurrencies.\r The project was completed by 4 teams of 3 people.",tools:"Python, Pandas, Gemini Modules",repolink:"https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester2-Momentum-Trading"})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(L,{title:"Pairs Trading - Semester 1",image:H,DOT:"Kane Alexander",DOTlink:"https://www.linkedin.com/in/kane-alexander-08131b216/",desc:"This project was based on the concept of Pairs Trading. The goal of this project was to research potential stock pairs and then design, implement, and backtest an algorithm to trade the pairs. The project was completed by 3 teams of 4 people.",tools:"Python, Quant Connect",repolink:"https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester1-Pairs-Trading"})})]})]})]})},Y=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"Person",children:[Object(F.jsx)("div",{className:"Person-image-container",children:Object(F.jsx)("img",{className:"Person-image",src:e.image,alt:e.name})}),Object(F.jsxs)("div",{className:"Person-info",children:[Object(F.jsx)("h2",{className:"Person-name",children:e.name}),Object(F.jsx)("h3",{className:"Person-title",children:e.title}),Object(F.jsx)("p",{className:"Person-desc",children:e.desc}),e.pastRoles.length>0&&Object(F.jsxs)("p",{className:"Person-past-roles",children:[Object(F.jsx)("b",{children:"Past Roles"}),": ",e.pastRoles]})]}),Object(F.jsxs)("div",{className:"contact-icons",children:[e.github.length>0&&Object(F.jsx)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(f.c,{className:"contact-icon"})}),e.linkedin.length>0&&Object(F.jsx)("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(f.e,{className:"contact-icon"})}),e.website.length>0&&Object(F.jsx)("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(f.d,{className:"contact-icon"})}),e.twitter.length>0&&Object(F.jsx)("a",{href:e.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(f.h,{className:"contact-icon"})}),e.facebook.length>0&&Object(F.jsx)("a",{href:e.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(f.b,{className:"contact-icon"})}),e.email.length>0&&Object(F.jsx)("a",{href:"mailto:"+e.email,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(f.g,{className:"contact-icon"})})]})]})})},B=n.p+"static/media/Jake small.df74dce8.jpg",K=n.p+"static/media/Jatin small.96a288c0.jpg",Z=n.p+"static/media/Kane small.450a4c5e.jpg",V=n.p+"static/media/Jade small.b217e4c2.jpg",X=n.p+"static/media/Henry small.59211a8c.jpg",$=n.p+"static/media/Dom small.7c9e6a66.png",ee=n.p+"static/media/Jon small.9f8229d9.png",te=function(){return Object(F.jsxs)("div",{className:"page",style:{maxWidth:"90%"},children:[Object(F.jsx)("h1",{className:"title",children:"2022 QFin Executive Team"}),Object(F.jsx)("p",{className:"content",style:{textAlign:"center",padding:"15px 0px"},children:"The current team of Execs in charge of running QFin for 2022"}),Object(F.jsxs)("div",{className:"TeamContainer",children:[Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(Y,{name:"Jatin Poonia",title:"President",desc:"Jatin is the President of QFin UWA for 2022. He was a member of QFin in 2021 where he fulfilled responsibilities as a Vice President. Jatin manages the club focusing on making decision that will advance the clubs position in UWA and benefit its members as much as possible. He is studying the bachelor of commerce, majoring in Finance and plans to extend his knowledge to prepare himself for the workforce.",pastRoles:"2021 Vice President",github:"",linkedin:"https://www.linkedin.com/in/jatin-poonia-528a441a2/",website:"",twitter:"",facebook:"https://www.facebook.com/profile.php?id=100008863037493",email:"president@qfinuwa.com",image:K})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(Y,{name:"Kane Alexander",title:"Vice President",desc:"Kane is the Vice President of QFin UWA for 2022. Last year he was the Executive Director of Trading where he coordinated the first trading team projects. Kane utilizes his technical and leadership experience to help QFin develop as a leading technology club on campus. He is in his honours year of software engineering and computer science.",pastRoles:"2021 Director of Trading",github:"https://github.com/Kanealex",linkedin:"https://www.linkedin.com/in/kane-alexander-08131b216/",website:"https://kane-alexander.com/",twitter:"",facebook:"",email:"vice-president@qfinuwa.com",image:Z})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(Y,{name:"Jake Lyell",title:"Director of Trading",desc:"Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the trading team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022.",pastRoles:"2021 Trading Team Member",github:"https://github.com/JakeLDev",linkedin:"https://www.linkedin.com/in/jake-lyell/",website:"https://jakelyell.dev",twitter:"",facebook:"",email:"director-of-trading@qfinuwa.com",image:B})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(Y,{name:"Jade Sauta",title:"Secretary",desc:"Reprising the role from QFin\u2019s inception in 2021, Jade is the Secretary of QFin UWA in 2022. She is responsible for liasing with stakeholders and maintaining the administrative side of QFin\u2019s affairs. Jade is studying a double major in Political Science & International Relations and English & Literary Studies in 2022 and enjoys diversifying her skill set through learning about quantitative trading.",pastRoles:"2021 Secretary",github:"",linkedin:"",website:"",twitter:"",facebook:"",email:"admin@qfinuwa.com",image:V})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(Y,{name:"Henry Miao",title:"Treasurer",desc:"Henry is the Treasurer of QFin UWA for 2022. He performs financial tasks for the club, which includes club bookkeeping, event budgeting, and applying for grants. Henry is also responsible for updating the club\u2019s financial statement and furnishing the Committee with such updates relating to the finances and property of the club. He is studying a major in Finance in the Bachelor of Philosophy degree, and is currently pursuing his Honours.",pastRoles:"2021 Committee Member",github:"",linkedin:"https://www.linkedin.com/in/henry-miao/",website:"",twitter:"",facebook:"https://www.facebook.com/henry.miao.58",email:"treasurer@qfinuwa.com",image:X})})]}),Object(F.jsx)("h2",{className:"subtitle",children:"Past executives"}),Object(F.jsxs)("div",{className:"TeamContainer",children:[Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(Y,{name:"Dom Sauta",title:"President - 2021",desc:"Dom is the founder and first president of Quantitative Finance UWA. Alongside the 2021 executive team, he founded QFin as a way to explore an industry he found both mysterious and fascinatingly mathematical. He studied a BPhil (hons) in mathematics & statistics and finance and now works as a graduate trader at a market making firm in Sydney. Dom attests a great deal of knowledge about trading and the industry to his experiences with QFin and thinks that one of the best things any prospective trader can do is join the club. Feel free to reach out to him for a chat or advice about careers in trading via any of the his socials listed below.",pastRoles:"",github:"https://github.com/domsaut",linkedin:"https://www.linkedin.com/in/domenico-sauta/",website:"https://domsaut.github.io/",twitter:"",facebook:"",email:"past-president@qfinuwa.com",image:$})}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)(Y,{name:"Jonathan Choong",title:"Tresurer - 2021",desc:"Jonathan was the Treasurer for QFin in 2021. He was a Bachelor of Philosophy (Hons) student that majored in Chemical Engineering and Computer Science. As one of the founding members, he enjoyed working on the club's original branding and marketing, recruitment of members, and securing early sponsors/grants for club events. Although pursuing a career in Chemical Engineering, he loved the conversations made possible by QFin's community, connecting with other students who also shared similar programming interests and ambitions. Jonathan hopes QFin will continue to cultivate its collaborative community such that students can discover how computer and data sciences can be applied in a range of industries and fields.",pastRoles:"",github:"https://github.com/jonathanjchoong",linkedin:"https://www.linkedin.com/in/jonathanjchoong/",website:"",twitter:"",facebook:"",email:"",image:ee})})]})]})},ne=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"Sponsor",children:[Object(F.jsx)("div",{className:"Sponsor-logo-container",children:e.logo.length>0&&Object(F.jsx)("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)("img",{className:"Sponsor-logo",src:e.logo,alt:e.name})})}),Object(F.jsx)("h2",{className:"Sponsor-name",children:e.name}),Object(F.jsxs)("p",{className:"Sponsor-desc",children:[" ",Object(F.jsx)("b",{children:"Description"}),": ",e.desc]}),e.website.length>5&&Object(F.jsxs)("p",{className:"Sponsor-website",children:[Object(F.jsx)("b",{children:"Sponsor Site"}),": ",Object(F.jsxs)("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",children:[" ",e.name," "]})]})]})})},ie=n.p+"static/media/IMCLogo.9a83c43f.png",ae=n.p+"static/media/JaneStreetLogo2Inverted.6aebcfa5.png",se=n.p+"static/media/SIGLogoInverted.e00149be.png",re=n.p+"static/media/OptiverInverted.d8022ba0.png",ce=n.p+"static/media/QFin Sponsorship Tiers.44146c13.pdf",oe=function(){return Object(F.jsxs)("div",{className:"page",children:[Object(F.jsx)("h1",{className:"title",children:"QFin's 2022 Sponsors"}),Object(F.jsx)("p",{style:{textAlign:"center"},className:"content",children:"QFin's Sponsors for 2022, providing us with financial support to run our events and projects throughout the year."}),Object(F.jsx)("p",{className:"content",style:{textAlign:"center",fontWeight:"bold",margin:"10px"},children:Object(F.jsx)("a",{href:ce,download:"QFin Sponsorship Tiers",children:"Our Sponsorship Tiers"})}),Object(F.jsxs)("div",{className:"SponsorsContainer",children:[Object(F.jsx)("hr",{}),Object(F.jsx)("h2",{className:"Sponsor-type",style:{fontSize:"3rem"},children:"Platinum Sponsor"}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsx)("div",{className:"PlatinumSponsor",children:Object(F.jsx)(ne,{name:"IMC Trading",logo:ie,desc:"Our Platinum tier sponsor is IMC Trading, a leading proprietary trading firm globally and a key market maker in various products listed on exchanges throughout the world. As a pathfinder in advanced technology, IMC values expertise and creativity in its workplace, and takes pride in creating an open culture where great ideas thrive. ",website:"https://www.imc.com/ap/"})})}),Object(F.jsx)("hr",{}),Object(F.jsx)("h2",{className:"Sponsor-type",children:"Gold Sponsors"}),Object(F.jsx)(q.a,{duration:2e3,triggerOnce:"true",children:Object(F.jsxs)("div",{className:"GoldSponsors",children:[Object(F.jsx)(ne,{name:"Jane Street Capital",logo:ae,desc:"Jane Street is one of the largest ETF liquidity providers in the world and excels at executing large trades with minimal market impact.",website:"https://www.janestreet.com/"}),Object(F.jsx)(ne,{name:"Susquehanna International Group",logo:se,desc:"SIG is a global quantitative trading firm with a broad presence in the market, specialising in trading with quantitative research and innovative technology. ",website:"https://sig.com/"}),Object(F.jsx)(ne,{name:"Optiver",logo:re,desc:"Optiver is one of the oldest market making institutions dedicated to making markets more liquid and efficient by providing competitive bid-ask prices across a range of financial products.",website:"https://www.optiver.com/"})]})})]})]})},le=function(){return Object(F.jsx)("div",{className:"page",children:Object(F.jsx)("h1",{className:"title",children:"QFin Sign Up"})})},de=n(22),he=n.p+"static/media/UWA_logo.107767fe.svg",me=function(e){var t=e.size,n=(e.color,e.className),i=e.alt;return Object(F.jsx)("img",{src:he,alt:i,width:t,height:t,className:n})},je=[{Logo:f.c,id:"github-img",href:"https://github.com/QFinUWA"},{Logo:f.e,id:"linkedin-img",href:"https://www.linkedin.com/company/qfin-uwa/"},{Logo:de.a,id:"discord-img",href:"https://discord.gg/pzfasHAFAn"},{Logo:f.b,id:"facebook-img",href:"https://www.facebook.com/QFinUWA/"},{Logo:me,id:"uwa-img",href:"https://www.uwastudentguild.com/clubs/qfin-uwa"}],be=function(){"undefined"!==typeof window&&(window.location.href="mailto:admin@qfinuwa.com")},pe=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("footer",{className:"footer",children:[Object(F.jsxs)("div",{className:"footer-content",children:[Object(F.jsx)("h2",{id:"footer-header",children:"Contact Us"}),Object(F.jsxs)("p",{children:[Object(F.jsx)("button",{onClick:be,children:"Email Us"}),"  ",Object(F.jsx)("br",{}),"admin@qfinuwa.com"]}),Object(F.jsx)("div",{className:"footer-icons",children:je.map((function(e){return Object(F.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:Object(F.jsx)(e.Logo,{className:"link-photos",id:null===e||void 0===e?void 0:e.id})})}))})]}),Object(F.jsx)("div",{children:Object(F.jsxs)("p",{className:"content",style:{textAlign:"center",margin:"2px 0"},children:["Website created with \u2665 (and React.js) by ",Object(F.jsx)("a",{href:"https://github.com/JakeLDev",target:"_blank",rel:"noreferrer",children:"Jake Lyell"})," and ",Object(F.jsx)("a",{href:"https://github.com/cookies-xor-cream",target:"_blank",rel:"noreferrer",children:"Arya Gerami Zadegan"})]})})]})})},ge=n.p+"static/media/QFin LinkedIn Banner Thinner.d05b6b01.png",ue=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(x.b,{to:"/home",children:Object(F.jsx)("img",{className:"banner",src:ge,alt:"QFin Banner"})})})},fe=O.a.div(h||(h=Object(u.a)(["\n   position: fixed;\n   bottom: 50px;\n   height: 0px;\n   right: 10px;\n   font-size: 2.5rem;\n   z-index: 1;\n   cursor: pointer;\n   color: #24CC54;\n"]))),xe=function(){var e=Object(m.useState)(!1),t=Object(g.a)(e,2),n=t[0],i=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>200?i(!0):e<=200&&i(!1)})),Object(F.jsx)(fe,{children:Object(F.jsx)(f.f,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"}})})};var Oe=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(x.a,{children:[Object(F.jsx)(ue,{}),Object(F.jsx)(S,{}),Object(F.jsxs)(P.c,{children:[Object(F.jsx)(P.a,{path:"/",element:Object(F.jsx)(Q,{})}),Object(F.jsx)(P.a,{path:"/qfin-website",element:Object(F.jsx)(Q,{})}),Object(F.jsx)(P.a,{path:"/home",element:Object(F.jsx)(Q,{})}),Object(F.jsx)(P.a,{path:"/about",element:Object(F.jsx)(A,{})}),Object(F.jsx)(P.a,{path:"/events",element:Object(F.jsx)(I,{})}),Object(F.jsx)(P.a,{path:"/projects",element:Object(F.jsx)(G,{})}),Object(F.jsx)(P.a,{path:"/sponsors",element:Object(F.jsx)(oe,{})}),Object(F.jsx)(P.a,{path:"/team",element:Object(F.jsx)(te,{})}),Object(F.jsx)(P.a,{path:"/sign-up",element:Object(F.jsx)(le,{})})]}),Object(F.jsx)(xe,{})]}),Object(F.jsx)(pe,{})]})};p.a.render(Object(F.jsx)(j.a.StrictMode,{children:Object(F.jsx)(Oe,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e704030d.chunk.js.map