import Project from '../../components/Project';

import React from 'react';

import MOMENTUM from '../../components/assets/project-images/Momentum.png';
import PAIRS from '../../components/assets/project-images/Pairs.png';

import { Fade } from "react-awesome-reveal";


const Projects = () => {
  return (
    <div className="page">
      <h1 className="title">QFin Trading Team Projects</h1>
      <p className="content">Each Semester, the Executive Director of Trading devises a project for the QFin Trading Teams to complete throughout
                            the semester. The project is based around the core concepts of quantitative analysis and mathematical theory.
                            So far, the projects have primarily consisted of backtesting trading strategies against historical stock and crypto data,
                            with the goal of determining the best trading strategy across a range of stocks and crypto assets and optimizing that strategy.
      
      <div className="card" style={{width:"70%", margin:"20px auto", borderRadius:"5px", backgroundColor:"rgb(63,63,63)", padding:"5px"}}>
        <p className="content1" style={{textAlign:"center",fontWeight:"bold"}}>Do any of these Projects interest you? Applications are now open for 2022's Trading Team!</p>
        <p className="content1" style={{textAlign:"center"}}>Applications close 11:59PM Wednesday, March 2nd</p>
        <p className="content1" style={{textAlign:"center"}}>Trading Team Description: <a href='https://bit.ly/36H8o0b'>Trading Team Member</a></p>
        <p className="content1" style={{textAlign:"center"}}>Application link: <a href='https://bit.ly/36H8t3Z'>Google Form</a></p>
      </div>

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
          <Fade duration={2000} triggerOnce="true">
          <Project title="Mean Reversion - Semester 1"
            image="" // Add image of workshop?
            DOT="Jake Lyell"
            DOTlink="https://www.linkedin.com/in/jake-lyell/"
            desc="This Project will be focused on the theory of mean reversion. Teams will be given a set of historical data and will be tasked with finding the optimal parameters for a mean reversion model."
            tools="Python, Pandas, Custom Backtesting Module"
            repolink="TBD" />     
          </Fade>   
        </div>
        {/* <hr className='Section-separator' /> */}
        {/* <hr></hr> */}
        <div className="ProjectYear">
          <h2 className="ProjectYearTitle">2021</h2>
          {/* Semester 2 */}
          {/* <hr className='Sub-separator' /> */}
          <Fade duration={2000} triggerOnce="true">
          <Project title="Momentum Trading - Semester 2"
            image={MOMENTUM}
            DOT="Kane Alexander"
            DOTlink="https://www.linkedin.com/in/kane-alexander-08131b216/"
            desc="This project was based on the Quantitative concept of Momentum Trading. 
                  The goal of this project was to determine the best trading strategy based on stock price momentum for a set of historical data of popular cryptocurrencies.
                  The project was completed by 4 teams of 3 people."
            tools="Python, Pandas, Gemini Modules"
            repolink="https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester2-Momentum-Trading" />
          </Fade>
          {/* Semester 1 */}
          {/* <hr className='Sub-separator' /> */}
          <Fade duration={2000} triggerOnce="true">
          <Project title="Pairs Trading - Semester 1"
            image={PAIRS}
            DOT="Kane Alexander"
            DOTlink="https://www.linkedin.com/in/kane-alexander-08131b216/"
            desc="This project was based on the concept of Pairs Trading. The goal of this project was to research potential stock pairs and then design, implement, and backtest an algorithm to trade the pairs. The project was completed by 3 teams of 4 people."
            tools="Python, Quant Connect"
            repolink="https://github.com/QFinUWA/Project-Results/tree/main/2021/Semester1-Pairs-Trading" />
          </Fade>
          {/* <hr className='Sub-separator' /> */}
          {/* <hr className='Main-separator' /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;