import React, { useState } from 'react';

const CharacterCountTextarea = () => {
  const [text, setText] = useState('');

  return (
    <div style={styles.container}>
      <h2>Character Count</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={styles.textarea}
        rows={5}
      />
      <p style={styles.counter}>Characters: {text.length}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  counter: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#555',
  },
};

export default CharacterCountTextarea;
