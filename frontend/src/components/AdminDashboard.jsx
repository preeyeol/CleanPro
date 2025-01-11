import React from "react";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center my-8">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded shadow">
          Manage Services
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded shadow">
          Manage Bookings
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded shadow">
          View Reports
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
