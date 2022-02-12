import React from 'react';
import Event from '../../components/Event';
import Poker2021 from "../../components/assets/event-images/QFinPoker2021.jpg";
import PythonWorkshop from "../../components/assets/event-images/PythonWorkshop1.jpg";

const Events = () => {
  return (
    <div className="page">
      <h1 className="title">QFin Events</h1>
      <p className="content">Here's some events we've run</p>
      <div className="EventsContainer"></div>
        <div className="EventYear">
          <h2 className="EventYearTitle">2022</h2>
          <Event title="TODO QFin x Maths Union Poker Night 2022"
            image=""
            date="TBA"
            desc="iz pokerr"
            host=""
            sponsor=""
            attendees=""
            linkedin=""
            facebook="" />
        </div>
        <div className="EventYear">
          <h2 className="EventYearTitle">2021</h2>
          <Event title="QFin x Maths Union Poker Night 2021"
            image={Poker2021}
            date="20th of May 2021"
            desc="QFin UWA and the UWA Maths Union hosted a Poker Tournament..."
            host=""
            sponsor=""
            attendees="60"
            linkedin=""
            facebook="https://www.facebook.com/QFinUWA/posts/168551088605855?__cft__[0]=AZX12oedX1bZrHyrIrQ9IAcMbjbfxG9gxeSlxIARF-SFm9LIprIgFZttJUnaVeNbeTMXzUsZwEsau7O_8oG9cxQstDPBOu7b2ZR2WjuT8Jxr5rIp4US4tkWcot3BQ1qV_J29eP2gbndzIeXEZMMZj8Li&__tn__=%2CO%2CP-R" />
          <Event title="Trading Team Introduction Workshop"
            image=""
            date="8th of April 2021 (TODO CONFIRMATION NEEDED)"
            desc="Workshop to teach the trading team about the semester 1 project..."
            host=""
            sponsor=""
            attendees="20"
            linkedin=""
            facebook="" />
          <Event title="QFin x SMIF Trade-a-thon"
            image=""
            date="2nd of September 2021"
            desc="e-toro sponsored event in which we do paper trading..."
            host=""
            sponsor=""
            attendees=""
            linkedin=""
            facebook="" />
          <Event title="Algorithmic Trading x Python Workshop"
            image={PythonWorkshop}
            date="5th of October 2021"
            desc="A Workshop for QFin members to learn how to use Python to develop trading strategies by backtesting on historical data."
            host="Kane Alexander"
            sponsor=""
            attendees="20"
            linkedin="https://www.linkedin.com/posts/qfin-uwa_yesterday-kane-alexander-our-director-of-activity-6848756902684364801-JvL7"
            facebook="https://www.facebook.com/QFinUWA/posts/273622691432027" />
          <Event title=""
            image=""
            date=""
            desc=""
            host=""
            sponsor=""
            attendees=""
            linkedin=""
            facebook="" />
        </div>
    </div>
  );
};
  
export default Events;