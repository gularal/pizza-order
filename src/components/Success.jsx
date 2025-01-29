import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './styles.css';
const Success = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Header />
      <h1>Teşekkürler! Siparişiniz Alındı.</h1>
      <Footer />
    </div>
  );
};

export default Success;
