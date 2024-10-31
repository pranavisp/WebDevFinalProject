"use client";

import React from 'react';

const LocationForm = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-1/3 relative">
        <div className="flex justify-end">
          <button className="text-green-600 hover:underline hover:text-red-500">
            Close
          </button>
        </div>

        <form>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Enter your current location.
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Address</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-2xl" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">City</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded-2xl" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">State</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded-2xl" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Zip Code</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-2xl" />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationForm;
