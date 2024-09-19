import { useEffect, useState } from "react";
import { fetchParticipants } from "../../services/app";

const Event = ({ event }) => {
  const [participants, setParticipants] = useState([]);

  const getParticipants = async (eventId) => {
    try {
      const { participants } = await fetchParticipants(eventId);
      setParticipants(participants);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      key={event._id}
    >
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      {/* <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
      <p>Organizer: {event.organizer}</p> */}
      <div
        style={{
          padding: "0 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          type="button"
          onClick={() => {
            getParticipants(event._id);
          }}
        >
          View
        </button>
        <button type="button">Register</button>
      </div>
    </li>
  );
};

export default Event;
