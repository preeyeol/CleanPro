import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex  bg-gray-800 h-auto md:h-[630px] text-white p-2 mb-6 mx-6 justify-center object-cover ">
        <div className="ms-11 md:ms-20 flex flex-col w-full gap-5 md:justify-between mb-5 mt-5 mr-8 p-2">
          <div className="flex flex-col mt-3 gap-6 md:flex-row md:gap-28">
            <div className="flex flex-col md:flex-col md:gap-5 md:w-96 md:h-52">
              <p className="text-8xl">Revive</p>
              <p className="text-7xl">Refresh</p>
              <p className="text-6xl">Renew with 101</p>
              <div className="flex gap-3 mt-4 md:mt-1"></div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:w-4/5 md:justify-between ">
              <div className="w-56 flex flex-col gap-1">
                <h3 className="text-2xl">Contact</h3>
                <h5 className="text-lg">
                  7928 Wagon Rd. Denton, TX 76201, USA
                  <br /> 737-291-4050 101pressurewash@gmail.com
                </h5>
              </div>
            </div>
          </div>
          <div className="mr-11">
            <hr />
            <div className="flex justify-center ms-2 md:ms-0 mt-4 md:mt-2 md:gap-2 md:justify-between">
              <div className="flex gap-1 ">
                <p className="flex flex-col md:flex-row gap-1">
                  <span className="border border-white w-5 h-5 rounded-full flex  justify-center items-center p-1">
                    c
                  </span>
                  2025,101 Detailing & Pressure Wash. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6">
                <p>
                  <Link>Privacy Policy</Link>
                </p>
                <p>
                  <Link>Terms of Services</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
