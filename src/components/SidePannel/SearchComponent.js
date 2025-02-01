import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../Utills/useConversation";
import ConversationHook from "../Hooks/ConversationHook";
import toast from "react-hot-toast";
export const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = ConversationHook();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 2) {
      return toast.error("Search term must be at least 2 characters long");
    }
    const con = conversation.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (con) {
      setSelectedConversation(con);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <div className="m-4 ">
      <form className="flex items-center gap-2 " onSubmit={handleSubmit}>
        <input
          type="text"
          className="input  outline-black rounded-full input-sm w-full"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-circle btn-sm bg-sky-600">
          <IoSearch />
        </button>
      </form>
    </div>
  );
};
