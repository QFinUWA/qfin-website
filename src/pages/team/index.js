
import React from 'react';
import Person from '../../components/Person';

import Jake from '../../components/assets/portraits/JakeLyell.jpg';
// import Jatin from '../../components/assets/portraits/JatinPoonia.jpg';
// import Kane from '../../components/assets/portraits/KaneAlexander.jpg';
// import Jade from '../../components/assets/portraits/JadeSauta.jpg';
// import Henry from '../../components/assets/portraits/HenryMiao.jpg';
// import Dom from '../../components/assets/portraits/DomSauta.jpg';
// import Jonathan from '../../components/assets/portraits/JonathanChoong.jpg';

const Teams = () => {
  return (
    <div className="page">
      <h1 className="title">2022 QFin Exec Team</h1>
      <div className="TeamContainer">
        <Person name="Jatin Poonia"
          title="President"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Vice President"
          github=""
          linkedin="https://www.linkedin.com/in/jatin-poonia-528a441a2/"
          twitter=""
          email="president@qfinuwa.com"
          image={Jake} /> 
        <Person name="Kane Alexander"
          title="Vice President"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Director of Trading"
          github="https://github.com/Kanealex"
          linkedin="https://www.linkedin.com/in/kane-alexander-08131b216/"
          twitter=""
          email="vice-president@qfinuwa.com"
          image={Jake} />
        <Person name="Jake Lyell"
          title="Executive Director of Trading"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Trading Team Member"
          github="https://github.com/JakeLDev"
          linkedin="https://www.linkedin.com/in/jake-lyell/"
          twitter="https://twitter.com/JakeLDev"
          email="director-of-trading@qfinuwa.com"
          image={Jake} />
        <Person name="Jade Sauta"
          title="Secretary"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Secretary"
          github=""
          linkedin=""
          twitter=""
          email="secretary@qfinuwa.com"
          image={Jake} />
        <Person name="Henry Miao"
          title="Treasurer"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles="2021 Committee Member"
          github=""
          linkedin="https://www.linkedin.com/in/henry-miao/"
          twitter=""
          email="treasurer@qfinuwa.com"
          image={Jake} />
      </div>
      <h2 className="subtitle">Past executives</h2>
      <div className="TeamContainer">
        <Person name="Dom Sauta"
          title="President - 2020"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles=""
          github=""
          linkedin="https://www.linkedin.com/in/domenico-sauta/"
          twitter=""
          email="past-president@qfinuwa.com"
          image={Jake} /> 
        <Person name="Jonathan Choong"
          title="Tresurer - 2020"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          pastRoles=""
          github=""
          linkedin=""
          twitter=""
          email=""
          image={Jake} />
      </div>
    </div>
  );
};

export default Teams;