import React from 'react';
  
const Home = () => {
  return (
    <div className="page">
      <h1 className="title">Welcome to QFin</h1>
      <p className="content">Quantitative Finance (QFin) UWA is a mathematical finance and financial technology club that affiliated with the University of Western Australia’s Societies Council in early 2021. At the time of affiliation, our 3 core objectives as a student run organisation were:</p>
        <ul>
        <li className="content">To provide a platform for interested individuals to get practical experience in the field of algorithmic and statistical trading</li>
        <li className="content">To demystify the quantitative finance industry and prepare students for a career in the field</li>
        <li className="content">To create an inclusive environment for students with a common interest in mathematics and finance to meet one another </li>
        </ul>
      <p className="content">QFin operates at the intersection of the EMS and Commerce faculty, and as such brings these students from different backgrounds together. We combine mathematics, finance, economics, engineering, computer science and data science to solve complicated problems relating to the financial markets.</p>
      <div className='content'>
        <p className="content2">QFin hosts Quantitative Finance-based events and runs algorithmic trading projects for our trading team. Read more about these on our website! </p>
      </div>
      {/* <div className="card" style={{width:"70%", margin:"20px auto", borderRadius:"5px", backgroundColor:"rgb(63,63,63)", padding:"5px"}}>
        <p className="content1" style={{textAlign:"center",fontWeight:"bold"}}>Are you interested in helping run events and being more involved with QFin? We are now taking applications for Ordinary Committee Members!</p>
        <p className="content1" style={{textAlign:"center"}}>Applications close 11:59PM Sunday, March 6th</p>
        <p className="content1" style={{textAlign:"center"}}>OCM Description: <a href='https://bit.ly/3AjTdH8' target="_blank" rel="noreferrer">Ordinary Committee Member</a></p>
        <p className="content1" style={{textAlign:"center"}}>Application link: <a href='https://bit.ly/3xtVL3E' target="_blank" rel="noreferrer">Google Form</a></p>
      </div> */}

      </div>
  );
};
  
export default Home;