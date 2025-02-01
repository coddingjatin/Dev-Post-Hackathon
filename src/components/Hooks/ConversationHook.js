import axios from "axios";
import React, { useEffect, useState } from "react";
import URL from "../Utills/URL";
import toast from "react-hot-toast";

const ConversationHook = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState(null);

  const fetchConversationByUsername = async (username) => {
    setLoading(true);
    const ChatUser = JSON.parse(localStorage.getItem("ChatUser"));

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ChatUser.data.token}`,
    };

    try {
      const res = await fetch(`${URL}/api/users/${username}`, {
        method: "GET",
        headers: headers,
      });
      const data = await res.json();

      if (data.status === "Error") {
        throw new Error(data.message);
      }

      updateConversation(data.conversation);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
    return true;
  };

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);

      const ChatUser = JSON.parse(localStorage.getItem("ChatUser"));
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ChatUser.data.token}`,
      };

      try {
        const res = await fetch(`${URL}/api/users`, {
          method: "GET",
          headers: headers,
        });
        const data = await res.json();

        if (data.status === "Error") {
          throw new Error(data.message);
        }

        setConversation(data.connectedUsers);
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  const updateConversation = (newConversation) => {
    setConversation(newConversation);
  };

  return {
    loading,
    conversation,
    fetchConversationByUsername,
    updateConversation,
  };
};

export default ConversationHook;
