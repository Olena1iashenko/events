import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <li
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Event date: {new Date(event.eventDate).toLocaleDateString("en-US")}</p>
      <p>Organizer: {event.organizer}</p>
      <div
        style={{
          padding: "0 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/events/${event._id}/participants`}>
          <button type="button">View</button>
        </Link>
        <Link to={`/events/${event._id}/registration`}>
          <button type="button">Register</button>
        </Link>
      </div>
    </li>
  );
};

export default Event;
