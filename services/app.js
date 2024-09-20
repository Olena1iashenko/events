import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const fetchEvents = async () => {
  const { data } = await axios.get("events");
  return data;
};

export const addNewParticipantToEvent = async (eventId, participantData) => {
  const { data } = await axios.post(
    `/events/${eventId}/participants`,
    participantData
  );
  return data;
};

export const fetchEventParticipants = async (eventId) => {
  const { data } = await axios.get(`/events/${eventId}/participants`);
  return data;
};
