import React from 'react';
import './login.css';

function LogIn() {
  return (
    <div className="login-container">
      <form className="login-form">
        <input
          required
          id="email"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          required
          id="password"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button>LOG IN</button>
      </form>
    </div>
  );
}

export default LogIn;
