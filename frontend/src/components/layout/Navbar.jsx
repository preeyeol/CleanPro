import React from "react";
import { Link } from "react-router-dom";


const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/contact", label: "CONTACT" },
  { path: "/services", label: "SERVICES" },
];

const Navbar = () => {
  return (
    <div className=" z-50 w-full flex fixed justify-start">
      <div className="flex text-white w-[100%] justify-start  items-center gap-20 text-xl font-medium bg-[#6d8d79] 
    p-6 ">
        
        {/* Navigation Links */}
        <div className="flex gap-14">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center gap-1 px-5 hover:scale-[1.3] transition-all"
            >
              <p className="whitespace-nowrap">{link.label}</p>
            </Link>
          ))}
        </div>
        <p className="ms-96 font-bold">101 Cleaning</p>

        <button className="text-[#6d8d79] font-roboto font-medium text-base px-8 py-3  bg-white rounded-md hover:underline">
        <Link to="/services">
          Our Services
        </Link>
      </button>
      </div>
    </div>
  );
};

export default Navbar;
