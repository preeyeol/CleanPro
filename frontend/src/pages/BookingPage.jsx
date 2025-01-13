import React, { useState, useContext } from "react";
// import { AuthContext } from "../App";

const BookingPage = () => {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext); // Get logged-in user data

  const handleBooking = (e) => {
    e.preventDefault();

    // Validation for required fields
    if (!service || !date || !time) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate successful booking
    alert(`Booking confirmed for ${user.email}`);
    setService("");
    setDate("");
    setTime("");
    setError("");
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
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
