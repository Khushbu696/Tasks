import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

const styles = {
  nav: {
    padding: '15px',
    backgroundColor: '#eee',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#007bff',
  },
};

export default App;
