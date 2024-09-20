import React from "react";

const Participant = ({ participant }) => {
  return (
    <li
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      key={participant._id}
    >
      <h2>{participant.fullName}</h2>
      <p>{participant.email}</p>
    </li>
  );
};

export default Participant;
