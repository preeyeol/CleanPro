import React, { useState, useEffect } from "react";
import ServiceList from "../components/ServiceList";
import Navbar from "../components/Navbar";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices([
      {
        id: 1,
        name: "Home Cleaning",
        description: "Basic cleaning for your home.",
        price: 50,
        image_url: "home-cleaning.jpg",
      },
      {
        id: 2,
        name: "Office Cleaning",
        description: "Professional cleaning for offices.",
        price: 100,
        image_url: "office-cleaning.jpg",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 my-8">
          Our Services
        </h2>
        <ServiceList services={services} />
      </div>
    </div>
  );
};

export default ServicesPage;
