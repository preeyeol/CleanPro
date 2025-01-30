import BackGround from "../../../assets/images/carImg.jpeg"

const Hero=()=>{
    return (<div className="relative h-screen  bg-[#f2f4f7]">
       
        <div className=" flex flex-col w-full ms-[8rem]  ">
      
              <h1 className="text-black text-7xl font-semibold w-[40rem] mt-[10rem]">
              101 Detailing & Pressure Wash  </h1>
        
              <p className="text-3xl text-start text-black  my-1 space-y-0.5">
             Your Trusted Pressure Washing Service In Texas !!
              </p>
          </div>
          <div>
          <img src={BackGround} alt="car" className="absolute ms-[40rem] h-[25%] w-[25%] mt-[5rem] rounded-4xl "/>
          </div>
    
    </div>)
}

export default Hero