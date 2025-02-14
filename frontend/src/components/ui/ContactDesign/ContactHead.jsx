import ContactComp from "./ContactComp";

const ContactHead = () => {
  return (
    <div className="h-screen bg-white px-16 flex flex-col items-center justify-center">

      <h1 className="text-6xl text-[#6d8d79] font-extrabold text-center">
        Contact Us
      </h1>

      <div className="flex flex-col border-[#556c72] mt-14 shadow-lg justify-center items-center p-8 gap-6 rounded-lg">
        <ContactComp
          htmlFor="name"
          type="text"
          id="name"
          label="Full Name"
          placeholder="Enter Your Full Name"
          labelClassName="flex justify-center items-center  text-[#556c72] font-bold text-center font-roboto items-center text-xl py-2"
          inputClassName="flex-col text-[#6d8d79] font-roboto text-lg w-[300px] bg-white border-b text-center border-[#BDBDBD] rounded-md py-2 px-4"
        />

        <ContactComp
          htmlFor="email"
          type="email"
          id="email"
          label="Email Address"
          placeholder="Enter Your Email"
          labelClassName="flex justify-center items-center  text-[#556c72] font-bold text-center font-roboto text-xl py-2"
          inputClassName="flex-col text-[#6d8d79] font-roboto text-lg w-[300px] bg-white border-b text-center border-[#BDBDBD] rounded-md py-2 px-4"
        />

        <ContactComp
          htmlFor="phone"
          type="tel"
          id="phone"
          label="Mobile Number"
          placeholder="Enter Your Mobile Number"
          labelClassName="flex justify-center items-center  text-[#556c72] font-bold text-center font-roboto text-xl py-2"
          inputClassName="flex-col text-[#6d8d79] font-roboto text-lg w-[300px] bg-white border-b text-center border-[#BDBDBD] rounded-md py-2 px-4"
        />

        <ContactComp
          htmlFor="description"
          type="text"
          id="description"
          label="Message For Us"
          placeholder="Write Your Message Here"
          labelClassName="flex justify-center items-center text-[#556c72] font-bold text-center font-roboto text-xl py-2 "
          inputClassName="flex-col text-[#6d8d79] font-roboto text-lg w-[300px] bg-white border-b text-center border-[#BDBDBD] rounded-md py-2 px-4"
        />

        <button className="text-white w-full font-roboto font-medium text-base px-8 py-4 my-4 bg-[#6d8d79] shadow-2xl rounded-md hover:bg-[#556c72] transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactHead;
