import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home.js";
import Login from "./components/Auth/Login.js";
import Signup from "./components/Auth/Signup.js";
import { Toaster } from "react-hot-toast"; // Remove unused 'toast'
import { useAuthContext } from "./components/Context/AuthContext.js";
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Navbar />
      <div className="pt-0 p-4 h-screen flex justify-center item-center ">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
