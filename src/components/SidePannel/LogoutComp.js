import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import LogoutHook from "../Hooks/LogoutHook";

import ConversationHook from "../Hooks/ConversationHook";
export const LogoutComp = () => {
  const { logout, loading } = LogoutHook();
  const [showInputDialog, setShowInputDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { fetchConversationByUsername } = ConversationHook();
  const handleOpenDialog = () => {
    setShowInputDialog(true);
  };

  const handleCloseDialog = () => {
    setShowInputDialog(false);
  };

  const handleInputSubmit = (value) => {
    setInputValue(value);
    fetchConversationByUsername(value);
    setInputValue("");
    handleCloseDialog();
  };
  return (
    <div className="mt-2 flex">
      {!loading ? (
        <>
          <TbLogout2
            className="absolute bottom-3 w-8 h-8 cursor-pointer text-black "
            onClick={logout}
          />
        </>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
