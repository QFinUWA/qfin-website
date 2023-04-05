import React from 'react';
// import Card from '../../components/Card';
// import Container from '../../components/Card/Container';

const About = () => {
  return (
    <div className="page">
      <h1 className="title">What is QFin?</h1>
      <h2 className="content">History of QFin</h2>
      <p className="content">QFin is the only quantitative finance club at UWA. Our main goals are to provide
                              a platform for students to gain pracical experience in the field of algorithmic and 
                              statistical trading, help prepare students for a career in the industry and to created
                              an inclusive environment for people with a common interest in mathematics and finance. </p>
      <h2 className="content">What does QFin do?</h2>
      <p className="content">QFin and our industry partners run workshops that aim to upskill students in the field of quantitative
                              finance, as well as connect students to industry recruiters and experts. We also run semester-long projects
                              through our Trading Team, who design and backtest real algorithmic trading strategies, and present to industry.</p>
      <br></br>

      {/* <h3 className="content">Container test</h3>
      <Container>
        <Card title="swag" id="card-1" text="Wowza"/>
        <Card title="swag2" text="Wowza2"/>
        <Card title="swag3" text="Wowza3"/>
        <Card title="swag4" text="Wowza4"/>
      </Container> */}
    </div>
  );
};
  
export default About;