import React from "react";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Explorin Solutions</div>
      <div className="nav-links">
        <a href="#">My Saved Jobs</a>
        <span className="notification-icon">🔔</span>
      </div>
    </nav>
  );
}

export default Navbar;
