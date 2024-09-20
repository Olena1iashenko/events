import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addNewParticipantToEvent } from "../../services/app";

const RegistrationPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    heardAboutEvent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const participantData = {
      fullName: formData.fullName,
      email: formData.email,
      dateOfBirth: formData.dateOfBirth,
      heardAboutEvent: formData.heardAboutEvent,
      event: eventId,
    };

    try {
      const updatedEvent = await addNewParticipantToEvent(
        eventId,
        participantData
      );
      alert("Participant successfully registered!");
      navigate("/");

      console.log("Updated Event:", updatedEvent);
    } catch (error) {
      console.error("Error adding participant to event:", error);
    }
  };

  return (
    <div>
      <h1>Event registration</h1>
      <form
        style={{ display: "flex", gap: "5px", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="dateOfBirth">Date of birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          required
          value={formData.dateOfBirth}
          onChange={handleChange}
        />

        <p>Where did you hear about this event?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>
            <input
              type="radio"
              name="heardAboutEvent"
              value="Social media"
              required
              checked={formData.heardAboutEvent === "Social media"}
              onChange={handleChange}
            />
            Social media
          </label>
          <label>
            <input
              type="radio"
              name="heardAboutEvent"
              value="Friends"
              required
              checked={formData.heardAboutEvent === "Friends"}
              onChange={handleChange}
            />
            Friends
          </label>
          <label>
            <input
              type="radio"
              name="heardAboutEvent"
              value="Found myself"
              required
              checked={formData.heardAboutEvent === "Found myself"}
              onChange={handleChange}
            />
            Found myself
          </label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <button type="submit">Register</button>
          <Link to={`/`}>
            <button type="button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
