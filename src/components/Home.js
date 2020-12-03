import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        className="text-input-field"
        value={roomName}
        onChange={handleRoomNameChange}
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
}

export default Home;
