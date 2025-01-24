import React from "react";

const StatsWidget = ({ tasks, darkMode }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div
      className={`${
        darkMode ? "bg-gray-700 text-gray-300" : "bg-[#FBFDFC]"
      } p-4 flex flex-col items-center justify-center rounded mb-6`}
    >
      <h3 className="text-lg font-bold ml-4 mb-2">Today’s Tasks</h3>
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 ml-2 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-xl font-bold text-white">
            {((completedTasks / totalTasks) * 100 || 0).toFixed(0)}%
          </span>
        </div>
        <div className="flex gap-9 mt-4">
          <p>{completedTasks} Completed</p>
          <p>{totalTasks - completedTasks} Pending</p>
        </div>
      </div>
    </div>
  );
};

export default StatsWidget;
