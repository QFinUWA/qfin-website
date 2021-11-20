import React from 'react';
import Card from '../../components/Card';
import Container from '../../components/Card/Container';

const About = () => {
  return (
    <div className="page">
      <h1 className="title">What does QFin do?</h1>
      <p className="content">QFin be a club tho</p>
      <p className="content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <p className="content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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