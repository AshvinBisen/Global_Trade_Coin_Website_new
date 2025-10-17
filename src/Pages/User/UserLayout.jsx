


import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./Components/UserNavbar";
import UserSidebar from "./Components/UserSidebar";

const UserLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setIsCollapsed(mobile);
      if (!mobile) setIsSidebarVisible(true);
      else setIsSidebarVisible(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) setIsSidebarVisible(!isSidebarVisible);
    else setIsCollapsed(!isCollapsed);
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
          <UserSidebar isCollapsed={isCollapsed} />
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
        <UserNavbar
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />

        <main className="flex-1 md:p-6 p-2 overflow-auto bg-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;

