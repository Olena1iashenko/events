import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://events-backend-r1c2.onrender.com/";

export const fetchEvents = async (configParams) => {
  const { data } = await axios.get("events", {
    params: {
      limit: 6,
      ...configParams,
    },
  });
  return data;
};

export const fetchEventById = async (eventId) => {
  const { data } = await axios.get(`/events/${eventId}`);
  return data;
};

export const addNewParticipantToEvent = async (eventId, participantData) => {
  const { data } = await axios.post(
    `/events/${eventId}/participants`,
    participantData
  );
  return data;
};

export const fetchEventParticipants = async (eventId, query) => {
  const { data } = await axios.get(`/events/${eventId}/participants/search`, {
    params: { query },
  });
  return data;
};
