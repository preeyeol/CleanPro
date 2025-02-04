import ContactHead from "../components/ui/ContactDesign/ContactHead"

const Contact=()=>{
return(
    <div className="h-auto">
        <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
        <h1 className="text-3xl  text-[#6d8d79] text-start font-serif font-medium mt-16">
        "Need a spotless space? 
        </h1>
        <h1 className="text-5xl  text-[#6d8d79] text-start font-serif font-semibold">Get in touch with <span className="font-extrabold">
       101 Cleaning Service today!     </span> </h1>
        </div>
       <ContactHead />
    </div>
)

}

export default Contact