import React from "react";

const ServiceCard = ({ service }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition duration-300 ease-in-out">
    <img
      className="w-full h-48 object-cover"
      src={service.image_url}
      alt={service.name}
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
      <p className="text-gray-600 mt-2">{service.description}</p>
      <p className="text-blue-600 font-semibold mt-2">
        Price: ${service.price}
      </p>
      <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
        Book Now
      </button>
    </div>
  </div>
);

export default ServiceCard;
