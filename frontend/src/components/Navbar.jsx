import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          101 Detailing & Pressure Wash
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-white hover:text-blue-400">
              Booking
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-blue-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-blue-400">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
