import React, { useState, useEffect, useRef } from "react";
// Import socket Io Client
import socketIOClient from "socket.io-client";

// Name of the event
const EVENT_CHAT_PESAN_BARU = "obrolanPesanBaru";
const SOCKET_SERVER_URL = "http://localhost:3000";

function useChat(roomId) {
  // (useState) Kirim dan menerima pesan
  const [pesan, setPesan] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    //  Menyambungkan koneksi untuk Web Socket
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
  });

  //  Mendengarkan pesan masuk
  socketRef.current.on(EVENT_CHAT_PESAN_BARU, (pesan) => {
    const pesanMasuk = {
      ...pesan,
      dimilikoOlehPenggunaSaatIni: pesan.senderId === socketRef.current.id,
    };
    setPesan((pesan) => [...pesan, pesanMasuk]);
  });
  // (useEffect) Ketika koneksi tertutup

  //   mengirim pesan ke server lalu diteruskan ke semua pengguna di ruangan chat yang sama

  return (
    <div>
      <h1>Use Chat</h1>
    </div>
  );
}

export default useChat;
