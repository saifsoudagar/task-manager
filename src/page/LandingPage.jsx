import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#212121] h-screen flex justify-center items-center px-4 sm:px-8">
      <div className="w-full max-w-lg text-center space-y-6">
        {/* Header */}
        <h1 className="text-[32px] font-bold text-white text-center animate-float sm:text-[28px] md:text-[32px]">
          The simplest way to keep notes <br />
          <span className="text-[16px] font-medium text-gray-400 sm:text-sm">
            All your notes, synced on all your devices. Get notes now for iOS,
            Android, Mac, Windows, Linux, or in your browser.
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#3361cc] hover:bg-blue-600 active:scale-95 active:bg-blue-700 transition-all duration-200 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-blue-500/50"
          >
            Create notes now
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
