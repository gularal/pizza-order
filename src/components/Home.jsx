import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './styles.css';

const Home = () => {
  return (
   

    <div style={{ textAlign: 'center', padding: '20px' }}>
       <Header />

      <h1>KOD ACIKTIRIR, PIZZA DOYURUR</h1>
      <Link to="/order">
        <button style={{ fontSize: '20px', padding: '10px 20px', cursor: 'pointer' }}>Sipariş Ver</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
