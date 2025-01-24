import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home");  // Redirect to notes page
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-500 mt-2">Log in to your account</p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          <label className="block text-gray-600 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Log in
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
