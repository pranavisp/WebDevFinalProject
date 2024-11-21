"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface HomeMapsNewProps {
  searchedPlace: string;
}

const HomeMapsNew: React.FC<HomeMapsNewProps> = ({ searchedPlace }) => {
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 37.7749, // Default: San Francisco
    lng: -122.4194,
  });
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (searchedPlace) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: searchedPlace }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const location = results[0].geometry.location;
          setMapCenter({ lat: location.lat(), lng: location.lng() });
          setMarkerPosition({ lat: location.lat(), lng: location.lng() });
        } else {
          console.error("Geocoding failed: ", status);
        }
      });
    }
  }, [searchedPlace]);

  const containerStyle = {
    width: "1400px",
    height: "550px",
    marginLeft: "20px",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBip4g_PnevZ9apyfj2jzv8Ff9WpVwXThs">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={12}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default HomeMapsNew;
