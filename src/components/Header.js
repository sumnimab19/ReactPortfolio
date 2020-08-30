import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="navbar">
      <h1>Sumnima Bhandari</h1>
      <div>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/Portfolio">Portfolio</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;