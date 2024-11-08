"use client";

import React, { useState } from 'react';

const LoggedInHeader = () => {
  // State for dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <header className="flex justify-between items-center p-4" style={{ backgroundColor: "#FFFFE6" }}>
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="relative">
          {/* Profile picture as button for dropdown */}
          <img
            src="/profile-pic.png"  
            alt="Profile"
            onClick={toggleDropdown}
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-green-800"
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Recent</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Saved</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <hr style={{ borderColor: "#01490C", borderWidth: "0.5px" }} />
    </>
  );
};

export default LoggedInHeader;
