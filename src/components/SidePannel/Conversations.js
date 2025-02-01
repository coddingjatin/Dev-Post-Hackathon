import React, { useEffect, useState } from "react";
import Conversation from "./Conversation.js";
import InputDialog from "./InputDailog.js"; // Import the InputDialog component
import "./Conversations.css"; // Import the CSS file for styling
import ConversationHook from "../Hooks/ConversationHook";

export const Conversations = () => {
  console.log("conversations");
  const { loading, conversation } = ConversationHook();
  const flag = conversation?.length === 0;
  const [showInputDialog, setShowInputDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState(0); // Add key state

  const { fetchConversationByUsername } = ConversationHook();

  const handleOpenDialog = () => {
    setShowInputDialog(true);
  };

  const handleCloseDialog = () => {
    setShowInputDialog(false);
  };

  const handleInputSubmit = async (value) => {
    setInputValue(value);
    if (value[0] === "@") {
      value = value.slice(1);
    }
    const val = await fetchConversationByUsername(value);
    setInputValue("");
    handleCloseDialog();
    if (val) window.location.reload();
  };

  return (
    <div
      key={key}
      className="conversations-container flex flex-row md:flex-col"
    >
      {loading ? (
        <div className="spinner spinner-primary spinner-xl"></div>
      ) : conversation && !flag ? (
        <>
          {conversation.map((conversationItem) => (
            <Conversation
              key={conversationItem._id}
              conversation={conversationItem}
            />
          ))}
        </>
      ) : (
        <div className="text-black text-lg ml-4 mt-8">
          Please add friends to chat with them
        </div>
      )}

      <div className="absolute bottom-4 right-4">
        <button
          className="bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600"
          onClick={handleOpenDialog}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <InputDialog
          show={showInputDialog}
          onClose={handleCloseDialog}
          onSubmit={handleInputSubmit}
        />
      </div>
    </div>
  );
};
