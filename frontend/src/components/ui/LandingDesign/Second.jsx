import AccordionSection from "../../shared/AccordionSection";
import FeatureImageSections from "./Images";

const accordions = [
    {
      title: "Valid Sponsership",
      id: 1,
      description:
        "Applicants must possess advanced qualifications, such as a relevant degree, specialized training in their field. This is to demonstrate a high level of expertise and skills required for the job.",
    },
    {
      title: "Proof of Relationship or Employment",
      id: 2,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisiepellendus totam accusamus, amet repudiandae quas dolore eius reprehenderit doloribus. Atque.",
    },
  
    {
      title: "Financial Stability",
      id: 3,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Il accusamus, amet repudiandae quas dolore eius reprehenderit doloribus. Atque.",
    },
    {
      title: "Compliance with immigration policies",
      id: 4,
      description: "Lorem ipsum dolor, sit amet cjhmno9m ujyghi",
    },
  ];
  

const Second = () => {
    return(
        <div className=" h-screen bg-white justify-center items-start pt-16 mb-16">
            <div className="">

            <div className="flex flex-col items-center">

                <h1 className="text-3xl font-semibold text-[#556c72] text-center mt-4">
                    We remove dirt, grime, and stains with high-pressure water,<br />
                    restoring your surfaces quickly and efficiently.<br />
                    Let us bring your property back to life!
                </h1>
         
            </div>

            <div className="w-[45%] absolute  left-[28%]">
            <AccordionSection
              data={accordions}
              className="border-[#8C8C8C] border-[0.5px] text-[#F4F4F4] bg-[#556c72] data-[state=open]:border-[#F7CB6A]"
              />
           </div>
            {/* <FeatureImageSections/> */}
              </div>
        </div>
    );
}

export default Second;
