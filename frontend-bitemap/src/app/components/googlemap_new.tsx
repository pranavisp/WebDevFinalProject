// "use client";
// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// interface HomeMapsNewProps {
//   searchedPlace: string;
// }

// const HomeMapsNew: React.FC<HomeMapsNewProps> = ({ searchedPlace }) => {
//   const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
//     lat: 37.7749, // Default: San Francisco
//     lng: -122.4194,
//   });
//   const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);

//   useEffect(() => {
//     if (searchedPlace) {
//       const geocoder = new google.maps.Geocoder();
//       geocoder.geocode({ address: searchedPlace }, (results, status) => {
//         if (status === "OK" && results && results[0]) {
//           const location = results[0].geometry.location;
//           setMapCenter({ lat: location.lat(), lng: location.lng() });
//           setMarkerPosition({ lat: location.lat(), lng: location.lng() });
//         } else {
//           console.error("Geocoding failed: ", status);
//         }
//       });
//     }
//   }, [searchedPlace]);

//   const containerStyle = {
//     width: "1400px",
//     height: "550px",
//     marginLeft: "20px",
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBip4g_PnevZ9apyfj2jzv8Ff9WpVwXThs">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={mapCenter}
//         zoom={12}
//       >
//         {markerPosition && <Marker position={markerPosition} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default HomeMapsNew;



// "use client";
// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// interface HomeMapsNewProps {
//   searchedPlace: string;
// }

// const libraries = ["places"]; // Ensure Places API is loaded

// const HomeMapsNew: React.FC<HomeMapsNewProps> = ({ searchedPlace }) => {
//   const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
//     lat: 37.7749, // Default to San Francisco
//     lng: -122.4194,
//   });
//   const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
//   const [restaurants, setRestaurants] = useState<{ name: string; address: string }[]>([]);

//   // Geocode the searched place to get lat and lng
//   useEffect(() => {
//     if (searchedPlace) {
//       const geocoder = new google.maps.Geocoder();
//       geocoder.geocode({ address: searchedPlace }, (results, status) => {
//         if (status === "OK" && results && results[0]) {
//           const location = results[0].geometry.location;
//           setMapCenter({ lat: location.lat(), lng: location.lng() });
//           setMarkerPosition({ lat: location.lat(), lng: location.lng() });
//         } else {
//           console.error("Geocoding failed:", status);
//         }
//       });
//     }
//   }, [searchedPlace]); // Trigger re-run whenever searchedPlace changes

//   // Fetch nearby restaurants using Places API
//   const fetchRestaurants = (lat: number, lng: number) => {
//     if (typeof google !== "undefined" && google.maps && google.maps.places) {
//       const map = new google.maps.Map(document.createElement("div"));
//       const service = new google.maps.places.PlacesService(map);
//       const request = {
//         location: new google.maps.LatLng(lat, lng),
//         radius: 5000, // 5 km radius
//         type: "restaurant", // We want restaurants
//       };

//       // Making the Places API request for nearby restaurants
//       service.nearbySearch(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//           const restaurantList = results.slice(0, 3).map((place) => ({
//             name: place.name || "Unknown Name",
//             address: place.vicinity || "Unknown Address",
//           }));
//           setRestaurants(restaurantList);
//         } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
//           setRestaurants([]);
//         } else {
//           console.error("Places API Error:", status, results);
//         }
//       });
//     } else {
//       console.error("Google Maps is not available.");
//     }
//   };

//   const containerStyle = {
//     width: "65%",
//     height: "550px",
//     marginLeft: "20px",
//     float: "left",
//   };

//   const listStyle = {
//     width: "30%",
//     float: "right",
//     padding: "20px",
//     backgroundColor: "#f8f8f8",
//     borderLeft: "1px solid #ccc",
//     height: "550px",
//     overflowY: "auto",
//   };

//   useEffect(() => {
//     if (mapCenter.lat && mapCenter.lng) {
//       fetchRestaurants(mapCenter.lat, mapCenter.lng);
//     }
//   }, [mapCenter]); // Trigger fetchRestaurants when mapCenter updates

//   return (
//     <div style={{ display: "flex" }}>
//       <LoadScript googleMapsApiKey="AIzaSyBip4g_PnevZ9apyfj2jzv8Ff9WpVwXThs" libraries={libraries}>
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={mapCenter}
//           zoom={12}
//         >
//           {markerPosition && <Marker position={markerPosition} />}
//         </GoogleMap>
//       </LoadScript>
//       <div style={listStyle}>
//         <h3>Nearby Restaurants</h3>
//         {restaurants.length > 0 ? (
//           <ul>
//             {restaurants.map((restaurant, index) => (
//               <li key={index}>
//                 <strong>{restaurant.name}</strong>
//                 <p>{restaurant.address}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No nearby restaurants found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

