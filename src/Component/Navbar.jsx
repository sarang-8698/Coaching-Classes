/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Coaching Center</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/register" className="hover:text-gray-200">
          Register
        </Link>
        <Link to="/login" className="hover:text-gray-200">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
