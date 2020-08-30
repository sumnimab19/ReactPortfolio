import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function Header() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-info flex-column flex-md-row">
      <div>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/Portfolio">Portfolio</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;