"use client";

import HomeMaps from '../components/googlemap_hp';
import React from "react";
import Image from 'next/image'; // Import Image component from Next.js

// Import images
import Image1 from '../images/image1.jpg'; // Adjust the path according to your structure
import Image2 from '../images/image2.jpg'; // Adjust the path according to your structure

// Circle styles
const circleStyle: React.CSSProperties = {
  border: '4px solid #B91748', // Border color
  borderRadius: '50%', // Make it circular
  width: '270px', // Circle size
  height: '270px', // Circle size
  display: 'flex', // Center the image
  justifyContent: 'center', // Center image horizontally
  alignItems: 'center', // Center image vertically
  overflow: 'hidden', // Hide overflow
  position: 'relative', // Required for Image component to work with layout fill
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column', // Stack circles vertically
  alignItems: 'flex-end', // Align items to the right
  marginTop: 50, // Use number instead of string
  marginRight: 80, // Use number instead of string
  gap: 20, // Space between circles
};

const Body: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <HomeMaps />

      {/* Circle Section */}
      <div style={containerStyle}>
        <div style={circleStyle} className="circle1">
          <Image
            src={Image1} // Use the imported image
            alt="Description of Image 1"
            layout="fill" // Fill the parent div
            objectFit="cover" // Cover the area
          />
        </div> {/* First Circle */}

        <div style={{ ...circleStyle, marginRight: '250px' }} className="circle2"> {/* Adjust marginRight for the second circle */}
          <Image
            src={Image2} // Use the imported image
            alt="Description of Image 2"
            layout="fill" // Fill the parent div
            objectFit="cover" // Cover the area
          />
        </div> {/* Second Circle */}
      </div>
    </div>
  );
};

export default Body;
