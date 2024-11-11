import React from 'react';
import savedIcon from '../images/savedIcon.png';
import RestaurantList from './RestaurantList';
import styles from './Saved.module.css';

interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    image: string;
  }

interface SavedProps {
  restaurants: Restaurant[];
}

const Saved: React.FC<SavedProps> = ({ restaurants }) => {
  return (
    <div className={styles.savedContainer}>
      <div className={styles.savedTitle}>
        <img src={savedIcon.src} alt="Saved Icon" className={styles.iconImage} />
        <span className={styles.savedText}>Saved</span>
      </div>
      <RestaurantList 
       
        restaurants={restaurants} 
      />
    </div>
  );
};

export default Saved;

