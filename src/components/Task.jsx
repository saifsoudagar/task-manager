import React from "react";
import { FaRegStar, FaStar, FaTrash } from "react-icons/fa";

const Task = ({ task, toggleTaskCompletion, toggleImportant, deleteTask, darkMode }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
        darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-700"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className={`${darkMode ? "text-white" : "text-gray-700"}`}
        />
        <span
          className={`${
            task.completed ? "line-through" : ""
          } ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          {task.text}
        </span>
      </div>
      <div className="flex items-center gap-4 text-[20px]">
        <div
          className="cursor-pointer"
          onClick={() => toggleImportant(task.id)}
        >
          {task.isImportant ? (
            <FaStar className="text-yellow-500" />
          ) : (
            <FaRegStar className={darkMode ? "text-white" : ""} />
          )}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash className={darkMode ? "text-white" : "text-gray-700"} />
        </div>
      </div>
    </div>
  );
};

export default Task;
