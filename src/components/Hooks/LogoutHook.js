import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext.js";
import toast from "react-hot-toast";
import URL from "../Utills/URL.js";
import simulateSaveSettings from "../Utills/fileForToaster.js";

const LogoutHook = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    const ChatUser = JSON.parse(localStorage.getItem("ChatUser"));

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ChatUser.data.token}`,
    };
    try {
      const res = await fetch(`${URL}/api/auth/logout`, {
        method: "POST",
        headers: headers,
      });

      const data = await res.json();

      if (data.status === "Error") {
        throw new Error(data.message);
      }

      localStorage.removeItem("ChatUser");
      setAuthUser(null);
      toast.promise(simulateSaveSettings(), {
        loading: "Logging out...",
        success: <b>Logged out succesfully!</b>,
        error: <b>Could not able to Log out.</b>,
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};
export default LogoutHook;
