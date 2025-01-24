import React from "react";
import images from "../assets/img";
import StatsWidget from "./StatsWidget";
import { FaClipboardList, FaRegStar, FaMap } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";

const Sidebar = ({ tasks, filter, setFilter, isOpen, darkMode }) => {
  const handleToggleFilter = () => {
    setFilter(filter === "Important" ? "All" : "Important");
  };

  return (
    <aside
      className={`${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
      } flex flex-col justify-between items-center h-full min-h-screen transition-all duration-300 
      ${isOpen ? "w-[280px] sm:w-[240px]" : "w-0 sm:w-[60px] overflow-hidden"}
      sm:block`}
    >
      {isOpen && (
        <>
          {/* Profile Section */}
          <div className="relative w-full flex justify-center ">
            {/* Green background at the bottom */}
            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-[#d2f4d6] text-gray-700"
              } w-full h-[60px] absolute bottom-0 left-0 z-0`}
            ></div>
            {/* White background at the top */}
            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-white text-gray-700"
              } w-full h-[60px] absolute top-0 left-0 z-0`}
            ></div>
            {/* Profile Image */}
            <img
              src={images.img}
              alt="Profile"
              className="rounded-full w-[118px] h-[118px] relative z-10 mt-4 sm:mt-6"
            />
          </div>

          {/* Main Sidebar Content */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-[#d2f4d6]"
            } flex flex-col items-center w-full gap-3 px-5 pb-10`}
          >
            <div>
              <h2
                className={`${
                  darkMode ? "text-white" : "text-[#1B281B]"
                } font-outfit text-sm font-medium leading-5 text-center my-3`}
              >
                Hey, ABCD
              </h2>
            </div>

            {/* Navigation Links */}
            <ul
              className={`${
                darkMode ? "bg-gray-700 text-gray-300" : "bg-[#FBFDFC]"
              } w-[90%] flex flex-col justify-center items-start p-4 font-outfit text-sm font-medium rounded-lg`}
            >
              <li
                className="hover:bg-[#d2f4d6] p-2 w-full rounded flex items-center gap-4 cursor-pointer"
                onClick={() => setFilter("All")}
              >
                <FaClipboardList />
                All Tasks
              </li>
              <li
                className={`hover:bg-[#d2f4d6] p-2 w-full rounded flex items-center gap-4 cursor-pointer ${
                  filter === "Important" ? "bg-[#d2f4d6]" : ""
                }`}
                onClick={handleToggleFilter}
              >
                <FaRegStar /> Important
              </li>
              <li className="hover:bg-[#d2f4d6] p-2 w-full rounded flex items-center gap-4 cursor-pointer">
                <SlCalender />
                Today
              </li>
              <li className="hover:bg-[#d2f4d6] p-2 w-full rounded flex items-center gap-4 cursor-pointer">
                <FaMap />
                Planned
              </li>
            </ul>

            {/* Add List Section */}
            <div
              className={`${
                darkMode ? "bg-gray-700 text-gray-300" : "bg-[#FBFDFC]"
              } w-[90%] text-[18px] h-[88px] mt-6 font-outfit text-sm font-medium flex gap-4 pl-4 items-center cursor-pointer hover:bg-[#d2f4d6] rounded-lg`}
              onClick={() => console.log("Add List")}
            >
              <FaPlus />
              Add List
            </div>

            {/* Stats Widget */}
            <div className="mt-6 w-full">
              <StatsWidget tasks={tasks} darkMode={darkMode} />
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
