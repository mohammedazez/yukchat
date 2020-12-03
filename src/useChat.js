import { useState, useEffect, useRef } from "react";
// Import socket Io Client
import socketIOClient from "socket.io-client";

// Name of the event
const EVENT_CHAT_PESAN_BARU = "obrolanPesanBaru";
const SOCKET_SERVER_URL = "http://localhost:3001";

function useChat(roomId) {
  // Kirim dan menerima pesan
  const [pesan, setPesan] = useState([]);
  console.log(pesan);
  const socketRef = useRef();

  useEffect(() => {
    //  Menyambungkan koneksi untuk Web Socket
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
    //  Mendengarkan pesan masuk
    socketRef.current.on(EVENT_CHAT_PESAN_BARU, (pesanku) => {
      const pesanMasuk = {
        ...pesanku,
        dimilikOlehPenggunaSaatIni: pesanku.senderId === socketRef.current.id,
      };
      setPesan((pesan) => [...pesan, pesanMasuk]);
    });
    // Ketika koneksi tertutup
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  //   mengirim pesan ke server lalu diteruskan ke semua pengguna di ruangan chat yang sama
  const kirimPesan = (pesanBody) => {
    socketRef.current.emit(EVENT_CHAT_PESAN_BARU, {
      body: pesanBody,
      senderId: socketRef.current.id,
    });
  };

  return { pesan, kirimPesan };
}

export default useChat;
