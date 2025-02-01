import React, { useEffect, useRef } from "react";
import { Message } from "./Message";
import GetMessageHook from "../Hooks/GetMessageHook";
import MessageSkeleton from "./MessageSkeleton";
import ListenMessagesHook from "../Hooks/ListenMessageHook";

export const Messages = () => {
  console.log("messages");
  const { messages, loading } = GetMessageHook();
  ListenMessagesHook();
  const lastMessageref = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageref}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-black text-lg mt-40">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};
