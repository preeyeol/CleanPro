import React from "react";

const ThankYouPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Thank You!</h2>
        <p className="text-center">
          Your booking was successful. We'll get back to you soon.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
