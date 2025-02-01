import { useEffect, useState } from "react";
import useConversation from "../Utills/useConversation.js";
import toast from "react-hot-toast";
import URL from "../Utills/URL";

const GetMessageHook = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      const ChatUser = JSON.parse(localStorage.getItem("ChatUser"));
      try {
        const res = await fetch(
          `${URL}/api/message/get/${selectedConversation._id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${ChatUser.data.token}`,
            },
          }
        );
        const data = await res.json();
        if (data.data.status === "Error") throw new Error(data.data.message);
        setMessages(data.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};
export default GetMessageHook;
