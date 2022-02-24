import React from 'react';
import Sponsor from '../../components/Sponsor';
import IMCLogo from '../../components/assets/sponsor-images/IMCLogo.png';
import JaneStreetLogo from '../../components/assets/sponsor-images/JaneStreetLogo.png';
import JaneStreetLogo2 from '../../components/assets/sponsor-images/JaneStreetLogo2.png';
import SIGLogo from '../../components/assets/sponsor-images/SIGLogo.png';
import OptiverLogo from '../../components/assets/sponsor-images/Optiver.png';
import SponsorTiers from "../../components/assets/Documents/QFin Sponsorship Tiers.pdf";

import { Fade } from "react-awesome-reveal";

const Sponsors = () => {
  return (
    <div className="page">
      <h1 className="title">QFin's 2022 Sponsors</h1>
      <p style={{textAlign:"center"}} className="content">QFin's Sponsors for 2022, providing us with financial support to run our events and projects throughout the year.</p>
      <a href={SponsorTiers} download="QFin Sponsorship Tiers"><p className="content" style={{textAlign:"center", fontWeight:"bold", margin:"10px"}}>Our Sponsorship Tiers</p></a>
      <div className="SponsorsContainer">
      <hr />
      <h2 className="Sponsor-type" style={{fontSize:"3rem"}}>Platinum Sponsor</h2>
      <Fade duration={2000} triggerOnce="true">
        <div className="PlatinumSponsor">
          <Sponsor 
          name="IMC Trading"
          logo={IMCLogo}
          desc="Our Platinum tier sponsor is IMC Trading, a leading proprietary trading firm globally and a key market maker in various products listed on exchanges throughout the world. As a pathfinder in advanced technology, IMC values expertise and creativity in its workplace, and takes pride in creating an open culture where great ideas thrive. "
          website="https://www.imc.com/ap/"/>
        </div>
      </Fade>
        <hr />
        <h2 className="Sponsor-type">Gold Sponsors</h2>
        <Fade duration={2000} triggerOnce="true">
        <div className="GoldSponsors">
          <Sponsor
          name="Jane Street Capital"
          logo={JaneStreetLogo2}
          desc="Jane Street is one of the largest ETF liquidity providers in the world and excels at executing large trades with minimal market impact."
          website="https://www.janestreet.com/"/>

          <Sponsor
          name="Susquehanna International Group"
          logo={SIGLogo}
          desc="SIG is a global quantitative trading firm with a broad presence in the market, specialising in trading with quantitative research and innovative technology. "
          website="https://sig.com/"/>

          <Sponsor
          name="Optiver"
          logo={OptiverLogo}
          desc="Optiver is one of the oldest market making institutions dedicated to making markets more liquid and efficient by providing competitive bid-ask prices across a range of financial products."
          website="https://www.optiver.com/"/>
        </div>
        </Fade>
        {/* <hr />
        <h2 className="Sponsor-type">Silver Sponsors</h2>
        <div className="SilverSponsors"></div> */}
      </div>
    </div>
  );
};
  
export default Sponsors;