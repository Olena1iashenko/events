import { useEffect, useState } from "react";
import { fetchEvents } from "../../services/app";
import Event from "./Event";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const { events } = await fetchEvents();
        setEvents(events);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  return (
    <>
      <h1
        style={{
          paddingLeft: "60px",
        }}
      >
        Events
      </h1>
      {events.length > 0 ? (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            padding: "20px",
          }}
        >
          {events.map((event) => (
            <Event key={event._id} event={event} />
          ))}
        </ul>
      ) : (
        <p>No events found</p>
      )}
    </>
  );
};

export default EventsPage;
