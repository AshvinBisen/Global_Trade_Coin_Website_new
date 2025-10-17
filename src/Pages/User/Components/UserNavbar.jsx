import React from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";

const UserNavbar = ({ isCollapsed, toggleSidebar, isMobile }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black border-b border-[#F89D00] sticky top-0 z-50">
      {/* Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center w-10 h-10 rounded-md  text-[#F89D00] shadow-[inset_-3px_-3px_7px_1px_#FFA20033,inset_2px_2px_5px_1px_#FFA20033] hover:bg-[#1a1a1a] transition"
      >
        <HiBars3CenterLeft size={32} />
      </button>

      {/* User Action Button */}
      <button
        className="bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)]
                   text-black font-medium px-4 py-2 rounded-[5px] 
                   shadow-md hover:opacity-90 transition"
      >
        Wallet Address
      </button>
    </nav>
  );
};

export default UserNavbar;

