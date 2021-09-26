import React from 'react';
import './signup.css';

function SignUp() {
  return (
    <div className="signup-container">
      <h1>Create your account</h1>
      <form className="signup-form">
        <input
          required
          id="firstname"
          type="text"
          placeholder="First name"
          name="firstname"
        />
        <input
          required
          id="lastname"
          type="text"
          placeholder="Last name"
          name="lastname"
        />
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
        <button>JOIN NOW</button>
      </form>
    </div>
  );
}

export default SignUp;

//firstname LastName Email Password RepeatPassword
