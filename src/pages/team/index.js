
import React from 'react';
import Person from '../../components/Person';

import Jake from '../../components/assets/portraits/Jake.jpg';
import Jatin from '../../components/assets/portraits/Jatin.jpg';
import Kane from '../../components/assets/portraits/Kane.jpg';
import Jade from '../../components/assets/portraits/Jade.jpg';
import Henry from '../../components/assets/portraits/Henry.jpg';
// import Dom from '../../components/assets/portraits/DomSauta.jpg';
// import Jonathan from '../../components/assets/portraits/JonathanChoong.jpg';

const Teams = () => {
  return (
    <div className="page">
      <h1 className="title">2022 QFin Exec Team</h1>
      <div className="TeamContainer">
        <Person name="Jatin Poonia"
          title="President"
          desc="Jatin is the President of QFin UWA for 2022. He was a member of QFin in 2021 where he fulfilled responsibilities as a Vice President. Jatin manages the club focusing on making decision that will advance the clubs position in UWA and benefit its members as much as possible. He is studying the bachelor of commerce, majoring in Finance and plans to extend his knowledge to prepare himself for the workforce."
          pastRoles="2021 Vice President"
          github=""
          linkedin="https://www.linkedin.com/in/jatin-poonia-528a441a2/"
          twitter=""
          facebook=""
          email="president@qfinuwa.com"
          image={Jatin} /> 
        <Person name="Kane Alexander"
          title="Vice President"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Director of Trading"
          github="https://github.com/Kanealex"
          linkedin="https://www.linkedin.com/in/kane-alexander-08131b216/"
          twitter=""
          facebook=""
          email="vice-president@qfinuwa.com"
          image={Kane} />
        <Person name="Jake Lyell"
          title="Director of Trading"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the trading team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Trading Team Member"
          github="https://github.com/JakeLDev"
          linkedin="https://www.linkedin.com/in/jake-lyell/"
          twitter="https://twitter.com/JakeLDev"
          facebook=""
          email="director-of-trading@qfinuwa.com"
          image={Jake} />
        <Person name="Jade Sauta"
          title="Secretary"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Secretary"
          github=""
          linkedin=""
          twitter=""
          facebook=""
          email="admin@qfinuwa.com"
          image={Jade} />
        <Person name="Henry Miao"
          title="Treasurer"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Committee Member"
          github=""
          linkedin="https://www.linkedin.com/in/henry-miao/"
          twitter=""
          facebook=""
          email="treasurer@qfinuwa.com"
          image={Henry} />
      </div>
      <h2 className="subtitle">Past executives</h2>
      <div className="TeamContainer">
        <Person name="Dom Sauta"
          title="President - 2021"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles=""
          github=""
          linkedin="https://www.linkedin.com/in/domenico-sauta/"
          twitter=""
          facebook=""
          email="past-president@qfinuwa.com"
          image={Jake} /> 
        <Person name="Jonathan Choong"
          title="Tresurer - 2021"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles=""
          github=""
          linkedin="https://www.linkedin.com/in/jonathanjchoong/"
          twitter=""
          facebook=""
          email=""
          image={Jake} />
      </div>
    </div>
  );
};

export default Teams;