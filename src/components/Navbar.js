import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { useAuthContext } from "./Context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const authUser = useAuthContext();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white text-xl font-semibold">WorkLoom Chat</span>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className="text-white hover:text-gray-300"
              activeClassName="text-blue-500"
            >
              Home
            </NavLink>
            <a
          
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Conferencing
            </a>
            <a
                       
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
            Team Manage
            </a>
            <a
            
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit WorkSpace
            </a>
            <a
           
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clockify
            </a>
            {authUser.authUser ? (
              <Link to="/profile" className="text-white hover:text-gray-300">
                Profile
              </Link>
            ) : currentPath === "/login" ? (
              <Link to="/signup" className="text-white hover:text-gray-300">
                Signup
              </Link>
            ) : (
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
