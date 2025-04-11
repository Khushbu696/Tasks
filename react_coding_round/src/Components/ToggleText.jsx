import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleVisibility} style={styles.button}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p style={styles.text}>Hello World</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  text: {
    marginTop: '20px',
    fontSize: '20px',
  },
};

export default ToggleText;
