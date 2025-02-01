import { useEffect } from "react";

import { useSocketContext } from "../Context/SocketContext";
import useConversation from "../Utills/useConversation";

const ListenMessagesHook = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
export default ListenMessagesHook;
