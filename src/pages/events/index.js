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
                desc="QFin UWA and the UWA Maths Union hosted a"
                linkedin="TBD"
                facebook="TBD" />
        </div>
    </div>
  );
};
  
export default Events;