import React, { useState } from "react";

const BookingForm = ({ services, onSubmit }) => {
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ selectedService, date, time });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <select
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg"
        required
      >
        <option value="">Select a Service</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg"
      >
        Book Service
      </button>
    </form>
  );
};

export default BookingForm;
