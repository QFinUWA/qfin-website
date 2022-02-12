import React from 'react';
import Sponsor from '../../components/Sponsor';
import IMCLogo from '../../components/assets/sponsor-images/IMCLogo.png';
import JaneStreetLogo from '../../components/assets/sponsor-images/JaneStreetLogo.png';
import JaneStreetLogo2 from '../../components/assets/sponsor-images/JaneStreetLogo2.png';
import SIGLogo from '../../components/assets/sponsor-images/SIGLogo.png';
  
const Sponsors = () => {
  return (
    <div className="page">
      <h1 className="title">QFin's 2022 Sponsors</h1>
      <div className="SponsorsContainer">
      <hr />
      <h2 className="Sponsor-type" style={{fontSize:"3rem"}}>Platinum Sponsor</h2>
        <div className="PlatinumSponsor">
          <Sponsor 
          name="IMC Trading"
          logo={IMCLogo}
          desc="test"
          website="https://www.imc.com/ap/"/>
        </div>
        <hr />
        <h2 className="Sponsor-type">Gold Sponsors</h2>
        <div className="GoldSponsors">
          <Sponsor
          name="Jane Street Capital"
          logo={JaneStreetLogo2}
          desc="test"
          website="https://www.janestreet.com/"/>

          <Sponsor
          name="Susquehanna International Group"
          logo={SIGLogo}
          desc="test"
          website="https://sig.com/"/>

        </div>
        {/* <hr />
        <h2 className="Sponsor-type">Silver Sponsors</h2>
        <div className="SilverSponsors"></div> */}
      </div>
    </div>
  );
};
  
export default Sponsors;