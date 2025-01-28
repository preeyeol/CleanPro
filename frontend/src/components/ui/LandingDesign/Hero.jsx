import BackGround from "../../../assets/images/bucket.jpeg"

const Hero=()=>{
    return (<div className="relative h-screen mb-8">
        <img src={BackGround} alt="background" className="w-full h-screen" />
        <div className="absolute flex flex-col  w-full ms-[50rem] top-[18rem]">
            <div className=" font-medium ">
              <h1 className="text-white text-7xl  w-[40rem]">
              101 DETAILING AND PRESSURE WASH  </h1>
            </div>
            <div className=" w-auto text-gray-700">
              <p className="text-3xl text-start text-white shadow-2xl my-1 space-y-0.5">
             Your Trusted Pressure Washing Service In Texas !!
              </p>
            </div>
          </div>
    
    </div>)
}

export default Hero