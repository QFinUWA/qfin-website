import React from 'react';
import Event from '../../components/Event';
import Poker2021 from "../../components/assets/event-images/QFinPoker2021.jpg";
import PythonWorkshop from "../../components/assets/event-images/PythonWorkshop1.jpg";
import eTorotradeathon from "../../components/assets/event-images/tradeathonSMIFeToro.jpg";
import studynightECOMS2021 from "../../components/assets/event-images/studynightECOMS21.png";
import ODay2022 from "../../components/assets/event-images/Oday2022.jpg";
import PokerNight2022Sem1 from "../../components/assets/event-images/PokerNight2022Sem1.png";
import { Fade } from "react-awesome-reveal";

const Events = () => {
  return (
    <div className="page">
      <h1 className="title">QFin Events</h1>
      <p className="content" style={{textAlign:"center",padding:"15px 0px"}}>Events that QFin has run since the start of the club</p>
      <div className="EventsContainer"></div>
        <div className="UpcomingEvents">
          <h2 className="EventYearTitle">Upcoming Events</h2>
          <Fade duration={2000} triggerOnce="true">
          <Event title="QFin x Maths Union Poker Night 2022"
                  image={PokerNight2022Sem1}
                  date="5th of May 2022"
                  desc="An upgraded version of last year's event, with a bigger prize pool and new venue!"
                  host=""
                  sponsor="SIG"
                  attendees=""
                  linkedin=""
                  facebook="" />
          </Fade>
        </div>
        <hr></hr>
        {/* <hr className='Section-separator'></hr> */}
        <div className="EventYear">
          <h2 className="EventYearTitle">2022</h2>
          <Fade duration={2000} triggerOnce="true">
          <Event title="UWA O-Day 2022"
            image={ODay2022}
            date="25th of February 2022"
            desc="Hosted a stall at UWA O-Day 2022 to advertise our club and sign up new members!"
            host=""
            sponsor=""
            attendees=""
            linkedin=""
            facebook="https://www.facebook.com/QFinUWA/posts/374655521328743" />
          </Fade>
        </div>
        <div className="EventYear">
          <h2 className="EventYearTitle">2021</h2>
          <Fade duration={2000} triggerOnce="true">
          <Event title="Algorithmic Trading x Python Workshop"
            image={PythonWorkshop}
            date="5th of October 2021"
            desc="A Workshop for QFin members to learn how to use Python to develop trading strategies by backtesting on historical data."
            host="Kane Alexander"
            sponsor=""
            attendees="20"
            linkedin="https://www.linkedin.com/posts/qfin-uwa_yesterday-kane-alexander-our-director-of-activity-6848756902684364801-JvL7"
            facebook="https://www.facebook.com/QFinUWA/posts/273622691432027" />     
          </Fade>
          <Fade duration={2000} triggerOnce="true">     
          <Event title="QFin x SMIF Trade-a-thon"
            image={eTorotradeathon}
            date="2nd of September 2021"
            desc="This event was a real life practical trading competition that helped participants learn how to trade and gave them a chance to meet like-minded students. Members got to experience what it's like to be a Trader on the fast-paced trading floor. They traded virtually in the Forex markets and the winner received a $500 prize."
            host=""
            sponsor="eToro"
            attendees="75"
            linkedin="https://www.linkedin.com/posts/qfin-uwa_last-week-i-had-the-pleasure-of-speaking-activity-6841310823588212736-PFgA"
            facebook="https://www.facebook.com/QFinUWA/posts/252664786861151" />
          </Fade>
          <Fade duration={2000} triggerOnce="true">
          <Event title="QFin x ECOMS Study Night Event"
            image={studynightECOMS2021}
            date="25th of May 2021"
            desc="In this event, we had presentations from previous high performing students and had tutors walking around and providing individualised assistance to students requiring help with their studies."
            host=""
            sponsor=""
            attendees="20"
            linkedin=""
            facebook="https://fb.me/e/2lisyfaM4" />
          </Fade>
          <Fade duration={2000} triggerOnce="true">
          <Event title="QFin x Maths Union Poker Night 2021"
            image={Poker2021}
            date="20th of May 2021"
            desc="QFin also collaborated with the UWA Mathematics Union to bring a Poker Night to campus. It was a major social event for the club in its first ever semester. The club chose to include poker not because we endorse gambling, but due to its significance in many Quantitative Finance firms. ​​An example is Susquehanna International Group (SIG) - a major firm in the industry that holds poker at its core for social outings."
            host=""
            sponsor=""
            attendees="60"
            linkedin=""
            facebook="https://www.facebook.com/QFinUWA/posts/168551088605855?__cft__[0]=AZX12oedX1bZrHyrIrQ9IAcMbjbfxG9gxeSlxIARF-SFm9LIprIgFZttJUnaVeNbeTMXzUsZwEsau7O_8oG9cxQstDPBOu7b2ZR2WjuT8Jxr5rIp4US4tkWcot3BQ1qV_J29eP2gbndzIeXEZMMZj8Li&__tn__=%2CO%2CP-R" />
          </Fade>
          {/* <Event title=""
            image=""
            date=""
            desc=""
            host=""
            sponsor=""
            attendees=""
            linkedin=""
            facebook="" /> */}
        </div>
    </div>
  );
};
  
export default Events;