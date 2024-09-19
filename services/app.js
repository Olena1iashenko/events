import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const fetchEvents = async () => {
  const { data } = await axios.get("events");
  return data;
};

export const fetchParticipants = async () => {
  const response = await axios.get("participants");
  return response.data;
};

export const addNewParticipant = async (body) => {
  const response = await axios.post("participants", body);
  return response.data;
};
