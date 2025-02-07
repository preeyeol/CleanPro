import React, { useState } from 'react';

const BookingForm = () => {
  const [service, setService] = useState('');
  const [packageType, setPackageType] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { service, packageType, date, details };
    
    // Send booking data to backend API
    const response = await fetch('/api/book-service', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();
    if (data.success) {
      alert('Booking successful!');
    } else {
      alert('Something went wrong, please try again.');
    }
  };

  return (
    <div className="booking-form">
      <h2>Book Our Service</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Choose Service:
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="residential">Residential Cleaning</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="specialized">Specialized Services</option>
          </select>
        </label>
        
        <label>
          Select Package:
          <select value={packageType} onChange={(e) => setPackageType(e.target.value)}>
            <option value="deep">Deep Cleaning</option>
            <option value="regular">Regular Cleaning</option>
            <option value="one-time">One-Time Cleaning</option>
            <option value="custom">Custom Cleaning</option>
          </select>
        </label>

        <label>
          Choose Date and Time:
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Additional Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Any special requests?"
          />
        </label>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
