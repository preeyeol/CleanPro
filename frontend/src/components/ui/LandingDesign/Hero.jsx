import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center  px-8 text-center">
      {/* Text Container */}
      <div className="mb-4 mt-[15rem]">
        <h1 className="text-[#6d8d79] text-7xl font-bold">
          101 Detailing & Pressure Wash
        </h1>
        <p className="text-xl text-[#6d8d79] mt-2 w-[40rem] ms-52 items-center leading-8">
        Your Go-To Pressure Washing Experts in Texas  Reliable, Affordable, and Guaranteed to Make Your Property Shine!
        </p>
      
      </div>

      <button className="text-white font-roboto font-medium text-base px-8 py-3 bg-[#6d8d79] rounded-md mt-4">
        <Link to="/about" className="hover:underline">
        About Us
        </Link>
      </button>
    </div>
  );
};

export default Hero;
