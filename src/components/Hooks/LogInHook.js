import axios from "axios";
import simulateSaveSettings from "../Utills/fileForToaster";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import URL from "../Utills/URL.js";

const LogInHook = () => {
  const { setAuthUser } = useAuthContext();
  const Login = async (username, password) => {
    const inputErrors = handleInputError(username, password);
    if (!inputErrors) return;
    try {
      const res = await axios.post(`${URL}/api/auth/login`, {
        username,
        password,
      });

      if (!res) {
        throw new Error("Couldn't login at the moment");
      }

      const data = res.data;
      if (data.status === "Error") {
        throw new Error(data.message);
      }

      localStorage.setItem("ChatUser", JSON.stringify(data));
      toast.promise(simulateSaveSettings(), {
        loading: "Logging In...",
        success: <b>Logged In succesfully!</b>,
        error: <b>Could not Log In now.</b>,
      });
      setAuthUser(data);
    } catch (error) {
      toast.error(
        error.response.data?.message || error.message || "Something went wrong"
      );
    }
  };
  return Login;
};

const handleInputError = (username, password) => {
  if (!username) {
    toast.error("Username is required");
    return false;
  }
  if (!password) {
    toast.error("Password is required");
    return false;
  }
  return true;
};
export default LogInHook;
