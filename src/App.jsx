import logo from "./assets/logo-color.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EventsPage from "./components/EventsPage";
import ParticipantsPage from "./components/ParticipantsPage";
import RegistrationPage from "./components/RegistrationPage";

function App() {
  return (
    <>
      <a href="https://www.eliftech.com/" target="_blank">
        <img src={logo} alt="logo" />
      </a>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route
          path="/events/:eventId/participants"
          element={<ParticipantsPage />}
        />
        <Route
          path="/events/:eventId/registration"
          element={<RegistrationPage />}
        />
      </Routes>
    </>
  );
}

export default App;
