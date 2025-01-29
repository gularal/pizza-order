import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Teknolojik Yemekler</h2>
          <p>34 Londonderry Road, İstanbul Türkiye</p>
          <p>Email: aciktim@teknolojikyemekler.com</p>
          <p>Telefon: +90 218 123 45 67</p>
        </div>
        <div className="footer-menu">
          <h3>Hot Menu</h3>
          <ul>
            <li><Link to="/order">Terminal Pizza</Link></li>
            <li><Link to="/order">5 Kişilik Hackathon Pizza</Link></li>
            <li><Link to="/order">useEffect Tavuklu Pizza</Link></li>
            <li><Link to="/order">Beyaz Console Frosty</Link></li>
            <li><Link to="/order">Position Absolute Acı Burger</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Instagram</h3>
          <div className="social-images">
            <img src="/images/pizza1.jpg" alt="Pizza" />
            <img src="/images/pizza2.jpg" alt="Pizza" />
            <img src="/images/burger1.jpg" alt="Burger" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
