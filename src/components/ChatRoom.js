import React, { useState } from "react";
import "./ChatRoom.css";

function ChatRoom() {
  const [pesanBaru, setPesanBaru] = useState("");

  const handlepesanBaruBerubah = (event) => {
    setPesanBaru(event.target.value);
    // console.log(handlepesanBaruBerubah);
  };

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: </h1>
      <textarea
        value={pesanBaru}
        onChange={handlepesanBaruBerubah}
        placeholder="Ketik pesan disini ya!!!"
        className="new-message-input-field"
      />
      <button className="send-message-button">Kirim pesan</button>
    </div>
  );
}

export default ChatRoom;
