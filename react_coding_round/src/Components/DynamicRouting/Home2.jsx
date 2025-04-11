import React from 'react';
import { Link } from 'react-router-dom';

const Home2 = () => {
  return (
    <div style={styles.container}>
      <h2>Products</h2>
      <ul style={styles.list}>
        <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
        <li><Link to="/product/3">Product 3</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center', paddingTop: '50px' },
  list: { listStyle: 'none', padding: 0 },
};

export default Home2;
