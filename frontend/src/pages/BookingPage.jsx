import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();

    // Simple validation for required fields
    if (!service || !date || !time) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate booking success
    alert("Booking successful!");
    navigate("/thank-you");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Book a Service
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleBooking}>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select a service</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Deep Cleaning">Deep Cleaning</option>
            <option value="Window Cleaning">Window Cleaning</option>
          </select>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
