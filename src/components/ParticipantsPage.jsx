import { useEffect, useState } from "react";
import { fetchEventParticipants } from "../../services/app";
import { useParams } from "react-router-dom";

const ParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    const getParticipants = async () => {
      try {
        const response = await fetchEventParticipants(eventId);
        setParticipants(response);
      } catch (error) {
        console.log(error);
      }
    };

    getParticipants();
  }, []);

  return (
    <>
      <h1> participants</h1>

      {participants.length > 0 ? (
        <ul>
          {participants.map((participant) => (
            <li key={participant._id}>
              {participant.fullName} ({participant.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No participants found</p>
      )}
    </>
  );
};

export default ParticipantsPage;
