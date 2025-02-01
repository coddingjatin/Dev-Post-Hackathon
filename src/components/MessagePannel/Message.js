import React from "react";
import GetMessageHook from "../Hooks/GetMessageHook";
import useConversation from "../Utills/useConversation";
import { useAuthContext } from "../Context/AuthContext";
import { extractTime } from "../Utills/timeFormat";

export const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderid === authUser.data._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-600" : "bg-purple-800";
  const time = extractTime(message.createdAt);
  const shake = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar"></div>
      <div
        className={`chat-bubble text-white md:pb-2 ${bubbleBgColor} ${shake}`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-black md:mb-2 pb-2">
        {time}
      </div>
    </div>
  );
};
