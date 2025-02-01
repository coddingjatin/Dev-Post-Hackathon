import React, { useEffect } from "react";
import { Messages } from "./Messages";
import { SendMessage } from "./SendMessage";
import { CiChat2 } from "react-icons/ci";
import { useAuthContext } from "../Context/AuthContext";
import useConversation from "../Utills/useConversation";
export const MessagePannel = () => {
  const {
    selectedConversation,
    setSelectedConversation,
    messages,
    setMessages,
  } = useConversation();

  useEffect(() => {
    //umounts component
    return () => setSelectedConversation(null);
  }, []);
  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="md:min-w-[450px] flex flex-col md:w-2/3 h-[460px] md:h-auto overflow-auto">
          <div className="flex bg-opacity-40 p-0 md:px-4 md:pt-2 mb-1">
            <div className="w-8 m-2">
              <img
                src={selectedConversation.picture}
                className="rounded-full"
              />
            </div>
            <span className="text-gray-900 font-bold text-lg mt-3">
              {selectedConversation ? selectedConversation.fullname : ""}
            </span>
          </div>
          <div className="border-t border-gray-300 w-full "></div>
          <Messages />
          <SendMessage />
        </div>
      )}
    </>
  );
};

const NoChatSelected = () => {
  const authUser = useAuthContext();

  const [parts] = authUser.authUser.data.fullname.split(" ");
  const name = parts;
  return (
    <div className="flex items-center justify-center w-2/3 h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {name} 👋</p>
        <p>Select a chat to start Conversation</p>
        <CiChat2 className="text-3xl md:text-6xl" />
      </div>
    </div>
  );
};
