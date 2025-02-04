import { Link } from "react-router-dom"
const Divide=()=>{

    return(
        <section className="flex h-screen" >
            <div className="flex flex-col w-1/2 justify-center items-center">
<h1 className="text-[#556c72] text-4xl font-bold">HELLO</h1>
            </div>
            <div className="flex flex-col w-1/2 bg-[#556c72] justify-center items-center">
<h1 className="text-white text-5xl font-bold">WORK WITH US</h1>
<p className="text-white text-base w-3/4 text-center">We provide thorough, reliable cleaning solutions for all surfaces, including brick, concrete, wood, and vinyl. Say goodbye to stains and hello to a fresh, revitalized space!</p>

<button className="text-[#556c72] font-roboto font-medium text-base px-8 py-3 bg-white shadow-2xl rounded-md mt-12">
        <Link to="/book" className="hover:underline">
   BOOK NOW
        </Link>
      </button>
            </div>
        </section>
    )

}

export default Divide