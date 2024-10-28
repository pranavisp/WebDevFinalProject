"use client";

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%', // Map will fill the width of its container
  height: '400px' // Adjust height as needed
};

const getRandomCoordinates = () => {
  return {
    lat: Math.random() * 180 - 90,
    lng: Math.random() * 360 - 180
  };
};

const HomeMaps = () => {
  const [center, setCenter] = useState(getRandomCoordinates());
  const [showDynamicMap, setShowDynamicMap] = useState(false); // Toggle for dynamic/static map

  // Google Static Maps URL
  const googleMapsStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=12&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${center.lat},${center.lng}&key=YOUR_GOOGLE_MAPS_API_KEY`;

  // Update center coordinates every time the component mounts
  useEffect(() => {
    setCenter(getRandomCoordinates());
  }, []);

  return (
    <div className="w-1/3 p-4"> {/* Aligning the map to the left side */}
      
      <h2 className="text-center text-lg font-bold mb-4">Map Preview</h2>

      {/* Toggle between static and dynamic map */}
      {!showDynamicMap ? (
        <div>
          {/* Display Static Map Image */}
          <img
            src={googleMapsStaticUrl}
            alt="Static Location Map"
            className="mx-auto border rounded shadow"
          />
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-auto block"
            onClick={() => setShowDynamicMap(true)} // Show dynamic map on click
          >
            Show Interactive Map
          </button>
        </div>
      ) : (
        <LoadScript googleMapsApiKey="AIzaSyBip4gPnevZ9apyfj2jzv8Ff9WpVwXThs">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Add any markers or other map features here */}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default HomeMaps;
