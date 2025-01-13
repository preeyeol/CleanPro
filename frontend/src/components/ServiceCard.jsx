import React from "react";
import Car from "../assets/images/car.JPG";
import Road from "../assets/images/road.JPG";

const ServiceCard = ({ service, index }) => {
  // Alternate images: use Car for even indices and Road for odd indices
  const imageToShow = index % 2 === 0 ? Car : Road;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition duration-300 ease-in-out">
      <img
        className="w-full h-48 object-cover"
        src={imageToShow}
        alt="Service"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
        <p className="text-gray-600 mt-2">{service.description}</p>
        <p className="text-blue-600 font-semibold mt-2">
          Price: ${service.price}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
