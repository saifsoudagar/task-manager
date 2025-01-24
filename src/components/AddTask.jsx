import React, { useState } from "react";
import { FaBell, FaRedo, FaCalendarAlt } from "react-icons/fa";

const AddTask = ({ addTask, darkMode }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask({ id: Date.now(), text: taskText, completed: false });
    setTaskText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col w-full border rounded-lg px-4 pb-3 ml-4  shadow-sm max-w-4xl mx-auto ${
        darkMode ? "bg-[#2d2d2d] text-white border-[#444]" : "bg-[#f3faf4] text-gray-800 border-[#d9e7d8]"
      }`}
    >
      {/* Input Field */}
      <textarea
        className={`p-2 h-[158px] w-full bg-transparent border-none outline-none resize-none text-sm ${
          darkMode ? "text-white placeholder-gray-500" : "placeholder-gray-500"
        }`}
        placeholder="Add A Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      ></textarea>

      {/* Icon Row */}
      <div className="flex flex-wrap items-center justify-between mt-4 gap-4 ">
        <div className="flex items-center gap-4 text-gray-500">
          <FaBell size={18} className="cursor-pointer hover:text-gray-800" />
          <FaRedo size={18} className="cursor-pointer hover:text-gray-800" />
          <FaCalendarAlt
            size={18}
            className="cursor-pointer hover:text-gray-800 border border-gray-300 rounded p-1"
          />
        </div>
        <button
          type="submit"
          className="bg-[#65a765] text-white text-center h-[36px] w-[104px] rounded-md text-sm hover:bg-[#579f5d] transition"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
