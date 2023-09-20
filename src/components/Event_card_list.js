import Event_data from "../data/Event_data";
import EventCard from "./Event_card";

const EventCardList = () => {
  return (
    <>
      {Event_data.map((categoryData, index) => (
        <div key={index}>
          <div className="event-category-title-box title">
            <p>{categoryData.category}</p>
          </div>
          <div className="event-list">
            {categoryData.data.map((event, eventIndex) => (
              <EventCard key={eventIndex} event={event} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCardList;

// {showModel && <EventModel setshowModel = {setshowModel} />}
