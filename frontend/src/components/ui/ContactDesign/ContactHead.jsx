import ContactComp from "./ContactComp";

const ContactHead = () => {
  return (
    <div className="h-screen bg-white flex items-center justify-between px-16">
      <h1 className="text-4xl text-[#6d8d79] font-medium">Contact Us</h1>
      
      <div className="flex flex-col border-4 border-[#556c72] p-8 rounded-br-3xl rounded-tl-3xl mt-14 shadow-lg">
        <ContactComp
          htmlFor="name"
          type="text"
          id="name"
          label="Full Name"
          placeholder="Enter Your Full Name"
          labelClassName="flex flex-col text-[#556c72] font-bold text-center font-roboto text-xl py-2"
          inputClassName="text-white font-roboto text-lg w-[300px] bg-[#6d8d79] border-b text-center border-[#BDBDBD] rounded-md py-2 px-4"
        />

        <ContactComp
          htmlFor="email"
          type="email"
          id="email"
          label="Email Address"
          placeholder="Enter Your Email"
          labelClassName="flex flex-col text-[#556c72] font-bold text-center font-roboto text-xl py-2"
          inputClassName="text-white font-roboto text-lg w-[300px] bg-[#6d8d79] border-b text-center border-[#BDBDBD] rounded-md py-2 px-4"
        />

        <ContactComp
          htmlFor="phone"
          type="tel"
          id="number"
          label="Mobile Number"
          placeholder="Enter Your Mobile Number"
          labelClassName="flex flex-col text-[#556c72] font-bold text-center font-roboto text-xl py-2"
          inputClassName="text-white font-roboto text-lg w-[300px] bg-[#6d8d79] border-b text-center border-[#BDBDBD] rounded-md py-2 px-4"
        />

        <ContactComp
          htmlFor="description"
          type="text"
          id="description"
          label="Message For Us"
          placeholder="Write Your Message Here"
          labelClassName="flex flex-col text-[#556c72] font-bold text-center font-roboto text-xl py-2"
          inputClassName="text-white font-roboto text-lg w-[300px] bg-[#6d8d79] border-b text-center border-[#BDBDBD] rounded-md py-4 px-4 h-[100px]"
        />

        <button className="text-white font-roboto font-medium text-base px-8 py-3 bg-[#6d8d79] shadow-2xl rounded-md mt-4 hover:bg-[#556c72] transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactHead;
