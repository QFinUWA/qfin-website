
import React from 'react';
import Person from '../../components/Person';

import Zach from '../../components/assets/portraits/Zach small.jpg';
import Lucas from '../../components/assets/portraits/Lucas small.jpg';
import Isaac from '../../components/assets/portraits/Isaac small.jpg';
import Lachy from '../../components/assets/portraits/Lachy small.jpg';
import Luke from '../../components/assets/portraits/Luke small.jpg';

import { Fade } from "react-awesome-reveal";

const Teams = () => {
  return (
    <div className="page" style={{maxWidth:"90%"}}>
      <h1 className="title">2023 QFin Executive Team</h1>
      <p className="content" style={{textAlign:"center",padding:"15px 0px"}}>The current team of Execs in charge of running QFin for 2023</p>
      <div className="TeamContainer">
      <Fade duration={2000} triggerOnce="true">
        <Person name="Zachary Ching"
          title="President"
          desc="Zach is the President of QFin UWA for 2023. He was a member of QFin in 2022 where he fulfilled
                 responsibilities as the Director of Trading. Zach manages the club focusing on making decision that will advance the clubs position in UWA and benefit its members as much as possible. He is studying Data Science and Finance and plans to extend his knowledge to prepare himself for the workforce."
          pastRoles="2022 Director of Trading"
          github=""
          linkedin="https://www.linkedin.com/in/zachary-ching-647a8318b/"
          website=""
          twitter=""
          facebook=""
          email="zachary.ching325@gmail.com"
          image={Zach} />
      </Fade>
      <Fade duration={2000} triggerOnce="true">
        <Person name="Lucas Siciliano"
          title="Vice President"
          desc="Lucas is the Vice President of QFin UWA for 2023. Last year he was a member of the Trading Team where he undertook trading projects. Lucas utilizes his technical and leadership experience to help QFin develop as a leading technology club on campus. He is in his second year of a Mathematics and Statistics degree."
          pastRoles="2022 Trading Team Member"
          github=""
          linkedin="https://www.linkedin.com/in/lucas-siciliano-234b4a252/"
          website=""
          twitter=""
          facebook=""
          email="lucas.sicili@gmail.com"
          image={Lucas} />
        </Fade>
        <Fade duration={2000} triggerOnce="true">
          <Person name="Lachlan Reedy"
            title="Secretary"
            desc="Lachy is the Secretary of QFin UWA in 2023 and is responsible for liasing with stakeholders and maintaining the administrative side of QFin’s affairs. Lachy is majoring in Finance, Economics & Data Science and enjoys diversifying his skill set through learning about quantitative trading."
            pastRoles=""
            github=""
            linkedin="https://www.linkedin.com/in/lachlan-reedy/"
            website=""
            twitter=""
            facebook=""
            email="Lachyreedy@gmail.com"
            image={Lachy} />
        </Fade>
        <Fade duration={2000} triggerOnce="true">
        <Person name="Luke Osborne,"
          title="Treasurer"
          desc="Luke is the Treasurer of QFin UWA for 2023. He performs financial tasks for the club, which includes club bookkeeping, event budgeting, and applying for grants. Luke is also responsible for updating the club’s financial statement and furnishing the Committee with such updates relating to the finances and property of the club. He is majoring in Mathematics and Statistics and Economics through a Bachelor of Philosophy, and is currently pursuing his Honours."
          pastRoles=""
          github=""
          linkedin="https://www.linkedin.com/in/lukeosborneau/"
          website=""
          twitter=""
          facebook=""
          email="lukeosborneau@gmail.com"
          image={Luke} />
        </Fade>
      </div>
      <Fade duration={2000} triggerOnce="true">
        <Person name="Isaac Bergl"
          title="Director of Trading"
          desc="Isaac is the Executive Director of Trading at QFin. He is responsible for the overall direction of the trading team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website and proprietary software. Isaac is studying a double major in Computer Science and Mathematics and achieved first class honours in Transformer-based image detectors."
          pastRoles="Trading Team Member"
          github="https://github.com/itbergl"
          linkedin="https://www.linkedin.com/in/isaac-bergl-2531b81b5/"
          website="https://isaacbergl.com"
          twitter=""
          facebook=""
          email="isaac.bergl@outlook.com"
          image={Isaac} />
      </Fade>
      {/* <h2 className="subtitle">Past executives</h2> */}
      {/* <div className="TeamContainer">
        <Fade duration={2000} triggerOnce="true">
        <Person name="Dom Sauta"
          title="President - 2021"
          desc="Dom is the founder and first president of Quantitative Finance UWA. Alongside the 2021 executive team, he founded QFin as a way to explore an industry he found both mysterious and fascinatingly mathematical. He studied a BPhil (hons) in mathematics & statistics and finance and now works as a graduate trader at a market making firm in Sydney. Dom attests a great deal of knowledge about trading and the industry to his experiences with QFin and thinks that one of the best things any prospective trader can do is join the club. Feel free to reach out to him for a chat or advice about careers in trading via any of the his socials listed below."
          pastRoles=""
          github="https://github.com/domsaut"
          linkedin="https://www.linkedin.com/in/domenico-sauta/"
          website="https://domsaut.github.io/"
          twitter=""
          facebook=""
          email="past-president@qfinuwa.com"
          image={Dom} /> 
        </Fade>
        <Fade duration={2000} triggerOnce="true">
        <Person name="Jonathan Choong"
          title="Tresurer - 2021"
          desc="Jonathan was the Treasurer for QFin in 2021. He was a Bachelor of Philosophy (Hons) student that majored in Chemical Engineering and Computer Science. As one of the founding members, he enjoyed working on the club's original branding and marketing, recruitment of members, and securing early sponsors/grants for club events. Although pursuing a career in Chemical Engineering, he loved the conversations made possible by QFin's community, connecting with other students who also shared similar programming interests and ambitions. Jonathan hopes QFin will continue to cultivate its collaborative community such that students can discover how computer and data sciences can be applied in a range of industries and fields."
          pastRoles=""
          github="https://github.com/jonathanjchoong"
          linkedin="https://www.linkedin.com/in/jonathanjchoong/"
          website=""
          twitter=""
          facebook=""
          email=""
          image={Jon} />
        </Fade>
      </div> */}
    </div>
  );
};

export default Teams;