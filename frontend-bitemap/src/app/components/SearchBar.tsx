"use client";

import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  const clearInput = () => {
    setQuery('');
  };

  return (
    <div style={styles.searchBarContainer}>
      <button onClick={handleSearch} style={styles.searchButton}>
        <FaSearch size={22} />
      </button>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        style={styles.input}
      />
      <button onClick={clearInput} style={styles.clearButton}>
        <FaTimes size={18} color="black" />
      </button>
    </div>
  );
};

const styles = {
    searchBarContainer: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #014907',
      padding: '2px',
      backgroundColor: '#FFFFE6',
      width: '80%',
      maxWidth: '952px',
      margin: '20px auto',
    },
    searchButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      fontSize: '18px',
    },
    input: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      padding: '8px',
      backgroundColor: '#FFFFE6',
    },
    clearButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
    },
  };
  

export default SearchBar;
