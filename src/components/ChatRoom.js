import React, { useState } from "react";
import "./ChatRoom.css";

// Import useChat
import useChat from "../useChat";

function ChatRoom() {
  // Ambil room id dari URL
  // Membuat web socket dan mengelola pesan
  // Pesan yang akan dikirim
  const [pesanBaru, setPesanBaru] = useState("");

  const handlepesanBaruBerubah = (event) => {
    setPesanBaru(event.target.value);
    // console.log(handlepesanBaruBerubah);
  };

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: </h1>
      <div className="messages-container">
        <ol className="messages-list">
          <li>Hai ini adalah pesan masuk</li>
        </ol>
      </div>
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
