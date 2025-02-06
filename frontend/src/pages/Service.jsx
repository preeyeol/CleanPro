import React from 'react';
// import BookingForm from "../components/ui/ServiceDesign/BookingForm";

const Service = () => {
  return (
    <div className="services-page h-screen justify-center items-center">
      <h1>Our Cleaning Services</h1>
      <div className="services-list">
        <h3>Residential Cleaning</h3>
        <p>Deep cleaning, regular cleaning, and more...</p>
        
        <h3>Commercial Cleaning</h3>
        <p>Office spaces, retail cleaning, industrial cleaning...</p>
        
        <h3>Specialized Services</h3>
        <p>Carpet cleaning, window washing, post-construction...</p>
      </div>
      {/* <BookingForm /> */}
    </div>
  );
};

export default Service;
