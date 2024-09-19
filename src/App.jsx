import { useEffect, useState } from "react";
import logo from "./assets/logo-color.svg";
import { fetchEvents } from "../services/app";
import Event from "./components/Event";

function App() {
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
      <div>
        <a href="https://www.eliftech.com/" target="_blank">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <h1
        style={{
          paddingLeft: "60px",
        }}
      >
        Events
      </h1>
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
    </>
  );
}

export default App;
