import baby from "../../../assets/images/baby.jpg"

const AboutPage = () => {
    const teamMembers = [
      { name: "Alice Johnson", role: "Senior Cleaner", image: baby },
      { name: "Mark Smith", role: "Sanitation Specialist", image:baby },
      { name: "Sophia Lee", role: "Cleaning Supervisor", image:baby },
      { name: "James Brown", role: "Eco-Friendly Cleaning Expert", image: baby }
    ];
  
    return (
      <div className="flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 bg-gray-100 text-gray-900">
        <div className="max-w-4xl text-center mt-24">
          <h1 className="text-4xl font-bold text-[#6d8d79] mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to <span className="font-semibold">Sparkle Clean Services</span>, where cleanliness meets perfection! We specialize in providing top-tier cleaning services for homes, offices, and commercial spaces, ensuring a spotless and fresh environment every time.
          </p>
        </div>
  
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-[#6d8d79]">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>Experienced & Professional Staff</li>
              <li>Eco-Friendly Cleaning Products</li>
              <li>Flexible & Customized Plans</li>
              <li>Affordable & Transparent Pricing</li>
              <li>Reliable & Trustworthy Service</li>
            </ul>
          </div>
  
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-[#6d8d79]">Our Services</h2>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>Residential Cleaning</li>
              <li>Office & Commercial Cleaning</li>
              <li>Move-In/Move-Out Cleaning</li>
              <li>Deep Cleaning & Sanitization</li>
            </ul>
          </div>
        </div>
  
        <div className="bg-white p-6 shadow-lg rounded-lg mt-6 text-center max-w-3xl">
          <h2 className="text-2xl font-semibold text-[#6d8d79]">Our Mission</h2>
          <p className="text-gray-700 mt-3">
            At Sparkle Clean Services, we believe in creating healthier and cleaner environments for our clients. Our mission is to deliver excellence, reliability, and professionalism in every service we provide, ensuring complete customer satisfaction.
          </p>
        </div>
  
        <div className="bg-white p-6 shadow-lg rounded-lg mt-6 text-center max-w-3xl">
          <h2 className="text-2xl font-semibold text-[#6d8d79]">Meet Our Team</h2>
          <p className="text-gray-700 mt-3">
            Our dedicated team of cleaning experts is passionate about maintaining cleanliness and hygiene. With years of experience and a customer-first approach, we strive to exceed expectations and provide the best cleaning solutions.
          </p>
        </div>
  
        <div className="max-w-5xl mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-[#6d8d79]">{member.name}</h3>
              <p className="text-gray-700 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AboutPage;
  