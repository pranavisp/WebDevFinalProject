// import React from 'react';
// import savedIcon from '../images/savedIcon.png';
// import RestaurantList from './RestaurantList';
// import styles from './Saved.module.css';

// interface Restaurant {
//     id: number;
//     name: string;
//     cuisine: string;
//     rating: number;
//     image: string;
//   }

// interface SavedProps {
//   restaurants: Restaurant[];
// }

// const Saved: React.FC<SavedProps> = ({ restaurants }) => {
//   return (
//     <div className={styles.savedContainer}>
//       <div className={styles.savedTitle}>
//         <img src={savedIcon.src} alt="Saved Icon" className={styles.iconImage} />
//         <span className={styles.savedText}>Saved</span>
//       </div>
//       <RestaurantList 
       
//         restaurants={restaurants} 
//       />
//     </div>
//   );
// };

// export default Saved;

import React from "react";
import styles from "./Saved.module.css";

interface Restaurant {
  id: number;
  name: string;
  cuisine?: string;
  address: string;
  rating?: number;
  image?: string;
}

interface SavedProps {
  restaurants: Restaurant[];
}

const Saved: React.FC<SavedProps> = ({ restaurants }) => {
  return (
    <div className={styles.savedContainer}>
      <h2>Saved Restaurants</h2>
      {restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className={styles.restaurantBox}
            style={{ display: "flex", marginBottom: "15px" }}
          >
            {restaurant.image ? (
              <img
                src={restaurant.image}
                alt={restaurant.name}
                style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px" }}
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
            <div>
              <strong>{restaurant.name}</strong>
              <p>{restaurant.address}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No saved restaurants yet.</p>
      )}
    </div>
  );
};

export default Saved;


