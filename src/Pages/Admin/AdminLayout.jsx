import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./Componets/AdminNavbar";
import AdminSidebar from "./Componets/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