interface HomeMapsNewProps {
  searchedPlace: string;
}

const libraries = ["places"]; // Ensure Places API is loaded

const HomeMapsNew: React.FC<HomeMapsNewProps> = ({ searchedPlace }) => {
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 37.7749, // Default to San Francisco
    lng: -122.4194,
  });
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [restaurants, setRestaurants] = useState<
    { name: string; address: string; photo?: string }[]
  >([]);
  const [savedPlaces, setSavedPlaces] = useState<
    { name: string; address: string; photo?: string }[]
  >([]);

  // Geocode the searched place to get lat and lng
  useEffect(() => {
    const geocodePlace = async () => {
      if (searchedPlace && typeof google !== "undefined") {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: searchedPlace }, (results, status) => {
          if (status === "OK" && results && results[0]) {
            const location = results[0].geometry.location;
            setMapCenter({ lat: location.lat(), lng: location.lng() });
            setMarkerPosition({ lat: location.lat(), lng: location.lng() });
          } else {
            console.error("Geocoding failed:", status);
          }
        });
      }
    };
    geocodePlace();
  }, [searchedPlace]);

  // Fetch nearby restaurants using Places API
  const fetchRestaurants = async (lat: number, lng: number) => {
    if (typeof google !== "undefined") {
      const map = new google.maps.Map(document.createElement("div"));
      const service = new google.maps.places.PlacesService(map);
      const request = {
        location: new google.maps.LatLng(lat, lng),
        radius: 5000,
        type: "restaurant",
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const restaurantList = results.slice(0, 5).map((place) => ({
            name: place.name || "Unknown Name",
            address: place.vicinity || "Unknown Address",
            photo: place.photos
              ? place.photos[0].getUrl({ maxWidth: 100, maxHeight: 100 })
              : undefined,
          }));
          setRestaurants(restaurantList);
        } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
          setRestaurants([]);
        } else {
          console.error("Places API Error:", status, results);
        }
      });
    } else {
      console.error("Google Maps is not available.");
    }
  };

  const containerStyle = {
    width: "65%",
    height: "550px",
    float: "left",
  };

  const listStyle = {
    width: "30%",
    float: "right",
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderLeft: "1px solid #ccc",
    height: "550px",
    overflowY: "auto",
  };

  useEffect(() => {
    if (mapCenter.lat && mapCenter.lng) {
      fetchRestaurants(mapCenter.lat, mapCenter.lng);
    }
  }, [mapCenter]);

  const handleSave = (restaurant: { name: string; address: string; photo?: string }) => {
    setSavedPlaces((prev) =>
      prev.some((place) => place.name === restaurant.name)
        ? prev.filter((place) => place.name !== restaurant.name)
        : [...prev, restaurant]
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <LoadScript googleMapsApiKey="AIzaSyBip4g_PnevZ9apyfj2jzv8Ff9WpVwXThs" libraries={libraries}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={12}
        >
          {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>
      </LoadScript>
      <div style={listStyle}>
        <h3>Nearby Restaurants</h3>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
            >
              {restaurant.photo ? (
                <img
                  src={restaurant.photo}
                  alt="Restaurant"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "15px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#ccc",
                    marginRight: "15px",
                  }}
                />
              )}
              <div style={{ flex: 1 }}>
                <strong>{restaurant.name}</strong>
                <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>
                  {restaurant.address}
                </p>
              </div>
              <button
                onClick={() => handleSave(restaurant)}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: savedPlaces.some((place) => place.name === restaurant.name)
                    ? "#7ADA5C"
                    : "#ccc",
                }}
              >
                {savedPlaces.some((place) => place.name === restaurant.name) ? (
                  <FaBookmark />
                ) : (
                  <FaRegBookmark />
                )}
              </button>
            </div>
          ))
        ) : (
          <p>No nearby restaurants found.</p>
        )}

        {savedPlaces.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h3>Saved Places</h3>
            <ul>
              {savedPlaces.map((place, index) => (
                <li key={index}>
                  <strong>{place.name}</strong> - {place.address}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeMapsNew;



// "use client";
// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// interface HomeMapsNewProps {
//   searchedPlace: string;
// }

// const libraries = ["places"]; // Ensure Places API is loaded

// const HomeMapsNew: React.FC<HomeMapsNewProps> = ({ searchedPlace }) => {
//   const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
//     lat: 37.7749, // Default to San Francisco
//     lng: -122.4194,
//   });
//   const [restaurants, setRestaurants] = useState<any[]>([]); // Store restaurants with extra data like images, IDs, and saved status

//   // Geocode the searched place to get lat and lng
//   useEffect(() => {
//     if (searchedPlace) {
//       const geocoder = new google.maps.Geocoder();
//       geocoder.geocode({ address: searchedPlace }, (results, status) => {
//         if (status === "OK" && results && results[0]) {
//           const location = results[0].geometry.location;
//           setMapCenter({ lat: location.lat(), lng: location.lng() });
//         } else {
//           console.error("Geocoding failed:", status);
//         }
//       });
//     }
//   }, [searchedPlace]);

//   // Fetch nearby restaurants using Places API
//   const fetchRestaurants = (lat: number, lng: number) => {
//     if (typeof google !== "undefined" && google.maps && google.maps.places) {
//       const map = new google.maps.Map(document.createElement("div"));
//       const service = new google.maps.places.PlacesService(map);
//       const request = {
//         location: new google.maps.LatLng(lat, lng),
//         radius: 5000,
//         type: "restaurant",
//       };

//       service.nearbySearch(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//           const restaurantList = results.map((place, index) => ({
//             id: index,
//             name: place.name || "Unknown Name",
//             address: place.vicinity || "Unknown Address",
//             image: place.photos
//               ? place.photos[0].getUrl({ maxWidth: 100, maxHeight: 100 })
//               : null,
//             location: place.geometry.location,
//             saved: false, // Initialize as not saved
//           }));
//           setRestaurants(restaurantList);
//         } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
//           setRestaurants([]);
//         } else {
//           console.error("Places API Error:", status, results);
//         }
//       });
//     }
//   };

//   useEffect(() => {
//     if (mapCenter.lat && mapCenter.lng) {
//       fetchRestaurants(mapCenter.lat, mapCenter.lng);
//     }
//   }, [mapCenter]);

//   // Toggle the saved state of a restaurant
//   const toggleSaveRestaurant = (id: number) => {
//     setRestaurants((prevRestaurants) =>
//       prevRestaurants.map((restaurant) =>
//         restaurant.id === id
//           ? { ...restaurant, saved: !restaurant.saved }
//           : restaurant
//       )
//     );
//   };

//   const containerStyle = {
//     width: "65%",
//     height: "550px",
//     marginLeft: "20px",
//     float: "left",
//   };

//   const listStyle = {
//     width: "30%",
//     float: "right",
//     padding: "20px",
//     backgroundColor: "#f8f8f8",
//     borderLeft: "1px solid #ccc",
//     height: "550px",
//     overflowY: "auto",
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <LoadScript googleMapsApiKey="AIzaSyBip4g_PnevZ9apyfj2jzv8Ff9WpVwXThs" libraries={libraries}>
//         <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={12}>
//           {restaurants.map((restaurant) => (
//             <Marker key={restaurant.id} position={restaurant.location} />
//           ))}
//         </GoogleMap>
//       </LoadScript>

//       <div style={listStyle}>
//         <h3>Nearby Restaurants</h3>
//         {restaurants.length > 0 ? (
//           <ul>
//             {restaurants.map((restaurant) => (
//               <li
//                 key={restaurant.id}
//                 style={{
//                   display: "flex",
//                   marginBottom: "15px",
//                   padding: "10px",
//                   backgroundColor: "#fff",
//                   borderRadius: "8px",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                   alignItems: "center",
//                 }}
//               >
//                 <div style={{ marginRight: "15px" }}>
//                   {restaurant.image ? (
//                     <img
//                       src={restaurant.image}
//                       alt={restaurant.name}
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         borderRadius: "50%",
//                       }}
//                     />
//                   ) : (
//                     <div
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         backgroundColor: "#ccc",
//                         borderRadius: "50%",
//                       }}
//                     />
//                   )}
//                 </div>

//                 <div style={{ flex: 1 }}>
//                   <strong>{restaurant.name}</strong>
//                   <p>{restaurant.address}</p>
//                 </div>

//                 <button
//                   onClick={() => toggleSaveRestaurant(restaurant.id)}
//                   style={{
//                     backgroundColor: restaurant.saved ? "#28a745" : "#007bff", // Green if saved, Blue otherwise
//                     color: "#fff",
//                     padding: "5px 10px",
//                     borderRadius: "5px",
//                     border: "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {restaurant.saved ? "Saved" : "Save"}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No nearby restaurants found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeMapsNew;
