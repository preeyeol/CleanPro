import BackGround from "../../../assets/images/bluebg.jpeg"

const Hero=()=>{
    return (<div className="relative h-screen mb-8">
        <img src={BackGround} alt="background" className="blur-xs w-full h-screen" />
        <div className="absolute flex flex-col  w-full ms-[10rem] top-[18rem]">
            <div className=" font-medium ">
              <h1 className="text-black text-7xl  w-[40rem]  w-3/6 ">
              101 DETAILING AND PRESSURE WASH  </h1>
            </div>
            <div className=" w-auto text-gray-700">
              <p className="text-3xl text-start text-black my-1 space-y-0.5">
             Your Trusted Pressure Washing Service In Texas !!
              </p>
            </div>
          </div>
    
    </div>)
}

export default Hero