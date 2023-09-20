import "../css/Events.css";
import EventCardList from "../components/Event_card_list";
// import bgVideo from "../assets/Video/bgvideo2.mp4";
import Header from "../components/Header";
import React from "react";
import ThreeBackground from "../components/ParticleBackground";

const Events = () => {
  return (
    <>
      <Header />
      <ThreeBackground />
      <div className="event-body mt-10">
        {/* for events title */}
        <div className="event-title">
          <h1 className="event-t title"> EVENTS </h1>
        </div>
        {/* for event card */}
        <div className="event-item">
          <div className="events">
            <EventCardList />
          </div>
        </div>
      </div>
    </>
  );
};
export default Events;
