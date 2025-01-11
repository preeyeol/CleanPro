import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center py-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to CleanPro Cleaning Agency
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Professional cleaning services for your home and office needs.
        </p>
        <div className="flex gap-6">
          <Link
            to="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold"
          >
            View Services
          </Link>
          <Link
            to="/book"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
