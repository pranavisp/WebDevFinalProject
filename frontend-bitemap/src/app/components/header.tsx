"use client";

import React, { useState } from 'react';

const Header = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to track whether the user is on the 'Create Account' form or 'Sign In' form
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  // Function to toggle the modal visibility (open/close modal)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
    setIsCreatingAccount(false);  // Reset to 'Sign In' when modal opens/closes
  };

  // Function to switch to 'Create Account' form
  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);  // Set to 'Create Account' mode
  };

  return (
    <>
      {/* Header section with a logo and 'Get Started' button */}
      <header className="flex justify-between items-center p-4" style={{ backgroundColor: "#FFFFE6" }}>
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <div>
          {/* Button to open the modal */}
          <button
            onClick={toggleModal}
            className="border-2 border-green-800 text-black px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-green-100"
          >
            Get Started
          </button>
        </div>
      </header>

      <hr style={{ borderColor: "#01490C", borderWidth: "0.5px" }} />

      {/* Modal content, shown only when isModalOpen is true */}
      {isModalOpen && (
        <>
          {/* Darkened background overlay (clicking this will close the modal) */}
          <div
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>

          {/* Pop-up modal box */}
          <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg w-1/3 relative">
              
              {/* Close button in the upper-right corner of the modal */}
              <div className="flex justify-end">
                <button
                  onClick={toggleModal}
                  className="text-green-600 hover:underline hover:text-red-500"
                >
                  Close
                </button>
              </div>

              {/* Modal Form content */}
              <form >
                {isCreatingAccount ? (
                  <>
                    {/* First Name and Last Name fields, shown only if the user is in 'Create Account' mode */}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-2xl"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-2xl"
                      />
                    </div>
                  </>
                ) : null}

                {/* Email field, used in both 'Sign In' and 'Create Account' modes */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded-2xl"
                  />
                </div>

                {/* Password field */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-2xl"
                  />
                </div>

                {/* Submit button with dynamic text based on 'Create Account' or 'Sign In' mode */}
                <div className="mb-4 flex justify-between items-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 "
                  >
                    {isCreatingAccount ? "Create Account" : "Sign In"}
                  </button>
                </div>
              </form>

              {/* Conditional rendering for 'Create Account' option */}
              {!isCreatingAccount && (
                <>
                  {/* Divider with 'or' between two <hr> lines */}
                  <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300 border-t-2" />
                    <span className="mx-4 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300 border-t-2" />
                  </div>

                  {/* Button to switch to the 'Create Account' form */}
                  <div className="mt-4">
                    <button
                      onClick={handleCreateAccountClick}
                      className="w-full text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-100"
                    >
                      Create an Account
                    </button>

                    {/* Optional 'Continue as Guest' button */}
                    <button
                      className="w-full mt-2 text-gray-600 px-4 py-2 rounded hover:bg-gray-100"
                    >
                      Continue as Guest
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
