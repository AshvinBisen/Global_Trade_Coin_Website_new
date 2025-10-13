import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./Componets/UserNavbar";
import UserSidebar from "./Componets/UserSidebar";

const UserLayout = () => {
  return (
    <div className="flex min-h-screen">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserNavbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;

