import React from "react";
import { Link } from "react-router-dom";


const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/services", label: "SERVICES" },
    { path: "/contact", label: "CONTACT" },
];

const Navbar = () => {
    return (
        <div className="absolute z-50 w-full top-1  flex justify-center">
        
            <div className="flex  text-white w-[60%] bg-blur backdrop-blur-md bg-opacity-60 justify-center items-center gap-28 text-xl font-semibold rounded-lg bg-[#7c9b9a] shadow-md p-4 ">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className="flex items-center gap-1 hover:scale-[1.01] transition-all"
                    >
                        <p className="whitespace-nowrap">{link.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
