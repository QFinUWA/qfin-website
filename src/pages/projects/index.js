import Project from '../../components/Project';
import "./Project.css"

import React from 'react';

const Projects = () => {
  return (
    <div className="page">
      <h1 className="title">QFin Projects</h1>
      <p className="content">QFin's trading team is tasked with completing projects devised by the Director of Trading each semester. 
                            These projects are based around the core concepts of quantitative analysis and mathematical theory.
                            </p>
      <div className="ProjectContainer">
        <div className="ProjectYear">
          <h2 className="ProjectYearTitle">2022</h2>
          {/* Semester 2 maybe exclude
          <Project title="TBD"
            desc="TBD"
            tools="TBD"
            results="'TBD'"
            repo="TBD" /> */}
          Semester 1
          <Project title="Mean Reversion"
            desc="This Project will be focused on the theory of mean reversion. Teams will be given a set of historical data and will be tasked with finding the optimal parameters for a mean reversion model."
            tools="Python, Pandas, Vectorbt"
            results="TBD"
            repo="TBD" />        
          </div>
        <div className="ProjectYear">
          <h2 className="ProjectYearTitle">2021</h2>
          Semester 2 {/* maybe exclude */}
          <Project title="Momentum Trading"
            desc="This project was based on the concept of momentum trading"
            tools="Python, Pandas"
            results="'Project report link'"
            repo="https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester2-Momentum-Trading" />
          Semester 1
          <Project title="Pairs Trading"
            desc="This project was based on the concept of pairs trading"
            tools="Python, Quant Connect"
            results="'Project report link'"
            repo="https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester1-Pairs-Trading" />

        </div>
      </div>
    </div>
  );
};

export default Projects;