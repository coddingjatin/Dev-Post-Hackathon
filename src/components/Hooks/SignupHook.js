import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext.js";
import axios from "axios";
import URL from "../Utills/URL.js";
import simulateSaveSettings from "../Utills/fileForToaster.js";
import { useNavigate } from "react-router-dom";

const SignupHook = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });

    if (!success) return;

    try {
      const res = await axios.post(`${URL}/api/auth/signup`, {
        fullname,
        username,
        password,
        confirmpassword,
        gender,
      });

      if (!res) {
        throw new Error("Couldn't login at the moment");
      }

      const data = res.data;
      if (data.status === "Error") {
        throw new Error(data.message);
      }

      localStorage.setItem("ChatUser", JSON.stringify(data));
      await toast.promise(simulateSaveSettings(), {
        loading: "Signing up...",
        success: <b>Signed up succesfully!</b>,
        error: <b>Could not sign up now.</b>,
      });
      setAuthUser(data);
    } catch (error) {
      toast.error(
        error.response.data?.message || error.message || "Something went wrong"
      );
    }
  };

  return signup;
};
export default SignupHook;

function handleInputErrors({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("Some Fields are empty");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
