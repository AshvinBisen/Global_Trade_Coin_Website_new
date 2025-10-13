import React from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <aside className="w-64 bg-blue-500 text-white h-screen p-4">
      <ul className="flex flex-col gap-3">
        <li><Link to="/user/dashboard">Dashboard</Link></li>
        <li><Link to="/user/history">History</Link></li>
        <li><Link to="/user/stats">Stats</Link></li>
      </ul>
    </aside>
  );
};

export default UserSidebar;
