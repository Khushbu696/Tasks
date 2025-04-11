import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme class to body
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#121212';
  }, [darkMode]);

  return (
    <div style={styles.container}>
      <h2>Theme Toggle</h2>
      <button onClick={() => setDarkMode(!darkMode)} style={styles.button}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p style={styles.text}>
        The current theme is <strong>{darkMode ? 'Dark' : 'Light'}</strong> Mode.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    transition: 'all 0.3s ease',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  text: {
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default ThemeToggle;
