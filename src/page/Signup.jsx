import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/Home"); 
    } catch (err) {
      setError("Error creating account. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">Sign up</h1>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSignup}>
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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Sign up
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
