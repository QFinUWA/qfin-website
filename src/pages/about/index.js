import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Card/Container';

const About = () => {
  return (
    <div className="page">
      <h1 className="title">What is QFin?</h1>
      <h2 className="content">History of QFin</h2>
      <p className="content">QFin is a club made by dom in 2020</p>
      <p className="content">Talk about what quant is and what we want to teach/accomplish in terms of awareness of quant</p>
      <h2 className="content">What does QFin do?</h2>
      <p className="content">Talk about events, projects and sponsors</p>
      <br></br>

      <h3 className="content">Container test</h3>
      <Container>
        <Card title="swag" id="card-1" text="Wowza"/>
        <Card title="swag2" text="Wowza2"/>
        <Card title="swag3" text="Wowza3"/>
        <Card title="swag4" text="Wowza4"/>
      </Container>
    </div>
  );
};
  
export default About;