import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div style={styles.container}>
      <h2>Product Detail</h2>
      <p>Product ID: <strong>{id}</strong></p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default ProductDetail;
