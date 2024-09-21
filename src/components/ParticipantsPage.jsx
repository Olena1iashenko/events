import { useEffect, useState } from "react";
import { fetchEventById, fetchEventParticipants } from "../../services/app";
import { useParams } from "react-router-dom";
import Participant from "./Participant";

const ParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);
  const [event, setEvent] = useState({});
  const { eventId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getParticipants = async () => {
      try {
        const response = await fetchEventParticipants(eventId, searchQuery);
        setParticipants(response);
      } catch (error) {
        console.log(error);
      }
    };

    getParticipants();
  }, []);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await fetchEventById(eventId);
        setEvent(data);
      } catch (error) {
        setError(`Error fetching event with ID ${eventId}`);
      }
    };

    getEvent();
  }, []);

  const handleSearch = async () => {
    const response = await fetchEventParticipants(eventId, searchQuery);
    setParticipants(response);
    setSearchQuery("");
  };

  return (
    <>
      <h1
        style={{
          paddingLeft: "60px",
        }}
      >
        "{event.title}" participants
      </h1>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name or email"
        style={{
          margin: "10px 30px",
          width: "300px",
        }}
      />
      <button onClick={handleSearch}>Search</button>

      {participants.length > 0 ? (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            padding: "20px",
          }}
        >
          {participants.map((participant) => (
            <Participant participant={participant} key={participant._id} />
          ))}
        </ul>
      ) : (
        <p>No participants found</p>
      )}
    </>
  );
};

export default ParticipantsPage;
