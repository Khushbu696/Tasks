import React, { useState } from 'react';

const LiveSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emma',
    'Frank',
    'Grace',
    'Hannah',
    'Ivy',
    'Jack',
  ];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Live Search Filter</h2>
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <ul style={styles.list}>
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <li key={index} style={styles.listItem}>{name}</li>
          ))
        ) : (
          <li style={styles.noResult}>No results found</li>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    padding: '8px 0',
    fontSize: '18px',
    borderBottom: '1px solid #ddd',
  },
  noResult: {
    fontSize: '16px',
    color: '#888',
  },
};

export default LiveSearch;
