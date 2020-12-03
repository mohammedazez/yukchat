import React from "react";
import "./ChatRoom.css";

function ChatRoom() {
  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: </h1>
      <textarea
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button>Kirim pesan</button>
    </div>
  );
}

export default ChatRoom;
