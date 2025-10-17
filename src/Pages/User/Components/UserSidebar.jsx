import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md"; // ✅ Dashboard icon
import logo from "../../../assets/dashboard/logo.png";

// ✅ Import your image icons
import historyIcon from "../../../assets/dashboard/icon/history.png";
import statsIcon from "../../../assets/dashboard/icon/stats.png";
import logoutIcon from "../../../assets/dashboard/logout.png";

const UserSidebar = ({ isCollapsed }) => {
  const menuItems = [
    { name: "Dashboard", path: "/user/dashboard", iconType: "react-icon" },
    { name: "History", path: "/user/history", icon: historyIcon },
    { name: "Stats", path: "/user/stats", icon: statsIcon },
    { name: "Logout", path: "/logout", icon: logoutIcon, isLogout: true },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-black border-r border-[#F5C242] transition-all duration-500 flex flex-col z-50 ${
        isCollapsed ? "w-[90px]" : "w-[250px]"
      }`}
    >
      {/* Logo */}
      <div className="flex justify-center items-center py-6">
        <img
          src={logo}
          alt="User Logo"
          className={`transition-all duration-500 ${
            isCollapsed ? "w-10" : "w-40"
          }`}
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-5 mt-8">
        {menuItems.map((item, i) => (
          <NavLink key={i} to={item.path}>
            {({ isActive }) => {
              const isLogout = item.isLogout;

              return (
                <div
                  className={`p-[1px] rounded-full mx-4 transition-all duration-300 ${
                    isLogout
                      ? "bg-gradient-to-b from-[#FF0000] via-[#FF4D4D] to-[#B30000]"
                      : "bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)]"
                  }`}
                >
                  <div
                    className={`group flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 ${
                      isActive && !isLogout
                        ? "bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] text-black"
                        : isLogout && isActive
                        ? "bg-red-600 text-black"
                        : "bg-black"
                    } ${
                      !isActive && !isLogout
                        ? "hover:bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)]"
                        : ""
                    } ${!isActive && isLogout ? "hover:bg-red-600" : ""}`}
                  >
                    {/* ✅ Icon Section */}
                    <div className="flex items-center justify-center">
                      {item.iconType === "react-icon" ? (
                        <MdDashboard
                          className={`text-2xl transition-colors duration-300 ${
                            isActive
                              ? "text-black"
                              : "text-[#F5C242] group-hover:text-black"
                          }`}
                        />
                      ) : (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className={`w-6 h-6 object-contain transition-all duration-300 ${
                            isLogout
                              ? isActive
                                ? "filter brightness-0"
                                : "opacity-80 group-hover:brightness-0"
                              : isActive
                              ? "filter brightness-0"
                              : "opacity-80 group-hover:brightness-0"
                          }`}
                        />
                      )}
                    </div>

                    {/* ✅ Menu Text */}
                    {!isCollapsed && (
                      <span
                        className={`text-base font-medium transition-colors duration-300 ${
                          isLogout
                            ? isActive
                              ? "text-black"
                              : "text-red-500 group-hover:text-black"
                            : isActive
                            ? "text-black"
                            : "text-white group-hover:text-black"
                        }`}
                      >
                        {item.name}
                      </span>
                    )}
                  </div>
                </div>
              );
            }}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default UserSidebar;


