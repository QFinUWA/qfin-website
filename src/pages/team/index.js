
import React from 'react';
import Person from '../../components/Person';

import "./team.css"

import Jake from '../../components/assets/portraits/JakeLyell.jpg';

const Teams = () => {
  return (
    <div className="page">
      <h1 className="title">Meet the QFin Team</h1>
      <div className="TeamContainer">
        <Person name="Jake Lyell"
          title="Executive Director of Trading"
          // desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          // repo="wouldnt u like to know"
          image={Jake} />
        <Person name="Jake Lyell"
          title="Executive Director of Trading"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          repo="wouldnt u like to know"
          image={Jake} />
        <Person name="Jake Lyell"
          title="Executive Director of Trading"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          repo="wouldnt u like to know"
          image={Jake} />
        <Person name="Jake Lyell"
          title="Executive Director of Trading"
          desc="Jake is the Executive Director of Trading at QFin. He is responsible for the overall direction of the team, and oversees the completion of the trading team's projects. He is also responsible for the development of QFin's website, trading team projects, and proprietary software. Jake is studying a double major in Computer Science and Data Science and plans to pursure honours in Computer Science and Software Engineering in 2022."
          repo="wouldnt u like to know"
          image={Jake} />
      </div>
    </div>
  );
};

export default Teams;