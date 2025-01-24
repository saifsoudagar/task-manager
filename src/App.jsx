import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";  // Import from react-router-dom
import Home from "./page/Home";
import LandingPage from "./page/LandingPage";
import Login from "./page/Login";
import Signup from "./page/Signup";

function App() {
    const [darkMode, setDarkMode] = useState(false);
     useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [darkMode]);
      const toggleDarkMode = () => setDarkMode(!darkMode);

  
  return (
    <div  className={` ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    }`}>
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<LandingPage />} />

      {/* Protected Notes Route */}
      <Route path="/Home" element= {<Home  />} />

      {/* Login and Signup Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes></div>
  );
}

export default App;
