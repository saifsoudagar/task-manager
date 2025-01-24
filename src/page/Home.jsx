import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Sidebar from "../components/Sidebar";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference
    return localStorage.getItem("darkMode") === "true";
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    // Apply or remove the `dark` class on the body element
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // Save dark mode preference to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isImportant: !task.isImportant } : task
      )
    );
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.isImportant);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div
      className={`h-screen w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
      }`}
    >
      <Navbar
        toggleSidebar={toggleSidebar}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <div className="flex h-full">
        {/* Sidebar */}
        <Sidebar
          tasks={tasks}
          filter={filter}
          setFilter={setFilter}
          isOpen={sidebarOpen}
          darkMode={darkMode}
        />
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          <AddTask addTask={addTask} darkMode={darkMode} />
          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            toggleImportant={toggleImportant}
            filter={filter}
            darkMode={darkMode}
          />
        </main>
      </div>
    </div>
  );
};

export default Home;
