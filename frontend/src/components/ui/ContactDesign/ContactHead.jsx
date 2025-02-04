import ContactComp from "./ContactComp";

const ContactHead = () => {
    return (
      <div className="h-screen bg-white flex items-center justify-center flex-row space-x-96">
        <h1 className="text-4xl text-[#6d8d79] text-start font-medium">
        Contact Us
        </h1>
        <div className="flex flex-col border-b border-4 border-[#556c72] p-8  rounded-br-4xl rounded-tl-4xl mt-14">
   <ContactComp htmlFor="name" type="name" id="name" label="Full Name" placeholder="Enter Your Full Name" 
       labelClassName="flex flex-col text-[#556c72] text-bold text-center font-roboto text-xl font-normalpy-2"
       inputClassName=" text-white font-roboto text-lg w-[300px]  font-normal bg-[#6d8d79] border-b text-center border-[.1px] 
       border-[#BDBDBD] rounded-md leading-tight  flex  py-[.5rem] px-[var(--sds-size-space-200)] 
       items-center gap-[8px] self-stretch"/>
 
          <ContactComp htmlFor="email" type="email" id="email" label="Email Address" placeholder="Enter Your Email" 
       labelClassName="flex flex-col text-[#556c72] text-bold text-center font-roboto text-xl font-normalpy-2"
       inputClassName=" text-white font-roboto text-lg w-[300px]  font-normal bg-[#6d8d79] border-b text-center border-[.1px] 
       border-[#BDBDBD] rounded-md leading-tight  flex  py-[.5rem] px-[var(--sds-size-space-200)] 
       items-center gap-[8px] self-stretch"/>
          <ContactComp htmlFor="phone" type="phone" id="number" label="Mobile Number" placeholder="Enter Your Mobile Number" 
       labelClassName="flex flex-col text-[#556c72] text-bold text-center font-roboto text-xl font-normalpy-2"
       inputClassName=" text-white font-roboto text-lg w-[300px]  font-normal bg-[#6d8d79] border-b text-center border-[.1px] 
       border-[#BDBDBD] rounded-md leading-tight  flex  py-[.5rem] px-[var(--sds-size-space-200)] 
       items-center gap-[8px] self-stretch"/>
         <ContactComp htmlFor="description" type="text" id="description" label="Message For Us" placeholder="Write Your Message Here" 
       labelClassName="flex flex-col text-[#556c72] text-bold text-center font-roboto text-xl font-normalpy-2"
       inputClassName=" text-white font-roboto text-lg w-[300px]  font-normal bg-[#6d8d79] border-b text-center border-[.1px] 
       border-[#BDBDBD] rounded-md leading-tight  flex  py-[3.5rem] px-[var(--sds-size-space-200)] 
       items-center gap-[8px] self-stretch"/>
        <button className="text-white font-roboto font-medium text-base px-8 py-3 bg-[#6d8d79] shadow-2xl rounded-md mt-4">
        
        Submit
      
      </button>
      </div>
       </div>
    );
  };
  
  export default ContactHead;
  