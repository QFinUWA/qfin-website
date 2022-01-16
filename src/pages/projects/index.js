import Project from '../../components/Project';

import React from 'react';

import MOMENTUM from '../../components/assets/Momentum.png';
import PAIRS from '../../components/assets/Pairs.png';

const Projects = () => {
  return (
    <div className="page">
      <h1 className="title">QFin Trading Team Projects</h1>
      <p className="content">Each Semester, the Executive Director of Trading devises a project for the QFin Trading Teams to complete throughout
                            the semester. The project is based around the core concepts of quantitative analysis and mathematical theory.
                            So far, the projects have primarily consisted of backtesting trading strategies against historical stock and crypto data,
                            with the goal of determining the best trading strategy across a range of stocks and crypto assets and optimizing that strategy.

      </p>
      <div className="ProjectContainer">
        <div className="ProjectYear">
        {/* <hr className='Main-separator' /> */}
          <h2 className="ProjectYearTitle">2022</h2>
          {/* Semester 2 maybe exclude */}
          {/* <Project title="TBD"
            image=""
            desc="TBD"
            tools="TBD"
            repolink="TBD" /> */}
          <Project title="Mean Reversion - Semester 1"
            image="" // Add image of workshop?
            DOT="Jake Lyell"
            DOTlink="https://www.linkedin.com/in/jake-lyell-8a44b4180/"
            desc="This Project will be focused on the theory of mean reversion. Teams will be given a set of historical data and will be tasked with finding the optimal parameters for a mean reversion model."
            tools="Python, Pandas, Vectorbt"
            repolink="TBD" />        
        </div>
        <hr className='Section-separator' />
        <div className="ProjectYear">
          <h2 className="ProjectYearTitle">2021</h2>
          {/* Semester 2 */}
          {/* <hr className='Sub-separator' /> */}
          <Project title="Momentum Trading - Semester 2"
            image={MOMENTUM}
            DOT="Kane Alexander"
            DOTlink="https://www.linkedin.com/in/kane-alexander-08131b216/"
            desc="This project was based on the Quantitative concept of Momentum Trading. 
                  The goal of this project was to determine the best trading strategy based on stock price momentum for a set of historical data of popular cryptocurrencies.
                  The project was completed by 4 teams of 3 people."
            tools="Python, Pandas, Gemini Modules"
            repolink="https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester2-Momentum-Trading" />
          {/* Semester 1 */}
          {/* <hr className='Sub-separator' /> */}
          <Project title="Pairs Trading - Semester 1"
            image={PAIRS}
            DOT="Kane Alexander"
            DOTlink="https://www.linkedin.com/in/kane-alexander-08131b216/"
            desc="This project was based on the concept of pairs trading"
            tools="Python, Quant Connect"
            repolink="https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester1-Pairs-Trading" />
          {/* <hr className='Sub-separator' /> */}
          {/* <hr className='Main-separator' /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;