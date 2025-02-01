import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogInHook from "../Hooks/LogInHook.js";

const Login = () => {
  console.log("login");
  const Login = LogInHook();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    Login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto p-2">
      <div className="w-full p-6 bg-yellow-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered input-primary w-full h-10 text-sm"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-black">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full h-10 text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-black"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-slate-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
