import React from "react";
import useConversation from "../Utills/useConversation";
import { useSocketContext } from "../Context/SocketContext";

const Conversation = (conversation) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isonline = onlineUsers.includes(conversation.conversation._id);
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };
  const isSelected =
    selectedConversation?._id === conversation.conversation._id;
  return (
    <>
      <div
        className={`flex md:flex-row flex-col gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer h-30 md:h-auto
				${isSelected ? "bg-sky-500" : ""}
			`}
        onClick={() => setSelectedConversation(conversation.conversation)}
      >
        <div className={`avatar ${isonline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.conversation.picture} alt="Avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">
              {conversation.conversation.fullname}
            </p>
            <span className="text-xl"></span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
