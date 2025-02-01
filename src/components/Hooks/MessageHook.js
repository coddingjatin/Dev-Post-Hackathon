import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../Utills/useConversation";
import axios from "axios";
import URL from "../Utills/URL.js";
const MessageHook = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    const ChatUser = JSON.parse(localStorage.getItem("ChatUser"));
    try {
      const res = await fetch(
        `${URL}/api/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ChatUser.data.token}`,
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setMessages([...messages, data.newMessage]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};
export default MessageHook;
