import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import Navbar from "../components/Navbar";

const AdminPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminPage;
