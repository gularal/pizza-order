import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>KOD ACIKTIRIR, PIZZA DOYURUR</h1>
      <Link to="/order">
        <button style={{ fontSize: '20px', padding: '10px 20px', cursor: 'pointer' }}>Sipariş Ver</button>
      </Link>
    </div>
  );
};

export default Home;
