import React, { useState } from "react";
import Gender from "./Gender";
import { Link } from "react-router-dom";
import SignupHook from "../Hooks/SignupHook.js";

const Signup = () => {
  console.log("signup");
  const [details, setDetails] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const signup = SignupHook();
  const onGenderChange = (gen) => {
    setDetails({ ...details, gender: gen });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(details);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto p-2">
      <div className="w-full p-6 bg-yellow-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input input-bordered input-primary w-full h-10 text-sm"
              value={details.fullname}
              onChange={(e) =>
                setDetails({ ...details, fullname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered input-primary w-full h-10 text-sm"
              value={details.username}
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
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
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-black">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered input-primary w-full h-10 text-sm"
              value={details.confirmpassword}
              onChange={(e) =>
                setDetails({ ...details, confirmpassword: e.target.value })
              }
            />
          </div>

          <div>
            <Gender
              onGenderChange={onGenderChange}
              selectedGender={details.gender}
            />
          </div>
          <Link
            to="/login"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-black"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 hover:bg-slate-600">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
