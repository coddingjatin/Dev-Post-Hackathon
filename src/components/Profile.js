import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./Context/AuthContext.js";

const Profile = () => {
  const authUser = useAuthContext();

  const user = {
    username: authUser.authUser.data.username,
    fullname: authUser.authUser.data.fullname,
    gender: authUser.authUser.data.gender,
    imageSrc: authUser.authUser.data.picture,
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto p-2">
      <div className="w-full p-6 bg-yellow-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 mb-4">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Profile
        </h1>
        <div className="rounded-full mt-8 h-36 w-36 overflow-hidden border-4 border-yellow-900 mx-auto">
          <img
            src={user.imageSrc}
            alt="Profile Image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-4 text-center text-blue-900 font-bold">
          <p className="text-2xl font-extrabold ">@{user.username}</p>
          <p className="text-lg ">{user.fullname}</p>
          <p className="text-lg ">{user.gender}</p>
          <a href="https://github.com/coddingjatin">Github</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
