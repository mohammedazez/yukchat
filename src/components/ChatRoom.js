import React, { useState } from "react";
import "./ChatRoom.css";

// Import useChat
import useChat from "../useChat";

function ChatRoom(props) {
  // Ambil room id dari URL
  const { roomId } = props.match.params;

  // Membuat web socket dan mengelola pesan
  const { pesan, kirimPesan } = useChat(roomId);

  // Pesan yang akan dikirim
  const [pesanBaru, setPesanBaru] = useState("");

  const handlepesanBaruBerubah = (event) => {
    setPesanBaru(event.target.value);
    console.log(handlepesanBaruBerubah);
  };

  const handleKirimPesan = () => {
    kirimPesan(pesanBaru);
    setPesanBaru("");
    console.log(handleKirimPesan);
  };

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {pesan.map((pesanku, index) => (
            <li
              key={index}
              className={`message-item ${
                pesanku.dimilikOlehPenggunaSaatIni
                  ? "my-message"
                  : "received-message"
              }`}
            >
              {pesanku.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={pesanBaru}
        onChange={handlepesanBaruBerubah}
        placeholder="Ketik pesan disini ya!!!"
        className="new-message-input-field"
      />
      <button onClick={handleKirimPesan} className="send-message-button">
        Kirim pesan
      </button>
    </div>
  );
}

export default ChatRoom;
