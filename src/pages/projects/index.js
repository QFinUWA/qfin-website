import Project from '../../components/Projects';
import "./Project.css"

import React from 'react';
  
const Projects = () => {
  return (
    <div className="page">
      <h1 className="title">QFin Projects</h1>
      <p className="content">QFin's trading team is tasked with completing projects devised by the Director of Trading each semester. These projects are based around the core concepts of quantitative analysis and mathematical theory.</p>
      <div className="ProjectContainer">
        <div className="ProjectYear">
          <h2 className="ProjectYearTitle">2022</h2>
          Semester 1
          <Project  title="Momentum Trading"
                    desc="This project was based on the concept of momentum trading"
                    tools="Python, Pandas"
                    results="'Project report link'"
                    repo="'Project repo links'"/>
          Semester 2          
          <Project />
        </div>
        <div className="ProjectYear">
      <h2 className="ProjectYearTitle">2021</h2>
          <Project />
          <Project />
        </div>
      </div>
    {/* 
    <ProjectContainer>
      <ProjectYear>
        <Project>
        <Project>
      </ProjectYear>
      <ProjectYear>
        <Project>
        <Project>
      </ProjectYear>
    </ProjectContainer>
    
    
    
    
    */}
    </div>
  );
};
  
export default Projects;