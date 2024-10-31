"use client";

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%', 
  height: '400px' // Adjust the height as needed
};

// Function to generate random coordinates (optional)
const getRandomCoordinates = () => {
  return {
    lat: Math.random() * 180 - 90,
    lng: Math.random() * 360 - 180
  };
};

const HomeMaps = () => {
  const [center, setCenter] = useState(getRandomCoordinates());

  // Optional: Update center coordinates every time the component mounts
  useEffect(() => {
    setCenter(getRandomCoordinates());
  }, []);

  return (
    <div 
      className="w-1/3 p-4" 
      style={{
        width: '700px',
        border: '4px solid #B91748',
        marginLeft: '60px',
        marginRight: 'auto',
        marginTop: '60px',
      }} 
    >
      <h2 className="text-center text-lg font-bold mb-4">Interactive Map</h2>
      <LoadScript googleMapsApiKey="AIzaSyBip4g_PnevZ9apyfj2jzv8Ff9WpVwXThs">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={() => console.log("Map loaded successfully")} // Log map load status
        >
          {/* Add any markers or other features here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default HomeMaps;
