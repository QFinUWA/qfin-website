import Project from '../../components/Project';
// import Project from '../../components/Project';
import "./Project.css"

import React from 'react';

import RESISTANCE from '../../components/assets/Resistance.png';

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
            image="" 
            desc="This Project will be focused on the theory of mean reversion. Teams will be given a set of historical data and will be tasked with finding the optimal parameters for a mean reversion model."
            tools="Python, Pandas, Vectorbt"
            repolink="TBD" />        
          </div>
        <div className="ProjectYear">
          <h2 className="ProjectYearTitle">2021</h2>
          {/* Semester 2 */}
          <Project title="Momentum Trading"
            image="" 
            desc="This project was based on the concept of momentum trading"
            tools="Python, Pandas"
            repolink="https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester2-Momentum-Trading" />
          {/* Semester 1 */}
          <Project title="Pairs Trading"
            image="" 
            desc="This project was based on the concept of pairs trading"
            tools="Python, Quant Connect"
            repolink="https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester1-Pairs-Trading" />
          <Project title="“The Resistance” Card Game Artificial Intelligence Agent"
            image={RESISTANCE}
            desc= "Researched and developed a game-playing Artificial Intelligence agent to play the card game “The Resistance” to compete in a tournament at UWA. We created an agent that utilizes Bayes’ Rule for calculating probabilities in a Bayesian, imperfect information game."
            tools="Python"
            repolink="https://github.com/JakeLDev/The-Resistance-AI-CITS3001"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;