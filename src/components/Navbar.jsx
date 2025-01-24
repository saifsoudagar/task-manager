 import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import images from "../assets/img";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { MdOutlineDashboard } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { TbLogout } from "react-icons/tb";

function Navbar({ toggleSidebar, toggleDarkMode, darkMode }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <div className={`w-full h-[56px] p-[12px_0] flex border-b-[1.5px] border-transparent  justify-between ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"
      }`}
    >
      <div className="flex items-center text-[24px] gap-[24px] px-6">
        <div
          className="text-left cursor-pointer hover:text-gray-400"
          onClick={toggleSidebar}
        >
          <IoReorderThreeOutline />
        </div>
        <div>
          <img className="w-[90px] h-[32px]" src={images.logo} alt="" />
        </div>
      </div>
      <div className="pr-6">
        <ul className="flex items-center gap-[24px] text-[24px]">
          <li className="cursor-pointer hover:text-gray-400">
            <MdOutlineDashboard />
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={toggleDarkMode}
          >
            <GiNightSleep />
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={handleLogout}
          >
            <TbLogout />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;