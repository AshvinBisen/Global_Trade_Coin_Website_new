import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./Components/UserNavbar";
import UserSidebar from "./Components/UserSidebar";

const UserLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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
    <div className="flex min-h-screen bg-black text-white font-[inter] w-full">
      {/* Sidebar */}
      {isSidebarVisible && (
        <div
          className={`fixed top-0 left-0 z-50 transition-all duration-500 h-full ${
            isCollapsed ? "w-[90px]" : "w-[250px]"
          }`}
        >
          <UserSidebar isCollapsed={isCollapsed} />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-500 w-full max-w-full ${
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

        {/* <main className="flex-1 md:p-3 p-2 overflow-auto bg-black">
          <Outlet />
        </main> */}
        <main className="flex-1 w-full p-2 md:p-4 mt-[60px] md:mt-0 overflow-y-auto max-w-full">
          {/* Responsive scroll wrapper for child pages */}
          <div className="w-full max-w-full overflow-x-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout;



// import React, { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import UserNavbar from "./Components/UserNavbar";
// import UserSidebar from "./Components/UserSidebar";

// const UserLayout = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false);

//   // Handle responsive behavior
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 1024;
//       setIsMobile(mobile);
//       setIsCollapsed(mobile);
//       if (!mobile) setIsSidebarVisible(true);
//       else setIsSidebarVisible(false);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     if (isMobile) setIsSidebarVisible(!isSidebarVisible);
//     else setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className="flex min-h-screen bg-black text-white font-[inter]">
//       {/* Sidebar */}
//       {isSidebarVisible && (
//         <div
//           className={`fixed top-0 left-0 z-50 transition-all duration-500 ${
//             isCollapsed ? "w-[90px]" : "w-[250px]"
//           }`}
//         >
//           <UserSidebar isCollapsed={isCollapsed} />
//         </div>
//       )}

//       {/* Main Content */}
//       <div
//         className={`flex-1 flex flex-col transition-all duration-500 ${
//           !isMobile
//             ? isCollapsed
//               ? "lg:ml-[90px]"
//               : "lg:ml-[250px]"
//             : "ml-0"
//         }`}
//       >
//         <UserNavbar
//           isCollapsed={isCollapsed}
//           toggleSidebar={toggleSidebar}
//           isMobile={isMobile}
//         />

//         <main className="flex-1 md:p-2 p-2 overflow-auto bg-black">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default UserLayout;

