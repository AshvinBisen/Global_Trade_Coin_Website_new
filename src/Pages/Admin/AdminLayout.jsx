import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./Components/AdminNavbar";
import AdminSidebar from "./Components/AdminSidebar";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setIsCollapsed(mobile); // collapsed style for mobile sidebar
      if (!mobile) {
        setIsSidebarVisible(true); // always visible on desktop
      } else {
        setIsSidebarVisible(false); // hidden by default on mobile
      }
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarVisible(!isSidebarVisible);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white font-[inter]">
      {/* Sidebar */}
      {isSidebarVisible && (
        <div
          className={`fixed top-0 left-0 z-50 transition-all duration-500 ${
            isCollapsed ? "w-[90px]" : "w-[250px]"
          }`}
        >
          <AdminSidebar isCollapsed={isCollapsed} />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-500 ${
          !isMobile
            ? isCollapsed
              ? "lg:ml-[90px]"
              : "lg:ml-[250px]"
            : "ml-0"
        }`}
      >
        <AdminNavbar
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />

        {/* Page Outlet */}
        <main className="flex-1 p-2 overflow-y-auto bg-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

