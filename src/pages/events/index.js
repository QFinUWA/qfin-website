import React from 'react';
import Event from '../../components/Event';
import Poker2021 from "../../components/assets/event-images/QFinPoker2021.jpg";

const Events = () => {
  return (
    <div className="page">
      <h1 className="title">QFin Events</h1>
      <p className="content">Here's some events we've run</p>
      <div className="EventsContainer"></div>
        <div className="EventYear">
          <h2 className="EventYearTitle">2021</h2>
          <Event title="QFin x Maths Union Poker Night 2021"
                image={Poker2021}
                date="20th of May 2021"
                desc="QFin UWA and the UWA Maths Union hosted a Poker Tournament "
                linkedin=""
                facebook="https://www.facebook.com/QFinUWA/posts/168551088605855?__cft__[0]=AZX12oedX1bZrHyrIrQ9IAcMbjbfxG9gxeSlxIARF-SFm9LIprIgFZttJUnaVeNbeTMXzUsZwEsau7O_8oG9cxQstDPBOu7b2ZR2WjuT8Jxr5rIp4US4tkWcot3BQ1qV_J29eP2gbndzIeXEZMMZj8Li&__tn__=%2CO%2CP-R" />
        </div>
    </div>
  );
};
  
export default Events;