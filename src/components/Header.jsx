import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <p>Teknolojik Yemekler</p>
      </Link>
    </header>
  );
};

export default Header;
