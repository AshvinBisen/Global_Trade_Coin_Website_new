import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-700 text-white h-screen p-4">
      <ul className="flex flex-col gap-3">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        {/* Add more admin links here */}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
