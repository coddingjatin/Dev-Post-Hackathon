import React, { useState } from "react";

const InputDialog = ({ show, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
    onClose();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-600 p-8 w-full sm:w-auto">
          <h2 className="text-lg font-semibold mb-4">Enter Username to add</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
          />
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-red-500 hover:bg-red-400 rounded text-white"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDialog;
