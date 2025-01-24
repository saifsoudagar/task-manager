import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../actions/weatherActions";
import Task from "./Task";

const TaskList = ({
  tasks,
  deleteTask,
  toggleTaskCompletion,
  toggleImportant,
  filter,
  darkMode,
}) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.weather);

  const [city, setCity] = useState("New York");

  useEffect(() => {
    const hasOutdoorTask = tasks.some((task) =>
      task.text.toLowerCase().includes("outdoor")
    );
    if (hasOutdoorTask) {
      dispatch(fetchWeather(city));
    }
  }, [tasks, city, dispatch]);

  const handleCityChange = (e) => setCity(e.target.value);

  const fetchWeatherForCity = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  const filteredTasks =
    filter === "Important"
      ? tasks.filter((task) => task.isImportant)
      : tasks;

  const getWeatherIcon = (description = "") => {
    const desc = description.toLowerCase();
    if (desc.includes("clear")) return "☀️"; // Sun
    if (desc.includes("cloud")) return "☁️"; // Clouds
    if (desc.includes("rain")) return "🌧️"; // Rain
    if (desc.includes("snow")) return "❄️"; // Snow
    return "🌥️"; // Default
  };

  return (
    <div
      className={`mt-4 px-4 w-full  transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Weather Search Section */}
      <div className="flex gap-3 items-center mb-4">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
          className={`border p-2 rounded-md text-sm w-40 ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"
          } focus:outline-none focus:ring-2 ${
            darkMode ? "focus:ring-green-500" : "focus:ring-blue-500"
          }`}
        />
        <button
          onClick={fetchWeatherForCity}
          className={`p-2 rounded-md text-sm transition duration-300 ${
            darkMode
              ? "bg-green-600 hover:bg-green-500 text-white"
              : "bg-blue-500 hover:bg-blue-400 text-white"
          }`}
        >
          Get Weather
        </button>
      </div>

      {/* Weather Info Section */}
      {loading && (
        <div className="flex justify-center items-center mb-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {data && data.weather && (
        <div
          className={`mb-6 p-4 rounded-md shadow-sm ${
            darkMode ? "bg-gray-700 text-white" : "bg-blue-100"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="text-4xl">
              {getWeatherIcon(data.weather[0].description)}
            </div>
            <div>
              <p className="text-lg font-semibold capitalize">
                {data.weather[0].description}
              </p>
              <p className="text-xl font-bold">{data.main.temp}°C</p>
            </div>
          </div>
        </div>
      )}

      {/* Task List Section */}
      <div className="pb-[93px]">
        {/* Pending Tasks Section */}
        {filteredTasks.filter((task) => !task.completed).length > 0 && (
          <h2 className="text-lg font-semibold mb-2 mt-4">Pending Tasks</h2>
        )}
        <div className="space-y-2">
          {filteredTasks
            .filter((task) => !task.completed)
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
                toggleImportant={toggleImportant}
                darkMode={darkMode}
              />
            ))}
        </div>

        {/* Completed Tasks Section */}
        {filteredTasks.filter((task) => task.completed).length > 0 && (
          <h2 className="text-lg font-semibold mb-2 mt-8">Completed Tasks</h2>
        )}
        <div className="space-y-2">
          {filteredTasks
            .filter((task) => task.completed)
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
                toggleImportant={toggleImportant}
                darkMode={darkMode}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
