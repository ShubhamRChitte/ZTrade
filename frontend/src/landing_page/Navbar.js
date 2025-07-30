import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

  <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
    <div className="container-fluid px-4">
      {/* Brand logo */}
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <i className="fas fa-chart-line logo-icon me-2"></i>
        <span className="logo-text">
          <span className="z-letter">Z</span><span className="trade-text">Trade</span>
        </span>
      </Link>

      {/* Toggler for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu options pushed to right using ms-auto */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" type="button">
              <i className="fa-solid fa-bars"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
</nav>

  );
}

export default Navbar;
