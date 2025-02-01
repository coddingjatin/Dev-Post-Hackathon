import React from "react";
import { SidePannel } from "./SidePannel/SidePannel.js";
import { MessagePannel } from "./MessagePannel/MessagePannel.js";
import toast from "react-hot-toast";
export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row sm:h-[420px] md:h-[550px] m-auto w-11/12 md:w-3/4  bg-yellow-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100rounded-lg overflow-hidde">
      <SidePannel />
      <MessagePannel />
    </div>
  );
};
