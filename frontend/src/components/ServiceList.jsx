import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { name: "Basic Wash", description: "Quick and efficient wash", price: 25 },
  {
    name: "Detailing Package",
    description: "Comprehensive car detailing",
    price: 150,
  },
  {
    name: "Exterior Wash",
    description: "Focus on the car exterior",
    price: 50,
  },
  {
    name: "Full Service",
    description: "Complete cleaning inside and out",
    price: 200,
  },
];

const ServiceList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.map((service, index) => (
      <ServiceCard key={index} service={service} index={index} />
    ))}
  </div>
);

export default ServiceList;
