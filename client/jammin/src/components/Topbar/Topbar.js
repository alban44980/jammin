import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

function Topbar() {
  return (
    <div className="nav-container">
      <Link to="/" class="linktag">
        <h2>Home</h2>
      </Link>
      <Link to="/createjam" class="otherlinktag">
        <li>Create Jam</li>
      </Link>
      <Link to="/findjam" class="otherlinktag">
        <li>Find Jam</li>
      </Link>

      <ul className="navbar-right">
        <li className="nav-el">Login</li>
        <li className="nav-el">Sign up</li>
      </ul>
    </div>
  );
}

export default Topbar;
