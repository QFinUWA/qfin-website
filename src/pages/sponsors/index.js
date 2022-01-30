import React from 'react';
import Sponsor from '../../components/Sponsor';
  
const Sponsors = () => {
  return (
    <div className="page">
      <h1 className="title">QFin's 2022 Sponsors</h1>
      <div className="SponsorsContainer">
        <div className="PlatinumSponsor">
          <h2 className="Sponsor-type">Platinum Sponsor</h2>
          <Sponsor 
          name="IMG"
          logo=""
          desc="test"
          website="siteee"/>
        </div>
      </div>
    </div>
  );
};
  
export default Sponsors;